# Site com Formulário de Contato

## Configuração e Execução

### 1. Instalar as dependências
Abra o terminal na pasta do projeto e execute:
```
npm install
```

### 2. Iniciar o servidor
```
npm start
```

O servidor rodará em `http://localhost:3000`

### 3. Acessar o site
Abra seu navegador e acesse:
```
http://localhost:3000
```

## Como funciona

1. Clique na opção **"Fale Conosco"** no menu
2. Preencha o formulário com seus dados:
   - Nome (obrigatório)
   - Email (obrigatório)
   - Telefone (opcional)
   - Mensagem (obrigatória)
3. Clique em **"Enviar"**
4. Os dados serão salvos automaticamente no arquivo `database.json`

## Banco de Dados

Os contatos são armazenados no arquivo `database.json` em formato JSON:

```json
[
  {
    "nome": "João Silva",
    "email": "joao@exemplo.com",
    "telefone": "11999999999",
    "mensagem": "Gostaria de informações...",
    "data": "05/02/2026 10:30:45"
  }
]
```

## Rotas disponíveis

- `POST /salvar-contato` - Salva um novo contato
- `GET /contatos` - Lista todos os contatos salvos
