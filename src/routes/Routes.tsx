import { Route, Routes } from "react-router-dom";

// PAGES...
import { Home } from "../pages/Home/Home";
import { LinkPage } from "../pages/Link/Link";
import { NotFound } from "../pages/NotFound/NotFound";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/link" element={<LinkPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}