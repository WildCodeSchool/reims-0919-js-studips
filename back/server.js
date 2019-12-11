const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

const posts = [
	{
		id: 1,
		user_id: 1,
		firstname: 'Isabella',
		lastname: 'Laizieu-Bleu',
		studies: 'Fac de musicologie',
		picture:
			'https://www.orthodiv.org/wp-content/uploads/2017/08/emma-plater-250x.jpg',
		title: 'Recherche appartement',
		category: 'Logement',
		content:
			"Bonjour amis dipser, je suis actuellement à la recherche d'un appartement dans la région de Marseille, si possible pret du vieux port pour contempler la vue et respirer le vent salé. Contactez moi si vous avez des pistes, merci à tous",
		city: 'Marseille',
	},
	{
		id: 2,
		user_id: 2,
		firstname: 'Laure',
		lastname: 'Emipsoum',
		studies: 'Sciences po',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjVQH9K0J82SyO4KML7XCNuvRFSO9QcnRbuUSGafYm1hE1Iw4&s',
		title: "Recherche d'un job",
		category: 'Job',
		content:
			"Bonjour cher amis, je suis actuellement à la recherche d'un job étudiant avec des horaires modulable dans le Xe arrondissement. Contactez moi si vous avez des offres , merci les copains",
		city: 'Paris',
	},
	{
		id: 3,
		user_id: 3,
		firstname: 'Dolores',
		lastname: 'Sitamet',
		studies: 'Fac de droit',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fuszcKxCORVmq-wYqxwgQ0jrl5bUDPoo-9gJHRFLEk_BsZzw&s',
		title: 'Donne livre de cuisine',
		category: 'Fournitures',
		content:
			"Bonsoir les dipser, j'ai 2 livres de cuisine qui traitent principalement sur la cuisson des frites, j'offre cela aux personnes ayant vraiment besoin , contactez moi si vous etes intéréssé, bisoux",
		city: 'Lille',
	},
	{
		id: 4,
		user_id: 4,
		firstname: 'Anne',
		lastname: 'Titegoutte',
		studies: 'Fac de lettres',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMJU5JOlnPvg7d8KTCrOPPgI96BZVbQ34HnTiajjWwrRVSqpQ&s',
		title: 'Recherche Serveur',
		category: 'Job',
		content:
			'Coucou , mon patron recherche un deuxieme étudiant pour le service du soir dans un bar/restaurants au niveau de la place dErlon. Si vous avez déja une experience dans la restauration contactez moi ou envoyé un mail avec votre CV et lettre de motivation à cmonmail@mail.com. Bonne chance !',
		city: 'Reims',
	},
	{
		id: 5,
		user_id: 5,
		firstname: 'Gerard',
		lastname: 'Menvussa',
		studies: 'Fac de biologie',
		picture:
			'https://www.superprof.fr/images/annonces/professeur-home-etudiant-histoire-profil-litteraire-donne-cours-particuliers-soutien-generalise-disciplines-litteraires-ou.jpg',
		title: 'Mega Teuf',
		category: 'Event',
		date: '12/04/19',
		content:
			"Salut les dipser, ma mère organise une super fiesta pour l'anniversaire de notre chat dans son sous-sol , pas de dress-code. MP moi si vous voulez une invitation, A plus !",
		city: 'Paris',
	},
	{
		id: 6,
		user_id: 6,
		firstname: 'Gilou',
		lastname: 'Pilbus',
		studies: 'Fac de médecine',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINO9Wr1zfYHNfnXapJ0OHCF--Fuz1oF6vc42-Ctlugy3UvtDI1Q&s',
		title: 'Je quitte mon appart',
		category: 'Logement',
		content:
			"Hey les copains, je quitte mon appartement car je retourne chez mes parents, c'est un F2 en plein centre ville (plus d'info sur www.logement.com).",
		city: 'Lille',
	},
	{
		id: 7,
		user_id: 7,
		firstname: 'Youri',
		lastname: 'Ligotmi',
		studies: 'Faculté de psychologie',
		picture:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1cCNodtCmfkN2KKqQx84RveyD2FYR8QS--HYkopSs3Uh3x36&s',
		title: 'Cours de Tai-chi cosmique',
		category: 'Cours',
		content:
			'Ami du grand monarque bonjour, je donne des cours particulier de tai-chi cosmique, ce qui vous permettra de réaliser une experience astral hors du commun. Si vous etes interesse contactez moi au plus vite (place limitée).',
		city: 'Reims',
	},
];

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', (req, res) => {
	const lastItem = posts[posts.length - 1];
	const lastId = lastItem.id;
	const post = {
		id: lastId + 1,
		user_id: lastId + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        studies: req.body.studies,
        picture: req.body.picture,
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        city: req.body.city,
	};
	posts.push(post);
	res.send(post);
});

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
