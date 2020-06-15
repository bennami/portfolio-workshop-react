import React, {useState} from "react";
import { Link} from  'react-router-dom';
import "./nav.scss"

function Nav() {

    const [navClass, setClass] = useState(true);
    const [burgerClass, setBurgerClass] = useState(true);

    const navSlide =() => {

         //open close nav on mobile
            if(!navClass){
               setClass(true);
               setBurgerClass(true);
            }else{
               setClass(false);
               setBurgerClass(false);
            }
    };

    return(
        <nav>
            <ul className= {"nav-desktop"}>
                <li>
                    <Link to={'/'}>
                    <button>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <button>about</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <button>about</button>
                    </Link>
                </li>

            </ul >

            {/*nav bar for mobile*/}
            <div onClick={navSlide} className={burgerClass ? 'burger' : 'burger toggle'} >
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
            <ul className= {navClass ? 'nav-links-mobile': 'nav-links-mobile nav-active-mobile'}>
                <li>
                    <Link to={'/'}>
                        <button>about</button>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <button>contact</button>
                    </Link>
                </li>
            </ul >
        </nav>

    )

}

export default Nav;
