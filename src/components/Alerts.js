import React from 'react'

export default function Alerts(props) {
    const capitalize = (word)=>{
        const capital = word.toLowerCase()
        return capital.charAt(0).toUpperCase() + capital.slice(1)
    }
  return (
        
    <div style = {{height:'50px'}}>
    {/* // props .alert && is that if the value is null then don run the div  */}
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
</div>
  )
}
