import s from './btns.module.css';

const {

    MyWorksItemTitleBtn
} = s;


type BtnsPropsType = {
    title:string
}

export const Btns = (pr:BtnsPropsType) => {
    const{title}=pr;
    return (
        <div className={MyWorksItemTitleBtn}>
            <a href="#">{title}</a>
        </div>
    )
}