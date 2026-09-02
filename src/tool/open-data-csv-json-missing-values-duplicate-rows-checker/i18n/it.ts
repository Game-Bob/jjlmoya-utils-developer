import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'dati-aperti-csv-json-valori-mancanti-righe-duplicate-controllo',
  title: 'Controllo valori mancanti per CSV di dati aperti',
  description: 'Controlla localmente tabelle CSV e JSON per trovare valori mancanti, righe duplicate, tipi misti, errori di analisi e valori numerici anomali.',
  ui: { ...ui, fileLabel: 'Carica una tabella CSV o JSON', pasteLabel: 'Oppure incolla una tabella', exampleButton: 'Controlla esempio', profileButton: 'Controlla questi dati', clearButton: 'Cancella profilo', noFile: 'Nessun file selezionato', dropHint: 'Trascina un file o scegline uno dal dispositivo', localBoundary: 'Il file resta nel browser. Nulla viene caricato.', intakeTitle: 'Porta una tabella al banco di controllo', emptyTitle: 'Il banco di controllo è pronto', factsTitle: 'Fatti misurati dai tuoi dati', signalTitle: 'Mappa dei segnali', signalIntro: 'Inizia dai segnali che richiedono una decisione umana.', warningsTitle: 'Segnali che richiedono contesto', reviewTitle: 'Nota di controllo modificabile' },
  seo: [
    { type: 'title', text: 'Trova problemi strutturali prima di riutilizzare dati aperti', level: 2 },
    { type: 'paragraph', html: 'Una tabella può sembrare ordinata e nascondere campi vuoti, record duplicati, tipi misti, righe malformate o numeri estremi. Questo strumento legge CSV e JSON nel browser e trasforma i segnali in conteggi riconducibili alle righe fornite.' },
    { type: 'title', text: 'Controlla una tabella pubblica con il contesto della fonte', level: 2 },
    { type: 'paragraph', html: 'I valori assenti, null e vuoti vengono conteggiati separatamente. Le righe duplicate sono indicate con il numero di riga e i valori numerici anomali usano i limiti IQR di Tukey. Un segnale è una domanda da verificare, non un verdetto.' },
    { type: 'list', items: ['Confronta intestazione CSV o struttura JSON con la documentazione della fonte.', 'Controlla le righe duplicate prima di eliminare record.', 'Valuta tipi misti e anomalie usando unità e contesto del dominio.', 'Conserva fonte, periodo, definizioni e uso previsto insieme al profilo.'] },
  ],
  faqTitle: 'Domande sul controllo delle tabelle',
  faq: [
    { question: 'Quali file possono essere controllati?', answer: 'Un CSV con riga di intestazione o un array JSON di oggetti. Un oggetto JSON può contenere l array anche sotto data, rows o records.' },
    { question: 'Come distingue assente, null, vuoto e zero?', answer: 'Una proprietà JSON assente, JSON null, un testo vuoto e lo zero numerico vengono registrati separatamente.' },
    { question: 'Come vengono calcolati i valori anomali?', answer: 'Lo strumento usa i limiti di Tukey a 1,5 volte l intervallo interquartile e mostra le righe interessate.' },
    { question: 'Dimostra una buona qualità dei dati?', answer: 'No. Misura segnali strutturali ma non dimostra correttezza semantica, accuratezza, provenienza, legalità o idoneità.' },
  ],
  bibliography,
  howTo: [
    { name: 'Prepara la tabella', text: 'Usa un intestazione CSV stabile o un array JSON e conserva il contesto della fonte.' },
    { name: 'Carica i dati', text: 'Scegli un file locale, incolla il testo o apri l esempio incluso.' },
    { name: 'Leggi i segnali', text: 'Esamina conteggi di valori assenti, vuoti, duplicati, tipi misti e anomalie.' },
    { name: 'Segui le righe fonte', text: 'Torna al file originale usando numeri di riga e risultati per colonna.' },
    { name: 'Modifica la nota', text: 'Aggiungi scopo e decisioni, poi salva la nota con la fonte.' },
  ],
});
