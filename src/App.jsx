// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./component/NavBar";
// import ScrollToTop from "./constants/ScrollToTop";
// import HeroSection from "./component/HeroSection";
// import WelcomeSection from "./component/WelcomeSection";
// import VisionMission from "./component/VisionMission";
// import CoreValues from "./component/CoreValues";
// import WhyGCA from "./component/WhyGCA";
// import ThematicAreas from "./component/ThematicAreas";
// import Programs from "./component/Programs";
// import ImpactStories from "./component/ImpactStories";

// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <NavBar />
//       <div className="pt-16">
//         <Routes>
//           {/* Main Home Route */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <section id="hero">
//                   <HeroSection />
//                 </section>
//               </>
//             }
//           />

//           {/* <Route path="/about" element={<AboutPage />} /> */}
//           <Route path="/vision-mission" element={<VisionMission />} />
//           <Route path="/values" element={<CoreValues />} />

//           {/* Thematic Areas Route */}
//           <Route path="/thematic-areas" element={<ThematicAreas />} />

//           {/* Programs Route */}
//           <Route path="/programs" element={<ImpactStories />} />

//           {/* Get Involved Route */}
//           {/* <Route path="/get-involved" element={<GetInvolved />} /> */}

//           {/* Contact Route */}
//           {/* <Route path="/contact" element={<Contact />} /> */}
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import ScrollToTop from "./constants/ScrollToTop";
import HeroSection from "./component/HeroSection";
import WelcomeSection from "./component/WelcomeSection";
import VisionMission from "./component/VisionMission";
import CoreValues from "./component/CoreValues";
import WhyGCA from "./component/WhyGCA";
import ThematicAreas from "./component/ThematicAreas";
import Programs from "./component/Programs";
import ImpactStories from "./component/ImpactStories";
import Foooter from "./component/Foooter";
import ContactAndLocation from "./component/Contact";
import PartnersScroll from "./constants/PartnersScroll";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />

      <div className="pt-20">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WelcomeSection />
                <WhyGCA />
                <ImpactStories />
                <PartnersScroll />
              </>
            }
          />

          {/* PAGES */}
          <Route path="/about" element={<WelcomeSection />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/values" element={<CoreValues />} />
          <Route path="/thematic-areas" element={<ThematicAreas />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<ContactAndLocation />} />
        </Routes>
      </div>

      <Foooter />
    </Router>
  );
};

export default App;
