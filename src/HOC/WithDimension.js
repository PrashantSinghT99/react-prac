import { useEffect, useRef, useState } from "react";

const withDimension = (Element) => {
  function WithDimensions(props) {
    const compRef = useRef();
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);
    return <Element ref={compRef} width={width} height={height} {...props} />;
  }
  return WithDimensions;
};

export default withDimension;