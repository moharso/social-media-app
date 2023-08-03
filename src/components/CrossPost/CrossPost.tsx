import React, { useState } from 'react'
import Switch from "@mui/material/Switch"
import Checkbox from "@mui/material/Checkbox"
import myUsersList from '../data/data'

const CrossPost: React.FC = () => {
    const [formVisible, setFormVisible] = useState<boolean>(false);

    const activatedSlider = () => {
        setFormVisible(!formVisible)
    };
    

  return (
    <div>
        <h1>Crosspost</h1>
         <Switch checked={formVisible} onChange={activatedSlider}/>
        {formVisible && (
             <form>
             {myUsersList.map(user => (
                 user.networks.map(network => (
                     <label key={network.name}>
                         <Checkbox />
                         {network.name}
                     </label>
                 ))
             ))}
         </form>
        )}
    </div>
  )
}

export default CrossPost