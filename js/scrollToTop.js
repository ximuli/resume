!function() {
  var view = document.querySelector('#scrollToTop > button')
  var controller = {
    view: null,
    init: function(view) {
      this.view = view
      this.initAnimation()
      this.bindEvents()
    },
    initAnimation: function() {
      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
    },
    bindEvents: function() {
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
          this.view.classList.add('show')
          this.view.classList.remove('hide')
        }
        else {
          this.view.classList.add('hide')
          this.view.classList.remove('show')
        }
      })

      this.view.addEventListener('click', function() {
        var coords = { y: document.documentElement.scrollTop }
        var tween = new TWEEN.Tween(coords)
            .to({ y: 0 }, )
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                window.scrollTo(0,coords.y);
            })
            .start();
      })
    }
  }
  
  controller.init.call(controller, view)
}.call()
