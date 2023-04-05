import {useState} from "react";
function HistoryDetails(props){
    const [emergencyData,setEmergencyData] = useState([
        {
            name:"Pare",
            dateTime:"วันที่ 1 มกราคม พ.ศ.2566 เวลา 12.00 น.",
            brand:"toyota",
            model:"ae-86 Lewin BEV",
            status:"เสร็จสิ้น"
        },
        {
            name:"Pare",
            dateTime:"วันที่ 1 มกราคม พ.ศ.2566 เวลา 12.00 น.",
            brand:"toyota",
            model:"ae-86 Lewin BEV",
            status:"ยกเลิก"
        }
    ])
    return(
        <div style={{flex:1,position:"relative",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div style={{position:"absolute",top:"20px",left:"20px"}} >
                <button type="button" class="btn btn-secondary" onClick={props.close}>{"<---"}</button>
            </div>
            <div style={{flex:1,display:"flex",width:"50%",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{width:"100%"}}>
                    <div style={{width:"100%",textAlign:"center",borderBottom: '2px solid black'}}>
                        <h1>คุณ {props.detailsData.name}</h1>
                        <h3>รายการงาน {("0000" + (props.detailsData.order)).slice(-5)}</h3>
                    </div>
                    <div style={{padding:"15px",width:"100%"}}>
                        <h3>วันที่ {props.detailsData.date}</h3>
                        <h3>เวลา {props.detailsData.time} น.</h3>
                        <br/>
                        <h3>ยี่ห่อ : {props.detailsData.brand}</h3>
                        <h3>รุ่น : {props.detailsData.model}</h3>
                        <br/>
                        <h3>รายละเอียด : {props.detailsData.detail}</h3>
                    </div>
                </div>
                <div style={{width:"100%"}}>
                    <div style={{display:"flex",justifyContent:"flex-end",width:"100%"}}>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <h5 style={{margin:0}}>สถานะการซ่อม : </h5>
                            <h5 style={{color:props.detailsData.status==="เสร็จสิ้น"?"green":"red"}}>{props.detailsData.status}</h5>
                        </div>
                    </div>
                    <button style={{width:"100%"}} type="button" class="btn btn-success"
                    >
                        ดูใบเสร็จ
                    </button>
                </div>
            </div>

        </div>
    )
}
export default HistoryDetails