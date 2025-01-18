import './output.css';
import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';

const AccessKey = process.env.REACT_APP_ACCESS_KEY;


const unsplash = createApi({
  accessKey: AccessKey,
});

  

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;
  useEffect(() => {
    console.log(urls, urls.regular)
    document.body.style.backgroundImage = `url(${urls.full})`;
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 
    document.body.style.backgroundRepeat = 'no-repeat';  
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundAttachment = 'fixed';

  }, [urls.full]);

  return null;
};

const Body = ({ queryData }) => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    unsplash.search
      .getPhotos({ 
        query: queryData,
        per_page: 1,
        orientation: 'landscape',
       })
      .then(res => {
        setPhotosResponse(res);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [queryData]);


  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <h1>PS: Make sure to set your access token!</h1>
      </div>
    );
  } else if (data.response.results.length < 1) {
    return (
      <div>
        <h1 className='text-center font-medium text-xl pt-6 text-gray-800'>Input is not valid</h1>
      </div>
    )
  } else {
  return (
    <div>
      {console.log(data.response)}
      {data.response.results.map(photo => (
        <PhotoComp photo={photo} />
      ))}
    </div>
  )
}
}

function App() {

  const [userInput, setUserInput] = useState("");
  const [submitInput, setSubmitInput] = useState("");


  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitInput(userInput);
    setUserInput("");
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='image flex justify-center flex-col mt-48 items-center gap-8'>
    <h1 className='text-center lg:text-5xl text-slate-900 font-bold px-6 text-3xl font-mono'>Enter the Image name to Search: </h1>
    <input className='inp w-1/2 border h-10 rounded-xl bg-white bg-opacity-20 p-2 placeholder-slate-400 placeholder-opacity-50 focus:outline-none shadow-md' placeholder='Enter the input' onChange={handleInputChange}></input>
    <button type='submit' id='submit-btn' className='border p-2 rounded-md px-5 font-semibold hover:bg-black active:shadow-inner active:translate-y-0.5 transition-transform duration-100  shadow-lg bg-white bg-opacity-45 hover:text-white bg-transparent '>Submit</button>
    </div>
    </form>
    {submitInput && <Body queryData={submitInput} />}
    </>
  )
}

export default App;
