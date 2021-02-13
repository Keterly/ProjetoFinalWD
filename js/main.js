(function(){
    var $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
    var menu = new Menu({
        container: '.header_nav',
        btnToggle: '.header_btnMenu',
        widthEnabled: 1024
    })

    var carouselImg = new Carousel({
        container: '.laptop-slider .slideshow',
        items: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        items: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()