import { Helmet } from "react-helmet";
import "../style/components/page404.scss"
import icon from "../assets/icon.png"
function Notfound(){
    return(
        <>
        <Helmet>
            <title>404 Not Found</title>
        </Helmet>
            <div className="wrap_page">
                <div className="wrap_text">
                    <p className="text">
                            <img className="icon" src={icon}/>404 Not Found
                    </p>
                </div>
            </div>
        </>
    )
}

export default Notfound;