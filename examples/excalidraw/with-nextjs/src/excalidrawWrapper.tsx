"use client";
import { Excalidraw } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";
import initialData from "../../initialData";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh"}}>
      <Excalidraw
        initialData={initialData}
      />
    </div>
  );
};

export default ExcalidrawWrapper;
