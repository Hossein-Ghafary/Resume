import "../aboutme/aboutme.css"
import BG from "../images/711.png"

const Aboutme =()=>{
    return(
        <div dir="rtl">
            <div className="flex">
                <img src={BG} alt=""className="me"/>
                <div className="title" id="aboutme"><h1>من کی ام ... ؟</h1>
                    <div>سلام من حسین هستم گرافیست و توسعه دهنده فرانت اند
                    </div>
                    <div>دانشجوی رشته کامپیوتر در مقطع کارشناسی.</div>
                    <div>عاشق کار با کامپیوتر و برنامه نویسی</div>
                </div>
                </div>
                <a href="#" className="don-btn">دانلود رزومه من</a>
            <div className="about-me" dir="rtl">
                <h1>درباره من</h1>
                <div className="flex">
                <p className="about-text">کارم رو تو برنامه نویسی تو حوضه back-end با زبان پایتون و فریم ورک جنگو شروع کردم اما بعد آشنایی با زبان javascript به front-end علاقه زیادی پیدا کردم وتصمیم گرفتم در بخش front-end مشغول به کارشم .</p>
                <div>
                </div>
                </div>
                <div className="all-info">
                <div className="my-info">
                    <p className="m-i">نام : حسین غفاری </p>
                    <p className="m-i">سن : 20 </p>
                    <p className="m-i">نظام وظیفه:معافیت تحصیلی</p>
                </div>
                <div className="my-info">
                    <p className="m-i">تحصیلات : دانشجو کامپیوتر</p>
                    <p className="m-i">تاهل : مجرد</p>
                    <p className="m-i">زبان : انگلیسی</p>
                </div>
                </div>
        </div>
        </div>
    )
}
export default Aboutme;