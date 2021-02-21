import React from "react";
import Loader from "./Loader";
import duckImg from "../images/duck.jpg";

//TODO
//move to its own file
type Duck = {
  name: string;
  color: string;
  isEvil: boolean;
};

function DuckCounter() {
  const [ducks, setDucks] = React.useState<Duck[]>([]);

  //Delete most of this
  React.useEffect(() => {
    const loadInitialData = () => {
      const newDucks: Duck[] = [1, 2, 3, 4].map((n) => {
        return { name: `duck #${n}`, color: `color #${n}`, isEvil: true };
      });
      setDucks(newDucks);
    };

    setTimeout(loadInitialData, 2000);
  }, []);

  const ducksNode = ducks.map((duck, idx) => {
    return (
      <div key={idx}>
        {duck.name} - {duck.color} & is evil? - {String(duck.isEvil)}
      </div>
    );
  });

  const ducksLoaded = ducks.length !== 0;
  return (
    <div className="App">
      <p>PLENTY OF DUCKS here!</p>
      {ducksLoaded ? (
        <>
          {ducksNode} <img src={duckImg} alt="duck" width={300} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default DuckCounter;
