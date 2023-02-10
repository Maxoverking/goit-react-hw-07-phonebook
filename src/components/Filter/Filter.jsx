// import { filterContactsAction } from "redux/actions"; // было
import { Label } from "components/Form/Form.styled"
import { Input } from "./Filter.styled"
import { filterContactsAction } from "redux/contacts.slice";
import { getFilteredContacts } from "redux/selectors";
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilteredContacts);

    const chooseFilterContact = (evt) => {
    dispatch(filterContactsAction(evt.target.value));
  }
    return (
        <>
            <Label>Find contacts by name</Label>
            <Input
                autoComplete="off"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -]
                [a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="May contain only letters"
                value={filter}
                onChange={chooseFilterContact}
                required />
        </>
    )
}
