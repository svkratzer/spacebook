import React from 'react';

/* 
The following are arrays of <option>'s for use in the
SignupForm presentational component. They're just constants meant
to clear up some of the clutter in the signup form. 
*/

const createNumericalOptionsFromRange = (min, max) => {
  const numericalOptions = [];
  for(let i = min; i <= max; i++) {
  let nextOption = <option key={i} value={i}>{i}</option>;
    numericalOptions.push(nextOption);
  }
  return numericalOptions;
}

let date = new Date();
let currentYear = date.getFullYear();

export const days = createNumericalOptionsFromRange(1, 31);

export const years = createNumericalOptionsFromRange(1905, currentYear).reverse();

export const months = [
  <option key={1} value={1}>Jan</option>,
  <option key={2} value={2}>Feb</option>,
  <option key={3} value={3}>Mar</option>,
  <option key={4} value={4}>Apr</option>,
  <option key={5} value={5}>May</option>,
  <option key={6} value={6}>Jun</option>,
  <option key={7} value={7}>Jul</option>,
  <option key={8} value={8}>Aug</option>,
  <option key={9} value={9}>Sep</option>,
  <option key={10} value={10}>Oct</option>,
  <option key={11} value={11}>Nov</option>,
  <option key={12} value={12}>Dec</option>
];