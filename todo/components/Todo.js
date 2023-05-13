// import React,{useState} from 'react';
// import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Task from './components/Task';
// // import { useMutation } from "@apollo/client";

// // import { ADD_TODO, GET_TODOS } from "./graphql/queries";


// const Todo = () => {
//     const [todo, setTodo] =useState();
//     const [todoItems, setTodoItems]=useState([]);
//     const handleAddTodo = () => {
//       Keyboard.dismiss()
//       setTodoItems([...todoItems,todo])
//       setTodo(null);
//     }
//     const completeTodo = (index) => {
//       let itemsCopy = [...todoItems];
//       itemsCopy.splice(index,1);
//       setTodoItems(itemsCopy);
//     }
//     return(

//         <View style={styles.container}>

//         <View style={styles.main}>
//           <Text style={styles.title}>Tasks</Text>
          
//           <View>
//             { todoItems.map((item,index)=>{
//               return (
//                 <TouchableOpacity key={index} onPress={()=>completeTodo(index)}>
//                 <Task text={item}/>
//                 </TouchableOpacity>
//               )
//             })
//               }
//           </View>
  
//         </View>
  
//         <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"}
//          style={styles.entertodo}
//         >
//           <TextInput 
//             style={styles.input} 
//             placeholder={"Enter a todo"} 
//             value={todo}
//             onChangeText={(todo)=>setTodo(todo)} >
//             </TextInput>
//           <TouchableOpacity onPress={()=> handleAddTodo()}>
//             <View style={styles.addbox}>
//               <Text style={styles.addTodo}>+</Text>
//             </View>
//           </TouchableOpacity>
        
//         </KeyboardAvoidingView>
  
//       </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#eeeeee',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     main: {
//       paddingTop:40,
//       width: "90%",
//       height: "80%",
//     },
//     title:{
//       fontSize: 24,
//     },
//     entertodo:{
//       // position:"absolute",
//       // bottom: 60,
//       width:"90%",
//       flexDirection: "row",
//       justifyContent: "space-around",
//       alignItems:"center",
//     },
//     input:{
//       paddingVertical: 15,
//       paddingHorizontal: 15,
//       backgroundColor:"#fff",
//       borderRadius: 60,
//       width:250,
//       borderWidth:0.5,
//       borderColor: "#C0C0C0"
//     },
//     addbox:{
//       width: 60,
//       height:60,
//       backgroundColor: "#fff",
//       borderRadius: 60,
//       justifyContent: "center",
//       alignItems: "center",
//       borderWidth:0.5,
//       borderColor: "#C0C0C0"
//     },
//     addTodo:{
  
//     },
  
//   });

// export default Todo