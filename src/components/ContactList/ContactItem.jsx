import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import PropTypes from "prop-types";
import Css from "./ContactList.module.css";

export const ContactItem = ({ contact }) =>
{
    const ListId = nanoid();

    const dispatch = useDispatch();

    const handleDelete = () =>
    {
        dispatch(deleteContact(contact.id));
    }
    return (
        <>
            <label className={Css.contact__label} htmlFor={ListId}>
                <b className={Css.contact__text_name}>Name:&nbsp;&nbsp;&nbsp;</b>
                <span id={ListId} className={Css.contact__text_span}>{contact.name};</span>
            </label>
            <label className={Css.contact__label} htmlFor={ListId}>
                <b className={Css.contact__text_name}>Phone:&nbsp;&nbsp;&nbsp;</b>
                <span id={ListId} className={Css.contact__text_span}>{contact.phone};</span>
            </label>
            <button id={contact.id} className={Css.contact__button} type="button" onClick={handleDelete}>X</button>
            <br/><br/><br/>
        </>
    );
};
ContactItem.propTypes =
{
    contact: PropTypes.object.isRequired,
};