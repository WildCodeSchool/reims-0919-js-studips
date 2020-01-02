const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const connection = require('./conf.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.use(cors());

app.get('/posts', (req, res) => {
	let sqlQuery = 'SELECT user.firstname, user.lastname, user.city, post.* FROM post JOIN user ON user.id=post.user_id'
  	connection.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des posts');
    } else {
      res.json(results);
    }
  });
});

app.post('/posts', (req, res) => {
  	const formData = req.body;
	let sqlQuery = 'INSERT INTO post SET ?';
  	connection.query(sqlQuery, formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending a new post");
    } else {
      res.sendStatus(200);
    }
  	});
});

app.post('/login', (req, res) => {
	let userPassword = req.body.password;
	let userEmail = req.body.email
	let sqlQuery = `SELECT email, password from user where user.email='${userEmail}'`
	connection.query(sqlQuery, (err, results) => {
		if (!results.length) {
			res.status(400).send('Wrong email or password')
		} else {
			if (results[0].password === userPassword) {
				res.sendStatus(200)
			} else {
				res.status(400).send('Wrong email or password')
			}
		}
		if (err) {
			res.status(500).send('error')
		}		
	})
})

app.post('/register', (req, res) => {
  	const formData = req.body;
	let sqlQuery = 'INSERT INTO user SET ?';
  	connection.query(sqlQuery, formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user");
    } else {
      res.sendStatus(200);
    }
  	});
})

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
