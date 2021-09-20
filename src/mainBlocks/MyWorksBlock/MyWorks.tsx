import s from './MyWorks.module.css';
import {WorksBox} from './WorksBox/WorksBox';
import socialNet from './imgWorks/socialNetWork.png';
import counter from './imgWorks/Counter.png';


const {
    MyWorksTitle,
    blockTitle,
    container,
    MyWorksBlock,
    MyWorksMain,
} = s;


export const MyWorks = () => {


    const socialPrjImg={
        backgroundImage:`url(${socialNet})`
    }
    const counterPrjImg={
        backgroundImage:`url(${counter})`
    }
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={MyWorksBlock}>
                    <div className={MyWorksTitle}>
                        <span>My</span> <p>works</p>
                    </div>
                    <div className={MyWorksMain}>
                    <WorksBox styleImg={socialPrjImg} descriptions={'Look at my social network'} name={'Samyrai way project'}/>
                    <WorksBox styleImg={counterPrjImg} descriptions={'Look at my counter'} name={'Counter(with Redux using)'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}