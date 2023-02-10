// import {deleteContactsAction,addNewContactsAction} from "redux/actions"; //было
import { Container } from "./App.styled";
import  Form  from "./Form";
import  Contacts  from "./Contacts";
import Filter from "./Filter";
import WrapperForPhonebook from "./Wrapper";
import { useDispatch, useSelector } from 'react-redux';
import {deleteContactsAction,addNewContactsAction} from "redux/contacts.slice";
import { getFilteredContacts , addNewContacts} from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const dataUsers = useSelector(addNewContacts);
  const filter = useSelector(getFilteredContacts);

  const getFormData = newUsers => {
    if (dataUsers.length === 0) {
      dispatch(addNewContactsAction(newUsers));
      return;
    } else {
      //ищем существующий контакт в 
      const existingContacts = 
        dataUsers.findIndex(itemContacts =>
        newUsers.name === itemContacts.name) !== -1;
      if (existingContacts) {
        alert(`${newUsers.name} is already in contacts.`)
        return;
      } else {
        dispatch(addNewContactsAction(newUsers));
      }
    }
  }
  //Удаляем контакт по id
   const deleteContact = uniqueId => {
    dispatch(deleteContactsAction(uniqueId));
   }
  
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return dataUsers.filter(contact=>
       contact.name.toLowerCase().includes(normalizedFilter))
  }
  return (
    <Container>
        <WrapperForPhonebook>
          {/* Передаем в пропс метод который получит 
          данные из формы */}
        <Form submitData={getFormData} /> 
        {dataUsers.length === 0 ? '' :
          <>
        <Filter />
        <Contacts contacts={filterContacts()}
            deleteContact={deleteContact} />
          </> }
        </WrapperForPhonebook>
    </Container>
  )
};