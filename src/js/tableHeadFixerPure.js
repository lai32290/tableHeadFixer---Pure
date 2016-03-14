(function ()
{
    Element.prototype.tableHeadFixer = function (props)
    {
        if (this.tagName.toUpperCase() !== 'TABLE')
        {
            console.error('You are trying use tableHeadFixer to a ' + this.tagName + ' element');
            return;
        }

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