$(".slider").click(() => {
  $("body").toggleClass("body-light body-dark")
  $(".main-heading").toggleClass("main-heading-light main-heading-dark")
  $(".main-subheading").toggleClass("main-subheading-light main-subheading-dark")
  $("footer").toggleClass("footer-light footer-dark")
  $(".footer-title").toggleClass("footer-title-light footer-title-dark")
  $(".footer-body").toggleClass("footer-body-light foote-body-dark")
  $(".header-link").toggleClass("header-link-dark")
  $(".selected").toggleClass("selected-dark")
  $(".about-para").toggleClass("about-para-dark")
  $(".about-heading").toggleClass("about-heading-dark")
  $(".about-subheading").toggleClass("about-subheading-dark")
  $(".skill-title").toggleClass("skill-title-dark")
  $(".work-heading").toggleClass("work-heading-dark")
  $(".project-title-p").toggleClass("project-title-p-dark")
  $(".project-description-p").toggleClass("project-description-p-dark")
})

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('job');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".job > .wrap { border-right: 0.125rem solid #222 }";
    document.body.appendChild(css);
  };