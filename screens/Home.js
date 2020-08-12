import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card, FAB}  from 'react-native-paper';



function Home(props){

    const data = [
        {id:"1", name:"Gilfoyle",email:"abc@gmail.com",salary:"40 LPA",phone:"1234567", position:"Data Scientist", picture:"https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"},
        {id:"2", name:"Jing Yang",email:"abc@gmail.com",salary:"40 LPA",phone:"1234567", position:"Data Scientist", picture:"https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"},
        {id:"3", name:"Erlic",email:"abc@gmail.com",salary:"40 LPA",phone:"1234567", position:"Data Scientist", picture:"https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"},
        {id:"4", name:"Gavin",email:"abc@gmail.com",salary:"40 LPA",phone:"1234567", position:"Data Scientist", picture:"https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"},
        
        
    ]

    const renderList = ((item)=>{
        return (
        <Card style={styles.mycard} onPress={()=> props.navigation.navigate("Profile", {item:item})}>
            <View style={styles.cardView}>
                <Image
                style={{width:70,height:70,borderRadius:50/2}}
                source={{uri:"https://pbs.twimg.com/profile_images/997201952105680896/nnSOgxBq_400x400.jpg"}}
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.name}</   Text>
                    <Text style={styles.text}>{item.position}</   Text>
                </View>
            </View>
        </Card>
        )
    })

    return (
        <View style={{flex:1}}> 
           <FlatList 
           data={data}
           renderItem={({item}) => {
               return renderList(item)
           }}
           keyExtractor={item=> item.id}
           />
           <FAB
           onPress={()=> props.navigation.navigate("Create")}
           style={styles.fab}
           small={false}
           icon="plus"
           theme={{colors:{accent:"#1dd7de"}}}
          
           />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5
    },
    cardView:{
        flexDirection: "row",
        padding:6
    },
    text:{
        fontSize:18
    },
    fab:{
     position:'absolute',
     margin:16,
     right:0,
     bottom:0    
    }
})

export default Home;