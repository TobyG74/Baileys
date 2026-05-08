import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAEphemeral {

    interface IEphemeralSetting {
        duration?: (number|null);
        timestamp?: (number|Long|null);
    }

    class EphemeralSetting implements IEphemeralSetting {
        constructor(p?: WAEphemeral.IEphemeralSetting);
        public duration?: (number|null);
        public timestamp?: (number|Long|null);
        public static create(properties?: WAEphemeral.IEphemeralSetting): WAEphemeral.EphemeralSetting;
        public static encode(m: WAEphemeral.IEphemeralSetting, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAEphemeral.EphemeralSetting;
        public static fromObject(d: { [k: string]: any }): WAEphemeral.EphemeralSetting;
        public static toObject(m: WAEphemeral.EphemeralSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

