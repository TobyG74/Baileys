import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WACommon {

    interface ILimitSharing {
        sharingLimited?: (boolean|null);
        trigger?: (WACommon.LimitSharing.TriggerType|null);
        limitSharingSettingTimestamp?: (number|Long|null);
        initiatedByMe?: (boolean|null);
    }

    class LimitSharing implements ILimitSharing {
        constructor(p?: WACommon.ILimitSharing);
        public sharingLimited?: (boolean|null);
        public trigger?: (WACommon.LimitSharing.TriggerType|null);
        public limitSharingSettingTimestamp?: (number|Long|null);
        public initiatedByMe?: (boolean|null);
        public static create(properties?: WACommon.ILimitSharing): WACommon.LimitSharing;
        public static encode(m: WACommon.ILimitSharing, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACommon.LimitSharing;
        public static fromObject(d: { [k: string]: any }): WACommon.LimitSharing;
        public static toObject(m: WACommon.LimitSharing, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LimitSharing {

        enum TriggerType {
            UNKNOWN = 0,
            CHAT_SETTING = 1,
            BIZ_SUPPORTS_FB_HOSTING = 2,
            UNKNOWN_GROUP = 3
        }
    }

    interface IMessageKey {
        remoteJID?: (string|null);
        fromMe?: (boolean|null);
        ID?: (string|null);
        participant?: (string|null);
    }

    class MessageKey implements IMessageKey {
        constructor(p?: WACommon.IMessageKey);
        public remoteJID?: (string|null);
        public fromMe?: (boolean|null);
        public ID?: (string|null);
        public participant?: (string|null);
        public static create(properties?: WACommon.IMessageKey): WACommon.MessageKey;
        public static encode(m: WACommon.IMessageKey, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACommon.MessageKey;
        public static fromObject(d: { [k: string]: any }): WACommon.MessageKey;
        public static toObject(m: WACommon.MessageKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

