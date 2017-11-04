import React from 'react';
import { Text, View} from 'react-native';
import styles from './AppStyle';
import api from "./utillities/api";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token: []
        }
    }

    componentWillMount() {
        api.getToken().then((res) => {
            this.setState({
                token: res.access_token
            })
        });
    }

    render() {

    return (
      <View>

        <Text style={[styles.bigBlue, styles.margin]}>Token: + {this.state.token}</Text>


      </View>
    );
    }
}


