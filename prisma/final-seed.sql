-- prisma/final-seed.sql
DELETE FROM Chapter;
DELETE FROM Lesson;

-- CHIMIE
INSERT INTO Chapter (id, title, category, description, "order") VALUES 
('c1', 'Atomes et Éléments', 'CHIMIE', 'Structure microscopique et classification périodique.', 1),
('c2', 'La Mole et les Solutions', 'CHIMIE', 'Quantité de matière et concentrations.', 2),
('c3', 'Réactions Chimiques', 'CHIMIE', 'Équations-bilans et stoechiométrie.', 3);

-- PHYSIQUE
INSERT INTO Chapter (id, title, category, description, "order") VALUES 
('p1', 'Cinématique : Le Mouvement', 'MÉCANIQUE', 'Étude des trajectoires et vitesses.', 4),
('p2', 'Actions Mécaniques et Forces', 'MÉCANIQUE', 'Causes du mouvement et équilibre.', 5),
('p3', 'Électricité : Courant Continu', 'ÉLECTRICITÉ', 'Circuits, tension et intensité.', 6),
('p4', 'Optique Géométrique', 'OPTIQUE', 'Lumière, réflexion et miroirs.', 7);

-- LESSONS
INSERT INTO Lesson (id, title, content, chapterId, "order") VALUES 
('l1', 'Introduction aux Atomes', '<h2>Atomes</h2><p>Le constituant de base de la matière.</p>', 'c1', 1),
('l2', 'Calcul de Mole', '<h2>La Mole</h2><p>n = m / M</p>', 'c2', 1),
('l3', 'MRU et MRUV', '<h2>Mouvement Rectiligne</h2><p>v = constant ou a = constant.</p>', 'p1', 1),
('l4', 'Loi d''Ohm', '<h2>Circuits</h2><p>U = R.I</p>', 'p3', 1);
