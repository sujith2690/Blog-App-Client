import axios from 'axios'
import dotenv from 'dotenv'
import { API_NOTIFICATION_MESSAGES } from '../constants/config'

dotenv.config()
const API_URL = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: API_URL,
    // when api goes to pending so give 10sec
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})
// interceptors for request case
axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)
// interceptors for request case
axiosInstance.interceptors.response.use(
    function (response) {
        // Stop global loader here
        return processResponse(response)
    },
    function (error) {
        // stop global error loader here
        return Promise.reject(processError(error))
    }
)
// if success  => return {isSuccess:true,data:Obj}
// if fail  => return {isFailure:true,status:string msg:string, code :init like 500}
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code,
        }
    }
}
const processError = (error) => {
    if (error.response) {
        // Request made and server respond with a status code with code other 2.X.X
        console.log('Error in Response',error.toJSON())
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }
    } else if (error.request) {
        // Request made but no response was received 
        console.log('Error in Request',error.toJSON())
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure
            ,
            code:error.response.status
        }
    } else {
        // Something happen in frontend
        console.log('Error in Network',error.toJSON())
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.networkFailure,
            code:error.response.status
        }
    }
}
