import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={
          <>
            <h1 className='text-center'> 404 </h1>
          </>
        } />
      </Routes>
    </Router>
    {/* <Home />
    <About /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
