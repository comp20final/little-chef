
const MongoClient = require('mongodb').MongoClient;
const url2 = "mongodb+srv://comp20final:welovecomp20@comp20final.xwrkf.mongodb.net/users?retryWrites=true&w=majority";
	
	function recipeObj(name, ingred, steps) {
		this.nme = name;
		this.ingredients = ingred;
		this.instructions = steps;
	}

	// function getData(recipe) {
	// 	return recipe;
	// }
	var arr = [];


	function start() {
	    alert("starting favorite.js start function");
	    
		  MongoClient.connect(url2, { useUnifiedTopology: true }, function(err, db) {
    		if(err) { 
			console.log("Connection err: " + err); return; 
			}
  
		    var dbo = db.db("users");
			var collect = dbo.collection('sampleemail@gmail.com');

			
			//query = {favorite:true};
			collect.find().toArray(function(err, items) {

			  if (err) {
				console.log("Error: " + err);
			
			  } 
			  else 
			  {
				console.log("Items: ");
				for (i=0; i<items.length; i++){
					console.log(i + ": " + items[i].recipename + " , " + items[i].cuisine);	
					r = new recipeObj(items[i].recipename, items[i].cuisine);	
					arr.push(r);		
					 	}

			//	getData(arr);	 	
			  }   
			  db.close();
			});  //end find		
		});  //end connect
		return arr;
	}

