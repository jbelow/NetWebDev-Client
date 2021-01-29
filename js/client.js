$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();

        //setting the data in the toast

        switch ($('.code').index(this)) {
            case 0:
                // console.log("this is the first one");
                $("div").data("name", "Tis the seasoning");
                $("div").data("code", "3451");
                break;
            case 1:
                $("div").data("name", "Go Green");
                $("div").data("code", "3461");
                break;
            case 2:
                $("div").data("name", "Half Price");
                $("div").data("code", "2345");
                break;
        }
        productName = $( "div" ).data("name");
        discountCode = $( "div" ).data("code");
        $("#product").text("" + productName);
        $("#code").text("" + discountCode);
        

        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        // $(toast).delete(); // this just makes it so that it can never come back
        document.getElementById("closeToast").click();
    }
});
