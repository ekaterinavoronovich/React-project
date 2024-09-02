import { Route, Routes } from 'react-router-dom';
import './app/styles/index.scss';
import { Home } from './pages/Home/HomePage';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import Layout from './widgets/layout/Layout';
import { Shop } from './pages/Shop/Shop';
import { ProductDetail } from './pages/Shop/ProductDetail';
import { AppRoutes } from './shared/const/AppRoutes';
import { useEffect } from 'react';
import { fetchData } from './app/providers/store/data-slice';

import { useAppDispatch, useAppSelector } from './app/hooks/hooks';
import NotFound from './pages/NotFound/NotFound';
import Loader from './shared/ui/Loader/Loader';
import { fetchDataCategories } from './app/providers/store/dataCategories-slice';

function App() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.data);
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDataCategories());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path={AppRoutes.MAIN} element={<Home />} />
          <Route path={AppRoutes.SHOP} element={<Shop />}>
            <Route path={`${AppRoutes.SHOP}/:category`} element={<Shop />}>
              <Route path="shop/:category/:title" element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path={AppRoutes.CONTACT} element={<Contact />} />
          <Route path={AppRoutes.BLOG} element={<Blog />} />
        </Route>
      </Routes>
      <Layout />
      {loading && <Loader />}
      {error && <NotFound />}
    </>
  );
}

export default App;
