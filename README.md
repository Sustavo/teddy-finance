# **README**
## OBS
Desculpe por não ter feito a padronização de commit, não tinha me atentado a esse detalhe no test, porém possuo outro projeto bem interessante que fiz em react native, onde em 90% dos commits eu segui uma padronização de commit, caso queira dar uma olhada, o projeto é o: https://github.com/Sustavo/Receite-Me/

## 📦 **Descrição do Projeto**

Este projeto é uma aplicação de gerenciamento de clientes desenvolvida em **React Native** com TypeScript. A aplicação permite a criação, edição, exclusão e seleção de clientes, além de funcionalidades específicas como:

- Exibir os **clientes selecionados** em uma segunda tela.
- **Remover todos** os clientes selecionados da lista de seleção.
- Persistência de dados usando **AsyncStorage**.
- Integração com uma API para CRUD de clientes.

---

## 🚀 **Funcionalidades**

1. **Gerenciamento de Clientes**:
   - Criar, editar e excluir clientes.
   - Exibir clientes em um grid de **cards**, com ícones para ações.
   
2. **Seleção de Clientes**:
   - Selecionar clientes usando um ícone de **"+"**.
   - Exibir os clientes selecionados em uma segunda tela.
   - Voltar clientes individualmente ou remover todos de uma vez da lista de seleção.

3. **Modal de Confirmação**:
   - Modal para confirmação de ações, como exclusão de clientes.

4. **Persistência de Seleção**:
   - Os clientes selecionados são persistidos em **AsyncStorage**, permitindo que sejam carregados mesmo após recarregar a página.

---

## 📥 **Instalação**

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Navegue até a pasta do projeto:

```bash
cd nome-do-projeto
```
3. Instale as dependências:

```bash
# Usando npm
npm install
```

4. Instale o Expo Go:
**Possua o expo Go em seu celular**


## 📜 Scripts Disponíveis
### Rodar a Aplicação
Para iniciar a aplicação em modo de desenvolvimento:

```bash
# Usando npm
npx expo start

# Limpando o cache
npx expo start -c

```

## 🔍 Funcionalidades e Como Testá-las
1. Criar Cliente
- Clique no botão "Criar Cliente" na tela principal.
- Preencha o formulário da modal com os dados do cliente e clique em "Criar Cliente" dentro do modal.
- O cliente será adicionado à lista.
2. Editar Cliente
- Clique no ícone de edição (lápis) em qualquer card.
- A modal será aberta com os dados do cliente preenchidos.
- Edite as informações e clique em "Atualizar Cliente".
3. Excluir Cliente
- Clique no ícone de lixeira em qualquer card.
- Confirme a exclusão na modal que será exibida.
4. Selecionar Cliente
- Clique no ícone de "+" em qualquer card.
- O cliente será removido do "Clientes Encontrados" e passará a ser armazenado no asyncStorage
5. Ver Clientes Selecionados
- Clique no ícone no canto superior direito.
- A tela exibirá todos os clientes selecionados.
6. Remover Clientes Selecionados
- Clique no ícone de "Minus"
- o cliente será removido dos selecionados e voltará para os clientes encontrados 
7. Remover Todos os Clientes Selecionados
- Na tela de Clientes Selecionados, clique em "Limpar clientes selecionados".
- Todos os clientes serão removidos sem voltar para os clientes encontrados.

## 🗂️ Estrutura do Projeto
```bash
src/
├───@types
├───api
│   └───user
├───assets
├───components
│   ├───Button
│   ├───ClientComponent
│   ├───Header
│   ├───Input
│   ├───Modals
│   │   ├───ClientModal
│   │   └───DeleteClientModal
│   └───Pagination
├───global
├───hooks
│   ├───asyncUser
│   └───user
├───pages
│   ├───main
│   ├───products
│   ├───SelectedClients
│   └───welcome
├───routes
└───utils
    ├───asyncStorage
    └───pagination
App.tsx
index.tsx   
```

## 🛠️ Tecnologias Utilizadas
- React com TypeScript
- Styled Components
- AsyncStorage
- ReactQuery
- ReactHookForm
- Axios