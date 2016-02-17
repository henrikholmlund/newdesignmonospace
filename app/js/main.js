/**
 * Created by henrikholmlund on 2016-02-12.
 */


var s = skrollr.init();

var aboutToggle = document.getElementById("About-toggle");
var menuToggle = document.getElementById("Menu-toggle");


var last_known_scroll_position = 0;
var ticking = false;

function navToggle (scroll_pos) {
    // changes the links for the navbar

    if(last_known_scroll_position >= 500){
        aboutToggle.innerHTML = "<a class='scroll' href='#Portfolio-top'>Portfolio</a>";
        menuToggle.innerHTML = "<a class='scroll' href='#Top'>&uarr; Top</a>";
    }
    else if (last_known_scroll_position >= 800) {

        aboutToggle.innerHTML = "<a class='scroll' href='#Contact-top'>Contact</a>";
        menuToggle.innerHTML = "<a class='scroll' href='#Top'>&uarr; Top</a>";
    }

    else {
        aboutToggle.innerHTML = "<a class='scroll' href='#About-top'>About</a>";
        menuToggle.innerHTML = "<a class='scroll' href='#Top'>Menu</a>";
    }
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            navToggle (last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});

$(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});


/*
//other version of same jquery code for smooth scroll

$(document).ready(function() {


    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }

    });
});  */






