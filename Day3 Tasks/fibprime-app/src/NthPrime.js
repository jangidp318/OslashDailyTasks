import React from 'react'
import {calculatePrime, suffixOf} from './math'

function NthPrime({count, increment}) {
    const prime = React.useMemo(()=>[
        calculatePrime(count)
    ], [count])
    return(
        <div>
            <h2>Nth Prime</h2>
            <p>The <b>{suffixOf(count)}</b> number in the fibonacci sequence is <b>{prime}</b></p>
            <button onClick={increment}>Next Number</button>
        </div>
        
    )
}

export default NthPrime;