var _ = require('underscore');

console.log("_++++", _);


var currentIndex = _.findIndex( [{name: "AAA", marks: 100},{name: "BBB", marks: 200},{name: "CCC", marks: 300}],
    function( item )
    {
        return "CCC" === item.name;
    } );

console.log("currentIndex ====", currentIndex);