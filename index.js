import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import Task from './models/Task.js';
import taskRoutes from './routes/taskRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Corrige __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Rotas
app.use('/tasks', taskRoutes);
app.get('/', (req, res) => res.redirect('/tasks'));

// Conexão com o banco e inicialização do servidor
conn.sync()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`)
    );
  })
  .catch(err => console.log('❌ Erro ao conectar com o banco de dados:', err));
