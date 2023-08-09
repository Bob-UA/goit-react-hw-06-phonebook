import { useSelector } from "react-redux";

export const GetContacts = () => {
    return useSelector(state => state.phonebook.contacts);
}
export const GetFilter = () => {
    return useSelector(state => state.phonebook.filter);

}