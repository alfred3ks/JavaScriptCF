export const name = "Alfred";
export const age = 25;

const surname = "Sanc";

// Exportamos por defecto: Estamos creando una variable llamada default y se le asigna el valor de la variable surname, es como si hicieramos export default = surname, si hacemos esto no funciona export default let surname = "Pepe"; porque seria como hicieramos export default = let surname = "Pepe";

export default surname;

