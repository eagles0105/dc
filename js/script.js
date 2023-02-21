<script>
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

    AOS.init(
            {
                offset: 140,
                duration: 700,
                easing: 'ease'
            }
        );

// Owlcarousel   
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

let mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    mybutton.addEventListener("click", backToTop);
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
</script>