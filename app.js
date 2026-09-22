// Retro Pixel-Art SVG Icons Catalog (CRT / 8-Bit Hardware Theme)
const RetroIcons = {
    crt: (cls = "w-7 h-7") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="none" shape-rendering="crispEdges">
            <path d="M2 1h12v10H2V1zm1 1v8h10V2H3z" fill="#f59e0b"/>
            <rect x="4" y="3" width="8" height="6" fill="#090b10"/>
            <rect x="5" y="4" width="2" height="1" fill="#22c55e"/>
            <rect x="6" y="5" width="2" height="1" fill="#22c55e"/>
            <rect x="5" y="6" width="2" height="1" fill="#22c55e"/>
            <rect x="8" y="7" width="3" height="1" fill="#4ade80"/>
            <rect x="12" y="9" width="1" height="1" fill="#ef4444"/>
            <rect x="6" y="11" width="4" height="2" fill="#d97706"/>
            <rect x="4" y="13" width="8" height="2" fill="#f59e0b"/>
        </svg>
    `,
    wrench: (cls = "w-4 h-4") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M10 0h2v1h-1v1h3v2h-1v1h-1v1H8v1H7v2H5v1H2v3h3v-3h1v-1h2v-2h1V8h1V7h1V6h1V4h-2V1z"/>
        </svg>
    `,
    terminal: (cls = "w-4 h-4") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M1 2h14v12H1V2zm2 2v8h10V4H3z"/>
            <rect x="4" y="5" width="2" height="1"/>
            <rect x="5" y="6" width="2" height="1"/>
            <rect x="4" y="7" width="2" height="1"/>
            <rect x="7" y="7" width="3" height="1"/>
        </svg>
    `,
    network: (cls = "w-4 h-4") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <rect x="6" y="1" width="4" height="4"/>
            <rect x="1" y="11" width="4" height="4"/>
            <rect x="11" y="11" width="4" height="4"/>
            <rect x="7" y="5" width="2" height="4"/>
            <rect x="3" y="8" width="10" height="1"/>
            <rect x="2" y="9" width="2" height="2"/>
            <rect x="12" y="9" width="2" height="2"/>
        </svg>
    `,
    ticket: (cls = "w-4 h-4") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <rect x="5" y="1" width="6" height="2"/>
            <path d="M3 3h10v12H3V3zm2 3v2h2V6H5zm3 1h4v1H8V7zm-3 3v2h2v-2H5zm3 1h4v1H8v-1z"/>
        </svg>
    `,
    cli: (cls = "w-4 h-4") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M2 3h2v2H2V3zm2 2h2v2H4V5zm2 2h2v2H6V7zm-2 2h2v2H4V9zm-2 2h2v2H2v-2zm7 2h5v2H9v-2z"/>
        </svg>
    `,
    chip: (cls = "w-6 h-6") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <rect x="3" y="3" width="10" height="10"/>
            <rect x="5" y="5" width="6" height="6" fill="#090b10"/>
            <rect x="4" y="1" width="1" height="2"/><rect x="6" y="1" width="1" height="2"/>
            <rect x="9" y="1" width="1" height="2"/><rect x="11" y="1" width="1" height="2"/>
            <rect x="4" y="13" width="1" height="2"/><rect x="6" y="13" width="1" height="2"/>
            <rect x="9" y="13" width="1" height="2"/><rect x="11" y="13" width="1" height="2"/>
            <rect x="1" y="4" width="2" height="1"/><rect x="1" y="6" width="2" height="1"/>
            <rect x="1" y="9" width="2" height="1"/><rect x="1" y="11" width="2" height="1"/>
            <rect x="13" y="4" width="2" height="1"/><rect x="13" y="6" width="2" height="1"/>
            <rect x="13" y="9" width="2" height="1"/><rect x="13" y="11" width="2" height="1"/>
        </svg>
    `,
    floppy: (cls = "w-5 h-5") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M1 1h11l3 3v11H1V1zm2 2v4h8V3H3zm2 7v4h6v-4H5z"/>
        </svg>
    `,
    star: (cls = "w-4 h-4") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M7 1h2v3h2v2h3v2h-2v2h1v3h-3v-2H8v2H5v-3h1V8H4V6h3V4h2V1H7z"/>
        </svg>
    `,
    lock: (cls = "w-8 h-8") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M5 2h6v4h2v9H3V6h2V2zm2 2v2h2V4H7zm-2 5v4h6V9H5zm2 1h2v2H7v-2z"/>
        </svg>
    `,
    video: (cls = "w-10 h-10") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M1 2h14v12H1V2zm2 2v8h10V4H3zm3 2l5 2-5 2V6z"/>
        </svg>
    `,
    check: (cls = "w-5 h-5") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M13 3l2 2-8 9-5-5 2-2 3 3 6-7z"/>
        </svg>
    `,
    cross: (cls = "w-5 h-5") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M2 2h3v2h2v2h2V4h2V2h3v3h-2v2h-2v2h2v2h2v3h-3v-2h-2v-2H7v2H5v2H2v-3h2v-2h2V9H4V7H2V2z"/>
        </svg>
    `,
    info: (cls = "w-5 h-5") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M7 1h2v2H7V1zm0 3h2v6H7V4zm0 8h2v2H7v-2z"/>
        </svg>
    `,
    chevronDown: (cls = "w-3.5 h-3.5") => `
        <svg class="${cls} flex-shrink-0 transition-transform duration-200" viewBox="0 0 16 16" fill="currentColor" shape-rendering="crispEdges">
            <path d="M3 6h10l-5 5-5-5z"/>
        </svg>
    `,
    play: (cls = "w-3 h-3") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 8 8" fill="currentColor" shape-rendering="crispEdges">
            <path d="M2 1v6l5-3-5-3z"/>
        </svg>
    `,
    arrowLeft: (cls = "w-3 h-3") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 8 8" fill="currentColor" shape-rendering="crispEdges">
            <path d="M5 1v6L2 4l3-3z"/>
        </svg>
    `,
    arrowRight: (cls = "w-3 h-3") => `
        <svg class="${cls} flex-shrink-0 inline-block" viewBox="0 0 8 8" fill="currentColor" shape-rendering="crispEdges">
            <path d="M3 1v6l3-3-3-3z"/>
        </svg>
    `
};

const app = {
    currentQuiz: null,
    quizState: [],
    desktopSidebarCollapsed: false,
    
    init: function() {
        this.renderSidebar();
        
        // Auto-load Home Screen instead of first lesson
        this.renderHome();

        this.setupMobileMenu();
    },

    setupMobileMenu: function() {
        const btn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (!btn || !sidebar || !overlay) return;

        const openMenu = () => {
            sidebar.classList.add('mobile-open');
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            requestAnimationFrame(() => {
                overlay.classList.add('opacity-100');
                overlay.classList.remove('opacity-0');
            });
        };

        const closeMenu = () => {
            sidebar.classList.remove('mobile-open');
            sidebar.classList.add('-translate-x-full');
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0');
            setTimeout(() => {
                if (!sidebar.classList.contains('mobile-open')) {
                    overlay.classList.add('hidden');
                }
            }, 300);
        };

        this.openMobileMenu = openMenu;
        this.closeMobileMenu = closeMenu;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar.classList.contains('mobile-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        overlay.addEventListener('click', closeMenu);
    },

    desktopSidebarCollapsed: false,

    toggleDesktopSidebar: function() {
        const sidebar = document.getElementById('sidebar');
        const collapseBtn = document.getElementById('sidebar-collapse-btn');
        if (!sidebar) return;
        
        this.desktopSidebarCollapsed = !this.desktopSidebarCollapsed;
        
        if (this.desktopSidebarCollapsed) {
            // RÈGLE 1 : Activer le Mode Navigation Rail (réduire la sidebar à 72px)
            sidebar.classList.add('sidebar-collapsed');
            if (collapseBtn) {
                collapseBtn.innerHTML = '<span>[&gt;]</span>';
                collapseBtn.title = 'Déployer le menu';
            }
        } else {
            // RÈGLE 1 : Quitter le Mode Navigation Rail (réafficher la sidebar complète)
            sidebar.classList.remove('sidebar-collapsed');
            if (collapseBtn) {
                collapseBtn.innerHTML = '<span>[&lt;]</span>';
                collapseBtn.title = 'Réduire le menu';
            }
        }
    },

    _typewriterInterval: null,

    initTypewriter: function() {
        const target = document.getElementById('retro-title');
        if (!target) return;
        target.textContent = "FORMATION EN OPÉRATEUR INFORMATIQUE";
        if (this._typewriterInterval) {
            clearInterval(this._typewriterInterval);
            this._typewriterInterval = null;
        }
    },

    renderHome: function() {
        // Deselect nav items
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            el.classList.add('text-slate-400');
        });

        if (window.innerWidth < 1024 && this.closeMobileMenu) {
            this.closeMobileMenu();
        }

        const schoolModule = itCampusData.modules.find(m => m.id === 'm3') || itCampusData.modules[0];
        const otherModules = itCampusData.modules.filter(m => m.id !== schoolModule.id);

        const getModuleStats = (mod) => {
            let total = 0;
            let available = 0;
            let firstLessonId = null;
            mod.phases.forEach(p => {
                total += p.lessons.length;
                p.lessons.forEach(l => {
                    if (l.status === 'available') available++;
                    if (!firstLessonId && l.status === 'available') firstLessonId = l.id;
                });
            });
            if (!firstLessonId && mod.phases.length > 0 && mod.phases[0].lessons.length > 0) {
                firstLessonId = mod.phases[0].lessons[0].id;
            }
            return { total, available, firstLessonId };
        };

        const schoolStats = getModuleStats(schoolModule);

        let html = `
        <div class="max-w-6xl mx-auto p-4 sm:p-8 lg:p-10 pb-24">
            <!-- Retro System Status Banner -->
            <div class="mb-10 text-center max-w-3xl mx-auto">
                <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-900 border-2 border-zinc-700 text-zinc-400 text-[10px] sm:text-[11px] font-arcade mb-6 shadow-[3px_3px_0px_#000]">
                    <span class="text-amber-400">●</span>
                    <span class="text-zinc-200">SYS.READY</span>
                    <span class="text-zinc-600">|</span>
                    <span class="text-emerald-400">STAGE 01</span>
                    <span class="text-zinc-600">|</span>
                    <span class="text-amber-400">PROMO 2025-2026</span>
                </div>

                <!-- Animated Pixel Typewriter Title -->
                <h1 class="heading-main text-3xl sm:text-5xl lg:text-6xl font-bold tracking-normal mb-5 leading-tight min-h-[3.6rem] flex items-center justify-center flex-wrap">
                    <span id="retro-title">FORMATION EN OPÉRATEUR INFORMATIQUE</span><span id="retro-cursor" class="animate-pixel-cursor text-[var(--primary-green)] inline-block ml-1">█</span>
                </h1>

                <!-- Retro Mission Briefing Dialogue Box -->
                <div class="briefing-box briefing-box--green max-w-3xl mx-auto">
                    <div class="briefing-header briefing-header--orange">
                        <span>[ MISSION BRIEFING // CAMPUS IT ]</span>
                        <span class="text-[var(--primary-green)] flex items-center gap-1">${RetroIcons.play('w-2.5 h-2.5')} READY</span>
                    </div>
                    <p class="paragraph-body">
                        Acquérez les compétences d'intervention sur poste client : dépannage matériel &amp; logiciel, diagnostic sous PowerShell, gestion de tickets d'assistance et administration des réseaux locaux.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[var(--border-muted)]">
                        <span class="badge-terminal">${RetroIcons.wrench('w-3.5 h-3.5')} Support N1/N2</span>
                        <span class="badge-terminal">${RetroIcons.terminal('w-3.5 h-3.5')} Windows &amp; Linux</span>
                        <span class="badge-terminal">${RetroIcons.network('w-3.5 h-3.5')} Réseau Local</span>
                        <span class="badge-terminal">${RetroIcons.ticket('w-3.5 h-3.5')} GLPI Helpdesk</span>
                        <span class="badge-terminal">${RetroIcons.cli('w-3.5 h-3.5')} PowerShell CLI</span>
                    </div>
                </div>
            </div>

            <!-- SECTION 1 : MAIN QUEST (Module École m3) -->
            <div class="mb-12">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <span class="text-[var(--primary-green)]">${RetroIcons.crt('w-7 h-7')}</span>
                        <h2 class="heading-sub !m-0 !text-2xl sm:!text-3xl !text-[var(--primary-green)]">
                            Quête Principale • Formation École
                        </h2>
                    </div>
                    <span class="badge-terminal">
                        MAIN QUEST
                    </span>
                </div>

                <!-- Main Quest Terminal Card -->
                <div class="card-terminal p-6 sm:p-8 cursor-pointer" onclick="app.renderModuleDetails('${schoolModule.id}')">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div class="flex-1">
                            <div class="flex flex-wrap items-center gap-2 mb-3">
                                <span class="badge-terminal">
                                    CURSUS OFFICIEL
                                </span>
                                <span class="badge-terminal !border-[var(--border-muted)] !text-[var(--text-muted)] !bg-transparent">
                                    ${schoolModule.phases.length} INTITULÉ(S)
                                </span>
                                <span class="badge-terminal !border-[var(--border-muted)] !text-[var(--text-muted)] !bg-transparent">
                                    ${schoolStats.total} COURS
                                </span>
                            </div>

                            <h3 class="card-terminal-title text-2xl sm:text-3xl flex items-center gap-2.5">
                                ${RetroIcons.crt('w-6 h-6 text-emerald-400')}
                                <span>${schoolModule.title}</span>
                            </h3>
                            
                            <p class="paragraph-muted line-clamp-3 max-w-2xl">
                                ${schoolModule.description || "Retrouvez ici l'ensemble des cours dispensés en formation, les synthèses de promotion, les supports officiels de cours et les fiches de révision pour les examens."}
                            </p>

                            <!-- Quest Stages Preview -->
                            <div class="flex flex-wrap gap-2 mt-3">
                                ${schoolModule.phases.map((p, idx) => `
                                    <div class="px-3 py-1.5 bg-zinc-950 border border-emerald-800 text-emerald-100 font-sans text-xs flex items-center gap-2 shadow-[2px_2px_0px_rgba(4,120,87,0.3)]">
                                        ${p.image ? `<img src="${p.image}" class="w-5 h-5 object-cover rounded-sm border border-emerald-900/50">` : ''}
                                        <span class="text-emerald-400 font-mono text-[10px] font-bold">COURS ${idx+1}</span>
                                        <span>${p.title}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="lg:w-64 flex-shrink-0 flex flex-col justify-center">
                            <button class="pixel-btn w-full py-4 px-6 bg-[var(--primary-green-muted)] hover:bg-[var(--primary-green)] text-black font-arcade text-xs font-bold border-2 border-[var(--primary-green)] flex items-center justify-center gap-2 pointer-events-none">
                                ${RetroIcons.play('w-3.5 h-3.5 text-black')}
                                <span>START MISSION</span>
                            </button>
                            <div class="text-center font-arcade text-[9px] text-[var(--text-muted)] mt-2">[ PRESS TO ENTER ]</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECTION 2 : SECONDARY TRAINING GROUNDS -->
            <div class="mb-8">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-amber-400">${RetroIcons.chip('w-7 h-7 text-amber-400')}</span>
                    <h2 class="heading-sub !m-0 !text-2xl sm:!text-3xl !text-amber-400">
                        Chantiers &amp; Ateliers Pratiques
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        `;

        otherModules.forEach((mod) => {
            const stats = getModuleStats(mod);
            const isM1 = mod.id === 'm1';
            const badgeLabel = isM1 ? 'STAGE 01 • WORKSHOP' : 'STAGE 02 • WORKSHOP';
            const accentColor = isM1 ? 'text-amber-400' : 'text-cyan-400';
            const barBg = isM1 ? 'bg-amber-400' : 'bg-cyan-400';
            const btnBg = isM1 ? 'bg-amber-500 hover:bg-amber-400 border-amber-300' : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-600';
            const btnText = isM1 ? 'text-zinc-950' : 'text-zinc-200';
            const modIcon = isM1 ? RetroIcons.wrench('w-5 h-5 text-amber-400') : RetroIcons.network('w-5 h-5 text-cyan-400');
            const percent = stats.total > 0 ? Math.round((stats.available / stats.total) * 100) : 0;

            const segmentsHtml = mod.phases.map(p => {
                const hasAvail = p.lessons.some(l => l.status === 'available');
                return `<div class="h-full ${hasAvail ? barBg : 'bg-zinc-800'} flex-1"></div>`;
            }).join('');

            html += `
                <div class="card-terminal cursor-pointer h-full" onclick="app.renderModuleDetails('${mod.id}')">
                    <div class="flex items-center justify-between mb-3">
                        <span class="badge-terminal">
                            ${badgeLabel}
                        </span>
                        <span class="text-[var(--text-muted)] font-sans text-xs">
                            ${stats.total} LEÇONS
                        </span>
                    </div>

                    <h3 class="card-terminal-title text-xl sm:text-2xl mb-2 flex items-center gap-2.5">
                        ${modIcon}
                        <span>${mod.title}</span>
                    </h3>
                    
                    <p class="paragraph-muted line-clamp-3 mb-4">
                        Ateliers pratiques, cas de dépannage réels et travaux dirigés pour forger vos réflexes techniques.
                    </p>

                    <!-- 8-Bit Progress bar -->
                    <div class="w-full mb-6 mt-auto">
                        <div class="text-[10px] text-[var(--text-muted)] mb-1.5 flex justify-between font-mono">
                            <span>STAGE PROGRESSION</span>
                            <span class="${accentColor} font-bold">${stats.available}/${stats.total} DISPO (${percent}%)</span>
                        </div>
                        <div class="w-full h-3 bg-black border border-[var(--border-muted)] p-0.5 flex gap-1">
                            ${segmentsHtml}
                        </div>
                    </div>

                    <div class="pt-4 border-t border-[var(--border-muted)] flex items-center justify-between font-sans">
                        <span class="text-xs text-[var(--text-muted)]">${mod.phases.length} PHASES</span>
                        <button class="pixel-btn px-4 py-2 ${btnBg} ${btnText} font-arcade text-[10px] font-bold border-2 pointer-events-none flex items-center gap-1.5">
                            ${RetroIcons.play('w-3 h-3')} EXPLORER
                        </button>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        </div>
        `;

        document.getElementById('main-content').innerHTML = html;
        document.getElementById('main-content').scrollTop = 0;

        // Launch retro typewriter
        this.initTypewriter();
    },

    renderModuleDetails: function(moduleId) {
        // Deselect nav items
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            el.classList.add('text-slate-400');
        });

        if (window.innerWidth < 1024 && this.closeMobileMenu) {
            this.closeMobileMenu();
        }

        const mod = itCampusData.modules.find(m => m.id === moduleId);
        if (!mod) return;

        const isSchool = mod.id === 'm3';
        let progressHeaderHtml = '';
        if (!isSchool) {
            let totalAvail = 0;
            let totalAll = 0;
            mod.phases.forEach(p => {
                totalAll += p.lessons.length;
                totalAvail += p.lessons.filter(l => l.status === 'available').length;
            });
            const modPercent = totalAll > 0 ? Math.round((totalAvail / totalAll) * 100) : 0;
            const isM1 = mod.id === 'm1';
            const accentColor = isM1 ? 'text-amber-400' : 'text-cyan-400';
            const barBg = isM1 ? 'bg-amber-400' : 'bg-cyan-400';
            const segments = mod.phases.map(p => {
                const hasAvail = p.lessons.some(l => l.status === 'available');
                return `<div class="h-full ${hasAvail ? barBg : 'bg-zinc-800'} flex-1"></div>`;
            }).join('');

            progressHeaderHtml = `
                <div class="max-w-md mt-5 pt-4 border-t border-zinc-800">
                    <div class="font-arcade text-[9px] text-zinc-400 mb-1.5 flex justify-between">
                        <span>STAGE PROGRESSION</span>
                        <span class="${accentColor} font-bold">${totalAvail}/${totalAll} DISPO (${modPercent}%)</span>
                    </div>
                    <div class="w-full h-3 bg-zinc-950 border border-zinc-700 p-0.5 flex gap-1">
                        ${segments}
                    </div>
                </div>
            `;
        }

        let html = `
        <div class="max-w-6xl mx-auto p-4 sm:p-8 lg:p-10 pb-24">
            <button onclick="app.renderHome()" class="pixel-btn mb-8 px-4 py-2 bg-zinc-900 border-2 border-zinc-700 text-zinc-300 hover:text-white font-arcade text-[10px] flex items-center gap-2 group w-fit">
                ${RetroIcons.arrowLeft('w-3 h-3')} RETOUR ACCUEIL
            </button>
            
            <div class="briefing-box briefing-box--green mb-10">
                <div class="briefing-header briefing-header--orange">
                    <span class="flex items-center gap-2">
                        ${RetroIcons.crt('w-4 h-4 text-amber-400')} [ MODULE BRIEFING // IT CAMPUS ]
                    </span>
                    <span class="${mod.id === 'm3' ? 'text-emerald-400' : 'text-[var(--primary-green)]'} font-mono text-[10px]">${mod.phases.length} ${mod.id === 'm3' ? 'INTITULÉS' : 'STAGES'}</span>
                </div>
                <h1 class="heading-main text-2xl sm:text-4xl font-bold tracking-wide mb-3 leading-tight">${mod.title}</h1>
                <p class="paragraph-body">${mod.description || (mod.id === 'm3' ? "Sélectionnez un cours pour commencer." : "Sélectionnez une phase d'apprentissage pour continuer l'entraînement.")}</p>
                ${progressHeaderHtml}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;

        mod.phases.forEach((phase, pIndex) => {
            let totalLessons = phase.lessons.length;
            let availableLessons = phase.lessons.filter(l => l.status === 'available').length;
            let firstLessonId = phase.lessons.length > 0 ? phase.lessons[0].id : null;

            html += `
                <div class="card-terminal cursor-pointer group" onclick="app.renderPhaseIndex('phase-${itCampusData.modules.findIndex(m => m.id === mod.id)}-${pIndex}')">
                    <div class="flex items-start justify-between mb-4">
                        <span class="${mod.id === 'm3' ? 'px-3 py-1.5 bg-zinc-950 border border-emerald-800 text-emerald-400 font-mono text-xs font-bold shadow-[2px_2px_0px_rgba(4,120,87,0.3)]' : 'badge-terminal'}">${mod.id === 'm3' ? 'COURS' : 'STAGE'} 0${pIndex + 1}</span>
                        <span class="badge-terminal !border-[var(--border-muted)] !text-[var(--text-muted)] !bg-transparent">${availableLessons}/${totalLessons} ${mod.id === 'm3' ? 'COURS' : 'DISPO'}</span>
                    </div>
                    ${phase.image ? `<div class="mb-4 overflow-hidden border-2 border-zinc-800 group-hover:${mod.id === 'm3' ? 'border-emerald-600' : 'border-[var(--primary-green)]'} transition-colors"><img src="${phase.image}" alt="${phase.title}" class="w-full h-32 object-cover opacity-75 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"></div>` : ''}
                    <h3 class="card-terminal-title text-xl mb-2 group-hover:${mod.id === 'm3' ? 'text-emerald-400' : 'text-[var(--primary-green)]'} transition-colors">${phase.title}</h3>
                    <p class="paragraph-muted line-clamp-3 text-xs mb-4">
                        Consultez le cours détaillé, visualisez la vidéo explicative et validez vos compétences par le quiz interactif.
                    </p>
                    <div class="text-xs text-[var(--text-muted)] mt-auto pt-4 border-t border-[var(--border-muted)] flex items-center justify-between font-sans">
                        <span>Démarrer le stage</span>
                        <span class="text-[var(--primary-green)] font-mono text-xs flex items-center gap-1">${RetroIcons.play('w-2.5 h-2.5')}</span>
                    </div>
                </div>
            `;
        });

        html += `
            </div>
        </div>
        `;

        document.getElementById('main-content').innerHTML = html;
        document.getElementById('main-content').scrollTop = 0;
        
        // Open the module in sidebar if it's closed
        const modEl = document.getElementById(`module-${mod.id}`);
        if (modEl && modEl.classList.contains('hidden')) {
            this.toggleModule(`module-${mod.id}`);
        }
    },

    renderSidebar: function() {
        const container = document.getElementById('nav-container');
        let html = '<ul class="sidebar-modules-list space-y-3">';
        
        itCampusData.modules.forEach((mod, mIndex) => {
            const moduleId = `module-${mod.id}`;
            const isSchool = mod.id === 'm3';
            const isM1 = mod.id === 'm1';
            
            const btnClass = isSchool
                ? 'bg-emerald-950/40 hover:bg-emerald-900/40 border-2 border-emerald-500/70 text-emerald-200 pixel-btn'
                : 'bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-800 text-zinc-300 pixel-btn';

            const modIcon = isSchool 
                ? RetroIcons.crt('w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5 sidebar-icon')
                : (isM1 ? RetroIcons.wrench('w-3.5 h-3.5 text-amber-400 mr-2 flex-shrink-0 mt-0.5 sidebar-icon') : RetroIcons.network('w-3.5 h-3.5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5 sidebar-icon'));

            const badgeSchool = isSchool
                ? `<span class="badge-school px-1.5 py-0.5 bg-emerald-500 text-zinc-950 font-arcade text-[8px] font-bold mr-2 flex-shrink-0 mt-0.5">ÉCOLE</span>`
                : '';

            html += `
            <li class="sidebar-module-item">
                <button class="w-full flex items-start justify-between py-2 px-3 text-left hover:text-white border transition-colors group shadow-sm focus:outline-none ${btnClass}" onclick="app.toggleModule('${moduleId}')" title="${mod.title}">
                    <div class="sidebar-btn-content flex items-start min-w-0 pr-2 flex-1 font-pixel text-sm tracking-wide">
                        ${modIcon}
                        ${badgeSchool}
                        <span class="sidebar-module-title" title="${mod.title}">${mod.title}</span>
                    </div>
                    <div id="icon-${moduleId}" class="sidebar-chevron text-zinc-500 group-hover:text-amber-400 transition-transform duration-200 flex-shrink-0 ml-2 mt-0.5">
                        ${RetroIcons.chevronDown('w-3.5 h-3.5')}
                    </div>
                </button>
                <div id="${moduleId}" class="hidden flex-col mt-1.5 pl-2.5 space-y-1 border-l-2 border-zinc-800 ml-3">
                    <ul class="list-none p-0 m-0 space-y-1.5">
            `;
            mod.phases.forEach((phase, pIndex) => {
                const phaseId = `phase-${mIndex}-${pIndex}`;
                html += `
                        <li class="sidebar-phase-item">
                            <button class="w-full flex items-start justify-between py-1.5 px-2 text-left text-[13px] font-mono text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors group focus:outline-none" onclick="app.togglePhase('${phaseId}')" title="${phase.title}">
                                <span class="sidebar-phase-title pr-2" title="${phase.title}">${phase.title}</span>
                                <div id="icon-${phaseId}" class="sidebar-chevron text-zinc-500 group-hover:text-zinc-300 transition-transform duration-200 flex-shrink-0 mt-0.5">
                                    ${RetroIcons.chevronDown('w-3 h-3')}
                                </div>
                            </button>
                            <div id="${phaseId}" class="hidden flex-col pl-2.5 py-0.5 space-y-0.5 border-l border-zinc-700/60 ml-2 mt-0.5">
                                <ul class="list-none p-0 m-0 space-y-0.5">
                `;
                phase.lessons.forEach(lesson => {
                    const isAvailable = lesson.status === 'available';
                    const badgeClass = isAvailable ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/60 font-arcade' : 'bg-zinc-950 text-zinc-600 border border-zinc-800 font-arcade';
                    const badgeContent = isAvailable 
                        ? 'READY' 
                        : `<span class="inline-flex items-center gap-1">${RetroIcons.lock('w-2.5 h-2.5')} LOCK</span>`;
                    
                    html += `
                                    <li class="sidebar-lesson-item">
                                        <button onclick="app.loadLesson('${lesson.id}')" id="nav-${lesson.id}" class="w-full text-left py-1.5 px-2 text-[13px] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 transition-all flex items-start justify-between group focus:outline-none font-mono" title="${lesson.title}">
                                            <span class="sidebar-lesson-title mr-2" title="${lesson.title}">${lesson.title}</span>
                                            <span class="sidebar-badge text-[8px] px-1 py-0.5 uppercase tracking-wider flex-shrink-0 mt-0.5 ${badgeClass}">${badgeContent}</span>
                                        </button>
                                    </li>
                    `;
                });
                html += `
                                </ul>
                            </div>
                        </li>
                `;
            });
            html += `
                    </ul>
                </div>
            </li>
            `;
        });
        
        html += '</ul>';
        container.innerHTML = html;
        // Expand first module by default
        this.toggleModule(`module-${itCampusData.modules[0].id}`);
    },

    toggleModule: function(moduleId) {
        let wasAutoOpened = false;
        // RÈGLE 4 : Auto-ouverture du Navigation Rail
        if (window.innerWidth >= 1024 && this.desktopSidebarCollapsed) {
            this.toggleDesktopSidebar();
            wasAutoOpened = true;
        }

        const targetId = moduleId.startsWith('module-') ? moduleId : `module-${moduleId}`;
        const el = document.getElementById(targetId);
        const icon = document.getElementById(`icon-${targetId}`);
        if (!el) return;

        const isOpening = el.classList.contains('hidden') || wasAutoOpened;

        // RÈGLE 3 : Accordéon strict - fermer automatiquement tous les autres modules ouverts
        itCampusData.modules.forEach(m => {
            const otherId = `module-${m.id}`;
            if (otherId !== targetId) {
                const otherEl = document.getElementById(otherId);
                const otherIcon = document.getElementById(`icon-${otherId}`);
                if (otherEl && !otherEl.classList.contains('hidden')) {
                    otherEl.classList.add('hidden');
                    otherEl.classList.remove('flex');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                }
            }
        });

        // Bascule de l'élément cliqué
        if (isOpening) {
            el.classList.remove('hidden');
            el.classList.add('flex');
            if (icon) icon.classList.add('rotate-180');
        } else {
            el.classList.add('hidden');
            el.classList.remove('flex');
            if (icon) icon.classList.remove('rotate-180');
        }
    },

    renderPhaseIndex: function(domPhaseId) {
        const parts = domPhaseId.split('-');
        if (parts.length !== 3) return;
        const mIndex = parseInt(parts[1], 10);
        const pIndex = parseInt(parts[2], 10);
        const currentModule = itCampusData.modules[mIndex];
        const currentPhase = currentModule.phases[pIndex];

        if (!currentPhase) return;

        // Active Nav State Styling for sidebar
        document.querySelectorAll('.sidebar-lesson-title').forEach(el => {
            el.parentElement.classList.remove('bg-zinc-800/80', 'text-zinc-200', 'border-l-2', 'border-[var(--primary-green)]', 'pl-1.5');
            el.parentElement.classList.add('text-zinc-400');
        });

        const isM3 = currentModule.id === 'm3';
        const accentColor = isM3 ? 'text-emerald-400' : 'text-[var(--primary-green)]';
        const borderColor = isM3 ? 'border-emerald-500' : 'border-[var(--primary-green)]';
        const bgHover = isM3 ? 'hover:bg-emerald-900/30' : 'hover:bg-[var(--primary-green-muted)]';
        
        let html = `
        <article class="max-w-4xl mx-auto p-4 sm:p-8 lg:p-10 pb-24 font-sans text-[var(--text-primary)]">
            <header class="mb-10 border-b border-zinc-800 pb-6">
                <div class="flex items-center gap-3 mb-4">
                    <span class="px-2 py-1 bg-black border border-zinc-700 text-zinc-400 font-mono text-[10px] tracking-wider uppercase">
                        ${isM3 ? 'INDEX DU COURS' : 'INDEX DE LA PHASE'}
                    </span>
                    <span class="badge-terminal !border-[var(--border-muted)] !text-emerald-400 !bg-emerald-900/20">
                        [ ACCÈS AUTORISÉ ]
                    </span>
                </div>
                <h1 class="heading-main text-3xl sm:text-5xl font-bold tracking-wide mb-4 leading-tight flex items-center gap-4">
                    ${isM3 ? RetroIcons.floppy('w-10 h-10 text-emerald-400') : RetroIcons.floppy('w-10 h-10 text-[var(--primary-green)]')}
                    <span>${currentPhase.title}</span>
                </h1>
                <p class="paragraph-body text-zinc-400">
                    SÉLECTIONNEZ ${isM3 ? 'UN CHAPITRE' : 'UNE LEÇON'} POUR DÉMARRER.
                </p>
                <div class="mt-6">
                    ${currentPhase.lessons.length > 0 && currentPhase.lessons[0].status === 'available' ? `
                        <button onclick="app.loadLesson('${currentPhase.lessons[0].id}')" class="pixel-btn px-6 py-3 bg-zinc-950 border-2 ${borderColor} ${accentColor} hover:bg-zinc-900 font-arcade text-xs font-bold flex items-center gap-2">
                            ${RetroIcons.play('w-4 h-4')} REPRENDRE LA MISSION
                        </button>
                    ` : ''}
                </div>
            </header>

            <div class="bg-black border border-zinc-800 rounded-sm p-4 font-mono text-sm shadow-[4px_4px_0px_#000]">
                <div class="text-zinc-500 mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
                    ${RetroIcons.terminal('w-4 h-4')} <span>root@it-campus:~/${currentModule.id}/${currentPhase.id}# ls -l</span>
                </div>
                <div class="flex flex-col">
                    <div class="grid grid-cols-12 text-zinc-600 border-b border-zinc-900 pb-2 mb-2 text-[10px] uppercase tracking-wider">
                        <div class="col-span-2 sm:col-span-1 text-center">STATUT</div>
                        <div class="col-span-7 sm:col-span-8">NOM DU FICHIER</div>
                        <div class="col-span-3 sm:col-span-3 text-right">TAILLE</div>
                    </div>
        `;

        currentPhase.lessons.forEach(l => {
            const isAvail = l.status === 'available';
            const icon = isAvail ? RetroIcons.cli('w-4 h-4 text-zinc-400') : RetroIcons.lock('w-4 h-4 text-red-500');
            const rowClass = isAvail ? `cursor-pointer ${bgHover} hover:text-white group` : 'opacity-50 cursor-not-allowed';
            const clickAction = isAvail ? `onclick="app.loadLesson('${l.id}')"` : '';
            const statusText = isAvail ? '[ ✓ ]' : '[ X ]';
            const statusColor = isAvail ? accentColor : 'text-zinc-600';
            const sizeText = isAvail ? '15 min' : 'LOCKED';

            html += `
                    <div class="grid grid-cols-12 items-center py-3 border-b border-zinc-900/50 ${rowClass} transition-colors" ${clickAction}>
                        <div class="col-span-2 sm:col-span-1 text-center ${statusColor} font-bold text-xs">
                            ${statusText}
                        </div>
                        <div class="col-span-7 sm:col-span-8 flex items-center gap-3 pr-4">
                            <span class="group-hover:text-emerald-300 transition-colors flex-shrink-0">${icon}</span>
                            <span class="truncate ${isAvail ? 'text-zinc-300 group-hover:text-white font-semibold text-xs sm:text-sm' : 'text-zinc-600 text-xs sm:text-sm'}">${l.title}</span>
                        </div>
                        <div class="col-span-3 sm:col-span-3 text-right text-zinc-500 text-xs font-sans">
                            ${sizeText}
                        </div>
                    </div>
            `;
        });

        html += `
                </div>
                <div class="text-zinc-500 mt-4 pt-2 border-t border-zinc-800 flex items-center gap-2">
                    Total: ${currentPhase.lessons.length} item(s)
                </div>
            </div>
        </article>
        `;

        document.getElementById('main-content').innerHTML = html;
        document.getElementById('main-content').scrollTop = 0;
    },

    togglePhase: function(phaseId) {
        const el = document.getElementById(phaseId);
        const icon = document.getElementById(`icon-${phaseId}`);
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            el.classList.add('flex');
            icon.classList.add('rotate-180');
            
            // Render index page when expanding
            this.renderPhaseIndex(phaseId);
        } else {
            el.classList.add('hidden');
            el.classList.remove('flex');
            icon.classList.remove('rotate-180');
        }
    },

    loadLesson: function(lessonId) {
        let currentModule, currentPhase, currentLesson;
        let flatLessons = [];
        
        itCampusData.modules.forEach(m => {
            m.phases.forEach(p => {
                p.lessons.forEach(l => {
                    flatLessons.push({ lesson: l, phase: p, module: m });
                    if (l.id === lessonId) {
                        currentLesson = l;
                        currentPhase = p;
                        currentModule = m;
                    }
                });
            });
        });

        if (!currentLesson) return;
        
        // Active Nav State Styling
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            el.classList.add('text-slate-400');
        });
        const activeNav = document.getElementById(`nav-${lessonId}`);
        if (activeNav) {
            activeNav.classList.remove('text-zinc-400', 'text-slate-400');
            activeNav.classList.add('bg-zinc-800', 'text-emerald-400', 'border-l-2', 'border-emerald-500');
            
            const parentPhase = activeNav.closest('[id^="phase-"]');
            if (parentPhase && parentPhase.classList.contains('hidden')) {
                this.togglePhase(parentPhase.id);
            }
            const parentModule = activeNav.closest('[id^="module-"]');
            if (parentModule && parentModule.classList.contains('hidden')) {
                this.toggleModule(parentModule.id);
            }
        }
        
        // Auto-close sidebar on mobile after click
        if (window.innerWidth < 1024 && this.closeMobileMenu) {
            this.closeMobileMenu();
        }

        let currentIndex = flatLessons.findIndex(item => item.lesson.id === lessonId);
        let prevLesson = currentIndex > 0 ? flatLessons[currentIndex - 1].lesson : null;
        let nextLesson = currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1].lesson : null;

        // Build HTML
        let contentHtml = '';
        if (currentLesson.status === 'available') {
            contentHtml = currentLesson.content;
        } else {
            contentHtml = `
            <div class="bg-zinc-900 border-2 border-dashed border-zinc-700 p-12 text-center max-w-3xl mx-auto shadow-[4px_4px_0px_#000]">
                <div class="text-zinc-600 mb-4 flex justify-center">${RetroIcons.lock('w-12 h-12 text-zinc-600')}</div>
                <div class="font-arcade text-xs text-zinc-500 mb-2">[ STAGE LOCKED ]</div>
                <h3 class="font-pixel text-2xl font-bold text-zinc-200 mb-3">STAGE EN COURS DE DÉVELOPPEMENT</h3>
                <p class="text-zinc-400 font-mono max-w-md mx-auto text-sm">Le contenu, la vidéo et le quiz seront bientôt débloqués par le formateur.</p>
            </div>
            `;
        }

        let videoHtml = '';
        if (currentLesson.status === 'available' && currentLesson.videoUrl) {
            videoHtml = `
            <iframe src="${currentLesson.videoUrl}" class="w-full h-full absolute inset-0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="absolute top-3 right-3 z-10 hidden group-hover:block">
                <a href="${currentLesson.videoUrl.replace('/embed/', '/watch?v=')}" target="_blank" class="pixel-btn bg-zinc-900 text-white px-3 py-1.5 border border-zinc-700 flex items-center gap-2 text-xs font-arcade transition-all">
                    ${RetroIcons.play('w-3 h-3 text-red-500')} YOUTUBE
                </a>
            </div>
            `;
        } else if (currentLesson.status === 'available' && currentLesson.imageUrl) {
            videoHtml = `
            <img src="${currentLesson.imageUrl}" alt="${currentLesson.title}" class="w-full h-full object-cover absolute inset-0">
            `;
        } else {
            videoHtml = `
            <div class="text-center p-8 absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 font-arcade">
                <div class="text-zinc-700 mb-4 flex justify-center">${RetroIcons.video('w-12 h-12 text-zinc-600')}</div>
                <div class="text-xs text-zinc-500 mb-2">[ VIDEO STANDBY ]</div>
                <h3 class="text-base text-zinc-300 mb-2">SUPPORT VIDÉO À VENIR</h3>
                <p class="text-zinc-500 max-w-md mx-auto text-xs font-mono">Le flux vidéo interactif sera activé pour cette leçon.</p>
            </div>`;
        }

        let html = `
        <article class="reading-container">
            <!-- Header -->
            <header class="mb-8">
                <div class="lesson-nav-header flex items-center justify-between mt-10 mb-8 font-sans text-xs flex-wrap gap-3">
                    <div class="flex items-center gap-2.5">
                        <button onclick="app.renderModuleDetails('${currentModule.id}')" class="pixel-btn px-2.5 py-1 bg-zinc-900 text-zinc-300 hover:text-[var(--primary-green)] border border-zinc-700 shadow-[2px_2px_0px_#000] flex items-center gap-1.5 cursor-pointer font-sans text-xs">
                            ${RetroIcons.arrowLeft('w-2.5 h-2.5')} ${currentModule.title.split(' : ')[0]}
                        </button>
                        <span class="badge-terminal">${currentPhase.title.split(' : ')[0]}</span>
                    </div>
                    ${currentLesson.quiz && currentLesson.quiz.length > 0 ? `<a href="#quiz-container" class="pixel-btn px-3 py-1 bg-[var(--primary-green-muted)] text-zinc-950 font-sans text-xs font-bold border border-emerald-300 flex items-center gap-1.5 hover:bg-[var(--primary-green)] transition-colors">${RetroIcons.chevronDown('w-3 h-3 text-zinc-950')} QUIZ</a>` : ''}
                </div>
                <h1 class="heading-main text-2xl sm:text-4xl font-bold tracking-wide mb-5 leading-tight">${currentLesson.title}</h1>
                
                ${currentLesson.objective ? `
                <div class="briefing-box briefing-box--green">
                    <div class="briefing-header briefing-header--green">
                        <span class="flex items-center gap-2">
                            ${RetroIcons.cli('w-3.5 h-3.5 text-[var(--primary-green)]')} [ OBJECTIF D'APPRENTISSAGE ]
                        </span>
                        <span class="badge-terminal">MISSION CRITIQUE</span>
                    </div>
                    <p class="paragraph-body leading-relaxed">${currentLesson.objective}</p>
                </div>
                ` : ''}
            </header>

            <!-- Video Section -->
            <div class="mb-10">
                <div class="w-full aspect-video bg-zinc-950 border-2 border-zinc-700 shadow-[4px_4px_0px_0px_#000] overflow-hidden flex items-center justify-center relative group">
                    ${videoHtml}
                </div>
            </div>

            <!-- Content Area (Lecture ergonomique dans conteneur 800px max) -->
            <div class="mb-14 font-sans text-[var(--text-primary)] leading-relaxed lesson-content">
                ${contentHtml}
            </div>

            <!-- Quiz Section -->
            <div class="mb-12" id="quiz-container">
            </div>

            <!-- Navigation Buttons -->
            <footer class="flex items-center justify-between pt-6 border-t-2 border-[var(--border-muted)] mb-12">
                ${prevLesson ? `<button onclick="app.loadLesson('${prevLesson.id}')" class="pixel-btn px-4 sm:px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 text-zinc-300 font-sans text-xs font-bold flex items-center gap-2 focus:outline-none">${RetroIcons.arrowLeft('w-3.5 h-3.5')} <span class="hidden sm:inline">Précédent</span></button>` : '<div></div>'}
                ${nextLesson ? `<button onclick="app.loadLesson('${nextLesson.id}')" class="pixel-btn px-4 sm:px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans text-xs font-bold border-2 border-emerald-300 flex items-center gap-2 focus:outline-none"><span class="hidden sm:inline">Suivant</span> ${RetroIcons.arrowRight('w-3.5 h-3.5 text-zinc-950')}</button>` : '<div></div>'}
            </footer>
        </article>
        `;
        
        document.getElementById('main-content').innerHTML = html;
        document.getElementById('main-content').scrollTop = 0;

        if (currentLesson.status === 'available' && currentLesson.quiz && currentLesson.quiz.length > 0) {
            this.initQuiz(currentLesson);
        }
    },
    
    initQuiz: function(lesson) {
        const container = document.getElementById('quiz-container');
        if (!container || !lesson.quiz) return;
        
        this.quizState = {
            lessonId: lesson.id,
            questions: lesson.quiz,
            currentIndex: 0,
            userAnswers: new Array(lesson.quiz.length).fill(null)
        };
        
        this.renderQuizStep();
    },

    renderQuizStep: function() {
        const container = document.getElementById('quiz-container');
        const state = this.quizState;
        
        if (state.currentIndex >= state.questions.length) {
            let score = 0;
            state.userAnswers.forEach((ans, idx) => {
                const q = state.questions[idx];
                if (q.type === 'single') {
                    if (q.options[ans]?.isCorrect) score++;
                } else if (q.type === 'multiple') {
                    const corrects = q.options.map((o, i) => o.isCorrect ? i : -1).filter(i => i !== -1);
                    if (ans && Array.isArray(ans) && corrects.length === ans.length && corrects.every(c => ans.includes(c))) score++;
                } else if (q.type === 'text') {
                    if (q.correctAnswers.some(c => c.toLowerCase() === (ans || '').trim().toLowerCase())) score++;
                }
            });
            
            container.innerHTML = `
                <div class="bg-zinc-900 border-2 border-[var(--primary-green)] p-8 sm:p-12 text-center shadow-[6px_6px_0px_0px_#000] relative">
                    <div class="font-sans text-xs sm:text-sm text-[var(--primary-green)] mb-2 tracking-widest font-bold flex items-center justify-center gap-2">
                        ${RetroIcons.star('w-4 h-4 text-[var(--primary-green)]')} STAGE CLEAR ${RetroIcons.star('w-4 h-4 text-[var(--primary-green)]')}
                    </div>
                    <h3 class="font-pixel text-3xl sm:text-4xl font-bold text-zinc-100 mb-2 tracking-wide">Quiz terminé !</h3>
                    <p class="paragraph-muted text-sm mb-6 mx-auto text-center font-sans">Évaluation enregistrée pour cette session.</p>
                    <div class="font-sans text-4xl sm:text-5xl text-[var(--primary-green)] mb-8 font-bold">${score} / ${state.questions.length} XP</div>
                    <button onclick="app.loadLesson('${state.lessonId}')" class="pixel-btn px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-zinc-950 font-sans text-xs font-bold border-2 border-emerald-300 flex items-center justify-center gap-2 mx-auto">
                        ${RetroIcons.play('w-3.5 h-3.5 text-zinc-950')} RECOMMENCER
                    </button>
                </div>
            `;
            return;
        }

        const q = state.questions[state.currentIndex];
        let optionsHtml = '';
        
        if (q.type === 'single' || q.type === 'multiple') {
            optionsHtml = `<div class="space-y-3 mt-6">`;
            q.options.forEach((opt, idx) => {
                const type = q.type === 'single' ? 'radio' : 'checkbox';
                const name = `quiz_q${state.currentIndex}`;
                optionsHtml += `
                    <label class="flex items-start gap-3.5 p-4 border-2 border-[var(--border-muted)] bg-[var(--bg-card)] cursor-pointer hover:bg-zinc-800/80 hover:border-zinc-500 transition-all has-[:checked]:bg-zinc-800 has-[:checked]:border-[var(--primary-green)] group pixel-card font-sans">
                        <input type="${type}" name="${name}" value="${idx}" class="mt-1 w-4 h-4 accent-emerald-500 flex-shrink-0" onchange="app.handleQuizSelection()">
                        <span class="text-[var(--text-primary)] font-sans text-sm group-has-[:checked]:text-emerald-200 leading-relaxed">${opt.text}</span>
                    </label>
                `;
            });
            optionsHtml += `</div>`;
        } else if (q.type === 'text') {
            optionsHtml = `
                <div class="mt-6">
                    <input type="text" id="quiz_text_input" class="w-full bg-black border-2 border-[var(--border-muted)] px-4 py-3 text-[var(--text-primary)] placeholder-zinc-600 focus:outline-none focus:border-[var(--primary-green)] font-sans text-base shadow-inner" placeholder="Saisissez votre réponse ici..." oninput="app.handleQuizSelection()">
                </div>
            `;
        }

        container.innerHTML = `
            <div class="card-terminal !p-0 overflow-hidden flex flex-col">
                <div class="bg-zinc-950 px-6 py-3.5 flex items-center justify-between border-b-2 border-[var(--border-muted)] font-sans text-xs">
                    <span class="text-[var(--primary-green)] flex items-center gap-2 font-bold uppercase tracking-wider">
                        ${RetroIcons.star('w-3.5 h-3.5 text-[var(--primary-green)]')} ÉVALUATION
                    </span>
                    <span class="badge-terminal">
                        QUESTION ${state.currentIndex + 1} / ${state.questions.length}
                    </span>
                </div>
                
                <!-- Progress bar -->
                <div class="w-full bg-black h-2 border-b border-[var(--border-muted)]">
                    <div class="bg-[var(--primary-green)] h-full transition-all duration-300" style="width: ${((state.currentIndex) / state.questions.length) * 100}%"></div>
                </div>
                
                <div class="p-6 md:p-8">
                    <h4 class="font-sans text-xl sm:text-2xl font-bold text-zinc-100 leading-snug tracking-normal">${q.question}</h4>
                    ${q.type === 'multiple' ? `<p class="text-[var(--primary-green)] text-xs font-sans mt-2 font-bold flex items-center gap-1.5">${RetroIcons.info('w-3.5 h-3.5 text-emerald-400')} Plusieurs réponses possibles</p>` : ''}
                    
                    ${optionsHtml}
                    
                    <div id="quiz-feedback" class="mt-8 hidden font-sans text-sm"></div>
                    
                    <div class="mt-8 pt-6 border-t-2 border-zinc-800 flex justify-end gap-3">
                        <button id="quiz-submit-btn" onclick="app.submitQuizAnswer()" class="pixel-btn px-6 py-3 bg-zinc-800 text-zinc-500 font-sans text-xs font-bold border-2 border-zinc-700 cursor-not-allowed transition-all" disabled>VALIDER</button>
                        <button id="quiz-next-btn" onclick="app.nextQuizQuestion()" class="hidden pixel-btn px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans text-xs font-bold border-2 border-emerald-300 transition-all flex items-center gap-2">
                            <span>SUIVANT</span> ${RetroIcons.arrowRight('w-3 h-3 text-zinc-950')}
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    handleQuizSelection: function() {
        const state = this.quizState;
        const q = state.questions[state.currentIndex];
        const btn = document.getElementById('quiz-submit-btn');
        let hasSelection = false;
        
        if (q.type === 'single' || q.type === 'multiple') {
            const checked = document.querySelectorAll(`input[name="quiz_q${state.currentIndex}"]:checked`);
            hasSelection = checked.length > 0;
        } else if (q.type === 'text') {
            const val = document.getElementById('quiz_text_input').value.trim();
            hasSelection = val.length > 0;
        }
        
        if (hasSelection) {
            btn.disabled = false;
            btn.classList.remove('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border-zinc-700');
            btn.classList.add('bg-emerald-500', 'hover:bg-emerald-400', 'text-zinc-950', 'border-emerald-300');
        } else {
            btn.disabled = true;
            btn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border-zinc-700');
            btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-400', 'text-zinc-950', 'border-emerald-300');
        }
    },

    submitQuizAnswer: function() {
        const state = this.quizState;
        const q = state.questions[state.currentIndex];
        const feedbackEl = document.getElementById('quiz-feedback');
        let isCorrect = false;
        let feedbackHtml = '';
        
        // Disable inputs
        document.querySelectorAll(`#quiz-container input`).forEach(i => i.disabled = true);
        document.getElementById('quiz-submit-btn').classList.add('hidden');
        
        const nextBtn = document.getElementById('quiz-next-btn');
        nextBtn.classList.remove('hidden');
        if (state.currentIndex === state.questions.length - 1) {
            nextBtn.innerHTML = `<span class="flex items-center gap-2">Voir les résultats ${RetroIcons.star('w-4 h-4 text-zinc-950')}</span>`;
        }

        if (q.type === 'single') {
            const selected = parseInt(document.querySelector(`input[name="quiz_q${state.currentIndex}"]:checked`).value);
            state.userAnswers[state.currentIndex] = selected;
            const opt = q.options[selected];
            isCorrect = opt.isCorrect;
            
            q.options.forEach((o, i) => {
                const label = document.querySelector(`input[value="${i}"]`).closest('label');
                if (o.isCorrect) label.classList.add('border-emerald-500', 'bg-emerald-900/20');
                else if (i === selected && !o.isCorrect) label.classList.add('border-rose-500', 'bg-rose-900/20');
            });
            
            feedbackHtml = `
                <div class="p-5 ${isCorrect ? 'bg-emerald-950/40 border-2 border-emerald-500' : 'bg-rose-950/40 border-2 border-rose-500'} pixel-card">
                    <strong class="flex items-center gap-2.5 mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-sans font-bold text-sm">
                        ${isCorrect ? `${RetroIcons.check('w-5 h-5 text-emerald-400')} BONNE RÉPONSE !` : `${RetroIcons.cross('w-5 h-5 text-rose-400')} PAS TOUT À FAIT...`}
                    </strong>
                    <p class="paragraph-body !mb-0 text-sm leading-relaxed">${opt.feedback}</p>
                </div>
            `;
        } else if (q.type === 'multiple') {
            const selected = Array.from(document.querySelectorAll(`input[name="quiz_q${state.currentIndex}"]:checked`)).map(el => parseInt(el.value));
            state.userAnswers[state.currentIndex] = selected;
            
            const corrects = q.options.map((o, i) => o.isCorrect ? i : -1).filter(i => i !== -1);
            isCorrect = corrects.length === selected.length && corrects.every(c => selected.includes(c));
            
            let details = '';
            q.options.forEach((o, i) => {
                const label = document.querySelector(`input[value="${i}"]`).closest('label');
                if (o.isCorrect) label.classList.add('border-emerald-500', 'bg-emerald-900/20');
                else if (selected.includes(i) && !o.isCorrect) label.classList.add('border-rose-500', 'bg-rose-900/20');
                
                if (selected.includes(i) || o.isCorrect) {
                    details += `<div class="mt-3 font-sans text-xs"><strong class="${o.isCorrect ? 'text-emerald-400' : 'text-rose-400'}">[${o.isCorrect ? '✓' : '✗'}] ${o.text}</strong><br><span class="text-zinc-300 font-sans">${o.feedback}</span></div>`;
                }
            });
            
            feedbackHtml = `
                <div class="p-5 ${isCorrect ? 'bg-emerald-950/40 border-2 border-emerald-500' : 'bg-zinc-900 border-2 border-emerald-500'} pixel-card">
                    <strong class="flex items-center gap-2.5 mb-2 ${isCorrect ? 'text-emerald-400' : 'text-emerald-400'} font-sans font-bold text-sm">
                        ${isCorrect ? `${RetroIcons.check('w-5 h-5 text-emerald-400')} EXCELLENTE RÉPONSE !` : `${RetroIcons.info('w-5 h-5 text-emerald-400')} VOICI LES EXPLICATIONS :`}
                    </strong>
                    ${details}
                </div>
            `;
        } else if (q.type === 'text') {
            const val = document.getElementById('quiz_text_input').value.trim();
            state.userAnswers[state.currentIndex] = val;
            isCorrect = q.correctAnswers.some(c => c.toLowerCase() === val.toLowerCase());
            
            const input = document.getElementById('quiz_text_input');
            if (isCorrect) input.classList.add('border-emerald-500', 'bg-emerald-900/10', 'text-emerald-300');
            else input.classList.add('border-rose-500', 'bg-rose-900/10', 'text-rose-300');
            
            feedbackHtml = `
                <div class="p-5 ${isCorrect ? 'bg-emerald-950/40 border-2 border-emerald-500' : 'bg-rose-950/40 border-2 border-rose-500'} pixel-card">
                    <strong class="flex items-center gap-2.5 mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-sans font-bold text-sm">
                        ${isCorrect ? `${RetroIcons.check('w-5 h-5 text-emerald-400')} BONNE RÉPONSE !` : `${RetroIcons.cross('w-5 h-5 text-rose-400')} PAS TOUT À FAIT...`}
                    </strong>
                    <p class="paragraph-body !mb-0 text-sm leading-relaxed">${q.feedback}</p>
                </div>
            `;
        }
        
        feedbackEl.innerHTML = feedbackHtml;
        feedbackEl.classList.remove('hidden');
    },

    nextQuizQuestion: function() {
        this.quizState.currentIndex++;
        this.renderQuizStep();
    }
};

const MatrixIntro = {
    text: "root@it-campus:~# INITIALISATION DU TERMINAL... [ OK ]\nroot@it-campus:~# SYSTÈME : ANALYSE EN COURS... [ OK ]\nroot@it-campus:~# PROFIL DÉTECTÉ : OPÉRATEUR INFORMATIQUE.\nroot@it-campus:~# ALERTE : MATRICE CORROMPUE. [ FAULT ]\nroot@it-campus:~# REQUÊTE D'INPUT : CHOISISSEZ VOTRE PROTOCOLE D'INTERVENTION.\nroot@it-campus:~# Choisis le Protocole Bleu et tout s'arrête, après tu pourras faire de beaux rêves et penser ce que tu veux.\nroot@it-campus:~# Choisis le Protocole Rouge, tu restes au pays des merveilles et on descend avec le lapin blanc au fond du système.",
    speed: 20,
    container: null,
    textElement: null,
    buttons: null,
    isSkipped: false,
    timeoutIds: [],
    audioCtx: null,

    init() {
        const forceIntro = new URLSearchParams(window.location.search).get('intro') === '1';
        if (localStorage.getItem('matrixIntroPlayed') === 'true' && !forceIntro) return;
        
        try {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn("Web Audio API non supportée");
        }

        const unlockAudio = () => {
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };
        document.addEventListener('click', unlockAudio);
        document.addEventListener('keydown', unlockAudio);

        this.container = document.getElementById('matrix-intro');
        this.textElement = document.getElementById('typewriter-text');
        this.buttons = document.getElementById('matrix-buttons');
        
        if (!this.container || !this.textElement || !this.buttons) return;

        // Force container flex visible if it wasn't hidden by inline script
        this.container.style.display = 'flex';

        // Bind events
        document.getElementById('pill-red').addEventListener('click', () => this.unlock());
        document.getElementById('pill-blue').addEventListener('click', () => {
            window.open('https://fakeupdate.net/win10ue/', '_blank');
            this.unlock();
        });
        
        this.handleKeydown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                this.unlock();
            }
        };
        document.addEventListener('keydown', this.handleKeydown);

        this.typeWriter();
    },

    playKeystroke() {
        if (!this.audioCtx || this.audioCtx.state === 'suspended') return;
        
        const osc = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(600 + Math.random() * 150, this.audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(0.015, this.audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.015);
        
        osc.start(this.audioCtx.currentTime);
        osc.stop(this.audioCtx.currentTime + 0.02);
    },

    typeWriter() {
        let i = 0;
        const lines = this.text.split('\n');
        let currentLine = 0;
        let currentText = '';

        const type = () => {
            if (this.isSkipped) return;
            
            if (currentLine < lines.length) {
                if (i < lines[currentLine].length) {
                    const char = lines[currentLine].charAt(i);
                    currentText += char;
                    if (char !== ' ') this.playKeystroke();
                    this.textElement.innerHTML = currentText + '<span id="matrix-cursor">█</span>';
                    i++;
                    
                    // Add slight random variation to typing speed for realism
                    let delay = this.speed + Math.random() * 25;
                    // Pause slightly longer on punctuation
                    if (char === '.' || char === ':' || char === ',') {
                        delay += 100;
                    }
                    this.timeoutIds.push(setTimeout(type, delay));
                } else {
                    currentText += '\n';
                    this.textElement.innerHTML = currentText + '<span id="matrix-cursor">█</span>';
                    i = 0;
                    currentLine++;
                    // Longer pause at the end of a line
                    this.timeoutIds.push(setTimeout(type, 1000));
                }
            } else {
                this.textElement.innerHTML = currentText + '<span id="matrix-cursor">█</span>';
                this.showButtons();
            }
        };
        
        type();
    },

    showButtons() {
        if (this.isSkipped) return;
        this.buttons.classList.remove('opacity-0', 'pointer-events-none');
        this.buttons.classList.add('opacity-100', 'pointer-events-auto');
        const cursor = document.getElementById('matrix-cursor');
        if (cursor) cursor.classList.add('is-blinking');
    },

    unlock() {
        if (this.isSkipped) return;
        this.isSkipped = true;
        this.timeoutIds.forEach(clearTimeout);
        document.removeEventListener('keydown', this.handleKeydown);
        
        localStorage.setItem('matrixIntroPlayed', 'true');
        
        this.container.style.transition = 'opacity 0.8s ease';
        this.container.style.opacity = '0';
        
        setTimeout(() => {
            this.container.style.display = 'none';
        }, 800);
    }
};

window.app = app;
window.RetroIcons = RetroIcons;

document.addEventListener('DOMContentLoaded', () => {
    MatrixIntro.init();
    app.init();
});
