const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require("mysql");
const errorHandler = require("./client/src/components/errors");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Artlom91",
  database: "foodhousedb"
});

connection.connect(function(err) {
  err ? console.log(err) : console.log("connection");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//----------- Save data in : basket ------------------
app.post("/menu", function(req, res) {
  let sendOrderToBasket = {
    dish_name: req.body.dish_name,
    dish_count: req.body.dish_count,
    dish_extras: req.body.dish_extras,
    dish_sauce: req.body.dish_sauce,
    dish_cost: req.body.dish_cost,
    user_id: req.body.user_id,
    note: req.body.note
  };
  connection.query("INSERT INTO basket set ?", sendOrderToBasket, function(
    error,
    data
  ) {
    error ? res.send(error) : res.json(data);
  });
});

// -------- Save data in order_list ------------------------
app.post("/order", function(req, res) {
  let sendOrderToOrderList = {
    user_id: req.body.user_id,
    dish_name: req.body.dish_name,
    dish_count: req.body.dish_count,
    dish_extras: req.body.dish_extras,
    dish_sauce: req.body.dish_sauce,
    note: req.body.note,
    unique_id: req.body.unique_id,
    status: req.body.status,
    total_price: req.body.total_price
  };
  connection.query("INSERT INTO order_list set ?", sendOrderToOrderList, function(
    error,
    data
  ) {
    error ? res.send(error) : res.json(data);
  });
});


// -- Import data from: basket, need count for label in nav menu -----
app.post("/basket", function(req, res, next) {
  let user_id = req.body.user_id;
  connection.query(
    `SELECT * FROM basket WHERE user_id = '${user_id}'`,
    function(error, results) {
      error ? res.send(error) : res.send(JSON.stringify(results));
    }
  );
});

//------------- Delete orders from basket --------------------
app.delete("/menu", function(req, res, next) {
  let basket_id = req.body.basket_id;
  connection.query(
    `DELETE FROM basket WHERE basket_id = ${basket_id} `,
    function(error, results) {
      error ? res.send(error) : res.send(JSON.stringify(results));
    }
  );
});

//------------- Check data before login ------------------
app.post("/login", function(req, res, next) {
  let login = req.body.login;
  let password = req.body.password;
  let database = req.body.database;
  connection.query(
    `SELECT * FROM ${database}_db WHERE login = '${login}' and password = '${password}'`,
    function(err, data, fields) {
      err ? res.send(err) : res.json(data);
      if (data.length > 0) {
        console.log("uzytkownik istnieje");
      } else {
        console.log("zle dane");
      }
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// ERROR
app.use(errorHandler.notFound);
app.use(errorHandler.catchErrors);
