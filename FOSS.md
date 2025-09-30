# Hip.Stream FOSS Build

This repository has been converted to a Free and Open Source Software (FOSS) build, removing all enterprise/paywall features from the original Rocket.Chat codebase.

## Changes Made

### 1. Removed Enterprise Edition Code
- Deleted the entire `ee/` directory containing all enterprise packages and applications
- Deleted `apps/meteor/ee/` directory containing enterprise Meteor code
- Removed the `fossify` script (no longer needed)

### 2. Created FOSS Stubs
To maintain compatibility with the existing codebase that references enterprise features, we created stub implementations:

#### License Package (`packages/license/`)
A new FOSS license package that replaces `@rocket.chat/license` with stub implementations:
- All `hasModule()` calls return `false` (no enterprise modules)
- All `shouldPreventAction()` calls return `false` (no restrictions)
- All `isLimitReached()` calls return `false` (no limits)
- License validation is a no-op

#### EE Module Stubs
Created minimal stub implementations for required enterprise modules:
- `apps/meteor/ee/app/api-enterprise/server/middlewares/license.ts` - License middleware (no-op)
- `apps/meteor/ee/lib/misc/Utilities.ts` - Utility functions
- `apps/meteor/ee/lib/misc/determineFileType.ts` - File type determination
- `apps/meteor/ee/app/livechat-enterprise/server/lib/Helper.ts` - Livechat helpers
- `apps/meteor/ee/server/` - Server startup stubs

### 3. Updated Configuration
- Modified `package.json` to remove enterprise workspace paths
- Updated repository information to Hip.Stream
- Renamed project from "rocket.chat" to "hip.stream"
- Updated version to "7.10.0-foss"

### 4. Updated UI
- Simplified the subscription page (`apps/meteor/client/views/admin/subscription/SubscriptionPage.tsx`)
- Shows "FOSS Build" message instead of subscription/license information
- Indicates all features are unlocked without restrictions

### 5. Updated Documentation
- Added FOSS build notice to README.md
- Updated repository links to HynesIP/Hip.Stream

## What This Means

### Features Available
All features are available without restrictions:
- ✅ Unlimited users
- ✅ Unlimited apps
- ✅ All Omnichannel features
- ✅ No license checks or validations
- ✅ No seat limits
- ✅ No subscription required

### Removed Features
The following enterprise-specific code has been removed:
- Enterprise license validation system
- Subscription management
- Seat counting and limits
- Enterprise-only APIs and services
- Premium app restrictions
- Cloud integration for licensing

## License

This FOSS build is distributed under the MIT License, as per the original Rocket.Chat Community Edition license. See the [LICENSE](LICENSE) file for details.

## Building

To build this FOSS version:

```bash
yarn install
yarn build
```

Note: You may need Node.js 22.16.0 as specified in package.json.

## Differences from Rocket.Chat

This is a fork of Rocket.Chat with:
1. All enterprise/paywall features removed
2. All license restrictions removed
3. Simplified to be purely FOSS without any premium tiers
4. Rebranded as Hip.Stream

## Contributing

This is an independent FOSS project. Contributions are welcome following standard open source practices.
