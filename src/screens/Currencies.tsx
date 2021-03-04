import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBitcoinPrice } from '../store/slices/bitcoin-slice';

const Currencies: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        setInterval(async () => {
            dispatch(getBitcoinPrice());
        }, 10000);
    }, []);

    return (
        <div className="ScreenWrapper">
            <h2>Currencies!</h2>
        </div>
    )
};

export default Currencies;
