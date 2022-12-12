import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import React, {Component} from 'react';
import Notification from 'components/Notification';
import { Container } from './App.styled';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   handleFeedback = evt => {
     if (evt === 'Good') {
      this.setState(prevState =>({ good: prevState.good + 1 }));
    } else if (evt === 'Neutral') {
      this.setState(prevState =>({ neutral: prevState.neutral + 1 }));
    } else if (evt === 'Bad') {
      this.setState(prevState =>({ bad: prevState.bad + 1 }));
    }
   };
  
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };
  positivePercentage = () => {
    const { good } = this.state;
    if (this.totalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / this.totalFeedback()) * 100);
   }
    render() {
      const { good, neutral, bad } = this.state;
      return (
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.handleFeedback} />
          </Section>
          <Section title='Statistics'>
            {this.totalFeedback() !== 0
              ? (
              <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
              />)
              : ( <Notification message="There is no feedback"/>)
          }
           
           
          </Section>
    
        </Container>
      );
    };
  
}