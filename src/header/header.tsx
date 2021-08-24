import s from './header.module.css';
import {Nav} from './NavBar/Nav';


const {header_title, container} = s;


export const Header = () => {
    return (<div className={header_title}>
            <div className={container}>
                <Nav/>
            </div>
        </div>
    )
}