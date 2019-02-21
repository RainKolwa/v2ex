import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import API from "../api";

export default class HomeScreen extends React.Component {
  state = {
    siteinfo: {}
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const data = await API({
      url: "site/info.json"
    });
    this.setState({
      siteinfo: data
    });
  }

  render() {
    const {
      siteinfo: { title, slogan }
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text>
              {title} - {slogan}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  }
});
