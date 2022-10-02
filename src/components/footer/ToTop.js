import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToTop() {
  return (
    <a href="#notes"
      className="fixed bottom-4 right-7 md:right-4 z-[99] flex h-11 w-11 items-center justify-center rounded-full border dark:border-white border-primary dark:opacity-70 p-4 hover:animate-pulse"
      id="to-top">
      <FontAwesomeIcon icon="fa-solid fa-angles-up" size="lg" className="text-primary" />
    </a>
  )
}

export default ToTop;