import { WAAICommon } from './WAAICommon.d';

import { WAAICommonDeprecated } from './WAAICommonDeprecated.d';

import { WAAdv } from './WAAdv.d';

import { WACompanionReg } from './WACompanionReg.d';

import { WAMmsRetry } from './WAMmsRetry.d';

import { WACommon } from './WACommon.d';

import { WAStatusAttributions } from './WAStatusAttributions.d';import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAE2E {

    enum PollType {
        POLL = 0,
        QUIZ = 1
    }

    enum PollContentType {
        UNKNOWN = 0,
        TEXT = 1,
        IMAGE = 2
    }

    enum InsightDeliveryState {
        SENT = 0,
        DELIVERED = 1,
        READ = 2,
        REPLIED = 3,
        QUICK_REPLIED = 4
    }

    enum PeerDataOperationRequestType {
        UPLOAD_STICKER = 0,
        SEND_RECENT_STICKER_BOOTSTRAP = 1,
        GENERATE_LINK_PREVIEW = 2,
        HISTORY_SYNC_ON_DEMAND = 3,
        PLACEHOLDER_MESSAGE_RESEND = 4,
        WAFFLE_LINKING_NONCE_FETCH = 5,
        FULL_HISTORY_SYNC_ON_DEMAND = 6,
        COMPANION_META_NONCE_FETCH = 7,
        COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY = 8,
        COMPANION_CANONICAL_USER_NONCE_FETCH = 9,
        HISTORY_SYNC_CHUNK_RETRY = 10,
        GALAXY_FLOW_ACTION = 11,
        BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO = 12,
        BUSINESS_BROADCAST_INSIGHTS_REFRESH = 13
    }

    enum HistorySyncType {
        INITIAL_BOOTSTRAP = 0,
        INITIAL_STATUS_V3 = 1,
        FULL = 2,
        RECENT = 3,
        PUSH_NAME = 4,
        NON_BLOCKING_DATA = 5,
        ON_DEMAND = 6,
        NO_HISTORY = 7,
        MESSAGE_ACCESS_STATUS = 8
    }

    enum MediaKeyDomain {
        MEDIA_KEY_DOMAIN_UNKNOWN = 0,
        MEDIA_KEY_DOMAIN_E2EE = 1,
        MEDIA_KEY_DOMAIN_NON_E2EE = 2
    }

    enum WebLinkRenderConfig {
        WEBVIEW = 0,
        SYSTEM = 1
    }

    enum KeepType {
        UNKNOWN = 0,
        KEEP_FOR_ALL = 1,
        UNDO_KEEP_FOR_ALL = 2
    }

    interface IStickerPackMessage {
        stickerPackId?: (string|null);
        name?: (string|null);
        publisher?: (string|null);
        stickers?: (WAE2E.StickerPackMessage.ISticker[]|null);
        fileLength?: (number|Long|null);
        fileSha256?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        directPath?: (string|null);
        caption?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        packDescription?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        trayIconFileName?: (string|null);
        thumbnailDirectPath?: (string|null);
        thumbnailSha256?: (Uint8Array|null);
        thumbnailEncSha256?: (Uint8Array|null);
        thumbnailHeight?: (number|null);
        thumbnailWidth?: (number|null);
        imageDataHash?: (string|null);
        stickerPackSize?: (number|Long|null);
        stickerPackOrigin?: (WAE2E.StickerPackMessage.StickerPackOrigin|null);
    }

    class StickerPackMessage implements IStickerPackMessage {
        constructor(p?: WAE2E.IStickerPackMessage);
        public stickerPackId?: (string|null);
        public name?: (string|null);
        public publisher?: (string|null);
        public stickers: WAE2E.StickerPackMessage.ISticker[];
        public fileLength?: (number|Long|null);
        public fileSha256?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public directPath?: (string|null);
        public caption?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public packDescription?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public trayIconFileName?: (string|null);
        public thumbnailDirectPath?: (string|null);
        public thumbnailSha256?: (Uint8Array|null);
        public thumbnailEncSha256?: (Uint8Array|null);
        public thumbnailHeight?: (number|null);
        public thumbnailWidth?: (number|null);
        public imageDataHash?: (string|null);
        public stickerPackSize?: (number|Long|null);
        public stickerPackOrigin?: (WAE2E.StickerPackMessage.StickerPackOrigin|null);
        public static create(properties?: WAE2E.IStickerPackMessage): WAE2E.StickerPackMessage;
        public static encode(m: WAE2E.IStickerPackMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StickerPackMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StickerPackMessage;
        public static toObject(m: WAE2E.StickerPackMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StickerPackMessage {

        enum StickerPackOrigin {
            FIRST_PARTY = 0,
            THIRD_PARTY = 1,
            USER_CREATED = 2
        }

        interface ISticker {
            fileName?: (string|null);
            isAnimated?: (boolean|null);
            emojis?: (string[]|null);
            accessibilityLabel?: (string|null);
            isLottie?: (boolean|null);
            mimetype?: (string|null);
            premium?: (number|null);
        }

        class Sticker implements ISticker {
            constructor(p?: WAE2E.StickerPackMessage.ISticker);
            public fileName?: (string|null);
            public isAnimated?: (boolean|null);
            public emojis: string[];
            public accessibilityLabel?: (string|null);
            public isLottie?: (boolean|null);
            public mimetype?: (string|null);
            public premium?: (number|null);
            public static create(properties?: WAE2E.StickerPackMessage.ISticker): WAE2E.StickerPackMessage.Sticker;
            public static encode(m: WAE2E.StickerPackMessage.ISticker, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StickerPackMessage.Sticker;
            public static fromObject(d: { [k: string]: any }): WAE2E.StickerPackMessage.Sticker;
            public static toObject(m: WAE2E.StickerPackMessage.Sticker, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IPlaceholderMessage {
        type?: (WAE2E.PlaceholderMessage.PlaceholderType|null);
    }

    class PlaceholderMessage implements IPlaceholderMessage {
        constructor(p?: WAE2E.IPlaceholderMessage);
        public type?: (WAE2E.PlaceholderMessage.PlaceholderType|null);
        public static create(properties?: WAE2E.IPlaceholderMessage): WAE2E.PlaceholderMessage;
        public static encode(m: WAE2E.IPlaceholderMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PlaceholderMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PlaceholderMessage;
        public static toObject(m: WAE2E.PlaceholderMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PlaceholderMessage {

        enum PlaceholderType {
            MASK_LINKED_DEVICES = 0
        }
    }

    interface IBCallMessage {
        sessionId?: (string|null);
        mediaType?: (WAE2E.BCallMessage.MediaType|null);
        masterKey?: (Uint8Array|null);
        caption?: (string|null);
    }

    class BCallMessage implements IBCallMessage {
        constructor(p?: WAE2E.IBCallMessage);
        public sessionId?: (string|null);
        public mediaType?: (WAE2E.BCallMessage.MediaType|null);
        public masterKey?: (Uint8Array|null);
        public caption?: (string|null);
        public static create(properties?: WAE2E.IBCallMessage): WAE2E.BCallMessage;
        public static encode(m: WAE2E.IBCallMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.BCallMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.BCallMessage;
        public static toObject(m: WAE2E.BCallMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BCallMessage {

        enum MediaType {
            UNKNOWN = 0,
            AUDIO = 1,
            VIDEO = 2
        }
    }

    interface ICallLogMessage {
        isVideo?: (boolean|null);
        callOutcome?: (WAE2E.CallLogMessage.CallOutcome|null);
        durationSecs?: (number|Long|null);
        callType?: (WAE2E.CallLogMessage.CallType|null);
        participants?: (WAE2E.CallLogMessage.ICallParticipant[]|null);
    }

    class CallLogMessage implements ICallLogMessage {
        constructor(p?: WAE2E.ICallLogMessage);
        public isVideo?: (boolean|null);
        public callOutcome?: (WAE2E.CallLogMessage.CallOutcome|null);
        public durationSecs?: (number|Long|null);
        public callType?: (WAE2E.CallLogMessage.CallType|null);
        public participants: WAE2E.CallLogMessage.ICallParticipant[];
        public static create(properties?: WAE2E.ICallLogMessage): WAE2E.CallLogMessage;
        public static encode(m: WAE2E.ICallLogMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.CallLogMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.CallLogMessage;
        public static toObject(m: WAE2E.CallLogMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CallLogMessage {

        enum CallOutcome {
            CONNECTED = 0,
            MISSED = 1,
            FAILED = 2,
            REJECTED = 3,
            ACCEPTED_ELSEWHERE = 4,
            ONGOING = 5,
            SILENCED_BY_DND = 6,
            SILENCED_UNKNOWN_CALLER = 7
        }

        enum CallType {
            REGULAR = 0,
            SCHEDULED_CALL = 1,
            VOICE_CHAT = 2
        }

        interface ICallParticipant {
            jid?: (string|null);
            callOutcome?: (WAE2E.CallLogMessage.CallOutcome|null);
        }

        class CallParticipant implements ICallParticipant {
            constructor(p?: WAE2E.CallLogMessage.ICallParticipant);
            public jid?: (string|null);
            public callOutcome?: (WAE2E.CallLogMessage.CallOutcome|null);
            public static create(properties?: WAE2E.CallLogMessage.ICallParticipant): WAE2E.CallLogMessage.CallParticipant;
            public static encode(m: WAE2E.CallLogMessage.ICallParticipant, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.CallLogMessage.CallParticipant;
            public static fromObject(d: { [k: string]: any }): WAE2E.CallLogMessage.CallParticipant;
            public static toObject(m: WAE2E.CallLogMessage.CallParticipant, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IScheduledCallEditMessage {
        key?: (WACommon.IMessageKey|null);
        editType?: (WAE2E.ScheduledCallEditMessage.EditType|null);
    }

    class ScheduledCallEditMessage implements IScheduledCallEditMessage {
        constructor(p?: WAE2E.IScheduledCallEditMessage);
        public key?: (WACommon.IMessageKey|null);
        public editType?: (WAE2E.ScheduledCallEditMessage.EditType|null);
        public static create(properties?: WAE2E.IScheduledCallEditMessage): WAE2E.ScheduledCallEditMessage;
        public static encode(m: WAE2E.IScheduledCallEditMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ScheduledCallEditMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ScheduledCallEditMessage;
        public static toObject(m: WAE2E.ScheduledCallEditMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ScheduledCallEditMessage {

        enum EditType {
            UNKNOWN = 0,
            CANCEL = 1
        }
    }

    interface IScheduledCallCreationMessage {
        scheduledTimestampMs?: (number|Long|null);
        callType?: (WAE2E.ScheduledCallCreationMessage.CallType|null);
        title?: (string|null);
    }

    class ScheduledCallCreationMessage implements IScheduledCallCreationMessage {
        constructor(p?: WAE2E.IScheduledCallCreationMessage);
        public scheduledTimestampMs?: (number|Long|null);
        public callType?: (WAE2E.ScheduledCallCreationMessage.CallType|null);
        public title?: (string|null);
        public static create(properties?: WAE2E.IScheduledCallCreationMessage): WAE2E.ScheduledCallCreationMessage;
        public static encode(m: WAE2E.IScheduledCallCreationMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ScheduledCallCreationMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ScheduledCallCreationMessage;
        public static toObject(m: WAE2E.ScheduledCallCreationMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ScheduledCallCreationMessage {

        enum CallType {
            UNKNOWN = 0,
            VOICE = 1,
            VIDEO = 2
        }
    }

    interface IEventResponseMessage {
        response?: (WAE2E.EventResponseMessage.EventResponseType|null);
        timestampMs?: (number|Long|null);
        extraGuestCount?: (number|null);
    }

    class EventResponseMessage implements IEventResponseMessage {
        constructor(p?: WAE2E.IEventResponseMessage);
        public response?: (WAE2E.EventResponseMessage.EventResponseType|null);
        public timestampMs?: (number|Long|null);
        public extraGuestCount?: (number|null);
        public static create(properties?: WAE2E.IEventResponseMessage): WAE2E.EventResponseMessage;
        public static encode(m: WAE2E.IEventResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EventResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EventResponseMessage;
        public static toObject(m: WAE2E.EventResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace EventResponseMessage {

        enum EventResponseType {
            UNKNOWN = 0,
            GOING = 1,
            NOT_GOING = 2,
            MAYBE = 3
        }
    }

    interface IPinInChatMessage {
        key?: (WACommon.IMessageKey|null);
        type?: (WAE2E.PinInChatMessage.Type|null);
        senderTimestampMs?: (number|Long|null);
    }

    class PinInChatMessage implements IPinInChatMessage {
        constructor(p?: WAE2E.IPinInChatMessage);
        public key?: (WACommon.IMessageKey|null);
        public type?: (WAE2E.PinInChatMessage.Type|null);
        public senderTimestampMs?: (number|Long|null);
        public static create(properties?: WAE2E.IPinInChatMessage): WAE2E.PinInChatMessage;
        public static encode(m: WAE2E.IPinInChatMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PinInChatMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PinInChatMessage;
        public static toObject(m: WAE2E.PinInChatMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PinInChatMessage {

        enum Type {
            UNKNOWN_TYPE = 0,
            PIN_FOR_ALL = 1,
            UNPIN_FOR_ALL = 2
        }
    }

    interface IStatusStickerInteractionMessage {
        key?: (WACommon.IMessageKey|null);
        stickerKey?: (string|null);
        type?: (WAE2E.StatusStickerInteractionMessage.StatusStickerType|null);
    }

    class StatusStickerInteractionMessage implements IStatusStickerInteractionMessage {
        constructor(p?: WAE2E.IStatusStickerInteractionMessage);
        public key?: (WACommon.IMessageKey|null);
        public stickerKey?: (string|null);
        public type?: (WAE2E.StatusStickerInteractionMessage.StatusStickerType|null);
        public static create(properties?: WAE2E.IStatusStickerInteractionMessage): WAE2E.StatusStickerInteractionMessage;
        public static encode(m: WAE2E.IStatusStickerInteractionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StatusStickerInteractionMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StatusStickerInteractionMessage;
        public static toObject(m: WAE2E.StatusStickerInteractionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusStickerInteractionMessage {

        enum StatusStickerType {
            UNKNOWN = 0,
            REACTION = 1
        }
    }

    interface IButtonsResponseMessage {
        selectedDisplayText?: (string|null);
        selectedButtonId?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        type?: (WAE2E.ButtonsResponseMessage.Type|null);
    }

    class ButtonsResponseMessage implements IButtonsResponseMessage {
        constructor(p?: WAE2E.IButtonsResponseMessage);
        public selectedDisplayText?: (string|null);
        public selectedButtonId?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public type?: (WAE2E.ButtonsResponseMessage.Type|null);
        public response?: "selectedDisplayText";
        public static create(properties?: WAE2E.IButtonsResponseMessage): WAE2E.ButtonsResponseMessage;
        public static encode(m: WAE2E.IButtonsResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ButtonsResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ButtonsResponseMessage;
        public static toObject(m: WAE2E.ButtonsResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ButtonsResponseMessage {

        enum Type {
            UNKNOWN = 0,
            DISPLAY_TEXT = 1
        }
    }

    interface IButtonsMessage {
        text?: (string|null);
        documentMessage?: (WAE2E.IDocumentMessage|null);
        imageMessage?: (WAE2E.IImageMessage|null);
        videoMessage?: (WAE2E.IVideoMessage|null);
        locationMessage?: (WAE2E.ILocationMessage|null);
        contentText?: (string|null);
        footerText?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        buttons?: (WAE2E.ButtonsMessage.IButton[]|null);
        headerType?: (WAE2E.ButtonsMessage.HeaderType|null);
    }

    class ButtonsMessage implements IButtonsMessage {
        constructor(p?: WAE2E.IButtonsMessage);
        public text?: (string|null);
        public documentMessage?: (WAE2E.IDocumentMessage|null);
        public imageMessage?: (WAE2E.IImageMessage|null);
        public videoMessage?: (WAE2E.IVideoMessage|null);
        public locationMessage?: (WAE2E.ILocationMessage|null);
        public contentText?: (string|null);
        public footerText?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public buttons: WAE2E.ButtonsMessage.IButton[];
        public headerType?: (WAE2E.ButtonsMessage.HeaderType|null);
        public header?: ("text"|"documentMessage"|"imageMessage"|"videoMessage"|"locationMessage");
        public static create(properties?: WAE2E.IButtonsMessage): WAE2E.ButtonsMessage;
        public static encode(m: WAE2E.IButtonsMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ButtonsMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ButtonsMessage;
        public static toObject(m: WAE2E.ButtonsMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ButtonsMessage {

        enum HeaderType {
            UNKNOWN = 0,
            EMPTY = 1,
            TEXT = 2,
            DOCUMENT = 3,
            IMAGE = 4,
            VIDEO = 5,
            LOCATION = 6
        }

        interface IButton {
            buttonId?: (string|null);
            buttonText?: (WAE2E.ButtonsMessage.Button.IButtonText|null);
            type?: (WAE2E.ButtonsMessage.Button.Type|null);
            nativeFlowInfo?: (WAE2E.ButtonsMessage.Button.INativeFlowInfo|null);
        }

        class Button implements IButton {
            constructor(p?: WAE2E.ButtonsMessage.IButton);
            public buttonId?: (string|null);
            public buttonText?: (WAE2E.ButtonsMessage.Button.IButtonText|null);
            public type?: (WAE2E.ButtonsMessage.Button.Type|null);
            public nativeFlowInfo?: (WAE2E.ButtonsMessage.Button.INativeFlowInfo|null);
            public static create(properties?: WAE2E.ButtonsMessage.IButton): WAE2E.ButtonsMessage.Button;
            public static encode(m: WAE2E.ButtonsMessage.IButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ButtonsMessage.Button;
            public static fromObject(d: { [k: string]: any }): WAE2E.ButtonsMessage.Button;
            public static toObject(m: WAE2E.ButtonsMessage.Button, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Button {

            enum Type {
                UNKNOWN = 0,
                RESPONSE = 1,
                NATIVE_FLOW = 2
            }

            interface INativeFlowInfo {
                name?: (string|null);
                paramsJson?: (string|null);
            }

            class NativeFlowInfo implements INativeFlowInfo {
                constructor(p?: WAE2E.ButtonsMessage.Button.INativeFlowInfo);
                public name?: (string|null);
                public paramsJson?: (string|null);
                public static create(properties?: WAE2E.ButtonsMessage.Button.INativeFlowInfo): WAE2E.ButtonsMessage.Button.NativeFlowInfo;
                public static encode(m: WAE2E.ButtonsMessage.Button.INativeFlowInfo, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ButtonsMessage.Button.NativeFlowInfo;
                public static fromObject(d: { [k: string]: any }): WAE2E.ButtonsMessage.Button.NativeFlowInfo;
                public static toObject(m: WAE2E.ButtonsMessage.Button.NativeFlowInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IButtonText {
                displayText?: (string|null);
            }

            class ButtonText implements IButtonText {
                constructor(p?: WAE2E.ButtonsMessage.Button.IButtonText);
                public displayText?: (string|null);
                public static create(properties?: WAE2E.ButtonsMessage.Button.IButtonText): WAE2E.ButtonsMessage.Button.ButtonText;
                public static encode(m: WAE2E.ButtonsMessage.Button.IButtonText, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ButtonsMessage.Button.ButtonText;
                public static fromObject(d: { [k: string]: any }): WAE2E.ButtonsMessage.Button.ButtonText;
                public static toObject(m: WAE2E.ButtonsMessage.Button.ButtonText, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    interface IConditionalRevealMessage {
        encPayload?: (Uint8Array|null);
        encIv?: (Uint8Array|null);
        conditionalRevealMessageType?: (WAE2E.ConditionalRevealMessage.ConditionalRevealMessageType|null);
        revealKeyId?: (string|null);
    }

    class ConditionalRevealMessage implements IConditionalRevealMessage {
        constructor(p?: WAE2E.IConditionalRevealMessage);
        public encPayload?: (Uint8Array|null);
        public encIv?: (Uint8Array|null);
        public conditionalRevealMessageType?: (WAE2E.ConditionalRevealMessage.ConditionalRevealMessageType|null);
        public revealKeyId?: (string|null);
        public static create(properties?: WAE2E.IConditionalRevealMessage): WAE2E.ConditionalRevealMessage;
        public static encode(m: WAE2E.IConditionalRevealMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ConditionalRevealMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ConditionalRevealMessage;
        public static toObject(m: WAE2E.ConditionalRevealMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ConditionalRevealMessage {

        enum ConditionalRevealMessageType {
            UNKNOWN = 0,
            SCHEDULED_MESSAGE = 1
        }
    }

    interface ISecretEncryptedMessage {
        targetMessageKey?: (WACommon.IMessageKey|null);
        encPayload?: (Uint8Array|null);
        encIv?: (Uint8Array|null);
        secretEncType?: (WAE2E.SecretEncryptedMessage.SecretEncType|null);
        remoteKeyId?: (string|null);
    }

    class SecretEncryptedMessage implements ISecretEncryptedMessage {
        constructor(p?: WAE2E.ISecretEncryptedMessage);
        public targetMessageKey?: (WACommon.IMessageKey|null);
        public encPayload?: (Uint8Array|null);
        public encIv?: (Uint8Array|null);
        public secretEncType?: (WAE2E.SecretEncryptedMessage.SecretEncType|null);
        public remoteKeyId?: (string|null);
        public static create(properties?: WAE2E.ISecretEncryptedMessage): WAE2E.SecretEncryptedMessage;
        public static encode(m: WAE2E.ISecretEncryptedMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.SecretEncryptedMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.SecretEncryptedMessage;
        public static toObject(m: WAE2E.SecretEncryptedMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SecretEncryptedMessage {

        enum SecretEncType {
            UNKNOWN = 0,
            EVENT_EDIT = 1,
            MESSAGE_EDIT = 2,
            MESSAGE_SCHEDULE = 3,
            POLL_EDIT = 4,
            POLL_ADD_OPTION = 5
        }
    }

    interface IGroupInviteMessage {
        groupJid?: (string|null);
        inviteCode?: (string|null);
        inviteExpiration?: (number|Long|null);
        groupName?: (string|null);
        jpegThumbnail?: (Uint8Array|null);
        caption?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        groupType?: (WAE2E.GroupInviteMessage.GroupType|null);
    }

    class GroupInviteMessage implements IGroupInviteMessage {
        constructor(p?: WAE2E.IGroupInviteMessage);
        public groupJid?: (string|null);
        public inviteCode?: (string|null);
        public inviteExpiration?: (number|Long|null);
        public groupName?: (string|null);
        public jpegThumbnail?: (Uint8Array|null);
        public caption?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public groupType?: (WAE2E.GroupInviteMessage.GroupType|null);
        public static create(properties?: WAE2E.IGroupInviteMessage): WAE2E.GroupInviteMessage;
        public static encode(m: WAE2E.IGroupInviteMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.GroupInviteMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.GroupInviteMessage;
        public static toObject(m: WAE2E.GroupInviteMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace GroupInviteMessage {

        enum GroupType {
            DEFAULT = 0,
            PARENT = 1
        }
    }

    interface IInteractiveResponseMessage {
        nativeFlowResponseMessage?: (WAE2E.InteractiveResponseMessage.INativeFlowResponseMessage|null);
        body?: (WAE2E.InteractiveResponseMessage.IBody|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class InteractiveResponseMessage implements IInteractiveResponseMessage {
        constructor(p?: WAE2E.IInteractiveResponseMessage);
        public nativeFlowResponseMessage?: (WAE2E.InteractiveResponseMessage.INativeFlowResponseMessage|null);
        public body?: (WAE2E.InteractiveResponseMessage.IBody|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public interactiveResponseMessage?: "nativeFlowResponseMessage";
        public static create(properties?: WAE2E.IInteractiveResponseMessage): WAE2E.InteractiveResponseMessage;
        public static encode(m: WAE2E.IInteractiveResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveResponseMessage;
        public static toObject(m: WAE2E.InteractiveResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InteractiveResponseMessage {

        interface IBody {
            text?: (string|null);
            format?: (WAE2E.InteractiveResponseMessage.Body.Format|null);
        }

        class Body implements IBody {
            constructor(p?: WAE2E.InteractiveResponseMessage.IBody);
            public text?: (string|null);
            public format?: (WAE2E.InteractiveResponseMessage.Body.Format|null);
            public static create(properties?: WAE2E.InteractiveResponseMessage.IBody): WAE2E.InteractiveResponseMessage.Body;
            public static encode(m: WAE2E.InteractiveResponseMessage.IBody, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveResponseMessage.Body;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveResponseMessage.Body;
            public static toObject(m: WAE2E.InteractiveResponseMessage.Body, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Body {

            enum Format {
                DEFAULT = 0,
                EXTENSIONS_1 = 1
            }
        }

        interface INativeFlowResponseMessage {
            name?: (string|null);
            paramsJson?: (string|null);
            version?: (number|null);
        }

        class NativeFlowResponseMessage implements INativeFlowResponseMessage {
            constructor(p?: WAE2E.InteractiveResponseMessage.INativeFlowResponseMessage);
            public name?: (string|null);
            public paramsJson?: (string|null);
            public version?: (number|null);
            public static create(properties?: WAE2E.InteractiveResponseMessage.INativeFlowResponseMessage): WAE2E.InteractiveResponseMessage.NativeFlowResponseMessage;
            public static encode(m: WAE2E.InteractiveResponseMessage.INativeFlowResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveResponseMessage.NativeFlowResponseMessage;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveResponseMessage.NativeFlowResponseMessage;
            public static toObject(m: WAE2E.InteractiveResponseMessage.NativeFlowResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IInteractiveMessage {
        shopStorefrontMessage?: (WAE2E.InteractiveMessage.IShopMessage|null);
        collectionMessage?: (WAE2E.InteractiveMessage.ICollectionMessage|null);
        nativeFlowMessage?: (WAE2E.InteractiveMessage.INativeFlowMessage|null);
        carouselMessage?: (WAE2E.InteractiveMessage.ICarouselMessage|null);
        header?: (WAE2E.InteractiveMessage.IHeader|null);
        body?: (WAE2E.InteractiveMessage.IBody|null);
        footer?: (WAE2E.InteractiveMessage.IFooter|null);
        bloksWidget?: (WAE2E.InteractiveMessage.IBloksWidget|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        urlTrackingMap?: (WAE2E.IUrlTrackingMap|null);
    }

    class InteractiveMessage implements IInteractiveMessage {
        constructor(p?: WAE2E.IInteractiveMessage);
        public shopStorefrontMessage?: (WAE2E.InteractiveMessage.IShopMessage|null);
        public collectionMessage?: (WAE2E.InteractiveMessage.ICollectionMessage|null);
        public nativeFlowMessage?: (WAE2E.InteractiveMessage.INativeFlowMessage|null);
        public carouselMessage?: (WAE2E.InteractiveMessage.ICarouselMessage|null);
        public header?: (WAE2E.InteractiveMessage.IHeader|null);
        public body?: (WAE2E.InteractiveMessage.IBody|null);
        public footer?: (WAE2E.InteractiveMessage.IFooter|null);
        public bloksWidget?: (WAE2E.InteractiveMessage.IBloksWidget|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public urlTrackingMap?: (WAE2E.IUrlTrackingMap|null);
        public interactiveMessage?: ("shopStorefrontMessage"|"collectionMessage"|"nativeFlowMessage"|"carouselMessage");
        public static create(properties?: WAE2E.IInteractiveMessage): WAE2E.InteractiveMessage;
        public static encode(m: WAE2E.IInteractiveMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage;
        public static toObject(m: WAE2E.InteractiveMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InteractiveMessage {

        interface ICarouselMessage {
            cards?: (WAE2E.IInteractiveMessage[]|null);
            messageVersion?: (number|null);
            carouselCardType?: (WAE2E.InteractiveMessage.CarouselMessage.CarouselCardType|null);
        }

        class CarouselMessage implements ICarouselMessage {
            constructor(p?: WAE2E.InteractiveMessage.ICarouselMessage);
            public cards: WAE2E.IInteractiveMessage[];
            public messageVersion?: (number|null);
            public carouselCardType?: (WAE2E.InteractiveMessage.CarouselMessage.CarouselCardType|null);
            public static create(properties?: WAE2E.InteractiveMessage.ICarouselMessage): WAE2E.InteractiveMessage.CarouselMessage;
            public static encode(m: WAE2E.InteractiveMessage.ICarouselMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.CarouselMessage;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.CarouselMessage;
            public static toObject(m: WAE2E.InteractiveMessage.CarouselMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CarouselMessage {

            enum CarouselCardType {
                UNKNOWN = 0,
                HSCROLL_CARDS = 1,
                ALBUM_IMAGE = 2
            }
        }

        interface IShopMessage {
            id?: (string|null);
            surface?: (WAE2E.InteractiveMessage.ShopMessage.Surface|null);
            messageVersion?: (number|null);
        }

        class ShopMessage implements IShopMessage {
            constructor(p?: WAE2E.InteractiveMessage.IShopMessage);
            public id?: (string|null);
            public surface?: (WAE2E.InteractiveMessage.ShopMessage.Surface|null);
            public messageVersion?: (number|null);
            public static create(properties?: WAE2E.InteractiveMessage.IShopMessage): WAE2E.InteractiveMessage.ShopMessage;
            public static encode(m: WAE2E.InteractiveMessage.IShopMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.ShopMessage;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.ShopMessage;
            public static toObject(m: WAE2E.InteractiveMessage.ShopMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ShopMessage {

            enum Surface {
                UNKNOWN_SURFACE = 0,
                FB = 1,
                IG = 2,
                WA = 3
            }
        }

        interface INativeFlowMessage {
            buttons?: (WAE2E.InteractiveMessage.NativeFlowMessage.INativeFlowButton[]|null);
            messageParamsJson?: (string|null);
            messageVersion?: (number|null);
        }

        class NativeFlowMessage implements INativeFlowMessage {
            constructor(p?: WAE2E.InteractiveMessage.INativeFlowMessage);
            public buttons: WAE2E.InteractiveMessage.NativeFlowMessage.INativeFlowButton[];
            public messageParamsJson?: (string|null);
            public messageVersion?: (number|null);
            public static create(properties?: WAE2E.InteractiveMessage.INativeFlowMessage): WAE2E.InteractiveMessage.NativeFlowMessage;
            public static encode(m: WAE2E.InteractiveMessage.INativeFlowMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.NativeFlowMessage;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.NativeFlowMessage;
            public static toObject(m: WAE2E.InteractiveMessage.NativeFlowMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace NativeFlowMessage {

            interface INativeFlowButton {
                name?: (string|null);
                buttonParamsJson?: (string|null);
            }

            class NativeFlowButton implements INativeFlowButton {
                constructor(p?: WAE2E.InteractiveMessage.NativeFlowMessage.INativeFlowButton);
                public name?: (string|null);
                public buttonParamsJson?: (string|null);
                public static create(properties?: WAE2E.InteractiveMessage.NativeFlowMessage.INativeFlowButton): WAE2E.InteractiveMessage.NativeFlowMessage.NativeFlowButton;
                public static encode(m: WAE2E.InteractiveMessage.NativeFlowMessage.INativeFlowButton, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.NativeFlowMessage.NativeFlowButton;
                public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.NativeFlowMessage.NativeFlowButton;
                public static toObject(m: WAE2E.InteractiveMessage.NativeFlowMessage.NativeFlowButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface ICollectionMessage {
            bizJid?: (string|null);
            id?: (string|null);
            messageVersion?: (number|null);
        }

        class CollectionMessage implements ICollectionMessage {
            constructor(p?: WAE2E.InteractiveMessage.ICollectionMessage);
            public bizJid?: (string|null);
            public id?: (string|null);
            public messageVersion?: (number|null);
            public static create(properties?: WAE2E.InteractiveMessage.ICollectionMessage): WAE2E.InteractiveMessage.CollectionMessage;
            public static encode(m: WAE2E.InteractiveMessage.ICollectionMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.CollectionMessage;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.CollectionMessage;
            public static toObject(m: WAE2E.InteractiveMessage.CollectionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBloksWidget {
            uuid?: (string|null);
            data?: (string|null);
            type?: (string|null);
        }

        class BloksWidget implements IBloksWidget {
            constructor(p?: WAE2E.InteractiveMessage.IBloksWidget);
            public uuid?: (string|null);
            public data?: (string|null);
            public type?: (string|null);
            public static create(properties?: WAE2E.InteractiveMessage.IBloksWidget): WAE2E.InteractiveMessage.BloksWidget;
            public static encode(m: WAE2E.InteractiveMessage.IBloksWidget, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.BloksWidget;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.BloksWidget;
            public static toObject(m: WAE2E.InteractiveMessage.BloksWidget, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFooter {
            audioMessage?: (WAE2E.IAudioMessage|null);
            text?: (string|null);
            hasMediaAttachment?: (boolean|null);
        }

        class Footer implements IFooter {
            constructor(p?: WAE2E.InteractiveMessage.IFooter);
            public audioMessage?: (WAE2E.IAudioMessage|null);
            public text?: (string|null);
            public hasMediaAttachment?: (boolean|null);
            public media?: "audioMessage";
            public static create(properties?: WAE2E.InteractiveMessage.IFooter): WAE2E.InteractiveMessage.Footer;
            public static encode(m: WAE2E.InteractiveMessage.IFooter, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.Footer;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.Footer;
            public static toObject(m: WAE2E.InteractiveMessage.Footer, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBody {
            text?: (string|null);
        }

        class Body implements IBody {
            constructor(p?: WAE2E.InteractiveMessage.IBody);
            public text?: (string|null);
            public static create(properties?: WAE2E.InteractiveMessage.IBody): WAE2E.InteractiveMessage.Body;
            public static encode(m: WAE2E.InteractiveMessage.IBody, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.Body;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.Body;
            public static toObject(m: WAE2E.InteractiveMessage.Body, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IHeader {
            documentMessage?: (WAE2E.IDocumentMessage|null);
            imageMessage?: (WAE2E.IImageMessage|null);
            jpegThumbnail?: (Uint8Array|null);
            videoMessage?: (WAE2E.IVideoMessage|null);
            locationMessage?: (WAE2E.ILocationMessage|null);
            productMessage?: (WAE2E.IProductMessage|null);
            title?: (string|null);
            subtitle?: (string|null);
            hasMediaAttachment?: (boolean|null);
            bloksWidget?: (WAE2E.InteractiveMessage.IBloksWidget|null);
        }

        class Header implements IHeader {
            constructor(p?: WAE2E.InteractiveMessage.IHeader);
            public documentMessage?: (WAE2E.IDocumentMessage|null);
            public imageMessage?: (WAE2E.IImageMessage|null);
            public jpegThumbnail?: (Uint8Array|null);
            public videoMessage?: (WAE2E.IVideoMessage|null);
            public locationMessage?: (WAE2E.ILocationMessage|null);
            public productMessage?: (WAE2E.IProductMessage|null);
            public title?: (string|null);
            public subtitle?: (string|null);
            public hasMediaAttachment?: (boolean|null);
            public bloksWidget?: (WAE2E.InteractiveMessage.IBloksWidget|null);
            public media?: ("documentMessage"|"imageMessage"|"jpegThumbnail"|"videoMessage"|"locationMessage"|"productMessage");
            public static create(properties?: WAE2E.InteractiveMessage.IHeader): WAE2E.InteractiveMessage.Header;
            public static encode(m: WAE2E.InteractiveMessage.IHeader, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveMessage.Header;
            public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveMessage.Header;
            public static toObject(m: WAE2E.InteractiveMessage.Header, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IListResponseMessage {
        title?: (string|null);
        listType?: (WAE2E.ListResponseMessage.ListType|null);
        singleSelectReply?: (WAE2E.ListResponseMessage.ISingleSelectReply|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        description?: (string|null);
    }

    class ListResponseMessage implements IListResponseMessage {
        constructor(p?: WAE2E.IListResponseMessage);
        public title?: (string|null);
        public listType?: (WAE2E.ListResponseMessage.ListType|null);
        public singleSelectReply?: (WAE2E.ListResponseMessage.ISingleSelectReply|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public description?: (string|null);
        public static create(properties?: WAE2E.IListResponseMessage): WAE2E.ListResponseMessage;
        public static encode(m: WAE2E.IListResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ListResponseMessage;
        public static toObject(m: WAE2E.ListResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ListResponseMessage {

        enum ListType {
            UNKNOWN = 0,
            SINGLE_SELECT = 1
        }

        interface ISingleSelectReply {
            selectedRowId?: (string|null);
        }

        class SingleSelectReply implements ISingleSelectReply {
            constructor(p?: WAE2E.ListResponseMessage.ISingleSelectReply);
            public selectedRowId?: (string|null);
            public static create(properties?: WAE2E.ListResponseMessage.ISingleSelectReply): WAE2E.ListResponseMessage.SingleSelectReply;
            public static encode(m: WAE2E.ListResponseMessage.ISingleSelectReply, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListResponseMessage.SingleSelectReply;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListResponseMessage.SingleSelectReply;
            public static toObject(m: WAE2E.ListResponseMessage.SingleSelectReply, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IListMessage {
        title?: (string|null);
        description?: (string|null);
        buttonText?: (string|null);
        listType?: (WAE2E.ListMessage.ListType|null);
        sections?: (WAE2E.ListMessage.ISection[]|null);
        productListInfo?: (WAE2E.ListMessage.IProductListInfo|null);
        footerText?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class ListMessage implements IListMessage {
        constructor(p?: WAE2E.IListMessage);
        public title?: (string|null);
        public description?: (string|null);
        public buttonText?: (string|null);
        public listType?: (WAE2E.ListMessage.ListType|null);
        public sections: WAE2E.ListMessage.ISection[];
        public productListInfo?: (WAE2E.ListMessage.IProductListInfo|null);
        public footerText?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.IListMessage): WAE2E.ListMessage;
        public static encode(m: WAE2E.IListMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage;
        public static toObject(m: WAE2E.ListMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ListMessage {

        enum ListType {
            UNKNOWN = 0,
            SINGLE_SELECT = 1,
            PRODUCT_LIST = 2
        }

        interface IProductListInfo {
            productSections?: (WAE2E.ListMessage.IProductSection[]|null);
            headerImage?: (WAE2E.ListMessage.IProductListHeaderImage|null);
            businessOwnerJid?: (string|null);
        }

        class ProductListInfo implements IProductListInfo {
            constructor(p?: WAE2E.ListMessage.IProductListInfo);
            public productSections: WAE2E.ListMessage.IProductSection[];
            public headerImage?: (WAE2E.ListMessage.IProductListHeaderImage|null);
            public businessOwnerJid?: (string|null);
            public static create(properties?: WAE2E.ListMessage.IProductListInfo): WAE2E.ListMessage.ProductListInfo;
            public static encode(m: WAE2E.ListMessage.IProductListInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage.ProductListInfo;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage.ProductListInfo;
            public static toObject(m: WAE2E.ListMessage.ProductListInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IProductListHeaderImage {
            productId?: (string|null);
            jpegThumbnail?: (Uint8Array|null);
        }

        class ProductListHeaderImage implements IProductListHeaderImage {
            constructor(p?: WAE2E.ListMessage.IProductListHeaderImage);
            public productId?: (string|null);
            public jpegThumbnail?: (Uint8Array|null);
            public static create(properties?: WAE2E.ListMessage.IProductListHeaderImage): WAE2E.ListMessage.ProductListHeaderImage;
            public static encode(m: WAE2E.ListMessage.IProductListHeaderImage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage.ProductListHeaderImage;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage.ProductListHeaderImage;
            public static toObject(m: WAE2E.ListMessage.ProductListHeaderImage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IProductSection {
            title?: (string|null);
            products?: (WAE2E.ListMessage.IProduct[]|null);
        }

        class ProductSection implements IProductSection {
            constructor(p?: WAE2E.ListMessage.IProductSection);
            public title?: (string|null);
            public products: WAE2E.ListMessage.IProduct[];
            public static create(properties?: WAE2E.ListMessage.IProductSection): WAE2E.ListMessage.ProductSection;
            public static encode(m: WAE2E.ListMessage.IProductSection, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage.ProductSection;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage.ProductSection;
            public static toObject(m: WAE2E.ListMessage.ProductSection, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IProduct {
            productId?: (string|null);
        }

        class Product implements IProduct {
            constructor(p?: WAE2E.ListMessage.IProduct);
            public productId?: (string|null);
            public static create(properties?: WAE2E.ListMessage.IProduct): WAE2E.ListMessage.Product;
            public static encode(m: WAE2E.ListMessage.IProduct, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage.Product;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage.Product;
            public static toObject(m: WAE2E.ListMessage.Product, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISection {
            title?: (string|null);
            rows?: (WAE2E.ListMessage.IRow[]|null);
        }

        class Section implements ISection {
            constructor(p?: WAE2E.ListMessage.ISection);
            public title?: (string|null);
            public rows: WAE2E.ListMessage.IRow[];
            public static create(properties?: WAE2E.ListMessage.ISection): WAE2E.ListMessage.Section;
            public static encode(m: WAE2E.ListMessage.ISection, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage.Section;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage.Section;
            public static toObject(m: WAE2E.ListMessage.Section, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IRow {
            title?: (string|null);
            description?: (string|null);
            rowId?: (string|null);
        }

        class Row implements IRow {
            constructor(p?: WAE2E.ListMessage.IRow);
            public title?: (string|null);
            public description?: (string|null);
            public rowId?: (string|null);
            public static create(properties?: WAE2E.ListMessage.IRow): WAE2E.ListMessage.Row;
            public static encode(m: WAE2E.ListMessage.IRow, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ListMessage.Row;
            public static fromObject(d: { [k: string]: any }): WAE2E.ListMessage.Row;
            public static toObject(m: WAE2E.ListMessage.Row, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IOrderMessage {
        orderId?: (string|null);
        thumbnail?: (Uint8Array|null);
        itemCount?: (number|null);
        status?: (WAE2E.OrderMessage.OrderStatus|null);
        surface?: (WAE2E.OrderMessage.OrderSurface|null);
        message?: (string|null);
        orderTitle?: (string|null);
        sellerJid?: (string|null);
        token?: (string|null);
        totalAmount1000?: (number|Long|null);
        totalCurrencyCode?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        messageVersion?: (number|null);
        orderRequestMessageId?: (WACommon.IMessageKey|null);
        catalogType?: (string|null);
    }

    class OrderMessage implements IOrderMessage {
        constructor(p?: WAE2E.IOrderMessage);
        public orderId?: (string|null);
        public thumbnail?: (Uint8Array|null);
        public itemCount?: (number|null);
        public status?: (WAE2E.OrderMessage.OrderStatus|null);
        public surface?: (WAE2E.OrderMessage.OrderSurface|null);
        public message?: (string|null);
        public orderTitle?: (string|null);
        public sellerJid?: (string|null);
        public token?: (string|null);
        public totalAmount1000?: (number|Long|null);
        public totalCurrencyCode?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public messageVersion?: (number|null);
        public orderRequestMessageId?: (WACommon.IMessageKey|null);
        public catalogType?: (string|null);
        public static create(properties?: WAE2E.IOrderMessage): WAE2E.OrderMessage;
        public static encode(m: WAE2E.IOrderMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.OrderMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.OrderMessage;
        public static toObject(m: WAE2E.OrderMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace OrderMessage {

        enum OrderSurface {
            CATALOG = 1
        }

        enum OrderStatus {
            INQUIRY = 1,
            ACCEPTED = 2,
            DECLINED = 3
        }
    }

    interface IStatusQuotedMessage {
        type?: (WAE2E.StatusQuotedMessage.StatusQuotedMessageType|null);
        text?: (string|null);
        thumbnail?: (Uint8Array|null);
        originalStatusId?: (WACommon.IMessageKey|null);
    }

    class StatusQuotedMessage implements IStatusQuotedMessage {
        constructor(p?: WAE2E.IStatusQuotedMessage);
        public type?: (WAE2E.StatusQuotedMessage.StatusQuotedMessageType|null);
        public text?: (string|null);
        public thumbnail?: (Uint8Array|null);
        public originalStatusId?: (WACommon.IMessageKey|null);
        public static create(properties?: WAE2E.IStatusQuotedMessage): WAE2E.StatusQuotedMessage;
        public static encode(m: WAE2E.IStatusQuotedMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StatusQuotedMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StatusQuotedMessage;
        public static toObject(m: WAE2E.StatusQuotedMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusQuotedMessage {

        enum StatusQuotedMessageType {
            QUESTION_ANSWER = 1
        }
    }

    interface ISplitPaymentParticipant {
        jid?: (string|null);
        amount?: (WAE2E.IMoney|null);
        status?: (WAE2E.SplitPaymentParticipant.SplitPaymentStatus|null);
    }

    class SplitPaymentParticipant implements ISplitPaymentParticipant {
        constructor(p?: WAE2E.ISplitPaymentParticipant);
        public jid?: (string|null);
        public amount?: (WAE2E.IMoney|null);
        public status?: (WAE2E.SplitPaymentParticipant.SplitPaymentStatus|null);
        public static create(properties?: WAE2E.ISplitPaymentParticipant): WAE2E.SplitPaymentParticipant;
        public static encode(m: WAE2E.ISplitPaymentParticipant, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.SplitPaymentParticipant;
        public static fromObject(d: { [k: string]: any }): WAE2E.SplitPaymentParticipant;
        public static toObject(m: WAE2E.SplitPaymentParticipant, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SplitPaymentParticipant {

        enum SplitPaymentStatus {
            PENDING = 0,
            PAID = 1
        }
    }

    interface IP2PPaymentReminderNotification {
        reminderId?: (string|null);
        amount?: (WAE2E.IMoney|null);
        frequency?: (WAE2E.P2PPaymentReminderNotification.ReminderFrequency|null);
        nextReminderTimestamp?: (number|Long|null);
        expiryTimestamp?: (number|Long|null);
        state?: (WAE2E.P2PPaymentReminderNotification.ReminderState|null);
        description?: (string|null);
        creatorJid?: (string|null);
        receiverJid?: (string|null);
        upiId?: (string|null);
        createdTimestamp?: (number|Long|null);
    }

    class P2PPaymentReminderNotification implements IP2PPaymentReminderNotification {
        constructor(p?: WAE2E.IP2PPaymentReminderNotification);
        public reminderId?: (string|null);
        public amount?: (WAE2E.IMoney|null);
        public frequency?: (WAE2E.P2PPaymentReminderNotification.ReminderFrequency|null);
        public nextReminderTimestamp?: (number|Long|null);
        public expiryTimestamp?: (number|Long|null);
        public state?: (WAE2E.P2PPaymentReminderNotification.ReminderState|null);
        public description?: (string|null);
        public creatorJid?: (string|null);
        public receiverJid?: (string|null);
        public upiId?: (string|null);
        public createdTimestamp?: (number|Long|null);
        public static create(properties?: WAE2E.IP2PPaymentReminderNotification): WAE2E.P2PPaymentReminderNotification;
        public static encode(m: WAE2E.IP2PPaymentReminderNotification, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.P2PPaymentReminderNotification;
        public static fromObject(d: { [k: string]: any }): WAE2E.P2PPaymentReminderNotification;
        public static toObject(m: WAE2E.P2PPaymentReminderNotification, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace P2PPaymentReminderNotification {

        enum ReminderState {
            UNKNOWN_STATE = 0,
            ACTIVE = 1,
            PAUSED = 2,
            STOPPED = 3,
            EXPIRED = 4,
            CANCELLED = 5
        }

        enum ReminderFrequency {
            UNKNOWN_FREQUENCY = 0,
            WEEKLY = 1,
            BIWEEKLY = 2,
            MONTHLY = 3,
            CUSTOM = 4
        }
    }

    interface IPaymentInviteMessage {
        serviceType?: (WAE2E.PaymentInviteMessage.ServiceType|null);
        expiryTimestamp?: (number|Long|null);
        incentiveEligible?: (boolean|null);
        referralId?: (string|null);
        inviteType?: (WAE2E.PaymentInviteMessage.InviteType|null);
    }

    class PaymentInviteMessage implements IPaymentInviteMessage {
        constructor(p?: WAE2E.IPaymentInviteMessage);
        public serviceType?: (WAE2E.PaymentInviteMessage.ServiceType|null);
        public expiryTimestamp?: (number|Long|null);
        public incentiveEligible?: (boolean|null);
        public referralId?: (string|null);
        public inviteType?: (WAE2E.PaymentInviteMessage.InviteType|null);
        public static create(properties?: WAE2E.IPaymentInviteMessage): WAE2E.PaymentInviteMessage;
        public static encode(m: WAE2E.IPaymentInviteMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentInviteMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PaymentInviteMessage;
        public static toObject(m: WAE2E.PaymentInviteMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PaymentInviteMessage {

        enum InviteType {
            DEFAULT = 0,
            MAPPER = 1
        }

        enum ServiceType {
            UNKNOWN = 0,
            FBPAY = 1,
            NOVI = 2,
            UPI = 3
        }
    }

    interface IHighlyStructuredMessage {
        namespace?: (string|null);
        elementName?: (string|null);
        params?: (string[]|null);
        fallbackLg?: (string|null);
        fallbackLc?: (string|null);
        localizableParams?: (WAE2E.HighlyStructuredMessage.IHSMLocalizableParameter[]|null);
        deterministicLg?: (string|null);
        deterministicLc?: (string|null);
        hydratedHsm?: (WAE2E.ITemplateMessage|null);
    }

    class HighlyStructuredMessage implements IHighlyStructuredMessage {
        constructor(p?: WAE2E.IHighlyStructuredMessage);
        public namespace?: (string|null);
        public elementName?: (string|null);
        public params: string[];
        public fallbackLg?: (string|null);
        public fallbackLc?: (string|null);
        public localizableParams: WAE2E.HighlyStructuredMessage.IHSMLocalizableParameter[];
        public deterministicLg?: (string|null);
        public deterministicLc?: (string|null);
        public hydratedHsm?: (WAE2E.ITemplateMessage|null);
        public static create(properties?: WAE2E.IHighlyStructuredMessage): WAE2E.HighlyStructuredMessage;
        public static encode(m: WAE2E.IHighlyStructuredMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HighlyStructuredMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.HighlyStructuredMessage;
        public static toObject(m: WAE2E.HighlyStructuredMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HighlyStructuredMessage {

        interface IHSMLocalizableParameter {
            currency?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency|null);
            dateTime?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime|null);
            "default"?: (string|null);
        }

        class HSMLocalizableParameter implements IHSMLocalizableParameter {
            constructor(p?: WAE2E.HighlyStructuredMessage.IHSMLocalizableParameter);
            public currency?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency|null);
            public dateTime?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime|null);
            public default?: (string|null);
            public paramOneof?: ("currency"|"dateTime");
            public static create(properties?: WAE2E.HighlyStructuredMessage.IHSMLocalizableParameter): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter;
            public static encode(m: WAE2E.HighlyStructuredMessage.IHSMLocalizableParameter, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter;
            public static fromObject(d: { [k: string]: any }): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter;
            public static toObject(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace HSMLocalizableParameter {

            interface IHSMDateTime {
                component?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent|null);
                unixEpoch?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch|null);
            }

            class HSMDateTime implements IHSMDateTime {
                constructor(p?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime);
                public component?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent|null);
                public unixEpoch?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch|null);
                public datetimeOneof?: ("component"|"unixEpoch");
                public static create(properties?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;
                public static encode(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMDateTime, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;
                public static fromObject(d: { [k: string]: any }): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime;
                public static toObject(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace HSMDateTime {

                interface IHSMDateTimeComponent {
                    dayOfWeek?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType|null);
                    year?: (number|null);
                    month?: (number|null);
                    dayOfMonth?: (number|null);
                    hour?: (number|null);
                    minute?: (number|null);
                    calendar?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType|null);
                }

                class HSMDateTimeComponent implements IHSMDateTimeComponent {
                    constructor(p?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent);
                    public dayOfWeek?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType|null);
                    public year?: (number|null);
                    public month?: (number|null);
                    public dayOfMonth?: (number|null);
                    public hour?: (number|null);
                    public minute?: (number|null);
                    public calendar?: (WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType|null);
                    public static create(properties?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;
                    public static encode(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeComponent, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;
                    public static fromObject(d: { [k: string]: any }): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent;
                    public static toObject(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HSMDateTimeComponent {

                    enum CalendarType {
                        GREGORIAN = 1,
                        SOLAR_HIJRI = 2
                    }

                    enum DayOfWeekType {
                        MONDAY = 1,
                        TUESDAY = 2,
                        WEDNESDAY = 3,
                        THURSDAY = 4,
                        FRIDAY = 5,
                        SATURDAY = 6,
                        SUNDAY = 7
                    }
                }

                interface IHSMDateTimeUnixEpoch {
                    timestamp?: (number|Long|null);
                }

                class HSMDateTimeUnixEpoch implements IHSMDateTimeUnixEpoch {
                    constructor(p?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch);
                    public timestamp?: (number|Long|null);
                    public static create(properties?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;
                    public static encode(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.IHSMDateTimeUnixEpoch, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;
                    public static fromObject(d: { [k: string]: any }): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch;
                    public static toObject(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            interface IHSMCurrency {
                currencyCode?: (string|null);
                amount1000?: (number|Long|null);
            }

            class HSMCurrency implements IHSMCurrency {
                constructor(p?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency);
                public currencyCode?: (string|null);
                public amount1000?: (number|Long|null);
                public static create(properties?: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;
                public static encode(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.IHSMCurrency, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;
                public static fromObject(d: { [k: string]: any }): WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency;
                public static toObject(m: WAE2E.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    interface IPeerDataOperationRequestResponseMessage {
        peerDataOperationRequestType?: (WAE2E.PeerDataOperationRequestType|null);
        stanzaId?: (string|null);
        peerDataOperationResult?: (WAE2E.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult[]|null);
    }

    class PeerDataOperationRequestResponseMessage implements IPeerDataOperationRequestResponseMessage {
        constructor(p?: WAE2E.IPeerDataOperationRequestResponseMessage);
        public peerDataOperationRequestType?: (WAE2E.PeerDataOperationRequestType|null);
        public stanzaId?: (string|null);
        public peerDataOperationResult: WAE2E.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult[];
        public static create(properties?: WAE2E.IPeerDataOperationRequestResponseMessage): WAE2E.PeerDataOperationRequestResponseMessage;
        public static encode(m: WAE2E.IPeerDataOperationRequestResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage;
        public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PeerDataOperationRequestResponseMessage {

        interface IPeerDataOperationResult {
            mediaUploadResult?: (WAMmsRetry.MediaRetryNotification.ResultType|null);
            stickerMessage?: (WAE2E.IStickerMessage|null);
            linkPreviewResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse|null);
            placeholderMessageResendResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse|null);
            waffleNonceFetchRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse|null);
            fullHistorySyncOnDemandRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFullHistorySyncOnDemandRequestResponse|null);
            companionMetaNonceFetchRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionMetaNonceFetchResponse|null);
            syncdSnapshotFatalRecoveryResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ISyncDSnapshotFatalRecoveryResponse|null);
            companionCanonicalUserNonceFetchRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionCanonicalUserNonceFetchResponse|null);
            historySyncChunkRetryResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IHistorySyncChunkRetryResponse|null);
            flowResponsesCsvBundle?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFlowResponsesCsvBundle|null);
            bizBroadcastInsightsContactListResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactListResponse|null);
        }

        class PeerDataOperationResult implements IPeerDataOperationResult {
            constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult);
            public mediaUploadResult?: (WAMmsRetry.MediaRetryNotification.ResultType|null);
            public stickerMessage?: (WAE2E.IStickerMessage|null);
            public linkPreviewResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse|null);
            public placeholderMessageResendResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse|null);
            public waffleNonceFetchRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse|null);
            public fullHistorySyncOnDemandRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFullHistorySyncOnDemandRequestResponse|null);
            public companionMetaNonceFetchRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionMetaNonceFetchResponse|null);
            public syncdSnapshotFatalRecoveryResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ISyncDSnapshotFatalRecoveryResponse|null);
            public companionCanonicalUserNonceFetchRequestResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionCanonicalUserNonceFetchResponse|null);
            public historySyncChunkRetryResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IHistorySyncChunkRetryResponse|null);
            public flowResponsesCsvBundle?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFlowResponsesCsvBundle|null);
            public bizBroadcastInsightsContactListResponse?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactListResponse|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;
            public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.IPeerDataOperationResult, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult;
            public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PeerDataOperationResult {

            enum HistorySyncChunkRetryResponseCode {
                GENERATION_ERROR = 1,
                CHUNK_CONSUMED = 2,
                TIMEOUT = 3,
                SESSION_EXHAUSTED = 4,
                CHUNK_EXHAUSTED = 5,
                DUPLICATED_REQUEST = 6
            }

            enum FullHistorySyncOnDemandResponseCode {
                REQUEST_SUCCESS = 0,
                REQUEST_TIME_EXPIRED = 1,
                DECLINED_SHARING_HISTORY = 2,
                GENERIC_ERROR = 3,
                ERROR_REQUEST_ON_NON_SMB_PRIMARY = 4,
                ERROR_HOSTED_DEVICE_NOT_CONNECTED = 5,
                ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET = 6,
                ERROR_MULTI_PROVIDER_NOT_CONFIGURED = 7
            }

            interface IFlowResponsesCsvBundle {
                flowId?: (string|null);
                galaxyFlowDownloadRequestId?: (string|null);
                fileName?: (string|null);
                mimetype?: (string|null);
                fileSha256?: (Uint8Array|null);
                mediaKey?: (Uint8Array|null);
                fileEncSha256?: (Uint8Array|null);
                directPath?: (string|null);
                mediaKeyTimestamp?: (number|Long|null);
                fileLength?: (number|Long|null);
            }

            class FlowResponsesCsvBundle implements IFlowResponsesCsvBundle {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFlowResponsesCsvBundle);
                public flowId?: (string|null);
                public galaxyFlowDownloadRequestId?: (string|null);
                public fileName?: (string|null);
                public mimetype?: (string|null);
                public fileSha256?: (Uint8Array|null);
                public mediaKey?: (Uint8Array|null);
                public fileEncSha256?: (Uint8Array|null);
                public directPath?: (string|null);
                public mediaKeyTimestamp?: (number|Long|null);
                public fileLength?: (number|Long|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFlowResponsesCsvBundle): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FlowResponsesCsvBundle;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFlowResponsesCsvBundle, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FlowResponsesCsvBundle;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FlowResponsesCsvBundle;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FlowResponsesCsvBundle, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IBizBroadcastInsightsContactListResponse {
                campaignId?: (string|null);
                timestampMs?: (number|Long|null);
                contacts?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactState[]|null);
            }

            class BizBroadcastInsightsContactListResponse implements IBizBroadcastInsightsContactListResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactListResponse);
                public campaignId?: (string|null);
                public timestampMs?: (number|Long|null);
                public contacts: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactState[];
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactListResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactListResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactListResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactListResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactListResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactListResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IBizBroadcastInsightsContactState {
                contactJid?: (string|null);
                state?: (WAE2E.InsightDeliveryState|null);
            }

            class BizBroadcastInsightsContactState implements IBizBroadcastInsightsContactState {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactState);
                public contactJid?: (string|null);
                public state?: (WAE2E.InsightDeliveryState|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactState): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactState;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IBizBroadcastInsightsContactState, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactState;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactState;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.BizBroadcastInsightsContactState, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IHistorySyncChunkRetryResponse {
                syncType?: (WAE2E.HistorySyncType|null);
                chunkOrder?: (number|null);
                requestId?: (string|null);
                responseCode?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponseCode|null);
                canRecover?: (boolean|null);
            }

            class HistorySyncChunkRetryResponse implements IHistorySyncChunkRetryResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IHistorySyncChunkRetryResponse);
                public syncType?: (WAE2E.HistorySyncType|null);
                public chunkOrder?: (number|null);
                public requestId?: (string|null);
                public responseCode?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponseCode|null);
                public canRecover?: (boolean|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IHistorySyncChunkRetryResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IHistorySyncChunkRetryResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ISyncDSnapshotFatalRecoveryResponse {
                collectionSnapshot?: (Uint8Array|null);
                isCompressed?: (boolean|null);
            }

            class SyncDSnapshotFatalRecoveryResponse implements ISyncDSnapshotFatalRecoveryResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ISyncDSnapshotFatalRecoveryResponse);
                public collectionSnapshot?: (Uint8Array|null);
                public isCompressed?: (boolean|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ISyncDSnapshotFatalRecoveryResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ISyncDSnapshotFatalRecoveryResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ICompanionCanonicalUserNonceFetchResponse {
                nonce?: (string|null);
                waFbid?: (string|null);
                forceRefresh?: (boolean|null);
            }

            class CompanionCanonicalUserNonceFetchResponse implements ICompanionCanonicalUserNonceFetchResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionCanonicalUserNonceFetchResponse);
                public nonce?: (string|null);
                public waFbid?: (string|null);
                public forceRefresh?: (boolean|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionCanonicalUserNonceFetchResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionCanonicalUserNonceFetchResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ICompanionMetaNonceFetchResponse {
                nonce?: (string|null);
            }

            class CompanionMetaNonceFetchResponse implements ICompanionMetaNonceFetchResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionMetaNonceFetchResponse);
                public nonce?: (string|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionMetaNonceFetchResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ICompanionMetaNonceFetchResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IWaffleNonceFetchResponse {
                nonce?: (string|null);
                waEntFbid?: (string|null);
            }

            class WaffleNonceFetchResponse implements IWaffleNonceFetchResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse);
                public nonce?: (string|null);
                public waEntFbid?: (string|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IWaffleNonceFetchResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IFullHistorySyncOnDemandRequestResponse {
                requestMetadata?: (WAE2E.IFullHistorySyncOnDemandRequestMetadata|null);
                responseCode?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode|null);
            }

            class FullHistorySyncOnDemandRequestResponse implements IFullHistorySyncOnDemandRequestResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFullHistorySyncOnDemandRequestResponse);
                public requestMetadata?: (WAE2E.IFullHistorySyncOnDemandRequestMetadata|null);
                public responseCode?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFullHistorySyncOnDemandRequestResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IFullHistorySyncOnDemandRequestResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IPlaceholderMessageResendResponse {
                webMessageInfoBytes?: (Uint8Array|null);
            }

            class PlaceholderMessageResendResponse implements IPlaceholderMessageResendResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse);
                public webMessageInfoBytes?: (Uint8Array|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.IPlaceholderMessageResendResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface ILinkPreviewResponse {
                url?: (string|null);
                title?: (string|null);
                description?: (string|null);
                thumbData?: (Uint8Array|null);
                matchText?: (string|null);
                previewType?: (string|null);
                hqThumbnail?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail|null);
                previewMetadata?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.IPaymentLinkPreviewMetadata|null);
            }

            class LinkPreviewResponse implements ILinkPreviewResponse {
                constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse);
                public url?: (string|null);
                public title?: (string|null);
                public description?: (string|null);
                public thumbData?: (Uint8Array|null);
                public matchText?: (string|null);
                public previewType?: (string|null);
                public hqThumbnail?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail|null);
                public previewMetadata?: (WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.IPaymentLinkPreviewMetadata|null);
                public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;
                public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.ILinkPreviewResponse, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;
                public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse;
                public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace LinkPreviewResponse {

                interface IPaymentLinkPreviewMetadata {
                    isBusinessVerified?: (boolean|null);
                    providerName?: (string|null);
                    amount?: (string|null);
                    offset?: (string|null);
                    currency?: (string|null);
                }

                class PaymentLinkPreviewMetadata implements IPaymentLinkPreviewMetadata {
                    constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.IPaymentLinkPreviewMetadata);
                    public isBusinessVerified?: (boolean|null);
                    public providerName?: (string|null);
                    public amount?: (string|null);
                    public offset?: (string|null);
                    public currency?: (string|null);
                    public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.IPaymentLinkPreviewMetadata): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata;
                    public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.IPaymentLinkPreviewMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata;
                    public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata;
                    public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                interface ILinkPreviewHighQualityThumbnail {
                    directPath?: (string|null);
                    thumbHash?: (string|null);
                    encThumbHash?: (string|null);
                    mediaKey?: (Uint8Array|null);
                    mediaKeyTimestampMs?: (number|Long|null);
                    thumbWidth?: (number|null);
                    thumbHeight?: (number|null);
                }

                class LinkPreviewHighQualityThumbnail implements ILinkPreviewHighQualityThumbnail {
                    constructor(p?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail);
                    public directPath?: (string|null);
                    public thumbHash?: (string|null);
                    public encThumbHash?: (string|null);
                    public mediaKey?: (Uint8Array|null);
                    public mediaKeyTimestampMs?: (number|Long|null);
                    public thumbWidth?: (number|null);
                    public thumbHeight?: (number|null);
                    public static create(properties?: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;
                    public static encode(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.ILinkPreviewHighQualityThumbnail, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;
                    public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail;
                    public static toObject(m: WAE2E.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    interface IPeerDataOperationRequestMessage {
        peerDataOperationRequestType?: (WAE2E.PeerDataOperationRequestType|null);
        requestStickerReupload?: (WAE2E.PeerDataOperationRequestMessage.IRequestStickerReupload[]|null);
        requestUrlPreview?: (WAE2E.PeerDataOperationRequestMessage.IRequestUrlPreview[]|null);
        historySyncOnDemandRequest?: (WAE2E.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest|null);
        placeholderMessageResendRequest?: (WAE2E.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest[]|null);
        fullHistorySyncOnDemandRequest?: (WAE2E.PeerDataOperationRequestMessage.IFullHistorySyncOnDemandRequest|null);
        syncdCollectionFatalRecoveryRequest?: (WAE2E.PeerDataOperationRequestMessage.ISyncDCollectionFatalRecoveryRequest|null);
        historySyncChunkRetryRequest?: (WAE2E.PeerDataOperationRequestMessage.IHistorySyncChunkRetryRequest|null);
        galaxyFlowAction?: (WAE2E.PeerDataOperationRequestMessage.IGalaxyFlowAction|null);
        companionCanonicalUserNonceFetchRequest?: (WAE2E.PeerDataOperationRequestMessage.ICompanionCanonicalUserNonceFetchRequest|null);
        bizBroadcastInsightsContactListRequest?: (WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsContactListRequest|null);
        bizBroadcastInsightsRefreshRequest?: (WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsRefreshRequest|null);
    }

    class PeerDataOperationRequestMessage implements IPeerDataOperationRequestMessage {
        constructor(p?: WAE2E.IPeerDataOperationRequestMessage);
        public peerDataOperationRequestType?: (WAE2E.PeerDataOperationRequestType|null);
        public requestStickerReupload: WAE2E.PeerDataOperationRequestMessage.IRequestStickerReupload[];
        public requestUrlPreview: WAE2E.PeerDataOperationRequestMessage.IRequestUrlPreview[];
        public historySyncOnDemandRequest?: (WAE2E.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest|null);
        public placeholderMessageResendRequest: WAE2E.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest[];
        public fullHistorySyncOnDemandRequest?: (WAE2E.PeerDataOperationRequestMessage.IFullHistorySyncOnDemandRequest|null);
        public syncdCollectionFatalRecoveryRequest?: (WAE2E.PeerDataOperationRequestMessage.ISyncDCollectionFatalRecoveryRequest|null);
        public historySyncChunkRetryRequest?: (WAE2E.PeerDataOperationRequestMessage.IHistorySyncChunkRetryRequest|null);
        public galaxyFlowAction?: (WAE2E.PeerDataOperationRequestMessage.IGalaxyFlowAction|null);
        public companionCanonicalUserNonceFetchRequest?: (WAE2E.PeerDataOperationRequestMessage.ICompanionCanonicalUserNonceFetchRequest|null);
        public bizBroadcastInsightsContactListRequest?: (WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsContactListRequest|null);
        public bizBroadcastInsightsRefreshRequest?: (WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsRefreshRequest|null);
        public static create(properties?: WAE2E.IPeerDataOperationRequestMessage): WAE2E.PeerDataOperationRequestMessage;
        public static encode(m: WAE2E.IPeerDataOperationRequestMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage;
        public static toObject(m: WAE2E.PeerDataOperationRequestMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PeerDataOperationRequestMessage {

        interface IGalaxyFlowAction {
            type?: (WAE2E.PeerDataOperationRequestMessage.GalaxyFlowAction.GalaxyFlowActionType|null);
            flowId?: (string|null);
            stanzaId?: (string|null);
            galaxyFlowDownloadRequestId?: (string|null);
            agmId?: (string|null);
        }

        class GalaxyFlowAction implements IGalaxyFlowAction {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IGalaxyFlowAction);
            public type?: (WAE2E.PeerDataOperationRequestMessage.GalaxyFlowAction.GalaxyFlowActionType|null);
            public flowId?: (string|null);
            public stanzaId?: (string|null);
            public galaxyFlowDownloadRequestId?: (string|null);
            public agmId?: (string|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IGalaxyFlowAction): WAE2E.PeerDataOperationRequestMessage.GalaxyFlowAction;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IGalaxyFlowAction, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.GalaxyFlowAction;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.GalaxyFlowAction;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.GalaxyFlowAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GalaxyFlowAction {

            enum GalaxyFlowActionType {
                NOTIFY_LAUNCH = 1,
                DOWNLOAD_RESPONSES = 2
            }
        }

        interface IBizBroadcastInsightsRefreshRequest {
            campaignId?: (string|null);
        }

        class BizBroadcastInsightsRefreshRequest implements IBizBroadcastInsightsRefreshRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsRefreshRequest);
            public campaignId?: (string|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsRefreshRequest): WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsRefreshRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsRefreshRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsRefreshRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsRefreshRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsRefreshRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBizBroadcastInsightsContactListRequest {
            campaignId?: (string|null);
        }

        class BizBroadcastInsightsContactListRequest implements IBizBroadcastInsightsContactListRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsContactListRequest);
            public campaignId?: (string|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsContactListRequest): WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsContactListRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IBizBroadcastInsightsContactListRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsContactListRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsContactListRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.BizBroadcastInsightsContactListRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICompanionCanonicalUserNonceFetchRequest {
            registrationTraceId?: (string|null);
        }

        class CompanionCanonicalUserNonceFetchRequest implements ICompanionCanonicalUserNonceFetchRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.ICompanionCanonicalUserNonceFetchRequest);
            public registrationTraceId?: (string|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.ICompanionCanonicalUserNonceFetchRequest): WAE2E.PeerDataOperationRequestMessage.CompanionCanonicalUserNonceFetchRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.ICompanionCanonicalUserNonceFetchRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.CompanionCanonicalUserNonceFetchRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.CompanionCanonicalUserNonceFetchRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.CompanionCanonicalUserNonceFetchRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IHistorySyncChunkRetryRequest {
            syncType?: (WAE2E.HistorySyncType|null);
            chunkOrder?: (number|null);
            chunkNotificationId?: (string|null);
            regenerateChunk?: (boolean|null);
        }

        class HistorySyncChunkRetryRequest implements IHistorySyncChunkRetryRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IHistorySyncChunkRetryRequest);
            public syncType?: (WAE2E.HistorySyncType|null);
            public chunkOrder?: (number|null);
            public chunkNotificationId?: (string|null);
            public regenerateChunk?: (boolean|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IHistorySyncChunkRetryRequest): WAE2E.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IHistorySyncChunkRetryRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISyncDCollectionFatalRecoveryRequest {
            collectionName?: (string|null);
            timestamp?: (number|Long|null);
        }

        class SyncDCollectionFatalRecoveryRequest implements ISyncDCollectionFatalRecoveryRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.ISyncDCollectionFatalRecoveryRequest);
            public collectionName?: (string|null);
            public timestamp?: (number|Long|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.ISyncDCollectionFatalRecoveryRequest): WAE2E.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.ISyncDCollectionFatalRecoveryRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPlaceholderMessageResendRequest {
            messageKey?: (WACommon.IMessageKey|null);
        }

        class PlaceholderMessageResendRequest implements IPlaceholderMessageResendRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest);
            public messageKey?: (WACommon.IMessageKey|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest): WAE2E.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IPlaceholderMessageResendRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFullHistorySyncOnDemandRequest {
            requestMetadata?: (WAE2E.IFullHistorySyncOnDemandRequestMetadata|null);
            historySyncConfig?: (WACompanionReg.DeviceProps.IHistorySyncConfig|null);
            fullHistorySyncOnDemandConfig?: (WAE2E.IFullHistorySyncOnDemandConfig|null);
        }

        class FullHistorySyncOnDemandRequest implements IFullHistorySyncOnDemandRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IFullHistorySyncOnDemandRequest);
            public requestMetadata?: (WAE2E.IFullHistorySyncOnDemandRequestMetadata|null);
            public historySyncConfig?: (WACompanionReg.DeviceProps.IHistorySyncConfig|null);
            public fullHistorySyncOnDemandConfig?: (WAE2E.IFullHistorySyncOnDemandConfig|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IFullHistorySyncOnDemandRequest): WAE2E.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IFullHistorySyncOnDemandRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IHistorySyncOnDemandRequest {
            chatJid?: (string|null);
            oldestMsgId?: (string|null);
            oldestMsgFromMe?: (boolean|null);
            onDemandMsgCount?: (number|null);
            oldestMsgTimestampMs?: (number|Long|null);
            accountLid?: (string|null);
            supportInlineResponse?: (boolean|null);
        }

        class HistorySyncOnDemandRequest implements IHistorySyncOnDemandRequest {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest);
            public chatJid?: (string|null);
            public oldestMsgId?: (string|null);
            public oldestMsgFromMe?: (boolean|null);
            public onDemandMsgCount?: (number|null);
            public oldestMsgTimestampMs?: (number|Long|null);
            public accountLid?: (string|null);
            public supportInlineResponse?: (boolean|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest): WAE2E.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IHistorySyncOnDemandRequest, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IRequestUrlPreview {
            url?: (string|null);
            includeHqThumbnail?: (boolean|null);
        }

        class RequestUrlPreview implements IRequestUrlPreview {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IRequestUrlPreview);
            public url?: (string|null);
            public includeHqThumbnail?: (boolean|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IRequestUrlPreview): WAE2E.PeerDataOperationRequestMessage.RequestUrlPreview;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IRequestUrlPreview, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.RequestUrlPreview;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.RequestUrlPreview;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.RequestUrlPreview, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IRequestStickerReupload {
            fileSha256?: (string|null);
        }

        class RequestStickerReupload implements IRequestStickerReupload {
            constructor(p?: WAE2E.PeerDataOperationRequestMessage.IRequestStickerReupload);
            public fileSha256?: (string|null);
            public static create(properties?: WAE2E.PeerDataOperationRequestMessage.IRequestStickerReupload): WAE2E.PeerDataOperationRequestMessage.RequestStickerReupload;
            public static encode(m: WAE2E.PeerDataOperationRequestMessage.IRequestStickerReupload, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PeerDataOperationRequestMessage.RequestStickerReupload;
            public static fromObject(d: { [k: string]: any }): WAE2E.PeerDataOperationRequestMessage.RequestStickerReupload;
            public static toObject(m: WAE2E.PeerDataOperationRequestMessage.RequestStickerReupload, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IRequestWelcomeMessageMetadata {
        localChatState?: (WAE2E.RequestWelcomeMessageMetadata.LocalChatState|null);
        welcomeTrigger?: (WAE2E.RequestWelcomeMessageMetadata.WelcomeTrigger|null);
        botAgentMetadata?: (WAAICommon.IBotAgentMetadata|null);
    }

    class RequestWelcomeMessageMetadata implements IRequestWelcomeMessageMetadata {
        constructor(p?: WAE2E.IRequestWelcomeMessageMetadata);
        public localChatState?: (WAE2E.RequestWelcomeMessageMetadata.LocalChatState|null);
        public welcomeTrigger?: (WAE2E.RequestWelcomeMessageMetadata.WelcomeTrigger|null);
        public botAgentMetadata?: (WAAICommon.IBotAgentMetadata|null);
        public static create(properties?: WAE2E.IRequestWelcomeMessageMetadata): WAE2E.RequestWelcomeMessageMetadata;
        public static encode(m: WAE2E.IRequestWelcomeMessageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.RequestWelcomeMessageMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.RequestWelcomeMessageMetadata;
        public static toObject(m: WAE2E.RequestWelcomeMessageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace RequestWelcomeMessageMetadata {

        enum WelcomeTrigger {
            CHAT_OPEN = 0,
            COMPANION_PAIRING = 1
        }

        enum LocalChatState {
            EMPTY = 0,
            NON_EMPTY = 1
        }
    }

    interface IProtocolMessage {
        key?: (WACommon.IMessageKey|null);
        type?: (WAE2E.ProtocolMessage.Type|null);
        ephemeralExpiration?: (number|null);
        ephemeralSettingTimestamp?: (number|Long|null);
        historySyncNotification?: (WAE2E.IHistorySyncNotification|null);
        appStateSyncKeyShare?: (WAE2E.IAppStateSyncKeyShare|null);
        appStateSyncKeyRequest?: (WAE2E.IAppStateSyncKeyRequest|null);
        initialSecurityNotificationSettingSync?: (WAE2E.IInitialSecurityNotificationSettingSync|null);
        appStateFatalExceptionNotification?: (WAE2E.IAppStateFatalExceptionNotification|null);
        disappearingMode?: (WAE2E.IDisappearingMode|null);
        editedMessage?: (WAE2E.IMessage|null);
        timestampMs?: (number|Long|null);
        peerDataOperationRequestMessage?: (WAE2E.IPeerDataOperationRequestMessage|null);
        peerDataOperationRequestResponseMessage?: (WAE2E.IPeerDataOperationRequestResponseMessage|null);
        botFeedbackMessage?: (WAAICommon.IBotFeedbackMessage|null);
        invokerJid?: (string|null);
        requestWelcomeMessageMetadata?: (WAE2E.IRequestWelcomeMessageMetadata|null);
        mediaNotifyMessage?: (WAE2E.IMediaNotifyMessage|null);
        cloudApiThreadControlNotification?: (WAE2E.ICloudAPIThreadControlNotification|null);
        lidMigrationMappingSyncMessage?: (WAE2E.ILIDMigrationMappingSyncMessage|null);
        limitSharing?: (WACommon.ILimitSharing|null);
        aiPsiMetadata?: (Uint8Array|null);
        aiQueryFanout?: (WAE2E.IAIQueryFanout|null);
        memberLabel?: (WAE2E.IMemberLabel|null);
        aiMediaCollectionMessage?: (WAAICommon.IAIMediaCollectionMessage|null);
        afterReadDuration?: (number|null);
        chatThemeSetting?: (WAE2E.IChatThemeSetting|null);
    }

    class ProtocolMessage implements IProtocolMessage {
        constructor(p?: WAE2E.IProtocolMessage);
        public key?: (WACommon.IMessageKey|null);
        public type?: (WAE2E.ProtocolMessage.Type|null);
        public ephemeralExpiration?: (number|null);
        public ephemeralSettingTimestamp?: (number|Long|null);
        public historySyncNotification?: (WAE2E.IHistorySyncNotification|null);
        public appStateSyncKeyShare?: (WAE2E.IAppStateSyncKeyShare|null);
        public appStateSyncKeyRequest?: (WAE2E.IAppStateSyncKeyRequest|null);
        public initialSecurityNotificationSettingSync?: (WAE2E.IInitialSecurityNotificationSettingSync|null);
        public appStateFatalExceptionNotification?: (WAE2E.IAppStateFatalExceptionNotification|null);
        public disappearingMode?: (WAE2E.IDisappearingMode|null);
        public editedMessage?: (WAE2E.IMessage|null);
        public timestampMs?: (number|Long|null);
        public peerDataOperationRequestMessage?: (WAE2E.IPeerDataOperationRequestMessage|null);
        public peerDataOperationRequestResponseMessage?: (WAE2E.IPeerDataOperationRequestResponseMessage|null);
        public botFeedbackMessage?: (WAAICommon.IBotFeedbackMessage|null);
        public invokerJid?: (string|null);
        public requestWelcomeMessageMetadata?: (WAE2E.IRequestWelcomeMessageMetadata|null);
        public mediaNotifyMessage?: (WAE2E.IMediaNotifyMessage|null);
        public cloudApiThreadControlNotification?: (WAE2E.ICloudAPIThreadControlNotification|null);
        public lidMigrationMappingSyncMessage?: (WAE2E.ILIDMigrationMappingSyncMessage|null);
        public limitSharing?: (WACommon.ILimitSharing|null);
        public aiPsiMetadata?: (Uint8Array|null);
        public aiQueryFanout?: (WAE2E.IAIQueryFanout|null);
        public memberLabel?: (WAE2E.IMemberLabel|null);
        public aiMediaCollectionMessage?: (WAAICommon.IAIMediaCollectionMessage|null);
        public afterReadDuration?: (number|null);
        public chatThemeSetting?: (WAE2E.IChatThemeSetting|null);
        public static create(properties?: WAE2E.IProtocolMessage): WAE2E.ProtocolMessage;
        public static encode(m: WAE2E.IProtocolMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ProtocolMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ProtocolMessage;
        public static toObject(m: WAE2E.ProtocolMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ProtocolMessage {

        enum Type {
            REVOKE = 0,
            EPHEMERAL_SETTING = 3,
            EPHEMERAL_SYNC_RESPONSE = 4,
            HISTORY_SYNC_NOTIFICATION = 5,
            APP_STATE_SYNC_KEY_SHARE = 6,
            APP_STATE_SYNC_KEY_REQUEST = 7,
            MSG_FANOUT_BACKFILL_REQUEST = 8,
            INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
            APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10,
            SHARE_PHONE_NUMBER = 11,
            MESSAGE_EDIT = 14,
            PEER_DATA_OPERATION_REQUEST_MESSAGE = 16,
            PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17,
            REQUEST_WELCOME_MESSAGE = 18,
            BOT_FEEDBACK_MESSAGE = 19,
            MEDIA_NOTIFY_MESSAGE = 20,
            CLOUD_API_THREAD_CONTROL_NOTIFICATION = 21,
            LID_MIGRATION_MAPPING_SYNC = 22,
            REMINDER_MESSAGE = 23,
            BOT_MEMU_ONBOARDING_MESSAGE = 24,
            STATUS_MENTION_MESSAGE = 25,
            STOP_GENERATION_MESSAGE = 26,
            LIMIT_SHARING = 27,
            AI_PSI_METADATA = 28,
            AI_QUERY_FANOUT = 29,
            GROUP_MEMBER_LABEL_CHANGE = 30,
            AI_MEDIA_COLLECTION_MESSAGE = 31,
            MESSAGE_UNSCHEDULE = 32,
            CHAT_THEME_SETTING = 34
        }
    }

    interface ICloudAPIThreadControlNotification {
        status?: (WAE2E.CloudAPIThreadControlNotification.CloudAPIThreadControl|null);
        senderNotificationTimestampMs?: (number|Long|null);
        consumerLid?: (string|null);
        consumerPhoneNumber?: (string|null);
        notificationContent?: (WAE2E.CloudAPIThreadControlNotification.ICloudAPIThreadControlNotificationContent|null);
        shouldSuppressNotification?: (boolean|null);
    }

    class CloudAPIThreadControlNotification implements ICloudAPIThreadControlNotification {
        constructor(p?: WAE2E.ICloudAPIThreadControlNotification);
        public status?: (WAE2E.CloudAPIThreadControlNotification.CloudAPIThreadControl|null);
        public senderNotificationTimestampMs?: (number|Long|null);
        public consumerLid?: (string|null);
        public consumerPhoneNumber?: (string|null);
        public notificationContent?: (WAE2E.CloudAPIThreadControlNotification.ICloudAPIThreadControlNotificationContent|null);
        public shouldSuppressNotification?: (boolean|null);
        public static create(properties?: WAE2E.ICloudAPIThreadControlNotification): WAE2E.CloudAPIThreadControlNotification;
        public static encode(m: WAE2E.ICloudAPIThreadControlNotification, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.CloudAPIThreadControlNotification;
        public static fromObject(d: { [k: string]: any }): WAE2E.CloudAPIThreadControlNotification;
        public static toObject(m: WAE2E.CloudAPIThreadControlNotification, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CloudAPIThreadControlNotification {

        enum CloudAPIThreadControl {
            UNKNOWN = 0,
            CONTROL_PASSED = 1,
            CONTROL_TAKEN = 2,
            INFO = 3
        }

        interface ICloudAPIThreadControlNotificationContent {
            handoffNotificationText?: (string|null);
            extraJson?: (string|null);
        }

        class CloudAPIThreadControlNotificationContent implements ICloudAPIThreadControlNotificationContent {
            constructor(p?: WAE2E.CloudAPIThreadControlNotification.ICloudAPIThreadControlNotificationContent);
            public handoffNotificationText?: (string|null);
            public extraJson?: (string|null);
            public static create(properties?: WAE2E.CloudAPIThreadControlNotification.ICloudAPIThreadControlNotificationContent): WAE2E.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent;
            public static encode(m: WAE2E.CloudAPIThreadControlNotification.ICloudAPIThreadControlNotificationContent, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent;
            public static fromObject(d: { [k: string]: any }): WAE2E.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent;
            public static toObject(m: WAE2E.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IVideoMessage {
        url?: (string|null);
        mimetype?: (string|null);
        fileSha256?: (Uint8Array|null);
        fileLength?: (number|Long|null);
        seconds?: (number|null);
        mediaKey?: (Uint8Array|null);
        caption?: (string|null);
        gifPlayback?: (boolean|null);
        height?: (number|null);
        width?: (number|null);
        fileEncSha256?: (Uint8Array|null);
        interactiveAnnotations?: (WAE2E.IInteractiveAnnotation[]|null);
        directPath?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        jpegThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        streamingSidecar?: (Uint8Array|null);
        gifAttribution?: (WAE2E.VideoMessage.Attribution|null);
        viewOnce?: (boolean|null);
        thumbnailDirectPath?: (string|null);
        thumbnailSha256?: (Uint8Array|null);
        thumbnailEncSha256?: (Uint8Array|null);
        staticUrl?: (string|null);
        annotations?: (WAE2E.IInteractiveAnnotation[]|null);
        accessibilityLabel?: (string|null);
        processedVideos?: (WAE2E.IProcessedVideo[]|null);
        externalShareFullVideoDurationInSeconds?: (number|null);
        motionPhotoPresentationOffsetMs?: (number|Long|null);
        metadataUrl?: (string|null);
        videoSourceType?: (WAE2E.VideoMessage.VideoSourceType|null);
    }

    class VideoMessage implements IVideoMessage {
        constructor(p?: WAE2E.IVideoMessage);
        public url?: (string|null);
        public mimetype?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public fileLength?: (number|Long|null);
        public seconds?: (number|null);
        public mediaKey?: (Uint8Array|null);
        public caption?: (string|null);
        public gifPlayback?: (boolean|null);
        public height?: (number|null);
        public width?: (number|null);
        public fileEncSha256?: (Uint8Array|null);
        public interactiveAnnotations: WAE2E.IInteractiveAnnotation[];
        public directPath?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public jpegThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public streamingSidecar?: (Uint8Array|null);
        public gifAttribution?: (WAE2E.VideoMessage.Attribution|null);
        public viewOnce?: (boolean|null);
        public thumbnailDirectPath?: (string|null);
        public thumbnailSha256?: (Uint8Array|null);
        public thumbnailEncSha256?: (Uint8Array|null);
        public staticUrl?: (string|null);
        public annotations: WAE2E.IInteractiveAnnotation[];
        public accessibilityLabel?: (string|null);
        public processedVideos: WAE2E.IProcessedVideo[];
        public externalShareFullVideoDurationInSeconds?: (number|null);
        public motionPhotoPresentationOffsetMs?: (number|Long|null);
        public metadataUrl?: (string|null);
        public videoSourceType?: (WAE2E.VideoMessage.VideoSourceType|null);
        public static create(properties?: WAE2E.IVideoMessage): WAE2E.VideoMessage;
        public static encode(m: WAE2E.IVideoMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.VideoMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.VideoMessage;
        public static toObject(m: WAE2E.VideoMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace VideoMessage {

        enum VideoSourceType {
            USER_VIDEO = 0,
            AI_GENERATED = 1
        }

        enum Attribution {
            NONE = 0,
            GIPHY = 1,
            TENOR = 2,
            KLIPY = 3
        }
    }

    interface IExtendedTextMessage {
        text?: (string|null);
        matchedText?: (string|null);
        description?: (string|null);
        title?: (string|null);
        textArgb?: (number|null);
        backgroundArgb?: (number|null);
        font?: (WAE2E.ExtendedTextMessage.FontType|null);
        previewType?: (WAE2E.ExtendedTextMessage.PreviewType|null);
        jpegThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        doNotPlayInline?: (boolean|null);
        thumbnailDirectPath?: (string|null);
        thumbnailSha256?: (Uint8Array|null);
        thumbnailEncSha256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        mediaKeyTimestamp?: (number|Long|null);
        thumbnailHeight?: (number|null);
        thumbnailWidth?: (number|null);
        inviteLinkGroupType?: (WAE2E.ExtendedTextMessage.InviteLinkGroupType|null);
        inviteLinkParentGroupSubjectV2?: (string|null);
        inviteLinkParentGroupThumbnailV2?: (Uint8Array|null);
        inviteLinkGroupTypeV2?: (WAE2E.ExtendedTextMessage.InviteLinkGroupType|null);
        viewOnce?: (boolean|null);
        videoHeight?: (number|null);
        videoWidth?: (number|null);
        faviconMMSMetadata?: (WAE2E.IMMSThumbnailMetadata|null);
        linkPreviewMetadata?: (WAE2E.ILinkPreviewMetadata|null);
        paymentLinkMetadata?: (WAE2E.IPaymentLinkMetadata|null);
        endCardTiles?: (WAE2E.IVideoEndCard[]|null);
        videoContentUrl?: (string|null);
        musicMetadata?: (WAE2E.IEmbeddedMusic|null);
        paymentExtendedMetadata?: (WAE2E.IPaymentExtendedMetadata|null);
    }

    class ExtendedTextMessage implements IExtendedTextMessage {
        constructor(p?: WAE2E.IExtendedTextMessage);
        public text?: (string|null);
        public matchedText?: (string|null);
        public description?: (string|null);
        public title?: (string|null);
        public textArgb?: (number|null);
        public backgroundArgb?: (number|null);
        public font?: (WAE2E.ExtendedTextMessage.FontType|null);
        public previewType?: (WAE2E.ExtendedTextMessage.PreviewType|null);
        public jpegThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public doNotPlayInline?: (boolean|null);
        public thumbnailDirectPath?: (string|null);
        public thumbnailSha256?: (Uint8Array|null);
        public thumbnailEncSha256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public thumbnailHeight?: (number|null);
        public thumbnailWidth?: (number|null);
        public inviteLinkGroupType?: (WAE2E.ExtendedTextMessage.InviteLinkGroupType|null);
        public inviteLinkParentGroupSubjectV2?: (string|null);
        public inviteLinkParentGroupThumbnailV2?: (Uint8Array|null);
        public inviteLinkGroupTypeV2?: (WAE2E.ExtendedTextMessage.InviteLinkGroupType|null);
        public viewOnce?: (boolean|null);
        public videoHeight?: (number|null);
        public videoWidth?: (number|null);
        public faviconMMSMetadata?: (WAE2E.IMMSThumbnailMetadata|null);
        public linkPreviewMetadata?: (WAE2E.ILinkPreviewMetadata|null);
        public paymentLinkMetadata?: (WAE2E.IPaymentLinkMetadata|null);
        public endCardTiles: WAE2E.IVideoEndCard[];
        public videoContentUrl?: (string|null);
        public musicMetadata?: (WAE2E.IEmbeddedMusic|null);
        public paymentExtendedMetadata?: (WAE2E.IPaymentExtendedMetadata|null);
        public static create(properties?: WAE2E.IExtendedTextMessage): WAE2E.ExtendedTextMessage;
        public static encode(m: WAE2E.IExtendedTextMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ExtendedTextMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ExtendedTextMessage;
        public static toObject(m: WAE2E.ExtendedTextMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ExtendedTextMessage {

        enum InviteLinkGroupType {
            DEFAULT = 0,
            PARENT = 1,
            SUB = 2,
            DEFAULT_SUB = 3
        }

        enum PreviewType {
            NONE = 0,
            VIDEO = 1,
            PLACEHOLDER = 4,
            IMAGE = 5,
            PAYMENT_LINKS = 6,
            PROFILE = 7
        }

        enum FontType {
            SYSTEM = 0,
            SYSTEM_TEXT = 1,
            FB_SCRIPT = 2,
            SYSTEM_BOLD = 6,
            MORNINGBREEZE_REGULAR = 7,
            CALISTOGA_REGULAR = 8,
            EXO2_EXTRABOLD = 9,
            COURIERPRIME_BOLD = 10
        }
    }

    interface ILinkPreviewMetadata {
        paymentLinkMetadata?: (WAE2E.IPaymentLinkMetadata|null);
        urlMetadata?: (WAE2E.IURLMetadata|null);
        fbExperimentId?: (number|null);
        linkMediaDuration?: (number|null);
        socialMediaPostType?: (WAE2E.LinkPreviewMetadata.SocialMediaPostType|null);
        linkInlineVideoMuted?: (boolean|null);
        videoContentUrl?: (string|null);
        musicMetadata?: (WAE2E.IEmbeddedMusic|null);
        videoContentCaption?: (string|null);
    }

    class LinkPreviewMetadata implements ILinkPreviewMetadata {
        constructor(p?: WAE2E.ILinkPreviewMetadata);
        public paymentLinkMetadata?: (WAE2E.IPaymentLinkMetadata|null);
        public urlMetadata?: (WAE2E.IURLMetadata|null);
        public fbExperimentId?: (number|null);
        public linkMediaDuration?: (number|null);
        public socialMediaPostType?: (WAE2E.LinkPreviewMetadata.SocialMediaPostType|null);
        public linkInlineVideoMuted?: (boolean|null);
        public videoContentUrl?: (string|null);
        public musicMetadata?: (WAE2E.IEmbeddedMusic|null);
        public videoContentCaption?: (string|null);
        public static create(properties?: WAE2E.ILinkPreviewMetadata): WAE2E.LinkPreviewMetadata;
        public static encode(m: WAE2E.ILinkPreviewMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.LinkPreviewMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.LinkPreviewMetadata;
        public static toObject(m: WAE2E.LinkPreviewMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LinkPreviewMetadata {

        enum SocialMediaPostType {
            NONE = 0,
            REEL = 1,
            LIVE_VIDEO = 2,
            LONG_VIDEO = 3,
            SINGLE_IMAGE = 4,
            CAROUSEL = 5
        }
    }

    interface IPaymentLinkMetadata {
        button?: (WAE2E.PaymentLinkMetadata.IPaymentLinkButton|null);
        header?: (WAE2E.PaymentLinkMetadata.IPaymentLinkHeader|null);
        provider?: (WAE2E.PaymentLinkMetadata.IPaymentLinkProvider|null);
    }

    class PaymentLinkMetadata implements IPaymentLinkMetadata {
        constructor(p?: WAE2E.IPaymentLinkMetadata);
        public button?: (WAE2E.PaymentLinkMetadata.IPaymentLinkButton|null);
        public header?: (WAE2E.PaymentLinkMetadata.IPaymentLinkHeader|null);
        public provider?: (WAE2E.PaymentLinkMetadata.IPaymentLinkProvider|null);
        public static create(properties?: WAE2E.IPaymentLinkMetadata): WAE2E.PaymentLinkMetadata;
        public static encode(m: WAE2E.IPaymentLinkMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentLinkMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.PaymentLinkMetadata;
        public static toObject(m: WAE2E.PaymentLinkMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PaymentLinkMetadata {

        interface IPaymentLinkHeader {
            headerType?: (WAE2E.PaymentLinkMetadata.PaymentLinkHeader.PaymentLinkHeaderType|null);
        }

        class PaymentLinkHeader implements IPaymentLinkHeader {
            constructor(p?: WAE2E.PaymentLinkMetadata.IPaymentLinkHeader);
            public headerType?: (WAE2E.PaymentLinkMetadata.PaymentLinkHeader.PaymentLinkHeaderType|null);
            public static create(properties?: WAE2E.PaymentLinkMetadata.IPaymentLinkHeader): WAE2E.PaymentLinkMetadata.PaymentLinkHeader;
            public static encode(m: WAE2E.PaymentLinkMetadata.IPaymentLinkHeader, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentLinkMetadata.PaymentLinkHeader;
            public static fromObject(d: { [k: string]: any }): WAE2E.PaymentLinkMetadata.PaymentLinkHeader;
            public static toObject(m: WAE2E.PaymentLinkMetadata.PaymentLinkHeader, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PaymentLinkHeader {

            enum PaymentLinkHeaderType {
                LINK_PREVIEW = 0,
                ORDER = 1
            }
        }

        interface IPaymentLinkProvider {
            paramsJson?: (string|null);
        }

        class PaymentLinkProvider implements IPaymentLinkProvider {
            constructor(p?: WAE2E.PaymentLinkMetadata.IPaymentLinkProvider);
            public paramsJson?: (string|null);
            public static create(properties?: WAE2E.PaymentLinkMetadata.IPaymentLinkProvider): WAE2E.PaymentLinkMetadata.PaymentLinkProvider;
            public static encode(m: WAE2E.PaymentLinkMetadata.IPaymentLinkProvider, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentLinkMetadata.PaymentLinkProvider;
            public static fromObject(d: { [k: string]: any }): WAE2E.PaymentLinkMetadata.PaymentLinkProvider;
            public static toObject(m: WAE2E.PaymentLinkMetadata.PaymentLinkProvider, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPaymentLinkButton {
            displayText?: (string|null);
        }

        class PaymentLinkButton implements IPaymentLinkButton {
            constructor(p?: WAE2E.PaymentLinkMetadata.IPaymentLinkButton);
            public displayText?: (string|null);
            public static create(properties?: WAE2E.PaymentLinkMetadata.IPaymentLinkButton): WAE2E.PaymentLinkMetadata.PaymentLinkButton;
            public static encode(m: WAE2E.PaymentLinkMetadata.IPaymentLinkButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentLinkMetadata.PaymentLinkButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.PaymentLinkMetadata.PaymentLinkButton;
            public static toObject(m: WAE2E.PaymentLinkMetadata.PaymentLinkButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IStatusNotificationMessage {
        responseMessageKey?: (WACommon.IMessageKey|null);
        originalMessageKey?: (WACommon.IMessageKey|null);
        type?: (WAE2E.StatusNotificationMessage.StatusNotificationType|null);
    }

    class StatusNotificationMessage implements IStatusNotificationMessage {
        constructor(p?: WAE2E.IStatusNotificationMessage);
        public responseMessageKey?: (WACommon.IMessageKey|null);
        public originalMessageKey?: (WACommon.IMessageKey|null);
        public type?: (WAE2E.StatusNotificationMessage.StatusNotificationType|null);
        public static create(properties?: WAE2E.IStatusNotificationMessage): WAE2E.StatusNotificationMessage;
        public static encode(m: WAE2E.IStatusNotificationMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StatusNotificationMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StatusNotificationMessage;
        public static toObject(m: WAE2E.StatusNotificationMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusNotificationMessage {

        enum StatusNotificationType {
            UNKNOWN = 0,
            STATUS_ADD_YOURS = 1,
            STATUS_RESHARE = 2,
            STATUS_QUESTION_ANSWER_RESHARE = 3
        }
    }

    interface IInvoiceMessage {
        note?: (string|null);
        token?: (string|null);
        attachmentType?: (WAE2E.InvoiceMessage.AttachmentType|null);
        attachmentMimetype?: (string|null);
        attachmentMediaKey?: (Uint8Array|null);
        attachmentMediaKeyTimestamp?: (number|Long|null);
        attachmentFileSha256?: (Uint8Array|null);
        attachmentFileEncSha256?: (Uint8Array|null);
        attachmentDirectPath?: (string|null);
        attachmentJpegThumbnail?: (Uint8Array|null);
    }

    class InvoiceMessage implements IInvoiceMessage {
        constructor(p?: WAE2E.IInvoiceMessage);
        public note?: (string|null);
        public token?: (string|null);
        public attachmentType?: (WAE2E.InvoiceMessage.AttachmentType|null);
        public attachmentMimetype?: (string|null);
        public attachmentMediaKey?: (Uint8Array|null);
        public attachmentMediaKeyTimestamp?: (number|Long|null);
        public attachmentFileSha256?: (Uint8Array|null);
        public attachmentFileEncSha256?: (Uint8Array|null);
        public attachmentDirectPath?: (string|null);
        public attachmentJpegThumbnail?: (Uint8Array|null);
        public static create(properties?: WAE2E.IInvoiceMessage): WAE2E.InvoiceMessage;
        public static encode(m: WAE2E.IInvoiceMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InvoiceMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.InvoiceMessage;
        public static toObject(m: WAE2E.InvoiceMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InvoiceMessage {

        enum AttachmentType {
            IMAGE = 0,
            PDF = 1
        }
    }

    interface IImageMessage {
        url?: (string|null);
        mimetype?: (string|null);
        caption?: (string|null);
        fileSha256?: (Uint8Array|null);
        fileLength?: (number|Long|null);
        height?: (number|null);
        width?: (number|null);
        mediaKey?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        interactiveAnnotations?: (WAE2E.IInteractiveAnnotation[]|null);
        directPath?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        jpegThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        firstScanSidecar?: (Uint8Array|null);
        firstScanLength?: (number|null);
        experimentGroupId?: (number|null);
        scansSidecar?: (Uint8Array|null);
        scanLengths?: (number[]|null);
        midQualityFileSha256?: (Uint8Array|null);
        midQualityFileEncSha256?: (Uint8Array|null);
        viewOnce?: (boolean|null);
        thumbnailDirectPath?: (string|null);
        thumbnailSha256?: (Uint8Array|null);
        thumbnailEncSha256?: (Uint8Array|null);
        staticUrl?: (string|null);
        annotations?: (WAE2E.IInteractiveAnnotation[]|null);
        imageSourceType?: (WAE2E.ImageMessage.ImageSourceType|null);
        accessibilityLabel?: (string|null);
        qrUrl?: (string|null);
    }

    class ImageMessage implements IImageMessage {
        constructor(p?: WAE2E.IImageMessage);
        public url?: (string|null);
        public mimetype?: (string|null);
        public caption?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public fileLength?: (number|Long|null);
        public height?: (number|null);
        public width?: (number|null);
        public mediaKey?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public interactiveAnnotations: WAE2E.IInteractiveAnnotation[];
        public directPath?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public jpegThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public firstScanSidecar?: (Uint8Array|null);
        public firstScanLength?: (number|null);
        public experimentGroupId?: (number|null);
        public scansSidecar?: (Uint8Array|null);
        public scanLengths: number[];
        public midQualityFileSha256?: (Uint8Array|null);
        public midQualityFileEncSha256?: (Uint8Array|null);
        public viewOnce?: (boolean|null);
        public thumbnailDirectPath?: (string|null);
        public thumbnailSha256?: (Uint8Array|null);
        public thumbnailEncSha256?: (Uint8Array|null);
        public staticUrl?: (string|null);
        public annotations: WAE2E.IInteractiveAnnotation[];
        public imageSourceType?: (WAE2E.ImageMessage.ImageSourceType|null);
        public accessibilityLabel?: (string|null);
        public qrUrl?: (string|null);
        public static create(properties?: WAE2E.IImageMessage): WAE2E.ImageMessage;
        public static encode(m: WAE2E.IImageMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ImageMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ImageMessage;
        public static toObject(m: WAE2E.ImageMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ImageMessage {

        enum ImageSourceType {
            USER_IMAGE = 0,
            AI_GENERATED = 1,
            AI_MODIFIED = 2,
            RASTERIZED_TEXT_STATUS = 3
        }
    }

    interface IContextInfo {
        stanzaId?: (string|null);
        participant?: (string|null);
        quotedMessage?: (WAE2E.IMessage|null);
        remoteJid?: (string|null);
        mentionedJid?: (string[]|null);
        conversionSource?: (string|null);
        conversionData?: (Uint8Array|null);
        conversionDelaySeconds?: (number|null);
        forwardingScore?: (number|null);
        isForwarded?: (boolean|null);
        quotedAd?: (WAE2E.ContextInfo.IAdReplyInfo|null);
        placeholderKey?: (WACommon.IMessageKey|null);
        expiration?: (number|null);
        ephemeralSettingTimestamp?: (number|Long|null);
        ephemeralSharedSecret?: (Uint8Array|null);
        externalAdReply?: (WAE2E.ContextInfo.IExternalAdReplyInfo|null);
        entryPointConversionSource?: (string|null);
        entryPointConversionApp?: (string|null);
        entryPointConversionDelaySeconds?: (number|null);
        disappearingMode?: (WAE2E.IDisappearingMode|null);
        actionLink?: (WAE2E.IActionLink|null);
        groupSubject?: (string|null);
        parentGroupJid?: (string|null);
        trustBannerType?: (string|null);
        trustBannerAction?: (number|null);
        isSampled?: (boolean|null);
        groupMentions?: (WAE2E.IGroupMention[]|null);
        utm?: (WAE2E.ContextInfo.IUTMInfo|null);
        forwardedNewsletterMessageInfo?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);
        businessMessageForwardInfo?: (WAE2E.ContextInfo.IBusinessMessageForwardInfo|null);
        smbClientCampaignId?: (string|null);
        smbServerCampaignId?: (string|null);
        dataSharingContext?: (WAE2E.ContextInfo.IDataSharingContext|null);
        alwaysShowAdAttribution?: (boolean|null);
        featureEligibilities?: (WAE2E.ContextInfo.IFeatureEligibilities|null);
        entryPointConversionExternalSource?: (string|null);
        entryPointConversionExternalMedium?: (string|null);
        ctwaSignals?: (string|null);
        ctwaPayload?: (Uint8Array|null);
        forwardedAiBotMessageInfo?: (WAAICommon.IForwardedAIBotMessageInfo|null);
        statusAttributionType?: (WAE2E.ContextInfo.StatusAttributionType|null);
        urlTrackingMap?: (WAE2E.IUrlTrackingMap|null);
        pairedMediaType?: (WAE2E.ContextInfo.PairedMediaType|null);
        rankingVersion?: (number|null);
        memberLabel?: (WAE2E.IMemberLabel|null);
        isQuestion?: (boolean|null);
        statusSourceType?: (WAE2E.ContextInfo.StatusSourceType|null);
        statusAttributions?: (WAStatusAttributions.IStatusAttribution[]|null);
        isGroupStatus?: (boolean|null);
        forwardOrigin?: (WAE2E.ContextInfo.ForwardOrigin|null);
        questionReplyQuotedMessage?: (WAE2E.ContextInfo.IQuestionReplyQuotedMessage|null);
        statusAudienceMetadata?: (WAE2E.ContextInfo.IStatusAudienceMetadata|null);
        nonJidMentions?: (number|null);
        quotedType?: (WAE2E.ContextInfo.QuotedType|null);
        botMessageSharingInfo?: (WAAICommon.IBotMessageSharingInfo|null);
        isSpoiler?: (boolean|null);
        mediaDomainInfo?: (WAE2E.IMediaDomainInfo|null);
        partiallySelectedContent?: (WAE2E.ContextInfo.IPartiallySelectedContent|null);
        afterReadDuration?: (number|null);
        crossAppSource?: (WAE2E.ContextInfo.CrossAppSource|null);
        businessInteractionPills?: (WAE2E.ContextInfo.IBusinessInteractionPills|null);
        posterStatusId?: (string|null);
    }

    class ContextInfo implements IContextInfo {
        constructor(p?: WAE2E.IContextInfo);
        public stanzaId?: (string|null);
        public participant?: (string|null);
        public quotedMessage?: (WAE2E.IMessage|null);
        public remoteJid?: (string|null);
        public mentionedJid: string[];
        public conversionSource?: (string|null);
        public conversionData?: (Uint8Array|null);
        public conversionDelaySeconds?: (number|null);
        public forwardingScore?: (number|null);
        public isForwarded?: (boolean|null);
        public quotedAd?: (WAE2E.ContextInfo.IAdReplyInfo|null);
        public placeholderKey?: (WACommon.IMessageKey|null);
        public expiration?: (number|null);
        public ephemeralSettingTimestamp?: (number|Long|null);
        public ephemeralSharedSecret?: (Uint8Array|null);
        public externalAdReply?: (WAE2E.ContextInfo.IExternalAdReplyInfo|null);
        public entryPointConversionSource?: (string|null);
        public entryPointConversionApp?: (string|null);
        public entryPointConversionDelaySeconds?: (number|null);
        public disappearingMode?: (WAE2E.IDisappearingMode|null);
        public actionLink?: (WAE2E.IActionLink|null);
        public groupSubject?: (string|null);
        public parentGroupJid?: (string|null);
        public trustBannerType?: (string|null);
        public trustBannerAction?: (number|null);
        public isSampled?: (boolean|null);
        public groupMentions: WAE2E.IGroupMention[];
        public utm?: (WAE2E.ContextInfo.IUTMInfo|null);
        public forwardedNewsletterMessageInfo?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);
        public businessMessageForwardInfo?: (WAE2E.ContextInfo.IBusinessMessageForwardInfo|null);
        public smbClientCampaignId?: (string|null);
        public smbServerCampaignId?: (string|null);
        public dataSharingContext?: (WAE2E.ContextInfo.IDataSharingContext|null);
        public alwaysShowAdAttribution?: (boolean|null);
        public featureEligibilities?: (WAE2E.ContextInfo.IFeatureEligibilities|null);
        public entryPointConversionExternalSource?: (string|null);
        public entryPointConversionExternalMedium?: (string|null);
        public ctwaSignals?: (string|null);
        public ctwaPayload?: (Uint8Array|null);
        public forwardedAiBotMessageInfo?: (WAAICommon.IForwardedAIBotMessageInfo|null);
        public statusAttributionType?: (WAE2E.ContextInfo.StatusAttributionType|null);
        public urlTrackingMap?: (WAE2E.IUrlTrackingMap|null);
        public pairedMediaType?: (WAE2E.ContextInfo.PairedMediaType|null);
        public rankingVersion?: (number|null);
        public memberLabel?: (WAE2E.IMemberLabel|null);
        public isQuestion?: (boolean|null);
        public statusSourceType?: (WAE2E.ContextInfo.StatusSourceType|null);
        public statusAttributions: WAStatusAttributions.IStatusAttribution[];
        public isGroupStatus?: (boolean|null);
        public forwardOrigin?: (WAE2E.ContextInfo.ForwardOrigin|null);
        public questionReplyQuotedMessage?: (WAE2E.ContextInfo.IQuestionReplyQuotedMessage|null);
        public statusAudienceMetadata?: (WAE2E.ContextInfo.IStatusAudienceMetadata|null);
        public nonJidMentions?: (number|null);
        public quotedType?: (WAE2E.ContextInfo.QuotedType|null);
        public botMessageSharingInfo?: (WAAICommon.IBotMessageSharingInfo|null);
        public isSpoiler?: (boolean|null);
        public mediaDomainInfo?: (WAE2E.IMediaDomainInfo|null);
        public partiallySelectedContent?: (WAE2E.ContextInfo.IPartiallySelectedContent|null);
        public afterReadDuration?: (number|null);
        public crossAppSource?: (WAE2E.ContextInfo.CrossAppSource|null);
        public businessInteractionPills?: (WAE2E.ContextInfo.IBusinessInteractionPills|null);
        public posterStatusId?: (string|null);
        public static create(properties?: WAE2E.IContextInfo): WAE2E.ContextInfo;
        public static encode(m: WAE2E.IContextInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo;
        public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo;
        public static toObject(m: WAE2E.ContextInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ContextInfo {

        enum CrossAppSource {
            CROSS_APP_SOURCE_UNKNOWN = 0,
            CROSS_APP_SOURCE_INSTAGRAM = 1,
            CROSS_APP_SOURCE_FACEBOOK = 2
        }

        enum QuotedType {
            EXPLICIT = 0,
            AUTO = 1
        }

        enum ForwardOrigin {
            UNKNOWN = 0,
            CHAT = 1,
            STATUS = 2,
            CHANNELS = 3,
            META_AI = 4,
            UGC = 5
        }

        enum StatusSourceType {
            IMAGE = 0,
            VIDEO = 1,
            GIF = 2,
            AUDIO = 3,
            TEXT = 4,
            MUSIC_STANDALONE = 5
        }

        enum PairedMediaType {
            NOT_PAIRED_MEDIA = 0,
            SD_VIDEO_PARENT = 1,
            HD_VIDEO_CHILD = 2,
            SD_IMAGE_PARENT = 3,
            HD_IMAGE_CHILD = 4,
            MOTION_PHOTO_PARENT = 5,
            MOTION_PHOTO_CHILD = 6,
            HEVC_VIDEO_PARENT = 7,
            HEVC_VIDEO_CHILD = 8
        }

        enum StatusAttributionType {
            NONE = 0,
            RESHARED_FROM_MENTION = 1,
            RESHARED_FROM_POST = 2,
            RESHARED_FROM_POST_MANY_TIMES = 3,
            FORWARDED_FROM_STATUS = 4
        }

        interface IBusinessInteractionPills {
            businessJid?: (string|null);
            pills?: (WAE2E.ContextInfo.BusinessInteractionPills.IPill[]|null);
            entryPoint?: (WAE2E.ContextInfo.BusinessInteractionPills.EntryPoint|null);
        }

        class BusinessInteractionPills implements IBusinessInteractionPills {
            constructor(p?: WAE2E.ContextInfo.IBusinessInteractionPills);
            public businessJid?: (string|null);
            public pills: WAE2E.ContextInfo.BusinessInteractionPills.IPill[];
            public entryPoint?: (WAE2E.ContextInfo.BusinessInteractionPills.EntryPoint|null);
            public static create(properties?: WAE2E.ContextInfo.IBusinessInteractionPills): WAE2E.ContextInfo.BusinessInteractionPills;
            public static encode(m: WAE2E.ContextInfo.IBusinessInteractionPills, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.BusinessInteractionPills;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.BusinessInteractionPills;
            public static toObject(m: WAE2E.ContextInfo.BusinessInteractionPills, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BusinessInteractionPills {

            enum EntryPoint {
                ENTRY_POINT_UNKNOWN = 0,
                P2P_LINK_SHARE = 1,
                CONTACT_CARD_SHARING = 2,
                PHONE_NUMBER = 3,
                STATUS = 4,
                IN_THREAD_CONTEXT_CARD = 5
            }

            enum PillType {
                UNKNOWN = 0,
                VIEW_BUSINESS = 1,
                CHAT = 2,
                CALL = 3,
                CATALOG = 4,
                CHANNEL = 5,
                BOOK_APPOINTMENT = 6,
                OFFERS = 7,
                BESTSELLERS = 8,
                MENU = 9,
                ABOUT = 10
            }

            interface IPill {
                pillType?: (WAE2E.ContextInfo.BusinessInteractionPills.PillType|null);
                actionUrl?: (string|null);
            }

            class Pill implements IPill {
                constructor(p?: WAE2E.ContextInfo.BusinessInteractionPills.IPill);
                public pillType?: (WAE2E.ContextInfo.BusinessInteractionPills.PillType|null);
                public actionUrl?: (string|null);
                public static create(properties?: WAE2E.ContextInfo.BusinessInteractionPills.IPill): WAE2E.ContextInfo.BusinessInteractionPills.Pill;
                public static encode(m: WAE2E.ContextInfo.BusinessInteractionPills.IPill, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.BusinessInteractionPills.Pill;
                public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.BusinessInteractionPills.Pill;
                public static toObject(m: WAE2E.ContextInfo.BusinessInteractionPills.Pill, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IStatusAudienceMetadata {
            audienceType?: (WAE2E.ContextInfo.StatusAudienceMetadata.AudienceType|null);
            listName?: (string|null);
            listEmoji?: (string|null);
        }

        class StatusAudienceMetadata implements IStatusAudienceMetadata {
            constructor(p?: WAE2E.ContextInfo.IStatusAudienceMetadata);
            public audienceType?: (WAE2E.ContextInfo.StatusAudienceMetadata.AudienceType|null);
            public listName?: (string|null);
            public listEmoji?: (string|null);
            public static create(properties?: WAE2E.ContextInfo.IStatusAudienceMetadata): WAE2E.ContextInfo.StatusAudienceMetadata;
            public static encode(m: WAE2E.ContextInfo.IStatusAudienceMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.StatusAudienceMetadata;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.StatusAudienceMetadata;
            public static toObject(m: WAE2E.ContextInfo.StatusAudienceMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace StatusAudienceMetadata {

            enum AudienceType {
                UNKNOWN = 0,
                CLOSE_FRIENDS = 1
            }
        }

        interface IDataSharingContext {
            showMmDisclosure?: (boolean|null);
            encryptedSignalTokenConsented?: (string|null);
            parameters?: (WAE2E.ContextInfo.DataSharingContext.IParameters[]|null);
            dataSharingFlags?: (number|null);
        }

        class DataSharingContext implements IDataSharingContext {
            constructor(p?: WAE2E.ContextInfo.IDataSharingContext);
            public showMmDisclosure?: (boolean|null);
            public encryptedSignalTokenConsented?: (string|null);
            public parameters: WAE2E.ContextInfo.DataSharingContext.IParameters[];
            public dataSharingFlags?: (number|null);
            public static create(properties?: WAE2E.ContextInfo.IDataSharingContext): WAE2E.ContextInfo.DataSharingContext;
            public static encode(m: WAE2E.ContextInfo.IDataSharingContext, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.DataSharingContext;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.DataSharingContext;
            public static toObject(m: WAE2E.ContextInfo.DataSharingContext, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DataSharingContext {

            enum DataSharingFlags {
                SHOW_MM_DISCLOSURE_ON_CLICK = 1,
                SHOW_MM_DISCLOSURE_ON_READ = 2
            }

            interface IParameters {
                key?: (string|null);
                stringData?: (string|null);
                intData?: (number|Long|null);
                floatData?: (number|null);
                contents?: (WAE2E.ContextInfo.DataSharingContext.IParameters|null);
            }

            class Parameters implements IParameters {
                constructor(p?: WAE2E.ContextInfo.DataSharingContext.IParameters);
                public key?: (string|null);
                public stringData?: (string|null);
                public intData?: (number|Long|null);
                public floatData?: (number|null);
                public contents?: (WAE2E.ContextInfo.DataSharingContext.IParameters|null);
                public static create(properties?: WAE2E.ContextInfo.DataSharingContext.IParameters): WAE2E.ContextInfo.DataSharingContext.Parameters;
                public static encode(m: WAE2E.ContextInfo.DataSharingContext.IParameters, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.DataSharingContext.Parameters;
                public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.DataSharingContext.Parameters;
                public static toObject(m: WAE2E.ContextInfo.DataSharingContext.Parameters, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IForwardedNewsletterMessageInfo {
            newsletterJid?: (string|null);
            serverMessageId?: (number|null);
            newsletterName?: (string|null);
            contentType?: (WAE2E.ContextInfo.ForwardedNewsletterMessageInfo.ContentType|null);
            accessibilityText?: (string|null);
            profileName?: (string|null);
        }

        class ForwardedNewsletterMessageInfo implements IForwardedNewsletterMessageInfo {
            constructor(p?: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo);
            public newsletterJid?: (string|null);
            public serverMessageId?: (number|null);
            public newsletterName?: (string|null);
            public contentType?: (WAE2E.ContextInfo.ForwardedNewsletterMessageInfo.ContentType|null);
            public accessibilityText?: (string|null);
            public profileName?: (string|null);
            public static create(properties?: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;
            public static encode(m: WAE2E.ContextInfo.IForwardedNewsletterMessageInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.ForwardedNewsletterMessageInfo;
            public static toObject(m: WAE2E.ContextInfo.ForwardedNewsletterMessageInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ForwardedNewsletterMessageInfo {

            enum ContentType {
                UPDATE = 1,
                UPDATE_CARD = 2,
                LINK_CARD = 3
            }
        }

        interface IExternalAdReplyInfo {
            title?: (string|null);
            body?: (string|null);
            mediaType?: (WAE2E.ContextInfo.ExternalAdReplyInfo.MediaType|null);
            thumbnailUrl?: (string|null);
            mediaUrl?: (string|null);
            thumbnail?: (Uint8Array|null);
            sourceType?: (string|null);
            sourceId?: (string|null);
            sourceUrl?: (string|null);
            containsAutoReply?: (boolean|null);
            renderLargerThumbnail?: (boolean|null);
            showAdAttribution?: (boolean|null);
            ctwaClid?: (string|null);
            ref?: (string|null);
            clickToWhatsappCall?: (boolean|null);
            adContextPreviewDismissed?: (boolean|null);
            sourceApp?: (string|null);
            automatedGreetingMessageShown?: (boolean|null);
            greetingMessageBody?: (string|null);
            ctaPayload?: (string|null);
            disableNudge?: (boolean|null);
            originalImageUrl?: (string|null);
            automatedGreetingMessageCtaType?: (string|null);
            wtwaAdFormat?: (boolean|null);
            adType?: (WAE2E.ContextInfo.ExternalAdReplyInfo.AdType|null);
            wtwaWebsiteUrl?: (string|null);
            adPreviewUrl?: (string|null);
            containsCtwaFlowsAutoReply?: (boolean|null);
            agmThumbnailStrategy?: (number|null);
            agmTitleStrategy?: (number|null);
            agmSubtitleStrategy?: (number|null);
            agmHeaderInteractionStrategy?: (number|null);
        }

        class ExternalAdReplyInfo implements IExternalAdReplyInfo {
            constructor(p?: WAE2E.ContextInfo.IExternalAdReplyInfo);
            public title?: (string|null);
            public body?: (string|null);
            public mediaType?: (WAE2E.ContextInfo.ExternalAdReplyInfo.MediaType|null);
            public thumbnailUrl?: (string|null);
            public mediaUrl?: (string|null);
            public thumbnail?: (Uint8Array|null);
            public sourceType?: (string|null);
            public sourceId?: (string|null);
            public sourceUrl?: (string|null);
            public containsAutoReply?: (boolean|null);
            public renderLargerThumbnail?: (boolean|null);
            public showAdAttribution?: (boolean|null);
            public ctwaClid?: (string|null);
            public ref?: (string|null);
            public clickToWhatsappCall?: (boolean|null);
            public adContextPreviewDismissed?: (boolean|null);
            public sourceApp?: (string|null);
            public automatedGreetingMessageShown?: (boolean|null);
            public greetingMessageBody?: (string|null);
            public ctaPayload?: (string|null);
            public disableNudge?: (boolean|null);
            public originalImageUrl?: (string|null);
            public automatedGreetingMessageCtaType?: (string|null);
            public wtwaAdFormat?: (boolean|null);
            public adType?: (WAE2E.ContextInfo.ExternalAdReplyInfo.AdType|null);
            public wtwaWebsiteUrl?: (string|null);
            public adPreviewUrl?: (string|null);
            public containsCtwaFlowsAutoReply?: (boolean|null);
            public agmThumbnailStrategy?: (number|null);
            public agmTitleStrategy?: (number|null);
            public agmSubtitleStrategy?: (number|null);
            public agmHeaderInteractionStrategy?: (number|null);
            public static create(properties?: WAE2E.ContextInfo.IExternalAdReplyInfo): WAE2E.ContextInfo.ExternalAdReplyInfo;
            public static encode(m: WAE2E.ContextInfo.IExternalAdReplyInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.ExternalAdReplyInfo;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.ExternalAdReplyInfo;
            public static toObject(m: WAE2E.ContextInfo.ExternalAdReplyInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExternalAdReplyInfo {

            enum AdType {
                CTWA = 0,
                CAWC = 1
            }

            enum MediaType {
                NONE = 0,
                IMAGE = 1,
                VIDEO = 2
            }
        }

        interface IAdReplyInfo {
            advertiserName?: (string|null);
            mediaType?: (WAE2E.ContextInfo.AdReplyInfo.MediaType|null);
            jpegThumbnail?: (Uint8Array|null);
            caption?: (string|null);
        }

        class AdReplyInfo implements IAdReplyInfo {
            constructor(p?: WAE2E.ContextInfo.IAdReplyInfo);
            public advertiserName?: (string|null);
            public mediaType?: (WAE2E.ContextInfo.AdReplyInfo.MediaType|null);
            public jpegThumbnail?: (Uint8Array|null);
            public caption?: (string|null);
            public static create(properties?: WAE2E.ContextInfo.IAdReplyInfo): WAE2E.ContextInfo.AdReplyInfo;
            public static encode(m: WAE2E.ContextInfo.IAdReplyInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.AdReplyInfo;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.AdReplyInfo;
            public static toObject(m: WAE2E.ContextInfo.AdReplyInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AdReplyInfo {

            enum MediaType {
                NONE = 0,
                IMAGE = 1,
                VIDEO = 2
            }
        }

        interface IPartiallySelectedContent {
            text?: (string|null);
        }

        class PartiallySelectedContent implements IPartiallySelectedContent {
            constructor(p?: WAE2E.ContextInfo.IPartiallySelectedContent);
            public text?: (string|null);
            public static create(properties?: WAE2E.ContextInfo.IPartiallySelectedContent): WAE2E.ContextInfo.PartiallySelectedContent;
            public static encode(m: WAE2E.ContextInfo.IPartiallySelectedContent, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.PartiallySelectedContent;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.PartiallySelectedContent;
            public static toObject(m: WAE2E.ContextInfo.PartiallySelectedContent, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFeatureEligibilities {
            cannotBeReactedTo?: (boolean|null);
            cannotBeRanked?: (boolean|null);
            canRequestFeedback?: (boolean|null);
            canBeReshared?: (boolean|null);
            canReceiveMultiReact?: (boolean|null);
        }

        class FeatureEligibilities implements IFeatureEligibilities {
            constructor(p?: WAE2E.ContextInfo.IFeatureEligibilities);
            public cannotBeReactedTo?: (boolean|null);
            public cannotBeRanked?: (boolean|null);
            public canRequestFeedback?: (boolean|null);
            public canBeReshared?: (boolean|null);
            public canReceiveMultiReact?: (boolean|null);
            public static create(properties?: WAE2E.ContextInfo.IFeatureEligibilities): WAE2E.ContextInfo.FeatureEligibilities;
            public static encode(m: WAE2E.ContextInfo.IFeatureEligibilities, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.FeatureEligibilities;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.FeatureEligibilities;
            public static toObject(m: WAE2E.ContextInfo.FeatureEligibilities, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IQuestionReplyQuotedMessage {
            serverQuestionId?: (number|null);
            quotedQuestion?: (WAE2E.IMessage|null);
            quotedResponse?: (WAE2E.IMessage|null);
        }

        class QuestionReplyQuotedMessage implements IQuestionReplyQuotedMessage {
            constructor(p?: WAE2E.ContextInfo.IQuestionReplyQuotedMessage);
            public serverQuestionId?: (number|null);
            public quotedQuestion?: (WAE2E.IMessage|null);
            public quotedResponse?: (WAE2E.IMessage|null);
            public static create(properties?: WAE2E.ContextInfo.IQuestionReplyQuotedMessage): WAE2E.ContextInfo.QuestionReplyQuotedMessage;
            public static encode(m: WAE2E.ContextInfo.IQuestionReplyQuotedMessage, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.QuestionReplyQuotedMessage;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.QuestionReplyQuotedMessage;
            public static toObject(m: WAE2E.ContextInfo.QuestionReplyQuotedMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IUTMInfo {
            utmSource?: (string|null);
            utmCampaign?: (string|null);
        }

        class UTMInfo implements IUTMInfo {
            constructor(p?: WAE2E.ContextInfo.IUTMInfo);
            public utmSource?: (string|null);
            public utmCampaign?: (string|null);
            public static create(properties?: WAE2E.ContextInfo.IUTMInfo): WAE2E.ContextInfo.UTMInfo;
            public static encode(m: WAE2E.ContextInfo.IUTMInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.UTMInfo;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.UTMInfo;
            public static toObject(m: WAE2E.ContextInfo.UTMInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IBusinessMessageForwardInfo {
            businessOwnerJid?: (string|null);
        }

        class BusinessMessageForwardInfo implements IBusinessMessageForwardInfo {
            constructor(p?: WAE2E.ContextInfo.IBusinessMessageForwardInfo);
            public businessOwnerJid?: (string|null);
            public static create(properties?: WAE2E.ContextInfo.IBusinessMessageForwardInfo): WAE2E.ContextInfo.BusinessMessageForwardInfo;
            public static encode(m: WAE2E.ContextInfo.IBusinessMessageForwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContextInfo.BusinessMessageForwardInfo;
            public static fromObject(d: { [k: string]: any }): WAE2E.ContextInfo.BusinessMessageForwardInfo;
            public static toObject(m: WAE2E.ContextInfo.BusinessMessageForwardInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IMessageAssociation {
        associationType?: (WAE2E.MessageAssociation.AssociationType|null);
        parentMessageKey?: (WACommon.IMessageKey|null);
        messageIndex?: (number|null);
    }

    class MessageAssociation implements IMessageAssociation {
        constructor(p?: WAE2E.IMessageAssociation);
        public associationType?: (WAE2E.MessageAssociation.AssociationType|null);
        public parentMessageKey?: (WACommon.IMessageKey|null);
        public messageIndex?: (number|null);
        public static create(properties?: WAE2E.IMessageAssociation): WAE2E.MessageAssociation;
        public static encode(m: WAE2E.IMessageAssociation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MessageAssociation;
        public static fromObject(d: { [k: string]: any }): WAE2E.MessageAssociation;
        public static toObject(m: WAE2E.MessageAssociation, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MessageAssociation {

        enum AssociationType {
            UNKNOWN = 0,
            MEDIA_ALBUM = 1,
            BOT_PLUGIN = 2,
            EVENT_COVER_IMAGE = 3,
            STATUS_POLL = 4,
            HD_VIDEO_DUAL_UPLOAD = 5,
            STATUS_EXTERNAL_RESHARE = 6,
            MEDIA_POLL = 7,
            STATUS_ADD_YOURS = 8,
            STATUS_NOTIFICATION = 9,
            HD_IMAGE_DUAL_UPLOAD = 10,
            STICKER_ANNOTATION = 11,
            MOTION_PHOTO = 12,
            STATUS_LINK_ACTION = 13,
            VIEW_ALL_REPLIES = 14,
            STATUS_ADD_YOURS_AI_IMAGINE = 15,
            STATUS_QUESTION = 16,
            STATUS_ADD_YOURS_DIWALI = 17,
            STATUS_REACTION = 18,
            HEVC_VIDEO_DUAL_UPLOAD = 19,
            POLL_ADD_OPTION = 20
        }
    }

    interface IThreadID {
        threadType?: (WAE2E.ThreadID.ThreadType|null);
        threadKey?: (WACommon.IMessageKey|null);
    }

    class ThreadID implements IThreadID {
        constructor(p?: WAE2E.IThreadID);
        public threadType?: (WAE2E.ThreadID.ThreadType|null);
        public threadKey?: (WACommon.IMessageKey|null);
        public static create(properties?: WAE2E.IThreadID): WAE2E.ThreadID;
        public static encode(m: WAE2E.IThreadID, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ThreadID;
        public static fromObject(d: { [k: string]: any }): WAE2E.ThreadID;
        public static toObject(m: WAE2E.ThreadID, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ThreadID {

        enum ThreadType {
            UNKNOWN = 0,
            VIEW_REPLIES = 1,
            AI_THREAD = 2
        }
    }

    interface IMessageContextInfo {
        deviceListMetadata?: (WAE2E.IDeviceListMetadata|null);
        deviceListMetadataVersion?: (number|null);
        messageSecret?: (Uint8Array|null);
        paddingBytes?: (Uint8Array|null);
        messageAddOnDurationInSecs?: (number|null);
        botMessageSecret?: (Uint8Array|null);
        botMetadata?: (WAAICommon.IBotMetadata|null);
        reportingTokenVersion?: (number|null);
        messageAddOnExpiryType?: (WAE2E.MessageContextInfo.MessageAddonExpiryType|null);
        messageAssociation?: (WAE2E.IMessageAssociation|null);
        capiCreatedGroup?: (boolean|null);
        supportPayload?: (string|null);
        limitSharing?: (WACommon.ILimitSharing|null);
        limitSharingV2?: (WACommon.ILimitSharing|null);
        threadId?: (WAE2E.IThreadID[]|null);
        weblinkRenderConfig?: (WAE2E.WebLinkRenderConfig|null);
        teeBotMetadata?: (Uint8Array|null);
    }

    class MessageContextInfo implements IMessageContextInfo {
        constructor(p?: WAE2E.IMessageContextInfo);
        public deviceListMetadata?: (WAE2E.IDeviceListMetadata|null);
        public deviceListMetadataVersion?: (number|null);
        public messageSecret?: (Uint8Array|null);
        public paddingBytes?: (Uint8Array|null);
        public messageAddOnDurationInSecs?: (number|null);
        public botMessageSecret?: (Uint8Array|null);
        public botMetadata?: (WAAICommon.IBotMetadata|null);
        public reportingTokenVersion?: (number|null);
        public messageAddOnExpiryType?: (WAE2E.MessageContextInfo.MessageAddonExpiryType|null);
        public messageAssociation?: (WAE2E.IMessageAssociation|null);
        public capiCreatedGroup?: (boolean|null);
        public supportPayload?: (string|null);
        public limitSharing?: (WACommon.ILimitSharing|null);
        public limitSharingV2?: (WACommon.ILimitSharing|null);
        public threadId: WAE2E.IThreadID[];
        public weblinkRenderConfig?: (WAE2E.WebLinkRenderConfig|null);
        public teeBotMetadata?: (Uint8Array|null);
        public static create(properties?: WAE2E.IMessageContextInfo): WAE2E.MessageContextInfo;
        public static encode(m: WAE2E.IMessageContextInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MessageContextInfo;
        public static fromObject(d: { [k: string]: any }): WAE2E.MessageContextInfo;
        public static toObject(m: WAE2E.MessageContextInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MessageContextInfo {

        enum MessageAddonExpiryType {
            STATIC = 1,
            DEPENDENT_ON_PARENT = 2
        }
    }

    interface IInteractiveAnnotation {
        location?: (WAE2E.ILocation|null);
        newsletter?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);
        embeddedAction?: (boolean|null);
        tapAction?: (WAE2E.ITapLinkAction|null);
        polygonVertices?: (WAE2E.IPoint[]|null);
        shouldSkipConfirmation?: (boolean|null);
        embeddedContent?: (WAE2E.IEmbeddedContent|null);
        statusLinkType?: (WAE2E.InteractiveAnnotation.StatusLinkType|null);
    }

    class InteractiveAnnotation implements IInteractiveAnnotation {
        constructor(p?: WAE2E.IInteractiveAnnotation);
        public location?: (WAE2E.ILocation|null);
        public newsletter?: (WAE2E.ContextInfo.IForwardedNewsletterMessageInfo|null);
        public embeddedAction?: (boolean|null);
        public tapAction?: (WAE2E.ITapLinkAction|null);
        public polygonVertices: WAE2E.IPoint[];
        public shouldSkipConfirmation?: (boolean|null);
        public embeddedContent?: (WAE2E.IEmbeddedContent|null);
        public statusLinkType?: (WAE2E.InteractiveAnnotation.StatusLinkType|null);
        public action?: ("location"|"newsletter"|"embeddedAction"|"tapAction");
        public static create(properties?: WAE2E.IInteractiveAnnotation): WAE2E.InteractiveAnnotation;
        public static encode(m: WAE2E.IInteractiveAnnotation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InteractiveAnnotation;
        public static fromObject(d: { [k: string]: any }): WAE2E.InteractiveAnnotation;
        public static toObject(m: WAE2E.InteractiveAnnotation, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InteractiveAnnotation {

        enum StatusLinkType {
            RASTERIZED_LINK_PREVIEW = 1,
            RASTERIZED_LINK_TRUNCATED = 2,
            RASTERIZED_LINK_FULL_URL = 3
        }
    }

    interface IHydratedTemplateButton {
        quickReplyButton?: (WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton|null);
        urlButton?: (WAE2E.HydratedTemplateButton.IHydratedURLButton|null);
        callButton?: (WAE2E.HydratedTemplateButton.IHydratedCallButton|null);
        index?: (number|null);
    }

    class HydratedTemplateButton implements IHydratedTemplateButton {
        constructor(p?: WAE2E.IHydratedTemplateButton);
        public quickReplyButton?: (WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton|null);
        public urlButton?: (WAE2E.HydratedTemplateButton.IHydratedURLButton|null);
        public callButton?: (WAE2E.HydratedTemplateButton.IHydratedCallButton|null);
        public index?: (number|null);
        public hydratedButton?: ("quickReplyButton"|"urlButton"|"callButton");
        public static create(properties?: WAE2E.IHydratedTemplateButton): WAE2E.HydratedTemplateButton;
        public static encode(m: WAE2E.IHydratedTemplateButton, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HydratedTemplateButton;
        public static fromObject(d: { [k: string]: any }): WAE2E.HydratedTemplateButton;
        public static toObject(m: WAE2E.HydratedTemplateButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HydratedTemplateButton {

        interface IHydratedURLButton {
            displayText?: (string|null);
            url?: (string|null);
            consentedUsersUrl?: (string|null);
            webviewPresentation?: (WAE2E.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType|null);
        }

        class HydratedURLButton implements IHydratedURLButton {
            constructor(p?: WAE2E.HydratedTemplateButton.IHydratedURLButton);
            public displayText?: (string|null);
            public url?: (string|null);
            public consentedUsersUrl?: (string|null);
            public webviewPresentation?: (WAE2E.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType|null);
            public static create(properties?: WAE2E.HydratedTemplateButton.IHydratedURLButton): WAE2E.HydratedTemplateButton.HydratedURLButton;
            public static encode(m: WAE2E.HydratedTemplateButton.IHydratedURLButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HydratedTemplateButton.HydratedURLButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.HydratedTemplateButton.HydratedURLButton;
            public static toObject(m: WAE2E.HydratedTemplateButton.HydratedURLButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace HydratedURLButton {

            enum WebviewPresentationType {
                FULL = 1,
                TALL = 2,
                COMPACT = 3
            }
        }

        interface IHydratedCallButton {
            displayText?: (string|null);
            phoneNumber?: (string|null);
        }

        class HydratedCallButton implements IHydratedCallButton {
            constructor(p?: WAE2E.HydratedTemplateButton.IHydratedCallButton);
            public displayText?: (string|null);
            public phoneNumber?: (string|null);
            public static create(properties?: WAE2E.HydratedTemplateButton.IHydratedCallButton): WAE2E.HydratedTemplateButton.HydratedCallButton;
            public static encode(m: WAE2E.HydratedTemplateButton.IHydratedCallButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HydratedTemplateButton.HydratedCallButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.HydratedTemplateButton.HydratedCallButton;
            public static toObject(m: WAE2E.HydratedTemplateButton.HydratedCallButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IHydratedQuickReplyButton {
            displayText?: (string|null);
            id?: (string|null);
        }

        class HydratedQuickReplyButton implements IHydratedQuickReplyButton {
            constructor(p?: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton);
            public displayText?: (string|null);
            public id?: (string|null);
            public static create(properties?: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;
            public static encode(m: WAE2E.HydratedTemplateButton.IHydratedQuickReplyButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.HydratedTemplateButton.HydratedQuickReplyButton;
            public static toObject(m: WAE2E.HydratedTemplateButton.HydratedQuickReplyButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IPaymentBackground {
        id?: (string|null);
        fileLength?: (number|Long|null);
        width?: (number|null);
        height?: (number|null);
        mimetype?: (string|null);
        placeholderArgb?: (number|null);
        textArgb?: (number|null);
        subtextArgb?: (number|null);
        mediaData?: (WAE2E.PaymentBackground.IMediaData|null);
        type?: (WAE2E.PaymentBackground.Type|null);
    }

    class PaymentBackground implements IPaymentBackground {
        constructor(p?: WAE2E.IPaymentBackground);
        public id?: (string|null);
        public fileLength?: (number|Long|null);
        public width?: (number|null);
        public height?: (number|null);
        public mimetype?: (string|null);
        public placeholderArgb?: (number|null);
        public textArgb?: (number|null);
        public subtextArgb?: (number|null);
        public mediaData?: (WAE2E.PaymentBackground.IMediaData|null);
        public type?: (WAE2E.PaymentBackground.Type|null);
        public static create(properties?: WAE2E.IPaymentBackground): WAE2E.PaymentBackground;
        public static encode(m: WAE2E.IPaymentBackground, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentBackground;
        public static fromObject(d: { [k: string]: any }): WAE2E.PaymentBackground;
        public static toObject(m: WAE2E.PaymentBackground, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PaymentBackground {

        enum Type {
            UNKNOWN = 0,
            DEFAULT = 1
        }

        interface IMediaData {
            mediaKey?: (Uint8Array|null);
            mediaKeyTimestamp?: (number|Long|null);
            fileSha256?: (Uint8Array|null);
            fileEncSha256?: (Uint8Array|null);
            directPath?: (string|null);
        }

        class MediaData implements IMediaData {
            constructor(p?: WAE2E.PaymentBackground.IMediaData);
            public mediaKey?: (Uint8Array|null);
            public mediaKeyTimestamp?: (number|Long|null);
            public fileSha256?: (Uint8Array|null);
            public fileEncSha256?: (Uint8Array|null);
            public directPath?: (string|null);
            public static create(properties?: WAE2E.PaymentBackground.IMediaData): WAE2E.PaymentBackground.MediaData;
            public static encode(m: WAE2E.PaymentBackground.IMediaData, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentBackground.MediaData;
            public static fromObject(d: { [k: string]: any }): WAE2E.PaymentBackground.MediaData;
            public static toObject(m: WAE2E.PaymentBackground.MediaData, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IDisappearingMode {
        initiator?: (WAE2E.DisappearingMode.Initiator|null);
        trigger?: (WAE2E.DisappearingMode.Trigger|null);
        initiatorDeviceJid?: (string|null);
        initiatedByMe?: (boolean|null);
    }

    class DisappearingMode implements IDisappearingMode {
        constructor(p?: WAE2E.IDisappearingMode);
        public initiator?: (WAE2E.DisappearingMode.Initiator|null);
        public trigger?: (WAE2E.DisappearingMode.Trigger|null);
        public initiatorDeviceJid?: (string|null);
        public initiatedByMe?: (boolean|null);
        public static create(properties?: WAE2E.IDisappearingMode): WAE2E.DisappearingMode;
        public static encode(m: WAE2E.IDisappearingMode, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.DisappearingMode;
        public static fromObject(d: { [k: string]: any }): WAE2E.DisappearingMode;
        public static toObject(m: WAE2E.DisappearingMode, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DisappearingMode {

        enum Trigger {
            UNKNOWN = 0,
            CHAT_SETTING = 1,
            ACCOUNT_SETTING = 2,
            BULK_CHANGE = 3,
            BIZ_SUPPORTS_FB_HOSTING = 4,
            UNKNOWN_GROUPS = 5
        }

        enum Initiator {
            CHANGED_IN_CHAT = 0,
            INITIATED_BY_ME = 1,
            INITIATED_BY_OTHER = 2,
            BIZ_UPGRADE_FB_HOSTING = 3
        }
    }

    interface IProcessedVideo {
        directPath?: (string|null);
        fileSha256?: (Uint8Array|null);
        height?: (number|null);
        width?: (number|null);
        fileLength?: (number|Long|null);
        bitrate?: (number|null);
        quality?: (WAE2E.ProcessedVideo.VideoQuality|null);
        capabilities?: (string[]|null);
    }

    class ProcessedVideo implements IProcessedVideo {
        constructor(p?: WAE2E.IProcessedVideo);
        public directPath?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public height?: (number|null);
        public width?: (number|null);
        public fileLength?: (number|Long|null);
        public bitrate?: (number|null);
        public quality?: (WAE2E.ProcessedVideo.VideoQuality|null);
        public capabilities: string[];
        public static create(properties?: WAE2E.IProcessedVideo): WAE2E.ProcessedVideo;
        public static encode(m: WAE2E.IProcessedVideo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ProcessedVideo;
        public static fromObject(d: { [k: string]: any }): WAE2E.ProcessedVideo;
        public static toObject(m: WAE2E.ProcessedVideo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ProcessedVideo {

        enum VideoQuality {
            UNDEFINED = 0,
            LOW = 1,
            MID = 2,
            HIGH = 3
        }
    }

    interface IMessage {
        conversation?: (string|null);
        senderKeyDistributionMessage?: (WAE2E.ISenderKeyDistributionMessage|null);
        imageMessage?: (WAE2E.IImageMessage|null);
        contactMessage?: (WAE2E.IContactMessage|null);
        locationMessage?: (WAE2E.ILocationMessage|null);
        extendedTextMessage?: (WAE2E.IExtendedTextMessage|null);
        documentMessage?: (WAE2E.IDocumentMessage|null);
        audioMessage?: (WAE2E.IAudioMessage|null);
        videoMessage?: (WAE2E.IVideoMessage|null);
        call?: (WAE2E.ICall|null);
        chat?: (WAE2E.IChat|null);
        protocolMessage?: (WAE2E.IProtocolMessage|null);
        contactsArrayMessage?: (WAE2E.IContactsArrayMessage|null);
        highlyStructuredMessage?: (WAE2E.IHighlyStructuredMessage|null);
        fastRatchetKeySenderKeyDistributionMessage?: (WAE2E.ISenderKeyDistributionMessage|null);
        sendPaymentMessage?: (WAE2E.ISendPaymentMessage|null);
        liveLocationMessage?: (WAE2E.ILiveLocationMessage|null);
        requestPaymentMessage?: (WAE2E.IRequestPaymentMessage|null);
        declinePaymentRequestMessage?: (WAE2E.IDeclinePaymentRequestMessage|null);
        cancelPaymentRequestMessage?: (WAE2E.ICancelPaymentRequestMessage|null);
        templateMessage?: (WAE2E.ITemplateMessage|null);
        stickerMessage?: (WAE2E.IStickerMessage|null);
        groupInviteMessage?: (WAE2E.IGroupInviteMessage|null);
        templateButtonReplyMessage?: (WAE2E.ITemplateButtonReplyMessage|null);
        productMessage?: (WAE2E.IProductMessage|null);
        deviceSentMessage?: (WAE2E.IDeviceSentMessage|null);
        messageContextInfo?: (WAE2E.IMessageContextInfo|null);
        listMessage?: (WAE2E.IListMessage|null);
        viewOnceMessage?: (WAE2E.IFutureProofMessage|null);
        orderMessage?: (WAE2E.IOrderMessage|null);
        listResponseMessage?: (WAE2E.IListResponseMessage|null);
        ephemeralMessage?: (WAE2E.IFutureProofMessage|null);
        invoiceMessage?: (WAE2E.IInvoiceMessage|null);
        buttonsMessage?: (WAE2E.IButtonsMessage|null);
        buttonsResponseMessage?: (WAE2E.IButtonsResponseMessage|null);
        paymentInviteMessage?: (WAE2E.IPaymentInviteMessage|null);
        interactiveMessage?: (WAE2E.IInteractiveMessage|null);
        reactionMessage?: (WAE2E.IReactionMessage|null);
        stickerSyncRmrMessage?: (WAE2E.IStickerSyncRMRMessage|null);
        interactiveResponseMessage?: (WAE2E.IInteractiveResponseMessage|null);
        pollCreationMessage?: (WAE2E.IPollCreationMessage|null);
        pollUpdateMessage?: (WAE2E.IPollUpdateMessage|null);
        keepInChatMessage?: (WAE2E.IKeepInChatMessage|null);
        documentWithCaptionMessage?: (WAE2E.IFutureProofMessage|null);
        requestPhoneNumberMessage?: (WAE2E.IRequestPhoneNumberMessage|null);
        viewOnceMessageV2?: (WAE2E.IFutureProofMessage|null);
        encReactionMessage?: (WAE2E.IEncReactionMessage|null);
        editedMessage?: (WAE2E.IFutureProofMessage|null);
        viewOnceMessageV2Extension?: (WAE2E.IFutureProofMessage|null);
        pollCreationMessageV2?: (WAE2E.IPollCreationMessage|null);
        scheduledCallCreationMessage?: (WAE2E.IScheduledCallCreationMessage|null);
        groupMentionedMessage?: (WAE2E.IFutureProofMessage|null);
        pinInChatMessage?: (WAE2E.IPinInChatMessage|null);
        pollCreationMessageV3?: (WAE2E.IPollCreationMessage|null);
        scheduledCallEditMessage?: (WAE2E.IScheduledCallEditMessage|null);
        ptvMessage?: (WAE2E.IVideoMessage|null);
        botInvokeMessage?: (WAE2E.IFutureProofMessage|null);
        callLogMesssage?: (WAE2E.ICallLogMessage|null);
        messageHistoryBundle?: (WAE2E.IMessageHistoryBundle|null);
        encCommentMessage?: (WAE2E.IEncCommentMessage|null);
        bcallMessage?: (WAE2E.IBCallMessage|null);
        lottieStickerMessage?: (WAE2E.IFutureProofMessage|null);
        eventMessage?: (WAE2E.IEventMessage|null);
        encEventResponseMessage?: (WAE2E.IEncEventResponseMessage|null);
        commentMessage?: (WAE2E.ICommentMessage|null);
        newsletterAdminInviteMessage?: (WAE2E.INewsletterAdminInviteMessage|null);
        placeholderMessage?: (WAE2E.IPlaceholderMessage|null);
        secretEncryptedMessage?: (WAE2E.ISecretEncryptedMessage|null);
        albumMessage?: (WAE2E.IAlbumMessage|null);
        eventCoverImage?: (WAE2E.IFutureProofMessage|null);
        stickerPackMessage?: (WAE2E.IStickerPackMessage|null);
        statusMentionMessage?: (WAE2E.IFutureProofMessage|null);
        pollResultSnapshotMessage?: (WAE2E.IPollResultSnapshotMessage|null);
        pollCreationOptionImageMessage?: (WAE2E.IFutureProofMessage|null);
        associatedChildMessage?: (WAE2E.IFutureProofMessage|null);
        groupStatusMentionMessage?: (WAE2E.IFutureProofMessage|null);
        pollCreationMessageV4?: (WAE2E.IFutureProofMessage|null);
        statusAddYours?: (WAE2E.IFutureProofMessage|null);
        groupStatusMessage?: (WAE2E.IFutureProofMessage|null);
        richResponseMessage?: (WAE2E.IAIRichResponseMessage|null);
        statusNotificationMessage?: (WAE2E.IStatusNotificationMessage|null);
        limitSharingMessage?: (WAE2E.IFutureProofMessage|null);
        botTaskMessage?: (WAE2E.IFutureProofMessage|null);
        questionMessage?: (WAE2E.IFutureProofMessage|null);
        messageHistoryNotice?: (WAE2E.IMessageHistoryNotice|null);
        groupStatusMessageV2?: (WAE2E.IFutureProofMessage|null);
        botForwardedMessage?: (WAE2E.IFutureProofMessage|null);
        statusQuestionAnswerMessage?: (WAE2E.IStatusQuestionAnswerMessage|null);
        questionReplyMessage?: (WAE2E.IFutureProofMessage|null);
        questionResponseMessage?: (WAE2E.IQuestionResponseMessage|null);
        statusQuotedMessage?: (WAE2E.IStatusQuotedMessage|null);
        statusStickerInteractionMessage?: (WAE2E.IStatusStickerInteractionMessage|null);
        pollCreationMessageV5?: (WAE2E.IPollCreationMessage|null);
        newsletterFollowerInviteMessageV2?: (WAE2E.INewsletterFollowerInviteMessage|null);
        pollResultSnapshotMessageV3?: (WAE2E.IPollResultSnapshotMessage|null);
        newsletterAdminProfileMessage?: (WAE2E.IFutureProofMessage|null);
        newsletterAdminProfileMessageV2?: (WAE2E.IFutureProofMessage|null);
        spoilerMessage?: (WAE2E.IFutureProofMessage|null);
        pollCreationMessageV6?: (WAE2E.IPollCreationMessage|null);
        conditionalRevealMessage?: (WAE2E.IConditionalRevealMessage|null);
        pollAddOptionMessage?: (WAE2E.IPollAddOptionMessage|null);
        eventInviteMessage?: (WAE2E.IEventInviteMessage|null);
        groupRootKeyShare?: (WAE2E.IGroupRootKeyShare|null);
        p2PPaymentReminderNotification?: (WAE2E.IP2PPaymentReminderNotification|null);
        splitPaymentMessage?: (WAE2E.ISplitPaymentMessage|null);
    }

    class Message implements IMessage {
        constructor(p?: WAE2E.IMessage);
        public conversation?: (string|null);
        public senderKeyDistributionMessage?: (WAE2E.ISenderKeyDistributionMessage|null);
        public imageMessage?: (WAE2E.IImageMessage|null);
        public contactMessage?: (WAE2E.IContactMessage|null);
        public locationMessage?: (WAE2E.ILocationMessage|null);
        public extendedTextMessage?: (WAE2E.IExtendedTextMessage|null);
        public documentMessage?: (WAE2E.IDocumentMessage|null);
        public audioMessage?: (WAE2E.IAudioMessage|null);
        public videoMessage?: (WAE2E.IVideoMessage|null);
        public call?: (WAE2E.ICall|null);
        public chat?: (WAE2E.IChat|null);
        public protocolMessage?: (WAE2E.IProtocolMessage|null);
        public contactsArrayMessage?: (WAE2E.IContactsArrayMessage|null);
        public highlyStructuredMessage?: (WAE2E.IHighlyStructuredMessage|null);
        public fastRatchetKeySenderKeyDistributionMessage?: (WAE2E.ISenderKeyDistributionMessage|null);
        public sendPaymentMessage?: (WAE2E.ISendPaymentMessage|null);
        public liveLocationMessage?: (WAE2E.ILiveLocationMessage|null);
        public requestPaymentMessage?: (WAE2E.IRequestPaymentMessage|null);
        public declinePaymentRequestMessage?: (WAE2E.IDeclinePaymentRequestMessage|null);
        public cancelPaymentRequestMessage?: (WAE2E.ICancelPaymentRequestMessage|null);
        public templateMessage?: (WAE2E.ITemplateMessage|null);
        public stickerMessage?: (WAE2E.IStickerMessage|null);
        public groupInviteMessage?: (WAE2E.IGroupInviteMessage|null);
        public templateButtonReplyMessage?: (WAE2E.ITemplateButtonReplyMessage|null);
        public productMessage?: (WAE2E.IProductMessage|null);
        public deviceSentMessage?: (WAE2E.IDeviceSentMessage|null);
        public messageContextInfo?: (WAE2E.IMessageContextInfo|null);
        public listMessage?: (WAE2E.IListMessage|null);
        public viewOnceMessage?: (WAE2E.IFutureProofMessage|null);
        public orderMessage?: (WAE2E.IOrderMessage|null);
        public listResponseMessage?: (WAE2E.IListResponseMessage|null);
        public ephemeralMessage?: (WAE2E.IFutureProofMessage|null);
        public invoiceMessage?: (WAE2E.IInvoiceMessage|null);
        public buttonsMessage?: (WAE2E.IButtonsMessage|null);
        public buttonsResponseMessage?: (WAE2E.IButtonsResponseMessage|null);
        public paymentInviteMessage?: (WAE2E.IPaymentInviteMessage|null);
        public interactiveMessage?: (WAE2E.IInteractiveMessage|null);
        public reactionMessage?: (WAE2E.IReactionMessage|null);
        public stickerSyncRmrMessage?: (WAE2E.IStickerSyncRMRMessage|null);
        public interactiveResponseMessage?: (WAE2E.IInteractiveResponseMessage|null);
        public pollCreationMessage?: (WAE2E.IPollCreationMessage|null);
        public pollUpdateMessage?: (WAE2E.IPollUpdateMessage|null);
        public keepInChatMessage?: (WAE2E.IKeepInChatMessage|null);
        public documentWithCaptionMessage?: (WAE2E.IFutureProofMessage|null);
        public requestPhoneNumberMessage?: (WAE2E.IRequestPhoneNumberMessage|null);
        public viewOnceMessageV2?: (WAE2E.IFutureProofMessage|null);
        public encReactionMessage?: (WAE2E.IEncReactionMessage|null);
        public editedMessage?: (WAE2E.IFutureProofMessage|null);
        public viewOnceMessageV2Extension?: (WAE2E.IFutureProofMessage|null);
        public pollCreationMessageV2?: (WAE2E.IPollCreationMessage|null);
        public scheduledCallCreationMessage?: (WAE2E.IScheduledCallCreationMessage|null);
        public groupMentionedMessage?: (WAE2E.IFutureProofMessage|null);
        public pinInChatMessage?: (WAE2E.IPinInChatMessage|null);
        public pollCreationMessageV3?: (WAE2E.IPollCreationMessage|null);
        public scheduledCallEditMessage?: (WAE2E.IScheduledCallEditMessage|null);
        public ptvMessage?: (WAE2E.IVideoMessage|null);
        public botInvokeMessage?: (WAE2E.IFutureProofMessage|null);
        public callLogMesssage?: (WAE2E.ICallLogMessage|null);
        public messageHistoryBundle?: (WAE2E.IMessageHistoryBundle|null);
        public encCommentMessage?: (WAE2E.IEncCommentMessage|null);
        public bcallMessage?: (WAE2E.IBCallMessage|null);
        public lottieStickerMessage?: (WAE2E.IFutureProofMessage|null);
        public eventMessage?: (WAE2E.IEventMessage|null);
        public encEventResponseMessage?: (WAE2E.IEncEventResponseMessage|null);
        public commentMessage?: (WAE2E.ICommentMessage|null);
        public newsletterAdminInviteMessage?: (WAE2E.INewsletterAdminInviteMessage|null);
        public placeholderMessage?: (WAE2E.IPlaceholderMessage|null);
        public secretEncryptedMessage?: (WAE2E.ISecretEncryptedMessage|null);
        public albumMessage?: (WAE2E.IAlbumMessage|null);
        public eventCoverImage?: (WAE2E.IFutureProofMessage|null);
        public stickerPackMessage?: (WAE2E.IStickerPackMessage|null);
        public statusMentionMessage?: (WAE2E.IFutureProofMessage|null);
        public pollResultSnapshotMessage?: (WAE2E.IPollResultSnapshotMessage|null);
        public pollCreationOptionImageMessage?: (WAE2E.IFutureProofMessage|null);
        public associatedChildMessage?: (WAE2E.IFutureProofMessage|null);
        public groupStatusMentionMessage?: (WAE2E.IFutureProofMessage|null);
        public pollCreationMessageV4?: (WAE2E.IFutureProofMessage|null);
        public statusAddYours?: (WAE2E.IFutureProofMessage|null);
        public groupStatusMessage?: (WAE2E.IFutureProofMessage|null);
        public richResponseMessage?: (WAE2E.IAIRichResponseMessage|null);
        public statusNotificationMessage?: (WAE2E.IStatusNotificationMessage|null);
        public limitSharingMessage?: (WAE2E.IFutureProofMessage|null);
        public botTaskMessage?: (WAE2E.IFutureProofMessage|null);
        public questionMessage?: (WAE2E.IFutureProofMessage|null);
        public messageHistoryNotice?: (WAE2E.IMessageHistoryNotice|null);
        public groupStatusMessageV2?: (WAE2E.IFutureProofMessage|null);
        public botForwardedMessage?: (WAE2E.IFutureProofMessage|null);
        public statusQuestionAnswerMessage?: (WAE2E.IStatusQuestionAnswerMessage|null);
        public questionReplyMessage?: (WAE2E.IFutureProofMessage|null);
        public questionResponseMessage?: (WAE2E.IQuestionResponseMessage|null);
        public statusQuotedMessage?: (WAE2E.IStatusQuotedMessage|null);
        public statusStickerInteractionMessage?: (WAE2E.IStatusStickerInteractionMessage|null);
        public pollCreationMessageV5?: (WAE2E.IPollCreationMessage|null);
        public newsletterFollowerInviteMessageV2?: (WAE2E.INewsletterFollowerInviteMessage|null);
        public pollResultSnapshotMessageV3?: (WAE2E.IPollResultSnapshotMessage|null);
        public newsletterAdminProfileMessage?: (WAE2E.IFutureProofMessage|null);
        public newsletterAdminProfileMessageV2?: (WAE2E.IFutureProofMessage|null);
        public spoilerMessage?: (WAE2E.IFutureProofMessage|null);
        public pollCreationMessageV6?: (WAE2E.IPollCreationMessage|null);
        public conditionalRevealMessage?: (WAE2E.IConditionalRevealMessage|null);
        public pollAddOptionMessage?: (WAE2E.IPollAddOptionMessage|null);
        public eventInviteMessage?: (WAE2E.IEventInviteMessage|null);
        public groupRootKeyShare?: (WAE2E.IGroupRootKeyShare|null);
        public p2PPaymentReminderNotification?: (WAE2E.IP2PPaymentReminderNotification|null);
        public splitPaymentMessage?: (WAE2E.ISplitPaymentMessage|null);
        public static create(properties?: WAE2E.IMessage): WAE2E.Message;
        public static encode(m: WAE2E.IMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.Message;
        public static fromObject(d: { [k: string]: any }): WAE2E.Message;
        public static toObject(m: WAE2E.Message, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAlbumMessage {
        expectedImageCount?: (number|null);
        expectedVideoCount?: (number|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class AlbumMessage implements IAlbumMessage {
        constructor(p?: WAE2E.IAlbumMessage);
        public expectedImageCount?: (number|null);
        public expectedVideoCount?: (number|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.IAlbumMessage): WAE2E.AlbumMessage;
        public static encode(m: WAE2E.IAlbumMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AlbumMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.AlbumMessage;
        public static toObject(m: WAE2E.AlbumMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMessageHistoryMetadata {
        historyReceivers?: (string[]|null);
        oldestMessageTimestampInWindow?: (number|Long|null);
        messageCount?: (number|Long|null);
        nonHistoryReceivers?: (string[]|null);
        oldestMessageTimestampInBundle?: (number|Long|null);
    }

    class MessageHistoryMetadata implements IMessageHistoryMetadata {
        constructor(p?: WAE2E.IMessageHistoryMetadata);
        public historyReceivers: string[];
        public oldestMessageTimestampInWindow?: (number|Long|null);
        public messageCount?: (number|Long|null);
        public nonHistoryReceivers: string[];
        public oldestMessageTimestampInBundle?: (number|Long|null);
        public static create(properties?: WAE2E.IMessageHistoryMetadata): WAE2E.MessageHistoryMetadata;
        public static encode(m: WAE2E.IMessageHistoryMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MessageHistoryMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.MessageHistoryMetadata;
        public static toObject(m: WAE2E.MessageHistoryMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMessageHistoryNotice {
        contextInfo?: (WAE2E.IContextInfo|null);
        messageHistoryMetadata?: (WAE2E.IMessageHistoryMetadata|null);
    }

    class MessageHistoryNotice implements IMessageHistoryNotice {
        constructor(p?: WAE2E.IMessageHistoryNotice);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public messageHistoryMetadata?: (WAE2E.IMessageHistoryMetadata|null);
        public static create(properties?: WAE2E.IMessageHistoryNotice): WAE2E.MessageHistoryNotice;
        public static encode(m: WAE2E.IMessageHistoryNotice, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MessageHistoryNotice;
        public static fromObject(d: { [k: string]: any }): WAE2E.MessageHistoryNotice;
        public static toObject(m: WAE2E.MessageHistoryNotice, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMessageHistoryBundle {
        mimetype?: (string|null);
        fileSha256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        directPath?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        messageHistoryMetadata?: (WAE2E.IMessageHistoryMetadata|null);
    }

    class MessageHistoryBundle implements IMessageHistoryBundle {
        constructor(p?: WAE2E.IMessageHistoryBundle);
        public mimetype?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public directPath?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public messageHistoryMetadata?: (WAE2E.IMessageHistoryMetadata|null);
        public static create(properties?: WAE2E.IMessageHistoryBundle): WAE2E.MessageHistoryBundle;
        public static encode(m: WAE2E.IMessageHistoryBundle, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MessageHistoryBundle;
        public static fromObject(d: { [k: string]: any }): WAE2E.MessageHistoryBundle;
        public static toObject(m: WAE2E.MessageHistoryBundle, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEncEventResponseMessage {
        eventCreationMessageKey?: (WACommon.IMessageKey|null);
        encPayload?: (Uint8Array|null);
        encIv?: (Uint8Array|null);
    }

    class EncEventResponseMessage implements IEncEventResponseMessage {
        constructor(p?: WAE2E.IEncEventResponseMessage);
        public eventCreationMessageKey?: (WACommon.IMessageKey|null);
        public encPayload?: (Uint8Array|null);
        public encIv?: (Uint8Array|null);
        public static create(properties?: WAE2E.IEncEventResponseMessage): WAE2E.EncEventResponseMessage;
        public static encode(m: WAE2E.IEncEventResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EncEventResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EncEventResponseMessage;
        public static toObject(m: WAE2E.EncEventResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEventMessage {
        contextInfo?: (WAE2E.IContextInfo|null);
        isCanceled?: (boolean|null);
        name?: (string|null);
        description?: (string|null);
        location?: (WAE2E.ILocationMessage|null);
        joinLink?: (string|null);
        startTime?: (number|Long|null);
        endTime?: (number|Long|null);
        extraGuestsAllowed?: (boolean|null);
        isScheduleCall?: (boolean|null);
        hasReminder?: (boolean|null);
        reminderOffsetSec?: (number|Long|null);
    }

    class EventMessage implements IEventMessage {
        constructor(p?: WAE2E.IEventMessage);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public isCanceled?: (boolean|null);
        public name?: (string|null);
        public description?: (string|null);
        public location?: (WAE2E.ILocationMessage|null);
        public joinLink?: (string|null);
        public startTime?: (number|Long|null);
        public endTime?: (number|Long|null);
        public extraGuestsAllowed?: (boolean|null);
        public isScheduleCall?: (boolean|null);
        public hasReminder?: (boolean|null);
        public reminderOffsetSec?: (number|Long|null);
        public static create(properties?: WAE2E.IEventMessage): WAE2E.EventMessage;
        public static encode(m: WAE2E.IEventMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EventMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EventMessage;
        public static toObject(m: WAE2E.EventMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICommentMessage {
        message?: (WAE2E.IMessage|null);
        targetMessageKey?: (WACommon.IMessageKey|null);
    }

    class CommentMessage implements ICommentMessage {
        constructor(p?: WAE2E.ICommentMessage);
        public message?: (WAE2E.IMessage|null);
        public targetMessageKey?: (WACommon.IMessageKey|null);
        public static create(properties?: WAE2E.ICommentMessage): WAE2E.CommentMessage;
        public static encode(m: WAE2E.ICommentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.CommentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.CommentMessage;
        public static toObject(m: WAE2E.CommentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEncCommentMessage {
        targetMessageKey?: (WACommon.IMessageKey|null);
        encPayload?: (Uint8Array|null);
        encIv?: (Uint8Array|null);
    }

    class EncCommentMessage implements IEncCommentMessage {
        constructor(p?: WAE2E.IEncCommentMessage);
        public targetMessageKey?: (WACommon.IMessageKey|null);
        public encPayload?: (Uint8Array|null);
        public encIv?: (Uint8Array|null);
        public static create(properties?: WAE2E.IEncCommentMessage): WAE2E.EncCommentMessage;
        public static encode(m: WAE2E.IEncCommentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EncCommentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EncCommentMessage;
        public static toObject(m: WAE2E.EncCommentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEncReactionMessage {
        targetMessageKey?: (WACommon.IMessageKey|null);
        encPayload?: (Uint8Array|null);
        encIv?: (Uint8Array|null);
    }

    class EncReactionMessage implements IEncReactionMessage {
        constructor(p?: WAE2E.IEncReactionMessage);
        public targetMessageKey?: (WACommon.IMessageKey|null);
        public encPayload?: (Uint8Array|null);
        public encIv?: (Uint8Array|null);
        public static create(properties?: WAE2E.IEncReactionMessage): WAE2E.EncReactionMessage;
        public static encode(m: WAE2E.IEncReactionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EncReactionMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EncReactionMessage;
        public static toObject(m: WAE2E.EncReactionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IKeepInChatMessage {
        key?: (WACommon.IMessageKey|null);
        keepType?: (WAE2E.KeepType|null);
        timestampMs?: (number|Long|null);
    }

    class KeepInChatMessage implements IKeepInChatMessage {
        constructor(p?: WAE2E.IKeepInChatMessage);
        public key?: (WACommon.IMessageKey|null);
        public keepType?: (WAE2E.KeepType|null);
        public timestampMs?: (number|Long|null);
        public static create(properties?: WAE2E.IKeepInChatMessage): WAE2E.KeepInChatMessage;
        public static encode(m: WAE2E.IKeepInChatMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.KeepInChatMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.KeepInChatMessage;
        public static toObject(m: WAE2E.KeepInChatMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IQuestionResponseMessage {
        key?: (WACommon.IMessageKey|null);
        text?: (string|null);
    }

    class QuestionResponseMessage implements IQuestionResponseMessage {
        constructor(p?: WAE2E.IQuestionResponseMessage);
        public key?: (WACommon.IMessageKey|null);
        public text?: (string|null);
        public static create(properties?: WAE2E.IQuestionResponseMessage): WAE2E.QuestionResponseMessage;
        public static encode(m: WAE2E.IQuestionResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.QuestionResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.QuestionResponseMessage;
        public static toObject(m: WAE2E.QuestionResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStatusQuestionAnswerMessage {
        key?: (WACommon.IMessageKey|null);
        text?: (string|null);
    }

    class StatusQuestionAnswerMessage implements IStatusQuestionAnswerMessage {
        constructor(p?: WAE2E.IStatusQuestionAnswerMessage);
        public key?: (WACommon.IMessageKey|null);
        public text?: (string|null);
        public static create(properties?: WAE2E.IStatusQuestionAnswerMessage): WAE2E.StatusQuestionAnswerMessage;
        public static encode(m: WAE2E.IStatusQuestionAnswerMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StatusQuestionAnswerMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StatusQuestionAnswerMessage;
        public static toObject(m: WAE2E.StatusQuestionAnswerMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollResultSnapshotMessage {
        name?: (string|null);
        pollVotes?: (WAE2E.PollResultSnapshotMessage.IPollVote[]|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        pollType?: (WAE2E.PollType|null);
    }

    class PollResultSnapshotMessage implements IPollResultSnapshotMessage {
        constructor(p?: WAE2E.IPollResultSnapshotMessage);
        public name?: (string|null);
        public pollVotes: WAE2E.PollResultSnapshotMessage.IPollVote[];
        public contextInfo?: (WAE2E.IContextInfo|null);
        public pollType?: (WAE2E.PollType|null);
        public static create(properties?: WAE2E.IPollResultSnapshotMessage): WAE2E.PollResultSnapshotMessage;
        public static encode(m: WAE2E.IPollResultSnapshotMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollResultSnapshotMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollResultSnapshotMessage;
        public static toObject(m: WAE2E.PollResultSnapshotMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PollResultSnapshotMessage {

        interface IPollVote {
            optionName?: (string|null);
            optionVoteCount?: (number|Long|null);
        }

        class PollVote implements IPollVote {
            constructor(p?: WAE2E.PollResultSnapshotMessage.IPollVote);
            public optionName?: (string|null);
            public optionVoteCount?: (number|Long|null);
            public static create(properties?: WAE2E.PollResultSnapshotMessage.IPollVote): WAE2E.PollResultSnapshotMessage.PollVote;
            public static encode(m: WAE2E.PollResultSnapshotMessage.IPollVote, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollResultSnapshotMessage.PollVote;
            public static fromObject(d: { [k: string]: any }): WAE2E.PollResultSnapshotMessage.PollVote;
            public static toObject(m: WAE2E.PollResultSnapshotMessage.PollVote, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IPollAddOptionMessage {
        pollCreationMessageKey?: (WACommon.IMessageKey|null);
        addOption?: (WAE2E.PollCreationMessage.IOption|null);
    }

    class PollAddOptionMessage implements IPollAddOptionMessage {
        constructor(p?: WAE2E.IPollAddOptionMessage);
        public pollCreationMessageKey?: (WACommon.IMessageKey|null);
        public addOption?: (WAE2E.PollCreationMessage.IOption|null);
        public static create(properties?: WAE2E.IPollAddOptionMessage): WAE2E.PollAddOptionMessage;
        public static encode(m: WAE2E.IPollAddOptionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollAddOptionMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollAddOptionMessage;
        public static toObject(m: WAE2E.PollAddOptionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollVoteMessage {
        selectedOptions?: (Uint8Array[]|null);
    }

    class PollVoteMessage implements IPollVoteMessage {
        constructor(p?: WAE2E.IPollVoteMessage);
        public selectedOptions: Uint8Array[];
        public static create(properties?: WAE2E.IPollVoteMessage): WAE2E.PollVoteMessage;
        public static encode(m: WAE2E.IPollVoteMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollVoteMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollVoteMessage;
        public static toObject(m: WAE2E.PollVoteMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollEncValue {
        encPayload?: (Uint8Array|null);
        encIv?: (Uint8Array|null);
    }

    class PollEncValue implements IPollEncValue {
        constructor(p?: WAE2E.IPollEncValue);
        public encPayload?: (Uint8Array|null);
        public encIv?: (Uint8Array|null);
        public static create(properties?: WAE2E.IPollEncValue): WAE2E.PollEncValue;
        public static encode(m: WAE2E.IPollEncValue, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollEncValue;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollEncValue;
        public static toObject(m: WAE2E.PollEncValue, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollUpdateMessageMetadata {
    }

    class PollUpdateMessageMetadata implements IPollUpdateMessageMetadata {
        constructor(p?: WAE2E.IPollUpdateMessageMetadata);
        public static create(properties?: WAE2E.IPollUpdateMessageMetadata): WAE2E.PollUpdateMessageMetadata;
        public static encode(m: WAE2E.IPollUpdateMessageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollUpdateMessageMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollUpdateMessageMetadata;
        public static toObject(m: WAE2E.PollUpdateMessageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollUpdateMessage {
        pollCreationMessageKey?: (WACommon.IMessageKey|null);
        vote?: (WAE2E.IPollEncValue|null);
        metadata?: (WAE2E.IPollUpdateMessageMetadata|null);
        senderTimestampMs?: (number|Long|null);
    }

    class PollUpdateMessage implements IPollUpdateMessage {
        constructor(p?: WAE2E.IPollUpdateMessage);
        public pollCreationMessageKey?: (WACommon.IMessageKey|null);
        public vote?: (WAE2E.IPollEncValue|null);
        public metadata?: (WAE2E.IPollUpdateMessageMetadata|null);
        public senderTimestampMs?: (number|Long|null);
        public static create(properties?: WAE2E.IPollUpdateMessage): WAE2E.PollUpdateMessage;
        public static encode(m: WAE2E.IPollUpdateMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollUpdateMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollUpdateMessage;
        public static toObject(m: WAE2E.PollUpdateMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollCreationMessage {
        encKey?: (Uint8Array|null);
        name?: (string|null);
        options?: (WAE2E.PollCreationMessage.IOption[]|null);
        selectableOptionsCount?: (number|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        pollContentType?: (WAE2E.PollContentType|null);
        pollType?: (WAE2E.PollType|null);
        correctAnswer?: (WAE2E.PollCreationMessage.IOption|null);
        endTime?: (number|Long|null);
        hideParticipantName?: (boolean|null);
        allowAddOption?: (boolean|null);
    }

    class PollCreationMessage implements IPollCreationMessage {
        constructor(p?: WAE2E.IPollCreationMessage);
        public encKey?: (Uint8Array|null);
        public name?: (string|null);
        public options: WAE2E.PollCreationMessage.IOption[];
        public selectableOptionsCount?: (number|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public pollContentType?: (WAE2E.PollContentType|null);
        public pollType?: (WAE2E.PollType|null);
        public correctAnswer?: (WAE2E.PollCreationMessage.IOption|null);
        public endTime?: (number|Long|null);
        public hideParticipantName?: (boolean|null);
        public allowAddOption?: (boolean|null);
        public static create(properties?: WAE2E.IPollCreationMessage): WAE2E.PollCreationMessage;
        public static encode(m: WAE2E.IPollCreationMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollCreationMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.PollCreationMessage;
        public static toObject(m: WAE2E.PollCreationMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PollCreationMessage {

        interface IOption {
            optionName?: (string|null);
            optionHash?: (string|null);
        }

        class Option implements IOption {
            constructor(p?: WAE2E.PollCreationMessage.IOption);
            public optionName?: (string|null);
            public optionHash?: (string|null);
            public static create(properties?: WAE2E.PollCreationMessage.IOption): WAE2E.PollCreationMessage.Option;
            public static encode(m: WAE2E.PollCreationMessage.IOption, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PollCreationMessage.Option;
            public static fromObject(d: { [k: string]: any }): WAE2E.PollCreationMessage.Option;
            public static toObject(m: WAE2E.PollCreationMessage.Option, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IStickerSyncRMRMessage {
        filehash?: (string[]|null);
        rmrSource?: (string|null);
        requestTimestamp?: (number|Long|null);
    }

    class StickerSyncRMRMessage implements IStickerSyncRMRMessage {
        constructor(p?: WAE2E.IStickerSyncRMRMessage);
        public filehash: string[];
        public rmrSource?: (string|null);
        public requestTimestamp?: (number|Long|null);
        public static create(properties?: WAE2E.IStickerSyncRMRMessage): WAE2E.StickerSyncRMRMessage;
        public static encode(m: WAE2E.IStickerSyncRMRMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StickerSyncRMRMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StickerSyncRMRMessage;
        public static toObject(m: WAE2E.StickerSyncRMRMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IReactionMessage {
        key?: (WACommon.IMessageKey|null);
        text?: (string|null);
        groupingKey?: (string|null);
        senderTimestampMs?: (number|Long|null);
    }

    class ReactionMessage implements IReactionMessage {
        constructor(p?: WAE2E.IReactionMessage);
        public key?: (WACommon.IMessageKey|null);
        public text?: (string|null);
        public groupingKey?: (string|null);
        public senderTimestampMs?: (number|Long|null);
        public static create(properties?: WAE2E.IReactionMessage): WAE2E.ReactionMessage;
        public static encode(m: WAE2E.IReactionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ReactionMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ReactionMessage;
        public static toObject(m: WAE2E.ReactionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IFutureProofMessage {
        message?: (WAE2E.IMessage|null);
    }

    class FutureProofMessage implements IFutureProofMessage {
        constructor(p?: WAE2E.IFutureProofMessage);
        public message?: (WAE2E.IMessage|null);
        public static create(properties?: WAE2E.IFutureProofMessage): WAE2E.FutureProofMessage;
        public static encode(m: WAE2E.IFutureProofMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.FutureProofMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.FutureProofMessage;
        public static toObject(m: WAE2E.FutureProofMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeviceSentMessage {
        destinationJid?: (string|null);
        message?: (WAE2E.IMessage|null);
        phash?: (string|null);
    }

    class DeviceSentMessage implements IDeviceSentMessage {
        constructor(p?: WAE2E.IDeviceSentMessage);
        public destinationJid?: (string|null);
        public message?: (WAE2E.IMessage|null);
        public phash?: (string|null);
        public static create(properties?: WAE2E.IDeviceSentMessage): WAE2E.DeviceSentMessage;
        public static encode(m: WAE2E.IDeviceSentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.DeviceSentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.DeviceSentMessage;
        public static toObject(m: WAE2E.DeviceSentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IRequestPhoneNumberMessage {
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class RequestPhoneNumberMessage implements IRequestPhoneNumberMessage {
        constructor(p?: WAE2E.IRequestPhoneNumberMessage);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.IRequestPhoneNumberMessage): WAE2E.RequestPhoneNumberMessage;
        public static encode(m: WAE2E.IRequestPhoneNumberMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.RequestPhoneNumberMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.RequestPhoneNumberMessage;
        public static toObject(m: WAE2E.RequestPhoneNumberMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEventInviteMessage {
        contextInfo?: (WAE2E.IContextInfo|null);
        eventId?: (string|null);
        eventTitle?: (string|null);
        jpegThumbnail?: (Uint8Array|null);
        startTime?: (number|Long|null);
        caption?: (string|null);
        isCanceled?: (boolean|null);
        endTime?: (number|Long|null);
    }

    class EventInviteMessage implements IEventInviteMessage {
        constructor(p?: WAE2E.IEventInviteMessage);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public eventId?: (string|null);
        public eventTitle?: (string|null);
        public jpegThumbnail?: (Uint8Array|null);
        public startTime?: (number|Long|null);
        public caption?: (string|null);
        public isCanceled?: (boolean|null);
        public endTime?: (number|Long|null);
        public static create(properties?: WAE2E.IEventInviteMessage): WAE2E.EventInviteMessage;
        public static encode(m: WAE2E.IEventInviteMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EventInviteMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EventInviteMessage;
        public static toObject(m: WAE2E.EventInviteMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INewsletterFollowerInviteMessage {
        newsletterJid?: (string|null);
        newsletterName?: (string|null);
        jpegThumbnail?: (Uint8Array|null);
        caption?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class NewsletterFollowerInviteMessage implements INewsletterFollowerInviteMessage {
        constructor(p?: WAE2E.INewsletterFollowerInviteMessage);
        public newsletterJid?: (string|null);
        public newsletterName?: (string|null);
        public jpegThumbnail?: (Uint8Array|null);
        public caption?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.INewsletterFollowerInviteMessage): WAE2E.NewsletterFollowerInviteMessage;
        public static encode(m: WAE2E.INewsletterFollowerInviteMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.NewsletterFollowerInviteMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.NewsletterFollowerInviteMessage;
        public static toObject(m: WAE2E.NewsletterFollowerInviteMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INewsletterAdminInviteMessage {
        newsletterJid?: (string|null);
        newsletterName?: (string|null);
        jpegThumbnail?: (Uint8Array|null);
        caption?: (string|null);
        inviteExpiration?: (number|Long|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class NewsletterAdminInviteMessage implements INewsletterAdminInviteMessage {
        constructor(p?: WAE2E.INewsletterAdminInviteMessage);
        public newsletterJid?: (string|null);
        public newsletterName?: (string|null);
        public jpegThumbnail?: (Uint8Array|null);
        public caption?: (string|null);
        public inviteExpiration?: (number|Long|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.INewsletterAdminInviteMessage): WAE2E.NewsletterAdminInviteMessage;
        public static encode(m: WAE2E.INewsletterAdminInviteMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.NewsletterAdminInviteMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.NewsletterAdminInviteMessage;
        public static toObject(m: WAE2E.NewsletterAdminInviteMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IProductMessage {
        product?: (WAE2E.ProductMessage.IProductSnapshot|null);
        businessOwnerJid?: (string|null);
        catalog?: (WAE2E.ProductMessage.ICatalogSnapshot|null);
        body?: (string|null);
        footer?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class ProductMessage implements IProductMessage {
        constructor(p?: WAE2E.IProductMessage);
        public product?: (WAE2E.ProductMessage.IProductSnapshot|null);
        public businessOwnerJid?: (string|null);
        public catalog?: (WAE2E.ProductMessage.ICatalogSnapshot|null);
        public body?: (string|null);
        public footer?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.IProductMessage): WAE2E.ProductMessage;
        public static encode(m: WAE2E.IProductMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ProductMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ProductMessage;
        public static toObject(m: WAE2E.ProductMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ProductMessage {

        interface IProductSnapshot {
            productImage?: (WAE2E.IImageMessage|null);
            productId?: (string|null);
            title?: (string|null);
            description?: (string|null);
            currencyCode?: (string|null);
            priceAmount1000?: (number|Long|null);
            retailerId?: (string|null);
            url?: (string|null);
            productImageCount?: (number|null);
            firstImageId?: (string|null);
            salePriceAmount1000?: (number|Long|null);
            signedUrl?: (string|null);
        }

        class ProductSnapshot implements IProductSnapshot {
            constructor(p?: WAE2E.ProductMessage.IProductSnapshot);
            public productImage?: (WAE2E.IImageMessage|null);
            public productId?: (string|null);
            public title?: (string|null);
            public description?: (string|null);
            public currencyCode?: (string|null);
            public priceAmount1000?: (number|Long|null);
            public retailerId?: (string|null);
            public url?: (string|null);
            public productImageCount?: (number|null);
            public firstImageId?: (string|null);
            public salePriceAmount1000?: (number|Long|null);
            public signedUrl?: (string|null);
            public static create(properties?: WAE2E.ProductMessage.IProductSnapshot): WAE2E.ProductMessage.ProductSnapshot;
            public static encode(m: WAE2E.ProductMessage.IProductSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ProductMessage.ProductSnapshot;
            public static fromObject(d: { [k: string]: any }): WAE2E.ProductMessage.ProductSnapshot;
            public static toObject(m: WAE2E.ProductMessage.ProductSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ICatalogSnapshot {
            catalogImage?: (WAE2E.IImageMessage|null);
            title?: (string|null);
            description?: (string|null);
        }

        class CatalogSnapshot implements ICatalogSnapshot {
            constructor(p?: WAE2E.ProductMessage.ICatalogSnapshot);
            public catalogImage?: (WAE2E.IImageMessage|null);
            public title?: (string|null);
            public description?: (string|null);
            public static create(properties?: WAE2E.ProductMessage.ICatalogSnapshot): WAE2E.ProductMessage.CatalogSnapshot;
            public static encode(m: WAE2E.ProductMessage.ICatalogSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ProductMessage.CatalogSnapshot;
            public static fromObject(d: { [k: string]: any }): WAE2E.ProductMessage.CatalogSnapshot;
            public static toObject(m: WAE2E.ProductMessage.CatalogSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface ITemplateButtonReplyMessage {
        selectedId?: (string|null);
        selectedDisplayText?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        selectedIndex?: (number|null);
        selectedCarouselCardIndex?: (number|null);
    }

    class TemplateButtonReplyMessage implements ITemplateButtonReplyMessage {
        constructor(p?: WAE2E.ITemplateButtonReplyMessage);
        public selectedId?: (string|null);
        public selectedDisplayText?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public selectedIndex?: (number|null);
        public selectedCarouselCardIndex?: (number|null);
        public static create(properties?: WAE2E.ITemplateButtonReplyMessage): WAE2E.TemplateButtonReplyMessage;
        public static encode(m: WAE2E.ITemplateButtonReplyMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateButtonReplyMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.TemplateButtonReplyMessage;
        public static toObject(m: WAE2E.TemplateButtonReplyMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ITemplateMessage {
        fourRowTemplate?: (WAE2E.TemplateMessage.IFourRowTemplate|null);
        hydratedFourRowTemplate?: (WAE2E.TemplateMessage.IHydratedFourRowTemplate|null);
        interactiveMessageTemplate?: (WAE2E.IInteractiveMessage|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        hydratedTemplate?: (WAE2E.TemplateMessage.IHydratedFourRowTemplate|null);
        templateId?: (string|null);
    }

    class TemplateMessage implements ITemplateMessage {
        constructor(p?: WAE2E.ITemplateMessage);
        public fourRowTemplate?: (WAE2E.TemplateMessage.IFourRowTemplate|null);
        public hydratedFourRowTemplate?: (WAE2E.TemplateMessage.IHydratedFourRowTemplate|null);
        public interactiveMessageTemplate?: (WAE2E.IInteractiveMessage|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public hydratedTemplate?: (WAE2E.TemplateMessage.IHydratedFourRowTemplate|null);
        public templateId?: (string|null);
        public format?: ("fourRowTemplate"|"hydratedFourRowTemplate"|"interactiveMessageTemplate");
        public static create(properties?: WAE2E.ITemplateMessage): WAE2E.TemplateMessage;
        public static encode(m: WAE2E.ITemplateMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.TemplateMessage;
        public static toObject(m: WAE2E.TemplateMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TemplateMessage {

        interface IHydratedFourRowTemplate {
            documentMessage?: (WAE2E.IDocumentMessage|null);
            hydratedTitleText?: (string|null);
            imageMessage?: (WAE2E.IImageMessage|null);
            videoMessage?: (WAE2E.IVideoMessage|null);
            locationMessage?: (WAE2E.ILocationMessage|null);
            hydratedContentText?: (string|null);
            hydratedFooterText?: (string|null);
            hydratedButtons?: (WAE2E.IHydratedTemplateButton[]|null);
            templateId?: (string|null);
            maskLinkedDevices?: (boolean|null);
        }

        class HydratedFourRowTemplate implements IHydratedFourRowTemplate {
            constructor(p?: WAE2E.TemplateMessage.IHydratedFourRowTemplate);
            public documentMessage?: (WAE2E.IDocumentMessage|null);
            public hydratedTitleText?: (string|null);
            public imageMessage?: (WAE2E.IImageMessage|null);
            public videoMessage?: (WAE2E.IVideoMessage|null);
            public locationMessage?: (WAE2E.ILocationMessage|null);
            public hydratedContentText?: (string|null);
            public hydratedFooterText?: (string|null);
            public hydratedButtons: WAE2E.IHydratedTemplateButton[];
            public templateId?: (string|null);
            public maskLinkedDevices?: (boolean|null);
            public title?: ("documentMessage"|"hydratedTitleText"|"imageMessage"|"videoMessage"|"locationMessage");
            public static create(properties?: WAE2E.TemplateMessage.IHydratedFourRowTemplate): WAE2E.TemplateMessage.HydratedFourRowTemplate;
            public static encode(m: WAE2E.TemplateMessage.IHydratedFourRowTemplate, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateMessage.HydratedFourRowTemplate;
            public static fromObject(d: { [k: string]: any }): WAE2E.TemplateMessage.HydratedFourRowTemplate;
            public static toObject(m: WAE2E.TemplateMessage.HydratedFourRowTemplate, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IFourRowTemplate {
            documentMessage?: (WAE2E.IDocumentMessage|null);
            highlyStructuredMessage?: (WAE2E.IHighlyStructuredMessage|null);
            imageMessage?: (WAE2E.IImageMessage|null);
            videoMessage?: (WAE2E.IVideoMessage|null);
            locationMessage?: (WAE2E.ILocationMessage|null);
            content?: (WAE2E.IHighlyStructuredMessage|null);
            footer?: (WAE2E.IHighlyStructuredMessage|null);
            buttons?: (WAE2E.ITemplateButton[]|null);
        }

        class FourRowTemplate implements IFourRowTemplate {
            constructor(p?: WAE2E.TemplateMessage.IFourRowTemplate);
            public documentMessage?: (WAE2E.IDocumentMessage|null);
            public highlyStructuredMessage?: (WAE2E.IHighlyStructuredMessage|null);
            public imageMessage?: (WAE2E.IImageMessage|null);
            public videoMessage?: (WAE2E.IVideoMessage|null);
            public locationMessage?: (WAE2E.ILocationMessage|null);
            public content?: (WAE2E.IHighlyStructuredMessage|null);
            public footer?: (WAE2E.IHighlyStructuredMessage|null);
            public buttons: WAE2E.ITemplateButton[];
            public title?: ("documentMessage"|"highlyStructuredMessage"|"imageMessage"|"videoMessage"|"locationMessage");
            public static create(properties?: WAE2E.TemplateMessage.IFourRowTemplate): WAE2E.TemplateMessage.FourRowTemplate;
            public static encode(m: WAE2E.TemplateMessage.IFourRowTemplate, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateMessage.FourRowTemplate;
            public static fromObject(d: { [k: string]: any }): WAE2E.TemplateMessage.FourRowTemplate;
            public static toObject(m: WAE2E.TemplateMessage.FourRowTemplate, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IStickerMessage {
        url?: (string|null);
        fileSha256?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        mimetype?: (string|null);
        height?: (number|null);
        width?: (number|null);
        directPath?: (string|null);
        fileLength?: (number|Long|null);
        mediaKeyTimestamp?: (number|Long|null);
        firstFrameLength?: (number|null);
        firstFrameSidecar?: (Uint8Array|null);
        isAnimated?: (boolean|null);
        pngThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        stickerSentTs?: (number|Long|null);
        isAvatar?: (boolean|null);
        isAiSticker?: (boolean|null);
        isLottie?: (boolean|null);
        accessibilityLabel?: (string|null);
        premium?: (number|null);
        emojis?: (string|null);
    }

    class StickerMessage implements IStickerMessage {
        constructor(p?: WAE2E.IStickerMessage);
        public url?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public mimetype?: (string|null);
        public height?: (number|null);
        public width?: (number|null);
        public directPath?: (string|null);
        public fileLength?: (number|Long|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public firstFrameLength?: (number|null);
        public firstFrameSidecar?: (Uint8Array|null);
        public isAnimated?: (boolean|null);
        public pngThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public stickerSentTs?: (number|Long|null);
        public isAvatar?: (boolean|null);
        public isAiSticker?: (boolean|null);
        public isLottie?: (boolean|null);
        public accessibilityLabel?: (string|null);
        public premium?: (number|null);
        public emojis?: (string|null);
        public static create(properties?: WAE2E.IStickerMessage): WAE2E.StickerMessage;
        public static encode(m: WAE2E.IStickerMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.StickerMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.StickerMessage;
        public static toObject(m: WAE2E.StickerMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILiveLocationMessage {
        degreesLatitude?: (number|null);
        degreesLongitude?: (number|null);
        accuracyInMeters?: (number|null);
        speedInMps?: (number|null);
        degreesClockwiseFromMagneticNorth?: (number|null);
        caption?: (string|null);
        sequenceNumber?: (number|Long|null);
        timeOffset?: (number|null);
        jpegThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class LiveLocationMessage implements ILiveLocationMessage {
        constructor(p?: WAE2E.ILiveLocationMessage);
        public degreesLatitude?: (number|null);
        public degreesLongitude?: (number|null);
        public accuracyInMeters?: (number|null);
        public speedInMps?: (number|null);
        public degreesClockwiseFromMagneticNorth?: (number|null);
        public caption?: (string|null);
        public sequenceNumber?: (number|Long|null);
        public timeOffset?: (number|null);
        public jpegThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.ILiveLocationMessage): WAE2E.LiveLocationMessage;
        public static encode(m: WAE2E.ILiveLocationMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.LiveLocationMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.LiveLocationMessage;
        public static toObject(m: WAE2E.LiveLocationMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISplitPaymentMessage {
        splitId?: (string|null);
        totalAmount?: (WAE2E.IMoney|null);
        description?: (string|null);
        requesterJid?: (string|null);
        participants?: (WAE2E.ISplitPaymentParticipant[]|null);
        createdAtMs?: (number|Long|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class SplitPaymentMessage implements ISplitPaymentMessage {
        constructor(p?: WAE2E.ISplitPaymentMessage);
        public splitId?: (string|null);
        public totalAmount?: (WAE2E.IMoney|null);
        public description?: (string|null);
        public requesterJid?: (string|null);
        public participants: WAE2E.ISplitPaymentParticipant[];
        public createdAtMs?: (number|Long|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.ISplitPaymentMessage): WAE2E.SplitPaymentMessage;
        public static encode(m: WAE2E.ISplitPaymentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.SplitPaymentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.SplitPaymentMessage;
        public static toObject(m: WAE2E.SplitPaymentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICancelPaymentRequestMessage {
        key?: (WACommon.IMessageKey|null);
    }

    class CancelPaymentRequestMessage implements ICancelPaymentRequestMessage {
        constructor(p?: WAE2E.ICancelPaymentRequestMessage);
        public key?: (WACommon.IMessageKey|null);
        public static create(properties?: WAE2E.ICancelPaymentRequestMessage): WAE2E.CancelPaymentRequestMessage;
        public static encode(m: WAE2E.ICancelPaymentRequestMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.CancelPaymentRequestMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.CancelPaymentRequestMessage;
        public static toObject(m: WAE2E.CancelPaymentRequestMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeclinePaymentRequestMessage {
        key?: (WACommon.IMessageKey|null);
    }

    class DeclinePaymentRequestMessage implements IDeclinePaymentRequestMessage {
        constructor(p?: WAE2E.IDeclinePaymentRequestMessage);
        public key?: (WACommon.IMessageKey|null);
        public static create(properties?: WAE2E.IDeclinePaymentRequestMessage): WAE2E.DeclinePaymentRequestMessage;
        public static encode(m: WAE2E.IDeclinePaymentRequestMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.DeclinePaymentRequestMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.DeclinePaymentRequestMessage;
        public static toObject(m: WAE2E.DeclinePaymentRequestMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IRequestPaymentMessage {
        noteMessage?: (WAE2E.IMessage|null);
        currencyCodeIso4217?: (string|null);
        amount1000?: (number|Long|null);
        requestFrom?: (string|null);
        expiryTimestamp?: (number|Long|null);
        amount?: (WAE2E.IMoney|null);
        background?: (WAE2E.IPaymentBackground|null);
    }

    class RequestPaymentMessage implements IRequestPaymentMessage {
        constructor(p?: WAE2E.IRequestPaymentMessage);
        public noteMessage?: (WAE2E.IMessage|null);
        public currencyCodeIso4217?: (string|null);
        public amount1000?: (number|Long|null);
        public requestFrom?: (string|null);
        public expiryTimestamp?: (number|Long|null);
        public amount?: (WAE2E.IMoney|null);
        public background?: (WAE2E.IPaymentBackground|null);
        public static create(properties?: WAE2E.IRequestPaymentMessage): WAE2E.RequestPaymentMessage;
        public static encode(m: WAE2E.IRequestPaymentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.RequestPaymentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.RequestPaymentMessage;
        public static toObject(m: WAE2E.RequestPaymentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISendPaymentMessage {
        noteMessage?: (WAE2E.IMessage|null);
        requestMessageKey?: (WACommon.IMessageKey|null);
        background?: (WAE2E.IPaymentBackground|null);
        transactionData?: (string|null);
    }

    class SendPaymentMessage implements ISendPaymentMessage {
        constructor(p?: WAE2E.ISendPaymentMessage);
        public noteMessage?: (WAE2E.IMessage|null);
        public requestMessageKey?: (WACommon.IMessageKey|null);
        public background?: (WAE2E.IPaymentBackground|null);
        public transactionData?: (string|null);
        public static create(properties?: WAE2E.ISendPaymentMessage): WAE2E.SendPaymentMessage;
        public static encode(m: WAE2E.ISendPaymentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.SendPaymentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.SendPaymentMessage;
        public static toObject(m: WAE2E.SendPaymentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IContactsArrayMessage {
        displayName?: (string|null);
        contacts?: (WAE2E.IContactMessage[]|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class ContactsArrayMessage implements IContactsArrayMessage {
        constructor(p?: WAE2E.IContactsArrayMessage);
        public displayName?: (string|null);
        public contacts: WAE2E.IContactMessage[];
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.IContactsArrayMessage): WAE2E.ContactsArrayMessage;
        public static encode(m: WAE2E.IContactsArrayMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContactsArrayMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ContactsArrayMessage;
        public static toObject(m: WAE2E.ContactsArrayMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IInitialSecurityNotificationSettingSync {
        securityNotificationEnabled?: (boolean|null);
    }

    class InitialSecurityNotificationSettingSync implements IInitialSecurityNotificationSettingSync {
        constructor(p?: WAE2E.IInitialSecurityNotificationSettingSync);
        public securityNotificationEnabled?: (boolean|null);
        public static create(properties?: WAE2E.IInitialSecurityNotificationSettingSync): WAE2E.InitialSecurityNotificationSettingSync;
        public static encode(m: WAE2E.IInitialSecurityNotificationSettingSync, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.InitialSecurityNotificationSettingSync;
        public static fromObject(d: { [k: string]: any }): WAE2E.InitialSecurityNotificationSettingSync;
        public static toObject(m: WAE2E.InitialSecurityNotificationSettingSync, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IFullHistorySyncOnDemandConfig {
        historyFromTimestamp?: (number|Long|null);
        historyDurationDays?: (number|null);
    }

    class FullHistorySyncOnDemandConfig implements IFullHistorySyncOnDemandConfig {
        constructor(p?: WAE2E.IFullHistorySyncOnDemandConfig);
        public historyFromTimestamp?: (number|Long|null);
        public historyDurationDays?: (number|null);
        public static create(properties?: WAE2E.IFullHistorySyncOnDemandConfig): WAE2E.FullHistorySyncOnDemandConfig;
        public static encode(m: WAE2E.IFullHistorySyncOnDemandConfig, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.FullHistorySyncOnDemandConfig;
        public static fromObject(d: { [k: string]: any }): WAE2E.FullHistorySyncOnDemandConfig;
        public static toObject(m: WAE2E.FullHistorySyncOnDemandConfig, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IFullHistorySyncOnDemandRequestMetadata {
        requestId?: (string|null);
        businessProduct?: (string|null);
        opaqueClientData?: (Uint8Array|null);
    }

    class FullHistorySyncOnDemandRequestMetadata implements IFullHistorySyncOnDemandRequestMetadata {
        constructor(p?: WAE2E.IFullHistorySyncOnDemandRequestMetadata);
        public requestId?: (string|null);
        public businessProduct?: (string|null);
        public opaqueClientData?: (Uint8Array|null);
        public static create(properties?: WAE2E.IFullHistorySyncOnDemandRequestMetadata): WAE2E.FullHistorySyncOnDemandRequestMetadata;
        public static encode(m: WAE2E.IFullHistorySyncOnDemandRequestMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.FullHistorySyncOnDemandRequestMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.FullHistorySyncOnDemandRequestMetadata;
        public static toObject(m: WAE2E.FullHistorySyncOnDemandRequestMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateFatalExceptionNotification {
        collectionNames?: (string[]|null);
        timestamp?: (number|Long|null);
    }

    class AppStateFatalExceptionNotification implements IAppStateFatalExceptionNotification {
        constructor(p?: WAE2E.IAppStateFatalExceptionNotification);
        public collectionNames: string[];
        public timestamp?: (number|Long|null);
        public static create(properties?: WAE2E.IAppStateFatalExceptionNotification): WAE2E.AppStateFatalExceptionNotification;
        public static encode(m: WAE2E.IAppStateFatalExceptionNotification, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateFatalExceptionNotification;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateFatalExceptionNotification;
        public static toObject(m: WAE2E.AppStateFatalExceptionNotification, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateSyncKeyRequest {
        keyIds?: (WAE2E.IAppStateSyncKeyId[]|null);
    }

    class AppStateSyncKeyRequest implements IAppStateSyncKeyRequest {
        constructor(p?: WAE2E.IAppStateSyncKeyRequest);
        public keyIds: WAE2E.IAppStateSyncKeyId[];
        public static create(properties?: WAE2E.IAppStateSyncKeyRequest): WAE2E.AppStateSyncKeyRequest;
        public static encode(m: WAE2E.IAppStateSyncKeyRequest, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateSyncKeyRequest;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateSyncKeyRequest;
        public static toObject(m: WAE2E.AppStateSyncKeyRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateSyncKeyShare {
        keys?: (WAE2E.IAppStateSyncKey[]|null);
    }

    class AppStateSyncKeyShare implements IAppStateSyncKeyShare {
        constructor(p?: WAE2E.IAppStateSyncKeyShare);
        public keys: WAE2E.IAppStateSyncKey[];
        public static create(properties?: WAE2E.IAppStateSyncKeyShare): WAE2E.AppStateSyncKeyShare;
        public static encode(m: WAE2E.IAppStateSyncKeyShare, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateSyncKeyShare;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateSyncKeyShare;
        public static toObject(m: WAE2E.AppStateSyncKeyShare, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateSyncKeyData {
        keyData?: (Uint8Array|null);
        fingerprint?: (WAE2E.IAppStateSyncKeyFingerprint|null);
        timestamp?: (number|Long|null);
    }

    class AppStateSyncKeyData implements IAppStateSyncKeyData {
        constructor(p?: WAE2E.IAppStateSyncKeyData);
        public keyData?: (Uint8Array|null);
        public fingerprint?: (WAE2E.IAppStateSyncKeyFingerprint|null);
        public timestamp?: (number|Long|null);
        public static create(properties?: WAE2E.IAppStateSyncKeyData): WAE2E.AppStateSyncKeyData;
        public static encode(m: WAE2E.IAppStateSyncKeyData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateSyncKeyData;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateSyncKeyData;
        public static toObject(m: WAE2E.AppStateSyncKeyData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateSyncKeyFingerprint {
        rawId?: (number|null);
        currentIndex?: (number|null);
        deviceIndexes?: (number[]|null);
    }

    class AppStateSyncKeyFingerprint implements IAppStateSyncKeyFingerprint {
        constructor(p?: WAE2E.IAppStateSyncKeyFingerprint);
        public rawId?: (number|null);
        public currentIndex?: (number|null);
        public deviceIndexes: number[];
        public static create(properties?: WAE2E.IAppStateSyncKeyFingerprint): WAE2E.AppStateSyncKeyFingerprint;
        public static encode(m: WAE2E.IAppStateSyncKeyFingerprint, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateSyncKeyFingerprint;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateSyncKeyFingerprint;
        public static toObject(m: WAE2E.AppStateSyncKeyFingerprint, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateSyncKeyId {
        keyId?: (Uint8Array|null);
    }

    class AppStateSyncKeyId implements IAppStateSyncKeyId {
        constructor(p?: WAE2E.IAppStateSyncKeyId);
        public keyId?: (Uint8Array|null);
        public static create(properties?: WAE2E.IAppStateSyncKeyId): WAE2E.AppStateSyncKeyId;
        public static encode(m: WAE2E.IAppStateSyncKeyId, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateSyncKeyId;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateSyncKeyId;
        public static toObject(m: WAE2E.AppStateSyncKeyId, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAppStateSyncKey {
        keyId?: (WAE2E.IAppStateSyncKeyId|null);
        keyData?: (WAE2E.IAppStateSyncKeyData|null);
    }

    class AppStateSyncKey implements IAppStateSyncKey {
        constructor(p?: WAE2E.IAppStateSyncKey);
        public keyId?: (WAE2E.IAppStateSyncKeyId|null);
        public keyData?: (WAE2E.IAppStateSyncKeyData|null);
        public static create(properties?: WAE2E.IAppStateSyncKey): WAE2E.AppStateSyncKey;
        public static encode(m: WAE2E.IAppStateSyncKey, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AppStateSyncKey;
        public static fromObject(d: { [k: string]: any }): WAE2E.AppStateSyncKey;
        public static toObject(m: WAE2E.AppStateSyncKey, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IHistorySyncNotification {
        fileSha256?: (Uint8Array|null);
        fileLength?: (number|Long|null);
        mediaKey?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        directPath?: (string|null);
        syncType?: (WAE2E.HistorySyncType|null);
        chunkOrder?: (number|null);
        originalMessageId?: (string|null);
        progress?: (number|null);
        oldestMsgInChunkTimestampSec?: (number|Long|null);
        initialHistBootstrapInlinePayload?: (Uint8Array|null);
        peerDataRequestSessionId?: (string|null);
        fullHistorySyncOnDemandRequestMetadata?: (WAE2E.IFullHistorySyncOnDemandRequestMetadata|null);
        encHandle?: (string|null);
        messageAccessStatus?: (WAE2E.IHistorySyncMessageAccessStatus|null);
    }

    class HistorySyncNotification implements IHistorySyncNotification {
        constructor(p?: WAE2E.IHistorySyncNotification);
        public fileSha256?: (Uint8Array|null);
        public fileLength?: (number|Long|null);
        public mediaKey?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public directPath?: (string|null);
        public syncType?: (WAE2E.HistorySyncType|null);
        public chunkOrder?: (number|null);
        public originalMessageId?: (string|null);
        public progress?: (number|null);
        public oldestMsgInChunkTimestampSec?: (number|Long|null);
        public initialHistBootstrapInlinePayload?: (Uint8Array|null);
        public peerDataRequestSessionId?: (string|null);
        public fullHistorySyncOnDemandRequestMetadata?: (WAE2E.IFullHistorySyncOnDemandRequestMetadata|null);
        public encHandle?: (string|null);
        public messageAccessStatus?: (WAE2E.IHistorySyncMessageAccessStatus|null);
        public static create(properties?: WAE2E.IHistorySyncNotification): WAE2E.HistorySyncNotification;
        public static encode(m: WAE2E.IHistorySyncNotification, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HistorySyncNotification;
        public static fromObject(d: { [k: string]: any }): WAE2E.HistorySyncNotification;
        public static toObject(m: WAE2E.HistorySyncNotification, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IHistorySyncMessageAccessStatus {
        completeAccessGranted?: (boolean|null);
    }

    class HistorySyncMessageAccessStatus implements IHistorySyncMessageAccessStatus {
        constructor(p?: WAE2E.IHistorySyncMessageAccessStatus);
        public completeAccessGranted?: (boolean|null);
        public static create(properties?: WAE2E.IHistorySyncMessageAccessStatus): WAE2E.HistorySyncMessageAccessStatus;
        public static encode(m: WAE2E.IHistorySyncMessageAccessStatus, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.HistorySyncMessageAccessStatus;
        public static fromObject(d: { [k: string]: any }): WAE2E.HistorySyncMessageAccessStatus;
        public static toObject(m: WAE2E.HistorySyncMessageAccessStatus, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatStockImageWallpaper {
        stockImageId?: (string|null);
        dimLevel?: (number|null);
    }

    class ChatStockImageWallpaper implements IChatStockImageWallpaper {
        constructor(p?: WAE2E.IChatStockImageWallpaper);
        public stockImageId?: (string|null);
        public dimLevel?: (number|null);
        public static create(properties?: WAE2E.IChatStockImageWallpaper): WAE2E.ChatStockImageWallpaper;
        public static encode(m: WAE2E.IChatStockImageWallpaper, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ChatStockImageWallpaper;
        public static fromObject(d: { [k: string]: any }): WAE2E.ChatStockImageWallpaper;
        public static toObject(m: WAE2E.ChatStockImageWallpaper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatSolidColorWallpaper {
        colorLight?: (string|null);
        colorDark?: (string|null);
        isDoodleEnabled?: (boolean|null);
    }

    class ChatSolidColorWallpaper implements IChatSolidColorWallpaper {
        constructor(p?: WAE2E.IChatSolidColorWallpaper);
        public colorLight?: (string|null);
        public colorDark?: (string|null);
        public isDoodleEnabled?: (boolean|null);
        public static create(properties?: WAE2E.IChatSolidColorWallpaper): WAE2E.ChatSolidColorWallpaper;
        public static encode(m: WAE2E.IChatSolidColorWallpaper, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ChatSolidColorWallpaper;
        public static fromObject(d: { [k: string]: any }): WAE2E.ChatSolidColorWallpaper;
        public static toObject(m: WAE2E.ChatSolidColorWallpaper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatDefaultWallpaper {
        isDoodleEnabled?: (boolean|null);
    }

    class ChatDefaultWallpaper implements IChatDefaultWallpaper {
        constructor(p?: WAE2E.IChatDefaultWallpaper);
        public isDoodleEnabled?: (boolean|null);
        public static create(properties?: WAE2E.IChatDefaultWallpaper): WAE2E.ChatDefaultWallpaper;
        public static encode(m: WAE2E.IChatDefaultWallpaper, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ChatDefaultWallpaper;
        public static fromObject(d: { [k: string]: any }): WAE2E.ChatDefaultWallpaper;
        public static toObject(m: WAE2E.ChatDefaultWallpaper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatCustomImageWallpaper {
        directPath?: (string|null);
        mediaKey?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        fileSha256?: (Uint8Array|null);
        dimLevel?: (number|null);
    }

    class ChatCustomImageWallpaper implements IChatCustomImageWallpaper {
        constructor(p?: WAE2E.IChatCustomImageWallpaper);
        public directPath?: (string|null);
        public mediaKey?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public fileSha256?: (Uint8Array|null);
        public dimLevel?: (number|null);
        public static create(properties?: WAE2E.IChatCustomImageWallpaper): WAE2E.ChatCustomImageWallpaper;
        public static encode(m: WAE2E.IChatCustomImageWallpaper, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ChatCustomImageWallpaper;
        public static fromObject(d: { [k: string]: any }): WAE2E.ChatCustomImageWallpaper;
        public static toObject(m: WAE2E.ChatCustomImageWallpaper, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatThemeSetting {
        defaultWallpaper?: (WAE2E.IChatDefaultWallpaper|null);
        solidColor?: (WAE2E.IChatSolidColorWallpaper|null);
        stockImage?: (WAE2E.IChatStockImageWallpaper|null);
        customImage?: (WAE2E.IChatCustomImageWallpaper|null);
        settingTimestampMs?: (number|Long|null);
        clearTheme?: (boolean|null);
        colorSchemeId?: (string|null);
    }

    class ChatThemeSetting implements IChatThemeSetting {
        constructor(p?: WAE2E.IChatThemeSetting);
        public defaultWallpaper?: (WAE2E.IChatDefaultWallpaper|null);
        public solidColor?: (WAE2E.IChatSolidColorWallpaper|null);
        public stockImage?: (WAE2E.IChatStockImageWallpaper|null);
        public customImage?: (WAE2E.IChatCustomImageWallpaper|null);
        public settingTimestampMs?: (number|Long|null);
        public clearTheme?: (boolean|null);
        public colorSchemeId?: (string|null);
        public wallpaper?: ("defaultWallpaper"|"solidColor"|"stockImage"|"customImage");
        public static create(properties?: WAE2E.IChatThemeSetting): WAE2E.ChatThemeSetting;
        public static encode(m: WAE2E.IChatThemeSetting, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ChatThemeSetting;
        public static fromObject(d: { [k: string]: any }): WAE2E.ChatThemeSetting;
        public static toObject(m: WAE2E.ChatThemeSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChat {
        displayName?: (string|null);
        id?: (string|null);
    }

    class Chat implements IChat {
        constructor(p?: WAE2E.IChat);
        public displayName?: (string|null);
        public id?: (string|null);
        public static create(properties?: WAE2E.IChat): WAE2E.Chat;
        public static encode(m: WAE2E.IChat, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.Chat;
        public static fromObject(d: { [k: string]: any }): WAE2E.Chat;
        public static toObject(m: WAE2E.Chat, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICall {
        callKey?: (Uint8Array|null);
        conversionSource?: (string|null);
        conversionData?: (Uint8Array|null);
        conversionDelaySeconds?: (number|null);
        ctwaSignals?: (string|null);
        ctwaPayload?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        nativeFlowCallButtonPayload?: (string|null);
        deeplinkPayload?: (string|null);
        messageContextInfo?: (WAE2E.IMessageContextInfo|null);
        callEntryPoint?: (number|null);
    }

    class Call implements ICall {
        constructor(p?: WAE2E.ICall);
        public callKey?: (Uint8Array|null);
        public conversionSource?: (string|null);
        public conversionData?: (Uint8Array|null);
        public conversionDelaySeconds?: (number|null);
        public ctwaSignals?: (string|null);
        public ctwaPayload?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public nativeFlowCallButtonPayload?: (string|null);
        public deeplinkPayload?: (string|null);
        public messageContextInfo?: (WAE2E.IMessageContextInfo|null);
        public callEntryPoint?: (number|null);
        public static create(properties?: WAE2E.ICall): WAE2E.Call;
        public static encode(m: WAE2E.ICall, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.Call;
        public static fromObject(d: { [k: string]: any }): WAE2E.Call;
        public static toObject(m: WAE2E.Call, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAudioMessage {
        url?: (string|null);
        mimetype?: (string|null);
        fileSha256?: (Uint8Array|null);
        fileLength?: (number|Long|null);
        seconds?: (number|null);
        ptt?: (boolean|null);
        mediaKey?: (Uint8Array|null);
        fileEncSha256?: (Uint8Array|null);
        directPath?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        streamingSidecar?: (Uint8Array|null);
        waveform?: (Uint8Array|null);
        backgroundArgb?: (number|null);
        viewOnce?: (boolean|null);
        accessibilityLabel?: (string|null);
    }

    class AudioMessage implements IAudioMessage {
        constructor(p?: WAE2E.IAudioMessage);
        public url?: (string|null);
        public mimetype?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public fileLength?: (number|Long|null);
        public seconds?: (number|null);
        public ptt?: (boolean|null);
        public mediaKey?: (Uint8Array|null);
        public fileEncSha256?: (Uint8Array|null);
        public directPath?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public streamingSidecar?: (Uint8Array|null);
        public waveform?: (Uint8Array|null);
        public backgroundArgb?: (number|null);
        public viewOnce?: (boolean|null);
        public accessibilityLabel?: (string|null);
        public static create(properties?: WAE2E.IAudioMessage): WAE2E.AudioMessage;
        public static encode(m: WAE2E.IAudioMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AudioMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.AudioMessage;
        public static toObject(m: WAE2E.AudioMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDocumentMessage {
        url?: (string|null);
        mimetype?: (string|null);
        title?: (string|null);
        fileSha256?: (Uint8Array|null);
        fileLength?: (number|Long|null);
        pageCount?: (number|null);
        mediaKey?: (Uint8Array|null);
        fileName?: (string|null);
        fileEncSha256?: (Uint8Array|null);
        directPath?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        contactVcard?: (boolean|null);
        thumbnailDirectPath?: (string|null);
        thumbnailSha256?: (Uint8Array|null);
        thumbnailEncSha256?: (Uint8Array|null);
        jpegThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        thumbnailHeight?: (number|null);
        thumbnailWidth?: (number|null);
        caption?: (string|null);
        accessibilityLabel?: (string|null);
    }

    class DocumentMessage implements IDocumentMessage {
        constructor(p?: WAE2E.IDocumentMessage);
        public url?: (string|null);
        public mimetype?: (string|null);
        public title?: (string|null);
        public fileSha256?: (Uint8Array|null);
        public fileLength?: (number|Long|null);
        public pageCount?: (number|null);
        public mediaKey?: (Uint8Array|null);
        public fileName?: (string|null);
        public fileEncSha256?: (Uint8Array|null);
        public directPath?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public contactVcard?: (boolean|null);
        public thumbnailDirectPath?: (string|null);
        public thumbnailSha256?: (Uint8Array|null);
        public thumbnailEncSha256?: (Uint8Array|null);
        public jpegThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public thumbnailHeight?: (number|null);
        public thumbnailWidth?: (number|null);
        public caption?: (string|null);
        public accessibilityLabel?: (string|null);
        public static create(properties?: WAE2E.IDocumentMessage): WAE2E.DocumentMessage;
        public static encode(m: WAE2E.IDocumentMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.DocumentMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.DocumentMessage;
        public static toObject(m: WAE2E.DocumentMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IURLMetadata {
        fbExperimentId?: (number|null);
    }

    class URLMetadata implements IURLMetadata {
        constructor(p?: WAE2E.IURLMetadata);
        public fbExperimentId?: (number|null);
        public static create(properties?: WAE2E.IURLMetadata): WAE2E.URLMetadata;
        public static encode(m: WAE2E.IURLMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.URLMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.URLMetadata;
        public static toObject(m: WAE2E.URLMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPaymentExtendedMetadata {
        type?: (number|null);
        platform?: (string|null);
    }

    class PaymentExtendedMetadata implements IPaymentExtendedMetadata {
        constructor(p?: WAE2E.IPaymentExtendedMetadata);
        public type?: (number|null);
        public platform?: (string|null);
        public static create(properties?: WAE2E.IPaymentExtendedMetadata): WAE2E.PaymentExtendedMetadata;
        public static encode(m: WAE2E.IPaymentExtendedMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.PaymentExtendedMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.PaymentExtendedMetadata;
        public static toObject(m: WAE2E.PaymentExtendedMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMMSThumbnailMetadata {
        thumbnailDirectPath?: (string|null);
        thumbnailSha256?: (Uint8Array|null);
        thumbnailEncSha256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        mediaKeyTimestamp?: (number|Long|null);
        thumbnailHeight?: (number|null);
        thumbnailWidth?: (number|null);
    }

    class MMSThumbnailMetadata implements IMMSThumbnailMetadata {
        constructor(p?: WAE2E.IMMSThumbnailMetadata);
        public thumbnailDirectPath?: (string|null);
        public thumbnailSha256?: (Uint8Array|null);
        public thumbnailEncSha256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public thumbnailHeight?: (number|null);
        public thumbnailWidth?: (number|null);
        public static create(properties?: WAE2E.IMMSThumbnailMetadata): WAE2E.MMSThumbnailMetadata;
        public static encode(m: WAE2E.IMMSThumbnailMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MMSThumbnailMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.MMSThumbnailMetadata;
        public static toObject(m: WAE2E.MMSThumbnailMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILocationMessage {
        degreesLatitude?: (number|null);
        degreesLongitude?: (number|null);
        name?: (string|null);
        address?: (string|null);
        url?: (string|null);
        isLive?: (boolean|null);
        accuracyInMeters?: (number|null);
        speedInMps?: (number|null);
        degreesClockwiseFromMagneticNorth?: (number|null);
        comment?: (string|null);
        jpegThumbnail?: (Uint8Array|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class LocationMessage implements ILocationMessage {
        constructor(p?: WAE2E.ILocationMessage);
        public degreesLatitude?: (number|null);
        public degreesLongitude?: (number|null);
        public name?: (string|null);
        public address?: (string|null);
        public url?: (string|null);
        public isLive?: (boolean|null);
        public accuracyInMeters?: (number|null);
        public speedInMps?: (number|null);
        public degreesClockwiseFromMagneticNorth?: (number|null);
        public comment?: (string|null);
        public jpegThumbnail?: (Uint8Array|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.ILocationMessage): WAE2E.LocationMessage;
        public static encode(m: WAE2E.ILocationMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.LocationMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.LocationMessage;
        public static toObject(m: WAE2E.LocationMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IContactMessage {
        displayName?: (string|null);
        vcard?: (string|null);
        contextInfo?: (WAE2E.IContextInfo|null);
        isSelfContact?: (boolean|null);
    }

    class ContactMessage implements IContactMessage {
        constructor(p?: WAE2E.IContactMessage);
        public displayName?: (string|null);
        public vcard?: (string|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public isSelfContact?: (boolean|null);
        public static create(properties?: WAE2E.IContactMessage): WAE2E.ContactMessage;
        public static encode(m: WAE2E.IContactMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ContactMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.ContactMessage;
        public static toObject(m: WAE2E.ContactMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISenderKeyDistributionMessage {
        groupId?: (string|null);
        axolotlSenderKeyDistributionMessage?: (Uint8Array|null);
    }

    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
        constructor(p?: WAE2E.ISenderKeyDistributionMessage);
        public groupId?: (string|null);
        public axolotlSenderKeyDistributionMessage?: (Uint8Array|null);
        public static create(properties?: WAE2E.ISenderKeyDistributionMessage): WAE2E.SenderKeyDistributionMessage;
        public static encode(m: WAE2E.ISenderKeyDistributionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.SenderKeyDistributionMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.SenderKeyDistributionMessage;
        public static toObject(m: WAE2E.SenderKeyDistributionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IVideoEndCard {
        username?: (string|null);
        caption?: (string|null);
        thumbnailImageUrl?: (string|null);
        profilePictureUrl?: (string|null);
    }

    class VideoEndCard implements IVideoEndCard {
        constructor(p?: WAE2E.IVideoEndCard);
        public username: string;
        public caption: string;
        public thumbnailImageUrl: string;
        public profilePictureUrl: string;
        public static create(properties?: WAE2E.IVideoEndCard): WAE2E.VideoEndCard;
        public static encode(m: WAE2E.IVideoEndCard, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.VideoEndCard;
        public static fromObject(d: { [k: string]: any }): WAE2E.VideoEndCard;
        public static toObject(m: WAE2E.VideoEndCard, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMediaDomainInfo {
        mediaKeyDomain?: (WAE2E.MediaKeyDomain|null);
        e2EeMediaKey?: (Uint8Array|null);
    }

    class MediaDomainInfo implements IMediaDomainInfo {
        constructor(p?: WAE2E.IMediaDomainInfo);
        public mediaKeyDomain?: (WAE2E.MediaKeyDomain|null);
        public e2EeMediaKey?: (Uint8Array|null);
        public static create(properties?: WAE2E.IMediaDomainInfo): WAE2E.MediaDomainInfo;
        public static encode(m: WAE2E.IMediaDomainInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MediaDomainInfo;
        public static fromObject(d: { [k: string]: any }): WAE2E.MediaDomainInfo;
        public static toObject(m: WAE2E.MediaDomainInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeviceListMetadata {
        senderKeyHash?: (Uint8Array|null);
        senderTimestamp?: (number|Long|null);
        senderKeyIndexes?: (number[]|null);
        senderAccountType?: (WAAdv.ADVEncryptionType|null);
        receiverAccountType?: (WAAdv.ADVEncryptionType|null);
        recipientKeyHash?: (Uint8Array|null);
        recipientTimestamp?: (number|Long|null);
        recipientKeyIndexes?: (number[]|null);
    }

    class DeviceListMetadata implements IDeviceListMetadata {
        constructor(p?: WAE2E.IDeviceListMetadata);
        public senderKeyHash?: (Uint8Array|null);
        public senderTimestamp?: (number|Long|null);
        public senderKeyIndexes: number[];
        public senderAccountType?: (WAAdv.ADVEncryptionType|null);
        public receiverAccountType?: (WAAdv.ADVEncryptionType|null);
        public recipientKeyHash?: (Uint8Array|null);
        public recipientTimestamp?: (number|Long|null);
        public recipientKeyIndexes: number[];
        public static create(properties?: WAE2E.IDeviceListMetadata): WAE2E.DeviceListMetadata;
        public static encode(m: WAE2E.IDeviceListMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.DeviceListMetadata;
        public static fromObject(d: { [k: string]: any }): WAE2E.DeviceListMetadata;
        public static toObject(m: WAE2E.DeviceListMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEmbeddedMessage {
        stanzaId?: (string|null);
        message?: (WAE2E.IMessage|null);
    }

    class EmbeddedMessage implements IEmbeddedMessage {
        constructor(p?: WAE2E.IEmbeddedMessage);
        public stanzaId?: (string|null);
        public message?: (WAE2E.IMessage|null);
        public static create(properties?: WAE2E.IEmbeddedMessage): WAE2E.EmbeddedMessage;
        public static encode(m: WAE2E.IEmbeddedMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EmbeddedMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.EmbeddedMessage;
        public static toObject(m: WAE2E.EmbeddedMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEmbeddedMusic {
        musicContentMediaId?: (string|null);
        songId?: (string|null);
        author?: (string|null);
        title?: (string|null);
        artworkDirectPath?: (string|null);
        artworkSha256?: (Uint8Array|null);
        artworkEncSha256?: (Uint8Array|null);
        artistAttribution?: (string|null);
        countryBlocklist?: (Uint8Array|null);
        isExplicit?: (boolean|null);
        artworkMediaKey?: (Uint8Array|null);
        musicSongStartTimeInMs?: (number|Long|null);
        derivedContentStartTimeInMs?: (number|Long|null);
        overlapDurationInMs?: (number|Long|null);
    }

    class EmbeddedMusic implements IEmbeddedMusic {
        constructor(p?: WAE2E.IEmbeddedMusic);
        public musicContentMediaId?: (string|null);
        public songId?: (string|null);
        public author?: (string|null);
        public title?: (string|null);
        public artworkDirectPath?: (string|null);
        public artworkSha256?: (Uint8Array|null);
        public artworkEncSha256?: (Uint8Array|null);
        public artistAttribution?: (string|null);
        public countryBlocklist?: (Uint8Array|null);
        public isExplicit?: (boolean|null);
        public artworkMediaKey?: (Uint8Array|null);
        public musicSongStartTimeInMs?: (number|Long|null);
        public derivedContentStartTimeInMs?: (number|Long|null);
        public overlapDurationInMs?: (number|Long|null);
        public static create(properties?: WAE2E.IEmbeddedMusic): WAE2E.EmbeddedMusic;
        public static encode(m: WAE2E.IEmbeddedMusic, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EmbeddedMusic;
        public static fromObject(d: { [k: string]: any }): WAE2E.EmbeddedMusic;
        public static toObject(m: WAE2E.EmbeddedMusic, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEmbeddedContent {
        embeddedMessage?: (WAE2E.IEmbeddedMessage|null);
        embeddedMusic?: (WAE2E.IEmbeddedMusic|null);
    }

    class EmbeddedContent implements IEmbeddedContent {
        constructor(p?: WAE2E.IEmbeddedContent);
        public embeddedMessage?: (WAE2E.IEmbeddedMessage|null);
        public embeddedMusic?: (WAE2E.IEmbeddedMusic|null);
        public content?: ("embeddedMessage"|"embeddedMusic");
        public static create(properties?: WAE2E.IEmbeddedContent): WAE2E.EmbeddedContent;
        public static encode(m: WAE2E.IEmbeddedContent, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.EmbeddedContent;
        public static fromObject(d: { [k: string]: any }): WAE2E.EmbeddedContent;
        public static toObject(m: WAE2E.EmbeddedContent, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ITapLinkAction {
        title?: (string|null);
        tapUrl?: (string|null);
    }

    class TapLinkAction implements ITapLinkAction {
        constructor(p?: WAE2E.ITapLinkAction);
        public title?: (string|null);
        public tapUrl?: (string|null);
        public static create(properties?: WAE2E.ITapLinkAction): WAE2E.TapLinkAction;
        public static encode(m: WAE2E.ITapLinkAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TapLinkAction;
        public static fromObject(d: { [k: string]: any }): WAE2E.TapLinkAction;
        public static toObject(m: WAE2E.TapLinkAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPoint {
        xDeprecated?: (number|null);
        yDeprecated?: (number|null);
        x?: (number|null);
        y?: (number|null);
    }

    class Point implements IPoint {
        constructor(p?: WAE2E.IPoint);
        public xDeprecated?: (number|null);
        public yDeprecated?: (number|null);
        public x?: (number|null);
        public y?: (number|null);
        public static create(properties?: WAE2E.IPoint): WAE2E.Point;
        public static encode(m: WAE2E.IPoint, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.Point;
        public static fromObject(d: { [k: string]: any }): WAE2E.Point;
        public static toObject(m: WAE2E.Point, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILocation {
        degreesLatitude?: (number|null);
        degreesLongitude?: (number|null);
        name?: (string|null);
    }

    class Location implements ILocation {
        constructor(p?: WAE2E.ILocation);
        public degreesLatitude?: (number|null);
        public degreesLongitude?: (number|null);
        public name?: (string|null);
        public static create(properties?: WAE2E.ILocation): WAE2E.Location;
        public static encode(m: WAE2E.ILocation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.Location;
        public static fromObject(d: { [k: string]: any }): WAE2E.Location;
        public static toObject(m: WAE2E.Location, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ITemplateButton {
        quickReplyButton?: (WAE2E.TemplateButton.IQuickReplyButton|null);
        urlButton?: (WAE2E.TemplateButton.IURLButton|null);
        callButton?: (WAE2E.TemplateButton.ICallButton|null);
        index?: (number|null);
    }

    class TemplateButton implements ITemplateButton {
        constructor(p?: WAE2E.ITemplateButton);
        public quickReplyButton?: (WAE2E.TemplateButton.IQuickReplyButton|null);
        public urlButton?: (WAE2E.TemplateButton.IURLButton|null);
        public callButton?: (WAE2E.TemplateButton.ICallButton|null);
        public index?: (number|null);
        public button?: ("quickReplyButton"|"urlButton"|"callButton");
        public static create(properties?: WAE2E.ITemplateButton): WAE2E.TemplateButton;
        public static encode(m: WAE2E.ITemplateButton, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateButton;
        public static fromObject(d: { [k: string]: any }): WAE2E.TemplateButton;
        public static toObject(m: WAE2E.TemplateButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace TemplateButton {

        interface ICallButton {
            displayText?: (WAE2E.IHighlyStructuredMessage|null);
            phoneNumber?: (WAE2E.IHighlyStructuredMessage|null);
        }

        class CallButton implements ICallButton {
            constructor(p?: WAE2E.TemplateButton.ICallButton);
            public displayText?: (WAE2E.IHighlyStructuredMessage|null);
            public phoneNumber?: (WAE2E.IHighlyStructuredMessage|null);
            public static create(properties?: WAE2E.TemplateButton.ICallButton): WAE2E.TemplateButton.CallButton;
            public static encode(m: WAE2E.TemplateButton.ICallButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateButton.CallButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.TemplateButton.CallButton;
            public static toObject(m: WAE2E.TemplateButton.CallButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IURLButton {
            displayText?: (WAE2E.IHighlyStructuredMessage|null);
            url?: (WAE2E.IHighlyStructuredMessage|null);
        }

        class URLButton implements IURLButton {
            constructor(p?: WAE2E.TemplateButton.IURLButton);
            public displayText?: (WAE2E.IHighlyStructuredMessage|null);
            public url?: (WAE2E.IHighlyStructuredMessage|null);
            public static create(properties?: WAE2E.TemplateButton.IURLButton): WAE2E.TemplateButton.URLButton;
            public static encode(m: WAE2E.TemplateButton.IURLButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateButton.URLButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.TemplateButton.URLButton;
            public static toObject(m: WAE2E.TemplateButton.URLButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IQuickReplyButton {
            displayText?: (WAE2E.IHighlyStructuredMessage|null);
            id?: (string|null);
        }

        class QuickReplyButton implements IQuickReplyButton {
            constructor(p?: WAE2E.TemplateButton.IQuickReplyButton);
            public displayText?: (WAE2E.IHighlyStructuredMessage|null);
            public id?: (string|null);
            public static create(properties?: WAE2E.TemplateButton.IQuickReplyButton): WAE2E.TemplateButton.QuickReplyButton;
            public static encode(m: WAE2E.TemplateButton.IQuickReplyButton, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.TemplateButton.QuickReplyButton;
            public static fromObject(d: { [k: string]: any }): WAE2E.TemplateButton.QuickReplyButton;
            public static toObject(m: WAE2E.TemplateButton.QuickReplyButton, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IMoney {
        value?: (number|Long|null);
        offset?: (number|null);
        currencyCode?: (string|null);
    }

    class Money implements IMoney {
        constructor(p?: WAE2E.IMoney);
        public value?: (number|Long|null);
        public offset?: (number|null);
        public currencyCode?: (string|null);
        public static create(properties?: WAE2E.IMoney): WAE2E.Money;
        public static encode(m: WAE2E.IMoney, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.Money;
        public static fromObject(d: { [k: string]: any }): WAE2E.Money;
        public static toObject(m: WAE2E.Money, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IActionLink {
        url?: (string|null);
        buttonTitle?: (string|null);
    }

    class ActionLink implements IActionLink {
        constructor(p?: WAE2E.IActionLink);
        public url?: (string|null);
        public buttonTitle?: (string|null);
        public static create(properties?: WAE2E.IActionLink): WAE2E.ActionLink;
        public static encode(m: WAE2E.IActionLink, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.ActionLink;
        public static fromObject(d: { [k: string]: any }): WAE2E.ActionLink;
        public static toObject(m: WAE2E.ActionLink, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGroupMention {
        groupJid?: (string|null);
        groupSubject?: (string|null);
    }

    class GroupMention implements IGroupMention {
        constructor(p?: WAE2E.IGroupMention);
        public groupJid?: (string|null);
        public groupSubject?: (string|null);
        public static create(properties?: WAE2E.IGroupMention): WAE2E.GroupMention;
        public static encode(m: WAE2E.IGroupMention, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.GroupMention;
        public static fromObject(d: { [k: string]: any }): WAE2E.GroupMention;
        public static toObject(m: WAE2E.GroupMention, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMessageSecretMessage {
        version?: (number|null);
        encIv?: (Uint8Array|null);
        encPayload?: (Uint8Array|null);
    }

    class MessageSecretMessage implements IMessageSecretMessage {
        constructor(p?: WAE2E.IMessageSecretMessage);
        public version?: (number|null);
        public encIv?: (Uint8Array|null);
        public encPayload?: (Uint8Array|null);
        public static create(properties?: WAE2E.IMessageSecretMessage): WAE2E.MessageSecretMessage;
        public static encode(m: WAE2E.IMessageSecretMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MessageSecretMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.MessageSecretMessage;
        public static toObject(m: WAE2E.MessageSecretMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMediaNotifyMessage {
        expressPathUrl?: (string|null);
        fileEncSha256?: (Uint8Array|null);
        fileLength?: (number|Long|null);
    }

    class MediaNotifyMessage implements IMediaNotifyMessage {
        constructor(p?: WAE2E.IMediaNotifyMessage);
        public expressPathUrl?: (string|null);
        public fileEncSha256?: (Uint8Array|null);
        public fileLength?: (number|Long|null);
        public static create(properties?: WAE2E.IMediaNotifyMessage): WAE2E.MediaNotifyMessage;
        public static encode(m: WAE2E.IMediaNotifyMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MediaNotifyMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.MediaNotifyMessage;
        public static toObject(m: WAE2E.MediaNotifyMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILIDMigrationMappingSyncMessage {
        encodedMappingPayload?: (Uint8Array|null);
    }

    class LIDMigrationMappingSyncMessage implements ILIDMigrationMappingSyncMessage {
        constructor(p?: WAE2E.ILIDMigrationMappingSyncMessage);
        public encodedMappingPayload?: (Uint8Array|null);
        public static create(properties?: WAE2E.ILIDMigrationMappingSyncMessage): WAE2E.LIDMigrationMappingSyncMessage;
        public static encode(m: WAE2E.ILIDMigrationMappingSyncMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.LIDMigrationMappingSyncMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.LIDMigrationMappingSyncMessage;
        public static toObject(m: WAE2E.LIDMigrationMappingSyncMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IUrlTrackingMap {
        urlTrackingMapElements?: (WAE2E.UrlTrackingMap.IUrlTrackingMapElement[]|null);
    }

    class UrlTrackingMap implements IUrlTrackingMap {
        constructor(p?: WAE2E.IUrlTrackingMap);
        public urlTrackingMapElements: WAE2E.UrlTrackingMap.IUrlTrackingMapElement[];
        public static create(properties?: WAE2E.IUrlTrackingMap): WAE2E.UrlTrackingMap;
        public static encode(m: WAE2E.IUrlTrackingMap, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.UrlTrackingMap;
        public static fromObject(d: { [k: string]: any }): WAE2E.UrlTrackingMap;
        public static toObject(m: WAE2E.UrlTrackingMap, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace UrlTrackingMap {

        interface IUrlTrackingMapElement {
            originalUrl?: (string|null);
            unconsentedUsersUrl?: (string|null);
            consentedUsersUrl?: (string|null);
            cardIndex?: (number|null);
        }

        class UrlTrackingMapElement implements IUrlTrackingMapElement {
            constructor(p?: WAE2E.UrlTrackingMap.IUrlTrackingMapElement);
            public originalUrl?: (string|null);
            public unconsentedUsersUrl?: (string|null);
            public consentedUsersUrl?: (string|null);
            public cardIndex?: (number|null);
            public static create(properties?: WAE2E.UrlTrackingMap.IUrlTrackingMapElement): WAE2E.UrlTrackingMap.UrlTrackingMapElement;
            public static encode(m: WAE2E.UrlTrackingMap.IUrlTrackingMapElement, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.UrlTrackingMap.UrlTrackingMapElement;
            public static fromObject(d: { [k: string]: any }): WAE2E.UrlTrackingMap.UrlTrackingMapElement;
            public static toObject(m: WAE2E.UrlTrackingMap.UrlTrackingMapElement, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IMemberLabel {
        label?: (string|null);
        labelTimestamp?: (number|Long|null);
    }

    class MemberLabel implements IMemberLabel {
        constructor(p?: WAE2E.IMemberLabel);
        public label?: (string|null);
        public labelTimestamp?: (number|Long|null);
        public static create(properties?: WAE2E.IMemberLabel): WAE2E.MemberLabel;
        public static encode(m: WAE2E.IMemberLabel, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.MemberLabel;
        public static fromObject(d: { [k: string]: any }): WAE2E.MemberLabel;
        public static toObject(m: WAE2E.MemberLabel, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIRichResponseMessage {
        messageType?: (WAAICommonDeprecated.AIRichResponseMessageType|null);
        submessages?: (WAAICommonDeprecated.IAIRichResponseSubMessage[]|null);
        unifiedResponse?: (WAAICommon.IAIRichResponseUnifiedResponse|null);
        contextInfo?: (WAE2E.IContextInfo|null);
    }

    class AIRichResponseMessage implements IAIRichResponseMessage {
        constructor(p?: WAE2E.IAIRichResponseMessage);
        public messageType?: (WAAICommonDeprecated.AIRichResponseMessageType|null);
        public submessages: WAAICommonDeprecated.IAIRichResponseSubMessage[];
        public unifiedResponse?: (WAAICommon.IAIRichResponseUnifiedResponse|null);
        public contextInfo?: (WAE2E.IContextInfo|null);
        public static create(properties?: WAE2E.IAIRichResponseMessage): WAE2E.AIRichResponseMessage;
        public static encode(m: WAE2E.IAIRichResponseMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AIRichResponseMessage;
        public static fromObject(d: { [k: string]: any }): WAE2E.AIRichResponseMessage;
        public static toObject(m: WAE2E.AIRichResponseMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIQueryFanout {
        messageKey?: (WACommon.IMessageKey|null);
        message?: (WAE2E.IMessage|null);
        timestamp?: (number|Long|null);
    }

    class AIQueryFanout implements IAIQueryFanout {
        constructor(p?: WAE2E.IAIQueryFanout);
        public messageKey?: (WACommon.IMessageKey|null);
        public message?: (WAE2E.IMessage|null);
        public timestamp?: (number|Long|null);
        public static create(properties?: WAE2E.IAIQueryFanout): WAE2E.AIQueryFanout;
        public static encode(m: WAE2E.IAIQueryFanout, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.AIQueryFanout;
        public static fromObject(d: { [k: string]: any }): WAE2E.AIQueryFanout;
        public static toObject(m: WAE2E.AIQueryFanout, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGroupRootKeyShare {
        keys?: (WAE2E.IGroupRootKeyShareEntry[]|null);
    }

    class GroupRootKeyShare implements IGroupRootKeyShare {
        constructor(p?: WAE2E.IGroupRootKeyShare);
        public keys: WAE2E.IGroupRootKeyShareEntry[];
        public static create(properties?: WAE2E.IGroupRootKeyShare): WAE2E.GroupRootKeyShare;
        public static encode(m: WAE2E.IGroupRootKeyShare, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.GroupRootKeyShare;
        public static fromObject(d: { [k: string]: any }): WAE2E.GroupRootKeyShare;
        public static toObject(m: WAE2E.GroupRootKeyShare, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGroupRootKeyShareEntry {
        groupRootKey?: (Uint8Array|null);
        keyId?: (string|null);
        expiryTimestampMs?: (number|Long|null);
    }

    class GroupRootKeyShareEntry implements IGroupRootKeyShareEntry {
        constructor(p?: WAE2E.IGroupRootKeyShareEntry);
        public groupRootKey?: (Uint8Array|null);
        public keyId?: (string|null);
        public expiryTimestampMs?: (number|Long|null);
        public static create(properties?: WAE2E.IGroupRootKeyShareEntry): WAE2E.GroupRootKeyShareEntry;
        public static encode(m: WAE2E.IGroupRootKeyShareEntry, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAE2E.GroupRootKeyShareEntry;
        public static fromObject(d: { [k: string]: any }): WAE2E.GroupRootKeyShareEntry;
        public static toObject(m: WAE2E.GroupRootKeyShareEntry, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}


