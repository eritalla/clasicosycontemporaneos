import Cart from "../components/pages/cart/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import Home from "../components/pages/home/Home";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemListContainer from "../components/pages/itemlist/ItemListContainer";
import { Ordenes } from "../components/pages/ordenes/Ordenes";
import UserOrders from "../components/pages/userOrders/UserOrders";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
  {
    id: "userOrders",
    path: "/user-orders",
    Element: UserOrders,
  },
  {
    id: "ordenes",
    path: "/ordenes",
    Element: Ordenes,
  },
  {
    id: "categoria",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "marca",
    path: "/marca/:brandName",
    Element: ItemListContainer,
  },
  {
    id: "talle",
    path: "/talle/:talleSelected",
    Element: ItemListContainer,
  },
];
