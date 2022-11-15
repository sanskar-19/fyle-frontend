import { useEffect, useState } from "react";
import { GetAllRepositories } from "../Utility/Utility";
const Pagination = ({ setrepos, setloading, user }) => {
  const [page, setpage] = useState(1);
  useEffect(() => {
    const get_repos = async () => {
      setloading(true);
      let response_getrepos = await GetAllRepositories(user, page);
      if (response_getrepos[0] === 200) {
        if (response_getrepos[1].data.length == 0) {
          alert("That's all! No more repos!");
          setpage(1);
        }
        setrepos(response_getrepos[1].data);
        setloading(false);
      } else {
        setloading(false);
      }
    };
    get_repos();
  }, [page]);
  return (
    <>
      <div className="pagination-container">
        <div className="pagination-navs">
          <button
            onClick={() => {
              console.log(page);
              setpage(page - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              console.log(page);
              setpage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
