import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "../utils/Constant";


class APIManager {

    async getAPI(subUrl) {
        return await fetch(API_BASE_URL + subUrl, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
            },
            // body: JSON.stringify(rowData)
        })
            .then(response => response.json())
            .then((responseJson) => {
                return responseJson
            },
            )
            .catch((error) => {
                console.error(error);
            });
    }

    async postAPI(subUrl, rowData, formData, isRowData) {
        return await fetch(API_BASE_URL + subUrl, {
            method: 'POST',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': isRowData ? "application/json" : "application/x-www-form-urlencoded",
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token')
            },
            body: isRowData ? JSON.stringify(rowData) : formData
        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log("api :: ", API_BASE_URL + subUrl)
                console.log("responseJson :: ", responseJson)
                return responseJson
            },
            )
            .catch((error) => {
                console.error(error);
            });
    }

    async putAPI(subUrl, rowData, formData, isRowData) {
        return await fetch(API_BASE_URL + subUrl, {
            method: 'PUT',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': isRowData ? "application/json" : "application/x-www-form-urlencoded",
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
            },
            body: isRowData ? JSON.stringify(rowData) : formData
        })
            .then(response => response.json())
            .then((responseJson) => {
                return responseJson
            },
            )
            .catch((error) => {
                console.error(error);
            });
    }

    async deteletItem(subUrl) {
        return await fetch(API_BASE_URL + subUrl, {
            method: 'DELETE',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': isRowData ? "application/json" : "application/x-www-form-urlencoded",
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
            },
            body: isRowData ? JSON.stringify(rowData) : formData
        })
            .then(response => response.json())
            .then((responseJson) => {
                return responseJson
            },
            )
            .catch((error) => {
                console.error(error);
            });

    }

}

export default new APIManager();
