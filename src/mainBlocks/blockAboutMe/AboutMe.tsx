import s from './AboutMe.module.css';
import avatar from './imgAboutMe/avatar.jpg'


const {blockTitle, container, aboutMeTitle, aboutMeText, aboutMePhoto, colorBlock} = s;


export const AboutMe = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={aboutMeTitle}>
                    <div className={colorBlock}></div>
                    <div className={aboutMeText}>
                        <h1>I`am Denis Tatarinov.</h1>
                        <span>Frontend developer</span>
                    </div>
                    <div className={aboutMePhoto}>
                    </div>
                </div>
            </div>
        </div>
    )
}