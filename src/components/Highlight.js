import React from 'react';

export default function Highlight({children}) {
  return (
    <span className='highlight'>
      {children}
    </span>
  );
}