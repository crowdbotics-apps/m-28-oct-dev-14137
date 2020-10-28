import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_4: "", TextInput_5: "", Switch_6: true }

  render = () => (
    <View>
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen113358")}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen113358")}
      >
        <Text>Sample text content</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Switch
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_2: {},
  Text_3: {},
  TextInput_4: {},
  TextInput_5: {},
  Switch_6: {},
  View_1: {},
  Button_2: {},
  Text_3: {},
  TextInput_4: {},
  TextInput_5: { height: 100 },
  Switch_6: {}
})
