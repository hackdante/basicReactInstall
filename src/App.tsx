import "./App.css";
import { CounterComponent } from "./components/TEST/counter/CounterComponent";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/globals/navbar/Navbar";
import { Footer } from "./components/globals/footer/Footer";
import { SimpleCounter } from "./components/TEST/simpleCounter/SimpleCounter";
import { Contact } from "./components/forms/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test/counter" element={<CounterComponent />} />
        <Route path="test/simple-counter" element={<SimpleCounter />} />
        <Route path="test/formik" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
