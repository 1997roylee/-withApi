// index.js
import React from 'react'

export const STATUS = {
    Success: 'Success',
    Failed: 'Failed'
}

export function WithApi(fn) {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [status, setStatus] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const request = async (payloads) => {
        try {
            setIsLoading(true)
            const result = await fn(payloads)
            setData(result)
            setStatus(STATUS.Success)
            setIsLoading(false)
            return result
        } catch (error) {
            setError(error)
            setStatus(STATUS.Failed)
            setIsLoading(false)
            return error
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
