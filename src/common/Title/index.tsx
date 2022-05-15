import React from 'react';

const Title: React.FC<{
  label: string
}> = ({
  label
}) => {
  return (
    <p className="text-center text-[30px] font-bold mb-28">
      {label}
    </p>
  );
}

export default Title;