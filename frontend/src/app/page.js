import Navbar from "./components/navbar";
import HomeSlider from "./components/homeSlider";
import PopularGames from "./section/popularGame";
import Category from "./section/category";

export default function Home() {
  return (
    <div>
      <Navbar/>      
      <div className="bg-secondary/50 pt-[60px]">
        <HomeSlider/>
        <PopularGames/>
        <Category/>
      </div>
    </div>
  );
}
