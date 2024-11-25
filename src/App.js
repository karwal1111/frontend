import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import React,{ useState } from "react";
import Home from './pages/homepage';
import Demo from './pages/demo';
import Header from './pages/header';
import Item from './pages/content';
import CarouselFadeExample from './pages/Cara';
import Footer from "./pages/footer";
import Test from "./pages/test";
import Break from "./pages/break";
import Form1 from "./pages/form";
// Experimenting
import Navbar from "./components/Navbar";
import Amazon from "./components/amazon";
import './styles/amazon.css';
import Cart from "./components/cart";
import CartPage from "./pages/cart"

function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <React.Fragment>
      
      <Header  size={cart.length} setShow={setShow}/>
      {{setShow} ? (
		<CarouselFadeExample/>
) : (
  <div>
    <h3>The component is hidden</h3>
  </div>
)}
      <center><h1 style={{marginTop:"20px"}}>Products</h1></center>
	  
      {/* <Navbar /> */}
      {
        show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
	  <Break/>
	  <Footer/>
    </React.Fragment>
    )
  }
//   return (
//     <>
//     <BrowserRouter>
//     <Header/>
//     <CarouselFadeExample/>
//     <center><h1 style={{marginTop:"20px"}}>Products</h1></center>
//     <Item/>
//     <Form1/>
//     <Routes>
//     {/* <Route path="/product" element={<ProductList/>}/> */}
    
//     </Routes>
//     <Break />
//     </BrowserRouter>
//     <Footer/>
//     </>
//   );
// }

export default App;
