import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { TeamInfoType } from "../contexts/TeamDataContext";
import { useTeamData } from "../contexts/TeamDataContext";
import globe from "../img/globe.svg";

export default function TeamSearch() {
	type CountryInfoType = {
		name: string;
		code: string;
		flag: string;
	};

	const [countries, setCountries] = useState<CountryInfoType[]>([]);
	const [countryFlag, setCountryFlag] = useState(globe);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [searchedTeam, setSearchedTeam] = useState("");
	const [teams, setTeams] = useState<TeamInfoType[]>([]);
	const { setSelectedTeam } = useTeamData();

	// get teams from selected country
	useEffect(() => {
		async function fetchTeamsFromCountry() {
			const res = await fetch(`http://localhost:8000/teams/${selectedCountry}`);
			try {
				const teams: TeamInfoType[] = await res.json();
				setTeams(teams);
			} catch (err) {
				console.log(err);
			}
		}

		if (selectedCountry !== "") {
			fetchTeamsFromCountry();
		}
	}, [selectedCountry]);

	// get all countries from the API
	useEffect(() => {
		async function fetchCountries() {
			const res = await fetch("http://localhost:8000/countries");

			try {
				const countries: CountryInfoType[] = await res.json();
				setCountries(countries);
			} catch (err) {
				console.log(err);
			}
		}

		fetchCountries();
	}, []);

	// filter teams found by search input value
	function filterTeams() {
		const filteredTeams = teams.filter(
			(team) =>
				team.team.name.toLowerCase().indexOf(searchedTeam.toLowerCase()) >= 0
		);
		return filteredTeams.sort(
			(team1, team2) =>
				team1.team.name.toLowerCase().indexOf(searchedTeam.toLowerCase()) -
				team2.team.name.toLowerCase().indexOf(searchedTeam.toLowerCase())
		);
	}

	return (
		<div className='search-container'>
			<div className='search-inputs'>
				<div className='country-select'>
					<img src={countryFlag} alt='flag' />
					<select
						value={selectedCountry}
						onChange={(e) => {
							const newCountry = countries?.find(
								(country) => country.name === e.target.value
							);
							if (newCountry) {
								setCountryFlag(newCountry.flag);
								setSelectedCountry(newCountry.name);
							}
						}}
					>
						<option>Choose a country</option>
						{countries?.map((country) => (
							<option key={uuid()}>{country.name}</option>
						))}
					</select>
				</div>
				<input
					type='search'
					value={searchedTeam}
					onChange={(e) => {
						setSearchedTeam(e.target.value);
					}}
					placeholder='Enter your team name...'
				></input>
			</div>
			<div className='team-select'>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Logo</th>
							<th>Team Name</th>
							<th>City</th>
							<th>Stadium</th>
						</tr>
					</thead>
					<tbody>
						{filterTeams()
							.slice(0, 15)
							.map((team) => {
								return (
									<React.Fragment key={uuid()}>
										<tr onClick={() => setSelectedTeam(team)}>
											<td>{team.team.id}</td>
											<td>
												<img src={team.team.logo} alt='team logo' />
											</td>
											<td>{team.team.name}</td>
											<td>{team.venue.city}</td>
											<td>{team.venue.name}</td>
										</tr>
									</React.Fragment>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
