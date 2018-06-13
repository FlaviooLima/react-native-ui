
---
Button
---


Buttons can be used to interact with the screen. It takes the following props.


```js
   import { Button } from 'react-native-elements';
   import { Text } from 'react-native';

   <Button
      onPress={() => alert('Hey you!!')}
      title="Login"
      disabled={false}
      containerStyle={{ backgroundColor: 'gray', borderRadius: 0 }}
   />

   <Button touchableProps={{ disabled: true }}>
      <Text>Test2</Text>   
   </Button>

   <Button clean>
      <Text>Test3</Text>
   </Button>

```

---

### Props
* [`onPress`](#onPress)
* [`disabled`](#disabled)
* [`testID`](#testID)
* [`touchableProps`](#touchableProps)
* [`containerStyle`](#containerStyle)
* [`titleStyle`](#titleStyle)
* [`title`](#title)
* [`iconLeft`](#iconLeft)
* [`iconRight`](#iconRight)
* [`clean`](#clean)
---


# Reference

### `onPress`

Function called when button pressed.

|        Type         |   Default   |
| :-----------------: | :---------: |
|      Function       |    null     |

---

### `disabled`

Button is disabled/enable. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|        Bool         |  false  |

---

### `testID`

add additional styling for title component. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|       String        |  none   |

---

### `touchableProps`

Add additional props to the touchable component. (optional)
> Receives all [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props) (iOS) props

|        Type         | Default |
| :-----------------: | :-----: |
|       Object        |  none   |

---

### `containerStyle`

Add additional styles to the container component. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|     Style Object    |  none   |

---

### `titleStyle`

Add additional styles to the title component. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|     Style Object    |  none   |

---

### `title`

Add a title to the button. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|       String        |  none   |

---

### `iconLeft`

Add additional to the left side of title. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|      Component      |  none   |

---

### `iconRight`

Add additional to the right side of title. (optional)

|        Type         | Default |
| :-----------------: | :-----: |
|      Component      |  none   |

---

### `clean`

Removes base style for container component. (optional)  TODO: Remove from title to?

|        Type         | Default |
| :-----------------: | :-----: |
|        Bool         |  none   |


