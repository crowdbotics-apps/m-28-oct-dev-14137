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

  state = { Switch_3: true, CheckBox_4: true, TextInput_5: "" }

  render = () => (
    <View>
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen113358")}
      />
      <Switch
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
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
  Switch_3: {},
  CheckBox_4: {},
  TextInput_5: {},
  View_1: {},
  Button_2: {},
  Switch_3: {},
  CheckBox_4: {},
  TextInput_5: {},
  View_1: {},
  Button_2: {},
  Switch_3: {},
  CheckBox_4: {},
  TextInput_5: {},
  View_1: {},
  Button_2: {},
  Switch_3: {},
  CheckBox_4: {},
  TextInput_5: {},
  View_1: {},
  Button_2: {},
  Switch_3: {},
  CheckBox_4: {},
  TextInput_5: {}
})
