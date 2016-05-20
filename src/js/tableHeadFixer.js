(function ()
{
    HTMLTableElement.prototype.tableHeadFixer = function (props)
    {
        var self     = this;
        self.default = {
            top: true
            , bottom: false
            , left: 0
            , right: 0
            , 'z-index': 100
        };


    };

    function extend()
    {
        try
        {
            var object = arguments[0];

            
        }
        catch (e)
        {
            console.log(e);
        }
    }
})();