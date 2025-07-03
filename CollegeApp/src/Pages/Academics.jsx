import React from 'react'
import Programmes from "../Components/Academics/Programmes"
import Department from "../Components/Academics/Department"
import TimeTable from "../Components/Academics/TimeTable"
const Academics = (props) => {
  if (props.name =="programmes") {
    return <Programmes/>
}else if(props.name =="department"){
    return <Department/>
}else if(props.name =="timetable"){
    return <TimeTable/>
}else{
    return null
}
}

export default Academics