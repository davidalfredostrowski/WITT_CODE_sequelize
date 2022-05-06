 cat index.js



const Sequelize = require('sequelize')



const sequelize = new Sequelize('graphbook_dev','pmauser', 'JunkcrunkJunkcrunk22$$', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });

const User = sequelize.define('user', {
        username: {
                type: Sequelize.DataTypes.STRING
        },

        password: {
                type: Sequelize.DataTypes.STRING
        },
        age: {
                type: Sequelize.DataTypes.STRING,
                defaultValue: 21
        }
});

User.sync().then((data) =>{
        console.log("Table and model synced successfully!");
}).catch((err) => {
        console.log("Error syncing the table and model!");
}
);




ubuntu@ip-172-31-33-160:~/sequelizeStuff$ node index.js
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `username` VARCHAR(255), `password` VARCHAR(255), `age` VARCHAR(255) DEFAULT 21, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`
Table and model synced successfully!
ubuntu@ip-172-31-33-160:~/sequelizeStuff$
