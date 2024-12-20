import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./component/top";
import Navbar from "./component/navbar";
import BannerSection from "./component/banner";
import Text from "./component/text";
import Videosection from "./component/videosection";
import RedBackgroundSection from "./component/red";
import Text2 from "./component/text2";
import ResponsiveCarousel from "./component/carausel";
import FooterSection from "./component/footersection";
import CopyrightSection from "./component/copyright";
function App() {
  return (
    <>
      <div className="container">
        <Top></Top>
        <Navbar />
      </div>
      <BannerSection />
      <Text />
      <Videosection />
      <RedBackgroundSection />
      <Text2 />
      <ResponsiveCarousel />
      <FooterSection />
      <CopyrightSection />
    </>
  );
}

export default App;
