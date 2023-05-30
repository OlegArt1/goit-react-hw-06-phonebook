import { createSlice, nanoid } from "@reduxjs/toolkit";
import { LOCALE_STORAGE } from "components/App";

export const contactsData =
[
    { id: nanoid(), name: "Rosie Simpson", phone: "459-12-56", },
    { id: nanoid(), name: "Hermione Kline", phone: "443-89-12", },
    { id: nanoid(), name: "Eden Clements", phone: "645-17-79", },
    { id: nanoid(), name: "Annie Copeland", phone: "227-91-26", },
];
const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsData,
    reducers: {
        addContact:
        {
            reducer(state, action)
            {
                const data_contacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE));

                let flag = false;

                for (let i = 0; i < data_contacts.length; i += 1)
                {
                    if (data_contacts[i].name === action.payload.name)
                    {
                        alert(`This is ${action.payload.name} is alredy in contacts!`);

                        flag = true;

                        break;
                    }
                    flag = false;
                }
                if (flag !== true)
                {
                    state.push(action.payload);
                }
            },
            prepare(name, phone)
            {
                return {

                    payload:
                    {
                        id: nanoid(),

                        name, phone,
                    },
                };
            },
        },
        deleteContact(state, action)
        {
            const index = state.findIndex(task => task.id === action.payload);

            state.splice(index, 1);
        },
    },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;