import React from 'react';

const Title: React.FC<{
  label: string
}> = ({
  label
}) => {
  return (
    <p
      className="text-center text-[30px] font-bold mb-28 relative
      before:content-[''] before:inline-block before:h-[2px] before:w-[100px]
      before:bg-red before:absolute before:-bottom-3 before:left-1/2
      before:-translate-x-1/2"
    >
      {label}
    </p>
  );
}

export default Title;