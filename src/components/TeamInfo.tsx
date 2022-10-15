import { useTeamData } from "../contexts/TeamDataContext";

export default function TeamInfo() {
	const { favTeam, setFavTeam, selectedTeam } = useTeamData();

	// info about selected team and favorite team
	return (
		<div className='fav-team-container'>
			<div className='fav-team'>
				{favTeam.team === undefined ? (
					<p>?</p>
				) : (
					<img src={favTeam.team.logo} alt='fav team' />
				)}
				<div className='fav-team-info'>
					<p>Your favorite team:</p>
					<p>{favTeam.team === undefined ? "NONE" : favTeam.team.name}</p>
				</div>
			</div>
			<div className='pick-fav'>
				<div className='selected-team'>
					{selectedTeam.team === undefined ? (
						<p>?</p>
					) : (
						<img src={selectedTeam.team.logo} alt='selected team' />
					)}
				</div>
				<p>
					{selectedTeam.team === undefined
						? "No team selected"
						: selectedTeam.team.name}
				</p>
				<button onClick={() => setFavTeam(selectedTeam)}>PICK FAVORITE</button>
			</div>
		</div>
	);
}
