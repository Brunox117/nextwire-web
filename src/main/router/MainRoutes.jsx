import { Navigate, Route, Routes } from "react-router";
import { HomeView } from "../views/HomeView";
import { CatalogView } from "../views/CatalogView";
import { ContactView } from "../views/ContactView";
import { OtherView } from "../views/OtherView";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/catalog" element={<CatalogView />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="/other" element={<OtherView />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
