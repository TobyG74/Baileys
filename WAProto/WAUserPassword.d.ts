import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAUserPassword {

    interface IUserPassword {
        encoding?: (WAUserPassword.UserPassword.Encoding|null);
        transformer?: (WAUserPassword.UserPassword.Transformer|null);
        transformerArg?: (WAUserPassword.UserPassword.ITransformerArg[]|null);
        transformedData?: (Uint8Array|null);
    }

    class UserPassword implements IUserPassword {
        constructor(p?: WAUserPassword.IUserPassword);
        public encoding?: (WAUserPassword.UserPassword.Encoding|null);
        public transformer?: (WAUserPassword.UserPassword.Transformer|null);
        public transformerArg: WAUserPassword.UserPassword.ITransformerArg[];
        public transformedData?: (Uint8Array|null);
        public static create(properties?: WAUserPassword.IUserPassword): WAUserPassword.UserPassword;
        public static encode(m: WAUserPassword.IUserPassword, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAUserPassword.UserPassword;
        public static fromObject(d: { [k: string]: any }): WAUserPassword.UserPassword;
        public static toObject(m: WAUserPassword.UserPassword, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace UserPassword {

        enum Transformer {
            NONE = 0,
            PBKDF2_HMAC_SHA512 = 1,
            PBKDF2_HMAC_SHA384 = 2
        }

        enum Encoding {
            UTF8 = 0,
            UTF8_BROKEN = 1
        }

        interface ITransformerArg {
            key?: (string|null);
            value?: (WAUserPassword.UserPassword.TransformerArg.IValue|null);
        }

        class TransformerArg implements ITransformerArg {
            constructor(p?: WAUserPassword.UserPassword.ITransformerArg);
            public key?: (string|null);
            public value?: (WAUserPassword.UserPassword.TransformerArg.IValue|null);
            public static create(properties?: WAUserPassword.UserPassword.ITransformerArg): WAUserPassword.UserPassword.TransformerArg;
            public static encode(m: WAUserPassword.UserPassword.ITransformerArg, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAUserPassword.UserPassword.TransformerArg;
            public static fromObject(d: { [k: string]: any }): WAUserPassword.UserPassword.TransformerArg;
            public static toObject(m: WAUserPassword.UserPassword.TransformerArg, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace TransformerArg {

            interface IValue {
                asBlob?: (Uint8Array|null);
                asUnsignedInteger?: (number|null);
            }

            class Value implements IValue {
                constructor(p?: WAUserPassword.UserPassword.TransformerArg.IValue);
                public asBlob?: (Uint8Array|null);
                public asUnsignedInteger?: (number|null);
                public value?: ("asBlob"|"asUnsignedInteger");
                public static create(properties?: WAUserPassword.UserPassword.TransformerArg.IValue): WAUserPassword.UserPassword.TransformerArg.Value;
                public static encode(m: WAUserPassword.UserPassword.TransformerArg.IValue, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAUserPassword.UserPassword.TransformerArg.Value;
                public static fromObject(d: { [k: string]: any }): WAUserPassword.UserPassword.TransformerArg.Value;
                public static toObject(m: WAUserPassword.UserPassword.TransformerArg.Value, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

