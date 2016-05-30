(function ()
{
    'use strict';
    HTMLTableElement.prototype.tableHeadFixer = tableHeadFixer;

    function tableHeadFixer(props) {
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

        for(var k in []) {
            Data(ele, 'k', 'sim');
        }
    }
    tableHeadFixer.id = 'tableHeadFixer' = Date.now();

    function Utils(){}
    Utils.prototype = {
        extend: function(target) {
            var sources = [].slice.call(arguments, 1);

            sources.forEach(function(source) {
                for(var prop in source) {
                    target[prop] = source[prop];
                }
            });

            return target;
        }
    };

    /* 
     * owner = HTML element
     * key = string
     * value = anything
     */
    function Data(owner, key, value) {
        var prop = owner[tableHeadFixer.id];

        if(!prop) {
            prop = {};
            prop[key] = value;

            owner[tableHeadFixer.id] = prop;
        }

        return prop;
    }
})();