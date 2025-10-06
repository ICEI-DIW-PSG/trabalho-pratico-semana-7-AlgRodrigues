const dados = {
            "autores": [
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
            "personagens": [], 
            "obrasPrincipais": [],
            "rodape": "(c) Copyright 2025 - Todos os direitos reservados"
        };
        
        const headerData = {
            "brandName": "Encanto",
            "searchPlaceholder": "Pesquisa",
            "searchButtonText": "OK",
            "mainLinks": [
                { "text": "Home", "href": "index.html", "isCurrent": true, "type": "link" },
                {
                    "text": "Menu",
                    "type": "dropdown",
                    "links": [
                        { "text": "Autores", "href": "index.html", "type": "item" },
                        { "text": "Obras", "href": "obras.html", "type": "item" },
                        { "type": "divider" },
                        { "text": "Personagens", "href": "personagens.html", "type": "item" }
                    ]
                },
                { "text": "Login", "href": "#", "isCurrent": false, "type": "link" }
            ]
        };
 const dadosobras = {
            "autores": [],
            "personagens": [], 
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
        };

        function renderizarHeader() {
            const container = document.getElementById('header-container');

            const linksHtml = headerData.mainLinks.map(link => {
                let currentLink = link;

                if (link.text === 'Home') {
                    currentLink.isCurrent = true;
                } else if (link.type === 'dropdown') {
                    currentLink.links = link.links.map(item => ({ 
                        ...item, 
                        isCurrent: (item.text === 'Autores') 
                    }));
                }

                if (currentLink.type === 'link') {
                    const activeClass = currentLink.isCurrent ? 'active' : '';
                    const ariaCurrent = currentLink.isCurrent ? 'aria-current="page"' : '';
                    return `
                        <li class="nav-item">
                            <a class="nav-link ${activeClass}" ${ariaCurrent} href="${currentLink.href}">
                                ${currentLink.text}
                            </a>
                        </li>
                    `;
                } else if (currentLink.type === 'dropdown') {
                    const dropdownItems = currentLink.links.map(item => {
                        if (item.type === 'item') {
                            return `<li><a class="dropdown-item" href="${item.href}">${item.text}</a></li>`;
                        } else if (item.type === 'divider') {
                            return `<li><hr class="dropdown-divider"></li>`;
                        }
                    }).join('');
                    
                    return `
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ${currentLink.text}
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

        function renderizarAutores() {
            const containerAutores = document.getElementById('container-autores');

            dados.autores.forEach(autor => {
                const listaObrasHTML = autor.obrasListadas.map(obra => `
                    <li>${obra}</li>
                `).join('');
                
                // Estrutura alterada para empilhar todos os elementos em uma única coluna (col-12)
                const htmlAutor = `
                    <section class="p-4 mt-3 bg-info-subtle border border-dark rounded-4 mb-4">
                        <div class="row">
                            <!-- Imagem (coluna única, centralizada) -->
                            <div class="col-12 text-center mb-4">
                                <img src="${autor.imagem}" alt="${autor.altImagem}" class="img-fluid rounded-4" style="max-height: 300px; width: auto;">
                            </div>
                            
                            <!-- Informações (coluna única) -->
                            <div class="col-12 mb-4">
                                <h2 class="text-center">${autor.nome}</h2>
                                <p class="text-muted text-center">${autor.nacionalidade}</p>
                                <p>${autor.descricao}</p>
                            </div>
                            
                            <!-- Obras Listadas (coluna única) -->
                            <div class="col-12">
                                <h3>Obras:</h3>
                                <ol class="list-group list-group-flush list-group-numbered">
                                    ${listaObrasHTML}
                                </ol>
                            </div>
                        </div>
                    </section>
                `;
                containerAutores.insertAdjacentHTML('beforeend', htmlAutor);
            });
        }

        function renderizarRodape() {
            const rodape = document.getElementById('rodape');
            if (rodape) {
                rodape.textContent = dados.rodape;
            }
        }

        function carregarConteudo() {
            renderizarHeader();
            renderizarAutores();
            renderizarRodape();
        }

        document.addEventListener('DOMContentLoaded', carregarConteudo);