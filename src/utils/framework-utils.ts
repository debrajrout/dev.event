export const frameworks = [
	"react",
	"chrome",
	"qwik",
	"mobile",
	"tailwind",
	"desktop",
	"vue",
	"safari",
	"sevelte",
] as const;

export type Framework = (typeof frameworks)[number];
