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

        const toggleMenu = () => {
            const isOpen = !sidebar.classList.contains('-translate-x-full');
            if (isOpen) {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
                setTimeout(() => overlay.classList.remove('opacity-100'), 10);
            } else {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.add('opacity-100'), 10);
            }
        };

        btn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    },

    toggleDesktopSidebar: function() {
        const sidebar = document.getElementById('sidebar');
        const floatBtn = document.getElementById('desktop-toggle-btn');
        
        this.desktopSidebarCollapsed = !this.desktopSidebarCollapsed;
        
        if (this.desktopSidebarCollapsed) {
            // Collapse sidebar
            sidebar.classList.remove('lg:translate-x-0');
            sidebar.classList.add('lg:-ml-80');
            
            // Show float btn
            setTimeout(() => {
                floatBtn.classList.remove('opacity-0', 'pointer-events-none');
                floatBtn.classList.add('opacity-100', 'pointer-events-auto');
            }, 300);
        } else {
            // Expand sidebar
            sidebar.classList.remove('lg:-ml-80');
            sidebar.classList.add('lg:translate-x-0');
            
            // Hide float btn
            floatBtn.classList.add('opacity-0', 'pointer-events-none');
            floatBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
    },

    _typewriterInterval: null,

    initTypewriter: function() {
        const target = document.getElementById('retro-title');
        if (!target) return;
        const text = "FORMATION EN OPÉRATEUR INFORMATIQUE";
        let i = 0;
        target.textContent = '';
        if (this._typewriterInterval) clearInterval(this._typewriterInterval);
        this._typewriterInterval = setInterval(() => {
            if (i < text.length) {
                target.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(this._typewriterInterval);
                this._typewriterInterval = null;
            }
        }, 40);
    },

    renderHome: function() {
        // Deselect nav items
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            el.classList.add('text-slate-400');
        });

        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebar-overlay').classList.add('hidden');
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
                <h1 class="font-pixel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-normal mb-5 text-amber-400 pixel-title-shadow leading-tight min-h-[3.6rem] flex items-center justify-center flex-wrap">
                    <span id="retro-title"></span><span id="retro-cursor" class="animate-pixel-cursor text-amber-300 inline-block ml-1">█</span>
                </h1>

                <!-- Retro Mission Briefing Dialogue Box -->
                <div class="bg-zinc-900 border-2 border-zinc-700 p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000] text-left max-w-3xl mx-auto mt-4">
                    <div class="font-arcade text-[9px] sm:text-[10px] text-amber-400 mb-2.5 flex items-center justify-between border-b border-zinc-800 pb-2">
                        <span>[ MISSION BRIEFING // CAMPUS IT ]</span>
                        <span class="text-emerald-400 flex items-center gap-1">${RetroIcons.play('w-2.5 h-2.5')} READY</span>
                    </div>
                    <p class="text-zinc-300 text-sm sm:text-base leading-relaxed font-mono">
                        Acquérez les compétences d'intervention sur poste client : dépannage matériel & logiciel, diagnostic sous PowerShell, gestion de tickets d'assistance et administration des réseaux locaux.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-4 pt-3 border-t border-zinc-800 font-mono text-xs">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-950 border border-zinc-700 text-zinc-300"><span class="text-amber-400">${RetroIcons.wrench('w-3.5 h-3.5')}</span> Support N1/N2</span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-950 border border-zinc-700 text-zinc-300"><span class="text-cyan-400">${RetroIcons.terminal('w-3.5 h-3.5')}</span> Windows & Linux</span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-950 border border-zinc-700 text-zinc-300"><span class="text-emerald-400">${RetroIcons.network('w-3.5 h-3.5')}</span> Réseau Local</span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-950 border border-zinc-700 text-zinc-300"><span class="text-amber-400">${RetroIcons.ticket('w-3.5 h-3.5')}</span> GLPI Helpdesk</span>
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-950 border border-zinc-700 text-zinc-300"><span class="text-blue-400">${RetroIcons.cli('w-3.5 h-3.5')}</span> PowerShell CLI</span>
                    </div>
                </div>
            </div>

            <!-- SECTION 1 : MAIN QUEST (Module École m3) -->
            <div class="mb-12">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <span class="text-emerald-400">${RetroIcons.crt('w-7 h-7')}</span>
                        <h2 class="font-pixel text-2xl sm:text-3xl text-emerald-400 tracking-wide pixel-title-shadow uppercase">
                            Quête Principale • Formation École
                        </h2>
                    </div>
                    <span class="font-arcade text-[9px] sm:text-[10px] px-2.5 py-1 bg-emerald-950 border-2 border-emerald-500 text-emerald-400 shadow-[2px_2px_0px_#000]">
                        MAIN QUEST
                    </span>
                </div>

                <!-- Main Quest Pixel Card -->
                <div class="bg-zinc-900 border-2 border-emerald-500/80 p-6 sm:p-8 pixel-card cursor-pointer" onclick="app.renderModuleDetails('${schoolModule.id}')">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div class="flex-1">
                            <div class="flex flex-wrap items-center gap-2 mb-3 font-arcade text-[10px]">
                                <span class="px-2 py-0.5 bg-emerald-500 text-zinc-950 font-bold border border-emerald-400">
                                    CURSUS OFFICIEL
                                </span>
                                <span class="px-2 py-0.5 bg-zinc-950 text-zinc-300 border border-zinc-700">
                                    ${schoolModule.phases.length} STAGE(S)
                                </span>
                                <span class="px-2 py-0.5 bg-zinc-950 text-zinc-300 border border-zinc-700">
                                    ${schoolStats.total} COURS
                                </span>
                            </div>

                            <h3 class="font-pixel text-2xl sm:text-3xl text-zinc-100 mb-3 tracking-wide flex items-center gap-2.5">
                                ${RetroIcons.crt('w-6 h-6 text-emerald-400')}
                                <span>${schoolModule.title}</span>
                            </h3>
                            
                            <p class="text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl font-mono">
                                ${schoolModule.description || "Retrouvez ici l'ensemble des cours dispensés en formation, les synthèses de promotion, les supports officiels de cours et les fiches de révision pour les examens."}
                            </p>

                            <!-- Quest Stages Preview -->
                            <div class="flex flex-wrap gap-2">
                                ${schoolModule.phases.map((p, idx) => `
                                    <div class="px-3 py-1.5 bg-zinc-950 border border-zinc-700 text-zinc-300 font-mono text-xs flex items-center gap-2">
                                        <span class="text-emerald-400 font-arcade text-[9px]">S0${idx+1}</span>
                                        <span>${p.title}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="lg:w-64 flex-shrink-0 flex flex-col justify-center">
                            <button class="pixel-btn w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-arcade text-xs font-bold border-2 border-emerald-300 flex items-center justify-center gap-2 pointer-events-none">
                                ${RetroIcons.play('w-3.5 h-3.5 text-zinc-950')}
                                <span>START MISSION</span>
                            </button>
                            <div class="text-center font-arcade text-[9px] text-zinc-500 mt-2">[ PRESS TO ENTER ]</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SECTION 2 : SECONDARY TRAINING GROUNDS -->
            <div class="mb-8">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-amber-400">${RetroIcons.chip('w-7 h-7 text-amber-400')}</span>
                    <h2 class="font-pixel text-2xl sm:text-3xl text-amber-400 tracking-wide pixel-title-shadow uppercase">
                        Chantiers & Ateliers Pratiques
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        `;

        otherModules.forEach((mod) => {
            const stats = getModuleStats(mod);
            const isM1 = mod.id === 'm1';
            const badgeLabel = isM1 ? 'STAGE 01 • WORKSHOP' : 'STAGE 02 • WORKSHOP';
            const accentBorder = isM1 ? 'hover:border-amber-500/80' : 'hover:border-cyan-500/80';
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
                <div class="bg-zinc-900 border-2 border-zinc-700 ${accentBorder} p-6 pixel-card flex flex-col h-full cursor-pointer relative" onclick="app.renderModuleDetails('${mod.id}')">
                    <div class="flex items-center justify-between mb-3 font-arcade text-[9px]">
                        <span class="px-2 py-0.5 bg-zinc-950 ${accentColor} border border-zinc-700">
                            ${badgeLabel}
                        </span>
                        <span class="text-zinc-500 font-mono">
                            ${stats.total} LEÇONS
                        </span>
                    </div>

                    <h3 class="font-pixel text-xl sm:text-2xl text-zinc-100 mb-2 tracking-wide flex items-center gap-2.5">
                        ${modIcon}
                        <span>${mod.title}</span>
                    </h3>
                    
                    <p class="text-zinc-400 text-xs font-mono leading-relaxed mb-4">
                        Ateliers pratiques, cas de dépannage réels et travaux dirigés pour forger vos réflexes techniques.
                    </p>

                    <!-- 8-Bit Progress bar -->
                    <div class="w-full mb-6">
                        <div class="font-arcade text-[9px] text-zinc-400 mb-1.5 flex justify-between">
                            <span>STAGE PROGRESSION</span>
                            <span class="${accentColor} font-bold">${stats.available}/${stats.total} DISPO (${percent}%)</span>
                        </div>
                        <div class="w-full h-3 bg-zinc-950 border border-zinc-700 p-0.5 flex gap-1">
                            ${segmentsHtml}
                        </div>
                    </div>

                    <div class="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between font-mono">
                        <span class="font-arcade text-[9px] text-zinc-500">${mod.phases.length} PHASES</span>
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

        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebar-overlay').classList.add('hidden');
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
            
            <div class="mb-10 bg-zinc-900 border-2 border-zinc-700 p-6 shadow-[4px_4px_0px_#000]">
                <div class="font-arcade text-[10px] text-amber-400 mb-2 flex items-center gap-2">
                    ${RetroIcons.crt('w-4 h-4 text-amber-400')} MODULE BRIEFING
                </div>
                <h1 class="font-pixel text-2xl sm:text-4xl font-bold text-zinc-100 tracking-wide mb-3 pixel-title-shadow leading-tight">${mod.title}</h1>
                <p class="font-mono text-sm text-zinc-400">${mod.description || "Sélectionnez une phase d'apprentissage pour continuer l'entraînement."}</p>
                ${progressHeaderHtml}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;

        mod.phases.forEach((phase, pIndex) => {
            let totalLessons = phase.lessons.length;
            let availableLessons = phase.lessons.filter(l => l.status === 'available').length;
            let firstLessonId = phase.lessons.length > 0 ? phase.lessons[0].id : null;

            html += `
                <div class="bg-zinc-900 border-2 border-zinc-700 hover:border-emerald-500/80 p-6 pixel-card group flex flex-col h-full cursor-pointer relative" onclick="${firstLessonId ? `app.loadLesson('${firstLessonId}')` : `app.togglePhase('phase-${itCampusData.modules.findIndex(m => m.id === mod.id)}-${pIndex}')`}">
                    <div class="flex items-start justify-between mb-4 font-arcade text-[9px]">
                        <span class="px-2 py-0.5 bg-zinc-950 text-emerald-400 border border-zinc-700">STAGE 0${pIndex + 1}</span>
                        <span class="px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700">${availableLessons}/${totalLessons} DISPO</span>
                    </div>
                    <h3 class="font-pixel text-xl font-bold text-zinc-100 mb-2 group-hover:text-amber-300 transition-colors">${phase.title}</h3>
                    <p class="font-mono text-xs text-zinc-400 mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
                        <span>Démarrer le stage</span>
                        <span class="text-amber-400 font-arcade text-[10px] flex items-center gap-1">${RetroIcons.play('w-2.5 h-2.5')}</span>
                    </p>
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
        let html = '';
        
        itCampusData.modules.forEach((mod, mIndex) => {
            const moduleId = `module-${mod.id}`;
            const isSchool = mod.id === 'm3';
            const isM1 = mod.id === 'm1';
            
            const modIcon = isSchool 
                ? RetroIcons.crt('w-4 h-4 text-emerald-400 mr-2 flex-shrink-0')
                : (isM1 ? RetroIcons.wrench('w-3.5 h-3.5 text-amber-400 mr-2 flex-shrink-0') : RetroIcons.network('w-3.5 h-3.5 text-cyan-400 mr-2 flex-shrink-0'));

            const btnClass = isSchool
                ? 'bg-emerald-950/40 hover:bg-emerald-900/40 border-2 border-emerald-500/70 text-emerald-200 pixel-btn'
                : 'bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-800 text-zinc-300 pixel-btn';
            const badgeSchool = isSchool
                ? `<span class="px-1.5 py-0.5 bg-emerald-500 text-zinc-950 font-arcade text-[8px] font-bold mr-2 flex-shrink-0">ÉCOLE</span>`
                : '';

            html += `
            <div class="mb-3">
                <button class="w-full flex items-center justify-between p-3 text-left hover:text-white border transition-colors group shadow-sm focus:outline-none ${btnClass}" onclick="app.toggleModule('${moduleId}')">
                    <div class="flex items-center min-w-0 pr-2 flex-1 font-pixel text-sm tracking-wide">
                        ${modIcon}
                        ${badgeSchool}
                        <span class="truncate leading-tight">${mod.title}</span>
                    </div>
                    <div id="icon-${moduleId}" class="text-zinc-500 group-hover:text-amber-400 transition-transform duration-200 flex-shrink-0 ml-2">
                        ${RetroIcons.chevronDown('w-3.5 h-3.5')}
                    </div>
                </button>
                <div id="${moduleId}" class="hidden flex-col mt-2 pl-3 space-y-1.5 border-l-2 border-zinc-800 ml-3">
            `;
            mod.phases.forEach((phase, pIndex) => {
                const phaseId = `phase-${mIndex}-${pIndex}`;
                html += `
                    <div>
                        <button class="w-full flex items-center justify-between p-2 text-left text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-colors group focus:outline-none" onclick="app.togglePhase('${phaseId}')">
                            <span class="truncate pr-2">${phase.title}</span>
                            <div id="icon-${phaseId}" class="text-zinc-500 group-hover:text-zinc-300 transition-transform duration-200 flex-shrink-0">
                                ${RetroIcons.chevronDown('w-3 h-3')}
                            </div>
                        </button>
                        <div id="${phaseId}" class="hidden flex-col pl-3 py-1 space-y-1 border-l border-zinc-700/60 ml-2 mt-0.5">
                `;
                phase.lessons.forEach(lesson => {
                    const isAvailable = lesson.status === 'available';
                    const badgeClass = isAvailable ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/60 font-arcade' : 'bg-zinc-950 text-zinc-600 border border-zinc-800 font-arcade';
                    const badgeContent = isAvailable 
                        ? 'READY' 
                        : `<span class="inline-flex items-center gap-1">${RetroIcons.lock('w-2.5 h-2.5')} LOCK</span>`;
                    
                    html += `
                            <button onclick="app.loadLesson('${lesson.id}')" id="nav-${lesson.id}" class="w-full text-left p-2 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 transition-all flex items-start justify-between group focus:outline-none font-mono">
                                <span class="truncate mr-2 flex-1 pt-0.5">${lesson.title}</span>
                                <span class="text-[8px] px-1 py-0.5 uppercase tracking-wider ${badgeClass}">${badgeContent}</span>
                            </button>
                    `;
                });
                html += `
                        </div>
                    </div>
                `;
            });
            html += `
                </div>
            </div>
            `;
        });
        
        container.innerHTML = html;
        // Expand first module by default
        this.toggleModule(`module-${itCampusData.modules[0].id}`);
    },

    toggleModule: function(moduleId) {
        const el = document.getElementById(moduleId);
        const icon = document.getElementById(`icon-${moduleId}`);
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            el.classList.add('flex');
            icon.classList.add('rotate-180');
        } else {
            el.classList.add('hidden');
            el.classList.remove('flex');
            icon.classList.remove('rotate-180');
        }
    },

    togglePhase: function(phaseId) {
        const el = document.getElementById(phaseId);
        const icon = document.getElementById(`icon-${phaseId}`);
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            el.classList.add('flex');
            icon.classList.add('rotate-180');
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
        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebar-overlay').classList.add('hidden');
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
        <div class="max-w-5xl mx-auto p-4 sm:p-8 lg:p-10 pb-24">
            <!-- Header -->
            <div class="mb-8">
                <div class="flex flex-wrap items-center gap-2 mb-4 font-arcade text-[9px] sm:text-[10px]">
                    <button onclick="app.renderModuleDetails('${currentModule.id}')" class="pixel-btn px-2.5 py-1 bg-zinc-900 text-zinc-300 hover:text-amber-300 border border-zinc-700 shadow-[2px_2px_0px_#000] flex items-center gap-1.5 cursor-pointer">
                        ${RetroIcons.arrowLeft('w-2.5 h-2.5')} ${currentModule.title.split(' : ')[0]}
                    </button>
                    <span class="px-2.5 py-1 bg-zinc-900 text-emerald-400 border border-zinc-700 shadow-[2px_2px_0px_#000]">${currentPhase.title.split(' : ')[0]}</span>
                    ${currentLesson.quiz && currentLesson.quiz.length > 0 ? `<a href="#quiz-container" class="ml-auto pixel-btn px-3 py-1 bg-amber-500 text-zinc-950 font-arcade text-[9px] sm:text-[10px] font-bold border border-amber-300 flex items-center gap-1.5">${RetroIcons.chevronDown('w-3 h-3 text-zinc-950')} QUIZ</a>` : ''}
                </div>
                <h1 class="font-pixel text-2xl sm:text-4xl font-bold text-zinc-100 tracking-wide mb-5 pixel-title-shadow leading-tight">${currentLesson.title}</h1>
                
                ${currentLesson.objective ? `
                <div class="bg-zinc-900 border-2 border-amber-500/70 p-5 shadow-[3px_3px_0px_#000]">
                    <h3 class="text-amber-400 font-arcade text-xs mb-2 flex items-center gap-2 uppercase tracking-wider">
                        ${RetroIcons.cli('w-3.5 h-3.5 text-amber-400')} Objectif d'apprentissage
                    </h3>
                    <p class="text-zinc-300 font-mono leading-relaxed text-sm sm:text-base">${currentLesson.objective}</p>
                </div>
                ` : ''}
            </div>

            <!-- Video Section -->
            <div class="mb-10">
                <div class="w-full aspect-video bg-zinc-950 border-2 border-zinc-700 shadow-[4px_4px_0px_0px_#000] overflow-hidden flex items-center justify-center relative group">
                    ${videoHtml}
                </div>
            </div>

            <!-- Content Area -->
            <div class="mb-14 font-mono text-zinc-300 leading-relaxed">
                ${contentHtml}
            </div>

            <!-- Quiz Section -->
            <div class="mb-12" id="quiz-container">
            </div>

            <!-- Navigation Buttons -->
            <div class="flex items-center justify-between pt-6 border-t-2 border-zinc-800">
                ${prevLesson ? `<button onclick="app.loadLesson('${prevLesson.id}')" class="pixel-btn px-4 sm:px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 text-zinc-300 font-arcade text-[10px] font-bold flex items-center gap-2 focus:outline-none">${RetroIcons.arrowLeft('w-3.5 h-3.5')} <span class="hidden sm:inline">Précédent</span></button>` : '<div></div>'}
                ${nextLesson ? `<button onclick="app.loadLesson('${nextLesson.id}')" class="pixel-btn px-4 sm:px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-arcade text-[10px] font-bold border-2 border-emerald-300 flex items-center gap-2 focus:outline-none"><span class="hidden sm:inline">Suivant</span> ${RetroIcons.arrowRight('w-3.5 h-3.5 text-zinc-950')}</button>` : '<div></div>'}
            </div>
        </div>
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
                <div class="bg-zinc-900 border-2 border-amber-500 p-8 sm:p-12 text-center shadow-[6px_6px_0px_0px_#000] relative">
                    <div class="font-arcade text-xs sm:text-sm text-amber-400 mb-2 tracking-widest flex items-center justify-center gap-2">
                        ${RetroIcons.star('w-4 h-4 text-amber-400')} STAGE CLEAR ${RetroIcons.star('w-4 h-4 text-amber-400')}
                    </div>
                    <h3 class="font-pixel text-3xl sm:text-4xl font-bold text-zinc-100 mb-2 tracking-wide">Quiz terminé !</h3>
                    <p class="text-zinc-400 font-mono text-sm mb-6">Évaluation enregistrée pour cette session.</p>
                    <div class="font-arcade text-4xl sm:text-5xl text-emerald-400 mb-8 font-bold">${score} / ${state.questions.length} XP</div>
                    <button onclick="app.loadLesson('${state.lessonId}')" class="pixel-btn px-8 py-3.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-arcade text-xs font-bold border-2 border-amber-300 flex items-center justify-center gap-2 mx-auto">
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
                    <label class="flex items-start gap-3.5 p-4 border-2 border-zinc-700 bg-zinc-950/60 cursor-pointer hover:bg-zinc-800/80 hover:border-zinc-500 transition-all has-[:checked]:bg-zinc-800 has-[:checked]:border-amber-400 group pixel-card">
                        <input type="${type}" name="${name}" value="${idx}" class="mt-1 w-4 h-4 accent-amber-400 flex-shrink-0" onchange="app.handleQuizSelection()">
                        <span class="text-zinc-300 font-mono text-sm group-has-[:checked]:text-amber-200 leading-relaxed">${opt.text}</span>
                    </label>
                `;
            });
            optionsHtml += `</div>`;
        } else if (q.type === 'text') {
            optionsHtml = `
                <div class="mt-6">
                    <input type="text" id="quiz_text_input" class="w-full bg-zinc-950 border-2 border-zinc-700 px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 font-mono text-base shadow-inner" placeholder="Saisissez votre réponse ici..." oninput="app.handleQuizSelection()">
                </div>
            `;
        }

        container.innerHTML = `
            <div class="bg-zinc-900 border-2 border-zinc-700 shadow-[4px_4px_0px_0px_#000] overflow-hidden flex flex-col">
                <div class="bg-zinc-950 px-6 py-3.5 flex items-center justify-between border-b-2 border-zinc-700 font-arcade text-xs">
                    <span class="text-amber-400 flex items-center gap-2">
                        ${RetroIcons.star('w-3.5 h-3.5 text-amber-400')} ÉVALUATION
                    </span>
                    <span class="bg-zinc-900 text-zinc-300 border border-zinc-700 px-2.5 py-1 text-[10px]">
                        QUESTION ${state.currentIndex + 1} / ${state.questions.length}
                    </span>
                </div>
                
                <!-- Progress bar -->
                <div class="w-full bg-zinc-950 h-2 border-b border-zinc-800">
                    <div class="bg-amber-400 h-full transition-all duration-300" style="width: ${((state.currentIndex) / state.questions.length) * 100}%"></div>
                </div>
                
                <div class="p-6 md:p-8">
                    <h4 class="font-pixel text-xl sm:text-2xl text-zinc-100 leading-snug tracking-wide">${q.question}</h4>
                    ${q.type === 'multiple' ? `<p class="text-emerald-400 text-xs font-mono mt-2 font-bold flex items-center gap-1.5">${RetroIcons.info('w-3.5 h-3.5 text-emerald-400')} Plusieurs réponses possibles</p>` : ''}
                    
                    ${optionsHtml}
                    
                    <div id="quiz-feedback" class="mt-8 hidden font-mono text-sm"></div>
                    
                    <div class="mt-8 pt-6 border-t-2 border-zinc-800 flex justify-end gap-3">
                        <button id="quiz-submit-btn" onclick="app.submitQuizAnswer()" class="pixel-btn px-6 py-3 bg-zinc-800 text-zinc-500 font-arcade text-xs border-2 border-zinc-700 cursor-not-allowed transition-all" disabled>VALIDER</button>
                        <button id="quiz-next-btn" onclick="app.nextQuizQuestion()" class="hidden pixel-btn px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-arcade text-xs font-bold border-2 border-amber-300 transition-all flex items-center gap-2">
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
            btn.classList.add('bg-amber-500', 'hover:bg-amber-400', 'text-zinc-950', 'border-amber-300');
        } else {
            btn.disabled = true;
            btn.classList.add('bg-zinc-800', 'text-zinc-500', 'cursor-not-allowed', 'border-zinc-700');
            btn.classList.remove('bg-amber-500', 'hover:bg-amber-400', 'text-zinc-950', 'border-amber-300');
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
                    <strong class="flex items-center gap-2.5 mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-arcade text-xs">
                        ${isCorrect ? `${RetroIcons.check('w-5 h-5 text-emerald-400')} BONNE RÉPONSE !` : `${RetroIcons.cross('w-5 h-5 text-rose-400')} PAS TOUT À FAIT...`}
                    </strong>
                    <p class="text-zinc-300 font-mono text-sm leading-relaxed">${opt.feedback}</p>
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
                    details += `<div class="mt-3 font-mono text-xs"><strong class="${o.isCorrect ? 'text-emerald-400' : 'text-rose-400'}">[${o.isCorrect ? '✓' : '✗'}] ${o.text}</strong><br><span class="text-zinc-300">${o.feedback}</span></div>`;
                }
            });
            
            feedbackHtml = `
                <div class="p-5 ${isCorrect ? 'bg-emerald-950/40 border-2 border-emerald-500' : 'bg-zinc-900 border-2 border-amber-500'} pixel-card">
                    <strong class="flex items-center gap-2.5 mb-2 ${isCorrect ? 'text-emerald-400' : 'text-amber-400'} font-arcade text-xs">
                        ${isCorrect ? `${RetroIcons.check('w-5 h-5 text-emerald-400')} EXCELLENTE RÉPONSE !` : `${RetroIcons.info('w-5 h-5 text-amber-400')} VOICI LES EXPLICATIONS :`}
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
                    <strong class="flex items-center gap-2.5 mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-arcade text-xs">
                        ${isCorrect ? `${RetroIcons.check('w-5 h-5 text-emerald-400')} BONNE RÉPONSE !` : `${RetroIcons.cross('w-5 h-5 text-rose-400')} PAS TOUT À FAIT...`}
                    </strong>
                    <p class="text-zinc-300 font-mono text-sm leading-relaxed">${q.feedback}</p>
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

window.app = app;
window.RetroIcons = RetroIcons;

document.addEventListener('DOMContentLoaded', () => app.init());
