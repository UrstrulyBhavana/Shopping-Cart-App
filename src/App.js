import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { Footer } from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

