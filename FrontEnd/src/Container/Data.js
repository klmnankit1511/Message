import {Container} from 'unstated';
// import AES from 'crypto-js/aes';
// import CryptoJS from 'crypto-js';
// import {setCookie} from '../components/Utils/Cookie'

class Data extends Container {
  state = {
    isLoggedIn: false,
    phone: null,
    email: null,
    name: null,
    accessToken: null,
    apiUrl:"http://localhost:3006/",
    publicKey:"cmVhY3RBcHBQb3J0YWwyNjc=",
    tid:null,
    tauth:null
    
  };
  doLogin = (data)=>{
        console.log("True");
      this.setState({
          name:data.savedUser.name,
          email:data.savedUser.name,
          phone:data.savedUser.phone,
          tphn:data.savedUser.tphn,
          tid:data.savedUser.tid,
          tsec:data.savedUser.tsec,
          accessToken:data.accessToken,

      })

  }
}


export default Data;
