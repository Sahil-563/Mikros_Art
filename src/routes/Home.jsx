import HeroSection from "../components/HeroSection/HersoSection";
import Cards from "../components/Cards/Card";
import "./HomeStyles.css";
const Home = () => {
  return (
    <>
      <HeroSection />
      <p className="Our-Paintings">Our Paintings</p>
      <div className="card-container">
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
        <Cards
          painterName="Vincent van Gogh"
          date="1889"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        />
      </div>
    </>
  );
};
export default Home;
