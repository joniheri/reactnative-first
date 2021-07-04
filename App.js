import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function App(props) {
  const [text, onChangeText] = React.useState("");
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Example Input */}
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>Text String</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Enter text"
            />
            <TextInput
              style={styles.inputResult}
              onChangeText={onChangeText}
              value={text}
              editable={false}
              placeholder="Result text"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>Value A</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber1}
              value={number1}
              placeholder="Input Value A"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputResult}
              onChangeText={onChangeNumber1}
              value={number1}
              editable={false}
              placeholder="Result Input Value A"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>Value B</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber2}
              value={number2}
              placeholder="Input Value B"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputResult}
              onChangeText={onChangeNumber2}
              value={number2}
              editable={false}
              placeholder="Result Input Value B"
            />
          </View>

          {/* Test Button */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10, backgroundColor: "#FF5757" }}>
              <Button
                style={{ with: 30 }}
                title="+"
                onPress={() => Alert.alert("Button +")}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <Button title="-" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Button title="*" onPress={() => Alert.alert("Button *")} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Button title="/" onPress={() => Alert.alert("Button /")} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Button title="%" onPress={() => Alert.alert("Button %")} />
            </View>
          </View>
          {/* End Test Button */}
        </View>
        <Separator />
        {/* End Example Input */}

        {/* Dysplay Calculator */}
        <View style={{ marginBottom: 10 }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, color: "#fff", fontSize: 20 }}>
              Display
            </Text>
            <TextInput
              style={styles.inputDisplayCalculator}
              placeholder="Result"
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="1" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="2" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="-" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="+" onPress={() => Alert.alert("Button -")} />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="3" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="4" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="*" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="/" onPress={() => Alert.alert("Button -")} />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="5" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="6" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="%" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="=" onPress={() => Alert.alert("Button -")} />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="7" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="8" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="9" onPress={() => Alert.alert("Button -")} />
            </View>
            <View style={{ marginRight: 10, width: "20%" }}>
              <Button title="0" onPress={() => Alert.alert("Button -")} />
            </View>
          </View>
        </View>
        <Separator />
        {/* End Dysplay Calculator */}

        <Text style={styles.text1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. End text from
          JON!
        </Text>
        <Separator />

        {/* Button Test */}
        <View style={styles.buttonTest}>
          <View>
            <Text style={styles.title}>
              The title and onPress handler are required. It is recommended to
              set accessibilityLabel to help make your app usable by everyone.
            </Text>
            <Button
              title="Press me"
              onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
          <Separator />
          <View>
            <Text style={styles.title}>
              Adjust the color in a way that looks standard on each platform. On
              iOS, the color prop controls the color of the text. On Android,
              the color adjusts the background color of the button.
            </Text>
            <Button
              title="Press me"
              color="#f194ff"
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
          </View>
          <Separator />
          <View>
            <Text style={styles.title}>
              All interaction for the component are disabled.
            </Text>
            <Button
              title="Press me"
              disabled
              onPress={() => Alert.alert("Cannot press this one")}
            />
          </View>
          <Separator />
          <View>
            <Text style={styles.title}>
              This layout strategy lets the title define the width of the
              button.
            </Text>
            <View style={styles.fixToText}>
              <Button
                title="Left button"
                onPress={() => Alert.alert("Left button pressed")}
              />
              <Button
                title="Right button"
                onPress={() => Alert.alert("Right button pressed")}
              />
            </View>
          </View>
        </View>
        {/*End Button Test */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  text1: {
    fontSize: 40,
  },
  input: {
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    borderRadius: 5,
  },
  inputResult: {
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    color: "#000000",
    borderRadius: 5,
  },
  inputDisplayCalculator: {
    height: 100,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    color: "#000",
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonTest: {
    paddingBottom: 50,
  },
});
