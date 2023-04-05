import {useState} from "react";
import HistoryDetails from "./historyDetails/HistoryDetails";
function History(){
    const [emergencyData,setEmergencyData] = useState([
        {
            name:"Pare",
            order:1,
            date:" 1 มกราคม พ.ศ.2566",
            time:"12.00",
            brand:"toyota",
            model:"ae-86 Lewin BEV",
            detail:"รถสตาร์ทไม่ติด คิดว่าน่าจะมีปัญหาที่มอเตอร์",
            status:"เสร็จสิ้น"
        },
        {
            name:"Pare",
            order:2,
            date:" 1 มกราคม พ.ศ.2566",
            time:"12.00",
            brand:"toyota",
            model:"ae-86 Lewin BEV",
            detail:"ขับรถมาพักนึง รถมีควันค่ะ",
            status:"ยกเลิก"
        },
    ])
    const [repairData,setRepairData] = useState([
        {
            name:"Pare",
            order:3,
            date:" 3 มกราคม พ.ศ.2566",
            time:"12.00",
            brand:"toyota",
            model:"ae-86 Lewin BEV",
            detail:"รถเสียค่ะ",
            status:"เสร็จสิ้น"
        },
        {
            name:"Pare",
            order:4,
            date:" 4 มกราคม พ.ศ.2566",
            time:"12.00",
            brand:"toyota",
            model:"ae-86 Lewin BEV",
            detail:"แอร์เสียร้อนมากๆ",
            status:"ยกเลิก"
        },
    ])
    const [detailData,setDetailData] = useState(null)
    const [openDetail,setOpenDetail] = useState(false)
    if(openDetail){
        return(
            <HistoryDetails
                close={()=>setOpenDetail(false)}
                detailsData = {detailData}
            />
        )
    }
    return(
        <div style={{padding:"20px",display:"flex",flexDirection:"row",gap:"20px"}}>
            <div style={{flex:1}}>
                <div style={{width:"100%",backgroundColor:"#D9D9D9",borderRadius:"20px",padding:"15px"}}>
                    <h1 style={{textAlign:"center"}}>ฉุกเฉิน</h1>
                </div>
                {emergencyData.map((data,index)=>{
                    return(
                        <div 
                            role="button" 
                            key={index} 
                            style={{paddingLeft:"20px",paddingRight:"20px",borderBottom: '2px solid black'}}
                            onClick={()=>[setDetailData(data),setOpenDetail(true)]}
                        >
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                <p style={{margin:0,fontWeight:"bold"}}>คุณ {data.name}</p>
                                <p style={{margin:0}}>รายการงาน:{("0000" + (index+1)).slice(-5)}</p>
                            </div>
                            <p style={{margin:0}}>วันที่ {data.date} เวลา {data.time} น.</p>
                            <p style={{margin:0}}>ยี่ห้อ : {data.brand}</p>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                <p style={{margin:0}}>รุ่น : {data.model}</p>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <p style={{margin:0}}>สถานะการซ่อม : </p>
                                    <p style={{color:data.status==="เสร็จสิ้น"?"green":"red"}}>{data.status}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                
            </div>
            <div style={{flex:1}}>
                <div style={{width:"100%",backgroundColor:"#D9D9D9",borderRadius:"20px",padding:"15px"}}>
                    <h1 style={{textAlign:"center"}}>ซ่อมแซม</h1>
                </div>

                {repairData.map((data,index)=>{
                     return(
                        <div 
                            role="button" 
                            key={index} 
                            style={{paddingLeft:"20px",paddingRight:"20px",borderBottom: '2px solid black'}}
                            onClick={()=>[setDetailData(data),setOpenDetail(true)]}
                        >
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                <p style={{margin:0,fontWeight:"bold"}}>คุณ {data.name}</p>
                                <p style={{margin:0}}>รายการงาน:{("0000" + (index+1)).slice(-5)}</p>
                            </div>
                            <p style={{margin:0}}>วันที่ {data.date} เวลา {data.time} น.</p>
                            <p style={{margin:0}}>ยี่ห้อ : {data.brand}</p>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                <p style={{margin:0}}>รุ่น : {data.model}</p>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <p style={{margin:0}}>สถานะการซ่อม : </p>
                                    <p style={{color:data.status==="เสร็จสิ้น"?"green":"red"}}>{data.status}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default History