import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import styles from './AppStyle';
import api from "./utillities/api";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playList: []
        }
    }

    componentWillMount() {
        api.getToken().then((res) => {
            this.setState({
                playList: res.tracks.items
            })
        });
    }

    render() {
        if(this.state.playList.length > 0) {
            return (
                <ScrollView style={styles.margin}>
                    {
                        this.state.playList.map((y, i) => {
                            return (
                                <View key={i}>
                                    <Text style={[styles.songText, styles.artist]}>{y.track.artists[0].name}</Text>
                                    <Text style={styles.songText}>{y.track.name}</Text>
                                </View>

                            );
                        })
                    }
                </ScrollView>
            );
        } else {
          return (
              <View>
                  <Text style={styles.noSongText}>Songs are loading or is not available!</Text>
              </View>
          )
        }
    }
}

function test(track) {


}


