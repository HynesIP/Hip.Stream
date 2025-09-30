import type { ILicenseTag, LicenseModule, ILicenseV3, LicenseLimitKind, LimitContext } from '@rocket.chat/core-typings';
import { Emitter } from '@rocket.chat/emitter';

// FOSS stub implementation - no license checks, everything is allowed

class LicenseStub extends Emitter {
	hasModule(_moduleName: LicenseModule): boolean {
		return false; // No enterprise modules in FOSS
	}

	getModules(): LicenseModule[] {
		return [];
	}

	getTags(): ILicenseTag[] {
		return [];
	}

	hasValidLicense(): boolean {
		return false;
	}

	getLicense(): ILicenseV3 | undefined {
		return undefined;
	}

	async shouldPreventAction<T extends LicenseLimitKind>(
		_action: T,
		_extraCount = 0,
		_context: Partial<LimitContext<T>> = {},
	): Promise<boolean> {
		return false; // Never prevent actions in FOSS
	}

	async isLimitReached<T extends LicenseLimitKind>(_action: T, _context?: Partial<LimitContext<T>>): Promise<boolean> {
		return false; // No limits in FOSS
	}

	onValidateLicense(fn: () => void): () => void {
		// No-op in FOSS
		return () => {};
	}

	onInvalidateLicense(fn: () => void): () => void {
		// No-op in FOSS
		return () => {};
	}

	onValidFeature(fn: (feature: LicenseModule) => void): () => void {
		// No-op in FOSS
		return () => {};
	}

	onLimitReached(fn: (limit: LicenseLimitKind) => void): () => void {
		// No-op in FOSS
		return () => {};
	}

	isPending(): boolean {
		return false;
	}

	getGuestPermissions(): string[] {
		return [];
	}
}

export const License = new LicenseStub();

export class DuplicatedLicenseError extends Error {
	constructor(message: string = 'Duplicated license') {
		super(message);
		this.name = 'DuplicatedLicenseError';
	}
}

export class AirGappedRestriction {
	static isAirGappedRestrictionEnabled(): boolean {
		return false;
	}
}

export async function applyLicense(_license: string): Promise<boolean> {
	// No-op in FOSS
	return false;
}

export type { LicenseImp };
export type LicenseImp = LicenseStub;
