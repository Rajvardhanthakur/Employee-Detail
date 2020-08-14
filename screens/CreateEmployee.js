import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = () => {
    
    const [name, setName] =useState("")
    const [phone, setPhone] =useState("")
    const [email, setEmail] =useState("")
    const [salary, setSalary] =useState("")
    const [picture, setPicture] =useState("")
    const [position, setPosition] = useState("")
    const [modal, setModal] =useState(false)
    

    const sendData = () =>{
        fetch("http://f2cf48f28da5.ngrok.io/send-data",{
            method:"post",
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                picture,
                salary,
                position
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })        
    }

    const pickFromGallery = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })

            if(!data.cancelled){
                let newFile = {
                    uri: data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile)
            }

        }else{
            Alert.alert("YOu Need to give the permissions")
        }
    }

    const pickFromCamera = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })

            console.log(data)
            if(!data.cancelled){
                let newFile = {
                    uri: data.uri,
                    type:`test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile)
            }
        }else{
            Alert.alert("YOu Need to give the permissions")
        }
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'employeeApp')
        data.append('cloud_name', 'rajvardhan3399')

        fetch("https://api.cloudinary.com/v1_1/rajvardhan3399/image/upload", {
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data => {
            console.log(data)
            setPicture(data.url)
            setModal(false)
        })
    }

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
             <TextInput
            label="Position"
            mode="outlined"
            style={styles.inputstyle}
            theme={theme}
            value={position}
            onChangeText={text=>setPosition(text)}
            />

            <Button icon={picture==""?"upload":"check"}
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
             onPress={()=> sendData()}>
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
                        <Button icon="camera" mode="contained" theme={theme} onPress={()=> pickFromCamera()}>
                        Camera
                        </Button>
                        <Button icon="image-area" mode="contained" theme={theme} onPress={()=> pickFromGallery()}>
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
