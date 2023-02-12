import { LI, H2, UL } from "./Contacts.styled"
import PropTypes from 'prop-types';

export default function Contacts ({ contacts, deleteContact }){
    return (
        <>
            <H2>Contacts</H2>
            <UL>
            {contacts.map(({id,name,phone}) => (
                <LI key={id}>{name} : {phone}
                    <div>
                        <button 
                            type="button"
                            onClick={() => {deleteContact(id) }}
                            //передача id в метод для удаления обьекта
                        >DELETE</button> 
                    </div>
                     
                </LI>    
            ))}
            </UL>
        </>
    )
}
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}