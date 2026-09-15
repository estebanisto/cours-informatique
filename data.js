const itCampusData = {
    modules: [
        {
            id: "m1",
            title: "MODULE 1 : Technicien Support & Dépannage Avancé",
            phases: [
                {
                    id: "m1-p1",
                    title: "Phase 1 : Système Client Windows & PowerShell",
                    lessons: [
                        { 
                            id: "m1-p1-l1", 
                            title: "1.1 Structures & Théorie : MBR vs GPT et FAT32/exFAT/NTFS", 
                            status: "available",
                            objective: "Maîtriser l'organisation physique d'un disque, les tables de partitionnement et comparer techniquement les systèmes de fichiers.",
                            videoUrl: "https://www.youtube.com/embed/Oe8G2Mj3W54",
                            quiz: [
                                {
                                    type: "single",
                                    question: "Pourquoi le standard MBR est-il mathématiquement limité à un maximum de 4 partitions primaires ?",
                                    options: [
                                        { text: "Le BIOS Legacy ne peut pas adresser plus de 4 identifiants de volume différents.", isCorrect: false, feedback: "La limitation est structurelle au niveau du secteur de démarrage et non une restriction directe de la capacité d'adressage du BIOS." },
                                        { text: "Le code de démarrage (Bootstrap code) occupe trop d'espace pour permettre plus d'entrées.", isCorrect: false, feedback: "Bien que le code de démarrage occupe 446 octets, la limite des partitions provient spécifiquement de la taille fixe allouée à la table de partition elle-même." },
                                        { text: "La table de partition de 64 octets ne peut contenir que 4 entrées de 16 octets chacune.", isCorrect: true, feedback: "Le calcul rigide 64÷16=4 définit le nombre d'emplacements disponibles pour les descripteurs de partitions primaires dans le secteur LBA 0." },
                                        { text: "L'architecture 32 bits limite le nombre total d'objets logiques gérables simultanément.", isCorrect: false, feedback: "L'architecture 32 bits impacte la taille maximale du disque (adressage des secteurs), mais pas directement le nombre d'entrées dans la table." }
                                    ]
                                },
                                {
                                    type: "multiple",
                                    question: "Quelles caractéristiques du standard GPT (GUID Partition Table) améliorent la tolérance aux pannes par rapport au MBR ?",
                                    options: [
                                        { text: "Le recours à des identifiants uniques (GUID) sur 128 bits pour chaque partition.", isCorrect: false, feedback: "Les GUID servent à l'identification unique universelle, mais ne contribuent pas directement à la récupération des données après une défaillance physique." },
                                        { text: "L'implémentation d'une partition étendue pour protéger les partitions primaires.", isCorrect: false, feedback: "La partition étendue est une astuce du MBR pour contourner ses propres limites, tandis que le GPT considère toutes les partitions comme autonomes." },
                                        { text: "L'utilisation de sommes de contrôle CRC32 pour vérifier l'intégrité de l'en-tête.", isCorrect: true, feedback: "Le CRC32 permet de détecter immédiatement une corruption des données de partitionnement, contrairement au MBR qui n'a aucun mécanisme de vérification." },
                                        { text: "La présence d'une copie miroir de la table de partition à la fin physique du disque.", isCorrect: true, feedback: "Le GPT secondaire (Backup GPT) permet à l'UEFI de restaurer automatiquement la table si le début du disque est corrompu." }
                                    ]
                                },
                                {
                                    type: "text",
                                    question: "La limite de capacité de 2 To pour les disques MBR provient de l'utilisation d'adresses de secteur codées sur ___ bits.",
                                    correctAnswers: ["32", "32 bits", "trente-deux"],
                                    feedback: "L'adressage 32 bits limite le nombre de secteurs adressables à 2³², ce qui, multiplié par 512 octets, plafonne la visibilité du disque à environ 2,19 To."
                                },
                                {
                                    type: "single",
                                    question: "Un utilisateur souhaite transférer un montage vidéo de 12 Go entre un PC sous Windows et un Mac. Quel système de fichiers doit-il privilégier pour sa clé USB ?",
                                    options: [
                                        { text: "MBR", isCorrect: false, feedback: "Le MBR est une table de partitionnement, pas un système de fichiers ; il définit les divisions du disque mais pas la gestion des fichiers." },
                                        { text: "exFAT", isCorrect: true, feedback: "L'exFAT supporte des fichiers dépassant 4 Go et permet une lecture/écriture native complète sur Windows et macOS sans pilote tiers." },
                                        { text: "FAT32", isCorrect: false, feedback: "Le FAT32 rejette tout fichier de plus de 4 Go, ce qui rend impossible le stockage d'un fichier de 12 Go." },
                                        { text: "NTFS", isCorrect: false, feedback: "Bien qu'il supporte les gros fichiers, macOS ne peut pas écrire nativement sur du NTFS, ce qui limiterait l'échange de données." }
                                    ]
                                },
                                {
                                    type: "single",
                                    question: "À quoi sert le 'Protective MBR' situé au secteur LBA 0 d'un disque partitionné en GPT ?",
                                    options: [
                                        { text: "À stocker la copie de sauvegarde de la table GPT en cas de corruption de l'en-tête primaire.", isCorrect: false, feedback: "La sauvegarde du GPT se trouve à la toute fin physique du disque, et non au premier secteur LBA 0." },
                                        { text: "À héberger les signatures numériques CRC32 pour la vérification de l'intégrité.", isCorrect: false, feedback: "Les calculs CRC32 sont stockés dans l'en-tête GPT primaire situé au secteur LBA 1." },
                                        { text: "À permettre le démarrage sur des cartes mères équipées uniquement d'un BIOS Legacy.", isCorrect: false, feedback: "Le GPT nécessite normalement un micrologiciel UEFI ; le Protective MBR est une mesure de sécurité de données, pas un pont de compatibilité de boot." },
                                        { text: "À empêcher les anciens utilitaires de considérer le disque comme vide et d'écraser les données.", isCorrect: true, feedback: "Ce faux MBR fait croire aux vieux logiciels que le disque entier est occupé par une partition inconnue, évitant ainsi une initialisation accidentelle." }
                                    ]
                                },
                                {
                                    type: "text",
                                    question: "Dans une partition NTFS, la base de données interne répertoriant l'intégralité des fichiers, leurs attributs et leurs droits de sécurité s'appelle la ___.",
                                    correctAnswers: ["mft", "master file table"],
                                    feedback: "La Master File Table (MFT) est la structure centrale du NTFS où chaque fichier, y compris les métadonnées du système, est répertorié comme une entrée."
                                },
                                {
                                    type: "multiple",
                                    question: "Quelles fonctionnalités de sécurité et de gestion avancée sont exclusives au système NTFS par rapport au FAT32 et à l'exFAT ?",
                                    options: [
                                        { text: "La gestion des quotas de disque pour limiter l'espace utilisé par chaque compte.", isCorrect: true, feedback: "Exclusif au NTFS." },
                                        { text: "Les Listes de Contrôle d'Accès (ACL) pour définir des permissions par utilisateur.", isCorrect: true, feedback: "Exclusif au NTFS pour la sécurité granulaire." },
                                        { text: "Le chiffrement natif des fichiers via EFS (Encrypting File System).", isCorrect: true, feedback: "Exclusif au NTFS." },
                                        { text: "La capacité d'allouer de l'espace par blocs appelés clusters.", isCorrect: false, feedback: "Faux. FAT32 et exFAT utilisent aussi des clusters." }
                                    ]
                                },
                                {
                                    type: "single",
                                    question: "Quelle est la conséquence directe de l'absence de copie de sauvegarde du MBR sur un disque dur ?",
                                    options: [
                                        { text: "Le BIOS force l'utilisation du système de fichiers FAT32 pour assurer la compatibilité.", isCorrect: false, feedback: "Le BIOS se contente d'exécuter le code de démarrage du MBR ; il ne choisit pas le système de fichiers de la partition." },
                                        { text: "Le disque devient instantanément 'non initialisé' ou 'RAW' si le secteur LBA 0 est endommagé.", isCorrect: true, feedback: "Puisqu'il n'y a qu'une seule copie au début du disque, toute corruption du secteur 0 rend les partitions invisibles pour le système." },
                                        { text: "Le système bascule automatiquement sur une partition étendue pour récupérer les données.", isCorrect: false, feedback: "La partition étendue dépend elle-même des informations contenues dans la table de partition du MBR ; si le MBR est mort, elle l'est aussi." },
                                        { text: "La taille maximale du disque est limitée à 2 To pour compenser la fragilité du secteur.", isCorrect: false, feedback: "La limite de 2 To est due à l'adressage 32 bits, pas à l'absence de sauvegarde du secteur de boot." }
                                    ]
                                }
                            ],
                            content: `
                            <div class="space-y-10">
                                <!-- Intro Block -->
                                <div class="bg-slate-900 border-l-4 border-sky-500 rounded-r-xl p-6 shadow-md border-y border-r border-slate-800">
                                    <p class="text-slate-300 text-lg leading-relaxed mb-6">
                                        Un disque dur (HDD) ou un SSD est initialement composé de blocs physiques nommés secteurs, mesurant généralement 512 octets ou 4 Ko en Advanced Format. Avant l'écriture de dossiers ou de fichiers, le système d'exploitation s'appuie sur la table de partitionnement inscrite au tout début du disque pour définir l'emplacement des découpages logiques (les partitions).
                                    </p>
                                    <div class="bg-slate-950 p-4 rounded-lg border border-slate-800">
                                        <h4 class="text-sky-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                            Organisation physique du disque :
                                        </h4>
                                        <div class="flex flex-wrap items-center gap-3 text-slate-300 font-medium">
                                            <span class="bg-slate-800 px-3 py-2 rounded-md border border-slate-700 shadow-inner">Disque Physique</span>
                                            <svg class="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            <span class="bg-slate-800 px-3 py-2 rounded-md border border-slate-700 shadow-inner">Secteur 0 / Entête (Table MBR ou GPT)</span>
                                            <svg class="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            <span class="bg-slate-800 px-3 py-2 rounded-md border border-slate-700 shadow-inner">Espace de stockage (Partitions / Volumes)</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Section 1 -->
                                <section>
                                    <h2 class="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                                        <span class="bg-sky-500 w-2 h-7 rounded-sm shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span>
                                        1. La Table de Partitionnement : MBR vs GPT
                                    </h2>
                                    
                                    <div class="flex flex-col gap-8 mb-10">
                                        <!-- MBR Card -->
                                        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-sky-500/30 transition-colors group">
                                            <div class="flex items-center gap-4 mb-6">
                                                <div class="p-3 bg-slate-800 rounded-xl text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                                                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                                </div>
                                                <h3 class="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">A. MBR (Master Boot Record)</h3>
                                            </div>
                                            
                                            <div class="space-y-4 text-slate-300">
                                                <p><strong class="text-white">Origine et architecture :</strong> Conçu par IBM en 1983 pour le système DOS, le standard MBR s'appuie sur une architecture 32 bits liée au micrologiciel BIOS Legacy.</p>
                                                <p><strong class="text-white">Emplacement physique :</strong> Réside exclusivement sur le tout premier secteur du disque, le secteur LBA 0 (Logical Block Addressing), d'une taille exacte de 512 octets.</p>
                                                
                                                <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80 my-5">
                                                    <strong class="text-sky-300 block mb-3">Composition des 512 octets du LBA 0 :</strong>
                                                    <ul class="space-y-3">
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-sky-500/20 text-sky-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">1</span>
                                                            <span><em class="text-slate-200">Code de démarrage (Bootstrap code) :</em> 446 octets. Code exécutable utilisé par le BIOS pour repérer la partition contenant l'OS à charger.</span>
                                                        </li>
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-sky-500/20 text-sky-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">2</span>
                                                            <span><em class="text-slate-200">Table de partition :</em> 64 octets. Chaque entrée mesurant 16 octets, le calcul donne 64 ÷ 16 = 4. Il est mathématiquement impossible d'avoir plus de 4 partitions primaires.</span>
                                                        </li>
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-sky-500/20 text-sky-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">3</span>
                                                            <span><em class="text-slate-200">Signature de boot (Magic Number) :</em> 2 octets (valeur hexadécimale 0x55AA), confirmant au BIOS que le disque est amorçable.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <p><strong class="text-white">Calcul de la limite des 2 To :</strong> Le MBR utilise un adressage 32 bits (2³² adresses). Avec des secteurs standards de 512 octets : <code class="bg-slate-800 text-sky-300 px-2 py-1 rounded text-sm font-mono mx-1 break-all md:break-normal">4 294 967 296 × 512 octets = 2 199 023 255 552 octets ≈ 2,19 To (ou 2 Tio)</code>. Tout espace au-delà est invisible pour le système.</p>
                                                <p><strong class="text-white">Contournement :</strong> Possibilité de sacrifier une entrée primaire pour créer une <strong class="text-white">partition étendue</strong>, servant de conteneur à des lecteurs logiques illimités.</p>
                                                <p><strong class="text-rose-400">Vulnérabilité critique :</strong> Aucune copie de sauvegarde. Si le secteur LBA 0 est endommagé ou corrompu, le disque passe immédiatement à l'état brut (<strong class="text-rose-300">RAW</strong>).</p>
                                            </div>
                                        </div>

                                        <!-- GPT Card -->
                                        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-violet-500/30 transition-colors group">
                                            <div class="flex items-center gap-4 mb-6">
                                                <div class="p-3 bg-slate-800 rounded-xl text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                                                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                                </div>
                                                <h3 class="text-2xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">B. GPT (GUID Partition Table)</h3>
                                            </div>
                                            
                                            <div class="space-y-4 text-slate-300">
                                                <p><strong class="text-white">Origine et architecture :</strong> Introduit avec l'UEFI pour remplacer le BIOS, il repose sur un adressage 64 bits et utilise des identifiants uniques universels (GUID/UUID) pour chaque partition.</p>
                                                
                                                <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80 my-5">
                                                    <strong class="text-violet-300 block mb-3">Structure et redondance :</strong>
                                                    <ul class="space-y-3">
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-violet-500/20 text-violet-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">1</span>
                                                            <span><em class="text-slate-200">Protective MBR (LBA 0) :</em> Faux MBR pour empêcher les anciens utilitaires d'écraser le disque par erreur.</span>
                                                        </li>
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-violet-500/20 text-violet-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">2</span>
                                                            <span><em class="text-slate-200">En-tête GPT primaire (LBA 1) :</em> Contient la taille de la table, les pointeurs et le contrôle d'intégrité CRC32.</span>
                                                        </li>
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-violet-500/20 text-violet-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">3</span>
                                                            <span><em class="text-slate-200">Table des partitions (LBA 2 à 33) :</em> Windows alloue par défaut 128 entrées de partition (128 octets chacune).</span>
                                                        </li>
                                                        <li class="flex items-start gap-3">
                                                            <span class="bg-violet-500/20 text-violet-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">4</span>
                                                            <span><em class="text-slate-200">GPT secondaire (Backup GPT) :</em> Copie miroir exacte inscrite à la toute fin physique du disque pour une restauration automatique en cas de corruption.</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <p><strong class="text-white">Capacité théorique :</strong> Basé sur 2⁶⁴ secteurs, il peut adresser jusqu'à 9,4 Zo (Zettaoctets).</p>
                                                <p><strong class="text-white">Partitions autonomes :</strong> Aucune notion de partition étendue ; toutes les partitions sont indépendantes.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Comparison Table MBR/GPT -->
                                    <h3 class="text-xl font-bold text-slate-200 mb-5">C. Comparatif Direct : MBR vs GPT</h3>
                                    <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg mb-12">
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-left border-collapse min-w-[600px]">
                                                <thead>
                                                    <tr class="bg-slate-950/80 text-slate-300 text-sm uppercase tracking-wider">
                                                        <th class="p-5 font-bold border-b border-slate-800 w-1/3">Paramètre</th>
                                                        <th class="p-5 font-bold border-b border-slate-800 text-sky-400 w-1/3">MBR (Master Boot Record)</th>
                                                        <th class="p-5 font-bold border-b border-slate-800 text-violet-400 w-1/3">GPT (GUID Partition Table)</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm divide-y divide-slate-800/50">
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Micrologiciel carte mère</td>
                                                        <td class="p-5 text-slate-300">BIOS Legacy</td>
                                                        <td class="p-5 text-slate-300">UEFI</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Taille maximale du disque</td>
                                                        <td class="p-5 text-rose-400 font-semibold">2 To</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">9,4 Zo (sans contrainte réelle)</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Nombre max de partitions</td>
                                                        <td class="p-5 text-slate-300">4 primaires (ou 3 primaires + 1 étendue)</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">128 partitions (sous Windows)</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Tolérance aux pannes</td>
                                                        <td class="p-5 text-rose-400 font-semibold">Aucune (secteur unique LBA 0)</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Élevée (copie miroir en fin de disque + CRC32)</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Identifiants de partition</td>
                                                        <td class="p-5 text-slate-300">Non (numérotation simple)</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Oui (GUID unique sur 128 bits)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>

                                <!-- Section 2 -->
                                <section>
                                    <h2 class="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                                        <span class="bg-emerald-500 w-2 h-7 rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                                        2. Les Systèmes de Fichiers : FAT32, exFAT, NTFS
                                    </h2>
                                    <p class="text-slate-300 text-lg leading-relaxed mb-8">
                                        Une fois la partition délimitée, le système de fichiers organise les données sous forme d'arborescence et gère l'allocation de l'espace par blocs nommés clusters.
                                    </p>

                                    <div class="flex flex-col gap-8 mb-12">
                                        <!-- FAT32 -->
                                        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-slate-700 transition-colors relative overflow-hidden group">
                                            <div class="absolute top-0 right-0 w-24 h-24 bg-slate-800/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                            <h3 class="text-xl font-bold text-slate-100 mb-5 relative z-10 flex items-center gap-2">
                                                <span class="p-2 bg-slate-800 rounded-lg text-slate-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg></span>
                                                A. FAT32 (File Allocation Table 32 bits)
                                            </h3>
                                            <ul class="space-y-4 text-sm text-slate-300 relative z-10">
                                                <li><strong class="text-white">Conception :</strong> Créé pour Windows 95 OSR2, table d'allocation statique indexant les clusters.</li>
                                                <li><strong class="text-rose-400">Limite des 4 Go par fichier :</strong> Champ de taille codé sur 32 bits non signés (2³² - 1 octets = 4 Go moins 1 octet). Un fichier de 4,01 Go ne peut pas être écrit, même avec 500 Go d'espace libre.</li>
                                                <li><strong class="text-white">Limite de partition :</strong> L'outil de formatage natif de Windows bloque la création de partitions FAT32 à 32 Go pour pousser le NTFS.</li>
                                                <li><strong class="text-rose-400">Absence de sécurité :</strong> Pas de listes de contrôle d'accès (ACL) ni de journalisation (vulnérable aux déconnexions à chaud).</li>
                                                <li><strong class="text-emerald-400">Usage :</strong> Interopérabilité totale (clés bootables simples, autoradios, vieilles consoles).</li>
                                            </ul>
                                        </div>

                                        <!-- exFAT -->
                                        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-sky-500/30 transition-colors relative overflow-hidden group">
                                            <div class="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                            <h3 class="text-xl font-bold text-slate-100 mb-5 relative z-10 flex items-center gap-2">
                                                <span class="p-2 bg-sky-500/10 rounded-lg text-sky-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></span>
                                                B. exFAT (Extended File Allocation Table)
                                            </h3>
                                            <ul class="space-y-4 text-sm text-slate-300 relative z-10">
                                                <li><strong class="text-white">Conception :</strong> Créé par Microsoft en 2006 pour moderniser les supports amovibles.</li>
                                                <li><strong class="text-emerald-400">Suppression de la limite :</strong> Fichiers jusqu'à 16 Eo (Exaoctets), compatible avec les gros fichiers vidéo et ISO.</li>
                                                <li><strong class="text-sky-300">Optimisation mémoire flash :</strong> Pas de journalisation ni d'ACLs lourdes, réduisant l'usure des clés USB et cartes SD.</li>
                                                <li><strong class="text-emerald-400">Usage :</strong> Supports amovibles volumineux partagés entre Windows et macOS (lecture/écriture natives).</li>
                                            </ul>
                                        </div>

                                        <!-- NTFS -->
                                        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-violet-500/30 transition-colors relative overflow-hidden group">
                                            <div class="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                            <h3 class="text-xl font-bold text-slate-100 mb-5 relative z-10 flex items-center gap-2">
                                                <span class="p-2 bg-violet-500/10 rounded-lg text-violet-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
                                                C. NTFS (New Technology File System)
                                            </h3>
                                            <ul class="space-y-4 text-sm text-slate-300 relative z-10">
                                                <li><strong class="text-white">Conception :</strong> Système propriétaire professionnel standard depuis Windows 2000.</li>
                                                <li><strong class="text-violet-300">Structure MFT (Master File Table) :</strong> Base de données interne répertoriant l'intégralité des fichiers, attributs, dates, droits de sécurité et clusters.</li>
                                                <li><strong class="text-emerald-400">Journalisation active ($LogFile) :</strong> En cas de coupure de courant, le journal transactionnel annule l'opération interrompue (<em>rollback</em>) au redémarrage, évitant la corruption de partition.</li>
                                                <li><strong class="text-violet-300">Sécurité granulaire (ACLs) :</strong> Gestion fine des autorisations par utilisateur/groupe et chiffrement natif (EFS).</li>
                                                <li><strong class="text-white">Fonctions avancées :</strong> Quotas de disque par utilisateur, compression native, gestion des fichiers fragmentés.</li>
                                                <li><strong class="text-amber-400">Compatibilité :</strong> Lecture seule native sur macOS (écriture requiert des pilotes tiers type Paragon/Tuxera).</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- FS Comparison Table -->
                                    <h3 class="text-xl font-bold text-slate-200 mb-5">D. Tableau Récapitulatif : Systèmes de Fichiers</h3>
                                    <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg mb-4">
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-left border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr class="bg-slate-950/80 text-slate-300 text-sm uppercase tracking-wider">
                                                        <th class="p-5 font-bold border-b border-slate-800">Critère</th>
                                                        <th class="p-5 font-bold border-b border-slate-800">FAT32</th>
                                                        <th class="p-5 font-bold border-b border-slate-800 text-sky-400">exFAT</th>
                                                        <th class="p-5 font-bold border-b border-slate-800 text-violet-400">NTFS</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm divide-y divide-slate-800/50">
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Taille max d'un fichier</td>
                                                        <td class="p-5 text-rose-400 font-semibold">4 Go</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">16 Eo</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">16 To (cluster standard 4 Ko)</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Taille max d'une partition</td>
                                                        <td class="p-5 text-slate-300">32 Go (via Windows) / 2 To</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">128 Po</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">256 To</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Journalisation</td>
                                                        <td class="p-5 text-slate-500">Non</td>
                                                        <td class="p-5 text-slate-500">Non</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Oui (Tolérance aux pannes via $LogFile)</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Permissions (ACLs)</td>
                                                        <td class="p-5 text-slate-500">Non</td>
                                                        <td class="p-5 text-slate-500">Non</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Oui (Gestion utilisateurs / groupes)</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Quotas disque</td>
                                                        <td class="p-5 text-slate-500">Non</td>
                                                        <td class="p-5 text-slate-500">Non</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Oui</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Compatibilité macOS</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Lecture / Écriture</td>
                                                        <td class="p-5 text-emerald-400 font-semibold">Lecture / Écriture</td>
                                                        <td class="p-5 text-amber-400 font-semibold">Lecture seule native</td>
                                                    </tr>
                                                    <tr class="hover:bg-slate-800/40 transition-colors">
                                                        <td class="p-5 font-bold text-slate-200">Cible d'usage</td>
                                                        <td class="p-5 text-slate-300">Clés USB boot, vieux matériels</td>
                                                        <td class="p-5 text-sky-300">Supports amovibles multi-OS</td>
                                                        <td class="p-5 text-violet-300">Disques internes et systèmes Windows</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            `
                        },
                        { id: "m1-p1-l2", title: "1.2 Pratique CLI avec diskpart", status: "pending" },
                        { id: "m1-p1-l3", title: "1.3 Réparation & Santé disque", status: "pending" },
                        { id: "m1-p1-l4", title: "2.1 Modèle de sécurité local", status: "pending" },
                        { id: "m1-p1-l5", title: "2.2 Gestion en invite de commandes (CMD)", status: "pending" },
                        { id: "m1-p1-l6", title: "2.3 Gestion moderne en PowerShell", status: "pending" },
                        { id: "m1-p1-l7", title: "2.4 Le Contrôle de Compte Utilisateur (UAC)", status: "pending" },
                        { id: "m1-p1-l8", title: "3.1 Diagnostic des processus", status: "pending" },
                        { id: "m1-p1-l9", title: "3.2 Pilotage des services Windows", status: "pending" },
                        { id: "m1-p1-l10", title: "3.3 Administration des services en PowerShell", status: "pending" },
                        { id: "m1-p1-l11", title: "4.1 L'Observateur d'événements (Event Viewer)", status: "pending" },
                        { id: "m1-p1-l12", title: "4.2 Diagnostic des plantages critiques (BSOD)", status: "pending" },
                        { id: "m1-p1-l13", title: "4.3 Restauration de l'intégrité de Windows", status: "pending" }
                    ]
                },
                {
                    id: "m1-p2", title: "Phase 2 : Réseaux & Diagnostic de Connectivité",
                    lessons: [{ id: "m1-p2-l1", title: "Réseaux & Diagnostic de Connectivité", status: "pending" }]
                },
                {
                    id: "m1-p3", title: "Phase 3 : Gestion de Parc & Helpdesk (GLPI & Agents)",
                    lessons: [{ id: "m1-p3-l1", title: "Gestion de Parc & Helpdesk", status: "pending" }]
                },
                {
                    id: "m1-p4", title: "Phase 4 : Linux pour le Support",
                    lessons: [{ id: "m1-p4-l1", title: "Linux pour le Support", status: "pending" }]
                },
                {
                    id: "m1-p5", title: "Phase 5 : Environnement Entreprise & Active Directory",
                    lessons: [{ id: "m1-p5-l1", title: "Environnement Entreprise & Active Directory", status: "pending" }]
                }
            ]
        },
        {
            id: "m2",
            title: "MODULE 2 : Administration Systèmes, Réseaux Avancés & Cloud",
            phases: [
                {
                    id: "m2-p1", title: "Phase 1 : Virtualisation & Rôles Serveurs",
                    lessons: [{ id: "m2-p1-l1", title: "Virtualisation & Rôles Serveurs", status: "pending" }]
                },
                {
                    id: "m2-p2", title: "Phase 2 : Réseau Avancé & Sécurité Périmétrique",
                    lessons: [{ id: "m2-p2-l1", title: "Réseau Avancé & Sécurité Périmétrique", status: "pending" }]
                },
                {
                    id: "m2-p3", title: "Phase 3 : Automatisation, Scripting & Git",
                    lessons: [{ id: "m2-p3-l1", title: "Automatisation, Scripting & Git", status: "pending" }]
                },
                {
                    id: "m2-p4", title: "Phase 4 : Cloud, Hybridation & Mobilité",
                    lessons: [{ id: "m2-p4-l1", title: "Cloud, Hybridation & Mobilité", status: "pending" }]
                },
                {
                    id: "m2-p5", title: "Phase 5 : Conteneurs & Initiation DevOps",
                    lessons: [{ id: "m2-p5-l1", title: "Conteneurs & Initiation DevOps", status: "pending" }]
                }
            ]
        },
        {
            id: "m3",
            title: "MODULE 3 : e-Campus (Provisoire)",
            phases: [
                {
                    id: "m3-p1", title: "Phase 1 : Synthèses de cours de promotion",
                    lessons: [{ id: "m3-p1-l1", title: "Synthèses de cours de promotion", status: "pending" }]
                }
            ]
        }
    ]
};
