import { useState } from "react";
import './AddProduct.css';

///Navigate
import { useNavigate } from "react-router-dom";

///sweetalert2
import Swal from 'sweetalert2'

function AddProduct() {
  const navigate = useNavigate()
  const [fileImage, setFileImage] = useState(null)
  const [newData, setNewData] = useState([
    {
      fileImage: null,
      productName:"",
      productPrice:"",
      productType:""
    },
  ])
  const save = ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Save success',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("..")
          }
        })
      }
    })
    //navigate("..")
  }
  const changeImage = (event, index) => {
    console.log(event.target.files[0]);
    if (event.target?.files && event.target.files.length > 0) {
      let tempNewdata = newData
      tempNewdata[index].fileImage = event.target.files[0]
      setNewData([...tempNewdata])
    }
  }
  const changeName = (index,value) => {
      let tempNewdata = newData
      tempNewdata[index].productName = value
      setNewData([...tempNewdata])
  }

  const changePrice = (index,value) => {
    let tempNewdata = newData
    tempNewdata[index].productPrice = value
    setNewData([...tempNewdata])
  }

  const changeType = (index,value) => {
    let tempNewdata = newData
    tempNewdata[index].productType = value
    setNewData([...tempNewdata])
  }

  const addNewProdect = () => {
    let tempNewdata = newData
    tempNewdata.push({
      fileImage: null,
      productName:"",
      productPrice:"",
      productType:""
    })
    setNewData([...tempNewdata])
  }
  const deleteProdect = (index) => {
    let tempNewdata = newData
    tempNewdata.splice(index, 1); 
    if(tempNewdata.length === 0)
      setNewData([{
        fileImage: null,
        productName:"",
        productPrice:"",
        productType:""
      }])
    else
      setNewData([...tempNewdata])
  }

  return (
    <div class="container" style={{ backgroundColor: "#FFFFFF", padding: 0, border: '1px dashed red',margin:0 }}>
      <div class="row" style={{margin:0,padding:0}}>
        <div class="col-12" style={{display:"flex",justifyContent:"center", border: '1px dashed red',backgroundColor:"white" }}>
            <h3>เพิ่มรายการสินค้า</h3>
        </div>
      {newData.map((data, index) => {
        return (
          <div class="col-6" key={index} style={{ border: '1px dashed black' ,marginTop:5}}>
            <div class="container" style={{ border: '1px dashed yellow',backgroundColor:"white" }}>
              <div class="row">

                <div class="col-12" style={{display:"flex",justifyContent:"flex-end",padding:0}}>
                  <button onClick={()=>deleteProdect(index)} type="button" class="btn btn-danger">X</button>
                </div>

                <div class="col-5" style={{ border: '1px dashed green' }}>
                  <img style={{ width: "100%", height: "200px" ,objectFit:"cover"}} src={data.fileImage !== null ? URL.createObjectURL(data.fileImage) : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"} />
                  <div class="mb-3">
                    <input onChange={(e) => changeImage(e, index)} class="form-control" type="file" />
                  </div>
                </div>

                <div class="col-7" style={{ border: '1px dashed blue' }}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">ชื่อสินค้า</label>
                    <input type="text" value={data.productName} onChange={(e)=>changeName(index,e.target.value)} class="form-control" placeholder="ป้อนชื่อสินค้า" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">ราคา</label>
                    <input type="number" value={data.productPrice}  onChange={(e)=>changePrice(index,e.target.value)} class="form-control" placeholder="ป้อนราคา" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">ประเภท</label>
                    <select class="form-select" aria-label="ป้อนประเภท" value={data.productType} onChange={(e)=>changeType(index,e.target.value)} >
                      <option selected>ป้อนประเภท</option>
                      <option value="1">ยางรุ่น 235</option>
                      <option value="2">ยางรุ่น 456</option>
                      <option value="3">ยางรุ่น 789</option>
                    </select>
                  </div>
                </div>

              </div >
            </div >
          </div>
        )
      })}
      </div>

      <div style={{display:"flex",width: "100%",alignItems:"flex-end",flexDirection:"column",gap:5,marginTop:5}}>
        <button type="button" className="btn btn-primary" onClick={() => addNewProdect()}>เพิ่ม</button>
        <button type="button" className="btn btn-primary" onClick={()=>save()}>เสร็จสิ้น</button>
      </div>

    </div>

    )
}
export default AddProduct