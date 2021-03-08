import './App.css';
import Header from "./Components/Header";
import Search from "./Components/Search";
import Images from "./Components/Images";
import { useState , useEffect} from 'react';
import axios from 'axios';
import IsLoading from './Components/IsLoading';
const API = 'https://api.unsplash.com/photos/?client_id=yMOEW96irltYOVkTWeZvtHM56ypGXuJc6D-h9zi8sG0&per_page=30';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);
  const [photos, setPhotos] = useState([]);
  
  // Search for images
  const search = (data) => {
    console.log('Photos',photos.length)
    // if()  
  setLoading(false)
    if(!data){
      setLoading(false);
      setNoData(true);
      setPhotos(data)
    }else{
      const query = data.trim()
      const SearchImages = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query}&client_id=yMOEW96irltYOVkTWeZvtHM56ypGXuJc6D-h9zi8sG0`
      axios.get(SearchImages)
      .then(res => {
        setPhotos(res.data.results);
        setLoading(false);
      })
      .catch(err => {
           console.log(err);
            setError(true)
            setLoading(false)
      });
    }
  }

//  Display api images
  const display = () => {
      axios.get(API)
      .then(res => {
          console.log('The photos from App.js', res.data);
          setPhotos(res.data);
          setLoading(false);
      })
      .catch(err => {
          console.log(err);
          setError(true)
          setLoading(false)
      })
  }


  useEffect(() => {
    display()
  }, []);

  if(loading) {
    return (
      <div className="container mx-auto mt-10 mb-20 px-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map(n => <IsLoading key={n}/>)}
         </div>
      </div>
    )
  }
  
  if(error) {
      return <h2 className="text-center text-red-500">Ooops!!! Something went wrong</h2>
  }

  if(noData) {
    return <h2 className="text-center">Ooops!!! Data not found</h2>
  }
  
  return (
    <div>
      <Header search={search}/>
      <Images photos={photos} />
    </div>
  )
}

export default App;
