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

    renderHome: function() {
        // Deselect nav items
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            el.classList.add('text-slate-400');
        });

        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebar-overlay').classList.add('hidden');
        }

        let html = `
        <div class="max-w-7xl mx-auto p-5 lg:p-12 pb-24 animate-[fadeIn_0.3s_ease-out]">
            <div class="mb-14 text-center max-w-3xl mx-auto mt-6">
                <div class="inline-flex items-center justify-center p-4 bg-sky-500/10 rounded-3xl mb-6 shadow-inner border border-sky-500/20 hover:scale-105 transition-transform duration-300">
                    <svg class="w-16 h-16 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h1 class="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">Bienvenue sur <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">IT Campus</span></h1>
                <p class="text-lg text-slate-400 leading-relaxed font-medium">Le portail de formation technique nouvelle génération. Sélectionnez un module ci-dessous pour démarrer votre apprentissage.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        `;

        itCampusData.modules.forEach(mod => {
            let totalLessons = 0;
            let availableLessons = 0;
            let firstLessonId = null;

            mod.phases.forEach(p => {
                totalLessons += p.lessons.length;
                p.lessons.forEach(l => {
                    if (l.status === 'available') availableLessons++;
                    if (!firstLessonId && l.status === 'available') firstLessonId = l.id;
                });
            });
            
            if (!firstLessonId && mod.phases.length > 0 && mod.phases[0].lessons.length > 0) {
                firstLessonId = mod.phases[0].lessons[0].id;
            }

            const iconSvg = mod.id === 'm1' 
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'
                : mod.id === 'm2'
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>';

            const themeColor = mod.id === 'm1' ? 'sky' : mod.id === 'm2' ? 'violet' : 'emerald';

            html += `
                <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-${themeColor}-500/50 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-${themeColor}-500/10 hover:-translate-y-1 relative cursor-pointer" onclick="app.renderModuleDetails('${mod.id}')">
                    <div class="absolute inset-0 bg-gradient-to-br from-${themeColor}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="h-2 w-full bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-400"></div>
                    <div class="p-8 flex flex-col flex-1 relative z-10">
                        <div class="w-16 h-16 rounded-2xl bg-${themeColor}-500/10 text-${themeColor}-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${themeColor}-500 group-hover:text-white transition-all duration-300 shadow-inner">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">${iconSvg}</svg>
                        </div>
                        <h2 class="text-xl font-bold text-slate-100 mb-3 leading-snug">${mod.title}</h2>
                        <div class="flex flex-col gap-3 text-sm text-slate-400 mb-8 mt-auto font-medium">
                            <div class="flex items-center gap-2"><svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> ${mod.phases.length} Phases d'apprentissage</div>
                            <div class="flex items-center gap-2"><svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg> ${totalLessons} Leçons détaillées</div>
                        </div>
                        <button class="w-full py-3.5 px-4 bg-slate-950 border border-slate-700 group-hover:border-${themeColor}-500/50 group-hover:bg-${themeColor}-600 text-slate-300 group-hover:text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md pointer-events-none">
                            Explorer le module
                            <svg class="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>
                </div>
            `;
        });

        html += `
            </div>
        </div>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
        `;

        document.getElementById('main-content').innerHTML = html;
        document.getElementById('main-content').scrollTop = 0;
    },

    renderModuleDetails: function(moduleId) {
        // Deselect nav items
        document.querySelectorAll('[id^="nav-"]').forEach(el => {
            el.classList.remove('bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            el.classList.add('text-slate-400');
        });

        if (window.innerWidth < 1024) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebar-overlay').classList.add('hidden');
        }

        const mod = itCampusData.modules.find(m => m.id === moduleId);
        if (!mod) return;

        const themeColor = mod.id === 'm1' ? 'sky' : mod.id === 'm2' ? 'violet' : 'emerald';
        const iconSvg = mod.id === 'm1' 
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'
            : mod.id === 'm2'
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>';

        let html = `
        <div class="max-w-7xl mx-auto p-5 lg:p-12 pb-24 animate-[fadeIn_0.3s_ease-out]">
            <button onclick="app.renderHome()" class="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Retour à l'accueil
            </button>
            
            <div class="mb-12">
                <div class="inline-flex items-center justify-center p-3 bg-${themeColor}-500/10 rounded-2xl mb-4 shadow-inner border border-${themeColor}-500/20">
                    <svg class="w-10 h-10 text-${themeColor}-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">${iconSvg}</svg>
                </div>
                <h1 class="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">${mod.title}</h1>
                <p class="text-lg text-slate-400 font-medium">Sélectionnez une phase d'apprentissage pour continuer.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;

        mod.phases.forEach((phase, pIndex) => {
            let totalLessons = phase.lessons.length;
            let availableLessons = phase.lessons.filter(l => l.status === 'available').length;
            let firstLessonId = phase.lessons.length > 0 ? phase.lessons[0].id : null;
            
            const phaseIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>';

            html += `
                <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-${themeColor}-500/50 transition-all duration-300 group flex flex-col h-full shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer" onclick="${firstLessonId ? `app.loadLesson('${firstLessonId}')` : `app.togglePhase('phase-${itCampusData.modules.findIndex(m => m.id === mod.id)}-${pIndex}')`}">
                    <div class="flex items-start justify-between mb-4">
                        <div class="p-3 bg-slate-800 rounded-xl text-slate-400 group-hover:bg-${themeColor}-500/10 group-hover:text-${themeColor}-400 transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${phaseIcon}</svg>
                        </div>
                        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${availableLessons > 0 ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' : 'bg-slate-800 text-slate-500 border border-slate-700'}">${availableLessons}/${totalLessons} Dispo</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">${phase.title}</h3>
                    <p class="text-sm text-slate-500 mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between">
                        Commencer la phase
                        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-${themeColor}-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
            html += `
            <div class="mb-3">
                <button class="w-full flex items-center justify-between p-3.5 text-left font-bold text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors group shadow-sm focus:outline-none" onclick="app.toggleModule('${moduleId}')">
                    <span class="truncate pr-2 text-[13px] leading-tight flex-1">${mod.title}</span>
                    <svg id="icon-${moduleId}" class="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-transform duration-300 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div id="${moduleId}" class="hidden flex-col mt-2 pl-4 space-y-2 border-l-2 border-slate-800/80 ml-4">
            `;
            mod.phases.forEach((phase, pIndex) => {
                const phaseId = `phase-${mIndex}-${pIndex}`;
                html += `
                    <div>
                        <button class="w-full flex items-center justify-between p-2.5 text-left text-[13px] font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors rounded-lg group focus:outline-none" onclick="app.togglePhase('${phaseId}')">
                            <span class="truncate pr-3">${phase.title}</span>
                            <svg id="icon-${phaseId}" class="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div id="${phaseId}" class="hidden flex-col pl-4 py-1.5 space-y-1 border-l border-slate-700/50 ml-2 mt-1">
                `;
                phase.lessons.forEach(lesson => {
                    const isAvailable = lesson.status === 'available';
                    const badgeClass = isAvailable ? 'bg-sky-500/20 text-sky-400 border border-sky-500/20 shadow-[0_0_8px_rgba(14,165,233,0.15)]' : 'bg-slate-800 text-slate-500 border border-slate-700/50';
                    const badgeText = isAvailable ? 'Dispo' : 'À venir';
                    
                    html += `
                            <button onclick="app.loadLesson('${lesson.id}')" id="nav-${lesson.id}" class="w-full text-left p-2 rounded-md text-[12px] text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-all flex items-start justify-between group focus:outline-none">
                                <span class="truncate mr-2 flex-1 pt-0.5">${lesson.title.split(' ')[0]} ${lesson.title.split(' ').slice(1).join(' ')}</span>
                                <span class="text-[9px] px-1.5 py-0.5 rounded uppercase font-extrabold whitespace-nowrap tracking-wider ${badgeClass}">${badgeText}</span>
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
            activeNav.classList.remove('text-slate-400');
            activeNav.classList.add('bg-sky-500/10', 'text-sky-300', 'shadow-[inset_3px_0_0_#0ea5e9]');
            
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
            <div class="bg-slate-900 border-2 border-dashed border-slate-700/50 rounded-2xl p-12 text-center shadow-sm max-w-3xl mx-auto">
                <div class="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5L18.5 7H20"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-200 mb-4">Module en cours de rédaction</h3>
                <p class="text-slate-400 max-w-md mx-auto text-lg">Le contenu, la vidéo et le quiz seront bientôt ajoutés par le formateur. Restez à l'écoute !</p>
            </div>
            `;
        }

        let videoHtml = '';
        if (currentLesson.status === 'available' && currentLesson.videoUrl) {
            videoHtml = `
            <iframe src="${currentLesson.videoUrl}" class="w-full h-full absolute inset-0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="absolute top-4 right-4 z-10 hidden group-hover:block animate-[fadeIn_0.2s_ease-out]">
                <a href="${currentLesson.videoUrl.replace('/embed/', '/watch?v=')}" target="_blank" class="bg-slate-900/90 hover:bg-slate-800 text-white px-3 py-2 rounded-lg backdrop-blur-md border border-slate-700/50 flex items-center gap-2 text-sm font-bold transition-all shadow-lg hover:shadow-rose-500/20">
                    <svg class="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Regarder sur YouTube
                </a>
            </div>
            `;
        } else {
            videoHtml = `
            <div class="text-center p-8 absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950">
                <div class="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 group-hover:bg-sky-500/10 border border-slate-700 group-hover:border-sky-500/30">
                    <svg class="w-10 h-10 text-slate-500 group-hover:text-sky-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">Vidéo du cours à venir</h3>
                <p class="text-slate-400 max-w-md mx-auto text-sm">Le support vidéo interactif sera bientôt disponible pour cette section.</p>
            </div>`;
        }

        let html = `
        <div class="max-w-5xl mx-auto p-5 lg:p-12 pb-24 animate-[fadeIn_0.3s_ease-out]">
            <!-- Header -->
            <div class="mb-10">
                <div class="flex flex-wrap items-center gap-3 mb-5">
                    <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-xs font-bold uppercase tracking-wider border border-slate-700">${currentModule.title.split(' : ')[0]}</span>
                    <span class="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-md text-xs font-bold uppercase tracking-wider border border-violet-500/20">${currentPhase.title.split(' : ')[0]}</span>
                </div>
                <h1 class="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">${currentLesson.title}</h1>
                
                ${currentLesson.objective ? `
                <div class="bg-gradient-to-r from-slate-900 to-slate-900/50 border-l-4 border-sky-500 p-6 rounded-r-xl shadow-md border-y border-r border-slate-800">
                    <h3 class="text-sky-400 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Objectif d'apprentissage
                    </h3>
                    <p class="text-slate-300 leading-relaxed text-lg">${currentLesson.objective}</p>
                </div>
                ` : ''}
            </div>

            <!-- Video Section -->
            <div class="mb-12">
                <div class="w-full aspect-video bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center shadow-2xl relative group">
                    ${videoHtml}
                </div>
            </div>

            <!-- Content Area -->
            <div class="mb-16">
                ${contentHtml}
            </div>

            <!-- Quiz Section -->
            <div class="mb-12" id="quiz-container">
            </div>

            <!-- Navigation Buttons -->
            <div class="flex items-center justify-between pt-8 border-t border-slate-800">
                ${prevLesson ? `<button onclick="app.loadLesson('${prevLesson.id}')" class="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold transition-all hover:shadow-lg flex items-center gap-3 hover:-translate-x-1 focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> <span class="hidden sm:inline">Phase précédente</span></button>` : '<div></div>'}
                ${nextLesson ? `<button onclick="app.loadLesson('${nextLesson.id}')" class="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.23)] hover:sky-500 transition-all flex items-center gap-3 hover:translate-x-1 focus:outline-none"><span class="hidden sm:inline">Phase suivante</span> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>` : '<div></div>'}
            </div>
        </div>
        `;
        
        document.getElementById('main-content').innerHTML = html;
        document.getElementById('main-content').scrollTop = 0;

        if (currentLesson.status === 'available' && currentLesson.quiz && currentLesson.quiz.length > 0) {
            this.currentQuiz = currentLesson.quiz;
            this.quizState = new Array(this.currentQuiz.length).fill(null);
            this.renderQuizUI();
        }
    },
    
    renderQuizUI: function() {
        const container = document.getElementById('quiz-container');
        if (!container) return;
        
        let html = `
        <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div class="bg-slate-800/80 px-8 py-5 flex items-center justify-between border-b border-slate-700">
                <div class="flex items-center gap-4">
                    <div class="bg-violet-500/20 p-2.5 rounded-xl text-violet-400 border border-violet-500/20 shadow-inner">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-extrabold text-slate-100">Validation des connaissances</h3>
                </div>
                <span class="text-sm font-bold text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-700">QCM Interactif</span>
            </div>
            <div class="p-8 space-y-10">
        `;
        
        this.currentQuiz.forEach((q, qIndex) => {
            html += `
            <div class="quiz-question" id="q-${qIndex}">
                <h4 class="text-lg font-bold text-slate-200 mb-5 leading-relaxed"><span class="text-sky-400 font-black mr-2 text-xl">Q${qIndex + 1}.</span> ${q.question}</h4>
                <div class="space-y-3">
            `;
            q.options.forEach((opt, optIndex) => {
                html += `
                    <button onclick="app.answerQuiz(${qIndex}, ${optIndex})" id="btn-${qIndex}-${optIndex}" class="w-full text-left p-4 rounded-xl border-2 border-slate-700/50 bg-slate-950/50 hover:bg-slate-800 hover:border-slate-600 transition-all text-slate-300 relative overflow-hidden group focus:outline-none">
                        <div class="flex items-center gap-4 relative z-10">
                            <div class="w-6 h-6 rounded-full border-2 border-slate-600 flex items-center justify-center flex-shrink-0 group-hover:border-sky-400 transition-colors" id="circle-${qIndex}-${optIndex}"></div>
                            <span class="font-medium">${opt}</span>
                        </div>
                    </button>
                `;
            });
            html += `
                </div>
                <div id="explanation-${qIndex}" class="hidden mt-5 p-5 rounded-xl text-sm leading-relaxed shadow-sm"></div>
            </div>
            `;
        });
        
        html += `
            </div>
            <div class="px-8 py-6 bg-slate-950/80 border-t border-slate-800 flex justify-between items-center hidden" id="quiz-results">
                <span class="text-slate-300 font-bold uppercase tracking-wider text-sm">Votre score final</span>
                <div class="flex items-center gap-4">
                    <div id="quiz-message" class="text-sm font-bold"></div>
                    <span class="text-3xl font-black px-4 py-1.5 rounded-lg" id="quiz-score"></span>
                </div>
            </div>
        </div>
        `;
        
        container.innerHTML = html;
    },

    answerQuiz: function(qIndex, optIndex) {
        if (this.quizState[qIndex] !== null) return;
        
        const q = this.currentQuiz[qIndex];
        this.quizState[qIndex] = optIndex;
        
        const isCorrect = optIndex === q.correctAnswer;
        
        q.options.forEach((_, idx) => {
            const btn = document.getElementById(`btn-${qIndex}-${idx}`);
            const circle = document.getElementById(`circle-${qIndex}-${idx}`);
            
            btn.classList.remove('hover:bg-slate-800', 'hover:border-slate-600', 'cursor-pointer', 'border-slate-700/50');
            btn.classList.add('cursor-default', 'opacity-50', 'border-transparent');
            
            if (idx === q.correctAnswer) {
                btn.classList.remove('bg-slate-950/50', 'opacity-50');
                btn.classList.add('border-emerald-500', 'bg-emerald-500/10', 'text-emerald-300', 'shadow-[0_0_15px_rgba(16,185,129,0.1)]');
                circle.classList.remove('border-slate-600', 'group-hover:border-sky-400');
                circle.classList.add('border-emerald-500', 'bg-emerald-500');
                circle.innerHTML = `<svg class="w-4 h-4 text-emerald-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`;
            } else if (idx === optIndex && !isCorrect) {
                btn.classList.remove('bg-slate-950/50');
                btn.classList.add('border-rose-500', 'bg-rose-500/10', 'text-rose-300', 'opacity-100');
                circle.classList.remove('border-slate-600', 'group-hover:border-sky-400');
                circle.classList.add('border-rose-500', 'bg-rose-500');
                circle.innerHTML = `<svg class="w-4 h-4 text-rose-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            }
        });
        
        const expDiv = document.getElementById(`explanation-${qIndex}`);
        expDiv.classList.remove('hidden');
        if (isCorrect) {
            expDiv.classList.add('bg-emerald-500/10', 'border', 'border-emerald-500/30', 'text-emerald-200');
            expDiv.innerHTML = `<p class="font-extrabold mb-2 flex items-center gap-2 text-emerald-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Excellente réponse !</p><p>${q.explanation}</p>`;
        } else {
            expDiv.classList.add('bg-rose-500/10', 'border', 'border-rose-500/30', 'text-rose-200');
            expDiv.innerHTML = `<p class="font-extrabold mb-2 flex items-center gap-2 text-rose-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Incorrect.</p><p>${q.explanation}</p>`;
        }
        
        if (this.quizState.every(s => s !== null)) {
            const score = this.quizState.filter((ans, idx) => ans === this.currentQuiz[idx].correctAnswer).length;
            const resDiv = document.getElementById('quiz-results');
            const scoreSpan = document.getElementById('quiz-score');
            const msgSpan = document.getElementById('quiz-message');
            resDiv.classList.remove('hidden');
            
            const percentage = (score / this.currentQuiz.length) * 100;
            if (percentage === 100) {
                scoreSpan.className = 'text-3xl font-black bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-lg border border-emerald-500/30';
                msgSpan.className = 'text-emerald-400 font-bold';
                msgSpan.innerText = "Parfait !";
            } else if (percentage >= 50) {
                scoreSpan.className = 'text-3xl font-black bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-lg border border-amber-500/30';
                msgSpan.className = 'text-amber-400 font-bold';
                msgSpan.innerText = "Bon travail !";
            } else {
                scoreSpan.className = 'text-3xl font-black bg-rose-500/20 text-rose-400 px-4 py-1.5 rounded-lg border border-rose-500/30';
                msgSpan.className = 'text-rose-400 font-bold';
                msgSpan.innerText = "À revoir.";
            }
            scoreSpan.innerText = `${score} / ${this.currentQuiz.length}`;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
