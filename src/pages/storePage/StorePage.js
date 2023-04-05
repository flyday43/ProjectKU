import React,{ useState ,useEffect} from "react";
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import service from "../../firebase/service";
function StorePage(){
    const [ ratingStar, setRatingStar ] = useState(0)
    const [ comment, setComment] = useState("")
    const [ allRating, setAllRating] = useState(5)
    const [ allComment, setAllComment ] = useState([{
        userName:"Kittisak W",
        ratingStar:5,
        comment:"ลูกค้าร้านนี้น่ารักทุกคนจริงๆนะ"
    }])
    const [ loading, setLoading] = useState(true)

    const confirmComment= async()=>{
        let newAllComment = allComment
        const allUser =["เก็ท","ปลาย","กฤต","มัส","นาย","ไนท์","ภีม"]
        let index = Math.floor(Math.random() * 5)
        // newAllComment.unshift({
        //     userName:allUser[index],
        //     ratingStar:ratingStar,
        //     comment:comment
        // })
        await service.saveChat(allUser[index],ratingStar,comment)
        // setAllRating((allRating*(newAllComment.length-1) + ratingStar) / newAllComment.length)
        // setAllComment([...newAllComment])
        setRatingStar(0)
        setComment("")

    }
    const getDataSuccess = (data)=>{
        setAllComment([...data])
        setLoading(false)
    }
    useEffect(()=>{
        service.getChat(getDataSuccess)
    },[])
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <div style={{padding:"20px",display:"flex",flexDirection:"column"}}>
            <h1 style={{alignSelf:"center"}}>ร้าน พี่นายตู้ซิ่ง</h1>
            <br/>
            <h4>ที่อยู่ : 39/2 หมู่ 8 ต.คชสิทธิ์ อ.หนองแค จ.สระบุรี 18250 </h4>
            <h4>โทร : 0955740336 </h4>
            <h4>อีเมล : naiskanboy@gmail.com </h4>
            <br/>
            <div style={{display:"flex"}}>
                <h4 style={{color:"red"}}>**</h4>
                <h4>.....</h4>
            </div>
    
            <div style={{paddingLeft:"30px",paddingRight:"30px"}}>
                <h4>{parseFloat(allRating).toFixed(2)} / 5</h4>
                <div style={{display:"flex",alignItems:"center"}}>
                    <h4>รีวิว </h4>
                    <div style={{display:"flex",alignItems:"center",gap:"2px"}}>
                        <button style={{padding:0,display:"flex",alignItems:"center",background:"none",border:"none"}}>
                            {ratingStar>=1?
                                <AiFillStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(1)}
                                />
                                :<AiOutlineStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(1)}
                                />
                            }
                        </button>
                        <button style={{padding:0,display:"flex",alignItems:"center",background:"none",border:"none"}}>
                            {ratingStar>=2?
                                <AiFillStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(2)}
                                />
                                :<AiOutlineStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(2)}
                                />
                            }
                        </button>
                        <button style={{padding:0,display:"flex",alignItems:"center",background:"none",border:"none"}}>
                            {ratingStar>=3?
                                <AiFillStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(3)}
                                />
                                :<AiOutlineStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(3)}
                                />
                            }
                        </button>
                        <button style={{padding:0,display:"flex",alignItems:"center",background:"none",border:"none"}}>
                            {ratingStar>=4?
                                <AiFillStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(4)}
                                />
                                :<AiOutlineStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(4)}
                                />
                            }
                        </button>
                        <button style={{padding:0,display:"flex",alignItems:"center",background:"none",border:"none"}}>
                            {ratingStar>=5?
                                <AiFillStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(5)}
                                />
                                :<AiOutlineStar 
                                    style={{color:"yellow",width:"25px",height:"25px"}} 
                                    onClick={()=>setRatingStar(5)}
                                />
                            }
                        </button>
                        
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                    <div class="form-floating" style={{width:"100%"}}>
                        <textarea class="form-control" placeholder="Leave a comment here" style={{height:"100px"}}
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}
                            disabled={ratingStar<=0}
                        />
                        <label for="floatingTextarea2">รายละเอียดเพิ่มเติม</label>
                    </div> 
                    {ratingStar<=0?<div style={{alignSelf:"flex-end",height:"40px"}}></div>:<button style={{alignSelf:"flex-end",height:"40px"}} onClick={confirmComment} type="button" class="btn btn-primary">ยืนยัน</button>}
                </div>  

                <h3>คอมเมนต์ทั้งหมด</h3>
                <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    {allComment.map((data)=>{
                        return(
                            <div style={{padding:"10px",backgroundColor:"gray",borderRadius:"10px"}}>
                                <p style={{fontWeight:"bold",margin:0}}>{data.userName}</p>
                                <div>
                                    {data.ratingStar>=1?<AiFillStar style={{color:"yellow"}}/>:<AiOutlineStar style={{color:"yellow"}} />}
                                    {data.ratingStar>=2?<AiFillStar style={{color:"yellow"}}/>:<AiOutlineStar style={{color:"yellow"}} />}
                                    {data.ratingStar>=3?<AiFillStar style={{color:"yellow"}}/>:<AiOutlineStar style={{color:"yellow"}} />}
                                    {data.ratingStar>=4?<AiFillStar style={{color:"yellow"}}/>:<AiOutlineStar style={{color:"yellow"}} />}
                                    {data.ratingStar>=5?<AiFillStar style={{color:"yellow"}}/>:<AiOutlineStar style={{color:"yellow"}} />}
                                </div>
                                <p style={{margin:0}}>{data.comment}</p>
                            </div>
                        )
                    })}
                </div>
            </div>       
        </div>
    )
}
export default StorePage