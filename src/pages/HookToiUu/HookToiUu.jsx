import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const HookToiUu = () => {
    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);

    const renderLike = () => {

        return <div>
            <i className='fa fa-heart'></i> {like}
        </div>
    }
    return (
        <div className='container'>
            <h3>Hook tối ưu (usememo, usecallback)</h3>
            <h3>Number: {number}</h3>
            <ChildComponent renderLike={renderLike} />
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <button className='btn btn-dark mx-2' onClick={() => {
                setLike(like + 1);
            }}>Like</button>
        </div>
    )
}

export default HookToiUu
