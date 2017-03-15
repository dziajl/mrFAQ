(function ($) {
    $.fn.modularText = function (settings) {

        var self = this;

        this.defaults = {
            toggler: '.collapse-toggler',
            content: '.collapsed-text-content',
            module: '.modulartext-wrapper',
            showText: '',
            hideText: '',
            speed: 300
        };

        this.config = $.extend({}, this.defaults, settings);       

        this.on('click', this.config.toggler, function (e) {

            e.preventDefault();

            if ($(this).parents(self.config.module).hasClass('expanded')) {
                self.find(self.config.content).slideUp(self.config.speed);
                $(self.config.module).removeClass('expanded');

            } else {

                $(self.config.module).removeClass('expanded');
                $('body').find(self.config.content).slideUp(self.config.speed);

                $(this).parents(self.config.module).toggleClass('expanded');
                
                self.find(self.config.content).slideDown(self.config.speed);
            }

        });
    };
})(jQuery);

