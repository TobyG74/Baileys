import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAMdStorageChatRowOpaqueData {

    interface IChatRowOpaqueData {
        draftMessage?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage|null);
    }

    class ChatRowOpaqueData implements IChatRowOpaqueData {
        constructor(p?: WAMdStorageChatRowOpaqueData.IChatRowOpaqueData);
        public draftMessage?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage|null);
        public static create(properties?: WAMdStorageChatRowOpaqueData.IChatRowOpaqueData): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData;
        public static encode(m: WAMdStorageChatRowOpaqueData.IChatRowOpaqueData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData;
        public static fromObject(d: { [k: string]: any }): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData;
        public static toObject(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ChatRowOpaqueData {

        interface IDraftMessage {
            text?: (string|null);
            omittedURL?: (string|null);
            ctwaContextLinkData?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData|null);
            ctwaContext?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData|null);
            timestamp?: (number|Long|null);
        }

        class DraftMessage implements IDraftMessage {
            constructor(p?: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage);
            public text?: (string|null);
            public omittedURL?: (string|null);
            public ctwaContextLinkData?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData|null);
            public ctwaContext?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData|null);
            public timestamp?: (number|Long|null);
            public static create(properties?: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;
            public static encode(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;
            public static fromObject(d: { [k: string]: any }): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage;
            public static toObject(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DraftMessage {

            interface ICtwaContextData {
                conversionSource?: (string|null);
                conversionData?: (Uint8Array|null);
                sourceURL?: (string|null);
                sourceID?: (string|null);
                sourceType?: (string|null);
                title?: (string|null);
                description?: (string|null);
                thumbnail?: (string|null);
                thumbnailURL?: (string|null);
                mediaType?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null);
                mediaURL?: (string|null);
                isSuspiciousLink?: (boolean|null);
            }

            class CtwaContextData implements ICtwaContextData {
                constructor(p?: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData);
                public conversionSource?: (string|null);
                public conversionData?: (Uint8Array|null);
                public sourceURL?: (string|null);
                public sourceID?: (string|null);
                public sourceType?: (string|null);
                public title?: (string|null);
                public description?: (string|null);
                public thumbnail?: (string|null);
                public thumbnailURL?: (string|null);
                public mediaType?: (WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null);
                public mediaURL?: (string|null);
                public isSuspiciousLink?: (boolean|null);
                public static create(properties?: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;
                public static encode(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;
                public static fromObject(d: { [k: string]: any }): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData;
                public static toObject(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CtwaContextData {

                enum ContextInfoExternalAdReplyInfoMediaType {
                    NONE = 0,
                    IMAGE = 1,
                    VIDEO = 2
                }
            }

            interface ICtwaContextLinkData {
                context?: (string|null);
                sourceURL?: (string|null);
                icebreaker?: (string|null);
                phone?: (string|null);
            }

            class CtwaContextLinkData implements ICtwaContextLinkData {
                constructor(p?: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData);
                public context?: (string|null);
                public sourceURL?: (string|null);
                public icebreaker?: (string|null);
                public phone?: (string|null);
                public static create(properties?: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;
                public static encode(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;
                public static fromObject(d: { [k: string]: any }): WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData;
                public static toObject(m: WAMdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

