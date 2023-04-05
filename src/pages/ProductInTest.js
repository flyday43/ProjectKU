import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function ProductTest() {
  const navigate = useNavigate()

  const testNavigate = (test) => {
    if (test) {
      navigate("/ProductInformation")
    } else {
      alert("TEST")
    }
  }
  return (
    <div >
      <h1 onClick={() => testNavigate(true)}>ProductTest-True</h1>
      <h1 onClick={() => testNavigate(false)}>ProductTest-False</h1>

      <a href="/ProductInformation">to ProductInformation</a>
      <br />
      <Link to="/ProductInformation">to ProductInformation</Link>
    </div>
  )
}
export default ProductTest