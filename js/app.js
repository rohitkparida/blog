// document.body.style.backgroundColor = localStorage.getItem('bg');
// document.body.style.color = localStorage.getItem('cc');

// function darker() {
//     if (localStorage.getItem('bg') === 'rgb(255, 255, 255)') {
//
//         localStorage.setItem('bg', 'rgb(6, 23, 37)');
//         localStorage.setItem('cc', '#777');
//
//
//     } else if (localStorage.getItem('bg') == null || undefined) {
//         localStorage.setItem('bg', 'rgb(6, 23, 37)');
//         localStorage.setItem('cc', '#777');
//
//     } else if (localStorage.getItem('bg') === 'rgb(6, 23, 37)') {
//
//         localStorage.setItem('bg', 'rgb(255, 255, 255)');
//         localStorage.setItem('cc', '#333');
//
//
//     }
//
//     document.body.style.backgroundColor = localStorage.getItem('bg');
//     document.body.style.color = localStorage.getItem('cc');
//
// }

// if is disabled
// local storage set theme is light
// else
//     theme is dark
//
// if localStorage theme is light
// $("#x").prop("disabled", false);
// else
//     $("#x").prop("disabled", true);


//anchor-for-scrolling-------------------------------------
// $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 700);
//             return false;
//         }
//     }
// });
//



// register-visit----------------------------------

// if (localStorage.getItem('user') === 'visited') {
//
//     $("#visit").prop("disabled", true);
//
// } else if (localStorage.getItem('user') === 'new') {
//
//     $("#visit").prop("disabled", false);
//
// }
//
//
// var isDisabled = $("#visit").prop('disabled');
// if (isDisabled) {
//     localStorage.setItem('user', 'visited');
// } else {
//     localStorage.setItem('user', 'new');
// }
//
// if (localStorage.getItem('user') === 'visited') {
//
//     $("#visit").prop("disabled", true);
//
// } else if (localStorage.getItem('user') === 'new') {
//
//     $("#visit").prop("disabled", false);
//
// }
//
// $(document).ready(function() {
//     localStorage.setItem('user', 'visited');
// });

// visit------------------------------------------------------
//
// if (localStorage.getItem('user') === 'visited') {
//
//     $("#visit").prop("disabled", false);
//
// } else {
//
//     localStorage.setItem('user', 'visited');
//
// }




//thmeeeeeeeee--------------------------------------

if (localStorage.getItem('theme') === 'light') {

    $("#theme").prop("disabled", true);

} else if (localStorage.getItem('theme') === 'dark') {

    $("#theme").prop("disabled", false);

}

var isDisabled = $("#theme").prop('disabled');
if (isDisabled) {
    localStorage.setItem('theme', 'light');
} else {
    localStorage.setItem('theme', 'dark');
}

function darker() {
    if (localStorage.getItem('theme') === 'light') {

        $("#theme").prop("disabled", false);
        localStorage.setItem('theme', 'dark');

    } else if (localStorage.getItem('theme') === 'dark') {

        $("#theme").prop("disabled", true);
        localStorage.setItem('theme', 'light');

    }
}
// scrolllllll-----------------------------------

$(function() {
    var appbar = $(".appbar");
    var content = $(".content");
    var subContent = $(".sub-content");
    var fab = $(".fab");
    $(window).scroll(function() {
        var winscroll = $(window).scrollTop();

        if (winscroll > 0) {
            $('#raised').css('opacity', '1');
        } else {
            $('#raised').css('opacity', '0');
        }
        if (winscroll > window.innerHeight * 2) {
            fab.addClass("appear");
        } else {
            fab.removeClass("appear");
        }
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.height = scrolled + "%";
    });
});



var tagswidth = $('#tags').width();
var tagsscroll = $('#tags').scrollLeft();
var scrollbtn = $('.scroll-btn>svg');
// alert(tagsscroll)
console.log(tagswidth);
if (tagsscroll >= 50) {
    $('#scrollL').css('display', 'block');
    $('#scrollL').css('opacity', '1');
} else {
    $('#scrollL').css('display', 'none');
    $('#scrollL').css('opacity', '0');
}



// $(".info").each(function(i) {
//     count = $(this).find(".postCount").text();
//     $(this).find(".postCount").text(count * 2)
// });

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {
//     myFunction()
// };







function scrollR() {
    document.getElementById("tags").scrollBy(60, 0);
}

function scrollL() {
    document.getElementById("tags").scrollBy(-60, 0);
}




// progress++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(window).scroll(function() {

});


// Registering ServiceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}