import s from './AboutMe.module.scss';
// @ts-ignore
import Rotate from 'react-reveal/Fade'
const {blockTitle, container, aboutMeTitle, aboutMeText, aboutMePhoto, colorBlock} = s;


export const AboutMe = () => {
    return (<div id={'AboutMe'} className={blockTitle}>

            <div className={container}>
                <div className={aboutMeTitle}>
                    <div className={colorBlock}></div>
                    <Rotate top left>
                    <div className={aboutMeText}>
                        <h1>I`am Denis Tatarinov.</h1>
                        <span>Frontend developer</span>
                    </div>
                    <div className={aboutMePhoto}></div>
                    </Rotate>
                </div>
            </div>

        </div>
    )
}