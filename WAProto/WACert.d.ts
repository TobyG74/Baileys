import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WACert {

    interface INoiseCertificate {
        details?: (Uint8Array|null);
        signature?: (Uint8Array|null);
    }

    class NoiseCertificate implements INoiseCertificate {
        constructor(p?: WACert.INoiseCertificate);
        public details?: (Uint8Array|null);
        public signature?: (Uint8Array|null);
        public static create(properties?: WACert.INoiseCertificate): WACert.NoiseCertificate;
        public static encode(m: WACert.INoiseCertificate, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACert.NoiseCertificate;
        public static fromObject(d: { [k: string]: any }): WACert.NoiseCertificate;
        public static toObject(m: WACert.NoiseCertificate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace NoiseCertificate {

        interface IDetails {
            serial?: (number|null);
            issuer?: (string|null);
            expires?: (number|Long|null);
            subject?: (string|null);
            key?: (Uint8Array|null);
        }

        class Details implements IDetails {
            constructor(p?: WACert.NoiseCertificate.IDetails);
            public serial?: (number|null);
            public issuer?: (string|null);
            public expires?: (number|Long|null);
            public subject?: (string|null);
            public key?: (Uint8Array|null);
            public static create(properties?: WACert.NoiseCertificate.IDetails): WACert.NoiseCertificate.Details;
            public static encode(m: WACert.NoiseCertificate.IDetails, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACert.NoiseCertificate.Details;
            public static fromObject(d: { [k: string]: any }): WACert.NoiseCertificate.Details;
            public static toObject(m: WACert.NoiseCertificate.Details, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface ICertChain {
        leaf?: (WACert.CertChain.INoiseCertificate|null);
        intermediate?: (WACert.CertChain.INoiseCertificate|null);
    }

    class CertChain implements ICertChain {
        constructor(p?: WACert.ICertChain);
        public leaf?: (WACert.CertChain.INoiseCertificate|null);
        public intermediate?: (WACert.CertChain.INoiseCertificate|null);
        public static create(properties?: WACert.ICertChain): WACert.CertChain;
        public static encode(m: WACert.ICertChain, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACert.CertChain;
        public static fromObject(d: { [k: string]: any }): WACert.CertChain;
        public static toObject(m: WACert.CertChain, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CertChain {

        interface INoiseCertificate {
            details?: (Uint8Array|null);
            signature?: (Uint8Array|null);
        }

        class NoiseCertificate implements INoiseCertificate {
            constructor(p?: WACert.CertChain.INoiseCertificate);
            public details?: (Uint8Array|null);
            public signature?: (Uint8Array|null);
            public static create(properties?: WACert.CertChain.INoiseCertificate): WACert.CertChain.NoiseCertificate;
            public static encode(m: WACert.CertChain.INoiseCertificate, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACert.CertChain.NoiseCertificate;
            public static fromObject(d: { [k: string]: any }): WACert.CertChain.NoiseCertificate;
            public static toObject(m: WACert.CertChain.NoiseCertificate, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace NoiseCertificate {

            interface IDetails {
                serial?: (number|null);
                issuerSerial?: (number|null);
                key?: (Uint8Array|null);
                notBefore?: (number|Long|null);
                notAfter?: (number|Long|null);
            }

            class Details implements IDetails {
                constructor(p?: WACert.CertChain.NoiseCertificate.IDetails);
                public serial?: (number|null);
                public issuerSerial?: (number|null);
                public key?: (Uint8Array|null);
                public notBefore?: (number|Long|null);
                public notAfter?: (number|Long|null);
                public static create(properties?: WACert.CertChain.NoiseCertificate.IDetails): WACert.CertChain.NoiseCertificate.Details;
                public static encode(m: WACert.CertChain.NoiseCertificate.IDetails, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WACert.CertChain.NoiseCertificate.Details;
                public static fromObject(d: { [k: string]: any }): WACert.CertChain.NoiseCertificate.Details;
                public static toObject(m: WACert.CertChain.NoiseCertificate.Details, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

