import { Section, Title } from "./Wrapper.styled"
import PropTypes from 'prop-types';
export default function WrapperForPhonebook({ children }) {
    return (
        <Section>
            <Title>Phonebook</Title>
            {children}
        </Section > 
    )
}
WrapperForPhonebook.propTypes = {
    children: PropTypes.node.isRequired,
}