module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false, 
      },
      agency_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notNull: { msg: "agency_id is required" },
          },
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              notNull: { msg: "username is required" },
              len: { args: [3, 50], msg: "username must be between 3 and 50 characters" },
          },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
              notNull: { msg: "name is required" },
              len: { args: [2, 50], msg: "name must be between 2 and 50 characters" },
          },
        },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: { msg: "password is required" },
              isNotEmpty(value) {
                  if (!value) {
                      throw new Error("password cannot be empty");
                  }
              },
          },
      },
      usertype: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: { msg: "usertype is required" },
          },
      },
      newuser: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        notNull: true,
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              notNull: { msg: "phone number is required" },
              isNumeric: { msg: "phone number must be numeric" },
          },
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              notNull: { msg: "email is required" },
              isEmail: { msg: "email must be a valid email address" },
          },
      },
      address: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: { msg: "address is required" },
          },
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        notNull: true,
      },
      created_by: {
        type: DataTypes.STRING,
        defaultValue: 'System',
      },
      updated_by: {
        type: DataTypes.STRING,
        defaultValue: 'System',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
       }
  }, {
      timestamps: false,
      tableName: 'users',
  });
    User.associate = (models) => {
      User.belongsTo(models.Agency, {
        foreignKey: 'agency_id',
      });
    };
  return User;
};
