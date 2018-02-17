# Freecodecamp API project: Timestamp microservice

> __User stories:__
> 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
> 2. If it does, it returns both the Unix timestamp and the natural language form of that date.
> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage

`https://localhost:8080/December%2015,%202015`

`https://localhost:8080/1450137600`

### Example output:

```js
{
    "unix": 1450137600,
    "natural": "December 15, 2015"
}
```