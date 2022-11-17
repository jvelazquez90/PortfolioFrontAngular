-- Agregar los datos en persona
INSERT INTO persona (nombre, apellido, fecha_nacimiento, nacionalidad, sexo, lugar_residencia, telefono)
VALUE ('Jorge Antonio', 'Velazquez Fernandez', '1990-07-25','Paraguaya', 1, 'Moreno,Buenos Aires,Argentina', '+54 9 1160998785');

-- Agregar experiencia. Luego filtrar las fechas bien y ordenar de forma descendiente asi el ultimo trabajo queda primero
INSERT INTO experiencia (nombre_empresa,cargo,fecha_ingreso,fecha_salida,es_trabajo_actual,persona_id)
VALUES ('Universidad Nacional General Sarmiento','Ayudante del profesor en la materia Programas de SIG','2015/1/01',NULL,0,1),
('Municipalidad del Pilar','Departamento de GIS - Dirección de Informática','2013/04/06','2016/05/31',0,1),
('UNIGIS','Encargado del Área de cartografía','2016/06/01',NULL,1,1);

-- Agregar email
INSERT INTO email (email,persona_id)
VALUES ('jvelazquez.tab@gmail.com',1);

-- Agregar aptitudes
INSERT INTO aptitudes (nombre,clasificacion,persona_id)
VALUES ('QGIS','HERRAMIENTAS',1),
('Base de Datos Postgresql/Postgis','HERRAMIENTAS',1),
('ArcGIS','HERRAMIENTAS',1),
('Herramientas OpenStreetMap','HERRAMIENTAS',1),
('GDAL/OGR','HERRAMIENTAS',1),
('Leaflet','HERRAMIENTAS',1),
('OSRM','HERRAMIENTAS',1),
('Graphhopper','HERRAMIENTAS',1),
('SQL','LENGUAJES',1),
('Python','LENGUAJES',1),
('Java','LENGUAJES',1),
('Windows','SISTEMAS OPERATIVOS',1),
('Ubuntu Server','SISTEMAS OPERATIVOS',1);

-- Agregar educacion
INSERT INTO educacion (nombre_institucion, fecha_ingreso,fecha_salida,lugar,persona_id)
VALUES ('Técnico en Sistemas de Información Geográfica','2014/1/01','2014/1/01','Universidad Nacional General Sarmiento',1),
('Curso de Geoserver y publicación de capas',NULL,NULL,NULL,1),
('Curso de base de datos Postgis',NULL,NULL,NULL,1),
('Curso de AutoCAD 2D',NULL,NULL,NULL,1),
('Curso de Python 3 - UTN',NULL,NULL,NULL,1),
('Curso JAVA',NULL,NULL,NULL,1),
('Curso de Git/GitHub',NULL,NULL,NULL,1),
('Cultura de Servicio y Cultura del Cliente basado en Disney',NULL,NULL,NULL,1),
('Geomarketing con ArcGIS: Determinación de ubicaciones óptimas para la apertura de instalaciones comerciales',NULL,NULL,NULL,1),
('Curso de Project Manager',NULL,NULL,NULL,1);

-- Agregar habilidades
INSERT INTO habilidades(nombre, porcentaje, persona_id)
VALUES ('Base de Datos Geográfica', 80, 1),
('Herramientas OpenStreetMaps',70,1);

-- Agregar proyectos
INSERT INTO proyecto(nombre, duracion, participantes)
VALUES ('Detección del Derecho de construcción','2 meses', 'Departamento de SIG'),
('Diseño e implementación de Base de Datos Geoespacial', '2 meses', 'Area de Cartografia UNIGIS'),
('Implementación de servidor de mosaicos personalizado', '8 meses', 'Area de Cartografia UNIGIS, Diseño UNIGIS, TI UNIGIS'),
('Instalación e implementación de geocodificador personalizado', '1 año', 'Area de Cartografia UNIGIS');

-- Agregar personas del proyecto
INSERT INTO persona_del_proyecto (proyecto_id, persona_id)
VALUES (1,1), (2,1), (3,1), (4,1);

-- Agregar redes sociales
INSERT INTO redes_sociales (nombre, link, persona_id)
VALUES ('Linkedin','https://linkedin.com/in/jorge-velazquez-fernandez',1),
('Facebook','https://www.facebook.com/jorgevelazquezcarp', 1),
('Instagram', 'https://instagram.com/jvelazquez_90', 1);

-- Agregar titulo
INSERT INTO titulo (titulo, persona_id)
VALUES ('Tecnico Superior en Sistemas de Información Geográfica', 1);