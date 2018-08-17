!function(){
	var view = document.querySelector('section.messageBoard')
    
    var model = {
    	init: function() {
    		var APP_ID = '5vrcc0vW0KdRm2JVrQc3CViF-gzGzoHsz'
			var APP_KEY = '2WWUpawSiPNJCq9xDxFUqciL'
			AV.init({ appId: APP_ID, appKey: APP_KEY })
    	},
    	//获取数据
    	fetch: function() {
            var query = new AV.Query('Message')
			return query.find()  // Promise 对象
    	},
    	//创建数据
    	save: function(name, content) {
            var Message = AV.Object.extend('Message');
			var messgae = new Message();
			return messgae.save({  //返回 Promise 对象
				'name':name,
		        'content': content
		    })
    	}

    }

    var controller = {
    	view: null,
    	model: null,
    	messageList: null,
    	init: function(view, model) {
    		this.view = view
    		this.model = model

    		this.messageList = view.querySelector('#messageList')
    		this.form = view.querySelector('#postMessage')
    		this.model.init()
    		this.loadMessages()
    		this.bindEvents()
    	},
    	loadMessages: function() {
		    this.model.fetch().then(
		    	(messages) => {
				    let array = messages.map((item) => item.attributes)
				    array.forEach((item) => {
				        let li = document.createElement('li')
				    	li.innerText = `${item.name}说: ${item.content}`
				    	this.messageList.appendChild(li)
				    })
		        }
		    )
    	},
    	bindEvents: function() {
			this.form.addEventListener('submit', (e) => {
				e.preventDefault()
				this.saveMessage()
			})
    	},
    	saveMessage: function() {
    		let myForm = this.form
    		let name = myForm.querySelector('input[name=name]').value
			let content = myForm.querySelector('input[name=content]').value
			this.model.save(name, content).then(function(object) {
		        let li = document.createElement('li')
		    	li.innerText = `${object.attributes.name}说: ${object.attributes.content}`
		    	let messageList = document.querySelector('#messageList')
		    	messageList.appendChild(li)
		    	myForm.querySelector('input[name=content]').value = ''
		        console.log(object)
		    })
    	}
    }

    controller.init(view, model)

}.call()
