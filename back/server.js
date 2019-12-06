const express = require('express');
const app = express();
const port = 8000;
const connection = require('./conf');

const posts = [
  {
      id: 1,
      user_id: 1,
      title: "Recherche appartement",
      category: "Logement",
      content: "Bonjour amis dipser, je suis actuellement à la recherche d'un appartement dans la région de Marseille, si possible pret du vieux port pour contempler la vue et respirer le vent salé. Contactez moi si vous avez des pistes, merci à tous",
      city: "Marseille"
  },
  {
      id: 2,
      user_id: 2,
      title: "Recherche d'un job",
      category: "Job",
      content: "Bonjour cher amis, je suis actuellement à la recherche d'un job étudiant avec des horaires modulable dans le Xe arrondissement. Contactez moi si vous avez des offres , merci les copains",
      city: "Paris"
  },
  {
      id: 3,
      user_id: 3,
      title: "Donne livre de cuisine",
      category: "Fournitures",
      content: "Bonsoir les dipser, j'ai 2 livres de cuisine qui traitent principalement sur la cuisson des frites, j'offre cela aux personnes ayant vraiment besoin , contactez moi si vous etes intéréssé, bisoux",
      city: "Lille"
  },
  {
      id: 4,
      user_id: 4,
      title: "Recherche Serveur",
      category: "Job",
      content: "Coucou , mon patron recherche un deuxieme étudiant pour le service du soir dans un bar/restaurants au niveau de la place d\Erlon. Si vous avez déja une experience dans la restauration contactez moi ou envoyé un mail avec votre CV et lettre de motivation à cmonmail@mail.com. Bonne chance !",
      city: "Reims"
  },
  {
      id: 5,
      user_id: 5,
      title: "Mega Teuf",
      category: "Event",
      date: "12/04/19",
      content: "Salut les dipser, ma mère organise une super fiesta pour l'anniversaire de notre chat dans son sous-sol , pas de dress-code. MP moi si vous voulez une invitation, A plus !",
      city: "Paris"
  },
  {
      id: 6,
      user_id: 6,
      title: "Je quitte mon appart",
      category: "Logement",
      content: "Hey les copains, je quitte mon appartement car je retourne chez mes parents, c'est un F2 en plein centre ville (plus d'info sur www.logement.com).",
      city: "Lille"
  },
  {
      id: 7,
      user_id: 7,
      title: "Cours de Tai-chi cosmique",
      category: "Cours",
      content: "Ami du grand monarque bonjour, je donne des cours particulier de tai-chi cosmique, ce qui vous permettra de réaliser une experience astral hors du commun. Si vous etes interesse contactez moi au plus vite (place limitée).",
      city: "Reims"
  }
]

app.get('/posts', (req, res) => {
  res.send(posts)
  });

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
