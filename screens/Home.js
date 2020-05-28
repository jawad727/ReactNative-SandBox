import React from "react"
import { StyleSheet, Text, View, Image, FlatList } from "react-native"
import { Card } from "react-native-paper"
import { FAB } from "react-native-paper"

export function Home(props) {

    const data = [
        {id: 1, name: "john", position: "web dev", email: `random@gmail.com`, salary: "$50,000", phone: "(503)-937-6253", picture: "https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png"},
        {id: 2, name: "jay", position: "cashier", email: `random@gmail.com`, salary: "$25,000", phone: "(503)-534-6845", picture: "https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png"},
        {id: 3, name: "jerry", position: "photo specialist", email: `random@gmail.com`, salary: "$30,000", phone: "(503)-293-6038", picture: "https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png"},
        {id: 4, name: "jose", position: "android developer", email: `random@gmail.com`, salary: "$80,000", phone: "(503)-222-2123", picture: "https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png"},
        // {id: 5, name: "john", position: "web dev"},
        // {id: 6, name: "jay", position: "cashier"},
        // {id: 7, name: "jerry", position: "photo specialist"},
        // {id: 8, name: "jose", position: "android developer"},
        // {id: 9, name: "jerry", position: "photo specialist"},
        // {id: 10, name: "jose", position: "android developer"}
    ]

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} key={item.id} onPress={() => props.navigation.navigate("Profile", {item: item})} >
                <View style={styles.cardView}>
                    <Image 
                    style={{width: 60, height: 60, borderRadius: 30}}
                    source={{uri: "https://cdn4.iconfinder.com/data/icons/user-people-2/48/6-512.png"}}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    })

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={data}
                renderItem={({item})=> {
                   return (
                    renderList(item)
                   ) 
                }}
                keyExtractor={item =>`${item.id}`}
            />
            <FAB 
                onPress={() => props.navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors: {accent: "blue"} }}
            />
         </View>
    )
}


const styles = StyleSheet.create({
    mycard: {
      margin: 5
    },
    cardView: {
        flexDirection: "row",
        padding: 6,
    },
    text: {
        fontSize: 18,
       
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0
    }
  })

export default Home