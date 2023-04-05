import React,{ useState } from "react";
import { GiAutoRepair } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import ConfirmEmergency from "./confirmEmergency/ConfirmEmergency"
import LocationPoint from "../../assets/location.png"

function Emergency(){
    const [ openConfirm, setOpenConfirm ] = useState(false)
    const [ detail, setDetail ] = useState('')
    
    if(openConfirm){
        return(
            <ConfirmEmergency
                close={()=>setOpenConfirm(false)}
                detail={detail}
            />
        )
    }
    return(
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"gray",width:"100%",height:"100%",padding:0,margin:0}}>
            <div style={{display:"flex",padding:"10px",backgroundColor:"white",textAlign:"center",alignItems:"center"}}>
                <Link to="/" style={{position:"absolute"}}>
                    <button type="button" class="btn btn-secondary">{"<-- Back"}</button>
                </Link>
                <h1 style={{flex:1}}>รายการฉุกเฉิน</h1>
            </div>

            <div style={{flex:3,display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}}>
                <div style={{display:"flex",padding:"20px",gap:"20px",borderBottom: '2px solid black'}}>
                    <img 
                        style={{color:"black",width:"70px",height:"70px"}}
                        src={LocationPoint}
                    />
                    <div>
                        <h5>ที่อยู่ร้าน</h5>
                        <h5>062 ต.นาเกลือ</h5>
                    </div>
                </div>
                <div style={{display:"flex",padding:"20px",gap:"20px"}}>
                    <img 
                        style={{color:"black",width:"70px",height:"70px"}}
                        src={LocationPoint}
                    />
                    <div>
                        <h5>สถานที่อยู่ปัจจุบันของลูกค้า</h5>
                        <h5>ซอยบัวขาว ต.นาเกลือ อ.บางละมุง</h5>
                    </div>
                </div>
            </div>

            <div style={{flex:2,display:"flex",flexDirection:"column",backgroundColor:"white"}}>
                <div style={{flex:3,display:"flex",gap:"20px"}}>
                    <div style={{flex:1,display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}>
                        <BiTimeFive style={{color:"black",width:"50px",height:"50px"}}/>
                        <div >
                            <p style={{margin:0}}>เวลา xx:xx   วันที่ DD MM YYYY </p>
                            <p style={{margin:0}}>เบอร์โทรติดต่อกลับ : 06x-xxx-xxxx </p>
                        </div>
                    </div>
                    <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div class="form-floating" style={{width:"80%"}}>
                            <textarea class="form-control" placeholder="Leave a comment here" style={{height:"100px"}}
                                value={detail}
                                onChange={(e)=>setDetail(e.target.value)}
                            />
                            <label for="floatingTextarea2">รายละเอียดเพิ่มเติม</label>
                        </div>
                    </div>
                </div>

                <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button type="button" class="btn btn-success" onClick={()=>setOpenConfirm(true)}>ยืนยันการซ่อมฉุกเฉิน</button>
                </div>
            </div>

        </div>
    )

}
export default Emergency