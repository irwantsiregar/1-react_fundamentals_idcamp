import React from 'react';
import { FiGlobe } from 'react-icons/fi';

function PageNotFound() {
  return (
    <section id="form" className="pt-14 pb-8 md:pt-28 bg-slate-100 dark:bg-dark">
      <div className="container mt-[40%] md:mt-[12%]">
        <div className="w-full py-auto text-center">
          <h1 data-aos="fade-right" className="font-bold text-primary text-4xl mb-4 sm:text-4xl lg:text-5xl dark:text-slate-200">4<FiGlobe className="inline text-primary dark:text-green-700"/>4</h1>
          <h4 data-aos="fade-down" className="font-semibold text-xl text-secondary mb-2">Page Not Found !</h4>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound;