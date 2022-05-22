import React from 'react';

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="px-3 lg:px-0 max-w-[1200px] mx-auto">
      {children}
    </div>
  );
}

export default Wrapper;