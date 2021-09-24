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
                        <form >
                        <div className={contactsFormBox}>
                            <input placeholder={'please Enter your name'} type="text"/>
                            <input placeholder={'Enter your number'} type="text"/>
                            <textarea placeholder={'Enter your message'}/>
                        </div>
                        <Btns title={'Send'}/>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}