$(function() {
    $(".MobileToggle a").click(function () {
        var viewport = ($(this).attr('id') === "MobileSite") ?
                        'width=device-width, initial-scale=1.0' :
                        'width=1000';
        $("meta[name=viewport]").attr('content', viewport);
        $(".MobileToggle").toggle();
        return false;
    });
});
