# Acess+ - Extensão para Auditoria de Acessibilidade Web

O **Acess+** é uma extensão para navegador projetada para ajudar desenvolvedores e empresas a identificar e corrigir problemas de acessibilidade em páginas web. A extensão analisa páginas ativas e fornece relatórios detalhados baseados nas diretrizes **WCAG**, utilizando a tecnologia de Inteligência Artificial GPT-4o-mini.

---

## **Funcionalidades**

- 🤖 **Auditoria com IA**:
  - Gera relatórios detalhados sobre acessibilidade, com sugestões baseadas em diretrizes WCAG.
  - Identifica problemas como:
    - Imagens sem texto alternativo.
    - Problemas de contraste entre texto e fundo.
    - Navegação inadequada para teclado.
    - Estrutura semântica incorreta.

- 🌍 **Fallback Inteligente**:
  - Quando o limite da API é atingido, exibe sugestões gerais baseadas nas diretrizes WCAG.

- 📋 **Funções Extras**:
  - **Ler Sugestões**: Ouça as sugestões usando a API de síntese de fala do navegador.
  - **Copiar Sugestões**: Copie os resultados para a área de transferência para fácil compartilhamento.

---

## **Instalação**

### **Modo de Desenvolvimento**

#### 1. **Clone ou baixe o repositório**

```bash
git clone https://github.com/ChristalCamillo/access-plus.git

```

#### 2. **Dependencias**

Instale o Node 18+ localmente;
Execute npm install;
Copie .env.example em um novo arquivo chamado .env e adicione as chaves apropriadas a ele;
Execute npm run serve para que o projeto seja carregado com hot-refresh;
Execute npm run build para compilar o projeto apenas uma vez;
A pasta de compilação está em /_site.

Abra o navegador e acesse as ferramentas de extensão:

No Chrome:
Acesse chrome://extensions/.
Ative o modo de desenvolvedor (canto superior direito).
Clique em Carregar sem compactação e selecione a pasta do projeto.
Instale a extensão:

A extensão será carregada e estará visível na barra de ferramentas do navegador.
Como Usar
Abra a extensão:

Clique no ícone do Acess+ na barra de ferramentas.
Execute a análise:

A extensão automaticamente capturará o HTML da aba ativa e enviará para análise.
Visualize o relatório:

Após a análise, um relatório será exibido com sugestões detalhadas para melhorar a acessibilidade.
Use as funcionalidades extras:

Ler Sugestões: Clique no botão para ouvir as melhorias em voz alta.
Copiar Sugestões: Clique no botão para copiar o relatório para a área de transferência.
Pré-requisitos
Google Chrome ou navegador compatível.
Chave da API OpenAI:
Configure a variável API_KEY criando um arquivo .env com a sua chave de API.
Conexão ativa com a internet para integração com a API GPT-4o-mini.
Estrutura do Projeto
bash
/Acess+/
│
├── manifest.json        # Configuração da extensão
├── popup.html           # Interface principal
├── popup.css            # Estilos para a interface
├── popup.js             # Lógica da extensão
├── icon.png             # Ícone da extensão
└── README.md            # Este arquivo

Tecnologias Utilizadas
HTML/CSS/JavaScript: Para a interface da extensão.
OpenAI GPT-4o: IA para geração de relatórios detalhados baseados nas diretrizes WCAG.
Chrome Extensions API: Para manipular a aba ativa e interagir com o navegador.
Limitações Conhecidas
Erro 429 - Limite Excedido:
Quando o limite da API GPT-4 é atingido, sugestões gerais são exibidas como fallback.
Resultados Dependentes da IA:
A precisão das sugestões depende da resposta da API GPT-4.
Contribuindo
Contribuições são bem-vindas! Se você quiser adicionar melhorias, corrigir bugs ou propor novas funcionalidades:

Faça um fork do repositório.
Crie uma branch para sua alteração:
bash
Copiar código
git checkout -b minha-melhoria
Faça o commit das suas alterações:
bash
Copiar código
git commit -m "Adiciona nova funcionalidade"
Envie sua branch:
bash
Copiar código
git push origin minha-melhoria

Contato

Criadores:

Ana Lice Freires dos Santos - <analicef87@gmail.com>
Christal Bruneli Camillo - <christal.b.camillo@gmail.com>
Grazielly Kelly Souza Soares de Lima - <nakaelbsi@gmail.com>
Luís Henrique das Neves Ribeiro - <luishenrique.rj@gmail.com>
Taiãma América Mendes de Souza - <taiamasouza@outlook.com>
