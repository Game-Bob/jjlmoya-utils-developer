import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'data-terbuka-csv-json-nilai-hilang-baris-duplikat-pemeriksa',
  title: 'Pemeriksa Nilai Hilang CSV Data Terbuka',
  description: 'Periksa tabel CSV dan JSON secara lokal untuk menemukan nilai hilang, baris duplikat, tipe campuran, kegagalan parsing, dan pencilan numerik.',
  ui: { ...ui, fileLabel: 'Muat tabel CSV atau JSON', pasteLabel: 'Atau tempel tabel', exampleButton: 'Periksa contoh', profileButton: 'Periksa data ini', clearButton: 'Hapus profil', noFile: 'Belum ada file dipilih', dropHint: 'Jatuhkan file atau pilih dari perangkat', localBoundary: 'File tetap di browser ini. Tidak ada yang diunggah.', intakeTitle: 'Bawa tabel ke meja pemeriksaan', emptyTitle: 'Meja pemeriksaan siap', factsTitle: 'Fakta yang diukur dari data', signalTitle: 'Peta sinyal', signalIntro: 'Mulai dari sinyal yang memerlukan keputusan manusia.', warningsTitle: 'Sinyal yang memerlukan konteks', reviewTitle: 'Catatan pemeriksaan yang dapat diedit' },
  seo: [
    { type: 'title', text: 'Temukan masalah struktur sebelum memakai ulang data terbuka', level: 2 },
    { type: 'paragraph', html: 'Tabel dapat terlihat rapi tetapi menyembunyikan kolom kosong, catatan duplikat, tipe nilai campuran, baris rusak, atau angka ekstrem. Alat ini membaca CSV dan JSON di browser lalu mengubah sinyal tersebut menjadi hitungan yang dapat dilacak ke baris sumber.' },
    { type: 'title', text: 'Periksa tabel publik dengan konteks sumber', level: 2 },
    { type: 'paragraph', html: 'Nilai hilang, null, dan kosong dihitung terpisah. Baris duplikat dilaporkan bersama nomor barisnya, sedangkan pencilan numerik memakai batas IQR Tukey. Sinyal adalah pertanyaan untuk ditinjau, bukan keputusan kualitas.' },
    { type: 'list', items: ['Bandingkan header CSV atau struktur JSON dengan dokumentasi sumber.', 'Periksa baris duplikat sebelum menghapus catatan.', 'Nilai tipe campuran dan pencilan dengan satuan serta konteks bidangnya.', 'Simpan sumber, periode, definisi, dan tujuan penggunaan di samping profil.'] },
  ],
  faqTitle: 'Pertanyaan tentang pemeriksaan tabel',
  faq: [
    { question: 'File apa yang dapat diperiksa?', answer: 'File CSV dengan baris header atau array JSON berisi objek. Objek JSON juga dapat menyimpan array tersebut di bawah data, rows, atau records.' },
    { question: 'Bagaimana nilai hilang, null, kosong, dan nol dibedakan?', answer: 'Properti JSON yang tidak ada, JSON null, teks kosong, dan nol numerik dicatat secara terpisah.' },
    { question: 'Bagaimana pencilan dihitung?', answer: 'Alat ini memakai batas Tukey dengan 1,5 kali rentang interkuartil dan melaporkan baris yang terdampak.' },
    { question: 'Apakah ini membuktikan kualitas data yang tinggi?', answer: 'Tidak. Alat ini mengukur sinyal struktur, bukan kebenaran semantik, akurasi, asal data, legalitas, atau kesesuaian.' },
  ],
  bibliography,
  howTo: [
    { name: 'Siapkan tabel', text: 'Gunakan header CSV yang stabil atau array JSON dan siapkan konteks sumber.' },
    { name: 'Muat data', text: 'Pilih file lokal, tempel teks, atau buka contoh yang tersedia.' },
    { name: 'Baca sinyal', text: 'Periksa hitungan nilai hilang, kosong, duplikat, tipe campuran, dan pencilan.' },
    { name: 'Lacak baris sumber', text: 'Kembali ke file asli dengan nomor baris dan temuan per kolom.' },
    { name: 'Edit catatan', text: 'Tambahkan tujuan dan keputusan lalu simpan catatan bersama sumbernya.' },
  ],
});
