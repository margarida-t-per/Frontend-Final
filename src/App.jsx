import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./MyContext";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import AddMovie from "./pages/AddMovie/AddMovie";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
      <Footer />
    </AppProvider>
  );
}
