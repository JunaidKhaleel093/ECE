import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ResidentialDesign from "./pages/ResidentialDesign";
import Navbar from "./components/Navbar";
import CommercialDesign from "./pages/CommercialDesign";
import SpacePlanning from "./pages/SpacePlanning";
import HomeInteriors from "./pages/HomeInteriors";
import CommercialInteriors from "./pages/CommercialInteriors";
import Footer from "./components/Footer";
import TurnkeySolutions from "./components/TurnkeySolutions";
import Copyright from "./components/Copyright";
import Homeoffice from "./pages/Homeoffice";
import About from "./pages/About";

import Archi from "./pages/Archi";
import ContactSection from "./pages/ContactSection";

import KidsSpace from "./pages/KidsSpace";
import Outdoor from "./pages/Outdoor";
import Corporate from "./pages/Corporate";
import Cafe from "./pages/Cafe";
import EntertainmentArea from "./pages/EntertainmentArea";
import Hotel from "./pages/Hotel";
import Restaurant from "./pages/Restaurant";
import Study from "./pages/Study";
import Workspace from "./pages/Workspace";
import Livingroom from "./pages/Livingroom";
import ProjectsShowcase from "./pages/ProjectsShowcase";
import LuxLiving from "./pages/LuxLiving";
import LuxKitchen from "./pages/LuxKitchen";
import LuxBedroom from "./pages/LuxBedroom";
import LuxBalcony from "./pages/LuxBalcony";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {isHomePage && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/contact" element={<ContactSection />} />

          <Route path="/services/residential" element={<ResidentialDesign />} />
          <Route path="/services/commercial" element={<CommercialDesign />} />
          <Route path="/services/space-planning" element={<SpacePlanning />} />
          <Route path="/services/Archi" element={<Archi />} />
          <Route path="/projects/home-interiors" element={<HomeInteriors />} />
          <Route
            path="/projects/commercial-interiors"
            element={<CommercialInteriors />}
          />
          <Route path="/projects/Homeoffice" element={<Homeoffice />} />
          <Route path="/" element={<Home />} />

          {/* Projects Routes */}
          <Route path="/projects/home-interiors" element={<HomeInteriors />} />
          <Route
            path="/projects/commercial-interiors"
            element={<CommercialInteriors />}
          />
          <Route path="/projects/homeoffice" element={<Homeoffice />} />

          {/* Home Interiors Subpages */}
          <Route path="/interiors/livingroom" element={<Livingroom />} />
          <Route path="/interiors/kids" element={<KidsSpace />} />
          <Route
            path="/interiors/entertainment"
            element={<EntertainmentArea />}
          />
          <Route path="/interiors/outdoor" element={<Outdoor />} />

          {/* Commercial Interiors Subpages */}
          <Route path="/commercial/corporate" element={<Corporate />} />
          <Route path="/commercial/restaurant" element={<Restaurant />} />
          <Route path="/commercial/cafe" element={<Cafe />} />
          <Route path="/commercial/hotel" element={<Hotel />} />

          {/* Luxury Interiors Subpages */}
          <Route path="luxury/livingroom" element={<LuxLiving />} />
          <Route path="luxury/lux-bedroom" element={<LuxBedroom />} />
          <Route path="/luxury/lux-kitchen" element={<LuxKitchen />} />
          <Route path="/luxury/balcony" element={<LuxBalcony />} />

          {/* Home Office Subpages */}
          <Route path="/homeoffice/study-room" element={<Study />} />
          <Route path="/homeoffice/workspace" element={<Workspace />} />

          {/* <Route path="/Blog" element={<Blog />} /> */}
          <Route path="/About" element={<About />} />

          <Route path="/interiors/living-room" element={<HomeInteriors />} />
          <Route path="/interiors/bedroom" element={<HomeInteriors />} />
          <Route path="/interiors/kitchen" element={<HomeInteriors />} />

          <Route path="/projects" element={<ProjectsShowcase />} />
        </Routes>

        {isHomePage && <TurnkeySolutions />}
      </main>

      {isHomePage ? <Footer /> : <Copyright />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;