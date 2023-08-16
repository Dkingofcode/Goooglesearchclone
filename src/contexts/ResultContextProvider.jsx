import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com/';

export const ResultContextProvider = ({ children }) => {
   const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   
   // videos, /search, /images
   const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
       method: 'GET',
       headers: {
        'X-RapidAPI-Key': '729f0bcfedmsh9d2f256f9f78b0dp1656f0jsn2b1d3639e9ac',
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
       }
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
   }

   return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
         {children}
      </ResultContext.Provider>
   );
}

export const useResultContext = () => useContext(ResultContext);

