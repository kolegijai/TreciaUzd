import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from 'react-native';


export default class App extends React.Component {
  constructor(props){
  super(props)
this.state = {newBookName: '', books: '', Name: '', istraukta: ''};
  }

setBook()
{
  AsyncStorage.setItem("myKey", "knyga1");
  this.getBook();
}



getBook() {
  AsyncStorage.getItem("myKey").then((value) => {

    this.setState({istraukta: value});

}).done();
}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.flexbox1}>

      <TextInput
    onChangeText={(newBookName) => this.setState({newBookName})}
  style={{height: 40, width: 200}}
  placeholder="Prideti nauja knyga"
      />

      <TextInput
        style={{height: 40, width: 200}}
  placeholder={this.state.istraukta}
      />

      <Button
      onPress={this.setBook}
      style={styles.buttonAdd}
      key="a"
  title="Add"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

      </View>
      <View style={styles.flexbox2}>
      <Text style={[styles.txtBox, {backgroundColor: 'red'}]}>Text1</Text>
      <Text style={[styles.txtBox, {backgroundColor: 'red'}]}>Text2</Text>
      <Text style={[styles.txtBox, {backgroundColor: 'red'}]}>Text3</Text>
      <Text style={[styles.txtBox, {backgroundColor: 'red'}]}>Text4</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fcf',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  flexbox1: {
  flex: 1,
  backgroundColor: '#fcf',
  justifyContent: 'space-around',
  flexDirection: 'row',
  padding: 50,
  paddingLeft: 50,
  marginTop: 30,
  flexWrap: 'wrap'
  },
  flexbox2: {
  flex: 2,
  backgroundColor: '#faf',
  justifyContent: 'space-around',
  flexDirection: 'row',
  padding: 50,
  paddingLeft: 50,
  marginTop: 30,
  flexWrap: 'wrap'
  },
  buttonAdd: {
  height: 60,
  width: 200,
  marginBottom: 50,
marginLeft: 15,
padding: 15,
},

});
