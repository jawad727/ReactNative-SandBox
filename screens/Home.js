import React from "react"
import { StyleSheet, Text, View, Image, FlatList } from "react-native"
import { Card } from "react-native-paper"
import { FAB } from "react-native-paper"

export function Home() {

    const data = [
        {id: 1, name: "john", position: "web dev"},
        {id: 2, name: "jay", position: "cashier"},
        {id: 3, name: "jerry", position: "photo specialist"},
        {id: 4, name: "jose", position: "android developer"},
        {id: 5, name: "john", position: "web dev"},
        {id: 6, name: "jay", position: "cashier"},
        {id: 7, name: "jerry", position: "photo specialist"},
        {id: 8, name: "jose", position: "android developer"},
        {id: 9, name: "jerry", position: "photo specialist"},
        {id: 10, name: "jose", position: "android developer"}
    ]

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} key={item.id}>
                <View style={styles.cardView}>
                    <Image 
                    style={{width: 60, height: 60, borderRadius: 50/2}}
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
        <View>
            <FlatList
                data={data}
                renderItem={({item})=> {
                   return (
                    renderList(item)
                   ) 
                }}
                keyExractor={item =>`${item.id}`}
            />
            <FAB 
        style={styles.fab}
        small={false}
        icon="plus"
        theme={{colors: {accent: "blue"} }}
        onPress={() => console.log("pressed")}
            />
         </View>
    )
}


const styles = StyleSheet.create({
    mycard: {
      margin: 5,
      borderColor: "black"
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