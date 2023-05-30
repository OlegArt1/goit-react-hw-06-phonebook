import { useSelector } from "react-redux";
import { getTasks } from "redux/selectors";
import { ContactItem } from "./ContactItem";
import { LOCALE_STORAGE, name_text } from "components/App";
import PropTypes from "prop-types";
import Css from "./ContactList.module.css";
import AppCss from "../App.module.css";

const getVisibleContacts = (contacts) =>
{
    return contacts.filter(contact => contact.name.toLowerCase().includes(name_text.toLowerCase()));
};
export const ContactList = ({ usersContact }) =>
{
    const contacts = useSelector(getTasks);

    usersContact = getVisibleContacts(contacts);

    localStorage.setItem(LOCALE_STORAGE, JSON.stringify(usersContact));
    
    return (
        <div className={Css.contact}>
            <ul className={Css.contact__list}>
                {usersContact.length !== 0 ? usersContact.map(contact =>
                (
                    <li className={Css.contact__item} key={contact.id}>
                        <ContactItem contact={contact}/>
                    </li>
                ))
                :
                <h1 className={AppCss.title_error}>Contacts is not found!</h1>}
            </ul>
        </div>
    );
};
ContactList.propTypes =
{
    usersContact: PropTypes.object.isRequired,
};