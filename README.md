# 🐻 Web App Histoires de Pepper

Bienvenue dans le projet **Histoires de Pepper** ! 

Il s'agit d'une application web interactive spécialement conçue pour les enfants. Elle met en scène les aventures de  **Helmouth le mammouth** avec **Pepper le robot** . 

### 🎯 Démarche pédagogique et éducative
Le but central de ce projet est de présenter deux histoires avec deux approches différentes : **une version racontée avec beaucoup d'émotions** et **une version sans émotion** (neutre).  
L'objectif est d'étudier et d'observer si l'enfant **réagit mieux, comprend plus facilement l'histoire, et s'immerge davantage** face à l'une de ces deux interprétations. 

Pour les accompagner au mieux, les enfants sont plongés dans un univers interactif doux et apaisant inspiré de la nature (avec un ciel bleu, des arbres, le soleil et des nuages animés). Ils disposent d'un lecteur vidéo intuitif complètement adapté à leur âge.

---

## 🌟 Accès Rapide (Utilisation immédiate sans installation)

Pour ceux qui souhaitent tester, présenter l'expérience ou **utiliser l'application directement** sans avoir à télécharger ou à installer le moindre fichier :
👉 **[Cliquez ici pour ouvrir le site en direct](https://Michkou.github.io/web-app-histoires/)**

---

## 🛠️ Comment utiliser ce projet sur votre ordinateur

Si vous avez téléchargé le dossier de ce projet (par exemple via un fichier `.zip` ou une clé USB) et que vous souhaitez le faire fonctionner sur votre ordinateur, suivez les étapes ci-dessous.

### 1. Prérequis
Avant de commencer, vous devez absolument avoir installé **Node.js** sur votre machine, car ce projet utilise React et Vite.js.
- [Télécharger Node.js ici](https://nodejs.org/) (prenez la version LTS "Recommended for most users" et installez-la).

### 2. Démarrage de l'application
Une fois Node.js installé, voici comment lancer le site :

1. **Ouvrez le dossier du projet** sur votre ordinateur (décompressez-le si c'est un `.zip`).
2. **Ouvrez un terminal** (Invite de commandes sur Windows ou Terminal sur Mac/Linux) dans ce dossier.
   - *Astuce sur Windows :* Allez dans votre dossier, cliquez dans la barre d'adresse en haut, tapez `cmd` et appuyez sur Entrée.
3. **Installez les dépendances du projet** en tapant la commande suivante dans le terminal, puis appuyez sur Entrée :
   ```bash
   npm install
   ```
   *(Attendez quelques secondes ou minutes que le téléchargement se termine).*
4. **Démarrez le site** en tapant cette dernière commande :
   ```bash
   npm run dev
   ```

### 3. Visualisation
Une fois le serveur démarré, le terminal vous affichera une adresse locale. 
👉 Ouvrez votre navigateur internet (Chrome, Firefox, Safari) et allez à l'adresse **http://localhost:5173**. 
Le site devrait s'afficher et vous pourrez l'utiliser !

---

## � Structure du projet (Pour les développeurs)
- `src/` : Contient tout le code source de l'application.
- `src/components/` : Composants interactifs et réutilisables.
- `src/pages/` : Les différentes vues du site (Accueil, Vidéo, etc.).
- `public/` : Contient les médias (images, vidéos) et éléments statiques.
