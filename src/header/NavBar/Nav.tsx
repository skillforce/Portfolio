import s from './Nav.module.css';


const {header_nav} = s;


export const Nav = () => {
    return (

        <div className={header_nav}>
            <a href="#">General</a>
            <a href="#">Skills</a>
            <a href="#">My cases</a>
            <a href="#">Contacts</a>
        </div>
    )
}