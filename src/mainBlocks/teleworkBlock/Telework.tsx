import s from './Telework.module.css';
import {Btns} from '../btns/btns';


const {blockTitle, container, teleWorkBlock} = s;


export const Telework = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={teleWorkBlock}>
                    <p>Considering options</p> <span>for remote work</span>
                    <div>  <Btns title={'employ me'}/></div>

                </div>
            </div>
        </div>
    );
}