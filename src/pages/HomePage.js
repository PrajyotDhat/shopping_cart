
import Home from '../components/Home'
import { addToCart } from '../redux/actions/Action'


const mapDispatchToProps=dispatch=>{
    addToCartHandler:data=>dispatch(addToCart(data))
}

// export default HomePage
