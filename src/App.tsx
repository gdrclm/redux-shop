import React, { Dispatch, SetStateAction, Suspense } from "react";
import "./assets/scss/style.scss";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Cart from "./pages/Cart";

import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayouts";
import Loadable from "react-loadable";

interface Context {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const SearchContext = React.createContext<Context | null>(null);
const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ "./pages/Cart"),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullProducts = React.lazy(
  () => import(/* webpackChunkName: "FullProducts" */ "./pages/FullProducts")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);
function App() {
  // const count = useAppSelector((state: RootState) => state.filter.value);
  // const dispatch = useDispatch();

  return (
    <div className="main-Wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />

          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                <Cart />
              </Suspense>
            }
          />
          {/* <Route path="goods/:id" element={<Suspense fallback={<div>Идёт загрузка...</div>><FullProducts/> </Suspense>} /> */}
          <Route
            path="goods/:id"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <FullProducts />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
