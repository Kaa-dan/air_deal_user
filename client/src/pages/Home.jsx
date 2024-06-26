import Header from "../componenets/home/Header";
import Banner from "../componenets/home/Banner";
import FilterSection from "../componenets/home/FilterSection";
const Home = () => {
  return (
    <div className="w-full font-montserrat relative">
      <Header />

      <Banner />

      <FilterSection />
    </div>
  );
};

export default Home;
