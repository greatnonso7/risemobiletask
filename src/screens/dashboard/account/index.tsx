import Screen from 'components/Screen';
import { Button } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

const Account = () => {
  const {
    Auth: { logout },
  } = useDispatch();

  return (
    <Screen>
      <View>
        <Text>Account</Text>
      </View>
      <Button
        isNotBottom
        buttonStyle={{ marginTop: 50 }}
        title="Logout"
        onPress={() => logout()}
      />
    </Screen>
  );
};

export default Account;
