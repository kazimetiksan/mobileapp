import React, {
    useState,
    useEffect
} from "react"

import {
    useSafeAreaInsets,
    SafeAreaProvider
} from 'react-native-safe-area-context'

import {
    View,
    Text,
    ScrollView,
    FlatList,
    SafeAreaView
} from 'react-native'

import axios from 'axios'

const Home = () => {

    const insets = useSafeAreaInsets()
    console.log('insets', insets)

    useEffect(() => {
        getUsers()
    }, [])

    const [users, setUsers] = useState([])

    const getUsers = () => {

        const url = 'https://reactpm.azurewebsites.net/api/users'
        axios.get(url)
        .then((response) => {

            console.log('response', response.data)
            setUsers(response.data)
        })
        .catch((err) => {


        })
    }

    return (
        <SafeAreaView>
            <View>
                <Text>Hello World</Text>
            </View>
            <FlatList 
                data={users}
                renderItem={({item}) => {
                    console.log('rendering', item)

                    return (
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View>
                                <Text>{item.firstName}</Text>
                            </View>
                            <View>
                                <Text>{item.lastName}</Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={item => item._id}
            />
        </SafeAreaView>
    )
}

const App = () => {

    return (
        <SafeAreaProvider>
            <Home />
        </SafeAreaProvider>
    )
}

export default App