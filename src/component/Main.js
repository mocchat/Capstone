import { useState } from 'react';

export default function Main() {
    let [a, b] = useState("Test"); //a의 값을 Test로 저장

    //메인페이지 backend code는 여기에 작성

    return (
        
        <><section id="caro">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <h1><span onClick={() => { b(a = 1); }}>1</span></h1> {/* 배너 내용 넣는 곳, onClick은 누르면 a의 값이 해당 숫자로 변함. 나중에 이 부분을 이미지로 바꿈 */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <h1><span onClick={() => { b(a = 2); } }>2</span></h1>
                    </div>
                    <div className="carousel-item">
                        <h1><span onClick={() => { b(a = 3); } }>3</span></h1>
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
        </section><section id="Viewer">
                <h1>{a}</h1> {/* a의 값에 따라 하단의 내용이 바뀜 */}
            </section></>
       
        );
}