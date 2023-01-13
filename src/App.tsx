import { useEffect, useState } from "react";
import BenefitsPage from "./components/BenefitsPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import OurClassesPage from "./components/OurClassesPage";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [topOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setTopOfPage(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app last:bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        topOfPage={topOfPage} />
      <HomePage setSelectedPage={setSelectedPage} />
      <BenefitsPage setSelectedPage={setSelectedPage} />
      <OurClassesPage setSelectedPage={setSelectedPage} />
      <ContactPage setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
