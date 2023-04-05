import ProductInformation from "./pages/productInformation/ProductInformation";
import ProductTest from "./pages/ProductInTest";
import Home from "./pages/home/Home";
//import AddProduct from "./pages/productInformation/AddProduct/addProduct";
import AddProduct from "./pages/productInformation/addproduct/AddProduct";
import Booking from "./pages/booking/Booking";
import Emergency from "./pages/emergency/Emergency";
import StorePage from "./pages/storePage/StorePage";
import History from "./pages/history/History";
import BookingDetail from "./pages/booking/bookingDetail/BookingDetail";
import Receipt from "./pages/booking/bookingDetail/Receipt";
import Chat from "./pages/chat/Chat";
import Main  from "./main/Main";

// import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main pagesComponent={<Home/>}/>}/>
        <Route path="/Emergency" element={<Main pagesComponent={<Emergency/>}/>}/>

        <Route path="/ProductInformation">
          <Route path="" element={<Main pagesComponent={<ProductInformation/>} />}/>
          <Route path="AddProduct" element={<Main pagesComponent={<AddProduct/>} />}/>
        </Route>
        <Route path="/ProductTest" element={<Main pagesComponent={<ProductTest/>}/>}/>

        <Route path="/Booking" >
          <Route path="" element={<Main pagesComponent={<Booking/>} />}/>
          <Route path="Detail" >
            <Route path="" element={<Main pagesComponent={<BookingDetail/>} />}/>
            <Route path="Receipt" element={<Main pagesComponent={<Receipt/>} />}/>
          </Route>
        </Route>

        <Route path="/StorePage" element={<Main pagesComponent={<StorePage/>}/>}/>
        <Route path="/History" element={<Main pagesComponent={<History/>}/>}/>
        <Route path="/Chat" element={<Main pagesComponent={<Chat/>}/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}


export default App;
