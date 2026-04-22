import { View, Text } from 'react-native';

export default function Home({ route }) {
  const { nombre } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{nombre}</Text>
    </View>
  );
}