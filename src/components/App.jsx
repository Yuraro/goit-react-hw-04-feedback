import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification'; 

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleLeaveFeedback = (option) => {
    if (option === 'good') {
      setGood((prevGood) => prevGood + 1);
    } else if (option === 'neutral') {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (option === 'bad') {
      setBad((prevBad) => prevBad + 1);
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good * 100) / total);
    return isNaN(percentage) ? 0 : percentage;
  };


  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};


export default App;