import { isNil, isEmpty } from "lodash";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  ViewStyle,
  Pressable,
  Text,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from "react-native";
import {
  CloseIconSvg,
  Colors,
  ErrorIconSvg,
  EyeOffSvg,
  EyeSvg,
} from "@Resources";

import {
  errorContainerStyle,
  labelAnimStyle,
  styles,
  textInputAnimStyle,
  textInputContainerStyle,
} from "./styles";
import { AppInputHandles, Props } from "./types";

const runTiming = (animValue: Animated.Value, toValue: number) => {
  Animated.timing(animValue, {
    toValue,
    duration: 200,
    useNativeDriver: true,
  }).start();
};

const AppInput: ForwardRefRenderFunction<AppInputHandles, Props> = (
  props: Props,
  ref: any
) => {
  const { name, value, onChange, onBlur } = props.field;
  const { errors, touched } = props.form;
  const { returnKeyType = "next" } = props;
  const errorLabel: string | null = touched[name]
    ? (errors[name] as string)
    : null;

  const [focused, setFocused] = useState(false);
  const [secured, setSecured] = useState<boolean>(
    props.secureTextEntry || true
  );

  const errorOpacity = useRef(new Animated.Value(0));
  const focusAnimValue = useRef(new Animated.Value(0));
  const inputRef = props.refs[name]?.ref;

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur(name)(e);
      inputRef.current?.blur();
    },
  }));

  useEffect(() => {
    if (value?.length) {
      runTiming(focusAnimValue.current, 1);
    } else {
      runTiming(focusAnimValue.current, 0);
    }
  }, [value]);

  useEffect(() => {
    if (errorOpacity.current) {
      runTiming(errorOpacity.current, isNil(errorLabel) ? 0 : 1);
    }
  }, [errorLabel]);

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      if (focusAnimValue.current && !isEmpty(value)) {
        runTiming(focusAnimValue.current, 1);
      }
      props.onFocus?.(e);
    },
    []
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      onBlur(name)(e);
      if (focusAnimValue.current && isEmpty(value)) {
        runTiming(focusAnimValue.current, 0);
      }
      props.onBlur?.(e);
    },
    [name, onBlur, value]
  );

  const handleTextChange = (text: string) => {
    if (focusAnimValue.current && (isEmpty(text) || text.length === 1)) {
      runTiming(focusAnimValue.current, text.length === 1 ? 1 : 0);
    }

    onChange(name)(text);
  };

  const containerStyle = StyleSheet.compose<ViewStyle>(
    styles.container,
    props.containerStyle
  );

  const onClear = () => {
    onChange(name)("");
    runTiming(focusAnimValue.current, 0);
  };

  const onSecureText = () => {
    setSecured(!secured);
  };

  const renderError = () => {
    return (
      !isNil(errorLabel) && (
        <Animated.View style={errorContainerStyle(errorOpacity.current)}>
          <View style={{ flexDirection: "row" }}>
            <ErrorIconSvg />
            <Text style={styles.errorText}>{errorLabel}</Text>
          </View>
        </Animated.View>
      )
    );
  };

  return (
    <View style={containerStyle}>
      <Animated.View style={textInputContainerStyle(focused, errorLabel)}>
        {props.icon}
        {props.placeholder && (
          <Animated.Text style={labelAnimStyle(focusAnimValue.current)}>
            {props.placeholder}
          </Animated.Text>
        )}
        <Animated.View
          style={textInputAnimStyle(
            focusAnimValue.current,
            isNil(props.placeholder)
          )}>
          <TextInput
            ref={inputRef}
            {...props}
            value={value}
            nativeID={name}
            style={styles.textInput}
            selectionColor={Colors.primary}
            returnKeyType={returnKeyType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSubmitEditing={() => {
              const nextRefName = props.refs[name].nextRefName;

              props.refs[nextRefName]?.ref?.current?.focus();
            }}
            onChangeText={handleTextChange}
            placeholderTextColor={Colors.mediumGrey}
            autoCapitalize="none"
            secureTextEntry={
              props.secureTextEntry || (props.withSecureText && secured)
            }
          />
        </Animated.View>
        {!!value?.length && props.withClear && (
          <Pressable onPress={onClear}>
            <CloseIconSvg />
          </Pressable>
        )}
        {props.withSecureText && focused && (
          <Pressable onPress={onSecureText} style={styles.secureIconWrapper}>
            {secured ? <EyeSvg /> : <EyeOffSvg />}
          </Pressable>
        )}
      </Animated.View>
      {renderError()}
    </View>
  );
};

export default forwardRef(AppInput);
