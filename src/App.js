// import React, { useState, useEffect, useRef } from 'react';
// import Child from './Child';

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (e) => {
//     const {
//       target: { value },
//     } = e;
//     let willUpdate = true;
//     if (typeof validator === 'function') {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };

//   return { value, onChange };
// };

// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const titleUpdate = () => {
//     const htmlTitle = document.querySelector('title');
//     htmlTitle.innerText = title;
//   };
//   useEffect(titleUpdate, [title]);

//   return setTitle;
// };

// const useClick = (onClick) => {
//   const element = useRef();

//   useEffect(() => {
//     if (typeof onClick === 'function') {
//       if (element.current) {
//         element.current.addEventListener('click', onClick);
//       }
//     }

//     return () => {
//       //componentWillUnmount 때 발생
//       const clickEl = element;
//       if (clickEl) {
//         clickEl.current.removeEventListener('click', onClick);
//       }
//     };
//   }, [onClick]);
//   return element;
// };

// const App = () => {
//   const titleUpdater = useTitle('Loading....');
//   setTimeout(() => {
//     titleUpdater('Home');
//   }, 6000);

//   const maxLen = (value) => value.length < 10;
//   const name = useInput('hi~ ', maxLen);

//   const changeText = (e) => {
//     e.target.innerText = 'Hello~';
//   };
//   const title = useClick(changeText);

//   //onCreate 연습
//   const [parentValue] = useState('안녕');
//   const [childValue, setChildValue] = useState('');

//   const handleValue = (value) => {
//     setChildValue(value);
//   };

//   return (
//     <div>
//       <h1 ref={title}>Hi</h1>
//       <input ref={potato} {...name} />
//       <Child value={parentValue} onCreate={handleValue} />
//       {childValue}
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from 'react';
import { useTabs } from './hooks/useTabs';
import { useTitle } from './hooks/useTitle';
import { useClick } from './hooks/useClick';

const contents = [
  {
    tab: 'Section 1',
    content: "I'm the content of Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of Section 2",
  },
  {
    tab: 'Section 3',
    content: "I'm the content of Section 3",
  },
  {
    tab: 'Section 4',
    content: "I'm the content of Section 4",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);

  const titleUpdator = useTitle('Loading....');

  const potato = useRef();

  setTimeout(() => titleUpdator('My Homepage'), 5000);

  const sayHello = () => {
    console.log('helloooo');
  };

  const title = useClick(sayHello);

  useEffect(() => {
    setTimeout(() => potato.current.focus(), 5000);
  }, [potato]);

  return (
    <div>
      <h1>웹 title을 보시오</h1>
      {contents.map((section, index) => (
        <button
          key={index}
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <br />
      {currentItem.content}
      <div>
        <input ref={potato} placeholder="words" />
      </div>
      <h1 ref={title}>hi</h1>
    </div>
  );
};

export default App;
