import { Header } from "./components/Header/Header";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";
import style from "./App.module.scss";
import { ComicsPage } from "./pages/ComicsPage/ComicsPage";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={style.container}>
        <Header />
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/comics/*" element={<ComicsPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
