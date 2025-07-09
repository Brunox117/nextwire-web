import { Route, Routes } from "react-router";
import { MainPage } from "../main/pages/MainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};
