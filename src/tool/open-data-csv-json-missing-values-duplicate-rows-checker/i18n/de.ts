import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'offene-daten-csv-json-fehlende-werte-doppelte-zeilen-pruefer',
  title: 'Prüfer für fehlende Werte in CSV aus offenen Daten',
  description: 'Prüft CSV- und JSON-Tabellen lokal auf fehlende Werte, doppelte Zeilen, gemischte Typen, Parserfehler und numerische Ausreißer.',
  ui: { ...ui, fileLabel: 'CSV- oder JSON-Tabelle laden', pasteLabel: 'Oder Tabelle einfügen', exampleButton: 'Beispiel prüfen', profileButton: 'Daten prüfen', clearButton: 'Profil löschen', noFile: 'Keine Datei ausgewählt', dropHint: 'Datei ablegen oder vom Gerät auswählen', localBoundary: 'Die Datei bleibt im Browser. Nichts wird hochgeladen.', intakeTitle: 'Tabelle zur Prüfung bringen', emptyTitle: 'Die Prüfstation ist bereit', factsTitle: 'Aus den Daten gemessene Fakten', signalTitle: 'Signalübersicht', signalIntro: 'Beginne mit den Signalen, die eine menschliche Entscheidung brauchen.', warningsTitle: 'Signale brauchen Kontext', reviewTitle: 'Bearbeitbare Prüfnotiz' },
  seo: [
    { type: 'title', text: 'Strukturelle Probleme in Open-Data-Tabellen finden', level: 2 },
    { type: 'paragraph', html: 'Eine Tabelle kann ordentlich aussehen und trotzdem leere Felder, doppelte Datensätze, gemischte Werttypen, fehlerhafte Zeilen oder extreme Zahlen enthalten. Dieses Werkzeug liest CSV oder JSON lokal im Browser und macht die Signale als nachvollziehbare Zählungen sichtbar.' },
    { type: 'title', text: 'Was vor der Wiederverwendung geprüft werden sollte', level: 2 },
    { type: 'paragraph', html: 'Fehlende, null und leere Werte werden getrennt gezählt. Doppelte Zeilen werden mit ihren Zeilennummern gemeldet, und numerische Ausreißer werden mit Tukey-1,5-IQR-Grenzen markiert. Ein Signal ist eine Prüfungsfrage, kein Qualitätsurteil.' },
    { type: 'list', items: ['CSV-Kopfzeile und JSON-Struktur mit der Quelldokumentation vergleichen.', 'Doppelte Zeilen prüfen, bevor Datensätze entfernt werden.', 'Gemischte Typen und Ausreißer mit Einheiten und Fachkontext bewerten.', 'Quelle, Zeitraum, Definitionen und Verwendungszweck neben dem Profil aufbewahren.'] },
  ],
  faqTitle: 'Fragen zur Tabellenprüfung',
  faq: [
    { question: 'Welche Dateien werden geprüft?', answer: 'Eine CSV-Datei mit Kopfzeile oder ein JSON-Array aus Objekten. Ein JSON-Objekt darf das Array auch unter data, rows oder records enthalten.' },
    { question: 'Wie werden fehlend, null, leer und null als Zahl unterschieden?', answer: 'Eine fehlende JSON-Eigenschaft, JSON null, ein leerer Text und der numerische Wert null werden getrennt erfasst.' },
    { question: 'Wie werden Ausreißer berechnet?', answer: 'Das Werkzeug verwendet Tukey-Grenzen mit dem 1,5-fachen Interquartilsabstand und meldet die betroffenen Zeilen.' },
    { question: 'Beweist das eine hohe Datenqualität?', answer: 'Nein. Es misst strukturelle Signale, aber keine semantische Richtigkeit, Genauigkeit, Herkunft, Rechtmäßigkeit oder Eignung.' },
  ],
  bibliography,
  howTo: [
    { name: 'Tabelle vorbereiten', text: 'Eine stabile CSV-Kopfzeile oder ein JSON-Array verwenden und Quellenkontext bereithalten.' },
    { name: 'Daten laden', text: 'Eine lokale Datei wählen, Text einfügen oder das Beispiel öffnen.' },
    { name: 'Signale lesen', text: 'Fehlende, leere, doppelte, gemischte und auffällige Werte prüfen.' },
    { name: 'Quellzeilen verfolgen', text: 'Mit Zeilennummern und Spaltenbefunden zur Originaldatei zurückkehren.' },
    { name: 'Prüfung notieren', text: 'Zweck und Entscheidungen ergänzen und die Notiz mit der Quelle speichern.' },
  ],
});
