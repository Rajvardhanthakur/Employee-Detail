import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee = () => {
    
    const [name, setName] =useState("")
    const [phone, setPhone] =useState("")
    const [email, setEmail] =useState("")
    const [salary, setSalary] =useState("")
    const [picture, setPicture] =useState("")
    const [modal, setModal] =useState(false)
    
    return (
        <View style={styles.root}>
            <TextInput
            label="Name"
            mode="outlined"
            style={styles.inputstyle}
            theme={theme}
            value={name}
            onChangeText={text=>setName(text)}
            />
            <TextInput
            label="Email"
            mode="outlined"
            style={styles.inputstyle}
            theme={theme}
            value={email}
            onChangeText={text=>setEmail(text)}
            />
            <TextInput
            label="Phone"
            mode="outlined"
            style={styles.inputstyle}
            theme={theme}
            value={phone}
            keyboardType="number-pad"
            onChangeText={text=>setPhone(text)}
            />
            <TextInput
            label="Salary"
            mode="outlined"
            style={styles.inputstyle}
            theme={theme}
            value={salary}
            onChangeText={text=>setSalary(text)}
            />

            <Button icon="upload"
             style={styles.inputstyle}
             mode="contained" 
             theme={theme}
             onPress={()=> setModal(true)}>
                Upload Image
            </Button>
            <Button icon="upload"
             style={styles.inputstyle}
             mode="contained" 
             icon="content-save"
             theme={theme}
             onPress={()=> console.log("save")}>
                save
            </Button>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=> setModal(false)}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" mode="contained" theme={theme} onPress={()=> setModal(false)}>
                        Camera
                        </Button>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={()=> setModal(false)}>
                        Gallery
                        </Button>
                    </View>
                    <Button theme={theme} onPress={()=> setModal(false)}>
                    Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors:{
        primary: "#0394fc"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    inputstyle:{
        margin:6
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%"
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})

export default CreateEmployee;
