import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
	useRoutes,
	useLocation,
	Link,
	NavLink,
	useParams,
	Outlet,
} from "react-router-dom";
import Contact from "./Contact";
import ContactMenu from "./ContactMenu";

function App() {
	const Homepage = () => <h1>Homepage</h1>;
	const NewContact = () => <h1>NewContact</h1>;
	const Error = () => <h1>Error Page check it out </h1>;

	const About = () => <h1>About</h1>;
	// Another way using hooks useRoutes
	// let element = useRoutes([
	// 	{
	// 		path: "/",
	// 		element: (
	// 			// Navigation bar
	// 			<div>
	// 				<NavLink
	// 					style={({ isActive }) => {
	// 						return isActive && { color: "red" };
	// 					}}
	// 					to="/about">
	// 					about
	// 				</NavLink>
	// 				<br />
	// 				<NavLink to="/contact">Contact</NavLink>
	// 				<br />
	// 				{/*  Replace could be helpful for login page */}
	// 				<Link
	// 					to="/contact/new"
	// 					replace>
	// 					new contact
	// 				</Link>
	// 				<br /> <Outlet />
	// 			</div>
	// 		),
	// 		children: [
	// 			{
	// 				index: true,
	// 				element: <Homepage />,
	// 			},
	// 			{
	// 				index: true,
	// 				element: <Homepage />,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		path: "/contact",
	// 		element: <ContactMenu />,
	// 		children: [
	// 			{
	// 				index: true,
	// 				element: <Contact />,
	// 			},
	// 			{
	// 				path: ":id",
	// 				element: <Contact />,
	// 			},

	// 			{
	// 				path: "new",
	// 				element: <NewContact />,
	// 			},
	// 		],
	// 	},
	// 	{
	// 		path: "/about",
	// 		element: <About />,
	// 	},
	// 	{
	// 		path: "*",
	// 		element: <Error />,
	// 	},
	// ]);
	// return element;
	return (
		<div className="App">
			<ul>
				<li>
					{/* <NavLink
						style={({ isActive }) => {
							return isActive && { color: "red" };
						}}
						to="/">
						Homepage
					</NavLink> */}
					<Link to="/">Homepage</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>

			<Routes>
				<Route
					path="/"
					element={<Homepage />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<ContactMenu />}>
					<Route
						index
						element={<Contact />}></Route>
					<Route
						path=":id"
						element={<Contact />}></Route>
					<Route
						path="new"
						element={<NewContact />}></Route>
				</Route>

				{/*
	    <Route path="/contact" element={<Contact />} />
	    <Route
				path="/contact/:id"
				element={<Contact />}
			/>
			<Route
				path="/contact/new"
				element={<NewContact />}
			/> */}
				<Route
					path="/*"
					element={<Error />}
				/>

				{/* <Route
					index
					element={<Contact />}
				/>
				<Route
					path="/:id"
					element={<Contact />}
				/>  */}
				{/* </Route> */}
			</Routes>
		</div>
	);
}

export default App;
