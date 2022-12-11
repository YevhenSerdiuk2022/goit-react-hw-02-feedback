import propTypes from 'prop-types';
import { Title } from './Section.styled';
const Section = ({ title, children }) => (
    <div>
        <Title >{title}</Title>
        {children}
    </div>
);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
}

export default Section;