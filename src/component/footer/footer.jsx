import "./footer.css"
import {BsGithub} from "react-icons/bs"
import {TbPhoneCalling} from "react-icons/tb"
import {HiOutlineMail} from "react-icons/hi"
import {FaTelegram} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'


const Footer =()=>{
    return(
       <div className="all" dir="rtl">
            <div className="icons1">
            <a><ImLocation /><h4>تهران , انقلاب</h4></a>
            <a><TbPhoneCalling/><h4>09016318376</h4></a>
            </div>
            <div className="icons2">
            <a><BsGithub /><h4>کلیک کنید</h4></a>
            <a><HiOutlineMail/><h4>hossein.ghafary2003@gmail.com</h4></a>
            </div>
            <div className="icons3">
            <a><BsGithub /><h4>کلیک کنید</h4></a>
            <a><HiOutlineMail/><h4>hossein.ghafary2003@gmail.com</h4></a>
            </div>
            <div className="icons4">
            <a><BsGithub /><h4>کلیک کنید</h4></a>
            <a><HiOutlineMail/><h4>hossein.ghafary2003@gmail.com</h4></a>
            </div>
       </div>
    )
}

export default Footer;