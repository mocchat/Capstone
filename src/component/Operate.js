export default function Operate() {

    //운영페이지 backend code는 여기에 작성
    return (
        <section>
            <br />
            <h2>데이타베이스</h2>
            <br /> <br /><hr id="oper_hr" />
            <div>
                <h3>추가</h3>
                <form>{/* 추가 부분을 form 태그로 묶음 */}
                    <div className="Add">
                        {/* 각각 main image와 name, banner image와 name을 입력하는 창 */}
                        <div className="Add_button">
                            <h3>Banner Image</h3>
                            <input type="file"></input>{/* banner image 입력 */}
                            Name<input></input> {/* banner image name */}
                        </div>
                        <div className="Add_button">
                            <h3>Main Image</h3>
                            <input type="file"></input>{/* main image 입력 */}
                            Name<input></input>{/* main image name */}
                        </div>
                    </div>
                    <div className="Add">
                        <div className="Content">
                            <h3>Content</h3>
                            <input className="content_input"></input>{/* content 입력 칸 */}
                        </div>
                    </div>
                    <button className="button_sub"> Submmit </button>{/* 데이터베이스로 입력된 정보를 보내는 버튼 */}
                </form>
            </div>
            <hr id="oper_hr" />
            <div>
                <h3>삭제</h3>
                <form>{/* 삭제 부분을 form 태그로 묶음 */}
                    <div className="Delete">
                        <h3>ID<input className="Delete_input"></input></h3> {/* 삭제할 image id 입력 */}
                    </div>
                    <button className="button_sub"> Submmit </button>{/* 입력된 id에 따라 database에서 image 삭제하는 버튼 */}
                </form>
            </div>
        </section>
    );
}