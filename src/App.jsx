import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import CabinListing from "./components/CabinListing/CabinListing";
import CabinDetails from "./components/CabinDetails/CabinDetails";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cabins" element={<CabinListing />} />
            <Route path="/cabins/:id" element={<CabinDetails />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
