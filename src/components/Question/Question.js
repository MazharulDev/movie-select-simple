import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <h3>Question:  How to React work?</h3>
            <p>Answer: React works through the virtual dom. React creates the virtual dom, and wherever the website changes, that virtual dome can easily catch up.Can change in small part to part, so time and data are less costly.And this work is done through the diff algorithm.Shows the content of the website through the browser at the end of it all</p>
            <h3>Question:  What is the difference between props and state?</h3>
            <p>
               Answer: Props are immutable but state is mutable. Props are read-only not changes on other State changes can be asynchronous.Props send information from one component to another and Keeps information of state component.The props can be accessed by the child component but the state cannot do that.
            </p>
        </div>
    );
};

export default Question;