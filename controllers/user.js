import { v4 as uuidv4 } from 'uuid';

let users =[];

export const createUser = (req, res) => {
    const user = req.body;
    //const userWithId = { ...user, id: uuidv4() }  OR
    //users.push(userWithId);
    users.push({ ...user, id: uuidv4() })
    res.send(`User with the Name:  ${user.firstName} ${user.lastName} added to the DB`);
}

export const getUsers =  (req, res)=> { //every get has req and res
    res.send(users);
}

export const getUserId =  (req, res)=> { //every get has req and res
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser =  (req, res)=> {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the Id: ${id} deleted from the DB.`);
}

export const updatePatchUser = (req, res)=> {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName)user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age)user.age = age;
    res.send(`User with the Id: ${id} has updates from the DB.`);
}