import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAServerSync {

    interface ISyncdMutation {
        operation?: (WAServerSync.SyncdMutation.SyncdOperation|null);
        record?: (WAServerSync.ISyncdRecord|null);
    }

    class SyncdMutation implements ISyncdMutation {
        constructor(p?: WAServerSync.ISyncdMutation);
        public operation?: (WAServerSync.SyncdMutation.SyncdOperation|null);
        public record?: (WAServerSync.ISyncdRecord|null);
        public static create(properties?: WAServerSync.ISyncdMutation): WAServerSync.SyncdMutation;
        public static encode(m: WAServerSync.ISyncdMutation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdMutation;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdMutation;
        public static toObject(m: WAServerSync.SyncdMutation, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SyncdMutation {

        enum SyncdOperation {
            SET = 0,
            REMOVE = 1
        }
    }

    interface ISyncdVersion {
        version?: (number|Long|null);
    }

    class SyncdVersion implements ISyncdVersion {
        constructor(p?: WAServerSync.ISyncdVersion);
        public version?: (number|Long|null);
        public static create(properties?: WAServerSync.ISyncdVersion): WAServerSync.SyncdVersion;
        public static encode(m: WAServerSync.ISyncdVersion, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdVersion;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdVersion;
        public static toObject(m: WAServerSync.SyncdVersion, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IExitCode {
        code?: (number|Long|null);
        text?: (string|null);
    }

    class ExitCode implements IExitCode {
        constructor(p?: WAServerSync.IExitCode);
        public code?: (number|Long|null);
        public text?: (string|null);
        public static create(properties?: WAServerSync.IExitCode): WAServerSync.ExitCode;
        public static encode(m: WAServerSync.IExitCode, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.ExitCode;
        public static fromObject(d: { [k: string]: any }): WAServerSync.ExitCode;
        public static toObject(m: WAServerSync.ExitCode, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncdIndex {
        blob?: (Uint8Array|null);
    }

    class SyncdIndex implements ISyncdIndex {
        constructor(p?: WAServerSync.ISyncdIndex);
        public blob?: (Uint8Array|null);
        public static create(properties?: WAServerSync.ISyncdIndex): WAServerSync.SyncdIndex;
        public static encode(m: WAServerSync.ISyncdIndex, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdIndex;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdIndex;
        public static toObject(m: WAServerSync.SyncdIndex, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncdValue {
        blob?: (Uint8Array|null);
    }

    class SyncdValue implements ISyncdValue {
        constructor(p?: WAServerSync.ISyncdValue);
        public blob?: (Uint8Array|null);
        public static create(properties?: WAServerSync.ISyncdValue): WAServerSync.SyncdValue;
        public static encode(m: WAServerSync.ISyncdValue, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdValue;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdValue;
        public static toObject(m: WAServerSync.SyncdValue, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IKeyId {
        ID?: (Uint8Array|null);
    }

    class KeyId implements IKeyId {
        constructor(p?: WAServerSync.IKeyId);
        public ID?: (Uint8Array|null);
        public static create(properties?: WAServerSync.IKeyId): WAServerSync.KeyId;
        public static encode(m: WAServerSync.IKeyId, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.KeyId;
        public static fromObject(d: { [k: string]: any }): WAServerSync.KeyId;
        public static toObject(m: WAServerSync.KeyId, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncdRecord {
        index?: (WAServerSync.ISyncdIndex|null);
        value?: (WAServerSync.ISyncdValue|null);
        keyID?: (WAServerSync.IKeyId|null);
    }

    class SyncdRecord implements ISyncdRecord {
        constructor(p?: WAServerSync.ISyncdRecord);
        public index?: (WAServerSync.ISyncdIndex|null);
        public value?: (WAServerSync.ISyncdValue|null);
        public keyID?: (WAServerSync.IKeyId|null);
        public static create(properties?: WAServerSync.ISyncdRecord): WAServerSync.SyncdRecord;
        public static encode(m: WAServerSync.ISyncdRecord, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdRecord;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdRecord;
        public static toObject(m: WAServerSync.SyncdRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IExternalBlobReference {
        mediaKey?: (Uint8Array|null);
        directPath?: (string|null);
        handle?: (string|null);
        fileSizeBytes?: (number|Long|null);
        fileSHA256?: (Uint8Array|null);
        fileEncSHA256?: (Uint8Array|null);
    }

    class ExternalBlobReference implements IExternalBlobReference {
        constructor(p?: WAServerSync.IExternalBlobReference);
        public mediaKey?: (Uint8Array|null);
        public directPath?: (string|null);
        public handle?: (string|null);
        public fileSizeBytes?: (number|Long|null);
        public fileSHA256?: (Uint8Array|null);
        public fileEncSHA256?: (Uint8Array|null);
        public static create(properties?: WAServerSync.IExternalBlobReference): WAServerSync.ExternalBlobReference;
        public static encode(m: WAServerSync.IExternalBlobReference, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.ExternalBlobReference;
        public static fromObject(d: { [k: string]: any }): WAServerSync.ExternalBlobReference;
        public static toObject(m: WAServerSync.ExternalBlobReference, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncdSnapshot {
        version?: (WAServerSync.ISyncdVersion|null);
        records?: (WAServerSync.ISyncdRecord[]|null);
        mac?: (Uint8Array|null);
        keyID?: (WAServerSync.IKeyId|null);
    }

    class SyncdSnapshot implements ISyncdSnapshot {
        constructor(p?: WAServerSync.ISyncdSnapshot);
        public version?: (WAServerSync.ISyncdVersion|null);
        public records: WAServerSync.ISyncdRecord[];
        public mac?: (Uint8Array|null);
        public keyID?: (WAServerSync.IKeyId|null);
        public static create(properties?: WAServerSync.ISyncdSnapshot): WAServerSync.SyncdSnapshot;
        public static encode(m: WAServerSync.ISyncdSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdSnapshot;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdSnapshot;
        public static toObject(m: WAServerSync.SyncdSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncdMutations {
        mutations?: (WAServerSync.ISyncdMutation[]|null);
    }

    class SyncdMutations implements ISyncdMutations {
        constructor(p?: WAServerSync.ISyncdMutations);
        public mutations: WAServerSync.ISyncdMutation[];
        public static create(properties?: WAServerSync.ISyncdMutations): WAServerSync.SyncdMutations;
        public static encode(m: WAServerSync.ISyncdMutations, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdMutations;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdMutations;
        public static toObject(m: WAServerSync.SyncdMutations, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncdPatch {
        version?: (WAServerSync.ISyncdVersion|null);
        mutations?: (WAServerSync.ISyncdMutation[]|null);
        externalMutations?: (WAServerSync.IExternalBlobReference|null);
        snapshotMAC?: (Uint8Array|null);
        patchMAC?: (Uint8Array|null);
        keyID?: (WAServerSync.IKeyId|null);
        exitCode?: (WAServerSync.IExitCode|null);
        deviceIndex?: (number|null);
        clientDebugData?: (Uint8Array|null);
    }

    class SyncdPatch implements ISyncdPatch {
        constructor(p?: WAServerSync.ISyncdPatch);
        public version?: (WAServerSync.ISyncdVersion|null);
        public mutations: WAServerSync.ISyncdMutation[];
        public externalMutations?: (WAServerSync.IExternalBlobReference|null);
        public snapshotMAC?: (Uint8Array|null);
        public patchMAC?: (Uint8Array|null);
        public keyID?: (WAServerSync.IKeyId|null);
        public exitCode?: (WAServerSync.IExitCode|null);
        public deviceIndex?: (number|null);
        public clientDebugData?: (Uint8Array|null);
        public static create(properties?: WAServerSync.ISyncdPatch): WAServerSync.SyncdPatch;
        public static encode(m: WAServerSync.ISyncdPatch, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAServerSync.SyncdPatch;
        public static fromObject(d: { [k: string]: any }): WAServerSync.SyncdPatch;
        public static toObject(m: WAServerSync.SyncdPatch, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

