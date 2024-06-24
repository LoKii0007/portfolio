import axios from "axios"


const url = 'hrrp://localhost:8080/api'

export async function ContactFormApi(data){
    try {
        const res = await axios.post(`${url}/conatctForm`, data)
        if(res.status === 200 ){
            return res
        }else{
            console.log('error in reponse from contactforma api', res)
        }
    } catch (error) {
        console.log('error calling contactform api', error)
    }
}