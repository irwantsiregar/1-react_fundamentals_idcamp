import React from 'react';
import parser from 'html-react-parser';

function Loading() {
  return (
    <div className="flex flex-wrap justify-center px-4 md:px-0">
      <div data-aos="zoom-in" className="border border-slate-300 dark:border-slate-700 shadow rounded-md p-8 max-w-sm w-full md:mx-3 mb-10 mt-32">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="flex grid-cols-12 gap-1 justify-end pr-4">
              <div className="rounded-full bg-slate-400 dark:bg-slate-600 h-6 w-6"></div>
            </div>
            <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
              <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Loadings() {
  let pulseElement = '';

  const pulse = (count) => {
    for (let index = 1; index <= count; index++) {
      pulseElement += `
      <div data-aos="zoom-in" data-aos-duration="${index}000" className="border border-slate-300 dark:border-slate-700 shadow rounded-md p-8 max-w-sm w-full md:mx-3 mb-10">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
              <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
              <div className="flex grid-cols-6 gap-2 justify-end pr-4">
                <div className="rounded-full bg-slate-400 dark:bg-slate-600 h-6 w-6"></div>
                <div className="rounded-full bg-slate-400 dark:bg-slate-600 h-6 w-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    return pulseElement;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {parser(pulse(6))}
    </div>
  )
}


export { Loadings, Loading };