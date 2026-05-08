import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAMdStorageAccountLinkingOpaqueData {

    interface IAccountLinkingOpaqueData {
        accesstoken?: (string|null);
        FBID?: (string|null);
        nonce?: (string|null);
        encryptedPassword?: (string|null);
    }

    class AccountLinkingOpaqueData implements IAccountLinkingOpaqueData {
        constructor(p?: WAMdStorageAccountLinkingOpaqueData.IAccountLinkingOpaqueData);
        public accesstoken?: (string|null);
        public FBID?: (string|null);
        public nonce?: (string|null);
        public encryptedPassword?: (string|null);
        public static create(properties?: WAMdStorageAccountLinkingOpaqueData.IAccountLinkingOpaqueData): WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData;
        public static encode(m: WAMdStorageAccountLinkingOpaqueData.IAccountLinkingOpaqueData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData;
        public static fromObject(d: { [k: string]: any }): WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData;
        public static toObject(m: WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

