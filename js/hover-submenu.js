!function() {
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

}.call()
