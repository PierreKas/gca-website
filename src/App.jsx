// import "./App.css";
// import HeroSection from "./component/HeroSection";
// import Page from "./components/Page";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <HeroSection />
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
// import Footer from "./component/Footer";
import ScrollToTop from "./constants/ScrollToTop";

// Import page components
import HeroSection from "./component/HeroSection";
import WelcomeSection from "./component/WelcomeSection";
import VisionMission from "./component/VisionMission";
import CoreValues from "./component/CoreValues";
import WhyGCA from "./component/WhyGCA";
import ThematicAreas from "./component/ThematicAreas";
import Programs from "./component/Programs";
import ImpactStories from "./component/ImpactStories";

// You'll need to create these page components
// import AboutPage from "./components/AboutPage";
// import ThematicAreasPage from "./components/ThematicAreasPage";
// import ProgramsPage from "./components/ProgramsPage";
// import GetInvolved from "./components/GetInvolved";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className="pt-16">
        <Routes>
          {/* Main Home Route */}
          <Route
            path="/"
            element={
              <>
                <section id="hero">
                  <HeroSection />
                </section>
                {/* <section id="welcome">
                  <WelcomeSection />
                </section>
                <section id="vision-mission">
                  <VisionMission />
                </section>
                <section id="core-values">
                  <CoreValues />
                </section>
                <section id="why-gca">
                  <WhyGCA />
                </section>
                <section id="thematic-areas">
                  <ThematicAreas />
                </section>
                <section id="programs">
                  <Programs />
                </section>
                <section id="impact">
                  <ImpactStories />
                </section> */}
              </>
            }
          />

          {/* About Section Routes - Uncomment when you create these pages */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/vision-mission" element={<VisionMission />} /> */}
          {/* <Route path="/values" element={<CoreValues />} /> */}

          {/* Thematic Areas Route */}
          {/* <Route path="/thematic-areas" element={<ThematicAreasPage />} /> */}

          {/* Programs Route */}
          {/* <Route path="/programs" element={<ProgramsPage />} /> */}

          {/* Get Involved Route */}
          {/* <Route path="/get-involved" element={<GetInvolved />} /> */}

          {/* Contact Route */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
