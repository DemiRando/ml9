import * as SecureStore from 'expo-secure-store';

const getValueFor = async (key) => {
    let data;
    await SecureStore.getItemAsync(key).then((res)=>{
    data = res;
    })
    return data;
    
    
}

export default getValueFor