import { WAUserPassword } from './WAUserPassword.d';import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAChatLockSettings {

    interface IChatLockSettings {
        hideLockedChats?: (boolean|null);
        secretCode?: (WAUserPassword.IUserPassword|null);
    }

    class ChatLockSettings implements IChatLockSettings {
        constructor(p?: WAChatLockSettings.IChatLockSettings);
        public hideLockedChats?: (boolean|null);
        public secretCode?: (WAUserPassword.IUserPassword|null);
        public static create(properties?: WAChatLockSettings.IChatLockSettings): WAChatLockSettings.ChatLockSettings;
        public static encode(m: WAChatLockSettings.IChatLockSettings, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAChatLockSettings.ChatLockSettings;
        public static fromObject(d: { [k: string]: any }): WAChatLockSettings.ChatLockSettings;
        public static toObject(m: WAChatLockSettings.ChatLockSettings, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}


