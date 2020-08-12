import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const Profile = (props) => {


    const {id, name, email,position, salary, phone, picture} = props.route.params.item
    const openDialer = () => {
        if(Platform.OS === "android"){
            Linking.openURL("tel:12345678")
        }else{
            Linking.openURL("telprompt:12345678")
        }
    }

    return (
        <View style={styles.root}>
            <LinearGradient
            colors={["#0033ff", "#6bc1ff"]}
            style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                style={{width:150,height:150,borderRadius:75, marginTop:-50}}
                source={{uri:picture}}
                />
            </View>
            <View style={{alignItems:"center", margin:15}}>
                <Title>{name}</Title>
                <Text style={{fontSize:15}}>{position}</Text>
            </View>

            <Card style={styles.myCard}
            onPress={() => Linking.openURL("mailto:devraj231@gmail.com")}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#0394fc" />
    <Text style={styles.myText}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.myCard} onPress={()=> openDialer()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#0394fc" />
                    <Text style={styles.myText}>{phone}</Text>
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