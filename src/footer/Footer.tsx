import s from './Footer.module.scss';
import linkedin from './footerIcon/linkedin.png';
import codewars from './footerIcon/codewars.png';
import github from './footerIcon/github.png';
import telegram from './footerIcon/telegram.png';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    footerTitle,
    blockTitle,
    container,
    footerBlock,
    footerBox,
    footerTitle_header,
    black_Img,
    link
} = s;


export const Footer = () => {
    return (<div id={'footer'} className={blockTitle}>
            <Rotate bottom right>
            <div className={container}>
                <div className={footerBlock}>
                    <div className={footerTitle}>
                        <div className={footerTitle_header}>
                            <p>Vpname aka</p><span> Denis Tatarinov</span>
                        </div>
                        <div className={footerBox}>
                            <div className={link}>
                                <a target={'_blank'} href="https://www.linkedin.com/in/denis-tatarinov-32445b204/"><img
                                    src={linkedin} alt="linkedin"/></a>
                            </div>
                            <div className={black_Img}>
                                <a target={'_blank'} href="https://www.codewars.com/users/skillforce"><img
                                    src={codewars} alt="codewars"/></a>
                            </div>
                            <div className={black_Img}>
                                <a target={'_blank'} href="https://github.com/skillforce"><img src={github}
                                                                                               alt="github"/></a>
                            </div>
                            <div className={link}>
                                <a target={'_blank'} href="https://t.me/vpname"><img src={telegram} alt="telegram"/></a>
                            </div>
                        </div>
                        <p>©All rights reserved</p>
                    </div>
                </div>
            </div>
            </Rotate>
        </div>
    )
}