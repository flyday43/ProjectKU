import { Link, useNavigate } from "react-router-dom"
function Main(props) {
    const navigate = useNavigate()
    const toAddProduct = () => {
        navigate("/ProductInformation/AddProduct")
    }
    const toHome = () => {
        navigate("/")
    }

    return (
        <div className=".container-fluid">
            <nav class="navbar bg-body-tertiary" style={{ padding: 0, margin: 0 }} >
                <div class="container-fluid" style={{ backgroundColor: "#3BD16F", height: "100px" }}>
                    <Link class="navbar-brand" to="/">
                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" style={{ width: 80, height: 80, borderRadius: 80 }} />
                                </div>
                                <div class="col" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h3>EV plus</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </nav>
            <div class="row" style={{ minHeight: "calc(100vh - 100px)", width: "100vw" ,padding:0, margin: 0}}>

                <div class="col-3" style={{ backgroundColor: "#D9D9D9", paddingLeft: 10 }}>
                    <div style={{ width: "100%", padding: "5px 5px 0px 5px" }}>
                        <Link to="/">
                            <button type="button" class="btn btn-light" style={{ width: "100%", borderRadius: 0 }}>ทำรายการ</button>
                        </Link>
                    </div>
                    <div style={{ width: "100%", padding: "5px 5px 0px 5px" }}>
                        <Link to="/History">
                            <button type="button" class="btn btn-light" style={{ width: "100%", borderRadius: 0 }}>ประวัติการทำรายการ</button>
                        </Link>
                    </div>
                    <div style={{ width: "100%", padding: "5px 5px 0px 5px" }}>
                        <Link to="/StorePage">
                            <button onClick={toAddProduct} type="button" class="btn btn-light" style={{ width: "100%", borderRadius: 0 }}>ข้อมูลร้าน</button>
                        </Link>
                    </div>
                    <div style={{ width: "100%", padding: "5px 5px 0px 5px" }}>
                        <Link to="/ProductInformation">
                            <button type="button" class="btn btn-light" style={{ width: "100%", borderRadius: 0 }}>ข้อมูลสินค้า</button>
                        </Link>
                    </div>
                    <div style={{ width: "100%", padding: "5px 5px 0px 5px" }}>
                        <Link to="/Chat">
                            <button type="button" class="btn btn-light" style={{ width: "100%", borderRadius: 0 }}>แชท</button>
                        </Link>
                    </div>

                </div>

                {/*  */}
                <div class="col-9" style={{ backgroundColor: "white", padding: 0, border: 5,display:"flex",flexDirection:"column" ,margin:0}}>
                    {props.pagesComponent}
                </div>

            </div>

        </div>
    )
}
export default Main