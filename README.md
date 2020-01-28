# INSTRUÇÃO/RECOMENDAÇÕES DO DESENVOLVEDOR

Durante o desenvolvimento foi analisado que o backend da aplicação não aceita requisições via browser, que é o core dos frameworks front-end. Limitando assim o acesso via cabeçalho. Com o conhecido erro CORS.

Isso se dá pois, o token desta aplicação é único e não é gerado via um login único como padrão, sendo assim, poderia ser facilmente visualizado e copiado via requisição do cabeçalho. 

Para manter a arquitetura do projeto `IONIC` e `ANGULAR`, e tentar seguir as praticas comuns adotadas pelo front-end, foi criado 2 arquivos para intermediar a requisição. Feitos em `PHP`, assim o token é protegido durante as requisições. 

Para compreender melhor, invés de abrir o proxy do ionic e angular, foi feito um novo backend para tratar a aplicação e devolver de forma aceitável e sem perder ou expor a segurança o token.

# Arquivo de backend

Na pasta: `backend` arquivos `index.php` e `clan.php` foram commitados em um ambiente funcional hospedado no site rubensoul.com.br/test 

# Testes e funcionalidades

Testado em simulador IOS e Android;
Testado em browser;

# Testar em browser

comando: `ionic serve`

# Recrutamento 7COMm (frontend-2C2C1)

O `recrutamento-frontend-2c2c1` é um teste aplicado pela [7COMm Serviços e Soluções em TI](https://7comm.com.br) para recrutamento de profissionais `frontend`.

## Como funciona a avaliação

O candidato deve fazer um `fork` deste repositório e implementar as funcionalidades solicitadas conforme julgar adequado. A entrega será feita através do repoistório do candidato, que deverá ser informado por email quando concluída a implementação.

## Como será a avaliação

O nível de exigência na avaliação vai variar conforme a senioridade e a oportunidade disponível. O objetivo deste teste é avaliar, primariamente, os seguintes aspectos:

- Uso do `git`, analizando o histórico de commits;
- Aderência a boas prátias e convenções, tanto de arquitetura quanto codificação e nomeação de artefatos;
- Legibilidade do código e nível de complexidade adotada;
- Entre outros.

Consideradas essas questões, o time técnico da [7COMm Serviços e Soluções em TI](https://7comm.com.br) irá avaliar a implementação entregue pelo candidato e entrará em contato para agradecer a particiapação ou para marcar uma entrevista técnica.

## O que implementar

Desenvolver uma aplicação `SPA` responsiva para busca, listagem e detalhamento de clãs do [`Clash Royale`](https://clashroyale.com/). Este detalhamento deve exibir:

- Nome do clã;
- Descrição;
- Imagem; e
- Lista de membros.

### Pré-requisitos

- Utilizar framework [`JavaScript`](https://www.javascript.com/);
- Utilizar [`SASS`](https://sass-lang.com/), [`LESS`](http://lesscss.org/) ou similar; e
- Utilizar [`Bootstrap`](http://getbootstrap.com/) ou, preferencialmente, [`Foundation`](https://foundation.zurb.com/).

## API Clash Royale

- Documentação: [`https://docs.royaleapi.com/`](https://docs.royaleapi.com/);
- Token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc2MywiaWRlbiI6IjQ5NTYwMzg4Njc0NTE5MDQzMiIsIm1kIjp7fSwidHMiOjE1MzgyMzMxMjAxMzl9.Gf5Sz8rWWf8wcesDsTum-iKaGOK-w38zByqZaIeo3Bk`;
- Endpoint para busca de clãs: [`https://api.royaleapi.com/clan/search?name={{clanName}}`](https://api.royaleapi.com/clan/search?name={{clanName}});
- Endpoint para detalhamento do clã: [`https://api.royaleapi.com/clan/{{clanTag}}`](https://api.royaleapi.com/clan/{{clanTag}}).

O canal indicado para dúvidas é criar uma [`issue`](https://github.com/7comminformatica/recrutamento-frontend-2c2c1/issues) e entrar em contato com a empresa para informar sobre as dúvidas, afim de manter uma base de conhecimento centralizada neste repositório, onde dúvidas anteriores poderão ser pesquisadas e agilizar a resposta ao entrar em contato com a empresa.
