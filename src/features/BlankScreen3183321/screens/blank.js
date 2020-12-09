import React, { Component } from 'react'
import { AppRegistry, View, Button, Text, StyleSheet } from 'react-native'
class App extends Component {
  state = {
      count: 0,
  };
  handleCounter = () => {
     this.setState({"count": this.state.count + 1})  };
  
  render() {
      const { count } = this.state;
      return (
          <View>
               <Button onPress={this.handleCounter} title="Julian"/>
               <Text style={styles.text}>{count}</Text>
               <Button onPress={this.handleCounter} title="Button 2"/>
               <Text style={styles.text}>{count}</Text>
               <Button onPress={this.handleCounter} title="Increment Count"/>
              <Text style={styles.text}>{count}</Text>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  text: {
  
  },
})
AppRegistry.registerComponent('App', () => App)
