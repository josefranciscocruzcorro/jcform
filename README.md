# JC-FORM
***
Librería para autorrellenar formularios donde los campos inputs y/o selects tengan un ID que debe llamarse igual que el campo correspondiente en el objeto JSON.

***

## Instalacion
npm i jcform

## Uso

Use la funcion rellenar(objeto, prefixID = ''),
donde:

***
objeto => Objeto JSON [ { clave:valor } ],

***
prefixID => Prefijo del id de los respectivos <input> y <select> que debe coincidir con la clave en el objeto JSON