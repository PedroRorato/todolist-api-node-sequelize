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
                    isEmail: {
                        msg: "Formato de email inválido, por favor confira o email informado!"
                    },
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio"
                    }
                }
            },
        }, {
            sequelize: connection,
        })
    }

    // static associate(models) {
    //     this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    //     this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    // }
}

module.exports = User;