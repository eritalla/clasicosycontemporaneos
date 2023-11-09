import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { ItemList } from "./ItemList";

import { menuCategorias } from "../../../router/menuCategorias";
import { menuMarcas } from "../../../router/menuMarcas";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [talleSeleccionado, setTalleSeleccionado] = useState("");

  const { categoryName, brandName, talleSelected } = useParams();
  const handleChange = (event) => {
    setTalleSeleccionado(event.target.value);
  };

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    } else if (brandName) {
      consulta = query(itemsCollection, where("marca", "==", brandName));
    } else if (talleSelected) {
      consulta = query(itemsCollection, where("talle", "==", talleSelected));
    } else {
      consulta = itemsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });

        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, [categoryName, brandName, talleSelected]);

  if (products.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ paddingBlock: "20px" }}>
      <h1 className="bebas" style={{ paddingLeft: "20px", fontSize: "3em" }}>
        Tienda
      </h1>
      <Box>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuCategorias.map(({ id, path, title }) => (
            <Button key={id}>
              <Link to={path}>{title}</Link>
            </Button>
          ))}
          {menuMarcas.map((marca) => (
            <Button key={marca.id}>
              <Link to={marca.path}>{marca.title}</Link>
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Talle</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={talleSeleccionado}
              label="Talle"
              onChange={handleChange}
            >
              <MenuItem value={"todos"}>
                <Link to={"/shop"} style={{ width: "100%" }}>
                  Todos
                </Link>
              </MenuItem>
              <MenuItem value={38}>
                <Link to={"/talle/38"} style={{ width: "100%" }}>
                  38
                </Link>
              </MenuItem>
              <MenuItem value={39}>
                <Link to={"/talle/39"} style={{ width: "100%" }}>
                  39
                </Link>
              </MenuItem>
              <MenuItem value={40}>
                <Link to={"/talle/40"} style={{ width: "100%" }}>
                  40
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
