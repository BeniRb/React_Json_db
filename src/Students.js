import React from 'react'

const Students = (props) => {
// console.log(props.delc)

  return (
    <div style={{backgroundColor: "rgb(44, 198, 131)"}}>
        
        {props.studLst.map((item, ind) => <div key={ind}> {item.name}{" "}{item.age}
        <button onClick={()=>props.dels(ind)} onChange={(e)=>dellstud}>Delete</button>
        </div>)}

    </div>
  )
}

export default Students