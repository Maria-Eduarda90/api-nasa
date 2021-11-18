import { Link } from 'react-router-dom';
import astro from '../images/2130-removebg-preview.png';
import { FiArrowRight } from 'react-icons/fi';

import * as C from '../styles/pages/home';

export const Home = () => {
    return(
        <C.BodyImage>
            <div className="container">
                <div className="astro"><img src={astro}/></div>
            </div>
            <div>
                <C.h1 className="exemplo">A IMAGINAÇÃO É MAIS IMPORTANTE QUE O CONHECIMENTO!</C.h1>
                <C.p>Albert Einstein</C.p>
            </div>
            <C.ContainerArrow className="content-wrapper">
                <Link className="enter-app" to="InformationNasa">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
                </Link>
            </C.ContainerArrow>
        </C.BodyImage>
        
    );
}