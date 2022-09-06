import "./App.scss";
import Header from "./components/navbar/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/banner/Banner";
function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
