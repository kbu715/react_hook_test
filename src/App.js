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

import React from 'react';
import ClickApp from './hooks/useClick';
import TabsApp from './hooks/useTabs';
import TitleApp from './hooks/useTitle';
import ConfirmApp from './hooks/useConfirm';
import PreventLeaveApp from './hooks/usePreventLeave';
import BeforeLeaveApp from './hooks/useBeforeLeave';
import FadeInApp from './hooks/useFadeIn';
import NetworkApp from './hooks/useNetwork';
import ScrollApp from './hooks/useScroll';
import FullscrennApp from './hooks/useFullscreen';
import AxiosApp from './hooks/useAxios';

const App = () => {
  return (
    <>
      <ClickApp />
      <TabsApp />
      <TitleApp />
      <ConfirmApp />
      <PreventLeaveApp />
      <BeforeLeaveApp />
      <FadeInApp />
      <NetworkApp />
      <ScrollApp />
      <FullscrennApp />
      <AxiosApp />
    </>
  );
};

export default App;
