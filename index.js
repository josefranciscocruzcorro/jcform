/*
Copyright 2021 José Francisco Cruz Corro
License MIT
Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los 
archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los 
derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir 
a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTA", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A 
GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS 
DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE 
CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES 
EN EL SOFTWARE.
*/

let rellenar = (objeto, prefixID = '') => {
    let keys = Object.keys(objeto);
    let values = Object.values(objeto);

    for (let i = 0; i < keys.length; i++) {
        if (document.getElementById(prefixID + keys[i]).tagName == 'SELECT') {
            document.getElementById(prefixID + keys[i]).innerHTML = `<option selected>
                                                                        ${document.getElementById(prefixID + keys[i]).value}
                                                                    <option>
                                                                    ${document.getElementById(prefixID + keys[i]).innerHTML}`;
        }else{
            document.getElementById(prefixID + keys[i]).value = values[i];
        }
    }
}

export default rellenar;