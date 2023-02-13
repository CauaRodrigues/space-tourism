import Home from "./Home";
import Technology from "./Technology";
import Crew from "./Crew";
import Destination from "./Destination";
import { Layout } from "../components/Layout";

const HomePage = () => {
	return (
		<Layout>
			<Home />
		</Layout>
	);
};

const TechnologyPage = () => {
	return (
		<Layout>
			<Technology />
		</Layout>
	);
};

const CrewPage = () => {
	return (
		<Layout>
			<Crew />
		</Layout>
	);
};

const DestinationPage = () => {
	return (
		<Layout>
			<Destination />
		</Layout>
	);
};

export { HomePage, CrewPage, TechnologyPage, DestinationPage };
