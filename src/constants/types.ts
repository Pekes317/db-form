export interface HelloWorldData {
	id?: number;
	text?: string;
	message?: string;
}

export type HelloWorldState = HelloWorldData[];

export interface FormInput {
	type: string;
	name: string;
	value: string;
	label: string;
}