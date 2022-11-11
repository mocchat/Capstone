import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

    let [a, b] = useState("Test");

    return (

      <div className="App">
          <section id="Top">
              <div className="black_nav">
                <div> Title </div>
              </div>
          </section>

          <section id="caro">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <h1><span onClick={() => { b(a = 1) } }>1</span></h1>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <h1><span onClick={() => { b(a = 2) }}>2</span></h1>
                        </div>
                        <div className="carousel-item">
                            <h1><span onClick={() => { b(a = 3) }}>3</span></h1>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id="Viewer">
                <h1>{ a }</h1>
            </section>
    </div>
  );
}

export default App;
