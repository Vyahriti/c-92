import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'


export default class ExerciseScreen extends React.Component {

render(){
    return(
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Nutrition Information </Text>
            </View>
            <Text style={{marginTop: 15, fontColor: 'black', fontSize: 30, alignSelf: 'center'}}> 
                Enter a workout below and infomation about what it trains and how to do it will be generated! 
            </Text>
            <TextInput 
                style={styles.input}
                placeholder= 'Enter Workout'/>
            <Text style={{fontSize: 25, fontClor: 'black', alignSelf: 'center'}}> 
                The workout info from API
            </Text>
        </View>
    )
}


}

const styles=StyleSheet.create({
    titleContainer: {
        flex:1,
        padding:24
    },
    titleText:{
        marginTop: 20,
        fontSize: 50,
        fontWeight: 'bold',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 4,
        backgroundColor: '#d5bcf0',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 4,
        padding: 10,
        alignSelf: 'center'
      },
    })
    