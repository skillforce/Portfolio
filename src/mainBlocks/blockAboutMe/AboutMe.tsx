import s from './AboutMe.module.css';


const{blockTitle,container,aboutMeTitle,aboutMeText,aboutMePhoto}=s;





export const AboutMe=()=> {
    return (<div className = {blockTitle}>
            <div className={container}>
                <div className={aboutMeTitle}>
                 <div className={aboutMeText}>
                     <p>Hello!</p>
                     <p>My name is Denis.</p>
                     <p>I'm frontend developer</p>
                 </div>
                 <div className={aboutMePhoto}>
                 </div>
                </div>
            </div>
        </div>
    )
}