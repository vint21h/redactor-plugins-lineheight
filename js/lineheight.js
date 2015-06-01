// redactor-plugins-lineheight
// js/lineheight.js

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.lineheight = function()
{
    return {
        init: function()
        {
            var heights = [1, 1.25, 1.5, 2, 2.5, 3],
                that = this,
                dropdown = {};

            $.each(heights, function(i, s)
            {
                dropdown["s" + i] = {
                    title: s + "em", func: function() {
                        that.lineheight.set(s);
                    }
                };
            });

            dropdown.remove = {
                title: "Remove Line Height",
                func: that.lineheight.reset
            };
            var button = this.button.add("lineheight", "Change Line Height");
            this.button.setAwesome("lineheight", "fa-arrows-v");
            this.button.addDropdown(button, dropdown);
        },
        set: function(height)
        {
            this.inline.format("span", "style", "line-height: " + height + "em;");
        },
        reset: function()
        {
            this.inline.removeStyleRule("line-height");
        }
    };
};
