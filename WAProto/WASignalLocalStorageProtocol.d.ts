import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WASignalLocalStorageProtocol {

    interface ISessionStructure {
        sessionVersion?: (number|null);
        localIdentityPublic?: (Uint8Array|null);
        remoteIdentityPublic?: (Uint8Array|null);
        rootKey?: (Uint8Array|null);
        previousCounter?: (number|null);
        senderChain?: (WASignalLocalStorageProtocol.SessionStructure.IChain|null);
        receiverChains?: (WASignalLocalStorageProtocol.SessionStructure.IChain[]|null);
        pendingKeyExchange?: (WASignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange|null);
        pendingPreKey?: (WASignalLocalStorageProtocol.SessionStructure.IPendingPreKey|null);
        remoteRegistrationId?: (number|null);
        localRegistrationId?: (number|null);
        needsRefresh?: (boolean|null);
        aliceBaseKey?: (Uint8Array|null);
    }

    class SessionStructure implements ISessionStructure {
        constructor(p?: WASignalLocalStorageProtocol.ISessionStructure);
        public sessionVersion?: (number|null);
        public localIdentityPublic?: (Uint8Array|null);
        public remoteIdentityPublic?: (Uint8Array|null);
        public rootKey?: (Uint8Array|null);
        public previousCounter?: (number|null);
        public senderChain?: (WASignalLocalStorageProtocol.SessionStructure.IChain|null);
        public receiverChains: WASignalLocalStorageProtocol.SessionStructure.IChain[];
        public pendingKeyExchange?: (WASignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange|null);
        public pendingPreKey?: (WASignalLocalStorageProtocol.SessionStructure.IPendingPreKey|null);
        public remoteRegistrationId?: (number|null);
        public localRegistrationId?: (number|null);
        public needsRefresh?: (boolean|null);
        public aliceBaseKey?: (Uint8Array|null);
        public static create(properties?: WASignalLocalStorageProtocol.ISessionStructure): WASignalLocalStorageProtocol.SessionStructure;
        public static encode(m: WASignalLocalStorageProtocol.ISessionStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SessionStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SessionStructure;
        public static toObject(m: WASignalLocalStorageProtocol.SessionStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SessionStructure {

        interface IPendingPreKey {
            preKeyId?: (number|null);
            signedPreKeyId?: (number|null);
            baseKey?: (Uint8Array|null);
        }

        class PendingPreKey implements IPendingPreKey {
            constructor(p?: WASignalLocalStorageProtocol.SessionStructure.IPendingPreKey);
            public preKeyId?: (number|null);
            public signedPreKeyId?: (number|null);
            public baseKey?: (Uint8Array|null);
            public static create(properties?: WASignalLocalStorageProtocol.SessionStructure.IPendingPreKey): WASignalLocalStorageProtocol.SessionStructure.PendingPreKey;
            public static encode(m: WASignalLocalStorageProtocol.SessionStructure.IPendingPreKey, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SessionStructure.PendingPreKey;
            public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SessionStructure.PendingPreKey;
            public static toObject(m: WASignalLocalStorageProtocol.SessionStructure.PendingPreKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPendingKeyExchange {
            sequence?: (number|null);
            localBaseKey?: (Uint8Array|null);
            localBaseKeyPrivate?: (Uint8Array|null);
            localRatchetKey?: (Uint8Array|null);
            localRatchetKeyPrivate?: (Uint8Array|null);
            localIdentityKey?: (Uint8Array|null);
            localIdentityKeyPrivate?: (Uint8Array|null);
        }

        class PendingKeyExchange implements IPendingKeyExchange {
            constructor(p?: WASignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange);
            public sequence?: (number|null);
            public localBaseKey?: (Uint8Array|null);
            public localBaseKeyPrivate?: (Uint8Array|null);
            public localRatchetKey?: (Uint8Array|null);
            public localRatchetKeyPrivate?: (Uint8Array|null);
            public localIdentityKey?: (Uint8Array|null);
            public localIdentityKeyPrivate?: (Uint8Array|null);
            public static create(properties?: WASignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange): WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;
            public static encode(m: WASignalLocalStorageProtocol.SessionStructure.IPendingKeyExchange, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;
            public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;
            public static toObject(m: WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IChain {
            senderRatchetKey?: (Uint8Array|null);
            senderRatchetKeyPrivate?: (Uint8Array|null);
            chainKey?: (WASignalLocalStorageProtocol.SessionStructure.Chain.IChainKey|null);
            messageKeys?: (WASignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey[]|null);
        }

        class Chain implements IChain {
            constructor(p?: WASignalLocalStorageProtocol.SessionStructure.IChain);
            public senderRatchetKey?: (Uint8Array|null);
            public senderRatchetKeyPrivate?: (Uint8Array|null);
            public chainKey?: (WASignalLocalStorageProtocol.SessionStructure.Chain.IChainKey|null);
            public messageKeys: WASignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey[];
            public static create(properties?: WASignalLocalStorageProtocol.SessionStructure.IChain): WASignalLocalStorageProtocol.SessionStructure.Chain;
            public static encode(m: WASignalLocalStorageProtocol.SessionStructure.IChain, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SessionStructure.Chain;
            public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SessionStructure.Chain;
            public static toObject(m: WASignalLocalStorageProtocol.SessionStructure.Chain, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Chain {

            interface IMessageKey {
                index?: (number|null);
                cipherKey?: (Uint8Array|null);
                macKey?: (Uint8Array|null);
                iv?: (Uint8Array|null);
            }

            class MessageKey implements IMessageKey {
                constructor(p?: WASignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey);
                public index?: (number|null);
                public cipherKey?: (Uint8Array|null);
                public macKey?: (Uint8Array|null);
                public iv?: (Uint8Array|null);
                public static create(properties?: WASignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey): WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;
                public static encode(m: WASignalLocalStorageProtocol.SessionStructure.Chain.IMessageKey, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;
                public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;
                public static toObject(m: WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IChainKey {
                index?: (number|null);
                key?: (Uint8Array|null);
            }

            class ChainKey implements IChainKey {
                constructor(p?: WASignalLocalStorageProtocol.SessionStructure.Chain.IChainKey);
                public index?: (number|null);
                public key?: (Uint8Array|null);
                public static create(properties?: WASignalLocalStorageProtocol.SessionStructure.Chain.IChainKey): WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;
                public static encode(m: WASignalLocalStorageProtocol.SessionStructure.Chain.IChainKey, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;
                public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;
                public static toObject(m: WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    interface IRecordStructure {
        currentSession?: (WASignalLocalStorageProtocol.ISessionStructure|null);
        previousSessions?: (WASignalLocalStorageProtocol.ISessionStructure[]|null);
    }

    class RecordStructure implements IRecordStructure {
        constructor(p?: WASignalLocalStorageProtocol.IRecordStructure);
        public currentSession?: (WASignalLocalStorageProtocol.ISessionStructure|null);
        public previousSessions: WASignalLocalStorageProtocol.ISessionStructure[];
        public static create(properties?: WASignalLocalStorageProtocol.IRecordStructure): WASignalLocalStorageProtocol.RecordStructure;
        public static encode(m: WASignalLocalStorageProtocol.IRecordStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.RecordStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.RecordStructure;
        public static toObject(m: WASignalLocalStorageProtocol.RecordStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPreKeyRecordStructure {
        id?: (number|null);
        publicKey?: (Uint8Array|null);
        privateKey?: (Uint8Array|null);
    }

    class PreKeyRecordStructure implements IPreKeyRecordStructure {
        constructor(p?: WASignalLocalStorageProtocol.IPreKeyRecordStructure);
        public id?: (number|null);
        public publicKey?: (Uint8Array|null);
        public privateKey?: (Uint8Array|null);
        public static create(properties?: WASignalLocalStorageProtocol.IPreKeyRecordStructure): WASignalLocalStorageProtocol.PreKeyRecordStructure;
        public static encode(m: WASignalLocalStorageProtocol.IPreKeyRecordStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.PreKeyRecordStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.PreKeyRecordStructure;
        public static toObject(m: WASignalLocalStorageProtocol.PreKeyRecordStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISignedPreKeyRecordStructure {
        id?: (number|null);
        publicKey?: (Uint8Array|null);
        privateKey?: (Uint8Array|null);
        signature?: (Uint8Array|null);
        timestamp?: (number|Long|null);
    }

    class SignedPreKeyRecordStructure implements ISignedPreKeyRecordStructure {
        constructor(p?: WASignalLocalStorageProtocol.ISignedPreKeyRecordStructure);
        public id?: (number|null);
        public publicKey?: (Uint8Array|null);
        public privateKey?: (Uint8Array|null);
        public signature?: (Uint8Array|null);
        public timestamp?: (number|Long|null);
        public static create(properties?: WASignalLocalStorageProtocol.ISignedPreKeyRecordStructure): WASignalLocalStorageProtocol.SignedPreKeyRecordStructure;
        public static encode(m: WASignalLocalStorageProtocol.ISignedPreKeyRecordStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SignedPreKeyRecordStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SignedPreKeyRecordStructure;
        public static toObject(m: WASignalLocalStorageProtocol.SignedPreKeyRecordStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IIdentityKeyPairStructure {
        publicKey?: (Uint8Array|null);
        privateKey?: (Uint8Array|null);
    }

    class IdentityKeyPairStructure implements IIdentityKeyPairStructure {
        constructor(p?: WASignalLocalStorageProtocol.IIdentityKeyPairStructure);
        public publicKey?: (Uint8Array|null);
        public privateKey?: (Uint8Array|null);
        public static create(properties?: WASignalLocalStorageProtocol.IIdentityKeyPairStructure): WASignalLocalStorageProtocol.IdentityKeyPairStructure;
        public static encode(m: WASignalLocalStorageProtocol.IIdentityKeyPairStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.IdentityKeyPairStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.IdentityKeyPairStructure;
        public static toObject(m: WASignalLocalStorageProtocol.IdentityKeyPairStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISenderKeyStateStructure {
        senderKeyId?: (number|null);
        senderChainKey?: (WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey|null);
        senderSigningKey?: (WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey|null);
        senderMessageKeys?: (WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey[]|null);
    }

    class SenderKeyStateStructure implements ISenderKeyStateStructure {
        constructor(p?: WASignalLocalStorageProtocol.ISenderKeyStateStructure);
        public senderKeyId?: (number|null);
        public senderChainKey?: (WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey|null);
        public senderSigningKey?: (WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey|null);
        public senderMessageKeys: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey[];
        public static create(properties?: WASignalLocalStorageProtocol.ISenderKeyStateStructure): WASignalLocalStorageProtocol.SenderKeyStateStructure;
        public static encode(m: WASignalLocalStorageProtocol.ISenderKeyStateStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SenderKeyStateStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SenderKeyStateStructure;
        public static toObject(m: WASignalLocalStorageProtocol.SenderKeyStateStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SenderKeyStateStructure {

        interface ISenderSigningKey {
            "public"?: (Uint8Array|null);
            "private"?: (Uint8Array|null);
        }

        class SenderSigningKey implements ISenderSigningKey {
            constructor(p?: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey);
            public public?: (Uint8Array|null);
            public private?: (Uint8Array|null);
            public static create(properties?: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;
            public static encode(m: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderSigningKey, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;
            public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;
            public static toObject(m: WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISenderMessageKey {
            iteration?: (number|null);
            seed?: (Uint8Array|null);
        }

        class SenderMessageKey implements ISenderMessageKey {
            constructor(p?: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey);
            public iteration?: (number|null);
            public seed?: (Uint8Array|null);
            public static create(properties?: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;
            public static encode(m: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderMessageKey, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;
            public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;
            public static toObject(m: WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISenderChainKey {
            iteration?: (number|null);
            seed?: (Uint8Array|null);
        }

        class SenderChainKey implements ISenderChainKey {
            constructor(p?: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey);
            public iteration?: (number|null);
            public seed?: (Uint8Array|null);
            public static create(properties?: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;
            public static encode(m: WASignalLocalStorageProtocol.SenderKeyStateStructure.ISenderChainKey, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;
            public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;
            public static toObject(m: WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface ISenderKeyRecordStructure {
        senderKeyStates?: (WASignalLocalStorageProtocol.ISenderKeyStateStructure[]|null);
    }

    class SenderKeyRecordStructure implements ISenderKeyRecordStructure {
        constructor(p?: WASignalLocalStorageProtocol.ISenderKeyRecordStructure);
        public senderKeyStates: WASignalLocalStorageProtocol.ISenderKeyStateStructure[];
        public static create(properties?: WASignalLocalStorageProtocol.ISenderKeyRecordStructure): WASignalLocalStorageProtocol.SenderKeyRecordStructure;
        public static encode(m: WASignalLocalStorageProtocol.ISenderKeyRecordStructure, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASignalLocalStorageProtocol.SenderKeyRecordStructure;
        public static fromObject(d: { [k: string]: any }): WASignalLocalStorageProtocol.SenderKeyRecordStructure;
        public static toObject(m: WASignalLocalStorageProtocol.SenderKeyRecordStructure, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

