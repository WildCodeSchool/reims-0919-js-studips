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
	let sqlQuery = 'SELECT user.firstname, user.lastname, user.city, user.profile_pic, user.study, post.*, DATE_FORMAT(post.created_at, "Posté le : %d/%m/%y à %H:%i") AS created_at, DATE_FORMAT(post.event_date, "Le %d/%m/y% à %H:%i") AS event_date, COUNT(likes.post_id) AS `likes` FROM post LEFT JOIN `likes` ON post.id=likes.post_id JOIN user on user.id=post.user_id GROUP BY post.id'
	connection.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des posts');
    } else {
      res.json(results);
    }
  });
});

app.get('/posts/:id', (req, res) => {
	postId = req.params.id
	let sqlQuery = 'SELECT user.firstname, user.lastname, user.city, user.profile_pic, user.study, post.*, DATE_FORMAT(post.created_at, "Posté le : %d/%m/%y à %H:%i") AS created_at, DATE_FORMAT(post.event_date, "Le %d/%m/y% à %H:%i") AS event_date, COUNT(likes.post_id) AS `likes` FROM post LEFT JOIN `likes` ON post.id=likes.post_id JOIN user on user.id=post.user_id WHERE post.id = ?'
	connection.query(sqlQuery, [postId], (err, results) => {
		if (err) {
			res.status(500).send('Erreur lors de la récupération du post');
		} else {
			res.json(results);
		}
	})
})

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

app.put('/likes', (req, res) => {
	let formData = req.body
	let userId = req.body.user_id
	let postId = req.body.post_id
	let sqlQuery1 = `SELECT * FROM likes WHERE post_id = ${postId} AND user_id = ${userId}`
	connection.query(sqlQuery1, (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send('error getting like');
		} else {
			if (results[0]) {
				let sqlQuery2 = `DELETE FROM likes WHERE post_id = ${postId} AND user_id = ${userId}`
				connection.query(sqlQuery2, err => {
					if (err) {
						console.log(err);
						res.status(500).send("Error deleting like");
					} else {
						res.sendStatus(204)
					}
				})
			} else {
				let sqlQuery3 = 'INSERT INTO `likes` SET ?';
				connection.query(sqlQuery3, formData, (err, results2) => {
					if (err) {
						console.log(err);
						res.status(500).send("Error adding like");			
					} else {
						res.json(results2);
					}
				})
			}
		}
	})
})

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
