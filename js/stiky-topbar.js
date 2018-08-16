!function() {
	var view = document.querySelector('#topNavBar')
    var controller = {
    	view: null,
    	init: function(view) {
	        this.view = view
	        this.bindEvents()
	        // this.bindEvents.call(this)
	    },
	    bindEvents: function() {
            var view = this.view
            window.addEventListener('scroll', function() {
			    if (window.scrollY > 0) {
			        this.active()
			    }
			    else {
			        this.deactive()
			    }
			}.bind(this))
	    },
	    active: function() {
            view.classList.add('sticky')
	    },
	    deactive: function() {
            view.classList.remove('sticky')
	    }
    }

    controller.init(view)
    // controller.init.call(controller,view)

}.call()
