# Dossier Projets

Ce dossier contient les pages individuelles pour chaque projet.

## Structure

- `projet-template.html` : Template à dupliquer pour chaque nouveau projet
- `projet-styles.css` : Styles communs pour toutes les pages de projets
- `images/` : Dossier pour les captures d'écran et images des projets

## Comment ajouter un nouveau projet

### 1. Créer la page du projet

1. Dupliquer `projet-template.html`
2. Renommer le fichier (ex: `mon-projet.html`)
3. Modifier le contenu :
   - Titre et description
   - Technologies utilisées
   - Fonctionnalités
   - Ajouter des captures d'écran
   - Liens GitHub/demo

### 2. Ajouter le projet sur la page d'accueil

Dans `index.html`, dans la section `#projets`, ajouter une carte :

```html
<div class="project-card">
  <div class="project-image" style="background: url('projets/images/mon-projet.jpg') center/cover;"></div>
  <div class="project-content">
    <h3>🚀 Nom du Projet</h3>
    <p>Description courte du projet...</p>
    <div class="project-tags">
      <span class="tag">Java</span>
      <span class="tag">Python</span>
    </div>
    <a href="projets/mon-projet.html" class="project-link">Voir le projet →</a>
  </div>
</div>
```

### 3. Ajouter des images

Placer les images dans `projets/images/` et les référencer dans les pages HTML.

## Conseils

- Utilise des noms de fichiers clairs et sans espaces (utilise des tirets)
- Optimise tes images avant de les ajouter
- Teste toujours tes liens avant de commit
- Garde une cohérence dans la présentation de tes projets
