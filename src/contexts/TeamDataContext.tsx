import React, { createContext, useContext, useState } from "react";

type TeamDataProps = {
	children: React.ReactNode;
};

// store favorite team
type ContextValue = {
	favTeam: TeamInfoType;
	selectedTeam: TeamInfoType;
	setFavTeam: React.Dispatch<React.SetStateAction<TeamInfoType>>;
	setSelectedTeam: React.Dispatch<React.SetStateAction<TeamInfoType>>;
};

export type TeamInfoType = {
	team: {
		id: number;
		name: string;
		code: string;
		country: string;
		founded: number;
		national: boolean;
		logo: string;
	};
	venue: {
		id: number;
		name: string;
		address: string;
		city: string;
		capacity: number;
		surface: string;
		image: string;
	};
};

const TeamDataContext = createContext<ContextValue>({
	favTeam: {} as TeamInfoType,
	selectedTeam: {} as TeamInfoType,
	setFavTeam: () => {},
	setSelectedTeam: () => {},
});

export function useTeamData() {
	return useContext(TeamDataContext);
}

export default function TeamDataProvider({ children }: TeamDataProps) {
	const [favTeam, setFavTeam] = useState({} as TeamInfoType);
	const [selectedTeam, setSelectedTeam] = useState({} as TeamInfoType);

	return (
		<TeamDataContext.Provider
			value={{ favTeam, setFavTeam, selectedTeam, setSelectedTeam }}
		>
			{children}
		</TeamDataContext.Provider>
	);
}
