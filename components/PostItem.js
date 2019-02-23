import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * avatar
 * title
 * commentCount
 * tagName
 * createdAt
 */

export default class PostItem extends React.Component {
  render() {
    const { title, createdAt } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{createdAt}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#e2e2e2",
    borderBottomWidth: 1,
    borderStyle: "solid",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  title: {
    fontSize: 16,
    lineHeight: 22
  },
  info: {
    fontSize: 12,
    color: "grey",
    marginTop: 5
  }
});
