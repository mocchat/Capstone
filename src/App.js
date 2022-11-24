//react 설치한 후, react-router-dom을 install해야 됨. npm이 설치되어 있는데 개발자 PowerShell에 'npm start'가 먹히지 않으면 'npm update'한 후 'npm start'해보기
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
