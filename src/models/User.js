const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio"
                    },
                    len: {
                        args: [4, 20],
                        msg: "Esse campo deve ter entre 4 e 20 caracteres"
                    }
                }
            },
            email: {
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