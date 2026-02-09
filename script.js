function enviarFormulario(evento) {
  evento.preventDefault();

  const form = evento.target;
  const dados = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    mensagem: document.getElementById('mensagem').value,
    data: new Date().toLocaleString('pt-BR')
  };

  fetch('http://localhost:3000/salvar-contato', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
    const respostaDiv = document.getElementById('resposta-formulario');
    respostaDiv.innerHTML = `<p style="color: green; font-weight: bold;">✓ Mensagem enviada com sucesso!</p>`;
    form.reset();
  })
  .catch(error => {
    console.error('Erro:', error);
    const respostaDiv = document.getElementById('resposta-formulario');
    respostaDiv.innerHTML = `<p style="color: red; font-weight: bold;">✗ Erro ao enviar mensagem. Tente novamente.</p>`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const conteudo = document.getElementById('conteudo');
  const itensMenu = document.querySelectorAll('.menu li');

  console.log(conteudo); 

  itensMenu.forEach(item => {
    item.addEventListener('click', () => {
      const opcao = item.getAttribute('data-opcao');

      if (opcao === 'home') {
        conteudo.innerHTML = `<h1>Home</h1><p>Este é o conteúdo da Home.</p>`;
      }

      if (opcao === 'sobre') {
        conteudo.innerHTML = `<h1>Sobre</h1><p>Informações sobre o site.</p>`;
      }

      if (opcao === 'projetos') {
        conteudo.innerHTML = `<h1>Projetos</h1><p>Lista de projetos.</p>`;
      }

      if (opcao === 'contato') {
        conteudo.innerHTML = `<h1>Contato</h1><p>Email: contato@exemplo.com</p>`;
      }

      if (opcao === 'fale-conosco') {
        conteudo.innerHTML = `
          <h1>Fale Conosco</h1>
          <form id="formulario-contato">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone">
            
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>
            
            <button type="submit">Enviar</button>
          </form>
          <div id="resposta-formulario"></div>
        `;

        document.getElementById('formulario-contato').addEventListener('submit', enviarFormulario);
      }
    });
  });
});
