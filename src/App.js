import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Movement from './components/Movement';
import {token} from "./util/token"

function App() {
  const [init, setInit] = useState()
  useEffect(() => {
    axios.get("https://lambda-treasure-hunt.herokuapp.com/api/adv/init/", {
      headers: {
        Authorization: token
      }
    }).then(res => {
      console.log(res.data)
      setInit({
        room_id_0: res.data
      })

    }).catch(err => {
      console.log(err.response)
    })
  }, [])
  console.log("state", init)
  return (
    <div className="App">
      <Movement map={init}/>
    </div>
  );
}

export default App;
