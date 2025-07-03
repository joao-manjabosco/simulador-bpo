# Simulador de Precificação de Serviços BPO

Este é um simulador de precificação de serviços BPO desenvolvido em React com TypeScript e Vite.

## Funcionalidades

- Seleção de tipo de serviço (BPO Controladoria, BPO Gestão Financeira, etc.)
- Configuração de número de funcionários
- Seleção de quantidade de contas bancárias
- Configuração de ERP em nuvem
- Definição de maturidade dos processos
- Cálculo automático de score e preço estimado
- Interface moderna com círculo de progresso
- Design responsivo

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## Instalação

1. Extraia o arquivo zip do projeto
2. Navegue até o diretório do projeto:
   ```bash
   cd simulador-bpo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o projeto

### Modo de desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

### Visualizar build de produção

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Estrutura do projeto

```
simulador-bpo/
├── src/
│   ├── components/
│   │   ├── PriceCard.tsx      # Componente do círculo de progresso e preço
│   │   └── ui/
│   │       └── Header.tsx     # Cabeçalho da aplicação
│   ├── data/
│   │   ├── presets.ts         # Tipos de serviço disponíveis
│   │   └── pricing.ts         # Lógica de cálculo de preço e score
│   ├── pages/
│   │   └── Home.tsx           # Página principal do simulador
│   ├── App.tsx                # Componente raiz
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── index.css              # Estilos globais
├── index.html                 # Template HTML
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Este arquivo
```

## Tecnologias utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS (via CDN)
- SVG para gráficos

## Personalização

### Modificar tipos de serviço

Edite o arquivo `src/data/presets.ts` para adicionar ou remover tipos de serviço.

### Ajustar cálculo de preços

Modifique a função `calcularPreco` no arquivo `src/data/pricing.ts` para alterar a lógica de precificação.

### Alterar estilos

O projeto usa Tailwind CSS. Modifique as classes nos componentes para alterar a aparência.

## Problemas comuns

### Erro de porta em uso

Se a porta 5173 estiver em uso, o Vite automaticamente tentará a próxima porta disponível.

### Problemas com dependências

Se houver problemas com as dependências, tente:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Suporte

Para dúvidas ou problemas, verifique:
1. Se o Node.js está instalado corretamente
2. Se todas as dependências foram instaladas
3. Se não há conflitos de porta
4. Se o navegador suporta as funcionalidades modernas do JavaScript

