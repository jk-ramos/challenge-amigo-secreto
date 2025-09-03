# 🎁 Amigo Secreto

Uma aplicação web interativa para organizar sorteios de amigo secreto de forma simples e divertida!

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Demonstração](#demonstração)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O **Amigo Secreto** é uma aplicação web desenvolvida para facilitar a organização de sorteios entre amigos, familiares ou colegas de trabalho. Com uma interface intuitiva, permite adicionar participantes, gerenciar a lista e realizar sorteios aleatórios de forma rápida e segura.

### ✨ Principais Características

- 🎨 Interface simples e responsiva
- 🔒 Validação de entrada robusta
- 🎲 Sistema de sorteio verdadeiramente aleatório
- 📱 Compatível com dispositivos móveis
- ♿ Acessibilidade implementada
- 🚀 Performance otimizada

## 🚀 Funcionalidades

### ✅ **Gerenciamento de Participantes**
- **Adicionar nomes**: Insira nomes através do campo de texto
- **Validação inteligente**: Previne nomes vazios e duplicados
- **Remoção individual**: Remova participantes específicos com um clique
- **Suporte a teclado**: Use Enter para adicionar rapidamente

### 🎲 **Sistema de Sorteio**
- **Sorteio aleatório**: Algoritmo que garante imparcialidade total
- **Validação pré-sorteio**: Verifica se há participantes suficientes
- **Resultado destacado**: Exibição clara do participante sorteado
- **Histórico visual**: Mantém o resultado visível até nova ação

### 🔄 **Controles do Jogo**
- **Reiniciar jogo**: Limpa todos os dados com confirmação de segurança
- **Limpeza automática**: Remove resultados ao modificar a lista
- **Foco inteligente**: Campo de entrada sempre pronto para uso

## 📱 Como Usar

### 1️⃣ **Adicionar Participantes**

1. Digite o nome de um participante no campo de texto
2. Clique em **"Adicionar"** ou pressione **Enter**
3. O nome aparecerá na lista abaixo
4. Repita o processo para todos os participantes

> 💡 **Dica**: O sistema previne nomes duplicados e vazios automaticamente!

### 2️⃣ **Gerenciar Lista**

- **Remover participante**: Clique no botão **✕** ao lado do nome
- **Visualizar lista**: Todos os nomes ficam visíveis em tempo real
- **Validação automática**: Sistema alerta sobre problemas na entrada

### 3️⃣ **Realizar Sorteio**

1. Certifique-se de que há pelo menos um participante na lista
2. Clique no botão **"🎮 Sortear Amigo"**
3. O nome sorteado aparecerá destacado na tela
4. Use **"🔄 Reiniciar Jogo"** para começar um novo sorteio

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **HTML5** | - | Estrutura da aplicação |
| **CSS3** | - | Estilização e layout responsivo |
| **JavaScript** | ES6+ | Lógica de negócio e interatividade |
| **Google Fonts** | - | Tipografia (Inter & Merriweather) |

### 🎨 **Recursos de Design**
- **Cores modernas**: Paleta azul e laranja vibrante
- **Tipografia elegante**: Combinação Inter + Merriweather
- **Layout responsivo**: Adaptável a qualquer dispositivo
- **Micro-interações**: Hover effects e transições suaves

## 📁 Estrutura do Projeto

```
challenge-amigo-secreto/
├── 📄 index.html          # Estrutura HTML principal
├── 🎨 style.css           # Estilos e layout
├── ⚡ app.js              # Lógica JavaScript
├── 📁 assets/             # Recursos visuais
│   ├── 🖼️ amigo-secreto.png
│   └── ▶️ play_circle_outline.png
└── 📖 README.md           # Documentação
```

## 🔧 Instalação

### **Método 1: Download Direto**

1. Faça download dos arquivos do projeto
2. Descompacte em uma pasta local
3. Abra o arquivo `index.html` em qualquer navegador

### **Método 2: Clonagem (se usando Git)**

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até a pasta
cd challenge-amigo-secreto

# Abra no navegador
open index.html
```

### **Método 3: Servidor Local**

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Acesse: http://localhost:8000
```

## 🎮 Demonstração

### **Fluxo Completo de Uso**

#### **Estado Inicial**
```
🎁 Amigo Secreto
┌─────────────────────────────────┐
│ Digite o nome dos seus amigos   │
├─────────────────────────────────┤
│ [Nome do amigo    ] [Adicionar] │
├─────────────────────────────────┤
│ Lista: (vazia)                  │
├─────────────────────────────────┤
│        [🎮 Sortear Amigo]       │
│        [🔄 Reiniciar Jogo]      │
└─────────────────────────────────┘
```

#### **Após Adicionar Participantes**
```
🎁 Amigo Secreto
┌─────────────────────────────────┐
│ Digite o nome dos seus amigos   │
├─────────────────────────────────┤
│ [               ] [Adicionar]   │
├─────────────────────────────────┤
│ Lista de Amigos:                │
│ • Ana ✕                         │
│ • Carlos ✕                      │
│ • Maria ✕                       │
│ • João ✕                        │
├─────────────────────────────────┤
│        [🎮 Sortear Amigo]       │
│        [🔄 Reiniciar Jogo]      │
└─────────────────────────────────┘
```

#### **Resultado do Sorteio**
```
🎁 Amigo Secreto
┌─────────────────────────────────┐
│ Digite o nome dos seus amigos   │
├─────────────────────────────────┤
│ [               ] [Adicionar]   │
├─────────────────────────────────┤
│ Lista de Amigos:                │
│ • Ana ✕                         │
│ • Carlos ✕                      │
│ • Maria ✕                       │
│ • João ✕                        │
├─────────────────────────────────┤
│ 🎉 Amigo sorteado: CARLOS! 🎉   │
├─────────────────────────────────┤
│        [🎮 Sortear Amigo]       │
│        [🔄 Reiniciar Jogo]      │
└─────────────────────────────────┘
```

## 🧪 Casos de Teste

### **Testes de Validação**

| Cenário | Entrada | Resultado Esperado |
|---------|---------|-------------------|
| Campo vazio | `""` | ⚠️ "Digite um nome válido!" |
| Nome duplicado | `"Ana"` (já existe) | ⚠️ "Nome já foi adicionado!" |
| Nome válido | `"Pedro"` | ✅ Adiciona à lista |
| Lista vazia + sortear | `[]` | ⚠️ "Adicione pelo menos um amigo!" |

### **Testes de Funcionalidade**

- ✅ Adicionar múltiplos nomes
- ✅ Remover nomes individualmente
- ✅ Sorteio com 1 participante
- ✅ Sorteio com 10+ participantes
- ✅ Reiniciar jogo com confirmação
- ✅ Usar tecla Enter para adicionar
- ✅ Responsividade em mobile



## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙋‍♂️ Autor

Desenvolvido com ❤️ por Jaque Ramos

### 📞 **Contato**
- 📧 Email: jkrramos@gmail.com
- 💼 LinkedIn: [Jaquelaine Ramos](https://linkedin.com/in/jaquelaine-ramos/)
- 🐙 GitHub: [jk-ramos](https://github.com/jk-ramos)

---


<div align="center">

**[⬆ Voltar ao topo](#-amigo-secreto)**

Made with 💙 and ☕ by developers, for developers.

</div>
