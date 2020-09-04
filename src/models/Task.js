const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(connection) {
        super.init({
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio"
                    },
                    len: {
                        args: [2, 50],
                        msg: "Esse campo deve ter entre 2 e 50 caracteres"
                    }
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [0, 250],
                        msg: "Esse campo não deve ter mais de 250 caracteres"
                    }
                }
            },
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Task;