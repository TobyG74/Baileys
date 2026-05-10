import { WAAdv } from './WAAdv.js';
import { WAAICommon } from './WAAICommon.js';
import { WAAICommonDeprecated } from './WAAICommonDeprecated.js';
import { WACert } from './WACert.js';
import { WAChatLockSettings } from './WAChatLockSettings.js';
import { WACommon } from './WACommon.js';
import { WACompanionReg } from './WACompanionReg.js';
import { WADeviceCapabilities } from './WADeviceCapabilities.js';
import { WAE2E } from './WAE2E.js';
import { WAEphemeral } from './WAEphemeral.js';
import { WAHistorySync } from './WAHistorySync.js';
import { WALidMigrationSyncPayload } from './WALidMigrationSyncPayload.js';
import { WAMdStorageAccountLinkingOpaqueData } from './WAMdStorageAccountLinkingOpaqueData.js';
import { WAMdStorageChatRowOpaqueData } from './WAMdStorageChatRowOpaqueData.js';
import { WAMdStorageMsgRowOpaqueData } from './WAMdStorageMsgRowOpaqueData.js';
import { WAMmsRetry } from './WAMmsRetry.js';
import { WAQuickPromotionSurfaces } from './WAQuickPromotionSurfaces.js';
import { WAReporting } from './WAReporting.js';
import { WAServerSync } from './WAServerSync.js';
import { WASignalLocalStorageProtocol } from './WASignalLocalStorageProtocol.js';
import { WASignalWhisperTextProtocol } from './WASignalWhisperTextProtocol.js';
import { WAStatusAttributions } from './WAStatusAttributions.js';
import { WASyncAction } from './WASyncAction.js';
import { WAUserPassword } from './WAUserPassword.js';
import { WAVnameCert } from './WAVnameCert.js';
import { WAWa6 } from './WAWa6.js';
import { WAWeb } from './WAWeb.js';

export const proto = {
	...WAAdv,
	...WAAICommon,
	...WAAICommonDeprecated,
	...WACert,
	...WAChatLockSettings,
	...WACommon,
	...WACompanionReg,
	...WADeviceCapabilities,
	...WAE2E,
	...WAEphemeral,
	...WAHistorySync,
	...WALidMigrationSyncPayload,
	...WAMdStorageAccountLinkingOpaqueData,
	...WAMdStorageChatRowOpaqueData,
	...WAMdStorageMsgRowOpaqueData,
	...WAMmsRetry,
	...WAQuickPromotionSurfaces,
	...WAReporting,
	...WAServerSync,
	...WASignalLocalStorageProtocol,
	...WASignalWhisperTextProtocol,
	...WAStatusAttributions,
	...WASyncAction,
	...WAUserPassword,
	...WAVnameCert,
	...WAWa6,
	...WAWeb,
}

// Assign WAE2E sub-types to proto.Message for backward compatibility.
if (proto.Message) {
	for (const key of Object.keys(WAE2E)) {
		if (key !== 'Message') {
			proto.Message[key] = WAE2E[key];
		}
	}
}