import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const ActiveTab = (props) => {
  const { linkTab, children } = props;
  const { pathname } = useLocation();

  const backgroundColor = useMemo(() => {
    const isMatch = pathname === linkTab;
    return isMatch ? "#E8E8E8" : "transparent";
  }, [linkTab, pathname]);

  return (
    <>
      <div style={{ backgroundColor: backgroundColor }}>{children}</div>
    </>
  );
};

export default ActiveTab;
