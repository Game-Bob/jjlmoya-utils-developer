import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'open-data-csv-json-ontbrekende-waarden-dubbele-rijen-controle',
  title: 'Controle van ontbrekende waarden in open data CSV',
  description: 'Controleer CSV- en JSON-tabellen lokaal op ontbrekende waarden, dubbele rijen, gemengde typen, parsefouten en numerieke uitschieters.',
  ui: { ...ui, fileLabel: 'CSV- of JSON-tabel laden', pasteLabel: 'Of plak een tabel', exampleButton: 'Voorbeeld bekijken', profileButton: 'Deze gegevens controleren', clearButton: 'Profiel wissen', noFile: 'Geen bestand geselecteerd', dropHint: 'Zet een bestand neer of kies er een op je apparaat', localBoundary: 'Je bestand blijft in deze browser. Er wordt niets geüpload.', intakeTitle: 'Breng een tabel naar de controlebank', emptyTitle: 'De inspectiebank is klaar', factsTitle: 'Feiten gemeten uit je gegevens', signalTitle: 'Signaalkaart', signalIntro: 'Begin met signalen die een menselijke beslissing vragen.', warningsTitle: 'Signalen die context nodig hebben', reviewTitle: 'Bewerkbare controlenotitie' },
  seo: [
    { type: 'title', text: 'Vind structurele problemen voordat je open data hergebruikt', level: 2 },
    { type: 'paragraph', html: 'Een tabel kan netjes lijken en toch lege velden, dubbele records, gemengde typen, beschadigde rijen of extreme getallen bevatten. Deze tool leest CSV en JSON in de browser en maakt de signalen zichtbaar als aantallen die naar de bronrijen terug te volgen zijn.' },
    { type: 'title', text: 'Controleer een openbare tabel met broncontext', level: 2 },
    { type: 'paragraph', html: 'Ontbrekende, null- en lege waarden worden apart geteld. Dubbele rijen worden met hun rijnummers gemeld en numerieke uitschieters gebruiken Tukey 1,5 IQR-grenzen. Een signaal is een controlepunt, geen kwaliteitsoordeel.' },
    { type: 'list', items: ['Vergelijk de CSV-kop of JSON-structuur met de brondocumentatie.', 'Controleer dubbele rijen voordat je records verwijdert.', 'Beoordeel gemengde typen en uitschieters met eenheden en domeincontext.', 'Bewaar bron, periode, definities en beoogd gebruik naast het profiel.'] },
  ],
  faqTitle: 'Vragen over tabelcontrole',
  faq: [
    { question: 'Welke bestanden kan de tool controleren?', answer: 'Een CSV met een kopregel of een JSON-array van objecten. Een JSON-object mag de array ook onder data, rows of records bevatten.' },
    { question: 'Hoe worden ontbrekend, null, leeg en nul onderscheiden?', answer: 'Een ontbrekende JSON-eigenschap, JSON null, lege tekst en numerieke nul worden afzonderlijk geregistreerd.' },
    { question: 'Hoe worden uitschieters berekend?', answer: 'De tool gebruikt Tukey-grenzen op 1,5 keer de interkwartielafstand en meldt de betrokken rijen.' },
    { question: 'Bewijst dit een hoge datakwaliteit?', answer: 'Nee. Het meet structurele signalen, maar bewijst geen semantische juistheid, nauwkeurigheid, herkomst, legaliteit of geschiktheid.' },
  ],
  bibliography,
  howTo: [
    { name: 'Tabel voorbereiden', text: 'Gebruik een stabiele CSV-kop of JSON-array en houd de broncontext bij de hand.' },
    { name: 'Gegevens laden', text: 'Kies een lokaal bestand, plak tekst of open het voorbeeld.' },
    { name: 'Signalen lezen', text: 'Bekijk aantallen voor ontbrekende, lege, dubbele, gemengde en afwijkende waarden.' },
    { name: 'Bronrijen volgen', text: 'Ga met rijnummers en kolombevindingen terug naar het originele bestand.' },
    { name: 'Controle noteren', text: 'Voeg doel en beslissingen toe en bewaar de notitie bij de bron.' },
  ],
});
