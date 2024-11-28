import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(url);
        if (response.status === 200) {
          setData(response.data); // Handle successful response
        }
      } catch (error) {
        if (error.response) {
          // The server responded with an error status
          setError(error.response.data?.error || "Something went wrong.");
        } else if (error.request) {
          // Request was made but no response was received
          setError("No response received from the server.");
        } else {
          // Something else caused the error
          setError(error.message || "An unknown error occurred.");
        }
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    // fetchData();

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [url]);

  return { data, loading, error };
};

export default useFetchApi;
