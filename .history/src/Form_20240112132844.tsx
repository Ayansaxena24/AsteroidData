import React, { ChangeEvent, FormEvent, Component } from "react";
import bg from "./assets/bg2.jpg";
import { Navigate } from "react-router-dom";

interface FormInputState {
  id: string;
  asteroidDetails: any;
  loading: boolean;
}

class FormInput extends Component<{}, FormInputState> {
  API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;
  // navigate = useNavigate();

  constructor(props: {}) {
    super(props);
    this.state = {
      id: "",
      asteroidDetails: null,
      loading: false,
    };
  }

  fetchData = async (str: String) => {
    const { id, loading } = this.state;

    if (!loading) {
      // const history : any = this.props;
      if (str === "id") {
        try {
          this.setState({ loading: true });
          const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${this.API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          const data = await response.json();
          this.setState({ asteroidDetails: data });
          console.log(data);
          <Navigate to="/details" state={data}/>
        } catch (error) {
          console.error("Error fetching asteroid data:", error);
          alert("Error fetching asteroid data! Please recheck the input ID");
        } finally {
          this.setState({ loading: false });
        }
      } else {
        try {
          this.setState({ loading: true });
          const response = await fetch(
            `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${this.API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          const data = await response.json();
          this.setState({
            asteroidDetails:
              data.near_earth_objects[
                Math.floor(Math.random() * data.near_earth_objects.length)
              ],
          });
          console.log(data);
          <Navigate to="/details" props={data.near_earth_objects[Math.floor(Math.random() * data.near_earth_objects.length)]}/>
        } catch (error) {
          console.error("Error fetching asteroid data:", error);
          alert("Error fetching asteroid data! Please recheck the input ID");
        } finally {
          this.setState({ loading: false });
        }
      }
    }
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.fetchData("id");
  };

  handleRandomSubmit = (e: FormEvent) => {
    this.fetchData("random");
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ id: e.target.value });
  };

  render() {
    const { id, asteroidDetails, loading } = this.state;

    return (
      <div className="flex flex-col justify-center items-center h-[100vh] bg-black text-white pt-24 overflow-y-hidden w-screen">
        <div className="z-10 top-6 absolute">
          <p className="font-bold text-4xl ">AsteroidOpedia</p>
        </div>
        <img src={bg} alt="bg" className="z-0 absolute top-0 right-0" />

        {asteroidDetails === null && (
          <div className="flex z-10 justify-center items-center h-[100vh] absolute ">
            <form
              onSubmit={this.handleSubmit}
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
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="flex justify-center items-center w-full pt-4 z-10">
                <button
                  disabled={id.length === 7 ? false : true}
                  className={`${
                    id.length === 7
                      ? "border-2 border-white rounded-md px-2 duration-300 ease-in-out hover:scale-110"
                      : "border-2 border-gray-400 rounded-md px-2 cursor-not-allowed text-gray-300"
                  }`}
                  type="submit"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
              <div className="w-full pt-4 absolute left-0">
                <hr className="w-full " />
              </div>
              <div className="w-full flex justify-center items-center flex-col space-y-2 pt-6 ">
                <p>OR</p>
                <button
                  onClick={this.handleRandomSubmit}
                  className="border-2 rounded-md px-2 duration-300 hover:scale-110 ease-in-out"
                >
                  {loading ? "Loading..." : "Choose a Random Asteroid"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormInput;
