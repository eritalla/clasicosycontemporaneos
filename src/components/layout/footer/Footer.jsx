import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReactWhatsapp from "react-whatsapp";

export const Footer = () => {
  return (
    <div className="footer">
      <ReactWhatsapp
        number="549-3571-57-3266"
        message="Hola María! Me gustaría hacer una consulta."
        element="div"
      >
        <WhatsAppIcon />
      </ReactWhatsapp>
      <p style={{ fontFamily: "monospace" }}>
        Tienda creada por
        <Link to={"https://talba-labs.vercel.app/"} className="talba">
          <span style={{ fontFamily: "monospace" }}> Talba Labs</span>
        </Link>
      </p>
    </div>
  );
};
