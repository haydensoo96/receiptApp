import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

var hide = true;
class HomeScreen extends Component {
    constructor({ navigation, props }) {
        super(props)
        this.state = {
            showApp: false,
            isLoggedIn: null,
        }
    }

    componentDidMount() {
       

    }


    render() {
        return (

           <View style={{width:'100%', height:'100%', backgroundColor:'red'}}>
               <Text>Hello World</Text>
           </View>

        )
    }
}

const styles = StyleSheet.create({});
export default HomeScreen;
