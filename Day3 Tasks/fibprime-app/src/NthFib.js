import React from 'react'
import {calculateFib, suffixOf} from './math'

function NthFib({count, increment}) {
    const fib = React.useMemo(()=>[
        calculateFib(count)
    ], [count])

    return(
        <div>
            <h2>Nth Fib</h2>
            <p>The <b>{suffixOf(count)}</b> number in the fibonacci sequence is <b>{fib}</b></p>
            <button onClick={increment}>Next Number</button>
        </div>
        
    )
}

export default NthFib;