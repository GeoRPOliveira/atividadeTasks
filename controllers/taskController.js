import Task from '../models/Task.js'; // note o .js obrigatório

export default {
  async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render('all', { tasks });
  },

  createTask(req, res) {
    res.render('create');
  },

  async saveTask(req, res) {
    await Task.create({
      title: req.body.title,
      description: req.body.description,
      done: false,
    });
    res.redirect('/tasks');
  },

  async editTask(req, res) {
    const id = req.params.id;
    const task = await Task.findByPk(id, { raw: true });
    res.render('edit', { task });
  },

  async updateTask(req, res) {
    const id = req.body.id;
    await Task.update(
      {
        title: req.body.title,
        description: req.body.description,
        done: req.body.done === 'on',
      },
      { where: { id } }
    );
    res.redirect('/tasks');
  },

  async deleteTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id } });
    res.redirect('/tasks');
  },
};
