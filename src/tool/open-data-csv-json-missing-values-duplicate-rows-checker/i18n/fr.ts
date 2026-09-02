import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'donnees-ouvertes-csv-json-valeurs-manquantes-lignes-dupliquees',
  title: 'Vérificateur de valeurs manquantes pour CSV ouverts',
  description: 'Vérifie localement les tableaux CSV et JSON pour repérer les valeurs manquantes, lignes dupliquées, types mixtes, erreurs de lecture et valeurs numériques atypiques.',
  ui: { ...ui, fileLabel: 'Charger un tableau CSV ou JSON', pasteLabel: 'Ou coller un tableau', exampleButton: 'Inspecter l exemple', profileButton: 'Vérifier ces données', clearButton: 'Effacer le profil', noFile: 'Aucun fichier sélectionné', dropHint: 'Déposer un fichier ou en choisir un sur l appareil', localBoundary: 'Le fichier reste dans ce navigateur. Rien n est envoyé.', intakeTitle: 'Apporter un tableau au banc de test', emptyTitle: 'Le banc d inspection est prêt', factsTitle: 'Faits mesurés dans vos données', signalTitle: 'Carte des signaux', signalIntro: 'Commencez par les signaux qui demandent une décision humaine.', warningsTitle: 'Signaux nécessitant du contexte', reviewTitle: 'Note de vérification modifiable' },
  seo: [
    { type: 'title', text: 'Trouver les problèmes structurels avant de réutiliser des données ouvertes', level: 2 },
    { type: 'paragraph', html: 'Un tableau peut sembler propre tout en cachant des champs vides, des enregistrements répétés, des types mélangés, des lignes mal formées ou des nombres extrêmes. Cet outil lit les CSV et JSON dans le navigateur et transforme ces signaux en comptes traçables jusqu aux lignes fournies.' },
    { type: 'title', text: 'Ce qu il faut vérifier dans un tableau public', level: 2 },
    { type: 'paragraph', html: 'Les valeurs absentes, nulles et vides sont comptées séparément. Les lignes dupliquées sont signalées avec leurs numéros et les valeurs numériques atypiques utilisent les bornes IQR de Tukey. Un signal invite à vérifier, il ne prononce pas de jugement.' },
    { type: 'list', items: ['Comparer la ligne d en-tête CSV ou la structure JSON avec la documentation source.', 'Vérifier les lignes répétées avant de supprimer des enregistrements.', 'Interpréter les types mixtes et les valeurs atypiques avec les unités et le domaine.', 'Conserver la source, la période, les définitions et l usage prévu avec le profil.'] },
  ],
  faqTitle: 'Questions sur la vérification des tableaux',
  faq: [
    { question: 'Quels fichiers sont acceptés ?', answer: 'Un CSV avec une ligne d en-tête ou un tableau JSON d objets. Un objet JSON peut aussi contenir le tableau sous data, rows ou records.' },
    { question: 'Comment distinguer absent, null, vide et zéro ?', answer: 'Une propriété JSON absente, JSON null, un texte vide et le zéro numérique sont comptés séparément.' },
    { question: 'Comment les valeurs atypiques sont-elles calculées ?', answer: 'L outil utilise les bornes de Tukey à 1,5 fois l écart interquartile et indique les lignes concernées.' },
    { question: 'Cela prouve-t-il une bonne qualité des données ?', answer: 'Non. Il mesure des signaux structurels, sans prouver la justesse, le sens, la provenance, la légalité ou l adéquation.' },
  ],
  bibliography,
  howTo: [
    { name: 'Préparer le tableau', text: 'Utiliser un en-tête CSV stable ou un tableau JSON et garder le contexte de la source.' },
    { name: 'Charger les données', text: 'Choisir un fichier local, coller le texte ou ouvrir l exemple.' },
    { name: 'Lire les signaux', text: 'Examiner les comptes d absences, de vides, de doublons, de types mixtes et d atypies.' },
    { name: 'Suivre les lignes sources', text: 'Revenir au fichier original avec les numéros de lignes et les résultats par colonne.' },
    { name: 'Modifier la note', text: 'Ajouter le but et les décisions, puis enregistrer la note avec la source.' },
  ],
});
