import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import React, {Component} from 'react';

import { Container } from './App.styled';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
    <Container>       
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']}/>
        </Section>
    
    </Container>
  );
};

   }