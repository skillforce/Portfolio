import s from './Skills.module.css';
import {SkillBox} from './skillBox/SkillBox';


const {skillsTitle, blockTitle, skillsMain, container,skillsBlock} = s;


export const Skills = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={skillsBlock}>
                <div className={skillsTitle}>
                    <p>My skills</p>
                </div>
                <div className={skillsMain}>
                    <SkillBox skill={'React'} skillDescr={'detailed skill descriptions'} skillImg={'none'}/>
                    <SkillBox skill={'JS'} skillDescr={'detailed skill descriptions'} skillImg={'none'}/>
                    <SkillBox skill={'HTML'} skillDescr={'detailed skill descriptions'} skillImg={'none'}/>
                </div>
                </div>
            </div>
        </div>
    )
}