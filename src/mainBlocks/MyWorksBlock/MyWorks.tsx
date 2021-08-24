import s from './MyWorks.module.css';
import {WorksBox} from './WorksBox/WorksBox';


const {
    MyWorksTitle,
    blockTitle,
    container,
    MyWorksBlock,
    MyWorksMain,
} = s;


export const MyWorks = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={MyWorksBlock}>
                    <div className={MyWorksTitle}>
                        <p>My works</p>
                    </div>
                    <div className={MyWorksMain}>
                    <WorksBox/>
                    <WorksBox/>
                    </div>
                </div>
            </div>
        </div>
    )
}