import s from './Skills.module.scss';
import {SkillBox} from './skillBox/SkillBox';
import reactImg from './skillBox/skillImgIcon/REACT.png';
import JSImg from './skillBox/skillImgIcon/JS.png';
import HTMLImg from './skillBox/skillImgIcon/HTML.png';
import CSSImg from './skillBox/skillImgIcon/CSS.png';
import reduxImg from './skillBox/skillImgIcon/REDUX.png';
import typescript from './skillBox/skillImgIcon/typescript.svg';
// @ts-ignore
import Rotate from 'react-reveal/Fade'


const {skillsTitle, blockTitle, skillsMain, container,skillsBlock} = s;


export const Skills = () => {
    return (<div id={'MySkills'} className={blockTitle}>
            <Rotate top right>
            <div className={container}>
                <div className={skillsBlock}>
                <div className={skillsTitle}>
                    <span>My</span> <p>skills</p>
                </div>
                <div className={skillsMain}>
                    <SkillBox skill={'Native JS'} skillDescr={''} skillImg={JSImg} progress={70}/>
                    <SkillBox skill={'HTML 5'} skillDescr={''} skillImg={HTMLImg} progress={70}/>
                    <SkillBox skill={'CSS 3'} skillDescr={''} skillImg={CSSImg} progress={70}/>
                    <SkillBox skill={'React'} skillDescr={''} skillImg={reactImg} progress={75}/>
                    <SkillBox skill={'Redux'} skillDescr={''} skillImg={reduxImg} progress={80}/>
                    <SkillBox skill={'TypeScript'} skillDescr={''} skillImg={typescript} progress={75}/>
                </div>
                </div>
            </div>
            </Rotate>
        </div>
    )
}