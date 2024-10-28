import james from "../assets/james.jpg";
import carl from "../assets/carl.jpg";
import alfred from "../assets/alfred.jpg";
import jhon from "../assets/jhon.jpg";
import erikson from "../assets/erikson.jpg";
import jean from "../assets/jean.jpg";
import abraham from "../assets/abraham.jpg";
import rogers from "../assets/rogers.jpg";
import albert from "../assets/albert.jpg";
import lev from "../assets/lev.jpg";
import skinner from "../assets/skinner.jpg";

const tokohPsikologi = [
  {
    id: 1,
    nama: "Sigmund Freud",
    bidang: "Psikoanalisis",
    teori: "Teori Kepribadian dan Psikoanalisis",
    kontribusi:
      "Pendiri psikoanalisis, memperkenalkan konsep id, ego, dan superego.",
    materi:
      "Sigmund Freud mengembangkan psikoanalisis, sebuah pendekatan yang mengkaji alam bawah sadar manusia. Ia mengemukakan bahwa kepribadian terdiri dari tiga elemen utama: id (naluri dasar), ego (kesadaran), dan superego (moralitas). Konsep ini sangat berpengaruh dalam memahami konflik internal individu dan mekanisme pertahanan diri.",
    gambar: james,
  },
  {
    id: 2,
    nama: "Carl Jung",
    bidang: "Psikologi Analitis",
    teori: "Teori Kepribadian Jung",
    kontribusi:
      "Mengembangkan konsep arketipe, kolektif tak sadar, dan individuasi.",
    materi:
      "Carl Jung adalah pencetus psikologi analitis. Ia memperkenalkan konsep arketipe dan kolektif tak sadar, yang menyatakan bahwa setiap orang memiliki simbol dan pengalaman yang diwarisi dalam alam bawah sadar mereka. Jung juga mempromosikan proses individuasi, yaitu perjalanan untuk mengenali dan menyatukan aspek sadar dan tak sadar diri.",
    gambar: carl,
  },
  {
    id: 3,
    nama: "Alfred Adler",
    bidang: "Psikologi Individual",
    teori: "Teori Inferioritas",
    kontribusi:
      "Menekankan pentingnya perasaan inferioritas dan kompensasi dalam pengembangan kepribadian.",
    materi:
      "Alfred Adler mendirikan psikologi individual, yang menyoroti peran perasaan rendah diri dalam membentuk perilaku dan motivasi individu. Ia percaya bahwa manusia terdorong untuk mengatasi kekurangan mereka dan mencapai superioritas. Konsep kompensasi ini menjadi dasar dalam memahami perilaku adaptif dan maladaptif.",
    gambar: alfred,
  },
  {
    id: 4,
    nama: "John B. Watson",
    bidang: "Psikologi Perilaku",
    teori: "Teori Behaviorisme",
    kontribusi:
      "Pendiri aliran behaviorisme, menekankan pentingnya pengaruh lingkungan terhadap perilaku.",
    materi:
      "John B. Watson adalah pelopor behaviorisme, yang meneliti perilaku yang dapat diamati dan pengaruh lingkungan terhadap perilaku manusia. Ia menekankan bahwa semua perilaku adalah hasil dari interaksi dengan lingkungan, bukan hasil dari proses internal yang tidak terlihat.",
    gambar: jhon,
  },
  {
    id: 5,
    nama: "Carl Rogers",
    bidang: "Psikologi Humanistik",
    teori: "Teori Terapi Berpusat pada Klien",
    kontribusi:
      "Mengembangkan pendekatan terapi yang menekankan empati dan penerimaan tanpa syarat.",
    materi:
      "Carl Rogers mengembangkan terapi berpusat pada klien, yang mengedepankan empati, penerimaan tanpa syarat, dan keaslian terapis. Ia percaya bahwa lingkungan yang suportif memungkinkan individu untuk memahami diri dan mencapai pertumbuhan pribadi.",
    gambar: rogers,
  },
  {
    id: 6,
    nama: "Abraham Maslow",
    bidang: "Psikologi Humanistik",
    teori: "Hierarki Kebutuhan",
    kontribusi:
      "Memperkenalkan konsep hierarki kebutuhan, puncaknya adalah aktualisasi diri.",
    materi:
      "Abraham Maslow terkenal dengan teori hierarki kebutuhan, yang menggambarkan kebutuhan manusia mulai dari kebutuhan dasar hingga kebutuhan aktualisasi diri. Menurutnya, individu hanya dapat mencapai potensi penuh mereka setelah kebutuhan dasar terpenuhi.",
    gambar: abraham,
  },
  {
    id: 7,
    nama: "Jean Piaget",
    bidang: "Psikologi Perkembangan",
    teori: "Teori Tahapan Kognitif",
    kontribusi:
      "Meneliti perkembangan kognitif anak, membagi perkembangan menjadi tahapan sensorimotor, praoperasional, operasional konkret, dan operasional formal.",
    materi:
      "Jean Piaget mempelajari perkembangan kognitif anak dan mengidentifikasi empat tahapan utama: sensorimotor, praoperasional, operasional konkret, dan operasional formal. Penelitiannya menjelaskan bagaimana anak memahami dunia secara berbeda di setiap tahap perkembangan.",
    gambar: jean,
  },
  {
    id: 8,
    nama: "Erik Erikson",
    bidang: "Psikologi Perkembangan",
    teori: "Teori Tahapan Psikososial",
    kontribusi:
      "Mengembangkan teori delapan tahapan perkembangan psikososial sepanjang kehidupan.",
    materi:
      "Erik Erikson memperkenalkan delapan tahap perkembangan psikososial yang mencakup seluruh kehidupan. Setiap tahap melibatkan konflik psikososial yang harus diselesaikan individu untuk mencapai kesehatan mental dan kematangan emosional.",
    gambar: erikson,
  },
  {
    id: 9,
    nama: "B.F. Skinner",
    bidang: "Psikologi Perilaku",
    teori: "Teori Pengkondisian Operan",
    kontribusi:
      "Mengembangkan teori perilaku berdasarkan prinsip reward dan punishment.",
    materi:
      "B.F. Skinner mengembangkan teori pengkondisian operan, yang menyatakan bahwa perilaku dipengaruhi oleh reward (penguatan) dan punishment (hukuman). Ia menekankan bahwa perilaku yang diperkuat cenderung berulang, sedangkan yang dihukum akan berkurang.",
    gambar: skinner,
  },
  {
    id: 10,
    nama: "Lev Vygotsky",
    bidang: "Psikologi Kognitif",
    teori: "Teori Perkembangan Sosial-Kognitif",
    kontribusi:
      "Menekankan pentingnya interaksi sosial dalam perkembangan kognitif.",
    materi:
      "Lev Vygotsky percaya bahwa perkembangan kognitif sangat dipengaruhi oleh interaksi sosial dan budaya. Ia mengemukakan konsep 'zone of proximal development' yang menyatakan bahwa anak belajar lebih efektif dengan bimbingan dari orang yang lebih ahli.",
    gambar: lev,
  },
  {
    id: 11,
    nama: "Albert Bandura",
    bidang: "Psikologi Sosial",
    teori: "Teori Pembelajaran Sosial",
    kontribusi:
      "Mengembangkan konsep modeling dan self-efficacy dalam proses pembelajaran.",
    materi:
      "Albert Bandura memperkenalkan teori pembelajaran sosial, yang menekankan pentingnya pengamatan, imitasi, dan modeling dalam belajar. Ia juga mengemukakan konsep self-efficacy, yaitu keyakinan individu pada kemampuannya untuk mengatasi tantangan.",
    gambar: albert,
  },
];

export default tokohPsikologi;
