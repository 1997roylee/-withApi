import React from 'react'

import { WithApi, STATUS } from 'with-api'
import ApiSerivce from './api.serivce'

const api = new ApiSerivce()

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [{ data, error, status, isLoading, reset }, fetchSomething] = WithApi(
        api.fakeRequest
    )

    React.useEffect(() => {
        ; (async () => {
            const { status, ...other } = await fetchSomething();
            console.log(STATUS)
            if (status === STATUS.Success) {
                console.log(status, other);
            }
            else if (status === STATUS.Failure) {
                console.log("Error Handler", status, other);
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div>
                <h1>Status: {status}</h1>
            </div>
            <div>{isLoading ? <h1>Loading...</h1> : JSON.stringify(data)}</div>
            {
                error ? <div>
                    <h1>Error: {error}</h1>
                </div> : null
            }
        </>
    )
}

export default App
