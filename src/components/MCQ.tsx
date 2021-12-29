// framework
import React from 'react';

// local models
import { mcq_type } from '../models/mcq_question';

// define component properties
interface mcq_props {
    questions: Array<mcq_type>
};

// styles
const mcq_options_style = {
    'display': 'flex',
    'justifyContent': 'space-around'
};

const MCQ: React.FC<mcq_props> = ({ questions }) => {
    return (
        // TSX Template
        <div>
            {
                questions.map((q, index) => {
                    return (<div key={index}>
                        <h4>{q.text}</h4>
                        <div style={mcq_options_style}>
                            {
                                q.options.map((option, index) => {
                                    return (
                                        <div key={index}>
                                            <label>{option}</label>
                                            <input type="radio" />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>);
                })
            }
        </div>
    );
};

export default MCQ;