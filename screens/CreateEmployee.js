import React from "react"
import { StyleSheet, Text, View, Image, FlatList, Modal } from "react-native"
import { TextInput, Button } from "react-native-paper"
import { useState } from "react"

export const CreateEmployee = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput 
                label="Name"
                style={styles.inputStyle}
                value={name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput 
                label="Email"
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />   
            <TextInput 
                label="Phone"
                style={styles.inputStyle}
                value={name}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />   
            <TextInput 
                label="Salary"
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
            <Button 
                style={styles.inputStyle} 
                icon="upload" mode="contained" 
                theme={theme}
                onPress={() => setModal(true)}
            >
                Upload Image
            </Button>
            <Button 
                style={styles.inputStyle} 
                icon="content-save" mode="contained" 
                theme={theme}
                onPress={() => console.log("saved")}
            >
                Save
            </Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" theme={theme} onPress={() => console.log("camera")}>
                            camera
                        </Button>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={() => console.log("gallery")}>
                            gallery
                        </Button>
                    </View>
                    <Button theme={theme} onPress={() => setModal(false)}>
                            cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors: {
        primary: "blue"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inputStyle: {
        margin: 5
    },
    modalView: {
        bottom: 2,
        position: "absolute",
        width: "100%",
        backgroundColor: "white"
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default CreateEmployee
