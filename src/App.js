//react 설치한 후, useState, react-router-dom을 install해야 됨.

import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Operate from "./component/Operate";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/operate" element={<Operate />} />
                </Routes>
                <Footer />
            </BrowserRouter>
      </div>
  );
}

export default App;
