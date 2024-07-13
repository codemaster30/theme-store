'use client';

import React from 'react';

const error = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <h1 className="text-6xl text-red-400 font-bold ">404</h1>
      <p>Not Found</p>
    </div>
  );
};

export default error;
