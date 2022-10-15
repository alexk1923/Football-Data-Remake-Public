import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Standings from "./components/TeamStats";
import TeamInfo from "./components/TeamInfo";
import TeamDataProvider from "./contexts/TeamDataContext";
import LandingPage from "./components/LandingPage";
import TeamSearch from "./components/TeamSearch";
import TeamContainer from "./components/TeamContainer";

function App() {
	return (
		<TeamDataProvider>
			<Navbar />
			<LandingPage />
			<TeamContainer>
				<TeamSearch />
				<TeamInfo />
			</TeamContainer>
			<Standings />
			<Footer />
		</TeamDataProvider>
	);
}

export default App;
