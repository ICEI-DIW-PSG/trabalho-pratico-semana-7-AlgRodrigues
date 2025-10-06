const headerData = {
            "brandName": "Encanto",
            "searchPlaceholder": "Pesquisa",
            "searchButtonText": "OK",
            "mainLinks": [
                { "text": "Home", "href": "#", "isCurrent": true, "type": "link" },
                {
                    "text": "Menu",
                    "type": "dropdown",
                    "links": [
                        { "text": "Autores", "href": "#", "type": "item" },
                        { "text": "Obras", "href": "#", "type": "item" },
                        { "type": "divider" },
                        { "text": "Personagens", "href": "#", "type": "item" }
                    ]
                },
                { "text": "Login", "href": "#", "isCurrent": false, "type": "link" }
            ]
        };

const dados = {
    "autores":  [
    {
      "nome": "J.K. Rowling",
      "nacionalidade": "Britânica",
      "descricao": "Autora britânica, conhecida mundialmente por criar a série de livros \"Harry Potter\". Sua obra teve um impacto significativo na literatura infantojuvenil e na cultura popular. ",
      "imagem": "img/Harry Potter/J.K.jpg",
      "altImagem": "J.K. Rowling",
      "obrasListadas": [
        "Harry Potter e a Pedra Filosofal",
        "Harry Potter e a Câmara Secreta",
        "Harry Potter e o Prisioneiro de Azkaban",
        "Harry Potter e o Cálice de Fogo",
        "Harry Potter e a Ordem da Fênix",
        "Harry Potter e o Enigma do Príncipe",
        "Harry Potter e as Relíquias da Morte"
      ]
    },
    {
      "nome": "Tite Kubo",
      "nacionalidade": "Japonês",
      "descricao": "Autor japonês de mangás, mais conhecido por criar a série \"Bleach\". Sua obra é famosa por suas batalhas intensas, personagens cativantes e um enredo complexo que envolve o mundo dos espíritos e dos Ceifadores de Almas.",
      "imagem": "img/Bleach/Tite Kubo.jpg",
      "altImagem": "Tite Kubo",
      "obrasListadas": [
        "Bleach",
        "Zombiepowder.",
        "Burn the Witch"
      ]
    }
  ],
  "personagens": [
    {
      "nome": "Ichigo Kurosaki",
      "obra": "Bleach",
      "descricao": "Personagem principal do anime/mangá Bleach, criado por Tite Kubo. É um adolescente que acidentalmente obtém os poderes de um Ceifador de Almas.",
      "imagem": "img/Bleach/Ichigo.jpg",
      "altImagem": "Ichigo Kurosaki"
    },
    {
      "nome": "Harry Potter",
      "obra": "Harry Potter",
      "descricao": "Personagem principal da série de livros \"Harry Potter\", escrita por J.K. Rowling. É um jovem bruxo que descobre sua herança mágica e frequenta a Escola de Magia e Bruxaria de Hogwarts.",
      "imagem": "img/Harry Potter/Harry.jpg",
      "altImagem": "Harry Potter"
    }
  ],

  "obrasPrincipais": [
    {
      "titulo": "Harry Potter",
      "autor": "J.K. Rowling",
      "status": "Completo",
      "imagem": "img/Harry Potter/Capa.jpg",
      "altImagem": "Emblema de Hogwarts"
    },
    {
      "titulo": "Bleach",
      "autor": "Tite Kubo",
      "status": "Completo",
      "imagem": "img/Bleach/Capa.jpg",
      "altImagem": "Capa de Bleach"
    }
  ],
  "rodape": "(c) Copyright 2025 - Todos os direitos reservados"
}

function renderizarHeader() {
            const container = document.getElementById('header-container');

            const linksHtml = headerData.mainLinks.map(link => {
                if (link.type === 'link') {
                    const activeClass = link.isCurrent ? 'active' : '';
                    const ariaCurrent = link.isCurrent ? 'aria-current="page"' : '';
                    return `
                        <li class="nav-item">
                            <a class="nav-link ${activeClass}" ${ariaCurrent} href="${link.href}">
                                ${link.text}
                            </a>
                        </li>
                    `;
                } else if (link.type === 'dropdown') {
                    const dropdownItems = link.links.map(item => {
                        if (item.type === 'item') {
                            return `<li><a class="dropdown-item" href="${item.href}">${item.text}</a></li>`;
                        } else if (item.type === 'divider') {
                            return `<li><hr class="dropdown-divider"></li>`;
                        }
                    }).join('');
                    
                    return `
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ${link.text}
                            </a>
                            <ul class="dropdown-menu">
                                ${dropdownItems}
                            </ul>
                        </li>
                    `;
                }
                return '';
            }).join('');

            const headerHtml = `
                <header class="containe-fluid">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <h1 class="navbar-brand">${headerData.brandName}</h1>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    ${linksHtml}
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="${headerData.searchPlaceholder}" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">${headerData.searchButtonText}</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
            `;

            container.insertAdjacentHTML('beforeend', headerHtml);
        }

        document.addEventListener('DOMContentLoaded', renderizarHeader);
        
function carregarCards() {
    const containerAutores = document.getElementById('container-autores');
    const containerPersonagens = document.getElementById('container-personagens');
    const containerObras = document.getElementById('container-obras');
    const rodape = document.getElementById('rodape');
}

function renderizarAutores() {
    
    const containerAutores = document.getElementById('container-autores');

    
    dados.autores.forEach(autor => {
        
        
        const listaObrasHTML = autor.obrasListadas.map(obra => `
            <li>${obra}</li>
        `).join('');

        
        const htmlAutor = `
            <section class="row align-items-start p-3 mt-3 bg-info-subtle border border-dark rounded-4">
                
                <div class="col-md-3">
                    <img src="${autor.imagem}" alt="${autor.altImagem}" height="300px" width="170px">
                </div>
                
                <div class="col-md-5">
                    <h2>${autor.nome}</h2>
                    <p>${autor.descricao}</p>
                </div>
                
                <div class="col-md-4">
                    <h3>Obras:</h3>
                    <ol>
                        ${listaObrasHTML}
                    </ol>
                </div>
            </section>
        `;

        containerAutores.insertAdjacentHTML('beforeend', htmlAutor);
    });
}

function renderizarAutores() {
            const containerAutores = document.getElementById('container-autores');

            dados.autores.forEach(autor => {
                const listaObrasHTML = autor.obrasListadas.map(obra => `
                    <li>${obra}</li>
                `).join('');
                
                const htmlAutor = `
                    <section class="row align-items-start p-3 mt-3 bg-info-subtle border border-dark rounded-4 mb-2">
                        <div class="col-md-3">
                            <img src="${autor.imagem}" alt="${autor.altImagem}" height="300px" width="170px">
                        </div>
                        <div class="col-md-5">
                            <h2>${autor.nome}</h2>
                            <p>${autor.descricao}</p>
                        </div>
                        <div class="col-md-4">
                            <h3>Obras:</h3>
                            <ol>
                                ${listaObrasHTML}
                            </ol>
                        </div>
                    </section>
                `;
                containerAutores.insertAdjacentHTML('beforeend', htmlAutor);
            });
        }

        function renderizarPersonagens() {
            const container = document.getElementById('container-personagens');
            
            dados.personagens.forEach(personagem => {
                const htmlCard = `
                    <article class="row align-items-start p-3 mb-2">  
                        <div class="card bg-primary-subtle border border-dark rounded-4" style="width: 18rem;">
                            <img src="${personagem.imagem}" class="card-img-top mt-1 rounded-4" alt="${personagem.altImagem}" height="150px">
                            <div class="card-body">
                                <h4 class="card-title">${personagem.nome}</h4>
                                <p class="card-text">${personagem.descricao}</p>
                            </div>
                        </div>    
                    </article>
                `;
                container.insertAdjacentHTML('beforeend', htmlCard);
            });
        }

        function renderizarObras() {
            const containerObras = document.getElementById('container-obras');
            dados.obrasPrincipais.forEach(obra => {
                const htmlObra = `
                    <article class="row align-items-start p-3 mt-1 bg-primary-subtle border border-dark rounded-4 mb-2">
                        <div class="col-md-4">
                            <img src="${obra.imagem}" alt="${obra.altImagem}" height="150px" width="100px">
                        </div>
                        <div class="col-md-8">
                            <h5>${obra.titulo}</h5>
                            <p class="mb-0 small">${obra.autor}</p>
                            <p class="mb-0 small">Status: ${obra.status}</p>
                        </div>
                    </article>
                `;
                containerObras.insertAdjacentHTML('beforeend', htmlObra);
            });
        }

        function renderizarRodape() {
            const rodape = document.getElementById('rodape');
            if (rodape) {
                rodape.textContent = dados.rodape;
            }
        }

        function carregarConteudo() {
            renderizarAutores();
            renderizarPersonagens();
            renderizarObras();
            renderizarRodape();
        }

        document.addEventListener('DOMContentLoaded', carregarConteudo);