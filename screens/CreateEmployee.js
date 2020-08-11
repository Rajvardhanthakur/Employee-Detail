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

            <Button icon="upload" mode="contained" onPress={()=> setModal(true)}>
                Camera
            </Button>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modal}
            onRequestClose={()=> setModal(false)}
            >
                <View>
                <Button icon="camera" mode="contained" onPress={()=> setModal(false)}>
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
    }
})

export default CreateEmployee;
