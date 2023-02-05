import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, leaveVote }) => {
    return (
        <>
            {options.map(option => (
                <button
                    className={css.btn}
                    key={option}
                    type='button'
                    onClick={() => leaveVote(option)}
                >
                    {option}
                </button>
            ))}
        </>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,),
    leaveVote: PropTypes.func,
}