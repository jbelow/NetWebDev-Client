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
        checkingTheCheck(this);
    });

    //all balloons check input
    $('#allBalloons').click(function () {
        let trufal = true;
        //this will get the 
        var isChecked = $('#allBalloons:checked').val();

        if (isChecked == undefined) {
            trufal = false
        }

        $('.form-check-input').each(function () {
            $(this).prop('checked', trufal);
            checkingTheCheck(this);
        });

    });

    // event listener for the submit button
    $('#submit').click(function () {
        var isChecked = $('.form-check-input:checked').val();
        // console.log(isChecked);
        if (isChecked == undefined) {
            $('.toast').toast({ autohide: false }).toast('show');
        }

    });


    //When hovering over the check list items
    $('.hoverGroup').hover(function () {
        console.log(this.id)
        $('#happyHeader').addClass(this.id);
    }, function () {
        $('#happyHeader').removeClass(this.id);
    });


    function checkingTheCheck(balloon) {
        // make the image visible
        $('#' + balloon.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(balloon).is(':checked') ?
            $('#' + balloon.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + balloon.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    };

});