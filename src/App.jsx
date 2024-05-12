import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { apiRefreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage '));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {isRefreshing ? (
          <b>Refreshing user...</b>
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegistrationPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </>
  );
}

export default App;
