# with-api

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/with-api.svg)](https://www.npmjs.com/package/with-api) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save with-api
```

## Usage

```jsx
import React from 'react'
import axios from 'axios'
import withApi from 'with-api'

const getFake = () => axios.get('https://jsonplaceholder.typicode.com/todos/1');

const App = () => {
    const [{ data, error, status, isLoading, reset }, fetchSomething] = withApi(
        getFake
    )

    React.useEffect(() => {
        fetchSomething()
    }, [])
}

export default App
```

## License

MIT © [1997roylee](https://github.com/1997roylee)
