import PropTypes from 'prop-types';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

const styles = {
    backgroundColor: 'green',
    padding: 12,
};

export const Statistics  = ({ good, neutral, bad, TotalFeedback, PositiveFeedback }) => {
    if (TotalFeedback === 0) {
        return <NotificationMessage />
    }
    return (
        <div style={styles}>
            <p>
               Good: <span>{good}</span> 
            </p>
            <p>
               Neutral: <span>{neutral}</span>
            </p>
            <p>
               Bad: <span>{bad}</span>
            </p>
            <p>
                Total: <span>{TotalFeedback}</span>
            </p>
            <p>
                Positive feedback: <span>{PositiveFeedback}%</span>     
            </p>  
        </div>
    )
}

Statistics.propTyres = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    /*totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,*/
  };