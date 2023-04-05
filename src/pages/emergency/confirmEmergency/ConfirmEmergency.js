import { GiAutoRepair } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

function ConfirmEmergency(props){
    return(
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"gray",width:"100%",height:"100%",padding:0,margin:0}}>
            <div style={{display:"flex",padding:"10px",backgroundColor:"white",textAlign:"center",alignItems:"center"}}>
                <Link to="" onClick={props.close} style={{position:"absolute"}}>
                    <button type="button" class="btn btn-secondary">{"<-- Back"}</button>
                </Link>
                <h1 style={{flex:1}}>รายการฉุกเฉิน</h1>
            </div>

            <div style={{flex:3,display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
                <img src="https://images-storage.thaiware.site/tips/2020_11/images/1433_20111714250002_67.png"
                    style={{width:"50%",height:"90%"}}
                />
            </div>

            <div style={{flex:2,display:"flex",flexDirection:"column",backgroundColor:"white"}}>
                <div style={{flex:3,display:"flex",gap:"20px"}}>
                    <div style={{flex:1,display:"flex",gap:"10px",justifyContent:"center",alignItems:"center"}}>
                        <BiTimeFive style={{color:"black",width:"50px",height:"50px"}}/>
                        <div >
                            <p style={{margin:0}}>เวลา xx:xx   วันที่ DD MM YYYY </p>
                            <p style={{margin:0}}>เบอร์โทรติดต่อกัน : 06x-xxx-xxxx </p>
                        </div>
                    </div>
                    <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div class="form-floating" style={{width:"80%"}}>
                            <textarea class="form-control" placeholder="Leave a comment here"  style={{height:"100px"}}
                                defaultValue={props.detail}
                                disabled
                            />
                            <label for="floatingTextarea2">รายละเอียดเพิ่มเติม</label>
                        </div>
                    </div>
                </div>

                <div style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Link to={"/"}>
                        <button type="button" class="btn btn-success">
                            ยืนยันสำเร็จ
                        </button>
                        </Link>

                </div>
            </div>

        </div>
    )

}
export default ConfirmEmergency