// models/Task.js
import { DataTypes } from 'sequelize';
import conn from '../db/conn.js';

const Task = conn.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Task;
