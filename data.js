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
                    id: "m3-c1",
                    title: "UTILISER UN OUTIL DE GESTION DE PARC INFORMATIQUE",
                    image: "images/parcinfo.jpeg",
                    lessons: [
    {
        id: "m3-c1-l1",
        title: "1. Introduction & Panorama des Outils ITAM/ITSM",
        status: "available",
        imageUrl: "images/ITAM-ITSM.png",
        content: `
            <div class="space-y-6 p-4 sm:p-6 text-[var(--text-primary)] font-sans">
                <h2 class="text-2xl font-bold text-emerald-400 mb-4 border-b border-emerald-900 pb-2">Module 1 : Introduction & Panorama des Outils ITAM/ITSM</h2>
                
                <h3 class="text-xl font-bold text-white mb-2">1.1. ITAM vs ITSM : Définitions et complémentarité</h3>
                <p class="paragraph-body mb-4">Un outil complet d'ITAM (IT Asset Management) et d'ITSM (IT Service Management) est une plateforme logicielle centrale pour l'organisation IT9.</p>
                <p class="paragraph-body mb-4"><strong>ITAM (Gestion des Actifs IT) :</strong> Il s'assure de la gouvernance et du contrôle du cycle de vie de l'ensemble des équipements et logiciels (PC, serveurs, écrans, imprimantes, licences, cloud)19.</p>
                <p class="paragraph-body mb-4"><strong>Objectifs majeurs :</strong> Maîtrise des coûts, conformité légale/logicielle et gestion des risques financiers et matériels19.</p>
                <p class="paragraph-body mb-4"><strong>ITSM (Gestion des Services IT) :</strong> Il se focalise sur la conception, la livraison, le support et l'amélioration des services fournis aux utilisateurs (gestion des incidents, des demandes, des tickets)19.</p>
                <p class="paragraph-body mb-4"><strong>Bénéfices pour le support :</strong> La combinaison des deux offre une connaissance précise du parc, accélère la résolution des incidents et rationalise la maintenance préventive et corrective910.</p>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">1.2. Panorama des logiciels du marché</h3>
                <p class="paragraph-body mb-4">Voici les principales solutions rencontrées en entreprise11more_horiz :</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-[var(--text-muted)] border border-[var(--border-muted)]">
                        <thead class="bg-zinc-900 text-[var(--text-primary)]">
                            <tr>
                                <th class="p-3 border-b border-[var(--border-muted)]">Logiciel</th>
                                <th class="p-3 border-b border-[var(--border-muted)]">Type / Déploiement</th>
                                <th class="p-3 border-b border-[var(--border-muted)]">Modèle de licence / Pricing</th>
                                <th class="p-3 border-b border-[var(--border-muted)]">Positionnement clé</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-[var(--border-muted)] bg-black">
                            <tr>
                                <td class="p-3">ServiceNow</td>
                                <td class="p-3">SaaS (Cloud)11</td>
                                <td class="p-3">Sur devis (Standard / Pro / Enterprise)11</td>
                                <td class="p-3">Leader mondial grands comptes & ETI (Gartner/IDC)11.</td>
                            </tr>
                            <tr>
                                <td class="p-3">BMC Helix</td>
                                <td class="p-3">SaaS / On-prem12</td>
                                <td class="p-3">Sur devis12</td>
                                <td class="p-3">Solution robuste pour grandes organisations et secteurs régulés12.</td>
                            </tr>
                            <tr>
                                <td class="p-3">ManageEngine ServiceDesk Plus</td>
                                <td class="p-3">Cloud / On-prem12</td>
                                <td class="p-3">Par technicien/mois (Standard ~12€, Pro ~25€, Enterprise ~62€)12</td>
                                <td class="p-3">Très populaire en PME/ETI pour son rapport fonctionnalités/prix12.</td>
                            </tr>
                            <tr>
                                <td class="p-3">GLPI (Teclib')</td>
                                <td class="p-3">Open Source (GPL-3.0) / Cloud / On-prem1415</td>
                                <td class="p-3">SaaS par agent (~19-21€/mois) ou abonnement support On-prem15</td>
                                <td class="p-3">Référence de l'espace francophone (écoles, administrations, PME)14.</td>
                            </tr>
                            <tr>
                                <td class="p-3">Snipe-IT</td>
                                <td class="p-3">Open Source (AGPL-3.0) / SaaS13</td>
                                <td class="p-3">Auto-hébergé gratuit ou SaaS au forfait (39,99$ à 749,99$/mois)13</td>
                                <td class="p-3">Focalisé purement ITAM (pas de coût par agent)1314.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    {
        id: "m3-c1-l2",
        title: "2. Concepts Fondamentaux de l'ITAM (IT Asset Management)",
        status: "available",
        videoUrl: "https://www.youtube.com/embed/HaDcQ6HhC4c",
        content: `
            <div class="space-y-6 p-4 sm:p-6 text-[var(--text-primary)] font-sans">
                <h2 class="text-2xl font-bold text-emerald-400 mb-4 border-b border-emerald-900 pb-2">Module 2 : Concepts Fondamentaux de l'ITAM (IT Asset Management)</h2>
                
                <h3 class="text-xl font-bold text-white mb-2">2.1. Qu'est-ce qu'un actif informatique ?</h3>
                <p class="paragraph-body mb-4">Un actif informatique est tout élément ayant une valeur financière ou opérationnelle pour l'entreprise, nécessitant un suivi sur l'ensemble de sa durée de vie16.</p>
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">Distinctions essentielles :</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">Actif vs Composant :</strong> Un disque SSD est un composant ; l'ordinateur portable qui le contient est l'actif16.</li>
                    <li><strong class="text-white">Actif vs Configuration :</strong> L'actif identifie l'objet ; la configuration décrit son état technique (version d'OS, correctifs appliqués, BIOS)16.</li>
                    <li><strong class="text-white">Inventaire vs CMDB :</strong> L'inventaire recense ce qui existe à un instant T ; la CMDB (Configuration Management Database) relie les actifs entre eux et détaille leur rôle dans les services16.</li>
                </ul>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">2.2. Attributs d'un actif et Convention de nommage</h3>
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">A) Les attributs obligatoires d'une fiche d'actif</p>
                <p class="paragraph-body mb-2">Chaque enregistrement doit comporter3 :</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">Identité :</strong> Nom d'hôte, marque, modèle, numéro de série (S/N), Asset Tag (étiquette parc)3.</li>
                    <li><strong class="text-white">Propriété :</strong> Propriétaire budgétaire, centre de coûts, utilisateur/détenteur3.</li>
                    <li><strong class="text-white">Statut :</strong> En stock, déployé, en maintenance, réformé, etc.3.</li>
                    <li><strong class="text-white">Données financières :</strong> Prix d'achat, date de garantie, amortissement3.</li>
                    <li><strong class="text-white">Localisation :</strong> Site, bâtiment, bureau, salle3.</li>
                    <li><strong class="text-white">Conformité & Sécurité :</strong> Version de l'OS, présence de l'antivirus/EDR, chiffrement, licences associées3.</li>
                </ul>
                <div class="bg-zinc-900 border-l-4 border-emerald-500 p-4 mb-6">
                    <p class="text-white font-mono text-sm mb-1">💡 Exemple d'Asset Tag (étiquette physique) :</p>
                    <p class="text-zinc-400 font-mono text-xs">Format recommandé : [Domaine]-[Type]-[Année]-[Compteur]</p>
                    <p class="text-emerald-400 font-mono text-xs">Exemple : IT-WS-2025-00421 (Poste de travail configuré en 2025)317.</p>
                </div>
                
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">B) Règles et conventions de nommage des équipements</p>
                <p class="paragraph-body mb-2">L'absence de convention génère des doublons, des erreurs d'inventaire et complique le dépannage18.</p>
                <p class="paragraph-body text-zinc-400 mb-2">Structure standard recommandée : SITE-TYPE-USAGE-ID19.</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">PC Fixe :</strong> CHA-WS-SEC-014 (Site de Charleroi - WorkStation - Secrétariat - n°014)19.</li>
                    <li><strong class="text-white">PC Portable :</strong> NAM-LAP-DIR-003 (Site de Namur - LAPtop - Direction - n°003)19.</li>
                    <li><strong class="text-white">Serveur :</strong> BXL-SRV-AD-01 (Site de Bruxelles - SeRVer - Active Directory - n°01)19.</li>
                    <li><strong class="text-white">Imprimante :</strong> MON-PRN-05 (Site de Mons - PRiNter - n°05)19.</li>
                </ul>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">2.3. Le Cycle de Vie d'un actif IT</h3>
                <p class="paragraph-body mb-4">Le cycle de vie d'un équipement suit 7 étapes clés4 :</p>
                <pre class="bg-black border border-[var(--border-muted)] p-4 text-emerald-400 font-mono text-xs overflow-x-auto mb-4">
[1. Acquisition] ➔ [2. Réception/Enregistrement] ➔ [3. Préparation/Déploiement] ➔ [4. Utilisation/Exploitation]
                                                                                            │
[7. Réforme/Sortie] ◄── [6. Réaffectation] ◄── [5. Maintenance/Support] ◄───────────────────┘</pre>
                <p class="paragraph-body mb-2">Modèle de statuts à renseigner dans l'outil :</p>
                <p class="paragraph-body text-zinc-400 mb-6 font-mono text-xs">En stock (neuf) ➔ Préparé ➔ Déployé ➔ En maintenance ➔ Récupéré ➔ Reconditionné ➔ Réaffecté ➔ À réformer ➔ Réformé/Détruit20.</p>
                
                <div class="bg-zinc-900 border border-zinc-700 p-4 mb-6">
                    <p class="text-white font-bold mb-2">📊 Rapport mensuel type à produire par l'administrateur :</p>
                    <ul class="list-disc list-inside space-y-1 text-sm text-[var(--text-muted)]">
                        <li>Liste des actifs déployés sans agent d'inventaire actif21.</li>
                        <li>Écarts de licences (installations non couvertes)21.</li>
                        <li>Équipements arrivant à fin de garantie sous 90 jours21.</li>
                        <li>Actifs déployés non vus sur le réseau depuis plus de 30 jours21.</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">2.4. Gestion des Licences Logicielles</h3>
                <p class="paragraph-body mb-4">L'opérateur doit systématiquement relier l'installation physique/virtuelle à un droit d'usage légal4.</p>
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">Les grands types de licences :</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">OEM :</strong> Liée indissociablement au matériel d'origine (non transférable)21.</li>
                    <li><strong class="text-white">Retail (Boîte) :</strong> Licence individuelle transférable d'un poste à un autre21.</li>
                    <li><strong class="text-white">Volume (Entreprise) :</strong> Contrat global pour un grand nombre de postes21.</li>
                    <li><strong class="text-white">SaaS (Abonnement) :</strong> Facturation périodique basée sur l'usage/utilisateur21.</li>
                    <li><strong class="text-white">CAL (Client Access License) :</strong> Licence d'accès client autorisant un utilisateur (User CAL) ou une machine (Device CAL) à accéder à un serveur (ex: Windows Server)2223.</li>
                    <li><strong class="text-white">EULA (End-User License Agreement) :</strong> Contrat de licence utilisateur final fixant les conditions légales d'utilisation2123.</li>
                </ul>
                
                <div class="bg-red-950/30 border-l-4 border-red-500 p-4 mb-6">
                    <p class="text-red-400 font-bold mb-2">⚠️ Erreurs fréquentes à éviter :</p>
                    <ul class="list-disc list-inside space-y-1 text-sm text-[var(--text-muted)]">
                        <li>Installer un logiciel sans vérifier le stock disponible dans l'outil5.</li>
                        <li>Oublier de désassigner la licence lors du départ d'un collaborateur5.</li>
                        <li>Ne pas conserver la preuve d'achat (factures, certificats, portails éditeurs)4.</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">2.5. Sécurité, RGPD et Traçabilité</h3>
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">A) Respect du RGPD & Minimisation des données</p>
                <p class="paragraph-body mb-2">Sur les fiches d'actifs, limitez au strict minimum les données personnelles56 :</p>
                <ul class="space-y-2 mb-6 text-[var(--text-muted)]">
                    <li>✅ <strong class="text-white">À utiliser :</strong> Numéro de matricule ou identifiant interne (u12345), localisation professionnelle, numéro de poste pro6.</li>
                    <li>❌ <strong class="text-white">À bannir :</strong> Noms complets associés à un numéro personnel, numéro de nationalité, adresse privée6.</li>
                </ul>
                
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">B) Protection des données & Matériel mobile</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">Exports d'inventaire (CSV/Excel) :</strong> Filtrer les colonnes sensibles, chiffrer les fichiers transmis et limiter la conservation (ex. 12 mois max)6.</li>
                    <li><strong class="text-white">Appareils mobiles (Laptops/Smartphones) :</strong> Chiffrement du disque obligatoire (BitLocker / FileVault), mot de passe BIOS/session et enrôlement dans un outil MDM (Mobile Device Management)6.</li>
                    <li><strong class="text-white">Procédure Perte/Vol :</strong> Signaler immédiatement au Service Desk ➔ Déclencher le verrouillage et l'effacement à distance (Wipe) via MDM ➔ Révoker les accès (VPN, mail) ➔ Déposer plainte6.</li>
                </ul>
                
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">C) Réforme et Effacement Certifié</p>
                <p class="paragraph-body mb-2">Lors de la sortie définitive du parc (décommissionnement)2425 :</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li>Réaliser un effacement certifié des données (selon des normes reconnues comme NIST 800-88)25.</li>
                    <li>Récupérer le certificat d'effacement et l'attacher à la fiche d'actif2526.</li>
                    <li>Retirer les étiquettes et procéder au recyclage/revente25.</li>
                </ul>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">2.6. Glossaire & Indicateurs Clés (KPI)</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-[var(--text-muted)] border border-[var(--border-muted)]">
                        <thead class="bg-zinc-900 text-[var(--text-primary)]">
                            <tr>
                                <th class="p-3 border-b border-[var(--border-muted)]">Indicateur / Concept</th>
                                <th class="p-3 border-b border-[var(--border-muted)]">Signification</th>
                                <th class="p-3 border-b border-[var(--border-muted)]">Explication pratique</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-[var(--border-muted)] bg-black">
                            <tr>
                                <td class="p-3 font-bold text-white">SLA (Service Level Agreement)</td>
                                <td class="p-3">Accord de niveau de service17</td>
                                <td class="p-3">Contrat définissant la disponibilité cible (ex: 99,9 %) et les délais de prise en charge/résolution17.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">EDR (Endpoint Detection & Response)</td>
                                <td class="p-3">Agent de sécurité avancé27</td>
                                <td class="p-3">Contrairement à un simple antivirus (qui bloque les fichiers isolés), l'EDR surveille le comportement complet de la machine, garde des journaux d'audit et permet d'isoler le poste à distance27.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">TCO (Total Cost of Ownership)</td>
                                <td class="p-3">Coût total de possession24</td>
                                <td class="p-3">Coût global d'un actif : Achat + Déploiement + Support + Consommables + Énergie + Recyclage24.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">TCA (Total Cost of Acquisition)</td>
                                <td class="p-3">Coût d'acquisition initial24</td>
                                <td class="p-3">Coût “Jour 1” : Prix d'achat + Livraison + Taxes + Installation initiale24.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">MTBF (Mean Time Between Failures)</td>
                                <td class="p-3">Temps moyen entre deux pannes23</td>
                                <td class="p-3">Indicateur de la fiabilité d'un équipement matériel23.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">MTTR (Mean Time To Repair)</td>
                                <td class="p-3">Temps moyen de réparation2324</td>
                                <td class="p-3">Indicateur de l'efficacité du support pour rétablir le service24.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">Centre de coûts</td>
                                <td class="p-3">Unité comptable22</td>
                                <td class="p-3">Service/Projet auquel est rattachée la dépense pour le suivi budgétaire22.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">Bordereau de transfert</td>
                                <td class="p-3">Document de traçabilité22</td>
                                <td class="p-3">Document signé lors du déplacement d'un actif entre deux sites ou services22.</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-white">RMA (Return Merchandise Authorization)</td>
                                <td class="p-3">Accord de retour sous garantie28</td>
                                <td class="p-3">Numéro officiel d'autorisation de retour chez le constructeur pour réparation/échange28.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        quiz: [
            {
                type: "single",
                question: "Un administrateur système remplace une barrette de RAM défectueuse dans un serveur de production. Selon les concepts fondamentaux de l'ITAM, comment doit être classée cette nouvelle barrette de RAM ?",
                options: [
                    { text: "Comme un élément de la CMDB uniquement.", isCorrect: false, feedback: "Bien que présent dans la CMDB, l'objet physique appartient à une catégorie structurelle spécifique avant d'être une relation de service." },
                    { text: "Comme une configuration logicielle.", isCorrect: false, feedback: "La configuration concerne l'état technique ou les versions (OS, BIOS), alors que la RAM est un élément matériel physique." },
                    { text: "Comme un actif informatique indépendant.", isCorrect: false, feedback: "Un actif doit avoir une valeur financière ou opérationnelle propre nécessitant un suivi de cycle de vie complet ; les éléments internes sont généralement gérés comme des parties de l'actif." },
                    { text: "Comme un composant.", isCorrect: true, feedback: "Le matériel qui est contenu à l'intérieur d'un équipement principal (comme la RAM ou un disque dur) est défini comme un composant, tandis que le serveur lui-même est l'actif." }
                ]
            },
            {
                type: "single",
                question: "Vous devez nommer un nouvel ordinateur portable destiné au directeur de l'agence de Namur en suivant la structure standard SITE-TYPE-USAGE-ID. Quel nom est correct ?",
                options: [
                    { text: "NAM-LAP-DIR-003", isCorrect: true, feedback: "Cette nomenclature respecte l'ordre : Site (Namur), Type (Laptop), Usage (Direction) et l'identifiant unique." },
                    { text: "NAM-PC-DIR-003", isCorrect: false, feedback: "Bien que le site et l'usage soient corrects, le code type pour un portable dans la convention est 'LAP' et non 'PC'." },
                    { text: "LAP-DIR-NAM-003", isCorrect: false, feedback: "L'ordre des segments est incorrect car il commence par le type d'équipement au lieu de la localisation." },
                    { text: "DIR-NAM-LAP-003", isCorrect: false, feedback: "Cette option place l'usage avant le site et le type, ce qui ne respecte pas la structure standard SITE-TYPE-USAGE-ID." }
                ]
            },
            {
                type: "multiple",
                question: "Lors de la création d'une fiche d'actif pour un nouvel employé, quelles données doivent être évitées ou limitées pour respecter le RGPD ?",
                options: [
                    { text: "La localisation du bureau professionnel (étage/salle).", isCorrect: false, feedback: "La localisation professionnelle est un attribut obligatoire et légitime pour la gestion physique du parc." },
                    { text: "Le numéro de matricule interne (ex: u12345).", isCorrect: false, feedback: "L'utilisation d'un identifiant interne est une pratique recommandée car elle permet de lier l'actif sans exposer de données nominatives sensibles." },
                    { text: "Le nom complet associé à un numéro de téléphone personnel.", isCorrect: true, feedback: "L'association d'identité complète et de coordonnées privées est considérée comme excessive pour une fiche d'inventaire technique." },
                    { text: "L'adresse personnelle du domicile de l'employé.", isCorrect: true, feedback: "Le RGPD impose la minimisation des données ; les adresses privées ne sont pas nécessaires au suivi opérationnel d'un actif informatique." }
                ]
            },
            {
                type: "single",
                question: "Quelle est la principale différence entre l'inventaire technique et la CMDB (Configuration Management Database) ?",
                options: [
                    { text: "La CMDB ne contient que des logiciels, alors que l'inventaire ne contient que du matériel.", isCorrect: false, feedback: "Les deux outils peuvent contenir du matériel et du logiciel ; ils diffèrent par la manière dont les données sont interconnectées." },
                    { text: "L'inventaire est mis à jour en temps réel, alors que la CMDB est un archivage statique.", isCorrect: false, feedback: "C'est souvent l'inverse ou les deux peuvent être dynamiques, mais la CMDB est par définition plus complexe car elle suit les dépendances de service." },
                    { text: "L'inventaire est financier, tandis que la CMDB est uniquement technique.", isCorrect: false, feedback: "L'inventaire comporte aussi des données techniques (S/N, modèle), la différence ne se situe pas sur la nature de la donnée mais sur la structure de lien." },
                    { text: "L'inventaire liste l'existence des objets, tandis que la CMDB gère leurs relations et leur rôle dans les services.", isCorrect: true, feedback: "La CMDB apporte une dimension relationnelle et métier que l'inventaire simple (une liste à l'instant T) ne possède pas." }
                ]
            },
            {
                type: "multiple",
                question: "Quels éléments composent le TCO (Total Cost of Ownership) d'un ordinateur portable au-delà de son simple prix d'achat ?",
                options: [
                    { text: "Le prix d'achat initial HT uniquement.", isCorrect: false, feedback: "Le prix d'achat seul correspond au TCA (Total Cost of Acquisition), pas au TCO." },
                    { text: "La consommation d'énergie et les consommables.", isCorrect: true, feedback: "Les coûts indirects comme l'électricité ou les accessoires font partie intégrante du coût total de possession." },
                    { text: "Les frais de support technique et de maintenance durant son utilisation.", isCorrect: true, feedback: "Le support est un coût opérationnel majeur qui s'ajoute au coût initial sur toute la durée de vie de l'appareil." },
                    { text: "Le coût du recyclage ou de la destruction sécurisée en fin de vie.", isCorrect: true, feedback: "Le TCO englobe toutes les phases, de l'acquisition jusqu'à la sortie définitive (berceau au tombeau)." }
                ]
            },
            {
                type: "single",
                question: "Une entreprise achète un PC avec une licence Windows de type OEM. L'ordinateur tombe en panne définitive après un mois. Que devient la licence ?",
                options: [
                    { text: "La licence est automatiquement convertie en licence Volume.", isCorrect: false, feedback: "Il n'existe pas de conversion automatique entre les types de contrats de licence." },
                    { text: "La licence peut être réinstallée sur un nouveau PC de remplacement.", isCorrect: false, feedback: "Ceci est la caractéristique d'une licence Retail (Boîte), pas d'une licence OEM." },
                    { text: "La licence est perdue car elle est indissociablement liée au matériel d'origine.", isCorrect: true, feedback: "Une licence OEM (Original Equipment Manufacturer) ne peut pas être transférée sur une autre machine ; elle meurt avec le matériel." },
                    { text: "L'éditeur rembourse la licence au prorata de l'utilisation.", isCorrect: false, feedback: "Les conditions d'utilisation (EULA) des licences OEM ne prévoient pas de remboursement en cas de panne matérielle." }
                ]
            },
            {
                type: "single",
                question: "Dans le cadre de la réforme d'un actif (étape 7 du cycle de vie), quelle action est indispensable avant de céder le matériel à un organisme de recyclage ?",
                options: [
                    { text: "Changer l'Asset Tag pour masquer l'origine de l'entreprise.", isCorrect: false, feedback: "L'étiquette doit être retirée, mais la priorité absolue reste la destruction des données numériques." },
                    { text: "Réinitialiser le BIOS avec les paramètres d'usine.", isCorrect: false, feedback: "Bien que recommandé, cela ne traite pas le problème majeur de la présence de données sur les unités de stockage." },
                    { text: "Simplement formater le disque dur via l'installateur Windows.", isCorrect: false, feedback: "Un formatage standard ne garantit pas l'irrécupérabilité des données sensibles, contrairement à un effacement certifié." },
                    { text: "Réaliser un effacement certifié des données selon des normes comme NIST 800-88.", isCorrect: true, feedback: "Pour garantir la sécurité et la conformité, les données doivent être effacées de manière irrécupérable avec obtention d'un certificat." }
                ]
            }
        ]
    },
    {
        id: "m3-c1-l3",
        title: "3. Gestion des Services (ITSM) et Organisation du Support",
        status: "available",
        videoUrl: "https://www.youtube.com/embed/ObJol2IyRTQ",
        content: `
            <div class="space-y-6 p-4 sm:p-6 text-[var(--text-primary)] font-sans">
                <h2 class="text-2xl font-bold text-emerald-400 mb-4 border-b border-emerald-900 pb-2">Module 3 : Gestion des Services (ITSM) et Organisation du Support</h2>
                
                <h3 class="text-xl font-bold text-white mb-2">3.1. Les Niveaux d'Intervention du Support (Niveaux 0 à 4)</h3>
                <p class="paragraph-body mb-4">L'organisation du support informatique s'articule en niveaux d'escalade spécialisés7 :</p>
                
                <pre class="bg-black border border-[var(--border-muted)] p-4 text-emerald-400 font-mono text-xs overflow-x-auto mb-6 text-center">
[Niveau 0 : Self-Service]
       │
[Niveau 1 : Support Frontal (Service Desk)]
       │
[Niveau 2 : Support Expert Domaine]
       │
[Niveau 3 : Ingénierie & Éditeurs (Niveau 4)]</pre>
                
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">Synthèse des rôles et périmètres :</p>
                <ul class="list-disc list-inside space-y-4 mb-6 text-[var(--text-muted)]">
                    <li>
                        <strong class="text-white">Niveau 0 (Self-Service) :</strong> Portail utilisateur, base de connaissances (KB), réinitialisation autonome de mot de passe, chatbots7.
                    </li>
                    <li>
                        <strong class="text-white">Niveau 1 (L1 - Support Frontal) :</strong><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Rôle :</strong> Prise en charge rapide, enregistrement des tickets, diagnostic de premier niveau729.</span><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Actions types :</strong> Déblocage de compte, installation de logiciels standards, dépannage réseau de base, configuration d'imprimante30.</span><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Objectif SLA :</strong> Prise en charge en 15-30 min, résolution < 1h31.</span>
                    </li>
                    <li>
                        <strong class="text-white">Niveau 2 (L2 - Support Spécialisé) :</strong><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Rôle :</strong> Analyse approfondie et résolution d'incidents complexes hors procédures L1729.</span><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Actions types :</strong> Analyse de logs, scripts PowerShell de correction, dépannage VPN/M365, restauration de sauvegardes30.</span>
                    </li>
                    <li>
                        <strong class="text-white">Niveau 3 (L3 - Ingénierie / Infrastructure) :</strong><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Rôle :</strong> Correction de la cause racine (Problem Management), modification d'architecture, correctifs de bugs729.</span><br>
                        <span class="pl-4 inline-block"><strong class="text-zinc-300">Actions types :</strong> Modification de politiques Intune/GPO, correctif de code applicatif, tuning base de données30.</span>
                    </li>
                    <li>
                        <strong class="text-white">Niveau 4 (L4 - Éditeurs & Constructeurs) :</strong> Support externe (ex: Microsoft, Dell, ServiceNow) sollicité par le L37.
                    </li>
                </ul>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-2">3.2. Règles d'escalade et Matrice RACI</h3>
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">Quand faire monter un ticket (Escalade) ?</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">L1 ➔ L2 :</strong> Dépannage non résolu au bout de 20-30 minutes, absence de procédure établie dans la base de connaissances, ou besoin de droits d'administration serveur31.</li>
                    <li><strong class="text-white">L2 ➔ L3 :</strong> Bug logiciel avéré, incident récurrent nécessitant une modification de schéma ou de configuration d'infrastructure31.</li>
                </ul>
                
                <div class="bg-zinc-900 border-l-4 border-emerald-500 p-4 mb-6">
                    <p class="text-white font-mono text-sm mb-1">💡 Règle d'or pour la capitalisation :</p>
                    <p class="text-emerald-400 font-mono text-xs">Chaque incident résolu au Niveau 2 ou 3 doit donner lieu à : 1 fiche KB pour le L1, 1 script d'automatisation, ou 1 demande de changement (CAB)8.</p>
                </div>
                
                <p class="paragraph-body font-bold text-[var(--text-primary)] mb-2">Clarifier les rôles : La Matrice RACI</p>
                <p class="paragraph-body mb-2">La matrice RACI évite les doublons et définit clairement les responsabilités8 :</p>
                <ul class="list-disc list-inside space-y-2 mb-6 text-[var(--text-muted)]">
                    <li><strong class="text-white">R (Responsible - Réalisateur) :</strong> Celui qui exécute concrètement la tâche8.</li>
                    <li><strong class="text-white">A (Accountable - Approuvant) :</strong> Le responsable ultime qui valide et tranche (1 seul A par tâche)8.</li>
                    <li><strong class="text-white">C (Consulted - Consulté) :</strong> L'expert sollicité pour avis avant réalisation8.</li>
                    <li><strong class="text-white">I (Informed - Informé) :</strong> Les personnes tenues au courant de l'avancement8.</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                type: "single",
                question: "Un technicien du Service Desk ne parvient pas à résoudre un incident après 25 minutes de recherche et constate qu'aucune procédure n'existe dans la base de connaissances. Quelle est la prochaine étape conforme aux règles d'escalade ?",
                options: [
                    { text: "Transférer directement le ticket au Niveau 3 pour une analyse de cause racine.", isCorrect: false, feedback: "Le Niveau 3 traite les modifications d'architecture ou les bugs avérés ; l'escalade doit normalement suivre l'ordre hiérarchique vers le L2 pour une analyse spécialisée." },
                    { text: "Ouvrir immédiatement un ticket de support auprès du constructeur (Niveau 4).", isCorrect: false, feedback: "Le Niveau 4 est sollicité par le Niveau 3, et non directement par le Niveau 1, pour des expertises externes spécifiques." },
                    { text: "Escalader l'incident vers le Niveau 2.", isCorrect: true, feedback: "L'escalade vers le L2 est requise si le dépannage dépasse 20-30 minutes ou si une procédure établie fait défaut dans la base de connaissances." },
                    { text: "Clôturer le ticket et demander à l'utilisateur de consulter le portail Self-Service.", isCorrect: false, feedback: "Le Niveau 0 (Self-Service) est destiné à l'autonomie initiale, pas à la résolution d'incidents déjà pris en charge et non documentés." }
                ]
            },
            {
                type: "multiple",
                question: "Parmi les activités suivantes, lesquelles sont spécifiquement rattachées au Niveau 2 (Support Spécialisé) ?",
                options: [
                    { text: "Dépannage des environnements M365 et VPN.", isCorrect: true, feedback: "Ces environnements nécessitent une expertise domaine spécifique classée en Niveau 2." },
                    { text: "Création de scripts PowerShell de correction.", isCorrect: true, feedback: "Le développement de scripts de remédiation technique est une action type du support de second niveau pour automatiser une résolution." },
                    { text: "Analyse approfondie des logs système.", isCorrect: true, feedback: "L'analyse de logs fait partie de l'analyse approfondie des incidents complexes qui dépasse les procédures standards du L1." },
                    { text: "Réinitialisation autonome de mot de passe par l'utilisateur.", isCorrect: false, feedback: "Cette action relève du Niveau 0 (Self-Service) car elle est effectuée de manière autonome par l'utilisateur." }
                ]
            },
            {
                type: "single",
                question: "Une entreprise constate qu'un incident est récurrent et nécessite une modification de la configuration de l'infrastructure. Vers quel niveau ce problème doit-il être orienté ?",
                options: [
                    { text: "Niveau 0 (Self-Service)", isCorrect: false, feedback: "Le Niveau 0 est destiné à l'usage autonome par l'utilisateur final, non à la correction de l'infrastructure technique." },
                    { text: "Niveau 3 (Ingénierie / Infrastructure)", isCorrect: true, feedback: "Le Niveau 3 est responsable de la gestion des problèmes (cause racine) et des modifications structurelles de l'infrastructure." },
                    { text: "Niveau 1 (Support Frontal)", isCorrect: false, feedback: "Le Niveau 1 applique des procédures connues pour des résolutions rapides, mais ne modifie pas les schémas d'infrastructure." },
                    { text: "Niveau 2 (Support Expert Domaine)", isCorrect: false, feedback: "Bien que le Niveau 2 analyse les incidents complexes, la modification de l'architecture ou des configurations de fond relève du Niveau 3." }
                ]
            },
            {
                type: "single",
                question: "Quel est l'objectif de performance (SLA) standard pour la prise en charge initiale d'un ticket par le Niveau 1 ?",
                options: [
                    { text: "Moins de 5 minutes.", isCorrect: false, feedback: "Bien que souhaitable, le standard défini dans le document pour la prise en charge est de 15 à 30 minutes." },
                    { text: "24 heures après l'enregistrement.", isCorrect: false, feedback: "Un tel délai ne permettrait pas de respecter les objectifs de résolution rapide (SLA < 1h) attendus pour le premier niveau." },
                    { text: "Entre 1 et 2 heures.", isCorrect: false, feedback: "Ce délai est trop long pour un support frontal dont l'objectif de résolution totale est déjà fixé à moins d'une heure." },
                    { text: "Entre 15 et 30 minutes.", isCorrect: true, feedback: "Le support de Niveau 1 vise une réactivité immédiate avec un enregistrement et une prise en charge rapide dans ce créneau horaire." }
                ]
            },
            {
                type: "multiple",
                question: "Selon la 'règle d'or' de capitalisation, quelles sont les retombées obligatoires après la résolution d'un incident par le Niveau 2 ou 3 ?",
                options: [
                    { text: "La création d'une fiche KB pour le Niveau 1.", isCorrect: true, feedback: "Documenter la solution permet au Niveau 1 de résoudre l'incident par lui-même à l'avenir sans nouvelle escalade." },
                    { text: "La mise en place d'un script d'automatisation.", isCorrect: true, feedback: "L'automatisation réduit la charge de travail manuelle pour les incidents identifiés et résolus par les experts." },
                    { text: "L'émission d'une demande de changement (CAB).", isCorrect: true, feedback: "Si la résolution impacte l'infrastructure, elle doit passer par un processus formel de contrôle des changements." },
                    { text: "L'envoi automatique d'une facture à l'utilisateur.", isCorrect: false, feedback: "La capitalisation concerne le partage de connaissances et l'amélioration technique, pas les processus de facturation." }
                ]
            }
        ]
    }
]
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
