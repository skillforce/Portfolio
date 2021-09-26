import s from './btns.module.scss';

const {
    MyWorksItemTitleBtn,
    MyWorksItemTitleBtnTrue
} = s;

type BtnsPropsType = {
    title: string
    type: 'submit' | 'link'
}

export const Btns = (pr: BtnsPropsType) => {
    const {title, type} = pr;
    return (
        <div className={type==='link'?MyWorksItemTitleBtn:MyWorksItemTitleBtnTrue}>
            {type === 'link' && <a href="#">{title}</a>}
            {type === 'submit' && <button type='submit'>
                {title}
            </button>}
        </div>
    )
}