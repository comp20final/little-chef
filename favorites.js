/*required in order to use express js*/
var express = require('express');
var router = express.Router();
var assert = require('assert');

/* copy + pasted from class + edited with our own db info*/
const MongoClient = require('mongodb').MongoClient;
const url2 = "mongodb+srv://comp20final:welovecomp20@comp20final.xwrkf.mongodb.net/users?retryWrites=true&w=majority";



router.get('/', function(res, req, next) {
    /*not sure what exactly to put here*/
    res.render('favorite'); 
});

/* connect to the database and get the information! */
router.get('/get-data', function(res, req, next) {

/* from the video */
var favRecipes = [];

alert("connecting to mongo...");
MongoClient.connect(url2, {useUnifiedTopology: true}, function(err, db) {
    assert.equal(null, err);
    var dbo = db.db("users");
    var cursor = dbo.collection('sampleemail@gmail.com').find();
    cursor.forEach(function(item, err) {
        assert(null, err);
        favRecipes.push(item);
    }, function() {
        alert("closing db...");
        db.close();
        res.render('favorite', {items: favRecipes});
    }) // end of forEach

}) // end of connect
});


//     alert("connecting to mongo...");
//      MongoClient.connect(url2, { useUnifiedTopology: true }, function(err, db) {
//     		if(err) { 
// 			console.log("Connection err: " + err); return; 
// 			}
  
// 		    var dbo = db.db("users");
// 			var collect = dbo.collection('sampleemail@gmail.com');

// 			collect.find().toArray(function(err, items) {

// 			  if (err) {
// 				console.log("Error: " + err);
			
// 			  } 
// 			  else 
// 			  {
// 				console.log("Items: ");
// 				for (i=0; i<items.length; i++){
// 					console.log(i + ": " + items[i].recipename + " , " + items[i].cuisine);	
// 					r = new recipeObj(items[i].recipename, items[i].cuisine);	
// 					arr.push(r);		
// 					 	}
// 			  }   
// 			  db.close();
// 			});  //end find		
// 		});  //end connect


module.exports = router;

// function recipeObj(name, ingred, steps) {
//     	this.nme = name;
//     	this.ingredients = ingred;
//     	this.instructions = steps;
//     }

//     var arr = [];
		
// 		alert("changing elements on page...");
// 		for (var i = 0; i < arr.length; i++) {
// 			document.getElementByID("recipe").innerhtml = arr[i].recipename +
// 			arr[i].cuisine;
// 		}
// }

// actually call the function
//start();

