const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const databasePath = path.join(__dirname, 'database.json');

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

// Função para ler o banco de dados
function lerBancoDados() {
  try {
    if (fs.existsSync(databasePath)) {
      const dados = fs.readFileSync(databasePath, 'utf-8');
      return JSON.parse(dados || '[]');
    }
    return [];
  } catch (erro) {
    console.error('Erro ao ler banco de dados:', erro);
    return [];
  }
}

// Função para salvar o banco de dados
function salvarBancoDados(dados) {
  try {
    fs.writeFileSync(databasePath, JSON.stringify(dados, null, 2), 'utf-8');
  } catch (erro) {
    console.error('Erro ao salvar banco de dados:', erro);
  }
}

// Rota para salvar contato
app.post('/salvar-contato', (req, res) => {
  try {
    const novoContato = req.body;
    const contatos = lerBancoDados();
    
    contatos.push(novoContato);
    salvarBancoDados(contatos);
    
    res.json({ sucesso: true, mensagem: 'Contato salvo com sucesso!' });
  } catch (erro) {
    console.error('Erro ao salvar contato:', erro);
    res.status(500).json({ sucesso: false, mensagem: 'Erro ao salvar contato' });
  }
});

// Rota para obter todos os contatos (opcional, para gerenciamento)
app.get('/contatos', (req, res) => {
  const contatos = lerBancoDados();
  res.json(contatos);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
