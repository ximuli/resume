var APP_ID = '5vrcc0vW0KdRm2JVrQc3CViF-gzGzoHsz';
var APP_KEY = '2WWUpawSiPNJCq9xDxFUqciL';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message')
query.find()
    .then(
    	function (messages) {
    		
		    let array = messages.map((item) => item.attributes)
		    
		    array.forEach((item) => {
		        let li = document.createElement('li')
		    	li.innerText = `${item.name}说: ${item.content}`
		    	let messageList = document.querySelector('#messageList')
		    	messageList.appendChild(li)
		    })
        }
    )


let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit', function(e) {
	e.preventDefault()
	let name = myForm.querySelector('input[name=name]').value
	let content = myForm.querySelector('input[name=content]').value
	var Message = AV.Object.extend('Message');
	var messgae = new Message();
	messgae.save({
		'name':name,
        'content': content
    }).then(function(object) {
        let li = document.createElement('li')
    	li.innerText = `${object.attributes.name}说: ${object.attributes.content}`
    	let messageList = document.querySelector('#messageList')
    	messageList.appendChild(li)
    	myForm.querySelector('input[name=content]').value = ''
        console.log(object)
    })
})






// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })