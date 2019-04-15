|Route|Headers|Body|Responses|Description|
|-----|-------|----|---------|-----------|
|**/api/accounts** - GET|**Authorization**: `admin token`<br/>|-|**200**: Returns all accounts saved in the database<br/>**401**: Not authenticated<br/>**500**: Any other server error accompanied with an error message in the response body<br/>|Returns all accounts saved on the database.|
**/api/register** - POST|-|Type: application/json<br/>**username (string)**: The username of the account<br/>**email (string)**: The email of the new account<br/>**password (string)**: The plaintext password for the new account<br/>**password2 (string)**: A repeated instance of the password field. Must be the same<br/>|**200**: Returns 'success: true' json object. This means that the user was successfuly registered<br/>**400**: One or more of the required fields is missing or incorrectly formatted<br/>**409**: Email is already being used by another account<br/>|Tries to register a new accout.|
**/api/auth** - POST|-|Type: application/json<br/>**email (string)**: The email of an existing account<br/>**password (string)**: The password for the account<br/>|**200**: Authentication successful. JWT is sent with the respective account information<br/>**400**: One or more of the required fields is missing or incorrectly formatted<br/>**401**: Email or password is incorrect<br/>|Tries to authenticate an account and sends back a token if authentication is successful.|
**/api/auth/user** - GET|**Authorization**: `personal token`<br/>|-|**200**: Returns a JSON object with account information EXCEPT the password<br/>**401**: Not authenticated<br/>|Checks the token sent with the request and returns the account info EXCLUDING the password or the password hash.|
