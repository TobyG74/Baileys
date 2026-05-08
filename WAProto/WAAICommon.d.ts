import { WACommon } from './WACommon.d';import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAAICommon {

    enum BotMetricsEntryPoint {
        UNDEFINED_ENTRY_POINT = 0,
        FAVICON = 1,
        CHATLIST = 2,
        AISEARCH_NULL_STATE_PAPER_PLANE = 3,
        AISEARCH_NULL_STATE_SUGGESTION = 4,
        AISEARCH_TYPE_AHEAD_SUGGESTION = 5,
        AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6,
        AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7,
        AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8,
        AIVOICE_SEARCH_BAR = 9,
        AIVOICE_FAVICON = 10,
        AISTUDIO = 11,
        DEEPLINK = 12,
        NOTIFICATION = 13,
        PROFILE_MESSAGE_BUTTON = 14,
        FORWARD = 15,
        APP_SHORTCUT = 16,
        FF_FAMILY = 17,
        AI_TAB = 18,
        AI_HOME = 19,
        AI_DEEPLINK_IMMERSIVE = 20,
        AI_DEEPLINK = 21,
        META_AI_CHAT_SHORTCUT_AI_STUDIO = 22,
        UGC_CHAT_SHORTCUT_AI_STUDIO = 23,
        NEW_CHAT_AI_STUDIO = 24,
        AIVOICE_FAVICON_CALL_HISTORY = 25,
        ASK_META_AI_CONTEXT_MENU = 26,
        ASK_META_AI_CONTEXT_MENU_1ON1 = 27,
        ASK_META_AI_CONTEXT_MENU_GROUP = 28,
        INVOKE_META_AI_1ON1 = 29,
        INVOKE_META_AI_GROUP = 30,
        META_AI_FORWARD = 31,
        NEW_CHAT_AI_CONTACT = 32,
        MESSAGE_QUICK_ACTION_1_ON_1_CHAT = 33,
        MESSAGE_QUICK_ACTION_GROUP_CHAT = 34,
        ATTACHMENT_TRAY_1_ON_1_CHAT = 35,
        ATTACHMENT_TRAY_GROUP_CHAT = 36,
        ASK_META_AI_MEDIA_VIEWER_1ON1 = 37,
        ASK_META_AI_MEDIA_VIEWER_GROUP = 38,
        MEDIA_PICKER_1_ON_1_CHAT = 39,
        MEDIA_PICKER_GROUP_CHAT = 40,
        ASK_META_AI_NO_SEARCH_RESULTS = 41,
        META_AI_SETTINGS = 45,
        WEB_INTRO_PANEL = 46,
        WEB_NAVIGATION_BAR = 47,
        GROUP_MEMBER = 54,
        CHATLIST_SEARCH = 55,
        NEW_CHAT_LIST = 56
    }

    enum BotMetricsThreadEntryPoint {
        AI_TAB_THREAD = 1,
        AI_HOME_THREAD = 2,
        AI_DEEPLINK_IMMERSIVE_THREAD = 3,
        AI_DEEPLINK_THREAD = 4,
        ASK_META_AI_CONTEXT_MENU_THREAD = 5
    }

    enum BotSessionSource {
        NONE = 0,
        NULL_STATE = 1,
        TYPEAHEAD = 2,
        USER_INPUT = 3,
        EMU_FLASH = 4,
        EMU_FLASH_FOLLOWUP = 5,
        VOICE = 6,
        AI_HOME_SESSION = 7
    }

    enum AISubscriptionRequestType {
        UNSPECIFIED = 0,
        THINK_HARD = 1,
        IMAGE_GEN = 2,
        VIDEO_GEN = 3
    }

    enum SessionTransparencyType {
        UNKNOWN_TYPE = 0,
        NY_AI_SAFETY_DISCLAIMER = 1
    }

    interface IBotPluginMetadata {
        provider?: (WAAICommon.BotPluginMetadata.SearchProvider|null);
        pluginType?: (WAAICommon.BotPluginMetadata.PluginType|null);
        thumbnailCDNURL?: (string|null);
        profilePhotoCDNURL?: (string|null);
        searchProviderURL?: (string|null);
        referenceIndex?: (number|null);
        expectedLinksCount?: (number|null);
        searchQuery?: (string|null);
        parentPluginMessageKey?: (WACommon.IMessageKey|null);
        deprecatedField?: (WAAICommon.BotPluginMetadata.PluginType|null);
        parentPluginType?: (WAAICommon.BotPluginMetadata.PluginType|null);
        faviconCDNURL?: (string|null);
    }

    class BotPluginMetadata implements IBotPluginMetadata {
        constructor(p?: WAAICommon.IBotPluginMetadata);
        public provider?: (WAAICommon.BotPluginMetadata.SearchProvider|null);
        public pluginType?: (WAAICommon.BotPluginMetadata.PluginType|null);
        public thumbnailCDNURL?: (string|null);
        public profilePhotoCDNURL?: (string|null);
        public searchProviderURL?: (string|null);
        public referenceIndex?: (number|null);
        public expectedLinksCount?: (number|null);
        public searchQuery?: (string|null);
        public parentPluginMessageKey?: (WACommon.IMessageKey|null);
        public deprecatedField?: (WAAICommon.BotPluginMetadata.PluginType|null);
        public parentPluginType?: (WAAICommon.BotPluginMetadata.PluginType|null);
        public faviconCDNURL?: (string|null);
        public static create(properties?: WAAICommon.IBotPluginMetadata): WAAICommon.BotPluginMetadata;
        public static encode(m: WAAICommon.IBotPluginMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotPluginMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotPluginMetadata;
        public static toObject(m: WAAICommon.BotPluginMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotPluginMetadata {

        enum PluginType {
            UNKNOWN_PLUGIN = 0,
            REELS = 1,
            SEARCH = 2
        }

        enum SearchProvider {
            UNKNOWN = 0,
            BING = 1,
            GOOGLE = 2,
            SUPPORT = 3
        }
    }

    interface IBotLinkedAccount {
        type?: (WAAICommon.BotLinkedAccount.BotLinkedAccountType|null);
    }

    class BotLinkedAccount implements IBotLinkedAccount {
        constructor(p?: WAAICommon.IBotLinkedAccount);
        public type?: (WAAICommon.BotLinkedAccount.BotLinkedAccountType|null);
        public static create(properties?: WAAICommon.IBotLinkedAccount): WAAICommon.BotLinkedAccount;
        public static encode(m: WAAICommon.IBotLinkedAccount, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotLinkedAccount;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotLinkedAccount;
        public static toObject(m: WAAICommon.BotLinkedAccount, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotLinkedAccount {

        enum BotLinkedAccountType {
            BOT_LINKED_ACCOUNT_TYPE_1P = 0
        }
    }

    interface IBotSignatureVerificationUseCaseProof {
        version?: (number|null);
        useCase?: (WAAICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);
        signature?: (Uint8Array|null);
        certificateChain?: (Uint8Array[]|null);
    }

    class BotSignatureVerificationUseCaseProof implements IBotSignatureVerificationUseCaseProof {
        constructor(p?: WAAICommon.IBotSignatureVerificationUseCaseProof);
        public version?: (number|null);
        public useCase?: (WAAICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase|null);
        public signature?: (Uint8Array|null);
        public certificateChain: Uint8Array[];
        public static create(properties?: WAAICommon.IBotSignatureVerificationUseCaseProof): WAAICommon.BotSignatureVerificationUseCaseProof;
        public static encode(m: WAAICommon.IBotSignatureVerificationUseCaseProof, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotSignatureVerificationUseCaseProof;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotSignatureVerificationUseCaseProof;
        public static toObject(m: WAAICommon.BotSignatureVerificationUseCaseProof, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotSignatureVerificationUseCaseProof {

        enum BotSignatureUseCase {
            UNSPECIFIED = 0,
            WA_BOT_MSG = 1,
            WA_TEE_BOT_MSG = 2
        }
    }

    interface IBotPromotionMessageMetadata {
        promotionType?: (WAAICommon.BotPromotionMessageMetadata.BotPromotionType|null);
        buttonTitle?: (string|null);
    }

    class BotPromotionMessageMetadata implements IBotPromotionMessageMetadata {
        constructor(p?: WAAICommon.IBotPromotionMessageMetadata);
        public promotionType?: (WAAICommon.BotPromotionMessageMetadata.BotPromotionType|null);
        public buttonTitle?: (string|null);
        public static create(properties?: WAAICommon.IBotPromotionMessageMetadata): WAAICommon.BotPromotionMessageMetadata;
        public static encode(m: WAAICommon.IBotPromotionMessageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotPromotionMessageMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotPromotionMessageMetadata;
        public static toObject(m: WAAICommon.BotPromotionMessageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotPromotionMessageMetadata {

        enum BotPromotionType {
            UNKNOWN_TYPE = 0,
            C50 = 1,
            SURVEY_PLATFORM = 2
        }
    }

    interface IBotMediaMetadata {
        fileSHA256?: (string|null);
        mediaKey?: (string|null);
        fileEncSHA256?: (string|null);
        directPath?: (string|null);
        mediaKeyTimestamp?: (number|Long|null);
        mimetype?: (string|null);
        orientationType?: (WAAICommon.BotMediaMetadata.OrientationType|null);
    }

    class BotMediaMetadata implements IBotMediaMetadata {
        constructor(p?: WAAICommon.IBotMediaMetadata);
        public fileSHA256?: (string|null);
        public mediaKey?: (string|null);
        public fileEncSHA256?: (string|null);
        public directPath?: (string|null);
        public mediaKeyTimestamp?: (number|Long|null);
        public mimetype?: (string|null);
        public orientationType?: (WAAICommon.BotMediaMetadata.OrientationType|null);
        public static create(properties?: WAAICommon.IBotMediaMetadata): WAAICommon.BotMediaMetadata;
        public static encode(m: WAAICommon.IBotMediaMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMediaMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMediaMetadata;
        public static toObject(m: WAAICommon.BotMediaMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotMediaMetadata {

        enum OrientationType {
            CENTER = 1,
            LEFT = 2,
            RIGHT = 3
        }
    }

    interface IBotReminderMetadata {
        requestMessageKey?: (WACommon.IMessageKey|null);
        action?: (WAAICommon.BotReminderMetadata.ReminderAction|null);
        name?: (string|null);
        nextTriggerTimestamp?: (number|Long|null);
        frequency?: (WAAICommon.BotReminderMetadata.ReminderFrequency|null);
    }

    class BotReminderMetadata implements IBotReminderMetadata {
        constructor(p?: WAAICommon.IBotReminderMetadata);
        public requestMessageKey?: (WACommon.IMessageKey|null);
        public action?: (WAAICommon.BotReminderMetadata.ReminderAction|null);
        public name?: (string|null);
        public nextTriggerTimestamp?: (number|Long|null);
        public frequency?: (WAAICommon.BotReminderMetadata.ReminderFrequency|null);
        public static create(properties?: WAAICommon.IBotReminderMetadata): WAAICommon.BotReminderMetadata;
        public static encode(m: WAAICommon.IBotReminderMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotReminderMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotReminderMetadata;
        public static toObject(m: WAAICommon.BotReminderMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotReminderMetadata {

        enum ReminderFrequency {
            ONCE = 1,
            DAILY = 2,
            WEEKLY = 3,
            BIWEEKLY = 4,
            MONTHLY = 5
        }

        enum ReminderAction {
            NOTIFY = 1,
            CREATE = 2,
            DELETE = 3,
            UPDATE = 4
        }
    }

    interface IBotModelMetadata {
        modelType?: (WAAICommon.BotModelMetadata.ModelType|null);
        premiumModelStatus?: (WAAICommon.BotModelMetadata.PremiumModelStatus|null);
        modelNameOverride?: (string|null);
    }

    class BotModelMetadata implements IBotModelMetadata {
        constructor(p?: WAAICommon.IBotModelMetadata);
        public modelType?: (WAAICommon.BotModelMetadata.ModelType|null);
        public premiumModelStatus?: (WAAICommon.BotModelMetadata.PremiumModelStatus|null);
        public modelNameOverride?: (string|null);
        public static create(properties?: WAAICommon.IBotModelMetadata): WAAICommon.BotModelMetadata;
        public static encode(m: WAAICommon.IBotModelMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotModelMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotModelMetadata;
        public static toObject(m: WAAICommon.BotModelMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotModelMetadata {

        enum PremiumModelStatus {
            UNKNOWN_STATUS = 0,
            AVAILABLE = 1,
            QUOTA_EXCEED_LIMIT = 2
        }

        enum ModelType {
            UNKNOWN_TYPE = 0,
            LLAMA_PROD = 1,
            LLAMA_PROD_PREMIUM = 2
        }
    }

    interface IBotProgressIndicatorMetadata {
        progressDescription?: (string|null);
        stepsMetadata?: (WAAICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata[]|null);
        estimatedCompletionTime?: (number|Long|null);
    }

    class BotProgressIndicatorMetadata implements IBotProgressIndicatorMetadata {
        constructor(p?: WAAICommon.IBotProgressIndicatorMetadata);
        public progressDescription?: (string|null);
        public stepsMetadata: WAAICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata[];
        public estimatedCompletionTime?: (number|Long|null);
        public static create(properties?: WAAICommon.IBotProgressIndicatorMetadata): WAAICommon.BotProgressIndicatorMetadata;
        public static encode(m: WAAICommon.IBotProgressIndicatorMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotProgressIndicatorMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotProgressIndicatorMetadata;
        public static toObject(m: WAAICommon.BotProgressIndicatorMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotProgressIndicatorMetadata {

        interface IBotPlanningStepMetadata {
            statusTitle?: (string|null);
            statusBody?: (string|null);
            sourcesMetadata?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata[]|null);
            status?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);
            isReasoning?: (boolean|null);
            isEnhancedSearch?: (boolean|null);
            sections?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata[]|null);
        }

        class BotPlanningStepMetadata implements IBotPlanningStepMetadata {
            constructor(p?: WAAICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata);
            public statusTitle?: (string|null);
            public statusBody?: (string|null);
            public sourcesMetadata: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata[];
            public status?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus|null);
            public isReasoning?: (boolean|null);
            public isEnhancedSearch?: (boolean|null);
            public sections: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata[];
            public static create(properties?: WAAICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;
            public static encode(m: WAAICommon.BotProgressIndicatorMetadata.IBotPlanningStepMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata;
            public static toObject(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotPlanningStepMetadata {

            enum BotSearchSourceProvider {
                UNKNOWN_PROVIDER = 0,
                OTHER = 1,
                GOOGLE = 2,
                BING = 3
            }

            enum PlanningStepStatus {
                UNKNOWN = 0,
                PLANNED = 1,
                EXECUTING = 2,
                FINISHED = 3
            }

            interface IBotPlanningSearchSourcesMetadata {
                sourceTitle?: (string|null);
                provider?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);
                sourceURL?: (string|null);
            }

            class BotPlanningSearchSourcesMetadata implements IBotPlanningSearchSourcesMetadata {
                constructor(p?: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata);
                public sourceTitle?: (string|null);
                public provider?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider|null);
                public sourceURL?: (string|null);
                public static create(properties?: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;
                public static encode(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourcesMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;
                public static fromObject(d: { [k: string]: any }): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata;
                public static toObject(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BotPlanningSearchSourcesMetadata {

                enum BotPlanningSearchSourceProvider {
                    UNKNOWN = 0,
                    OTHER = 1,
                    GOOGLE = 2,
                    BING = 3
                }
            }

            interface IBotPlanningStepSectionMetadata {
                sectionTitle?: (string|null);
                sectionBody?: (string|null);
                sourcesMetadata?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata[]|null);
            }

            class BotPlanningStepSectionMetadata implements IBotPlanningStepSectionMetadata {
                constructor(p?: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata);
                public sectionTitle?: (string|null);
                public sectionBody?: (string|null);
                public sourcesMetadata: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata[];
                public static create(properties?: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;
                public static encode(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningStepSectionMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;
                public static fromObject(d: { [k: string]: any }): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata;
                public static toObject(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            interface IBotPlanningSearchSourceMetadata {
                title?: (string|null);
                provider?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);
                sourceURL?: (string|null);
                favIconURL?: (string|null);
            }

            class BotPlanningSearchSourceMetadata implements IBotPlanningSearchSourceMetadata {
                constructor(p?: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata);
                public title?: (string|null);
                public provider?: (WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider|null);
                public sourceURL?: (string|null);
                public favIconURL?: (string|null);
                public static create(properties?: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;
                public static encode(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.IBotPlanningSearchSourceMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;
                public static fromObject(d: { [k: string]: any }): WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata;
                public static toObject(m: WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    interface IBotCapabilityMetadata {
        capabilities?: (WAAICommon.BotCapabilityMetadata.BotCapabilityType[]|null);
    }

    class BotCapabilityMetadata implements IBotCapabilityMetadata {
        constructor(p?: WAAICommon.IBotCapabilityMetadata);
        public capabilities: WAAICommon.BotCapabilityMetadata.BotCapabilityType[];
        public static create(properties?: WAAICommon.IBotCapabilityMetadata): WAAICommon.BotCapabilityMetadata;
        public static encode(m: WAAICommon.IBotCapabilityMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotCapabilityMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotCapabilityMetadata;
        public static toObject(m: WAAICommon.BotCapabilityMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotCapabilityMetadata {

        enum BotCapabilityType {
            UNKNOWN = 0,
            PROGRESS_INDICATOR = 1,
            RICH_RESPONSE_HEADING = 2,
            RICH_RESPONSE_NESTED_LIST = 3,
            AI_MEMORY = 4,
            RICH_RESPONSE_THREAD_SURFING = 5,
            RICH_RESPONSE_TABLE = 6,
            RICH_RESPONSE_CODE = 7,
            RICH_RESPONSE_STRUCTURED_RESPONSE = 8,
            RICH_RESPONSE_INLINE_IMAGE = 9,
            WA_IG_1P_PLUGIN_RANKING_CONTROL = 10,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19,
            WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20,
            RICH_RESPONSE_SUB_HEADING = 21,
            RICH_RESPONSE_GRID_IMAGE = 22,
            AI_STUDIO_UGC_MEMORY = 23,
            RICH_RESPONSE_LATEX = 24,
            RICH_RESPONSE_MAPS = 25,
            RICH_RESPONSE_INLINE_REELS = 26,
            AGENTIC_PLANNING = 27,
            ACCOUNT_LINKING = 28,
            STREAMING_DISAGGREGATION = 29,
            RICH_RESPONSE_GRID_IMAGE_3P = 30,
            RICH_RESPONSE_LATEX_INLINE = 31,
            QUERY_PLAN = 32,
            PROACTIVE_MESSAGE = 33,
            RICH_RESPONSE_UNIFIED_RESPONSE = 34,
            PROMOTION_MESSAGE = 35,
            SIMPLIFIED_PROFILE_PAGE = 36,
            RICH_RESPONSE_SOURCES_IN_MESSAGE = 37,
            RICH_RESPONSE_SIDE_BY_SIDE_SURVEY = 38,
            RICH_RESPONSE_UNIFIED_TEXT_COMPONENT = 39,
            AI_SHARED_MEMORY = 40,
            RICH_RESPONSE_UNIFIED_SOURCES = 41,
            RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS = 42,
            RICH_RESPONSE_UR_INLINE_REELS_ENABLED = 43,
            RICH_RESPONSE_UR_MEDIA_GRID_ENABLED = 44,
            RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER = 45,
            RICH_RESPONSE_IN_APP_SURVEY = 46,
            AI_RESPONSE_MODEL_BRANDING = 47,
            SESSION_TRANSPARENCY_SYSTEM_MESSAGE = 48,
            RICH_RESPONSE_UR_REASONING = 49,
            RICH_RESPONSE_UR_ZEITGEIST_CITATIONS = 50,
            RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL = 51,
            AI_IMAGINE_LOADING_INDICATOR = 52,
            RICH_RESPONSE_UR_IMAGINE = 53,
            AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR = 54,
            RICH_RESPONSE_UR_BLOKS_ENABLED = 55,
            RICH_RESPONSE_INLINE_LINKS_ENABLED = 56,
            RICH_RESPONSE_UR_IMAGINE_VIDEO = 57,
            JSON_PATCH_STREAMING = 58,
            AI_TAB_FORCE_CLIPPY = 59,
            UNIFIED_RESPONSE_EMBEDDED_SCREENS = 60,
            AI_SUBSCRIPTION_ENABLED = 61
        }
    }

    interface IBotModeSelectionMetadata {
        mode?: (WAAICommon.BotModeSelectionMetadata.BotUserSelectionMode[]|null);
        overrideMode?: (number[]|null);
    }

    class BotModeSelectionMetadata implements IBotModeSelectionMetadata {
        constructor(p?: WAAICommon.IBotModeSelectionMetadata);
        public mode: WAAICommon.BotModeSelectionMetadata.BotUserSelectionMode[];
        public overrideMode: number[];
        public static create(properties?: WAAICommon.IBotModeSelectionMetadata): WAAICommon.BotModeSelectionMetadata;
        public static encode(m: WAAICommon.IBotModeSelectionMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotModeSelectionMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotModeSelectionMetadata;
        public static toObject(m: WAAICommon.BotModeSelectionMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotModeSelectionMetadata {

        enum BotUserSelectionMode {
            DEFAULT_MODE = 0,
            THINK_HARD_MODE = 1
        }
    }

    interface IBotQuotaMetadata {
        botFeatureQuotaMetadata?: (WAAICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata[]|null);
    }

    class BotQuotaMetadata implements IBotQuotaMetadata {
        constructor(p?: WAAICommon.IBotQuotaMetadata);
        public botFeatureQuotaMetadata: WAAICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata[];
        public static create(properties?: WAAICommon.IBotQuotaMetadata): WAAICommon.BotQuotaMetadata;
        public static encode(m: WAAICommon.IBotQuotaMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotQuotaMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotQuotaMetadata;
        public static toObject(m: WAAICommon.BotQuotaMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotQuotaMetadata {

        interface IBotFeatureQuotaMetadata {
            featureType?: (WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);
            remainingQuota?: (number|null);
            expirationTimestamp?: (number|Long|null);
        }

        class BotFeatureQuotaMetadata implements IBotFeatureQuotaMetadata {
            constructor(p?: WAAICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata);
            public featureType?: (WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType|null);
            public remainingQuota?: (number|null);
            public expirationTimestamp?: (number|Long|null);
            public static create(properties?: WAAICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata): WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;
            public static encode(m: WAAICommon.BotQuotaMetadata.IBotFeatureQuotaMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata;
            public static toObject(m: WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotFeatureQuotaMetadata {

            enum BotFeatureType {
                UNKNOWN_FEATURE = 0,
                REASONING_FEATURE = 1
            }
        }
    }

    interface IBotImagineMetadata {
        imagineType?: (WAAICommon.BotImagineMetadata.ImagineType|null);
        shortPrompt?: (string|null);
    }

    class BotImagineMetadata implements IBotImagineMetadata {
        constructor(p?: WAAICommon.IBotImagineMetadata);
        public imagineType?: (WAAICommon.BotImagineMetadata.ImagineType|null);
        public shortPrompt?: (string|null);
        public static create(properties?: WAAICommon.IBotImagineMetadata): WAAICommon.BotImagineMetadata;
        public static encode(m: WAAICommon.IBotImagineMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotImagineMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotImagineMetadata;
        public static toObject(m: WAAICommon.BotImagineMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotImagineMetadata {

        enum ImagineType {
            UNKNOWN = 0,
            IMAGINE = 1,
            MEMU = 2,
            FLASH = 3,
            EDIT = 4
        }
    }

    interface IBotAgeCollectionMetadata {
        ageCollectionEligible?: (boolean|null);
        shouldTriggerAgeCollectionOnClient?: (boolean|null);
        ageCollectionType?: (WAAICommon.BotAgeCollectionMetadata.AgeCollectionType|null);
    }

    class BotAgeCollectionMetadata implements IBotAgeCollectionMetadata {
        constructor(p?: WAAICommon.IBotAgeCollectionMetadata);
        public ageCollectionEligible?: (boolean|null);
        public shouldTriggerAgeCollectionOnClient?: (boolean|null);
        public ageCollectionType?: (WAAICommon.BotAgeCollectionMetadata.AgeCollectionType|null);
        public static create(properties?: WAAICommon.IBotAgeCollectionMetadata): WAAICommon.BotAgeCollectionMetadata;
        public static encode(m: WAAICommon.IBotAgeCollectionMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotAgeCollectionMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotAgeCollectionMetadata;
        public static toObject(m: WAAICommon.BotAgeCollectionMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotAgeCollectionMetadata {

        enum AgeCollectionType {
            O18_BINARY = 0,
            WAFFLE = 1
        }
    }

    interface IBotSourcesMetadata {
        sources?: (WAAICommon.BotSourcesMetadata.IBotSourceItem[]|null);
    }

    class BotSourcesMetadata implements IBotSourcesMetadata {
        constructor(p?: WAAICommon.IBotSourcesMetadata);
        public sources: WAAICommon.BotSourcesMetadata.IBotSourceItem[];
        public static create(properties?: WAAICommon.IBotSourcesMetadata): WAAICommon.BotSourcesMetadata;
        public static encode(m: WAAICommon.IBotSourcesMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotSourcesMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotSourcesMetadata;
        public static toObject(m: WAAICommon.BotSourcesMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotSourcesMetadata {

        interface IBotSourceItem {
            provider?: (WAAICommon.BotSourcesMetadata.BotSourceItem.SourceProvider|null);
            thumbnailCDNURL?: (string|null);
            sourceProviderURL?: (string|null);
            sourceQuery?: (string|null);
            faviconCDNURL?: (string|null);
            citationNumber?: (number|null);
            sourceTitle?: (string|null);
        }

        class BotSourceItem implements IBotSourceItem {
            constructor(p?: WAAICommon.BotSourcesMetadata.IBotSourceItem);
            public provider?: (WAAICommon.BotSourcesMetadata.BotSourceItem.SourceProvider|null);
            public thumbnailCDNURL?: (string|null);
            public sourceProviderURL?: (string|null);
            public sourceQuery?: (string|null);
            public faviconCDNURL?: (string|null);
            public citationNumber?: (number|null);
            public sourceTitle?: (string|null);
            public static create(properties?: WAAICommon.BotSourcesMetadata.IBotSourceItem): WAAICommon.BotSourcesMetadata.BotSourceItem;
            public static encode(m: WAAICommon.BotSourcesMetadata.IBotSourceItem, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotSourcesMetadata.BotSourceItem;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotSourcesMetadata.BotSourceItem;
            public static toObject(m: WAAICommon.BotSourcesMetadata.BotSourceItem, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BotSourceItem {

            enum SourceProvider {
                UNKNOWN = 0,
                BING = 1,
                GOOGLE = 2,
                SUPPORT = 3,
                OTHER = 4
            }
        }
    }

    interface IBotMessageOrigin {
        type?: (WAAICommon.BotMessageOrigin.BotMessageOriginType|null);
    }

    class BotMessageOrigin implements IBotMessageOrigin {
        constructor(p?: WAAICommon.IBotMessageOrigin);
        public type?: (WAAICommon.BotMessageOrigin.BotMessageOriginType|null);
        public static create(properties?: WAAICommon.IBotMessageOrigin): WAAICommon.BotMessageOrigin;
        public static encode(m: WAAICommon.IBotMessageOrigin, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMessageOrigin;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMessageOrigin;
        public static toObject(m: WAAICommon.BotMessageOrigin, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotMessageOrigin {

        enum BotMessageOriginType {
            BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED = 0
        }
    }

    interface IAIThreadInfo {
        serverInfo?: (WAAICommon.AIThreadInfo.IAIThreadServerInfo|null);
        clientInfo?: (WAAICommon.AIThreadInfo.IAIThreadClientInfo|null);
    }

    class AIThreadInfo implements IAIThreadInfo {
        constructor(p?: WAAICommon.IAIThreadInfo);
        public serverInfo?: (WAAICommon.AIThreadInfo.IAIThreadServerInfo|null);
        public clientInfo?: (WAAICommon.AIThreadInfo.IAIThreadClientInfo|null);
        public static create(properties?: WAAICommon.IAIThreadInfo): WAAICommon.AIThreadInfo;
        public static encode(m: WAAICommon.IAIThreadInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIThreadInfo;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AIThreadInfo;
        public static toObject(m: WAAICommon.AIThreadInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIThreadInfo {

        interface IAIThreadClientInfo {
            type?: (WAAICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);
            sourceChatJID?: (string|null);
        }

        class AIThreadClientInfo implements IAIThreadClientInfo {
            constructor(p?: WAAICommon.AIThreadInfo.IAIThreadClientInfo);
            public type?: (WAAICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType|null);
            public sourceChatJID?: (string|null);
            public static create(properties?: WAAICommon.AIThreadInfo.IAIThreadClientInfo): WAAICommon.AIThreadInfo.AIThreadClientInfo;
            public static encode(m: WAAICommon.AIThreadInfo.IAIThreadClientInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIThreadInfo.AIThreadClientInfo;
            public static fromObject(d: { [k: string]: any }): WAAICommon.AIThreadInfo.AIThreadClientInfo;
            public static toObject(m: WAAICommon.AIThreadInfo.AIThreadClientInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AIThreadClientInfo {

            enum AIThreadType {
                UNKNOWN = 0,
                DEFAULT = 1,
                INCOGNITO = 2,
                SIDE_CHAT = 3
            }
        }

        interface IAIThreadServerInfo {
            title?: (string|null);
        }

        class AIThreadServerInfo implements IAIThreadServerInfo {
            constructor(p?: WAAICommon.AIThreadInfo.IAIThreadServerInfo);
            public title?: (string|null);
            public static create(properties?: WAAICommon.AIThreadInfo.IAIThreadServerInfo): WAAICommon.AIThreadInfo.AIThreadServerInfo;
            public static encode(m: WAAICommon.AIThreadInfo.IAIThreadServerInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIThreadInfo.AIThreadServerInfo;
            public static fromObject(d: { [k: string]: any }): WAAICommon.AIThreadInfo.AIThreadServerInfo;
            public static toObject(m: WAAICommon.AIThreadInfo.AIThreadServerInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IBotFeedbackMessage {
        messageKey?: (WACommon.IMessageKey|null);
        kind?: (WAAICommon.BotFeedbackMessage.BotFeedbackKind|null);
        text?: (string|null);
        kindNegative?: (number|Long|null);
        kindPositive?: (number|Long|null);
        kindReport?: (WAAICommon.BotFeedbackMessage.ReportKind|null);
        sideBySideSurveyMetadata?: (WAAICommon.BotFeedbackMessage.ISideBySideSurveyMetadata|null);
    }

    class BotFeedbackMessage implements IBotFeedbackMessage {
        constructor(p?: WAAICommon.IBotFeedbackMessage);
        public messageKey?: (WACommon.IMessageKey|null);
        public kind?: (WAAICommon.BotFeedbackMessage.BotFeedbackKind|null);
        public text?: (string|null);
        public kindNegative?: (number|Long|null);
        public kindPositive?: (number|Long|null);
        public kindReport?: (WAAICommon.BotFeedbackMessage.ReportKind|null);
        public sideBySideSurveyMetadata?: (WAAICommon.BotFeedbackMessage.ISideBySideSurveyMetadata|null);
        public static create(properties?: WAAICommon.IBotFeedbackMessage): WAAICommon.BotFeedbackMessage;
        public static encode(m: WAAICommon.IBotFeedbackMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage;
        public static toObject(m: WAAICommon.BotFeedbackMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotFeedbackMessage {

        enum ReportKind {
            NONE = 0,
            GENERIC = 1
        }

        enum BotFeedbackKindMultiplePositive {
            BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1
        }

        enum BotFeedbackKindMultipleNegative {
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
            BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256
        }

        enum BotFeedbackKind {
            BOT_FEEDBACK_POSITIVE = 0,
            BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
            BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
            BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
            BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
            BOT_FEEDBACK_NEGATIVE_SAFE = 5,
            BOT_FEEDBACK_NEGATIVE_OTHER = 6,
            BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
            BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
            BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,
            BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10,
            BOT_FEEDBACK_NEGATIVE_CLARITY = 11,
            BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12,
            BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13,
            BOT_FEEDBACK_NEGATIVE = 14
        }

        interface ISideBySideSurveyMetadata {
            selectedRequestID?: (string|null);
            surveyID?: (number|null);
            simonSessionFbid?: (string|null);
            responseOtid?: (string|null);
            responseTimestampMSString?: (string|null);
            isSelectedResponsePrimary?: (boolean|null);
            messageIDToEdit?: (string|null);
            analyticsData?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData|null);
            metaAiAnalyticsData?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISidebySideSurveyMetaAiAnalyticsData|null);
        }

        class SideBySideSurveyMetadata implements ISideBySideSurveyMetadata {
            constructor(p?: WAAICommon.BotFeedbackMessage.ISideBySideSurveyMetadata);
            public selectedRequestID?: (string|null);
            public surveyID?: (number|null);
            public simonSessionFbid?: (string|null);
            public responseOtid?: (string|null);
            public responseTimestampMSString?: (string|null);
            public isSelectedResponsePrimary?: (boolean|null);
            public messageIDToEdit?: (string|null);
            public analyticsData?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData|null);
            public metaAiAnalyticsData?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISidebySideSurveyMetaAiAnalyticsData|null);
            public static create(properties?: WAAICommon.BotFeedbackMessage.ISideBySideSurveyMetadata): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata;
            public static encode(m: WAAICommon.BotFeedbackMessage.ISideBySideSurveyMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata;
            public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SideBySideSurveyMetadata {

            interface ISidebySideSurveyMetaAiAnalyticsData {
                surveyID?: (number|null);
                primaryResponseID?: (string|null);
                testArmName?: (string|null);
                timestampMSString?: (string|null);
                ctaImpressionEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAImpressionEventData|null);
                ctaClickEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAClickEventData|null);
                cardImpressionEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCardImpressionEventData|null);
                responseEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyResponseEventData|null);
                abandonEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyAbandonEventData|null);
            }

            class SidebySideSurveyMetaAiAnalyticsData implements ISidebySideSurveyMetaAiAnalyticsData {
                constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISidebySideSurveyMetaAiAnalyticsData);
                public surveyID?: (number|null);
                public primaryResponseID?: (string|null);
                public testArmName?: (string|null);
                public timestampMSString?: (string|null);
                public ctaImpressionEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAImpressionEventData|null);
                public ctaClickEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAClickEventData|null);
                public cardImpressionEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCardImpressionEventData|null);
                public responseEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyResponseEventData|null);
                public abandonEvent?: (WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyAbandonEventData|null);
                public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISidebySideSurveyMetaAiAnalyticsData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData;
                public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISidebySideSurveyMetaAiAnalyticsData, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData;
                public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData;
                public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SidebySideSurveyMetaAiAnalyticsData {

                interface ISideBySideSurveyAbandonEventData {
                    abandonDwellTimeMSString?: (string|null);
                }

                class SideBySideSurveyAbandonEventData implements ISideBySideSurveyAbandonEventData {
                    constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyAbandonEventData);
                    public abandonDwellTimeMSString?: (string|null);
                    public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyAbandonEventData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData;
                    public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyAbandonEventData, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData;
                    public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData;
                    public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                interface ISideBySideSurveyResponseEventData {
                    responseDwellTimeMSString?: (string|null);
                    selectedResponseID?: (string|null);
                }

                class SideBySideSurveyResponseEventData implements ISideBySideSurveyResponseEventData {
                    constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyResponseEventData);
                    public responseDwellTimeMSString?: (string|null);
                    public selectedResponseID?: (string|null);
                    public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyResponseEventData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData;
                    public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyResponseEventData, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData;
                    public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData;
                    public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                interface ISideBySideSurveyCardImpressionEventData {
                }

                class SideBySideSurveyCardImpressionEventData implements ISideBySideSurveyCardImpressionEventData {
                    constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCardImpressionEventData);
                    public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCardImpressionEventData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData;
                    public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCardImpressionEventData, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData;
                    public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData;
                    public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                interface ISideBySideSurveyCTAClickEventData {
                    isSurveyExpired?: (boolean|null);
                    clickDwellTimeMSString?: (string|null);
                }

                class SideBySideSurveyCTAClickEventData implements ISideBySideSurveyCTAClickEventData {
                    constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAClickEventData);
                    public isSurveyExpired?: (boolean|null);
                    public clickDwellTimeMSString?: (string|null);
                    public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAClickEventData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData;
                    public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAClickEventData, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData;
                    public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData;
                    public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                interface ISideBySideSurveyCTAImpressionEventData {
                    isSurveyExpired?: (boolean|null);
                }

                class SideBySideSurveyCTAImpressionEventData implements ISideBySideSurveyCTAImpressionEventData {
                    constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAImpressionEventData);
                    public isSurveyExpired?: (boolean|null);
                    public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAImpressionEventData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData;
                    public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ISideBySideSurveyCTAImpressionEventData, w?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData;
                    public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData;
                    public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            interface ISideBySideSurveyAnalyticsData {
                tessaEvent?: (string|null);
                tessaSessionFbid?: (string|null);
                simonSessionFbid?: (string|null);
            }

            class SideBySideSurveyAnalyticsData implements ISideBySideSurveyAnalyticsData {
                constructor(p?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData);
                public tessaEvent?: (string|null);
                public tessaSessionFbid?: (string|null);
                public simonSessionFbid?: (string|null);
                public static create(properties?: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;
                public static encode(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.ISideBySideSurveyAnalyticsData, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;
                public static fromObject(d: { [k: string]: any }): WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData;
                public static toObject(m: WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    interface IBotDocumentMessageMetadata {
        pluginType?: (WAAICommon.BotDocumentMessageMetadata.DocumentPluginType|null);
    }

    class BotDocumentMessageMetadata implements IBotDocumentMessageMetadata {
        constructor(p?: WAAICommon.IBotDocumentMessageMetadata);
        public pluginType?: (WAAICommon.BotDocumentMessageMetadata.DocumentPluginType|null);
        public static create(properties?: WAAICommon.IBotDocumentMessageMetadata): WAAICommon.BotDocumentMessageMetadata;
        public static encode(m: WAAICommon.IBotDocumentMessageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotDocumentMessageMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotDocumentMessageMetadata;
        public static toObject(m: WAAICommon.BotDocumentMessageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotDocumentMessageMetadata {

        enum DocumentPluginType {
            TEXT_EXTRACTION = 0,
            OCR_AND_IMAGES = 1
        }
    }

    interface IAIHomeState {
        lastFetchTime?: (number|Long|null);
        capabilityOptions?: (WAAICommon.AIHomeState.IAIHomeOption[]|null);
        conversationOptions?: (WAAICommon.AIHomeState.IAIHomeOption[]|null);
    }

    class AIHomeState implements IAIHomeState {
        constructor(p?: WAAICommon.IAIHomeState);
        public lastFetchTime?: (number|Long|null);
        public capabilityOptions: WAAICommon.AIHomeState.IAIHomeOption[];
        public conversationOptions: WAAICommon.AIHomeState.IAIHomeOption[];
        public static create(properties?: WAAICommon.IAIHomeState): WAAICommon.AIHomeState;
        public static encode(m: WAAICommon.IAIHomeState, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIHomeState;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AIHomeState;
        public static toObject(m: WAAICommon.AIHomeState, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIHomeState {

        interface IAIHomeOption {
            type?: (WAAICommon.AIHomeState.AIHomeOption.AIHomeActionType|null);
            title?: (string|null);
            promptText?: (string|null);
            sessionID?: (string|null);
            imageWdsIdentifier?: (string|null);
            imageTintColor?: (string|null);
            imageBackgroundColor?: (string|null);
            cardTypeID?: (string|null);
        }

        class AIHomeOption implements IAIHomeOption {
            constructor(p?: WAAICommon.AIHomeState.IAIHomeOption);
            public type?: (WAAICommon.AIHomeState.AIHomeOption.AIHomeActionType|null);
            public title?: (string|null);
            public promptText?: (string|null);
            public sessionID?: (string|null);
            public imageWdsIdentifier?: (string|null);
            public imageTintColor?: (string|null);
            public imageBackgroundColor?: (string|null);
            public cardTypeID?: (string|null);
            public static create(properties?: WAAICommon.AIHomeState.IAIHomeOption): WAAICommon.AIHomeState.AIHomeOption;
            public static encode(m: WAAICommon.AIHomeState.IAIHomeOption, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIHomeState.AIHomeOption;
            public static fromObject(d: { [k: string]: any }): WAAICommon.AIHomeState.AIHomeOption;
            public static toObject(m: WAAICommon.AIHomeState.AIHomeOption, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AIHomeOption {

            enum AIHomeActionType {
                PROMPT = 0,
                CREATE_IMAGE = 1,
                ANIMATE_PHOTO = 2,
                ANALYZE_FILE = 3,
                COLLABORATE = 4,
                OPEN_GREETING_CARD = 5
            }
        }
    }

    interface IBotInfrastructureDiagnostics {
        botBackend?: (WAAICommon.BotInfrastructureDiagnostics.BotBackend|null);
        toolsUsed?: (string[]|null);
        isThinking?: (boolean|null);
    }

    class BotInfrastructureDiagnostics implements IBotInfrastructureDiagnostics {
        constructor(p?: WAAICommon.IBotInfrastructureDiagnostics);
        public botBackend?: (WAAICommon.BotInfrastructureDiagnostics.BotBackend|null);
        public toolsUsed: string[];
        public isThinking?: (boolean|null);
        public static create(properties?: WAAICommon.IBotInfrastructureDiagnostics): WAAICommon.BotInfrastructureDiagnostics;
        public static encode(m: WAAICommon.IBotInfrastructureDiagnostics, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotInfrastructureDiagnostics;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotInfrastructureDiagnostics;
        public static toObject(m: WAAICommon.BotInfrastructureDiagnostics, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotInfrastructureDiagnostics {

        enum BotBackend {
            AAPI = 0,
            CLIPPY = 1
        }
    }

    interface IBotSuggestedPromptMetadata {
        suggestedPrompts?: (string[]|null);
        selectedPromptIndex?: (number|null);
        promptSuggestions?: (WAAICommon.IBotPromptSuggestions|null);
        selectedPromptID?: (string|null);
    }

    class BotSuggestedPromptMetadata implements IBotSuggestedPromptMetadata {
        constructor(p?: WAAICommon.IBotSuggestedPromptMetadata);
        public suggestedPrompts: string[];
        public selectedPromptIndex?: (number|null);
        public promptSuggestions?: (WAAICommon.IBotPromptSuggestions|null);
        public selectedPromptID?: (string|null);
        public static create(properties?: WAAICommon.IBotSuggestedPromptMetadata): WAAICommon.BotSuggestedPromptMetadata;
        public static encode(m: WAAICommon.IBotSuggestedPromptMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotSuggestedPromptMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotSuggestedPromptMetadata;
        public static toObject(m: WAAICommon.BotSuggestedPromptMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotPromptSuggestions {
        suggestions?: (WAAICommon.IBotPromptSuggestion[]|null);
    }

    class BotPromptSuggestions implements IBotPromptSuggestions {
        constructor(p?: WAAICommon.IBotPromptSuggestions);
        public suggestions: WAAICommon.IBotPromptSuggestion[];
        public static create(properties?: WAAICommon.IBotPromptSuggestions): WAAICommon.BotPromptSuggestions;
        public static encode(m: WAAICommon.IBotPromptSuggestions, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotPromptSuggestions;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotPromptSuggestions;
        public static toObject(m: WAAICommon.BotPromptSuggestions, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotPromptSuggestion {
        prompt?: (string|null);
        promptID?: (string|null);
    }

    class BotPromptSuggestion implements IBotPromptSuggestion {
        constructor(p?: WAAICommon.IBotPromptSuggestion);
        public prompt?: (string|null);
        public promptID?: (string|null);
        public static create(properties?: WAAICommon.IBotPromptSuggestion): WAAICommon.BotPromptSuggestion;
        public static encode(m: WAAICommon.IBotPromptSuggestion, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotPromptSuggestion;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotPromptSuggestion;
        public static toObject(m: WAAICommon.BotPromptSuggestion, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotLinkedAccountsMetadata {
        accounts?: (WAAICommon.IBotLinkedAccount[]|null);
        acAuthTokens?: (Uint8Array|null);
        acErrorCode?: (number|null);
    }

    class BotLinkedAccountsMetadata implements IBotLinkedAccountsMetadata {
        constructor(p?: WAAICommon.IBotLinkedAccountsMetadata);
        public accounts: WAAICommon.IBotLinkedAccount[];
        public acAuthTokens?: (Uint8Array|null);
        public acErrorCode?: (number|null);
        public static create(properties?: WAAICommon.IBotLinkedAccountsMetadata): WAAICommon.BotLinkedAccountsMetadata;
        public static encode(m: WAAICommon.IBotLinkedAccountsMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotLinkedAccountsMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotLinkedAccountsMetadata;
        public static toObject(m: WAAICommon.BotLinkedAccountsMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotMemoryMetadata {
        addedFacts?: (WAAICommon.IBotMemoryFact[]|null);
        removedFacts?: (WAAICommon.IBotMemoryFact[]|null);
        disclaimer?: (string|null);
    }

    class BotMemoryMetadata implements IBotMemoryMetadata {
        constructor(p?: WAAICommon.IBotMemoryMetadata);
        public addedFacts: WAAICommon.IBotMemoryFact[];
        public removedFacts: WAAICommon.IBotMemoryFact[];
        public disclaimer?: (string|null);
        public static create(properties?: WAAICommon.IBotMemoryMetadata): WAAICommon.BotMemoryMetadata;
        public static encode(m: WAAICommon.IBotMemoryMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMemoryMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMemoryMetadata;
        public static toObject(m: WAAICommon.BotMemoryMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotMemoryFact {
        fact?: (string|null);
        factID?: (string|null);
    }

    class BotMemoryFact implements IBotMemoryFact {
        constructor(p?: WAAICommon.IBotMemoryFact);
        public fact?: (string|null);
        public factID?: (string|null);
        public static create(properties?: WAAICommon.IBotMemoryFact): WAAICommon.BotMemoryFact;
        public static encode(m: WAAICommon.IBotMemoryFact, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMemoryFact;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMemoryFact;
        public static toObject(m: WAAICommon.BotMemoryFact, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotSignatureVerificationMetadata {
        proofs?: (WAAICommon.IBotSignatureVerificationUseCaseProof[]|null);
    }

    class BotSignatureVerificationMetadata implements IBotSignatureVerificationMetadata {
        constructor(p?: WAAICommon.IBotSignatureVerificationMetadata);
        public proofs: WAAICommon.IBotSignatureVerificationUseCaseProof[];
        public static create(properties?: WAAICommon.IBotSignatureVerificationMetadata): WAAICommon.BotSignatureVerificationMetadata;
        public static encode(m: WAAICommon.IBotSignatureVerificationMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotSignatureVerificationMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotSignatureVerificationMetadata;
        public static toObject(m: WAAICommon.BotSignatureVerificationMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotRenderingMetadata {
        keywords?: (WAAICommon.BotRenderingMetadata.IKeyword[]|null);
    }

    class BotRenderingMetadata implements IBotRenderingMetadata {
        constructor(p?: WAAICommon.IBotRenderingMetadata);
        public keywords: WAAICommon.BotRenderingMetadata.IKeyword[];
        public static create(properties?: WAAICommon.IBotRenderingMetadata): WAAICommon.BotRenderingMetadata;
        public static encode(m: WAAICommon.IBotRenderingMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotRenderingMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotRenderingMetadata;
        public static toObject(m: WAAICommon.BotRenderingMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotRenderingMetadata {

        interface IKeyword {
            value?: (string|null);
            associatedPrompts?: (string[]|null);
        }

        class Keyword implements IKeyword {
            constructor(p?: WAAICommon.BotRenderingMetadata.IKeyword);
            public value?: (string|null);
            public associatedPrompts: string[];
            public static create(properties?: WAAICommon.BotRenderingMetadata.IKeyword): WAAICommon.BotRenderingMetadata.Keyword;
            public static encode(m: WAAICommon.BotRenderingMetadata.IKeyword, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotRenderingMetadata.Keyword;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotRenderingMetadata.Keyword;
            public static toObject(m: WAAICommon.BotRenderingMetadata.Keyword, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IBotMetricsMetadata {
        destinationID?: (string|null);
        destinationEntryPoint?: (WAAICommon.BotMetricsEntryPoint|null);
        threadOrigin?: (WAAICommon.BotMetricsThreadEntryPoint|null);
    }

    class BotMetricsMetadata implements IBotMetricsMetadata {
        constructor(p?: WAAICommon.IBotMetricsMetadata);
        public destinationID?: (string|null);
        public destinationEntryPoint?: (WAAICommon.BotMetricsEntryPoint|null);
        public threadOrigin?: (WAAICommon.BotMetricsThreadEntryPoint|null);
        public static create(properties?: WAAICommon.IBotMetricsMetadata): WAAICommon.BotMetricsMetadata;
        public static encode(m: WAAICommon.IBotMetricsMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMetricsMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMetricsMetadata;
        public static toObject(m: WAAICommon.BotMetricsMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotSessionMetadata {
        sessionID?: (string|null);
        sessionSource?: (WAAICommon.BotSessionSource|null);
    }

    class BotSessionMetadata implements IBotSessionMetadata {
        constructor(p?: WAAICommon.IBotSessionMetadata);
        public sessionID?: (string|null);
        public sessionSource?: (WAAICommon.BotSessionSource|null);
        public static create(properties?: WAAICommon.IBotSessionMetadata): WAAICommon.BotSessionMetadata;
        public static encode(m: WAAICommon.IBotSessionMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotSessionMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotSessionMetadata;
        public static toObject(m: WAAICommon.BotSessionMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotMemuMetadata {
        faceImages?: (WAAICommon.IBotMediaMetadata[]|null);
    }

    class BotMemuMetadata implements IBotMemuMetadata {
        constructor(p?: WAAICommon.IBotMemuMetadata);
        public faceImages: WAAICommon.IBotMediaMetadata[];
        public static create(properties?: WAAICommon.IBotMemuMetadata): WAAICommon.BotMemuMetadata;
        public static encode(m: WAAICommon.IBotMemuMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMemuMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMemuMetadata;
        public static toObject(m: WAAICommon.BotMemuMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IInThreadSurveyMetadata {
        tessaSessionID?: (string|null);
        simonSessionID?: (string|null);
        simonSurveyID?: (string|null);
        tessaRootID?: (string|null);
        requestID?: (string|null);
        tessaEvent?: (string|null);
        invitationHeaderText?: (string|null);
        invitationBodyText?: (string|null);
        invitationCtaText?: (string|null);
        invitationCtaURL?: (string|null);
        surveyTitle?: (string|null);
        questions?: (WAAICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion[]|null);
        surveyContinueButtonText?: (string|null);
        surveySubmitButtonText?: (string|null);
        privacyStatementFull?: (string|null);
        privacyStatementParts?: (WAAICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart[]|null);
        feedbackToastText?: (string|null);
        startQuestionIndex?: (number|null);
    }

    class InThreadSurveyMetadata implements IInThreadSurveyMetadata {
        constructor(p?: WAAICommon.IInThreadSurveyMetadata);
        public tessaSessionID?: (string|null);
        public simonSessionID?: (string|null);
        public simonSurveyID?: (string|null);
        public tessaRootID?: (string|null);
        public requestID?: (string|null);
        public tessaEvent?: (string|null);
        public invitationHeaderText?: (string|null);
        public invitationBodyText?: (string|null);
        public invitationCtaText?: (string|null);
        public invitationCtaURL?: (string|null);
        public surveyTitle?: (string|null);
        public questions: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion[];
        public surveyContinueButtonText?: (string|null);
        public surveySubmitButtonText?: (string|null);
        public privacyStatementFull?: (string|null);
        public privacyStatementParts: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart[];
        public feedbackToastText?: (string|null);
        public startQuestionIndex?: (number|null);
        public static create(properties?: WAAICommon.IInThreadSurveyMetadata): WAAICommon.InThreadSurveyMetadata;
        public static encode(m: WAAICommon.IInThreadSurveyMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.InThreadSurveyMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.InThreadSurveyMetadata;
        public static toObject(m: WAAICommon.InThreadSurveyMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InThreadSurveyMetadata {

        interface IInThreadSurveyPrivacyStatementPart {
            text?: (string|null);
            URL?: (string|null);
        }

        class InThreadSurveyPrivacyStatementPart implements IInThreadSurveyPrivacyStatementPart {
            constructor(p?: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart);
            public text?: (string|null);
            public URL?: (string|null);
            public static create(properties?: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart): WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;
            public static encode(m: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyPrivacyStatementPart, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;
            public static fromObject(d: { [k: string]: any }): WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart;
            public static toObject(m: WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IInThreadSurveyOption {
            stringValue?: (string|null);
            numericValue?: (number|null);
            textTranslated?: (string|null);
        }

        class InThreadSurveyOption implements IInThreadSurveyOption {
            constructor(p?: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyOption);
            public stringValue?: (string|null);
            public numericValue?: (number|null);
            public textTranslated?: (string|null);
            public static create(properties?: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyOption): WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption;
            public static encode(m: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyOption, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption;
            public static fromObject(d: { [k: string]: any }): WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption;
            public static toObject(m: WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IInThreadSurveyQuestion {
            questionText?: (string|null);
            questionID?: (string|null);
            questionOptions?: (WAAICommon.InThreadSurveyMetadata.IInThreadSurveyOption[]|null);
        }

        class InThreadSurveyQuestion implements IInThreadSurveyQuestion {
            constructor(p?: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion);
            public questionText?: (string|null);
            public questionID?: (string|null);
            public questionOptions: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyOption[];
            public static create(properties?: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion): WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;
            public static encode(m: WAAICommon.InThreadSurveyMetadata.IInThreadSurveyQuestion, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;
            public static fromObject(d: { [k: string]: any }): WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion;
            public static toObject(m: WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IBotMessageOriginMetadata {
        origins?: (WAAICommon.IBotMessageOrigin[]|null);
    }

    class BotMessageOriginMetadata implements IBotMessageOriginMetadata {
        constructor(p?: WAAICommon.IBotMessageOriginMetadata);
        public origins: WAAICommon.IBotMessageOrigin[];
        public static create(properties?: WAAICommon.IBotMessageOriginMetadata): WAAICommon.BotMessageOriginMetadata;
        public static encode(m: WAAICommon.IBotMessageOriginMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMessageOriginMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMessageOriginMetadata;
        public static toObject(m: WAAICommon.BotMessageOriginMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotUnifiedResponseMutation {
        sbsMetadata?: (WAAICommon.BotUnifiedResponseMutation.ISideBySideMetadata|null);
        mediaDetailsMetadataList?: (WAAICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata[]|null);
    }

    class BotUnifiedResponseMutation implements IBotUnifiedResponseMutation {
        constructor(p?: WAAICommon.IBotUnifiedResponseMutation);
        public sbsMetadata?: (WAAICommon.BotUnifiedResponseMutation.ISideBySideMetadata|null);
        public mediaDetailsMetadataList: WAAICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata[];
        public static create(properties?: WAAICommon.IBotUnifiedResponseMutation): WAAICommon.BotUnifiedResponseMutation;
        public static encode(m: WAAICommon.IBotUnifiedResponseMutation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotUnifiedResponseMutation;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotUnifiedResponseMutation;
        public static toObject(m: WAAICommon.BotUnifiedResponseMutation, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BotUnifiedResponseMutation {

        interface IMediaDetailsMetadata {
            ID?: (string|null);
            highResMedia?: (WAAICommon.IBotMediaMetadata|null);
            previewMedia?: (WAAICommon.IBotMediaMetadata|null);
        }

        class MediaDetailsMetadata implements IMediaDetailsMetadata {
            constructor(p?: WAAICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata);
            public ID?: (string|null);
            public highResMedia?: (WAAICommon.IBotMediaMetadata|null);
            public previewMedia?: (WAAICommon.IBotMediaMetadata|null);
            public static create(properties?: WAAICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata): WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;
            public static encode(m: WAAICommon.BotUnifiedResponseMutation.IMediaDetailsMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata;
            public static toObject(m: WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISideBySideMetadata {
            primaryResponseID?: (string|null);
            surveyCtaHasRendered?: (boolean|null);
        }

        class SideBySideMetadata implements ISideBySideMetadata {
            constructor(p?: WAAICommon.BotUnifiedResponseMutation.ISideBySideMetadata);
            public primaryResponseID?: (string|null);
            public surveyCtaHasRendered?: (boolean|null);
            public static create(properties?: WAAICommon.BotUnifiedResponseMutation.ISideBySideMetadata): WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata;
            public static encode(m: WAAICommon.BotUnifiedResponseMutation.ISideBySideMetadata, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata;
            public static fromObject(d: { [k: string]: any }): WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata;
            public static toObject(m: WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IAIMediaCollectionMetadata {
        collectionID?: (string|null);
        uploadOrderIndex?: (number|null);
    }

    class AIMediaCollectionMetadata implements IAIMediaCollectionMetadata {
        constructor(p?: WAAICommon.IAIMediaCollectionMetadata);
        public collectionID?: (string|null);
        public uploadOrderIndex?: (number|null);
        public static create(properties?: WAAICommon.IAIMediaCollectionMetadata): WAAICommon.AIMediaCollectionMetadata;
        public static encode(m: WAAICommon.IAIMediaCollectionMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIMediaCollectionMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AIMediaCollectionMetadata;
        public static toObject(m: WAAICommon.AIMediaCollectionMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIMediaCollectionMessage {
        collectionID?: (string|null);
        expectedMediaCount?: (number|null);
        hasGlobalCaption?: (boolean|null);
    }

    class AIMediaCollectionMessage implements IAIMediaCollectionMessage {
        constructor(p?: WAAICommon.IAIMediaCollectionMessage);
        public collectionID?: (string|null);
        public expectedMediaCount?: (number|null);
        public hasGlobalCaption?: (boolean|null);
        public static create(properties?: WAAICommon.IAIMediaCollectionMessage): WAAICommon.AIMediaCollectionMessage;
        public static encode(m: WAAICommon.IAIMediaCollectionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIMediaCollectionMessage;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AIMediaCollectionMessage;
        public static toObject(m: WAAICommon.AIMediaCollectionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotCommandMetadata {
        commandName?: (string|null);
        commandDescription?: (string|null);
        commandPrompt?: (string|null);
    }

    class BotCommandMetadata implements IBotCommandMetadata {
        constructor(p?: WAAICommon.IBotCommandMetadata);
        public commandName?: (string|null);
        public commandDescription?: (string|null);
        public commandPrompt?: (string|null);
        public static create(properties?: WAAICommon.IBotCommandMetadata): WAAICommon.BotCommandMetadata;
        public static encode(m: WAAICommon.IBotCommandMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotCommandMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotCommandMetadata;
        public static toObject(m: WAAICommon.BotCommandMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotResolvedToolCallMetadata {
        toolCallID?: (string|null);
        resolutionDataSerialized?: (string|null);
    }

    class BotResolvedToolCallMetadata implements IBotResolvedToolCallMetadata {
        constructor(p?: WAAICommon.IBotResolvedToolCallMetadata);
        public toolCallID?: (string|null);
        public resolutionDataSerialized?: (string|null);
        public static create(properties?: WAAICommon.IBotResolvedToolCallMetadata): WAAICommon.BotResolvedToolCallMetadata;
        public static encode(m: WAAICommon.IBotResolvedToolCallMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotResolvedToolCallMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotResolvedToolCallMetadata;
        public static toObject(m: WAAICommon.BotResolvedToolCallMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotMetadata {
        personaID?: (string|null);
        pluginMetadata?: (WAAICommon.IBotPluginMetadata|null);
        suggestedPromptMetadata?: (WAAICommon.IBotSuggestedPromptMetadata|null);
        invokerJID?: (string|null);
        sessionMetadata?: (WAAICommon.IBotSessionMetadata|null);
        memuMetadata?: (WAAICommon.IBotMemuMetadata|null);
        timezone?: (string|null);
        reminderMetadata?: (WAAICommon.IBotReminderMetadata|null);
        modelMetadata?: (WAAICommon.IBotModelMetadata|null);
        messageDisclaimerText?: (string|null);
        progressIndicatorMetadata?: (WAAICommon.IBotProgressIndicatorMetadata|null);
        capabilityMetadata?: (WAAICommon.IBotCapabilityMetadata|null);
        imagineMetadata?: (WAAICommon.IBotImagineMetadata|null);
        memoryMetadata?: (WAAICommon.IBotMemoryMetadata|null);
        renderingMetadata?: (WAAICommon.IBotRenderingMetadata|null);
        botMetricsMetadata?: (WAAICommon.IBotMetricsMetadata|null);
        botLinkedAccountsMetadata?: (WAAICommon.IBotLinkedAccountsMetadata|null);
        richResponseSourcesMetadata?: (WAAICommon.IBotSourcesMetadata|null);
        aiConversationContext?: (Uint8Array|null);
        botPromotionMessageMetadata?: (WAAICommon.IBotPromotionMessageMetadata|null);
        botModeSelectionMetadata?: (WAAICommon.IBotModeSelectionMetadata|null);
        botQuotaMetadata?: (WAAICommon.IBotQuotaMetadata|null);
        botAgeCollectionMetadata?: (WAAICommon.IBotAgeCollectionMetadata|null);
        conversationStarterPromptID?: (string|null);
        botResponseID?: (string|null);
        verificationMetadata?: (WAAICommon.IBotSignatureVerificationMetadata|null);
        unifiedResponseMutation?: (WAAICommon.IBotUnifiedResponseMutation|null);
        botMessageOriginMetadata?: (WAAICommon.IBotMessageOriginMetadata|null);
        inThreadSurveyMetadata?: (WAAICommon.IInThreadSurveyMetadata|null);
        botThreadInfo?: (WAAICommon.IAIThreadInfo|null);
        regenerateMetadata?: (WAAICommon.IAIRegenerateMetadata|null);
        sessionTransparencyMetadata?: (WAAICommon.ISessionTransparencyMetadata|null);
        botDocumentMessageMetadata?: (WAAICommon.IBotDocumentMessageMetadata|null);
        botGroupMetadata?: (WAAICommon.IBotGroupMetadata|null);
        botRenderingConfigMetadata?: (WAAICommon.IBotRenderingConfigMetadata|null);
        botInfrastructureDiagnostics?: (WAAICommon.IBotInfrastructureDiagnostics|null);
        aiMediaCollectionMetadata?: (WAAICommon.IAIMediaCollectionMetadata|null);
        commandMetadata?: (WAAICommon.IBotCommandMetadata|null);
        resolvedToolCallMetadata?: (WAAICommon.IBotResolvedToolCallMetadata|null);
        subscriptionUpsellMetadata?: (WAAICommon.IAISubscriptionUpsellMetadata|null);
        internalMetadata?: (Uint8Array|null);
    }

    class BotMetadata implements IBotMetadata {
        constructor(p?: WAAICommon.IBotMetadata);
        public personaID?: (string|null);
        public pluginMetadata?: (WAAICommon.IBotPluginMetadata|null);
        public suggestedPromptMetadata?: (WAAICommon.IBotSuggestedPromptMetadata|null);
        public invokerJID?: (string|null);
        public sessionMetadata?: (WAAICommon.IBotSessionMetadata|null);
        public memuMetadata?: (WAAICommon.IBotMemuMetadata|null);
        public timezone?: (string|null);
        public reminderMetadata?: (WAAICommon.IBotReminderMetadata|null);
        public modelMetadata?: (WAAICommon.IBotModelMetadata|null);
        public messageDisclaimerText?: (string|null);
        public progressIndicatorMetadata?: (WAAICommon.IBotProgressIndicatorMetadata|null);
        public capabilityMetadata?: (WAAICommon.IBotCapabilityMetadata|null);
        public imagineMetadata?: (WAAICommon.IBotImagineMetadata|null);
        public memoryMetadata?: (WAAICommon.IBotMemoryMetadata|null);
        public renderingMetadata?: (WAAICommon.IBotRenderingMetadata|null);
        public botMetricsMetadata?: (WAAICommon.IBotMetricsMetadata|null);
        public botLinkedAccountsMetadata?: (WAAICommon.IBotLinkedAccountsMetadata|null);
        public richResponseSourcesMetadata?: (WAAICommon.IBotSourcesMetadata|null);
        public aiConversationContext?: (Uint8Array|null);
        public botPromotionMessageMetadata?: (WAAICommon.IBotPromotionMessageMetadata|null);
        public botModeSelectionMetadata?: (WAAICommon.IBotModeSelectionMetadata|null);
        public botQuotaMetadata?: (WAAICommon.IBotQuotaMetadata|null);
        public botAgeCollectionMetadata?: (WAAICommon.IBotAgeCollectionMetadata|null);
        public conversationStarterPromptID?: (string|null);
        public botResponseID?: (string|null);
        public verificationMetadata?: (WAAICommon.IBotSignatureVerificationMetadata|null);
        public unifiedResponseMutation?: (WAAICommon.IBotUnifiedResponseMutation|null);
        public botMessageOriginMetadata?: (WAAICommon.IBotMessageOriginMetadata|null);
        public inThreadSurveyMetadata?: (WAAICommon.IInThreadSurveyMetadata|null);
        public botThreadInfo?: (WAAICommon.IAIThreadInfo|null);
        public regenerateMetadata?: (WAAICommon.IAIRegenerateMetadata|null);
        public sessionTransparencyMetadata?: (WAAICommon.ISessionTransparencyMetadata|null);
        public botDocumentMessageMetadata?: (WAAICommon.IBotDocumentMessageMetadata|null);
        public botGroupMetadata?: (WAAICommon.IBotGroupMetadata|null);
        public botRenderingConfigMetadata?: (WAAICommon.IBotRenderingConfigMetadata|null);
        public botInfrastructureDiagnostics?: (WAAICommon.IBotInfrastructureDiagnostics|null);
        public aiMediaCollectionMetadata?: (WAAICommon.IAIMediaCollectionMetadata|null);
        public commandMetadata?: (WAAICommon.IBotCommandMetadata|null);
        public resolvedToolCallMetadata?: (WAAICommon.IBotResolvedToolCallMetadata|null);
        public subscriptionUpsellMetadata?: (WAAICommon.IAISubscriptionUpsellMetadata|null);
        public internalMetadata?: (Uint8Array|null);
        public static create(properties?: WAAICommon.IBotMetadata): WAAICommon.BotMetadata;
        public static encode(m: WAAICommon.IBotMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMetadata;
        public static toObject(m: WAAICommon.BotMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAISubscriptionUpsellMetadata {
        requestType?: (WAAICommon.AISubscriptionRequestType|null);
    }

    class AISubscriptionUpsellMetadata implements IAISubscriptionUpsellMetadata {
        constructor(p?: WAAICommon.IAISubscriptionUpsellMetadata);
        public requestType?: (WAAICommon.AISubscriptionRequestType|null);
        public static create(properties?: WAAICommon.IAISubscriptionUpsellMetadata): WAAICommon.AISubscriptionUpsellMetadata;
        public static encode(m: WAAICommon.IAISubscriptionUpsellMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AISubscriptionUpsellMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AISubscriptionUpsellMetadata;
        public static toObject(m: WAAICommon.AISubscriptionUpsellMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotGroupMetadata {
        participantsMetadata?: (WAAICommon.IBotGroupParticipantMetadata[]|null);
    }

    class BotGroupMetadata implements IBotGroupMetadata {
        constructor(p?: WAAICommon.IBotGroupMetadata);
        public participantsMetadata: WAAICommon.IBotGroupParticipantMetadata[];
        public static create(properties?: WAAICommon.IBotGroupMetadata): WAAICommon.BotGroupMetadata;
        public static encode(m: WAAICommon.IBotGroupMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotGroupMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotGroupMetadata;
        public static toObject(m: WAAICommon.BotGroupMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotRenderingConfigMetadata {
        bloksVersioningID?: (string|null);
        pixelDensity?: (number|null);
    }

    class BotRenderingConfigMetadata implements IBotRenderingConfigMetadata {
        constructor(p?: WAAICommon.IBotRenderingConfigMetadata);
        public bloksVersioningID?: (string|null);
        public pixelDensity?: (number|null);
        public static create(properties?: WAAICommon.IBotRenderingConfigMetadata): WAAICommon.BotRenderingConfigMetadata;
        public static encode(m: WAAICommon.IBotRenderingConfigMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotRenderingConfigMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotRenderingConfigMetadata;
        public static toObject(m: WAAICommon.BotRenderingConfigMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotGroupParticipantMetadata {
        botFbid?: (string|null);
    }

    class BotGroupParticipantMetadata implements IBotGroupParticipantMetadata {
        constructor(p?: WAAICommon.IBotGroupParticipantMetadata);
        public botFbid?: (string|null);
        public static create(properties?: WAAICommon.IBotGroupParticipantMetadata): WAAICommon.BotGroupParticipantMetadata;
        public static encode(m: WAAICommon.IBotGroupParticipantMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotGroupParticipantMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotGroupParticipantMetadata;
        public static toObject(m: WAAICommon.BotGroupParticipantMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IForwardedAIBotMessageInfo {
        botName?: (string|null);
        botJID?: (string|null);
        creatorName?: (string|null);
    }

    class ForwardedAIBotMessageInfo implements IForwardedAIBotMessageInfo {
        constructor(p?: WAAICommon.IForwardedAIBotMessageInfo);
        public botName?: (string|null);
        public botJID?: (string|null);
        public creatorName?: (string|null);
        public static create(properties?: WAAICommon.IForwardedAIBotMessageInfo): WAAICommon.ForwardedAIBotMessageInfo;
        public static encode(m: WAAICommon.IForwardedAIBotMessageInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.ForwardedAIBotMessageInfo;
        public static fromObject(d: { [k: string]: any }): WAAICommon.ForwardedAIBotMessageInfo;
        public static toObject(m: WAAICommon.ForwardedAIBotMessageInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotMessageSharingInfo {
        botEntryPointOrigin?: (WAAICommon.BotMetricsEntryPoint|null);
        forwardScore?: (number|null);
    }

    class BotMessageSharingInfo implements IBotMessageSharingInfo {
        constructor(p?: WAAICommon.IBotMessageSharingInfo);
        public botEntryPointOrigin?: (WAAICommon.BotMetricsEntryPoint|null);
        public forwardScore?: (number|null);
        public static create(properties?: WAAICommon.IBotMessageSharingInfo): WAAICommon.BotMessageSharingInfo;
        public static encode(m: WAAICommon.IBotMessageSharingInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotMessageSharingInfo;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotMessageSharingInfo;
        public static toObject(m: WAAICommon.BotMessageSharingInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIRichResponseUnifiedResponse {
        data?: (Uint8Array|null);
    }

    class AIRichResponseUnifiedResponse implements IAIRichResponseUnifiedResponse {
        constructor(p?: WAAICommon.IAIRichResponseUnifiedResponse);
        public data?: (Uint8Array|null);
        public static create(properties?: WAAICommon.IAIRichResponseUnifiedResponse): WAAICommon.AIRichResponseUnifiedResponse;
        public static encode(m: WAAICommon.IAIRichResponseUnifiedResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIRichResponseUnifiedResponse;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AIRichResponseUnifiedResponse;
        public static toObject(m: WAAICommon.AIRichResponseUnifiedResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAIRegenerateMetadata {
        messageKey?: (WACommon.IMessageKey|null);
        responseTimestampMS?: (number|Long|null);
    }

    class AIRegenerateMetadata implements IAIRegenerateMetadata {
        constructor(p?: WAAICommon.IAIRegenerateMetadata);
        public messageKey?: (WACommon.IMessageKey|null);
        public responseTimestampMS?: (number|Long|null);
        public static create(properties?: WAAICommon.IAIRegenerateMetadata): WAAICommon.AIRegenerateMetadata;
        public static encode(m: WAAICommon.IAIRegenerateMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.AIRegenerateMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.AIRegenerateMetadata;
        public static toObject(m: WAAICommon.AIRegenerateMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISessionTransparencyMetadata {
        disclaimerText?: (string|null);
        hcaID?: (string|null);
        sessionTransparencyType?: (WAAICommon.SessionTransparencyType|null);
    }

    class SessionTransparencyMetadata implements ISessionTransparencyMetadata {
        constructor(p?: WAAICommon.ISessionTransparencyMetadata);
        public disclaimerText?: (string|null);
        public hcaID?: (string|null);
        public sessionTransparencyType?: (WAAICommon.SessionTransparencyType|null);
        public static create(properties?: WAAICommon.ISessionTransparencyMetadata): WAAICommon.SessionTransparencyMetadata;
        public static encode(m: WAAICommon.ISessionTransparencyMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.SessionTransparencyMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.SessionTransparencyMetadata;
        public static toObject(m: WAAICommon.SessionTransparencyMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotAgentMetadata {
        deepLinkMetadata?: (WAAICommon.IBotAgentDeepLinkMetadata|null);
    }

    class BotAgentMetadata implements IBotAgentMetadata {
        constructor(p?: WAAICommon.IBotAgentMetadata);
        public deepLinkMetadata?: (WAAICommon.IBotAgentDeepLinkMetadata|null);
        public static create(properties?: WAAICommon.IBotAgentMetadata): WAAICommon.BotAgentMetadata;
        public static encode(m: WAAICommon.IBotAgentMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotAgentMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotAgentMetadata;
        public static toObject(m: WAAICommon.BotAgentMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotAgentDeepLinkMetadata {
        token?: (string|null);
    }

    class BotAgentDeepLinkMetadata implements IBotAgentDeepLinkMetadata {
        constructor(p?: WAAICommon.IBotAgentDeepLinkMetadata);
        public token?: (string|null);
        public static create(properties?: WAAICommon.IBotAgentDeepLinkMetadata): WAAICommon.BotAgentDeepLinkMetadata;
        public static encode(m: WAAICommon.IBotAgentDeepLinkMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAAICommon.BotAgentDeepLinkMetadata;
        public static fromObject(d: { [k: string]: any }): WAAICommon.BotAgentDeepLinkMetadata;
        public static toObject(m: WAAICommon.BotAgentDeepLinkMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}


