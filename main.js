(function () {


    $(document).ready(function () {

$('.modulartext-wrapper').each(function (modularQuantity, e) {
            modularQuantity++;
            $(this).find('.number .quantity').text(modularQuantity);

            var data = parseFloat($(e).text());
            if (data < 2) {
                time = 300;
            } else {
                time = 3000;
            }
            $({countNum: 0}).animate({
                countNum: data
            },
                    {
                        duration: time,
                        easing: 'swing',
                        step: function () {
                            $(this).find('.number .quantity').text(Math.floor(this.countNum));
                        }, complete: function () {
                            $(this).find('.number .quantity').text(this.countNum);
                        }});
     
        });


    });
})(jQuery);
