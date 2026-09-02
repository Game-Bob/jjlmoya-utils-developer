import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'oppna-data-csv-json-saknade-varden-dubbla-rader-kontroll',
  title: 'Kontroll av saknade värden i CSV för öppna data',
  description: 'Kontrollera CSV- och JSON-tabeller lokalt för saknade värden, dubbla rader, blandade typer, tolkningsfel och numeriska avvikelser.',
  ui: { ...ui, fileLabel: 'Läs in en CSV- eller JSON-tabell', pasteLabel: 'Eller klistra in en tabell', exampleButton: 'Granska exemplet', profileButton: 'Kontrollera data', clearButton: 'Rensa profil', noFile: 'Ingen fil vald', dropHint: 'Släpp en fil eller välj en från enheten', localBoundary: 'Filen stannar i den här webbläsaren. Inget laddas upp.', intakeTitle: 'Lägg tabellen på kontrollbänken', emptyTitle: 'Kontrollbänken är klar', factsTitle: 'Fakta som mätts från dina data', signalTitle: 'Signalkarta', signalIntro: 'Börja med signalerna som kräver mänskliga beslut.', warningsTitle: 'Signaler som kräver sammanhang', reviewTitle: 'Redigerbar granskningsnotis' },
  seo: [
    { type: 'title', text: 'Hitta strukturella problem innan öppna data återanvänds', level: 2 },
    { type: 'paragraph', html: 'En tabell kan se välordnad ut men ändå dölja tomma fält, dubbla poster, blandade värdetyper, felaktiga rader eller extrema tal. Verktyget läser CSV och JSON i webbläsaren och gör signalerna till räkningar som kan spåras till källraderna.' },
    { type: 'title', text: 'Kontrollera en offentlig tabell med källans sammanhang', level: 2 },
    { type: 'paragraph', html: 'Saknade, null och tomma värden räknas separat. Dubbla rader visas med radnummer och numeriska avvikelser använder Tukeys 1,5 IQR-gränser. En signal är en fråga att granska, inte ett kvalitetsomdöme.' },
    { type: 'list', items: ['Jämför CSV-raden med rubriker eller JSON-strukturen med källdokumentationen.', 'Kontrollera dubbla rader innan poster tas bort.', 'Bedöm blandade typer och avvikelser med enheter och domänsammanhang.', 'Spara källa, period, definitioner och avsedd användning bredvid profilen.'] },
  ],
  faqTitle: 'Frågor om tabellkontroll',
  faq: [
    { question: 'Vilka filer kan kontrolleras?', answer: 'En CSV med rubrikrad eller en JSON-array med objekt. Ett JSON-objekt kan också lägga arrayen under data, rows eller records.' },
    { question: 'Hur skiljs saknat, null, tomt och noll åt?', answer: 'En saknad JSON-egenskap, JSON null, en tom text och numerisk noll registreras separat.' },
    { question: 'Hur beräknas avvikelser?', answer: 'Verktyget använder Tukey-gränser vid 1,5 gånger kvartilavståndet och visar berörda rader.' },
    { question: 'Bevisar detta hög datakvalitet?', answer: 'Nej. Det mäter strukturella signaler men bevisar inte semantisk riktighet, noggrannhet, ursprung, laglighet eller lämplighet.' },
  ],
  bibliography,
  howTo: [
    { name: 'Förbered tabellen', text: 'Använd en stabil CSV-rubrik eller JSON-array och ha källans sammanhang nära.' },
    { name: 'Läs in data', text: 'Välj en lokal fil, klistra in text eller öppna exemplet.' },
    { name: 'Läs signalerna', text: 'Granska antal saknade, tomma, dubbla, blandade och avvikande värden.' },
    { name: 'Spåra källrader', text: 'Gå tillbaka till originalfilen med radnummer och kolumnresultat.' },
    { name: 'Redigera notisen', text: 'Lägg till syfte och beslut och spara notisen med källan.' },
  ],
});
