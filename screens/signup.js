import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Input, TouchableOpacity, Text, TextInput, SafeAreaView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';




const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  const handleSignUp = () => {
    // Implement your authentication logic here
    // You can use email and password state values
    navigation.navigate('Home');
  };



  return (
    // <SafeAreaView></SafeAreaView>
    <View style={styles.container}>
     <View style={styles.InnerContainer}>
     <TextInput
        style={styles.InputField}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        leftIcon={<Ionicons name="email" size={24} color="black" />}
        autoCapitalize="none"
      />
     <TextInput
        style={styles.InputField}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        leftIcon={<Ionicons name="email" size={24} color="black" />}
        autoCapitalize="none"
      />
     <TextInput
        style={styles.InputField}
        placeholder="Phone number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.InputField}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        rightIcon={
          <Ionicons
          name={passwordVisible ? 'ios-eye' : 'ios-eye-off'}
          size={24}
          color="black"
          onPress={togglePasswordVisibility}
        />
  
        }
        secureTextEntry={!passwordVisible}
      />
      <TouchableOpacity
       style={styles.buttonContainer} 
        onPress={handleSignUp} > 
            <Text style={styles.ButtonText}>Create an account</Text>
       </TouchableOpacity>
 

      <View style={styles.footerContainer}>
        <Text style={styles.footerLeftText}>Already have an account?</Text>
       <TouchableOpacity onPress={ () => navigation.navigate('Login')}>
            <Text style={styles.footerRightText}>SignUp</Text>
       </TouchableOpacity>
      </View>
     </View>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: "#0032EF",
    padding: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 7,
  
  },
  ButtonText:{
    color: '#ffffff',
    textAlign: 'center',
  },
  InnerContainer:{
    alignItems: 'center',
    width: '100%',
  },
  svgImage: {
    width: 200,
    height: 200,
  },
  InputField: {
    backgroundColor: "#F5F5F5",
    width: '100%', 
    height: 50,
    marginBottom: 16,
    padding: 10, 
    borderRadius: 7,
  },
  footerContainer:{
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    marginTop: 25,
  },
  footerLeftText:{
    fontSize: 14,
  },
  footerRightText: {
    fontWeight: 'bold',
    color: '#0032EF'
  }

});

export default SignUp;
