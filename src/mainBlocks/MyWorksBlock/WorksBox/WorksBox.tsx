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

type WorksBoxType={
    name:string
    descriptions:string
    styleImg:any
}


export const WorksBox = (props:WorksBoxType) => {
    const {name,descriptions,styleImg}=props;

    return (<div className={MyWorksItem}>
            <div className={MyWorksItemTitle}>
                <div style = {styleImg} className={MyWorksItemTitleImg}>
                    <Btns title={'Look'}/>
                </div>
            </div>
            <div className={MyWorksItemMain}>
                <div className={MyWorksItemMainName}>
                    <p>{name}</p>
                </div>
                <div className={MyWorksItemMainDescr}>
                    <p>{descriptions}</p>
                </div>
            </div>
        </div>
    )
}