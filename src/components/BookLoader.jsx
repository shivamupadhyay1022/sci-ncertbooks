import { useState, useEffect } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';

// This component fetches books from Firebase based on the provided path
function BookLoader({ path, onDataLoaded }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const database = getDatabase();
        const dbRef = ref(database);
        
        // Construct the path to fetch from
        const fullPath = `books/${path}`;
        
        const snapshot = await get(child(dbRef, fullPath));
        
        if (snapshot.exists()) {
          const fetchedData = snapshot.val();
          setData(fetchedData);
          if (onDataLoaded) {
            onDataLoaded(fetchedData);
          }
        } else {
          console.log("No data available at path:", fullPath);
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (path) {
      fetchData();
    }
  }, [path, onDataLoaded]);

  return { loading, error, data };
}

export default BookLoader;
