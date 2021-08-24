import s from './WorksBox.module.css';
import {Btns} from '../../btns/btns';

const {
    MyWorksItem,
    MyWorksItemTitle,
    MyWorksItemMain,
    MyWorksItemTitleImg,
    MyWorksItemMainDescr,
    MyWorksItemMainName,
} = s;


export const WorksBox = () => {
    return (<div className={MyWorksItem}>
            <div className={MyWorksItemTitle}>
                <div className={MyWorksItemTitleImg}>
                    <Btns title={'Look'}/>
                </div>
            </div>
            <div className={MyWorksItemMain}>
                <div className={MyWorksItemMainName}>
                    <p>Project name</p>
                </div>
                <div className={MyWorksItemMainDescr}>
                    <p>short descriptions</p>
                </div>
            </div>
        </div>
    )
}