import { useEffect, useRef } from "react";

export default function Ad() {
  const reference = useRef();

  useEffect(() => {
    reference.current.innerHTML = "";
    const s = document.createElement("script");
    s.id = "_carbonads_js";
    s.src = "//cdn.carbonads.com/carbon.js?serve=CEBIVKQN&placement=csnotesme";
    reference.current.appendChild(s);
  }, []);
  return <div className="flex justify-center my-2" ref={reference} />;
}
