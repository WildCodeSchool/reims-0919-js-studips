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
    phone varchar(12) null ,
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
    category enum('Cours','Logements','Fournitures','Jobs','Events'),
    content varchar(300) not null,
    event_date datetime,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

create table messages
(
    id int auto_increment primary key,
    sender_id int not null,
    creation_date timestamp default CURRENT_TIMESTAMP,
    content varchar(300) not null,
    FOREIGN KEY (sender_id) REFERENCES user(id)
);

create table messages_recipient
(
    id int auto_increment primary key,
    recipient_id int not null,
    message_id int not null,
    FOREIGN KEY (recipient_id) REFERENCES user(id),
    FOREIGN KEY (message_id) REFERENCES messages(id)
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
(1, 'Recherche appartement', 'Logements', "Bonjour amis dipsers, je suis actuellement à la recherche d'un appartement dans la région de Marseille, si possible pret du vieux port pour contempler la vue et respirer le vent salé. Contactez moi si vous avez des pistes, merci à tous");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(2, "Recherche d'un job", 'Jobs', "Bonjour cher amis, je suis actuellement à la recherche d'un job étudiant avec des horaires modulable dans le Xe arrondissement. Contactez moi si vous avez des offres , merci les copains");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`)
VALUES
(3, 'Donne livre de cuisine', 'Fournitures', "Bonsoir les dipser, j'ai 2 livres de cuisine qui traitent principalement sur la cuisson des frites, j'offre cela aux personnes ayant vraiment besoin , contactez moi si vous etes intéréssé, bisoux");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(4, 'Recherche Serveur', 'Jobs', 'Coucou , mon patron recherche un deuxieme étudiant pour le service du soir dans un bar/restaurants au niveau de la place dErlon. Si vous avez déja une experience dans la restauration contactez moi ou envoyé un mail avec votre CV et lettre de motivation à cmonmail@mail.com. Bonne chance !');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`, `event_date`)
VALUES
(5, 'Mega Teuf', 'Events', "Salut les dipser, ma mère organise une super fiesta pour l'anniversaire de notre chat dans son sous-sol , pas de dress-code. MP moi si vous voulez une invitation, A plus !", '2020-02-04');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(6, 'Je quitte mon appart', 'Logements', "Hey les copains, je quitte mon appartement car je retourne chez mes parents, c'est un F2 en plein centre ville (plus d'info sur www.logement.com).");
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`)
VALUES
(6, 'Cours de Tai-chi cosmique', 'Cours', 'Ami du grand monarque bonjour, je donne des cours particulier de tai-chi cosmique, ce qui vous permettra de réaliser une experience astral hors du commun. Si vous etes interesse contactez moi au plus vite (place limitée).');

INSERT INTO messages
(`sender_id`, `content`)
VALUES
(1, 'Salut, ça roule ? Est-ce que tu vas au concert de Franky Vincent pour la Saint Valentin ???');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(2, 'Ca va bien, et toi ? Evidemment, il ne faut pas rater ça ! on y va avec ma chérie, on se retrouve là bas ?');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(1, 'Entendu, on se retrouve là bas alors, je devrais y être pour 21h.');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(3, 'Salut ! Je vois que tu as mis en vente tes livres de 1ère année, je suis intéressé. Quel serait le prix ?');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(1, 'Bonjour, si tu prends le tout, je peux te les faire pour 30 euros');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(4, 'Le patron du Chiquito cherche du personnel pour faire la plonge, du coup je me suis dit que tu pourrais être intéressé.');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(5, 'Cool que tu aies pensé à moi ! Par contre je suis pu dispo les weekends en soirée, je travaille déjà dans un resto');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(4, 'Ah ok ! En tout cas, super pour toi !');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(6, 'Je cherche un nouveau coloc pour mon appart. Du coup, direct, je te propose en premier :-)');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(7, 'Ahhh ! Super ! Oui, je suis très intéressé !!');
INSERT INTO messages
(`sender_id`, `content`)
VALUES
(6, 'Ce serait vraiment génial que tu nous rejoignes, en plus il y a déjà une super ambiance dans la coloc.');

INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(2, 1);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(1, 2);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(2, 3);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(1, 4);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(3, 5);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(5, 6);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(4, 7);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(5, 8);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(7, 9);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(6, 10);
INSERT INTO messages_recipient
(`recipient_id`, `message_id`)
VALUES
(7, 11);
