import './App.css';
import Header from "./Components/Header";
import Search from "./Components/Search";
import Images from "./Components/Images";
import { useState } from 'react';

const API = 'https://api.unsplash.com/photos/?client_id=yMOEW96irltYOVkTWeZvtHM56ypGXuJc6D-h9zi8sG0';

const App = () => {
  const [photos, setPhotos] = useState([]);

  const getData = (data) => { 
    setPhotos(data);
    // console.log('Photos', photos);

  }
  return (
    <div>
      <Header getData={getData}/>
      {/* <Search/> */}
      <Images   photos={photos} />
    </div>
  );
}

export default App;
