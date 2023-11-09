import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: "95vh", md: "100vh", lg: "100vh" },
        width: "100%",
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/clasicosycontemporaneos-544df.appspot.com/o/book-1659717_1280.jpg?alt=media&token=b7edc9b5-4b4c-4e68-a29e-f996d45a851c&_gl=1*ayuq2n*_ga*MTQ4MTUyNTQxMS4xNjk5NDA3Mzg0*_ga_CW55HF8NVT*MTY5OTQxMTE5MS4yLjEuMTY5OTQxMTQ2MS42MC4wLjA.")`,
        backgroundPosition: "50% 40%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: { lg: "8px" },
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3.5em",
          textAlign: "center",
          backgroundColor: "#6b2d33",
          width: "auto",
          paddingInline: "20px",
        }}
        className="bebas"
      >
        Leidos y por leer
      </h1>
      <Link to={"/shop"}>
        <Button variant="contained" color="secondary">
          Ver catalogo
        </Button>
      </Link>
    </Box>
  );
};
