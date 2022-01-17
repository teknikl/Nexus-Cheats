import React from "react";
import { initializeApp } from "@firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import "../App.css";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const auth = getAuth(firebaseApp);

export const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [loading, setLoading] = React.useState(true);

  const [currentUser, setCurrentUser] = React.useState({
    currentUser: null,
  });

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUser = (param) => {
    setCurrentUser(param);
  };

  return (
    <AuthContext.Provider value={{ user: currentUser, updateUser }}>
      {loading === true ? (
        <HourglassBottomIcon
          sx={{
            fontSize: "50px",
            display: "block",
            margin: "0 auto",
            marginTop: "22.5%",
            animation: "loading 1s infinite",
          }}
        ></HourglassBottomIcon>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
