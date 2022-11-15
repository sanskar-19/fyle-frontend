import { ReactComponent as SpinningLoader } from "./Loader.svg";
const Loader = () => {
  return (
    <>
      <div className="loader">
        <SpinningLoader />
        <p>Hang On! Prepping the Repos...</p>
      </div>
    </>
  );
};

export default Loader;
