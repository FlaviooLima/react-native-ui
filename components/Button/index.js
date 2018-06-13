'use strict';
import React from 'react';

import PropTypes from 'prop-types';

import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class Button extends React.PureComponent {
  render() {
    const {
      onPress,
      disabled,
      testID,
      touchableProps,
      containerStyle,
      titleStyle,
      title,
      iconLeft,
      iconRight,
      clean,
      children
    } = this.props;

    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    const Children = children ?
      children
      :
      [
        ...((iconLeft) && [iconLeft] || [null]),

        <Text key="1" style={titleStyle || styles.title}>{title}</Text>,

        ...((iconRight) && [iconRight] || [null]),
      ]

    return (
      <Touchable onPress={onPress} disabled={disabled || false} testID={testID} {...touchableProps}>
        {/* <View style={(!clean) && (containerStyle || styles.container)}> */}
        <View style={(!clean) && [styles.container, containerStyle]}>
          {Children}
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#3399ff"
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: 'white'
  }

});