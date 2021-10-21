import s from './Contacts.module.scss';
import {Btns} from '../btns/btns';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    contactsTitle,
    blockTitle,
    container,
    contactsBlock,
    contactsFormBox
} = s;


export const Contacts = () => {
    return (<div id={'Contacts'} className={blockTitle}>
            <Rotate top left>
            <div className={container}>
                <div className={contactsTitle}>
                    <p>Contacts</p>
                    <form>
                        <div className={contactsFormBox}>
                            <input placeholder={'please Enter your name'} type="text"/>
                            <input placeholder={'Enter your number'} type="text"/>
                            <textarea placeholder={'Enter your comments'}/>
                        </div>
                        <Btns type={'submit'} title={'Send'}/>
                    </form>
                </div>
            </div>
            </Rotate>
        </div>
    )
}