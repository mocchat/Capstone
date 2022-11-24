import { useState } from 'react';

export default function Main() {
    let [a, b] = useState("Test");

    //메인페이지 backend code는 여기에 작성

    return (

        <><section id="caro">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">{/* 배너 하단의 버튼 */}
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <h1><span onClick={() => { b(a = 1); }}>1</span></h1>{/* 배너 내용, 나중에 img로 변경 예정. onClick은 하단의 내용의 변경을 의미함 */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <h1><span onClick={() => { b(a = 2); }}>2</span></h1>
                    </div>
                    <div className="carousel-item">
                        <h1><span onClick={() => { b(a = 3); }}>3</span></h1>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">{/* 배너 양 옆의 버튼 */}
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">{/* 배너 양 옆의 버튼 */}
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section><section id="Viewer">
                <h1>{a}</h1>{/* 하단 내용, a의 값이 변할 때마다 내용이 바뀜 */}
            </section></>

    );
}