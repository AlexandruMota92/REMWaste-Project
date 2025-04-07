import { InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

import './CustomSelect.css';

const CustomSelect = props => {
    return (
        <>
            <InputLabel id={props.value}>{props.label}</InputLabel>
            <Select className="custom-select"
                labelId={props.value}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                variant="outlined"
            >
                {props.items?.map((item) => (
                    <MenuItem
                        key={item.key}
                        value={item.value}
                    >
                        {item.value}
                    </MenuItem>
                ))}
            </Select>
        </>)

}

export default CustomSelect
