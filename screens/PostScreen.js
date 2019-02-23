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
import { Button } from "@ant-design/react-native";
import PostItem from "../components/PostItem";

import API from "../api";

export default class PostScreen extends React.Component {
  state = {
    siteinfo: {},
    list: []
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    // const data = await API({
    //   url: "site/info.json"
    // })
    // this.setState({
    //   siteinfo: data
    // })
    // const data = await API({
    //   url: "topics/hot.json"
    // })
    // this.setState({
    //   list: data
    // })
  }

  render() {
    // const {
    //   siteinfo: { title, slogan }
    // } = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text>...ssssss</Text>
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
