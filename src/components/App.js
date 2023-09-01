import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

const styles = {
  backgroundColor: 'orangered',
  padding: 12,
};

export class App extends Component  {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
};

handleClick = type => {
  this.setState(prevState => {
      return {
          [type]: prevState[type] + 1,
      };
  });
};

countTotalFeedback = () => {
  const { good, neutral, bad} = this.state;
  const total = good + neutral + bad;
  return total;
};

countPositivefeedback = () => {
  const{ good } = this.state;
  const Percentage = Math.round((good / this.countTotalFeedback) * 100);
  return Percentage;
}

render() {
  return(
    <div style={styles}>
      <section >
        <FeedbackOptions />
      </section>
      <section>
        <Statistics />
      </section>
      <section>
        <NotificationMessage/>
      </section>
    </div>


  )
}

};