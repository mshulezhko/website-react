import { Link } from 'react-router-dom'
import BannerImg from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className='headerContainer'>
                <h1>Pizzeria</h1>
                <p>🍕🍕🍕🍕🍕🍕🍕🍕🍕</p>
                <Link to='/'>
                    <button>Order now</button>
                </Link>
            </div>

        </div>
    )
}

export default Home
