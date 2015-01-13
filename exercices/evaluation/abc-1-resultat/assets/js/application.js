
(function () {
    "use strict";

    var $  = jQuery.noConflict();


    $(document).ready(function() {  
       

        // Navigation
        
        // ajoute un lien pour appeler le menu
        $('.main-nav').prepend('<a href="#main-menu" class="toggle-menu">Menu</a>');

        // toggle la classe qui rend le menu visible quand on clique sur ce lien
        $('.toggle-menu').on('click', function(event) {
            event.preventDefault();

            //.main-nav
            $(this).parent().toggleClass('menu-opened');
        })


    });


    // FUNCTIONS


}(jQuery));