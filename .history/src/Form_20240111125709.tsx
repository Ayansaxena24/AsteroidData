import React, { useState, ChangeEvent, FormEvent } from "react";
import bg from "./assets/bg2.jpg";
// import CircularIndeterminate from "./CircularLoader";
import { useNavigate } from "react-router-dom";

const FormInput: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [asteroidDetails, setAsteroidDetails] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const [randomLoading, setRandomLoading] = useState<boolean>(false);
  const navigate = useNavigate();
   const API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;
  // const API_KEY = "n9nvcPVZxoh7ZAgFUfYlnrEF2cn7eCWeKB5dpuLI";
  

  const fetchRandomData = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setAsteroidDetails(
          data.near_earth_objects[Math.floor(Math.random() * 20)]
        );
        console.log(data);
        navigate("/details", {
          state: data.near_earth_objects[Math.floor(Math.random() * 20)],
        });
      } catch (error) {
        console.error("Error fetching asteroid data:", error);
        alert("Error fetching asteroid data! Please recheck the input ID");
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchData = async ( str : String) => {
    if (!loading) {
      if (str === "random")
      {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setAsteroidDetails(data);
        console.log(data);
        navigate("/details", { state: data });
      }}
       
      } catch (error) {
        console.error("Error fetching asteroid data:", error);
        alert("Error fetching asteroid data! Please recheck the input ID");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchData("id");
  };

  const handleRandomSubmit = (e: FormEvent) => {
    fetchData("random");
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-black text-white pt-24 overflow-y-hidden w-screen">
      <div className="z-10 top-6 absolute">
        <p className="font-bold text-4xl ">AsteroidOpedia</p>
      </div>
      <img src={bg} alt="bg" className="z-0 absolute top-0 right-0" />

      {asteroidDetails === null && (
        <div className="flex z-10 justify-center items-center h-[100vh] absolute ">
          <form
            onSubmit={handleSubmit}
            className="z-10 border-2 rounded-md pb-8 px-8 pt-4 space-y-2"
          >
            <div className="flex justify-center items-center w-full pr-4">
              <p className="font-semibold text-2xl">Input Asteroid Details</p>
            </div>
            <div className="flex space-x-2">
              <p>Enter Asteroid ID</p>
              <input
                type="text"
                className="bg-black pl-2 bg-opacity-60 backdrop-blur-lg border-2 rounded-md"
                value={id}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setId(e.target.value)
                }
              />
            </div>
            <div className="flex justify-center items-center w-full pt-4 z-10">
              <button
                disabled={id.length === 7 ? false : true}
                className="border-2 border-white rounded-md px-2 duration-300 ease-in-out hover:scale-110 "
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="w-full pt-4 absolute left-0">
              <hr className="w-full " />
            </div>
            <div className="w-full flex justify-center items-center flex-col space-y-2 pt-6 ">
              <p>OR</p>
              <button
                onClick={handleRandomSubmit}
                className="border-2 rounded-md px-2 duration-300 hover:scale-110 ease-in-out"
              >
                Choose a Random Asteroid
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormInput;
