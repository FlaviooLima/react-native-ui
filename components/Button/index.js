'use strict';
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button
} from 'react-native';

export default class Button extends React.PureComponent<{
  title: string,
  onPress: () => any,
  color?: ?string,
  hasTVPreferredFocus?: ?boolean,
  accessibilityLabel?: ?string,
  disabled?: ?boolean,
  testID?: ?string,
}> {
  static propTypes = {
    accessibilityLabel: PropTypes.string,
    disabled: PropTypes.bool,
    hasTVPreferredFocus: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.string,
  };

  render() {
    const {
      accessibilityLabel,
      color,
      onPress,
      title,
      hasTVPreferredFocus,
      disabled,
      testID,
      children
    } = this.props;

    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    // const Children = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Touchable {...this.props}>
        {children}
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
 
});

