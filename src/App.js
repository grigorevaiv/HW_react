import './App.css';
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";



function ContactUs(){
    return(
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}

function MainPage(){
    return(
        <h1>Главная страница</h1>
    )
}

function AboutUs(){
    return(
        <h1>О нас</h1>
    )
}

function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <Menu/>
            <Route exact path="/" render={()=><PostList/>} />
            <Route path="/about" render={()=><AboutUs/>} />
            <Route path="/contact-us" render={()=><ContactUs/>} />
            <Route path="/post" render={()=><Post/>} />
        </BrowserRouter>
    </div>
  );
}

export default App;
