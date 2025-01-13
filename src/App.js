import './App.css';
import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: "YOUR_ACCESS_KEY"
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;




  return (
    <>
      <img className='img' src={urls.regular} alt=''/>
      {console.log(user.location)}
    </>
  );
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
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
  return (
    <div>
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
    <div className='image'>
    <h1>Enter the Image name to Search: </h1>
    <input className='inp' onChange={handleInputChange} placeholder='         Enter the image name'></input>
    <button id='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
    {submitInput && <Body queryData={submitInput} />}
    </>
  )
}

export default App;
