import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <h3>Question:  How to React work?</h3>
            <p>Answer: React works through the virtual dom. React creates the virtual dom, and wherever the website changes, that virtual dome can easily catch up.Can change in small part to part, so time and data are less costly.And this work is done through the diff algorithm.Shows the content of the website through the browser at the end of it all</p>
            <h3>Question:  What is the difference between props and state?</h3>
            <p>
            <table>
                <tr>
                    <td><b><u>Props</u></b></td>
                    <td><b><u>State</u></b></td>
                    
                </tr>
                <tr>
                    <td>1.Props are readonly</td>
                    <td>1.State change can be asynchronous</td>
                
                </tr>
                <tr>
                    <td>2.Props cant not be modified</td>
                    <td>2.State can be modified using this.setState</td>
                
                </tr>
            </table>
            </p>
        </div>
    );
};

export default Question;