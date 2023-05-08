import React from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
 
const Task =(props) => {
    return(
        <View style={styles.todos}>
            <View style={styles.left}>
                <View style={styles.square}></View>
            </View>
            <Text style={styles.todoText}>{props.text}</Text>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles =StyleSheet.create({
    todos:{
        backgroundColor: "#ffffff",
        padding:15,
        borderRadius:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:10,
    },
    left:{
        flexDirection: "row",
        alignItems: "center",
    },
    square:{
        width: 24,
        height:24,
        backgroundColor: "#96d7fa",
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15,
    },
    todoText:{
        maxWidth: "80%",
        textAlign: "left",
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: "#96d7fa",
        borderWidth: 2,
        borderRadius: 5,
        
    }

})
export default Task;