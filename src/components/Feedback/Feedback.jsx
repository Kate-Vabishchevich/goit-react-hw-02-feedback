import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    leaveVote = name => {
        this.setState(prevState => {
            return { [name]: prevState[name] + 1 }
        });
    }

    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                    options = {['good', 'neutral', 'bad']}></FeedbackOptions>
                </Section>
            </div>
        );
    }
}

export default Feedback;