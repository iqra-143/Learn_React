import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FaSearch } from 'react-icons/fa';

function Dictionary() {
    const [data, setData] = useState("");
    const [searchwords, setSearchwords] = useState("");
    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        const fetchMeaning = async () => {
            try {
                if (shouldFetch && searchwords) {
                    const response = await Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchwords}`);
                    console.log (response)  ;
                    setData(response.data[0]);
                    
                }
            } catch (error) {
                console.error("Error fetching the meaning:", error);
              
            } finally {
                // This code will always run, regardless of whether the try block succeeds or the catch block is executed.
                setShouldFetch(false);
            }
        };
        fetchMeaning();
    }, [shouldFetch, searchwords]);
    
    const handleSearchClick = () => {
        setShouldFetch(true);
    };
    return (
        <>
         <div className='dic'>
                <div className="searchBox">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchwords}
                        onChange={(e) => setSearchwords(e.target.value)}
                    />
                    <button onClick={handleSearchClick}>
                        <FaSearch size="20px" />
                    </button>
                </div>

                <div className="result">
                    <h3>{data.word}</h3>
                    <p>{data.meanings && data.meanings[0].definitions[0].definition}</p>
                    <p>{data.meanings && data.meanings[1].partOfSpeech ? <span> {data.meanings[1].partOfSpeech} </span>:  <span>Not found partOfSpeech of {data.word} </span>}</p>

                </div>
            </div>
        </>
    );
}
export default Dictionary;
