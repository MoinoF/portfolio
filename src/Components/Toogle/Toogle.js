import React from "react";

const Toogle = ({ toogle }) => {
  const [color, setColor] = React.useState(null);

  const circle = "M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z";

  React.useEffect(() => {
    function listenToogle() {
      if (toogle === false) {
        setColor("#e6e6e6");
      }
      if (toogle === true) {
        setColor("#101010");
      }
    }
    listenToogle();
  }, [toogle]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={color}
      viewBox="0 0 16 16"
    >
      <path d={circle} />
    </svg>
  );
};

export default Toogle;
