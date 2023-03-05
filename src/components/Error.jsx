import React from 'react';

function Error({ message }) {
  return (
    <div className="alert alert-danger mt-5" role="alert">
      {message}
    </div>
  );
}

export default Error;