import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
const SearchResult = ({ title, results, navigation }) => {

    console.log(`TOTAL RESULTS: ${results.length}`)
    return (
        <View style={style.parentViewStyle}>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result => result.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                       <TouchableOpacity onPress={() => {
                        navigation.navigate('Details', {
                            args: item
                        })
                       }}>
                         <View style={{ padding: 10 }}>
                            <Image style={style.imageStyle} source={item.image_url ? { uri: item.image_url } : require('../../assets/placeholder.webp')} />
                            <Text style={style.titleStyle}>{item.name}</Text>
                            <View style={style.bodyParentStyle}>
                                <Text style={style.bodyStyle}>{item.rating}⭐️,</Text>
                                <Text style={style.bodyStyle}>{item.review_count} Rating</Text>
                            </View>
                        </View>
                       </TouchableOpacity>
                    )
                }}
            />
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
        fontSize: 18,
        fontWeight: '10',
        color: 'black'
    },
    bodyStyle: {
        fontSize: 18,
        fontWeight: '50',
        color: 'grey'
    },
    imageStyle: {
        width: 200,
        height: 100,
        borderRadius: 12,
        alignContent: 'stretch'
    },
    bodyParentStyle: {
        flexDirection: 'row'
    }
})
export default SearchResult;