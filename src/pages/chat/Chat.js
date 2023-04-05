function Chat(){
    return(
        <div style={{flex:1,display:"flex",padding:0,margin:0}}>
            <div style={{flex:1,border: '2px solid #D9D9D9',display:"flex",flexDirection:"column"}}>
                <div class="input-group mb-3">
                    <span class="input-group-text" >@</span>
                    <input type="text" class="form-control" placeholder="ค้นหาชื่อ"  />
                </div>

            </div>
            <div style={{flex:2,border: '2px solid #D9D9D9',display:"flex",flexDirection:"column"}}>
                <div style={{padding:"10px",borderBottom: '2px solid #D9D9D9'}}>
                    <h2>Pare</h2>
                    
                </div>

                <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                    <div style={{padding:"10px",display:"flex",alignItems:"center",gap:2}}>
                        <img 
                            src={"https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"} 
                            style={{width:"50px",height:"50px",borderRadius:"50px"}}  
                        />
                        <div style={{display:"flex",alignItems:"center",textAlign:"center",backgroundColor:"#D9D9D9",borderRadius:"5px"}}>
                            <p style={{padding:0,margin:"5px"}}>Test</p>
                        </div>
                    </div>

                </div>

                <div style={{padding:"20px",backgroundColor:"#D9D9D9",margin:0,display:"flex"}}>
                    <input type="text" class="form-control" placeholder="Aa"/>
                    <button  type="button" class="btn btn-success input-group-text" >ส่ง</button>
                </div>

            </div>

        </div>
    )
}
export default Chat