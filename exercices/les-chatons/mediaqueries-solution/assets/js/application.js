
(function () {
    "use strict";

    var $  = jQuery.noConflict();


    $(document).ready(function() {  
       
        $('.diapos').imagesLoaded( function() {

            // Liste d'images
            $('.diapos').masonry({
                itemSelector: '.diapo'
            });


        });

    });


    // FUNCTIONS


}(jQuery));