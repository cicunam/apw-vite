// APW
// Mecanismos (hooks)
// Gestión de formularios

import { useHistory } from 'react-router-dom';

// Definición del hook
const useWorkflow = (collection) => {

  // Histaria de navegación
  const history = useHistory();

  // Crear un registro nuevo
  const createNew = () => {

    history.replace(`/${collection}/nuevo`);

  }

  // Mostrar el contenido de un registro
  const showDetail = (id) => {

    history.replace(`/${collection}/${id}`);

  }

  // Mostrar la lista de registros
  const showOverview = needFetch => {

      history.replace(`/${collection}`);

  }

  // // Gestor de evento: Editar el registro actual
  // const editDetail = () => {
  //
  //   setDisabled(false);
  //
  // }
  //
  // // Gestor de evento: Borrar el registro actual
  // const handleDelete = () => {
  //
  //   if (window.confirm('¿Borrar el registro seleccionado?') === true) {
  //
  //     actions.remove().then((response) => { history.replace(`/${collection}`); }).catch(e => console.log(e));
  //
  //   };
  //
  // }
  //
  // // Gestor de evento: Aceptar la creación o actualización de un registro
  // const showDetail = () => {
  //
  //   if (id === 'nuevo') {
  //     actions.create().then(() => setDisabled(true)).catch(e => console.log(e));
  //   } else {
  //     actions.update().then(() => setDisabled(true)).catch(e => console.log(e));
  //   }
  //
  // }
  //
  // const handleCancel = () => {
  //
  //   if (id === 'nuevo') {
  //     history.replace(`/${collection}`);
  //   } else {
  //     actions.reset(); setDisabled(true);
  //   }
  //
  // }

  return { createNew, showDetail, showOverview };

}

export default useWorkflow;

// [lock-all/]
