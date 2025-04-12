import Header from "./components/section/Header";
import Page from "./components/section/Page";
import Navigation from "./components/section/Navigation/Navigation";
import Hero from "./components/section/Hero";
import Technology from "./components/section/Technology";
import Brands from "./components/section/Brands";
import MoreFeatures from "./components/section/MoreFeatures";
import CarLogos from "./components/section/CarLogos";
import SpecialOffers from "./components/section/SpecialOffers";
import Footer from "./components/section/Footer";
import FeaturedCars from "./components/section/FeaturedCars";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Technology />
      <Brands />
      <MoreFeatures />
      <FeaturedCars />
      <SpecialOffers />
      <CarLogos />
      <Footer />
    </Page>
  );
}

export default App;
