import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from "../img/logoInLadakh2.png"
const Header =()=>{


    
    return(
<div className="header flex justify-around h-36 bg-[#fdfac7]">
    <div className="logoContainer flex justify-center w-[30vw]">
       <Link to={"/"}><img className="logo w-[25%]" src={logo}></img></Link> 

    </div>
    <div  className="w-[70vw] pr-16">
        <ul className="flex justify-around p-5 bold text-lg" >
           
            <li className="bold text-lg"> <Link className="bold" to='/'>Home</Link> </li>
            <li className="bold text-lg"><Link className="bold text-lg" to="/about">About Us</Link></li>  
            <li className="bold text-lg"> <Link className="bold text-lg" to="contact">Contact Us</Link></li> 
       
        </ul>

    </div>

</div>
    )
}

export default Header;