import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import GitListings from "./Pages/GitListings";
import GitUser from "./Pages/GitUser";

function App() {
  const [username, setusername] = useState(null);
  const [profile, setprofile] = useState(null);
  const [repos, setrepos] = useState();
  const [loading, setloading] = useState(false);
  return (
    <div className="App">
      {loading && <Loader />}
      <div className="container">
        {!username && (
          <GitUser
            setusername={setusername}
            setrepos={setrepos}
            setloading={setloading}
            setprofile={setprofile}
          />
        )}
        {repos && profile && (
          <GitListings
            repositories={repos}
            setloading={setloading}
            profile={profile}
            user={username}
            setrepos={setrepos}
          />
        )}
      </div>
    </div>
  );
}

export default App;
