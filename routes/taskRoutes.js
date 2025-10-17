// routes/taskRoutes.js
import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

// Rota para a página inicial (listar todas as tarefas)
router.get('/', taskController.showTasks);

// Rota para a página de formulário de criação
router.get('/create', taskController.createTask);

// Rota para RECEBER os dados do formulário de criação
router.post('/create', taskController.saveTask);

// Rota para a página de formulário de edição
router.get('/edit/:id', taskController.editTask);

// Rota para RECEBER os dados do formulário de edição
router.post('/edit', taskController.updateTask);

// Rota para RECEBER a requisição de deletar uma tarefa
router.post('/delete', taskController.deleteTask);

export default router;
