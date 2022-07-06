import { useState } from 'react';
import './App.css';
import Students from './Students';

function App() {
    const [myProds, setmyProds] = useState([])
    const [age, setage] = useState()
    const [name, setname] = useState("")
    const [mystudent, setmystudent] = useState([])
    const [dellstud, setdellstud] = useState([])
    const SERVER ="http://localhost:3004/students"
    const addStud = (ind) => {
        console.log(ind)
        setmystudent([...mystudent, myProds[ind]])
    }
    const delstud = (ind) => {
      console.log(ind)
      setdellstud([...dellstud,myProds[ind]])
      
    }
    const getDataFromServer = async () => {
        setmyProds(await fetch(SERVER)
            .then(response => response.json()))
    }


    const addData2Server = () => {
        const data =  {
            "name":name,
            "age":age
        };
        console.log( JSON.stringify(data))
        fetch(SERVER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div >
            <button onClick={() => getDataFromServer()}>Get data</button>
            <button onClick={() => addData2Server()}>add data</button>
           Name:<input value={name} onChange={(e) => setname(e.target.value)} />
            Age:<input value={age} onChange={(e) => setage(e.target.value)} /> 
            <Students studLst={mystudent} dels={delstud} style={{ display: "inline" }}></Students>
            <hr></hr>
            <div style={{ display: "inline" }}>
                {myProds.map((item, ind) =>
                    <div key={ind}> {item.name}{" "}{item.age}
                        <button onClick={() => addStud(ind)}>Add</button>
                    </div>)}
            </div>
            <hr></hr>

        </div>
    );
}



{/* <button onClick={() => addProd()}>Add</button> */ }
{/* Desc:<input value={desc} onChange={(e) => setdesc(e.target.value)} />
                    Price:<input value={price} onChange={(e) => setprice(e.target.value)} /> */}
export default App;