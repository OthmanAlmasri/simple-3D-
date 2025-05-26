import Header from "./components/Header";
import Hero from "./components/Hero";
import gradient from "../public/gradient.png";
import "./App.css";

function App() {
  return (
    <main>
      {/* Gradient image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-1"
        src={gradient}
        alt="Gradient-img"
      />
      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] ... animate-pulse"></div>

      <Header />
      <Hero />
    </main>
  );
}

export default App;
