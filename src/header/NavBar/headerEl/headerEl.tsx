import s from './headerEl.module.css';


const {header_nav} = s;

type NavPropsType = {
    img:any
    text:string
    alt:string
    href:string
}


export const HeaderElement = (props: NavPropsType) => {




    const{img,text,alt,href}=props;
    return (
        <>
            <a href={href}>
                <img src={props.img} alt={alt}/>
                {props.text}
            </a>
        </>
    )
}