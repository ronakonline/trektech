import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./ownpage/mainPage";
import "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    // @ts-ignore — tells TypeScript to ignore missing types
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <MainPage />
    </>
  );
}
