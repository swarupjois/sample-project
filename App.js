import * as React from "react";
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  Text,
  View,
  TextInput,
  Picker
} from "react-native";


export default class App extends React.Component {

  state = {
    fromPickerValue: 'KILO', toPickerValue: 'GRAM', inputWeight: '', outputWeight: ''
  };

  fromPicker = (value) => {
    if (value === this.state.toPickerValue) {
      this.setState({ toPickerValue: this.state.fromPickerValue });
      this.setState({ fromPickerValue: value }, () =>
        this.inputBox(this.state.inputWeight)
      );
    } else {
      this.setState({ fromPickerValue: value });
      this.setState({ toPickerValue: this.state.toPickerValue }, () =>
        this.inputBox(this.state.inputWeight)
      );
    }
  }
  toPicker = (value) => {
    if (value === this.state.fromPickerValue) {
      this.setState({ fromPickerValue: this.state.toPickerValue });
      this.setState({ toPickerValue: value }, () =>
        this.inputBox(this.state.outputWeight)
      );
    } else {
      this.setState({ toPickerValue: value });
      this.setState({ fromPickerValue: this.state.fromPickerValue }, () =>
        this.inputBox(this.state.outputWeight)
      );
    }
  }

  inputBox = (val) => {
    this.setState({ inputWeight: val });
    var convertedResult;
    if (this.state.fromPickerValue === 'KILO' && this.state.toPickerValue === 'GRAM') {
      //killo to gram
      console.log("killo to gram");
      convertedResult = val * 1000;
      this.setState({ outputWeight: convertedResult });
    }
    if (this.state.fromPickerValue === 'GRAM' && this.state.toPickerValue === 'KILO') {
      //gram to kilo
      console.log("gram to killo")
      convertedResult = val / 1000;
      this.setState({ outputWeight: convertedResult });
    }
    if (this.state.fromPickerValue === 'KILO' && this.state.toPickerValue === 'POUND') {
      // kilo to pound
    }
    if (this.state.fromPickerValue === 'POUND' && this.state.toPickerValue === 'KILO') {
      // pound to kilo
      convertedResult = val / 2.2046;
      this.setState({ outputWeight: convertedResult });
    }
    if (this.state.fromPickerValue === 'GRAM' && this.state.toPickerValue === 'POUND') {
      //gram to pound
      convertedResult = val * 0.0022046;
      this.setState({ outputWeight: convertedResult });
    }
    if (this.state.fromPickerValue === 'POUND' && this.state.toPickerValue === 'GRAM') {
      //pound to gram
      convertedResult = val / 0.0022046;
      this.setState({ outputWeight: convertedResult });
    }
  }

  outputBox = (val) => {
    var convertedResult;
    if (this.state.toPickerValue === 'KILO' && this.state.fromPickerValue === 'GRAM') {
      //killo to gram
      convertedResult = val * 1000;
      this.setState({ inputWeight: convertedResult });
    }
    if (this.state.toPickerValue === 'GRAM' && this.state.fromPickerValue === 'KILO') {
      //gram to kilo
      convertedResult = val / 1000;
      this.setState({ inputWeight: convertedResult });
    }
    if (this.state.toPickerValue === 'KILO' && this.state.fromPickerValue === 'POUND') {
      // kilo to pound
    }
    if (this.state.toPickerValue === 'POUND' && this.state.fromPickerValue === 'KILO') {
      // pound to kilo
      convertedResult = val / 2.2046;
      this.setState({ inputWeight: convertedResult });
    }
    if (this.state.toPickerValue === 'GRAM' && this.state.fromPickerValue === 'POUND') {
      //gram to pound
      convertedResult = val * 0.0022046;
      this.setState({ inputWeight: convertedResult });
    }
    if (this.state.toPickerValue === 'POUND' && this.state.fromPickerValue === 'GRAM') {
      //pound to gram
      convertedResult = val / 0.0022046;
      this.setState({ inputWeight: convertedResult });
    }
  }
  render() {
    return (
      <div style={{ height: "300px", width: "400px", justifyContent: "center", alignItems: "center", display: "flex" }}>
        <div style={{
          width: '300px',
          height: '40px',
          display: 'flex',
          flexDirection: 'row',
          padding: '10px'
        }}>

          <div>
            <div class="input-weight" style={{ paddingBottom: "10px" }}>
              <TextInput
                style={{ height: 40, borderColor: 'orange', borderWidth: 2, width: "100%" }}
                value={this.state.inputWeight}
                onChangeText={this.inputBox}
              />
            </div>
            {console.log("{this.state.outputWeight}:", this.state.outputWeight)}
            <div class="output-weight">
              <TextInput
                style={{ height: 40, borderColor: 'orange', borderWidth: 2, width: "100%" }}
                value={this.state.outputWeight}
                onChangeText={this.outputBox}
              />
            </div>
          </div>

          <div style={{ paddingLeft: "10px", width: "150px" }}>
            <div class="picker-From" style={{ paddingBottom: "10px" }}>
              <Picker style={{ height: 40, width: "100%" }} selectedValue={this.state.fromPickerValue} onValueChange={this.fromPicker}>
                <Picker.Item label="KILO" value="KILO" />
                <Picker.Item label="GRAM" value="GRAM" />
                <Picker.Item label="POUND" value="POUND" />
              </Picker>
            </div>

            <div class="picker-To">
              <Picker style={{ height: 40, width: "100%" }} selectedValue={this.state.toPickerValue} onValueChange={this.toPicker}>
                <Picker.Item label="KILO" value="KILO" />
                <Picker.Item label="GRAM" value="GRAM" />
                <Picker.Item label="POUND" value="POUND" />
              </Picker>
            </div>

          </div>
        </div>
      </div>


    );
  }
}
