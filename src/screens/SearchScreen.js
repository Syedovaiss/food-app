import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";

const SearchScreen = () => {
    const [searchQuery,setSearchQuery] = useState('')
    const [result, setResults] = useState([])

    const searchResult = async() => {
       const response = await Yelp.get('/search', {
        params: {
            limit:50,
            searchQuery,
            location: 'san jose'

        }
       })
       console.log(response.data.businesses)
       setResults(response.data.businesses)
    }
    return (
        <View>
            <SearchBar
                placeholder={"Search Here...."}
                onSearchQuery={(text) => {
                    console.log(text);
                }}
                onQuerySubmitted={(text) => {
                    setSearchQuery(text)
                    searchResult()
                }}
            />
            <Text>We have found {result.length} results</Text>
        </View>
    )
}

export default SearchScreen;