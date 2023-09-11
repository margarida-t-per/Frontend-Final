import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./MyContext";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
//import AllProjects from "./pages/AllProjects/AllProjects";
//import ContactInfo from "./pages/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </AppProvider>
  );
}

/* 
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/contact" element={<ContactInfo />} />
      </Routes>
*/
