import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAVnameCert {

    interface IBizAccountLinkInfo {
        whatsappBizAcctFbid?: (number|Long|null);
        whatsappAcctNumber?: (string|null);
        issueTime?: (number|Long|null);
        hostStorage?: (WAVnameCert.BizAccountLinkInfo.HostStorageType|null);
        accountType?: (WAVnameCert.BizAccountLinkInfo.AccountType|null);
    }

    class BizAccountLinkInfo implements IBizAccountLinkInfo {
        constructor(p?: WAVnameCert.IBizAccountLinkInfo);
        public whatsappBizAcctFbid?: (number|Long|null);
        public whatsappAcctNumber?: (string|null);
        public issueTime?: (number|Long|null);
        public hostStorage?: (WAVnameCert.BizAccountLinkInfo.HostStorageType|null);
        public accountType?: (WAVnameCert.BizAccountLinkInfo.AccountType|null);
        public static create(properties?: WAVnameCert.IBizAccountLinkInfo): WAVnameCert.BizAccountLinkInfo;
        public static encode(m: WAVnameCert.IBizAccountLinkInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAVnameCert.BizAccountLinkInfo;
        public static fromObject(d: { [k: string]: any }): WAVnameCert.BizAccountLinkInfo;
        public static toObject(m: WAVnameCert.BizAccountLinkInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BizAccountLinkInfo {

        enum AccountType {
            ENTERPRISE = 0
        }

        enum HostStorageType {
            ON_PREMISE = 0,
            FACEBOOK = 1
        }
    }

    interface IBizIdentityInfo {
        vlevel?: (WAVnameCert.BizIdentityInfo.VerifiedLevelValue|null);
        vnameCert?: (WAVnameCert.IVerifiedNameCertificate|null);
        signed?: (boolean|null);
        revoked?: (boolean|null);
        hostStorage?: (WAVnameCert.BizIdentityInfo.HostStorageType|null);
        actualActors?: (WAVnameCert.BizIdentityInfo.ActualActorsType|null);
        privacyModeTS?: (number|Long|null);
        featureControls?: (number|Long|null);
    }

    class BizIdentityInfo implements IBizIdentityInfo {
        constructor(p?: WAVnameCert.IBizIdentityInfo);
        public vlevel?: (WAVnameCert.BizIdentityInfo.VerifiedLevelValue|null);
        public vnameCert?: (WAVnameCert.IVerifiedNameCertificate|null);
        public signed?: (boolean|null);
        public revoked?: (boolean|null);
        public hostStorage?: (WAVnameCert.BizIdentityInfo.HostStorageType|null);
        public actualActors?: (WAVnameCert.BizIdentityInfo.ActualActorsType|null);
        public privacyModeTS?: (number|Long|null);
        public featureControls?: (number|Long|null);
        public static create(properties?: WAVnameCert.IBizIdentityInfo): WAVnameCert.BizIdentityInfo;
        public static encode(m: WAVnameCert.IBizIdentityInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAVnameCert.BizIdentityInfo;
        public static fromObject(d: { [k: string]: any }): WAVnameCert.BizIdentityInfo;
        public static toObject(m: WAVnameCert.BizIdentityInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BizIdentityInfo {

        enum ActualActorsType {
            SELF = 0,
            BSP = 1
        }

        enum HostStorageType {
            ON_PREMISE = 0,
            FACEBOOK = 1
        }

        enum VerifiedLevelValue {
            UNKNOWN = 0,
            LOW = 1,
            HIGH = 2
        }
    }

    interface ILocalizedName {
        lg?: (string|null);
        lc?: (string|null);
        verifiedName?: (string|null);
    }

    class LocalizedName implements ILocalizedName {
        constructor(p?: WAVnameCert.ILocalizedName);
        public lg?: (string|null);
        public lc?: (string|null);
        public verifiedName?: (string|null);
        public static create(properties?: WAVnameCert.ILocalizedName): WAVnameCert.LocalizedName;
        public static encode(m: WAVnameCert.ILocalizedName, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAVnameCert.LocalizedName;
        public static fromObject(d: { [k: string]: any }): WAVnameCert.LocalizedName;
        public static toObject(m: WAVnameCert.LocalizedName, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IVerifiedNameCertificate {
        details?: (Uint8Array|null);
        signature?: (Uint8Array|null);
        serverSignature?: (Uint8Array|null);
    }

    class VerifiedNameCertificate implements IVerifiedNameCertificate {
        constructor(p?: WAVnameCert.IVerifiedNameCertificate);
        public details?: (Uint8Array|null);
        public signature?: (Uint8Array|null);
        public serverSignature?: (Uint8Array|null);
        public static create(properties?: WAVnameCert.IVerifiedNameCertificate): WAVnameCert.VerifiedNameCertificate;
        public static encode(m: WAVnameCert.IVerifiedNameCertificate, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAVnameCert.VerifiedNameCertificate;
        public static fromObject(d: { [k: string]: any }): WAVnameCert.VerifiedNameCertificate;
        public static toObject(m: WAVnameCert.VerifiedNameCertificate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace VerifiedNameCertificate {

        interface IDetails {
            serial?: (number|Long|null);
            issuer?: (string|null);
            verifiedName?: (string|null);
            localizedNames?: (WAVnameCert.ILocalizedName[]|null);
            issueTime?: (number|Long|null);
        }

        class Details implements IDetails {
            constructor(p?: WAVnameCert.VerifiedNameCertificate.IDetails);
            public serial?: (number|Long|null);
            public issuer?: (string|null);
            public verifiedName?: (string|null);
            public localizedNames: WAVnameCert.ILocalizedName[];
            public issueTime?: (number|Long|null);
            public static create(properties?: WAVnameCert.VerifiedNameCertificate.IDetails): WAVnameCert.VerifiedNameCertificate.Details;
            public static encode(m: WAVnameCert.VerifiedNameCertificate.IDetails, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAVnameCert.VerifiedNameCertificate.Details;
            public static fromObject(d: { [k: string]: any }): WAVnameCert.VerifiedNameCertificate.Details;
            public static toObject(m: WAVnameCert.VerifiedNameCertificate.Details, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IBizAccountPayload {
        vnameCert?: (WAVnameCert.IVerifiedNameCertificate|null);
        bizAcctLinkInfo?: (Uint8Array|null);
    }

    class BizAccountPayload implements IBizAccountPayload {
        constructor(p?: WAVnameCert.IBizAccountPayload);
        public vnameCert?: (WAVnameCert.IVerifiedNameCertificate|null);
        public bizAcctLinkInfo?: (Uint8Array|null);
        public static create(properties?: WAVnameCert.IBizAccountPayload): WAVnameCert.BizAccountPayload;
        public static encode(m: WAVnameCert.IBizAccountPayload, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAVnameCert.BizAccountPayload;
        public static fromObject(d: { [k: string]: any }): WAVnameCert.BizAccountPayload;
        public static toObject(m: WAVnameCert.BizAccountPayload, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

