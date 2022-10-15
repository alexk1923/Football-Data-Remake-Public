import React, { useEffect, useState } from "react";
import { useTeamData } from "../contexts/TeamDataContext";
import { v4 as uuid } from "uuid";
import "aos/dist/aos.css";

export default function Stats() {
	type Fixture = {
		fixture: {
			date: string;
			venue: {
				name: string;
				city: string;
			};
			status: {
				short: string;
			};
		};
		league: {
			name: string;
			logo: string;
			round: string;
		};
		teams: {
			home: {
				name: string;
				logo: string;
			};
			away: {
				name: string;
				logo: string;
			};
		};

		goals: {
			home: number;
			away: number;
		};
	};

	type Standings = {
		league: {
			id: number;
			name: string;
			logo: string;

			standings: TeamInfo[][];
		};
	};

	type LeagueDetailed = {
		league: LeagueInfo;
		country?: {};
		seasons?: {};
	};

	type LeagueInfo = {
		id: number;
		name: string;
		logo: string;
	};

	type TeamInfo = {
		rank: number;
		team: {
			name: string;
			logo: string;
		};
		points: number;
		all: {
			played: number;
			win: number;
			draw: number;
			lose: number;
			goals: {
				for: number;
				against: number;
			};
		};
	};

	const { favTeam } = useTeamData();
	const [fixtures, setFixtures] = useState<Fixture[]>([]);
	const [currentFixture, setCurrentFixture] = useState<Fixture>();
	const [league, setLeague] = useState<LeagueInfo>();
	const [standings, setStandings] = useState<TeamInfo[]>();

	// get the league the favorite team is playing in
	useEffect(() => {
		async function fetchLeagueByTeamID() {
			const res = await fetch(
				`http://localhost:8000/league/${favTeam.team.id}`
			);
			try {
				const leagueDetailed: LeagueDetailed[] = await res.json();
				setLeague(leagueDetailed[0].league);
			} catch (err) {
				console.log(err);
			}
		}
		if (favTeam.team !== undefined) {
			fetchLeagueByTeamID();
		}
	}, [favTeam]);

	// get the standings by league id
	useEffect(() => {
		async function fetchStandings() {
			const res = await fetch(`http://localhost:8000/standings/${league?.id}`);
			try {
				const allStandings: Standings[] = await res.json();
				console.log(allStandings);

				setStandings(allStandings[0].league.standings[0]);
			} catch (err) {
				console.log(err);
			}
		}

		if (favTeam.team !== undefined) {
			fetchStandings();
		}
	}, [favTeam.team, league]);

	// get all fixtures by team id
	useEffect(() => {
		async function fetchFixturesByTeamID() {
			const res = await fetch(
				`http://localhost:8000/fixtures/${favTeam.team.id}`
			);
			try {
				const fixtures: Fixture[] = await res.json();

				// sort fixtures descending
				fixtures.sort((fixt1, fixt2) => {
					const cmp: number =
						Date.parse(fixt2.fixture.date) - Date.parse(fixt1.fixture.date);
					return cmp;
				});
				setFixtures(fixtures);
				setCurrentFixture(
					fixtures.find((fixture) => fixture.fixture.status.short === "FT")
				);
			} catch (err) {
				console.log(err);
			}
		}

		if (favTeam.team !== undefined) {
			fetchFixturesByTeamID();
		}
	}, [favTeam]);

	// get prev fixture
	function handlePrev() {
		const currIdx = fixtures.findIndex((fixture) => fixture === currentFixture);
		setCurrentFixture(fixtures[currIdx + 1]);
	}

	// get next fixture
	function handleNext() {
		const currIdx = fixtures.findIndex((fixture) => fixture === currentFixture);
		setCurrentFixture(fixtures[currIdx - 1]);
	}

	return favTeam.team === undefined ? (
		<div
			data-aos='fade-up'
			style={{ width: "100%", minHeight: "85vh", position: "relative" }}
			id='stats'
		>
			<h2
				style={{
					textAlign: "center",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					fontSize: "5em",
				}}
			>
				Please select a team first to display data !
			</h2>
		</div>
	) : (
		<div data-aos='fade-up' className='stats-container' id='stats'>
			<div className='standings'>
				<div className='league'>
					<img src={league?.logo} alt='league logo' />
					<h2>{league?.name}</h2>
				</div>
				<div className='table'>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Team</th>
								<th>M</th>
								<th>V</th>
								<th>D</th>
								<th>L</th>
								<th>G</th>
								<th>P</th>
							</tr>
						</thead>
						<tbody>
							{standings !== undefined &&
								standings.map((team) => {
									return (
										<React.Fragment key={uuid()}>
											<tr
												style={{
													color:
														team.team.name === favTeam.team.name
															? "var(--intense-green)"
															: "",
												}}
											>
												<td>{team.rank}</td>
												<td>{team.team.name}</td>
												<td>{team.all.played}</td>
												<td>{team.all.win}</td>
												<td>{team.all.draw}</td>
												<td>{team.all.lose}</td>
												<td>
													{team.all.goals.for} : {team.all.goals.against}
												</td>
												<td>{team.points}</td>
											</tr>
										</React.Fragment>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
			<div className='match-container'>
				<h2>LAST MATCH</h2>

				<div className='team'>
					{currentFixture === undefined ? (
						<p>?</p>
					) : (
						<img src={currentFixture.teams.home.logo} alt='home team' />
					)}
					<span>
						{currentFixture === undefined
							? "Home Team"
							: currentFixture?.teams.home.name}
					</span>
					<span id='score'>
						{currentFixture === undefined ||
						currentFixture.fixture.status.short !== "FT"
							? " - "
							: `${currentFixture.goals.home} - ${currentFixture.goals.away}`}
					</span>
					<span>
						{currentFixture === undefined
							? "Away Team"
							: currentFixture?.teams.away.name}
					</span>
					{currentFixture === undefined ? (
						<p>?</p>
					) : (
						<img src={currentFixture.teams.away.logo} alt='away team' />
					)}
				</div>

				<div className='match-info'>
					<div>
						{currentFixture === undefined ? (
							<p>?</p>
						) : (
							<img src={currentFixture.league.logo} alt='league' />
						)}
					</div>
					<span>
						{currentFixture === undefined
							? "League"
							: currentFixture.league.name}
					</span>
					<span>
						{currentFixture === undefined
							? "Stadium"
							: currentFixture.fixture.venue.name}
					</span>
					<span>
						{currentFixture === undefined
							? "Date"
							: currentFixture.fixture.date}
					</span>
				</div>
				<div className='fixtures-nav'>
					{fixtures.findIndex((fixture) => fixture === currentFixture) <
						fixtures.length - 1 && (
						<button onClick={handlePrev}>PREVIOUS</button>
					)}
					{fixtures.findIndex((fixture) => fixture === currentFixture) > 1 && (
						<button onClick={handleNext}>NEXT</button>
					)}
				</div>
			</div>
		</div>
	);
}
