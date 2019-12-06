USE studips;
INSERT INTO user (id, firstname, lastname, password, email, birthday, hobbies, study, bio, city_id)
VALUES
(1, "Eric", "Antonnai", "ok", "ericantonais@gmail.com", "01/01/01", "Moto cross", "Faculté des sciences", "je suis actif , j'aime sortir le soir et rencontrer des nouvelles personnes", 1),
(2, "Youri", "Ligateme", "ok", "youri@gmail.com", "02/02/02", "Jeux vidéos, cinema", "Science PO", "je voudrai instaurer un nouvel ordre mondial", 2),
(3, "Barack", "Aphrite", "ok", "barack@gmail.com", "03/03/03","Cinéma , sport , voiture", "BEP cuisine", "Futur manager chez Macdo, ma passion est de faire des frites", 3);
INSERT INTO post (id, user_id, title, category, content, city_id) 
VALUES 
(1, 1, "Recherche appartement", "Logement", "Bonjour amis dipser, je suis actuellement à la recherche d'un appartement dans la région de Marseille, si possible pret du vieux port pour contempler la vue et respirer le vent salé. Contactez moi si vous avez des pistes, merci à tous", "1"),
(2, 2, "Recherche d'un job", "Job", "Bonjour cher amis, je suis actuellement à la recherche d'un job étudiant avec des horaires modulable dans le Xe arrondissement. Contactez moi si vous avez des offres , merci les copains", "2"),
(3, 3, "Donne livre de cuisine", "Fournitures", "Bonsoir les dipser, j'ai 2 livres de cuisine qui traitent principalement sur la cuisson des frites, j'offre cela aux personnes ayant vraiment besoin , contactez moi si vous etes intéréssé, bisoux", "3"),
(4, 4, "Recherche Serveur", "Job", "Coucou , mon patron recherche un deuxieme étudiant pour le service du soir dans un bar/restaurants au niveau de la place d'Erlon. Si vous avez déja une experience dans la restauration contactez moi ou envoyé un mail avec votre CV et lettre de motivation à cmonmail@mail.com. Bonne chance !", "4"),
(6, 6, "Je quitte mon appart", "Logement", "Hey les copains, je quitte mon appartement car je retourne chez mes parents, c'est un F2 en plein centre ville (plus d'info sur www.logement.com). ", "5");

