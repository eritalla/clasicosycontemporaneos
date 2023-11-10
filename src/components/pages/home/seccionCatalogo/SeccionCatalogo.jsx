import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const SeccionCatalogo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ab9364",
        paddingBlock: "20px",
        paddingLeft: "20px",
      }}
    >
      <h1 className="bebas">Tienda</h1>
      <Link to={"/shop"}>
        <Button variant="contained" color="primary">
          Ver productos
        </Button>
      </Link>
    </Box>
  );
};
