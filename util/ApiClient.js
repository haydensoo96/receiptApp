import { Alert } from 'react-native';
import { apiUrl } from '../constant/env';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';

const client = axios.create({
    baseURL: apiUrl,
    timeout: 100000,
});


////////////////////////////////////

const GET = async function (url) {
    try {
        const { data } = await client.get(url);
        if (data.error) {
            Alert.alert("Error", data.message, [
                { text: "OK", onPress: () => { } }
            ],
                { cancelable: false })
        }
        else {
            return data;
        }
    }
    catch (err) {
        Alert.alert("Error", "Unknown error has occured", [
            { text: "OK", onPress: () => { } }
        ],
            { cancelable: false })
    }
}

const POST = async function (url, params) {
    try {
        const { data } = await client.post(url, params);
        if (data.error) {
            Alert.alert("Error", data.message, [
                { text: "OK", onPress: () => { } }
            ],
                { cancelable: false })
        }
        else {
            return data;
        }
    }
    catch (err) {
        Alert.alert("Error", "Unknown error has occured", [
            { text: "OK", onPress: () => { } }
        ],
            { cancelable: false })
    }
}

const PATCH = async function (url, params) {
    try {
        const { data } = await client.patch(url, params);
        if (data.error) {
            Alert.alert("Error", data.message, [
                { text: "OK", onPress: () => { } }
            ],
                { cancelable: false })
        }
        else {
            return data;
        }
    }
    catch (err) {
        Alert.alert("Error", "Unknown error has occured", [
            { text: "OK", onPress: () => { } }
        ],
            { cancelable: false })
    }
}

const ApiClient = {
    GET,
    POST,
    PATCH,
}

export default ApiClient
