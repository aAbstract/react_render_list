// framework
import React from 'react';

// local models
import { cat_type } from '../models/cat_type';

// local components
import MCQ from './MCQ';

// define component properties
interface qcont_props {
    cat: cat_type
};

const QuestionsCont: React.FC<qcont_props> = ({ cat }) => {
    return (
        // TSX Template
        <div>
            <h3>{cat.cat_name}</h3>
            <MCQ questions={cat.questions}></MCQ>
            <hr />
        </div>
    );
};

export default QuestionsCont;