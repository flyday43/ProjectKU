import {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";

function Booking () {
    const navigate = useNavigate()
    const [statusIsShow,setStatusIsShow] = useState("active")
    const toDetail=()=>{
        navigate("./Detail")
    }
    return (
        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%",padding:"10px",margin:0,gap:"10px"}}>
            <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <Link to="/" style={{position:"absolute",left:"10px"}}>
                    <button type="button" class="btn btn-secondary">{"<-- Black"}</button>
                </Link>
                <div style={{width:"300px",height:"100px",backgroundColor:"#D9D9D9",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>
                    <h1>รายการจอง</h1>
                </div>
            </div>
            <div class="btn-group">
                <button 
                
                    class={"btn btn-success "+(statusIsShow==="active"?"active":"")}
                    onClick={()=>setStatusIsShow("active")}
                >
                    รายการที่ดำเนินการอยู่
                </button>
                <button 
                    class={"btn btn-success "+(statusIsShow==="success"?"active":"")}
                    onClick={()=>setStatusIsShow("success")}
                >
                    รายการที่สำเร็จ
                </button>
            </div>

            <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
                {statusIsShow==="active"?
                <div>
                    <div
                        role="button" 
                        style={{borderBottom: '2px solid black',display:"flex",justifyContent:"space-between"}}
                        onClick={()=>toDetail()}
                    >
                        <div>
                            <p>คุณภวัฒน์</p>
                            <p>รายการงาน : 0001</p>
                            <p>วันที่ 1 มกราคม พ.ศ.2566 เวลา 12:00 น.</p>
                            <p>ยี่ห้อ : Toyota</p>
                            <p>รุ่น : ae-86 Lewin BEV</p>
                        </div>
                        <div style={{alignSelf:"flex-end"}}>
                            <p>สถานะการจอง : ถูกจองแล้ว</p>
                        </div>
                    </div>

                    <div
                        role="button" 
                        style={{borderBottom: '2px solid black',display:"flex",justifyContent:"space-between"}}
                        onClick={()=>toDetail()}
                    >
                        <div>
                            <p>คุณธนาวุฒิ</p>
                            <p>รายการงาน : 0002</p>
                            <p>วันที่ 5 มกราคม พ.ศ.2566 เวลา 14:00 น.</p>
                            <p>ยี่ห้อ : EV car</p>
                            <p>รุ่น : ae-86 Lewin BEV</p>
                        </div>
                        <div style={{alignSelf:"flex-end"}}>
                            <p>สถานะการจอง : ถูกจองแล้ว</p>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div
                        role="button" 
                        style={{borderBottom: '2px solid black',display:"flex",justifyContent:"space-between"}}
                        onClick={()=>toDetail()}
                    >
                        <div>
                            <p>คุณภวัฒน์</p>
                            <p>รายการงาน : 0001</p>
                            <p>วันที่ 1 มกราคม พ.ศ.2566 เวลา 12:00 น.</p>
                            <p>ยี่ห้อ : Toyota</p>
                            <p>รุ่น : ae-86 Lewin BEV</p>
                        </div>
                        <div style={{alignSelf:"flex-end"}}>
                            <p>สถานะการจอง : ถูกจองแล้ว</p>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Booking