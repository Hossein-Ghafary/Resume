import Sidbar from "./component/sidbar/sidbare"
import Aboutme from "./component/aboutme/aboutme"
import Talents from "./component/talents/talent"
import Work from "./component/works/works"
import Footer from "./component/footer/footer"
import Mobail from "./component/sidbar/mobile"



const App =()=>{
    return(
        <div>
            <Sidbar/>
            <Mobail/>
            <Aboutme/>
            <Talents/>
            <Work/>
            <Footer/>
        </div>
    )
}

export default App;