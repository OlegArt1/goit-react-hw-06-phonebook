import { useState, useEffect } from "react";
import { Layout } from "components/Layout/Layout";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { contactsData } from "redux/contactsSlice";
import Css from "./App.module.css";

export let name_text = '';

export const LOCALE_STORAGE = "persist:users";

export const App = () =>
{
    const [filter, setFilter] = useState('');
    const [contact, setContact] = useState(contactsData);

    useEffect(() =>
    {
        setContact(contact);

    }, [contact]);

    const onChangeFilter = (evt) =>
    {
        setFilter(evt.currentTarget.value);

        name_text = filter;
    }
    return (
        <Layout>
            <h1 className={Css.title_phonebook}>Phonebook</h1>
            <ContactForm/>
            <h1 className={Css.title_contact}>Contacts</h1>
            <Filter filter={filter} onChange={onChangeFilter}/>
            <ContactList usersContact={contact}/>
        </Layout>
    );
};