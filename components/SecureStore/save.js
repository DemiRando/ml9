import * as SecureStore from 'expo-secure-store';

const save = async(key,value) => {
    await SecureStore.setItemAsync(key, value);
}

export default save