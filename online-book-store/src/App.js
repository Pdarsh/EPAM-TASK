import "./App.css";
//import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Cart } from "./Components/Cart/Cart";
import { BookDetail } from "./Components/BookDetail/BookDetail";
import { MyOrders } from "./Components/MyOrders/MyOrders";
import { Provider } from "react-redux";
import store from "./store";

function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/books/:bookisbn" element={<BookDetail />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
