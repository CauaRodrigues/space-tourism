export interface DestinyTypes {
	name: string;
	imageUrl: string;
	description: string;
	distance: string;
	travel: string;
}

export interface CrewTypes {
	nameID: string;
	name: string;
	imageUrl: string;
	bio: string;
	role: string;
}

export interface TechTypes {
	nameId: string;
	name: string;
	imagesUrl: {
		portrait: string;
		landscape: string;
	};
	description: string;
}
