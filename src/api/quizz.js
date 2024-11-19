import skinner from "../assets/skinner.jpg";

const quiz = [
  {
    id: 1,
    question: "Sigmund Freud dikenal karena teorinya tentang:",
    options: [
      "Psikologi perkembangan",
      "Kondisi klasik",
      "Struktur kepribadian (id, ego, superego)",
      "Penguatan positif",
    ],
    answer: "Struktur kepribadian (id, ego, superego)",
  },
  {
    id: 2,
    question: "Carl Jung memperkenalkan konsep:",
    options: [
      "Hierarki kebutuhan",
      "Tahap-tahap perkembangan kognitif",
      "Kolektif tak sadar",
      "Penguatan negatif",
    ],
    answer: "Kolektif tak sadar",
  },
  {
    id: 3,
    question: "Abraham Maslow dikenal karena teorinya tentang:",
    options: [
      "Hierarki kebutuhan",
      "Struktur kepribadian",
      "Tahap-tahap perkembangan kognitif",
      "Teori penguatan",
    ],
    answer: "Hierarki kebutuhan",
  },
  {
    id: 4,
    question:
      "Thorndike menggunakan metode apa dalam eksperimennya untuk mempelajari perilaku?",
    options: [
      "Kondisi klasik",
      "Pembelajaran sosial",
      "Kondisi operan",
      "Percobaan dan kesalahan (trial and error)",
    ],
    answer: "Percobaan dan kesalahan (trial and error)",
  },
  {
    id: 5,
    question: "Siapakah gambar tokoh di atas:",
    options: ["Carls Rogers", "Albert Bandura", "B. F Skinner", "Alfred Adler"],
    answer: "B. F Skinner", // B. F Skinner
    gambar: skinner,
  },
];
export default quiz;
