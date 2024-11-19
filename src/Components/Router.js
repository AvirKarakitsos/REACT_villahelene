import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Accommodation from '../pages/Accommodation';
import Error from '../pages/Error';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/accommodation/:id" element={<Accommodation/>} />
				<Route path="/*" element={<Error/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;