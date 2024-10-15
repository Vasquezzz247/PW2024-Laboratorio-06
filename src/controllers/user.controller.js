const { addNewUser, getUsers } = require('../services/user.service');

const addUserController = (req, res) => {
    try {
        const { name, lastname, email } = req.body;
        const user = addNewUser(name, lastname, email)
        res.render('home.pug', { user });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}
const showForm = (req, res) => {
    res.render('form.pug');
};

const showAllUsers = (req, res) => {
    try {
        const users = getUsers();
        res.render('AllUsers.pug', { users });
    } catch (e) {
        console.log(e);
        res.statys(500).send('Internal Server Error');
    }
};

module.exports = {
    addUserController,
    showForm,
    showAllUsers
}