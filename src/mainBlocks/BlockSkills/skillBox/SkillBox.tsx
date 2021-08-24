import s from './SkillBox.module.css';


const {skillItem, skillItemTitle, skillItemMain,skillItemTitleImg} = s;

type skillBoxPropsType ={
    skill:string
    skillDescr: string
    skillImg:string
}


export const SkillBox = (pr:skillBoxPropsType) => {

    const{skill,skillDescr,skillImg}=pr;
    return (<div className={skillItem}>
            <div className={skillItemTitle}>
                <div className={skillItemTitleImg}>
                    <img src={skillImg} alt=""/>
                </div>
                <p>{skill}</p>
            </div>
            <div className={skillItemMain}>
                <p>{skillDescr}</p>
            </div>
        </div>
    )
}