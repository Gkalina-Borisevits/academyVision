import { FC } from 'react'
import BurgerMenu from '../components/burger-menu/BurgerMenu'
import HomeCards from '../components/home-cards/HomeCards'
import { NavLink } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div>
      <NavLink className="text-decoration-none" to="/services"> 
         <HomeCards/>
      </NavLink>
    
      Home</div>
  )
}

export default Home