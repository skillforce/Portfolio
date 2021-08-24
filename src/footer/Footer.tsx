import s from './Footer.module.css';


const {
    footerTitle,
    blockTitle,
    container,
    footerBlock,
    footerBox
} = s;


export const Footer = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={footerBlock}>
                    <div className={footerTitle}>
                        <p>Vpname aka Denis Tatarinov</p>
                        <div className={footerBox}>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <p>©All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}