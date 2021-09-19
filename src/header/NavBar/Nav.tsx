import s from './Nav.module.css';
import me from '../iconsImg/me.svg';
import skills from '../iconsImg/skills.svg';
import cases from '../iconsImg/cases.svg';
import contacts from '../iconsImg/contacts.svg';
import {HeaderElement} from './headerEl/headerEl';


const {header_nav} = s;


export const Nav = () => {
    return (

        <div className={header_nav}>
          <HeaderElement img={me} text={'Me'} alt={'About me'} href={'#'}/>
          <HeaderElement img={skills} text={'Skills'} alt={'MySkills'} href={'#'}/>
          <HeaderElement img={cases} text={'Cases'} alt={'Portfolio'} href={'#'}/>
          <HeaderElement img={contacts} text={'Contacts'} alt={'Contacts'} href={'#'}/>
        </div>
    )
}