import { LI, H2, UL } from "./Contacts.styled"
import PropTypes from 'prop-types';

export default function Contacts ({ contacts, deleteContact }){
    return (
        <>
            <H2>Contacts</H2>
            <UL>
            {contacts.map(({id,name,number}) => (
                <LI key={id}>{name} : {number}
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
