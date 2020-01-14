const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const connection = require('./conf.js');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const signature = require('./signature.js');

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.use(cors());

function verifyToken(req, res, next){
   const bearerHeader = req.headers.authorization
   if (typeof bearerHeader !== 'undefined') {
       const bearer = bearerHeader.split(' ')
       const bearerToken = bearer[1]
   } else {
       res.sendStatus(403)
   }
}

app.get('/posts', (req, res) => {
	let sqlQuery = 'SELECT user.firstname, user.lastname, user.city, user.profile_pic, user.study, post.*, DATE_FORMAT(post.created_at, "Le %d/%m/%y à %H:%i") AS created_at FROM post JOIN user ON user.id=post.user_id'
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
	connection.query(sqlQuery, (err, matchs) => {
		if (err) {
			res.status(500).send('error')
			return
		}
		const oneMatchFound = (matchs.length === 1)
		if (!oneMatchFound || matchs[0].password !== userPassword) {
			res.status(400).send('Wrong email or password')
			return
		}
		jwt.sign({ userEmail }, signature, {expiresIn: '180sec'}, (err, token) => {
			res.sendStatus(200).json({
				token
			});
		});
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


//####################test


app.post('/api/login', (req, res) => {
	const {email, password} = req.body;
	console.log(email, password);
	if (email && password) {
		// fake user claims
		const user = {
			id: 1,
			username: 'Jhondo',
			email: 'jhondo@gmail.com',
			password:'toto'
		}
		// token creation
		jwt.sign({user}, 'secret', (err, token) => {
			res.json({
				token
			})
		})
	}
	else {
		res.status(400).send();
	}
})

function verifyToken(req, res, next){
   const bearerHeader = req.headers.authorization
   if(typeof bearerHeader !== 'undefined'){
       const bearer = bearerHeader.split(' ') // split bearerHeader in a new Array
       const bearerToken = bearer[1] // store index 1 of the newly created array in a new variable bearToken
       req.token = bearerToken
       next() // step to the next middleware
   } else{
       res.sendStatus(403)
   }
}
app.post('/api/post', verifyToken, (req, res) => {
	jwt.verify(req.token, 'secret', (err, authData) => {
		if (err) {
			res.sendStatus(401)
		}
		else {
			res.json({
				message: 'Post created',
				authData
			})
		}
	})
 })
 