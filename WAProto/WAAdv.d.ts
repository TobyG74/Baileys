import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAAdv {

    enum ADVEncryptionType {
        E2EE = 0,
        HOSTED = 1,
        NON_E2EE = 2
    }

    interface IADVKeyIndexList {
        rawID?: (number|null);
        timestamp?: (number|Long|null);
        currentIndex?: (number|null);
        validIndexes?: (number[]|null);
        accountType?: (WAAdv.ADVEncryptionType|null);
    }

    class ADVKeyIndexList implements IADVKeyIndexList {
        constructor(p?: WAAdv.IADVKeyIndexList);
        public rawID?: (number|null);
        public timestamp?: (number|Long|null);
        public currentIndex?: (number|null);
        public validIndexes: number[];
        public accountType?: (WAAdv.ADVEncryptionType|null);
        public static create(properties?: WAAdv.IADVKeyIndexList): WAAdv.ADVKeyIndexList;
        public static encode(m: WAAdv.IADVKeyIndexList, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAdv.ADVKeyIndexList;
        public static fromObject(d: { [k: string]: any }): WAAdv.ADVKeyIndexList;
        public static toObject(m: WAAdv.ADVKeyIndexList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IADVSignedKeyIndexList {
        details?: (Uint8Array|null);
        accountSignature?: (Uint8Array|null);
        accountSignatureKey?: (Uint8Array|null);
    }

    class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {
        constructor(p?: WAAdv.IADVSignedKeyIndexList);
        public details?: (Uint8Array|null);
        public accountSignature?: (Uint8Array|null);
        public accountSignatureKey?: (Uint8Array|null);
        public static create(properties?: WAAdv.IADVSignedKeyIndexList): WAAdv.ADVSignedKeyIndexList;
        public static encode(m: WAAdv.IADVSignedKeyIndexList, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAdv.ADVSignedKeyIndexList;
        public static fromObject(d: { [k: string]: any }): WAAdv.ADVSignedKeyIndexList;
        public static toObject(m: WAAdv.ADVSignedKeyIndexList, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IADVDeviceIdentity {
        rawID?: (number|null);
        timestamp?: (number|Long|null);
        keyIndex?: (number|null);
        accountType?: (WAAdv.ADVEncryptionType|null);
        deviceType?: (WAAdv.ADVEncryptionType|null);
    }

    class ADVDeviceIdentity implements IADVDeviceIdentity {
        constructor(p?: WAAdv.IADVDeviceIdentity);
        public rawID?: (number|null);
        public timestamp?: (number|Long|null);
        public keyIndex?: (number|null);
        public accountType?: (WAAdv.ADVEncryptionType|null);
        public deviceType?: (WAAdv.ADVEncryptionType|null);
        public static create(properties?: WAAdv.IADVDeviceIdentity): WAAdv.ADVDeviceIdentity;
        public static encode(m: WAAdv.IADVDeviceIdentity, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAdv.ADVDeviceIdentity;
        public static fromObject(d: { [k: string]: any }): WAAdv.ADVDeviceIdentity;
        public static toObject(m: WAAdv.ADVDeviceIdentity, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IADVSignedDeviceIdentity {
        details?: (Uint8Array|null);
        accountSignatureKey?: (Uint8Array|null);
        accountSignature?: (Uint8Array|null);
        deviceSignature?: (Uint8Array|null);
    }

    class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {
        constructor(p?: WAAdv.IADVSignedDeviceIdentity);
        public details?: (Uint8Array|null);
        public accountSignatureKey?: (Uint8Array|null);
        public accountSignature?: (Uint8Array|null);
        public deviceSignature?: (Uint8Array|null);
        public static create(properties?: WAAdv.IADVSignedDeviceIdentity): WAAdv.ADVSignedDeviceIdentity;
        public static encode(m: WAAdv.IADVSignedDeviceIdentity, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAdv.ADVSignedDeviceIdentity;
        public static fromObject(d: { [k: string]: any }): WAAdv.ADVSignedDeviceIdentity;
        public static toObject(m: WAAdv.ADVSignedDeviceIdentity, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IADVSignedDeviceIdentityHMAC {
        details?: (Uint8Array|null);
        HMAC?: (Uint8Array|null);
        accountType?: (WAAdv.ADVEncryptionType|null);
    }

    class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {
        constructor(p?: WAAdv.IADVSignedDeviceIdentityHMAC);
        public details?: (Uint8Array|null);
        public HMAC?: (Uint8Array|null);
        public accountType?: (WAAdv.ADVEncryptionType|null);
        public static create(properties?: WAAdv.IADVSignedDeviceIdentityHMAC): WAAdv.ADVSignedDeviceIdentityHMAC;
        public static encode(m: WAAdv.IADVSignedDeviceIdentityHMAC, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAdv.ADVSignedDeviceIdentityHMAC;
        public static fromObject(d: { [k: string]: any }): WAAdv.ADVSignedDeviceIdentityHMAC;
        public static toObject(m: WAAdv.ADVSignedDeviceIdentityHMAC, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

