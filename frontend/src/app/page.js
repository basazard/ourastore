import Navbar from "./components/navbar";
import HomeSlider from "./components/homeSlider";
import PopularGames from "./section/popularGame";
import Category from "./section/category";
import Footer from "./components/banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]">
        <HomeSlider />
        <PopularGames />
        <Category />
        <Footer />
      </div>
    </div>
  );
}
