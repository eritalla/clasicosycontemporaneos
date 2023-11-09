import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Trayectoria = () => {
  return (
    <Box
      sx={{
        paddingInline: "20px",
        paddingBlock: "50px",
        backgroundColor: "#ab9364",
      }}
    >
      <Card sx={{ maxWidth: "100%", display: "flex", flexWrap: "wrap" }}>
        <CardMedia
          sx={{ height: "250px", width: { xs: "100%", lg: "250px" } }}
          image="https://firebasestorage.googleapis.com/v0/b/clasicosycontemporaneos-544df.appspot.com/o/book-1052014_1280.jpg?alt=media&token=5f23f839-e75c-486d-a4da-d05fa4540887&_gl=1*1gpiose*_ga*MTQ4MTUyNTQxMS4xNjk5NDA3Mzg0*_ga_CW55HF8NVT*MTY5OTQ3MDM3My41LjEuMTY5OTQ3MDM5Ni4zNy4wLjA."
          title="Maria y Francois"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontFamily: "'Bebas Neue', sans-serif;" }}
          >
            Nuestra historia
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
            paragraph
          >
Nuestra misión es satisfacer la curiosidad intelectual y el placer del coleccionismo de bibliófilos y estudiosos al ofrecer un refugio virtual para los tesoros literarios olvidados. En "clasicos y contemporaneos", nos dedicamos a preservar y compartir la riqueza de la literatura antigua y rara, conectando a los amantes de los libros con las joyas literarias del pasado y del presente.


          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
Aspiramos a ser referentes en el rescate de autores latinoamericanos raros, olvidados y malditos, aquellos cuyas voces han quedado fuera de los circuitos comerciales a pesar de su innegable calidad. Visualizamos un mundo donde estas obras sean redescubiertas y celebradas por nuevas generaciones de lectores, donde cada libro adquiera un nuevo significado y valor en el presente.


</Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
            Nuestros valores fundamentales son la pasión por los libros, la integridad en la selección de obras, la participación activa en la comunidad de bibliófilos y la investigación constante en busca de tesoros literarios. Estos valores nos guían en la curación de nuestro catálogo, la creación de contenido inspirador y la colaboración con entusiastas de la literatura, todo con el fin de honrar y revivir la magia de la palabra escrita.


          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            paragraph
            sx={{ fontFamily: "'Montserrat', sans-serif;", fontWeight: "bold" }}
          >
Con esta misión, visión y valores, "clasicos y contemporaneos" se erige como un faro de conocimiento y descubrimiento literario, un lugar donde los libros antiguos y raros cobran nueva vida, donde las historias perduran y donde la pasión por la literatura se convierte en un viaje eterno. ¡Bienvenido a nuestra biblioteca virtual!
</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
