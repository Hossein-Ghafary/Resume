import "./work.css"
import boot1 from "../images/bootstrap/nemone1.jpg"
import boot2 from "../images/bootstrap/nemone2.jpg"
import img1 from "../images/nemone3.jpg"
import img3 from "../images/nemone5.jpg"
import img2 from "../images/nemone4.jpg"




const Work =() =>{
    return(
        <div dir="rtl">
            
            <div className="Work-samples" id="work">
            <h1>نمونه کار</h1>
                <h2 className="work-title">bootstrap</h2>
                <hr/>
                <a href='https://github.com/Hossein-Ghafary/Bootstrap'>مشاهده در گیت هاب</a>
                <div className="sampel-img">
                    <img src={boot1}className="b-i" alt=""/>
                    <a href='https://github.com/Hossein-Ghafary/Bootstrap-book'>مشاهده در گیت هاب</a>
                    <img src={boot2}className="b-i" alt=""/>
                    <h2  className="work-title">React</h2>
                    <hr/>
                    <a href='https://github.com/Hossein-Ghafary/Naroon'>مشاهده در گیت هاب</a>
                    <img src={img1}className="b-i" alt=""/>
                    <img src={img3}className="b-i" alt=""/>
                    <img src={img2}className="b-i" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Work;