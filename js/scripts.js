// scripts.js - cleaned, bilingual, and inline-style-free
// Minimal i18n + rendering for portfolio

const i18n = {
    en: {
        header: { made_by: "MADE BY: DIEGO GUSTAVO" },
        boot_skip: "[ Press any key or click to skip ]",
        modal_close: "Close",
        about: { navigation: "Use Tab or the ← → arrows to switch sections." },
        skills: {
            header: "▸ INSTALLED COMPONENTS & EXPERIENCE LEVEL",
            cat: {
                programming: "Programming",
                frontend: "Front-end",
                backend: "Back-end",
                tools: "Tools",
                design: "Design",
                blockchain: "Blockchain",
                hardware: "Hardware",
                ai: "AI / ML",
            },
        },
        memory: { testing: "▸ MEMORY TESTING : All skills loaded... OK" },
        projects: {
            header: "▸ PRIMARY MASTER : {count} entries found",
            view_on_github: "[ View on GitHub ↗ ]",
        },
        contact: {
            header: "▸ SYSTEM INTERFACES — select an item to open",
            label: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
        },
        bios: {
            label: { name: "Name", role: "Role", location: "Location", bio: "Bio" },
            value: {
                name: "Diego Gustavo",
                role: "Full-stack Web Developer (Student)",
                location: "Brazil",
                bio:
                    "Passionate about technology and web development, continuously learning and building real projects that combine design and functionality. Seeking opportunities to grow as a developer and contribute creative, efficient solutions.",
            },
        },
        help: {
            about: {
                title: "SYSTEM INFORMATION",
                body:
                    "This panel shows personal and professional information about the developer.\n\nUse the ← → arrows or Tab to switch portfolio sections.\n\nUse ↑ ↓ to explore items inside each panel.",
                tip: "← → or Tab to switch sections",
            },
            contact: {
                title: "CONTACT INTERFACES",
                body:
                    "Select one of the communication channels below to connect.\n\nAvailable for freelance, open-source projects and professional opportunities.",
                tip: "Enter or click to open in browser",
            },
        },
        levels: {
            advanced: "Advanced",
            intermediate: "Intermediate",
            basic_intermediate: "Basic-Intermediate",
            beginner: "Student / Beginner",
        },
        skill: {
            help: {
                experience_label: "Experience Level",
                component_type_label: "Component Type",
                tip: "↑↓ to navigate skills",
            },
        },
        footer: { navigate: "Navigate", section: "Section", select: "Select" },
    },
    pt: {
        header: { made_by: "FEITO POR: DIEGO GUSTAVO" },
        boot_skip: "[ Pressione qualquer tecla ou clique para pular ]",
        modal_close: "Fechar",
        about: { navigation: "Use Tab ou as setas ← → para alternar entre seções." },
        skills: {
            header: "▸ COMPONENTES INSTALADOS & NÍVEL DE EXPERIÊNCIA",
            cat: {
                programming: "Programação",
                frontend: "Front-end",
                backend: "Back-end",
                tools: "Ferramentas",
                design: "Design",
                blockchain: "Blockchain",
                hardware: "Hardware",
                ai: "IA / ML",
            },
        },
        memory: { testing: "▸ MEMORY TESTING : All skills loaded... OK" },
        projects: { header: "▸ PRIMARY MASTER : {count} entradas encontradas", view_on_github: "[ Ver no GitHub ↗ ]" },
        contact: { header: "▸ SYSTEM INTERFACES — selecione um item para abrir", label: { github: "GitHub", linkedin: "LinkedIn", email: "Email" } },
        bios: {
            label: { name: "Nome", role: "Função", location: "Localização", bio: "Bio" },
            value: {
                name: "Diego Gustavo",
                role: "Desenvolvedor Web Full-stack (Estudante)",
                location: "Brasil",
                bio:
                    "Apaixonado por tecnologia e desenvolvimento web, buscando crescimento profissional e construindo projetos reais que unem design e funcionalidade.",
            },
        },
        help: {
            about: {
                title: "INFORMAÇÕES DO SISTEMA",
                body:
                    "Este painel exibe informações pessoais e profissionais do desenvolvedor.\n\nUse as setas ← → ou Tab para mudar as seções do portfólio.\n\nUse ↑ ↓ para explorar os itens dentro de cada painel.",
                tip: "← → ou Tab para mudar de seção",
            },
            contact: {
                title: "INTERFACES DE CONTATO",
                body:
                    "Selecione um dos canais de comunicação abaixo para se conectar.\n\nDisponível para freelance, projetos open-source e propostas profissionais.",
                tip: "Enter ou clique para abrir no navegador",
            },
        },
        levels: { advanced: "Avançado", intermediate: "Intermediário", basic_intermediate: "Básico-Intermediário", beginner: "Estudante / Iniciante" },
        skill: { help: { experience_label: "Nível de Experiência", component_type_label: "Tipo de Componente", tip: "↑↓ para navegar nas skills" } },
        footer: { navigate: "Navegar", section: "Seção", select: "Selecionar" },
    },
};

/*
  Recupera a linguagem atual do site.
  - Usa localStorage para persistir a escolha do usuário entre sessões.
  - Valor padrão: 'en' (inglês) quando não há preferência salva.
*/
function getCurrentLang() {
    return localStorage.getItem("site_lang") || "en";
}

/*
  Define a linguagem atual e re-renderiza conteúdo dependente de idioma.
  - Salva em localStorage para persistência.
  - Atualiza traduções visuais e re-renderiza partes dinâmicas
    (projetos, título da seção atual) para refletir o novo idioma.
*/
function setCurrentLang(lang) {
    localStorage.setItem("site_lang", lang);
    applyTranslations();
    // re-render dynamic content
    renderProjects();
    switchSection(currentSection);
}

/*
  Função simples de lookup de tradução (i18n).
  - Recebe chave no formato pontuado, ex: 'projects.header'.
  - Percorre o objeto `i18n` para retornar a string correspondente
    na linguagem atual; se não encontrar, retorna a própria chave.
*/
function t(key) {
    const lang = getCurrentLang();
    const parts = key.split(".");
    let cur = i18n[lang] || i18n.en;
    for (const p of parts) {
        if (cur && cur[p] !== undefined) cur = cur[p];
        else return key;
    }
    return typeof cur === "string" ? cur : key;
}

/*
  Aplica traduções no DOM para todos os elementos com atributo data-i18n.
  - Substitui textos estáticos que foram marcados no HTML com chaves i18n.
  - Atualiza também elementos específicos (botão de idioma, label do boot, aria-label do modal).
  - Projetado para ser idempotente: pode ser chamado sempre que a linguagem mudar.
*/
function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) el.textContent = t(key);
    });

    const bootSkip = document.getElementById("boot-skip");
    if (bootSkip) bootSkip.textContent = t("boot_skip");

    const modalClose = document.getElementById("modal-close");
    if (modalClose) modalClose.setAttribute("aria-label", t("modal_close"));

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) langToggle.textContent = getCurrentLang().toUpperCase();
}

// Boot animation lines
const bootLines = [
    { text: "" },
    { text: "Diego Gustavo Portfolio  —  v1.0.0" },
    { text: "Copyright (C) 2025, Diego Gustavo" },
    { text: "" },
    { text: "Full-stack Web Developer (Student)" },
    { text: "" },
    { text: "Memory Testing    : Skills loaded... OK" },
    { text: "Primary Master    : Projects loaded... OK" },
    { text: "Primary Slave     : GitHub Repository" },
    { text: "" },
    { text: "Initializing interface............. OK" },
    { text: "Loading portfolio.................. OK" },
    { text: "" },
    { text: t("boot_skip") },
];

const bootEl = document.getElementById("boot-screen");
const bootLinesEl = document.getElementById("boot-lines");
let booted = false;

/*
  Render das linhas de boot (tela de inicialização).
  - Comportamento: função auto-invocada (IIFE) que desenha linhas uma-a-uma,
    com atrasos aleatórios para simular um processo de boot.
  - Motivação: cria uma pequena animação inicial antes de exibir a interface.
  - Nota: não altera estado global diretamente; chama launchMain() ao final.
*/
(function renderBootLines() {
    let currentLine = 0;
    function printNextLine() {
        if (booted) return;
        if (currentLine >= bootLines.length) {
            setTimeout(launchMain, 600);
            return;
        }
        const line = bootLines[currentLine];
        const el = document.createElement("div");
        el.className = "boot-line";
        if (line.text === "") el.innerHTML = "&nbsp;";
        else {
            if (line.text.includes("OK")) {
                const parts = line.text.split("OK");
                el.innerHTML = parts[0] + '<span class="status-ok">OK</span>' + (parts[1] || "");
            } else el.textContent = line.text;
        }
        if (bootLinesEl) bootLinesEl.appendChild(el);
        currentLine++;
        const delay = Math.random() * 80 + 40;
        setTimeout(printNextLine, delay);
    }
    printNextLine();
})();

/*
Faz a transição da tela de boot para a interface principal.
- Evita múltiplas execuções verificando a flag `booted`.
- Aplica efeitos visuais (fade-out) e, após pequeno delay, 
mostra o contêiner principal e inicializa a interface.
*/
function launchMain() {
    if (booted) return;
    booted = true;
    if (bootEl) bootEl.classList.add("fade-out");
    setTimeout(() => {
        if (bootEl) bootEl.classList.add("hidden");
        const main = document.getElementById("main-interface");
        if (main) main.classList.add("visible");
        initInterface();
    }, 650);
}

// LANG TOGGLE
{
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const cur = getCurrentLang();
            setCurrentLang(cur === "en" ? "pt" : "en");
        });
    }
    applyTranslations();
}

// ===== SKILLS DATA (each item now has desc_en + type_en where appropriate) =====
const skillCategories = {
    programming: [
        {
            name: "C#",
            desc:
                "Linguagem de programação desenvolvida pela Microsoft, amplamente utilizada para aplicações desktop, web, jogos e serviços corporativos na plataforma .NET.",
            desc_en:
                "Programming language developed by Microsoft, widely used for desktop, web, games and enterprise services on the .NET platform.",
            level: 50,
            type: "Linguagem",
            type_en: "Language",
        },
        {
            name: "JavaScript",
            desc:
                "Linguagem de programação essencial para o desenvolvimento web, responsável por adicionar interatividade e dinamismo às páginas e aplicações.",
            desc_en:
                "Core programming language for the web, responsible for adding interactivity and dynamic behavior to pages and applications.",
            level: 80,
            type: "Linguagem",
            type_en: "Language",
        },
        {
            name: "PHP",
            desc:
                "Linguagem de programação voltada principalmente para o desenvolvimento web no lado do servidor, muito utilizada em sistemas dinâmicos e CMSs.",
            desc_en:
                "Server-side scripting language commonly used to build dynamic web applications and content management systems.",
            level: 70,
            type: "Linguagem",
            type_en: "Language",
        },
        {
            name: "Python",
            desc:
                "Linguagem de programação de alto nível conhecida por sua simplicidade e versatilidade, utilizada em automação, ciência de dados, inteligência artificial, web e muito mais.",
            desc_en:
                "High-level programming language known for its simplicity and versatility, used in automation, data science, AI, web development and more.",
            level: 65,
            type: "Linguagem",
            type_en: "Language",
        },
        {
            name: "Rust",
            desc:
                "Linguagem de programação focada em desempenho, segurança de memória e concorrência, amplamente adotada para sistemas de alta performance.",
            desc_en:
                "Programming language focused on performance, memory safety and concurrency, widely adopted for high-performance systems.",
            level: 50,
            type: "Linguagem",
            type_en: "Language",
        },
        {
            name: "TypeScript",
            desc:
                "Superset do JavaScript que adiciona tipagem estática, melhorando a organização, manutenção e escalabilidade de aplicações.",
            desc_en:
                "A superset of JavaScript that adds static typing, improving organization, maintainability and scalability of applications.",
            level: 75,
            type: "Linguagem",
            type_en: "Language",
        },
    ],
    frontend: [
        {
            name: "HTML5",
            desc: "Linguagem de marcação utilizada para estruturar o conteúdo de páginas e aplicações web modernas.",
            desc_en: "Markup language used to structure content on modern web pages and applications.",
            level: 95,
            type: "Markup",
            type_en: "Markup",
        },
        {
            name: "React",
            desc: "Biblioteca JavaScript desenvolvida pelo Facebook para criação de interfaces de usuário reativas e componentes reutilizáveis.",
            desc_en: "JavaScript library for building reactive user interfaces and reusable components.",
            level: 75,
            type: "Biblioteca",
            type_en: "Library",
        },
        {
            name: "Next.js",
            desc: "Framework baseado em React que oferece renderização híbrida, roteamento avançado e otimizações para aplicações web modernas.",
            desc_en: "React-based framework offering hybrid rendering, advanced routing and optimizations for modern web apps.",
            level: 60,
            type: "Framework",
            type_en: "Framework",
        },
        {
            name: "CSS3",
            desc: "Linguagem utilizada para estilizar páginas web, controlando layout, cores, animações e responsividade.",
            desc_en: "Style language used to design web pages, controlling layout, colors, animations and responsiveness.",
            level: 90,
            type: "Estilo",
            type_en: "Style",
        },
        {
            name: "Bootstrap",
            desc: "Framework front-end que fornece componentes e estilos prontos para acelerar o desenvolvimento de interfaces responsivas.",
            desc_en: "Front-end framework providing ready-made components and styles to accelerate responsive UI development.",
            level: 90,
            type: "Biblioteca",
            type_en: "Library",
        },
        {
            name: "Sass",
            desc: "Pré-processador CSS que adiciona recursos como variáveis, mixins e organização modular aos estilos.",
            desc_en: "CSS preprocessor that adds features like variables, mixins and modular structure to styles.",
            level: 85,
            type: "Pre-processador",
            type_en: "Preprocessor",
        },
    ],
    backend: [
        {
            name: "Node.js",
            desc: "Ambiente de execução JavaScript no lado do servidor, permitindo criar APIs, aplicações web e serviços escaláveis.",
            desc_en: "JavaScript runtime for server-side code, enabling APIs, web apps and scalable services.",
            level: 85,
            type: "Ambiente",
            type_en: "Runtime",
        },
        {
            name: "MySQL",
            desc: "Sistema de gerenciamento de banco de dados relacional amplamente utilizado em aplicações web e corporativas.",
            desc_en: "Relational database management system widely used in web and enterprise applications.",
            level: 80,
            type: "Banco Dados",
            type_en: "Database",
        },
        {
            name: "Laravel",
            desc: "Framework PHP moderno que oferece ferramentas e recursos para o desenvolvimento rápido e organizado de aplicações web.",
            desc_en: "Modern PHP framework that provides tools and conventions for rapid and organized web application development.",
            level: 65,
            type: "Framework",
            type_en: "Framework",
        },
    ],
    tools: [
        {
            name: "Git",
            desc: "Sistema de controle de versão distribuído que permite rastrear alterações no código-fonte, facilitar o trabalho colaborativo e gerenciar diferentes versões de projetos.",
            desc_en: "Distributed version control system used to track source code changes, collaborate and manage project versions.",
            level: 95,
            type: "Ferramenta",
            type_en: "Tool",
        },
        {
            name: "GNU Bash",
            desc: "Interpretador de comandos utilizado em sistemas Linux e Unix para automação de tarefas, administração de sistemas e execução de scripts.",
            desc_en: "Command interpreter used on Linux/Unix systems for task automation, system administration and scripting.",
            level: 90,
            type: "Shell",
            type_en: "Shell",
        },
        {
            name: "VS Code",
            desc: "Editor de código leve e extensível desenvolvido pela Microsoft, amplamente utilizado para desenvolvimento em diversas linguagens.",
            desc_en: "Lightweight, extensible code editor by Microsoft, widely used for development across many languages.",
            level: 90,
            type: "Editor",
            type_en: "Editor",
        },
        {
            name: "Neovim",
            desc: "Editor de texto altamente configurável baseado no Vim, popular entre desenvolvedores que buscam produtividade e personalização.",
            desc_en: "Highly configurable text editor based on Vim, popular among developers seeking productivity and customization.",
            level: 75,
            type: "Editor",
            type_en: "Editor",
        },
        {
            name: "Sublime Text",
            desc: "Editor de código-fonte conhecido pela rapidez, interface minimalista e suporte a múltiplas linguagens de programação.",
            desc_en: "Source code editor known for speed, a minimal interface and multi-language support.",
            level: 85,
            type: "Editor",
            type_en: "Editor",
        },
        {
            name: "WordPress",
            desc: "Sistema de gerenciamento de conteúdo (CMS) utilizado para criação de sites, blogs, lojas virtuais e portais.",
            desc_en: "Content Management System (CMS) used to create websites, blogs, e-shops and portals.",
            level: 80,
            type: "CMS",
            type_en: "CMS",
        },
        {
            name: "Docker",
            desc: "Plataforma de containerização que permite empacotar aplicações e suas dependências em ambientes isolados e portáteis.",
            desc_en: "Containerization platform for packaging applications and dependencies into isolated, portable environments.",
            level: 75,
            type: "Container",
            type_en: "Container",
        },
        {
            name: "Kubernetes",
            desc: "Plataforma de orquestração de containers utilizada para automação de implantação, escalabilidade e gerenciamento de aplicações distribuídas.",
            desc_en: "Container orchestration platform used to automate deployment, scaling and management of distributed applications.",
            level: 60,
            type: "Orquestrador de containers",
            type_en: "Container Orchestrator",
        },
        {
            name: "Linux",
            desc: "Sistema operacional de código aberto amplamente utilizado em servidores, desenvolvimento de software e infraestrutura de TI.",
            desc_en: "Open-source operating system widely used in servers, software development and IT infrastructure.",
            level: 75,
            type: "SO",
            type_en: "OS",
        },
    ],
    design: [
        {
            name: "Photoshop",
            desc: "Software de edição e manipulação de imagens desenvolvido pela Adobe, referência no mercado de design gráfico.",
            desc_en: "Image editing and manipulation software by Adobe, a reference in graphic design.",
            level: 90,
            type: "Software",
            type_en: "Software",
        },
        {
            name: "Figma",
            desc: "Plataforma colaborativa para design de interfaces, prototipação e criação de experiências digitais.",
            desc_en: "Collaborative platform for interface design, prototyping and crafting digital experiences.",
            level: 85,
            type: "Software",
            type_en: "Software",
        },
        {
            name: "Illustrator",
            desc: "Software vetorial da Adobe utilizado para criação de ilustrações, logotipos, ícones e materiais gráficos.",
            desc_en: "Adobe vector graphics software used to create illustrations, logos, icons and graphic assets.",
            level: 70,
            type: "Software",
            type_en: "Software",
        },
    ],
    blockchain: [
        {
            name: "MetaMask",
            desc: "Carteira digital para criptomoedas e aplicações descentralizadas, amplamente utilizada no ecossistema blockchain.",
            desc_en: "Digital wallet for cryptocurrencies and decentralized applications, widely used in the blockchain ecosystem.",
            level: 80,
            type: "Carteira",
            type_en: "Wallet",
        },
        {
            name: "Ethereum",
            desc: "Plataforma blockchain que permite a criação de contratos inteligentes e aplicações descentralizadas.",
            desc_en: "Blockchain platform enabling smart contracts and decentralized applications.",
            level: 60,
            type: "Blockchain",
            type_en: "Blockchain",
        },
    ],
    hardware: [
        {
            name: "Arduino",
            desc: "Plataforma de prototipagem eletrônica baseada em hardware e software livre, muito utilizada em projetos de automação e Internet das Coisas.",
            desc_en: "Open hardware and software prototyping platform commonly used in automation and IoT projects.",
            level: 70,
            type: "Plataforma",
            type_en: "Platform",
        },
        {
            name: "Raspberry Pi",
            desc: "Computador de placa única de baixo custo utilizado para educação, automação, servidores e projetos embarcados.",
            desc_en: "Low-cost single-board computer used for education, automation, servers and embedded projects.",
            level: 65,
            type: "Computador",
            type_en: "Computer",
        },
    ],
    ai: [
        {
            name: "PyTorch",
            desc: "Framework de aprendizado de máquina e inteligência artificial utilizado para desenvolvimento e treinamento de modelos de redes neurais.",
            desc_en: "Machine learning and AI framework used for developing and training neural network models.",
            level: 55,
            type: "Biblioteca",
            type_en: "Library",
        },
    ],
};

/*
  Converte um valor numérico de 0-100 em um rótulo legível.
  - Simples regra de cortes para categorias: Avançado / Intermediário / Básico-Intermediário / Iniciante
*/
function getLevelLabel(level) {
    if (level >= 90) return t("levels.advanced");
    if (level >= 75) return t("levels.intermediate");
    if (level >= 60) return t("levels.basic_intermediate");
    return t("levels.beginner");
}

/*
  Gera uma representação em caracteres de uma barra de progresso.
  - pct: valor 0-100; converte em 10 blocos preenchidos/ vazios.
  - Útil para exibir visualmente o nível de habilidade no estilo retro do layout.
*/
function getProgressBar(pct) {
    const total = 10;
    const filled = Math.round(pct / 10);
    return "█".repeat(filled) + "░".repeat(total - filled);
}

/*
  Tradução de tipos de componente entre PT/EN.
  - Recebe o tipo em português e retorna a versão adequada
    de acordo com o idioma corrente (ou mapeia para EN quando solicitado).
*/
function translateType(type) {
    const map = {
        Linguagem: "Language",
        Biblioteca: "Library",
        Framework: "Framework",
        Estilo: "Style",
        Ferramenta: "Tool",
        Shell: "Shell",
        Editor: "Editor",
        CMS: "CMS",
        Container: "Container",
        "Orquestrador de containers": "Container Orchestrator",
        SO: "OS",
        "Pre-processador": "Preprocessor",
        Carteira: "Wallet",
        Blockchain: "Blockchain",
        Plataforma: "Platform",
        Computador: "Computer",
        "Banco Dados": "Database",
        Ambiente: "Runtime",
    };
    if (!type) return "";
    return getCurrentLang() === "pt" ? type : map[type] || type;
}

/*
  Monta o objeto de ajuda para uma skill específica.
  - Seleciona a descrição apropriada conforme o idioma (desc_en se disponível).
  - Inclui informações calculadas como rótulo de nível e tipo traduzido.
  - Retorna um objeto {title, body, tip} que é consumido por buildHelp/setHelp.
*/
function getSkillHelpData(skill) {
    const lang = getCurrentLang();
    const desc = lang === "en" && skill.desc_en ? skill.desc_en : skill.desc || "";
    const type = translateType(skill.type || "");
    return {
        title: skill.name,
        body: `${desc}\n\n${t("skill.help.experience_label")} : ${skill.level}% (${getLevelLabel(skill.level)})\n${t("skill.help.component_type_label")} : ${type}`,
        tip: t("skill.help.tip"),
    };
}

/*
  Renderiza a lista de skills para a categoria selecionada.

  Comportamento detalhado:
  1. Encontra o container de skills e a categoria de dados.
  2. Marca o botão de categoria como ativo e gera o HTML para cada skill.
  3. Anexa handlers para click e hover em cada linha:
     - Click: seleciona a skill, exibe help no painel e abre modal em telas pequenas.
     - Hover: mostra preview no painel de help (sem alterar estado permanente).
  4. Garante que pelo menos a primeira skill esteja selecionada ao renderizar.

  Observação: funções auxiliares são usadas para formatar barra de progresso e rótulos.
*/
function renderSkillCategory(catKey) {
    const content = document.getElementById("skill-category-content");
    const category = skillCategories[catKey];
    if (!content) return;
    if (!category) {
        content.innerHTML = "";
        return;
    }
    document.querySelectorAll(".skill-cat-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.cat === catKey);
    });
    let html = "";
    category.forEach((skill, idx) => {
        html += `
      <div class="skill-row" data-cat="${catKey}" data-idx="${idx}" tabindex="0">
        <span class="skill-name">${skill.name}</span>
        <div class="skill-bar-wrap">
          <span class="skill-bar">${getProgressBar(skill.level)}</span>
        </div>
        <span class="skill-pct">${skill.level}%</span>
        <span class="skill-badge">${getCurrentLang() === 'en' ? (skill.type_en || skill.type) : skill.type}</span>
      </div>
    `;
    });
    content.innerHTML = html;
    const rows = content.querySelectorAll(".skill-row");
    rows.forEach((row) => {
        row.addEventListener("click", () => {
            rows.forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            const skill = skillCategories[row.dataset.cat][row.dataset.idx];
            const helpData = getSkillHelpData(skill);
            setHelp(buildHelp(helpData));
            if (window.innerWidth <= 700) showModal(helpData);
        });
        row.addEventListener("mouseenter", () => {
            rows.forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            const skill = skillCategories[row.dataset.cat][row.dataset.idx];
            setHelp(buildHelp(getSkillHelpData(skill)));
        });
    });
    if (rows.length > 0) {
        rows[0].classList.add("selected");
        setHelp(buildHelp(getSkillHelpData(category[0])));
    }
}

// ===== PROJECTS =====
const projectsData = [
    {
        id: "jornada",
        name: "Jornada Viagens",
        subtitle: "Alura — Carreira Full Stack com React",
        subtitle_en: "Alura — Full Stack Career with React",
        link: "https://github.com/diego-rodrigues-git/jornada-viagens",
        description:
            "Projeto desenvolvido durante a trilha Full Stack com React na Alura.\n\nInterface de agência de viagens com componentes React funcionais, estilização CSS moderna e boas práticas de componentização.",
        description_en:
            "Project developed during the Full Stack with React track at Alura.\n\nA travel agency interface built with functional React components, modern CSS styling and good componentization practices.",
        techs: "React, CSS, JavaScript",
    },
    {
        id: "culturama",
        name: "Pesquisa Culturama",
        subtitle: "Alura — Carreira Full Stack com React",
        subtitle_en: "Alura — Full Stack Career with React",
        link: "https://github.com/diego-rodrigues-git/pesquisa-culturama",
        description:
            "Aplicação de pesquisa cultural desenvolvida com React na Alura.\n\nFuncionalidades de busca e filtragem de conteúdo cultural com interface responsiva.",
        description_en:
            "Cultural research application developed with React at Alura.\n\nIncludes search and filter features for cultural content with a responsive interface.",
        techs: "React, JavaScript, CSS",
    },
    {
        id: "tecboard",
        name: "TecBoard",
        subtitle: "Alura — Carreira Full Stack com React",
        subtitle_en: "Alura — Full Stack Career with React",
        link: "https://github.com/diego-rodrigues-git/tecboard",
        description:
            "Board de organização de tarefas/conteúdos técnicos. Projeto desenvolvido durante a trilha Full Stack com React na Alura.",
        description_en:
            "A technical tasks/content organization board. Project developed during the Full Stack with React track at Alura.",
        techs: "React, JavaScript, CSS",
    },
    {
        id: "galarts",
        name: "GalArts",
        subtitle: "ETEC Fernando Prestes — Técnico de Informática para Internet",
        subtitle_en: "ETEC Fernando Prestes — Internet Computing Technician",
        link: "https://github.com/diego-rodrigues-git/galarts",
        description:
            "Galeria de artes desenvolvida no curso Técnico de Informática para Internet da ETEC Fernando Prestes.\n\nProjeto de conclusão com foco em design e apresentação visual de obras.",
        description_en:
            "Art gallery developed during the Internet Computing Technician course at ETEC Fernando Prestes.\n\nFinal project focused on design and visual presentation of artworks.",
        techs: "HTML, CSS, JavaScript",
    },
];

/*
  Renderiza a lista de projetos no painel esquerdo.
  - Atualiza o cabeçalho com a contagem de projetos.
  - Para cada projeto cria um bloco clicável que abre o link do repositório
    ou mostra detalhes (via help/modal) quando selecionado.
  - O primeiro projeto é marcado como selecionado por padrão.
*/
function renderProjects() {
    const container = document.getElementById("projects-container");
    const header = document.getElementById("projects-header");
    if (header) header.textContent = t("projects.header").replace("{count}", projectsData.length);
    if (!container) return;
    let html = "";
    projectsData.forEach((proj, idx) => {
        html += `
      <div class="project-entry${idx === 0 ? " selected" : ""}" data-project="${proj.id}" tabindex="0">
        <span class="proj-arrow">▶</span>
        <div class="proj-body">
          <div class="proj-name">${proj.name}</div>
          <div class="proj-sub">${getCurrentLang() === 'en' && proj.subtitle_en ? proj.subtitle_en : proj.subtitle}</div>
          <a class="proj-link" href="${proj.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${t('projects.view_on_github')}</a>
        </div>
      </div>
    `;
    });
    container.innerHTML = html;
}

/*
  Prepara os dados de ajuda para um projeto específico.
  - Escolhe a descrição/subtítulo conforme o idioma atual.
  - Retorna um objeto com title, body e link usado por buildHelp/showModal.
*/
function getProjectHelpData(proj) {
    const lang = getCurrentLang();
    const desc = lang === "en" && proj.description_en ? proj.description_en : proj.description;
    const subtitle = lang === "en" && proj.subtitle_en ? proj.subtitle_en : proj.subtitle;
    return {
        title: proj.name,
        body: `${subtitle}\n\n${desc}\n\nTecnologias: ${proj.techs}`,
        link: proj.link,
    };
}

/*
  Retorna um projeto pelo seu id (lookup simples em projectsData).
*/
function getProjectById(id) {
    return projectsData.find((p) => p.id === id);
}

// HELP content (PT originals)
const helpTexts = {
    about: {
        title: "SYSTEM INFORMATION",
        body:
            "Este painel exibe informações pessoais e profissionais do desenvolvedor.\n\nUse as setas ← → para navegar entre as seções do portfólio.\n\nUse as setas ↑ ↓ para explorar os itens de cada painel.",
        tip: "← → ou Tab para mudar de seção",
    },
    contact: {
        title: "CONTACT INTERFACES",
        body:
            "Selecione um dos canais de comunicação abaixo para se conectar.\n\nDisponível para freelance, projetos open-source e propostas profissionais.",
        tip: "Enter ou clique para abrir no navegador",
    },
};

const biosHelpData = [
    { title: "DEVELOPER NAME", body: "Nome do desenvolvedor:\n\nDiego Gustavo.", tip: "Use as setas ↑↓ para navegar nos itens" },
    { title: "PROFESSIONAL ROLE", body: "Atuação principal:\n\nDesenvolvedor Web Full-stack (Estudante). Foco em construir projetos reativos, dinâmicos e eficientes.", tip: "Use as setas ↑↓ para navegar nos itens" },
    { title: "GEOGRAPHIC LOCATION", body: "Localização de residência:\n\nBrasil (Sorocaba - SP). Disponível para posições presenciais, híbridas ou remotas.", tip: "Use as setas ↑↓ para navegar nos itens" },
    { title: "BIOGRAPHY SUMMARY", body: "Breve biografia:\n\nApaixonado por tecnologia e desenvolvimento web, buscando crescimento profissional contínuo por meio de desafios reais.", tip: "Use as setas ↑↓ para navegar nos itens" },
];

const contactHelpData = {
    github: { title: "GitHub Interface", body: "Acesse meu perfil do GitHub para conferir repositórios de código aberto, projetos pessoais e contribuições em andamento.\n\nLink: github.com/diego-rodrigues-git", tip: "Enter ou clique para abrir no navegador" },
    linkedin: { title: "LinkedIn Interface", body: "Conecte-se comigo no LinkedIn para networking, discussões profissionais e oportunidades de carreira.\n\nLink: linkedin.com/in/diego-gustavo", tip: "Enter ou clique para abrir no navegador" },
    email: { title: "Email Interface", body: "Envie uma mensagem direta para meu e-mail profissional para propostas de projetos, contratações ou dúvidas.\n\nEndereço: diego.gda.rodrigues@gmail.com", tip: "Enter ou clique para enviar e-mail" },
};

// English variants
const helpTextsEn = {
    about: { title: i18n.en.help.about.title, body: i18n.en.help.about.body, tip: i18n.en.help.about.tip },
    contact: { title: i18n.en.help.contact.title, body: i18n.en.help.contact.body, tip: i18n.en.help.contact.tip },
};
const biosHelpDataEn = [
    { title: "DEVELOPER NAME", body: "Developer name:\n\nDiego Gustavo.", tip: "Use ↑↓ to navigate items" },
    { title: "PROFESSIONAL ROLE", body: "Primary role:\n\nFull-stack Web Developer (Student). Focused on building reactive, dynamic and efficient projects.", tip: "Use ↑↓ to navigate items" },
    { title: "GEOGRAPHIC LOCATION", body: "Residence location:\n\nBrazil (Sorocaba - SP). Available for on-site, hybrid, or remote positions.", tip: "Use ↑↓ to navigate items" },
    { title: "BIOGRAPHY SUMMARY", body: "Short biography:\n\nPassionate about technology and web development, pursuing continuous professional growth through real challenges.", tip: "Use ↑↓ to navigate items" },
];
const contactHelpDataEn = {
    github: { title: "GitHub Interface", body: "Visit my GitHub profile to see open-source repositories, personal projects and ongoing contributions.\n\nLink: github.com/diego-rodrigues-git", tip: "Enter or click to open in browser" },
    linkedin: { title: "LinkedIn Interface", body: "Connect with me on LinkedIn for networking, professional discussions and career opportunities.\n\nLink: linkedin.com/in/diego-gustavo", tip: "Enter or click to open in browser" },
    email: { title: "Email Interface", body: "Send a message to my professional email for project proposals, hiring or inquiries.\n\nAddress: diego.gda.rodrigues@gmail.com", tip: "Enter or click to send email" },
};

function getHelpSlot(name) {
    return getCurrentLang() === "en" ? (helpTextsEn[name] || helpTexts[name]) : (helpTexts[name] || helpTextsEn[name]);
}
function getContactHelp(key) {
    return getCurrentLang() === "en" ? contactHelpDataEn[key] || contactHelpData[key] : contactHelpData[key] || contactHelpDataEn[key];
}
function getBiosHelpData(idx) {
    return getCurrentLang() === "en" ? biosHelpDataEn[idx] || helpTextsEn.about : biosHelpData[idx] || helpTexts.about;
}

/*
  Escapa texto para inserção segura em HTML.
  - Substitui caracteres especiais por entidades e converte quebras de linha em <br>.
  - Usada para evitar injeção simples quando construímos HTML dinamicamente.
*/
function escapeHtml(s) {
    if (!s) return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#039;").replace(/\n/g, "<br>");
}

/*
  Atualiza o painel de HELP exibindo o HTML fornecido.

  Regras e heurísticas:
  - Em dispositivos móveis ou quando o painel direito está escondido/estreito,
    exibimos o conteúdo dentro de um modal (melhor usabilidade em telas pequenas).
  - Caso contrário, simplesmente atualizamos o innerHTML do painel de help.

  Nota detalhada (por que o modal?):
  - Em interfaces responsivas com layout em colunas, o painel de help pode
    ficar sobreposto ou difícil de posicionar em telas muito estreitas.
  - Detectamos isso com isHelpMispositioned() e preferimos abrir um modal centrado,
    que é mais confiável e acessível em dispositivos com ponteiros 'coarse' (touch).
*/
function setHelp(html) {
    const helpEl = document.getElementById("help-body");
    const detailModal = document.getElementById("detail-modal");
    // if the help panel is hidden, too small, or on touch devices, show help in modal
    if (typeof isHelpMispositioned === "function" && isHelpMispositioned()) {
        const modalContent = document.getElementById("modal-content");
        if (modalContent) modalContent.innerHTML = html;
        if (detailModal) detailModal.classList.add("open");
        return;
    }
    if (helpEl) helpEl.innerHTML = html;
}

/*
  Constrói o HTML do painel de help/modal a partir de um objeto de dados.
  - Entrada esperada: { title, body, link?, tip? }.
  - Escapa o conteúdo para evitar XSS básico (escapeHtml) e monta blocos estilizados.
  - Retorna a string HTML pronta para inserção via innerHTML.
*/
function buildHelp(data) {
    if (!data) return "";
    let html = `<div class="help-content">`;
    if (data.title) html += `<div class="help-title">▸ ${escapeHtml(data.title)}</div><hr class="help-divider">`;
    if (data.body) html += `<div class="help-body">${escapeHtml(data.body)}</div>`;
    if (data.link) html += `<br><a class="help-link" href="${data.link}" target="_blank" rel="noopener">${t('projects.view_on_github')}</a>`;
    if (data.tip) html += `<div class="help-tip"><span class="help-key">${escapeHtml(data.tip)}</span></div>`;
    html += `</div>`;
    return html;
}

let currentSection = "about";

/*
  Alterna a seção visível do portfólio (about, skills, projects, contact).

  Passos principais (resumidos):
  1. Atualiza a variável currentSection e marca o botão/nav correspondente como ativo.
  2. Exibe/oculta as seções (manipula classes .active no DOM).
  3. Atualiza o título do painel esquerdo conforme a seção selecionada.
  4. Para cada seção, garante um estado inicial coerente:
     - about: seleciona o primeiro item de bios e mostra seu help
     - skills: renderiza a categoria ativa de skills
     - projects: seleciona o primeiro projeto e mostra o help
     - contact: seleciona o primeiro contato

  Comentário: esta função centraliza a lógica de navegação e chama
  outras rotinas de renderização quando necessário.
*/
function switchSection(section) {
    currentSection = section;
    document.querySelectorAll(".nav-tab").forEach((t) => t.classList.toggle("active", t.dataset.section === section));
    document.querySelectorAll(".mobile-menu-item").forEach((t) => t.classList.toggle("active", t.dataset.section === section));
    document.querySelectorAll(".section").forEach((s) => s.classList.toggle("active", s.id === "sec-" + section));
    const titleEl = document.getElementById("left-panel-title");
    if (titleEl) {
        if (section === "about") titleEl.textContent = getHelpSlot("about").title;
        else if (section === "skills") titleEl.textContent = t("skills.header");
        else if (section === "projects") titleEl.textContent = t("projects.header").replace("{count}", projectsData.length);
        else if (section === "contact") titleEl.textContent = getHelpSlot("contact").title;
        else titleEl.textContent = "▸ " + section.toUpperCase();
    }

    if (section === "about") {
        document.querySelectorAll(".bios-row").forEach((r) => r.classList.remove("selected"));
        const first = document.querySelector(".bios-row");
        if (first) first.classList.add("selected");
        setHelp(buildHelp(getBiosHelpData(0)));
    }

    if (section === "skills") {
        const activeBtn = document.querySelector(".skill-cat-btn.active");
        const cat = activeBtn ? activeBtn.dataset.cat : "programming";
        renderSkillCategory(cat);
    }

    if (section === "projects") {
        document.querySelectorAll(".project-entry").forEach((r) => r.classList.remove("selected"));
        const first = document.querySelector(".project-entry");
        if (first) {
            first.classList.add("selected");
            const proj = getProjectById(first.dataset.project);
            setHelp(buildHelp(getProjectHelpData(proj)));
        }
    }

    if (section === "contact") {
        document.querySelectorAll(".contact-row").forEach((r) => r.classList.remove("selected"));
        const first = document.querySelector(".contact-row");
        if (first) first.classList.add("selected");
        setHelp(buildHelp(getHelpSlot("contact")));
    }
}

/*
  Inicializa handlers e comportamentos interativos da interface.

  Responsabilidades principais:
  - Renderizar projetos iniciais.
  - Registrar listeners para abas de navegação, menu mobile e botões de categoria.
  - Tornar linhas de bios focáveis e reagir a hover/click para atualizar o painel de help.
  - Registrar eventos de teclado globais (handleKeyboard).

  Observação sobre acessibilidade:
  - Rows recebem tabindex para permitir foco via teclado.
  - Eventos keyboard são usados para navegação por seções e seleção de itens.
*/
function initInterface() {
    renderProjects();
    document.querySelectorAll(".nav-tab").forEach((tab) => tab.addEventListener("click", () => { switchSection(tab.dataset.section); closeMobileMenu(); }));
    document.querySelectorAll(".mobile-menu-item").forEach((item) => item.addEventListener("click", () => { switchSection(item.dataset.section); closeMobileMenu(); }));
    document.querySelectorAll(".skill-cat-btn").forEach((btn) => btn.addEventListener("click", () => renderSkillCategory(btn.dataset.cat)));

    document.querySelectorAll(".bios-row").forEach((row, idx) => {
        row.setAttribute("tabindex", "0");
        row.addEventListener("mouseenter", () => {
            document.querySelectorAll(".bios-row").forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            setHelp(buildHelp(getBiosHelpData(idx)));
        });
    });

    document.querySelectorAll(".project-entry").forEach((row) => {
        row.addEventListener("click", (e) => {
            if (e.target.classList.contains("proj-link") || e.target.closest(".proj-link")) return;
            document.querySelectorAll(".project-entry").forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            const proj = getProjectById(row.dataset.project);
            const data = getProjectHelpData(proj);
            setHelp(buildHelp(data));
            if (window.innerWidth <= 700) showModal(data);
        });
        row.addEventListener("mouseenter", () => { document.querySelectorAll(".project-entry").forEach((r) => r.classList.remove("selected")); row.classList.add("selected"); const proj = getProjectById(row.dataset.project); setHelp(buildHelp(getProjectHelpData(proj))); });
    });

    document.querySelectorAll(".contact-row").forEach((row) => {
        row.addEventListener("mouseenter", () => {
            document.querySelectorAll(".contact-row").forEach((r) => r.classList.remove("selected"));
            row.classList.add("selected");
            const key = row.querySelector(".contact-label").textContent.trim().toLowerCase();
            const ch = getContactHelp(key);
            if (ch) setHelp(buildHelp(ch));
        });
        row.addEventListener("mouseleave", () => { setHelp(buildHelp(getHelpSlot("contact"))); });
    });

    switchSection("about");
    document.addEventListener("keydown", handleKeyboard);
}

/*
  Gerencia atalhos de teclado globais.
  - Tab: alterna entre seções (com Shift para ir para trás).
  - ArrowLeft / ArrowRight: navega entre seções.
  - ArrowUp / ArrowDown: navega entre linhas dentro da seção atual.
  - Enter: aciona seleção/abertura dependendo da seção.
  - F5 / F6: atalhos rápidos para GitHub / LinkedIn (imitando chaves do footer).

  A função previne o comportamento padrão quando necessário (e.preventDefault()).
*/
function handleKeyboard(e) {
    const key = e.key;
    if (key === "Tab") {
        e.preventDefault();
        const sections = ["about", "skills", "projects", "contact"];
        const idx = sections.indexOf(currentSection);
        const next = sections[(idx + (e.shiftKey ? sections.length - 1 : 1)) % sections.length];
        switchSection(next);
        return;
    }
    if (key === "ArrowLeft" || key === "ArrowRight") {
        e.preventDefault();
        const sections = ["about", "skills", "projects", "contact"];
        const idx = sections.indexOf(currentSection);
        const offset = key === "ArrowRight" ? 1 : -1;
        const next = sections[(idx + offset + sections.length) % sections.length];
        switchSection(next);
        return;
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
        e.preventDefault();
        navigateRows(key);
        return;
    }
    if (key === "Enter") { handleEnter(e); }
    if (key === "F5") { e.preventDefault(); window.open("https://github.com/diego-rodrigues-git", "_blank"); }
    if (key === "F6") { e.preventDefault(); window.open("https://linkedin.com/in/diego-gustavo", "_blank"); }
}

/*
  Move a seleção (highlight) entre as linhas do painel ativo.

  Implementação por seção:
  - about: controla seleções de .bios-row (nome, função, localização, etc.)
  - skills: percorre .skill-row e atualiza o painel com detalhes da skill
  - projects: seleciona projeto anterior/próximo e atualiza help
  - contact: percorre .contact-row e exibe o help associado

  Detalhe de implementação:
  - A função encontra o índice do item atualmente selecionado,
    calcula o próximo índice (respeitando limites) e aplica foco/seleção.
*/
function navigateRows(key) {
    let rows, sel, nextIdx;
    if (currentSection === "about") {
        rows = Array.from(document.querySelectorAll(".bios-row"));
        sel = rows.findIndex((r) => r.classList.contains("selected"));
        if (rows.length === 0) return;
        nextIdx = key === "ArrowDown" ? Math.min(sel + 1, rows.length - 1) : Math.max(sel - 1, 0);
        rows.forEach((r) => r.classList.remove("selected"));
        rows[nextIdx].classList.add("selected");
        rows[nextIdx].focus();
        setHelp(buildHelp(getBiosHelpData(nextIdx)));
    }
    if (currentSection === "skills") {
        rows = Array.from(document.querySelectorAll(".skill-row"));
        sel = rows.findIndex((r) => r.classList.contains("selected"));
        if (rows.length === 0) return;
        nextIdx = key === "ArrowDown" ? Math.min(sel + 1, rows.length - 1) : Math.max(sel - 1, 0);
        rows.forEach((r) => r.classList.remove("selected"));
        rows[nextIdx].classList.add("selected");
        rows[nextIdx].focus();
        const cat = rows[nextIdx].dataset.cat;
        const idx = parseInt(rows[nextIdx].dataset.idx);
        const skill = skillCategories[cat][idx];
        setHelp(buildHelp(getSkillHelpData(skill)));
    }
    if (currentSection === "projects") {
        rows = Array.from(document.querySelectorAll(".project-entry"));
        sel = rows.findIndex((r) => r.classList.contains("selected"));
        if (rows.length === 0) return;
        nextIdx = key === "ArrowDown" ? Math.min(sel + 1, rows.length - 1) : Math.max(sel - 1, 0);
        rows.forEach((r) => r.classList.remove("selected"));
        rows[nextIdx].classList.add("selected");
        rows[nextIdx].focus();
        const proj = getProjectById(rows[nextIdx].dataset.project);
        setHelp(buildHelp(getProjectHelpData(proj)));
    }
    if (currentSection === "contact") {
        rows = Array.from(document.querySelectorAll(".contact-row"));
        sel = rows.findIndex((r) => r.classList.contains("selected"));
        if (rows.length === 0) return;
        nextIdx = key === "ArrowDown" ? Math.min(sel + 1, rows.length - 1) : Math.max(sel - 1, 0);
        rows.forEach((r) => r.classList.remove("selected"));
        rows[nextIdx].classList.add("selected");
        rows[nextIdx].focus();
        const label = rows[nextIdx].querySelector(".contact-label").textContent.trim().toLowerCase();
        const ch = getContactHelp(label);
        if (ch) setHelp(buildHelp(ch));
    }
}

/*
  Aciona a ação de 'Enter' dependendo da seção atual.
  - projects: se houver link (proj-link) na entrada selecionada, abre em nova aba.
  - contact: abre o href do contato selecionado (pode ser mailto:, url, etc.).
*/
function handleEnter(e) {
    if (currentSection === "projects") {
        const activeProj = document.querySelector(".project-entry.selected");
        if (activeProj) {
            const link = activeProj.querySelector(".proj-link");
            if (link) { e.preventDefault(); window.open(link.href, "_blank"); }
        }
    }
    if (currentSection === "contact") {
        const activeContact = document.querySelector(".contact-row.selected");
        if (activeContact) { e.preventDefault(); window.open(activeContact.href, activeContact.target || "_self"); }
    }
}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
if (hamburger) hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
/*
  Fecha o menu mobile se ele estiver aberto.
  - Útil para garantir que, após selecionar uma seção via menu mobile,
    o menu seja ocultado e não sobreponha o conteúdo.
*/
function closeMobileMenu() { if (mobileMenu) mobileMenu.classList.remove("open"); }

/*
  Exibe um modal de detalhe centralizado (usado principalmente em mobile).
  - data: objeto com title, body e link (mesmo formato que buildHelp aceita).
  - Monta o HTML do conteúdo do modal e adiciona a classe 'open' para exibir.
  - O modal pode ser fechado clicando no botão de fechar ou fora da caixa.
*/
function showModal(data) {
    if (!data) return;
    let html = "";
    if (data.title) html += `<div class="modal-title">▸ ${escapeHtml(data.title)}</div>`;
    if (data.body) html += `<div class="modal-body">${escapeHtml(data.body)}</div>`;
    if (data.link) html += `<br><a class="modal-link" href="${data.link}" target="_blank" rel="noopener">${t('projects.view_on_github')}</a>`;
    const modalContent = document.getElementById("modal-content");
    if (modalContent) modalContent.innerHTML = html;
    const detail = document.getElementById("detail-modal");
    if (detail) detail.classList.add("open");
}

const modalCloseBtn = document.getElementById("modal-close");
if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => { const d = document.getElementById("detail-modal"); if (d) d.classList.remove("open"); });
const detailModalEl = document.getElementById("detail-modal");
if (detailModalEl) detailModalEl.addEventListener("click", (e) => { if (e.target === detailModalEl) detailModalEl.classList.remove("open"); });

// initial render if DOM already in place
try { renderProjects(); } catch (e) { }

// DPI / layout adjustments: scale UI by devicePixelRatio and fall back to modal for small/misaligned help
/*
  Heurística para decidir se o painel de help está mal posicionado
  ou inadequado para exibir conteúdo diretamente (ex.: telas pequenas / touch).

  Critérios:
  - right-panel inexistente -> considera mal posicionado
  - display:none no painel -> mal posicionado
  - largura do painel menor que 260px -> mal posicionado (conteúdo pode quebrar)
  - dispositivo com ponteiro 'coarse' (tipicamente touch) -> prefere modal
  - viewport muito estreita (< 980px) -> prefere modal
*/
function isHelpMispositioned() {
    const rightPanel = document.getElementById("right-panel");
    if (!rightPanel) return true;
    const style = getComputedStyle(rightPanel);
    if (style.display === "none") return true;
    if (rightPanel.clientWidth < 260) return true;
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return true;
    return window.innerWidth < 980;
}
/*
  Ajustes de escala baseados em devicePixelRatio (DPI):
  - Lê window.devicePixelRatio e aplica um 'scale' razoavelmente limitado
    para melhorar legibilidade em telas de alta densidade.
  - Define a variável CSS --dpi-scale para possibilitar regras CSS dependentes
    e tenta aplicar document.body.style.zoom como fallback (alguns navegadores).
  - É acionada em resize e orientationchange para reagir a mudanças de tela.
*/
function applyDpiScaling() {
    const dpr = window.devicePixelRatio || 1;
    // reasonable clamp to avoid excessive scaling
    const scale = Math.min(Math.max(dpr, 1), 1.6);
    document.documentElement.style.setProperty("--dpi-scale", scale);
    try { document.body.style.zoom = scale; } catch (e) { }
}
window.addEventListener("resize", applyDpiScaling);
window.addEventListener("orientationchange", applyDpiScaling);
applyDpiScaling();

