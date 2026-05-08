import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAReporting {

    interface IReportable {
        minVersion?: (number|null);
        maxVersion?: (number|null);
        notReportableMinVersion?: (number|null);
        never?: (boolean|null);
    }

    class Reportable implements IReportable {
        constructor(p?: WAReporting.IReportable);
        public minVersion?: (number|null);
        public maxVersion?: (number|null);
        public notReportableMinVersion?: (number|null);
        public never?: (boolean|null);
        public static create(properties?: WAReporting.IReportable): WAReporting.Reportable;
        public static encode(m: WAReporting.IReportable, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAReporting.Reportable;
        public static fromObject(d: { [k: string]: any }): WAReporting.Reportable;
        public static toObject(m: WAReporting.Reportable, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IConfig {
        field?: ({ [k: string]: WAReporting.IField }|null);
        version?: (number|null);
    }

    class Config implements IConfig {
        constructor(p?: WAReporting.IConfig);
        public field: { [k: string]: WAReporting.IField };
        public version?: (number|null);
        public static create(properties?: WAReporting.IConfig): WAReporting.Config;
        public static encode(m: WAReporting.IConfig, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAReporting.Config;
        public static fromObject(d: { [k: string]: any }): WAReporting.Config;
        public static toObject(m: WAReporting.Config, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IField {
        minVersion?: (number|null);
        maxVersion?: (number|null);
        notReportableMinVersion?: (number|null);
        isMessage?: (boolean|null);
        subfield?: ({ [k: string]: WAReporting.IField }|null);
    }

    class Field implements IField {
        constructor(p?: WAReporting.IField);
        public minVersion?: (number|null);
        public maxVersion?: (number|null);
        public notReportableMinVersion?: (number|null);
        public isMessage?: (boolean|null);
        public subfield: { [k: string]: WAReporting.IField };
        public static create(properties?: WAReporting.IField): WAReporting.Field;
        public static encode(m: WAReporting.IField, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAReporting.Field;
        public static fromObject(d: { [k: string]: any }): WAReporting.Field;
        public static toObject(m: WAReporting.Field, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

