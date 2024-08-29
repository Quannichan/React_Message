/* eslint-disable no-unused-vars */
import MesDot from "./mesDot"
import sendicon from "../assets/send.png"
import { useEffect } from "react"
import { useRef } from "react"

export default function Message(prop){
    function fetchmessage(){

    }

    const wrapmess= useRef()

    useEffect(()=>{
        wrapmess.current.style.transform ="translateX(0%)"
    })
    return(
        <div ref={wrapmess} className="wrap_message">
            <div className="message">
                <div className="messagedot">
                    <div className="wrap_info">
                        <div className="wrap_user_imgmes">
                            <img className="user_imgmes" src={prop.src} alt="img_user"/> 
                        </div>
                        <div className="wrap_usernamemes">
                            <p className="usernamemes">{prop.name}</p>
                        </div>
                        <div className="wrap_friendstatus">
                            <p className="friendstatus">{prop.friendstatus}</p>
                        </div>
                    </div>
                    <MesDot type="1" content="Hello" idmesdot={1}/>
                    <MesDot type="2" content="Hello, how are you" next="false"  idmesdot={2}/>
                    <MesDot type="2" content="How is your day?" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="How r u?" idmesdot={1}/>
                    <MesDot type="2" content="Yes, im oke too" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="How r u?" idmesdot={1}/>
                    <MesDot type="2" content="Yes, im oke too" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="How r u?" idmesdot={1}/>
                    <MesDot type="2" content="Yes, im oke too" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="How r u?" idmesdot={1}/>
                    <MesDot type="2" content="Yes, im oke too" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="How r u?" idmesdot={1}/>
                    <MesDot type="2" content="Yes, im oke too" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="How r u?" idmesdot={1}/>
                    <MesDot type="2" content="Yes, im oke too" next="true" src={prop.src} idmesdot={2}/>
                    <MesDot type="1" content="Im oke" idmesdot={1}/>
                    <MesDot type="1" content="Trong một thế giới nơi công nghệ ngày càng phát triển, cuộc sống của chúng ta trở nên ngày càng phức tạp. Chúng ta thường bị cuốn vào cuộc sống hàng ngày, với các lịch trình bận rộn và áp lực từ công việc và xã hội. Trong cái bối cảnh này, việc duy trì cân bằng giữa cuộc sống và công việc trở nên ngày càng quan trọng.

Cân bằng giữa cuộc sống và công việc không chỉ giúp chúng ta cảm thấy hạnh phúc và hài lòng hơn, mà còn có lợi ích lớn cho sức khỏe tinh thần và thể chất của chúng ta. Khi chúng ta dành thời gian cho bản thân và cho những hoạt động giải trí, chúng ta có thể giảm căng thẳng và cảm thấy sảng khoái hơn. Điều này cũng giúp chúng ta tăng cường năng suất trong công việc và tăng khả năng tập trung và sự sáng tạo.

Để duy trì cân bằng giữa cuộc sống và công việc, chúng ta cần xác định và ưu tiên những giá trị quan trọng nhất trong cuộc sống của mình. Điều này có thể bao gồm việc dành thời gian cho gia đình và bạn bè, tham gia các hoạt động thể chất và tinh thần, và phát triển sở thích và sở trường cá nhân.

Cuối cùng, việc duy trì cân bằng giữa cuộc sống và công việc đòi hỏi sự cố gắng và quyết tâm. Tuy nhiên, những nỗ lực này sẽ đem lại những lợi ích vượt bậc cho sức khỏe và hạnh phúc của chúng ta trong dài hạn." idmesdot={1}/>
                    <MesDot type="2" content="Trong một thế giới nơi công nghệ ngày càng phát triển, cuộc sống của chúng ta trở nên ngày càng phức tạp. Chúng ta thường bị cuốn vào cuộc sống hàng ngày, với các lịch trình bận rộn và áp lực từ công việc và xã hội. Trong cái bối cảnh này, việc duy trì cân bằng giữa cuộc sống và công việc trở nên ngày càng quan trọng.

Cân bằng giữa cuộc sống và công việc không chỉ giúp chúng ta cảm thấy hạnh phúc và hài lòng hơn, mà còn có lợi ích lớn cho sức khỏe tinh thần và thể chất của chúng ta. Khi chúng ta dành thời gian cho bản thân và cho những hoạt động giải trí, chúng ta có thể giảm căng thẳng và cảm thấy sảng khoái hơn. Điều này cũng giúp chúng ta tăng cường năng suất trong công việc và tăng khả năng tập trung và sự sáng tạo.

Để duy trì cân bằng giữa cuộc sống và công việc, chúng ta cần xác định và ưu tiên những giá trị quan trọng nhất trong cuộc sống của mình. Điều này có thể bao gồm việc dành thời gian cho gia đình và bạn bè, tham gia các hoạt động thể chất và tinh thần, và phát triển sở thích và sở trường cá nhân.

Cuối cùng, việc duy trì cân bằng giữa cuộc sống và công việc đòi hỏi sự cố gắng và quyết tâm. Tuy nhiên, những nỗ lực này sẽ đem lại những lợi ích vượt bậc cho sức khỏe và hạnh phúc của chúng ta trong dài hạn."  next="true" src={prop.src} idmesdot={2}/>

                </div>
                <div className="wrap_sendmes">
                <div className="wrap_inputmessage">
                    <input className="inputmessage" placeholder="Enter message here"/>
                </div>
                <div className="wrap_sendmes_btn">
                    <button className="sendmes_btn"><img className="send_icon" src={sendicon}/></button>
                </div>  
            </div>
            </div>
            
        </div>
    )
}