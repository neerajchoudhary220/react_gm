import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Test extends Component {
    render() {
        return(<View style={{ justifyContent: 'center', flex: 1 }}>
            <Text style={{ alignSelf: 'center' }}>Welcome Mr. Neeraj choudhary</Text>
        </View>)
    }

}

export default Test;