
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('fitness_db', 'root', '1nnd90MR$!', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;