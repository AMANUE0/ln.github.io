✅    - Ventajas e inconvenientes de una base de datos
✅    - Conceptos basicos
✅    - Definicion y Componentes de una bse de datos relacional
✅    - Tipos de base de datos: Plana y relacional
✅    - Pasos para diseñar una base de datos.
✅    - Los tres tipos de claves
✅    - Normalizacion
- Tipos de datos
- Clasificacion de los modelos de una base de datos
- MODELO entidad / relacion
- Cardinalidad ( tipo de relaciones )
- Muchos a muchos ( M:M )
EJERCICIOS PROPUESTOS PARA REPASO ETAPA 1

-----------------------------

ventajas.

--------------------------------

- Independencia fisica.- La forma de almacenar los datos no influyen en su manipulacion.
- Flexibilidad y seguridad.- Las bases de datos ofrecen distintas vistas, en funciones de los usuarios y aplicaciones que trabajen sobre ellas, tambien restringen el acceso a los elementos que no se deben mostrar.
- Uniformidad.- Las estructuras logicas siempre tienen una unica forma conceptual.
- Menor redundancias y mayor integridad de los datos.- Las bases de datos reducen la repeticion de datos y genera mayor dificultad de perder informacion, esto hace que reduzca la posibilidad de incoherencia con los datos.

Desventajas.
- Necesidad de personal calificado.- Para aprovechar las ventajas anteriormente comentadas y en funcion de las bases de datos, del software que funciona con ella y de las necedades de la empresa, podria ser necesaria la especializacion de personal o la formacion del programador y analista sobre las posibilidades y las limitaciones de las bases de datos.
- Requerimientos adicionales hardware.- Generalmente la implementacion de un DBMS recomienda la adquisicion de equipos adicionales, tales como servidores, ampliacion de memoria , discos duros, etc.
- Falta de rentabilidad a corto plazo.- Debido a los altos costos de software y hardware y del personal al momento de implementar una base de datos.

--------------------------------
Conceptos basicos.

--------------------------------

- Objetivo de una base de datos: Organizar y almacenar datos para su facil manejo, puede servirnos de ayuda cuando llevamos el registro de muchas cosas o personas.

- Una base de datos es un sistema formado por una coleccion de datos almacenados y catagorizados de distintas maneras, pero que comparten entre si algun tipo de vinculo que permita el acceso directo a elos, asi como sus relaciones.

- Al  DBMS se le puede llamar SGBD ( Sistema de gestion de base de datos )

- Proposito del DBMS / SGBD: El objetivo principal es proporcionar un entorno y las herramientas necesarias, convenientes y eficientes para manipular la informacion o datos contenidos en las bases de datos, de manera rapida, facil y segura.

- DBMS / SGBD: Es un conjunto de programas que permite almacenar y procesar la informacion contenida en una base de datos.

- Con un programa de este tipo podemos: añadir, modificar, eliminar datos, consultar informacion y obtener reportes imresos, de una manera muy eficiente: DBMS / SGBD

- Para que una herramienta informatica pueda ser considerada un DBMS / SGBD debe... : Crear ( diseñar ) base de datos, Mantener la informacion, Explotar la informacion.

--------------------------------

Definicion y componentes de una base de datos relacional.

--------------------------------

- Es aquella en la cual toda la informacion se almacena en tablas: Base de datos relacional

- Una tabla esta formada por campos y registros, cada cmapo conteiene una sola pieza de informacion sobre el registro en el que reside las bases de datos.

- Registro: Informacion que sera almacenada en cada campo.

- Campo: Es un dato especifico de un registro que posee nombre, tamaño y direccion.


--------------------------------
Tipos de base de datos: Plana y relacional

--------------------------------

- Base de datos plana: Formada por una sola tabla.

- Base de datos relacionales: Estan constituidas por mas de una o mas tablas que contienen la informacion ordenada de una forma organizada
- Leyes basicas de una base de datos relacional: 
    .- Generalmente, contendran muchas tablas.
    .- Una tabla solo tiene un numero fijo
    .- El nombre de los campos de una tabla es distinto.
    .- Cada registro de la tabla es unico.

- Clave principal: Es el unico campo que hace que sea mas facil identificar un registro.

- Beneficios de una BD relacional:
    .- Permite una mayor seguridad
    .- Se evita la duplicacion de datos, manteniendo asi el tamaño de la base de datos pequeño.
    .- Reduce el requerimiento de memoria
    .- Aumenta la eficiencia

--------------------------------
Pasos para diseñar una base de datos

--------------------------------

- Consiste en definir la estructura de los datos que debe tener un sistema de informacion: Diseño de base de datos.

- Processo de diseño de una BD
    .- Fase de analisis
    .- Diseño conceptual
    .- Diseño logico
    .- Diseño fisico

--------------------------------
Tres tipos de clave

--------------------------------

- Clave principal: Cada tabla de base de datos relacional debera tener un identificador unico que consiste en uno o mas campos. Si este identificador unico, no existe forma de definir relaciones entre tablas.

- Claves externas: En esencia, una clave externa es un campo dentro de una tabla que hace   referencia al campo de clave principal de una tabla relacionada.

- Claves compuestas: Es el grupo de campos que en conjunto identifican en forma unica a un registro. Tambien es la clave principal para esa tabla.

--------------------------------
Normalizacion

--------------------------------

- Las bases de datos relacionales se normalizan para:
    .- Evitar la redundancia de los datos
    .- Evitar problemas de actualizacion de los datos en las tablas
    .- P^roteger la integridad de los datos.

- Normalizacion: Es un conjunto de reglas encaminadas a eliminar las redundancias e inconsistencias de dependencia en el diseño de las tablas.

- Anomalias de insercion: Se produce en dos casos. En primer lugar, cuando se inserta una nueva fila sin respetar las dependencias funcionales.

- Desentendencia funcional: Es una propiedad semantica de un esquema de relacion que impone el diseñador.

- Anomalias de modificacion: Se produce cuando se modifican las columnas con datos redundantes de solo un subconjunto de las filas con el mismo dato.

- Anomalias de eliminacion: Se produce cuando se eliminan todas las filas en las que aparecen los datos redundantes por lo que se pierde los datos de la dependencia funcional.

- Las formas normales ( FN ) proporcionan los criteriosd para determinar el grado de vulnerabilidad de una tabla a inconsistencias y anomalias logicas.

- Primera forma nomral ( Normalizacion) 
    .- Eliminar los grupos repetitivos de las tablas individuales.
    .- Crear una tabla separada por cada grupo de datos relacionados
    .- Identificar cada grupo de datos relacionados con una clave primaria.

