import React, { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
    const [result, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchResult = async (searchTerm) => {
        try {
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    searchTerm,
                    location: 'san jose'

                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            console.log(error)
            setErrorMessage(`Something went wrong:${error}`)
        }
    }

    // ran only one time
    useEffect(() => {
        searchResult('pasta')
    },[])
    return [searchResult,result,errorMessage]
}