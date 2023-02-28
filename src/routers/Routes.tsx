import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/Home/Home";
import { LinkPage } from "../pages/Link/Link";
import { NotFound } from "../pages/NotFound/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/link" element={<LinkPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
