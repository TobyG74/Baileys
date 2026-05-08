import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAAICommonDeprecated {

    enum AIRichResponseMessageType {
        AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,
        AI_RICH_RESPONSE_TYPE_STANDARD = 1
    }

    enum AIRichResponseSubMessageType {
        AI_RICH_RESPONSE_UNKNOWN = 0,
        AI_RICH_RESPONSE_GRID_IMAGE = 1,
        AI_RICH_RESPONSE_TEXT = 2,
        AI_RICH_RESPONSE_INLINE_IMAGE = 3,
        AI_RICH_RESPONSE_TABLE = 4,
        AI_RICH_RESPONSE_CODE = 5,
        AI_RICH_RESPONSE_DYNAMIC = 6,
        AI_RICH_RESPONSE_MAP = 7,
        AI_RICH_RESPONSE_LATEX = 8,
        AI_RICH_RESPONSE_CONTENT_ITEMS = 9
    }

    interface IAIRichResponseInlineImageMetadata {
        imageURL?: (WAAICommonDeprecated.IAIRichResponseImageURL|null);
        imageText?: (string|null);
        alignment?: (WAAICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);
        tapLinkURL?: (string|null);
    }

    class AIRichResponseInlineImageMetadata implements IAIRichResponseInlineImageMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseInlineImageMetadata);
        public imageURL?: (WAAICommonDeprecated.IAIRichResponseImageURL|null);
        public imageText?: (string|null);
        public alignment?: (WAAICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);
        public tapLinkURL?: (string|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseInlineImageMetadata): WAAICommonDeprecated.AIRichResponseInlineImageMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseInlineImageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseInlineImageMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseInlineImageMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseInlineImageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseInlineImageMetadata {

        enum AIRichResponseImageAlignment {
            AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2
        }
    }

    interface IAIRichResponseCodeMetadata {
        codeLanguage?: (string|null);
        codeBlocks?: (WAAICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock[]|null);
    }

    class AIRichResponseCodeMetadata implements IAIRichResponseCodeMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseCodeMetadata);
        public codeLanguage?: (string|null);
        public codeBlocks: WAAICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock[];
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseCodeMetadata): WAAICommonDeprecated.AIRichResponseCodeMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseCodeMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseCodeMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseCodeMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseCodeMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseCodeMetadata {

        enum AIRichResponseCodeHighlightType {
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5
        }

        interface IAIRichResponseCodeBlock {
            highlightType?: (WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);
            codeContent?: (string|null);
        }

        class AIRichResponseCodeBlock implements IAIRichResponseCodeBlock {
            constructor(p?: WAAICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock);
            public highlightType?: (WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);
            public codeContent?: (string|null);
            public static create(properties?: WAAICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock): WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;
            public static encode(m: WAAICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;
            public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;
            public static toObject(m: WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IAIRichResponseDynamicMetadata {
        type?: (WAAICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);
        version?: (number|Long|null);
        URL?: (string|null);
        loopCount?: (number|null);
    }

    class AIRichResponseDynamicMetadata implements IAIRichResponseDynamicMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseDynamicMetadata);
        public type?: (WAAICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);
        public version?: (number|Long|null);
        public URL?: (string|null);
        public loopCount?: (number|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseDynamicMetadata): WAAICommonDeprecated.AIRichResponseDynamicMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseDynamicMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseDynamicMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseDynamicMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseDynamicMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseDynamicMetadata {

        enum AIRichResponseDynamicMetadataType {
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2
        }
    }

    interface IAIRichResponseContentItemsMetadata {
        itemsMetadata?: (WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata[]|null);
        contentType?: (WAAICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null);
    }

    class AIRichResponseContentItemsMetadata implements IAIRichResponseContentItemsMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseContentItemsMetadata);
        public itemsMetadata: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata[];
        public contentType?: (WAAICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseContentItemsMetadata): WAAICommonDeprecated.AIRichResponseContentItemsMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseContentItemsMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseContentItemsMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseContentItemsMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseContentItemsMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseContentItemsMetadata {

        enum ContentType {
            DEFAULT = 0,
            CAROUSEL = 1
        }

        interface IAIRichResponseContentItemMetadata {
            reelItem?: (WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null);
        }

        class AIRichResponseContentItemMetadata implements IAIRichResponseContentItemMetadata {
            constructor(p?: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata);
            public reelItem?: (WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null);
            public aIRichResponseContentItem?: "reelItem";
            public static create(properties?: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata): WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;
            public static encode(m: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;
            public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;
            public static toObject(m: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IAIRichResponseReelItem {
            title?: (string|null);
            profileIconURL?: (string|null);
            thumbnailURL?: (string|null);
            videoURL?: (string|null);
        }

        class AIRichResponseReelItem implements IAIRichResponseReelItem {
            constructor(p?: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem);
            public title?: (string|null);
            public profileIconURL?: (string|null);
            public thumbnailURL?: (string|null);
            public videoURL?: (string|null);
            public static create(properties?: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem): WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;
            public static encode(m: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;
            public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;
            public static toObject(m: WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IAIRichResponseImageURL {
        imagePreviewURL?: (string|null);
        imageHighResURL?: (string|null);
        sourceURL?: (string|null);
    }

    class AIRichResponseImageURL implements IAIRichResponseImageURL {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseImageURL);
        public imagePreviewURL?: (string|null);
        public imageHighResURL?: (string|null);
        public sourceURL?: (string|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseImageURL): WAAICommonDeprecated.AIRichResponseImageURL;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseImageURL, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseImageURL;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseImageURL;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseImageURL, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIRichResponseGridImageMetadata {
        gridImageURL?: (WAAICommonDeprecated.IAIRichResponseImageURL|null);
        imageURLs?: (WAAICommonDeprecated.IAIRichResponseImageURL[]|null);
    }

    class AIRichResponseGridImageMetadata implements IAIRichResponseGridImageMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseGridImageMetadata);
        public gridImageURL?: (WAAICommonDeprecated.IAIRichResponseImageURL|null);
        public imageURLs: WAAICommonDeprecated.IAIRichResponseImageURL[];
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseGridImageMetadata): WAAICommonDeprecated.AIRichResponseGridImageMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseGridImageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseGridImageMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseGridImageMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseGridImageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIRichResponseTableMetadata {
        rows?: (WAAICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow[]|null);
        title?: (string|null);
    }

    class AIRichResponseTableMetadata implements IAIRichResponseTableMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseTableMetadata);
        public rows: WAAICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow[];
        public title?: (string|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseTableMetadata): WAAICommonDeprecated.AIRichResponseTableMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseTableMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseTableMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseTableMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseTableMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseTableMetadata {

        interface IAIRichResponseTableRow {
            items?: (string[]|null);
            isHeading?: (boolean|null);
        }

        class AIRichResponseTableRow implements IAIRichResponseTableRow {
            constructor(p?: WAAICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow);
            public items: string[];
            public isHeading?: (boolean|null);
            public static create(properties?: WAAICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow): WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;
            public static encode(m: WAAICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;
            public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;
            public static toObject(m: WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IAIRichResponseLatexMetadata {
        text?: (string|null);
        expressions?: (WAAICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression[]|null);
    }

    class AIRichResponseLatexMetadata implements IAIRichResponseLatexMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseLatexMetadata);
        public text?: (string|null);
        public expressions: WAAICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression[];
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseLatexMetadata): WAAICommonDeprecated.AIRichResponseLatexMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseLatexMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseLatexMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseLatexMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseLatexMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseLatexMetadata {

        interface IAIRichResponseLatexExpression {
            latexExpression?: (string|null);
            URL?: (string|null);
            width?: (number|null);
            height?: (number|null);
            fontHeight?: (number|null);
            imageTopPadding?: (number|null);
            imageLeadingPadding?: (number|null);
            imageBottomPadding?: (number|null);
            imageTrailingPadding?: (number|null);
        }

        class AIRichResponseLatexExpression implements IAIRichResponseLatexExpression {
            constructor(p?: WAAICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression);
            public latexExpression?: (string|null);
            public URL?: (string|null);
            public width?: (number|null);
            public height?: (number|null);
            public fontHeight?: (number|null);
            public imageTopPadding?: (number|null);
            public imageLeadingPadding?: (number|null);
            public imageBottomPadding?: (number|null);
            public imageTrailingPadding?: (number|null);
            public static create(properties?: WAAICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression): WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;
            public static encode(m: WAAICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;
            public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;
            public static toObject(m: WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IAIRichResponseMapMetadata {
        centerLatitude?: (number|null);
        centerLongitude?: (number|null);
        latitudeDelta?: (number|null);
        longitudeDelta?: (number|null);
        annotations?: (WAAICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation[]|null);
        showInfoList?: (boolean|null);
    }

    class AIRichResponseMapMetadata implements IAIRichResponseMapMetadata {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseMapMetadata);
        public centerLatitude?: (number|null);
        public centerLongitude?: (number|null);
        public latitudeDelta?: (number|null);
        public longitudeDelta?: (number|null);
        public annotations: WAAICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation[];
        public showInfoList?: (boolean|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseMapMetadata): WAAICommonDeprecated.AIRichResponseMapMetadata;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseMapMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseMapMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseMapMetadata;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseMapMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseMapMetadata {

        interface IAIRichResponseMapAnnotation {
            annotationNumber?: (number|null);
            latitude?: (number|null);
            longitude?: (number|null);
            title?: (string|null);
            body?: (string|null);
        }

        class AIRichResponseMapAnnotation implements IAIRichResponseMapAnnotation {
            constructor(p?: WAAICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation);
            public annotationNumber?: (number|null);
            public latitude?: (number|null);
            public longitude?: (number|null);
            public title?: (string|null);
            public body?: (string|null);
            public static create(properties?: WAAICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation): WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;
            public static encode(m: WAAICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;
            public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;
            public static toObject(m: WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IAIRichResponseSubMessage {
        messageType?: (WAAICommonDeprecated.AIRichResponseSubMessageType|null);
        gridImageMetadata?: (WAAICommonDeprecated.IAIRichResponseGridImageMetadata|null);
        messageText?: (string|null);
        imageMetadata?: (WAAICommonDeprecated.IAIRichResponseInlineImageMetadata|null);
        codeMetadata?: (WAAICommonDeprecated.IAIRichResponseCodeMetadata|null);
        tableMetadata?: (WAAICommonDeprecated.IAIRichResponseTableMetadata|null);
        dynamicMetadata?: (WAAICommonDeprecated.IAIRichResponseDynamicMetadata|null);
        latexMetadata?: (WAAICommonDeprecated.IAIRichResponseLatexMetadata|null);
        mapMetadata?: (WAAICommonDeprecated.IAIRichResponseMapMetadata|null);
        contentItemsMetadata?: (WAAICommonDeprecated.IAIRichResponseContentItemsMetadata|null);
    }

    class AIRichResponseSubMessage implements IAIRichResponseSubMessage {
        constructor(p?: WAAICommonDeprecated.IAIRichResponseSubMessage);
        public messageType?: (WAAICommonDeprecated.AIRichResponseSubMessageType|null);
        public gridImageMetadata?: (WAAICommonDeprecated.IAIRichResponseGridImageMetadata|null);
        public messageText?: (string|null);
        public imageMetadata?: (WAAICommonDeprecated.IAIRichResponseInlineImageMetadata|null);
        public codeMetadata?: (WAAICommonDeprecated.IAIRichResponseCodeMetadata|null);
        public tableMetadata?: (WAAICommonDeprecated.IAIRichResponseTableMetadata|null);
        public dynamicMetadata?: (WAAICommonDeprecated.IAIRichResponseDynamicMetadata|null);
        public latexMetadata?: (WAAICommonDeprecated.IAIRichResponseLatexMetadata|null);
        public mapMetadata?: (WAAICommonDeprecated.IAIRichResponseMapMetadata|null);
        public contentItemsMetadata?: (WAAICommonDeprecated.IAIRichResponseContentItemsMetadata|null);
        public static create(properties?: WAAICommonDeprecated.IAIRichResponseSubMessage): WAAICommonDeprecated.AIRichResponseSubMessage;
        public static encode(m: WAAICommonDeprecated.IAIRichResponseSubMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommonDeprecated.AIRichResponseSubMessage;
        public static fromObject(d: { [k: string]: any }): WAAICommonDeprecated.AIRichResponseSubMessage;
        public static toObject(m: WAAICommonDeprecated.AIRichResponseSubMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

