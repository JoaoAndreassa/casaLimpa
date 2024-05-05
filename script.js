function toggleDescricao(botao, produtoID, textoCompleto) {
    var descricao = botao.previousElementSibling; // Encontra o elemento irmão anterior (p.descricao)
    descricao.classList.toggle('expandido'); // Adiciona ou remove a classe 'expandido' para expandir ou contrair a descrição
    if (descricao.classList.contains('expandido')) {
      botao.innerText = 'Leia Menos'; // Altera o texto do botão para 'Leia Menos' quando a descrição é expandida
    } else {
      botao.innerText = 'Leia Mais'; // Altera o texto do botão para 'Leia Mais' quando a descrição é contraída
    }
    
    // Modificar o texto da descrição do produto para mostrar apenas parte do texto quando recolhido
    var descricaoProduto = document.getElementById(produtoID).querySelector('.descricao');
    var textoRecortado = textoCompleto.substring(0, 100) + '...'; // Recorta o texto para mostrar apenas os primeiros 100 caracteres
    
    if (!descricao.classList.contains('expandido')) {
      descricaoProduto.innerText = textoRecortado; // Se a descrição estiver recolhida, mostra apenas parte do texto
    } else {
      descricaoProduto.innerText = textoCompleto; // Se a descrição estiver expandida, mostra o texto completo
    }
  }
  