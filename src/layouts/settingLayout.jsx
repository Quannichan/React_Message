/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import Account from "../components/account"
import { Helmet } from "react-helmet"
import BackBtn from "../components/backBtn"
import OptionBtn from "../components/opctionBtn"

export default function settingLayout(props){
    return(
        <div className="wrap_setting">
        <Helmet>
            <title>Setting | React Message</title>
        </Helmet>
        <div className="wrap_left_setting">
            <div className="wrap_backMes_btn">
                <BackBtn onClick={props.OnclickBackMes} />
            </div>
            <div className="wrap_option_setting">
                <OptionBtn/>
            </div>
        </div>
            <div className="wrap_right_setting">
                <Account imageUser={props.imageUser_acc} username={props.userName_acc}/>
            </div>
        </div>
    )
}