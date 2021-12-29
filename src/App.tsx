// framework
import React, { useState, useEffect } from 'react';

// local models
import { cat_type } from './models/cat_type';

// local components
import QuestionCont from './components/QuestionsCont';

// styles
const main_cont_style = {
  'margin': '12% auto 0px auto',
  'width': '600px',
  'border': '1px solid grey',
  'padding': '16px'
};

const App: React.FC = () => {
  // survey state
  const [survey_data, set_survey_data] = useState(new Map<string, cat_type>());

  useEffect(() => {
    // onmounted
    // fetch data from API
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // map data to a valid state
        let survey_state = new Map<string, cat_type>();
        data.cats.forEach((cat: cat_type) => {
          survey_state.set(cat.cat_name, cat);
        });
        set_survey_data(survey_state);
      });

    return () => {
      // on destroyed
    };
  });

  return (
    // TSX Template (render state)
    <div style={main_cont_style}>
      <h2>Examle Survey</h2>
      <hr />
      <hr />
      {
        Array.from(survey_data.keys()).map((cat_name, index) => {
          return (
            <div key={index}>
              <QuestionCont cat={survey_data.get(cat_name) ?? { cat_name: 'No Categoreis', questions: [] }} />
            </div>
          );
        })
      }
    </div>
  );
};

export default App;