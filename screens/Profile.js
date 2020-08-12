import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const Profile = () => {
    return (
        <View style={styles.root}>
            <LinearGradient
            colors={["#0033ff", "#6bc1ff"]}
            style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                style={{width:150,height:150,borderRadius:75, marginTop:-50}}
                source={{uri:"https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"}}
                />
            </View>
            <View style={{alignItems:"center", margin:15}}>
                <Title>Rajvardhan Singh Thakur</Title>
                <Text style={{fontSize:15}}>Web Developer</Text>
            </View>

            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#0394fc" />
                    <Text style={styles.myText}>devraj231@gmail.com</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#0394fc" />
                    <Text style={styles.myText}>12345678</Text>
                </View>
            </Card>
            <Card style={styles.myCard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#0394fc" />
                    <Text style={styles.myText}>22 LPA</Text>
                </View>
            </Card>

            <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>
                <Button icon="account-edit" 
                mode="contained" 
                theme={theme}
                onPress={() => console.log("Edit Profile")}>
                    Edit
                </Button>
                <Button icon="delete" 
                mode="contained" 
                theme={theme}
                onPress={() => console.log("Edit Profile")}>
                    Fire Employee
                </Button>
            </View>

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
    myCard:{
        margin:4
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    myText:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile;