import "./Home.module.css";
// import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
// import Testimonials from "../../components/Testimonials";
import "../../data/CarouselData.json";
import Slider from "../slider/Slider";
// import Address from "../../components/Address";
// import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      {/* <Address /> */}
      <Slider />
      {/* <MainHeader /> */}
      <Programs />
      <Values />
      <FAQs />
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
