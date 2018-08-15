!function () {
    //在一开始的时候就给元素设置偏离
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    setTimeout( function() {
        findClosestAndRemoveOffset()
    }, 300)

    window.addEventListener('scroll', function() {
        findClosestAndRemoveOffset()
    })



    // helper 
    function findClosestAndRemoveOffset() {
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

}.call()