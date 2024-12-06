import { useParams } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Panier from "./Panier";
import Forgetpass from "./Forgetpass";
import Register from "./register";
import New from "./New";
import Man from "./Man";
import Kids from "./Kids";
import Woman from "./Woman";
import  PageSneak  from "./PageSneak";
import { useLocation } from "react-router-dom";
import Pagecode from "./Pagecode";
import Newpass from "./newpass";
import Payment from "./payment";
import Favorites from "./Favorites";
export default function Pages(props){
    const { d } = useParams();
    const location = useLocation();
    const sneaker = location.state ;
    console.log(sneaker)
    if(d === 'Login'){
        document.title = 'Nike | Login'
        return <Login />
    }else if(d === 'About'){
        document.title = 'Nike | About'
        return <About />
    }else if(d === 'panier'){
        document.title = 'Nike | Panier'
        return <Panier tab={props.panier} DeleteAll={props.DeleteAll} fnSupprimer={props.fnSupprimer}/>
    }else if(d === 'forgetpass'){
        document.title = 'Nike | Forgetpass'
        return <Forgetpass />
    }else if(d === 'register'){
        document.title = 'Nike | Register'
        return <Register />
    }else if(d === 'New'){
        document.title = 'Nike | New'
        return <New fnFavorites={props.fnFavorites} tab={props.Newtableau} fnctajout={props.fnctajout}/>
    }else if(d === 'Man'){
        document.title = 'Nike | Man'
        return <Man fnFavorites={props.fnFavorites} tab={props.Mantableau} fnctajout={props.fnctajout}/>
    }else if(d === 'Woman'){
        document.title = 'Nike | Woman'
        return <Woman fnFavorites={props.fnFavorites} tab={props.Womanetableau} fnctajout={props.fnctajout}/>
    }else if(d === 'Kids'){
        document.title = 'Nike | Kids'
        return <Kids fnFavorites={props.fnFavorites} tab={props.Kidstableau} fnctajout={props.fnctajout}/>
    }else if(d === 'pagsneak'){
        document.title = 'Nike | Sneak'
        return <PageSneak fnFavorites={props.fnFavorites} sneaker={sneaker}  fnctajout={props.fnctajout}></PageSneak>
    }else if(d === 'code'){
        document.title = 'Nike | Code'
        return <Pagecode></Pagecode>
    }else if(d === 'newpass'){
        document.title = 'Nike | New password'
        return <Newpass></Newpass>
    }else if(d === 'Payment'){
        document.title = 'Nike | Payment'
        return <Payment tab={props.panier}></Payment>
    }else if(d === 'favorite'){
        document.title = 'Nike | Favorites'
        return <Favorites fnctajout={props.fnctajout} addAll={props.addAll} tab={props.Favorites} fnSupprimerfav={props.fnSupprimerfav} DeleteAllfav={props.DeleteAllfav}></Favorites>
    }
}