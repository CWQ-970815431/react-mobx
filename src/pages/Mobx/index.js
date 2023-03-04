import React from 'react'
import { useStore ,observer } from '../../mobx'
import { useEffect } from 'react'
import CountButton from './countButton.jsx'

const PageOne = ()=>{
    const {counterStore} = useStore()

    const buttonMsg = '点击增加'

    useEffect = ()=>{ 
        console.log(counterStore);
    }

    return (
        <div>{counterStore.counter}
        <CountButton name={buttonMsg} counterStore={counterStore}/>
        </div>
    )
}

export default observer(PageOne)