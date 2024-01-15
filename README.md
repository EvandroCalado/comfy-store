# Comfy Store

Bem-vindo ao Comfy Store! Este é um projeto de e-commerce construído em React com Vite, utilizando Tailwind CSS com Daisy UI para estilização, TypeScript para tipagem, Redux para gerenciamento de estado e React Query para facilitar o gerenciamento de dados assíncronos. Possue integração com API feita com strapi CMS.

## Como começar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/evandrocalado/comfy-store.git
   cd comfy-store
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o projeto:**

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o Comfy Store.

## Tecnologias utilizadas

- **React:** Biblioteca de construção de interfaces de usuário.
- **Vite:** Build tool rápida e configurável para projetos web modernos.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida e eficiente.
- **Daisy UI:** Conjunto de componentes prontos para uso que se integram perfeitamente ao Tailwind CSS.
- **TypeScript:** Adiciona tipagem estática ao JavaScript para uma experiência de desenvolvimento mais robusta.
- **Redux:** Biblioteca para gerenciamento de estado na aplicação.
- **React Query:** Facilita o gerenciamento de dados assíncronos no React.

## Estrutura do projeto

```
comfy-store/
│
├── src/
|   ├── api/                  # Actions e loaders
│   ├── components/           # Componentes reutilizáveis
│   ├── features/             # Configuração do Redux
│   ├── pages/                # Páginas da aplicação
│   ├── types/                # Tipagens
│   ├── utils/                # Funções utilitárias
│   └── App.tsx               # Ponto de entrada da aplicação
│
├── public/                   # Recursos estáticos e HTML base
├── .editorconfig             # Configurações do editor
├── .gitignore                # Arquivos a serem ignorados pelo Git
├── .env.local                # Para variáveis de ambiente
├── tsconfig.json             # Configuração do TypeScript
├── vite.config.js            # Configuração do Vite
├── package.json              # Dependências e scripts do projeto
├── .eslintrc.js              # Configuração do ESLint
├── .prettierrc               # Configuração do Prettier
└── README.md                 # Documentação do projeto (você está aqui!)
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Divirta-se explorando e construindo com o Comfy Store! 🚀
