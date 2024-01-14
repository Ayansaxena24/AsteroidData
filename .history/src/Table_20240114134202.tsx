import { useState } from "react";
import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import bg from "./assets/bg2.jpg";
import { Link, useLocation } from "react-router-dom";

interface AsteroidData {
  id: string;
  name: string;
  designation: string;
  absolute_magnitude_h: number;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  estimated_diameter: EstimatedDiameter;
  orbital_data: OrbitalData;
}

interface CloseApproachData {
  close_approach_date: string;
  miss_distance: MissDistance;
  relative_velocity: RelativeVelocity;
}

interface MissDistance {
  kilometers: string;
  miles: string;
}

interface RelativeVelocity {
  kilometers_per_hour: string;
}

interface EstimatedDiameter {
  kilometers: Diameter;
}

interface Diameter {
  estimated_diameter_max: string;
  estimated_diameter_min: string;
}

interface OrbitalData {
  orbital_period: string;
}

const BasicTable: FC = () => {
  const location = useLocation();
  const asteroidDetails: AsteroidData = location.state;
  console.log("asteroidDetails  Table -->", asteroidDetails);
  const asteroidData: AsteroidData = asteroidDetails;
  const closeApproachData: CloseApproachData = asteroidData.close_approach_data[0]; // Use only the first element
  const [measure, setMeasure] = useState<number>(0);
  const [sizee, setSizee] = useState<number>(0);

  const rows = [
    { label: "ID", value: asteroidData.id },
    { label: "Name", value: asteroidData.name },
    { label: "Designation", value: asteroidData.designation },
    {
      label: "Absolute Magnitude (H)",
      value: asteroidData.absolute_magnitude_h,
    },
    {
      label: "Is Potentially Hazardous",
      value: asteroidData.is_potentially_hazardous_asteroid ? "Yes" : "No",
    },
    // Add more properties as needed
    {
      label: "First Close Approach Date",
      value: closeApproachData.close_approach_date,
    },
    {
      label: `Miss Distance (${measure === 0 ? "kms" : "miles"})`,
      value:
        measure === 0
          ? closeApproachData.miss_distance.kilometers
          : closeApproachData.miss_distance.miles,
    },
    {
      label: "Relative Velocity (km/h)",
      value: closeApproachData.relative_velocity.kilometers_per_hour,
    },
    {
      label: `Estimated Diameter (${sizee === 0 ? "max" : "min"})`,
      value:
        sizee === 0
          ? asteroidData.estimated_diameter.kilometers.estimated_diameter_max
          : asteroidData.estimated_diameter.kilometers.estimated_diameter_min,
    },
    {
      label: `Orbital Period`,
      value: asteroidData.orbital_data.orbital_period,
    },
  ];

  const toggleMeasure = () => {
    setMeasure((prevMeasure) => (prevMeasure === 0 ? 1 : 0));
  };
  const toggleSize = () => {
    setSizee((prevSize) => (prevSize === 0 ? 1 : 0));
  };

  const getBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-black text-white pt-24 overflow-y-hidden">
      <div className="z-10 absolute top-6">
        <p className="font-bold text-4xl z-10">AsteroidOpedia</p>
      </div>
      <img src={bg} alt="bg" className="z-0 absolute top-0 right-0 w-full h-[148vh] sm:h-[120vh] md:h-[130vh] bg-center-bottom bg-no-repeat bg-cover" />

      <div className="mt-4 p-4 border-2 rounded-md z-20 overflow-auto absolute top-20 bg-opacity-70 bg-black">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-2">Asteroid Details</h2>
          <div>
            <button
              className="border-2 rounded-md px-2 hover:scale-110 duration-300 ease-in-out"
              onClick={getBack}
            >
              <Link to="/"> Back </Link>
            </button>
          </div>
        </div>

        <TableContainer
          component={Paper}
          style={{ background: "rgba(0, 0, 0, 0.1)", color: "white" }}
          className="z-10"
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "white" }} align="left">
                  Property
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell
                    style={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    {row.label}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell colSpan={2} align="center" className="space-x-4">
                  <Button variant="outlined" onClick={toggleMeasure}>
                    Toggle Distance Unit - kms/miles
                  </Button>
                  <Button variant="outlined" onClick={toggleSize}>
                    Toggle Diameter - max/min
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BasicTable;