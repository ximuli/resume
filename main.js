setTimeout(function() {
    siteWelcome.classList.remove('active')
}, 500)

//页面滚动改变导航栏样式
window.onscroll = function() {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    }
    else {
        topNavBar.classList.remove('sticky')
    }
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

        let n = 25 //一共动多少次
        let duration = 500 / n //多少时间动一次
        let currentTop = window.scrollY
        let targetTop = top - 80
        let distance = (targetTop - currentTop) / n
        let i = 0
        let id = setInterval( function () {
            if (i === n) {
                window.clearInterval(id)
                return
            }
            i += 1
            window.scrollTo(0, currentTop + distance * i)
        },duration)   
    }
}