import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WACompanionReg {

    interface IDeviceProps {
        os?: (string|null);
        version?: (WACompanionReg.DeviceProps.IAppVersion|null);
        platformType?: (WACompanionReg.DeviceProps.PlatformType|null);
        requireFullSync?: (boolean|null);
        historySyncConfig?: (WACompanionReg.DeviceProps.IHistorySyncConfig|null);
    }

    class DeviceProps implements IDeviceProps {
        constructor(p?: WACompanionReg.IDeviceProps);
        public os?: (string|null);
        public version?: (WACompanionReg.DeviceProps.IAppVersion|null);
        public platformType?: (WACompanionReg.DeviceProps.PlatformType|null);
        public requireFullSync?: (boolean|null);
        public historySyncConfig?: (WACompanionReg.DeviceProps.IHistorySyncConfig|null);
        public static create(properties?: WACompanionReg.IDeviceProps): WACompanionReg.DeviceProps;
        public static encode(m: WACompanionReg.IDeviceProps, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.DeviceProps;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.DeviceProps;
        public static toObject(m: WACompanionReg.DeviceProps, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DeviceProps {

        enum PlatformType {
            UNKNOWN = 0,
            CHROME = 1,
            FIREFOX = 2,
            IE = 3,
            OPERA = 4,
            SAFARI = 5,
            EDGE = 6,
            DESKTOP = 7,
            IPAD = 8,
            ANDROID_TABLET = 9,
            OHANA = 10,
            ALOHA = 11,
            CATALINA = 12,
            TCL_TV = 13,
            IOS_PHONE = 14,
            IOS_CATALYST = 15,
            ANDROID_PHONE = 16,
            ANDROID_AMBIGUOUS = 17,
            WEAR_OS = 18,
            AR_WRIST = 19,
            AR_DEVICE = 20,
            UWP = 21,
            VR = 22,
            CLOUD_API = 23,
            SMARTGLASSES = 24
        }

        interface IHistorySyncConfig {
            fullSyncDaysLimit?: (number|null);
            fullSyncSizeMbLimit?: (number|null);
            storageQuotaMb?: (number|null);
            inlineInitialPayloadInE2EeMsg?: (boolean|null);
            recentSyncDaysLimit?: (number|null);
            supportCallLogHistory?: (boolean|null);
            supportBotUserAgentChatHistory?: (boolean|null);
            supportCagReactionsAndPolls?: (boolean|null);
            supportBizHostedMsg?: (boolean|null);
            supportRecentSyncChunkMessageCountTuning?: (boolean|null);
            supportHostedGroupMsg?: (boolean|null);
            supportFbidBotChatHistory?: (boolean|null);
            supportAddOnHistorySyncMigration?: (boolean|null);
            supportMessageAssociation?: (boolean|null);
            supportGroupHistory?: (boolean|null);
            onDemandReady?: (boolean|null);
            supportGuestChat?: (boolean|null);
            completeOnDemandReady?: (boolean|null);
            thumbnailSyncDaysLimit?: (number|null);
            initialSyncMaxMessagesPerChat?: (number|null);
            supportManusHistory?: (boolean|null);
            supportHatchHistory?: (boolean|null);
            supportedBotChannelFbids?: (string[]|null);
            supportInlineContacts?: (boolean|null);
        }

        class HistorySyncConfig implements IHistorySyncConfig {
            constructor(p?: WACompanionReg.DeviceProps.IHistorySyncConfig);
            public fullSyncDaysLimit?: (number|null);
            public fullSyncSizeMbLimit?: (number|null);
            public storageQuotaMb?: (number|null);
            public inlineInitialPayloadInE2EeMsg?: (boolean|null);
            public recentSyncDaysLimit?: (number|null);
            public supportCallLogHistory?: (boolean|null);
            public supportBotUserAgentChatHistory?: (boolean|null);
            public supportCagReactionsAndPolls?: (boolean|null);
            public supportBizHostedMsg?: (boolean|null);
            public supportRecentSyncChunkMessageCountTuning?: (boolean|null);
            public supportHostedGroupMsg?: (boolean|null);
            public supportFbidBotChatHistory?: (boolean|null);
            public supportAddOnHistorySyncMigration?: (boolean|null);
            public supportMessageAssociation?: (boolean|null);
            public supportGroupHistory?: (boolean|null);
            public onDemandReady?: (boolean|null);
            public supportGuestChat?: (boolean|null);
            public completeOnDemandReady?: (boolean|null);
            public thumbnailSyncDaysLimit?: (number|null);
            public initialSyncMaxMessagesPerChat?: (number|null);
            public supportManusHistory?: (boolean|null);
            public supportHatchHistory?: (boolean|null);
            public supportedBotChannelFbids: string[];
            public supportInlineContacts?: (boolean|null);
            public static create(properties?: WACompanionReg.DeviceProps.IHistorySyncConfig): WACompanionReg.DeviceProps.HistorySyncConfig;
            public static encode(m: WACompanionReg.DeviceProps.IHistorySyncConfig, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.DeviceProps.HistorySyncConfig;
            public static fromObject(d: { [k: string]: any }): WACompanionReg.DeviceProps.HistorySyncConfig;
            public static toObject(m: WACompanionReg.DeviceProps.HistorySyncConfig, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IAppVersion {
            primary?: (number|null);
            secondary?: (number|null);
            tertiary?: (number|null);
            quaternary?: (number|null);
            quinary?: (number|null);
        }

        class AppVersion implements IAppVersion {
            constructor(p?: WACompanionReg.DeviceProps.IAppVersion);
            public primary?: (number|null);
            public secondary?: (number|null);
            public tertiary?: (number|null);
            public quaternary?: (number|null);
            public quinary?: (number|null);
            public static create(properties?: WACompanionReg.DeviceProps.IAppVersion): WACompanionReg.DeviceProps.AppVersion;
            public static encode(m: WACompanionReg.DeviceProps.IAppVersion, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.DeviceProps.AppVersion;
            public static fromObject(d: { [k: string]: any }): WACompanionReg.DeviceProps.AppVersion;
            public static toObject(m: WACompanionReg.DeviceProps.AppVersion, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface ICompanionEphemeralIdentity {
        publicKey?: (Uint8Array|null);
        deviceType?: (WACompanionReg.DeviceProps.PlatformType|null);
        ref?: (string|null);
    }

    class CompanionEphemeralIdentity implements ICompanionEphemeralIdentity {
        constructor(p?: WACompanionReg.ICompanionEphemeralIdentity);
        public publicKey?: (Uint8Array|null);
        public deviceType?: (WACompanionReg.DeviceProps.PlatformType|null);
        public ref?: (string|null);
        public static create(properties?: WACompanionReg.ICompanionEphemeralIdentity): WACompanionReg.CompanionEphemeralIdentity;
        public static encode(m: WACompanionReg.ICompanionEphemeralIdentity, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.CompanionEphemeralIdentity;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.CompanionEphemeralIdentity;
        public static toObject(m: WACompanionReg.CompanionEphemeralIdentity, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICompanionCommitment {
        hash?: (Uint8Array|null);
    }

    class CompanionCommitment implements ICompanionCommitment {
        constructor(p?: WACompanionReg.ICompanionCommitment);
        public hash?: (Uint8Array|null);
        public static create(properties?: WACompanionReg.ICompanionCommitment): WACompanionReg.CompanionCommitment;
        public static encode(m: WACompanionReg.ICompanionCommitment, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.CompanionCommitment;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.CompanionCommitment;
        public static toObject(m: WACompanionReg.CompanionCommitment, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IProloguePayload {
        companionEphemeralIdentity?: (Uint8Array|null);
        commitment?: (WACompanionReg.ICompanionCommitment|null);
    }

    class ProloguePayload implements IProloguePayload {
        constructor(p?: WACompanionReg.IProloguePayload);
        public companionEphemeralIdentity?: (Uint8Array|null);
        public commitment?: (WACompanionReg.ICompanionCommitment|null);
        public static create(properties?: WACompanionReg.IProloguePayload): WACompanionReg.ProloguePayload;
        public static encode(m: WACompanionReg.IProloguePayload, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.ProloguePayload;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.ProloguePayload;
        public static toObject(m: WACompanionReg.ProloguePayload, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPrimaryEphemeralIdentity {
        publicKey?: (Uint8Array|null);
        nonce?: (Uint8Array|null);
    }

    class PrimaryEphemeralIdentity implements IPrimaryEphemeralIdentity {
        constructor(p?: WACompanionReg.IPrimaryEphemeralIdentity);
        public publicKey?: (Uint8Array|null);
        public nonce?: (Uint8Array|null);
        public static create(properties?: WACompanionReg.IPrimaryEphemeralIdentity): WACompanionReg.PrimaryEphemeralIdentity;
        public static encode(m: WACompanionReg.IPrimaryEphemeralIdentity, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.PrimaryEphemeralIdentity;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.PrimaryEphemeralIdentity;
        public static toObject(m: WACompanionReg.PrimaryEphemeralIdentity, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPairingRequest {
        companionPublicKey?: (Uint8Array|null);
        companionIdentityKey?: (Uint8Array|null);
        advSecret?: (Uint8Array|null);
    }

    class PairingRequest implements IPairingRequest {
        constructor(p?: WACompanionReg.IPairingRequest);
        public companionPublicKey?: (Uint8Array|null);
        public companionIdentityKey?: (Uint8Array|null);
        public advSecret?: (Uint8Array|null);
        public static create(properties?: WACompanionReg.IPairingRequest): WACompanionReg.PairingRequest;
        public static encode(m: WACompanionReg.IPairingRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.PairingRequest;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.PairingRequest;
        public static toObject(m: WACompanionReg.PairingRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEncryptedPairingRequest {
        encryptedPayload?: (Uint8Array|null);
        IV?: (Uint8Array|null);
    }

    class EncryptedPairingRequest implements IEncryptedPairingRequest {
        constructor(p?: WACompanionReg.IEncryptedPairingRequest);
        public encryptedPayload?: (Uint8Array|null);
        public IV?: (Uint8Array|null);
        public static create(properties?: WACompanionReg.IEncryptedPairingRequest): WACompanionReg.EncryptedPairingRequest;
        public static encode(m: WACompanionReg.IEncryptedPairingRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.EncryptedPairingRequest;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.EncryptedPairingRequest;
        public static toObject(m: WACompanionReg.EncryptedPairingRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IClientPairingProps {
        isChatDbLidMigrated?: (boolean|null);
        isSyncdPureLidSession?: (boolean|null);
        isSyncdSnapshotRecoveryEnabled?: (boolean|null);
        isHsThumbnailSyncEnabled?: (boolean|null);
        subscriptionSyncPayload?: (Uint8Array|null);
    }

    class ClientPairingProps implements IClientPairingProps {
        constructor(p?: WACompanionReg.IClientPairingProps);
        public isChatDbLidMigrated?: (boolean|null);
        public isSyncdPureLidSession?: (boolean|null);
        public isSyncdSnapshotRecoveryEnabled?: (boolean|null);
        public isHsThumbnailSyncEnabled?: (boolean|null);
        public subscriptionSyncPayload?: (Uint8Array|null);
        public static create(properties?: WACompanionReg.IClientPairingProps): WACompanionReg.ClientPairingProps;
        public static encode(m: WACompanionReg.IClientPairingProps, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACompanionReg.ClientPairingProps;
        public static fromObject(d: { [k: string]: any }): WACompanionReg.ClientPairingProps;
        public static toObject(m: WACompanionReg.ClientPairingProps, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

