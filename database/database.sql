drop database if exists studips;
create database studips;
use studips;

create table user 
(
    id int auto_increment primary key,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    password varchar(30) not null,
    email varchar(30) not null,
    birthday date not null,
    hobbies varchar(100) null,
    study varchar(50) not null,
    bio varchar(250) null,
    profile_pic varchar(200) null,
    city varchar(30) not null
);
create table post
(
    id int auto_increment primary key,
    user_id int,
    created_at timestamp default CURRENT_TIMESTAMP,
    title varchar(30) not null,
    category enum('Cours','Logement','Fournitures','Job','Event'),
    content varchar(300) not null,
    event_date datetime,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Youri', 'Ligotmi', 'pouet', 'yligotmi@msn.com','2000-06-23', 'Jeux vidéos, cinema', 'Science PO', 'Je voudrais instaurer un nouvel ordre mondial', 'https://randomuser.me/api/portraits/men/43.jpg', 'Angers');
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Barack', 'Aphrite', 'pouet', 'baphrite@msn.com', '2000-10-10', 'Cinéma , sport , voiture', 'BEP cuisine', 'Futur manager chez Macdo, ma passion est de faire des frites', 'https://randomuser.me/api/portraits/men/41.jpg', 'Caen');
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Agathe', 'Zeblouse', 'pouet', 'agathe@msn.com', '1995-12-04', 'Musique , art', 'Faculté LEA', 'Je compose de la musique lors de mes temps libre', 'https://randomuser.me/api/portraits/women/68.jpg', 'Paris');
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Jeremy', 'Lependulaleur', 'pouetpouet', 'jeremy@msn.com', '2002-03-04', 'Cinema, sport, jeux videos', 'DUT génie civil', "Amical et enthousiaste, j'aime rencontrer des personnes", 'https://randomuser.me/api/portraits/men/73.jpg', 'Lille');
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Harry', 'Cover', 'pouet', 'hpotter@msn.com', '1999-01-04', 'Cuisine , PotterHead', 'Faculté des sciences', 'Je suis de Gryffondor', 'https://randomuser.me/api/portraits/men/8.jpg', 'Lille');
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Sylvain', 'Duriff', 'pouet', 'sdurif@msn.com', '2001-05-05', 'Politique, Course à pied', 'Faculté de droit', 'je suis le grand monarque cosmique', 'https://randomuser.me/api/portraits/men/51.jpg', 'Strasbourg');
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `birthday`, `hobbies`, `study`, `bio`, `profile_pic`, `city`) 
VALUES
('Eric', 'Antonnai', 'cassoulet', 'ericantonnai@gmail.com', '2000-01-01', 'Motocross', 'Faculté des sciences', "je suis actif, j'aime sortir le soir et rencontrer des nouvelles personnes", '', 'Paris');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(1, 'Recherche appartement', 'Logement', "Bonjour amis dipsers, je suis actuellement à la recherche d'un appartement dans la région de Marseille, si possible pret du vieux port pour contempler la vue et respirer le vent salé. Contactez moi si vous avez des pistes, merci à tous");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(2, "Recherche d'un job", 'Job', "Bonjour cher amis, je suis actuellement à la recherche d'un job étudiant avec des horaires modulable dans le Xe arrondissement. Contactez moi si vous avez des offres , merci les copains");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`)
VALUES
(3, 'Donne livre de cuisine', 'Fournitures', "Bonsoir les dipser, j'ai 2 livres de cuisine qui traitent principalement sur la cuisson des frites, j'offre cela aux personnes ayant vraiment besoin , contactez moi si vous etes intéréssé, bisoux");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(4, 'Recherche Serveur', 'Job', 'Coucou , mon patron recherche un deuxieme étudiant pour le service du soir dans un bar/restaurants au niveau de la place dErlon. Si vous avez déja une experience dans la restauration contactez moi ou envoyé un mail avec votre CV et lettre de motivation à cmonmail@mail.com. Bonne chance !');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`, `event_date`)
VALUES
(5, 'Mega Teuf', 'Event', "Salut les dipser, ma mère organise une super fiesta pour l'anniversaire de notre chat dans son sous-sol , pas de dress-code. MP moi si vous voulez une invitation, A plus !", '2020-02-04');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(6, 'Je quitte mon appart', 'Logement', "Hey les copains, je quitte mon appartement car je retourne chez mes parents, c'est un F2 en plein centre ville (plus d'info sur www.logement.com).");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(6, 'Cours de Tai-chi cosmique', 'Cours', 'Ami du grand monarque bonjour, je donne des cours particulier de tai-chi cosmique, ce qui vous permettra de réaliser une experience astral hors du commun. Si vous etes interesse contactez moi au plus vite (place limitée).');
