import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAMmsRetry {

    interface IMediaRetryNotification {
        stanzaID?: (string|null);
        directPath?: (string|null);
        result?: (WAMmsRetry.MediaRetryNotification.ResultType|null);
        messageSecret?: (Uint8Array|null);
    }

    class MediaRetryNotification implements IMediaRetryNotification {
        constructor(p?: WAMmsRetry.IMediaRetryNotification);
        public stanzaID?: (string|null);
        public directPath?: (string|null);
        public result?: (WAMmsRetry.MediaRetryNotification.ResultType|null);
        public messageSecret?: (Uint8Array|null);
        public static create(properties?: WAMmsRetry.IMediaRetryNotification): WAMmsRetry.MediaRetryNotification;
        public static encode(m: WAMmsRetry.IMediaRetryNotification, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMmsRetry.MediaRetryNotification;
        public static fromObject(d: { [k: string]: any }): WAMmsRetry.MediaRetryNotification;
        public static toObject(m: WAMmsRetry.MediaRetryNotification, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MediaRetryNotification {

        enum ResultType {
            GENERAL_ERROR = 0,
            SUCCESS = 1,
            NOT_FOUND = 2,
            DECRYPTION_ERROR = 3
        }
    }

    interface IServerErrorReceipt {
        stanzaID?: (string|null);
    }

    class ServerErrorReceipt implements IServerErrorReceipt {
        constructor(p?: WAMmsRetry.IServerErrorReceipt);
        public stanzaID?: (string|null);
        public static create(properties?: WAMmsRetry.IServerErrorReceipt): WAMmsRetry.ServerErrorReceipt;
        public static encode(m: WAMmsRetry.IServerErrorReceipt, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMmsRetry.ServerErrorReceipt;
        public static fromObject(d: { [k: string]: any }): WAMmsRetry.ServerErrorReceipt;
        public static toObject(m: WAMmsRetry.ServerErrorReceipt, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

