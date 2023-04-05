import { Link ,useNavigate} from "react-router-dom";
function Receipt(){
    const navigate =  useNavigate()
    const toBack =()=>{
        navigate("../")
    }
    return(
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"10px",gap:"20px"}}>
            <div style={{flex:1,backgroundColor:"#ECECEC",width:"50%",padding:"10px"}}>
                <h1 style={{textAlign:"center"}}>เสนอราคา</h1>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={{margin:0}}>ยี่ห้อ/รุ่น : Yamaha</p>
                    <p style={{margin:0}}>เลขที่บิล : 001</p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={{margin:0}}>ทะเบียนรถ : กผ 9070</p>
                    <p style={{margin:0}}>วันที่ : 1/01/2566</p>
                </div>

                <table class="table" style={{padding:"10px",backgroundColor:"white"}}>
                    <thead>
                        <tr>
                        <th scope="col" style={{border:"1px solid black",textAlign:"center"}}>จำนวน</th>
                        <th scope="col" style={{border:"1px solid black",textAlign:"center"}}>รายการ</th>
                        <th scope="col" style={{border:"1px solid black",textAlign:"center"}}>ราคา 1 ชิ้น</th>
                        <th scope="col" style={{border:"1px solid black",textAlign:"center"}}>ราคา</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" style={{borderLeft:"1px solid black",textAlign:"center"}}>1</th>
                            <td style={{borderLeft:"1px solid black"}}> มอเตอร์ ตราAA ขนาด 2200W 72V  </td>
                            <td style={{borderLeft:"1px solid black",textAlign:"center"}}>16000</td>
                            <td style={{borderLeft:"1px solid black",borderRight:"1px solid black",textAlign:"center"}}>16000</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{borderLeft:"1px solid black",textAlign:"center"}}>1</th>
                            <td style={{borderLeft:"1px solid black"}}> มอเตอร์ ตราAA ขนาด 2200W 72V  </td>
                            <td style={{borderLeft:"1px solid black",textAlign:"center"}}>16000</td>
                            <td style={{borderLeft:"1px solid black",borderRight:"1px solid black",textAlign:"center"}}>16000</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{borderLeft:"1px solid black",textAlign:"center"}}>1</th>
                            <td style={{borderLeft:"1px solid black"}}> มอเตอร์ ตราAA ขนาด 2200W 72V  </td>
                            <td style={{borderLeft:"1px solid black",textAlign:"center"}}>16000</td>
                            <td style={{borderLeft:"1px solid black",borderRight:"1px solid black",textAlign:"center"}}>16000</td>
                        </tr>

                        <tr>
                            <th scope="row" style={{border:"1px solid black",borderTop:"1px solid black"}}></th>
                            <td style={{border:"1px solid black"}}></td>
                            <td style={{border:"1px solid black"}}>รวมเงิน</td>
                            <td style={{border:"1px solid black",borderRight:"1px solid black"}}>25700</td>
                        </tr>
                    </tbody>
                </table>  
            </div>
            <div style={{display:"flex",width:"100%",justifyContent:"space-evenly"}}>

                <button type="button" class="btn btn-danger" style={{padding:"10px",width:"30%"}}
                    onClick={()=>toBack()}
                >
                    กลับ
                </button>
                <button type="button" class="btn btn-success" style={{padding:"10px",width:"30%"}} 
                    
                >
                    ส่งใบเสร็จให้ลูกค้า
                </button>
            </div>
            
        </div>
    )
}
export default Receipt