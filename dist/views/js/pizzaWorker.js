var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"];var selectRandomMeat=function(){var e=pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)];return e},selectRandomNonMeat=function(){var e=pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)];return e},selectRandomCheese=function(){var e=pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)];return e},selectRandomSauce=function(){var e=pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)];return e},selectRandomCrust=function(){var e=pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)];return e},ingredientItemizer=function(e){return"<li>"+e+"</li>"},makeRandomPizza=function(){for(var e="",a=Math.floor(4*Math.random()),n=Math.floor(3*Math.random()),s=Math.floor(2*Math.random()),r=0;a>r;r++)e+=ingredientItemizer(selectRandomMeat());for(r=0;n>r;r++)e+=ingredientItemizer(selectRandomNonMeat());for(r=0;s>r;r++)e+=ingredientItemizer(selectRandomCheese());return e+=ingredientItemizer(selectRandomSauce()),e+=ingredientItemizer(selectRandomCrust())};this.onmessage=function(e){postMessage({ingredients:makeRandomPizza(),id:e.data.id})};
//# sourceMappingURL=pizzaWorker.js.map
