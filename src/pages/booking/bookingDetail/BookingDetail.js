import { Link ,useNavigate} from "react-router-dom";
function BookingDetail(){
    const navigate = useNavigate()
    const toReceipt=()=>{
        navigate("./Receipt")
    }
    return(
        <div  style={{flex:1,position:"relative",padding:"20px",display:"flex",alignItems:"center",flexDirection:"column",gap:"20px"}}>
            <div style={{display:"flex",width:"50%",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{width:"100%"}}>
                    <div style={{width:"100%",textAlign:"center",borderBottom: '2px solid black'}}>
                        <h1>คุณ Pare</h1>
                        <h3>รายการงาน {("0000" + (1)).slice(-5)}</h3>
                    </div>
                    <div style={{padding:"15px",width:"100%"}}>
                        <h3>วันที่ {"5/4/2023"}</h3>
                        <h3>เวลา {"08.00"} น.</h3>
                        <br/>
                        <h3>ยี่ห่อ : Toyota</h3>
                        <h3>รุ่น : ae-86 Lewin BEV</h3>
                        <br/>
                        <h3>รายละเอียด : รถสตาร์ทไม่ติด คิดว่าน่าจะมีปัญหาที่มอเตอร์</h3>
                    </div>
                </div>
            </div>

            <div style={{width:"100%",display:"flex",justifyContent:"space-between",gap:"20px"}}>
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
                <button style={{flex:1}} type="button" class="btn btn-success">Add</button>
            </div>
            
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <table class="table" >
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col" >รายการซ่อมรถ</th>
                        <th scope="col">ราคา(บาท)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td >แบตเตอรี่ ขนาด .. ยี่ห้อ ..........................................................  </td>
                        <td>9700</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td >Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                <button type="button" class="btn btn-danger" style={{padding:"10px",width:"30%"}}>ยกเลิกรายการจอง</button>
                <button type="button" class="btn btn-success" style={{padding:"10px",width:"30%"}} 
                    onClick={()=>toReceipt()}
                >
                    ต่อไป
                </button>
            </div>
        </div>
    )
}
export default BookingDetail