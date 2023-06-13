import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Card'
// import Carousel from '../components/Carousel'

export default function Home() {
                                               //cors every time system by system 
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')
  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/auth/foodData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    // console.log(response[1][0].CategoryName)
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])



  return (
    <div >
       <div> <Navbar/></div>
       <div>  
         <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

<div className="carousel-inner " id='carousel'>
  <div class=" carousel-caption  " style={{ zIndex: "9" }}>
    <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
      <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
    </div>
  </div>
  <div className="carousel-item active" >
    <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
</div>
      <div > 
         <Cart/>
         <Cart/>  
         <Cart/>
         <Cart/>
       
         

      
      </div>
        <div><Footer /></div>
    </div>
  )
}
