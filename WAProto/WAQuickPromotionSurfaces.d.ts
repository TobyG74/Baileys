import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAQuickPromotionSurfaces {

    interface IQP {
    }

    class QP implements IQP {
        constructor(p?: WAQuickPromotionSurfaces.IQP);
        public static create(properties?: WAQuickPromotionSurfaces.IQP): WAQuickPromotionSurfaces.QP;
        public static encode(m: WAQuickPromotionSurfaces.IQP, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAQuickPromotionSurfaces.QP;
        public static fromObject(d: { [k: string]: any }): WAQuickPromotionSurfaces.QP;
        public static toObject(m: WAQuickPromotionSurfaces.QP, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace QP {

        enum FilterResult {
            TRUE = 1,
            FALSE = 2,
            UNKNOWN = 3
        }

        enum FilterClientNotSupportedConfig {
            PASS_BY_DEFAULT = 1,
            FAIL_BY_DEFAULT = 2
        }

        enum ClauseType {
            AND = 1,
            OR = 2,
            NOR = 3
        }

        interface IFilterClause {
            clauseType?: (WAQuickPromotionSurfaces.QP.ClauseType|null);
            clauses?: (WAQuickPromotionSurfaces.QP.IFilterClause[]|null);
            filters?: (WAQuickPromotionSurfaces.QP.IFilter[]|null);
        }

        class FilterClause implements IFilterClause {
            constructor(p?: WAQuickPromotionSurfaces.QP.IFilterClause);
            public clauseType?: (WAQuickPromotionSurfaces.QP.ClauseType|null);
            public clauses: WAQuickPromotionSurfaces.QP.IFilterClause[];
            public filters: WAQuickPromotionSurfaces.QP.IFilter[];
            public static create(properties?: WAQuickPromotionSurfaces.QP.IFilterClause): WAQuickPromotionSurfaces.QP.FilterClause;
            public static encode(m: WAQuickPromotionSurfaces.QP.IFilterClause, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAQuickPromotionSurfaces.QP.FilterClause;
            public static fromObject(d: { [k: string]: any }): WAQuickPromotionSurfaces.QP.FilterClause;
            public static toObject(m: WAQuickPromotionSurfaces.QP.FilterClause, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFilter {
            filterName?: (string|null);
            parameters?: (WAQuickPromotionSurfaces.QP.IFilterParameters[]|null);
            filterResult?: (WAQuickPromotionSurfaces.QP.FilterResult|null);
            clientNotSupportedConfig?: (WAQuickPromotionSurfaces.QP.FilterClientNotSupportedConfig|null);
        }

        class Filter implements IFilter {
            constructor(p?: WAQuickPromotionSurfaces.QP.IFilter);
            public filterName?: (string|null);
            public parameters: WAQuickPromotionSurfaces.QP.IFilterParameters[];
            public filterResult?: (WAQuickPromotionSurfaces.QP.FilterResult|null);
            public clientNotSupportedConfig?: (WAQuickPromotionSurfaces.QP.FilterClientNotSupportedConfig|null);
            public static create(properties?: WAQuickPromotionSurfaces.QP.IFilter): WAQuickPromotionSurfaces.QP.Filter;
            public static encode(m: WAQuickPromotionSurfaces.QP.IFilter, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAQuickPromotionSurfaces.QP.Filter;
            public static fromObject(d: { [k: string]: any }): WAQuickPromotionSurfaces.QP.Filter;
            public static toObject(m: WAQuickPromotionSurfaces.QP.Filter, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFilterParameters {
            key?: (string|null);
            value?: (string|null);
        }

        class FilterParameters implements IFilterParameters {
            constructor(p?: WAQuickPromotionSurfaces.QP.IFilterParameters);
            public key?: (string|null);
            public value?: (string|null);
            public static create(properties?: WAQuickPromotionSurfaces.QP.IFilterParameters): WAQuickPromotionSurfaces.QP.FilterParameters;
            public static encode(m: WAQuickPromotionSurfaces.QP.IFilterParameters, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAQuickPromotionSurfaces.QP.FilterParameters;
            public static fromObject(d: { [k: string]: any }): WAQuickPromotionSurfaces.QP.FilterParameters;
            public static toObject(m: WAQuickPromotionSurfaces.QP.FilterParameters, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

