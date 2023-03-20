import "../talents/talent.css"
import ttalent from '../images/talent.jpg'

const Talent = () =>{
    return(
        <div dir="rtl">
            <div className="talent">
                <div className="talent-text">
                    <h1 id="talent">مهارت ها</h1>
                    <p>توی تمام مهارت هایی که قراره گفته بشه از همه اونا نمونه کار هاایی قراره ارهِه بدم که میزان تصلت بنده برای شما مشخص بشه</p>
                </div>
                <div className="talent2">
                    <div className="talents">
                        <h1>HTML & CSS</h1>
                        <h1>Javascript</h1>
                        <h1>Bootstrap</h1>
                        <h1>ReactJs</h1>
                        <h1>Git & Github</h1>
                        <h1>Python(Django)</h1>
                        <h1>MSQL</h1>
                    </div>
                        <img className="talent-img" src={ttalent}/>
                </div>
            </div>
        </div>
    )
}

export default Talent;