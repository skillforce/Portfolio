import s from './Telework.module.scss';
import {Btns} from '../btns/btns';


const {blockTitle, container, teleWorkBlock} = s;


export const Telework = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={teleWorkBlock}>
                    <p>Consider options</p> <span>for remote work</span>
                    <div><Btns type={'link'} title={'employ me'}/></div>

                </div>
            </div>
        </div>
    );
}