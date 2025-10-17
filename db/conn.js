// db/conn.js
import { Sequelize } from 'sequelize';

// Configuração do Sequelize para PostgreSQL
const sequelize = new Sequelize('dbTask', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

export default sequelize;
