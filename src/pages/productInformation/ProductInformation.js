import {useState} from "react";
import {dataProduct} from "./dataProduct"
import {useNavigate } from "react-router-dom";


function ProductInformation(){
    const navigate = useNavigate()
    const [ titles, setTitles ] = useState("ทั้งหมด")
    const [ test, setTest] = useState(["ทั้งหมด1","ทั้งหมด2","ทั้งหมด3","ทั้งหมด4","ทั้งหมด5"])
    const toAddProduct=()=>{
      navigate("./AddProduct")
    }
    return (
          <div style={{flex:1,backgroundColor:"#D9D9D9",padding:0,margin:0}}>
            <div class="row" style={{gap:5,marginBottom:5,marginTop:5,width:"100%"}}>
              <div class="col" style={{padding:0}}>
                <button onClick={()=> setTitles("ทั้งหมด")} type="button" class={"btn btn-light "+ (titles==="ทั้งหมด"? "active": "")} style={{width:"100%",borderRadius:0}}>ทั้งหมด</button>
              </div>
              <div class="col" style={{padding:0}}>
                <button onClick={()=> setTitles("ยางรถยนต์")} type="button" class={"btn btn-light "+ (titles==="ยางรถยนต์" ? "active": "")} style={{width:"100%",borderRadius:0}}>ยางรถยนต์</button>
              </div>
              <div class="col" style={{padding:0}}>
                <button onClick={()=> setTitles("แบตเตอรี่")} type="button" class={"btn btn-light "+ (titles==="แบตเตอรี่"? "active": "")} style={{width:"100%",borderRadius:0}}>แบตเตอรี่</button>
              </div>
              <div class="col" style={{padding:0}}>
                <button onClick={()=> setTitles("มอเตอร์")} type="button" class={"btn btn-light "+ (titles==="มอเตอร์"? "active": "")} style={{width:"100%",borderRadius:0}}>มอเตอร์</button>
              </div>
            </div>
  
            <div class="row" style={{display:"flex",width:"100%",flexDirection:"row",backgroundColor:"white",height:80,marginBottom:5,textAlign:"center",justifyContent:"center",alignItems:"center"}}>
              <h3 style={{flex:1}}>{titles}</h3>
              <button onClick={()=>toAddProduct()} style={{backgroundColore:"#D9D9D9",width:"150px",justifySelf:"right",marginRight:10}} type="button" class="btn btn-secondary">
                เพิ่มรายการ
              </button>

            </div>
  
            <div class="row"style={{width:"100%",backgroundColor:"white",flex:1,padding:10}}>
              <div class="row row-cols-2 row-cols-md-4 g-4">

                {dataProduct.map((data,index)=>{
                  if(data.type === titles || titles==="ทั้งหมด"){
                    return(
                      <div class="col" key={index}>
                        <div class="card h-100">
                          <img src={data.image} class="card-img-top" alt="..."/>
                          <div class="card-body" style={{backgroundColor:"#D9D9D9"}}>
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.detail}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}

              </div>
            </div>
        </div>
    )
}
export default ProductInformation