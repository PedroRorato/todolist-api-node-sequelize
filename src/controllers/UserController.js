const User = require("../models/User");

module.exports = {
    async index(request, response) {

        const users = await User.findAll();

        console.log('users: ', users)

        return response.json(users);
    },

    async store(request, response) {
        const { name, email } = request.body;

        try {
            const user = await User.create({ name, email });
            return response.json(user);
        } catch(err) {
            return response.status(400).send({ error: err });
        }
        
    }
};