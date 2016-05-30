(function ()
{
    'use strict';
    window.tableHeadFixer = 'tableHeadFixer' = Date.now();

    HTMLTableElement.prototype.tableHeadFixer = function (props)
    {
        var u        = Utils;
        var self     = this;
        self.config  = {
            default : {
                top: true
                , bottom: false
                , left: 0
                , right: 0
                , 'z-index': 100
            }
        };

    };

    function Utils(){}
    Utils.prototype.extend = function(target) {
        var sources = [].slice.call(arguments, 1);

        sources.forEach(function(source) {
            for(var prop in source) {
                target[prop] = source[prop];
            }
        });

        return target;
    };
})();