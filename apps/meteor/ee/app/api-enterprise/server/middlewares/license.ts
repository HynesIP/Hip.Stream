// FOSS stub - no license middleware
export const license = () => {
	return (_req: any, _res: any, next: () => void) => {
		next();
	};
};
