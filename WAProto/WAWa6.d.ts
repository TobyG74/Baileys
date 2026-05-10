import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAWa6 {

    interface IHandshakeMessage {
        clientHello?: (WAWa6.HandshakeMessage.IClientHello|null);
        serverHello?: (WAWa6.HandshakeMessage.IServerHello|null);
        clientFinish?: (WAWa6.HandshakeMessage.IClientFinish|null);
    }

    class HandshakeMessage implements IHandshakeMessage {
        constructor(p?: WAWa6.IHandshakeMessage);
        public clientHello?: (WAWa6.HandshakeMessage.IClientHello|null);
        public serverHello?: (WAWa6.HandshakeMessage.IServerHello|null);
        public clientFinish?: (WAWa6.HandshakeMessage.IClientFinish|null);
        public static create(properties?: WAWa6.IHandshakeMessage): WAWa6.HandshakeMessage;
        public static encode(m: WAWa6.IHandshakeMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.HandshakeMessage;
        public static fromObject(d: { [k: string]: any }): WAWa6.HandshakeMessage;
        public static toObject(m: WAWa6.HandshakeMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HandshakeMessage {

        enum HandshakePqMode {
            HANDSHAKE_PQ_MODE_UNKNOWN = 0,
            XXKEM = 1,
            XXKEM_FS = 2,
            WA_CLASSICAL = 3,
            WA_PQ = 4,
            IKKEM = 5,
            IKKEM_FS = 6,
            XXKEM_2 = 7,
            IKKEM_2 = 8
        }

        interface IClientFinish {
            "static"?: (Uint8Array|null);
            payload?: (Uint8Array|null);
            extendedCiphertext?: (Uint8Array|null);
            paddedBytes?: (Uint8Array|null);
            simulateXxkemFs?: (boolean|null);
        }

        class ClientFinish implements IClientFinish {
            constructor(p?: WAWa6.HandshakeMessage.IClientFinish);
            public static?: (Uint8Array|null);
            public payload?: (Uint8Array|null);
            public extendedCiphertext?: (Uint8Array|null);
            public paddedBytes?: (Uint8Array|null);
            public simulateXxkemFs?: (boolean|null);
            public static create(properties?: WAWa6.HandshakeMessage.IClientFinish): WAWa6.HandshakeMessage.ClientFinish;
            public static encode(m: WAWa6.HandshakeMessage.IClientFinish, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.HandshakeMessage.ClientFinish;
            public static fromObject(d: { [k: string]: any }): WAWa6.HandshakeMessage.ClientFinish;
            public static toObject(m: WAWa6.HandshakeMessage.ClientFinish, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IServerHello {
            ephemeral?: (Uint8Array|null);
            "static"?: (Uint8Array|null);
            payload?: (Uint8Array|null);
            extendedStatic?: (Uint8Array|null);
            paddingBytes?: (Uint8Array|null);
            extendedCiphertext?: (Uint8Array|null);
        }

        class ServerHello implements IServerHello {
            constructor(p?: WAWa6.HandshakeMessage.IServerHello);
            public ephemeral?: (Uint8Array|null);
            public static?: (Uint8Array|null);
            public payload?: (Uint8Array|null);
            public extendedStatic?: (Uint8Array|null);
            public paddingBytes?: (Uint8Array|null);
            public extendedCiphertext?: (Uint8Array|null);
            public static create(properties?: WAWa6.HandshakeMessage.IServerHello): WAWa6.HandshakeMessage.ServerHello;
            public static encode(m: WAWa6.HandshakeMessage.IServerHello, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.HandshakeMessage.ServerHello;
            public static fromObject(d: { [k: string]: any }): WAWa6.HandshakeMessage.ServerHello;
            public static toObject(m: WAWa6.HandshakeMessage.ServerHello, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IClientHello {
            ephemeral?: (Uint8Array|null);
            "static"?: (Uint8Array|null);
            payload?: (Uint8Array|null);
            useExtended?: (boolean|null);
            extendedCiphertext?: (Uint8Array|null);
            paddedBytes?: (Uint8Array|null);
            sendServerHelloPaddedBytes?: (boolean|null);
            simulateXxkemFs?: (boolean|null);
            pqMode?: (WAWa6.HandshakeMessage.HandshakePqMode|null);
            extendedEphemeral?: (Uint8Array|null);
        }

        class ClientHello implements IClientHello {
            constructor(p?: WAWa6.HandshakeMessage.IClientHello);
            public ephemeral?: (Uint8Array|null);
            public static?: (Uint8Array|null);
            public payload?: (Uint8Array|null);
            public useExtended?: (boolean|null);
            public extendedCiphertext?: (Uint8Array|null);
            public paddedBytes?: (Uint8Array|null);
            public sendServerHelloPaddedBytes?: (boolean|null);
            public simulateXxkemFs?: (boolean|null);
            public pqMode?: (WAWa6.HandshakeMessage.HandshakePqMode|null);
            public extendedEphemeral?: (Uint8Array|null);
            public static create(properties?: WAWa6.HandshakeMessage.IClientHello): WAWa6.HandshakeMessage.ClientHello;
            public static encode(m: WAWa6.HandshakeMessage.IClientHello, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.HandshakeMessage.ClientHello;
            public static fromObject(d: { [k: string]: any }): WAWa6.HandshakeMessage.ClientHello;
            public static toObject(m: WAWa6.HandshakeMessage.ClientHello, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IClientPayload {
        username?: (number|Long|null);
        passive?: (boolean|null);
        userAgent?: (WAWa6.ClientPayload.IUserAgent|null);
        webInfo?: (WAWa6.ClientPayload.IWebInfo|null);
        pushName?: (string|null);
        sessionId?: (number|null);
        shortConnect?: (boolean|null);
        connectType?: (WAWa6.ClientPayload.ConnectType|null);
        connectReason?: (WAWa6.ClientPayload.ConnectReason|null);
        shards?: (number[]|null);
        dnsSource?: (WAWa6.ClientPayload.IDNSSource|null);
        connectAttemptCount?: (number|null);
        device?: (number|null);
        devicePairingData?: (WAWa6.ClientPayload.IDevicePairingRegistrationData|null);
        product?: (WAWa6.ClientPayload.Product|null);
        fbCat?: (Uint8Array|null);
        fbUserAgent?: (Uint8Array|null);
        oc?: (boolean|null);
        lc?: (number|null);
        iosAppExtension?: (WAWa6.ClientPayload.IOSAppExtension|null);
        fbAppId?: (number|Long|null);
        fbDeviceId?: (Uint8Array|null);
        pull?: (boolean|null);
        paddingBytes?: (Uint8Array|null);
        yearClass?: (number|null);
        memClass?: (number|null);
        interopData?: (WAWa6.ClientPayload.IInteropData|null);
        trafficAnonymization?: (WAWa6.ClientPayload.TrafficAnonymization|null);
        lidDbMigrated?: (boolean|null);
        accountType?: (WAWa6.ClientPayload.AccountType|null);
        connectionSequenceInfo?: (number|null);
        paaLink?: (boolean|null);
        preacksCount?: (number|null);
        processingQueueSize?: (number|null);
        pairedPeripherals?: (string[]|null);
        testIsolationId?: (Uint8Array|null);
    }

    class ClientPayload implements IClientPayload {
        constructor(p?: WAWa6.IClientPayload);
        public username?: (number|Long|null);
        public passive?: (boolean|null);
        public userAgent?: (WAWa6.ClientPayload.IUserAgent|null);
        public webInfo?: (WAWa6.ClientPayload.IWebInfo|null);
        public pushName?: (string|null);
        public sessionId?: (number|null);
        public shortConnect?: (boolean|null);
        public connectType?: (WAWa6.ClientPayload.ConnectType|null);
        public connectReason?: (WAWa6.ClientPayload.ConnectReason|null);
        public shards: number[];
        public dnsSource?: (WAWa6.ClientPayload.IDNSSource|null);
        public connectAttemptCount?: (number|null);
        public device?: (number|null);
        public devicePairingData?: (WAWa6.ClientPayload.IDevicePairingRegistrationData|null);
        public product?: (WAWa6.ClientPayload.Product|null);
        public fbCat?: (Uint8Array|null);
        public fbUserAgent?: (Uint8Array|null);
        public oc?: (boolean|null);
        public lc?: (number|null);
        public iosAppExtension?: (WAWa6.ClientPayload.IOSAppExtension|null);
        public fbAppId?: (number|Long|null);
        public fbDeviceId?: (Uint8Array|null);
        public pull?: (boolean|null);
        public paddingBytes?: (Uint8Array|null);
        public yearClass?: (number|null);
        public memClass?: (number|null);
        public interopData?: (WAWa6.ClientPayload.IInteropData|null);
        public trafficAnonymization?: (WAWa6.ClientPayload.TrafficAnonymization|null);
        public lidDbMigrated?: (boolean|null);
        public accountType?: (WAWa6.ClientPayload.AccountType|null);
        public connectionSequenceInfo?: (number|null);
        public paaLink?: (boolean|null);
        public preacksCount?: (number|null);
        public processingQueueSize?: (number|null);
        public pairedPeripherals: string[];
        public testIsolationId?: (Uint8Array|null);
        public static create(properties?: WAWa6.IClientPayload): WAWa6.ClientPayload;
        public static encode(m: WAWa6.IClientPayload, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload;
        public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload;
        public static toObject(m: WAWa6.ClientPayload, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientPayload {

        enum TrafficAnonymization {
            OFF = 0,
            STANDARD = 1
        }

        enum AccountType {
            DEFAULT = 0,
            GUEST = 1
        }

        enum Product {
            WHATSAPP = 0,
            MESSENGER = 1,
            INTEROP = 2,
            INTEROP_MSGR = 3,
            WHATSAPP_LID = 4
        }

        enum ConnectType {
            CELLULAR_UNKNOWN = 0,
            WIFI_UNKNOWN = 1,
            CELLULAR_EDGE = 100,
            CELLULAR_IDEN = 101,
            CELLULAR_UMTS = 102,
            CELLULAR_EVDO = 103,
            CELLULAR_GPRS = 104,
            CELLULAR_HSDPA = 105,
            CELLULAR_HSUPA = 106,
            CELLULAR_HSPA = 107,
            CELLULAR_CDMA = 108,
            CELLULAR_1XRTT = 109,
            CELLULAR_EHRPD = 110,
            CELLULAR_LTE = 111,
            CELLULAR_HSPAP = 112
        }

        enum ConnectReason {
            PUSH = 0,
            USER_ACTIVATED = 1,
            SCHEDULED = 2,
            ERROR_RECONNECT = 3,
            NETWORK_SWITCH = 4,
            PING_RECONNECT = 5,
            UNKNOWN = 6
        }

        enum IOSAppExtension {
            SHARE_EXTENSION = 0,
            SERVICE_EXTENSION = 1,
            INTENTS_EXTENSION = 2
        }

        interface IDNSSource {
            dnsMethod?: (WAWa6.ClientPayload.DNSSource.DNSResolutionMethod|null);
            appCached?: (boolean|null);
        }

        class DNSSource implements IDNSSource {
            constructor(p?: WAWa6.ClientPayload.IDNSSource);
            public dnsMethod?: (WAWa6.ClientPayload.DNSSource.DNSResolutionMethod|null);
            public appCached?: (boolean|null);
            public static create(properties?: WAWa6.ClientPayload.IDNSSource): WAWa6.ClientPayload.DNSSource;
            public static encode(m: WAWa6.ClientPayload.IDNSSource, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.DNSSource;
            public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.DNSSource;
            public static toObject(m: WAWa6.ClientPayload.DNSSource, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DNSSource {

            enum DNSResolutionMethod {
                SYSTEM = 0,
                GOOGLE = 1,
                HARDCODED = 2,
                OVERRIDE = 3,
                FALLBACK = 4,
                MNS = 5,
                MNS_SECONDARY = 6,
                SOCKS_PROXY = 7
            }
        }

        interface IWebInfo {
            refToken?: (string|null);
            version?: (string|null);
            webdPayload?: (WAWa6.ClientPayload.WebInfo.IWebdPayload|null);
            webSubPlatform?: (WAWa6.ClientPayload.WebInfo.WebSubPlatform|null);
            browser?: (string|null);
            browserVersion?: (string|null);
        }

        class WebInfo implements IWebInfo {
            constructor(p?: WAWa6.ClientPayload.IWebInfo);
            public refToken?: (string|null);
            public version?: (string|null);
            public webdPayload?: (WAWa6.ClientPayload.WebInfo.IWebdPayload|null);
            public webSubPlatform?: (WAWa6.ClientPayload.WebInfo.WebSubPlatform|null);
            public browser?: (string|null);
            public browserVersion?: (string|null);
            public static create(properties?: WAWa6.ClientPayload.IWebInfo): WAWa6.ClientPayload.WebInfo;
            public static encode(m: WAWa6.ClientPayload.IWebInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.WebInfo;
            public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.WebInfo;
            public static toObject(m: WAWa6.ClientPayload.WebInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace WebInfo {

            enum WebSubPlatform {
                WEB_BROWSER = 0,
                APP_STORE = 1,
                WIN_STORE = 2,
                DARWIN = 3,
                WIN32 = 4,
                WIN_HYBRID = 5
            }

            interface IWebdPayload {
                usesParticipantInKey?: (boolean|null);
                supportsStarredMessages?: (boolean|null);
                supportsDocumentMessages?: (boolean|null);
                supportsUrlMessages?: (boolean|null);
                supportsMediaRetry?: (boolean|null);
                supportsE2EImage?: (boolean|null);
                supportsE2EVideo?: (boolean|null);
                supportsE2EAudio?: (boolean|null);
                supportsE2EDocument?: (boolean|null);
                documentTypes?: (string|null);
                features?: (Uint8Array|null);
            }

            class WebdPayload implements IWebdPayload {
                constructor(p?: WAWa6.ClientPayload.WebInfo.IWebdPayload);
                public usesParticipantInKey?: (boolean|null);
                public supportsStarredMessages?: (boolean|null);
                public supportsDocumentMessages?: (boolean|null);
                public supportsUrlMessages?: (boolean|null);
                public supportsMediaRetry?: (boolean|null);
                public supportsE2EImage?: (boolean|null);
                public supportsE2EVideo?: (boolean|null);
                public supportsE2EAudio?: (boolean|null);
                public supportsE2EDocument?: (boolean|null);
                public documentTypes?: (string|null);
                public features?: (Uint8Array|null);
                public static create(properties?: WAWa6.ClientPayload.WebInfo.IWebdPayload): WAWa6.ClientPayload.WebInfo.WebdPayload;
                public static encode(m: WAWa6.ClientPayload.WebInfo.IWebdPayload, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.WebInfo.WebdPayload;
                public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.WebInfo.WebdPayload;
                public static toObject(m: WAWa6.ClientPayload.WebInfo.WebdPayload, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IUserAgent {
            platform?: (WAWa6.ClientPayload.UserAgent.Platform|null);
            appVersion?: (WAWa6.ClientPayload.UserAgent.IAppVersion|null);
            mcc?: (string|null);
            mnc?: (string|null);
            osVersion?: (string|null);
            manufacturer?: (string|null);
            device?: (string|null);
            osBuildNumber?: (string|null);
            phoneId?: (string|null);
            releaseChannel?: (WAWa6.ClientPayload.UserAgent.ReleaseChannel|null);
            localeLanguageIso6391?: (string|null);
            localeCountryIso31661Alpha2?: (string|null);
            deviceBoard?: (string|null);
            deviceExpId?: (string|null);
            deviceType?: (WAWa6.ClientPayload.UserAgent.DeviceType|null);
            deviceModelType?: (string|null);
            distributionChannel?: (WAWa6.ClientPayload.UserAgent.DistributionChannel|null);
        }

        class UserAgent implements IUserAgent {
            constructor(p?: WAWa6.ClientPayload.IUserAgent);
            public platform?: (WAWa6.ClientPayload.UserAgent.Platform|null);
            public appVersion?: (WAWa6.ClientPayload.UserAgent.IAppVersion|null);
            public mcc?: (string|null);
            public mnc?: (string|null);
            public osVersion?: (string|null);
            public manufacturer?: (string|null);
            public device?: (string|null);
            public osBuildNumber?: (string|null);
            public phoneId?: (string|null);
            public releaseChannel?: (WAWa6.ClientPayload.UserAgent.ReleaseChannel|null);
            public localeLanguageIso6391?: (string|null);
            public localeCountryIso31661Alpha2?: (string|null);
            public deviceBoard?: (string|null);
            public deviceExpId?: (string|null);
            public deviceType?: (WAWa6.ClientPayload.UserAgent.DeviceType|null);
            public deviceModelType?: (string|null);
            public distributionChannel?: (WAWa6.ClientPayload.UserAgent.DistributionChannel|null);
            public static create(properties?: WAWa6.ClientPayload.IUserAgent): WAWa6.ClientPayload.UserAgent;
            public static encode(m: WAWa6.ClientPayload.IUserAgent, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.UserAgent;
            public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.UserAgent;
            public static toObject(m: WAWa6.ClientPayload.UserAgent, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UserAgent {

            enum DeviceType {
                PHONE = 0,
                TABLET = 1,
                DESKTOP = 2,
                WEARABLE = 3,
                VR = 4
            }

            enum DistributionChannel {
                APPSTORE = 0,
                WEBSITE = 1,
                TESTFLIGHT = 2,
                INTERNAL = 3
            }

            enum ReleaseChannel {
                RELEASE = 0,
                BETA = 1,
                ALPHA = 2,
                DEBUG = 3
            }

            enum Platform {
                ANDROID = 0,
                IOS = 1,
                WINDOWS_PHONE = 2,
                BLACKBERRY = 3,
                BLACKBERRYX = 4,
                S40 = 5,
                S60 = 6,
                PYTHON_CLIENT = 7,
                TIZEN = 8,
                ENTERPRISE = 9,
                SMB_ANDROID = 10,
                KAIOS = 11,
                SMB_IOS = 12,
                WINDOWS = 13,
                WEB = 14,
                PORTAL = 15,
                GREEN_ANDROID = 16,
                GREEN_IPHONE = 17,
                BLUE_ANDROID = 18,
                BLUE_IPHONE = 19,
                FBLITE_ANDROID = 20,
                MLITE_ANDROID = 21,
                IGLITE_ANDROID = 22,
                PAGE = 23,
                MACOS = 24,
                OCULUS_MSG = 25,
                OCULUS_CALL = 26,
                MILAN = 27,
                CAPI = 28,
                WEAROS = 29,
                ARDEVICE = 30,
                VRDEVICE = 31,
                BLUE_WEB = 32,
                IPAD = 33,
                TEST = 34,
                SMART_GLASSES = 35,
                BLUE_VR = 36,
                AR_WRIST = 37
            }

            interface IAppVersion {
                primary?: (number|null);
                secondary?: (number|null);
                tertiary?: (number|null);
                quaternary?: (number|null);
                quinary?: (number|null);
            }

            class AppVersion implements IAppVersion {
                constructor(p?: WAWa6.ClientPayload.UserAgent.IAppVersion);
                public primary?: (number|null);
                public secondary?: (number|null);
                public tertiary?: (number|null);
                public quaternary?: (number|null);
                public quinary?: (number|null);
                public static create(properties?: WAWa6.ClientPayload.UserAgent.IAppVersion): WAWa6.ClientPayload.UserAgent.AppVersion;
                public static encode(m: WAWa6.ClientPayload.UserAgent.IAppVersion, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.UserAgent.AppVersion;
                public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.UserAgent.AppVersion;
                public static toObject(m: WAWa6.ClientPayload.UserAgent.AppVersion, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IInteropData {
            accountId?: (number|Long|null);
            token?: (Uint8Array|null);
            enableReadReceipts?: (boolean|null);
        }

        class InteropData implements IInteropData {
            constructor(p?: WAWa6.ClientPayload.IInteropData);
            public accountId?: (number|Long|null);
            public token?: (Uint8Array|null);
            public enableReadReceipts?: (boolean|null);
            public static create(properties?: WAWa6.ClientPayload.IInteropData): WAWa6.ClientPayload.InteropData;
            public static encode(m: WAWa6.ClientPayload.IInteropData, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.InteropData;
            public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.InteropData;
            public static toObject(m: WAWa6.ClientPayload.InteropData, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IDevicePairingRegistrationData {
            eRegid?: (Uint8Array|null);
            eKeytype?: (Uint8Array|null);
            eIdent?: (Uint8Array|null);
            eSkeyId?: (Uint8Array|null);
            eSkeyVal?: (Uint8Array|null);
            eSkeySig?: (Uint8Array|null);
            buildHash?: (Uint8Array|null);
            deviceProps?: (Uint8Array|null);
        }

        class DevicePairingRegistrationData implements IDevicePairingRegistrationData {
            constructor(p?: WAWa6.ClientPayload.IDevicePairingRegistrationData);
            public eRegid?: (Uint8Array|null);
            public eKeytype?: (Uint8Array|null);
            public eIdent?: (Uint8Array|null);
            public eSkeyId?: (Uint8Array|null);
            public eSkeyVal?: (Uint8Array|null);
            public eSkeySig?: (Uint8Array|null);
            public buildHash?: (Uint8Array|null);
            public deviceProps?: (Uint8Array|null);
            public static create(properties?: WAWa6.ClientPayload.IDevicePairingRegistrationData): WAWa6.ClientPayload.DevicePairingRegistrationData;
            public static encode(m: WAWa6.ClientPayload.IDevicePairingRegistrationData, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWa6.ClientPayload.DevicePairingRegistrationData;
            public static fromObject(d: { [k: string]: any }): WAWa6.ClientPayload.DevicePairingRegistrationData;
            public static toObject(m: WAWa6.ClientPayload.DevicePairingRegistrationData, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

