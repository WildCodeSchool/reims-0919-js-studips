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
	   req.token = bearerToken
       next()
   } else {
       res.sendStatus(403)
   }
}

app.get('/posts', (req, res) => {
	let sqlQuery = 'SELECT user.firstname, user.lastname, user.city, user.profile_pic, user.study, post.*, DATE_FORMAT(post.created_at, "Posté le : %d/%m/%y à %H:%i") AS created_at, DATE_FORMAT(post.event_date, "Le %d/%m/%y à %H:%i") AS event_date FROM post JOIN user ON user.id=post.user_id'
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
		} else {
			jwt.sign({ userEmail }, signature, {expiresIn: '180sec'}, (err, token) => {
				res.status(200).json({
					token
				});
			});
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

app.get('/:userId/contacts', (req, res) => {
	let userId = req.params.userId
	let sqlQuery = `SELECT user.id, user.firstname, user.lastname, user.profile_pic, messages.creation_date FROM user JOIN messages ON messages.sender_id=user.id WHERE recipient_id=${userId} UNION SELECT user.id, user.firstname, user.lastname, user.profile_pic, messages.creation_date FROM user JOIN messages ON messages.recipient_id=user.id WHERE sender_id=${userId}`;
	connection.query(sqlQuery, (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de la récupération des contacts');
		} else {			
			res.json(results);
		}
	})
})

app.get('/:userId/contacts/:contactId/conversation', (req, res) => {
	let userId = req.params.userId
	let contactId = req.params.contactId
	let sqlQuery = `SELECT messages.* FROM messages WHERE (sender_id=${userId} AND recipient_id=${contactId}) OR (sender_id=${contactId} AND recipient_id=${userId}) ORDER BY messages.id DESC`
	connection.query(sqlQuery, (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de la récupération de la conversation')
		} else {			
			res.json(results);
		}
	})
})

app.post('/conversation', (req, res) => {
  	const formData = req.body;
	let sqlQuery = 'INSERT INTO messages SET ?'
  	connection.query(sqlQuery, formData, (err, results) => {
		if (err) {
		console.log(err);
		res.status(500).send("Error sending a new post");
		} else {
		res.sendStatus(200);
		}
  	});
});

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
