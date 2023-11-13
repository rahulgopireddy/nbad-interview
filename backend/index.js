// index.js
const express = require("express");
const app = express();
const port = 3000;
const groceryList = [
  { item: "Bread", price: 2.99 },
  { item: "Milk", price: 1.99 },
  { item: "Eggs", price: 2.49 },
  { item: "Butter", price: 3.49 },
  { item: "Fresh Vegetables", price: 5.99 },
  { item: "Fresh Fruits", price: 4.99 },
  { item: "Rice or Pasta", price: 1.79 },
  { item: "Chicken or Beef", price: 7.99 },
  { item: "Cheese", price: 4.29 },
  { item: "Canned Tomatoes", price: 1.29 },
  { item: "Cooking Oil", price: 2.49 },
  { item: "Spices and Herbs", price: 3.99 },
  { item: "Yogurt", price: 2.89 },
  { item: "Cereal or Oatmeal", price: 3.19 },
  { item: "Coffee or Tea", price: 5.49 },
];

app.get("/", (req, res) => {
  res.json(groceryList);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
