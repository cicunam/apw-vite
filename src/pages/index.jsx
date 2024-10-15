// APW
// Enrutador

// NOTA 1: Utilizar el contexto de la aplicación para obtener el nombre de la página activa
//         y actualizar los componentes <Navigation> y <Heading>

// NOTA 2: Buscar la forma de incluir la página inicial sin componentes (Overview, Detail, Info)
//         desde el archivo de configuración.

// [lock:plantilla]

import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

// Componentes del sistema de diseño
import {
  Aside,
  Box,
  Flexbox, // Reemplazarlo por un componente <Heading> (que todavía no programo)
  Header,
  Menu,
  Navigation,
  Title
} from '@cicunam/sd';

// Mecanismos utilizados
import useContext from '../hooks/context';
import useWindow from '../hooks/window';

// Plantilla de la aplicación
const Template = props => {

  // Observar cambios en el tamaño del área de trabajo
  useWindow('main');

  // Información del enrutador
  const history = useHistory();
  const location = useLocation();

  // Contexto de la aplicación
  const { context, setContext } = useContext();

  // Función para cambiar de ruta
  const changeRoute = (index, route) => {

    // Hacer que la variable currentPage apunte a la página seleccionada
    setContext({ key: 'currentPage', value: context.pages[index] });

    // Cambiar la ruta
    history.replace(route);

  }

  // Actualizar la variable currentPage cada vez que cambie la ruta
  useEffect(() => {

    const subroutes = location.pathname.split("/")
    
    for (let subroute of subroutes) {

      // Encuentra el índice de la página que tiene una ruta que coincide con el elemento actual de subroutes
      const currentIndex = context.pages.findIndex(page => page.route === `/${subroute}`);
      // Si se encuentra un índice válido (no es -1), actualiza currentIndex
      if (currentIndex !== -1) {
        setContext({ key: 'currentPage', value: context.pages[currentIndex] });
        break; // Detener el bucle ya que hemos encontrado una coincidencia
      }
    }
  }, [ location.pathname ]); // eslint-disable-line

  // Borrar el token de local storage y del contexto
  const logout = () => {

    localStorage.removeItem('access_token');
    setContext({key: 'isLoggedIn', value: false})
  }

  // Interfaz gráfica
  return (

    <>
      <Header color="primary" hue="dark"><Title size="medium" color="white">{context && context.product.name}</Title></Header>
      <div className="layout">
        <Navigation>
          <Flexbox style={{height: "100%"}} direction="column" justify="between">
          {/*<Menu.Item icon="home" onClick={() => changeRoute("/")}>Inicio</Menu.Item>*/}
          <div>
          {context.pages.map((page, i) => (
            <Menu.Item key={i} icon={page.icon} onClick={() => changeRoute(i, page.route)} title={page.label}>{page.label}</Menu.Item>
          ))}
          </div>

          <Menu.Item icon="times" onClick={logout} title="Cerrar la sesión">Cerrar la sesión</Menu.Item>
          </Flexbox>
        </Navigation>
        <main>
          <Box color="secondary" hue="light" pad="small large" style={{ height: '64px' }}>
            <Flexbox as="header" direction="row" align="center" justify="start">
              <Title size="medium">{context.currentPage.summary}</Title>
            </Flexbox>
          </Box>
          <Switch>
            { // eslint-disable-next-line
              context.pages.map((page, i) => {
                if (page.components.includes("Detail")) {
                  let DynamicComponent = require('./' + page.module + '/Detail').default;
                  return <Route key={i} path={page.route + '/:id'} render={() => <DynamicComponent />} />
                }
              })}
            { // eslint-disable-next-line
              context.pages.map((page, i) => {
                if (page.components.includes("Overview")) {
                  let DynamicComponent = require('./' + page.module + '/Overview').default;
                  return <Route key={i} path={page.route} render={() => <DynamicComponent />} />
                }
              })}
          </Switch>
        </main>
        <Aside color="secondary" style={{ maxWidth: '20%' }}>
          <Switch>
            { // eslint-disable-next-line
              context.pages.map((page, i) => {
                if (page.components.includes("Info")) {
                  let DynamicComponent = require('./' + page.module + '/Info').default;
                  return <Route key={i} path={page.route} render={() => <DynamicComponent />} />
                }
              })}
          </Switch>
        </Aside>
      </div>
    </>

  );

}

export default Template;

// [/lock:plantilla]
