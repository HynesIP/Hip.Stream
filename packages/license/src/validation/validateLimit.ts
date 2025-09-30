import type { LicenseLimitKind, LimitContext } from '@rocket.chat/core-typings';

// FOSS stub - no limit validation
export function validateWarnLimit<T extends LicenseLimitKind>(
	_limitName: T,
	_context?: Partial<LimitContext<T>>,
): { shouldWarn: boolean; limit: number; currentValue: number } {
	return {
		shouldWarn: false,
		limit: Infinity,
		currentValue: 0,
	};
}
