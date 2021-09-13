# with-api

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/with-api-hook.svg)](https://www.npmjs.com/package/with-api) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save with-api-hook
```

## Usage

```jsx
import React from 'react'

import { WithApi, STATUS } from 'with-api-hook'
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
```

## License

MIT © [1997roylee](https://github.com/1997roylee)
