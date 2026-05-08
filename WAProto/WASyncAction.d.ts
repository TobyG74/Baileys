import { WAChatLockSettings } from './WAChatLockSettings.d';

import { WADeviceCapabilities } from './WADeviceCapabilities.d';

import { WACommon } from './WACommon.d';import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WASyncAction {

    enum CollectionName {
        COLLECTION_NAME_UNKNOWN = 0,
        REGULAR = 1,
        REGULAR_LOW = 2,
        REGULAR_HIGH = 3,
        CRITICAL_BLOCK = 4,
        CRITICAL_UNBLOCK_LOW = 5
    }

    enum MutationProps {
        STAR_ACTION = 2,
        CONTACT_ACTION = 3,
        MUTE_ACTION = 4,
        PIN_ACTION = 5,
        SECURITY_NOTIFICATION_SETTING = 6,
        PUSH_NAME_SETTING = 7,
        QUICK_REPLY_ACTION = 8,
        RECENT_EMOJI_WEIGHTS_ACTION = 11,
        LABEL_MESSAGE_ACTION = 13,
        LABEL_EDIT_ACTION = 14,
        LABEL_ASSOCIATION_ACTION = 15,
        LOCALE_SETTING = 16,
        ARCHIVE_CHAT_ACTION = 17,
        DELETE_MESSAGE_FOR_ME_ACTION = 18,
        KEY_EXPIRATION = 19,
        MARK_CHAT_AS_READ_ACTION = 20,
        CLEAR_CHAT_ACTION = 21,
        DELETE_CHAT_ACTION = 22,
        UNARCHIVE_CHATS_SETTING = 23,
        PRIMARY_FEATURE = 24,
        ANDROID_UNSUPPORTED_ACTIONS = 26,
        AGENT_ACTION = 27,
        SUBSCRIPTION_ACTION = 28,
        USER_STATUS_MUTE_ACTION = 29,
        TIME_FORMAT_ACTION = 30,
        NUX_ACTION = 31,
        PRIMARY_VERSION_ACTION = 32,
        STICKER_ACTION = 33,
        REMOVE_RECENT_STICKER_ACTION = 34,
        CHAT_ASSIGNMENT = 35,
        CHAT_ASSIGNMENT_OPENED_STATUS = 36,
        PN_FOR_LID_CHAT_ACTION = 37,
        MARKETING_MESSAGE_ACTION = 38,
        MARKETING_MESSAGE_BROADCAST_ACTION = 39,
        EXTERNAL_WEB_BETA_ACTION = 40,
        PRIVACY_SETTING_RELAY_ALL_CALLS = 41,
        CALL_LOG_ACTION = 42,
        UGC_BOT = 43,
        STATUS_PRIVACY = 44,
        BOT_WELCOME_REQUEST_ACTION = 45,
        DELETE_INDIVIDUAL_CALL_LOG = 46,
        LABEL_REORDERING_ACTION = 47,
        PAYMENT_INFO_ACTION = 48,
        CUSTOM_PAYMENT_METHODS_ACTION = 49,
        LOCK_CHAT_ACTION = 50,
        CHAT_LOCK_SETTINGS = 51,
        WAMO_USER_IDENTIFIER_ACTION = 52,
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION = 53,
        DEVICE_CAPABILITIES = 54,
        NOTE_EDIT_ACTION = 55,
        FAVORITES_ACTION = 56,
        MERCHANT_PAYMENT_PARTNER_ACTION = 57,
        WAFFLE_ACCOUNT_LINK_STATE_ACTION = 58,
        USERNAME_CHAT_START_MODE = 59,
        NOTIFICATION_ACTIVITY_SETTING_ACTION = 60,
        LID_CONTACT_ACTION = 61,
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION = 62,
        PAYMENT_TOS_ACTION = 63,
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION = 64,
        BUSINESS_BROADCAST_ASSOCIATION_ACTION = 65,
        DETECTED_OUTCOMES_STATUS_ACTION = 66,
        MAIBA_AI_FEATURES_CONTROL_ACTION = 68,
        BUSINESS_BROADCAST_LIST_ACTION = 69,
        MUSIC_USER_ID_ACTION = 70,
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION = 71,
        AVATAR_UPDATED_ACTION = 72,
        GALAXY_FLOW_ACTION = 73,
        PRIVATE_PROCESSING_SETTING_ACTION = 74,
        NEWSLETTER_SAVED_INTERESTS_ACTION = 75,
        AI_THREAD_RENAME_ACTION = 76,
        INTERACTIVE_MESSAGE_ACTION = 77,
        SETTINGS_SYNC_ACTION = 78,
        OUT_CONTACT_ACTION = 79,
        NCT_SALT_SYNC_ACTION = 80,
        BUSINESS_BROADCAST_CAMPAIGN_ACTION = 81,
        BUSINESS_BROADCAST_INSIGHTS_ACTION = 82,
        CUSTOMER_DATA_ACTION = 83,
        SUBSCRIPTIONS_SYNC_V2_ACTION = 84,
        THREAD_PIN_ACTION = 85,
        AUTO_ORGANIZE_BUSINESS_CHAT_SETTING = 86,
        BIZ_AI_SETTINGS_NUDGE_ACTION = 87,
        SHARE_OWN_PN = 10001,
        BUSINESS_BROADCAST_ACTION = 10002,
        AI_THREAD_DELETE_ACTION = 10003
    }

    enum BusinessBroadcastCampaignStatus {
        DRAFT = 1,
        SCHEDULED = 2,
        PROCESSING = 3,
        FAILED = 4,
        SENT = 5
    }

    interface ICallLogRecord {
        callResult?: (WASyncAction.CallLogRecord.CallResult|null);
        isDndMode?: (boolean|null);
        silenceReason?: (WASyncAction.CallLogRecord.SilenceReason|null);
        duration?: (number|Long|null);
        startTime?: (number|Long|null);
        isIncoming?: (boolean|null);
        isVideo?: (boolean|null);
        isCallLink?: (boolean|null);
        callLinkToken?: (string|null);
        scheduledCallID?: (string|null);
        callID?: (string|null);
        callCreatorJID?: (string|null);
        groupJID?: (string|null);
        participants?: (WASyncAction.CallLogRecord.IParticipantInfo[]|null);
        callType?: (WASyncAction.CallLogRecord.CallType|null);
    }

    class CallLogRecord implements ICallLogRecord {
        constructor(p?: WASyncAction.ICallLogRecord);
        public callResult?: (WASyncAction.CallLogRecord.CallResult|null);
        public isDndMode?: (boolean|null);
        public silenceReason?: (WASyncAction.CallLogRecord.SilenceReason|null);
        public duration?: (number|Long|null);
        public startTime?: (number|Long|null);
        public isIncoming?: (boolean|null);
        public isVideo?: (boolean|null);
        public isCallLink?: (boolean|null);
        public callLinkToken?: (string|null);
        public scheduledCallID?: (string|null);
        public callID?: (string|null);
        public callCreatorJID?: (string|null);
        public groupJID?: (string|null);
        public participants: WASyncAction.CallLogRecord.IParticipantInfo[];
        public callType?: (WASyncAction.CallLogRecord.CallType|null);
        public static create(properties?: WASyncAction.ICallLogRecord): WASyncAction.CallLogRecord;
        public static encode(m: WASyncAction.ICallLogRecord, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CallLogRecord;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CallLogRecord;
        public static toObject(m: WASyncAction.CallLogRecord, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CallLogRecord {

        enum CallType {
            REGULAR = 0,
            SCHEDULED_CALL = 1,
            VOICE_CHAT = 2
        }

        enum SilenceReason {
            NONE = 0,
            SCHEDULED = 1,
            PRIVACY = 2,
            LIGHTWEIGHT = 3
        }

        enum CallResult {
            CONNECTED = 0,
            REJECTED = 1,
            CANCELLED = 2,
            ACCEPTEDELSEWHERE = 3,
            MISSED = 4,
            INVALID = 5,
            UNAVAILABLE = 6,
            UPCOMING = 7,
            FAILED = 8,
            ABANDONED = 9,
            ONGOING = 10
        }

        interface IParticipantInfo {
            userJID?: (string|null);
            callResult?: (WASyncAction.CallLogRecord.CallResult|null);
        }

        class ParticipantInfo implements IParticipantInfo {
            constructor(p?: WASyncAction.CallLogRecord.IParticipantInfo);
            public userJID?: (string|null);
            public callResult?: (WASyncAction.CallLogRecord.CallResult|null);
            public static create(properties?: WASyncAction.CallLogRecord.IParticipantInfo): WASyncAction.CallLogRecord.ParticipantInfo;
            public static encode(m: WASyncAction.CallLogRecord.IParticipantInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CallLogRecord.ParticipantInfo;
            public static fromObject(d: { [k: string]: any }): WASyncAction.CallLogRecord.ParticipantInfo;
            public static toObject(m: WASyncAction.CallLogRecord.ParticipantInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface ISettingsSyncAction {
        startAtLogin?: (boolean|null);
        minimizeToTray?: (boolean|null);
        language?: (string|null);
        replaceTextWithEmoji?: (boolean|null);
        bannerNotificationDisplayMode?: (WASyncAction.SettingsSyncAction.DisplayMode|null);
        unreadCounterBadgeDisplayMode?: (WASyncAction.SettingsSyncAction.DisplayMode|null);
        isMessagesNotificationEnabled?: (boolean|null);
        isCallsNotificationEnabled?: (boolean|null);
        isReactionsNotificationEnabled?: (boolean|null);
        isStatusReactionsNotificationEnabled?: (boolean|null);
        isTextPreviewForNotificationEnabled?: (boolean|null);
        defaultNotificationToneID?: (number|null);
        groupDefaultNotificationToneID?: (number|null);
        appTheme?: (number|null);
        wallpaperID?: (number|null);
        isDoodleWallpaperEnabled?: (boolean|null);
        fontSize?: (number|null);
        isPhotosAutodownloadEnabled?: (boolean|null);
        isAudiosAutodownloadEnabled?: (boolean|null);
        isVideosAutodownloadEnabled?: (boolean|null);
        isDocumentsAutodownloadEnabled?: (boolean|null);
        disableLinkPreviews?: (boolean|null);
        notificationToneID?: (number|null);
        mediaUploadQuality?: (WASyncAction.SettingsSyncAction.MediaQualitySetting|null);
        isSpellCheckEnabled?: (boolean|null);
        isEnterToSendEnabled?: (boolean|null);
        isGroupMessageNotificationEnabled?: (boolean|null);
        isGroupReactionsNotificationEnabled?: (boolean|null);
        isStatusNotificationEnabled?: (boolean|null);
        statusNotificationToneID?: (number|null);
        shouldPlaySoundForCallNotification?: (boolean|null);
        chatThemeID?: (string|null);
        colorSchemeID?: (string|null);
    }

    class SettingsSyncAction implements ISettingsSyncAction {
        constructor(p?: WASyncAction.ISettingsSyncAction);
        public startAtLogin?: (boolean|null);
        public minimizeToTray?: (boolean|null);
        public language?: (string|null);
        public replaceTextWithEmoji?: (boolean|null);
        public bannerNotificationDisplayMode?: (WASyncAction.SettingsSyncAction.DisplayMode|null);
        public unreadCounterBadgeDisplayMode?: (WASyncAction.SettingsSyncAction.DisplayMode|null);
        public isMessagesNotificationEnabled?: (boolean|null);
        public isCallsNotificationEnabled?: (boolean|null);
        public isReactionsNotificationEnabled?: (boolean|null);
        public isStatusReactionsNotificationEnabled?: (boolean|null);
        public isTextPreviewForNotificationEnabled?: (boolean|null);
        public defaultNotificationToneID?: (number|null);
        public groupDefaultNotificationToneID?: (number|null);
        public appTheme?: (number|null);
        public wallpaperID?: (number|null);
        public isDoodleWallpaperEnabled?: (boolean|null);
        public fontSize?: (number|null);
        public isPhotosAutodownloadEnabled?: (boolean|null);
        public isAudiosAutodownloadEnabled?: (boolean|null);
        public isVideosAutodownloadEnabled?: (boolean|null);
        public isDocumentsAutodownloadEnabled?: (boolean|null);
        public disableLinkPreviews?: (boolean|null);
        public notificationToneID?: (number|null);
        public mediaUploadQuality?: (WASyncAction.SettingsSyncAction.MediaQualitySetting|null);
        public isSpellCheckEnabled?: (boolean|null);
        public isEnterToSendEnabled?: (boolean|null);
        public isGroupMessageNotificationEnabled?: (boolean|null);
        public isGroupReactionsNotificationEnabled?: (boolean|null);
        public isStatusNotificationEnabled?: (boolean|null);
        public statusNotificationToneID?: (number|null);
        public shouldPlaySoundForCallNotification?: (boolean|null);
        public chatThemeID?: (string|null);
        public colorSchemeID?: (string|null);
        public static create(properties?: WASyncAction.ISettingsSyncAction): WASyncAction.SettingsSyncAction;
        public static encode(m: WASyncAction.ISettingsSyncAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SettingsSyncAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SettingsSyncAction;
        public static toObject(m: WASyncAction.SettingsSyncAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SettingsSyncAction {

        enum MediaQualitySetting {
            MEDIA_QUALITY_UNKNOWN = 0,
            STANDARD = 1,
            HD = 2
        }

        enum DisplayMode {
            DISPLAY_MODE_UNKNOWN = 0,
            ALWAYS = 1,
            NEVER = 2,
            ONLY_WHEN_APP_IS_OPEN = 3
        }

        enum SettingKey {
            SETTING_KEY_UNKNOWN = 0,
            START_AT_LOGIN = 1,
            MINIMIZE_TO_TRAY = 2,
            LANGUAGE = 3,
            REPLACE_TEXT_WITH_EMOJI = 4,
            BANNER_NOTIFICATION_DISPLAY_MODE = 5,
            UNREAD_COUNTER_BADGE_DISPLAY_MODE = 6,
            IS_MESSAGES_NOTIFICATION_ENABLED = 7,
            IS_CALLS_NOTIFICATION_ENABLED = 8,
            IS_REACTIONS_NOTIFICATION_ENABLED = 9,
            IS_STATUS_REACTIONS_NOTIFICATION_ENABLED = 10,
            IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED = 11,
            DEFAULT_NOTIFICATION_TONE_ID = 12,
            GROUP_DEFAULT_NOTIFICATION_TONE_ID = 13,
            APP_THEME = 14,
            WALLPAPER_ID = 15,
            IS_DOODLE_WALLPAPER_ENABLED = 16,
            FONT_SIZE = 17,
            IS_PHOTOS_AUTODOWNLOAD_ENABLED = 18,
            IS_AUDIOS_AUTODOWNLOAD_ENABLED = 19,
            IS_VIDEOS_AUTODOWNLOAD_ENABLED = 20,
            IS_DOCUMENTS_AUTODOWNLOAD_ENABLED = 21,
            DISABLE_LINK_PREVIEWS = 22,
            NOTIFICATION_TONE_ID = 23,
            MEDIA_UPLOAD_QUALITY = 24,
            IS_SPELL_CHECK_ENABLED = 25,
            IS_ENTER_TO_SEND_ENABLED = 26,
            IS_GROUP_MESSAGE_NOTIFICATION_ENABLED = 27,
            IS_GROUP_REACTIONS_NOTIFICATION_ENABLED = 28,
            IS_STATUS_NOTIFICATION_ENABLED = 29,
            STATUS_NOTIFICATION_TONE_ID = 30,
            SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION = 31,
            CHAT_THEME_ID = 32,
            COLOR_SCHEME_ID = 33
        }

        enum SettingPlatform {
            PLATFORM_UNKNOWN = 0,
            WEB = 1,
            HYBRID = 2,
            WINDOWS = 3,
            MAC = 4
        }
    }

    interface IInteractiveMessageAction {
        type?: (WASyncAction.InteractiveMessageAction.InteractiveMessageActionMode|null);
        agmID?: (string|null);
    }

    class InteractiveMessageAction implements IInteractiveMessageAction {
        constructor(p?: WASyncAction.IInteractiveMessageAction);
        public type?: (WASyncAction.InteractiveMessageAction.InteractiveMessageActionMode|null);
        public agmID?: (string|null);
        public static create(properties?: WASyncAction.IInteractiveMessageAction): WASyncAction.InteractiveMessageAction;
        public static encode(m: WASyncAction.IInteractiveMessageAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.InteractiveMessageAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.InteractiveMessageAction;
        public static toObject(m: WASyncAction.InteractiveMessageAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace InteractiveMessageAction {

        enum InteractiveMessageActionMode {
            DISABLE_CTA = 1
        }
    }

    interface IPrivateProcessingSettingAction {
        privateProcessingStatus?: (WASyncAction.PrivateProcessingSettingAction.PrivateProcessingStatus|null);
    }

    class PrivateProcessingSettingAction implements IPrivateProcessingSettingAction {
        constructor(p?: WASyncAction.IPrivateProcessingSettingAction);
        public privateProcessingStatus?: (WASyncAction.PrivateProcessingSettingAction.PrivateProcessingStatus|null);
        public static create(properties?: WASyncAction.IPrivateProcessingSettingAction): WASyncAction.PrivateProcessingSettingAction;
        public static encode(m: WASyncAction.IPrivateProcessingSettingAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PrivateProcessingSettingAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PrivateProcessingSettingAction;
        public static toObject(m: WASyncAction.PrivateProcessingSettingAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PrivateProcessingSettingAction {

        enum PrivateProcessingStatus {
            UNDEFINED = 0,
            ENABLED = 1,
            DISABLED = 2
        }
    }

    interface IAvatarUpdatedAction {
        eventType?: (WASyncAction.AvatarUpdatedAction.AvatarEventType|null);
        recentAvatarStickers?: (WASyncAction.IStickerAction[]|null);
    }

    class AvatarUpdatedAction implements IAvatarUpdatedAction {
        constructor(p?: WASyncAction.IAvatarUpdatedAction);
        public eventType?: (WASyncAction.AvatarUpdatedAction.AvatarEventType|null);
        public recentAvatarStickers: WASyncAction.IStickerAction[];
        public static create(properties?: WASyncAction.IAvatarUpdatedAction): WASyncAction.AvatarUpdatedAction;
        public static encode(m: WASyncAction.IAvatarUpdatedAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.AvatarUpdatedAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.AvatarUpdatedAction;
        public static toObject(m: WASyncAction.AvatarUpdatedAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AvatarUpdatedAction {

        enum AvatarEventType {
            UPDATED = 0,
            CREATED = 1,
            DELETED = 2
        }
    }

    interface IBizAISettingsNudgeAction {
        category?: (WASyncAction.BizAISettingsNudgeAction.BizAISettingsCategory|null);
        version?: (number|Long|null);
        updatedAtMS?: (number|Long|null);
    }

    class BizAISettingsNudgeAction implements IBizAISettingsNudgeAction {
        constructor(p?: WASyncAction.IBizAISettingsNudgeAction);
        public category?: (WASyncAction.BizAISettingsNudgeAction.BizAISettingsCategory|null);
        public version?: (number|Long|null);
        public updatedAtMS?: (number|Long|null);
        public static create(properties?: WASyncAction.IBizAISettingsNudgeAction): WASyncAction.BizAISettingsNudgeAction;
        public static encode(m: WASyncAction.IBizAISettingsNudgeAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BizAISettingsNudgeAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BizAISettingsNudgeAction;
        public static toObject(m: WASyncAction.BizAISettingsNudgeAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BizAISettingsNudgeAction {

        enum BizAISettingsCategory {
            UNKNOWN = 0,
            INSTRUCTIONS = 1,
            RESPONSE_SETTINGS = 2,
            EXAMPLE_RESPONSES = 3,
            KNOWLEDGE = 4,
            LEAD_GEN = 5
        }
    }

    interface IMaibaAIFeaturesControlAction {
        aiFeatureStatus?: (WASyncAction.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus|null);
    }

    class MaibaAIFeaturesControlAction implements IMaibaAIFeaturesControlAction {
        constructor(p?: WASyncAction.IMaibaAIFeaturesControlAction);
        public aiFeatureStatus?: (WASyncAction.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus|null);
        public static create(properties?: WASyncAction.IMaibaAIFeaturesControlAction): WASyncAction.MaibaAIFeaturesControlAction;
        public static encode(m: WASyncAction.IMaibaAIFeaturesControlAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MaibaAIFeaturesControlAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MaibaAIFeaturesControlAction;
        public static toObject(m: WASyncAction.MaibaAIFeaturesControlAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MaibaAIFeaturesControlAction {

        enum MaibaAIFeatureStatus {
            ENABLED = 0,
            ENABLED_HAS_LEARNING = 1,
            DISABLED = 2
        }
    }

    interface IPaymentTosAction {
        paymentNotice?: (WASyncAction.PaymentTosAction.PaymentNotice|null);
        accepted?: (boolean|null);
    }

    class PaymentTosAction implements IPaymentTosAction {
        constructor(p?: WASyncAction.IPaymentTosAction);
        public paymentNotice?: (WASyncAction.PaymentTosAction.PaymentNotice|null);
        public accepted?: (boolean|null);
        public static create(properties?: WASyncAction.IPaymentTosAction): WASyncAction.PaymentTosAction;
        public static encode(m: WASyncAction.IPaymentTosAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PaymentTosAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PaymentTosAction;
        public static toObject(m: WASyncAction.PaymentTosAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PaymentTosAction {

        enum PaymentNotice {
            BR_PAY_PRIVACY_POLICY = 0
        }
    }

    interface INotificationActivitySettingAction {
        notificationActivitySetting?: (WASyncAction.NotificationActivitySettingAction.NotificationActivitySetting|null);
    }

    class NotificationActivitySettingAction implements INotificationActivitySettingAction {
        constructor(p?: WASyncAction.INotificationActivitySettingAction);
        public notificationActivitySetting?: (WASyncAction.NotificationActivitySettingAction.NotificationActivitySetting|null);
        public static create(properties?: WASyncAction.INotificationActivitySettingAction): WASyncAction.NotificationActivitySettingAction;
        public static encode(m: WASyncAction.INotificationActivitySettingAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.NotificationActivitySettingAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.NotificationActivitySettingAction;
        public static toObject(m: WASyncAction.NotificationActivitySettingAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace NotificationActivitySettingAction {

        enum NotificationActivitySetting {
            DEFAULT_ALL_MESSAGES = 0,
            ALL_MESSAGES = 1,
            HIGHLIGHTS = 2,
            DEFAULT_HIGHLIGHTS = 3
        }
    }

    interface IWaffleAccountLinkStateAction {
        linkState?: (WASyncAction.WaffleAccountLinkStateAction.AccountLinkState|null);
    }

    class WaffleAccountLinkStateAction implements IWaffleAccountLinkStateAction {
        constructor(p?: WASyncAction.IWaffleAccountLinkStateAction);
        public linkState?: (WASyncAction.WaffleAccountLinkStateAction.AccountLinkState|null);
        public static create(properties?: WASyncAction.IWaffleAccountLinkStateAction): WASyncAction.WaffleAccountLinkStateAction;
        public static encode(m: WASyncAction.IWaffleAccountLinkStateAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.WaffleAccountLinkStateAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.WaffleAccountLinkStateAction;
        public static toObject(m: WASyncAction.WaffleAccountLinkStateAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WaffleAccountLinkStateAction {

        enum AccountLinkState {
            ACTIVE = 0,
            PAUSED = 1,
            UNLINKED = 2
        }
    }

    interface IMerchantPaymentPartnerAction {
        status?: (WASyncAction.MerchantPaymentPartnerAction.Status|null);
        country?: (string|null);
        gatewayName?: (string|null);
        credentialID?: (string|null);
    }

    class MerchantPaymentPartnerAction implements IMerchantPaymentPartnerAction {
        constructor(p?: WASyncAction.IMerchantPaymentPartnerAction);
        public status?: (WASyncAction.MerchantPaymentPartnerAction.Status|null);
        public country?: (string|null);
        public gatewayName?: (string|null);
        public credentialID?: (string|null);
        public static create(properties?: WASyncAction.IMerchantPaymentPartnerAction): WASyncAction.MerchantPaymentPartnerAction;
        public static encode(m: WASyncAction.IMerchantPaymentPartnerAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MerchantPaymentPartnerAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MerchantPaymentPartnerAction;
        public static toObject(m: WASyncAction.MerchantPaymentPartnerAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MerchantPaymentPartnerAction {

        enum Status {
            ACTIVE = 0,
            INACTIVE = 1
        }
    }

    interface INoteEditAction {
        type?: (WASyncAction.NoteEditAction.NoteType|null);
        chatJID?: (string|null);
        createdAt?: (number|Long|null);
        deleted?: (boolean|null);
        unstructuredContent?: (string|null);
    }

    class NoteEditAction implements INoteEditAction {
        constructor(p?: WASyncAction.INoteEditAction);
        public type?: (WASyncAction.NoteEditAction.NoteType|null);
        public chatJID?: (string|null);
        public createdAt?: (number|Long|null);
        public deleted?: (boolean|null);
        public unstructuredContent?: (string|null);
        public static create(properties?: WASyncAction.INoteEditAction): WASyncAction.NoteEditAction;
        public static encode(m: WASyncAction.INoteEditAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.NoteEditAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.NoteEditAction;
        public static toObject(m: WASyncAction.NoteEditAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace NoteEditAction {

        enum NoteType {
            UNSTRUCTURED = 1,
            STRUCTURED = 2
        }
    }

    interface IStatusPrivacyAction {
        mode?: (WASyncAction.StatusPrivacyAction.StatusDistributionMode|null);
        userJID?: (string[]|null);
        shareToFB?: (boolean|null);
        shareToIG?: (boolean|null);
        customLists?: (WASyncAction.StatusPrivacyAction.ICustomList[]|null);
        modes?: (WASyncAction.StatusPrivacyAction.StatusDistributionMode[]|null);
    }

    class StatusPrivacyAction implements IStatusPrivacyAction {
        constructor(p?: WASyncAction.IStatusPrivacyAction);
        public mode?: (WASyncAction.StatusPrivacyAction.StatusDistributionMode|null);
        public userJID: string[];
        public shareToFB?: (boolean|null);
        public shareToIG?: (boolean|null);
        public customLists: WASyncAction.StatusPrivacyAction.ICustomList[];
        public modes: WASyncAction.StatusPrivacyAction.StatusDistributionMode[];
        public static create(properties?: WASyncAction.IStatusPrivacyAction): WASyncAction.StatusPrivacyAction;
        public static encode(m: WASyncAction.IStatusPrivacyAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.StatusPrivacyAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.StatusPrivacyAction;
        public static toObject(m: WASyncAction.StatusPrivacyAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusPrivacyAction {

        enum StatusDistributionMode {
            ALLOW_LIST = 0,
            DENY_LIST = 1,
            CONTACTS = 2,
            CLOSE_FRIENDS = 3,
            CUSTOM_LIST = 4
        }

        interface ICustomList {
            listID?: (string|null);
            name?: (string|null);
            emoji?: (string|null);
            isSelected?: (boolean|null);
            userJID?: (string[]|null);
        }

        class CustomList implements ICustomList {
            constructor(p?: WASyncAction.StatusPrivacyAction.ICustomList);
            public listID?: (string|null);
            public name?: (string|null);
            public emoji?: (string|null);
            public isSelected?: (boolean|null);
            public userJID: string[];
            public static create(properties?: WASyncAction.StatusPrivacyAction.ICustomList): WASyncAction.StatusPrivacyAction.CustomList;
            public static encode(m: WASyncAction.StatusPrivacyAction.ICustomList, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.StatusPrivacyAction.CustomList;
            public static fromObject(d: { [k: string]: any }): WASyncAction.StatusPrivacyAction.CustomList;
            public static toObject(m: WASyncAction.StatusPrivacyAction.CustomList, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IMarketingMessageAction {
        name?: (string|null);
        message?: (string|null);
        type?: (WASyncAction.MarketingMessageAction.MarketingMessagePrototypeType|null);
        createdAt?: (number|Long|null);
        lastSentAt?: (number|Long|null);
        isDeleted?: (boolean|null);
        mediaID?: (string|null);
    }

    class MarketingMessageAction implements IMarketingMessageAction {
        constructor(p?: WASyncAction.IMarketingMessageAction);
        public name?: (string|null);
        public message?: (string|null);
        public type?: (WASyncAction.MarketingMessageAction.MarketingMessagePrototypeType|null);
        public createdAt?: (number|Long|null);
        public lastSentAt?: (number|Long|null);
        public isDeleted?: (boolean|null);
        public mediaID?: (string|null);
        public static create(properties?: WASyncAction.IMarketingMessageAction): WASyncAction.MarketingMessageAction;
        public static encode(m: WASyncAction.IMarketingMessageAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MarketingMessageAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MarketingMessageAction;
        public static toObject(m: WASyncAction.MarketingMessageAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MarketingMessageAction {

        enum MarketingMessagePrototypeType {
            PERSONALIZED = 0
        }
    }

    interface IUsernameChatStartModeAction {
        chatStartMode?: (WASyncAction.UsernameChatStartModeAction.ChatStartMode|null);
    }

    class UsernameChatStartModeAction implements IUsernameChatStartModeAction {
        constructor(p?: WASyncAction.IUsernameChatStartModeAction);
        public chatStartMode?: (WASyncAction.UsernameChatStartModeAction.ChatStartMode|null);
        public static create(properties?: WASyncAction.IUsernameChatStartModeAction): WASyncAction.UsernameChatStartModeAction;
        public static encode(m: WASyncAction.IUsernameChatStartModeAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.UsernameChatStartModeAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.UsernameChatStartModeAction;
        public static toObject(m: WASyncAction.UsernameChatStartModeAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace UsernameChatStartModeAction {

        enum ChatStartMode {
            LID = 1,
            PN = 2
        }
    }

    interface ILabelEditAction {
        name?: (string|null);
        color?: (number|null);
        predefinedID?: (number|null);
        deleted?: (boolean|null);
        orderIndex?: (number|null);
        isActive?: (boolean|null);
        type?: (WASyncAction.LabelEditAction.ListType|null);
        isImmutable?: (boolean|null);
        muteEndTimeMS?: (number|Long|null);
    }

    class LabelEditAction implements ILabelEditAction {
        constructor(p?: WASyncAction.ILabelEditAction);
        public name?: (string|null);
        public color?: (number|null);
        public predefinedID?: (number|null);
        public deleted?: (boolean|null);
        public orderIndex?: (number|null);
        public isActive?: (boolean|null);
        public type?: (WASyncAction.LabelEditAction.ListType|null);
        public isImmutable?: (boolean|null);
        public muteEndTimeMS?: (number|Long|null);
        public static create(properties?: WASyncAction.ILabelEditAction): WASyncAction.LabelEditAction;
        public static encode(m: WASyncAction.ILabelEditAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.LabelEditAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.LabelEditAction;
        public static toObject(m: WASyncAction.LabelEditAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LabelEditAction {

        enum ListType {
            NONE = 0,
            UNREAD = 1,
            GROUPS = 2,
            FAVORITES = 3,
            PREDEFINED = 4,
            CUSTOM = 5,
            COMMUNITY = 6,
            SERVER_ASSIGNED = 7,
            DRAFTED = 8,
            AI_HANDOFF = 9,
            CHANNELS = 10,
            AI_RESPONDING = 11
        }
    }

    interface IPatchDebugData {
        currentLthash?: (Uint8Array|null);
        newLthash?: (Uint8Array|null);
        patchVersion?: (Uint8Array|null);
        collectionName?: (Uint8Array|null);
        firstFourBytesFromAHashOfSnapshotMACKey?: (Uint8Array|null);
        newLthashSubtract?: (Uint8Array|null);
        numberAdd?: (number|null);
        numberRemove?: (number|null);
        numberOverride?: (number|null);
        senderPlatform?: (WASyncAction.PatchDebugData.Platform|null);
        isSenderPrimary?: (boolean|null);
    }

    class PatchDebugData implements IPatchDebugData {
        constructor(p?: WASyncAction.IPatchDebugData);
        public currentLthash?: (Uint8Array|null);
        public newLthash?: (Uint8Array|null);
        public patchVersion?: (Uint8Array|null);
        public collectionName?: (Uint8Array|null);
        public firstFourBytesFromAHashOfSnapshotMACKey?: (Uint8Array|null);
        public newLthashSubtract?: (Uint8Array|null);
        public numberAdd?: (number|null);
        public numberRemove?: (number|null);
        public numberOverride?: (number|null);
        public senderPlatform?: (WASyncAction.PatchDebugData.Platform|null);
        public isSenderPrimary?: (boolean|null);
        public static create(properties?: WASyncAction.IPatchDebugData): WASyncAction.PatchDebugData;
        public static encode(m: WASyncAction.IPatchDebugData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PatchDebugData;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PatchDebugData;
        public static toObject(m: WASyncAction.PatchDebugData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PatchDebugData {

        enum Platform {
            ANDROID = 0,
            SMBA = 1,
            IPHONE = 2,
            SMBI = 3,
            WEB = 4,
            UWP = 5,
            DARWIN = 6,
            IPAD = 7,
            WEAROS = 8,
            WASG = 9,
            WEARM = 10,
            CAPI = 11
        }
    }

    interface IRecentEmojiWeight {
        emoji?: (string|null);
        weight?: (number|null);
    }

    class RecentEmojiWeight implements IRecentEmojiWeight {
        constructor(p?: WASyncAction.IRecentEmojiWeight);
        public emoji?: (string|null);
        public weight?: (number|null);
        public static create(properties?: WASyncAction.IRecentEmojiWeight): WASyncAction.RecentEmojiWeight;
        public static encode(m: WASyncAction.IRecentEmojiWeight, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.RecentEmojiWeight;
        public static fromObject(d: { [k: string]: any }): WASyncAction.RecentEmojiWeight;
        public static toObject(m: WASyncAction.RecentEmojiWeight, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncActionValue {
        timestamp?: (number|Long|null);
        starAction?: (WASyncAction.IStarAction|null);
        contactAction?: (WASyncAction.IContactAction|null);
        muteAction?: (WASyncAction.IMuteAction|null);
        pinAction?: (WASyncAction.IPinAction|null);
        pushNameSetting?: (WASyncAction.IPushNameSetting|null);
        quickReplyAction?: (WASyncAction.IQuickReplyAction|null);
        recentEmojiWeightsAction?: (WASyncAction.IRecentEmojiWeightsAction|null);
        labelEditAction?: (WASyncAction.ILabelEditAction|null);
        labelAssociationAction?: (WASyncAction.ILabelAssociationAction|null);
        localeSetting?: (WASyncAction.ILocaleSetting|null);
        archiveChatAction?: (WASyncAction.IArchiveChatAction|null);
        deleteMessageForMeAction?: (WASyncAction.IDeleteMessageForMeAction|null);
        keyExpiration?: (WASyncAction.IKeyExpiration|null);
        markChatAsReadAction?: (WASyncAction.IMarkChatAsReadAction|null);
        clearChatAction?: (WASyncAction.IClearChatAction|null);
        deleteChatAction?: (WASyncAction.IDeleteChatAction|null);
        unarchiveChatsSetting?: (WASyncAction.IUnarchiveChatsSetting|null);
        primaryFeature?: (WASyncAction.IPrimaryFeature|null);
        androidUnsupportedActions?: (WASyncAction.IAndroidUnsupportedActions|null);
        agentAction?: (WASyncAction.IAgentAction|null);
        subscriptionAction?: (WASyncAction.ISubscriptionAction|null);
        userStatusMuteAction?: (WASyncAction.IUserStatusMuteAction|null);
        timeFormatAction?: (WASyncAction.ITimeFormatAction|null);
        nuxAction?: (WASyncAction.INuxAction|null);
        primaryVersionAction?: (WASyncAction.IPrimaryVersionAction|null);
        stickerAction?: (WASyncAction.IStickerAction|null);
        removeRecentStickerAction?: (WASyncAction.IRemoveRecentStickerAction|null);
        chatAssignment?: (WASyncAction.IChatAssignmentAction|null);
        chatAssignmentOpenedStatus?: (WASyncAction.IChatAssignmentOpenedStatusAction|null);
        pnForLidChatAction?: (WASyncAction.IPnForLidChatAction|null);
        marketingMessageAction?: (WASyncAction.IMarketingMessageAction|null);
        marketingMessageBroadcastAction?: (WASyncAction.IMarketingMessageBroadcastAction|null);
        externalWebBetaAction?: (WASyncAction.IExternalWebBetaAction|null);
        privacySettingRelayAllCalls?: (WASyncAction.IPrivacySettingRelayAllCalls|null);
        callLogAction?: (WASyncAction.ICallLogAction|null);
        ugcBot?: (WASyncAction.IUGCBot|null);
        statusPrivacy?: (WASyncAction.IStatusPrivacyAction|null);
        botWelcomeRequestAction?: (WASyncAction.IBotWelcomeRequestAction|null);
        deleteIndividualCallLog?: (WASyncAction.IDeleteIndividualCallLogAction|null);
        labelReorderingAction?: (WASyncAction.ILabelReorderingAction|null);
        paymentInfoAction?: (WASyncAction.IPaymentInfoAction|null);
        customPaymentMethodsAction?: (WASyncAction.ICustomPaymentMethodsAction|null);
        lockChatAction?: (WASyncAction.ILockChatAction|null);
        chatLockSettings?: (WAChatLockSettings.IChatLockSettings|null);
        wamoUserIdentifierAction?: (WASyncAction.IWamoUserIdentifierAction|null);
        privacySettingDisableLinkPreviewsAction?: (WASyncAction.IPrivacySettingDisableLinkPreviewsAction|null);
        deviceCapabilities?: (WADeviceCapabilities.IDeviceCapabilities|null);
        noteEditAction?: (WASyncAction.INoteEditAction|null);
        favoritesAction?: (WASyncAction.IFavoritesAction|null);
        merchantPaymentPartnerAction?: (WASyncAction.IMerchantPaymentPartnerAction|null);
        waffleAccountLinkStateAction?: (WASyncAction.IWaffleAccountLinkStateAction|null);
        usernameChatStartMode?: (WASyncAction.IUsernameChatStartModeAction|null);
        notificationActivitySettingAction?: (WASyncAction.INotificationActivitySettingAction|null);
        lidContactAction?: (WASyncAction.ILidContactAction|null);
        ctwaPerCustomerDataSharingAction?: (WASyncAction.ICtwaPerCustomerDataSharingAction|null);
        paymentTosAction?: (WASyncAction.IPaymentTosAction|null);
        privacySettingChannelsPersonalisedRecommendationAction?: (WASyncAction.IPrivacySettingChannelsPersonalisedRecommendationAction|null);
        detectedOutcomesStatusAction?: (WASyncAction.IDetectedOutcomesStatusAction|null);
        maibaAiFeaturesControlAction?: (WASyncAction.IMaibaAIFeaturesControlAction|null);
        businessBroadcastListAction?: (WASyncAction.IBusinessBroadcastListAction|null);
        musicUserIDAction?: (WASyncAction.IMusicUserIdAction|null);
        statusPostOptInNotificationPreferencesAction?: (WASyncAction.IStatusPostOptInNotificationPreferencesAction|null);
        avatarUpdatedAction?: (WASyncAction.IAvatarUpdatedAction|null);
        privateProcessingSettingAction?: (WASyncAction.IPrivateProcessingSettingAction|null);
        newsletterSavedInterestsAction?: (WASyncAction.INewsletterSavedInterestsAction|null);
        aiThreadRenameAction?: (WASyncAction.IAiThreadRenameAction|null);
        interactiveMessageAction?: (WASyncAction.IInteractiveMessageAction|null);
        settingsSyncAction?: (WASyncAction.ISettingsSyncAction|null);
        outContactAction?: (WASyncAction.IOutContactAction|null);
        nctSaltSyncAction?: (WASyncAction.INctSaltSyncAction|null);
        businessBroadcastCampaignAction?: (WASyncAction.IBusinessBroadcastCampaignAction|null);
        businessBroadcastInsightsAction?: (WASyncAction.IBusinessBroadcastInsightsAction|null);
        customerDataAction?: (WASyncAction.ICustomerDataAction|null);
        subscriptionsSyncV2Action?: (WASyncAction.ISubscriptionsSyncV2Action|null);
        threadPinAction?: (WASyncAction.IThreadPinAction|null);
        autoOrganizeBusinessChatSetting?: (WASyncAction.IAutoOrganizeBusinessChatSetting|null);
        bizAiSettingsNudgeAction?: (WASyncAction.IBizAISettingsNudgeAction|null);
    }

    class SyncActionValue implements ISyncActionValue {
        constructor(p?: WASyncAction.ISyncActionValue);
        public timestamp?: (number|Long|null);
        public starAction?: (WASyncAction.IStarAction|null);
        public contactAction?: (WASyncAction.IContactAction|null);
        public muteAction?: (WASyncAction.IMuteAction|null);
        public pinAction?: (WASyncAction.IPinAction|null);
        public pushNameSetting?: (WASyncAction.IPushNameSetting|null);
        public quickReplyAction?: (WASyncAction.IQuickReplyAction|null);
        public recentEmojiWeightsAction?: (WASyncAction.IRecentEmojiWeightsAction|null);
        public labelEditAction?: (WASyncAction.ILabelEditAction|null);
        public labelAssociationAction?: (WASyncAction.ILabelAssociationAction|null);
        public localeSetting?: (WASyncAction.ILocaleSetting|null);
        public archiveChatAction?: (WASyncAction.IArchiveChatAction|null);
        public deleteMessageForMeAction?: (WASyncAction.IDeleteMessageForMeAction|null);
        public keyExpiration?: (WASyncAction.IKeyExpiration|null);
        public markChatAsReadAction?: (WASyncAction.IMarkChatAsReadAction|null);
        public clearChatAction?: (WASyncAction.IClearChatAction|null);
        public deleteChatAction?: (WASyncAction.IDeleteChatAction|null);
        public unarchiveChatsSetting?: (WASyncAction.IUnarchiveChatsSetting|null);
        public primaryFeature?: (WASyncAction.IPrimaryFeature|null);
        public androidUnsupportedActions?: (WASyncAction.IAndroidUnsupportedActions|null);
        public agentAction?: (WASyncAction.IAgentAction|null);
        public subscriptionAction?: (WASyncAction.ISubscriptionAction|null);
        public userStatusMuteAction?: (WASyncAction.IUserStatusMuteAction|null);
        public timeFormatAction?: (WASyncAction.ITimeFormatAction|null);
        public nuxAction?: (WASyncAction.INuxAction|null);
        public primaryVersionAction?: (WASyncAction.IPrimaryVersionAction|null);
        public stickerAction?: (WASyncAction.IStickerAction|null);
        public removeRecentStickerAction?: (WASyncAction.IRemoveRecentStickerAction|null);
        public chatAssignment?: (WASyncAction.IChatAssignmentAction|null);
        public chatAssignmentOpenedStatus?: (WASyncAction.IChatAssignmentOpenedStatusAction|null);
        public pnForLidChatAction?: (WASyncAction.IPnForLidChatAction|null);
        public marketingMessageAction?: (WASyncAction.IMarketingMessageAction|null);
        public marketingMessageBroadcastAction?: (WASyncAction.IMarketingMessageBroadcastAction|null);
        public externalWebBetaAction?: (WASyncAction.IExternalWebBetaAction|null);
        public privacySettingRelayAllCalls?: (WASyncAction.IPrivacySettingRelayAllCalls|null);
        public callLogAction?: (WASyncAction.ICallLogAction|null);
        public ugcBot?: (WASyncAction.IUGCBot|null);
        public statusPrivacy?: (WASyncAction.IStatusPrivacyAction|null);
        public botWelcomeRequestAction?: (WASyncAction.IBotWelcomeRequestAction|null);
        public deleteIndividualCallLog?: (WASyncAction.IDeleteIndividualCallLogAction|null);
        public labelReorderingAction?: (WASyncAction.ILabelReorderingAction|null);
        public paymentInfoAction?: (WASyncAction.IPaymentInfoAction|null);
        public customPaymentMethodsAction?: (WASyncAction.ICustomPaymentMethodsAction|null);
        public lockChatAction?: (WASyncAction.ILockChatAction|null);
        public chatLockSettings?: (WAChatLockSettings.IChatLockSettings|null);
        public wamoUserIdentifierAction?: (WASyncAction.IWamoUserIdentifierAction|null);
        public privacySettingDisableLinkPreviewsAction?: (WASyncAction.IPrivacySettingDisableLinkPreviewsAction|null);
        public deviceCapabilities?: (WADeviceCapabilities.IDeviceCapabilities|null);
        public noteEditAction?: (WASyncAction.INoteEditAction|null);
        public favoritesAction?: (WASyncAction.IFavoritesAction|null);
        public merchantPaymentPartnerAction?: (WASyncAction.IMerchantPaymentPartnerAction|null);
        public waffleAccountLinkStateAction?: (WASyncAction.IWaffleAccountLinkStateAction|null);
        public usernameChatStartMode?: (WASyncAction.IUsernameChatStartModeAction|null);
        public notificationActivitySettingAction?: (WASyncAction.INotificationActivitySettingAction|null);
        public lidContactAction?: (WASyncAction.ILidContactAction|null);
        public ctwaPerCustomerDataSharingAction?: (WASyncAction.ICtwaPerCustomerDataSharingAction|null);
        public paymentTosAction?: (WASyncAction.IPaymentTosAction|null);
        public privacySettingChannelsPersonalisedRecommendationAction?: (WASyncAction.IPrivacySettingChannelsPersonalisedRecommendationAction|null);
        public detectedOutcomesStatusAction?: (WASyncAction.IDetectedOutcomesStatusAction|null);
        public maibaAiFeaturesControlAction?: (WASyncAction.IMaibaAIFeaturesControlAction|null);
        public businessBroadcastListAction?: (WASyncAction.IBusinessBroadcastListAction|null);
        public musicUserIDAction?: (WASyncAction.IMusicUserIdAction|null);
        public statusPostOptInNotificationPreferencesAction?: (WASyncAction.IStatusPostOptInNotificationPreferencesAction|null);
        public avatarUpdatedAction?: (WASyncAction.IAvatarUpdatedAction|null);
        public privateProcessingSettingAction?: (WASyncAction.IPrivateProcessingSettingAction|null);
        public newsletterSavedInterestsAction?: (WASyncAction.INewsletterSavedInterestsAction|null);
        public aiThreadRenameAction?: (WASyncAction.IAiThreadRenameAction|null);
        public interactiveMessageAction?: (WASyncAction.IInteractiveMessageAction|null);
        public settingsSyncAction?: (WASyncAction.ISettingsSyncAction|null);
        public outContactAction?: (WASyncAction.IOutContactAction|null);
        public nctSaltSyncAction?: (WASyncAction.INctSaltSyncAction|null);
        public businessBroadcastCampaignAction?: (WASyncAction.IBusinessBroadcastCampaignAction|null);
        public businessBroadcastInsightsAction?: (WASyncAction.IBusinessBroadcastInsightsAction|null);
        public customerDataAction?: (WASyncAction.ICustomerDataAction|null);
        public subscriptionsSyncV2Action?: (WASyncAction.ISubscriptionsSyncV2Action|null);
        public threadPinAction?: (WASyncAction.IThreadPinAction|null);
        public autoOrganizeBusinessChatSetting?: (WASyncAction.IAutoOrganizeBusinessChatSetting|null);
        public bizAiSettingsNudgeAction?: (WASyncAction.IBizAISettingsNudgeAction|null);
        public static create(properties?: WASyncAction.ISyncActionValue): WASyncAction.SyncActionValue;
        public static encode(m: WASyncAction.ISyncActionValue, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SyncActionValue;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SyncActionValue;
        public static toObject(m: WASyncAction.SyncActionValue, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISubscriptionsSyncV2Action {
        subscriptions?: (WASyncAction.SubscriptionsSyncV2Action.ISubscriptionInfo[]|null);
        paidFeature?: (WASyncAction.SubscriptionsSyncV2Action.IPaidFeature[]|null);
    }

    class SubscriptionsSyncV2Action implements ISubscriptionsSyncV2Action {
        constructor(p?: WASyncAction.ISubscriptionsSyncV2Action);
        public subscriptions: WASyncAction.SubscriptionsSyncV2Action.ISubscriptionInfo[];
        public paidFeature: WASyncAction.SubscriptionsSyncV2Action.IPaidFeature[];
        public static create(properties?: WASyncAction.ISubscriptionsSyncV2Action): WASyncAction.SubscriptionsSyncV2Action;
        public static encode(m: WASyncAction.ISubscriptionsSyncV2Action, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SubscriptionsSyncV2Action;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SubscriptionsSyncV2Action;
        public static toObject(m: WASyncAction.SubscriptionsSyncV2Action, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SubscriptionsSyncV2Action {

        interface IPaidFeature {
            name?: (string|null);
            enabled?: (boolean|null);
            limit?: (number|null);
            expirationTime?: (number|Long|null);
        }

        class PaidFeature implements IPaidFeature {
            constructor(p?: WASyncAction.SubscriptionsSyncV2Action.IPaidFeature);
            public name?: (string|null);
            public enabled?: (boolean|null);
            public limit?: (number|null);
            public expirationTime?: (number|Long|null);
            public static create(properties?: WASyncAction.SubscriptionsSyncV2Action.IPaidFeature): WASyncAction.SubscriptionsSyncV2Action.PaidFeature;
            public static encode(m: WASyncAction.SubscriptionsSyncV2Action.IPaidFeature, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SubscriptionsSyncV2Action.PaidFeature;
            public static fromObject(d: { [k: string]: any }): WASyncAction.SubscriptionsSyncV2Action.PaidFeature;
            public static toObject(m: WASyncAction.SubscriptionsSyncV2Action.PaidFeature, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface ISubscriptionInfo {
            ID?: (string|null);
            tier?: (number|null);
            status?: (string|null);
            startTime?: (number|Long|null);
            endTime?: (number|Long|null);
            isPlatformChanged?: (boolean|null);
            source?: (string|null);
            creationTime?: (number|Long|null);
        }

        class SubscriptionInfo implements ISubscriptionInfo {
            constructor(p?: WASyncAction.SubscriptionsSyncV2Action.ISubscriptionInfo);
            public ID?: (string|null);
            public tier?: (number|null);
            public status?: (string|null);
            public startTime?: (number|Long|null);
            public endTime?: (number|Long|null);
            public isPlatformChanged?: (boolean|null);
            public source?: (string|null);
            public creationTime?: (number|Long|null);
            public static create(properties?: WASyncAction.SubscriptionsSyncV2Action.ISubscriptionInfo): WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo;
            public static encode(m: WASyncAction.SubscriptionsSyncV2Action.ISubscriptionInfo, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo;
            public static fromObject(d: { [k: string]: any }): WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo;
            public static toObject(m: WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface ICustomerDataAction {
        chatJID?: (string|null);
        contactType?: (number|null);
        email?: (string|null);
        altPhoneNumbers?: (string|null);
        birthday?: (number|Long|null);
        address?: (string|null);
        acquisitionSource?: (number|null);
        leadStage?: (number|null);
        lastOrder?: (number|Long|null);
        createdAt?: (number|Long|null);
        modifiedAt?: (number|Long|null);
    }

    class CustomerDataAction implements ICustomerDataAction {
        constructor(p?: WASyncAction.ICustomerDataAction);
        public chatJID?: (string|null);
        public contactType?: (number|null);
        public email?: (string|null);
        public altPhoneNumbers?: (string|null);
        public birthday?: (number|Long|null);
        public address?: (string|null);
        public acquisitionSource?: (number|null);
        public leadStage?: (number|null);
        public lastOrder?: (number|Long|null);
        public createdAt?: (number|Long|null);
        public modifiedAt?: (number|Long|null);
        public static create(properties?: WASyncAction.ICustomerDataAction): WASyncAction.CustomerDataAction;
        public static encode(m: WASyncAction.ICustomerDataAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CustomerDataAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CustomerDataAction;
        public static toObject(m: WASyncAction.CustomerDataAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBusinessBroadcastInsightsAction {
        recipientCount?: (number|null);
        deliveredCount?: (number|null);
        readCount?: (number|null);
        repliedCount?: (number|null);
        quickReplyCount?: (number|null);
    }

    class BusinessBroadcastInsightsAction implements IBusinessBroadcastInsightsAction {
        constructor(p?: WASyncAction.IBusinessBroadcastInsightsAction);
        public recipientCount?: (number|null);
        public deliveredCount?: (number|null);
        public readCount?: (number|null);
        public repliedCount?: (number|null);
        public quickReplyCount?: (number|null);
        public static create(properties?: WASyncAction.IBusinessBroadcastInsightsAction): WASyncAction.BusinessBroadcastInsightsAction;
        public static encode(m: WASyncAction.IBusinessBroadcastInsightsAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BusinessBroadcastInsightsAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BusinessBroadcastInsightsAction;
        public static toObject(m: WASyncAction.BusinessBroadcastInsightsAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAutoOrganizeBusinessChatSetting {
        autoOrganize?: (boolean|null);
    }

    class AutoOrganizeBusinessChatSetting implements IAutoOrganizeBusinessChatSetting {
        constructor(p?: WASyncAction.IAutoOrganizeBusinessChatSetting);
        public autoOrganize?: (boolean|null);
        public static create(properties?: WASyncAction.IAutoOrganizeBusinessChatSetting): WASyncAction.AutoOrganizeBusinessChatSetting;
        public static encode(m: WASyncAction.IAutoOrganizeBusinessChatSetting, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.AutoOrganizeBusinessChatSetting;
        public static fromObject(d: { [k: string]: any }): WASyncAction.AutoOrganizeBusinessChatSetting;
        public static toObject(m: WASyncAction.AutoOrganizeBusinessChatSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INctSaltSyncAction {
        salt?: (Uint8Array|null);
    }

    class NctSaltSyncAction implements INctSaltSyncAction {
        constructor(p?: WASyncAction.INctSaltSyncAction);
        public salt?: (Uint8Array|null);
        public static create(properties?: WASyncAction.INctSaltSyncAction): WASyncAction.NctSaltSyncAction;
        public static encode(m: WASyncAction.INctSaltSyncAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.NctSaltSyncAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.NctSaltSyncAction;
        public static toObject(m: WASyncAction.NctSaltSyncAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IThreadPinAction {
        pinned?: (boolean|null);
    }

    class ThreadPinAction implements IThreadPinAction {
        constructor(p?: WASyncAction.IThreadPinAction);
        public pinned?: (boolean|null);
        public static create(properties?: WASyncAction.IThreadPinAction): WASyncAction.ThreadPinAction;
        public static encode(m: WASyncAction.IThreadPinAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ThreadPinAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ThreadPinAction;
        public static toObject(m: WASyncAction.ThreadPinAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAiThreadRenameAction {
        newTitle?: (string|null);
    }

    class AiThreadRenameAction implements IAiThreadRenameAction {
        constructor(p?: WASyncAction.IAiThreadRenameAction);
        public newTitle?: (string|null);
        public static create(properties?: WASyncAction.IAiThreadRenameAction): WASyncAction.AiThreadRenameAction;
        public static encode(m: WASyncAction.IAiThreadRenameAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.AiThreadRenameAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.AiThreadRenameAction;
        public static toObject(m: WASyncAction.AiThreadRenameAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStatusPostOptInNotificationPreferencesAction {
        enabled?: (boolean|null);
    }

    class StatusPostOptInNotificationPreferencesAction implements IStatusPostOptInNotificationPreferencesAction {
        constructor(p?: WASyncAction.IStatusPostOptInNotificationPreferencesAction);
        public enabled?: (boolean|null);
        public static create(properties?: WASyncAction.IStatusPostOptInNotificationPreferencesAction): WASyncAction.StatusPostOptInNotificationPreferencesAction;
        public static encode(m: WASyncAction.IStatusPostOptInNotificationPreferencesAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.StatusPostOptInNotificationPreferencesAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.StatusPostOptInNotificationPreferencesAction;
        public static toObject(m: WASyncAction.StatusPostOptInNotificationPreferencesAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBroadcastListParticipant {
        lidJID?: (string|null);
        pnJID?: (string|null);
    }

    class BroadcastListParticipant implements IBroadcastListParticipant {
        constructor(p?: WASyncAction.IBroadcastListParticipant);
        public lidJID?: (string|null);
        public pnJID?: (string|null);
        public static create(properties?: WASyncAction.IBroadcastListParticipant): WASyncAction.BroadcastListParticipant;
        public static encode(m: WASyncAction.IBroadcastListParticipant, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BroadcastListParticipant;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BroadcastListParticipant;
        public static toObject(m: WASyncAction.BroadcastListParticipant, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBusinessBroadcastCampaignAction {
        deviceID?: (number|null);
        adID?: (string|null);
        name?: (string|null);
        msgID?: (string|null);
        broadcastJID?: (string|null);
        reservedQuota?: (number|null);
        scheduledTimestamp?: (number|Long|null);
        createTimestamp?: (number|Long|null);
        status?: (WASyncAction.BusinessBroadcastCampaignStatus|null);
    }

    class BusinessBroadcastCampaignAction implements IBusinessBroadcastCampaignAction {
        constructor(p?: WASyncAction.IBusinessBroadcastCampaignAction);
        public deviceID?: (number|null);
        public adID?: (string|null);
        public name?: (string|null);
        public msgID?: (string|null);
        public broadcastJID?: (string|null);
        public reservedQuota?: (number|null);
        public scheduledTimestamp?: (number|Long|null);
        public createTimestamp?: (number|Long|null);
        public status?: (WASyncAction.BusinessBroadcastCampaignStatus|null);
        public static create(properties?: WASyncAction.IBusinessBroadcastCampaignAction): WASyncAction.BusinessBroadcastCampaignAction;
        public static encode(m: WASyncAction.IBusinessBroadcastCampaignAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BusinessBroadcastCampaignAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BusinessBroadcastCampaignAction;
        public static toObject(m: WASyncAction.BusinessBroadcastCampaignAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBusinessBroadcastListAction {
        deleted?: (boolean|null);
        participants?: (WASyncAction.IBroadcastListParticipant[]|null);
        listName?: (string|null);
        labelIDs?: (string[]|null);
        audienceExpression?: (string|null);
    }

    class BusinessBroadcastListAction implements IBusinessBroadcastListAction {
        constructor(p?: WASyncAction.IBusinessBroadcastListAction);
        public deleted?: (boolean|null);
        public participants: WASyncAction.IBroadcastListParticipant[];
        public listName?: (string|null);
        public labelIDs: string[];
        public audienceExpression?: (string|null);
        public static create(properties?: WASyncAction.IBusinessBroadcastListAction): WASyncAction.BusinessBroadcastListAction;
        public static encode(m: WASyncAction.IBusinessBroadcastListAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BusinessBroadcastListAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BusinessBroadcastListAction;
        public static toObject(m: WASyncAction.BusinessBroadcastListAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBusinessBroadcastAssociationAction {
        deleted?: (boolean|null);
    }

    class BusinessBroadcastAssociationAction implements IBusinessBroadcastAssociationAction {
        constructor(p?: WASyncAction.IBusinessBroadcastAssociationAction);
        public deleted?: (boolean|null);
        public static create(properties?: WASyncAction.IBusinessBroadcastAssociationAction): WASyncAction.BusinessBroadcastAssociationAction;
        public static encode(m: WASyncAction.IBusinessBroadcastAssociationAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BusinessBroadcastAssociationAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BusinessBroadcastAssociationAction;
        public static toObject(m: WASyncAction.BusinessBroadcastAssociationAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICtwaPerCustomerDataSharingAction {
        isCtwaPerCustomerDataSharingEnabled?: (boolean|null);
    }

    class CtwaPerCustomerDataSharingAction implements ICtwaPerCustomerDataSharingAction {
        constructor(p?: WASyncAction.ICtwaPerCustomerDataSharingAction);
        public isCtwaPerCustomerDataSharingEnabled?: (boolean|null);
        public static create(properties?: WASyncAction.ICtwaPerCustomerDataSharingAction): WASyncAction.CtwaPerCustomerDataSharingAction;
        public static encode(m: WASyncAction.ICtwaPerCustomerDataSharingAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CtwaPerCustomerDataSharingAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CtwaPerCustomerDataSharingAction;
        public static toObject(m: WASyncAction.CtwaPerCustomerDataSharingAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IOutContactAction {
        fullName?: (string|null);
        firstName?: (string|null);
    }

    class OutContactAction implements IOutContactAction {
        constructor(p?: WASyncAction.IOutContactAction);
        public fullName?: (string|null);
        public firstName?: (string|null);
        public static create(properties?: WASyncAction.IOutContactAction): WASyncAction.OutContactAction;
        public static encode(m: WASyncAction.IOutContactAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.OutContactAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.OutContactAction;
        public static toObject(m: WASyncAction.OutContactAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILidContactAction {
        fullName?: (string|null);
        firstName?: (string|null);
        username?: (string|null);
    }

    class LidContactAction implements ILidContactAction {
        constructor(p?: WASyncAction.ILidContactAction);
        public fullName?: (string|null);
        public firstName?: (string|null);
        public username?: (string|null);
        public static create(properties?: WASyncAction.ILidContactAction): WASyncAction.LidContactAction;
        public static encode(m: WASyncAction.ILidContactAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.LidContactAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.LidContactAction;
        public static toObject(m: WASyncAction.LidContactAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IFavoritesAction {
        favorites?: (WASyncAction.FavoritesAction.IFavorite[]|null);
    }

    class FavoritesAction implements IFavoritesAction {
        constructor(p?: WASyncAction.IFavoritesAction);
        public favorites: WASyncAction.FavoritesAction.IFavorite[];
        public static create(properties?: WASyncAction.IFavoritesAction): WASyncAction.FavoritesAction;
        public static encode(m: WASyncAction.IFavoritesAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.FavoritesAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.FavoritesAction;
        public static toObject(m: WASyncAction.FavoritesAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FavoritesAction {

        interface IFavorite {
            ID?: (string|null);
        }

        class Favorite implements IFavorite {
            constructor(p?: WASyncAction.FavoritesAction.IFavorite);
            public ID?: (string|null);
            public static create(properties?: WASyncAction.FavoritesAction.IFavorite): WASyncAction.FavoritesAction.Favorite;
            public static encode(m: WASyncAction.FavoritesAction.IFavorite, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.FavoritesAction.Favorite;
            public static fromObject(d: { [k: string]: any }): WASyncAction.FavoritesAction.Favorite;
            public static toObject(m: WASyncAction.FavoritesAction.Favorite, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IPrivacySettingChannelsPersonalisedRecommendationAction {
        isUserOptedOut?: (boolean|null);
    }

    class PrivacySettingChannelsPersonalisedRecommendationAction implements IPrivacySettingChannelsPersonalisedRecommendationAction {
        constructor(p?: WASyncAction.IPrivacySettingChannelsPersonalisedRecommendationAction);
        public isUserOptedOut?: (boolean|null);
        public static create(properties?: WASyncAction.IPrivacySettingChannelsPersonalisedRecommendationAction): WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction;
        public static encode(m: WASyncAction.IPrivacySettingChannelsPersonalisedRecommendationAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction;
        public static toObject(m: WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPrivacySettingDisableLinkPreviewsAction {
        isPreviewsDisabled?: (boolean|null);
    }

    class PrivacySettingDisableLinkPreviewsAction implements IPrivacySettingDisableLinkPreviewsAction {
        constructor(p?: WASyncAction.IPrivacySettingDisableLinkPreviewsAction);
        public isPreviewsDisabled?: (boolean|null);
        public static create(properties?: WASyncAction.IPrivacySettingDisableLinkPreviewsAction): WASyncAction.PrivacySettingDisableLinkPreviewsAction;
        public static encode(m: WASyncAction.IPrivacySettingDisableLinkPreviewsAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PrivacySettingDisableLinkPreviewsAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PrivacySettingDisableLinkPreviewsAction;
        public static toObject(m: WASyncAction.PrivacySettingDisableLinkPreviewsAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IWamoUserIdentifierAction {
        identifier?: (string|null);
    }

    class WamoUserIdentifierAction implements IWamoUserIdentifierAction {
        constructor(p?: WASyncAction.IWamoUserIdentifierAction);
        public identifier?: (string|null);
        public static create(properties?: WASyncAction.IWamoUserIdentifierAction): WASyncAction.WamoUserIdentifierAction;
        public static encode(m: WASyncAction.IWamoUserIdentifierAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.WamoUserIdentifierAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.WamoUserIdentifierAction;
        public static toObject(m: WASyncAction.WamoUserIdentifierAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILockChatAction {
        locked?: (boolean|null);
    }

    class LockChatAction implements ILockChatAction {
        constructor(p?: WASyncAction.ILockChatAction);
        public locked?: (boolean|null);
        public static create(properties?: WASyncAction.ILockChatAction): WASyncAction.LockChatAction;
        public static encode(m: WASyncAction.ILockChatAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.LockChatAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.LockChatAction;
        public static toObject(m: WASyncAction.LockChatAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICustomPaymentMethodsAction {
        customPaymentMethods?: (WASyncAction.ICustomPaymentMethod[]|null);
    }

    class CustomPaymentMethodsAction implements ICustomPaymentMethodsAction {
        constructor(p?: WASyncAction.ICustomPaymentMethodsAction);
        public customPaymentMethods: WASyncAction.ICustomPaymentMethod[];
        public static create(properties?: WASyncAction.ICustomPaymentMethodsAction): WASyncAction.CustomPaymentMethodsAction;
        public static encode(m: WASyncAction.ICustomPaymentMethodsAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CustomPaymentMethodsAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CustomPaymentMethodsAction;
        public static toObject(m: WASyncAction.CustomPaymentMethodsAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICustomPaymentMethod {
        credentialID?: (string|null);
        country?: (string|null);
        type?: (string|null);
        metadata?: (WASyncAction.ICustomPaymentMethodMetadata[]|null);
    }

    class CustomPaymentMethod implements ICustomPaymentMethod {
        constructor(p?: WASyncAction.ICustomPaymentMethod);
        public credentialID?: (string|null);
        public country?: (string|null);
        public type?: (string|null);
        public metadata: WASyncAction.ICustomPaymentMethodMetadata[];
        public static create(properties?: WASyncAction.ICustomPaymentMethod): WASyncAction.CustomPaymentMethod;
        public static encode(m: WASyncAction.ICustomPaymentMethod, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CustomPaymentMethod;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CustomPaymentMethod;
        public static toObject(m: WASyncAction.CustomPaymentMethod, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICustomPaymentMethodMetadata {
        key?: (string|null);
        value?: (string|null);
    }

    class CustomPaymentMethodMetadata implements ICustomPaymentMethodMetadata {
        constructor(p?: WASyncAction.ICustomPaymentMethodMetadata);
        public key?: (string|null);
        public value?: (string|null);
        public static create(properties?: WASyncAction.ICustomPaymentMethodMetadata): WASyncAction.CustomPaymentMethodMetadata;
        public static encode(m: WASyncAction.ICustomPaymentMethodMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CustomPaymentMethodMetadata;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CustomPaymentMethodMetadata;
        public static toObject(m: WASyncAction.CustomPaymentMethodMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPaymentInfoAction {
        cpi?: (string|null);
    }

    class PaymentInfoAction implements IPaymentInfoAction {
        constructor(p?: WASyncAction.IPaymentInfoAction);
        public cpi?: (string|null);
        public static create(properties?: WASyncAction.IPaymentInfoAction): WASyncAction.PaymentInfoAction;
        public static encode(m: WASyncAction.IPaymentInfoAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PaymentInfoAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PaymentInfoAction;
        public static toObject(m: WASyncAction.PaymentInfoAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILabelReorderingAction {
        sortedLabelIDs?: (number[]|null);
    }

    class LabelReorderingAction implements ILabelReorderingAction {
        constructor(p?: WASyncAction.ILabelReorderingAction);
        public sortedLabelIDs: number[];
        public static create(properties?: WASyncAction.ILabelReorderingAction): WASyncAction.LabelReorderingAction;
        public static encode(m: WASyncAction.ILabelReorderingAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.LabelReorderingAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.LabelReorderingAction;
        public static toObject(m: WASyncAction.LabelReorderingAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeleteIndividualCallLogAction {
        peerJID?: (string|null);
        isIncoming?: (boolean|null);
    }

    class DeleteIndividualCallLogAction implements IDeleteIndividualCallLogAction {
        constructor(p?: WASyncAction.IDeleteIndividualCallLogAction);
        public peerJID?: (string|null);
        public isIncoming?: (boolean|null);
        public static create(properties?: WASyncAction.IDeleteIndividualCallLogAction): WASyncAction.DeleteIndividualCallLogAction;
        public static encode(m: WASyncAction.IDeleteIndividualCallLogAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.DeleteIndividualCallLogAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.DeleteIndividualCallLogAction;
        public static toObject(m: WASyncAction.DeleteIndividualCallLogAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IBotWelcomeRequestAction {
        isSent?: (boolean|null);
    }

    class BotWelcomeRequestAction implements IBotWelcomeRequestAction {
        constructor(p?: WASyncAction.IBotWelcomeRequestAction);
        public isSent?: (boolean|null);
        public static create(properties?: WASyncAction.IBotWelcomeRequestAction): WASyncAction.BotWelcomeRequestAction;
        public static encode(m: WASyncAction.IBotWelcomeRequestAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.BotWelcomeRequestAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.BotWelcomeRequestAction;
        public static toObject(m: WASyncAction.BotWelcomeRequestAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INewsletterSavedInterestsAction {
        newsletterSavedInterests?: (string|null);
    }

    class NewsletterSavedInterestsAction implements INewsletterSavedInterestsAction {
        constructor(p?: WASyncAction.INewsletterSavedInterestsAction);
        public newsletterSavedInterests?: (string|null);
        public static create(properties?: WASyncAction.INewsletterSavedInterestsAction): WASyncAction.NewsletterSavedInterestsAction;
        public static encode(m: WASyncAction.INewsletterSavedInterestsAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.NewsletterSavedInterestsAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.NewsletterSavedInterestsAction;
        public static toObject(m: WASyncAction.NewsletterSavedInterestsAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMusicUserIdAction {
        musicUserID?: (string|null);
        musicUserIdMap?: ({ [k: string]: Uint8Array }|null);
    }

    class MusicUserIdAction implements IMusicUserIdAction {
        constructor(p?: WASyncAction.IMusicUserIdAction);
        public musicUserID?: (string|null);
        public musicUserIdMap: { [k: string]: Uint8Array };
        public static create(properties?: WASyncAction.IMusicUserIdAction): WASyncAction.MusicUserIdAction;
        public static encode(m: WASyncAction.IMusicUserIdAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MusicUserIdAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MusicUserIdAction;
        public static toObject(m: WASyncAction.MusicUserIdAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IUGCBot {
        definition?: (Uint8Array|null);
    }

    class UGCBot implements IUGCBot {
        constructor(p?: WASyncAction.IUGCBot);
        public definition?: (Uint8Array|null);
        public static create(properties?: WASyncAction.IUGCBot): WASyncAction.UGCBot;
        public static encode(m: WASyncAction.IUGCBot, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.UGCBot;
        public static fromObject(d: { [k: string]: any }): WASyncAction.UGCBot;
        public static toObject(m: WASyncAction.UGCBot, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICallLogAction {
        callLogRecord?: (WASyncAction.ICallLogRecord|null);
    }

    class CallLogAction implements ICallLogAction {
        constructor(p?: WASyncAction.ICallLogAction);
        public callLogRecord?: (WASyncAction.ICallLogRecord|null);
        public static create(properties?: WASyncAction.ICallLogAction): WASyncAction.CallLogAction;
        public static encode(m: WASyncAction.ICallLogAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.CallLogAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.CallLogAction;
        public static toObject(m: WASyncAction.CallLogAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPrivacySettingRelayAllCalls {
        isEnabled?: (boolean|null);
    }

    class PrivacySettingRelayAllCalls implements IPrivacySettingRelayAllCalls {
        constructor(p?: WASyncAction.IPrivacySettingRelayAllCalls);
        public isEnabled?: (boolean|null);
        public static create(properties?: WASyncAction.IPrivacySettingRelayAllCalls): WASyncAction.PrivacySettingRelayAllCalls;
        public static encode(m: WASyncAction.IPrivacySettingRelayAllCalls, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PrivacySettingRelayAllCalls;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PrivacySettingRelayAllCalls;
        public static toObject(m: WASyncAction.PrivacySettingRelayAllCalls, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDetectedOutcomesStatusAction {
        isEnabled?: (boolean|null);
    }

    class DetectedOutcomesStatusAction implements IDetectedOutcomesStatusAction {
        constructor(p?: WASyncAction.IDetectedOutcomesStatusAction);
        public isEnabled?: (boolean|null);
        public static create(properties?: WASyncAction.IDetectedOutcomesStatusAction): WASyncAction.DetectedOutcomesStatusAction;
        public static encode(m: WASyncAction.IDetectedOutcomesStatusAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.DetectedOutcomesStatusAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.DetectedOutcomesStatusAction;
        public static toObject(m: WASyncAction.DetectedOutcomesStatusAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IExternalWebBetaAction {
        isOptIn?: (boolean|null);
    }

    class ExternalWebBetaAction implements IExternalWebBetaAction {
        constructor(p?: WASyncAction.IExternalWebBetaAction);
        public isOptIn?: (boolean|null);
        public static create(properties?: WASyncAction.IExternalWebBetaAction): WASyncAction.ExternalWebBetaAction;
        public static encode(m: WASyncAction.IExternalWebBetaAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ExternalWebBetaAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ExternalWebBetaAction;
        public static toObject(m: WASyncAction.ExternalWebBetaAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMarketingMessageBroadcastAction {
        repliedCount?: (number|null);
    }

    class MarketingMessageBroadcastAction implements IMarketingMessageBroadcastAction {
        constructor(p?: WASyncAction.IMarketingMessageBroadcastAction);
        public repliedCount?: (number|null);
        public static create(properties?: WASyncAction.IMarketingMessageBroadcastAction): WASyncAction.MarketingMessageBroadcastAction;
        public static encode(m: WASyncAction.IMarketingMessageBroadcastAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MarketingMessageBroadcastAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MarketingMessageBroadcastAction;
        public static toObject(m: WASyncAction.MarketingMessageBroadcastAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPnForLidChatAction {
        pnJID?: (string|null);
    }

    class PnForLidChatAction implements IPnForLidChatAction {
        constructor(p?: WASyncAction.IPnForLidChatAction);
        public pnJID?: (string|null);
        public static create(properties?: WASyncAction.IPnForLidChatAction): WASyncAction.PnForLidChatAction;
        public static encode(m: WASyncAction.IPnForLidChatAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PnForLidChatAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PnForLidChatAction;
        public static toObject(m: WASyncAction.PnForLidChatAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatAssignmentOpenedStatusAction {
        chatOpened?: (boolean|null);
    }

    class ChatAssignmentOpenedStatusAction implements IChatAssignmentOpenedStatusAction {
        constructor(p?: WASyncAction.IChatAssignmentOpenedStatusAction);
        public chatOpened?: (boolean|null);
        public static create(properties?: WASyncAction.IChatAssignmentOpenedStatusAction): WASyncAction.ChatAssignmentOpenedStatusAction;
        public static encode(m: WASyncAction.IChatAssignmentOpenedStatusAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ChatAssignmentOpenedStatusAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ChatAssignmentOpenedStatusAction;
        public static toObject(m: WASyncAction.ChatAssignmentOpenedStatusAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IChatAssignmentAction {
        deviceAgentID?: (string|null);
    }

    class ChatAssignmentAction implements IChatAssignmentAction {
        constructor(p?: WASyncAction.IChatAssignmentAction);
        public deviceAgentID?: (string|null);
        public static create(properties?: WASyncAction.IChatAssignmentAction): WASyncAction.ChatAssignmentAction;
        public static encode(m: WASyncAction.IChatAssignmentAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ChatAssignmentAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ChatAssignmentAction;
        public static toObject(m: WASyncAction.ChatAssignmentAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStickerAction {
        URL?: (string|null);
        fileEncSHA256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        mimetype?: (string|null);
        height?: (number|null);
        width?: (number|null);
        directPath?: (string|null);
        fileLength?: (number|Long|null);
        isFavorite?: (boolean|null);
        deviceIDHint?: (number|null);
        isLottie?: (boolean|null);
        imageHash?: (string|null);
        isAvatarSticker?: (boolean|null);
    }

    class StickerAction implements IStickerAction {
        constructor(p?: WASyncAction.IStickerAction);
        public URL?: (string|null);
        public fileEncSHA256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public mimetype?: (string|null);
        public height?: (number|null);
        public width?: (number|null);
        public directPath?: (string|null);
        public fileLength?: (number|Long|null);
        public isFavorite?: (boolean|null);
        public deviceIDHint?: (number|null);
        public isLottie?: (boolean|null);
        public imageHash?: (string|null);
        public isAvatarSticker?: (boolean|null);
        public static create(properties?: WASyncAction.IStickerAction): WASyncAction.StickerAction;
        public static encode(m: WASyncAction.IStickerAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.StickerAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.StickerAction;
        public static toObject(m: WASyncAction.StickerAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IRemoveRecentStickerAction {
        lastStickerSentTS?: (number|Long|null);
    }

    class RemoveRecentStickerAction implements IRemoveRecentStickerAction {
        constructor(p?: WASyncAction.IRemoveRecentStickerAction);
        public lastStickerSentTS?: (number|Long|null);
        public static create(properties?: WASyncAction.IRemoveRecentStickerAction): WASyncAction.RemoveRecentStickerAction;
        public static encode(m: WASyncAction.IRemoveRecentStickerAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.RemoveRecentStickerAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.RemoveRecentStickerAction;
        public static toObject(m: WASyncAction.RemoveRecentStickerAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPrimaryVersionAction {
        version?: (string|null);
    }

    class PrimaryVersionAction implements IPrimaryVersionAction {
        constructor(p?: WASyncAction.IPrimaryVersionAction);
        public version?: (string|null);
        public static create(properties?: WASyncAction.IPrimaryVersionAction): WASyncAction.PrimaryVersionAction;
        public static encode(m: WASyncAction.IPrimaryVersionAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PrimaryVersionAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PrimaryVersionAction;
        public static toObject(m: WASyncAction.PrimaryVersionAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INuxAction {
        acknowledged?: (boolean|null);
    }

    class NuxAction implements INuxAction {
        constructor(p?: WASyncAction.INuxAction);
        public acknowledged?: (boolean|null);
        public static create(properties?: WASyncAction.INuxAction): WASyncAction.NuxAction;
        public static encode(m: WASyncAction.INuxAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.NuxAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.NuxAction;
        public static toObject(m: WASyncAction.NuxAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ITimeFormatAction {
        isTwentyFourHourFormatEnabled?: (boolean|null);
    }

    class TimeFormatAction implements ITimeFormatAction {
        constructor(p?: WASyncAction.ITimeFormatAction);
        public isTwentyFourHourFormatEnabled?: (boolean|null);
        public static create(properties?: WASyncAction.ITimeFormatAction): WASyncAction.TimeFormatAction;
        public static encode(m: WASyncAction.ITimeFormatAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.TimeFormatAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.TimeFormatAction;
        public static toObject(m: WASyncAction.TimeFormatAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IUserStatusMuteAction {
        muted?: (boolean|null);
    }

    class UserStatusMuteAction implements IUserStatusMuteAction {
        constructor(p?: WASyncAction.IUserStatusMuteAction);
        public muted?: (boolean|null);
        public static create(properties?: WASyncAction.IUserStatusMuteAction): WASyncAction.UserStatusMuteAction;
        public static encode(m: WASyncAction.IUserStatusMuteAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.UserStatusMuteAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.UserStatusMuteAction;
        public static toObject(m: WASyncAction.UserStatusMuteAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISubscriptionAction {
        isDeactivated?: (boolean|null);
        isAutoRenewing?: (boolean|null);
        expirationDate?: (number|Long|null);
    }

    class SubscriptionAction implements ISubscriptionAction {
        constructor(p?: WASyncAction.ISubscriptionAction);
        public isDeactivated?: (boolean|null);
        public isAutoRenewing?: (boolean|null);
        public expirationDate?: (number|Long|null);
        public static create(properties?: WASyncAction.ISubscriptionAction): WASyncAction.SubscriptionAction;
        public static encode(m: WASyncAction.ISubscriptionAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SubscriptionAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SubscriptionAction;
        public static toObject(m: WASyncAction.SubscriptionAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAgentAction {
        name?: (string|null);
        deviceID?: (number|null);
        isDeleted?: (boolean|null);
    }

    class AgentAction implements IAgentAction {
        constructor(p?: WASyncAction.IAgentAction);
        public name?: (string|null);
        public deviceID?: (number|null);
        public isDeleted?: (boolean|null);
        public static create(properties?: WASyncAction.IAgentAction): WASyncAction.AgentAction;
        public static encode(m: WASyncAction.IAgentAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.AgentAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.AgentAction;
        public static toObject(m: WASyncAction.AgentAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAndroidUnsupportedActions {
        allowed?: (boolean|null);
    }

    class AndroidUnsupportedActions implements IAndroidUnsupportedActions {
        constructor(p?: WASyncAction.IAndroidUnsupportedActions);
        public allowed?: (boolean|null);
        public static create(properties?: WASyncAction.IAndroidUnsupportedActions): WASyncAction.AndroidUnsupportedActions;
        public static encode(m: WASyncAction.IAndroidUnsupportedActions, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.AndroidUnsupportedActions;
        public static fromObject(d: { [k: string]: any }): WASyncAction.AndroidUnsupportedActions;
        public static toObject(m: WASyncAction.AndroidUnsupportedActions, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPrimaryFeature {
        flags?: (string[]|null);
    }

    class PrimaryFeature implements IPrimaryFeature {
        constructor(p?: WASyncAction.IPrimaryFeature);
        public flags: string[];
        public static create(properties?: WASyncAction.IPrimaryFeature): WASyncAction.PrimaryFeature;
        public static encode(m: WASyncAction.IPrimaryFeature, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PrimaryFeature;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PrimaryFeature;
        public static toObject(m: WASyncAction.PrimaryFeature, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IKeyExpiration {
        expiredKeyEpoch?: (number|null);
    }

    class KeyExpiration implements IKeyExpiration {
        constructor(p?: WASyncAction.IKeyExpiration);
        public expiredKeyEpoch?: (number|null);
        public static create(properties?: WASyncAction.IKeyExpiration): WASyncAction.KeyExpiration;
        public static encode(m: WASyncAction.IKeyExpiration, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.KeyExpiration;
        public static fromObject(d: { [k: string]: any }): WASyncAction.KeyExpiration;
        public static toObject(m: WASyncAction.KeyExpiration, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncActionMessage {
        key?: (WACommon.IMessageKey|null);
        timestamp?: (number|Long|null);
    }

    class SyncActionMessage implements ISyncActionMessage {
        constructor(p?: WASyncAction.ISyncActionMessage);
        public key?: (WACommon.IMessageKey|null);
        public timestamp?: (number|Long|null);
        public static create(properties?: WASyncAction.ISyncActionMessage): WASyncAction.SyncActionMessage;
        public static encode(m: WASyncAction.ISyncActionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SyncActionMessage;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SyncActionMessage;
        public static toObject(m: WASyncAction.SyncActionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncActionMessageRange {
        lastMessageTimestamp?: (number|Long|null);
        lastSystemMessageTimestamp?: (number|Long|null);
        messages?: (WASyncAction.ISyncActionMessage[]|null);
    }

    class SyncActionMessageRange implements ISyncActionMessageRange {
        constructor(p?: WASyncAction.ISyncActionMessageRange);
        public lastMessageTimestamp?: (number|Long|null);
        public lastSystemMessageTimestamp?: (number|Long|null);
        public messages: WASyncAction.ISyncActionMessage[];
        public static create(properties?: WASyncAction.ISyncActionMessageRange): WASyncAction.SyncActionMessageRange;
        public static encode(m: WASyncAction.ISyncActionMessageRange, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SyncActionMessageRange;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SyncActionMessageRange;
        public static toObject(m: WASyncAction.SyncActionMessageRange, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IUnarchiveChatsSetting {
        unarchiveChats?: (boolean|null);
    }

    class UnarchiveChatsSetting implements IUnarchiveChatsSetting {
        constructor(p?: WASyncAction.IUnarchiveChatsSetting);
        public unarchiveChats?: (boolean|null);
        public static create(properties?: WASyncAction.IUnarchiveChatsSetting): WASyncAction.UnarchiveChatsSetting;
        public static encode(m: WASyncAction.IUnarchiveChatsSetting, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.UnarchiveChatsSetting;
        public static fromObject(d: { [k: string]: any }): WASyncAction.UnarchiveChatsSetting;
        public static toObject(m: WASyncAction.UnarchiveChatsSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeleteChatAction {
        messageRange?: (WASyncAction.ISyncActionMessageRange|null);
    }

    class DeleteChatAction implements IDeleteChatAction {
        constructor(p?: WASyncAction.IDeleteChatAction);
        public messageRange?: (WASyncAction.ISyncActionMessageRange|null);
        public static create(properties?: WASyncAction.IDeleteChatAction): WASyncAction.DeleteChatAction;
        public static encode(m: WASyncAction.IDeleteChatAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.DeleteChatAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.DeleteChatAction;
        public static toObject(m: WASyncAction.DeleteChatAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IClearChatAction {
        messageRange?: (WASyncAction.ISyncActionMessageRange|null);
    }

    class ClearChatAction implements IClearChatAction {
        constructor(p?: WASyncAction.IClearChatAction);
        public messageRange?: (WASyncAction.ISyncActionMessageRange|null);
        public static create(properties?: WASyncAction.IClearChatAction): WASyncAction.ClearChatAction;
        public static encode(m: WASyncAction.IClearChatAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ClearChatAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ClearChatAction;
        public static toObject(m: WASyncAction.ClearChatAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMarkChatAsReadAction {
        read?: (boolean|null);
        messageRange?: (WASyncAction.ISyncActionMessageRange|null);
    }

    class MarkChatAsReadAction implements IMarkChatAsReadAction {
        constructor(p?: WASyncAction.IMarkChatAsReadAction);
        public read?: (boolean|null);
        public messageRange?: (WASyncAction.ISyncActionMessageRange|null);
        public static create(properties?: WASyncAction.IMarkChatAsReadAction): WASyncAction.MarkChatAsReadAction;
        public static encode(m: WASyncAction.IMarkChatAsReadAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MarkChatAsReadAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MarkChatAsReadAction;
        public static toObject(m: WASyncAction.MarkChatAsReadAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IDeleteMessageForMeAction {
        deleteMedia?: (boolean|null);
        messageTimestamp?: (number|Long|null);
    }

    class DeleteMessageForMeAction implements IDeleteMessageForMeAction {
        constructor(p?: WASyncAction.IDeleteMessageForMeAction);
        public deleteMedia?: (boolean|null);
        public messageTimestamp?: (number|Long|null);
        public static create(properties?: WASyncAction.IDeleteMessageForMeAction): WASyncAction.DeleteMessageForMeAction;
        public static encode(m: WASyncAction.IDeleteMessageForMeAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.DeleteMessageForMeAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.DeleteMessageForMeAction;
        public static toObject(m: WASyncAction.DeleteMessageForMeAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IArchiveChatAction {
        archived?: (boolean|null);
        messageRange?: (WASyncAction.ISyncActionMessageRange|null);
    }

    class ArchiveChatAction implements IArchiveChatAction {
        constructor(p?: WASyncAction.IArchiveChatAction);
        public archived?: (boolean|null);
        public messageRange?: (WASyncAction.ISyncActionMessageRange|null);
        public static create(properties?: WASyncAction.IArchiveChatAction): WASyncAction.ArchiveChatAction;
        public static encode(m: WASyncAction.IArchiveChatAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ArchiveChatAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ArchiveChatAction;
        public static toObject(m: WASyncAction.ArchiveChatAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IRecentEmojiWeightsAction {
        weights?: (WASyncAction.IRecentEmojiWeight[]|null);
    }

    class RecentEmojiWeightsAction implements IRecentEmojiWeightsAction {
        constructor(p?: WASyncAction.IRecentEmojiWeightsAction);
        public weights: WASyncAction.IRecentEmojiWeight[];
        public static create(properties?: WASyncAction.IRecentEmojiWeightsAction): WASyncAction.RecentEmojiWeightsAction;
        public static encode(m: WASyncAction.IRecentEmojiWeightsAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.RecentEmojiWeightsAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.RecentEmojiWeightsAction;
        public static toObject(m: WASyncAction.RecentEmojiWeightsAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILabelAssociationAction {
        labeled?: (boolean|null);
    }

    class LabelAssociationAction implements ILabelAssociationAction {
        constructor(p?: WASyncAction.ILabelAssociationAction);
        public labeled?: (boolean|null);
        public static create(properties?: WASyncAction.ILabelAssociationAction): WASyncAction.LabelAssociationAction;
        public static encode(m: WASyncAction.ILabelAssociationAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.LabelAssociationAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.LabelAssociationAction;
        public static toObject(m: WASyncAction.LabelAssociationAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IQuickReplyAction {
        shortcut?: (string|null);
        message?: (string|null);
        keywords?: (string[]|null);
        count?: (number|null);
        deleted?: (boolean|null);
        associatedLabelIDs?: (string[]|null);
    }

    class QuickReplyAction implements IQuickReplyAction {
        constructor(p?: WASyncAction.IQuickReplyAction);
        public shortcut?: (string|null);
        public message?: (string|null);
        public keywords: string[];
        public count?: (number|null);
        public deleted?: (boolean|null);
        public associatedLabelIDs: string[];
        public static create(properties?: WASyncAction.IQuickReplyAction): WASyncAction.QuickReplyAction;
        public static encode(m: WASyncAction.IQuickReplyAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.QuickReplyAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.QuickReplyAction;
        public static toObject(m: WASyncAction.QuickReplyAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILocaleSetting {
        locale?: (string|null);
    }

    class LocaleSetting implements ILocaleSetting {
        constructor(p?: WASyncAction.ILocaleSetting);
        public locale?: (string|null);
        public static create(properties?: WASyncAction.ILocaleSetting): WASyncAction.LocaleSetting;
        public static encode(m: WASyncAction.ILocaleSetting, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.LocaleSetting;
        public static fromObject(d: { [k: string]: any }): WASyncAction.LocaleSetting;
        public static toObject(m: WASyncAction.LocaleSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPushNameSetting {
        name?: (string|null);
    }

    class PushNameSetting implements IPushNameSetting {
        constructor(p?: WASyncAction.IPushNameSetting);
        public name?: (string|null);
        public static create(properties?: WASyncAction.IPushNameSetting): WASyncAction.PushNameSetting;
        public static encode(m: WASyncAction.IPushNameSetting, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PushNameSetting;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PushNameSetting;
        public static toObject(m: WASyncAction.PushNameSetting, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPinAction {
        pinned?: (boolean|null);
    }

    class PinAction implements IPinAction {
        constructor(p?: WASyncAction.IPinAction);
        public pinned?: (boolean|null);
        public static create(properties?: WASyncAction.IPinAction): WASyncAction.PinAction;
        public static encode(m: WASyncAction.IPinAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.PinAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.PinAction;
        public static toObject(m: WASyncAction.PinAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMuteAction {
        muted?: (boolean|null);
        muteEndTimestamp?: (number|Long|null);
        autoMuted?: (boolean|null);
        muteEveryoneMentionEndTimestamp?: (number|Long|null);
    }

    class MuteAction implements IMuteAction {
        constructor(p?: WASyncAction.IMuteAction);
        public muted?: (boolean|null);
        public muteEndTimestamp?: (number|Long|null);
        public autoMuted?: (boolean|null);
        public muteEveryoneMentionEndTimestamp?: (number|Long|null);
        public static create(properties?: WASyncAction.IMuteAction): WASyncAction.MuteAction;
        public static encode(m: WASyncAction.IMuteAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.MuteAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.MuteAction;
        public static toObject(m: WASyncAction.MuteAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IContactAction {
        fullName?: (string|null);
        firstName?: (string|null);
        lidJID?: (string|null);
        saveOnPrimaryAddressbook?: (boolean|null);
        pnJID?: (string|null);
        username?: (string|null);
    }

    class ContactAction implements IContactAction {
        constructor(p?: WASyncAction.IContactAction);
        public fullName?: (string|null);
        public firstName?: (string|null);
        public lidJID?: (string|null);
        public saveOnPrimaryAddressbook?: (boolean|null);
        public pnJID?: (string|null);
        public username?: (string|null);
        public static create(properties?: WASyncAction.IContactAction): WASyncAction.ContactAction;
        public static encode(m: WASyncAction.IContactAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.ContactAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.ContactAction;
        public static toObject(m: WASyncAction.ContactAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStarAction {
        starred?: (boolean|null);
    }

    class StarAction implements IStarAction {
        constructor(p?: WASyncAction.IStarAction);
        public starred?: (boolean|null);
        public static create(properties?: WASyncAction.IStarAction): WASyncAction.StarAction;
        public static encode(m: WASyncAction.IStarAction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.StarAction;
        public static fromObject(d: { [k: string]: any }): WASyncAction.StarAction;
        public static toObject(m: WASyncAction.StarAction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ISyncActionData {
        index?: (Uint8Array|null);
        value?: (WASyncAction.ISyncActionValue|null);
        padding?: (Uint8Array|null);
        version?: (number|null);
    }

    class SyncActionData implements ISyncActionData {
        constructor(p?: WASyncAction.ISyncActionData);
        public index?: (Uint8Array|null);
        public value?: (WASyncAction.ISyncActionValue|null);
        public padding?: (Uint8Array|null);
        public version?: (number|null);
        public static create(properties?: WASyncAction.ISyncActionData): WASyncAction.SyncActionData;
        public static encode(m: WASyncAction.ISyncActionData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WASyncAction.SyncActionData;
        public static fromObject(d: { [k: string]: any }): WASyncAction.SyncActionData;
        public static toObject(m: WASyncAction.SyncActionData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}


