import s from './MyWorks.module.scss';
import {WorksBox} from './WorksBox/WorksBox';
import socialNet from './imgWorks/socialNetWork.png';
import counter from './imgWorks/Counter.png';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    MyWorksTitle,
    blockTitle,
    container,
    MyWorksBlock,
    MyWorksMain,
} = s;


export const MyWorks = () => {


    const socialPrjImg = {
        backgroundImage: `url(${socialNet})`
    }
    const counterPrjImg = {
        backgroundImage: `url(${counter})`
    }
    return (<div id={'MyWorksBlock'} className={blockTitle}>
        <Rotate top left>
            <div className={container}>
                <div className={MyWorksBlock}>
                    <div className={MyWorksTitle}>
                        <span>My</span> <p>works</p>
                    </div>
                    <div className={MyWorksMain}>
                        <WorksBox href={'https://skillforce.github.io/samyrai_way_ts/#/'} styleImg={socialPrjImg} descriptions={'Look at my social network'}
                                  name={'Samyrai way project'}/>
                        <WorksBox href={'https://skillforce.github.io/CounterRedux/#/first'} styleImg={counterPrjImg} descriptions={'Look at my counter'}
                                  name={'Counter(with Redux using)'}/>
                    </div>
                </div>
            </div>
        </Rotate>
        </div>
    )
}