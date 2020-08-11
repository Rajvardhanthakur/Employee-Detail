import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card, FAB}  from 'react-native-paper';



function Home(){

    const data = [
        {id:1, name:"Gilfoyle", position:"Data Scientist"},
        {id:2, name:"Dinesh", position:"Data Scientist"},
        {id:3, name:"Zin yang", position:"Developer"},
        {id:4, name:"Richard", position:"Developer And CEO"},
        {id:5, name:"Earlic Backman", position:"LandLord"},
        {id:6, name:"Gilfoyle", position:"Data Scientist"},
        {id:7, name:"Dinesh", position:"Data Scientist"},
        {id:8, name:"Zin yang", position:"Developer"},
        {id:9, name:"Richard", position:"Developer And CEO"},
        {id:10, name:"Earlic Backman", position:"LandLord"},
        {id:11, name:"Gilfoyle", position:"Data Scientist"},
        {id:12, name:"Dinesh", position:"Data Scientist"},
        {id:13, name:"Zin yang", position:"Developer"},
        {id:14, name:"Richard", position:"Developer And CEO"},
        {id:15, name:"Earlic Backman", position:"LandLord"},
    ]

    const renderList = ((item)=>{
        return (
        <Card style={styles.mycard}>
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
        <View>
           <FlatList 
           data={data}
           renderItem={({item}) => {
               return renderList(item)
           }}
           keyExtractor={item=> `${item.id}`}
           />
           <FAB
           style={styles.fab}
           small={false}
           icon="plus"
           theme={{colors:{accent:"#1dd7de"}}}
           onPress={()=>console.log("button pressed")}
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