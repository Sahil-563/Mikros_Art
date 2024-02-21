import HeroSection from "../components/HeroSection/HersoSection";
import Cards from "../components/Cards/Card";
import Videos from "../components/VideoSection/VideoComp";
import "./HomeStyles.css";
import img1 from "./paintings/art_guru_gurpreet_20170522_p_1519839766311432066_1_1519839766311432066.jpg";
import img2 from "./paintings/art_guru_gurpreet_20200212_p_2242302726101041477_1_2242302726101041477.jpg";
import img3 from "./paintings/art_guru_gurpreet_20200529_p_2319660043225916084_1_2319660043225916084.jpg";
import img4 from "./paintings/art_guru_gurpreet_20210211_p_2506780724338935313_1_2506780720085890246.jpg";
import img5 from "./paintings/art_guru_gurpreet_20170826_p_1590027835417273227_1_1590027835417273227.jpg";
import img6 from "./paintings/art_guru_gurpreet_20190901_p_2122979588962486190_1_2122979588962486190.jpg";
import img7 from "./paintings/art_guru_gurpreet_20190920_p_2136743038976927463_1_2136743038976927463.jpg";
import img8 from "./paintings/art_guru_gurpreet_20200806_p_2369768632116262704_1_2369768632116262704.jpg";
import img9 from "./paintings/art_guru_gurpreet_20200822_p_2381160689154129331_1_2381160689154129331.jpg";
import img12 from "./paintings/art_guru_gurpreet_20200915_p_2398495043328734815_1_2398495043328734815.jpg";
import img10 from "./paintings/art_guru_gurpreet_20230117_p_3017265130762690705_1_3017265123951262245.jpg";
import img11 from "./paintings/art_guru_gurpreet_20230314_p_3057766969504588933_1_3057766969504588933.jpg";
import img13 from "./paintings/art_guru_gurpreet_20230314_p_3057766969504588933_1_3057766969504588933.jpg";
const Home = () => {
  return (
    <>
      <HeroSection />
      <p className="Our-Paintings">Our Paintings</p>
      <div className="card-container">
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img1} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img2} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img3} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img4} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img4} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img5} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img6} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img7} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img8} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img9} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img10} />
        <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img11} />
        {/* <Cards painterName="Vincent van Gogh" date="1889" imageUrl={img12} /> */}
      </div>
      <div className="videos">
        <p className="Our-Paintings">Passion Is Everything</p>
        <Videos />
      </div>
    </>
  );
};
export default Home;
