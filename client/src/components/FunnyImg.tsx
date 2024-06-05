import axios from 'axios';
import React, { useState, useEffect }  from 'react';


const url = 'https://randomfox.ca/floof/';

const FunnyImg: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await axios.get(url);
          setImageUrl(response.data['image']);  // Adjust based on your API response structure
        } catch (err) {
          setError('Failed to fetch image');
        } finally {
          setLoading(false);
        }
      };
  
      fetchImage();
    }, [url]);
  
    if (loading) {
      return <div>Cargando...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <div>
        {imageUrl ? <img style={{maxHeight:"10%"}} src={imageUrl} alt="Fetched from API" /> : <div>No image found</div>}
      </div>
    );
  };
  
  export default FunnyImg;