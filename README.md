<p align="center">

  <img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/28bdef98-c809-4c60-8cc2-7a4725d38933" alt="Logo" />
</p>

<h1 align="center"> Comfy Store </h1>

<p align="center">
  <b> Loja online </b></br>
  <sub> E-commerce construído em React com Vite, Tailwind CSS com Daisy UI, TypeScript, Redux e React Query.
  <sub>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀Bem-vindo ao Comfy Store! Este é um projeto de e-commerce construído em React com Vite, utilizando Tailwind CSS com Daisy UI para estilização, TypeScript para tipagem, Redux para gerenciamento de estado e React Query para facilitar o gerenciamento de dados assíncronos. Possue integração com API feita com strapi CMS.***

<br/>


<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/> 

## Front-end

</summary>

### 🤳🏻 Mobile


Home | Sobre | Entrar | Registro |
|---|---|---|---|
<img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/978cdf95-361d-43dc-9142-42e9ec77cebc" width="330" height="350" /> | <img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/6535eb10-8fd9-463d-b05d-f0aa844b3f87" width="330" height="350" />| <img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/4dbd0fc0-358f-434c-b511-1e404c60c8ef" width="330" height="350" />| <img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/595bd568-ffcb-48fb-b267-2393863c3613" width="330" height="350" />
  
  
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


### 💻 Desktop


Home | Produtos | Carrinho |
|---|---|---|
<img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/2fca71d6-22a7-4af0-b837-f4ddadd58e29" width="900" height="150" /> | <img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/e03f3d85-fbf6-444f-b815-11e2a7f75410" width="900" height="150" /> | <img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/af318e4c-44d5-427e-acc9-c0c540f1200c" width="900" height="150" />


<br/>
 

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...

  
<br />   

## `📖 Instalação`

<br />

> Com o git instalado. 

```
git clone https://github.com/EvandroCalado/comfy-store
```

<br />

> Com o node instalado. 

```
npm install
```


## `📖 Scripts` 

```JSON
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
  },

```
  

## `📖 Dependencies` 

```JSON
 "dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "@tanstack/react-query": "^4.32.6",
    "@tanstack/react-query-devtools": "^4.32.6",
    "axios": "^1.4.0",
    "dayjs": "^1.11.9",
    "lucide-react": "^0.303.0",
    "nookies": "^2.5.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1",
    "react-redux": "^8.1.2",
    "react-router-dom": "^6.14.2",
    "tailwind-merge": "^2.2.0"
  },

```

<br /> 

## `📖 devDependencies` 


```JSON
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "@testing-library/jest-dom": "^6.2.0",
    "@testing-library/react": "^14.1.2",
    "@types/jest": "^29.5.11",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.17.0",
    "@typescript-eslint/parser": "^6.17.0",
    "@vitejs/plugin-react": "^4.2.1",
    "@vitest/coverage-v8": "^1.2.0",
    "@vitest/ui": "^1.2.0",
    "autoprefixer": "^10.4.16",
    "daisyui": "^4.4.24",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.2",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "install": "^0.13.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "npm": "^10.2.5",
    "postcss": "^8.4.32",
    "prettier": "^3.1.1",
    "prettier-plugin-tailwindcss": "^0.5.10",
    "redux-mock-store": "^1.5.4",
    "tailwindcss": "^3.4.0",
    "ts-jest": "^29.1.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "vitest": "^1.2.0"
  }

```


<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br />

  ### ***⠀⠀⠀⠀Atualmente, estou enfrentando desafios ao testar o código com o React Router Dom usando os novos loaders e actions. Além disso, estou encontrando dificuldades para integrar o Storybook com a DaysiUi. Estou ciente desses problemas e pretendo abordá-los em breve para garantir um funcionamento adequado. Agradeço a compreensão e paciência, e qualquer contribuição ou sugestão será bem-vinda.***


<br /> 

- [ ] ***- Testa todo o código.*** 
- [ ] ***- Adicionar Storybook para vizualização dos componentes com DaysiUI*** 


<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<br />


<div > 

| [<img src="https://github.com/EvandroCalado/comfy-store/assets/110628201/67c2c7ab-bfc1-441f-a960-ec698fb99559" width=250 ><br><sub> Evandro Calado </sub>](https://www.linkedin.com/in/evandro-calado/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Me chama no [linkedin](https://www.linkedin.com/in/evandro-calado/) 😁*** | 
|---|---|


</div> 
