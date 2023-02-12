// import { addNewContactsAction,deleteContactsAction } from "./redux/slice";
import { Container } from "./App.styled";
import { ProgressBar } from 'react-loader-spinner';
import { STATUS } from "./Status/costants.status";
import  Form  from "./Form";
import  Contacts  from "./Contacts";
import Filter from "./Filter";
import WrapperForPhonebook  from "./Wrapper";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addNewContacts, getFilteredContacts } from "./redux/selectors";
import { getContacts,addContacts,deleteContacts } from "./redux/operations";


export const App = () => {
  const dispatch = useDispatch();
  const { items,isLoading  } = useSelector(addNewContacts);
  const filter = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(getContacts())
  },[dispatch])

  console.log("🚀  items", items);
  
  const getFormData = newContact => {
  if (items.length === 0) {
    dispatch(addContacts(newContact));
    return;
    } else {
    const existingContacts = 
        items.findIndex(itemContacts =>
        newContact.name === itemContacts.name) !== -1;
    //Проверка если контакт уже есть
    if(existingContacts){
      alert(`${newContact.name} is already in contacts.`)
      return;
    }
    dispatch(addContacts(newContact));
    }
  }
  const deleteContact = uniqueId => {
    dispatch(deleteContacts(uniqueId));
    }

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact=>
       contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <Container>
        <WrapperForPhonebook>
          {/* Передаем в пропс метод который получит 
          данные из формы */}
        <Form submitData={getFormData} /> 
        {isLoading === STATUS.loading || isLoading === STATUS.idle ? <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/> :
        ""}
        
        {items.length === 0 ? '' :
          <>
        <Filter />
        <Contacts contacts={filterContacts()}
            deleteContact={deleteContact} />
          </> }
        </WrapperForPhonebook>
    </Container>
  )
};