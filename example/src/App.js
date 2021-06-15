import React from 'react'

import withApi from 'with-api'
import ApiSerivce from './api.serivce'

const api = new ApiSerivce()

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [{ data, error, status, isLoading, reset }, fetchSomething] = withApi(
        api.fakeRequest
    )

    React.useEffect(() => {
        fetchSomething()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div>
                <h1>Status: {status}</h1>
            </div>
            <div>{isLoading ? <h1>Loading...</h1> : JSON.stringify(data)}</div>
            <div>
                <h1>Error: {error}</h1>
            </div>
        </>
    )
}

export default App
