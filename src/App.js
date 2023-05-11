import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import { Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
// import RequireAuth from './components/private/RequireAuth';
// import ProtectedRoute from './routers/ProtectedRoute';
// import { useAuthContext } from './context/authContext'; 

function App() {
  // const { authData } = useAuthContext();


  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            {/* single product route */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            {/* cart */}
            <Route path="/cart" element={<Cart />} />
            {/* searched products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />
            {/* <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} /> */}
          

            {/* Protected routes */}
            {/* <Route element={<ProtectedRoute authData={authData} />}>
              <Route path={Route.Cart} element={<Cart />} />
            </Route> */}
            
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
