
(function () {
    "use strict";

    var $  = jQuery.noConflict();

    // elements
    var $diaporama = $('.diaporama');

    // variables
    var diaporamaCurrentImageIndex = 0;


    $(document).ready(function() {  

        // initialisation du diaporama
        diaporamaInit();

    });


    // FUNCTIONS

    function diaporamaInit() {

        // positonnement initial de toutes les li
        $('.diaporama__image', $diaporama).each( function(index) {
            $(this).css({
                'left': ((index - diaporamaCurrentImageIndex) * 100) + '%'
            });
        });


        // Evenements

        // click sur précédent / suivant
        $('.diaporama-next').on('click', function(event) {
            event.preventDefault();
            diaporamaGoToNext();
        });

        $('.diaporama-prev').on('click', function(event) {
            event.preventDefault();
            diaporamaGoToPrev();
        });


        // Todo :  Swipe !

        $diaporama.hammer().bind('swipeleft', function (event) {
             diaporamaGoToNext();
        });

        $diaporama.hammer().bind('swiperight', function (event) {
             diaporamaGoToPrev()
        });



    }

    function diaporamaImagesPosition (currentImageIndex) {

        $('.diaporama__image', $diaporama).each(function(index){
            $(this).stop().animate({
                'left': ((index - diaporamaCurrentImageIndex) * 100) + '%'
            }, 800);
        });
    }

    function diaporamaGoToNext () {
        diaporamaCurrentImageIndex++;
        if(diaporamaCurrentImageIndex > $('.diaporama__image').length - 1 ) {
            diaporamaCurrentImageIndex = 0;
        } 

        diaporamaImagesPosition(diaporamaCurrentImageIndex);
    }

    function diaporamaGoToPrev () {
        diaporamaCurrentImageIndex--;
        if(diaporamaCurrentImageIndex < 0) {
            diaporamaCurrentImageIndex = $('.diaporama__image').length - 1;
        } 

        diaporamaImagesPosition(diaporamaCurrentImageIndex);
    }




}(jQuery));