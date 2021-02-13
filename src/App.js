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

import React, {useEffect, useState} from 'react';
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
import DeviceApp from './hooks/useDeviceOrientation';
import FaviconApp from './hooks/useFavicon';
import GeoApp from './hooks/useGeolocation';
import KeyPressApp from './hooks/useKeyPress';
import LSApp from './hooks/useLocalStorage';
import MouseApp from './hooks/useMousePosition';
import OnlineApp from './hooks/useOnline';
import LockScrollApp from './hooks/useLockScroll';
import { getMovies } from './api'
import axios from 'axios';





const App = () => {

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const api = axios.create({
    baseURL: 'https://yts.mx/api/v2'
  })
  
  const getMovies = (page) => 
  api.get("/list_movies.json", {params: {page, limit: 50 } })
  


  const fetchData = async () => {
    try {
      setLoading(true);
      const {data: {data: movies}} = await getMovies(page);
      // console.log(movies.movies);
      setMovieList(movies.movies)
    } catch(error){
      console.log(error)
    } 
      setLoading(false);
    
  }


  const fetchMore = async () => {

    try {
      console.log(page+1);
      setLoading(true);
      const {data: {data: movies}} = await getMovies(page+1);
      const prevMoviesID = movieList.map(movie => movie.id)
      const filteredMovies = movies.movies.filter((movie) => !prevMoviesID.includes(movie.id))
      setMovieList(prev => [...prev, ...filteredMovies])
    }catch(error){
      console.log(error);
    }
      setPage(p => p + 1);
      setLoading(false);
  
  }

  // 스크롤 이벤트 핸들러
const handleScroll = () => {
  let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight && loading === false) {
    // 페이지 끝에 도달하면 추가 데이터를 받아온다
    fetchMore();
  }
 };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(()=>{
    console.log('movieList',movieList)
  }, [movieList])

  return (
    <>
      {/* <ClickApp />
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
      <DeviceApp />
      <FaviconApp />
      <GeoApp />
      <KeyPressApp />
      <LSApp />
      <MouseApp />
      <OnlineApp />
      <LockScrollApp /> */}
      <h2>INFINITE MOVIES / Page: {page}</h2>
      {movieList.map(movie => <div style={{backgroundColor: '#efefef', boxShadow: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px`}} key={movie.id}><h3 style={{padding: 10}}>{movie.id}-{movie.title}</h3></div>)}
    </>
  );
};

export default App;