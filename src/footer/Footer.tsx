import s from './Footer.module.scss';
import linkedin from './footerIcon/linkedin.png';
import codewars from './footerIcon/codewars.png';
import github from './footerIcon/github.png';
import telegram from './footerIcon/telegram.png';


const {
    footerTitle,
    blockTitle,
    container,
    footerBlock,
    footerBox,
    footerTitle_header,
    black_Img
} = s;


export const Footer = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={footerBlock}>
                    <div className={footerTitle}>
                        <div className={footerTitle_header}>
                        <p>Vpname aka</p><span> Denis Tatarinov</span>
                    </div>
                        <div className={footerBox}>
                            <div>
                                <img src={linkedin} alt="linkedin"/>
                            </div>
                            <div className={black_Img}>
                                <img src={codewars} alt="codewars"/>
                            </div>
                            <div  className={black_Img}>
                                <img src={github} alt="github"/>
                            </div>
                            <div>
                                <img src={telegram} alt="telegram"/>
                            </div>
                        </div>
                        <p>©All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}