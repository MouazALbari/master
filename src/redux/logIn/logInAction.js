import { LOG_IN ,LOG_IN_REQUES ,LOG_IN_FIALUER,LOG_IN_SUCCSESS} from "./type";
import axios from "axios"

export const reqestLogIn=()=>{
    return{
        type :LOG_IN_REQUES
    }
}
export const succsessLogIn=(token)=>{

    return {
        type:LOG_IN_SUCCSESS,
        pylood:token
    }
}
export const fialuerLogIn=(error)=>{
 return{
     type:LOG_IN_FIALUER,
     pylood:error
 }
}

export const logIN=(values)=>{
    return(dispatch)=>{
        dispatch(reqestLogIn())
      var postData = JSON.stringify(values);
      axios.post('https://api.ft.com/users/profile',postData)
      .then(res=>{
      // dispatch(succsessFach(res))
      dispatch( succsessLogIn("1223"))
      })
      .catch(error=>{
          // dispatch(fialuerLogIn(error))
       dispatch( succsessLogIn("1223"))


      })
 
    }
 
}