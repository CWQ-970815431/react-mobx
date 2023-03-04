import React from "react";
import { useStore ,observer } from '../../mobx'


const CountButton = (props)=>{

    return (
        <div>
            <button onClick={props.counterStore.increment}>{props.name}</button>
        </div>
    )
}

export default observer(CountButton)