import React, { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const titleUpdate = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(titleUpdate, [title]);
  return setTitle;

}

const App = () => {
  const titleUpdater = useTitle('Loading...')
  setTimeout(()=>{titleUpdater("Home")}, 5000);
  return (
    <div>
      hi
    </div>
  );
};

export default App;

// import React, { useState, useEffect, useRef } from "react";

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (e) => {
//     const {
//       target: { value },
//     } = e;
//     let willUpdate = true;
//     if (typeof validator === "function") {
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
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   };
//   useEffect(titleUpdate, [title]);

//   return setTitle;
// };

// const useClick = (onClick) => {
//   const element = useRef();

//   useEffect(() => {
//     if (typeof onClick === "function") {
//       if (element.current) {
//         element.current.addEventListener("click", onClick);
//       }
//     }
//     return () => {
//       //componentWillUnmount 때 발생
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return element;
// };

// const App = () => {
//   const titleUpdater = useTitle("Loading....");
//   setTimeout(() => {
//     titleUpdater("Home");
//   }, 6000);

//   const maxLen = (value) => value.length < 10;
//   const name = useInput("hi~ ", maxLen);

//   const potato = useRef();
//   setTimeout(() => {
//     potato.current.focus();
//   }, 5000);

//   const sayHello = () => console.log("Hello");
//   const title = useClick(sayHello);
//   return (
//     <div>
//       <h1 ref={title}>Hi</h1>
//       <input ref={potato} {...name} />
//     </div>
//   );
// };

// export default App;







// import React, { useState } from 'react';

// const useInput = (initialValue, validator) => {
//     const [ value, setValue ] = useState(initialValue)
//     const onChange = (event) => {
//         const { target : { value } } = event
//         let willUpdate = true
//         if(typeof validator === "function"){
//             willUpdate = validator(value)
//         }
//         if(willUpdate){
//             setValue(value)
//         }
//     }

//     return { value, onChange }
// }

// const App = () => {
// const maxLen = (value) => value.length <= 10
// const name = useInput("Mr.", maxLen)
//   return (
//     <div>
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

// export default App;




// import React, { useState } from 'react';


// const contents = [
//     {
//         tab : "Section 1",
//         content : "I'm the content of Section 1" 
//     },
//     {
//         tab : "Section 2",
//         content : "I'm the content of Section 2"
//     }
// ]

// const useTabs = (initialTab, allTabs) => {

//     const [currentIndex, setCurrentIndex] = useState(initialTab)
//     if(!allTabs || !Array.isArray(allTabs)){
//         return;
//     }
//     return {
//         currentItem : allTabs[currentIndex],
//         changeItem : setCurrentIndex
//     }
// }

// const App = () => {
// const {currentItem, changeItem} = useTabs(0, contents)
//   return (
//     <div>
//       <h1>Hello</h1>
//         {contents.map((section, index)=><button key={index} onClick={()=>{changeItem(index)}}>{section.tab}</button>)}    
//         <br />
//         {currentItem.content}  
//     </div>
//   );
// };

// export default App;