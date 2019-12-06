const express = require('express');
const app = express();
const port = 8000;
const connection = require('./conf');

// listen to "/posts"
app.get('/posts', (req, res) => {
  // connection to the database, and selection of posts
  connection.query('SELECT * from post', (err, results) => {
    if (err) {
      //  If an error has occurred, then the user is informed of the error
      res.status(500).send('Erreur lors de la récupération des posts');
    } else {
      // If everything went well, we send the result of the SQL query as JSON.
      console.log("on posts")
      res.json(results);
    }
  });
});

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
