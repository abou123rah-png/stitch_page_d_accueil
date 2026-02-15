/* prisma/seed.ts */
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const url = process.env.DATABASE_URL || 'file:./dev.db'
const adapter = new PrismaBetterSqlite3({ url })
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('--- SEEDING DATABASE ---')

    // Clean up
    await prisma.progress.deleteMany({})
    await prisma.score.deleteMany({})
    await prisma.lesson.deleteMany({})
    await prisma.chapter.deleteMany({})

    // --- ELECTRICITE ET ELECTROCINETIQUE ---

    await prisma.chapter.create({
        data: {
            title: 'Phénomènes d’électrisation',
            category: 'ÉLECTRICITÉ',
            order: 1,
            description: 'Étude des charges électriques au repos et des modes d\'électrisation.',
            lessons: {
                create: [{
                    title: 'Cours : Phénomènes d’électrisation',
                    content: `
                        <h3>1. Introduction</h3>
                        <p>L’électrisation est le phénomène par lequel un corps acquiert une charge électrique. Le mot provient du grec "elektron" (ambre).</p>
                        <h3>2. Modes d'électrisation</h3>
                        <ul>
                            <li><strong>Par frottement :</strong> Un transfert d'électrons s'opère entre deux corps frottés. La tige d'ébonite devient négative, le verre devient positif.</li>
                            <li><strong>Par contact :</strong> Un corps chargé partage sa charge avec un corps neutre lorsqu'ils se touchent.</li>
                            <li><strong>Par influence :</strong> Approcher un corps chargé d'un conducteur neutre provoque un déplacement de charges internes sans contact (ex: électroscope).</li>
                        </ul>
                        <h3>3. Les deux types de charges</h3>
                        <p>Il existe deux espèces d'électricité : positive (+) et négative (-). Les charges de même signe se repoussent, celles de signes opposés s'attirent.</p>
                        <h3>4. Quantité d'électricité</h3>
                        <p>La charge électrique est quantifiée. Toute charge Q est un multiple de la charge élémentaire e.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Quantité d'électricité", value: "Q = n * e" },
                        { label: "Charge élémentaire", value: "e = 1,6.10^-19 C" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Le circuit électrique',
            category: 'ÉLECTRICITÉ',
            order: 2,
            description: 'Constitution et fonctionnement des circuits simples.',
            lessons: {
                create: [{
                    title: 'Cours : Le circuit électrique',
                    content: `
                        <h3>1. Constitution du circuit</h3>
                        <p>Un circuit simple comprend au minimum : un générateur (fournit l'énergie), un récepteur (utilise l'énergie), des fils de connexion et souvent un interrupteur.</p>
                        <h3>2. Sens du courant</h3>
                        <p>Par convention, le courant électrique circule du pôle positif (+) vers le pôle négatif (-) à l'extérieur du générateur.</p>
                        <h3>3. Types de montages</h3>
                        <ul>
                            <li><strong>Montage en série :</strong> Les dipôles sont branchés les uns à la suite des autres. Si l'un tombe en panne, tout s'arrête.</li>
                            <li><strong>Montage en dérivation (parallèle) :</strong> Les dipôles sont branchés sur des branches différentes. Ils fonctionnent indépendamment.</li>
                        </ul>
                        <h3>4. Nœuds, Branches et Mailles</h3>
                        <p>Un <strong>nœud</strong> est un point de connexion de plus de deux fils. Une <strong>maille</strong> est un chemin fermé passant par plusieurs dipôles.</p>
                    `,
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Intensité du courant électrique',
            category: 'ÉLECTRICITÉ',
            order: 3,
            description: 'Débit de charges et mesure de l\'intensité.',
            lessons: {
                create: [{
                    title: 'Cours : Intensité',
                    content: `
                        <h3>1. Définition</h3>
                        <p>L'intensité I du courant électrique correspond au débit de charges électriques (Q) traversant une section du conducteur par unité de temps (t).</p>
                        <h3>2. Mesure</h3>
                        <p>L'intensité se mesure avec un <strong>ampèremètre</strong> branché en série dans le circuit. L'unité est l'Ampère (A).</p>
                        <h3>3. Lois des intensités</h3>
                        <ul>
                            <li><strong>Loi d'unicité (Série) :</strong> L'intensité est la même en tout point du circuit.</li>
                            <li><strong>Loi des nœuds (Dérivation) :</strong> La somme des intensités entrant dans un nœud est égale à la somme des intensités qui en sortent.</li>
                        </ul>
                    `,
                    formulas: JSON.stringify([
                        { label: "Définition de l'intensité", value: "I = Q / t" },
                        { label: "Loi des nœuds", value: "I = I1 + I2 + ..." }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Tension électrique',
            category: 'ÉLECTRICITÉ',
            order: 4,
            description: 'Différence de potentiel et loi d\'Ohm.',
            lessons: {
                create: [{
                    title: 'Cours : Tension',
                    content: `
                        <h3>1. Définition</h3>
                        <p>La tension U (ou différence de potentiel) représente la "pression" électrique entre deux points d'un circuit.</p>
                        <h3>2. Mesure</h3>
                        <p>Elle se mesure avec un <strong>voltmètre</strong> branché en dérivation aux bornes du dipôle. L'unité est le Volt (V).</p>
                        <h3>3. Lois des tensions</h3>
                        <ul>
                            <li><strong>Loi d'additivité (Série) :</strong> Ug = U1 + U2.</li>
                            <li><strong>Loi d'unicité (Dérivation) :</strong> Ug = U1 = U2.</li>
                        </ul>
                        <h3>4. Loi d'Ohm</h3>
                        <p>Pour un résistor, la tension est proportionnelle à l'intensité.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Loi d'Ohm", value: "U = R * I" },
                        { label: "Loi des mailles", value: "Σ U = 0" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    // --- MÉCANIQUE ---

    await prisma.chapter.create({
        data: {
            title: 'Mouvements - Vitesse',
            category: 'MÉCANIQUE',
            order: 5,
            description: 'Relativité du mouvement, trajectoire et vecteurs vitesse.',
            lessons: {
                create: [{
                    title: 'Cinématique',
                    content: `
                        <h3>1. Relativité du mouvement</h3>
                        <p>Le mouvement d'un objet dépend du <strong>référentiel</strong> choisi (terrestre, géocentrique, héliocentrique). Un objet peut être en mouvement par rapport à l'un et au repos par rapport à l'autre.</p>
                        <h3>2. Trajectoire</h3>
                        <p>La trajectoire est l'ensemble des positions successives occupées par le point mobile. Elle peut être rectiligne, circulaire ou curviligne.</p>
                        <h3>3. Vitesse</h3>
                        <ul>
                            <li><strong>Vitesse moyenne :</strong> Rapport de la distance parcourue par le temps mis (v = d/t).</li>
                            <li><strong>Vitesse instantanée :</strong> Vitesse à un instant précis.</li>
                        </ul>
                    `,
                    formulas: JSON.stringify([
                        { label: "Vitesse moyenne", value: "v = d / t" },
                        { label: "Vitesse angulaire", value: "ω = θ / t" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Interactions et Forces',
            category: 'MÉCANIQUE',
            order: 6,
            description: 'Vecteur force et principe des actions réciproques.',
            lessons: {
                create: [{
                    title: 'Le vecteur force',
                    content: `
                        <h3>1. Notion de force</h3>
                        <p>Une force représente l'action mécanique exercée par un objet sur un autre. Elle peut être de contact (pousser) ou à distance (gravité, aimant).</p>
                        <h3>2. Caractéristiques</h3>
                        <p>Un vecteur force F est défini par : son point d'application, sa direction, son sens et sa valeur (intensité en Newton).</p>
                        <h3>3. Principe des interactions (3ème loi de Newton)</h3>
                        <p>Si un corps A exerce une force sur B, alors B exerce sur A une force opposée de même intensité.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Condition d'équilibre", value: "Σ F = 0" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Poids – Masse - Gravitation',
            category: 'MÉCANIQUE',
            order: 7,
            description: 'Relation entre poids et masse.',
            lessons: {
                create: [{
                    title: 'Relation P = m.g',
                    content: `
                        <h3>1. Masse</h3>
                        <p>La masse (m) est une quantité de matière, elle est invariante. Elle se mesure en kg avec une balance.</p>
                        <h3>2. Poids</h3>
                        <p>Le poids (P) est la force d'attraction exercée par la Terre. Il varie selon le lieu (altitude, latitude). Il se mesure en Newton (N) avec un dynamomètre.</p>
                        <h3>3. Relation fondamentale</h3>
                        <p>La relation entre le poids et la masse est P = m * g, où g est l'intensité de la pesanteur (moyenne 9,8 N/kg).</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Formule du poids", value: "P = m * g" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    // --- CHIMIE ---

    await prisma.chapter.create({
        data: {
            title: 'Mélanges et corps purs',
            category: 'CHIMIE',
            order: 8,
            description: 'Techniques de séparation et critères de pureté.',
            lessons: {
                create: [{
                    title: 'Cours : Mélanges',
                    content: `
                        <h3>1. Types de mélanges</h3>
                        <ul>
                            <li><strong>Mélange hétérogène :</strong> On peut distinguer les constituants à l'œil nu (ex: eau + sable).</li>
                            <li><strong>Mélange homogène (Solution) :</strong> On ne distingue pas les constituants (ex: eau salée).</li>
                        </ul>
                        <h3>2. Techniques de séparation</h3>
                        <p>Décantation (densité), Filtration (particules solides), Distillation (ébullition).</p>
                        <h3>3. Corps purs</h3>
                        <p>Un corps pur possède des constantes physiques fixes (Température de fusion/ébullition). Ex : l'eau pure bout à 100°C sous 1 atm.</p>
                    `,
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Structure de la matière - Atome',
            category: 'CHIMIE',
            order: 9,
            description: 'Modèle de l\'atome et élément chimique.',
            lessons: {
                create: [{
                    title: 'L\'Atome',
                    content: `
                        <h3>1. Constitution</h3>
                        <p>L'atome est constitué d'un <strong>noyau</strong> central (protons + neutrons) portant une charge positive, et d'<strong>électrons</strong> périphériques chargés négativement.</p>
                        <h3>2. Neutralité électrique</h3>
                        <p>Un atome possède autant d'électrons que de protons (numéro atomique Z). Sa charge totale est nulle.</p>
                        <h3>3. Molécules et Ions</h3>
                        <p>Une molécule est un groupement d'atomes. Un ion est un atome (ou groupe) ayant gagné ou perdu un ou plusieurs électrons.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Charge de l'atome", value: "q_atome = 0" },
                        { label: "Nombre de nucléons", value: "A = Z + N" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Transformations de la matière',
            category: 'CHIMIE',
            order: 10,
            description: 'Transformations physiques vs chimiques.',
            lessons: {
                create: [{
                    title: 'Réactions chimiques',
                    content: `
                        <h3>1. Transformation physique</h3>
                        <p>Le changement d'état (fusion, vaporisation) ne change pas la nature des molécules. Ex: glace -> eau liquide.</p>
                        <h3>2. Transformation chimique</h3>
                        <p>Des espèces chimiques disparaissent (réactifs) et de nouvelles apparaissent (produits). La nature de la matière change.</p>
                        <h3>3. Loi de Lavoisier</h3>
                        <p>"Rien ne se perd, rien ne se crée, tout se transforme." La masse totale et les atomes se conservent.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Loi de conservation", value: "M_réactifs = M_produits" }
                    ]),
                    order: 1
                }]
            }
        }
    })


    await prisma.chapter.create({
        data: {
            title: 'Dipôles passifs et actifs',
            category: 'ÉLECTRICITÉ',
            order: 11,
            description: 'Caractéristique d\'un dipôle et associations.',
            lessons: {
                create: [{
                    title: 'Cours : Les Dipôles',
                    content: `
                        <h3>1. Dipôle passif</h3>
                        <p>Un dipôle est dit passif si sa caractéristique passe par l'origine (ex: conducteur ohmique). Sa tension est nulle quand l'intensité est nulle.</p>
                        <h3>2. Dipôle actif</h3>
                        <p>Un dipôle est actif s'il peut fournir du courant (générateur) ou s'il nécessite une tension minimale pour fonctionner (récepteur comme un moteur). Sa tension n'est pas nulle à intensité nulle (fem E).</p>
                        <h3>3. Association de conducteurs ohmiques</h3>
                        <ul>
                            <li><strong>En série :</strong> Req = R1 + R2 + ...</li>
                            <li><strong>En parallèle :</strong> 1/Req = 1/R1 + 1/R2 + ...</li>
                        </ul>
                    `,
                    formulas: JSON.stringify([
                        { label: "Loi d'Ohm généralisée", value: "U = E - r.I (Générateur)" },
                        { label: "Loi d'Ohm (Récepteur)", value: "U = E' + r'.I" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Équilibre d’un solide',
            category: 'MÉCANIQUE',
            order: 12,
            description: 'Conditions d\'équilibre pour des forces non parallèles.',
            lessons: {
                create: [{
                    title: 'Forces non parallèles',
                    content: `
                        <h3>1. Conditions d'équilibre</h3>
                        <p>Pour qu'un solide soumis à trois forces non parallèles soit en équilibre :</p>
                        <ul>
                            <li>Les trois forces doivent être <strong>coplanaires</strong> (dans le même plan).</li>
                            <li>Les droites d'action des forces doivent être <strong>concourantes</strong> (se couper en un même point).</li>
                            <li>La somme vectorielle des forces doit être nulle (Σ F = 0).</li>
                        </ul>
                        <h3>2. Méthode de résolution</h3>
                        <p>On utilise souvent la projection sur des axes (Ox, Oy) ou la construction d'un polygone des forces fermé.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Somme vectorielle", value: "F1 + F2 + F3 = 0" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Équilibre d’un solide (Axe fixe)',
            category: 'MÉCANIQUE',
            order: 13,
            description: 'Moment d\'une force et théorème des moments.',
            lessons: {
                create: [{
                    title: 'Théorème des moments',
                    content: `
                        <h3>1. Moment d'une force</h3>
                        <p>Le moment M d'une force F par rapport à un axe Δ mesure l'effet de rotation de cette force. M = F * d (où d est le bras de levier, distance perpendiculaire à l'axe).</p>
                        <h3>2. Condition d'équilibre</h3>
                        <p>Un solide mobile autour d'un axe fixe est en équilibre si la somme algébrique des moments de toutes les forces appliquées est nulle.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Moment d'une force", value: "M = F * d" },
                        { label: "Théorème des moments", value: "Σ M_horaire = Σ M_antihoraire" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Optique : Propagation de la lumière',
            category: 'OPTIQUE',
            order: 14,
            description: 'Propagation rectiligne, ombres et éclipses.',
            lessons: {
                create: [{
                    title: 'Propagation rectiligne',
                    content: `
                        <h3>1. Principe de propagation</h3>
                        <p>Dans un milieu transparent et homogène (comme l'air ou l'eau pure), la lumière se propage en ligne droite. On représente le trajet par un rayon lumineux.</p>
                        <h3>2. Faisceaux lumineux</h3>
                        <p>Un faisceau peut être convergent (les rayons se rapprochent), divergent (s'éloignent) ou parallèle (cylindrique).</p>
                        <h3>3. Ombres et Pénombres</h3>
                        <p>L'existence des ombres (portée et propre) est une preuve de la propagation rectiligne. Cela explique aussi les éclipses de Lune et de Soleil.</p>
                    `,
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Réflexion et Réfraction',
            category: 'OPTIQUE',
            order: 15,
            description: 'Lois de Snell-Descartes et miroirs plans.',
            lessons: {
                create: [{
                    title: 'Snell-Descartes',
                    content: `
                        <h3>1. Réflexion</h3>
                        <p>Le rayon incident et le rayon réfléchi sont dans le même plan. L'angle d'incidence (i) est égal à l'angle de réflexion (r).</p>
                        <h3>2. Réfraction</h3>
                        <p>C'est le changement de direction de la lumière quand elle passe d'un milieu transparent à un autre. Loi : n1 * sin(i1) = n2 * sin(i2).</p>
                        <h3>3. Indice de réfraction</h3>
                        <p>L'indice n d'un milieu est lié à la vitesse de la lumière (c) dans ce milieu. n = c / v.</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Loi de réflexion", value: "i = r" },
                        { label: "Loi de réfraction", value: "n1.sin(i1) = n2.sin(i2)" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'La Mole : Quantité de matière',
            category: 'CHIMIE',
            order: 16,
            description: 'Unité de compte du chimiste et masse molaire.',
            lessons: {
                create: [{
                    title: 'Cours : La Mole',
                    content: `
                        <h3>1. Définition</h3>
                        <p>La mole est l'unité de quantité de matière. Elle contient environ 6,02.10^23 entités (atomes, molécules), nombre appelé constante d'Avogadro (Na).</p>
                        <h3>2. Masse molaire</h3>
                        <p>C'est la masse d'une mole de substance. M (g/mol). Pour une molécule, c'est la somme des masses atomiques.</p>
                        <h3>3. Volume molaire des gaz</h3>
                        <p>Dans les mêmes conditions de température et de pression, tous les gaz occupent le même volume pour une mole. Vm = 22,4 L/mol (CNTP).</p>
                    `,
                    formulas: JSON.stringify([
                        { label: "Relation Masse", value: "n = m / M" },
                        { label: "Relation Gaz", value: "n = V / Vm" },
                        { label: "Nombre d'entités", value: "N = n * Na" }
                    ]),
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Équation-bilan d’une réaction',
            category: 'CHIMIE',
            order: 17,
            description: 'Équilibrage et proportions stœchiométriques.',
            lessons: {
                create: [{
                    title: 'Équilibrer une équation',
                    content: `
                        <h3>1. Principe de conservation</h3>
                        <p>Au cours d'une réaction chimique, les atomes se conservent : "Rien ne se perd, rien ne se crée". Le nombre d'atomes de chaque élément doit être le même de chaque côté de la flèche.</p>
                        <h3>2. Coefficients stœchiométriques</h3>
                        <p>On ajuste l'équilibre en plaçant des nombres (coefficients) devant les formules des réactifs et des produits. On ne modifie JAMAIS les indices des molécules.</p>
                        <h3>3. Lecture de l'équation</h3>
                        <p>Les coefficients indiquent les proportions en moles dans lesquelles les réactifs disparaissent et les produits se forment.</p>
                    `,
                    order: 1
                }]
            }
        }
    })

    await prisma.chapter.create({
        data: {
            title: 'Solutions aqueuses - pH',
            category: 'CHIMIE',
            order: 18,
            description: 'Acidité, basicité et mesure du pH.',
            lessons: {
                create: [{
                    title: 'L\'échelle de pH',
                    content: `
                        <h3>1. Définition</h3>
                        <p>Le pH (potentiel Hydrogène) mesure l'acidité d'une solution aqueuse sur une échelle de 0 à 14.</p>
                        <ul>
                            <li><strong>pH < 7 :</strong> Solution acide (ex: jus de citron).</li>
                            <li><strong>pH = 7 :</strong> Solution neutre (ex: eau pure).</li>
                            <li><strong>pH > 7 :</strong> Solution basique (ex: eau de Javel).</li>
                        </ul>
                        <h3>2. Mesure du pH</h3>
                        <p>On utilise du <strong>papier pH</strong> (changement de couleur) ou un <strong>pH-mètre</strong> (mesure électronique précise).</p>
                        <h3>3. Indicateurs colorés</h3>
                        <p>Exemple : le BBT (Bleu de Bromothymol) est jaune en milieu acide, vert en milieu neutre et bleu en milieu basique.</p>
                    `,
                    order: 1
                }]
            }
        }
    })

    console.log('--- SEED COMPLETED ---')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

