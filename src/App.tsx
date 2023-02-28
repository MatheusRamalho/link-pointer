import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/global';
import { Routers } from "./routers/Routes";
import { Page } from "./components/Page";

export const App = () => {
	return (
		<BrowserRouter>
			<Page>
				<GlobalStyle />
				<Routers />
			</Page>
		</BrowserRouter>
	);
}
