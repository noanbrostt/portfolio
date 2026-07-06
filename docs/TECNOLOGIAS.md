# Como as tecnologias do portfolio foram implementadas

Notas técnicas para estudo. Cada seção aponta os arquivos reais do projeto, explica a mecânica por trás do efeito e o porquê das decisões.

---

## 1. Nuvem 3D de habilidades (Three.js + react-three-fiber)

**Arquivos:** `src/Components/Skills/Skills3D.jsx`, `src/Components/Skills/Skills.jsx`, estilos em `Skills.css`

### As bibliotecas

- **three**: a engine 3D em si (cena, câmera, matrizes, vetores).
- **@react-three/fiber (r3f)**: renderer do React para Three.js. Em vez de criar objetos imperativamente (`new THREE.Mesh(...)`), você declara a cena em JSX (`<group>`, `<mesh>`) e o r3f mantém o grafo de cena sincronizado com o React.
- **@react-three/drei**: utilitários prontos para r3f. Daqui vem o `<Html>`, que é a peça-chave desta implementação.

### A esfera de Fibonacci

Os ícones precisam se distribuir uniformemente numa esfera. Dividir a esfera em "linhas e colunas" (latitude/longitude) concentra pontos nos polos. A solução clássica é a **espiral de Fibonacci**: caminha-se do polo sul ao norte em passos iguais de altura (`uy`), girando um ângulo áureo a cada passo:

```js
const increment = Math.PI * (3 - Math.sqrt(5)); // ângulo áureo em radianos
for (let i = 0; i < n; i++) {
    const uy = i * offset - 1 + offset / 2;        // altura de -1 a 1
    const r = Math.sqrt(Math.max(0, 1 - uy * uy)); // raio do "anel" naquela altura
    const phi = i * increment;                     // rotação acumulada
    points.push([Math.cos(phi) * r * SPHERE_R, uy * SPHERE_R, Math.sin(phi) * r * SPHERE_R]);
}
```

Como o ângulo áureo é irracional, os pontos nunca se alinham e a distribuição fica visualmente uniforme para qualquer quantidade de skills.

### DOM dentro do 3D: o `<Html>` do drei

Os "ícones" não são texturas nem meshes: são **divs HTML de verdade** (`.skill3dItem`, com ícone do react-icons, nome e nível). O componente `<Html center>` do drei projeta a posição 3D do nó para coordenadas de tela a cada frame e posiciona a div ali com `transform`. Vantagens:

- CSS normal funciona (hover, fontes, cores por tema);
- acessibilidade e seleção de texto preservadas;
- é isso que permite ao `techFlight.js` (seção 3) encontrar os ícones com `querySelector` e ler suas posições com `getBoundingClientRect()`.

### Profundidade fingida com `useFrame`

O hook `useFrame` roda a cada frame do loop de render. Cada `IconNode` lê sua posição no mundo e converte o eixo Z num fator 0..1, que vira opacidade e escala da div:

```js
useFrame(() => {
    group.getWorldPosition(_pos);
    const t = THREE.MathUtils.clamp((_pos.z + depth) / (2 * depth), 0, 1);
    el.style.opacity = (0.3 + 0.7 * t).toFixed(3);
    el.style.transform = `scale(${(0.72 + 0.42 * t).toFixed(3)})`;
});
```

Ícones "atrás" da esfera ficam menores e translúcidos, e o cérebro lê profundidade sem nenhum cálculo de perspectiva manual. Detalhe de performance: `_pos` é um `THREE.Vector3` criado **uma vez** fora do componente e reutilizado, para não alocar um objeto novo 60 vezes por segundo por ícone.

### Rotação: automática + arrasto com inércia

O estado de giro vive num `useRef` (`spin`), fora do ciclo de render do React (mudar `ref.current` não re-renderiza nada, e o `useFrame` lê o valor mais recente a cada frame):

- **Auto-rotação**: enquanto ninguém arrasta, `rotation.y += vy` e `vy` converge suavemente para a velocidade de cruzeiro via interpolação (`vy += (alvo - vy) * 0.04`).
- **Arrasto**: `pointerdown` marca `active = true`; `pointermove` aplica o delta do mouse direto na rotação e guarda o delta como velocidade; `pointerup` libera. Como a última velocidade fica gravada, soltar o mouse deixa a esfera girando na direção do arremesso (inércia), com atrito em `vx *= 0.92`.

Os listeners de move/up ficam no `window` (não no canvas) para o arrasto não "escapar" quando o ponteiro sai do elemento.

### Integração com o resto do app

- `Skills.jsx` faz `lazy(() => import("./Skills3D"))` com `<Suspense>`: o bundle do Three.js (pesado) só é baixado se a seção renderizar a visão 3D.
- `prefers-reduced-motion` desliga a auto-rotação (`autoRotate={!reducedMotion}`).
- Cada div recebe `data-tech={skill.techId}`, o gancho que conecta a nuvem à animação de voo.

---

## 2. Carrossel mobile de "Onde comecei" (CSS scroll-snap, zero JS)

**Arquivos:** `src/Components/Projects/Projects.css` (media query `max-width: 800px`), markup em `Projects.jsx`

No desktop os mini-cards são um grid comum de 3 colunas. Abaixo de 800px o mesmo contêiner vira um carrossel **sem nenhum JavaScript**, só trocando o layout no media query:

```css
.earlyGrid {
    display: flex;
    overflow-x: auto;              /* rolagem horizontal nativa */
    scroll-snap-type: x mandatory; /* ao soltar, SEMPRE alinha num ponto de snap */
    -webkit-overflow-scrolling: touch;
    gap: 14px;
    scrollbar-width: none;         /* esconde a barra (Firefox) */
}
.earlyGrid::-webkit-scrollbar { display: none; } /* esconde a barra (Chrome/Safari) */
.earlyCard {
    flex: 0 0 82%;                 /* cada card ocupa 82% da largura, sem encolher */
    scroll-snap-align: center;     /* o ponto de snap é o centro do card */
}
```

Como funciona cada peça:

- `overflow-x: auto` cria um scroll container horizontal. Todo o comportamento de arrastar, física de desaceleração e aceleração do dedo é **do navegador**, de graça, com performance nativa.
- `scroll-snap-type: x mandatory` declara o contêiner como "imantado" no eixo X. `mandatory` significa que a rolagem nunca pode parar entre dois pontos de snap (o alternativo, `proximity`, só imanta quando já está perto).
- `scroll-snap-align: center` em cada filho define onde o ímã gruda: o centro do card alinha com o centro do contêiner.
- `flex: 0 0 82%` é o truque de UX: sobra 18% de largura, então a beirada do próximo card fica visível. Isso é o convite visual pro swipe, dispensando setas e bolinhas.
- A scrollbar é escondida nos dois motores porque o site estiliza uma scrollbar global grossa e roxa que ficaria enorme dentro do carrossel.

Custo total: ~10 linhas de CSS. Formas de mover: swipe no touch, trackpad, shift+roda do mouse, e Tab pelo teclado (focar um link fora da tela puxa o card para a vista).

### "Ler mais" dos mini-cards

O texto é cortado em 3 linhas com line-clamp (`display: -webkit-box; -webkit-line-clamp: 3; overflow: hidden`). O botão de expandir só aparece quando o texto **realmente** transborda, medido em runtime:

```js
const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
```

`scrollHeight` é a altura do conteúdo completo; `clientHeight` é a altura visível. Se o primeiro for maior, há texto escondido. O listener de `resize` refaz a medição quando a janela muda, e o efeito é pausado enquanto expandido (senão a medição diria "não transborda mais" e o botão de recolher sumiria).

---

## 3. Cometas: voo das techs (techFlight.js)

**Arquivos:** `src/Components/Projects/techFlight.js`, disparo em `ProjectCard.jsx`, visual em `ProjectCard.css`

É animação **imperativa** com `requestAnimationFrame`, fora do React: os "fliers" são spans criados com `document.createElement` num overlay `position: fixed`, porque animar componentes React a 60fps via estado seria re-renderizar o mundo a cada frame.

Peças principais:

- **Disparo**: um `IntersectionObserver` no `ProjectCard` espera a lista de badges entrar 30% na viewport, dispara um voo por badge (com delays escalonados) e se desconecta (roda uma vez só).
- **Trajetória**: curva de Bézier quadrática. O ponto de controle fica no meio do caminho, deslocado perpendicularmente (aleatório para cada voo) e puxado para cima, o que gera arcos variados em vez de linhas retas.
- **Alvo móvel**: a posição final é relida com `getBoundingClientRect()` **a cada frame** (`getEnd()`), então o cometa persegue o alvo mesmo se a página rolar ou, no voo reverso, se a esfera 3D girar.
- **Cauda**: a derivada da Bézier dá o vetor velocidade; `Math.atan2(vy, vx)` vira o ângulo da cauda (um pseudo-elemento com gradiente), então a cauda sempre aponta para trás do movimento.
- **Morph**: nos primeiros 18% do voo o clone do ícone (clonado da nuvem com `cloneNode(true)`) faz fade-out enquanto a "estrela" acende: o ícone decola e vira cometa.
- **Robustez**: o badge começa invisível e só aparece no `onArrive`, então há três garantias de que ele nunca fica invisível para sempre: try/catch no loop (qualquer erro chama cleanup), um `setTimeout` de segurança em `delay + duration + 500ms`, e fallbacks quando a nuvem 3D não existe (reduced motion, visão em lista, seção nunca montada), que chamam `onArrive` imediatamente.
- **Voo reverso** (clique no badge): mesmo motor, com início fixo no badge e fim móvel no ícone da nuvem. Um flag `dataset.flying` no badge impede spam de cliques, e ao chegar o ícone da nuvem pulsa (classe `.pinged`; o reflow forçado com `getBoundingClientRect()` entre remover e readicionar a classe reinicia a animação CSS).

Gotcha importante: o overlay é anexado dentro de `#top` (a div raiz que carrega a classe do tema), **não** no `body`, porque as variáveis CSS (`--clr-primary` etc.) são definidas nas classes `.dark`/`.light` dessa div e não resolveriam fora dela.

---

## 4. Magnetismo dos badges

**Arquivos:** `ProjectCard.jsx` (handlers), `ProjectCard.css`

No `mousemove` sobre o badge, calcula-se a posição relativa do ponteiro dentro do elemento (0 a 1 em cada eixo), centraliza-se em torno de zero (-0.5 a +0.5) e multiplica-se pela força:

```js
el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width - 0.5) * 16}px`);
el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height - 0.5) * 12}px`);
```

O JS só escreve **variáveis CSS**; quem move é o CSS:

```css
.techBadge {
    transform: translate(var(--mx, 0px), var(--my, 0px));
    transition: box-shadow 0.25s ease, transform 0.18s ease-out;
}
```

A `transition` no transform é o que dá a sensação de ímã elástico: o elemento persegue o ponteiro com um pequeno atraso suave, e volta deslizando quando `mouseleave` zera as variáveis. Padrão útil de guardar: **JS mede, variável CSS comunica, CSS anima**.

---

## 5. Tema (dark/light) e a scrollbar

**Arquivo:** `src/Context/theme.jsx`

Context API simples: `themename` vira classe na div raiz (`<div id="top" className={`${themename} app`}>`), e cada tema define as mesmas variáveis CSS (`--clr-bg`, `--clr-primary`, `--clr-fg-alt-rgb`...) com valores próprios em `App.css`. Todo o CSS do site referencia variáveis, então trocar a classe re-tematiza tudo sem re-render além do topo.

A scrollbar nativa não enxerga essas variáveis (ela é estilizada em `:root`), então um `useEffect` copia as cores do tema ativo para `--scrollBar-handle`/`--scrollBar-rail` no `documentElement` a cada troca.

### O gotcha do `* { background-color: inherit }`

O reset global em `index.css` faz **todo** elemento repintar o background herdado. Sobre fundo opaco é invisível, mas dentro de containers translúcidos (ex.: cards com `rgba(..., 0.04)`) cada nível aninhado pinta outra camada de 4% e o texto ganha "faixas". Por isso vários blocos do CSS têm `background-color: transparent` explícito nos elementos internos. Se um card novo aparecer com faixas atrás do texto, é isso.

---

## 6. i18n (pt/en)

**Arquivos:** `src/lib/i18n.jsx`, `src/locale/pt.json`, `src/locale/en.json`

`i18next` + `react-i18next`. Todo texto visível vive nos dois JSONs sob a mesma chave e renderiza via `<Trans i18nKey="..." />`, que suporta interpolação (`{{name}}`) e componentes embutidos (`components={{ dif: <span/> }}`, usado para colorir palavras dentro de frases traduzidas). A troca de idioma é `i18n.changeLanguage()`, e `App.jsx` lê `?lang=en|pt` da URL no mount para permitir links compartilháveis já no idioma certo.

---

## 7. Cursor gooey

**Arquivos:** `src/Components/GooeyCursor/GooeyCursor.jsx`, `GooeyCursor.css`

Quarenta divs circulares seguem o mouse formando uma fila: a cada frame o histórico de posições desliza (`shift`/`push`) e cada círculo interpola 35% em direção ao seguinte, o que produz o efeito de corrente elástica. A escala decresce ao longo da cauda. O "gooey" (gotas que se fundem) vem de um filtro SVG de goo aplicado via CSS (`filter: url(#goo)`), a técnica clássica de blur + contraste de alpha. O cursor nativo é escondido com `cursor: none` e a cauda some após 1,2s de inatividade.

---

## 8. Miscelânea que vale registrar

- **AOS** (animate on scroll): `Aos.init({ duration: 700 })` no `App.jsx`; os elementos declaram `data-aos="fade-right"` etc. direto no JSX.
- **Alternância de layout dos cards**: era `nth-child(odd)` e virou classe `.flip` explícita, porque a seção de projetos passou a ter títulos e blocos entre os cards e a paridade de posição no DOM deixou de ser confiável.
- **Lazy do Three.js**: ver seção 1; é a maior economia de bundle do site.
- **og:image e favicon**: o cartão de compartilhamento (`public/og.png`, 1200x630, referenciado com URL absoluta no `index.html`) e o favicon SVG inline (data URI) foram gerados a partir de screenshots do próprio site.
- **Imagens de projeto**: todas em WebP na faixa de 20 a 50KB.
- **prefers-reduced-motion**: respeitado em três lugares: auto-rotação da nuvem, voo dos cometas (badges aparecem instantaneamente) e magnetismo/animações dos badges (media query no CSS).
