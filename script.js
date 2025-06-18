$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var letter = $(".letter");
    var popup = $("#letterPopup");

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");

        setTimeout(() => {
            letter.addClass("shake");

            setTimeout(() => {
                letter.removeClass("shake");
                popup.removeClass("hidden");
            }, 1000); // After shake
        }, 2000); // Delay after open
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        popup.addClass("hidden");
    }

    envelope.click(openEnvelope);
    btn_open.click(openEnvelope);
    btn_reset.click(closeEnvelope);

    $(document).click(function (e) {
        if (!$(e.target).closest('.popup-content, #open, #reset, #envelope').length) {
            popup.addClass("hidden");
        }
    });
});
