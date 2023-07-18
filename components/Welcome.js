import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert ,TextInput} from 'react-native'


export const Welcome = () => {
    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text style={{ alignSelf: 'center' }}>Welcome Mr. Neeraj choudhary</Text>
        </View>
    )
}

export class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Testing data"
        }
        this.ButtonClickHandler = this.ButtonClickHandler.bind(this)

    }

    ButtonClickHandler() {

        console.log(this.state.data)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginHorizontal:10,marginBottom:10}}>
                <TextInput onChangeText={} style={{borderColor:'white', borderRadius:10, borderWidth:1}}>

                </TextInput>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Button title="Click Me" onPress={this.ButtonClickHandler}></Button>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    "container": {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'orange',
        

    },
    "text": {
        textShadowColor: 'black',
        alignSelf: 'center',
        fontWeight: '500',
        color: 'black',
        shadowOffset: {
            width: 20,
            height: 200
        },
        elevation: 10,
        shadowRadius: 2
    }
})
