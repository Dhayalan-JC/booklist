import React from 'react';

export const ListComponentContent = ({ props }) => {
  console.log('PRINT ME ::::', props);
  return (
    <div>
      <section>
        <h1>Book List</h1>
        <div>
          <input type="text" />
          {props}
        </div>
      </section>
    </div>
  );
};
