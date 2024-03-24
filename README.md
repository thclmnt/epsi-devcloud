# Atelier - Développement et Service Cloud

Projet réalisé par :

-   Thomas CLEMENT
-   Nathan TOMASIAN

## Installation

Clonez le projet comme ceci:

```bash
git clone https://github.com/thclmnt/epsi-devcloud
```

Puis installez les dépendances:

```bash
cd epsi-devcloud
npm install
```

Ensuite, créer un fichier `.env.local` à la racine du projet et y ajouter un lien vers une instance MongoDB

```bash
MONGODB_URI=mongodb+srv://<user>:<password>@<url_serveur_mongo>
```

Vous pouvez ensuite lancer le projet en mode développement avec la commande suivante:

```bash
npm run dev
```

Vous pouvez également lancer les tests unitaires du projets avec:

```bash
npm run test
```

## Stack technique utilisé

Node est requis pour utiliser ce projet.

Le projet utilise le framework Next.js dans sa dernière version.

Pour le stockage des données, il utilise MongoDB, une base de données NoSQL.

Afin de permettre à l'utilisateur d'explorer l'API, un Swagger est également mis en place.

Enfin, pour les tests unitaires, le projet utilise le framework Jest.

## Swagger

En local, le swagger est accessible à l'URL suivante:
http://localhost:3000/swagger
