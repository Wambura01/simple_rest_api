import { v4 as uuid } from "uuid";

let users = [];

/**
 * The getUsers function sends the users data as a response.
 * @param req - The req parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, query parameters, and request body. It is used to
 * retrieve data from the client-side and pass it to the server-side.
 * @param res - The `res` parameter is the response object that is used to send a response back to the
 * client. In this case, the `send` method is called on the `res` object to send the `users` data back
 * as the response.
 */
export const getUsers = (req, res) => {
  res.send(users);
};

/**
 * The function creates a new user and adds it to an array of users.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. It is typically
 * provided by the web framework or server that handles the HTTP requests.
 * @param res - The `res` parameter is the response object that is used to send a response back to the
 * client. It contains methods and properties that allow you to control the response, such as `send`,
 * `json`, `status`, etc. In this code snippet, the `send` method is used to
 */
export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuid();
  users.push({ ...user, id: userId });
  res.send(`User with name ${user.firstName} added!!`);
};

/**
 * The function `getUser` retrieves a user from an array of users based on their id and sends the user
 * as a response.
 * @param req - The `req` parameter is an object that represents the HTTP request made by the client.
 * It contains information about the request such as the request method, request headers, request body,
 * request parameters, etc. In this case, we are accessing the `params` property of the `req` object to
 * @param res - The `res` parameter is the response object that is used to send a response back to the
 * client. It has methods like `send()`, `json()`, and `status()` that can be used to send the
 * response. In this code snippet, the `foundUser` is sent as the
 */
export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

/**
 * The deleteUser function deletes a user from the database based on their id.
 * @param req - The `req` parameter is an object that represents the HTTP request made by the client.
 * It contains information such as the request method, request headers, request body, request
 * parameters, etc. In this case, `req.params` is an object that contains the route parameters
 * extracted from the URL.
 * @param res - The `res` parameter is the response object that is used to send a response back to the
 * client. It contains methods and properties that allow you to control the response, such as `send()`
 * which is used to send a response body.
 */
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${id} deleted from the database.`);
};

/**
 * The function updateUser updates the information of a user with the given id.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request. It includes properties such as `params` (parameters extracted from the URL), `body`
 * (data sent in the request body), and more.
 * @param res - The `res` parameter is the response object that is used to send a response back to the
 * client. It contains methods and properties that allow you to control the response, such as `send`,
 * `json`, `status`, etc. In this code snippet, the `send` method is used to
 */
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with id ${id} has been updated`);
};
