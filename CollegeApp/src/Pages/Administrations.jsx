import React from 'react'
import Admissions from "../Components/AdministationsComp/Admissions"
import SupremeCouncil from "../Components/AdministationsComp/SupremeCouncil"
import GoveringBody from "../Components/AdministationsComp/GoveringBody"
import Chairman from "../Components/AdministationsComp/Chairman"
import Principal from "../Components/AdministationsComp/Principal"
import VicePrincipal from "../Components/AdministationsComp/VicePrincipal"
const Administrations = (props) => {
if (props.name =="admissions") {
    return <Admissions/>
}else if(props.name =="supremecouncil"){
    return <SupremeCouncil/>
}else if(props.name =="goveringbody"){
    return <GoveringBody/>
}else if(props.name =="chairmain"){
    return <Chairman/>
}else if(props.name =="principal"){
    return <Principal/>
}else if(props.name =="viceprincipal"){
    return <VicePrincipal/>
}else{
    return null
}
}

export default Administrations