import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routers';
import DefaultLayout from './layout/DefaultLayout';
import { Fragment } from 'react';
import AuthProvider from './contexts/AuthContext';

function App() {

  
  return (
    <AuthProvider>
      <div className='App'>
        <Routes>
          { publicRoutes.map((route, index) => {

            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={ index }
                path={ route.path }
                element={ <Layout><Page /></Layout> }
              />
            )
          }) }
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
