import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { localizedUi } from '../localized-ui';

export const content = createLocalizedContent({
  slug: 'open-data-csv-json-missing-values-duplicate-rows-checker',
  title: 'オープンデータCSV欠損値チェッカー',
  description: 'CSVとJSONの表をブラウザー内で確認し、欠損値、重複行、混在型、解析失敗、数値外れ値を見つけます。',
  ui: localizedUi('ja'),
  seo: [
    { type: 'title', text: 'オープンデータを再利用する前に構造上の問題を見つける', level: 2 },
    { type: 'paragraph', html: '表が整って見えても、空欄、重複レコード、混在する値の型、不正な行、極端な数値が隠れていることがあります。このツールはCSVとJSONをブラウザーで読み込み、元の行まで追跡できる件数に変換します。' },
    { type: 'title', text: '公開データ表を出典と一緒に確認する', level: 2 },
    { type: 'paragraph', html: '欠損、null、空文字は別々に数えます。重複行は行番号とともに示し、数値外れ値はTukeyの1.5 IQR境界で印を付けます。シグナルは確認すべき問いであり、品質の判定ではありません。' },
    { type: 'list', items: ['CSVの見出しまたはJSON構造を出典の文書と比較する。', 'レコードを削除する前に重複行を確認する。', '混在型と外れ値を単位や分野の文脈で判断する。', '出典、期間、定義、利用目的をプロファイルと一緒に保存する。'] },
  ],
  faqTitle: '表の確認に関する質問',
  faq: [
    { question: 'どのファイルを確認できますか？', answer: '見出し行を持つCSV、またはオブジェクトのJSON配列です。JSONオブジェクトはdata、rows、recordsの下に配列を置くこともできます。' },
    { question: '欠損、null、空、ゼロをどう区別しますか？', answer: '存在しないJSONプロパティ、JSON null、空文字、数値のゼロを別々に記録します。' },
    { question: '外れ値はどのように計算しますか？', answer: 'Tukeyの1.5倍の四分位範囲による境界を使い、該当する行を示します。' },
    { question: 'データの品質が高いことを証明しますか？', answer: 'いいえ。構造上のシグナルを測定するだけで、意味の正しさ、正確さ、出典、合法性、適合性は証明しません。' },
  ],
  bibliography,
  howTo: [
    { name: '表を準備する', text: '安定したCSV見出しまたはJSON配列を使い、出典の文脈を用意します。' },
    { name: 'データを読み込む', text: 'ローカルファイルを選ぶか、テキストを貼り付けるか、例を開きます。' },
    { name: 'シグナルを読む', text: '欠損、空欄、重複、混在型、外れ値の件数を確認します。' },
    { name: '元の行を追跡する', text: '行番号と列ごとの結果を使って元ファイルに戻ります。' },
    { name: 'メモを編集する', text: '目的と判断を加え、出典と一緒にメモを保存します。' },
  ],
});
