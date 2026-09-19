const itCampusData = {
    modules: [
        {
            id: "m3",
            title: "FORMATION ÉCOLE : Opérateur Informatique (e-Campus)",
            badge: "Cursus École",
            description: "Programme officiel dispensé en formation : synthèses de cours de la promotion, fiches de révision et supports officiels pour les examens.",
            isFeatured: true,
            phases: [
                {
                    id: "m3-p1",
                    title: "Phase 1 : Synthèses de cours de promotion",
                    lessons: [{ id: "m3-p1-l1", title: "Synthèses de cours de promotion", status: "pending" }]
                }
            ]
        },
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
                            <div class="space-y-12">
                                <!-- Intro Dialogue / Hardware Briefing Block -->
                                <!-- Intro Dialogue / Hardware Briefing Block -->
                                <div class="briefing-box briefing-box--green">
                                    <div class="briefing-header briefing-header--green">
                                        <span class="flex items-center gap-2 font-sans font-bold">
                                            [ BRIEFING TECHNIQUE // ARCHITECTURE DU STOCKAGE ]
                                        </span>
                                        <span class="badge-terminal">HARDWARE READY ▶</span>
                                    </div>
                                    <p class="paragraph-body mb-6">
                                        Un disque dur (HDD) ou un SSD est initialement composé de blocs physiques nommés <strong class="text-white font-semibold">secteurs</strong>, mesurant généralement 512 octets (Legacy) ou 4 Ko (Advanced Format). Avant l'écriture de dossiers ou de fichiers, le système d'exploitation s'appuie sur la <strong class="text-white font-semibold">table de partitionnement</strong> inscrite au tout début du disque physique pour délimiter les découpages logiques (les partitions).
                                    </p>
                                    <div class="bg-black p-4 sm:p-5 border border-[var(--border-muted)]">
                                        <div class="font-sans text-xs font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                                            <span class="text-[var(--primary-green)]">●</span> TOPOLOGIE PHYSIQUE DU DISQUE :
                                        </div>
                                        <div class="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                                            <div class="px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-muted)] text-[var(--text-primary)] font-bold">
                                                DISQUE PHYSIQUE (LBA 0...N)
                                            </div>
                                            <span class="text-[var(--primary-green)] font-mono text-xs">▶▶</span>
                                            <div class="px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-muted)] text-[var(--text-primary)] font-bold">
                                                SECTEUR 0 : LBA 0 (TABLE MBR / GPT)
                                            </div>
                                            <span class="text-[var(--primary-green)] font-mono text-xs">▶▶</span>
                                            <div class="px-3 py-2 bg-[var(--bg-card)] border border-[var(--primary-green)] text-[var(--primary-green)] font-bold">
                                                PARTITIONS &amp; SYSTÈMES DE FICHIERS
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Section 1 : Partitioning Tables -->
                                <section>
                                    <div class="flex items-center gap-3 mb-8">
                                        <span class="badge-terminal">01</span>
                                        <h2 class="heading-section !m-0 text-xl sm:text-3xl">
                                            La Table de Partitionnement : MBR vs GPT
                                        </h2>
                                    </div>
                                    
                                    <div class="flex flex-col gap-8 mb-10">
                                        <!-- MBR Card -->
                                        <div class="card-terminal p-6 sm:p-8 relative">
                                            <div class="flex items-center justify-between gap-4 mb-5 border-b border-[var(--border-muted)] pb-4 flex-wrap">
                                                <div class="flex items-center gap-3">
                                                    <span class="badge-terminal badge-orange">LEGACY BIOS</span>
                                                    <h3 class="card-terminal-title !text-2xl sm:!text-3xl text-zinc-100 tracking-wide">A. MBR (Master Boot Record)</h3>
                                                </div>
                                                <span class="font-mono text-xs text-[var(--text-muted)]">[ INTRODUIT EN 1983 ]</span>
                                            </div>
                                            
                                            <div class="space-y-5 font-sans text-[var(--text-primary)] text-sm sm:text-base leading-relaxed">
                                                <p><strong class="text-white">Origine et architecture :</strong> Conçu par IBM en 1983 pour le système DOS, le standard MBR repose sur une architecture 32 bits intrinsèquement liée au micrologiciel <strong class="text-white font-semibold">BIOS Legacy</strong>.</p>
                                                <p><strong class="text-white">Emplacement physique :</strong> Réside exclusivement sur le tout premier secteur du disque physique, nommé <strong class="text-white font-semibold">secteur LBA 0</strong> (Logical Block Addressing), d'une dimension exacte et fixe de 512 octets.</p>
                                                
                                                <div class="bg-black p-5 border border-[var(--border-muted)]">
                                                    <div class="font-sans text-xs font-semibold text-zinc-300 mb-3 border-b border-[var(--border-muted)] pb-2 flex items-center justify-between">
                                                        <span>[ DISSECTION DES 512 OCTETS DU SECTEUR LBA 0 ]</span>
                                                        <span class="text-[var(--text-muted)] font-mono text-xs">512 BYTES FIXED</span>
                                                    </div>
                                                    <div class="space-y-3 font-sans">
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">01</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">Code de démarrage (Bootstrap Code) : 446 octets</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Code machine binaire exécuté directement par le BIOS pour identifier la partition active et transférer la main au bootloader de l'OS.</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">02</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">Table de partition : 64 octets (4 entrées de 16 octets)</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Chaque descripteur de partition occupe exactement 16 octets. La formule arithmétique rigide <code>64 ÷ 16 = 4</code> rend mathématiquement impossible la création de plus de 4 partitions primaires.</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">03</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">Signature de boot (Magic Number) : 2 octets [ 0x55AA ]</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Valeur hexadécimale de validation confirmant au BIOS que le disque physique contient une amorce valide.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <strong class="text-white block mb-1">Calcul mathématique de la limite des 2 To :</strong>
                                                    <p class="text-[var(--text-primary)] mb-2">Le MBR utilise un champ d'adressage de secteur limité à 32 bits (soit 2³² adresses possibles). Avec des secteurs standards de 512 octets :</p>
                                                    <div class="bg-black border border-[var(--border-muted)] p-3 text-zinc-200 font-mono text-xs overflow-x-auto">
                                                        <code>4 294 967 296 secteurs × 512 octets = 2 199 023 255 552 octets ≈ 2,19 To (2 Tio)</code>
                                                    </div>
                                                    <p class="text-[var(--text-muted)] text-xs mt-1">Tout secteur physique au-delà de cette frontière de 2,19 To est complètement invisible pour le BIOS et le partitionneur MBR.</p>
                                                </div>

                                                <p><strong class="text-white">Contournement :</strong> Possibilité de sacrifier une entrée primaire pour créer une <strong class="text-white font-semibold">partition étendue</strong>, servant de réceptacle à des lecteurs logiques chaînés (EBR).</p>

                                                <!-- Critical Vulnerability Warning Box -->
                                                <div class="briefing-box briefing-box--orange mt-4">
                                                    <div class="briefing-header briefing-header--orange">
                                                        <span class="font-sans font-bold">▲ [ VULNÉRABILITÉ CRITIQUE MBR : ABSENCE DE REDONDANCE ]</span>
                                                    </div>
                                                    <p class="paragraph-body !mb-0 text-xs sm:text-sm leading-relaxed">
                                                        Aucune sauvegarde n'existe par défaut. Si le premier secteur physique LBA 0 est endommagé, corrompu par un malware ou défaillant, le système d'exploitation ne repère plus aucune table : le disque bascule instantanément à l'état non initialisé / brut (<strong class="text-rose-400 font-bold">RAW</strong>), bloquant l'accès à toutes les données.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- GPT Card -->
                                        <div class="card-terminal p-6 sm:p-8 relative">
                                            <div class="flex items-center justify-between gap-4 mb-5 border-b border-[var(--border-muted)] pb-4 flex-wrap">
                                                <div class="flex items-center gap-3">
                                                    <span class="badge-terminal badge-cyan">MODERN UEFI</span>
                                                    <h3 class="card-terminal-title !text-2xl sm:!text-3xl text-zinc-100 tracking-wide">B. GPT (GUID Partition Table)</h3>
                                                </div>
                                                <span class="font-mono text-xs text-[var(--text-muted)]">[ STANDARD UEFI ACTUEL ]</span>
                                            </div>
                                            
                                            <div class="space-y-5 font-sans text-[var(--text-primary)] text-sm sm:text-base leading-relaxed">
                                                <p><strong class="text-white">Origine et architecture :</strong> Introduit dans le cadre de la norme <strong class="text-white font-semibold">UEFI</strong> pour remplacer définitivement les limites du BIOS, le GPT s'appuie sur un adressage de blocs sur 64 bits et attribue un identifiant universel unique (<strong class="text-white font-semibold">GUID / UUID sur 128 bits</strong>) à chaque partition.</p>
                                                
                                                <div class="bg-black p-5 border border-[var(--border-muted)]">
                                                    <div class="font-sans text-xs font-semibold text-zinc-300 mb-3 border-b border-[var(--border-muted)] pb-2 flex items-center justify-between">
                                                        <span>[ TOPOLOGIE DES LBA EN GPT : INTÉGRITÉ & REDONDANCE ]</span>
                                                        <span class="text-[var(--text-muted)] font-mono text-xs">64-BIT LBA</span>
                                                    </div>
                                                    <div class="space-y-3 font-sans">
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">01</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">Protective MBR (LBA 0) : Sécurité rétrocompatible</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Un faux MBR occupant tout le disque avec une fausse partition type <code>0xEE</code>. Empêche les anciens utilitaires de considérer le disque comme non partitionné et d'écraser vos données.</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">02</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">En-tête GPT Primaire (LBA 1) : Contrôle d'intégrité CRC32</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Contient les GUIDs du disque, l'emplacement des tables et une somme de contrôle <strong>CRC32</strong>. Toute altération est immédiatement détectée par l'UEFI au boot.</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">03</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">Table des partitions primaires (LBA 2 à 33) : 128 partitions</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Sous Windows, 32 secteurs sont réservés pour 128 entrées de partition (128 octets par entrée), sans aucune contrainte de partitions étendues.</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-start gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-muted)]">
                                                            <span class="badge-terminal !text-[10px] !px-2 !py-0.5">04</span>
                                                            <div>
                                                                <strong class="text-white font-semibold block mb-1">Backup GPT (GPT Secondaire) : Sauvegarde miroir physique</strong>
                                                                <span class="text-[var(--text-muted)] text-xs">Une copie miroir complète de l'en-tête et de la table est inscrite à la toute fin physique du disque. En cas de dégât sur le LBA 1, l'UEFI restaure la table automatiquement.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <p><strong class="text-white">Capacité théorique :</strong> Basé sur 2⁶⁴ secteurs adressables, il plafonne à 9,4 Zo (Zettaoctets, soit 9,4 milliards de To), éliminant toute contrainte pour les décennies à venir.</p>
                                                <p><strong class="text-white">Partitions autonomes :</strong> Chaque partition est pleinement autonome, nommable, dotée de son propre GUID de type et de drapeaux d'attributs.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Comparison Table MBR vs GPT -->
                                    <div class="mb-14">
                                        <div class="font-sans text-xs font-bold text-zinc-300 mb-3 flex items-center gap-2">
                                            <span class="text-[var(--primary-green)]">■</span> C. COMPARATIF DIRECT : MBR VS GPT
                                        </div>
                                        <div class="bg-black border border-[var(--border-muted)] shadow-[4px_4px_0px_#000] overflow-x-auto">
                                            <table class="w-full text-left border-collapse min-w-[650px] font-sans text-xs sm:text-sm">
                                                <thead>
                                                    <tr class="bg-zinc-950 text-zinc-300 font-sans text-xs uppercase font-bold border-b border-[var(--border-muted)]">
                                                        <th class="p-4 border-r border-[var(--border-muted)] w-1/3">Paramètre Matériel</th>
                                                        <th class="p-4 border-r border-[var(--border-muted)] text-zinc-100 w-1/3">MBR (Master Boot Record) <span class="badge-terminal badge-orange text-[10px] ml-1">LEGACY</span></th>
                                                        <th class="p-4 text-zinc-100 w-1/3">GPT (GUID Partition Table) <span class="badge-terminal badge-cyan text-[10px] ml-1">UEFI</span></th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-[var(--border-muted)]">
                                                    <tr class="hover:bg-zinc-900/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-[var(--border-muted)]">Micrologiciel carte mère</td>
                                                        <td class="p-4 text-zinc-400 border-r border-[var(--border-muted)]">BIOS Legacy (ou UEFI en mode CSM)</td>
                                                        <td class="p-4 text-emerald-400 font-bold">UEFI Natif (Requis pour Windows 11)</td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-900/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-[var(--border-muted)]">Capacité maximale disque</td>
                                                        <td class="p-4 text-rose-400 font-bold border-r border-[var(--border-muted)]"><span class="px-2 py-0.5 bg-rose-950 border border-rose-500/60 font-sans text-xs font-semibold">2 To (32 BITS)</span></td>
                                                        <td class="p-4 text-emerald-400 font-bold"><span class="px-2 py-0.5 bg-emerald-950 border border-emerald-500/60 font-sans text-xs font-semibold">9,4 Zo (64 BITS)</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-900/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-[var(--border-muted)]">Nombre max de partitions</td>
                                                        <td class="p-4 text-zinc-300 border-r border-[var(--border-muted)]">4 primaires max (ou 3 primaires + 1 étendue)</td>
                                                        <td class="p-4 text-emerald-400 font-bold"><span class="px-2 py-0.5 bg-zinc-950 border border-emerald-500/60 font-sans text-xs font-semibold">128 PARTITIONS (WINDOWS)</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-900/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-[var(--border-muted)]">Tolérance aux pannes</td>
                                                        <td class="p-4 text-rose-400 font-bold border-r border-[var(--border-muted)]"><span class="px-2 py-0.5 bg-rose-950 border border-rose-500/60 font-sans text-xs font-semibold">[✗] AUCUNE (LBA 0 UNIQUE)</span></td>
                                                        <td class="p-4 text-emerald-400 font-bold"><span class="px-2 py-0.5 bg-emerald-950 border border-emerald-500/60 font-sans text-xs font-semibold">[✓] HAUTE (BACKUP GPT + CRC32)</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-900/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-[var(--border-muted)]">Identification des volumes</td>
                                                        <td class="p-4 text-zinc-400 border-r border-[var(--border-muted)]">Numérotation ordinale simple</td>
                                                        <td class="p-4 text-zinc-200 font-semibold">GUID / UUID unique (128 bits universel)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>

                                <!-- Section 2 : File Systems -->
                                <section>
                                    <div class="flex items-center gap-3 mb-8">
                                        <span class="badge-terminal">02</span>
                                        <h2 class="heading-section !m-0 text-xl sm:text-3xl">
                                            Les Systèmes de Fichiers : FAT32, exFAT, NTFS
                                        </h2>
                                    </div>
                                    <p class="paragraph-body text-sm sm:text-base leading-relaxed mb-8">
                                        Une fois la partition logique définie dans la table, le <strong class="text-white font-semibold">système de fichiers</strong> organise la hiérarchie des dossiers et alloue l'espace de stockage sous forme de grappes de blocs appelées <strong class="text-white font-semibold">clusters</strong>.
                                    </p>

                                    <div class="flex flex-col gap-8 mb-10">
                                        <!-- FAT32 Card -->
                                        <div class="card-terminal p-6 sm:p-8 relative">
                                            <div class="flex items-center justify-between gap-4 mb-4 border-b border-[var(--border-muted)] pb-3 flex-wrap">
                                                <div class="flex items-center gap-3">
                                                    <span class="badge-terminal">LEGACY USB</span>
                                                    <h3 class="card-terminal-title !text-xl sm:!text-2xl text-zinc-100 tracking-wide">A. FAT32 (File Allocation Table 32 bits)</h3>
                                                </div>
                                                <span class="font-mono text-xs text-[var(--text-muted)]">[ WIN 95 OSR2 ]</span>
                                            </div>
                                            <ul class="space-y-3 font-sans text-[var(--text-primary)] text-sm leading-relaxed">
                                                <li><strong class="text-white">Conception :</strong> Table statique en début de volume associant chaque fichier à sa chaîne de clusters physiques.</li>
                                                <li><strong class="text-rose-400 font-bold">Limite fatidique des 4 Go par fichier :</strong> Le champ de taille dans l'en-tête de fichier est codé sur 32 bits non signés (<code>2³² - 1 octets = 4 294 967 295 octets ≈ 4 Go</code>). Un fichier vidéo ou ISO de 4,01 Go ne peut absolument pas être écrit, même avec 1 To d'espace disponible sur la partition.</li>
                                                <li><strong class="text-white font-semibold">Limite de partition :</strong> Bien que le format supporte techniquement 2 To, l'utilitaire natif de formatage Windows bride artificiellement la création de volumes FAT32 à <strong class="text-white font-semibold">32 Go</strong> afin de privilégier NTFS.</li>
                                                <li><strong class="text-rose-400">Zéro sécurité &amp; zéro journalisation :</strong> Aucune gestion des droits (ACL), pas de chiffrement natif, et aucune tolérance aux déconnexions brutales (risques fréquents de clusters orphelins).</li>
                                                <li><strong class="text-emerald-400 font-bold">Usage actuel :</strong> Interopérabilité universelle maximale (clés bootables BIOS/UEFI, autoradios, microcontrôleurs, anciennes consoles de jeu).</li>
                                            </ul>
                                        </div>

                                        <!-- exFAT Card -->
                                        <div class="card-terminal p-6 sm:p-8 relative">
                                            <div class="flex items-center justify-between gap-4 mb-4 border-b border-[var(--border-muted)] pb-3 flex-wrap">
                                                <div class="flex items-center gap-3">
                                                    <span class="badge-terminal">FLASH &amp; MULTI-OS</span>
                                                    <h3 class="card-terminal-title !text-xl sm:!text-2xl text-zinc-100 tracking-wide">B. exFAT (Extended File Allocation Table)</h3>
                                                </div>
                                                <span class="font-mono text-xs text-[var(--text-muted)]">[ MICROSOFT 2006 ]</span>
                                            </div>
                                            <ul class="space-y-3 font-sans text-[var(--text-primary)] text-sm leading-relaxed">
                                                <li><strong class="text-white">Conception :</strong> Créé pour succéder au FAT32 sur les supports de stockage nomades (cartes SDXC, clés USB volumineuses, disques SSD externes).</li>
                                                <li><strong class="text-emerald-400 font-bold">Suppression de la barrière des 4 Go :</strong> Supporte des fichiers individuels atteignant jusqu'à 16 Eo (Exaoctets), parfait pour les gros enregistrements 4K et images virtuelles.</li>
                                                <li><strong class="text-white font-semibold">Optimisé pour mémoires flash :</strong> Évite les écritures répétées de métadonnées et de journalisation, réduisant l'usure prématurée des puces NAND flash.</li>
                                                <li><strong class="text-emerald-400 font-bold">Interopérabilité Windows &amp; macOS :</strong> Reconnue nativement en lecture et écriture sans aucun pilote tiers sur Windows, macOS et distributions Linux récentes.</li>
                                            </ul>
                                        </div>

                                        <!-- NTFS Card -->
                                        <div class="card-terminal p-6 sm:p-8 relative">
                                            <div class="flex items-center justify-between gap-4 mb-4 border-b border-[var(--border-muted)] pb-3 flex-wrap">
                                                <div class="flex items-center gap-3">
                                                    <span class="badge-terminal">STANDARD ENTREPRISE</span>
                                                    <h3 class="card-terminal-title !text-xl sm:!text-2xl text-zinc-100 tracking-wide">C. NTFS (New Technology File System)</h3>
                                                </div>
                                                <span class="font-mono text-xs text-[var(--text-muted)]">[ SYSTÈME NÉVRALGIQUE OS ]</span>
                                            </div>
                                            <ul class="space-y-3 font-sans text-[var(--text-primary)] text-sm leading-relaxed">
                                                <li><strong class="text-white">Conception :</strong> Système de fichiers propriétaire robuste introduit pour Windows NT, standard absolu pour le disque système interne (C:).</li>
                                                <li><strong class="text-white font-semibold">Master File Table (MFT) :</strong> Base de données relationnelle interne stockant chaque fichier, ses attributs, ses droits de sécurité et l'emplacement de ses clusters.</li>
                                                <li><strong class="text-emerald-400 font-bold">Journalisation active ($LogFile) :</strong> En cas de coupure de courant ou de crash BSOD, le journal transactionnel annule l'opération incomplète (<em>rollback</em>) au reboot, empêchant la corruption logique du volume.</li>
                                                <li><strong class="text-white font-semibold">Sécurité granulaire (ACLs) :</strong> Listes de contrôle d'accès fines par utilisateur et groupe Active Directory, intégrité des permissions NTFS et chiffrement natif EFS.</li>
                                                <li><strong class="text-white">Services avancés :</strong> Quotas de stockage par utilisateur, compression à la volée, clichés instantanés (VSS) et gestion des fichiers creux (sparse files).</li>
                                                <li><strong class="text-rose-400">Restriction macOS :</strong> macOS lit nativement le NTFS mais est incapable d'y écrire sans logiciel tiers payant (Tuxera, Paragon).</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!-- File Systems Comparison Table -->
                                    <div class="mb-6">
                                        <div class="font-sans text-xs font-bold text-zinc-300 mb-3 flex items-center gap-2">
                                            <span class="text-[var(--primary-green)]">■</span> D. TABLEAU RÉCAPITULATIF : SYSTÈMES DE FICHIERS
                                        </div>
                                        <div class="bg-black border border-[var(--border-muted)] shadow-[4px_4px_0px_#000] overflow-x-auto">
                                            <table class="w-full text-left border-collapse min-w-[700px] font-sans text-xs sm:text-sm">
                                                <thead>
                                                    <tr class="bg-zinc-950 text-zinc-300 font-sans text-xs uppercase font-bold border-b border-[var(--border-muted)]">
                                                        <th class="p-4 border-r border-zinc-800">Critère</th>
                                                        <th class="p-4 border-r border-zinc-800 text-zinc-100">FAT32</th>
                                                        <th class="p-4 border-r border-zinc-800 text-zinc-100">exFAT</th>
                                                        <th class="p-4 text-zinc-100">NTFS</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="divide-y divide-zinc-800">
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Taille max fichier</td>
                                                        <td class="p-4 text-rose-400 font-bold border-r border-zinc-800"><span class="px-1.5 py-0.5 bg-rose-950 border border-rose-500/60 font-sans text-xs font-semibold">4 Go MAX</span></td>
                                                        <td class="p-4 text-emerald-400 font-bold border-r border-zinc-800">16 Eo</td>
                                                        <td class="p-4 text-emerald-400 font-bold">16 To (standard 4 Ko)</td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Taille max partition</td>
                                                        <td class="p-4 text-zinc-300 border-r border-zinc-800">32 Go (Windows) / 2 To</td>
                                                        <td class="p-4 text-emerald-400 font-bold border-r border-zinc-800">128 Po</td>
                                                        <td class="p-4 text-emerald-400 font-bold">256 To</td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Journalisation ($LogFile)</td>
                                                        <td class="p-4 text-rose-400 font-bold border-r border-zinc-800">[✗] NON</td>
                                                        <td class="p-4 text-rose-400 font-bold border-r border-zinc-800">[✗] NON</td>
                                                        <td class="p-4 text-emerald-400 font-bold"><span class="px-1.5 py-0.5 bg-emerald-950 border border-emerald-500/60 font-sans text-xs font-semibold">[✓] OUI (TOLÉRANCE CRASH)</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Permissions (ACLs)</td>
                                                        <td class="p-4 text-zinc-500 border-r border-zinc-800">[✗] NON</td>
                                                        <td class="p-4 text-zinc-500 border-r border-zinc-800">[✗] NON</td>
                                                        <td class="p-4 text-emerald-400 font-bold"><span class="px-1.5 py-0.5 bg-emerald-950 border border-emerald-500/60 font-sans text-xs font-semibold">[✓] OUI (SÉCURITÉ FINE)</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Quotas disque</td>
                                                        <td class="p-4 text-zinc-500 border-r border-zinc-800">[✗] NON</td>
                                                        <td class="p-4 text-zinc-500 border-r border-zinc-800">[✗] NON</td>
                                                        <td class="p-4 text-emerald-400 font-bold"><span class="px-1.5 py-0.5 bg-emerald-950 border border-emerald-500/60 font-sans text-xs font-semibold">[✓] OUI</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Compatibilité macOS</td>
                                                        <td class="p-4 text-emerald-400 font-bold border-r border-zinc-800">Lecture & Écriture</td>
                                                        <td class="p-4 text-emerald-400 font-bold border-r border-zinc-800">Lecture & Écriture</td>
                                                        <td class="p-4 text-rose-400 font-bold"><span class="px-1.5 py-0.5 bg-rose-950 border border-rose-500/60 font-sans text-xs font-semibold">LECTURE SEULE NATIVE</span></td>
                                                    </tr>
                                                    <tr class="hover:bg-zinc-800/50 transition-colors">
                                                        <td class="p-4 font-bold text-zinc-200 border-r border-zinc-800">Cible d'usage recommandée</td>
                                                        <td class="p-4 text-zinc-300 border-r border-zinc-800">Clés USB boot, vieux périphériques</td>
                                                        <td class="p-4 text-zinc-200 border-r border-zinc-800">Supports amovibles partagés multi-OS</td>
                                                        <td class="p-4 text-zinc-200 font-semibold">Disques système internes & serveurs Windows</td>
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
        }
    ]
};
