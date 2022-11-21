export default function Operate() {

    //운영페이지 backend code는 여기에 작성 
    return (
        <section>
            <br />
            <h2>데이터베이스</h2>
            <br /> <br /><hr id="oper_hr" />
            <div>
                <h3>추가</h3>
                <div className="Add">
                    {/* 각각 image url, image name을 입력하는 창 */}
                    <h3>URL</h3><input className="image_input"></input><br /><br />
                    <h3>NAME</h3><input className="image_input"></input>
                </div>
                <div className="Add">
                    <div className="Content">
                        <h3>Content</h3>
                        {/* content 입력하는 창 */}
                        <input className="content_input"></input><br /><br />
                    </div>
                </div>
                {/* database로 보내기 */}
                <button className="button_sub"> Submmit </button>
            </div>
            <hr id="oper_hr" />
            <div>
                <h3>삭제</h3>
                <div className="Delete"> 
                      {/* 삭제할 Image id 입력하는 창 */}
                      <h3>Image ID <input className="Delete_input"></input></h3>                  
                </div>
                {/* 누르면 입력한 id에 따라 databse의 이미지가 삭제되는 버튼 */}
                <button className="button_sub"> Submmit </button>
            </div>
        </section>
        );
}