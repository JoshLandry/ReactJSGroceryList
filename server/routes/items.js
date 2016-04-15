'use strict';

module.exports = function(app){

    console.log("running items.js");

    var items = [{
        name:"Ice Cream"
    },{
        name:"Waffles"
    },{
        name:"Candy",
        purchased:true
    },{
        name:"Snarks"
    }];

    app.get('/api/items', function(req, res) {
        res.send(items);
    });

}