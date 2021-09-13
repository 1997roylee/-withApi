// index.js
import React from 'react'

import { STATUS } from './constants'

/**
 * @param  {} fn
 */
export function WithApi(fn) {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [status, setStatus] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const request = async (payloads) => {
        try {
            setIsLoading(true)
            const result = await fn(payloads)
            // Begin: set data
            setData(result)
            setStatus(STATUS.Success)
            setIsLoading(false)
            // End: set data
            if (isObject(result)) return { ...result, status: STATUS.Success }
            else return { data: result, status: STATUS.Success }
        } catch (error) {
            // Begin: Error handling
            setError(error.response)
            setStatus(STATUS.Failure)
            setIsLoading(false)
            // End: Error handling
            return { response: error.response, status: STATUS.Failure }
        }
    }
    const reset = () => {
        setData(null)
        setError(null)
        setIsLoading(false)
    }

    return [
        { data, error, isLoading, status, reset },
        React.useCallback(request, [])
    ]
}

function isObject(object) {
    return !Array.isArray(object) && typeof object === 'object'
}

export { STATUS, isObject }
