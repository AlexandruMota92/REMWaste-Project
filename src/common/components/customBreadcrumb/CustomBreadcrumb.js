import React from 'react';

import './CustomBreadcrumb.css';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

const CustomBreadcrumb = props => {
    const handleClick = () => {
        console.log('click');
    }

    const firstElement = props.steps?.[0];
    return (
        <div className="breadcrumb" role="presentation" onClick={handleClick}>
            <ul className='breadcrumbs-trail__list'>
                <li className="breadcrumbs-trail">
                    <Box className="breadcrumbs-icon">
                        {/* <firstElement.icon /> */}
                        <Typography fontSize={18} color={props.activeStep === 0 ? 'white' : 'gray'}>{firstElement.name}</Typography>
                    </ Box>
                </li>
                {props.steps?.slice(1).map((step, index) => (<>
                    <li className="breadcrumbs-trail"><Box sx={{ height: '0px !important', width: 60, border: `1px solid ${index + 1 <= props.activeStep ? '#0037c1' : 'gray'}` }}></Box></li>
                    <li className="breadcrumbs-trail"><Box className="breadcrumbs-icon">{/*<step.icon />*/}<Typography fontSize={18} color={index + 1 === props.activeStep ? 'white' : 'gray'}>{step.name}</Typography></Box></li >
                </>))}
            </ul>
        </div >
    )
}

export default CustomBreadcrumb