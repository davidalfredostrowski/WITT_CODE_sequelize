
ubuntu@ip-172-31-33-160:~/sequelizeStuff$ cat index.js
const Sequelize = require('sequelize')
const sequelize = new Sequelize('graphbook_dev','pmauser', 'JunkcrunkJunkcrunk22$$', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });
sequelize.authenticate().then(() => {
        console.log("Connection sucessful!");
}).catch((err) => {
console.log(err);
                console.log("Error connecting to database!");
});
console.log("Another task");

