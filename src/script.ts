// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }

// console.log(retorno("A Game"));
// console.log(retorno(200));
// console.log(retorno(true));

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];

// function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
//   return lista.slice(0, 5);
// }

// console.log(firstFive(numeros));
// console.log(firstFive(frutas));

// function notNull<T>(arg: T) {
//   if (arg !== null) return arg;
//   else return null;
// }

// notNull("Bruno")?.toLocaleLowerCase();
// notNull(2)?.toFixed();

// function tipoDado<T>(a: T) {
//   const resultado = {
//     dado: a,
//     tipo: typeof a,
//   };
//   console.log(resultado);

//   return resultado;
// }

// tipoDado("teste");

// function extractText<Tipo extends HTMLElement>(el: Tipo) {
//   return {
//     texto: el.innerText,
//     el,
//   };
// }

// const link = document.querySelector("a");

// if (link) {
//   console.log(extractText(link).el.href);
// }

// const link = document.querySelector<HTMLAnchorElement>(".link");

// async function getData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   return await response.json();
// }

// interface Notebook {
//   nome: string;
//   preco: number;
// }

// async function handleData() {
//   const notebook = await getData<Notebook>(
//     "https://api.origamid.dev/json/notebook.json",
//   );
//   console.log(notebook);
// }

// handleData();

// type Callback = (event: MouseEvent) => void;

// function abortar(mensagem: string): never {
//   throw new Error("Um erro ocorreu");
// }

// abortar("t");
// console.log("teste");

// interface Quadrado {
//   lado: number;
//   perimetro(lado: number): number;
// }

// function calcular(forma: Quadrado) {
//   forma.perimetro
// }

// function normalizar(valor: string[]): string[];
// function normalizar(valor: string): string;
// function normalizar(valor: string | string[]): string | string[] {
//   if (typeof valor === "string") {
//     return valor.trim().toLowerCase();
//   } else {
//     return valor.map((item) => item.trim().toLocaleLowerCase());
//   }
// }

// console.log(normalizar(" Produto ").toUpperCase());
// console.log(normalizar([" Banana ", "UVA     "]));

// function $(seletor: "a"): HTMLAnchorElement | null;
// function $(seletor: "video"): HTMLVideoElement | null;
// function $(seletor: string): Element | null;
// function $(seletor: string): Element | null {
//   return document.querySelector(seletor);
// }

// $("a");
// $("video");
// $(".item");

// function arredondarValor(valor: string): string;
// function arredondarValor(valor: number): number;
// function arredondarValor(valor: number | string): number | string {
//   if (typeof valor === "string") {
//     return Math.ceil(+valor).toString();
//   } else {
//     return Math.ceil(valor);
//   }
// }

// console.log(arredondarValor("3.7"));
// console.log(arredondarValor(6.2));

// function typeGuard(value: any) {
//   if (typeof value === "string") {
//     return value.toLowerCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }

// typeGuard(200);
// typeGuard("333");
// typeGuard(document.body);

// const obj = {
//   nome: "Origamid",
// };

// if ("nome" in obj) {
//   console.log("sim");
// }

// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }

// interface Produto {
//   nome: string;
//   preco: number;
// }

// function handleProduto(data: Produto) {
//   if ("preco" in data) {
//     document.body.innerHTML += `
//     <p>Nome: ${data.nome}</p>
//     <p>Preço: R$ ${data.preco}</p>
//     `;
//   }
// }

// fetchProduto();

// function typeGuard(value: unknown) {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   }
//   if (typeof value === "number") {
//     return value.toFixed();
//   }
//   if (value instanceof HTMLElement) {
//     return value.innerText;
//   }
// }

// console.log(typeGuard("origamid"));
// console.log(typeGuard(200));
// console.log(typeGuard(document.body));

// async function fetchCursos() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// }

// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log("É instância de array");
//   }
//   if (Array.isArray(data)) {
//     console.log("É array");
//   }
// }

// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }

// function handleData(data: unknown) {
//   if (isString(data)) {
//     data.toLowerCase();
//   }
// }

// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const json = await response.json();
//   handleProduto(json);
// }
// fetchProduto();

// interface Produto {
//   nome: string;
//   preco: number;
//   descricao: string;
// }

// function isProduto(value: unknown): value is Produto {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "preco" in value &&
//     "descricao" in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     console.log(data);
//   }
// }

// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

// async function fetchApi() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const json = await response.json();
//   handleCursos(json);
// }

// interface Curso {
//   nome: string;
//   aulas: number;
//   gratuito: boolean;
//   horas: number;
//   idAulas: number[];
//   nivel: "iniciante" | "avancado";
//   tags: string[];
// }
// fetchApi();

// function isCurso(value: unknown): value is Curso {
//   if (
//     value &&
//     typeof value === "object" &&
//     "nome" in value &&
//     "horas" in value &&
//     "tags" in value
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function handleCursos(data: unknown) {
//   if (Array.isArray(data))
//     data.filter(isCurso).forEach((item) => {
//       document.body.innerHTML += `
//       <div>
//         <h2>Nome: ${item.nome}</h2>
//         <p>Horas: ${item.horas}</p>
//         <p>Tags: ${item.tags.join(", ")}</p>
//       </div>
//       `;
//     });
// }

// interface Produto {
//   nome: string;
//   preco: number;
// }

// async function fetchProduto() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   return response.json() as Promise<Produto>;
// }

// async function handleProduto() {
//   const produto = await fetchProduto();
//   console.log(produto);
// }
// handleProduto();

// const video = document.querySelector("video")!;

// video.volume;

// const video1 = document.querySelector(".player") as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector(".player");
// const video3 = document.querySelector<HTMLVideoElement>(".player");
// const video4 = document.querySelector(".player");

// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;

// const { body }: { body: HTMLElement } = document;

// interface Produto {
//   nome: string;
//   preco: number;
// }

// function handleData({ nome, preco }: Produto) {
//   nome.includes("book");
//   preco.toFixed();
// }

// handleData({
//   nome: "notebook",
//   preco: 1000,
// });

// function handleClick({
//   currentTarget,
//   pageX,
// }: {
//   currentTarget: EventTarget | null;
//   pageX: number;
// }) {
//   if (currentTarget instanceof HTMLElement) {
//     currentTarget.innerHTML = `<h1>Mouse click em: ${pageX}</h1>`;
//   }
// }

// document.documentElement.addEventListener("click", handleClick);

// function comparar(tipo: "menor" | "maior", ...numeros: number[]) {
//   if (tipo === "menor") {
//     return Math.min(...numeros);
//   }
//   if (tipo === "maior") {
//     return Math.max(...numeros);
//   }
// }

// console.log(comparar("menor", 3, 4, 5, 6, 7, 20, 10, 30, 1));
// console.log(comparar("maior", 3, 4, 5, 6, 7, 20, 10, 30, 1));

// type Produto = {
//   preco: number;
// };

// type Carro = {
//   rodas: number;
//   portas: number;
// };

// function handleProdutoCarro(dados: Carro & Produto) {
//   dados.rodas;
//   dados.portas;
//   dados.preco;
// }

// handleProdutoCarro({
//   preco: 20000,
//   rodas: 4,
//   portas: 5,
// });

// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

// interface UserData {
//   nome?: string;
//   email?: string;
//   cpf?: number;
// }

// interface Window {
//   userData: any;
// }

// window.userData = {};

// function isUserData(obj: unknown): obj is UserData {
//   if (
//     obj &&
//     typeof obj === "object" &&
//     ("nome" in obj || "email" in obj || "cpf" in obj)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validJSON(str: string) {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     return false;
//   }
//   return true;
// }

// function loadLocalStorage() {
//   const localUserData = localStorage.getItem("UserData");
//   if (localUserData && validJSON(localUserData)) {
//     const UserData = JSON.parse(localUserData);
//     if (isUserData(UserData)) {
//       Object.entries(UserData).forEach(([key, value]) => {
//         const input = document.getElementById(key);
//         if (input instanceof HTMLInputElement) {
//           input.value = value;
//           window.userData[key] = value;
//         }
//       });
//     }
//   }
// }

// loadLocalStorage();

// const form = document.querySelector<HTMLElement>("#form");

// function handleInput({ target }: KeyboardEvent) {
//   if (target instanceof HTMLInputElement) {
//     window.userData[target.id] = target.value;
//     localStorage.setItem("UserData", JSON.stringify(window.userData));
//   }
// }

// form?.addEventListener("keyup", handleInput);

// const produto1: (string | number)[] = ['Notebook', 2500];
// const produto2: [string, number] = ['Notebook', 2500];

// const nome1 = produto1[0]; // string | number
// const nome2 = produto2[0]; // string

// const [nome, preco] = produto2;

// function getText(selector: string) {
//   const el = document.querySelector<HTMLElement>(selector);
//   if (el) {
//     return [el, el.innerText] as const;
//   } else {
//     return null;
//   }
// }

// const button = getText('button');

// if (button) {
//   const [buttonElement, buttonText] = button;
// }

// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

// async function fetchAPI() {
//   const response = await fetch("https://api.origamid.dev/json/vendas.json");
//   const json = await response.json();
//   somarVendas(json);
// }

// interface ProdutoDetalhes {
//   marca: string;
//   cor: string;
// }

// type Venda = [string, number, string, ProdutoDetalhes];

// function somarVendas(vendas: Venda[]) {
//   let total = vendas.reduce((total, venda) => {
//     return total + venda[1];
//   }, 0);

//   document.body.innerHTML += `<p>Total: R$ ${total}</p>`;
// }

// fetchAPI();

// function coordenadas(x: number, y: number) {
//   return { x, y };
// }

// let chave: typeof coordenadas;

// chave = (x: number, y: number) => {
//   return { x, y };
// };

// interface Elementos {
//   a: HTMLAnchorElement;
//   video: HTMLVideoElement;
//   div: HTMLElement;
//   body: HTMLBodyElement;
//   audio: HTMLAudioElement;
// }

// function selecionar<Chave extends keyof Elementos>(
//   seletor: Chave,
// ): null | Elementos[Chave] {
//   return document.querySelector(seletor);
// }

// selecionar('body');

// async function fetchData<T>(url: string): Promise<T> {
//   const base = "https://api.origamid.dev/json";
//   const response = await fetch(base + url);
//   return await response.json();
// }

// interface Jogo {
//   nome: string;
//   ano: number;
//   desenvolvedora: string;
//   plataformas: string[];
// }

// interface Livro {
//   nome: string;
//   ano: number;
//   autor: string;
//   paginas: number;
// }

// function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
//   if (obj && typeof obj === "object" && key in obj) {
//     return true;
//   } else {
//     return false;
//   }
// }

// async function handleData() {
//   const jogo = await fetchData("/jogo.json");
//   if (checkInterface<Jogo>(jogo, "desenvolvedora")) {
//     console.log(jogo.desenvolvedora.toUpperCase());
//   }
//   const livro = await fetchData("/livro.json");
//   if (checkInterface<Livro>(livro, "autor")) {
//     console.log(livro.autor);
//   }
// }

// handleData();

// interface Produto {
//   nome: string;
//   quantidade: number;
// }

// const produto1 = {
//   nome: "Notebook",
//   quantidade: 10,
//   cor: "Azul",
// };

// const produto2 = {
//   nome: "Geladeira",
//   quantidade: 30,
//   freezer: true,
// };

// function mostrarQuantidade(produto: Produto) {
//   console.log(produto.quantidade + 20);
// }

// mostrarQuantidade(produto1);
// mostrarQuantidade(produto2);

// function mostrarQuantidadePartial(produto: Partial<Produto>) {
//   if (produto.quantidade) console.log(produto.quantidade + 20);
// }

// mostrarQuantidadePartial(produto1);
// mostrarQuantidadePartial(produto2);

// interface Post {
//   titulo: string;
//   visualizacoes: number;
//   tags: string[];
//   [key: string]: unknown;
// }

// const artigo: Post = {
//   titulo: "Como aprender HTML",
//   visualizacoes: 3000,
//   tags: ["HTML", "Front end"],
//   autor: "Bruno",
// };

// interface ObjetoLiteral {
//   [key: string]: unknown;
// }

// type ObjetoLiteral2 = Record<string, unknown>;

// function mostrarTitulo(obj: ObjetoLiteral2) {
//   if ("titulo" in obj) {
//     console.log(obj.titulo);
//   }
// }
// mostrarTitulo("string");

// export const livro: Produto = {
//   nome: "O senhor dos Anéis",
//   preco: 99.9,
// };

// console.log(livro);

// declare global {
//   interface Usuario {
//     nome: string;
//     id: number;
//   }
// }

const body = $("body");
body.addClass("ativo");

_.intersection([1, 2, 3, 5, 6], [2, 3, 1, 9]);

declare const Vimeo: any;
const iframe = document.getElementById("vimeo");
const player = new Vimeo.Player(iframe);

console.log(player);
