import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON =
 '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  },{ "id" : "0004" , "type" : "taco" , "name" : "paneer tikka Taco" , "price" : 4.99, "ingredients" : { "protein" : { "name" : "paneer" , "preparation" : "paneer and Fried" }, "salsa" : { "name" : "Chipopu Mayo" , "spiciness" : "Mild" }, "toppings" : [ { "name" : "Cabbage Slaw" , "quantity" : "1 cup" , "ingredients" : [ "Shup" , "capsicum" , "Mayonnaise" , "Lime Juice" , "Salt" ] }, { "name" : "Picos dee Gallo" , "quantity" : "1/2 cup" , "ingredients" : [ "Tomato" , "Onion" , "capsicup" , "Lime Juice" , "Salt" , "sugar" ] }, { "name" : "Limesoda Crema" , "quantity" : "2 tablespoons" , "ingredients" : [ "Sour Cream" , "Lime Juice" , "Salt" ] } ] } }, { "id": "0005","type": "taco","name": "veg dal","price": 4.99, "ingredients": {  "protein": {    "name": "veg",  "preparation": "Battered and boil"  },  "salsa": {  "name": "Chipotle Mayo",  "spiciness": "Mild"  },  "toppings": [  {    "name": "Cabbage Slaw",  "quantity": "2 cup",  "ingredients": [  "Shredded Cabbage",  "Carrot",  "Mayonnaise",  "Lime Juice",  "vegitable",  "Salt"  ] },  {  "name": "Pico de Gallo",  "quantity": "1/4 cup",  "ingredients": ["carrot","Fresh Cilantro","Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },  {  "name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["salt", "Lime Juice", "ghee"]  } ] } },{"id": "0006","type": "taco","name": "Hamburger", "price": 5.99, "ingredients": {  "protein": { "name": "Hamburger", "preparation": "Battered and butter, chese" },"salsa": { "name": "Chipotle Mayo", "spiciness": "Mild" },"toppings": [ {  "name": "Cabbage Slaw",  "quantity": "3 cup", "ingredients": [ "Shredded Cabbage",  "Carrot",   "Mayonnaise", "Lime Juice", "Salt"   ]},  {  "name": "Pico de Gallo", "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Tomato", "Salt"] },  { "name": "Lime Crema",   "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Mayonnaise", "Salt"]  } ] } }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("solution.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case "chicken":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "beef":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "fish":
      data = JSON.parse(recipeJSON)[2];
      break;
    case "paneer":
      data = JSON.parse(recipeJSON)[3];
      break;
    case "veg":
      data = JSON.parse(recipeJSON)[4];
      break;
    case "Hamburger":
      data = JSON.parse(recipeJSON)[5];
      break;
    default:
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
