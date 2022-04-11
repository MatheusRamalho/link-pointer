import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/Routes";

import { Page } from "./components/Page";

import GlobalStyle from './styles/global';

export function App() {
	return (
		<BrowserRouter>
			<Page>
				<GlobalStyle />
				<AppRoutes />
			</Page>
		</BrowserRouter>
	);
}