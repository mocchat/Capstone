export default function Operate() {

    //운영페이지 backend code는 여기에 작성
    return (
        <section>
            <br />
            <h2>데이타베이스</h2>
            <br /> <br /><hr id="oper_hr" />
            <div>
                <h3>추가</h3>
                <div className="Add">
                    <div className="Add_button"><button> Banner Image </button></div>
                    <div className="Add_button"><button> Main Image </button></div>
                </div>
                <div className="Add">
                    <div className="Content">
                        <h3>Content</h3>
                        <input className="content_input"></input>
                    </div>
                </div>
                <button className="button_sub"> Submmit </button>
            </div>
            <hr id="oper_hr" />
            <div>
                <h3>삭제</h3>
                <div className="Delete">                    
                      <h3>ID<input className="Delete_input"></input></h3>                  
                </div>
                <button className="button_sub"> Submmit </button>
            </div>
        </section>
        );
}