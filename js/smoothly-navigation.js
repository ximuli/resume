!function() {
    //点击导航链接滚动至相应位置
    let aTags = document.querySelectorAll('.topNavBar nav > ul > li > a')

    /* tween 代码 */
    // Setup the animation loop.
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    /* tween 代码 END */

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

}.call()


