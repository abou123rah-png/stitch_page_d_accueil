-- prisma/seed-chapters.sql
DELETE FROM Chapter;
DELETE FROM Lesson;

-- Chapters
INSERT INTO Chapter (id, title, category, description, "order") VALUES 
('ch1', 'Atomes et Éléments', 'CHIMIE', 'Structure microscopique de la matière.', 1),
('ch2', 'La Mole et les Solutions', 'CHIMIE', 'Quantité de matière et concentrations.', 2),
('ch3', 'Cinématique : Le Mouvement', 'MÉCANIQUE', 'Étude des trajectoires et vitesses.', 3),
('ch4', 'Actions Mécaniques et Forces', 'MÉCANIQUE', 'Causes du mouvement et équilibre.', 4),
('ch5', 'Électricité : Courant Continu', 'ÉLECTRICITÉ', 'Circuits, tension et intensité.', 5),
('ch6', 'Optique Géométrique', 'OPTIQUE', 'Réflexion, réfraction et miroirs.', 6);

-- Lessons (Linked to Chapters)
INSERT INTO Lesson (id, title, content, chapterId, "order") VALUES
('ls1', 'Introduction aux Atomes', '<h2>Atomes et Isotopes</h2><p>Le noyau contient des protons et des neutrons...</p>', 'ch1', 1),
('ls2', 'La Mole', '<h2>Définition de la Mole</h2><p>Une mole contient 6,02.10^23 entités...</p>', 'ch2', 1),
('ls3', 'Mouvement Rectiligne', '<h2>MRU</h2><p>La vitesse est constante v = d / t.</p>', 'ch3', 1),
('ls4', 'Loi d''Ohm', '<h2>Loi d''Ohm</h2><p>U = R.I pour un conducteur ohmique.</p>', 'ch5', 1);
