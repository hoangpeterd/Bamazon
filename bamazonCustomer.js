// requiring packages
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

// connectiong mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "<input here>",
  database: "Bamazon"
});

// display user id
connection.connect(function(err) {
  console.log("Connected as id: "+connection.threadId);
});

// table created with headers
var table = new Table({
    head: ['ITEM ID', 'PRODUCT NAME', 'DEPARTMENT NAME', 'PRICE', 'STOCK QUANTITY']
});

// connection that calls upon the products table and pushes data into the table
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw (err);
  for (var i = 0; i < res.length; i++) {
    table.push(
        [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
    );
  }
  console.log(table.toString());
  // user prompts using inquirer
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ITEM ID of the product you would like to buy:",
      name: "itemInput"
    },
    {
      type: "input",
      message: "How many units of the item would you like to buy?",
      name: "unitOutput"
    },
    // takes in user inputs
  ]).then(function(user){
      // assigns the the correct array index
      var itemInput = parseInt(user.itemInput);
      itemInput = itemInput - 1;
      var unitOutput = parseInt(user.unitOutput);
      // variable for the quantity available
      var stock = res[itemInput].stock_quantity - user.unitOutput;

      // if statement that checks whether there is enough items for an order and total cost
      if (user.unitOutput > stock) {
        console.log ("\nInsufficient quantity!\n");
      } else {
        // updates the sql table based on what the user orders
        connection.query("UPDATE products SET ? WHERE ?", [{
          stock_quantity: stock
        }, {
          item_id: user.itemInput
        }], function(err, res) {});
        // displays the total cost of the item(s)
        var price = res[itemInput].price;
        // outputs what the user has purchased
        console.log("\nYou added " + user.unitOutput + " unit(s) of item " + user.itemInput + " into your cart");
        console.log("There is only " + stock + " unit(s) of this item left");
        console.log("\nThe total cost of your cart is : $" + price * unitOutput + "\n");
      }
      process.exit();
  });
});
