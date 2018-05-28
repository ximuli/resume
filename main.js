setTimeout( function() {
    yyy()
}, 300)


//在一开始的时候就给元素设置偏离
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

// setTimeout(function() {
//     siteWelcome.classList.remove('active')
// }, 500)





//页面滚动改变导航栏样式
window.onscroll = function() {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    }
    else {
        topNavBar.classList.remove('sticky')
    }

    yyy()

}

function yyy() {
    //滚动到指定位置时自动高亮导航栏
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    //minIndex 就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')  //滚动到指定位置时让偏离元素恢复原始位置
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]') // a[href="#sitework"]
    let li = a.parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
        brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

//导航 鼠标移入展现二级菜单
let liTags = document.querySelectorAll('.topNavBar nav > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }

    liTags[i].onmouseleave = function(x) {
        x.currentTarget.classList.remove('active')
    }
}

//点击导航链接滚动至相应位置
let aTags = document.querySelectorAll('.topNavBar nav > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()  //阻止 a 链接的默认跳转动作
        //let a = x.currentTarget
        //let href = a.getAttribute('href')  //  a.href 同样可以获取到地址，但是这样获取到的地址带有浏览器帮忙加的协议
        //let element = document.querySelector(href)
        //let top = element.offsetTop  // 元素到页面顶部的距离
        //以上四句可以用下面这一句来写
        let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = { y: currentTop }; // Start at (0, 0)
        var t = Math.abs((s/100)*300)
        if (t>500) { t = 500 }
        var tween = new TWEEN.Tween(coords) 
            .to({ y: targetTop }, )
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                window.scrollTo(0,coords.y);
            })
            .start();

    }
}

/* tween 代码 */
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

/* tween 代码 END */


