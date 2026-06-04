// scripts.js - cleaned, bilingual, and inline-style-free
// Minimal i18n + rendering for portfolio

const i18n = {
    en: {
        meta: {
            title: "Portfolio - Diego Gustavo",
            description: "Diego Gustavo - Portfolio of a full-stack web developer with projects, skills and contact links.",
            keywords: "Diego Gustavo, portfolio, full-stack web developer, JavaScript, TypeScript, React, Node.js, PHP, MySQL",
            image_alt: "Diego Gustavo portfolio logo",
            locale: "en_US",
        },
        seo: {
            summary_title: "Diego Gustavo portfolio summary",
            summary_body:
                "Portfolio of Diego Gustavo, a full-stack web developer, with project links, skills and contact channels.",
        },
        a11y: {
            skip_content: "Skip to main content",
            sections_label: "Portfolio sections",
            skill_categories_label: "Skill categories",
            language_toggle: "Change language",
            current_section: "Current section: {section}",
        },
        header: { made_by: "MADE BY: DIEGO GUSTAVO" },
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            mobile: {
                about: "[ About ]",
                skills: "[ Skills ]",
                projects: "[ Projects ]",
                contact: "[ Contact ]",
            },
        },
        boot: {
            product: "Diego Gustavo Portfolio  —  v1.0.0",
            copyright: "Copyright (C) 2025, Diego Gustavo",
            role: "Full-stack Web Developer (Student)",
            memory: "Memory Testing    : Skills loaded... OK",
            projects: "Primary Master    : Projects loaded... OK",
            repository: "Primary Slave     : GitHub Repository",
            initializing: "Initializing interface............. OK",
            loading: "Loading portfolio.................. OK",
        },
        boot_skip: "[ Press any key or click to skip ]",
        modal_close: "Close",
        menu: "[ MENU ]",
        menu_label: "Menu",
        about: {
            navigation: "Use Tab to switch sections. In Skills, use ← → to switch categories.",
            contrast: { label: "Theme", toggle: "High Contrast", enabled: "Enabled", disabled: "Disabled" },
        },
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
            panel_title: "▸ PRIMARY MASTER",
            details: "[ Details ]",
            tech_label: "Technologies",
            view_on_github: "[ View on GitHub ↗ ]",
        },
        contact: {
            header: "▸ SYSTEM INTERFACES — select an item to open",
            label: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
            status: "▸ All interfaces : Online — click to connect",
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
            panel_title: "▸ HELP",
            about: {
                title: "SYSTEM INFORMATION",
                body:
                    "This panel shows personal and professional information about the developer.\n\nUse Tab to switch portfolio sections.\n\nUse ↑ ↓ to explore items inside each panel.",
                tip: "Tab to switch sections",
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
        footer: {
            navigate: "Navigate",
            section: "Section",
            select: "Select",
            right_text: "Diego Gustavo Portfolio — v1.0.0",
            copyright: "© 2025",
        },
    },
    pt: {
        meta: {
            title: "Portfólio - Diego Gustavo",
            description: "Diego Gustavo - Portfólio de um desenvolvedor web full-stack com projetos, habilidades e contatos.",
            keywords: "Diego Gustavo, portfólio, desenvolvedor web full-stack, JavaScript, TypeScript, React, Node.js, PHP, MySQL",
            image_alt: "Logo do portfólio de Diego Gustavo",
            locale: "pt_BR",
        },
        seo: {
            summary_title: "Resumo do portfólio de Diego Gustavo",
            summary_body:
                "Portfólio de Diego Gustavo, desenvolvedor web full-stack, com links de projetos, habilidades e canais de contato.",
        },
        a11y: {
            skip_content: "Ir para o conteúdo principal",
            sections_label: "Seções do portfólio",
            skill_categories_label: "Categorias de habilidades",
            language_toggle: "Alternar idioma",
            current_section: "Seção atual: {section}",
        },
        header: { made_by: "FEITO POR: DIEGO GUSTAVO" },
        nav: {
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato",
            mobile: {
                about: "[ Sobre ]",
                skills: "[ Habilidades ]",
                projects: "[ Projetos ]",
                contact: "[ Contato ]",
            },
        },
        boot: {
            product: "Portfólio Diego Gustavo  —  v1.0.0",
            copyright: "Copyright (C) 2025, Diego Gustavo",
            role: "Desenvolvedor Web Full-stack (Estudante)",
            memory: "Teste de Memória  : Habilidades carregadas... OK",
            projects: "Disco Primário    : Projetos carregados... OK",
            repository: "Disco Secundário  : Repositório GitHub",
            initializing: "Inicializando interface............ OK",
            loading: "Carregando portfólio............... OK",
        },
        boot_skip: "[ Pressione qualquer tecla ou clique para pular ]",
        modal_close: "Fechar",
        menu: "[ MENU ]",
        menu_label: "Menu",
        about: {
            navigation: "Use Tab para alternar seções. Em Habilidades, use ← → para alternar categorias.",
            contrast: { label: "Tema", toggle: "Alto Contraste", enabled: "Ativado", disabled: "Desativado" },
        },
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
        memory: { testing: "▸ TESTE DE MEMÓRIA : Todas as skills carregadas... OK" },
        projects: {
            header: "▸ DISCO PRIMÁRIO : {count} entradas encontradas",
            panel_title: "▸ DISCO PRIMÁRIO",
            details: "[ Detalhes ]",
            tech_label: "Tecnologias",
            view_on_github: "[ Ver no GitHub ↗ ]",
        },
        contact: {
            header: "▸ INTERFACES DO SISTEMA — selecione um item para abrir",
            label: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
            status: "▸ Todas as interfaces : Online — clique para conectar",
        },
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
            panel_title: "▸ AJUDA",
            about: {
                title: "INFORMAÇÕES DO SISTEMA",
                body:
                    "Este painel exibe informações pessoais e profissionais do desenvolvedor.\n\nUse Tab para mudar as seções do portfólio.\n\nUse ↑ ↓ para explorar os itens dentro de cada painel.",
                tip: "Tab para mudar de seção",
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
        footer: {
            navigate: "Navegar",
            section: "Seção",
            select: "Selecionar",
            right_text: "Portfólio Diego Gustavo — v1.0.0",
            copyright: "© 2025",
        },
    },
};

const SITE_URL = "https://diego-rodrigues-git.github.io/portfolio/";
const SITE_IMAGE = `${SITE_URL}img/logo.png`;

const STORAGE_KEYS = Object.freeze({
    lang: "site_lang",
    highContrast: "high_contrast",
});

const SECTION_ORDER = Object.freeze(["about", "skills", "projects", "contact"]);
const DEFAULT_SECTION = "about";

let currentSection = DEFAULT_SECTION;
let interfaceInitialized = false;
let lastFocusedElement = null;

/*
  Recupera a linguagem atual do site.
  - Usa localStorage para persistir a escolha do usuário entre sessões.
  - Valor padrão: 'en' (inglês) quando não há preferência salva.
*/
function getCurrentLang() {
    const lang = readStorage(STORAGE_KEYS.lang, "en");
    return i18n[lang] ? lang : "en";
}

/*
  Define a linguagem atual e re-renderiza conteúdo dependente de idioma.
  - Salva em localStorage para persistência.
  - Atualiza traduções visuais e re-renderiza partes dinâmicas
    (projetos, título da seção atual) para refletir o novo idioma.
*/
function setCurrentLang(lang) {
    if (!i18n[lang]) return;
    writeStorage(STORAGE_KEYS.lang, lang);
    applyTranslations();
    renderProjects();
    switchSection(currentSection);
}

function readStorage(key, fallback = "") {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (error) {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        // Private browsing and strict browser settings can block localStorage.
    }
}

function setMeta(selector, attribute, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attribute, value);
}

function getStructuredData() {
    const lang = getCurrentLang();

    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: t("meta.title"),
        url: SITE_URL,
        description: t("meta.description"),
        inLanguage: lang === "pt" ? "pt-BR" : "en",
        image: SITE_IMAGE,
        mainEntity: {
            "@type": "Person",
            name: "Diego Gustavo",
            jobTitle: lang === "pt" ? "Desenvolvedor Web Full-stack" : "Full-stack Web Developer",
            url: SITE_URL,
            image: SITE_IMAGE,
            sameAs: [
                "https://github.com/diego-rodrigues-git",
                "https://linkedin.com/in/diego-gustavo",
            ],
            knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "PHP",
                "MySQL",
                "Web Development",
            ],
        },
    };
}

function announceStatus(message) {
    const status = document.getElementById("sr-status");
    if (!status || !message) return;

    status.textContent = "";
    window.setTimeout(() => {
        status.textContent = message;
    }, 20);
}

function focusMainContent() {
    const target = document.getElementById("left-panel-body");
    if (!target || typeof target.focus !== "function") return;

    try {
        target.focus({ preventScroll: true });
    } catch (error) {
        target.focus();
    }
}

function getSectionLabel(section) {
    const tab = document.querySelector(`.nav-tab[data-section="${section}"]`);
    return tab ? tab.textContent.trim() : section;
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
    const lang = getCurrentLang();
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t("meta.title");

    setMeta('meta[name="description"]', "content", t("meta.description"));
    setMeta('meta[name="keywords"]', "content", t("meta.keywords"));
    setMeta('link[rel="canonical"]', "href", SITE_URL);
    setMeta('meta[property="og:title"]', "content", t("meta.title"));
    setMeta('meta[property="og:description"]', "content", t("meta.description"));
    setMeta('meta[property="og:url"]', "content", SITE_URL);
    setMeta('meta[property="og:image"]', "content", SITE_IMAGE);
    setMeta('meta[property="og:image:alt"]', "content", t("meta.image_alt"));
    setMeta('meta[property="og:locale"]', "content", t("meta.locale"));
    setMeta('meta[property="og:locale:alternate"]', "content", lang === "pt" ? "en_US" : "pt_BR");
    setMeta('meta[name="twitter:title"]', "content", t("meta.title"));
    setMeta('meta[name="twitter:description"]', "content", t("meta.description"));
    setMeta('meta[name="twitter:image"]', "content", SITE_IMAGE);
    setMeta('meta[name="twitter:image:alt"]', "content", t("meta.image_alt"));

    const structuredData = document.getElementById("structured-data");
    if (structuredData) structuredData.textContent = JSON.stringify(getStructuredData());

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) el.textContent = t(key);
    });

    const bootSkip = document.getElementById("boot-skip");
    if (bootSkip) bootSkip.textContent = t("boot_skip");

    const modalClose = document.getElementById("modal-close");
    if (modalClose) modalClose.setAttribute("aria-label", t("modal_close"));

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
        langToggle.textContent = getCurrentLang().toUpperCase();
        langToggle.setAttribute("aria-label", t("a11y.language_toggle"));
    }

    const hamburger = document.getElementById("hamburger");
    const mobileMenuEl = document.getElementById("mobile-menu");
    if (hamburger) {
        hamburger.setAttribute("aria-label", t("menu_label"));
        hamburger.setAttribute("aria-controls", "mobile-menu");
        hamburger.setAttribute("aria-expanded", mobileMenuEl && mobileMenuEl.classList.contains("open") ? "true" : "false");
    }
    if (mobileMenuEl) mobileMenuEl.setAttribute("aria-label", t("a11y.sections_label"));

    const header = document.getElementById("header");
    if (header) header.setAttribute("aria-label", t("a11y.sections_label"));

    const skillCategoriesEl = document.querySelector(".skill-category-buttons");
    if (skillCategoriesEl) skillCategoriesEl.setAttribute("aria-label", t("a11y.skill_categories_label"));

    updateHighContrastControl(document.body.classList.contains("high-contrast") || readStorage(STORAGE_KEYS.highContrast) === "1");
}

// Boot animation lines
const bootLineKeys = [
    "",
    "boot.product",
    "boot.copyright",
    "",
    "boot.role",
    "",
    "boot.memory",
    "boot.projects",
    "boot.repository",
    "",
    "boot.initializing",
    "boot.loading",
    "",
    "boot_skip",
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
        if (currentLine >= bootLineKeys.length) {
            setTimeout(launchMain, 600);
            return;
        }
        const lineKey = bootLineKeys[currentLine];
        const lineText = lineKey ? t(lineKey) : "";
        const el = document.createElement("div");
        el.className = "boot-line";
        if (lineText === "") el.innerHTML = "&nbsp;";
        else {
            if (lineText.includes("OK")) {
                const parts = lineText.split("OK");
                el.innerHTML = parts[0] + '<span class="status-ok">OK</span>' + (parts[1] || "");
            } else el.textContent = lineText;
        }
        if (bootLinesEl) bootLinesEl.appendChild(el);
        currentLine++;
        const delay = Math.random() * 80 + 40;
        setTimeout(printNextLine, delay);
    }
    printNextLine();
})();

if (bootEl) {
    bootEl.addEventListener("click", launchMain);
}

document.addEventListener(
    "keydown",
    () => {
        if (!booted) launchMain();
    },
    { once: true }
);

const skipLink = document.querySelector(".skip-link");
if (skipLink) {
    skipLink.addEventListener("click", (e) => {
        e.preventDefault();
        const wasBooted = booted;
        if (!booted) launchMain();
        window.setTimeout(focusMainContent, wasBooted ? 0 : 700);
    });
}

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
        if (main) {
            main.classList.add("visible");
            main.setAttribute("aria-hidden", "false");
        }
        initInterface();
    }, 650);
}

applyTranslations();

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
        const isActive = btn.dataset.cat === catKey;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
        btn.setAttribute("aria-controls", "skill-category-content");
        btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    content.innerHTML = category
        .map((skill, idx) => {
            const type = getCurrentLang() === "en" ? skill.type_en || skill.type : skill.type;

            return `
                <div class="skill-row" data-cat="${catKey}" data-idx="${idx}" tabindex="0" role="listitem" aria-label="${escapeAttribute(`${skill.name}, ${skill.level}%, ${type}`)}">
                    <span class="skill-name">${escapeHtml(skill.name)}</span>
                    <div class="skill-bar-wrap">
                        <span class="skill-bar">${getProgressBar(skill.level)}</span>
                    </div>
                    <span class="skill-pct">${skill.level}%</span>
                    <span class="skill-badge">${escapeHtml(type)}</span>
                </div>
            `;
        })
        .join("");

    const rows = content.querySelectorAll(".skill-row");
    if (rows.length) {
        rows[0].classList.add("selected");
        rows[0].setAttribute("aria-current", "true");
        setHelp(buildHelp(getSkillHelpData(category[0])), { forcePanel: true });
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
        images: [],
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
        images: [],
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
        images: [],
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
        images: [],
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

    container.innerHTML = projectsData
        .map((proj, idx) => {
            const subtitle = getCurrentLang() === "en" && proj.subtitle_en ? proj.subtitle_en : proj.subtitle;

            return `
                <div class="project-entry${idx === 0 ? " selected" : ""}" data-project="${escapeAttribute(proj.id)}" tabindex="0" role="listitem"${idx === 0 ? ' aria-current="true"' : ""} aria-label="${escapeAttribute(`${proj.name}. ${subtitle}. ${proj.techs}`)}">
                    <span class="proj-arrow">▶</span>
                    <div class="proj-body">
                        <div class="proj-name">${escapeHtml(proj.name)}</div>
                        <div class="proj-sub">${escapeHtml(subtitle)}</div>
                        <div class="proj-actions">
                            <button class="proj-action proj-details" type="button" aria-label="${escapeAttribute(`${t("projects.details")} ${proj.name}`)}">${t("projects.details")}</button>
                            <a class="proj-action proj-link" href="${escapeAttribute(proj.link)}" target="_blank" rel="noopener" aria-label="${escapeAttribute(`${t("projects.view_on_github")} ${proj.name}`)}">${t("projects.view_on_github")}</a>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
}

/*
  Prepara os dados de ajuda para um projeto específico.
  - Escolhe a descrição/subtítulo conforme o idioma atual.
  - Retorna um objeto com title, body e link usado por buildHelp/showModal.
*/
function getProjectHelpData(proj) {
    if (!proj) return null;
    const lang = getCurrentLang();
    const desc = lang === "en" && proj.description_en ? proj.description_en : proj.description;
    const subtitle = lang === "en" && proj.subtitle_en ? proj.subtitle_en : proj.subtitle;
    return {
        title: proj.name,
        body: `${subtitle}\n\n${desc}\n\n${t("projects.tech_label")}: ${proj.techs}`,
        link: proj.link,
    };
}

function getProjectDetailData(proj) {
    if (!proj) return null;

    const base = getProjectHelpData(proj);
    const lang = getCurrentLang();
    const details = lang === "en" && proj.details_en ? proj.details_en : proj.details;

    return {
        ...base,
        body: details || base.body,
        images: Array.isArray(proj.images) ? proj.images : [],
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
        title: "INFORMAÇÕES DO SISTEMA",
        body:
            "Este painel exibe informações pessoais e profissionais do desenvolvedor.\n\nUse Tab para navegar entre as seções do portfólio.\n\nUse as setas ↑ ↓ para explorar os itens de cada painel.",
        tip: "Tab para mudar de seção",
    },
    contact: {
        title: "INTERFACES DE CONTATO",
        body:
            "Selecione um dos canais de comunicação abaixo para se conectar.\n\nDisponível para freelance, projetos open-source e propostas profissionais.",
        tip: "Enter ou clique para abrir no navegador",
    },
};

const biosHelpData = [
    { title: "NOME DO DESENVOLVEDOR", body: "Nome do desenvolvedor:\n\nDiego Gustavo.", tip: "Use as setas ↑↓ para navegar nos itens" },
    { title: "ATUAÇÃO PROFISSIONAL", body: "Atuação principal:\n\nDesenvolvedor Web Full-stack (Estudante). Foco em construir projetos reativos, dinâmicos e eficientes.", tip: "Use as setas ↑↓ para navegar nos itens" },
    { title: "LOCALIZAÇÃO GEOGRÁFICA", body: "Localização de residência:\n\nBrasil (Sorocaba - SP). Disponível para posições presenciais, híbridas ou remotas.", tip: "Use as setas ↑↓ para navegar nos itens" },
    { title: "RESUMO BIOGRÁFICO", body: "Breve biografia:\n\nApaixonado por tecnologia e desenvolvimento web, buscando crescimento profissional contínuo por meio de desafios reais.", tip: "Use as setas ↑↓ para navegar nos itens" },
];

const contactHelpData = {
    github: { title: "Interface GitHub", body: "Acesse meu perfil do GitHub para conferir repositórios de código aberto, projetos pessoais e contribuições em andamento.\n\nLink: github.com/diego-rodrigues-git", tip: "Enter ou clique para abrir no navegador" },
    linkedin: { title: "Interface LinkedIn", body: "Conecte-se comigo no LinkedIn para networking, discussões profissionais e oportunidades de carreira.\n\nLink: linkedin.com/in/diego-gustavo", tip: "Enter ou clique para abrir no navegador" },
    email: { title: "Interface de Email", body: "Envie uma mensagem direta para meu e-mail profissional para propostas de projetos, contratações ou dúvidas.\n\nEndereço: diego.gda.rodrigues@gmail.com", tip: "Enter ou clique para enviar e-mail" },
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

function getPanelTitle(section) {
    if (section === "about") return `▸ ${getHelpSlot("about").title}`;
    if (section === "skills") return t("skills.header");
    if (section === "projects") return t("projects.panel_title");
    if (section === "contact") return `▸ ${getHelpSlot("contact").title}`;
    return `▸ ${String(section).toUpperCase()}`;
}

/*
  Escapa texto para inserção segura em HTML.
  - Substitui caracteres especiais por entidades e converte quebras de linha em <br>.
  - Usada para evitar injeção simples quando construímos HTML dinamicamente.
*/
function escapeText(s) {
    if (s === null || s === undefined) return "";

    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeHtml(s) {
    return escapeText(s).replace(/\n/g, "<br>");
}

function escapeAttribute(s) {
    return escapeText(s);
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
function setHelp(html, options = {}) {
    const helpEl = document.getElementById("help-body");
    const forcePanel = !!options.forcePanel;
    const allowModal = options.allowModal !== undefined ? !!options.allowModal : true;

    if (!forcePanel && allowModal && isHelpMispositioned()) {
        openModalHtml(html);
        return;
    }

    if (helpEl) helpEl.innerHTML = html;
    closeModal({ restoreFocus: false });
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
    if (data.link) html += `<br><a class="help-link" href="${escapeAttribute(data.link)}" target="_blank" rel="noopener">${t("projects.view_on_github")}</a>`;
    if (data.tip) html += `<div class="help-tip"><span class="help-key">${escapeHtml(data.tip)}</span></div>`;
    html += `</div>`;
    return html;
}

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
    if (!SECTION_ORDER.includes(section)) return;

    currentSection = section;
    document.querySelectorAll(".nav-tab").forEach((tab) => {
        const isActive = tab.dataset.section === section;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });
    document.querySelectorAll(".mobile-menu-item").forEach((item) => {
        const isActive = item.dataset.section === section;
        item.classList.toggle("active", isActive);
        if (isActive) item.setAttribute("aria-current", "page");
        else item.removeAttribute("aria-current");
    });
    document.querySelectorAll(".section").forEach((panel) => {
        const isActive = panel.id === "sec-" + section;
        panel.classList.toggle("active", isActive);
        panel.setAttribute("aria-hidden", isActive ? "false" : "true");
    });
    const titleEl = document.getElementById("left-panel-title");
    if (titleEl) titleEl.textContent = getPanelTitle(section);
    announceStatus(t("a11y.current_section").replace("{section}", getSectionLabel(section)));

    if (section === "about") {
        document.querySelectorAll(".bios-row").forEach((r) => {
            r.classList.remove("selected");
            r.removeAttribute("aria-current");
        });
        const first = document.querySelector(".bios-row");
        if (first) {
            first.classList.add("selected");
            first.setAttribute("aria-current", "true");
        }
        setHelp(buildHelp(getBiosHelpData(0)), { forcePanel: true });
    }

    if (section === "skills") {
        const activeBtn = document.querySelector(".skill-cat-btn.active");
        const cat = activeBtn ? activeBtn.dataset.cat : "programming";
        renderSkillCategory(cat);
    }

    if (section === "projects") {
        document.querySelectorAll(".project-entry").forEach((r) => {
            r.classList.remove("selected");
            r.removeAttribute("aria-current");
        });
        const first = document.querySelector(".project-entry");
        if (first) {
            first.classList.add("selected");
            first.setAttribute("aria-current", "true");
            const proj = getProjectById(first.dataset.project);
            setHelp(buildHelp(getProjectHelpData(proj)), { forcePanel: true });
        }
    }

    if (section === "contact") {
        document.querySelectorAll(".contact-row").forEach((r) => {
            r.classList.remove("selected");
            r.removeAttribute("aria-current");
        });
        const first = document.querySelector(".contact-row");
        if (first) {
            first.classList.add("selected");
            first.setAttribute("aria-current", "true");
        }
        setHelp(buildHelp(getHelpSlot("contact")), { forcePanel: true });
    }
}

function selectRow(row, selector, options = {}) {
    if (!row) return;

    document.querySelectorAll(selector).forEach((item) => {
        item.classList.remove("selected");
        item.removeAttribute("aria-current");
    });
    row.classList.add("selected");
    row.setAttribute("aria-current", "true");

    if (options.focus && typeof row.focus === "function") {
        row.focus();
    }
}

function getSkillFromRow(row) {
    if (!row) return null;

    const category = skillCategories[row.dataset.cat];
    const index = Number.parseInt(row.dataset.idx, 10);
    return category && Number.isInteger(index) ? category[index] : null;
}

function selectSkillRow(row, options = {}) {
    const skill = getSkillFromRow(row);
    if (!skill) return;

    selectRow(row, ".skill-row", options);
    setHelp(buildHelp(getSkillHelpData(skill)), { allowModal: options.allowModal !== false });
}

function selectProjectRow(row, options = {}) {
    const project = getProjectById(row && row.dataset.project);
    if (!project) return;

    selectRow(row, ".project-entry", options);
    setHelp(buildHelp(getProjectHelpData(project)), { allowModal: options.allowModal !== false });
}

function showProjectDetails(project) {
    showModal(getProjectDetailData(project));
}

function selectBiosRow(row, idx, options = {}) {
    selectRow(row, ".bios-row", options);
    setHelp(buildHelp(getBiosHelpData(idx)), { allowModal: options.allowModal !== false });
}

function selectContactRow(row, options = {}) {
    if (!row) return;

    selectRow(row, ".contact-row", options);
    const help = getContactHelp(row.dataset.contact);
    if (help) setHelp(buildHelp(help), { allowModal: options.allowModal !== false });
}

function handleLanguageToggle() {
    setCurrentLang(getCurrentLang() === "en" ? "pt" : "en");
}

function updateHighContrastControl(enabled) {
    const hcToggle = document.getElementById("high-contrast-toggle");
    if (!hcToggle) return;

    const isEnabled = !!enabled;
    const stateText = t(isEnabled ? "about.contrast.enabled" : "about.contrast.disabled");
    const label = `${t("about.contrast.label")}: ${stateText}`;

    hcToggle.textContent = stateText;
    hcToggle.setAttribute("aria-pressed", isEnabled ? "true" : "false");
    hcToggle.setAttribute("aria-label", label);
    hcToggle.setAttribute("title", label);
}

function applyHighContrast(enabled) {
    const isEnabled = !!enabled;

    document.body.classList.toggle("high-contrast", isEnabled);
    updateHighContrastControl(isEnabled);
    writeStorage(STORAGE_KEYS.highContrast, isEnabled ? "1" : "0");
}

function toggleHighContrast() {
    const hcToggle = document.getElementById("high-contrast-toggle");
    const isPressed = hcToggle && hcToggle.getAttribute("aria-pressed") === "true";
    applyHighContrast(!isPressed);
}

function getSkillCategoryButtons() {
    return Array.from(document.querySelectorAll(".skill-cat-btn"));
}

function navigateSkillCategory(key, options = {}) {
    const buttons = getSkillCategoryButtons();
    if (!buttons.length) return;

    const focusedIndex = buttons.indexOf(document.activeElement);
    const activeIndex = buttons.findIndex((btn) => btn.classList.contains("active"));
    const currentIndex = focusedIndex >= 0 ? focusedIndex : Math.max(activeIndex, 0);
    let nextIndex = currentIndex;

    if (key === "ArrowLeft") nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    if (key === "ArrowRight") nextIndex = (currentIndex + 1) % buttons.length;
    if (key === "Home") nextIndex = 0;
    if (key === "End") nextIndex = buttons.length - 1;

    const nextButton = buttons[nextIndex];
    if (!nextButton) return;

    renderSkillCategory(nextButton.dataset.cat);
    if (options.focus) nextButton.focus();
}

function handleSkillCategoryKeydown(e) {
    const validKeys = ["ArrowLeft", "ArrowRight", "Home", "End", "Enter", " "];
    if (!validKeys.includes(e.key)) return;

    const currentButton = e.target.closest(".skill-cat-btn");
    if (!currentButton) return;

    e.preventDefault();
    e.stopPropagation();

    if (e.key === "Enter" || e.key === " ") {
        renderSkillCategory(currentButton.dataset.cat);
        return;
    }
    navigateSkillCategory(e.key, { focus: true });
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
    if (interfaceInitialized) {
        switchSection(currentSection);
        return;
    }

    interfaceInitialized = true;
    renderProjects();

    const header = document.getElementById("header");
    if (header) {
        header.addEventListener("click", (e) => {
            const tab = e.target.closest(".nav-tab[data-section]");
            if (!tab) return;

            switchSection(tab.dataset.section);
            closeMobileMenu();
        });
    }

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) langToggle.addEventListener("click", handleLanguageToggle);

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => setMobileMenuOpen(!mobileMenu.classList.contains("open")));
    }

    if (mobileMenu) {
        mobileMenu.addEventListener("click", (e) => {
            const item = e.target.closest(".mobile-menu-item[data-section]");
            if (!item) return;

            switchSection(item.dataset.section);
            closeMobileMenu();
        });
    }

    document.querySelectorAll(".skill-cat-btn").forEach((btn) => {
        btn.setAttribute("tabindex", "0");
        btn.setAttribute("role", "tab");
    });

    const catContainer = document.querySelector(".skill-category-buttons");
    if (catContainer) {
        catContainer.setAttribute("role", "tablist");
        catContainer.addEventListener("click", (e) => {
            const btn = e.target.closest(".skill-cat-btn");
            if (btn) renderSkillCategory(btn.dataset.cat);
        });
        catContainer.addEventListener("keydown", handleSkillCategoryKeydown);
    }

    const skillContent = document.getElementById("skill-category-content");
    if (skillContent) {
        skillContent.addEventListener("click", (e) => {
            const row = e.target.closest(".skill-row");
            if (row) selectSkillRow(row);
        });
        skillContent.addEventListener("mouseover", (e) => {
            const row = e.target.closest(".skill-row");
            if (row && !row.contains(e.relatedTarget)) selectSkillRow(row, { allowModal: false });
        });
    }

    document.querySelectorAll(".bios-row").forEach((row, idx) => {
        row.setAttribute("tabindex", "0");
        row.addEventListener("click", (e) => {
            if (e.target.closest("a, button, [role='button']")) return;
            selectBiosRow(row, idx);
        });
        row.addEventListener("mouseenter", () => selectBiosRow(row, idx, { allowModal: false }));
    });

    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projectsContainer.addEventListener("click", (e) => {
            const detailsButton = e.target.closest(".proj-details");
            if (detailsButton) {
                const row = detailsButton.closest(".project-entry");
                const project = getProjectById(row && row.dataset.project);
                if (!project) return;

                selectProjectRow(row, { allowModal: false });
                showProjectDetails(project);
                return;
            }

            if (e.target.closest(".proj-link")) return;

            const row = e.target.closest(".project-entry");
            if (row) selectProjectRow(row, { allowModal: false });
        });
        projectsContainer.addEventListener("mouseover", (e) => {
            const row = e.target.closest(".project-entry");
            if (row && !row.contains(e.relatedTarget)) selectProjectRow(row, { allowModal: false });
        });
    }

    document.querySelectorAll(".contact-row").forEach((row) => {
        row.setAttribute("tabindex", "0");
        row.addEventListener("mouseenter", () => selectContactRow(row, { allowModal: false }));
        row.addEventListener("mouseleave", () => { setHelp(buildHelp(getHelpSlot("contact")), { allowModal: false }); });
    });

    const hcToggle = document.getElementById("high-contrast-toggle");
    if (hcToggle) {
        hcToggle.addEventListener("click", toggleHighContrast);
        hcToggle.addEventListener("keydown", (e) => {
            if (e.key !== "Enter" && e.key !== " ") return;

            e.preventDefault();
            e.stopPropagation();
            toggleHighContrast();
        });
        applyHighContrast(readStorage(STORAGE_KEYS.highContrast) === "1");
    }

    switchSection(DEFAULT_SECTION);
    document.addEventListener("keydown", handleKeyboard);
}

/*
  Gerencia atalhos de teclado globais.
  - Tab: alterna entre seções (com Shift para ir para trás).
  - ArrowLeft / ArrowRight: navega entre sub-abas quando Skills está ativa.
  - ArrowUp / ArrowDown: navega entre linhas dentro da seção atual.
  - Enter: aciona seleção/abertura dependendo da seção.
  - F5 / F6: atalhos rápidos para GitHub / LinkedIn (imitando chaves do footer).

  A função previne o comportamento padrão quando necessário (e.preventDefault()).
*/
function handleKeyboard(e) {
    if (e.defaultPrevented) return;

    const key = e.key;
    if (isModalOpen()) {
        if (key === "Escape") {
            e.preventDefault();
            closeModal();
        }
        if (key === "Tab") {
            trapModalFocus(e);
        }
        return;
    }

    if (key === "Tab") {
        e.preventDefault();
        const idx = SECTION_ORDER.indexOf(currentSection);
        const next = SECTION_ORDER[(idx + (e.shiftKey ? SECTION_ORDER.length - 1 : 1)) % SECTION_ORDER.length];
        switchSection(next);
        return;
    }

    if (key === "ArrowLeft" || key === "ArrowRight") {
        if (currentSection !== "skills") return;
        e.preventDefault();
        navigateSkillCategory(key);
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

function getNextSelectedIndex(rows, key) {
    const currentIndex = rows.findIndex((row) => row.classList.contains("selected"));
    if (currentIndex < 0) return 0;

    return key === "ArrowDown"
        ? Math.min(currentIndex + 1, rows.length - 1)
        : Math.max(currentIndex - 1, 0);
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
    if (currentSection === "about") {
        const rows = Array.from(document.querySelectorAll(".bios-row"));
        if (rows.length === 0) return;
        const nextIdx = getNextSelectedIndex(rows, key);
        selectBiosRow(rows[nextIdx], nextIdx, { allowModal: false, focus: true });
        return;
    }

    if (currentSection === "skills") {
        const rows = Array.from(document.querySelectorAll(".skill-row"));
        if (rows.length === 0) return;
        selectSkillRow(rows[getNextSelectedIndex(rows, key)], { allowModal: false, focus: true });
        return;
    }

    if (currentSection === "projects") {
        const rows = Array.from(document.querySelectorAll(".project-entry"));
        if (rows.length === 0) return;
        selectProjectRow(rows[getNextSelectedIndex(rows, key)], { allowModal: false, focus: true });
        return;
    }

    if (currentSection === "contact") {
        const rows = Array.from(document.querySelectorAll(".contact-row"));
        if (rows.length === 0) return;
        selectContactRow(rows[getNextSelectedIndex(rows, key)], { allowModal: false, focus: true });
    }
}

/*
  Aciona a ação de 'Enter' dependendo da seção atual.
  - about: se a linha de tema estiver selecionada, alterna alto contraste.
  - projects: se houver link (proj-link) na entrada selecionada, abre em nova aba.
  - contact: abre o href do contato selecionado (pode ser mailto:, url, etc.).
*/
function handleEnter(e) {
    if (currentSection === "about") {
        const activeRow = document.querySelector(".bios-row.selected");
        if (activeRow && activeRow.id === "contrast-toggle-row") {
            e.preventDefault();
            toggleHighContrast();
        }
    }

    if (currentSection === "projects") {
        const activeProj = document.querySelector(".project-entry.selected");
        if (activeProj) {
            const project = getProjectById(activeProj.dataset.project);
            if (project) {
                e.preventDefault();
                showProjectDetails(project);
            }
        }
    }
    if (currentSection === "contact") {
        const activeContact = document.querySelector(".contact-row.selected");
        if (activeContact) { e.preventDefault(); window.open(activeContact.href, activeContact.target || "_self"); }
    }
}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

function setMobileMenuOpen(open) {
    if (!mobileMenu) return;

    mobileMenu.classList.toggle("open", !!open);
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    if (hamburger) hamburger.setAttribute("aria-expanded", open ? "true" : "false");
}

/*
  Fecha o menu mobile se ele estiver aberto.
  - Útil para garantir que, após selecionar uma seção via menu mobile,
    o menu seja ocultado e não sobreponha o conteúdo.
*/
function closeMobileMenu() { setMobileMenuOpen(false); }

function isModalOpen() {
    const detail = document.getElementById("detail-modal");
    return !!detail && detail.classList.contains("open");
}

function getFocusableElements(root) {
    if (!root) return [];
    const selector = [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    return Array.from(root.querySelectorAll(selector)).filter((el) => {
        const style = getComputedStyle(el);
        return style.display !== "none" && style.visibility !== "hidden";
    });
}

function trapModalFocus(e) {
    const detail = document.getElementById("detail-modal");
    const focusable = getFocusableElements(detail);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}

function openModalHtml(html) {
    const detail = document.getElementById("detail-modal");
    const modalContent = document.getElementById("modal-content");
    if (!detail || !modalContent) return;

    const active = document.activeElement;
    if (!isModalOpen() && active && active !== document.body && typeof active.focus === "function") {
        lastFocusedElement = active;
    }

    modalContent.innerHTML = html;
    const titleEl = modalContent.querySelector("#modal-title, .modal-title, .help-title");
    if (titleEl) {
        if (!titleEl.id) titleEl.id = "modal-title";
        detail.setAttribute("aria-labelledby", titleEl.id);
        detail.removeAttribute("aria-label");
    } else {
        detail.removeAttribute("aria-labelledby");
        detail.setAttribute("aria-label", t("help.panel_title"));
    }
    const descriptionEl = modalContent.querySelector("#modal-description, .modal-body, .help-body");
    if (descriptionEl) {
        if (!descriptionEl.id) descriptionEl.id = "modal-description";
        detail.setAttribute("aria-describedby", descriptionEl.id);
    } else {
        detail.removeAttribute("aria-describedby");
    }
    detail.classList.add("open");
    detail.setAttribute("aria-hidden", "false");
    const main = document.getElementById("main-interface");
    if (main) main.setAttribute("inert", "");

    const closeBtn = document.getElementById("modal-close");
    if (closeBtn) {
        try {
            closeBtn.focus({ preventScroll: true });
        } catch (error) {
            closeBtn.focus();
        }
    }
}

function closeModal(options = {}) {
    const restoreFocus = options.restoreFocus !== false;
    const detail = document.getElementById("detail-modal");
    if (!detail) return;

    detail.classList.remove("open");
    detail.setAttribute("aria-hidden", "true");
    detail.removeAttribute("aria-labelledby");
    detail.removeAttribute("aria-describedby");
    const main = document.getElementById("main-interface");
    if (main) main.removeAttribute("inert");

    if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        try {
            lastFocusedElement.focus({ preventScroll: true });
        } catch (error) {
            lastFocusedElement.focus();
        }
    }

    lastFocusedElement = null;
}

/*
  Exibe um modal de detalhe centralizado (usado principalmente em mobile).
  - data: objeto com title, body e link (mesmo formato que buildHelp aceita).
  - Monta o HTML do conteúdo do modal e adiciona a classe 'open' para exibir.
  - O modal pode ser fechado clicando no botão de fechar ou fora da caixa.
*/
function showModal(data) {
    if (!data) return;
    let html = "";
    if (data.title) html += `<div class="modal-title" id="modal-title">▸ ${escapeHtml(data.title)}</div>`;
    if (Array.isArray(data.images) && data.images.length) {
        html += `<div class="modal-gallery">`;
        data.images.forEach((image) => {
            const src = typeof image === "string" ? image : image.src;
            if (!src) return;

            const alt = typeof image === "string" ? data.title || "" : image.alt || data.title || "";
            const caption = typeof image === "string" ? "" : image.caption || "";

            html += `
                <figure class="modal-figure">
                    <img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" />
                    ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
                </figure>
            `;
        });
        html += `</div>`;
    }
    if (data.body) html += `<div class="modal-body">${escapeHtml(data.body)}</div>`;
    if (data.link) html += `<br><a class="modal-link" href="${escapeAttribute(data.link)}" target="_blank" rel="noopener">${t("projects.view_on_github")}</a>`;
    openModalHtml(html);
}

const modalCloseBtn = document.getElementById("modal-close");
if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => closeModal());
const detailModalEl = document.getElementById("detail-modal");
if (detailModalEl) detailModalEl.addEventListener("click", (e) => { if (e.target === detailModalEl) closeModal(); });

// DPI / layout adjustments: scale text by viewport/DPI and fall back to modal for small/misaligned help
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
  Ajustes de escala baseados no viewport e em devicePixelRatio (DPI):
  - Aumenta fontes em monitores muito grandes mantendo limites previsíveis.
  - Define --dpi-scale e variáveis --font-* consumidas pelo CSS.
  - É acionada em resize e orientationchange para reagir a mudanças de tela.
*/
function applyDpiScaling() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth || 1366;
    const height = window.innerHeight || 768;
    const viewportFactor = Math.max(width / 1440, height / 900);
    const dprFactor = dpr > 1 ? 1 + Math.min(dpr - 1, 2) * 0.12 : 1;
    const scale = Math.min(Math.max(viewportFactor * dprFactor, 1), 1.85);
    const rootStyle = document.documentElement.style;
    const fontSizes = [4, 5, 10, 11, 12, 13, 14, 18];

    rootStyle.setProperty("--dpi-scale", scale.toFixed(2));
    fontSizes.forEach((size) => {
        rootStyle.setProperty(`--font-${size}`, `${(size * scale).toFixed(2)}px`);
    });

    document.body.style.zoom = "";
}
window.addEventListener("resize", applyDpiScaling);
window.addEventListener("orientationchange", applyDpiScaling);
applyDpiScaling();

