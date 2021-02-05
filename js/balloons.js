$(function () {

    //pciking a random class for the header
    window.onload = function ranHeaderClass() {
        let animateList = ['animate__animated animate__flash', 'animate__animated animate__headShake', 'animate__animated animate__heartBeat', 'animate__animated animate__tada'];

        animateRandom = animateList[Math.floor(Math.random() * animateList.length)];

        $('#happyHeader').addClass(animateRandom);

    }
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // event listener for the submit button
    $('#submit').click(function () {

        var isChecked = $('.form-check-input:checked').val();
        // console.log(isChecked);

        if (isChecked == undefined) {
            $('.toast').toast({ autohide: false }).toast('show');
        }

    });

});