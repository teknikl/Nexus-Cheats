import { useHistory } from "react-router-dom";
import React from "react";

export default function ScrollToTop() {
  const history = useHistory();
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
