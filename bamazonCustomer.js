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
})

// display user id
connection.connect(function(err) {
  console.log("Connected as id: "+connection.threadId);
})

// table created with headers
var table = new Table({
    head: ['ITEM ID', 'PRODUCT NAME', 'DEPARTMENT NAME', 'PRICE', 'STOCK QUALITY']
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
  // user prompts
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
  ]).then(function(user){
      console.log("\n You purchased " + user.unitOutput + " units of ITEM " + user.itemInput);
  })
})
