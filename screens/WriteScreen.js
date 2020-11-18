import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteScreen extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          storyText: ''
      }
  }

  render(){
      return(
          <View>
              <Header
                  backgroundColor = {'turqouise'}
                  centerComponent = {{
                      text : 'Bed Time Stories',
                      style : { color: 'white', fontSize: 20}
                  }}
              />
              <TextInput
                  placeholder="Write your story"
                  onChangeText= {(text)=>{
                      this.setState({
                          storyText: text
                      })
                  }}
                  value={this.state.storyText}
                  style={styles.storyText}
                  multiline={true}/>

              <TouchableOpacity
                  style={styles.submitButton}
                 
                  >
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff'
},

storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
    padding:10
},
submitButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'turqouise',
    width: 100,
    height: 50
},
buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
}
});
