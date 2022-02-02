import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Gametile from "../components/gametile.js";
import { AuthContext } from "../auth/auth.js";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Bg from "../components/background.js";
import "../App.css";

let games = [
  { name: "CS:GO", src: "CSGO.png", alt: "CS:GO", link: "CSGO" },
  { name: "Garry's Mod", src: "GMOD.png", alt: "Gmod", link: "Gmod" },
];

function App() {
  // All states

  const [bg, setBg] = React.useState(`bg${Math.floor(Math.random() * 2) + 1}`);

  // Handles the search data
  const [search, setSearch] = React.useState("");

  // Search Error meesage
  const [searchVis, setSearchVis] = React.useState("");

  // Sets the vis of the search button
  const [vis, setVis] = React.useState("");

  // Sets vis of the filter
  const [filter, setFilter] = React.useState("");

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus / Browse";
    setVis("go-button-invis");
    setSearchVis("searchErrorInvis");
    setFilter("atoz-invis");
    setBg(`bg${Math.floor(Math.random() * 2) + 1}`);
  }, []);

  // Handles the click of the search button (onClick)
  const clickGo = () => {
    games = [
      { name: "CS:GO", src: "CSGO.png", alt: "CS:GO", link: "CSGO" },
      { name: "Garry's Mod", src: "GMOD.png", alt: "Gmod", link: "Gmod" },
    ];
    games = games.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
    // Forces the page to re-render (updates map)
    setVis("go-button-RENDER");
    // Checks if the returned array is empty
    if (games.length === 0) {
      setSearchVis("searchError");
    } else {
      setSearchVis("searchErrorInvis");
    }
  };

  // Handles the click of the filter button (onClick)
  const setFilterToggle = () => {
    if (filter === "atoz-invis") {
      setFilter("atoz");
    } else {
      setFilter("atoz-invis");
    }
  };

  // Handles the a-to-z filter
  const filteratoz = () => {
    games = games.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    setFilter("atoz-invis");
  };

  // Handles when enter is pressed while the search field is selected (onKeyDown)
  const _handleEnter = (e) => {
    const name = e.target.value;
    if (e.key === "Enter" && name.length > 1) {
      games = [
        { name: "CS:GO", src: "CSGO.png", alt: "CS:GO", link: "CSGO" },
        { name: "Garry's Mod", src: "GMOD.png", alt: "Gmod", link: "Gmod" },
      ];
      games = games.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      );
      // Forces the page to re-render (updates map)
      setVis("go-button-RENDER");
      if (games.length === 0) {
        setSearchVis("searchError");
      } else {
        setSearchVis("searchErrorInvis");
      }
    }
  };

  // Show and hide the search button (onChange)
  const searchChange = (e) => {
    const name = e.target.value;
    setSearch(e.target.value);
    if (name.length < 1) {
      setSearchVis("searchErrorInvis");
      games = [
        { name: "CS:GO", src: "CSGO.png", alt: "CS:GO", link: "CSGO" },
        { name: "Garry's Mod", src: "GMOD.png", alt: "Gmod", link: "Gmod" },
      ];
    } else if (name.length < 2) {
      setVis("go-button-invis");
    } else {
      setVis("go-button");
    }
  };

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push("/Account");
  };

  return (
    <body>
      <Bg img={bg}></Bg>
      <div className="nav-button--notselected">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-button--selected">
        <Link to="//Browse">Browse</Link>
      </div>
      <div className="buttons--wrapper">
        <div className="account-icon--wrapper">
          {user === null ? (
            ""
          ) : (
            <AccountCircleIcon
              onClick={userRedirect}
              sx={{ fontSize: "40px" }}
            ></AccountCircleIcon>
          )}
        </div>
        <Link to="/Log-In">
          <div
            className={
              user === null ? "log-in--button" : "log-in--button---invis"
            }
          >
            Log In
          </div>
        </Link>
        <Link to="/Sign-Up">
          <div
            className={
              user === null ? "sign-up--button" : "sign-up--button---invis"
            }
          >
            Sign Up
          </div>
        </Link>
      </div>
      <div className="browse-title--wrapper">
        <div className="browse-title">Let's get started...</div>
      </div>
      <div className="browse-title--desc">
        First, help us figure out which games you would like to find commands
        for:
      </div>
      <input
        name="name"
        placeholder="Search"
        type="text"
        onKeyDown={_handleEnter}
        onChange={searchChange}
        style={{
          marginTop: "0",
        }}
      ></input>
      <div onClick={clickGo} className={vis}>
        <SearchIcon
          sx={{ fontSize: "50px", marginBottom: "-17px" }}
        ></SearchIcon>
      </div>
      <div onClick={setFilterToggle} className="filter">
        <FilterAltIcon
          sx={{ fontSize: "50px", marginBottom: "-17px" }}
        ></FilterAltIcon>
      </div>
      <div onClick={filteratoz} className={filter}>
        Sort by: A - Z
      </div>
      <div className={searchVis}>
        Whoops! We couldn't find any games that matched your search, did you
        enter the name correctly?
      </div>
      <div className="game-tile--wrapper">
        {games.map((game) => {
          return (
            <Gametile
              name={game.name}
              src={game.src}
              alt={game.alt}
              link={game.link}
            />
          );
        })}
      </div>
    </body>
  );
}

export default App;
