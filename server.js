const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const cros = require("cros");
const port = process.env.PORT || 5000;
const mysql = require("mysql");
const errorHandler = require("./client/src/components/errors");
const connection = mysql.createConnection({
  host: "db4free.net",
  user: "foodhouse",
  password: "YvY35g)3(HLjar4k",
  database: "foodhouse"
});
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "foodhouse"
// });

connection.connect(function(err) { 
  err ? console.log(err) : console.log("connection");
});


// app.use(cros());
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
    user_id: 1,
    note: req.body.note
  };
  connection.query("INSERT INTO orders set ?", sendOrderToBasket, function(
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
  let user_id = 1; 
  connection.query(
    `SELECT * FROM basket WHERE user_id = '${user_id}'`,
    function(error, results) {
      error ? res.send(error) : res.send(JSON.stringify(results));
    }
  );
});

// ------------ Select random comments -----------------------
app.get("/comments", function(req, res) {
  // let user_id = req.body.user_id;
  connection.query(
    `SELECT * FROM customers_comments`,
    function(error, results) {
      error ? res.send(error) : res.send(JSON.stringify(results));
    }
  );
});
// connection.query(
//   `SELECT *.'cc' 
//   'user'.'user_name' 
//   'user'.'user_surname'
//   FROM customers_comments as 'cc'
//   LEFT JOIN 'users' as 'user' on 'user'.'user_id = 'cc'.'user_id'
//   `,

//------------- Delete orders from basket --------------------
app.delete("/menu", function(req, res, next) {
  let basket_id = req.body.basket_id;
  connection.query(
    `DELETE FROM orders WHERE order_id = 1 `, 
    function(error, results) {
      error ? res.send(error) : res.send(JSON.stringify(results));
    }
  );
});

//------------- Check data before login ------------------
app.post("/login", function(req, res, next) {
  let login = req.body.login;
  let password = req.body.password;
  connection.query(
    `SELECT user_id, email, account_type FROM users WHERE email = '${login}' and password = '${password}'`,
    function(err, data, fields) {
      err ? res.send(err) : res.json(data);
    }
  );
});

app.post("/register", (req, res) => {
  let { name, surname, email, password, account_type }  = req.body;
  const registerData ={ name: name,
                surname: surname,
                email: email,
                password: password,
                account_type: account_type }; 

    connection.query("INSERT INTO users set ?", registerData,
      function(err, data, fields) {
        err ? res.send(err) : res.json(data);
      }
    )
});

app.post("/delete", (req, res) =>{
  let { user_id } = req.body;
  connection.query(`DELETE FROM users where user_id = ${user_id}`,
  function(err, data){
    err ? res.send(err) : res.json(data);
  })
})

app.post("/checkUserExist", (req, res) => {
    let {  email }  = req.body;
    connection.query(`SELECT user_id FROM users where email ="${email}"`,
      function(err, results) {
        err ? res.send(err) : res.json(results); 
      }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// ERROR
app.use(errorHandler.notFound);
app.use(errorHandler.catchErrors);
