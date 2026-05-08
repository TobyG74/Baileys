import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WALidMigrationSyncPayload {

    interface ILIDMigrationMapping {
        pn?: (number|Long|null);
        assignedLid?: (number|Long|null);
        latestLid?: (number|Long|null);
    }

    class LIDMigrationMapping implements ILIDMigrationMapping {
        constructor(p?: WALidMigrationSyncPayload.ILIDMigrationMapping);
        public pn?: (number|Long|null);
        public assignedLid?: (number|Long|null);
        public latestLid?: (number|Long|null);
        public static create(properties?: WALidMigrationSyncPayload.ILIDMigrationMapping): WALidMigrationSyncPayload.LIDMigrationMapping;
        public static encode(m: WALidMigrationSyncPayload.ILIDMigrationMapping, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WALidMigrationSyncPayload.LIDMigrationMapping;
        public static fromObject(d: { [k: string]: any }): WALidMigrationSyncPayload.LIDMigrationMapping;
        public static toObject(m: WALidMigrationSyncPayload.LIDMigrationMapping, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILIDMigrationMappingSyncPayload {
        pnToLidMappings?: (WALidMigrationSyncPayload.ILIDMigrationMapping[]|null);
        chatDbMigrationTimestamp?: (number|Long|null);
    }

    class LIDMigrationMappingSyncPayload implements ILIDMigrationMappingSyncPayload {
        constructor(p?: WALidMigrationSyncPayload.ILIDMigrationMappingSyncPayload);
        public pnToLidMappings: WALidMigrationSyncPayload.ILIDMigrationMapping[];
        public chatDbMigrationTimestamp?: (number|Long|null);
        public static create(properties?: WALidMigrationSyncPayload.ILIDMigrationMappingSyncPayload): WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload;
        public static encode(m: WALidMigrationSyncPayload.ILIDMigrationMappingSyncPayload, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload;
        public static fromObject(d: { [k: string]: any }): WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload;
        public static toObject(m: WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

