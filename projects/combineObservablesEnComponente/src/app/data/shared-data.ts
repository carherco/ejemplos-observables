export interface SharedData {
  tiposVia: any[];
  paises: any[];
  users: any[];
  todos: any[];
  comments: any[];
}


export let SD: SharedData = {
  tiposVia: null,
  paises: [
    {id: 1, nombre: 'España', provincias: null },
    {id: 1, nombre: 'Francia', provincias: null },
    {id: 1, nombre: 'Alemania', provincias: null },
  ],
  users: null,
  todos: null,
  comments: null
}
