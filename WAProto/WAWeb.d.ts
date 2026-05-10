import { WAE2E } from './WAE2E.d';

import { WACommon } from './WACommon.d';import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAWeb {

    interface IWebMessageInfo {
        key?: (WACommon.IMessageKey|null);
        message?: (WAE2E.IMessage|null);
        messageTimestamp?: (number|Long|null);
        status?: (WAWeb.WebMessageInfo.Status|null);
        participant?: (string|null);
        messageC2STimestamp?: (number|Long|null);
        ignore?: (boolean|null);
        starred?: (boolean|null);
        broadcast?: (boolean|null);
        pushName?: (string|null);
        mediaCiphertextSha256?: (Uint8Array|null);
        multicast?: (boolean|null);
        urlText?: (boolean|null);
        urlNumber?: (boolean|null);
        messageStubType?: (WAWeb.WebMessageInfo.StubType|null);
        clearMedia?: (boolean|null);
        messageStubParameters?: (string[]|null);
        duration?: (number|null);
        labels?: (string[]|null);
        paymentInfo?: (WAWeb.IPaymentInfo|null);
        finalLiveLocation?: (WAE2E.ILiveLocationMessage|null);
        quotedPaymentInfo?: (WAWeb.IPaymentInfo|null);
        ephemeralStartTimestamp?: (number|Long|null);
        ephemeralDuration?: (number|null);
        ephemeralOffToOn?: (boolean|null);
        ephemeralOutOfSync?: (boolean|null);
        bizPrivacyStatus?: (WAWeb.WebMessageInfo.BizPrivacyStatus|null);
        verifiedBizName?: (string|null);
        mediaData?: (WAWeb.IMediaData|null);
        photoChange?: (WAWeb.IPhotoChange|null);
        userReceipt?: (WAWeb.IUserReceipt[]|null);
        reactions?: (WAWeb.IReaction[]|null);
        quotedStickerData?: (WAWeb.IMediaData|null);
        futureproofData?: (Uint8Array|null);
        statusPsa?: (WAWeb.IStatusPSA|null);
        pollUpdates?: (WAWeb.IPollUpdate[]|null);
        pollAdditionalMetadata?: (WAWeb.IPollAdditionalMetadata|null);
        agentId?: (string|null);
        statusAlreadyViewed?: (boolean|null);
        messageSecret?: (Uint8Array|null);
        keepInChat?: (WAWeb.IKeepInChat|null);
        originalSelfAuthorUserJidString?: (string|null);
        revokeMessageTimestamp?: (number|Long|null);
        pinInChat?: (WAWeb.IPinInChat|null);
        premiumMessageInfo?: (WAWeb.IPremiumMessageInfo|null);
        is1PBizBotMessage?: (boolean|null);
        isGroupHistoryMessage?: (boolean|null);
        botMessageInvokerJid?: (string|null);
        commentMetadata?: (WAWeb.ICommentMetadata|null);
        eventResponses?: (WAWeb.IEventResponse[]|null);
        reportingTokenInfo?: (WAWeb.IReportingTokenInfo|null);
        newsletterServerId?: (number|Long|null);
        eventAdditionalMetadata?: (WAWeb.IEventAdditionalMetadata|null);
        isMentionedInStatus?: (boolean|null);
        statusMentions?: (string[]|null);
        targetMessageId?: (WACommon.IMessageKey|null);
        messageAddOns?: (WAWeb.IMessageAddOn[]|null);
        statusMentionMessageInfo?: (WAWeb.IStatusMentionMessage|null);
        isSupportAiMessage?: (boolean|null);
        statusMentionSources?: (string[]|null);
        supportAiCitations?: (WAWeb.ICitation[]|null);
        botTargetId?: (string|null);
        groupHistoryIndividualMessageInfo?: (WAWeb.IGroupHistoryIndividualMessageInfo|null);
        groupHistoryBundleInfo?: (WAWeb.IGroupHistoryBundleInfo|null);
        interactiveMessageAdditionalMetadata?: (WAWeb.IInteractiveMessageAdditionalMetadata|null);
        quarantinedMessage?: (WAWeb.IQuarantinedMessage|null);
        nonJidMentions?: (number|null);
        hsmTag?: (string|null);
        ephemeralExpirationTimestamp?: (number|Long|null);
        scheduledMessageMetadata?: (WAWeb.IScheduledMessageMetadata|null);
        decisionId?: (string|null);
        decisionSources?: (string[]|null);
    }

    class WebMessageInfo implements IWebMessageInfo {
        constructor(p?: WAWeb.IWebMessageInfo);
        public key?: (WACommon.IMessageKey|null);
        public message?: (WAE2E.IMessage|null);
        public messageTimestamp?: (number|Long|null);
        public status?: (WAWeb.WebMessageInfo.Status|null);
        public participant?: (string|null);
        public messageC2STimestamp?: (number|Long|null);
        public ignore?: (boolean|null);
        public starred?: (boolean|null);
        public broadcast?: (boolean|null);
        public pushName?: (string|null);
        public mediaCiphertextSha256?: (Uint8Array|null);
        public multicast?: (boolean|null);
        public urlText?: (boolean|null);
        public urlNumber?: (boolean|null);
        public messageStubType?: (WAWeb.WebMessageInfo.StubType|null);
        public clearMedia?: (boolean|null);
        public messageStubParameters: string[];
        public duration?: (number|null);
        public labels: string[];
        public paymentInfo?: (WAWeb.IPaymentInfo|null);
        public finalLiveLocation?: (WAE2E.ILiveLocationMessage|null);
        public quotedPaymentInfo?: (WAWeb.IPaymentInfo|null);
        public ephemeralStartTimestamp?: (number|Long|null);
        public ephemeralDuration?: (number|null);
        public ephemeralOffToOn?: (boolean|null);
        public ephemeralOutOfSync?: (boolean|null);
        public bizPrivacyStatus?: (WAWeb.WebMessageInfo.BizPrivacyStatus|null);
        public verifiedBizName?: (string|null);
        public mediaData?: (WAWeb.IMediaData|null);
        public photoChange?: (WAWeb.IPhotoChange|null);
        public userReceipt: WAWeb.IUserReceipt[];
        public reactions: WAWeb.IReaction[];
        public quotedStickerData?: (WAWeb.IMediaData|null);
        public futureproofData?: (Uint8Array|null);
        public statusPsa?: (WAWeb.IStatusPSA|null);
        public pollUpdates: WAWeb.IPollUpdate[];
        public pollAdditionalMetadata?: (WAWeb.IPollAdditionalMetadata|null);
        public agentId?: (string|null);
        public statusAlreadyViewed?: (boolean|null);
        public messageSecret?: (Uint8Array|null);
        public keepInChat?: (WAWeb.IKeepInChat|null);
        public originalSelfAuthorUserJidString?: (string|null);
        public revokeMessageTimestamp?: (number|Long|null);
        public pinInChat?: (WAWeb.IPinInChat|null);
        public premiumMessageInfo?: (WAWeb.IPremiumMessageInfo|null);
        public is1PBizBotMessage?: (boolean|null);
        public isGroupHistoryMessage?: (boolean|null);
        public botMessageInvokerJid?: (string|null);
        public commentMetadata?: (WAWeb.ICommentMetadata|null);
        public eventResponses: WAWeb.IEventResponse[];
        public reportingTokenInfo?: (WAWeb.IReportingTokenInfo|null);
        public newsletterServerId?: (number|Long|null);
        public eventAdditionalMetadata?: (WAWeb.IEventAdditionalMetadata|null);
        public isMentionedInStatus?: (boolean|null);
        public statusMentions: string[];
        public targetMessageId?: (WACommon.IMessageKey|null);
        public messageAddOns: WAWeb.IMessageAddOn[];
        public statusMentionMessageInfo?: (WAWeb.IStatusMentionMessage|null);
        public isSupportAiMessage?: (boolean|null);
        public statusMentionSources: string[];
        public supportAiCitations: WAWeb.ICitation[];
        public botTargetId?: (string|null);
        public groupHistoryIndividualMessageInfo?: (WAWeb.IGroupHistoryIndividualMessageInfo|null);
        public groupHistoryBundleInfo?: (WAWeb.IGroupHistoryBundleInfo|null);
        public interactiveMessageAdditionalMetadata?: (WAWeb.IInteractiveMessageAdditionalMetadata|null);
        public quarantinedMessage?: (WAWeb.IQuarantinedMessage|null);
        public nonJidMentions?: (number|null);
        public hsmTag?: (string|null);
        public ephemeralExpirationTimestamp?: (number|Long|null);
        public scheduledMessageMetadata?: (WAWeb.IScheduledMessageMetadata|null);
        public decisionId?: (string|null);
        public decisionSources: string[];
        public static create(properties?: WAWeb.IWebMessageInfo): WAWeb.WebMessageInfo;
        public static encode(m: WAWeb.IWebMessageInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.WebMessageInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.WebMessageInfo;
        public static toObject(m: WAWeb.WebMessageInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WebMessageInfo {

        enum BizPrivacyStatus {
            E2EE = 0,
            FB = 2,
            BSP = 1,
            BSP_AND_FB = 3
        }

        enum StubType {
            UNKNOWN = 0,
            REVOKE = 1,
            CIPHERTEXT = 2,
            FUTUREPROOF = 3,
            NON_VERIFIED_TRANSITION = 4,
            UNVERIFIED_TRANSITION = 5,
            VERIFIED_TRANSITION = 6,
            VERIFIED_LOW_UNKNOWN = 7,
            VERIFIED_HIGH = 8,
            VERIFIED_INITIAL_UNKNOWN = 9,
            VERIFIED_INITIAL_LOW = 10,
            VERIFIED_INITIAL_HIGH = 11,
            VERIFIED_TRANSITION_ANY_TO_NONE = 12,
            VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
            VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
            VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
            VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
            VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
            VERIFIED_TRANSITION_NONE_TO_LOW = 18,
            VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
            GROUP_CREATE = 20,
            GROUP_CHANGE_SUBJECT = 21,
            GROUP_CHANGE_ICON = 22,
            GROUP_CHANGE_INVITE_LINK = 23,
            GROUP_CHANGE_DESCRIPTION = 24,
            GROUP_CHANGE_RESTRICT = 25,
            GROUP_CHANGE_ANNOUNCE = 26,
            GROUP_PARTICIPANT_ADD = 27,
            GROUP_PARTICIPANT_REMOVE = 28,
            GROUP_PARTICIPANT_PROMOTE = 29,
            GROUP_PARTICIPANT_DEMOTE = 30,
            GROUP_PARTICIPANT_INVITE = 31,
            GROUP_PARTICIPANT_LEAVE = 32,
            GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
            BROADCAST_CREATE = 34,
            BROADCAST_ADD = 35,
            BROADCAST_REMOVE = 36,
            GENERIC_NOTIFICATION = 37,
            E2E_IDENTITY_CHANGED = 38,
            E2E_ENCRYPTED = 39,
            CALL_MISSED_VOICE = 40,
            CALL_MISSED_VIDEO = 41,
            INDIVIDUAL_CHANGE_NUMBER = 42,
            GROUP_DELETE = 43,
            GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
            CALL_MISSED_GROUP_VOICE = 45,
            CALL_MISSED_GROUP_VIDEO = 46,
            PAYMENT_CIPHERTEXT = 47,
            PAYMENT_FUTUREPROOF = 48,
            PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
            PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
            PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
            PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
            PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
            PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
            PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
            PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
            PAYMENT_ACTION_REQUEST_DECLINED = 57,
            PAYMENT_ACTION_REQUEST_EXPIRED = 58,
            PAYMENT_ACTION_REQUEST_CANCELLED = 59,
            BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
            BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
            BIZ_INTRO_TOP = 62,
            BIZ_INTRO_BOTTOM = 63,
            BIZ_NAME_CHANGE = 64,
            BIZ_MOVE_TO_CONSUMER_APP = 65,
            BIZ_TWO_TIER_MIGRATION_TOP = 66,
            BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
            OVERSIZED = 68,
            GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
            GROUP_V4_ADD_INVITE_SENT = 70,
            GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
            CHANGE_EPHEMERAL_SETTING = 72,
            E2E_DEVICE_CHANGED = 73,
            VIEWED_ONCE = 74,
            E2E_ENCRYPTED_NOW = 75,
            BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76,
            BLUE_MSG_BSP_FB_TO_SELF_FB = 77,
            BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78,
            BLUE_MSG_BSP_FB_UNVERIFIED = 79,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80,
            BLUE_MSG_BSP_FB_VERIFIED = 81,
            BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82,
            BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83,
            BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84,
            BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85,
            BLUE_MSG_BSP_PREMISE_VERIFIED = 86,
            BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87,
            BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88,
            BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89,
            BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90,
            BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91,
            BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92,
            BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93,
            BLUE_MSG_SELF_FB_UNVERIFIED = 94,
            BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95,
            BLUE_MSG_SELF_FB_VERIFIED = 96,
            BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97,
            BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98,
            BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99,
            BLUE_MSG_SELF_PREMISE_VERIFIED = 100,
            BLUE_MSG_TO_BSP_FB = 101,
            BLUE_MSG_TO_CONSUMER = 102,
            BLUE_MSG_TO_SELF_FB = 103,
            BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104,
            BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105,
            BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106,
            BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107,
            BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108,
            BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109,
            BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110,
            BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112,
            BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113,
            BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114,
            BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115,
            BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116,
            BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117,
            E2E_IDENTITY_UNAVAILABLE = 118,
            GROUP_CREATING = 119,
            GROUP_CREATE_FAILED = 120,
            GROUP_BOUNCED = 121,
            BLOCK_CONTACT = 122,
            EPHEMERAL_SETTING_NOT_APPLIED = 123,
            SYNC_FAILED = 124,
            SYNCING = 125,
            BIZ_PRIVACY_MODE_INIT_FB = 126,
            BIZ_PRIVACY_MODE_INIT_BSP = 127,
            BIZ_PRIVACY_MODE_TO_FB = 128,
            BIZ_PRIVACY_MODE_TO_BSP = 129,
            DISAPPEARING_MODE = 130,
            E2E_DEVICE_FETCH_FAILED = 131,
            ADMIN_REVOKE = 132,
            GROUP_INVITE_LINK_GROWTH_LOCKED = 133,
            COMMUNITY_LINK_PARENT_GROUP = 134,
            COMMUNITY_LINK_SIBLING_GROUP = 135,
            COMMUNITY_LINK_SUB_GROUP = 136,
            COMMUNITY_UNLINK_PARENT_GROUP = 137,
            COMMUNITY_UNLINK_SIBLING_GROUP = 138,
            COMMUNITY_UNLINK_SUB_GROUP = 139,
            GROUP_PARTICIPANT_ACCEPT = 140,
            GROUP_PARTICIPANT_LINKED_GROUP_JOIN = 141,
            COMMUNITY_CREATE = 142,
            EPHEMERAL_KEEP_IN_CHAT = 143,
            GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST = 144,
            GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE = 145,
            INTEGRITY_UNLINK_PARENT_GROUP = 146,
            COMMUNITY_PARTICIPANT_PROMOTE = 147,
            COMMUNITY_PARTICIPANT_DEMOTE = 148,
            COMMUNITY_PARENT_GROUP_DELETED = 149,
            COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL = 150,
            GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP = 151,
            MASKED_THREAD_CREATED = 152,
            MASKED_THREAD_UNMASKED = 153,
            BIZ_CHAT_ASSIGNMENT = 154,
            CHAT_PSA = 155,
            CHAT_POLL_CREATION_MESSAGE = 156,
            CAG_MASKED_THREAD_CREATED = 157,
            COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED = 158,
            CAG_INVITE_AUTO_ADD = 159,
            BIZ_CHAT_ASSIGNMENT_UNASSIGN = 160,
            CAG_INVITE_AUTO_JOINED = 161,
            SCHEDULED_CALL_START_MESSAGE = 162,
            COMMUNITY_INVITE_RICH = 163,
            COMMUNITY_INVITE_AUTO_ADD_RICH = 164,
            SUB_GROUP_INVITE_RICH = 165,
            SUB_GROUP_PARTICIPANT_ADD_RICH = 166,
            COMMUNITY_LINK_PARENT_GROUP_RICH = 167,
            COMMUNITY_PARTICIPANT_ADD_RICH = 168,
            SILENCED_UNKNOWN_CALLER_AUDIO = 169,
            SILENCED_UNKNOWN_CALLER_VIDEO = 170,
            GROUP_MEMBER_ADD_MODE = 171,
            GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD = 172,
            COMMUNITY_CHANGE_DESCRIPTION = 173,
            SENDER_INVITE = 174,
            RECEIVER_INVITE = 175,
            COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS = 176,
            PINNED_MESSAGE_IN_CHAT = 177,
            PAYMENT_INVITE_SETUP_INVITER = 178,
            PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY = 179,
            PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE = 180,
            LINKED_GROUP_CALL_START = 181,
            REPORT_TO_ADMIN_ENABLED_STATUS = 182,
            EMPTY_SUBGROUP_CREATE = 183,
            SCHEDULED_CALL_CANCEL = 184,
            SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH = 185,
            GROUP_CHANGE_RECENT_HISTORY_SHARING = 186,
            PAID_MESSAGE_SERVER_CAMPAIGN_ID = 187,
            GENERAL_CHAT_CREATE = 188,
            GENERAL_CHAT_ADD = 189,
            GENERAL_CHAT_AUTO_ADD_DISABLED = 190,
            SUGGESTED_SUBGROUP_ANNOUNCE = 191,
            BIZ_BOT_1P_MESSAGING_ENABLED = 192,
            CHANGE_USERNAME = 193,
            BIZ_COEX_PRIVACY_INIT_SELF = 194,
            BIZ_COEX_PRIVACY_TRANSITION_SELF = 195,
            SUPPORT_AI_EDUCATION = 196,
            BIZ_BOT_3P_MESSAGING_ENABLED = 197,
            REMINDER_SETUP_MESSAGE = 198,
            REMINDER_SENT_MESSAGE = 199,
            REMINDER_CANCEL_MESSAGE = 200,
            BIZ_COEX_PRIVACY_INIT = 201,
            BIZ_COEX_PRIVACY_TRANSITION = 202,
            GROUP_DEACTIVATED = 203,
            COMMUNITY_DEACTIVATE_SIBLING_GROUP = 204,
            EVENT_UPDATED = 205,
            EVENT_CANCELED = 206,
            COMMUNITY_OWNER_UPDATED = 207,
            COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN = 208,
            CAPI_GROUP_NE2EE_SYSTEM_MESSAGE = 209,
            STATUS_MENTION = 210,
            USER_CONTROLS_SYSTEM_MESSAGE = 211,
            SUPPORT_SYSTEM_MESSAGE = 212,
            CHANGE_LID = 213,
            BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE = 214,
            BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE = 215,
            CHANGE_LIMIT_SHARING = 216,
            GROUP_MEMBER_LINK_MODE = 217,
            BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE = 218,
            PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE = 219,
            QUARANTINED_MESSAGE = 220,
            GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE = 221,
            GROUP_OPEN_BOT_ADDED = 222,
            GROUP_TEE_BOT_ADDED = 223,
            CONTACT_INFO = 224,
            SCHEDULED_MESSAGE_CREATED = 225
        }

        enum Status {
            ERROR = 0,
            PENDING = 1,
            SERVER_ACK = 2,
            DELIVERY_ACK = 3,
            READ = 4,
            PLAYED = 5
        }
    }

    interface IPaymentInfo {
        currencyDeprecated?: (WAWeb.PaymentInfo.Currency|null);
        amount1000?: (number|Long|null);
        receiverJid?: (string|null);
        status?: (WAWeb.PaymentInfo.Status|null);
        transactionTimestamp?: (number|Long|null);
        requestMessageKey?: (WACommon.IMessageKey|null);
        expiryTimestamp?: (number|Long|null);
        futureproofed?: (boolean|null);
        currency?: (string|null);
        txnStatus?: (WAWeb.PaymentInfo.TxnStatus|null);
        useNoviFiatFormat?: (boolean|null);
        primaryAmount?: (WAE2E.IMoney|null);
        exchangeAmount?: (WAE2E.IMoney|null);
    }

    class PaymentInfo implements IPaymentInfo {
        constructor(p?: WAWeb.IPaymentInfo);
        public currencyDeprecated?: (WAWeb.PaymentInfo.Currency|null);
        public amount1000?: (number|Long|null);
        public receiverJid?: (string|null);
        public status?: (WAWeb.PaymentInfo.Status|null);
        public transactionTimestamp?: (number|Long|null);
        public requestMessageKey?: (WACommon.IMessageKey|null);
        public expiryTimestamp?: (number|Long|null);
        public futureproofed?: (boolean|null);
        public currency?: (string|null);
        public txnStatus?: (WAWeb.PaymentInfo.TxnStatus|null);
        public useNoviFiatFormat?: (boolean|null);
        public primaryAmount?: (WAE2E.IMoney|null);
        public exchangeAmount?: (WAE2E.IMoney|null);
        public static create(properties?: WAWeb.IPaymentInfo): WAWeb.PaymentInfo;
        public static encode(m: WAWeb.IPaymentInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.PaymentInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.PaymentInfo;
        public static toObject(m: WAWeb.PaymentInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PaymentInfo {

        enum TxnStatus {
            UNKNOWN = 0,
            PENDING_SETUP = 1,
            PENDING_RECEIVER_SETUP = 2,
            INIT = 3,
            SUCCESS = 4,
            COMPLETED = 5,
            FAILED = 6,
            FAILED_RISK = 7,
            FAILED_PROCESSING = 8,
            FAILED_RECEIVER_PROCESSING = 9,
            FAILED_DA = 10,
            FAILED_DA_FINAL = 11,
            REFUNDED_TXN = 12,
            REFUND_FAILED = 13,
            REFUND_FAILED_PROCESSING = 14,
            REFUND_FAILED_DA = 15,
            EXPIRED_TXN = 16,
            AUTH_CANCELED = 17,
            AUTH_CANCEL_FAILED_PROCESSING = 18,
            AUTH_CANCEL_FAILED = 19,
            COLLECT_INIT = 20,
            COLLECT_SUCCESS = 21,
            COLLECT_FAILED = 22,
            COLLECT_FAILED_RISK = 23,
            COLLECT_REJECTED = 24,
            COLLECT_EXPIRED = 25,
            COLLECT_CANCELED = 26,
            COLLECT_CANCELLING = 27,
            IN_REVIEW = 28,
            REVERSAL_SUCCESS = 29,
            REVERSAL_PENDING = 30,
            REFUND_PENDING = 31
        }

        enum Status {
            UNKNOWN_STATUS = 0,
            PROCESSING = 1,
            SENT = 2,
            NEED_TO_ACCEPT = 3,
            COMPLETE = 4,
            COULD_NOT_COMPLETE = 5,
            REFUNDED = 6,
            EXPIRED = 7,
            REJECTED = 8,
            CANCELLED = 9,
            WAITING_FOR_PAYER = 10,
            WAITING = 11
        }

        enum Currency {
            UNKNOWN_CURRENCY = 0,
            INR = 1
        }
    }

    interface IWebFeatures {
        labelsDisplay?: (WAWeb.WebFeatures.Flag|null);
        voipIndividualOutgoing?: (WAWeb.WebFeatures.Flag|null);
        groupsV3?: (WAWeb.WebFeatures.Flag|null);
        groupsV3Create?: (WAWeb.WebFeatures.Flag|null);
        changeNumberV2?: (WAWeb.WebFeatures.Flag|null);
        queryStatusV3Thumbnail?: (WAWeb.WebFeatures.Flag|null);
        liveLocations?: (WAWeb.WebFeatures.Flag|null);
        queryVname?: (WAWeb.WebFeatures.Flag|null);
        voipIndividualIncoming?: (WAWeb.WebFeatures.Flag|null);
        quickRepliesQuery?: (WAWeb.WebFeatures.Flag|null);
        payments?: (WAWeb.WebFeatures.Flag|null);
        stickerPackQuery?: (WAWeb.WebFeatures.Flag|null);
        liveLocationsFinal?: (WAWeb.WebFeatures.Flag|null);
        labelsEdit?: (WAWeb.WebFeatures.Flag|null);
        mediaUpload?: (WAWeb.WebFeatures.Flag|null);
        mediaUploadRichQuickReplies?: (WAWeb.WebFeatures.Flag|null);
        vnameV2?: (WAWeb.WebFeatures.Flag|null);
        videoPlaybackUrl?: (WAWeb.WebFeatures.Flag|null);
        statusRanking?: (WAWeb.WebFeatures.Flag|null);
        voipIndividualVideo?: (WAWeb.WebFeatures.Flag|null);
        thirdPartyStickers?: (WAWeb.WebFeatures.Flag|null);
        frequentlyForwardedSetting?: (WAWeb.WebFeatures.Flag|null);
        groupsV4JoinPermission?: (WAWeb.WebFeatures.Flag|null);
        recentStickers?: (WAWeb.WebFeatures.Flag|null);
        catalog?: (WAWeb.WebFeatures.Flag|null);
        starredStickers?: (WAWeb.WebFeatures.Flag|null);
        voipGroupCall?: (WAWeb.WebFeatures.Flag|null);
        templateMessage?: (WAWeb.WebFeatures.Flag|null);
        templateMessageInteractivity?: (WAWeb.WebFeatures.Flag|null);
        ephemeralMessages?: (WAWeb.WebFeatures.Flag|null);
        e2ENotificationSync?: (WAWeb.WebFeatures.Flag|null);
        recentStickersV2?: (WAWeb.WebFeatures.Flag|null);
        recentStickersV3?: (WAWeb.WebFeatures.Flag|null);
        userNotice?: (WAWeb.WebFeatures.Flag|null);
        support?: (WAWeb.WebFeatures.Flag|null);
        groupUiiCleanup?: (WAWeb.WebFeatures.Flag|null);
        groupDogfoodingInternalOnly?: (WAWeb.WebFeatures.Flag|null);
        settingsSync?: (WAWeb.WebFeatures.Flag|null);
        archiveV2?: (WAWeb.WebFeatures.Flag|null);
        ephemeralAllowGroupMembers?: (WAWeb.WebFeatures.Flag|null);
        ephemeral24HDuration?: (WAWeb.WebFeatures.Flag|null);
        mdForceUpgrade?: (WAWeb.WebFeatures.Flag|null);
        disappearingMode?: (WAWeb.WebFeatures.Flag|null);
        externalMdOptInAvailable?: (WAWeb.WebFeatures.Flag|null);
        noDeleteMessageTimeLimit?: (WAWeb.WebFeatures.Flag|null);
    }

    class WebFeatures implements IWebFeatures {
        constructor(p?: WAWeb.IWebFeatures);
        public labelsDisplay?: (WAWeb.WebFeatures.Flag|null);
        public voipIndividualOutgoing?: (WAWeb.WebFeatures.Flag|null);
        public groupsV3?: (WAWeb.WebFeatures.Flag|null);
        public groupsV3Create?: (WAWeb.WebFeatures.Flag|null);
        public changeNumberV2?: (WAWeb.WebFeatures.Flag|null);
        public queryStatusV3Thumbnail?: (WAWeb.WebFeatures.Flag|null);
        public liveLocations?: (WAWeb.WebFeatures.Flag|null);
        public queryVname?: (WAWeb.WebFeatures.Flag|null);
        public voipIndividualIncoming?: (WAWeb.WebFeatures.Flag|null);
        public quickRepliesQuery?: (WAWeb.WebFeatures.Flag|null);
        public payments?: (WAWeb.WebFeatures.Flag|null);
        public stickerPackQuery?: (WAWeb.WebFeatures.Flag|null);
        public liveLocationsFinal?: (WAWeb.WebFeatures.Flag|null);
        public labelsEdit?: (WAWeb.WebFeatures.Flag|null);
        public mediaUpload?: (WAWeb.WebFeatures.Flag|null);
        public mediaUploadRichQuickReplies?: (WAWeb.WebFeatures.Flag|null);
        public vnameV2?: (WAWeb.WebFeatures.Flag|null);
        public videoPlaybackUrl?: (WAWeb.WebFeatures.Flag|null);
        public statusRanking?: (WAWeb.WebFeatures.Flag|null);
        public voipIndividualVideo?: (WAWeb.WebFeatures.Flag|null);
        public thirdPartyStickers?: (WAWeb.WebFeatures.Flag|null);
        public frequentlyForwardedSetting?: (WAWeb.WebFeatures.Flag|null);
        public groupsV4JoinPermission?: (WAWeb.WebFeatures.Flag|null);
        public recentStickers?: (WAWeb.WebFeatures.Flag|null);
        public catalog?: (WAWeb.WebFeatures.Flag|null);
        public starredStickers?: (WAWeb.WebFeatures.Flag|null);
        public voipGroupCall?: (WAWeb.WebFeatures.Flag|null);
        public templateMessage?: (WAWeb.WebFeatures.Flag|null);
        public templateMessageInteractivity?: (WAWeb.WebFeatures.Flag|null);
        public ephemeralMessages?: (WAWeb.WebFeatures.Flag|null);
        public e2ENotificationSync?: (WAWeb.WebFeatures.Flag|null);
        public recentStickersV2?: (WAWeb.WebFeatures.Flag|null);
        public recentStickersV3?: (WAWeb.WebFeatures.Flag|null);
        public userNotice?: (WAWeb.WebFeatures.Flag|null);
        public support?: (WAWeb.WebFeatures.Flag|null);
        public groupUiiCleanup?: (WAWeb.WebFeatures.Flag|null);
        public groupDogfoodingInternalOnly?: (WAWeb.WebFeatures.Flag|null);
        public settingsSync?: (WAWeb.WebFeatures.Flag|null);
        public archiveV2?: (WAWeb.WebFeatures.Flag|null);
        public ephemeralAllowGroupMembers?: (WAWeb.WebFeatures.Flag|null);
        public ephemeral24HDuration?: (WAWeb.WebFeatures.Flag|null);
        public mdForceUpgrade?: (WAWeb.WebFeatures.Flag|null);
        public disappearingMode?: (WAWeb.WebFeatures.Flag|null);
        public externalMdOptInAvailable?: (WAWeb.WebFeatures.Flag|null);
        public noDeleteMessageTimeLimit?: (WAWeb.WebFeatures.Flag|null);
        public static create(properties?: WAWeb.IWebFeatures): WAWeb.WebFeatures;
        public static encode(m: WAWeb.IWebFeatures, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.WebFeatures;
        public static fromObject(d: { [k: string]: any }): WAWeb.WebFeatures;
        public static toObject(m: WAWeb.WebFeatures, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WebFeatures {

        enum Flag {
            NOT_STARTED = 0,
            FORCE_UPGRADE = 1,
            DEVELOPMENT = 2,
            PRODUCTION = 3
        }
    }

    interface IPinInChat {
        type?: (WAWeb.PinInChat.Type|null);
        key?: (WACommon.IMessageKey|null);
        senderTimestampMs?: (number|Long|null);
        serverTimestampMs?: (number|Long|null);
        messageAddOnContextInfo?: (WAWeb.IMessageAddOnContextInfo|null);
    }

    class PinInChat implements IPinInChat {
        constructor(p?: WAWeb.IPinInChat);
        public type?: (WAWeb.PinInChat.Type|null);
        public key?: (WACommon.IMessageKey|null);
        public senderTimestampMs?: (number|Long|null);
        public serverTimestampMs?: (number|Long|null);
        public messageAddOnContextInfo?: (WAWeb.IMessageAddOnContextInfo|null);
        public static create(properties?: WAWeb.IPinInChat): WAWeb.PinInChat;
        public static encode(m: WAWeb.IPinInChat, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.PinInChat;
        public static fromObject(d: { [k: string]: any }): WAWeb.PinInChat;
        public static toObject(m: WAWeb.PinInChat, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace PinInChat {

        enum Type {
            UNKNOWN_TYPE = 0,
            PIN_FOR_ALL = 1,
            UNPIN_FOR_ALL = 2
        }
    }

    interface IMessageAddOn {
        messageAddOnType?: (WAWeb.MessageAddOn.MessageAddOnType|null);
        messageAddOn?: (WAE2E.IMessage|null);
        senderTimestampMs?: (number|Long|null);
        serverTimestampMs?: (number|Long|null);
        status?: (WAWeb.WebMessageInfo.Status|null);
        addOnContextInfo?: (WAWeb.IMessageAddOnContextInfo|null);
        messageAddOnKey?: (WACommon.IMessageKey|null);
        legacyMessage?: (WAWeb.ILegacyMessage|null);
    }

    class MessageAddOn implements IMessageAddOn {
        constructor(p?: WAWeb.IMessageAddOn);
        public messageAddOnType?: (WAWeb.MessageAddOn.MessageAddOnType|null);
        public messageAddOn?: (WAE2E.IMessage|null);
        public senderTimestampMs?: (number|Long|null);
        public serverTimestampMs?: (number|Long|null);
        public status?: (WAWeb.WebMessageInfo.Status|null);
        public addOnContextInfo?: (WAWeb.IMessageAddOnContextInfo|null);
        public messageAddOnKey?: (WACommon.IMessageKey|null);
        public legacyMessage?: (WAWeb.ILegacyMessage|null);
        public static create(properties?: WAWeb.IMessageAddOn): WAWeb.MessageAddOn;
        public static encode(m: WAWeb.IMessageAddOn, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.MessageAddOn;
        public static fromObject(d: { [k: string]: any }): WAWeb.MessageAddOn;
        public static toObject(m: WAWeb.MessageAddOn, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MessageAddOn {

        enum MessageAddOnType {
            UNDEFINED = 0,
            REACTION = 1,
            EVENT_RESPONSE = 2,
            POLL_UPDATE = 3,
            PIN_IN_CHAT = 4
        }
    }

    interface IGroupHistoryBundleInfo {
        deprecatedMessageHistoryBundle?: (WAE2E.IMessageHistoryBundle|null);
        processState?: (WAWeb.GroupHistoryBundleInfo.ProcessState|null);
    }

    class GroupHistoryBundleInfo implements IGroupHistoryBundleInfo {
        constructor(p?: WAWeb.IGroupHistoryBundleInfo);
        public deprecatedMessageHistoryBundle?: (WAE2E.IMessageHistoryBundle|null);
        public processState?: (WAWeb.GroupHistoryBundleInfo.ProcessState|null);
        public static create(properties?: WAWeb.IGroupHistoryBundleInfo): WAWeb.GroupHistoryBundleInfo;
        public static encode(m: WAWeb.IGroupHistoryBundleInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.GroupHistoryBundleInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.GroupHistoryBundleInfo;
        public static toObject(m: WAWeb.GroupHistoryBundleInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace GroupHistoryBundleInfo {

        enum ProcessState {
            NOT_INJECTED = 0,
            INJECTED = 1,
            INJECTED_PARTIAL = 2,
            INJECTION_FAILED = 3,
            INJECTION_FAILED_NO_RETRY = 4
        }
    }

    interface ICommentMetadata {
        commentParentKey?: (WACommon.IMessageKey|null);
        replyCount?: (number|null);
    }

    class CommentMetadata implements ICommentMetadata {
        constructor(p?: WAWeb.ICommentMetadata);
        public commentParentKey?: (WACommon.IMessageKey|null);
        public replyCount?: (number|null);
        public static create(properties?: WAWeb.ICommentMetadata): WAWeb.CommentMetadata;
        public static encode(m: WAWeb.ICommentMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.CommentMetadata;
        public static fromObject(d: { [k: string]: any }): WAWeb.CommentMetadata;
        public static toObject(m: WAWeb.CommentMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IWebNotificationsInfo {
        timestamp?: (number|Long|null);
        unreadChats?: (number|null);
        notifyMessageCount?: (number|null);
        notifyMessages?: (WAWeb.IWebMessageInfo[]|null);
    }

    class WebNotificationsInfo implements IWebNotificationsInfo {
        constructor(p?: WAWeb.IWebNotificationsInfo);
        public timestamp?: (number|Long|null);
        public unreadChats?: (number|null);
        public notifyMessageCount?: (number|null);
        public notifyMessages: WAWeb.IWebMessageInfo[];
        public static create(properties?: WAWeb.IWebNotificationsInfo): WAWeb.WebNotificationsInfo;
        public static encode(m: WAWeb.IWebNotificationsInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.WebNotificationsInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.WebNotificationsInfo;
        public static toObject(m: WAWeb.WebNotificationsInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface INotificationMessageInfo {
        key?: (WACommon.IMessageKey|null);
        message?: (WAE2E.IMessage|null);
        messageTimestamp?: (number|Long|null);
        participant?: (string|null);
    }

    class NotificationMessageInfo implements INotificationMessageInfo {
        constructor(p?: WAWeb.INotificationMessageInfo);
        public key?: (WACommon.IMessageKey|null);
        public message?: (WAE2E.IMessage|null);
        public messageTimestamp?: (number|Long|null);
        public participant?: (string|null);
        public static create(properties?: WAWeb.INotificationMessageInfo): WAWeb.NotificationMessageInfo;
        public static encode(m: WAWeb.INotificationMessageInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.NotificationMessageInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.NotificationMessageInfo;
        public static toObject(m: WAWeb.NotificationMessageInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IReportingTokenInfo {
        reportingTag?: (Uint8Array|null);
    }

    class ReportingTokenInfo implements IReportingTokenInfo {
        constructor(p?: WAWeb.IReportingTokenInfo);
        public reportingTag?: (Uint8Array|null);
        public static create(properties?: WAWeb.IReportingTokenInfo): WAWeb.ReportingTokenInfo;
        public static encode(m: WAWeb.IReportingTokenInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.ReportingTokenInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.ReportingTokenInfo;
        public static toObject(m: WAWeb.ReportingTokenInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMediaData {
        localPath?: (string|null);
    }

    class MediaData implements IMediaData {
        constructor(p?: WAWeb.IMediaData);
        public localPath?: (string|null);
        public static create(properties?: WAWeb.IMediaData): WAWeb.MediaData;
        public static encode(m: WAWeb.IMediaData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.MediaData;
        public static fromObject(d: { [k: string]: any }): WAWeb.MediaData;
        public static toObject(m: WAWeb.MediaData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPhotoChange {
        oldPhoto?: (Uint8Array|null);
        newPhoto?: (Uint8Array|null);
        newPhotoId?: (number|null);
    }

    class PhotoChange implements IPhotoChange {
        constructor(p?: WAWeb.IPhotoChange);
        public oldPhoto?: (Uint8Array|null);
        public newPhoto?: (Uint8Array|null);
        public newPhotoId?: (number|null);
        public static create(properties?: WAWeb.IPhotoChange): WAWeb.PhotoChange;
        public static encode(m: WAWeb.IPhotoChange, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.PhotoChange;
        public static fromObject(d: { [k: string]: any }): WAWeb.PhotoChange;
        public static toObject(m: WAWeb.PhotoChange, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStatusPSA {
        campaignId?: (number|Long|null);
        campaignExpirationTimestamp?: (number|Long|null);
    }

    class StatusPSA implements IStatusPSA {
        constructor(p?: WAWeb.IStatusPSA);
        public campaignId: (number|Long);
        public campaignExpirationTimestamp?: (number|Long|null);
        public static create(properties?: WAWeb.IStatusPSA): WAWeb.StatusPSA;
        public static encode(m: WAWeb.IStatusPSA, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.StatusPSA;
        public static fromObject(d: { [k: string]: any }): WAWeb.StatusPSA;
        public static toObject(m: WAWeb.StatusPSA, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IUserReceipt {
        userJid?: (string|null);
        receiptTimestamp?: (number|Long|null);
        readTimestamp?: (number|Long|null);
        playedTimestamp?: (number|Long|null);
        pendingDeviceJid?: (string[]|null);
        deliveredDeviceJid?: (string[]|null);
    }

    class UserReceipt implements IUserReceipt {
        constructor(p?: WAWeb.IUserReceipt);
        public userJid: string;
        public receiptTimestamp?: (number|Long|null);
        public readTimestamp?: (number|Long|null);
        public playedTimestamp?: (number|Long|null);
        public pendingDeviceJid: string[];
        public deliveredDeviceJid: string[];
        public static create(properties?: WAWeb.IUserReceipt): WAWeb.UserReceipt;
        public static encode(m: WAWeb.IUserReceipt, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.UserReceipt;
        public static fromObject(d: { [k: string]: any }): WAWeb.UserReceipt;
        public static toObject(m: WAWeb.UserReceipt, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IReaction {
        key?: (WACommon.IMessageKey|null);
        text?: (string|null);
        groupingKey?: (string|null);
        senderTimestampMs?: (number|Long|null);
        unread?: (boolean|null);
    }

    class Reaction implements IReaction {
        constructor(p?: WAWeb.IReaction);
        public key?: (WACommon.IMessageKey|null);
        public text?: (string|null);
        public groupingKey?: (string|null);
        public senderTimestampMs?: (number|Long|null);
        public unread?: (boolean|null);
        public static create(properties?: WAWeb.IReaction): WAWeb.Reaction;
        public static encode(m: WAWeb.IReaction, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.Reaction;
        public static fromObject(d: { [k: string]: any }): WAWeb.Reaction;
        public static toObject(m: WAWeb.Reaction, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollUpdate {
        pollUpdateMessageKey?: (WACommon.IMessageKey|null);
        vote?: (WAE2E.IPollVoteMessage|null);
        senderTimestampMs?: (number|Long|null);
        serverTimestampMs?: (number|Long|null);
        unread?: (boolean|null);
    }

    class PollUpdate implements IPollUpdate {
        constructor(p?: WAWeb.IPollUpdate);
        public pollUpdateMessageKey?: (WACommon.IMessageKey|null);
        public vote?: (WAE2E.IPollVoteMessage|null);
        public senderTimestampMs?: (number|Long|null);
        public serverTimestampMs?: (number|Long|null);
        public unread?: (boolean|null);
        public static create(properties?: WAWeb.IPollUpdate): WAWeb.PollUpdate;
        public static encode(m: WAWeb.IPollUpdate, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.PollUpdate;
        public static fromObject(d: { [k: string]: any }): WAWeb.PollUpdate;
        public static toObject(m: WAWeb.PollUpdate, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollAdditionalMetadata {
        pollInvalidated?: (boolean|null);
    }

    class PollAdditionalMetadata implements IPollAdditionalMetadata {
        constructor(p?: WAWeb.IPollAdditionalMetadata);
        public pollInvalidated?: (boolean|null);
        public static create(properties?: WAWeb.IPollAdditionalMetadata): WAWeb.PollAdditionalMetadata;
        public static encode(m: WAWeb.IPollAdditionalMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.PollAdditionalMetadata;
        public static fromObject(d: { [k: string]: any }): WAWeb.PollAdditionalMetadata;
        public static toObject(m: WAWeb.PollAdditionalMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IInteractiveMessageAdditionalMetadata {
        isGalaxyFlowCompleted?: (boolean|null);
    }

    class InteractiveMessageAdditionalMetadata implements IInteractiveMessageAdditionalMetadata {
        constructor(p?: WAWeb.IInteractiveMessageAdditionalMetadata);
        public isGalaxyFlowCompleted?: (boolean|null);
        public static create(properties?: WAWeb.IInteractiveMessageAdditionalMetadata): WAWeb.InteractiveMessageAdditionalMetadata;
        public static encode(m: WAWeb.IInteractiveMessageAdditionalMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.InteractiveMessageAdditionalMetadata;
        public static fromObject(d: { [k: string]: any }): WAWeb.InteractiveMessageAdditionalMetadata;
        public static toObject(m: WAWeb.InteractiveMessageAdditionalMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEventAdditionalMetadata {
        isStale?: (boolean|null);
    }

    class EventAdditionalMetadata implements IEventAdditionalMetadata {
        constructor(p?: WAWeb.IEventAdditionalMetadata);
        public isStale?: (boolean|null);
        public static create(properties?: WAWeb.IEventAdditionalMetadata): WAWeb.EventAdditionalMetadata;
        public static encode(m: WAWeb.IEventAdditionalMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.EventAdditionalMetadata;
        public static fromObject(d: { [k: string]: any }): WAWeb.EventAdditionalMetadata;
        public static toObject(m: WAWeb.EventAdditionalMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IKeepInChat {
        keepType?: (WAE2E.KeepType|null);
        serverTimestamp?: (number|Long|null);
        key?: (WACommon.IMessageKey|null);
        deviceJid?: (string|null);
        clientTimestampMs?: (number|Long|null);
        serverTimestampMs?: (number|Long|null);
    }

    class KeepInChat implements IKeepInChat {
        constructor(p?: WAWeb.IKeepInChat);
        public keepType?: (WAE2E.KeepType|null);
        public serverTimestamp?: (number|Long|null);
        public key?: (WACommon.IMessageKey|null);
        public deviceJid?: (string|null);
        public clientTimestampMs?: (number|Long|null);
        public serverTimestampMs?: (number|Long|null);
        public static create(properties?: WAWeb.IKeepInChat): WAWeb.KeepInChat;
        public static encode(m: WAWeb.IKeepInChat, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.KeepInChat;
        public static fromObject(d: { [k: string]: any }): WAWeb.KeepInChat;
        public static toObject(m: WAWeb.KeepInChat, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IMessageAddOnContextInfo {
        messageAddOnDurationInSecs?: (number|null);
        messageAddOnExpiryType?: (WAE2E.MessageContextInfo.MessageAddonExpiryType|null);
    }

    class MessageAddOnContextInfo implements IMessageAddOnContextInfo {
        constructor(p?: WAWeb.IMessageAddOnContextInfo);
        public messageAddOnDurationInSecs?: (number|null);
        public messageAddOnExpiryType?: (WAE2E.MessageContextInfo.MessageAddonExpiryType|null);
        public static create(properties?: WAWeb.IMessageAddOnContextInfo): WAWeb.MessageAddOnContextInfo;
        public static encode(m: WAWeb.IMessageAddOnContextInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.MessageAddOnContextInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.MessageAddOnContextInfo;
        public static toObject(m: WAWeb.MessageAddOnContextInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPremiumMessageInfo {
        serverCampaignId?: (string|null);
    }

    class PremiumMessageInfo implements IPremiumMessageInfo {
        constructor(p?: WAWeb.IPremiumMessageInfo);
        public serverCampaignId?: (string|null);
        public static create(properties?: WAWeb.IPremiumMessageInfo): WAWeb.PremiumMessageInfo;
        public static encode(m: WAWeb.IPremiumMessageInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.PremiumMessageInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.PremiumMessageInfo;
        public static toObject(m: WAWeb.PremiumMessageInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IEventResponse {
        eventResponseMessageKey?: (WACommon.IMessageKey|null);
        timestampMs?: (number|Long|null);
        eventResponseMessage?: (WAE2E.IEventResponseMessage|null);
        unread?: (boolean|null);
    }

    class EventResponse implements IEventResponse {
        constructor(p?: WAWeb.IEventResponse);
        public eventResponseMessageKey?: (WACommon.IMessageKey|null);
        public timestampMs?: (number|Long|null);
        public eventResponseMessage?: (WAE2E.IEventResponseMessage|null);
        public unread?: (boolean|null);
        public static create(properties?: WAWeb.IEventResponse): WAWeb.EventResponse;
        public static encode(m: WAWeb.IEventResponse, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.EventResponse;
        public static fromObject(d: { [k: string]: any }): WAWeb.EventResponse;
        public static toObject(m: WAWeb.EventResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ILegacyMessage {
        eventResponseMessage?: (WAE2E.IEventResponseMessage|null);
        pollVote?: (WAE2E.IPollVoteMessage|null);
    }

    class LegacyMessage implements ILegacyMessage {
        constructor(p?: WAWeb.ILegacyMessage);
        public eventResponseMessage?: (WAE2E.IEventResponseMessage|null);
        public pollVote?: (WAE2E.IPollVoteMessage|null);
        public static create(properties?: WAWeb.ILegacyMessage): WAWeb.LegacyMessage;
        public static encode(m: WAWeb.ILegacyMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.LegacyMessage;
        public static fromObject(d: { [k: string]: any }): WAWeb.LegacyMessage;
        public static toObject(m: WAWeb.LegacyMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IStatusMentionMessage {
        quotedStatus?: (WAE2E.IMessage|null);
    }

    class StatusMentionMessage implements IStatusMentionMessage {
        constructor(p?: WAWeb.IStatusMentionMessage);
        public quotedStatus?: (WAE2E.IMessage|null);
        public static create(properties?: WAWeb.IStatusMentionMessage): WAWeb.StatusMentionMessage;
        public static encode(m: WAWeb.IStatusMentionMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.StatusMentionMessage;
        public static fromObject(d: { [k: string]: any }): WAWeb.StatusMentionMessage;
        public static toObject(m: WAWeb.StatusMentionMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface ICitation {
        title?: (string|null);
        subtitle?: (string|null);
        cmsId?: (string|null);
        imageUrl?: (string|null);
    }

    class Citation implements ICitation {
        constructor(p?: WAWeb.ICitation);
        public title: string;
        public subtitle: string;
        public cmsId: string;
        public imageUrl: string;
        public static create(properties?: WAWeb.ICitation): WAWeb.Citation;
        public static encode(m: WAWeb.ICitation, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.Citation;
        public static fromObject(d: { [k: string]: any }): WAWeb.Citation;
        public static toObject(m: WAWeb.Citation, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IGroupHistoryIndividualMessageInfo {
        bundleMessageKey?: (WACommon.IMessageKey|null);
        editedAfterReceivedAsHistory?: (boolean|null);
    }

    class GroupHistoryIndividualMessageInfo implements IGroupHistoryIndividualMessageInfo {
        constructor(p?: WAWeb.IGroupHistoryIndividualMessageInfo);
        public bundleMessageKey?: (WACommon.IMessageKey|null);
        public editedAfterReceivedAsHistory?: (boolean|null);
        public static create(properties?: WAWeb.IGroupHistoryIndividualMessageInfo): WAWeb.GroupHistoryIndividualMessageInfo;
        public static encode(m: WAWeb.IGroupHistoryIndividualMessageInfo, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.GroupHistoryIndividualMessageInfo;
        public static fromObject(d: { [k: string]: any }): WAWeb.GroupHistoryIndividualMessageInfo;
        public static toObject(m: WAWeb.GroupHistoryIndividualMessageInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IQuarantinedMessage {
        originalData?: (Uint8Array|null);
        extractedText?: (string|null);
    }

    class QuarantinedMessage implements IQuarantinedMessage {
        constructor(p?: WAWeb.IQuarantinedMessage);
        public originalData?: (Uint8Array|null);
        public extractedText?: (string|null);
        public static create(properties?: WAWeb.IQuarantinedMessage): WAWeb.QuarantinedMessage;
        public static encode(m: WAWeb.IQuarantinedMessage, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.QuarantinedMessage;
        public static fromObject(d: { [k: string]: any }): WAWeb.QuarantinedMessage;
        public static toObject(m: WAWeb.QuarantinedMessage, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IScheduledMessageMetadata {
        revealKeyId?: (string|null);
        revealKey?: (Uint8Array|null);
        scheduledTime?: (number|Long|null);
    }

    class ScheduledMessageMetadata implements IScheduledMessageMetadata {
        constructor(p?: WAWeb.IScheduledMessageMetadata);
        public revealKeyId?: (string|null);
        public revealKey?: (Uint8Array|null);
        public scheduledTime?: (number|Long|null);
        public static create(properties?: WAWeb.IScheduledMessageMetadata): WAWeb.ScheduledMessageMetadata;
        public static encode(m: WAWeb.IScheduledMessageMetadata, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAWeb.ScheduledMessageMetadata;
        public static fromObject(d: { [k: string]: any }): WAWeb.ScheduledMessageMetadata;
        public static toObject(m: WAWeb.ScheduledMessageMetadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}


