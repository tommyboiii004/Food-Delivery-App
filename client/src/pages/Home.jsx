import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import PopularRestaurants from '../components/PopularRestaurants'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, [])

  const fetchRestaurants = async () => {
    await axios.get('http://localhost:6001/fetch-restaurants').then(
      (response) => {
        setRestaurants(response.data);
      }
    )
  }

  return (
    <div className="HomePage">

      <div className="home-categories-container">

        <div className="home-category-card" onClick={() => navigate('/category/Breakfast')}>
          <img src="https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled-scaled.jpg" alt="" width="500" height="700"/>
          <h5>Breakfast</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Biriyani')}>
          <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" alt="" />
          <h5>Biriyani</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Pizza')}>
          <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
          <h5>Pizza</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Noodles')}>
          <img src="https://www.cookwithkushi.com/wp-content/uploads/2021/09/best_veg_noodles_recipe.jpg" alt="" />
          <h5>Noodles</h5>
        </div>

        <div className="home-category-card" onClick={() => navigate('/category/Burger')}>
          <img src="https://foodhub.scene7.com/is/image/woolworthsltdprod/fi-2401-spicy-chicken-burgers?wid=1300&hei=1300&fmt=png-alpha" alt="Burger" />
          <h5>Burger</h5>
        </div>

      </div>


      <PopularRestaurants />




      <div className="restaurants-container">
        <div className="restaurants-body">
          <h3>All restaurants</h3>
          <div className="restaurants">

            {restaurants.map((restaurant) => (

              <div className='restaurant-item' key={restaurant._id}>
                <div className="restaurant" onClick={() => navigate(`/restaurant/${restaurant._id}`)}>
                  <img src={restaurant.mainImg} alt="" />
                  <div className="restaurant-data">
                    <h6>{restaurant.title}</h6>
                    <p>{restaurant.address}</p>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>





      <Footer />
    </div>
  )
}

export default Home