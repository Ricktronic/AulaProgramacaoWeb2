export const templates = {
  index: `
    <section class="card">
      <h2>Quem Somos</h2>
      <p>Somos uma organização sem fins lucrativos que promove ações sociais em comunidades carentes.</p>
      <figure class="media">
        <img src="imagens/logo.png" alt="Logo da organização" width="220" height="220" />
        <figcaption>A marca da nossa missão: solidariedade em ação.</figcaption>
      </figure>
    </section>
    <section class="card">
      <h2>Contato</h2>
      <address>Email: contato@organizacaosolidaria.org<br/>Telefone: (98) 99999-9999</address>
    </section>
  `,
  projetos: `
    <article class="card" id="voluntariado">
      <h2>Voluntariado</h2>
      <p>Participe dos nossos projetos como voluntário e faça a diferença!</p>
      <figure class="media">
        <img src="imagens/projetos/projetos.webp" alt="Voluntários em ação" />
        <figcaption>Voluntários em ação durante campanha comunitária.</figcaption>
      </figure>
      <span class="badge">Ação Comunitária</span>
    </article>
    <article class="card" id="doacoes">
      <h2>Como Doar</h2>
      <p>Você pode doar alimentos, roupas ou contribuir financeiramente.</p>
      <figure class="media">
        <img src="imagens/doacoes.jpg" alt="Doações sendo entregues" width="440" height="220"/>
        <figcaption>Entrega de doações para famílias carentes.</figcaption>
      </figure>
      <span class="badge">Campanha Ativa</span>
    </article>
  `,
  cadastro: `
    <form id="cadastroForm" novalidate>
      <!-- Campos iguais ao HTML original -->
      <button type="submit">Enviar</button>
    </form>
    <div class="alert" role="alert" hidden>⚠️ Preencha todos os campos obrigatórios corretamente.</div>
    <div class="toast" role="status" hidden>✅ Cadastro realizado com sucesso!</div>
  `
};
