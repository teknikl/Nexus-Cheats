import React, { useEffect } from "react";
import { AuthContext } from "../../auth/auth.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Bg from "../../components/background.js";
import IMG from "../../components/img.js";
import "../../App.css";

function App() {
  const data = {
    name: "CSGO",
    link: "CSGO",
    src: "CSGO.png",
    desc: "Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve.",
    bg: "bg1",
  };

  // Calls when page first renders
  useEffect(() => {
    document.title = "Nexus // CS:GO"; // MANUAL CHANGE
  }, []);

  const [stepvis_a, setStepvis_a] = React.useState("hide");
  const [stepvis_b, setStepvis_b] = React.useState("hide");
  const [stepvis_c, setStepvis_c] = React.useState("hide");

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push("/Account");
  };

  const expand_a = () => {
    if (stepvis_a === "hide") {
      setStepvis_a("show");
    } else {
      setStepvis_a("hide");
    }
  };

  const expand_b = () => {
    if (stepvis_b === "hide") {
      setStepvis_b("show");
    } else {
      setStepvis_b("hide");
    }
  };

  const expand_c = () => {
    if (stepvis_c === "hide") {
      setStepvis_c("show");
    } else {
      setStepvis_c("hide");
    }
  };

  return (
    <body>
      <Bg img={data.bg}></Bg>
      <div className="nav-button--notselected">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-button--notselected">
        <Link to="/Browse">Browse</Link>
      </div>
      <div className="nav-button--arrow">❯</div>
      <div className="nav-button--selected">
        <Link to={`${data.link}`}>{data.name}</Link>
      </div>
      <div className="buttons--wrapper">
        <div className="account-icon--wrapper">
          {user === null ? (
            ""
          ) : (
            <AccountCircleIcon
              onClick={userRedirect}
              sx={{ fontSize: "40px", zIndex: "1" }}
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
      <div className="game--name">{data.name}</div>
      <div className="game--desc">{data.desc}</div>

      <div className="section---wrapper">
        <div className="section--num">1.⠀</div>
        <div className="section">General</div>
        <div className="section--expand" onClick={expand_a}>
          {stepvis_a === "hide" ? (
            <RemoveIcon></RemoveIcon>
          ) : (
            <AddIcon></AddIcon>
          )}
        </div>
      </div>
      <div className={stepvis_a}>
        <div className="step">
          First, select Counter Strike : Global Offensive in your games list.
        </div>
        <IMG game={data.name} img="1" width="382px" height="56px"></IMG>
        <div className="step">
          Next, on the right hand side of your screen, select the gear icon, and
          then select "Properties...".
        </div>
        <IMG game={data.name} img="2" width="298px" height="191px"></IMG>
        <div className="step">
          The properties tab should now be open. Once so, make sure the
          "General" tab is selected. Then, go to the launch options. The
          commands put into the text field will run straight away.
        </div>
        <IMG game={data.name} img="3" width="810px" height="580px"></IMG>
      </div>
      <div className="section---wrapper">
        <div className="section--num">2.⠀</div>
        <div className="section">Launch Options</div>
        <div className="section--expand" onClick={expand_b}>
          {stepvis_b === "hide" ? (
            <RemoveIcon></RemoveIcon>
          ) : (
            <AddIcon></AddIcon>
          )}
        </div>
      </div>
      <div className={stepvis_b}>
        <div className="step">
          For launch options each command should either start with a "+" or a
          "-". Each command should also be seperated by a space. e.g "-novid
          +fps_max 60".
        </div>
        <div className="step">
          If you have a low end pc, or laptop, that has a risk of overheating,
          we reccomend that you set the fps limit at either 60 or 120. Both are
          reasonably high frame rates, that have little impact on the heat of
          your device. To do this do:
          <br />
          <br />
          <div className="code-block">+fps_max number</div>
          Replace "number" with your choice of fps.
        </div>
        <div className="step">
          <div className="code-block">+cl_showfps 1</div>
          This allows you to see your fps and monitor your pc's performance
          activley.
        </div>
        <div className="step">
          <div className="code-block">-novid</div>
          Stops the intro video from automatically playing.
        </div>
        <div className="step">
          <div className="code-block">-high</div>
          Makes the game a priority on your system. The is low risk, but if you
          are experiencing blue screens, we reccomend you disable this feature.
        </div>
        <div className="step">
          <div className="code-block">-fullscreen</div>
          Launches the game in fullscreen mode. This automatically sets the game
          as a priority for your system, significantly reducing input latency.
        </div>
      </div>
      <div className="section---wrapper">
        <div className="section--num">3.⠀</div>
        <div className="section">Maps</div>
        <div className="section--expand" onClick={expand_c}>
          {stepvis_c === "hide" ? (
            <RemoveIcon></RemoveIcon>
          ) : (
            <AddIcon></AddIcon>
          )}
        </div>
      </div>
      <div className={stepvis_c}>
        <div className="step">
          A map that we, the community, and everyone highly reccomends is crashz
          and Misterio's config generator. This map provides great configs for
          fps, and from the pro's. For the presets we reccomend selecting the
          fps booster.
        </div>
        <IMG game={data.name} img="4" width="942px" height="573px"></IMG>
      </div>
    </body>
  );
}

export default App;
