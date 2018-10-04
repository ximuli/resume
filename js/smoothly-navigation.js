!function() {
    var view = document.querySelector('.topNavBar nav')
    var controller = {
        view: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element) {
            let top = element.offsetTop  // 元素到页面顶部的距离
            let currentTop = window.scrollY
            let targetTop = top - 100
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
        },
        bindEvents: function() {
            let aTags = this.view.querySelectorAll('.topNavBar nav > ul > li > a[href^="#"]') //只选取 href 属性以 # 开头的 a 标签
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick =  (x) => {
                    x.preventDefault()  //阻止 a 链接的默认跳转动作
                    let a = x.currentTarget
                    let href = a.getAttribute('href')  //  a.href 同样可以获取到地址，但是这样获取到的地址带有浏览器帮忙加的协议
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        }
    }

    controller.init(view)

}.call()
