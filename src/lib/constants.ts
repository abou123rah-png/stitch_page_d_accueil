export const CHAPTERS_DATA = [
    { id: 'c1', title: 'Généralités sur le mouvement', category: 'MÉCANIQUE', description: 'Système, référentiel, mouvement et vitesse.' },
    { id: 'c2', title: 'Généralités sur les forces', category: 'MÉCANIQUE', description: 'Concept de force et représentation.' },
    { id: 'c3', title: 'Poids et Masse', category: 'MÉCANIQUE', description: 'Relation fondamentale entre P et m.' },
    { id: 'c4', title: 'Équilibre d\'un solide', category: 'MÉCANIQUE', description: 'Forces non parallèles et rotation.' },
    { id: 'c5', title: 'Phénomènes d\'électrisation', category: 'ÉLECTRICITÉ', description: 'Électrisation par frottement et contact.' },
    { id: 'c6', title: 'Courant Électrique et Intensité', category: 'ÉLECTRICITÉ', description: 'Généralités et mesure.' },
    { id: 'c7', title: 'Dipôles et Amplificateur Opérationnel', category: 'ÉLECTRICITÉ', description: 'Étude des circuits.' },
    { id: 'c8', title: 'Mélanges et Corps Purs', category: 'CHIMIE', description: 'Distinction et propriétés.' },
    { id: 'c9', title: 'Atome et Élément Chimique', category: 'CHIMIE', description: 'Structure et classification.' },
    { id: 'c10', title: 'Liaisons Chimiques', category: 'CHIMIE', description: 'Assemblage des atomes.' },
    { id: 'c11', title: 'La Mole et Grandeurs Molaires', category: 'CHIMIE', description: 'Quantité de matière.' },
    { id: 'c12', title: 'Réactions Chimiques', category: 'CHIMIE', description: 'Équation-bilan et conservation.' },
    { id: 'c13', title: 'Solutions Aqueuses', category: 'CHIMIE', description: 'Préparation et propriétés.' },
    { id: 'c14', title: 'Acides et Bases : pH', category: 'CHIMIE', description: 'Indicateurs et pH.' }
];

export const ICON_MAP_DATA: Record<string, { color: string }> = {
    'MÉCANIQUE': { color: '#2b6cb0' },
    'ÉLECTRICITÉ': { color: '#ed8936' },
    'OPTIQUE': { color: '#48bb78' },
    'MATIÈRE': { color: '#9f7aea' },
    'CHIMIE': { color: '#9f7aea' },
};
