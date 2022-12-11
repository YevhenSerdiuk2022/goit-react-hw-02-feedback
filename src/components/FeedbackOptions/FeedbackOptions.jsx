import propTypes from 'prop-types';
import { Button, Div } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options }) => (
    <Div>
        {options.map((option, index) => (
            <Button
                key={index}
            >
                {option}
            </Button>
        ))}
    </Div>
)

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
};

export default FeedbackOptions;