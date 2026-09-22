const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

const newLessons = `[
    {
        id: "m3-c1-l1",
        title: "1. Introduction & Panorama des Outils ITAM/ITSM",
        status: "available",
        content: \`
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
        \`
    },
    {
        id: "m3-c1-l2",
        title: "2. Concepts Fondamentaux de l'ITAM (IT Asset Management)",
        status: "available",
        content: \`
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
        \`
    },
    {
        id: "m3-c1-l3",
        title: "3. Gestion des Services (ITSM) et Organisation du Support",
        status: "available",
        content: \`
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
        \`
    }
]`;

const searchStr = `lessons: [{ id: "m3-c1-l1", title: "Introduction au cours", status: "pending" }]`;
if (data.includes(searchStr)) {
    data = data.replace(searchStr, `lessons: ${newLessons}`);
    fs.writeFileSync('data.js', data);
    console.log("Success");
} else {
    console.log("String not found");
}
