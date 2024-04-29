import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./pages/Category/index";
import HomePage from "./pages/HomePage/index";
import Product from "./pages/Product/index";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
