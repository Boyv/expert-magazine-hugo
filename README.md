> **Note :** Les instructions en français se trouvent après les instructions anglaises. (French instructions follow the English instructions).

# Expert Minimalist Magazine SEO - Hugo Theme


[**🚀 /See Live demo/Voir la Démo Live**](https://boyv.github.io/expert-magazine-hugo/)

**Expert Magazine SEO** is a high-performance Hugo theme designed for experts and consultants. It provides a technically flawless multilingual (FR/EN) showcase, fully optimized for modern SEO (SGE, AI, and GEO).

## 🚀 Key Features

- **Native Multilingual Support**: Seamless management of French and English with an integrated language switcher.
- **SEO "Out of the Box"**:
    - Automatic generation of `hreflang` and `x-default` tags.
    - Full support for **Open Graph** and **Twitter Cards**.
    - Dynamic Meta tags (`og:locale`, titles, descriptions) tailored to each language.
- **Structured Data (JSON-LD)** : Automated `Person` schema for the homepage and `Article` schema for notes/posts to boost E-E-A-T.
- **Expertise Cards**: A dynamic hero section to showcase your core skill sets.
- **Performance**: Lightweight architecture, minified SCSS, FontAwesome icons.

### 🤖 AI-Ready & Speakable Content
The theme includes a specialized "Abstract" block designed for **SGE (Search Generative Experience)** and **GEO (Generative Engine Optimization)**.
- **How to use**: Add an `abstract` parameter in your post's Front Matter.
- **Output**: It generates a visually distinct box and assigns a `speakable-summary` ID, helping AI crawlers identify the core message of your article instantly.
---
title: "My top article"
date: 2024-03-20
abstract: "here you can add a summary. it will be include in the speakable bloc."
---

---

## 🛠 Installation

1. Clone this repository into your `themes/` folder:
   ```bash
   git clone https://github.com/boyv/expert-magazine-hugo.git themes/expert-magazine
2. In your Hugo project root, update your hugo.toml to use the theme:
   theme = "expert-magazine"

⚙️ Multilingual Configuration (hugo.toml)
The theme relies on a specific parameter structure per language. Here is the recommended configuration:
defaultContentLanguage = "en"
languageCode = "en-us"

[languages.en]
  languageCode = "en-us"
  languageName = "English"
  title = "SEO Expert (EN)"
  [languages.en.params]
    tagline = "SEO & AI Project Manager"
    description = "Expert in SEO strategy for the AI era."
    [languages.en.params.author]
      name = "Your Name"
      job_title = "SEO Consultant"
      slogan = "Architecting visibility in the Age of AI and Data."
      description = "Expert in SEO strategy for the AI era."
      tech_stack = ["Python", "Agentic SEO", "GA4"]
    [[languages.en.params.expertises]]
      title = "AI Strategy"
      icon = "fas fa-brain"
      content = "Optimization for AI answer engines (GEO/SGE)."

[languages.fr]
  languageCode = "fr-fr"
  languageName = "Français"
  title = "Expert SEO (FR)"
  [languages.fr.params]
    tagline = "Chef de projet SEO & IA"
    description = "Expert en stratégie SEO pour l'ère de l'IA."
    [languages.fr.params.author]
      name = "Votre Nom"
      job_title = "Consultant SEO"
      slogan = "L'architecture de votre visibilité à l'ère de l'IA et de la Data."
      description = "Expert en stratégie SEO pour l'ère de l'IA."
      tech_stack = ["Python", "SEO Agentique", "GA4"]
    [[languages.fr.params.expertises]]
      title = "Stratégie IA"
      icon = "fas fa-brain"
      content = "Optimisation pour les moteurs de réponse (GEO/SGE)."

[params]
  articles_par_page = 6 # Set to 6 or 9 to respect the 3-column grid layout

💡 Test rapide : Un dossier exampleSite est inclus dans ce dépôt. Vous pouvez copier son contenu à la racine d'un nouveau projet Hugo pour voir le thème en action avec des articles de démonstration.

_____________________________________________________________________________________________________________________________________
# VERSION FRANCE
# Expert Minimaliste Magazine SEO - Hugo Theme

[**🚀 Voir la Démo Live**](https://boyv.github.io/expert-magazine-hugo/)

**Expert Magazine SEO** est un thème Hugo haute performance, conçu pour les experts et consultants souhaitant une vitrine multilingue (FR/EN) techniquement irréprochable et optimisée pour le SEO moderne (SGE, IA, GEO).

## 🚀 Points forts du thème

- **Multilingue Natif** : Gestion fluide du Français et de l'Anglais avec sélecteur de langue intégré.
- **SEO "Out of the box"** :
    - Génération automatique des balises `hreflang` et `x-default`.
    - Support complet de l'**Open Graph** et des **Twitter Cards**.
    - Balises Meta dynamiques (`og:locale`, titres, descriptions) adaptées à chaque langue.
- **Données Structurées (JSON-LD)** : Schéma `Person` sur l'accueil et `Article` sur les pages, automatisé via la configuration.
- **Expertises Cards** : Section d'accueil dynamique pour présenter vos pôles de compétences.

### 🤖 Optimisation pour l'IA (SGE/GEO)
Le thème intègre un bloc "Résumé" spécifiquement conçu pour la **SGE** et le **GEO**.
- **Utilisation** : Ajoutez un paramètre `abstract` dans le Front Matter de vos articles.
- **Rendu** : Cela génère un encadré "Résumé IA & TL;DR" avec l'ID `speakable-summary`, aidant les robots et les IA à extraire
Usage: 
title: "Mon super article"
date: 2024-03-20
abstract: "Ceci est le résumé optimisé pour les IA. Il apparaît dans un bloc spécial en haut de page pour booster le SEO moderne."
--- immédiatement l'essence de votre contenu.

---

## 🛠 Installation

1. Clonez ce dépôt dans votre dossier `themes/` :
   ```bash
   git clone [https://github.com/boyv/expert-magazine-hugo.git](https://github.com/votre-compte/expert-magazine-hugo.git) themes/expert-magazine

2. Dans la racine de votre projet Hugo, modifiez votre fichier hugo.toml pour utiliser le thème :
theme = "expert-magazine"

   ⚙️ Configuration du Multilingue (hugo.toml)
Le thème repose sur une structure de paramètres par langue. Voici l'exemple type :

defaultContentLanguage = "en"
languageCode = "en-us"

[languages.fr]
  languageCode = "fr-fr"
  languageName = "Français"
  title = "Expert SEO (FR)"
  [languages.fr.params]
    tagline = "Chef de projet SEO & IA"
    description = "Expert en stratégie SEO pour l'ère de l'IA."
    [languages.fr.params.author]
      name = "Votre Nom"
      job_title = "Consultant SEO"
      description = "Expert en stratégie SEO pour l'ère de l'IA."
      tech_stack = ["Python", "SEO Agentique", "GA4"]
    [[languages.fr.params.expertises]]
      title = "Stratégie IA"
      icon = "fas fa-brain"
      content = "Optimisation pour les moteurs de réponse (GEO/SGE)."

[languages.en]
  languageCode = "en-us"
  languageName = "English"
  title = "SEO Expert (EN)"
  [languages.en.params]
    tagline = "SEO & AI Project Manager"
    description = "Expert in SEO strategy for the AI era."
    [languages.en.params.author]
      name = "Your Name"
      job_title = "SEO Consultant"
      description = "Expert in SEO strategy for the AI era."
      tech_stack = ["Python", "Agentic SEO", "GA4"]
    [[languages.en.params.expertises]]
      title = "AI Strategy"
      icon = "fas fa-brain"
      content = "Optimization for AI answer engines (GEO/SGE)."

[params]
  articles_par_page = 6 # Set to 6 or 9 to respect the 3-column grid layout

💡 Test rapide : Un dossier exampleSite est inclus dans ce dépôt. Vous pouvez copier son contenu à la racine d'un nouveau projet Hugo pour voir le thème en action avec des articles de démonstration.

   📂 Gestion du Contenu
Pour lier vos articles entre les langues, utilisez le suffixe :

content/notes/mon-article.fr.md (FR)

content/notes/mon-article.en.md (EN)

📄 Licence
Ce thème est sous licence MIT.

👤 Auteur
Yves Boutherand - Expert SEO & IA