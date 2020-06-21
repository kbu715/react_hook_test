// import React, { useState, useEffect } from 'react';

// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const titleUpdate = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   }
//   useEffect(titleUpdate, [title]);
//   return setTitle;

// }

// const App = () => {
//   const titleUpdater = useTitle('Loading...')
//   setTimeout(()=>{titleUpdater("Home")}, 5000);
//   return (
//     <div>
//       hi  
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect, useRef } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    const { target : { value } } = e;
    let willUpdate = true;
    if(typeof validator === 'function'){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  }

  return { value, onChange };

}

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const titleUpdate = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(titleUpdate, [title]);

  return setTitle;

}

const App = () => {
  const titleUpdater = useTitle('Loading....')
  setTimeout(()=>{titleUpdater('Home')}, 6000)

  const maxLen = value=>value.length < 10;
  const name = useInput('hi~ ', maxLen)

  const potato = useRef();
  setTimeout(()=>{potato.current.focus()},5000);
  return (
    <div>
      <h1>hi</h1>
      <input ref={potato} {...name} />
    </div>
  );
};

export default App;