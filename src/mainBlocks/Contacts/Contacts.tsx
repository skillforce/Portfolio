import s from './Contacts.module.css';
import {Btns} from '../btns/btns';


const {
    contactsTitle,
    blockTitle,
    container,
    contactsBlock,
    contactsFormBox
} = s;


export const Contacts = () => {
    return (<div className={blockTitle}>
            <div className={container}>
                <div className={contactsBlock}>
                    <div className={contactsTitle}>
                        <p>Contacts</p>
                        <div className={contactsFormBox}>
                            <input placeholder={'please Enter your name'} type="text"/>
                            <input placeholder={'please Enter your number'} type="text"/>
                            <textarea placeholder={'please Enter your message'}/>
                        </div>
                        <Btns title={'Send'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}