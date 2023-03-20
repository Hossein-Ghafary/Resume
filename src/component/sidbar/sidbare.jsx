import "./sidbare.css"


const Sidbar = ()=>{
    return(
        <div dir="rtl">
            <div className="back">
                <div className="navbar">
                <div className="web-nav">
                    <a href="#aboutme"><div>درباره من</div></a>
                    <a href="#talent"><div className="talent">مهارت ها</div></a>
                    <a href="#contact"><div>ارتبات بامن</div></a>
                    <a href="#work"><div>نمونه کار ها</div></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Sidbar