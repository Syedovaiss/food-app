import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import SearchResult from "../components/SearchResult";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResult, results, errorMessage] = useResults()
    const filterResults = (price) => {
        console.log(`PRICE TO BE FILTERED:${price}`)
        const items = results.filter((data) => {
            return data.price === price;
        })
        console.log(items)
        return items
    }
    return (
        <View style={style.parentViewStyle}>
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
            {errorMessage ? <Text>${errorMessage}</Text> : null}
            <ScrollView>
                <SearchResult
                    results={filterResults('$$$')}
                    title="Expensive Restaurants"
                    navigation={navigation}
                />

                <SearchResult
                    title="Moderate Restaurant"
                    results={filterResults('$$')}
                    navigation={navigation}
                />

                <SearchResult
                    title="Cheap Restaurants"
                    results={filterResults('$')}
                    navigation={navigation}
                />
            </ScrollView>

        </View>
    )
}

const style = StyleSheet.create({
    parentViewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
export default SearchScreen;