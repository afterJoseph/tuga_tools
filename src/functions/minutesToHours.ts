export function minutesToHours(min: number): { hours: string; minutes: string } {
	const initialHours = min / 60;
	const hours = Math.floor(initialHours);
	const minutes = Math.round((initialHours - hours) * 60);
	return { hours: hours.toString(), minutes: minutes.toString() };
}
