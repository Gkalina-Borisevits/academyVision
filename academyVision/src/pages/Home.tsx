import { FC } from 'react'
import BurgerMenu from '../components/burger-menu/BurgerMenu'
import HomeCards from '../components/home-cards/HomeCards'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeCardsAccordion from '../components/home-cards/HomeCardsAccordion'

const Home: FC = () => {
  return (
    <div>
      Home
      <Container>
        <NavLink className="text-decoration-none" to="/services">
          <HomeCards />
        </NavLink>
        <HomeCardsAccordion/>


      </Container>


    </div>
  )
}

export default Home