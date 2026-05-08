import { WASyncAction } from './WASyncAction.d';

import { WAChatLockSettings } from './WAChatLockSettings.d';

import { WAE2E } from './WAE2E.d';

import { WACommon } from './WACommon.d';

import { WAWeb } from './WAWeb.d';import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAHistorySync {

    enum MediaVisibility {
        DEFAULT = 0,
        OFF = 1,
        ON = 2
    }

    enum PrivacySystemMessage {
        E2EE_MSG = 1,
        NE2EE_SELF = 2,
        NE2EE_OTHER = 3
    }

    interface IHistorySync {
        syncType?: (WAHistorySync.HistorySync.HistorySyncType|null);
        conversations?: (WAHistorySync.IConversation[]|null);
        statusV3Messages?: (WAWeb.IWebMessageInfo[]|null);
        chunkOrder?: (number|null);
        progress?: (number|null);
        pushnames?: (WAHistorySync.IPushname[]|null);
        globalSettings?: (WAHistorySync.IGlobalSettings|null);
        threadIDUserSecret?: (Uint8Array|null);
        threadDsTimeframeOffset?: (number|null);
        recentStickers?: (WAHistorySync.IStickerMetadata[]|null);
        pastParticipants?: (WAHistorySync.IPastParticipants[]|null);
        callLogRecords?: (WASyncAction.ICallLogRecord[]|null);
        aiWaitListState?: (WAHistorySync.HistorySync.BotAIWaitListState|null);
        phoneNumberToLidMappings?: (WAHistorySync.IPhoneNumberToLIDMapping[]|null);
        companionMetaNonce?: (string|null);
        shareableChatIdentifierEncryptionKey?: (Uint8Array|null);
        accounts?: (WAHistorySync.IAccount[]|null);
        nctSalt?: (Uint8Array|null);
        inlineContacts?: (WAHistorySync.IInlineContact[]|null);
        inlineContactsProvided?: (boolean|null);
    }

    class HistorySync implements IHistorySync {
        constructor(p?: WAHistorySync.IHistorySync);
        public syncType?: (WAHistorySync.HistorySync.HistorySyncType|null);
        public conversations: WAHistorySync.IConversation[];
        public statusV3Messages: WAWeb.IWebMessageInfo[];
        public chunkOrder?: (number|null);
        public progress?: (number|null);
        public pushnames: WAHistorySync.IPushname[];
        public globalSettings?: (WAHistorySync.IGlobalSettings|null);
        public threadIDUserSecret?: (Uint8Array|null);
        public threadDsTimeframeOffset?: (number|null);
        public recentStickers: WAHistorySync.IStickerMetadata[];
        public pastParticipants: WAHistorySync.IPastParticipants[];
        public callLogRecords: WASyncAction.ICallLogRecord[];
        public aiWaitListState?: (WAHistorySync.HistorySync.BotAIWaitListState|null);
        public phoneNumberToLidMappings: WAHistorySync.IPhoneNumberToLIDMapping[];
        public companionMetaNonce?: (string|null);
        public shareableChatIdentifierEncryptionKey?: (Uint8Array|null);
        public accounts: WAHistorySync.IAccount[];
        public nctSalt?: (Uint8Array|null);
        public inlineContacts: WAHistorySync.IInlineContact[];
        public inlineContactsProvided?: (boolean|null);
        public static create(properties?: WAHistorySync.IHistorySync): WAHistorySync.HistorySync;
        public static encode(m: WAHistorySync.IHistorySync, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.HistorySync;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.HistorySync;
        public static toObject(m: WAHistorySync.HistorySync, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace HistorySync {

        enum BotAIWaitListState {
            IN_WAITLIST = 0,
            AI_AVAILABLE = 1
        }

        enum HistorySyncType {
            INITIAL_BOOTSTRAP = 0,
            INITIAL_STATUS_V3 = 1,
            FULL = 2,
            RECENT = 3,
            PUSH_NAME = 4,
            NON_BLOCKING_DATA = 5,
            ON_DEMAND = 6
        }
    }

    interface IConversation {
        ID?: (string|null);
        messages?: (WAHistorySync.IHistorySyncMsg[]|null);
        newJID?: (string|null);
        oldJID?: (string|null);
        lastMsgTimestamp?: (number|Long|null);
        unreadCount?: (number|null);
        readOnly?: (boolean|null);
        endOfHistoryTransfer?: (boolean|null);
        ephemeralExpiration?: (number|null);
        ephemeralSettingTimestamp?: (number|Long|null);
        endOfHistoryTransferType?: (WAHistorySync.Conversation.EndOfHistoryTransferType|null);
        conversationTimestamp?: (number|Long|null);
        name?: (string|null);
        pHash?: (string|null);
        notSpam?: (boolean|null);
        archived?: (boolean|null);
        disappearingMode?: (WAE2E.IDisappearingMode|null);
        unreadMentionCount?: (number|null);
        markedAsUnread?: (boolean|null);
        participant?: (WAHistorySync.IGroupParticipant[]|null);
        tcToken?: (Uint8Array|null);
        tcTokenTimestamp?: (number|Long|null);
        contactPrimaryIdentityKey?: (Uint8Array|null);
        pinned?: (number|null);
        muteEndTime?: (number|Long|null);
        wallpaper?: (WAHistorySync.IWallpaperSettings|null);
        mediaVisibility?: (WAHistorySync.MediaVisibility|null);
        tcTokenSenderTimestamp?: (number|Long|null);
        suspended?: (boolean|null);
        terminated?: (boolean|null);
        createdAt?: (number|Long|null);
        createdBy?: (string|null);
        description?: (string|null);
        support?: (boolean|null);
        isParentGroup?: (boolean|null);
        parentGroupID?: (string|null);
        isDefaultSubgroup?: (boolean|null);
        displayName?: (string|null);
        pnJID?: (string|null);
        shareOwnPn?: (boolean|null);
        pnhDuplicateLidThread?: (boolean|null);
        lidJID?: (string|null);
        username?: (string|null);
        lidOriginType?: (string|null);
        commentsCount?: (number|null);
        locked?: (boolean|null);
        systemMessageToInsert?: (WAHistorySync.PrivacySystemMessage|null);
        capiCreatedGroup?: (boolean|null);
        accountLid?: (string|null);
        limitSharing?: (boolean|null);
        limitSharingSettingTimestamp?: (number|Long|null);
        limitSharingTrigger?: (WACommon.LimitSharing.TriggerType|null);
        limitSharingInitiatedByMe?: (boolean|null);
        maibaAiThreadEnabled?: (boolean|null);
        isMarketingMessageThread?: (boolean|null);
        isSenderNewAccount?: (boolean|null);
        afterReadDuration?: (number|null);
        isSenderSuspicious?: (boolean|null);
        appealStatus?: (WAHistorySync.Conversation.GroupAppealStatus|null);
        appealUpdateTime?: (number|Long|null);
        authAgentParentCompanyName?: (string|null);
        authAgentObaPhoneNumber?: (string|null);
    }

    class Conversation implements IConversation {
        constructor(p?: WAHistorySync.IConversation);
        public ID?: (string|null);
        public messages: WAHistorySync.IHistorySyncMsg[];
        public newJID?: (string|null);
        public oldJID?: (string|null);
        public lastMsgTimestamp?: (number|Long|null);
        public unreadCount?: (number|null);
        public readOnly?: (boolean|null);
        public endOfHistoryTransfer?: (boolean|null);
        public ephemeralExpiration?: (number|null);
        public ephemeralSettingTimestamp?: (number|Long|null);
        public endOfHistoryTransferType?: (WAHistorySync.Conversation.EndOfHistoryTransferType|null);
        public conversationTimestamp?: (number|Long|null);
        public name?: (string|null);
        public pHash?: (string|null);
        public notSpam?: (boolean|null);
        public archived?: (boolean|null);
        public disappearingMode?: (WAE2E.IDisappearingMode|null);
        public unreadMentionCount?: (number|null);
        public markedAsUnread?: (boolean|null);
        public participant: WAHistorySync.IGroupParticipant[];
        public tcToken?: (Uint8Array|null);
        public tcTokenTimestamp?: (number|Long|null);
        public contactPrimaryIdentityKey?: (Uint8Array|null);
        public pinned?: (number|null);
        public muteEndTime?: (number|Long|null);
        public wallpaper?: (WAHistorySync.IWallpaperSettings|null);
        public mediaVisibility?: (WAHistorySync.MediaVisibility|null);
        public tcTokenSenderTimestamp?: (number|Long|null);
        public suspended?: (boolean|null);
        public terminated?: (boolean|null);
        public createdAt?: (number|Long|null);
        public createdBy?: (string|null);
        public description?: (string|null);
        public support?: (boolean|null);
        public isParentGroup?: (boolean|null);
        public parentGroupID?: (string|null);
        public isDefaultSubgroup?: (boolean|null);
        public displayName?: (string|null);
        public pnJID?: (string|null);
        public shareOwnPn?: (boolean|null);
        public pnhDuplicateLidThread?: (boolean|null);
        public lidJID?: (string|null);
        public username?: (string|null);
        public lidOriginType?: (string|null);
        public commentsCount?: (number|null);
        public locked?: (boolean|null);
        public systemMessageToInsert?: (WAHistorySync.PrivacySystemMessage|null);
        public capiCreatedGroup?: (boolean|null);
        public accountLid?: (string|null);
        public limitSharing?: (boolean|null);
        public limitSharingSettingTimestamp?: (number|Long|null);
        public limitSharingTrigger?: (WACommon.LimitSharing.TriggerType|null);
        public limitSharingInitiatedByMe?: (boolean|null);
        public maibaAiThreadEnabled?: (boolean|null);
        public isMarketingMessageThread?: (boolean|null);
        public isSenderNewAccount?: (boolean|null);
        public afterReadDuration?: (number|null);
        public isSenderSuspicious?: (boolean|null);
        public appealStatus?: (WAHistorySync.Conversation.GroupAppealStatus|null);
        public appealUpdateTime?: (number|Long|null);
        public authAgentParentCompanyName?: (string|null);
        public authAgentObaPhoneNumber?: (string|null);
        public static create(properties?: WAHistorySync.IConversation): WAHistorySync.Conversation;
        public static encode(m: WAHistorySync.IConversation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.Conversation;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.Conversation;
        public static toObject(m: WAHistorySync.Conversation, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Conversation {

        enum GroupAppealStatus {
            NO_APPEAL = 0,
            APPEAL_IN_REVIEW = 1,
            APPEAL_APPROVED = 2,
            APPEAL_REJECTED = 3
        }

        enum EndOfHistoryTransferType {
            COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0,
            COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1,
            COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY = 2,
            COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS = 3
        }
    }

    interface IGroupParticipant {
        userJID?: (string|null);
        rank?: (WAHistorySync.GroupParticipant.Rank|null);
        memberLabel?: (WAE2E.IMemberLabel|null);
    }

    class GroupParticipant implements IGroupParticipant {
        constructor(p?: WAHistorySync.IGroupParticipant);
        public userJID?: (string|null);
        public rank?: (WAHistorySync.GroupParticipant.Rank|null);
        public memberLabel?: (WAE2E.IMemberLabel|null);
        public static create(properties?: WAHistorySync.IGroupParticipant): WAHistorySync.GroupParticipant;
        public static encode(m: WAHistorySync.IGroupParticipant, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.GroupParticipant;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.GroupParticipant;
        public static toObject(m: WAHistorySync.GroupParticipant, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace GroupParticipant {

        enum Rank {
            REGULAR = 0,
            ADMIN = 1,
            SUPERADMIN = 2
        }
    }

    interface IPastParticipant {
        userJID?: (string|null);
        leaveReason?: (WAHistorySync.PastParticipant.LeaveReason|null);
        leaveTS?: (number|Long|null);
    }

    class PastParticipant implements IPastParticipant {
        constructor(p?: WAHistorySync.IPastParticipant);
        public userJID?: (string|null);
        public leaveReason?: (WAHistorySync.PastParticipant.LeaveReason|null);
        public leaveTS?: (number|Long|null);
        public static create(properties?: WAHistorySync.IPastParticipant): WAHistorySync.PastParticipant;
        public static encode(m: WAHistorySync.IPastParticipant, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.PastParticipant;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.PastParticipant;
        public static toObject(m: WAHistorySync.PastParticipant, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PastParticipant {

        enum LeaveReason {
            LEFT = 0,
            REMOVED = 1
        }
    }

    interface IPhoneNumberToLIDMapping {
        pnJID?: (string|null);
        lidJID?: (string|null);
    }

    class PhoneNumberToLIDMapping implements IPhoneNumberToLIDMapping {
        constructor(p?: WAHistorySync.IPhoneNumberToLIDMapping);
        public pnJID?: (string|null);
        public lidJID?: (string|null);
        public static create(properties?: WAHistorySync.IPhoneNumberToLIDMapping): WAHistorySync.PhoneNumberToLIDMapping;
        public static encode(m: WAHistorySync.IPhoneNumberToLIDMapping, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.PhoneNumberToLIDMapping;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.PhoneNumberToLIDMapping;
        public static toObject(m: WAHistorySync.PhoneNumberToLIDMapping, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IInlineContact {
        pnJID?: (string|null);
        lidJID?: (string|null);
        fullName?: (string|null);
        firstName?: (string|null);
        username?: (string|null);
    }

    class InlineContact implements IInlineContact {
        constructor(p?: WAHistorySync.IInlineContact);
        public pnJID?: (string|null);
        public lidJID?: (string|null);
        public fullName?: (string|null);
        public firstName?: (string|null);
        public username?: (string|null);
        public static create(properties?: WAHistorySync.IInlineContact): WAHistorySync.InlineContact;
        public static encode(m: WAHistorySync.IInlineContact, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.InlineContact;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.InlineContact;
        public static toObject(m: WAHistorySync.InlineContact, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAccount {
        lid?: (string|null);
        username?: (string|null);
        countryCode?: (string|null);
        isUsernameDeleted?: (boolean|null);
    }

    class Account implements IAccount {
        constructor(p?: WAHistorySync.IAccount);
        public lid?: (string|null);
        public username?: (string|null);
        public countryCode?: (string|null);
        public isUsernameDeleted?: (boolean|null);
        public static create(properties?: WAHistorySync.IAccount): WAHistorySync.Account;
        public static encode(m: WAHistorySync.IAccount, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.Account;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.Account;
        public static toObject(m: WAHistorySync.Account, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IHistorySyncMsg {
        message?: (WAWeb.IWebMessageInfo|null);
        msgOrderID?: (number|Long|null);
    }

    class HistorySyncMsg implements IHistorySyncMsg {
        constructor(p?: WAHistorySync.IHistorySyncMsg);
        public message?: (WAWeb.IWebMessageInfo|null);
        public msgOrderID?: (number|Long|null);
        public static create(properties?: WAHistorySync.IHistorySyncMsg): WAHistorySync.HistorySyncMsg;
        public static encode(m: WAHistorySync.IHistorySyncMsg, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.HistorySyncMsg;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.HistorySyncMsg;
        public static toObject(m: WAHistorySync.HistorySyncMsg, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPushname {
        ID?: (string|null);
        pushname?: (string|null);
    }

    class Pushname implements IPushname {
        constructor(p?: WAHistorySync.IPushname);
        public ID?: (string|null);
        public pushname?: (string|null);
        public static create(properties?: WAHistorySync.IPushname): WAHistorySync.Pushname;
        public static encode(m: WAHistorySync.IPushname, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.Pushname;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.Pushname;
        public static toObject(m: WAHistorySync.Pushname, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IWallpaperSettings {
        filename?: (string|null);
        opacity?: (number|null);
        isGenAi?: (boolean|null);
    }

    class WallpaperSettings implements IWallpaperSettings {
        constructor(p?: WAHistorySync.IWallpaperSettings);
        public filename?: (string|null);
        public opacity?: (number|null);
        public isGenAi?: (boolean|null);
        public static create(properties?: WAHistorySync.IWallpaperSettings): WAHistorySync.WallpaperSettings;
        public static encode(m: WAHistorySync.IWallpaperSettings, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.WallpaperSettings;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.WallpaperSettings;
        public static toObject(m: WAHistorySync.WallpaperSettings, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGlobalSettings {
        lightThemeWallpaper?: (WAHistorySync.IWallpaperSettings|null);
        mediaVisibility?: (WAHistorySync.MediaVisibility|null);
        darkThemeWallpaper?: (WAHistorySync.IWallpaperSettings|null);
        autoDownloadWiFi?: (WAHistorySync.IAutoDownloadSettings|null);
        autoDownloadCellular?: (WAHistorySync.IAutoDownloadSettings|null);
        autoDownloadRoaming?: (WAHistorySync.IAutoDownloadSettings|null);
        showIndividualNotificationsPreview?: (boolean|null);
        showGroupNotificationsPreview?: (boolean|null);
        disappearingModeDuration?: (number|null);
        disappearingModeTimestamp?: (number|Long|null);
        avatarUserSettings?: (WAHistorySync.IAvatarUserSettings|null);
        fontSize?: (number|null);
        securityNotifications?: (boolean|null);
        autoUnarchiveChats?: (boolean|null);
        videoQualityMode?: (number|null);
        photoQualityMode?: (number|null);
        individualNotificationSettings?: (WAHistorySync.INotificationSettings|null);
        groupNotificationSettings?: (WAHistorySync.INotificationSettings|null);
        chatLockSettings?: (WAChatLockSettings.IChatLockSettings|null);
        chatDbLidMigrationTimestamp?: (number|Long|null);
    }

    class GlobalSettings implements IGlobalSettings {
        constructor(p?: WAHistorySync.IGlobalSettings);
        public lightThemeWallpaper?: (WAHistorySync.IWallpaperSettings|null);
        public mediaVisibility?: (WAHistorySync.MediaVisibility|null);
        public darkThemeWallpaper?: (WAHistorySync.IWallpaperSettings|null);
        public autoDownloadWiFi?: (WAHistorySync.IAutoDownloadSettings|null);
        public autoDownloadCellular?: (WAHistorySync.IAutoDownloadSettings|null);
        public autoDownloadRoaming?: (WAHistorySync.IAutoDownloadSettings|null);
        public showIndividualNotificationsPreview?: (boolean|null);
        public showGroupNotificationsPreview?: (boolean|null);
        public disappearingModeDuration?: (number|null);
        public disappearingModeTimestamp?: (number|Long|null);
        public avatarUserSettings?: (WAHistorySync.IAvatarUserSettings|null);
        public fontSize?: (number|null);
        public securityNotifications?: (boolean|null);
        public autoUnarchiveChats?: (boolean|null);
        public videoQualityMode?: (number|null);
        public photoQualityMode?: (number|null);
        public individualNotificationSettings?: (WAHistorySync.INotificationSettings|null);
        public groupNotificationSettings?: (WAHistorySync.INotificationSettings|null);
        public chatLockSettings?: (WAChatLockSettings.IChatLockSettings|null);
        public chatDbLidMigrationTimestamp?: (number|Long|null);
        public static create(properties?: WAHistorySync.IGlobalSettings): WAHistorySync.GlobalSettings;
        public static encode(m: WAHistorySync.IGlobalSettings, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.GlobalSettings;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.GlobalSettings;
        public static toObject(m: WAHistorySync.GlobalSettings, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAutoDownloadSettings {
        downloadImages?: (boolean|null);
        downloadAudio?: (boolean|null);
        downloadVideo?: (boolean|null);
        downloadDocuments?: (boolean|null);
    }

    class AutoDownloadSettings implements IAutoDownloadSettings {
        constructor(p?: WAHistorySync.IAutoDownloadSettings);
        public downloadImages?: (boolean|null);
        public downloadAudio?: (boolean|null);
        public downloadVideo?: (boolean|null);
        public downloadDocuments?: (boolean|null);
        public static create(properties?: WAHistorySync.IAutoDownloadSettings): WAHistorySync.AutoDownloadSettings;
        public static encode(m: WAHistorySync.IAutoDownloadSettings, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.AutoDownloadSettings;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.AutoDownloadSettings;
        public static toObject(m: WAHistorySync.AutoDownloadSettings, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStickerMetadata {
        URL?: (string|null);
        fileSHA256?: (Uint8Array|null);
        fileEncSHA256?: (Uint8Array|null);
        mediaKey?: (Uint8Array|null);
        mimetype?: (string|null);
        height?: (number|null);
        width?: (number|null);
        directPath?: (string|null);
        fileLength?: (number|Long|null);
        weight?: (number|null);
        lastStickerSentTS?: (number|Long|null);
        isLottie?: (boolean|null);
        imageHash?: (string|null);
        isAvatarSticker?: (boolean|null);
    }

    class StickerMetadata implements IStickerMetadata {
        constructor(p?: WAHistorySync.IStickerMetadata);
        public URL?: (string|null);
        public fileSHA256?: (Uint8Array|null);
        public fileEncSHA256?: (Uint8Array|null);
        public mediaKey?: (Uint8Array|null);
        public mimetype?: (string|null);
        public height?: (number|null);
        public width?: (number|null);
        public directPath?: (string|null);
        public fileLength?: (number|Long|null);
        public weight?: (number|null);
        public lastStickerSentTS?: (number|Long|null);
        public isLottie?: (boolean|null);
        public imageHash?: (string|null);
        public isAvatarSticker?: (boolean|null);
        public static create(properties?: WAHistorySync.IStickerMetadata): WAHistorySync.StickerMetadata;
        public static encode(m: WAHistorySync.IStickerMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.StickerMetadata;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.StickerMetadata;
        public static toObject(m: WAHistorySync.StickerMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPastParticipants {
        groupJID?: (string|null);
        pastParticipants?: (WAHistorySync.IPastParticipant[]|null);
    }

    class PastParticipants implements IPastParticipants {
        constructor(p?: WAHistorySync.IPastParticipants);
        public groupJID?: (string|null);
        public pastParticipants: WAHistorySync.IPastParticipant[];
        public static create(properties?: WAHistorySync.IPastParticipants): WAHistorySync.PastParticipants;
        public static encode(m: WAHistorySync.IPastParticipants, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.PastParticipants;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.PastParticipants;
        public static toObject(m: WAHistorySync.PastParticipants, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IAvatarUserSettings {
        FBID?: (string|null);
        password?: (string|null);
    }

    class AvatarUserSettings implements IAvatarUserSettings {
        constructor(p?: WAHistorySync.IAvatarUserSettings);
        public FBID?: (string|null);
        public password?: (string|null);
        public static create(properties?: WAHistorySync.IAvatarUserSettings): WAHistorySync.AvatarUserSettings;
        public static encode(m: WAHistorySync.IAvatarUserSettings, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.AvatarUserSettings;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.AvatarUserSettings;
        public static toObject(m: WAHistorySync.AvatarUserSettings, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INotificationSettings {
        messageVibrate?: (string|null);
        messagePopup?: (string|null);
        messageLight?: (string|null);
        lowPriorityNotifications?: (boolean|null);
        reactionsMuted?: (boolean|null);
        callVibrate?: (string|null);
    }

    class NotificationSettings implements INotificationSettings {
        constructor(p?: WAHistorySync.INotificationSettings);
        public messageVibrate?: (string|null);
        public messagePopup?: (string|null);
        public messageLight?: (string|null);
        public lowPriorityNotifications?: (boolean|null);
        public reactionsMuted?: (boolean|null);
        public callVibrate?: (string|null);
        public static create(properties?: WAHistorySync.INotificationSettings): WAHistorySync.NotificationSettings;
        public static encode(m: WAHistorySync.INotificationSettings, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAHistorySync.NotificationSettings;
        public static fromObject(d: { [k: string]: any }): WAHistorySync.NotificationSettings;
        public static toObject(m: WAHistorySync.NotificationSettings, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}


