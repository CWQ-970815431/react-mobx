import counterStore from './count'
import { observer } from 'mobx-react-lite';
import { createContext, useContext } from "react";

class MobxStore {
    constructor(){
        this.counterStore = counterStore
    }
}

const mobxStore = new MobxStore()

const context = createContext(mobxStore)
const useStore = () => {
  return useContext(context)
}

export { useStore , observer }