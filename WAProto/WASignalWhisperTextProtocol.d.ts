import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WASignalWhisperTextProtocol {

    interface ISignalMessage {
        ratchetKey?: (Uint8Array|null);
        counter?: (number|null);
        previousCounter?: (number|null);
        ciphertext?: (Uint8Array|null);
    }

    class SignalMessage implements ISignalMessage {
        constructor(p?: WASignalWhisperTextProtocol.ISignalMessage);
        public ratchetKey?: (Uint8Array|null);
        public counter?: (number|null);
        public previousCounter?: (number|null);
        public ciphertext?: (Uint8Array|null);
        public static create(properties?: WASignalWhisperTextProtocol.ISignalMessage): WASignalWhisperTextProtocol.SignalMessage;
        public static encode(m: WASignalWhisperTextProtocol.ISignalMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalWhisperTextProtocol.SignalMessage;
        public static fromObject(d: { [k: string]: any }): WASignalWhisperTextProtocol.SignalMessage;
        public static toObject(m: WASignalWhisperTextProtocol.SignalMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPreKeySignalMessage {
        registrationID?: (number|null);
        preKeyID?: (number|null);
        signedPreKeyID?: (number|null);
        baseKey?: (Uint8Array|null);
        identityKey?: (Uint8Array|null);
        message?: (Uint8Array|null);
    }

    class PreKeySignalMessage implements IPreKeySignalMessage {
        constructor(p?: WASignalWhisperTextProtocol.IPreKeySignalMessage);
        public registrationID?: (number|null);
        public preKeyID?: (number|null);
        public signedPreKeyID?: (number|null);
        public baseKey?: (Uint8Array|null);
        public identityKey?: (Uint8Array|null);
        public message?: (Uint8Array|null);
        public static create(properties?: WASignalWhisperTextProtocol.IPreKeySignalMessage): WASignalWhisperTextProtocol.PreKeySignalMessage;
        public static encode(m: WASignalWhisperTextProtocol.IPreKeySignalMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalWhisperTextProtocol.PreKeySignalMessage;
        public static fromObject(d: { [k: string]: any }): WASignalWhisperTextProtocol.PreKeySignalMessage;
        public static toObject(m: WASignalWhisperTextProtocol.PreKeySignalMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IKeyExchangeMessage {
        ID?: (number|null);
        baseKey?: (Uint8Array|null);
        ratchetKey?: (Uint8Array|null);
        identityKey?: (Uint8Array|null);
        baseKeySignature?: (Uint8Array|null);
    }

    class KeyExchangeMessage implements IKeyExchangeMessage {
        constructor(p?: WASignalWhisperTextProtocol.IKeyExchangeMessage);
        public ID?: (number|null);
        public baseKey?: (Uint8Array|null);
        public ratchetKey?: (Uint8Array|null);
        public identityKey?: (Uint8Array|null);
        public baseKeySignature?: (Uint8Array|null);
        public static create(properties?: WASignalWhisperTextProtocol.IKeyExchangeMessage): WASignalWhisperTextProtocol.KeyExchangeMessage;
        public static encode(m: WASignalWhisperTextProtocol.IKeyExchangeMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalWhisperTextProtocol.KeyExchangeMessage;
        public static fromObject(d: { [k: string]: any }): WASignalWhisperTextProtocol.KeyExchangeMessage;
        public static toObject(m: WASignalWhisperTextProtocol.KeyExchangeMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISenderKeyMessage {
        ID?: (number|null);
        iteration?: (number|null);
        ciphertext?: (Uint8Array|null);
    }

    class SenderKeyMessage implements ISenderKeyMessage {
        constructor(p?: WASignalWhisperTextProtocol.ISenderKeyMessage);
        public ID?: (number|null);
        public iteration?: (number|null);
        public ciphertext?: (Uint8Array|null);
        public static create(properties?: WASignalWhisperTextProtocol.ISenderKeyMessage): WASignalWhisperTextProtocol.SenderKeyMessage;
        public static encode(m: WASignalWhisperTextProtocol.ISenderKeyMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalWhisperTextProtocol.SenderKeyMessage;
        public static fromObject(d: { [k: string]: any }): WASignalWhisperTextProtocol.SenderKeyMessage;
        public static toObject(m: WASignalWhisperTextProtocol.SenderKeyMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISenderKeyDistributionMessage {
        ID?: (number|null);
        iteration?: (number|null);
        chainKey?: (Uint8Array|null);
        signingKey?: (Uint8Array|null);
    }

    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
        constructor(p?: WASignalWhisperTextProtocol.ISenderKeyDistributionMessage);
        public ID?: (number|null);
        public iteration?: (number|null);
        public chainKey?: (Uint8Array|null);
        public signingKey?: (Uint8Array|null);
        public static create(properties?: WASignalWhisperTextProtocol.ISenderKeyDistributionMessage): WASignalWhisperTextProtocol.SenderKeyDistributionMessage;
        public static encode(m: WASignalWhisperTextProtocol.ISenderKeyDistributionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalWhisperTextProtocol.SenderKeyDistributionMessage;
        public static fromObject(d: { [k: string]: any }): WASignalWhisperTextProtocol.SenderKeyDistributionMessage;
        public static toObject(m: WASignalWhisperTextProtocol.SenderKeyDistributionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeviceConsistencyCodeMessage {
        generation?: (number|null);
        signature?: (Uint8Array|null);
    }

    class DeviceConsistencyCodeMessage implements IDeviceConsistencyCodeMessage {
        constructor(p?: WASignalWhisperTextProtocol.IDeviceConsistencyCodeMessage);
        public generation?: (number|null);
        public signature?: (Uint8Array|null);
        public static create(properties?: WASignalWhisperTextProtocol.IDeviceConsistencyCodeMessage): WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage;
        public static encode(m: WASignalWhisperTextProtocol.IDeviceConsistencyCodeMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage;
        public static fromObject(d: { [k: string]: any }): WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage;
        public static toObject(m: WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

