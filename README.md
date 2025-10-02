# Odin-Start-Jahrdin

Suivi du parcours *The Odin Project* (Jahrdin)

---

## 🎯 Objectif du projet “Calculator”

Construire une calculatrice avec interface graphique qui :
- effectue les opérations de base (+, −, ×, ÷),
- gère les décimales,
- empêche les entrées invalides (point multiple, trop de chiffres),
- prend en charge le clavier,
- affiche les résultats de manière propre (arrondis, pas d’erreur visuelle),
- est bien structurée, modulaire et extensible.

---

## 🚧 Fonctionnalités implémentées

- Ajout de chiffres (0–9)  
- Ajout du point décimal (.) avec contrôle pour ne pas en avoir deux  
- Opérateur (+, −, ×, ÷)  
- Calcul (=)  
- Bouton “C” (supprimer le dernier chiffre)  
- Bouton “AC” (reset complet)  
- Limitation de longueur (12 caractères max)  
- Arrondi des résultats à 3 décimales  
- Gestion de la division par zéro → affichage “Error”  
- Support du clavier (chiffres, ., opérateurs, Enter, Backspace, Escape)  
- Affichage séparé “previous” + “current”  
- Code bien refactorisé en fonctions (`appendNumber`, `appendDot`, `chooseOperator`, `compute`, `updateDisplay`)  

---

## 🧠 Architecture & logique

### Variables d’état globales
- `previousOperand` : nombre “stocké” avant l’opérateur  
- `currentOperand` : nombre en cours de saisie  
- `operator` : l’opérateur choisi (+, −, ×, ÷)

### Fonctions principales

| Fonction | Rôle |
|---|---|
| `updateDisplay()` | Met à jour les éléments `.previous` et `.current` selon les variables d’état |
| `appendNumber(number)` | Ajoute un chiffre au `currentOperand` si limite non atteinte |
| `appendDot()` | Ajoute “.” s’il n’y en a pas déjà, avec contrôle de longueur |
| `chooseOperator(op)` | Gère le cas où on change d’opérateur, ou exécute un calcul intermédiaire |
| `compute()` | Réalise le calcul final, arrondit, gère la division par zéro |
| `operate(operator, a, b)` | Délègue vers `add`, `subtract`, `multiply`, `divide` selon l’opérateur |

### Flux d’un clic / touche clavier

1. Lorsqu’un bouton (ou une touche) est pressé(e), on lit sa valeur (`value` ou `e.key`)  
2. Selon le type (chiffre, point, opérateur, =, C, AC) on appelle la fonction correspondante  
3. Après modification des variables, on appelle `updateDisplay()` pour rafraîchir l’UI  

---

## 🧪 Cas de test & scénarios vérifiés

- **20 + 20 + 20 =** → 60  
- **7 + 3 × 2 =** → calcul séquentiel (TOP ne gère pas la priorité des opérateurs)  
- **0.1 + 0.2 =** → 0.3 (et non 0.30000000000000004)  
- **Entrée de plus de 12 chiffres** → bloque la saisie  
- **Entrée de deux points** → bloque sur le deuxième point  
- **Division par zéro** → affichage "Error"  
- **Utilisation du clavier** → “1 + 2 Enter” affiche 3  
- **Backspace (retour arrière)** → supprime le dernier chiffre  
- **Escape (AC)** → remet tout à zéro  

---

## 📚 Règles pédagogiques & méthode

- **Pas de code donné sans le vouloir** : expliquer la logique, donner des étapes  
- Le code est toujours **refactorisé en petites fonctions**  
- On progresse selon le plan TOP, sans sauter d’étape  
- Toujours analyser, tester mentalement, corriger et revenir en arrière si besoin  
- Distinguer **logique (JS)** / **interactivité (DOM)** / **affichage (CSS)**  

---

## 🚀 Prochaines étapes projet

- Gérer le bouton `%`  
- Ajouter une fonction “+ / −” pour inverser le signe  
- Améliorer le style visuel, faire une version responsive  
- Eventuellement convertir en classe JS ou module  
- Développer d’autres mini projets TOP  

---

## 📌 Workflow Git

```bash
git add .
git commit -m "Ajouter fonctionnalité calculator avec clavier"
git push origin main
