import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";

const SearchBar = ({ placeholder, onSearchQuery, onQuerySubmitted }) => {
    const [searchBarText,setSearchBarText] = useState("")
    return (
        <View style={searchBarStyle.boxStyle}>

            <Image
                style={searchBarStyle.iconStyle}
                source={require('../../assets/search_icon.png')}
            />
            <TextInput
                style={searchBarStyle.textInputStyle}
                onChangeText={(text) => {
                    setSearchBarText(text)
                    onSearchQuery(text)
                }}
                placeholder={placeholder}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchBarText}
                placeholderTextColor="#888"
                onEndEditing={() => {
                    onQuerySubmitted(searchBarText)
                }}
            />
        </View>
    )
}

const searchBarStyle = StyleSheet.create({
    boxStyle: {
        backgroundColor: '#d7dbe0',
        height: 50,
        marginBottom: 8,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        opacity: 0.5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInputStyle: {
        flex: 1,
        color:'black'
    },
    iconStyle: {
        width: 24,
        height: 24,
        marginStart: 12
    }
})
export default SearchBar;