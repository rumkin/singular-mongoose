# Singular Mongoose

Mongoose module for singular application.

## Install

```bash
npm i singular-mongoose
```

## Usage

Usage example:

```javascript
const Singular = require('singular');

const app = new Singular({
    config: {
        mongoose: {
            host: 'localhost',
            port: 27017,
            base: 'test',
        },
    },
});

app.module(require('singular-mongoose'));

app.inject('mongoose', (mongoose) => {
   // ... 
});

```

## License

MIT.