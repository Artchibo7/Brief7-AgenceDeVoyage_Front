
README - Projet Symfony Backend

Description
Ce projet Symfony Backend est conçu pour fournir une API sécurisée avec les opérations CRUD (Create, Read, Update, Delete) pour gérer les données d'une application. La sécurité est mise en avant avec l'implémentation de JWT (JSON Web Tokens) pour l'authentification et l'autorisation des utilisateurs.

Prérequis
PHP >= 7.4
Composer installé localement
Symfony CLI (pour le développement)
MySQL ou un autre système de gestion de base de données compatible avec Doctrine
Installation
Cloner ce dépôt sur votre machine locale.
Exécuter composer install pour installer les dépendances.
Configurer votre base de données dans le fichier .env.
Exécuter php bin/console doctrine:database:create pour créer la base de données.
Exécuter php bin/console doctrine:migrations:migrate pour exécuter les migrations.
Exécuter php bin/console doctrine:fixtures:load pour charger les données de test (optionnel).
Utilisation
Lancez le serveur Symfony en exécutant symfony server:start -d
Accédez à l'API via l'URL fournie par Symfony CLI (par défaut: http://localhost:8000).
Sécurisation
L'API utilise JWT pour l'authentification. Les utilisateurs doivent s'authentifier avec un token JWT valide pour accéder aux ressources protégées. Les tokens JWT sont générés lors de la connexion et doivent être inclus dans l'en-tête Authorization pour chaque requête protégée.

CRUD
L'API expose les endpoints suivants pour les opérations CRUD :

POST /api/resource : Créer une nouvelle ressource.
GET /api/resource/{id} : Récupérer une ressource par ID.
PUT /api/resource/{id} : Mettre à jour une ressource existante.
DELETE /api/resource/{id} : Supprimer une ressource existante.
README - Projet React Next.js Frontend

Description
Ce projet React Next.js Frontend est conçu pour fournir une interface utilisateur moderne pour interagir avec l'API Symfony Backend. Il utilise React.js et Next.js pour créer des applications web rapides et réactives.

Prérequis
Node.js >= 12.x
npm ou yarn installé localement
Accès à l'API Symfony Backend
Installation
Cloner ce dépôt sur votre machine locale.
Exécuter npm install ou yarn install pour installer les dépendances.
Configuration
Modifier les variables d'environnement dans le fichier .env pour spécifier l'URL de l'API Symfony Backend.
Utilisation
Lancez l'application en exécutant npm run dev ou yarn dev.
Accédez à l'application dans votre navigateur via l'URL fournie par Next.js (par défaut: http://localhost:3000).
Procédure de mise en ligne
Générer une version de production de l'application en exécutant npm run build ou yarn build.
Déployer les fichiers générés (généralement dans le dossier ./out ou ./build) sur un serveur compatible avec Node.js.
Assurez-vous de configurer les variables d'environnement pour l'URL de l'API Symfony Backend sur le serveur de production.
Lancer l'application sur le serveur en utilisant un processus Node.js en arrière-plan ou un serveur HTTP comme Nginx.
Remarque
Assurez-vous de mettre en place les règles CORS sur le serveur Symfony Backend pour autoriser les requêtes provenant du domaine où l'application React Next.js est hébergée.





