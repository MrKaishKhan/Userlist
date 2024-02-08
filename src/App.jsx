// function or class
// return UI or null
// component can take properties
// class components may have state
// internal
// props
/*
    * Instal react-router-dom
    * header links
    * Route configurations
*/

import Footer from './Footer';
import Header from './Header';
import ProductList from './products/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

import Users from './users/Users';
import NotFound from './NotFound';
import NewProduct from './products/NewProduct';
import ProductDetail from './products/ProductDetail';
import Login from './auth/Login';
import AppContext from './context/AppContext';
import { useEffect, useState } from 'react';
import Contact from './contact';

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const userState = {
        authenticated, setAuthenticated
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setAuthenticated(true);
        }
    }, []);

    return <AppContext.Provider value={userState}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products/new" element={<NewProduct />} />
                <Route path="/products/detail/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </AppContext.Provider>
};

export default App;






// import { useState } from 'react'
// import './App.css'
// import Header from './Header';
// import Home from './Home'
// // import Login from '../src/Login'
// // import User from './user/User'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import NotFound from './NotFound';
// import Product from './product/Product';
// import About from './About';
// import Login from './auth/Login';
// function App() {
//   /*

//   */
//   return (
//     <>
//     <BrowserRouter>
//       <div>
//         {/* <User/>
//         <Login/> */}
//         <Header/>
//         <Routes>
//           <Route path="/Home" element={<Home/>}></Route>
//           <Route path='*' element={<NotFound/>}></Route>
//           <Route path='' element={<Product/>}></Route>
//           <Route path='/About' element={<About/>}></Route>
//           <Route path='/Login' element={<Login/>}></Route>
//         </Routes>


//       </div>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;
