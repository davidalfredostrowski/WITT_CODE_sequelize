ubuntu@ip-172-31-33-160:~/sequelizeStuff$ cat  indexWrite.js
const Sequelize = require('sequelize')
const { DataTypes }  = Sequelize;


const sequelize = new Sequelize('graphbook_dev','pmauser', 'JunkcrunkJunkcrunk22$$', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });

const User = sequelize.define('user', {
        user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        }
,
        username: {
                type: DataTypes.STRING
        },

        password: {
                type: DataTypes.STRING
        },
        age: {
                type: DataTypes.STRING,
                defaultValue: 21
        },
        WittCodeRocks: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
        }
},      {
                freezeTableName: true,
                        timestamps: false

});

User.sync({ alter: true} ).then(() =>{
        const user  = User.build({username: 'WittCode', password: '123', age: 25, WittCodeRocks: true});
        return user.save();
}).then((data) => {
        console.log("User added to database!");
}).catch((err) => {
        console.log("Error syncing the table and model!");
}
);

//sequelize.authenticate().then(() => {
//      console.log("Connection sucessful!");
//}).catch((err) => {
//console.log(err);
//              console.log("Error connecting to database!");
//});
//console.log("Another task");


ubuntu@ip-172-31-33-160:~/sequelizeStuff$
