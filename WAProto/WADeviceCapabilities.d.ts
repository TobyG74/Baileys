import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WADeviceCapabilities {

    interface IDeviceCapabilities {
        chatLockSupportLevel?: (WADeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null);
        lidMigration?: (WADeviceCapabilities.DeviceCapabilities.ILIDMigration|null);
        businessBroadcast?: (WADeviceCapabilities.DeviceCapabilities.IBusinessBroadcast|null);
        userHasAvatar?: (WADeviceCapabilities.DeviceCapabilities.IUserHasAvatar|null);
        memberNameTagPrimarySupport?: (WADeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport|null);
        aiThread?: (WADeviceCapabilities.DeviceCapabilities.IAiThread|null);
    }

    class DeviceCapabilities implements IDeviceCapabilities {
        constructor(p?: WADeviceCapabilities.IDeviceCapabilities);
        public chatLockSupportLevel?: (WADeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null);
        public lidMigration?: (WADeviceCapabilities.DeviceCapabilities.ILIDMigration|null);
        public businessBroadcast?: (WADeviceCapabilities.DeviceCapabilities.IBusinessBroadcast|null);
        public userHasAvatar?: (WADeviceCapabilities.DeviceCapabilities.IUserHasAvatar|null);
        public memberNameTagPrimarySupport?: (WADeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport|null);
        public aiThread?: (WADeviceCapabilities.DeviceCapabilities.IAiThread|null);
        public static create(properties?: WADeviceCapabilities.IDeviceCapabilities): WADeviceCapabilities.DeviceCapabilities;
        public static encode(m: WADeviceCapabilities.IDeviceCapabilities, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WADeviceCapabilities.DeviceCapabilities;
        public static fromObject(d: { [k: string]: any }): WADeviceCapabilities.DeviceCapabilities;
        public static toObject(m: WADeviceCapabilities.DeviceCapabilities, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DeviceCapabilities {

        enum MemberNameTagPrimarySupport {
            DISABLED = 0,
            RECEIVER_ENABLED = 1,
            SENDER_ENABLED = 2
        }

        enum ChatLockSupportLevel {
            NONE = 0,
            MINIMAL = 1,
            FULL = 2
        }

        interface IAiThread {
            supportLevel?: (WADeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel|null);
        }

        class AiThread implements IAiThread {
            constructor(p?: WADeviceCapabilities.DeviceCapabilities.IAiThread);
            public supportLevel?: (WADeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel|null);
            public static create(properties?: WADeviceCapabilities.DeviceCapabilities.IAiThread): WADeviceCapabilities.DeviceCapabilities.AiThread;
            public static encode(m: WADeviceCapabilities.DeviceCapabilities.IAiThread, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WADeviceCapabilities.DeviceCapabilities.AiThread;
            public static fromObject(d: { [k: string]: any }): WADeviceCapabilities.DeviceCapabilities.AiThread;
            public static toObject(m: WADeviceCapabilities.DeviceCapabilities.AiThread, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AiThread {

            enum SupportLevel {
                NONE = 0,
                INFRA = 1,
                FULL = 2
            }
        }

        interface IUserHasAvatar {
            userHasAvatar?: (boolean|null);
        }

        class UserHasAvatar implements IUserHasAvatar {
            constructor(p?: WADeviceCapabilities.DeviceCapabilities.IUserHasAvatar);
            public userHasAvatar?: (boolean|null);
            public static create(properties?: WADeviceCapabilities.DeviceCapabilities.IUserHasAvatar): WADeviceCapabilities.DeviceCapabilities.UserHasAvatar;
            public static encode(m: WADeviceCapabilities.DeviceCapabilities.IUserHasAvatar, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WADeviceCapabilities.DeviceCapabilities.UserHasAvatar;
            public static fromObject(d: { [k: string]: any }): WADeviceCapabilities.DeviceCapabilities.UserHasAvatar;
            public static toObject(m: WADeviceCapabilities.DeviceCapabilities.UserHasAvatar, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBusinessBroadcast {
            importListEnabled?: (boolean|null);
            companionSupportEnabled?: (boolean|null);
            campaignSyncEnabled?: (boolean|null);
            insightsSyncEnabled?: (boolean|null);
            recipientLimit?: (number|null);
        }

        class BusinessBroadcast implements IBusinessBroadcast {
            constructor(p?: WADeviceCapabilities.DeviceCapabilities.IBusinessBroadcast);
            public importListEnabled?: (boolean|null);
            public companionSupportEnabled?: (boolean|null);
            public campaignSyncEnabled?: (boolean|null);
            public insightsSyncEnabled?: (boolean|null);
            public recipientLimit?: (number|null);
            public static create(properties?: WADeviceCapabilities.DeviceCapabilities.IBusinessBroadcast): WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast;
            public static encode(m: WADeviceCapabilities.DeviceCapabilities.IBusinessBroadcast, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast;
            public static fromObject(d: { [k: string]: any }): WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast;
            public static toObject(m: WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ILIDMigration {
            chatDbMigrationTimestamp?: (number|Long|null);
        }

        class LIDMigration implements ILIDMigration {
            constructor(p?: WADeviceCapabilities.DeviceCapabilities.ILIDMigration);
            public chatDbMigrationTimestamp?: (number|Long|null);
            public static create(properties?: WADeviceCapabilities.DeviceCapabilities.ILIDMigration): WADeviceCapabilities.DeviceCapabilities.LIDMigration;
            public static encode(m: WADeviceCapabilities.DeviceCapabilities.ILIDMigration, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WADeviceCapabilities.DeviceCapabilities.LIDMigration;
            public static fromObject(d: { [k: string]: any }): WADeviceCapabilities.DeviceCapabilities.LIDMigration;
            public static toObject(m: WADeviceCapabilities.DeviceCapabilities.LIDMigration, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

