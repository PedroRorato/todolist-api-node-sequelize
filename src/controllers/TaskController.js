const User = require("../models/User");
const Task = require("../models/Task");


module.exports = {
    async index(request, response) {

        const user_id = 1;

        const user = await User.findByPk(user_id, {
            include: { association: 'tasks' }
        });

        return response.json(user.tasks);
    },

    async store(request, response) {
        const user_id = 1;
        const { title, description } = request.body;

        try{
            const task = await Task.create({
                title,
                description,
                user_id 
            });

            return response.json(task);
        } catch (error) {
            return response.json(error);
        }
        
    },

    async show(request, response) {

        const { task_id } = request.params;

        const task = await Task.findByPk(task_id);

        if(!task) {
            return response.status(404).json({ error: "Task not found" })
        }

        return response.json(task);        
    },

    async update(request, response) {

        const { task_id } = request.params;
        const { title, description } = request.body;

        const task = await Task.findByPk(task_id);

        if(!task) {
            return response.status(404).json({ error: "Task not found" })
        }

        task.title = title;
        task.description = description;

        await task.save();

        return response.json(task);        
    },

    async destroy(request, response) {

        const { task_id } = request.params;

        const task = await Task.findByPk(task_id);

        if(!task) {
            return response.status(404).json({ error: "Task not found" })
        }

        await task.destroy();

        return response.json({ message: "Task successfully deleted!" });        
    }
};