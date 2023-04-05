import { BsFillBellFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";
import CarPic from "../../assets/CarPic.png"
import VectorCar1 from "../../assets/VectorCar1.png"
import VectorCar2 from "../../assets/VectorCar2.png"
import Bell from "../../assets/bell.png"

function Home () {

    return (
        <div style={{backgroundColor:"white",width:"100%",height:"100%",padding:0,margin:0}}>
            <div  style={{display:"flex",width:"100%",flexDirection:"row",height:"100%",justifyContent:"center",alignItems:"center"}}>
                <div style={{position:"relative",flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
                    <img 
                        style={{width:"592px",height:"376px"}}
                        src={CarPic}
                    />
                    <div style={{position:"absolute",right:10,top:-60,display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"}}>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" style={{width:"60px",height:"30px"}} />
                        </div>
                        <p style={{fontSize:"20px"}} >OFF-ON</p>
                    </div>

                    <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around"}}>
                        <div>
                            <Link to="/Booking">
                                <button  style={{width:"255px",height:"152px",borderRadius:"20px"}} type="button" class="btn btn-secondary">
                                    <img 
                                        style={{width:"70px",height:"70px"}}
                                        src={VectorCar1}
                                    />
                                    <h5>รายการการจอง</h5>
                                </button>
                            </Link>
                        </div>
                        <div style={{position:"relative"}}>
                            <Link to="/Emergency">
                                <button  style={{width:"255px",height:"152px",borderRadius:"20px"}} type="button" class="btn btn-secondary">
                                    <img
                                         style={{width:"90px",height:"90px"}}
                                         src={VectorCar2}
                                    />
                                    <h5>ซ่อมแซมฉุกเฉิน</h5>
                                </button>
                            </Link>
                            <div style={{position:"absolute",right:-25,top:-25}}>
                                <img 
                                    style={{color:"red",width:"68px",height:"68px"}}
                                    src={Bell}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Home;
