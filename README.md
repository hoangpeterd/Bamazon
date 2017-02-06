# Bamazon

### Overview
Bamazon is an Amazon-like storefront built with Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

### Walkthrough
Upon starting Bamazon the customer will be assigned a unique ID and presented with a table of the products for sale.

For Example:

ITEM ID | PRODUCT NAME | DEPARTMENT NAME | PRICE | STOCK QUANTITY
---|---|---|---|---
 1 | Inception | Movies | 10 | 100 
 5 | Wolfenstein: The New Order | Games | 20 | 100

The customer will then be asked to input the following: 
- ITEM ID of the product they would like to buy.
- How many units of the selected product that they would like to buy. 

Once submitted, the app will check whether or not the item is in stock.

If the item is in stock, the app will let the customer know:
- How many units of that item was added into the cart
- How many units are left
- The Total cost of item(s) in the cart

If the item is out of stock, the app will let the customer know that there is an: *Insufficient quantity!* 

### Screenshots
![Product Table](https://github.com/hoangpeterd/Bamazon/blob/master/Screenshots/Screen%20Shot%202017-02-05%20at%2011.27.14%20PM.png?raw=true)
