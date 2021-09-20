import s from './Skills.module.css';
import {SkillBox} from './skillBox/SkillBox';
import reactImg from './skillBox/skillImgIcon/REACT.png';
import JSImg from './skillBox/skillImgIcon/JS.png';
import HTMLImg from './skillBox/skillImgIcon/HTML.png';
import CSSImg from './skillBox/skillImgIcon/CSS.png';
import reduxImg from './skillBox/skillImgIcon/REDUX.png';



const {skillsTitle, blockTitle, skillsMain, container,skillsBlock} = s;


export const Skills = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={skillsBlock}>
                <div className={skillsTitle}>
                    <span>My</span> <p>skills</p>
                </div>
                <div className={skillsMain}>
                    <SkillBox skill={'Native JS'} skillDescr={''} skillImg={JSImg} progress={60}/>
                    <SkillBox skill={'HTML 5'} skillDescr={''} skillImg={HTMLImg} progress={70}/>
                    <SkillBox skill={'CSS 3'} skillDescr={''} skillImg={CSSImg} progress={70}/>
                    <SkillBox skill={'React'} skillDescr={''} skillImg={reactImg} progress={65}/>
                    <SkillBox skill={'Redux'} skillDescr={''} skillImg={reduxImg} progress={60}/>
                </div>
                </div>
            </div>
        </div>
    )
}