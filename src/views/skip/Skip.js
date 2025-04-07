import React, { useEffect, useState } from 'react';

import './Skip.css';
import CustomCard from '../../common/components/card/CustomCard';
import CustomSelect from '../../common/components/customSelect/CustomSelect';
import useHttpClient from '../../common/hooks/http-hook';
import { Button, CircularProgress } from '@mui/material';

const Skip = props => {
    const [skipData, setSkipData] = useState();
    const [skipFilters, setSkipFilters] = useState({ skipSize: 0, skipHiringPeriod: 0 });
    const [skipSizes, setSkipSizes] = useState([]);
    const [skipHirePeriods, setSkipHirePeriods] = useState([]);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const selectedSkipParameters = skipData?.find(item => item.size === skipFilters.skipSize && item.hire_period_days === skipFilters.skipHiringPeriod);

    const handleOnSkipFilterSelect = event => {
        setSkipFilters(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    useEffect(() => {
        const fetchSkipData = async () => {
            try {
                const responseData = await sendRequest('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestofts');
                setSkipData(responseData);

                const skipSizeSet = new Set();

                setSkipSizes(responseData.map(item => ({
                    key: item.size,
                    value: item.size
                })).filter(item => !skipSizeSet.has(item.key) && skipSizeSet.add(item.key)));

                const hirePeriodSet = new Set();

                setSkipHirePeriods(responseData.map(item => ({
                    key: item.hire_period_days,
                    value: item.hire_period_days
                })).filter(item => !hirePeriodSet.has(item.key) && hirePeriodSet.add(item.key)));

                setSkipFilters({ skipSize: [...skipSizeSet]?.[0], skipHiringPeriod: [...hirePeriodSet]?.[0] })
            } catch (err) {
                // handled in middleware
            }
        };

        fetchSkipData();
    }, []);

    if (isLoading || skipFilters.skipSize === 0 || skipFilters.skipHiringPeriod === 0) {
        return <div className="spinner">
            <CircularProgress />
        </div>
    }

    return (
        <>
            <h1>Choose your skip size</h1>
            <h2>Select the skip size that best suits your needs</h2>
            <div className="skip-selector__container">
                <div className="skip-parameters">
                    <div className="skip-size__dropdown">
                        <CustomSelect name='skipSize' label='Skip Size' value={skipFilters.skipSize} items={skipSizes} onChange={handleOnSkipFilterSelect} />
                    </div>
                    <div className="skip-period__dropdown">
                        <CustomSelect name='skipHiringPeriod' label='Skip Hire Period' value={skipFilters.skipHiringPeriod} items={skipHirePeriods} onChange={handleOnSkipFilterSelect} />
                    </div>
                </div>
                <div className="skip-card__container">
                    <CustomCard className='skip-card' image="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800" alt="Skip" skipSize={selectedSkipParameters?.size} skipHirePeriod={selectedSkipParameters?.hire_period_days} skipPrice={selectedSkipParameters?.price_before_vat}
                        isPrivatePropertyDependent={selectedSkipParameters?.allowed_on_road}>
                    </CustomCard>
                </div>
            </div>
            <div className="proceed">
                <Button sx={{ color: '#fff', height: '3rem', width: '15rem' }} variant="contained">Finish Selection</Button>
            </div>
        </>
    )
}

export default Skip