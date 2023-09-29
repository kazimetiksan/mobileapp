import React, {useEffect, useState} from "react";

import {View, Text, SafeAreaView, FlatList} from 'react-native';

import axios from "axios";

const App = () => {

    const [list, setList] = useState([])

    const fetchData = () => {

        const url = 'https://reactpm.azurewebsites.net/api/users'

        axios.get(url)
        .then((response) => {
            // console.log('response', response.data)

            setList(response.data)
        })
        .catch((err) => {
            console.log('err', err)
        })
    }

    useEffect(() => {
        fetchData()   
    }, [])

    return (
        <SafeAreaView>
            <View>
                <Text>Hello World</Text>
            </View>
            <View>
                <FlatList 
                    data={list}
                    renderItem={({item}) => {
                        console.log('fetched item', item)
                        return (
                            <View>
                                <Text>{item.firstName} {item.lastName}</Text>
                            </View>
                        )
                        
                    }}
                    keyExtractor={item => item._id}
                />  
            </View>
        </SafeAreaView>
    )
}

export default App



// {
//     list.map((item, index) => {
//         return (
//             <View key={index}>
//                 <Text>{item.firstName} {item.lastName}</Text>
//             </View>
//         )
//     })
// }
