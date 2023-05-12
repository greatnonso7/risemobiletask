import AvoidingView from 'components/AvoidingView';
import Screen from 'components/Screen';
import { RegularInput, Button } from 'design-system';
import React, { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';
import * as yup from 'yup';
import { Text, View } from 'react-native';
import { styles } from './style';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type ScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation }: ScreenProps) => {
  const {
    control,
    setFocus,
    formState: { errors, isValid, touchedFields },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  console.log(touchedFields);

  return (
    <Screen>
      <AvoidingView>
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>Welcome back</Text>
          <Text style={styles.subHeaderText}>
            Let's get you logged in to get back to building your
            dollar-denominated investment portfolio.
          </Text>
          <View style={styles.formContainer}>
            <RegularInput
              ref={emailRef}
              control={control}
              onFocus={() => setFocus('email')}
              placeholder="Email address"
            />
            <RegularInput
              control={control}
              placeholder="Password"
              ref={passwordRef}
              onFocus={() => setFocus('password')}
            />
          </View>
          <Button isNotBottom disabled={!isValid} title="Sign In" />
          <Button
            isNotBottom
            title="I forgot my password"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
        </View>
      </AvoidingView>
    </Screen>
  );
};

export default Login;
