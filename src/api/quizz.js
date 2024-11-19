import skinner from "../assets/skinner.jpg";
import rogers from "../assets/rogers.jpg";
import albert from "../assets/albert.jpg";
import carl from "../assets/carl.jpg";
import alfred from "../assets/alfred.jpg";

const quiz = [
  {
    id: 1,
    question:
      "Dalam eksperimen kotak teka-teki Thorndike, hewan yang digunakan untuk menguji teori pembelajaran adalah:",
    options: ["Anjing", "Kucing", "Monyet", "Burung"],
    answer: "Kucing", // Kucing
  },
  {
    id: 2,
    question: "Sigmund Freud adalah bapak:",
    options: [
      "Psikologi Klinis",
      "Psikoanalisis",
      "Psikologi Kognitif",
      "Psikologi Eksperimen",
    ],
    answer: "Psikoanalisis", // Psikoanalisis
  },
  {
    id: 3,
    question: "Tokoh yang menciptakan terapi Humanistik:",
    options: ["Carls Rogers", "B. F Skinner", "Carl Jung", "Alfred Adler"],
    answer: "Carls Rogers", // Carls Rogers
  },
  {
    id: 4,
    question:
      "Siapakah yang memperkenalkan konsep kesadaran dan ketidaksadaran:",
    options: ["Carls Rogers", "Albert Bandura", "Carl Jung", "Alfred Adler"],
    gambar: [rogers, albert, carl, alfred],
    answer: "Carl Jung", // Carl Jung
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
