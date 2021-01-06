import React, { useEffect } from 'react';

const Child = ({ value, onCreate }) => {
  const childValue = `${value}하세용 😁😁😁`;

  useEffect(() => {
    onCreate(childValue); //자식 데이터를 부모에게 끌어 올려준다...!!!
  }, [onCreate, childValue]);

  return <div>{value}</div>;
};

export default Child;
