import React, { useState } from 'react'
import Switch from "@mui/material/Switch"
import Checkbox from "@mui/material/Checkbox"

const CrossPost: React.FC = () => {
    const [formVisible, setFormVisible] = useState<boolean>(false);

    const activatedSlider = () => {
        setFormVisible(!formVisible)
    };

  return (
    <div>
         <Switch checked={formVisible} onChange={activatedSlider} />
        {formVisible && (
            <form>
                <label>
                    <Checkbox/>
                </label>
                <br />
                <label>
                    <Checkbox/>
                </label>
                <br />
                <label>
                    <Checkbox/>
                </label>
                <br />
                <label>
                    <Checkbox/>
                </label>
                <br />
            </form>
        )}
    </div>
  )
}

export default CrossPost