// Dashboard.tsx
import Navbar from "../components/Navbar";
// import slots from "../Parking_slots.json";
import "../Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="App text-center">
        <br />
        <br />
        <h1 style={{ color: 'white' }}>Parking Slots</h1>
        <div className="container p-5 my-5">
          <div className="row">
            {/* {slots.map((parking, index) => { */}
              const [slot, isOccupied] = Object.entries(parking)[0];
              return (
                <div
                  // key={index}
                  className="col-md-4 mb-3 box" // Use col-md-4 to maintain width
                  style={{
                    borderRight: "10px solid black",
                    borderBlockEnd: "10px solid black",
                    borderStyle: "double",
                    overflow: "hidden",
                  }}
                >
                  <div className="imgBox">
                    {/* Apply text-white class to set text color to white */}
                    {/* <div className="text-white">{slot}</div> */}
                    {/* {isOccupied ? ( */}
                      <div className="text-bg-danger text- mb">
                        <img
                          src="src/Images/car-icon-top-view-4.jpg.png"
                          alt="hello"
                          height="auto"
                          width="100%"
                          id="image-section"
                        />
                      </div>
                    ) : (
                      <div className="p-5 fs-5 text-bg-success text">
                        <strong>Available</strong>
                      </div>
                    )
                  </div>
                </div>
              ;
            {/* })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
