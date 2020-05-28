import * as React from "react";
import { StyleSheet, View, Text, Image, Linking, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { Title, Card, Button } from "react-native-paper"
import { MaterialIcons, Entypo } from "@expo/vector-icons"

export const Profile = () => {

    const openDial = () => {
        if (Platform.OS == "android") {
            Linking.openURL("tel:12345")
        } else {
            Linking.openURL("telprompt:12345")
        }
    }

    return (
        <View style={styles.root}>
            <LinearGradient 
                colors={['#0033ff', '#6bc1ff']}
                style={{ height: "20%" }}
            />
            <View style={{alignItems: "center"}} >
                <Image 
                    style={{ width: 140, height: 140, borderRadius: 140/2, marginTop: -50 }}
                    source={{uri: "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"}}
                />
            </View>
            <View style={{alignItems: "center", margin: 15}}>
                <Title> John Johnson </Title>
                <Text style={{fontSize: 15}}> Web Developer </Text>
            </View>
            <Card style={styles.myCard} onPress={() => {
                Linking.openURL("mailto:abc@abc")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.myText}>abc@abc.com</Text>
                </View>
            </Card>
            <Card style={styles.myCard} onPress={() => openDial()} >
                <View style={styles.cardContent}>
                    <MaterialIcons name="phone" size={32} color="#006aff" />
                    <Text style={styles.myText}>(503) 958 4487</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.myText}>$125,899</Text>
                </View>
            </Card>
            <View style={{flexDirection: "row", justifyContent: "space-around", padding: 10}}>
                <Button icon="account-edit"  
                    icon="account-edit"
                    mode="contained"
                    theme={theme}
                    onPress={() => {
                        console.log("pressed")
                    }}
                >   
                Edit  
                </Button>
                <Button icon="account-edit"  
                    icon="delete"
                    mode="contained"
                    theme={theme}
                    onPress={() => {
                        console.log("pressed")
                    }}
                >  
                Fire Employee   
                </Button>
            </View>

        </View>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    myCard: {
        margin: 3,
        padding: 8
    },
    cardContent: {
        flexDirection: "row"
    },
    myText: {
        marginLeft: 3,
        marginTop: 3,
        fontSize: 18,

    }
})

