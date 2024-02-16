// // Booking.tsx
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// // import { useNavigate } from "react-router-dom";
// import slots from "../Parking_slots.json";
// import "../reservation_data.json";

// // Define a type for the dynamic keys in your JSON structure
// type ParkingSlot = Record<string, boolean | undefined>;

// function Booking() {
//   const [reservedSlots, setReservedSlots] = useState<string[]>([]);
//   const [lastClickedSlot, setLastClickedSlot] = useState<string | null>(null);
//   // const navigate = useNavigate();

//   const handleButtonClick = (slot: string) => {
//     setReservedSlots((prevReservedSlots: string[]) =>
//       prevReservedSlots.includes(slot)
//         ? prevReservedSlots.filter((reservedSlot) => reservedSlot !== slot)
//         : [slot]
//     );

//     // Update the last clicked slot
//     setLastClickedSlot(slot);

//     // // Navigate to "/Form" with the last clicked slot as state
//     // if (!reservedSlots.includes(slot)) {
//     //   navigate("/Form", { state: { lastClickedSlot: slot } });
//     // }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="App border border-dark p-3 text-center">
//         <h1>Parking Slots</h1>
//         <br />
//         <div className="d-grid gap-3 mx-auto">
//           {slots.map((parking: ParkingSlot, index: number) => {
//             const slot = Object.keys(parking)[0];
//             const isOccupied = parking[slot];
//             const isReserved = reservedSlots.includes(slot);
//             const isLastClicked = lastClickedSlot === slot;
//             const buttonColor = isOccupied
//               ? "btn-danger disabled"
//               : isReserved
//               ? "btn-warning disabled"
//               : isLastClicked
//               ? "btn-yellow" // Add your custom yellow class here
//               : "btn-success";
//             const buttonText = isOccupied
//               ? "Occupied"
//               : isReserved
//               ? "Reserved"
//               : "Available";

//             return (
//               <button
//                 type="button"
//                 className={`btn btn-lg ${buttonColor}`}
//                 key={index}
//                 onClick={() => handleButtonClick(slot)}
//               >
//                 {slot} - {buttonText}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;
