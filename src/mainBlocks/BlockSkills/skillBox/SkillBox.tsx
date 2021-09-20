import s from './SkillBox.module.css';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const {
    skillItem,
    skillItemTitle,
    skillItemTitleImg,
    circleBar

} = s;

type skillBoxPropsType = {
    skill: string
    skillDescr: string
    skillImg: string
    progress: number
}

const ProgressBarStyle={
    root:'white',
    path: 'red',
    trail: "gray",
    text : 'yellow',
    background: 'green'
}



export const SkillBox = (pr: skillBoxPropsType) => {

    const {skill, skillDescr, skillImg, progress} = pr;
    return (<div className={skillItem}>
            <div className={skillItemTitle}>
                <div className={skillItemTitleImg}>
                    <img src={skillImg} alt={skillDescr}/>
                </div>
                <p>{skill}</p>
                <CircularProgressbar styles={buildStyles({
                    textSize: '25px',
                    pathTransitionDuration: 0.5,
                    pathColor: `#ffb400`,
                    textColor: '#fff',
                    trailColor: '#113',
                })} className={circleBar} value={progress} text={`${progress}%`} strokeWidth={10}/>
            </div>
        </div>

    )
}