import propTypes from 'prop-types';
import { Button, Div } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <Div>
        {options.map((option, index) => (
            <Button
                key={index}
                onClick={()=> onLeaveFeedback(option)}
            >
                {option}
            </Button>
        ))}
    </Div>
)

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;