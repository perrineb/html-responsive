
(function () {
    "use strict";

    var $  = jQuery.noConflict();


    $(document).ready(function() {  
       
        $('.diapos').imagesLoaded( function() {

            $('.diapos').masonry({
                itemSelector: '.diapo'
            });

        });

    });


    // FUNCTIONS


}(jQuery));