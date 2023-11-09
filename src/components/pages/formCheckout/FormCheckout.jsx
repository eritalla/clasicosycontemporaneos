// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../../../context/CartContext";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import axios from "axios";
// import { Button, TextField } from "@mui/material";

// import { Link, useLocation } from "react-router-dom";
// import { db } from "../../../firebaseConfig";
// import {
//   addDoc,
//   collection,
//   doc,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
// } from "firebase/firestore";
// import ReactWhatsapp from "react-whatsapp";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// const Checkout = () => {
//   const { cart, getTotalPrice, clearCart } = useContext(CartContext);

//   initMercadoPago(import.meta.env.VITE_PUBLICKEY, {
//     locale: "es-AR",
//   });
//   const [preferenceId, setPreferenceId] = useState(null);
//   const [userData, setUserData] = useState({
//     nombre: "",
//     apellido: "",
//     dni: "",
//     localidad: "",
//     cp: "",
//     phone: "",
//   });
//   const [orderId, setOrderId] = useState(null);
//   const [shipmentCost, setShipmentCost] = useState(0);
//   const [isClicked, setIsClicked] = useState(false);

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const paramValue = queryParams.get("status"); // approved --- reject

//   useEffect(() => {
//     // ACA ES DONDE GUARDAMOS LA ORDEN EN FIREBASE
//     // CONDICIONADO A QUE YA ESTE EL PAGO REALIZADO
//     let order = JSON.parse(localStorage.getItem("order"));
//     if (paramValue === "approved") {
//       let ordersCollection = collection(db, "orders");
//       addDoc(ordersCollection, { ...order, date: serverTimestamp() }).then(
//         (res) => {
//           setOrderId(res.id);
//         }
//       );

//       order.items.forEach((elemento) => {
//         updateDoc(doc(db, "products", elemento.id), {
//           stock: elemento.stock - elemento.quantity,
//         });
//       });

//       localStorage.removeItem("order");
//       clearCart();
//     }
//   }, [paramValue]);

//   useEffect(() => {
//     let shipmentCollection = collection(db, "shipment");
//     let shipmentDoc = doc(shipmentCollection, "4Q6sTrgEruFytE2XV8rA");
//     getDoc(shipmentDoc).then((res) => {
//       setShipmentCost(res.data().cost);
//     });
//   }, []);

//   let total = getTotalPrice();

//   const createPreference = async () => {
//     const newArray = cart.map((product) => {
//       return {
//         title: product.title,
//         unit_price: product.unit_price,
//         quantity: product.quantity,
//       };
//     });
//     try {
//       let response = await axios.post(
//         "https://backend-maria.vercel.app/create_preference",
//         {
//           items: newArray,
//           shipment_cost: shipmentCost,
//         }
//       );

//       const { id } = response.data;
//       return id;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleBuy = async () => {
//     setIsClicked(true);
//     let order = {
//       nombre: userData.nombre,
//       apellido: userData.apellido,
//       dni: userData.dni,
//       localidad: userData.localidad,
//       cp: userData.cp,
//       phone: userData.phone,
//       items: cart,
//       total: total + shipmentCost,
//     };
//     localStorage.setItem("order", JSON.stringify(order));
//     const id = await createPreference();
//     if (id) {
//       setPreferenceId(id);
//     }
//   };

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       {!orderId ? (
//         <div>
//           <h2 className="bebas" style={{ fontSize: "1.8em" }}>
//             Complete los datos para el envío
//           </h2>
//           <div>
//             <TextField
//               name="nombre"
//               variant="outlined"
//               label="Nombre"
//               onChange={handleChange}
//             />
//             <TextField
//               name="apellido"
//               variant="outlined"
//               label="Apellido"
//               onChange={handleChange}
//             />
//             <TextField
//               name="dni"
//               variant="outlined"
//               label="DNI"
//               onChange={handleChange}
//             />
//             <TextField
//               name="localidad"
//               variant="outlined"
//               label="Localidad"
//               onChange={handleChange}
//             />
//             <TextField
//               name="cp"
//               variant="outlined"
//               label="Código postal"
//               onChange={handleChange}
//             />
//             <TextField
//               name="phone"
//               variant="outlined"
//               label="Teléfono"
//               onChange={handleChange}
//             />
//           </div>
//           {isClicked ? (
//             !preferenceId ? (
//               <h2>espere...</h2>
//             ) : null
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleBuy}
//               sx={{ marginBlock: "20px" }}
//             >
//               Seleccione metodo de pago
//             </Button>
//           )}
//         </div>
//       ) : (
//         <>
//           <h4>El pago se realizó con éxito</h4>
//           <h4>Su número de compra es {orderId}</h4>
//           <Link to="/shop">Seguir comprando</Link>
//           <ReactWhatsapp
//             number="549-3571-57-3266"
//             message="Hola María! Me gustaría hacer una consulta."
//             element="button"
//             className="whatsapp"
//           >
//             <WhatsAppIcon />
//             Whatsapp
//           </ReactWhatsapp>
//         </>
//       )}

//       {preferenceId && (
//         <Wallet initialization={{ preferenceId, redirectMode: "self" }} />
//       )}
//     </div>
//   );
// };

// export default Checkout;
