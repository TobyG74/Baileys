/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";
import { WAChatLockSettings } from './WAChatLockSettings.js';
import { WADeviceCapabilities } from './WADeviceCapabilities.js';
import { WACommon } from './WACommon.js';

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WASyncAction = $root.WASyncAction = (() => {

    const WASyncAction = {};

    WASyncAction.CollectionName = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COLLECTION_NAME_UNKNOWN"] = 0;
        values[valuesById[1] = "REGULAR"] = 1;
        values[valuesById[2] = "REGULAR_LOW"] = 2;
        values[valuesById[3] = "REGULAR_HIGH"] = 3;
        values[valuesById[4] = "CRITICAL_BLOCK"] = 4;
        values[valuesById[5] = "CRITICAL_UNBLOCK_LOW"] = 5;
        return values;
    })();

    WASyncAction.MutationProps = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[2] = "STAR_ACTION"] = 2;
        values[valuesById[3] = "CONTACT_ACTION"] = 3;
        values[valuesById[4] = "MUTE_ACTION"] = 4;
        values[valuesById[5] = "PIN_ACTION"] = 5;
        values[valuesById[6] = "SECURITY_NOTIFICATION_SETTING"] = 6;
        values[valuesById[7] = "PUSH_NAME_SETTING"] = 7;
        values[valuesById[8] = "QUICK_REPLY_ACTION"] = 8;
        values[valuesById[11] = "RECENT_EMOJI_WEIGHTS_ACTION"] = 11;
        values[valuesById[13] = "LABEL_MESSAGE_ACTION"] = 13;
        values[valuesById[14] = "LABEL_EDIT_ACTION"] = 14;
        values[valuesById[15] = "LABEL_ASSOCIATION_ACTION"] = 15;
        values[valuesById[16] = "LOCALE_SETTING"] = 16;
        values[valuesById[17] = "ARCHIVE_CHAT_ACTION"] = 17;
        values[valuesById[18] = "DELETE_MESSAGE_FOR_ME_ACTION"] = 18;
        values[valuesById[19] = "KEY_EXPIRATION"] = 19;
        values[valuesById[20] = "MARK_CHAT_AS_READ_ACTION"] = 20;
        values[valuesById[21] = "CLEAR_CHAT_ACTION"] = 21;
        values[valuesById[22] = "DELETE_CHAT_ACTION"] = 22;
        values[valuesById[23] = "UNARCHIVE_CHATS_SETTING"] = 23;
        values[valuesById[24] = "PRIMARY_FEATURE"] = 24;
        values[valuesById[26] = "ANDROID_UNSUPPORTED_ACTIONS"] = 26;
        values[valuesById[27] = "AGENT_ACTION"] = 27;
        values[valuesById[28] = "SUBSCRIPTION_ACTION"] = 28;
        values[valuesById[29] = "USER_STATUS_MUTE_ACTION"] = 29;
        values[valuesById[30] = "TIME_FORMAT_ACTION"] = 30;
        values[valuesById[31] = "NUX_ACTION"] = 31;
        values[valuesById[32] = "PRIMARY_VERSION_ACTION"] = 32;
        values[valuesById[33] = "STICKER_ACTION"] = 33;
        values[valuesById[34] = "REMOVE_RECENT_STICKER_ACTION"] = 34;
        values[valuesById[35] = "CHAT_ASSIGNMENT"] = 35;
        values[valuesById[36] = "CHAT_ASSIGNMENT_OPENED_STATUS"] = 36;
        values[valuesById[37] = "PN_FOR_LID_CHAT_ACTION"] = 37;
        values[valuesById[38] = "MARKETING_MESSAGE_ACTION"] = 38;
        values[valuesById[39] = "MARKETING_MESSAGE_BROADCAST_ACTION"] = 39;
        values[valuesById[40] = "EXTERNAL_WEB_BETA_ACTION"] = 40;
        values[valuesById[41] = "PRIVACY_SETTING_RELAY_ALL_CALLS"] = 41;
        values[valuesById[42] = "CALL_LOG_ACTION"] = 42;
        values[valuesById[43] = "UGC_BOT"] = 43;
        values[valuesById[44] = "STATUS_PRIVACY"] = 44;
        values[valuesById[45] = "BOT_WELCOME_REQUEST_ACTION"] = 45;
        values[valuesById[46] = "DELETE_INDIVIDUAL_CALL_LOG"] = 46;
        values[valuesById[47] = "LABEL_REORDERING_ACTION"] = 47;
        values[valuesById[48] = "PAYMENT_INFO_ACTION"] = 48;
        values[valuesById[49] = "CUSTOM_PAYMENT_METHODS_ACTION"] = 49;
        values[valuesById[50] = "LOCK_CHAT_ACTION"] = 50;
        values[valuesById[51] = "CHAT_LOCK_SETTINGS"] = 51;
        values[valuesById[52] = "WAMO_USER_IDENTIFIER_ACTION"] = 52;
        values[valuesById[53] = "PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION"] = 53;
        values[valuesById[54] = "DEVICE_CAPABILITIES"] = 54;
        values[valuesById[55] = "NOTE_EDIT_ACTION"] = 55;
        values[valuesById[56] = "FAVORITES_ACTION"] = 56;
        values[valuesById[57] = "MERCHANT_PAYMENT_PARTNER_ACTION"] = 57;
        values[valuesById[58] = "WAFFLE_ACCOUNT_LINK_STATE_ACTION"] = 58;
        values[valuesById[59] = "USERNAME_CHAT_START_MODE"] = 59;
        values[valuesById[60] = "NOTIFICATION_ACTIVITY_SETTING_ACTION"] = 60;
        values[valuesById[61] = "LID_CONTACT_ACTION"] = 61;
        values[valuesById[62] = "CTWA_PER_CUSTOMER_DATA_SHARING_ACTION"] = 62;
        values[valuesById[63] = "PAYMENT_TOS_ACTION"] = 63;
        values[valuesById[64] = "PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION"] = 64;
        values[valuesById[65] = "BUSINESS_BROADCAST_ASSOCIATION_ACTION"] = 65;
        values[valuesById[66] = "DETECTED_OUTCOMES_STATUS_ACTION"] = 66;
        values[valuesById[68] = "MAIBA_AI_FEATURES_CONTROL_ACTION"] = 68;
        values[valuesById[69] = "BUSINESS_BROADCAST_LIST_ACTION"] = 69;
        values[valuesById[70] = "MUSIC_USER_ID_ACTION"] = 70;
        values[valuesById[71] = "STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION"] = 71;
        values[valuesById[72] = "AVATAR_UPDATED_ACTION"] = 72;
        values[valuesById[73] = "GALAXY_FLOW_ACTION"] = 73;
        values[valuesById[74] = "PRIVATE_PROCESSING_SETTING_ACTION"] = 74;
        values[valuesById[75] = "NEWSLETTER_SAVED_INTERESTS_ACTION"] = 75;
        values[valuesById[76] = "AI_THREAD_RENAME_ACTION"] = 76;
        values[valuesById[77] = "INTERACTIVE_MESSAGE_ACTION"] = 77;
        values[valuesById[78] = "SETTINGS_SYNC_ACTION"] = 78;
        values[valuesById[79] = "OUT_CONTACT_ACTION"] = 79;
        values[valuesById[80] = "NCT_SALT_SYNC_ACTION"] = 80;
        values[valuesById[81] = "BUSINESS_BROADCAST_CAMPAIGN_ACTION"] = 81;
        values[valuesById[82] = "BUSINESS_BROADCAST_INSIGHTS_ACTION"] = 82;
        values[valuesById[83] = "CUSTOMER_DATA_ACTION"] = 83;
        values[valuesById[84] = "SUBSCRIPTIONS_SYNC_V2_ACTION"] = 84;
        values[valuesById[85] = "THREAD_PIN_ACTION"] = 85;
        values[valuesById[86] = "AUTO_ORGANIZE_BUSINESS_CHAT_SETTING"] = 86;
        values[valuesById[87] = "BIZ_AI_SETTINGS_NUDGE_ACTION"] = 87;
        values[valuesById[10001] = "SHARE_OWN_PN"] = 10001;
        values[valuesById[10002] = "BUSINESS_BROADCAST_ACTION"] = 10002;
        values[valuesById[10003] = "AI_THREAD_DELETE_ACTION"] = 10003;
        return values;
    })();

    WASyncAction.BusinessBroadcastCampaignStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DRAFT"] = 1;
        values[valuesById[2] = "SCHEDULED"] = 2;
        values[valuesById[3] = "PROCESSING"] = 3;
        values[valuesById[4] = "FAILED"] = 4;
        values[valuesById[5] = "SENT"] = 5;
        return values;
    })();

    WASyncAction.CallLogRecord = (function() {

        function CallLogRecord(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CallLogRecord.prototype.callResult = null;
        CallLogRecord.prototype.isDndMode = null;
        CallLogRecord.prototype.silenceReason = null;
        CallLogRecord.prototype.duration = null;
        CallLogRecord.prototype.startTime = null;
        CallLogRecord.prototype.isIncoming = null;
        CallLogRecord.prototype.isVideo = null;
        CallLogRecord.prototype.isCallLink = null;
        CallLogRecord.prototype.callLinkToken = null;
        CallLogRecord.prototype.scheduledCallID = null;
        CallLogRecord.prototype.callID = null;
        CallLogRecord.prototype.callCreatorJID = null;
        CallLogRecord.prototype.groupJID = null;
        CallLogRecord.prototype.participants = $util.emptyArray;
        CallLogRecord.prototype.callType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_callResult", {
            get: $util.oneOfGetter($oneOfFields = ["callResult"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_isDndMode", {
            get: $util.oneOfGetter($oneOfFields = ["isDndMode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_silenceReason", {
            get: $util.oneOfGetter($oneOfFields = ["silenceReason"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_duration", {
            get: $util.oneOfGetter($oneOfFields = ["duration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_startTime", {
            get: $util.oneOfGetter($oneOfFields = ["startTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_isIncoming", {
            get: $util.oneOfGetter($oneOfFields = ["isIncoming"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_isVideo", {
            get: $util.oneOfGetter($oneOfFields = ["isVideo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_isCallLink", {
            get: $util.oneOfGetter($oneOfFields = ["isCallLink"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_callLinkToken", {
            get: $util.oneOfGetter($oneOfFields = ["callLinkToken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_scheduledCallID", {
            get: $util.oneOfGetter($oneOfFields = ["scheduledCallID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_callID", {
            get: $util.oneOfGetter($oneOfFields = ["callID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_callCreatorJID", {
            get: $util.oneOfGetter($oneOfFields = ["callCreatorJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_groupJID", {
            get: $util.oneOfGetter($oneOfFields = ["groupJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogRecord.prototype, "_callType", {
            get: $util.oneOfGetter($oneOfFields = ["callType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CallLogRecord.create = function create(properties) {
            return new CallLogRecord(properties);
        };

        CallLogRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.callResult != null && Object.hasOwnProperty.call(m, "callResult"))
                w.uint32(8).int32(m.callResult);
            if (m.isDndMode != null && Object.hasOwnProperty.call(m, "isDndMode"))
                w.uint32(16).bool(m.isDndMode);
            if (m.silenceReason != null && Object.hasOwnProperty.call(m, "silenceReason"))
                w.uint32(24).int32(m.silenceReason);
            if (m.duration != null && Object.hasOwnProperty.call(m, "duration"))
                w.uint32(32).int64(m.duration);
            if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
                w.uint32(40).int64(m.startTime);
            if (m.isIncoming != null && Object.hasOwnProperty.call(m, "isIncoming"))
                w.uint32(48).bool(m.isIncoming);
            if (m.isVideo != null && Object.hasOwnProperty.call(m, "isVideo"))
                w.uint32(56).bool(m.isVideo);
            if (m.isCallLink != null && Object.hasOwnProperty.call(m, "isCallLink"))
                w.uint32(64).bool(m.isCallLink);
            if (m.callLinkToken != null && Object.hasOwnProperty.call(m, "callLinkToken"))
                w.uint32(74).string(m.callLinkToken);
            if (m.scheduledCallID != null && Object.hasOwnProperty.call(m, "scheduledCallID"))
                w.uint32(82).string(m.scheduledCallID);
            if (m.callID != null && Object.hasOwnProperty.call(m, "callID"))
                w.uint32(90).string(m.callID);
            if (m.callCreatorJID != null && Object.hasOwnProperty.call(m, "callCreatorJID"))
                w.uint32(98).string(m.callCreatorJID);
            if (m.groupJID != null && Object.hasOwnProperty.call(m, "groupJID"))
                w.uint32(106).string(m.groupJID);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    $root.WASyncAction.CallLogRecord.ParticipantInfo.encode(m.participants[i], w.uint32(114).fork()).ldelim();
            }
            if (m.callType != null && Object.hasOwnProperty.call(m, "callType"))
                w.uint32(120).int32(m.callType);
            return w;
        };

        CallLogRecord.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CallLogRecord();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.callResult = r.int32();
                        break;
                    }
                case 2: {
                        m.isDndMode = r.bool();
                        break;
                    }
                case 3: {
                        m.silenceReason = r.int32();
                        break;
                    }
                case 4: {
                        m.duration = r.int64();
                        break;
                    }
                case 5: {
                        m.startTime = r.int64();
                        break;
                    }
                case 6: {
                        m.isIncoming = r.bool();
                        break;
                    }
                case 7: {
                        m.isVideo = r.bool();
                        break;
                    }
                case 8: {
                        m.isCallLink = r.bool();
                        break;
                    }
                case 9: {
                        m.callLinkToken = r.string();
                        break;
                    }
                case 10: {
                        m.scheduledCallID = r.string();
                        break;
                    }
                case 11: {
                        m.callID = r.string();
                        break;
                    }
                case 12: {
                        m.callCreatorJID = r.string();
                        break;
                    }
                case 13: {
                        m.groupJID = r.string();
                        break;
                    }
                case 14: {
                        if (!(m.participants && m.participants.length))
                            m.participants = [];
                        m.participants.push($root.WASyncAction.CallLogRecord.ParticipantInfo.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 15: {
                        m.callType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CallLogRecord.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CallLogRecord)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CallLogRecord();
            switch (d.callResult) {
            default:
                if (typeof d.callResult === "number") {
                    m.callResult = d.callResult;
                    break;
                }
                break;
            case "CONNECTED":
            case 0:
                m.callResult = 0;
                break;
            case "REJECTED":
            case 1:
                m.callResult = 1;
                break;
            case "CANCELLED":
            case 2:
                m.callResult = 2;
                break;
            case "ACCEPTEDELSEWHERE":
            case 3:
                m.callResult = 3;
                break;
            case "MISSED":
            case 4:
                m.callResult = 4;
                break;
            case "INVALID":
            case 5:
                m.callResult = 5;
                break;
            case "UNAVAILABLE":
            case 6:
                m.callResult = 6;
                break;
            case "UPCOMING":
            case 7:
                m.callResult = 7;
                break;
            case "FAILED":
            case 8:
                m.callResult = 8;
                break;
            case "ABANDONED":
            case 9:
                m.callResult = 9;
                break;
            case "ONGOING":
            case 10:
                m.callResult = 10;
                break;
            }
            if (d.isDndMode != null) {
                m.isDndMode = Boolean(d.isDndMode);
            }
            switch (d.silenceReason) {
            default:
                if (typeof d.silenceReason === "number") {
                    m.silenceReason = d.silenceReason;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.silenceReason = 0;
                break;
            case "SCHEDULED":
            case 1:
                m.silenceReason = 1;
                break;
            case "PRIVACY":
            case 2:
                m.silenceReason = 2;
                break;
            case "LIGHTWEIGHT":
            case 3:
                m.silenceReason = 3;
                break;
            }
            if (d.duration != null) {
                if ($util.Long)
                    (m.duration = $util.Long.fromValue(d.duration)).unsigned = false;
                else if (typeof d.duration === "string")
                    m.duration = parseInt(d.duration, 10);
                else if (typeof d.duration === "number")
                    m.duration = d.duration;
                else if (typeof d.duration === "object")
                    m.duration = new $util.LongBits(d.duration.low >>> 0, d.duration.high >>> 0).toNumber();
            }
            if (d.startTime != null) {
                if ($util.Long)
                    (m.startTime = $util.Long.fromValue(d.startTime)).unsigned = false;
                else if (typeof d.startTime === "string")
                    m.startTime = parseInt(d.startTime, 10);
                else if (typeof d.startTime === "number")
                    m.startTime = d.startTime;
                else if (typeof d.startTime === "object")
                    m.startTime = new $util.LongBits(d.startTime.low >>> 0, d.startTime.high >>> 0).toNumber();
            }
            if (d.isIncoming != null) {
                m.isIncoming = Boolean(d.isIncoming);
            }
            if (d.isVideo != null) {
                m.isVideo = Boolean(d.isVideo);
            }
            if (d.isCallLink != null) {
                m.isCallLink = Boolean(d.isCallLink);
            }
            if (d.callLinkToken != null) {
                m.callLinkToken = String(d.callLinkToken);
            }
            if (d.scheduledCallID != null) {
                m.scheduledCallID = String(d.scheduledCallID);
            }
            if (d.callID != null) {
                m.callID = String(d.callID);
            }
            if (d.callCreatorJID != null) {
                m.callCreatorJID = String(d.callCreatorJID);
            }
            if (d.groupJID != null) {
                m.groupJID = String(d.groupJID);
            }
            if (d.participants) {
                if (!Array.isArray(d.participants))
                    throw TypeError(".WASyncAction.CallLogRecord.participants: array expected");
                m.participants = [];
                for (var i = 0; i < d.participants.length; ++i) {
                    if (typeof d.participants[i] !== "object")
                        throw TypeError(".WASyncAction.CallLogRecord.participants: object expected");
                    m.participants[i] = $root.WASyncAction.CallLogRecord.ParticipantInfo.fromObject(d.participants[i], n + 1);
                }
            }
            switch (d.callType) {
            default:
                if (typeof d.callType === "number") {
                    m.callType = d.callType;
                    break;
                }
                break;
            case "REGULAR":
            case 0:
                m.callType = 0;
                break;
            case "SCHEDULED_CALL":
            case 1:
                m.callType = 1;
                break;
            case "VOICE_CHAT":
            case 2:
                m.callType = 2;
                break;
            }
            return m;
        };

        CallLogRecord.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.participants = [];
            }
            if (m.callResult != null && m.hasOwnProperty("callResult")) {
                d.callResult = o.enums === String ? $root.WASyncAction.CallLogRecord.CallResult[m.callResult] === undefined ? m.callResult : $root.WASyncAction.CallLogRecord.CallResult[m.callResult] : m.callResult;
                if (o.oneofs)
                    d._callResult = "callResult";
            }
            if (m.isDndMode != null && m.hasOwnProperty("isDndMode")) {
                d.isDndMode = m.isDndMode;
                if (o.oneofs)
                    d._isDndMode = "isDndMode";
            }
            if (m.silenceReason != null && m.hasOwnProperty("silenceReason")) {
                d.silenceReason = o.enums === String ? $root.WASyncAction.CallLogRecord.SilenceReason[m.silenceReason] === undefined ? m.silenceReason : $root.WASyncAction.CallLogRecord.SilenceReason[m.silenceReason] : m.silenceReason;
                if (o.oneofs)
                    d._silenceReason = "silenceReason";
            }
            if (m.duration != null && m.hasOwnProperty("duration")) {
                if (typeof m.duration === "number")
                    d.duration = o.longs === String ? String(m.duration) : m.duration;
                else
                    d.duration = o.longs === String ? $util.Long.prototype.toString.call(m.duration) : o.longs === Number ? new $util.LongBits(m.duration.low >>> 0, m.duration.high >>> 0).toNumber() : m.duration;
                if (o.oneofs)
                    d._duration = "duration";
            }
            if (m.startTime != null && m.hasOwnProperty("startTime")) {
                if (typeof m.startTime === "number")
                    d.startTime = o.longs === String ? String(m.startTime) : m.startTime;
                else
                    d.startTime = o.longs === String ? $util.Long.prototype.toString.call(m.startTime) : o.longs === Number ? new $util.LongBits(m.startTime.low >>> 0, m.startTime.high >>> 0).toNumber() : m.startTime;
                if (o.oneofs)
                    d._startTime = "startTime";
            }
            if (m.isIncoming != null && m.hasOwnProperty("isIncoming")) {
                d.isIncoming = m.isIncoming;
                if (o.oneofs)
                    d._isIncoming = "isIncoming";
            }
            if (m.isVideo != null && m.hasOwnProperty("isVideo")) {
                d.isVideo = m.isVideo;
                if (o.oneofs)
                    d._isVideo = "isVideo";
            }
            if (m.isCallLink != null && m.hasOwnProperty("isCallLink")) {
                d.isCallLink = m.isCallLink;
                if (o.oneofs)
                    d._isCallLink = "isCallLink";
            }
            if (m.callLinkToken != null && m.hasOwnProperty("callLinkToken")) {
                d.callLinkToken = m.callLinkToken;
                if (o.oneofs)
                    d._callLinkToken = "callLinkToken";
            }
            if (m.scheduledCallID != null && m.hasOwnProperty("scheduledCallID")) {
                d.scheduledCallID = m.scheduledCallID;
                if (o.oneofs)
                    d._scheduledCallID = "scheduledCallID";
            }
            if (m.callID != null && m.hasOwnProperty("callID")) {
                d.callID = m.callID;
                if (o.oneofs)
                    d._callID = "callID";
            }
            if (m.callCreatorJID != null && m.hasOwnProperty("callCreatorJID")) {
                d.callCreatorJID = m.callCreatorJID;
                if (o.oneofs)
                    d._callCreatorJID = "callCreatorJID";
            }
            if (m.groupJID != null && m.hasOwnProperty("groupJID")) {
                d.groupJID = m.groupJID;
                if (o.oneofs)
                    d._groupJID = "groupJID";
            }
            if (m.participants && m.participants.length) {
                d.participants = [];
                for (var j = 0; j < m.participants.length; ++j) {
                    d.participants[j] = $root.WASyncAction.CallLogRecord.ParticipantInfo.toObject(m.participants[j], o);
                }
            }
            if (m.callType != null && m.hasOwnProperty("callType")) {
                d.callType = o.enums === String ? $root.WASyncAction.CallLogRecord.CallType[m.callType] === undefined ? m.callType : $root.WASyncAction.CallLogRecord.CallType[m.callType] : m.callType;
                if (o.oneofs)
                    d._callType = "callType";
            }
            return d;
        };

        CallLogRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CallLogRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CallLogRecord";
        };

        CallLogRecord.CallType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REGULAR"] = 0;
            values[valuesById[1] = "SCHEDULED_CALL"] = 1;
            values[valuesById[2] = "VOICE_CHAT"] = 2;
            return values;
        })();

        CallLogRecord.SilenceReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "SCHEDULED"] = 1;
            values[valuesById[2] = "PRIVACY"] = 2;
            values[valuesById[3] = "LIGHTWEIGHT"] = 3;
            return values;
        })();

        CallLogRecord.CallResult = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CONNECTED"] = 0;
            values[valuesById[1] = "REJECTED"] = 1;
            values[valuesById[2] = "CANCELLED"] = 2;
            values[valuesById[3] = "ACCEPTEDELSEWHERE"] = 3;
            values[valuesById[4] = "MISSED"] = 4;
            values[valuesById[5] = "INVALID"] = 5;
            values[valuesById[6] = "UNAVAILABLE"] = 6;
            values[valuesById[7] = "UPCOMING"] = 7;
            values[valuesById[8] = "FAILED"] = 8;
            values[valuesById[9] = "ABANDONED"] = 9;
            values[valuesById[10] = "ONGOING"] = 10;
            return values;
        })();

        CallLogRecord.ParticipantInfo = (function() {

            function ParticipantInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ParticipantInfo.prototype.userJID = null;
            ParticipantInfo.prototype.callResult = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ParticipantInfo.prototype, "_userJID", {
                get: $util.oneOfGetter($oneOfFields = ["userJID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ParticipantInfo.prototype, "_callResult", {
                get: $util.oneOfGetter($oneOfFields = ["callResult"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ParticipantInfo.create = function create(properties) {
                return new ParticipantInfo(properties);
            };

            ParticipantInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.userJID != null && Object.hasOwnProperty.call(m, "userJID"))
                    w.uint32(10).string(m.userJID);
                if (m.callResult != null && Object.hasOwnProperty.call(m, "callResult"))
                    w.uint32(16).int32(m.callResult);
                return w;
            };

            ParticipantInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CallLogRecord.ParticipantInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.userJID = r.string();
                            break;
                        }
                    case 2: {
                            m.callResult = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ParticipantInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASyncAction.CallLogRecord.ParticipantInfo)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASyncAction.CallLogRecord.ParticipantInfo();
                if (d.userJID != null) {
                    m.userJID = String(d.userJID);
                }
                switch (d.callResult) {
                default:
                    if (typeof d.callResult === "number") {
                        m.callResult = d.callResult;
                        break;
                    }
                    break;
                case "CONNECTED":
                case 0:
                    m.callResult = 0;
                    break;
                case "REJECTED":
                case 1:
                    m.callResult = 1;
                    break;
                case "CANCELLED":
                case 2:
                    m.callResult = 2;
                    break;
                case "ACCEPTEDELSEWHERE":
                case 3:
                    m.callResult = 3;
                    break;
                case "MISSED":
                case 4:
                    m.callResult = 4;
                    break;
                case "INVALID":
                case 5:
                    m.callResult = 5;
                    break;
                case "UNAVAILABLE":
                case 6:
                    m.callResult = 6;
                    break;
                case "UPCOMING":
                case 7:
                    m.callResult = 7;
                    break;
                case "FAILED":
                case 8:
                    m.callResult = 8;
                    break;
                case "ABANDONED":
                case 9:
                    m.callResult = 9;
                    break;
                case "ONGOING":
                case 10:
                    m.callResult = 10;
                    break;
                }
                return m;
            };

            ParticipantInfo.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.userJID != null && m.hasOwnProperty("userJID")) {
                    d.userJID = m.userJID;
                    if (o.oneofs)
                        d._userJID = "userJID";
                }
                if (m.callResult != null && m.hasOwnProperty("callResult")) {
                    d.callResult = o.enums === String ? $root.WASyncAction.CallLogRecord.CallResult[m.callResult] === undefined ? m.callResult : $root.WASyncAction.CallLogRecord.CallResult[m.callResult] : m.callResult;
                    if (o.oneofs)
                        d._callResult = "callResult";
                }
                return d;
            };

            ParticipantInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ParticipantInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASyncAction.CallLogRecord.ParticipantInfo";
            };

            return ParticipantInfo;
        })();

        return CallLogRecord;
    })();

    WASyncAction.SettingsSyncAction = (function() {

        function SettingsSyncAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SettingsSyncAction.prototype.startAtLogin = null;
        SettingsSyncAction.prototype.minimizeToTray = null;
        SettingsSyncAction.prototype.language = null;
        SettingsSyncAction.prototype.replaceTextWithEmoji = null;
        SettingsSyncAction.prototype.bannerNotificationDisplayMode = null;
        SettingsSyncAction.prototype.unreadCounterBadgeDisplayMode = null;
        SettingsSyncAction.prototype.isMessagesNotificationEnabled = null;
        SettingsSyncAction.prototype.isCallsNotificationEnabled = null;
        SettingsSyncAction.prototype.isReactionsNotificationEnabled = null;
        SettingsSyncAction.prototype.isStatusReactionsNotificationEnabled = null;
        SettingsSyncAction.prototype.isTextPreviewForNotificationEnabled = null;
        SettingsSyncAction.prototype.defaultNotificationToneID = null;
        SettingsSyncAction.prototype.groupDefaultNotificationToneID = null;
        SettingsSyncAction.prototype.appTheme = null;
        SettingsSyncAction.prototype.wallpaperID = null;
        SettingsSyncAction.prototype.isDoodleWallpaperEnabled = null;
        SettingsSyncAction.prototype.fontSize = null;
        SettingsSyncAction.prototype.isPhotosAutodownloadEnabled = null;
        SettingsSyncAction.prototype.isAudiosAutodownloadEnabled = null;
        SettingsSyncAction.prototype.isVideosAutodownloadEnabled = null;
        SettingsSyncAction.prototype.isDocumentsAutodownloadEnabled = null;
        SettingsSyncAction.prototype.disableLinkPreviews = null;
        SettingsSyncAction.prototype.notificationToneID = null;
        SettingsSyncAction.prototype.mediaUploadQuality = null;
        SettingsSyncAction.prototype.isSpellCheckEnabled = null;
        SettingsSyncAction.prototype.isEnterToSendEnabled = null;
        SettingsSyncAction.prototype.isGroupMessageNotificationEnabled = null;
        SettingsSyncAction.prototype.isGroupReactionsNotificationEnabled = null;
        SettingsSyncAction.prototype.isStatusNotificationEnabled = null;
        SettingsSyncAction.prototype.statusNotificationToneID = null;
        SettingsSyncAction.prototype.shouldPlaySoundForCallNotification = null;
        SettingsSyncAction.prototype.chatThemeID = null;
        SettingsSyncAction.prototype.colorSchemeID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_startAtLogin", {
            get: $util.oneOfGetter($oneOfFields = ["startAtLogin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_minimizeToTray", {
            get: $util.oneOfGetter($oneOfFields = ["minimizeToTray"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_language", {
            get: $util.oneOfGetter($oneOfFields = ["language"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_replaceTextWithEmoji", {
            get: $util.oneOfGetter($oneOfFields = ["replaceTextWithEmoji"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_bannerNotificationDisplayMode", {
            get: $util.oneOfGetter($oneOfFields = ["bannerNotificationDisplayMode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_unreadCounterBadgeDisplayMode", {
            get: $util.oneOfGetter($oneOfFields = ["unreadCounterBadgeDisplayMode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isMessagesNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isMessagesNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isCallsNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isCallsNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isReactionsNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isReactionsNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isStatusReactionsNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isStatusReactionsNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isTextPreviewForNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isTextPreviewForNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_defaultNotificationToneID", {
            get: $util.oneOfGetter($oneOfFields = ["defaultNotificationToneID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_groupDefaultNotificationToneID", {
            get: $util.oneOfGetter($oneOfFields = ["groupDefaultNotificationToneID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_appTheme", {
            get: $util.oneOfGetter($oneOfFields = ["appTheme"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_wallpaperID", {
            get: $util.oneOfGetter($oneOfFields = ["wallpaperID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isDoodleWallpaperEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isDoodleWallpaperEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_fontSize", {
            get: $util.oneOfGetter($oneOfFields = ["fontSize"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isPhotosAutodownloadEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isPhotosAutodownloadEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isAudiosAutodownloadEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isAudiosAutodownloadEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isVideosAutodownloadEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isVideosAutodownloadEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isDocumentsAutodownloadEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isDocumentsAutodownloadEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_disableLinkPreviews", {
            get: $util.oneOfGetter($oneOfFields = ["disableLinkPreviews"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_notificationToneID", {
            get: $util.oneOfGetter($oneOfFields = ["notificationToneID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_mediaUploadQuality", {
            get: $util.oneOfGetter($oneOfFields = ["mediaUploadQuality"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isSpellCheckEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isSpellCheckEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isEnterToSendEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isEnterToSendEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isGroupMessageNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isGroupMessageNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isGroupReactionsNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isGroupReactionsNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_isStatusNotificationEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isStatusNotificationEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_statusNotificationToneID", {
            get: $util.oneOfGetter($oneOfFields = ["statusNotificationToneID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_shouldPlaySoundForCallNotification", {
            get: $util.oneOfGetter($oneOfFields = ["shouldPlaySoundForCallNotification"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_chatThemeID", {
            get: $util.oneOfGetter($oneOfFields = ["chatThemeID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SettingsSyncAction.prototype, "_colorSchemeID", {
            get: $util.oneOfGetter($oneOfFields = ["colorSchemeID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SettingsSyncAction.create = function create(properties) {
            return new SettingsSyncAction(properties);
        };

        SettingsSyncAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.startAtLogin != null && Object.hasOwnProperty.call(m, "startAtLogin"))
                w.uint32(8).bool(m.startAtLogin);
            if (m.minimizeToTray != null && Object.hasOwnProperty.call(m, "minimizeToTray"))
                w.uint32(16).bool(m.minimizeToTray);
            if (m.language != null && Object.hasOwnProperty.call(m, "language"))
                w.uint32(26).string(m.language);
            if (m.replaceTextWithEmoji != null && Object.hasOwnProperty.call(m, "replaceTextWithEmoji"))
                w.uint32(32).bool(m.replaceTextWithEmoji);
            if (m.bannerNotificationDisplayMode != null && Object.hasOwnProperty.call(m, "bannerNotificationDisplayMode"))
                w.uint32(40).int32(m.bannerNotificationDisplayMode);
            if (m.unreadCounterBadgeDisplayMode != null && Object.hasOwnProperty.call(m, "unreadCounterBadgeDisplayMode"))
                w.uint32(48).int32(m.unreadCounterBadgeDisplayMode);
            if (m.isMessagesNotificationEnabled != null && Object.hasOwnProperty.call(m, "isMessagesNotificationEnabled"))
                w.uint32(56).bool(m.isMessagesNotificationEnabled);
            if (m.isCallsNotificationEnabled != null && Object.hasOwnProperty.call(m, "isCallsNotificationEnabled"))
                w.uint32(64).bool(m.isCallsNotificationEnabled);
            if (m.isReactionsNotificationEnabled != null && Object.hasOwnProperty.call(m, "isReactionsNotificationEnabled"))
                w.uint32(72).bool(m.isReactionsNotificationEnabled);
            if (m.isStatusReactionsNotificationEnabled != null && Object.hasOwnProperty.call(m, "isStatusReactionsNotificationEnabled"))
                w.uint32(80).bool(m.isStatusReactionsNotificationEnabled);
            if (m.isTextPreviewForNotificationEnabled != null && Object.hasOwnProperty.call(m, "isTextPreviewForNotificationEnabled"))
                w.uint32(88).bool(m.isTextPreviewForNotificationEnabled);
            if (m.defaultNotificationToneID != null && Object.hasOwnProperty.call(m, "defaultNotificationToneID"))
                w.uint32(96).int32(m.defaultNotificationToneID);
            if (m.groupDefaultNotificationToneID != null && Object.hasOwnProperty.call(m, "groupDefaultNotificationToneID"))
                w.uint32(104).int32(m.groupDefaultNotificationToneID);
            if (m.appTheme != null && Object.hasOwnProperty.call(m, "appTheme"))
                w.uint32(112).int32(m.appTheme);
            if (m.wallpaperID != null && Object.hasOwnProperty.call(m, "wallpaperID"))
                w.uint32(120).int32(m.wallpaperID);
            if (m.isDoodleWallpaperEnabled != null && Object.hasOwnProperty.call(m, "isDoodleWallpaperEnabled"))
                w.uint32(128).bool(m.isDoodleWallpaperEnabled);
            if (m.fontSize != null && Object.hasOwnProperty.call(m, "fontSize"))
                w.uint32(136).int32(m.fontSize);
            if (m.isPhotosAutodownloadEnabled != null && Object.hasOwnProperty.call(m, "isPhotosAutodownloadEnabled"))
                w.uint32(144).bool(m.isPhotosAutodownloadEnabled);
            if (m.isAudiosAutodownloadEnabled != null && Object.hasOwnProperty.call(m, "isAudiosAutodownloadEnabled"))
                w.uint32(152).bool(m.isAudiosAutodownloadEnabled);
            if (m.isVideosAutodownloadEnabled != null && Object.hasOwnProperty.call(m, "isVideosAutodownloadEnabled"))
                w.uint32(160).bool(m.isVideosAutodownloadEnabled);
            if (m.isDocumentsAutodownloadEnabled != null && Object.hasOwnProperty.call(m, "isDocumentsAutodownloadEnabled"))
                w.uint32(168).bool(m.isDocumentsAutodownloadEnabled);
            if (m.disableLinkPreviews != null && Object.hasOwnProperty.call(m, "disableLinkPreviews"))
                w.uint32(176).bool(m.disableLinkPreviews);
            if (m.notificationToneID != null && Object.hasOwnProperty.call(m, "notificationToneID"))
                w.uint32(184).int32(m.notificationToneID);
            if (m.mediaUploadQuality != null && Object.hasOwnProperty.call(m, "mediaUploadQuality"))
                w.uint32(192).int32(m.mediaUploadQuality);
            if (m.isSpellCheckEnabled != null && Object.hasOwnProperty.call(m, "isSpellCheckEnabled"))
                w.uint32(200).bool(m.isSpellCheckEnabled);
            if (m.isEnterToSendEnabled != null && Object.hasOwnProperty.call(m, "isEnterToSendEnabled"))
                w.uint32(208).bool(m.isEnterToSendEnabled);
            if (m.isGroupMessageNotificationEnabled != null && Object.hasOwnProperty.call(m, "isGroupMessageNotificationEnabled"))
                w.uint32(216).bool(m.isGroupMessageNotificationEnabled);
            if (m.isGroupReactionsNotificationEnabled != null && Object.hasOwnProperty.call(m, "isGroupReactionsNotificationEnabled"))
                w.uint32(224).bool(m.isGroupReactionsNotificationEnabled);
            if (m.isStatusNotificationEnabled != null && Object.hasOwnProperty.call(m, "isStatusNotificationEnabled"))
                w.uint32(232).bool(m.isStatusNotificationEnabled);
            if (m.statusNotificationToneID != null && Object.hasOwnProperty.call(m, "statusNotificationToneID"))
                w.uint32(240).int32(m.statusNotificationToneID);
            if (m.shouldPlaySoundForCallNotification != null && Object.hasOwnProperty.call(m, "shouldPlaySoundForCallNotification"))
                w.uint32(248).bool(m.shouldPlaySoundForCallNotification);
            if (m.chatThemeID != null && Object.hasOwnProperty.call(m, "chatThemeID"))
                w.uint32(258).string(m.chatThemeID);
            if (m.colorSchemeID != null && Object.hasOwnProperty.call(m, "colorSchemeID"))
                w.uint32(266).string(m.colorSchemeID);
            return w;
        };

        SettingsSyncAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SettingsSyncAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.startAtLogin = r.bool();
                        break;
                    }
                case 2: {
                        m.minimizeToTray = r.bool();
                        break;
                    }
                case 3: {
                        m.language = r.string();
                        break;
                    }
                case 4: {
                        m.replaceTextWithEmoji = r.bool();
                        break;
                    }
                case 5: {
                        m.bannerNotificationDisplayMode = r.int32();
                        break;
                    }
                case 6: {
                        m.unreadCounterBadgeDisplayMode = r.int32();
                        break;
                    }
                case 7: {
                        m.isMessagesNotificationEnabled = r.bool();
                        break;
                    }
                case 8: {
                        m.isCallsNotificationEnabled = r.bool();
                        break;
                    }
                case 9: {
                        m.isReactionsNotificationEnabled = r.bool();
                        break;
                    }
                case 10: {
                        m.isStatusReactionsNotificationEnabled = r.bool();
                        break;
                    }
                case 11: {
                        m.isTextPreviewForNotificationEnabled = r.bool();
                        break;
                    }
                case 12: {
                        m.defaultNotificationToneID = r.int32();
                        break;
                    }
                case 13: {
                        m.groupDefaultNotificationToneID = r.int32();
                        break;
                    }
                case 14: {
                        m.appTheme = r.int32();
                        break;
                    }
                case 15: {
                        m.wallpaperID = r.int32();
                        break;
                    }
                case 16: {
                        m.isDoodleWallpaperEnabled = r.bool();
                        break;
                    }
                case 17: {
                        m.fontSize = r.int32();
                        break;
                    }
                case 18: {
                        m.isPhotosAutodownloadEnabled = r.bool();
                        break;
                    }
                case 19: {
                        m.isAudiosAutodownloadEnabled = r.bool();
                        break;
                    }
                case 20: {
                        m.isVideosAutodownloadEnabled = r.bool();
                        break;
                    }
                case 21: {
                        m.isDocumentsAutodownloadEnabled = r.bool();
                        break;
                    }
                case 22: {
                        m.disableLinkPreviews = r.bool();
                        break;
                    }
                case 23: {
                        m.notificationToneID = r.int32();
                        break;
                    }
                case 24: {
                        m.mediaUploadQuality = r.int32();
                        break;
                    }
                case 25: {
                        m.isSpellCheckEnabled = r.bool();
                        break;
                    }
                case 26: {
                        m.isEnterToSendEnabled = r.bool();
                        break;
                    }
                case 27: {
                        m.isGroupMessageNotificationEnabled = r.bool();
                        break;
                    }
                case 28: {
                        m.isGroupReactionsNotificationEnabled = r.bool();
                        break;
                    }
                case 29: {
                        m.isStatusNotificationEnabled = r.bool();
                        break;
                    }
                case 30: {
                        m.statusNotificationToneID = r.int32();
                        break;
                    }
                case 31: {
                        m.shouldPlaySoundForCallNotification = r.bool();
                        break;
                    }
                case 32: {
                        m.chatThemeID = r.string();
                        break;
                    }
                case 33: {
                        m.colorSchemeID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SettingsSyncAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SettingsSyncAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SettingsSyncAction();
            if (d.startAtLogin != null) {
                m.startAtLogin = Boolean(d.startAtLogin);
            }
            if (d.minimizeToTray != null) {
                m.minimizeToTray = Boolean(d.minimizeToTray);
            }
            if (d.language != null) {
                m.language = String(d.language);
            }
            if (d.replaceTextWithEmoji != null) {
                m.replaceTextWithEmoji = Boolean(d.replaceTextWithEmoji);
            }
            switch (d.bannerNotificationDisplayMode) {
            default:
                if (typeof d.bannerNotificationDisplayMode === "number") {
                    m.bannerNotificationDisplayMode = d.bannerNotificationDisplayMode;
                    break;
                }
                break;
            case "DISPLAY_MODE_UNKNOWN":
            case 0:
                m.bannerNotificationDisplayMode = 0;
                break;
            case "ALWAYS":
            case 1:
                m.bannerNotificationDisplayMode = 1;
                break;
            case "NEVER":
            case 2:
                m.bannerNotificationDisplayMode = 2;
                break;
            case "ONLY_WHEN_APP_IS_OPEN":
            case 3:
                m.bannerNotificationDisplayMode = 3;
                break;
            }
            switch (d.unreadCounterBadgeDisplayMode) {
            default:
                if (typeof d.unreadCounterBadgeDisplayMode === "number") {
                    m.unreadCounterBadgeDisplayMode = d.unreadCounterBadgeDisplayMode;
                    break;
                }
                break;
            case "DISPLAY_MODE_UNKNOWN":
            case 0:
                m.unreadCounterBadgeDisplayMode = 0;
                break;
            case "ALWAYS":
            case 1:
                m.unreadCounterBadgeDisplayMode = 1;
                break;
            case "NEVER":
            case 2:
                m.unreadCounterBadgeDisplayMode = 2;
                break;
            case "ONLY_WHEN_APP_IS_OPEN":
            case 3:
                m.unreadCounterBadgeDisplayMode = 3;
                break;
            }
            if (d.isMessagesNotificationEnabled != null) {
                m.isMessagesNotificationEnabled = Boolean(d.isMessagesNotificationEnabled);
            }
            if (d.isCallsNotificationEnabled != null) {
                m.isCallsNotificationEnabled = Boolean(d.isCallsNotificationEnabled);
            }
            if (d.isReactionsNotificationEnabled != null) {
                m.isReactionsNotificationEnabled = Boolean(d.isReactionsNotificationEnabled);
            }
            if (d.isStatusReactionsNotificationEnabled != null) {
                m.isStatusReactionsNotificationEnabled = Boolean(d.isStatusReactionsNotificationEnabled);
            }
            if (d.isTextPreviewForNotificationEnabled != null) {
                m.isTextPreviewForNotificationEnabled = Boolean(d.isTextPreviewForNotificationEnabled);
            }
            if (d.defaultNotificationToneID != null) {
                m.defaultNotificationToneID = d.defaultNotificationToneID | 0;
            }
            if (d.groupDefaultNotificationToneID != null) {
                m.groupDefaultNotificationToneID = d.groupDefaultNotificationToneID | 0;
            }
            if (d.appTheme != null) {
                m.appTheme = d.appTheme | 0;
            }
            if (d.wallpaperID != null) {
                m.wallpaperID = d.wallpaperID | 0;
            }
            if (d.isDoodleWallpaperEnabled != null) {
                m.isDoodleWallpaperEnabled = Boolean(d.isDoodleWallpaperEnabled);
            }
            if (d.fontSize != null) {
                m.fontSize = d.fontSize | 0;
            }
            if (d.isPhotosAutodownloadEnabled != null) {
                m.isPhotosAutodownloadEnabled = Boolean(d.isPhotosAutodownloadEnabled);
            }
            if (d.isAudiosAutodownloadEnabled != null) {
                m.isAudiosAutodownloadEnabled = Boolean(d.isAudiosAutodownloadEnabled);
            }
            if (d.isVideosAutodownloadEnabled != null) {
                m.isVideosAutodownloadEnabled = Boolean(d.isVideosAutodownloadEnabled);
            }
            if (d.isDocumentsAutodownloadEnabled != null) {
                m.isDocumentsAutodownloadEnabled = Boolean(d.isDocumentsAutodownloadEnabled);
            }
            if (d.disableLinkPreviews != null) {
                m.disableLinkPreviews = Boolean(d.disableLinkPreviews);
            }
            if (d.notificationToneID != null) {
                m.notificationToneID = d.notificationToneID | 0;
            }
            switch (d.mediaUploadQuality) {
            default:
                if (typeof d.mediaUploadQuality === "number") {
                    m.mediaUploadQuality = d.mediaUploadQuality;
                    break;
                }
                break;
            case "MEDIA_QUALITY_UNKNOWN":
            case 0:
                m.mediaUploadQuality = 0;
                break;
            case "STANDARD":
            case 1:
                m.mediaUploadQuality = 1;
                break;
            case "HD":
            case 2:
                m.mediaUploadQuality = 2;
                break;
            }
            if (d.isSpellCheckEnabled != null) {
                m.isSpellCheckEnabled = Boolean(d.isSpellCheckEnabled);
            }
            if (d.isEnterToSendEnabled != null) {
                m.isEnterToSendEnabled = Boolean(d.isEnterToSendEnabled);
            }
            if (d.isGroupMessageNotificationEnabled != null) {
                m.isGroupMessageNotificationEnabled = Boolean(d.isGroupMessageNotificationEnabled);
            }
            if (d.isGroupReactionsNotificationEnabled != null) {
                m.isGroupReactionsNotificationEnabled = Boolean(d.isGroupReactionsNotificationEnabled);
            }
            if (d.isStatusNotificationEnabled != null) {
                m.isStatusNotificationEnabled = Boolean(d.isStatusNotificationEnabled);
            }
            if (d.statusNotificationToneID != null) {
                m.statusNotificationToneID = d.statusNotificationToneID | 0;
            }
            if (d.shouldPlaySoundForCallNotification != null) {
                m.shouldPlaySoundForCallNotification = Boolean(d.shouldPlaySoundForCallNotification);
            }
            if (d.chatThemeID != null) {
                m.chatThemeID = String(d.chatThemeID);
            }
            if (d.colorSchemeID != null) {
                m.colorSchemeID = String(d.colorSchemeID);
            }
            return m;
        };

        SettingsSyncAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.startAtLogin != null && m.hasOwnProperty("startAtLogin")) {
                d.startAtLogin = m.startAtLogin;
                if (o.oneofs)
                    d._startAtLogin = "startAtLogin";
            }
            if (m.minimizeToTray != null && m.hasOwnProperty("minimizeToTray")) {
                d.minimizeToTray = m.minimizeToTray;
                if (o.oneofs)
                    d._minimizeToTray = "minimizeToTray";
            }
            if (m.language != null && m.hasOwnProperty("language")) {
                d.language = m.language;
                if (o.oneofs)
                    d._language = "language";
            }
            if (m.replaceTextWithEmoji != null && m.hasOwnProperty("replaceTextWithEmoji")) {
                d.replaceTextWithEmoji = m.replaceTextWithEmoji;
                if (o.oneofs)
                    d._replaceTextWithEmoji = "replaceTextWithEmoji";
            }
            if (m.bannerNotificationDisplayMode != null && m.hasOwnProperty("bannerNotificationDisplayMode")) {
                d.bannerNotificationDisplayMode = o.enums === String ? $root.WASyncAction.SettingsSyncAction.DisplayMode[m.bannerNotificationDisplayMode] === undefined ? m.bannerNotificationDisplayMode : $root.WASyncAction.SettingsSyncAction.DisplayMode[m.bannerNotificationDisplayMode] : m.bannerNotificationDisplayMode;
                if (o.oneofs)
                    d._bannerNotificationDisplayMode = "bannerNotificationDisplayMode";
            }
            if (m.unreadCounterBadgeDisplayMode != null && m.hasOwnProperty("unreadCounterBadgeDisplayMode")) {
                d.unreadCounterBadgeDisplayMode = o.enums === String ? $root.WASyncAction.SettingsSyncAction.DisplayMode[m.unreadCounterBadgeDisplayMode] === undefined ? m.unreadCounterBadgeDisplayMode : $root.WASyncAction.SettingsSyncAction.DisplayMode[m.unreadCounterBadgeDisplayMode] : m.unreadCounterBadgeDisplayMode;
                if (o.oneofs)
                    d._unreadCounterBadgeDisplayMode = "unreadCounterBadgeDisplayMode";
            }
            if (m.isMessagesNotificationEnabled != null && m.hasOwnProperty("isMessagesNotificationEnabled")) {
                d.isMessagesNotificationEnabled = m.isMessagesNotificationEnabled;
                if (o.oneofs)
                    d._isMessagesNotificationEnabled = "isMessagesNotificationEnabled";
            }
            if (m.isCallsNotificationEnabled != null && m.hasOwnProperty("isCallsNotificationEnabled")) {
                d.isCallsNotificationEnabled = m.isCallsNotificationEnabled;
                if (o.oneofs)
                    d._isCallsNotificationEnabled = "isCallsNotificationEnabled";
            }
            if (m.isReactionsNotificationEnabled != null && m.hasOwnProperty("isReactionsNotificationEnabled")) {
                d.isReactionsNotificationEnabled = m.isReactionsNotificationEnabled;
                if (o.oneofs)
                    d._isReactionsNotificationEnabled = "isReactionsNotificationEnabled";
            }
            if (m.isStatusReactionsNotificationEnabled != null && m.hasOwnProperty("isStatusReactionsNotificationEnabled")) {
                d.isStatusReactionsNotificationEnabled = m.isStatusReactionsNotificationEnabled;
                if (o.oneofs)
                    d._isStatusReactionsNotificationEnabled = "isStatusReactionsNotificationEnabled";
            }
            if (m.isTextPreviewForNotificationEnabled != null && m.hasOwnProperty("isTextPreviewForNotificationEnabled")) {
                d.isTextPreviewForNotificationEnabled = m.isTextPreviewForNotificationEnabled;
                if (o.oneofs)
                    d._isTextPreviewForNotificationEnabled = "isTextPreviewForNotificationEnabled";
            }
            if (m.defaultNotificationToneID != null && m.hasOwnProperty("defaultNotificationToneID")) {
                d.defaultNotificationToneID = m.defaultNotificationToneID;
                if (o.oneofs)
                    d._defaultNotificationToneID = "defaultNotificationToneID";
            }
            if (m.groupDefaultNotificationToneID != null && m.hasOwnProperty("groupDefaultNotificationToneID")) {
                d.groupDefaultNotificationToneID = m.groupDefaultNotificationToneID;
                if (o.oneofs)
                    d._groupDefaultNotificationToneID = "groupDefaultNotificationToneID";
            }
            if (m.appTheme != null && m.hasOwnProperty("appTheme")) {
                d.appTheme = m.appTheme;
                if (o.oneofs)
                    d._appTheme = "appTheme";
            }
            if (m.wallpaperID != null && m.hasOwnProperty("wallpaperID")) {
                d.wallpaperID = m.wallpaperID;
                if (o.oneofs)
                    d._wallpaperID = "wallpaperID";
            }
            if (m.isDoodleWallpaperEnabled != null && m.hasOwnProperty("isDoodleWallpaperEnabled")) {
                d.isDoodleWallpaperEnabled = m.isDoodleWallpaperEnabled;
                if (o.oneofs)
                    d._isDoodleWallpaperEnabled = "isDoodleWallpaperEnabled";
            }
            if (m.fontSize != null && m.hasOwnProperty("fontSize")) {
                d.fontSize = m.fontSize;
                if (o.oneofs)
                    d._fontSize = "fontSize";
            }
            if (m.isPhotosAutodownloadEnabled != null && m.hasOwnProperty("isPhotosAutodownloadEnabled")) {
                d.isPhotosAutodownloadEnabled = m.isPhotosAutodownloadEnabled;
                if (o.oneofs)
                    d._isPhotosAutodownloadEnabled = "isPhotosAutodownloadEnabled";
            }
            if (m.isAudiosAutodownloadEnabled != null && m.hasOwnProperty("isAudiosAutodownloadEnabled")) {
                d.isAudiosAutodownloadEnabled = m.isAudiosAutodownloadEnabled;
                if (o.oneofs)
                    d._isAudiosAutodownloadEnabled = "isAudiosAutodownloadEnabled";
            }
            if (m.isVideosAutodownloadEnabled != null && m.hasOwnProperty("isVideosAutodownloadEnabled")) {
                d.isVideosAutodownloadEnabled = m.isVideosAutodownloadEnabled;
                if (o.oneofs)
                    d._isVideosAutodownloadEnabled = "isVideosAutodownloadEnabled";
            }
            if (m.isDocumentsAutodownloadEnabled != null && m.hasOwnProperty("isDocumentsAutodownloadEnabled")) {
                d.isDocumentsAutodownloadEnabled = m.isDocumentsAutodownloadEnabled;
                if (o.oneofs)
                    d._isDocumentsAutodownloadEnabled = "isDocumentsAutodownloadEnabled";
            }
            if (m.disableLinkPreviews != null && m.hasOwnProperty("disableLinkPreviews")) {
                d.disableLinkPreviews = m.disableLinkPreviews;
                if (o.oneofs)
                    d._disableLinkPreviews = "disableLinkPreviews";
            }
            if (m.notificationToneID != null && m.hasOwnProperty("notificationToneID")) {
                d.notificationToneID = m.notificationToneID;
                if (o.oneofs)
                    d._notificationToneID = "notificationToneID";
            }
            if (m.mediaUploadQuality != null && m.hasOwnProperty("mediaUploadQuality")) {
                d.mediaUploadQuality = o.enums === String ? $root.WASyncAction.SettingsSyncAction.MediaQualitySetting[m.mediaUploadQuality] === undefined ? m.mediaUploadQuality : $root.WASyncAction.SettingsSyncAction.MediaQualitySetting[m.mediaUploadQuality] : m.mediaUploadQuality;
                if (o.oneofs)
                    d._mediaUploadQuality = "mediaUploadQuality";
            }
            if (m.isSpellCheckEnabled != null && m.hasOwnProperty("isSpellCheckEnabled")) {
                d.isSpellCheckEnabled = m.isSpellCheckEnabled;
                if (o.oneofs)
                    d._isSpellCheckEnabled = "isSpellCheckEnabled";
            }
            if (m.isEnterToSendEnabled != null && m.hasOwnProperty("isEnterToSendEnabled")) {
                d.isEnterToSendEnabled = m.isEnterToSendEnabled;
                if (o.oneofs)
                    d._isEnterToSendEnabled = "isEnterToSendEnabled";
            }
            if (m.isGroupMessageNotificationEnabled != null && m.hasOwnProperty("isGroupMessageNotificationEnabled")) {
                d.isGroupMessageNotificationEnabled = m.isGroupMessageNotificationEnabled;
                if (o.oneofs)
                    d._isGroupMessageNotificationEnabled = "isGroupMessageNotificationEnabled";
            }
            if (m.isGroupReactionsNotificationEnabled != null && m.hasOwnProperty("isGroupReactionsNotificationEnabled")) {
                d.isGroupReactionsNotificationEnabled = m.isGroupReactionsNotificationEnabled;
                if (o.oneofs)
                    d._isGroupReactionsNotificationEnabled = "isGroupReactionsNotificationEnabled";
            }
            if (m.isStatusNotificationEnabled != null && m.hasOwnProperty("isStatusNotificationEnabled")) {
                d.isStatusNotificationEnabled = m.isStatusNotificationEnabled;
                if (o.oneofs)
                    d._isStatusNotificationEnabled = "isStatusNotificationEnabled";
            }
            if (m.statusNotificationToneID != null && m.hasOwnProperty("statusNotificationToneID")) {
                d.statusNotificationToneID = m.statusNotificationToneID;
                if (o.oneofs)
                    d._statusNotificationToneID = "statusNotificationToneID";
            }
            if (m.shouldPlaySoundForCallNotification != null && m.hasOwnProperty("shouldPlaySoundForCallNotification")) {
                d.shouldPlaySoundForCallNotification = m.shouldPlaySoundForCallNotification;
                if (o.oneofs)
                    d._shouldPlaySoundForCallNotification = "shouldPlaySoundForCallNotification";
            }
            if (m.chatThemeID != null && m.hasOwnProperty("chatThemeID")) {
                d.chatThemeID = m.chatThemeID;
                if (o.oneofs)
                    d._chatThemeID = "chatThemeID";
            }
            if (m.colorSchemeID != null && m.hasOwnProperty("colorSchemeID")) {
                d.colorSchemeID = m.colorSchemeID;
                if (o.oneofs)
                    d._colorSchemeID = "colorSchemeID";
            }
            return d;
        };

        SettingsSyncAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SettingsSyncAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SettingsSyncAction";
        };

        SettingsSyncAction.MediaQualitySetting = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MEDIA_QUALITY_UNKNOWN"] = 0;
            values[valuesById[1] = "STANDARD"] = 1;
            values[valuesById[2] = "HD"] = 2;
            return values;
        })();

        SettingsSyncAction.DisplayMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DISPLAY_MODE_UNKNOWN"] = 0;
            values[valuesById[1] = "ALWAYS"] = 1;
            values[valuesById[2] = "NEVER"] = 2;
            values[valuesById[3] = "ONLY_WHEN_APP_IS_OPEN"] = 3;
            return values;
        })();

        SettingsSyncAction.SettingKey = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SETTING_KEY_UNKNOWN"] = 0;
            values[valuesById[1] = "START_AT_LOGIN"] = 1;
            values[valuesById[2] = "MINIMIZE_TO_TRAY"] = 2;
            values[valuesById[3] = "LANGUAGE"] = 3;
            values[valuesById[4] = "REPLACE_TEXT_WITH_EMOJI"] = 4;
            values[valuesById[5] = "BANNER_NOTIFICATION_DISPLAY_MODE"] = 5;
            values[valuesById[6] = "UNREAD_COUNTER_BADGE_DISPLAY_MODE"] = 6;
            values[valuesById[7] = "IS_MESSAGES_NOTIFICATION_ENABLED"] = 7;
            values[valuesById[8] = "IS_CALLS_NOTIFICATION_ENABLED"] = 8;
            values[valuesById[9] = "IS_REACTIONS_NOTIFICATION_ENABLED"] = 9;
            values[valuesById[10] = "IS_STATUS_REACTIONS_NOTIFICATION_ENABLED"] = 10;
            values[valuesById[11] = "IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED"] = 11;
            values[valuesById[12] = "DEFAULT_NOTIFICATION_TONE_ID"] = 12;
            values[valuesById[13] = "GROUP_DEFAULT_NOTIFICATION_TONE_ID"] = 13;
            values[valuesById[14] = "APP_THEME"] = 14;
            values[valuesById[15] = "WALLPAPER_ID"] = 15;
            values[valuesById[16] = "IS_DOODLE_WALLPAPER_ENABLED"] = 16;
            values[valuesById[17] = "FONT_SIZE"] = 17;
            values[valuesById[18] = "IS_PHOTOS_AUTODOWNLOAD_ENABLED"] = 18;
            values[valuesById[19] = "IS_AUDIOS_AUTODOWNLOAD_ENABLED"] = 19;
            values[valuesById[20] = "IS_VIDEOS_AUTODOWNLOAD_ENABLED"] = 20;
            values[valuesById[21] = "IS_DOCUMENTS_AUTODOWNLOAD_ENABLED"] = 21;
            values[valuesById[22] = "DISABLE_LINK_PREVIEWS"] = 22;
            values[valuesById[23] = "NOTIFICATION_TONE_ID"] = 23;
            values[valuesById[24] = "MEDIA_UPLOAD_QUALITY"] = 24;
            values[valuesById[25] = "IS_SPELL_CHECK_ENABLED"] = 25;
            values[valuesById[26] = "IS_ENTER_TO_SEND_ENABLED"] = 26;
            values[valuesById[27] = "IS_GROUP_MESSAGE_NOTIFICATION_ENABLED"] = 27;
            values[valuesById[28] = "IS_GROUP_REACTIONS_NOTIFICATION_ENABLED"] = 28;
            values[valuesById[29] = "IS_STATUS_NOTIFICATION_ENABLED"] = 29;
            values[valuesById[30] = "STATUS_NOTIFICATION_TONE_ID"] = 30;
            values[valuesById[31] = "SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION"] = 31;
            values[valuesById[32] = "CHAT_THEME_ID"] = 32;
            values[valuesById[33] = "COLOR_SCHEME_ID"] = 33;
            return values;
        })();

        SettingsSyncAction.SettingPlatform = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PLATFORM_UNKNOWN"] = 0;
            values[valuesById[1] = "WEB"] = 1;
            values[valuesById[2] = "HYBRID"] = 2;
            values[valuesById[3] = "WINDOWS"] = 3;
            values[valuesById[4] = "MAC"] = 4;
            return values;
        })();

        return SettingsSyncAction;
    })();

    WASyncAction.InteractiveMessageAction = (function() {

        function InteractiveMessageAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        InteractiveMessageAction.prototype.type = null;
        InteractiveMessageAction.prototype.agmID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InteractiveMessageAction.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InteractiveMessageAction.prototype, "_agmID", {
            get: $util.oneOfGetter($oneOfFields = ["agmID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        InteractiveMessageAction.create = function create(properties) {
            return new InteractiveMessageAction(properties);
        };

        InteractiveMessageAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.agmID != null && Object.hasOwnProperty.call(m, "agmID"))
                w.uint32(18).string(m.agmID);
            return w;
        };

        InteractiveMessageAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.InteractiveMessageAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                case 2: {
                        m.agmID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        InteractiveMessageAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.InteractiveMessageAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.InteractiveMessageAction();
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "DISABLE_CTA":
            case 1:
                m.type = 1;
                break;
            }
            if (d.agmID != null) {
                m.agmID = String(d.agmID);
            }
            return m;
        };

        InteractiveMessageAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WASyncAction.InteractiveMessageAction.InteractiveMessageActionMode[m.type] === undefined ? m.type : $root.WASyncAction.InteractiveMessageAction.InteractiveMessageActionMode[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.agmID != null && m.hasOwnProperty("agmID")) {
                d.agmID = m.agmID;
                if (o.oneofs)
                    d._agmID = "agmID";
            }
            return d;
        };

        InteractiveMessageAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        InteractiveMessageAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.InteractiveMessageAction";
        };

        InteractiveMessageAction.InteractiveMessageActionMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "DISABLE_CTA"] = 1;
            return values;
        })();

        return InteractiveMessageAction;
    })();

    WASyncAction.PrivateProcessingSettingAction = (function() {

        function PrivateProcessingSettingAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrivateProcessingSettingAction.prototype.privateProcessingStatus = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrivateProcessingSettingAction.prototype, "_privateProcessingStatus", {
            get: $util.oneOfGetter($oneOfFields = ["privateProcessingStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PrivateProcessingSettingAction.create = function create(properties) {
            return new PrivateProcessingSettingAction(properties);
        };

        PrivateProcessingSettingAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.privateProcessingStatus != null && Object.hasOwnProperty.call(m, "privateProcessingStatus"))
                w.uint32(8).int32(m.privateProcessingStatus);
            return w;
        };

        PrivateProcessingSettingAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PrivateProcessingSettingAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.privateProcessingStatus = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrivateProcessingSettingAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PrivateProcessingSettingAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PrivateProcessingSettingAction();
            switch (d.privateProcessingStatus) {
            default:
                if (typeof d.privateProcessingStatus === "number") {
                    m.privateProcessingStatus = d.privateProcessingStatus;
                    break;
                }
                break;
            case "UNDEFINED":
            case 0:
                m.privateProcessingStatus = 0;
                break;
            case "ENABLED":
            case 1:
                m.privateProcessingStatus = 1;
                break;
            case "DISABLED":
            case 2:
                m.privateProcessingStatus = 2;
                break;
            }
            return m;
        };

        PrivateProcessingSettingAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.privateProcessingStatus != null && m.hasOwnProperty("privateProcessingStatus")) {
                d.privateProcessingStatus = o.enums === String ? $root.WASyncAction.PrivateProcessingSettingAction.PrivateProcessingStatus[m.privateProcessingStatus] === undefined ? m.privateProcessingStatus : $root.WASyncAction.PrivateProcessingSettingAction.PrivateProcessingStatus[m.privateProcessingStatus] : m.privateProcessingStatus;
                if (o.oneofs)
                    d._privateProcessingStatus = "privateProcessingStatus";
            }
            return d;
        };

        PrivateProcessingSettingAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrivateProcessingSettingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PrivateProcessingSettingAction";
        };

        PrivateProcessingSettingAction.PrivateProcessingStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "ENABLED"] = 1;
            values[valuesById[2] = "DISABLED"] = 2;
            return values;
        })();

        return PrivateProcessingSettingAction;
    })();

    WASyncAction.AvatarUpdatedAction = (function() {

        function AvatarUpdatedAction(p) {
            this.recentAvatarStickers = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AvatarUpdatedAction.prototype.eventType = null;
        AvatarUpdatedAction.prototype.recentAvatarStickers = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvatarUpdatedAction.prototype, "_eventType", {
            get: $util.oneOfGetter($oneOfFields = ["eventType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AvatarUpdatedAction.create = function create(properties) {
            return new AvatarUpdatedAction(properties);
        };

        AvatarUpdatedAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.eventType != null && Object.hasOwnProperty.call(m, "eventType"))
                w.uint32(8).int32(m.eventType);
            if (m.recentAvatarStickers != null && m.recentAvatarStickers.length) {
                for (var i = 0; i < m.recentAvatarStickers.length; ++i)
                    $root.WASyncAction.StickerAction.encode(m.recentAvatarStickers[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        AvatarUpdatedAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.AvatarUpdatedAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.eventType = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.recentAvatarStickers && m.recentAvatarStickers.length))
                            m.recentAvatarStickers = [];
                        m.recentAvatarStickers.push($root.WASyncAction.StickerAction.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AvatarUpdatedAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.AvatarUpdatedAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.AvatarUpdatedAction();
            switch (d.eventType) {
            default:
                if (typeof d.eventType === "number") {
                    m.eventType = d.eventType;
                    break;
                }
                break;
            case "UPDATED":
            case 0:
                m.eventType = 0;
                break;
            case "CREATED":
            case 1:
                m.eventType = 1;
                break;
            case "DELETED":
            case 2:
                m.eventType = 2;
                break;
            }
            if (d.recentAvatarStickers) {
                if (!Array.isArray(d.recentAvatarStickers))
                    throw TypeError(".WASyncAction.AvatarUpdatedAction.recentAvatarStickers: array expected");
                m.recentAvatarStickers = [];
                for (var i = 0; i < d.recentAvatarStickers.length; ++i) {
                    if (typeof d.recentAvatarStickers[i] !== "object")
                        throw TypeError(".WASyncAction.AvatarUpdatedAction.recentAvatarStickers: object expected");
                    m.recentAvatarStickers[i] = $root.WASyncAction.StickerAction.fromObject(d.recentAvatarStickers[i], n + 1);
                }
            }
            return m;
        };

        AvatarUpdatedAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.recentAvatarStickers = [];
            }
            if (m.eventType != null && m.hasOwnProperty("eventType")) {
                d.eventType = o.enums === String ? $root.WASyncAction.AvatarUpdatedAction.AvatarEventType[m.eventType] === undefined ? m.eventType : $root.WASyncAction.AvatarUpdatedAction.AvatarEventType[m.eventType] : m.eventType;
                if (o.oneofs)
                    d._eventType = "eventType";
            }
            if (m.recentAvatarStickers && m.recentAvatarStickers.length) {
                d.recentAvatarStickers = [];
                for (var j = 0; j < m.recentAvatarStickers.length; ++j) {
                    d.recentAvatarStickers[j] = $root.WASyncAction.StickerAction.toObject(m.recentAvatarStickers[j], o);
                }
            }
            return d;
        };

        AvatarUpdatedAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AvatarUpdatedAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.AvatarUpdatedAction";
        };

        AvatarUpdatedAction.AvatarEventType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UPDATED"] = 0;
            values[valuesById[1] = "CREATED"] = 1;
            values[valuesById[2] = "DELETED"] = 2;
            return values;
        })();

        return AvatarUpdatedAction;
    })();

    WASyncAction.BizAISettingsNudgeAction = (function() {

        function BizAISettingsNudgeAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizAISettingsNudgeAction.prototype.category = null;
        BizAISettingsNudgeAction.prototype.version = null;
        BizAISettingsNudgeAction.prototype.updatedAtMS = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAISettingsNudgeAction.prototype, "_category", {
            get: $util.oneOfGetter($oneOfFields = ["category"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAISettingsNudgeAction.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAISettingsNudgeAction.prototype, "_updatedAtMS", {
            get: $util.oneOfGetter($oneOfFields = ["updatedAtMS"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BizAISettingsNudgeAction.create = function create(properties) {
            return new BizAISettingsNudgeAction(properties);
        };

        BizAISettingsNudgeAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.category != null && Object.hasOwnProperty.call(m, "category"))
                w.uint32(8).int32(m.category);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(16).int64(m.version);
            if (m.updatedAtMS != null && Object.hasOwnProperty.call(m, "updatedAtMS"))
                w.uint32(24).int64(m.updatedAtMS);
            return w;
        };

        BizAISettingsNudgeAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BizAISettingsNudgeAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.category = r.int32();
                        break;
                    }
                case 2: {
                        m.version = r.int64();
                        break;
                    }
                case 3: {
                        m.updatedAtMS = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BizAISettingsNudgeAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BizAISettingsNudgeAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BizAISettingsNudgeAction();
            switch (d.category) {
            default:
                if (typeof d.category === "number") {
                    m.category = d.category;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.category = 0;
                break;
            case "INSTRUCTIONS":
            case 1:
                m.category = 1;
                break;
            case "RESPONSE_SETTINGS":
            case 2:
                m.category = 2;
                break;
            case "EXAMPLE_RESPONSES":
            case 3:
                m.category = 3;
                break;
            case "KNOWLEDGE":
            case 4:
                m.category = 4;
                break;
            case "LEAD_GEN":
            case 5:
                m.category = 5;
                break;
            }
            if (d.version != null) {
                if ($util.Long)
                    (m.version = $util.Long.fromValue(d.version)).unsigned = false;
                else if (typeof d.version === "string")
                    m.version = parseInt(d.version, 10);
                else if (typeof d.version === "number")
                    m.version = d.version;
                else if (typeof d.version === "object")
                    m.version = new $util.LongBits(d.version.low >>> 0, d.version.high >>> 0).toNumber();
            }
            if (d.updatedAtMS != null) {
                if ($util.Long)
                    (m.updatedAtMS = $util.Long.fromValue(d.updatedAtMS)).unsigned = false;
                else if (typeof d.updatedAtMS === "string")
                    m.updatedAtMS = parseInt(d.updatedAtMS, 10);
                else if (typeof d.updatedAtMS === "number")
                    m.updatedAtMS = d.updatedAtMS;
                else if (typeof d.updatedAtMS === "object")
                    m.updatedAtMS = new $util.LongBits(d.updatedAtMS.low >>> 0, d.updatedAtMS.high >>> 0).toNumber();
            }
            return m;
        };

        BizAISettingsNudgeAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.category != null && m.hasOwnProperty("category")) {
                d.category = o.enums === String ? $root.WASyncAction.BizAISettingsNudgeAction.BizAISettingsCategory[m.category] === undefined ? m.category : $root.WASyncAction.BizAISettingsNudgeAction.BizAISettingsCategory[m.category] : m.category;
                if (o.oneofs)
                    d._category = "category";
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                if (typeof m.version === "number")
                    d.version = o.longs === String ? String(m.version) : m.version;
                else
                    d.version = o.longs === String ? $util.Long.prototype.toString.call(m.version) : o.longs === Number ? new $util.LongBits(m.version.low >>> 0, m.version.high >>> 0).toNumber() : m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.updatedAtMS != null && m.hasOwnProperty("updatedAtMS")) {
                if (typeof m.updatedAtMS === "number")
                    d.updatedAtMS = o.longs === String ? String(m.updatedAtMS) : m.updatedAtMS;
                else
                    d.updatedAtMS = o.longs === String ? $util.Long.prototype.toString.call(m.updatedAtMS) : o.longs === Number ? new $util.LongBits(m.updatedAtMS.low >>> 0, m.updatedAtMS.high >>> 0).toNumber() : m.updatedAtMS;
                if (o.oneofs)
                    d._updatedAtMS = "updatedAtMS";
            }
            return d;
        };

        BizAISettingsNudgeAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizAISettingsNudgeAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BizAISettingsNudgeAction";
        };

        BizAISettingsNudgeAction.BizAISettingsCategory = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "INSTRUCTIONS"] = 1;
            values[valuesById[2] = "RESPONSE_SETTINGS"] = 2;
            values[valuesById[3] = "EXAMPLE_RESPONSES"] = 3;
            values[valuesById[4] = "KNOWLEDGE"] = 4;
            values[valuesById[5] = "LEAD_GEN"] = 5;
            return values;
        })();

        return BizAISettingsNudgeAction;
    })();

    WASyncAction.MaibaAIFeaturesControlAction = (function() {

        function MaibaAIFeaturesControlAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MaibaAIFeaturesControlAction.prototype.aiFeatureStatus = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MaibaAIFeaturesControlAction.prototype, "_aiFeatureStatus", {
            get: $util.oneOfGetter($oneOfFields = ["aiFeatureStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MaibaAIFeaturesControlAction.create = function create(properties) {
            return new MaibaAIFeaturesControlAction(properties);
        };

        MaibaAIFeaturesControlAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.aiFeatureStatus != null && Object.hasOwnProperty.call(m, "aiFeatureStatus"))
                w.uint32(8).int32(m.aiFeatureStatus);
            return w;
        };

        MaibaAIFeaturesControlAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MaibaAIFeaturesControlAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.aiFeatureStatus = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MaibaAIFeaturesControlAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MaibaAIFeaturesControlAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MaibaAIFeaturesControlAction();
            switch (d.aiFeatureStatus) {
            default:
                if (typeof d.aiFeatureStatus === "number") {
                    m.aiFeatureStatus = d.aiFeatureStatus;
                    break;
                }
                break;
            case "ENABLED":
            case 0:
                m.aiFeatureStatus = 0;
                break;
            case "ENABLED_HAS_LEARNING":
            case 1:
                m.aiFeatureStatus = 1;
                break;
            case "DISABLED":
            case 2:
                m.aiFeatureStatus = 2;
                break;
            }
            return m;
        };

        MaibaAIFeaturesControlAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.aiFeatureStatus != null && m.hasOwnProperty("aiFeatureStatus")) {
                d.aiFeatureStatus = o.enums === String ? $root.WASyncAction.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus[m.aiFeatureStatus] === undefined ? m.aiFeatureStatus : $root.WASyncAction.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus[m.aiFeatureStatus] : m.aiFeatureStatus;
                if (o.oneofs)
                    d._aiFeatureStatus = "aiFeatureStatus";
            }
            return d;
        };

        MaibaAIFeaturesControlAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MaibaAIFeaturesControlAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MaibaAIFeaturesControlAction";
        };

        MaibaAIFeaturesControlAction.MaibaAIFeatureStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ENABLED"] = 0;
            values[valuesById[1] = "ENABLED_HAS_LEARNING"] = 1;
            values[valuesById[2] = "DISABLED"] = 2;
            return values;
        })();

        return MaibaAIFeaturesControlAction;
    })();

    WASyncAction.PaymentTosAction = (function() {

        function PaymentTosAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PaymentTosAction.prototype.paymentNotice = null;
        PaymentTosAction.prototype.accepted = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PaymentTosAction.prototype, "_paymentNotice", {
            get: $util.oneOfGetter($oneOfFields = ["paymentNotice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PaymentTosAction.prototype, "_accepted", {
            get: $util.oneOfGetter($oneOfFields = ["accepted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PaymentTosAction.create = function create(properties) {
            return new PaymentTosAction(properties);
        };

        PaymentTosAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.paymentNotice != null && Object.hasOwnProperty.call(m, "paymentNotice"))
                w.uint32(8).int32(m.paymentNotice);
            if (m.accepted != null && Object.hasOwnProperty.call(m, "accepted"))
                w.uint32(16).bool(m.accepted);
            return w;
        };

        PaymentTosAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PaymentTosAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.paymentNotice = r.int32();
                        break;
                    }
                case 2: {
                        m.accepted = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PaymentTosAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PaymentTosAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PaymentTosAction();
            switch (d.paymentNotice) {
            default:
                if (typeof d.paymentNotice === "number") {
                    m.paymentNotice = d.paymentNotice;
                    break;
                }
                break;
            case "BR_PAY_PRIVACY_POLICY":
            case 0:
                m.paymentNotice = 0;
                break;
            }
            if (d.accepted != null) {
                m.accepted = Boolean(d.accepted);
            }
            return m;
        };

        PaymentTosAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.paymentNotice != null && m.hasOwnProperty("paymentNotice")) {
                d.paymentNotice = o.enums === String ? $root.WASyncAction.PaymentTosAction.PaymentNotice[m.paymentNotice] === undefined ? m.paymentNotice : $root.WASyncAction.PaymentTosAction.PaymentNotice[m.paymentNotice] : m.paymentNotice;
                if (o.oneofs)
                    d._paymentNotice = "paymentNotice";
            }
            if (m.accepted != null && m.hasOwnProperty("accepted")) {
                d.accepted = m.accepted;
                if (o.oneofs)
                    d._accepted = "accepted";
            }
            return d;
        };

        PaymentTosAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PaymentTosAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PaymentTosAction";
        };

        PaymentTosAction.PaymentNotice = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BR_PAY_PRIVACY_POLICY"] = 0;
            return values;
        })();

        return PaymentTosAction;
    })();

    WASyncAction.NotificationActivitySettingAction = (function() {

        function NotificationActivitySettingAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NotificationActivitySettingAction.prototype.notificationActivitySetting = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NotificationActivitySettingAction.prototype, "_notificationActivitySetting", {
            get: $util.oneOfGetter($oneOfFields = ["notificationActivitySetting"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        NotificationActivitySettingAction.create = function create(properties) {
            return new NotificationActivitySettingAction(properties);
        };

        NotificationActivitySettingAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.notificationActivitySetting != null && Object.hasOwnProperty.call(m, "notificationActivitySetting"))
                w.uint32(8).int32(m.notificationActivitySetting);
            return w;
        };

        NotificationActivitySettingAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.NotificationActivitySettingAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.notificationActivitySetting = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        NotificationActivitySettingAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.NotificationActivitySettingAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.NotificationActivitySettingAction();
            switch (d.notificationActivitySetting) {
            default:
                if (typeof d.notificationActivitySetting === "number") {
                    m.notificationActivitySetting = d.notificationActivitySetting;
                    break;
                }
                break;
            case "DEFAULT_ALL_MESSAGES":
            case 0:
                m.notificationActivitySetting = 0;
                break;
            case "ALL_MESSAGES":
            case 1:
                m.notificationActivitySetting = 1;
                break;
            case "HIGHLIGHTS":
            case 2:
                m.notificationActivitySetting = 2;
                break;
            case "DEFAULT_HIGHLIGHTS":
            case 3:
                m.notificationActivitySetting = 3;
                break;
            }
            return m;
        };

        NotificationActivitySettingAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.notificationActivitySetting != null && m.hasOwnProperty("notificationActivitySetting")) {
                d.notificationActivitySetting = o.enums === String ? $root.WASyncAction.NotificationActivitySettingAction.NotificationActivitySetting[m.notificationActivitySetting] === undefined ? m.notificationActivitySetting : $root.WASyncAction.NotificationActivitySettingAction.NotificationActivitySetting[m.notificationActivitySetting] : m.notificationActivitySetting;
                if (o.oneofs)
                    d._notificationActivitySetting = "notificationActivitySetting";
            }
            return d;
        };

        NotificationActivitySettingAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        NotificationActivitySettingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.NotificationActivitySettingAction";
        };

        NotificationActivitySettingAction.NotificationActivitySetting = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT_ALL_MESSAGES"] = 0;
            values[valuesById[1] = "ALL_MESSAGES"] = 1;
            values[valuesById[2] = "HIGHLIGHTS"] = 2;
            values[valuesById[3] = "DEFAULT_HIGHLIGHTS"] = 3;
            return values;
        })();

        return NotificationActivitySettingAction;
    })();

    WASyncAction.WaffleAccountLinkStateAction = (function() {

        function WaffleAccountLinkStateAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WaffleAccountLinkStateAction.prototype.linkState = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WaffleAccountLinkStateAction.prototype, "_linkState", {
            get: $util.oneOfGetter($oneOfFields = ["linkState"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        WaffleAccountLinkStateAction.create = function create(properties) {
            return new WaffleAccountLinkStateAction(properties);
        };

        WaffleAccountLinkStateAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.linkState != null && Object.hasOwnProperty.call(m, "linkState"))
                w.uint32(16).int32(m.linkState);
            return w;
        };

        WaffleAccountLinkStateAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.WaffleAccountLinkStateAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 2: {
                        m.linkState = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        WaffleAccountLinkStateAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.WaffleAccountLinkStateAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.WaffleAccountLinkStateAction();
            switch (d.linkState) {
            default:
                if (typeof d.linkState === "number") {
                    m.linkState = d.linkState;
                    break;
                }
                break;
            case "ACTIVE":
            case 0:
                m.linkState = 0;
                break;
            case "PAUSED":
            case 1:
                m.linkState = 1;
                break;
            case "UNLINKED":
            case 2:
                m.linkState = 2;
                break;
            }
            return m;
        };

        WaffleAccountLinkStateAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.linkState != null && m.hasOwnProperty("linkState")) {
                d.linkState = o.enums === String ? $root.WASyncAction.WaffleAccountLinkStateAction.AccountLinkState[m.linkState] === undefined ? m.linkState : $root.WASyncAction.WaffleAccountLinkStateAction.AccountLinkState[m.linkState] : m.linkState;
                if (o.oneofs)
                    d._linkState = "linkState";
            }
            return d;
        };

        WaffleAccountLinkStateAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        WaffleAccountLinkStateAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.WaffleAccountLinkStateAction";
        };

        WaffleAccountLinkStateAction.AccountLinkState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ACTIVE"] = 0;
            values[valuesById[1] = "PAUSED"] = 1;
            values[valuesById[2] = "UNLINKED"] = 2;
            return values;
        })();

        return WaffleAccountLinkStateAction;
    })();

    WASyncAction.MerchantPaymentPartnerAction = (function() {

        function MerchantPaymentPartnerAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MerchantPaymentPartnerAction.prototype.status = null;
        MerchantPaymentPartnerAction.prototype.country = null;
        MerchantPaymentPartnerAction.prototype.gatewayName = null;
        MerchantPaymentPartnerAction.prototype.credentialID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_status", {
            get: $util.oneOfGetter($oneOfFields = ["status"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_country", {
            get: $util.oneOfGetter($oneOfFields = ["country"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_gatewayName", {
            get: $util.oneOfGetter($oneOfFields = ["gatewayName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MerchantPaymentPartnerAction.prototype, "_credentialID", {
            get: $util.oneOfGetter($oneOfFields = ["credentialID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MerchantPaymentPartnerAction.create = function create(properties) {
            return new MerchantPaymentPartnerAction(properties);
        };

        MerchantPaymentPartnerAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.country != null && Object.hasOwnProperty.call(m, "country"))
                w.uint32(18).string(m.country);
            if (m.gatewayName != null && Object.hasOwnProperty.call(m, "gatewayName"))
                w.uint32(26).string(m.gatewayName);
            if (m.credentialID != null && Object.hasOwnProperty.call(m, "credentialID"))
                w.uint32(34).string(m.credentialID);
            return w;
        };

        MerchantPaymentPartnerAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MerchantPaymentPartnerAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.status = r.int32();
                        break;
                    }
                case 2: {
                        m.country = r.string();
                        break;
                    }
                case 3: {
                        m.gatewayName = r.string();
                        break;
                    }
                case 4: {
                        m.credentialID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MerchantPaymentPartnerAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MerchantPaymentPartnerAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MerchantPaymentPartnerAction();
            switch (d.status) {
            default:
                if (typeof d.status === "number") {
                    m.status = d.status;
                    break;
                }
                break;
            case "ACTIVE":
            case 0:
                m.status = 0;
                break;
            case "INACTIVE":
            case 1:
                m.status = 1;
                break;
            }
            if (d.country != null) {
                m.country = String(d.country);
            }
            if (d.gatewayName != null) {
                m.gatewayName = String(d.gatewayName);
            }
            if (d.credentialID != null) {
                m.credentialID = String(d.credentialID);
            }
            return m;
        };

        MerchantPaymentPartnerAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.status != null && m.hasOwnProperty("status")) {
                d.status = o.enums === String ? $root.WASyncAction.MerchantPaymentPartnerAction.Status[m.status] === undefined ? m.status : $root.WASyncAction.MerchantPaymentPartnerAction.Status[m.status] : m.status;
                if (o.oneofs)
                    d._status = "status";
            }
            if (m.country != null && m.hasOwnProperty("country")) {
                d.country = m.country;
                if (o.oneofs)
                    d._country = "country";
            }
            if (m.gatewayName != null && m.hasOwnProperty("gatewayName")) {
                d.gatewayName = m.gatewayName;
                if (o.oneofs)
                    d._gatewayName = "gatewayName";
            }
            if (m.credentialID != null && m.hasOwnProperty("credentialID")) {
                d.credentialID = m.credentialID;
                if (o.oneofs)
                    d._credentialID = "credentialID";
            }
            return d;
        };

        MerchantPaymentPartnerAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MerchantPaymentPartnerAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MerchantPaymentPartnerAction";
        };

        MerchantPaymentPartnerAction.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ACTIVE"] = 0;
            values[valuesById[1] = "INACTIVE"] = 1;
            return values;
        })();

        return MerchantPaymentPartnerAction;
    })();

    WASyncAction.NoteEditAction = (function() {

        function NoteEditAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NoteEditAction.prototype.type = null;
        NoteEditAction.prototype.chatJID = null;
        NoteEditAction.prototype.createdAt = null;
        NoteEditAction.prototype.deleted = null;
        NoteEditAction.prototype.unstructuredContent = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoteEditAction.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoteEditAction.prototype, "_chatJID", {
            get: $util.oneOfGetter($oneOfFields = ["chatJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoteEditAction.prototype, "_createdAt", {
            get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoteEditAction.prototype, "_deleted", {
            get: $util.oneOfGetter($oneOfFields = ["deleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoteEditAction.prototype, "_unstructuredContent", {
            get: $util.oneOfGetter($oneOfFields = ["unstructuredContent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        NoteEditAction.create = function create(properties) {
            return new NoteEditAction(properties);
        };

        NoteEditAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.chatJID != null && Object.hasOwnProperty.call(m, "chatJID"))
                w.uint32(18).string(m.chatJID);
            if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt"))
                w.uint32(24).int64(m.createdAt);
            if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                w.uint32(32).bool(m.deleted);
            if (m.unstructuredContent != null && Object.hasOwnProperty.call(m, "unstructuredContent"))
                w.uint32(42).string(m.unstructuredContent);
            return w;
        };

        NoteEditAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.NoteEditAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                case 2: {
                        m.chatJID = r.string();
                        break;
                    }
                case 3: {
                        m.createdAt = r.int64();
                        break;
                    }
                case 4: {
                        m.deleted = r.bool();
                        break;
                    }
                case 5: {
                        m.unstructuredContent = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        NoteEditAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.NoteEditAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.NoteEditAction();
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "UNSTRUCTURED":
            case 1:
                m.type = 1;
                break;
            case "STRUCTURED":
            case 2:
                m.type = 2;
                break;
            }
            if (d.chatJID != null) {
                m.chatJID = String(d.chatJID);
            }
            if (d.createdAt != null) {
                if ($util.Long)
                    (m.createdAt = $util.Long.fromValue(d.createdAt)).unsigned = false;
                else if (typeof d.createdAt === "string")
                    m.createdAt = parseInt(d.createdAt, 10);
                else if (typeof d.createdAt === "number")
                    m.createdAt = d.createdAt;
                else if (typeof d.createdAt === "object")
                    m.createdAt = new $util.LongBits(d.createdAt.low >>> 0, d.createdAt.high >>> 0).toNumber();
            }
            if (d.deleted != null) {
                m.deleted = Boolean(d.deleted);
            }
            if (d.unstructuredContent != null) {
                m.unstructuredContent = String(d.unstructuredContent);
            }
            return m;
        };

        NoteEditAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WASyncAction.NoteEditAction.NoteType[m.type] === undefined ? m.type : $root.WASyncAction.NoteEditAction.NoteType[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.chatJID != null && m.hasOwnProperty("chatJID")) {
                d.chatJID = m.chatJID;
                if (o.oneofs)
                    d._chatJID = "chatJID";
            }
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (typeof m.createdAt === "number")
                    d.createdAt = o.longs === String ? String(m.createdAt) : m.createdAt;
                else
                    d.createdAt = o.longs === String ? $util.Long.prototype.toString.call(m.createdAt) : o.longs === Number ? new $util.LongBits(m.createdAt.low >>> 0, m.createdAt.high >>> 0).toNumber() : m.createdAt;
                if (o.oneofs)
                    d._createdAt = "createdAt";
            }
            if (m.deleted != null && m.hasOwnProperty("deleted")) {
                d.deleted = m.deleted;
                if (o.oneofs)
                    d._deleted = "deleted";
            }
            if (m.unstructuredContent != null && m.hasOwnProperty("unstructuredContent")) {
                d.unstructuredContent = m.unstructuredContent;
                if (o.oneofs)
                    d._unstructuredContent = "unstructuredContent";
            }
            return d;
        };

        NoteEditAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        NoteEditAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.NoteEditAction";
        };

        NoteEditAction.NoteType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "UNSTRUCTURED"] = 1;
            values[valuesById[2] = "STRUCTURED"] = 2;
            return values;
        })();

        return NoteEditAction;
    })();

    WASyncAction.StatusPrivacyAction = (function() {

        function StatusPrivacyAction(p) {
            this.userJID = [];
            this.customLists = [];
            this.modes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StatusPrivacyAction.prototype.mode = null;
        StatusPrivacyAction.prototype.userJID = $util.emptyArray;
        StatusPrivacyAction.prototype.shareToFB = null;
        StatusPrivacyAction.prototype.shareToIG = null;
        StatusPrivacyAction.prototype.customLists = $util.emptyArray;
        StatusPrivacyAction.prototype.modes = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusPrivacyAction.prototype, "_mode", {
            get: $util.oneOfGetter($oneOfFields = ["mode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusPrivacyAction.prototype, "_shareToFB", {
            get: $util.oneOfGetter($oneOfFields = ["shareToFB"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusPrivacyAction.prototype, "_shareToIG", {
            get: $util.oneOfGetter($oneOfFields = ["shareToIG"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        StatusPrivacyAction.create = function create(properties) {
            return new StatusPrivacyAction(properties);
        };

        StatusPrivacyAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mode != null && Object.hasOwnProperty.call(m, "mode"))
                w.uint32(8).int32(m.mode);
            if (m.userJID != null && m.userJID.length) {
                for (var i = 0; i < m.userJID.length; ++i)
                    w.uint32(18).string(m.userJID[i]);
            }
            if (m.shareToFB != null && Object.hasOwnProperty.call(m, "shareToFB"))
                w.uint32(24).bool(m.shareToFB);
            if (m.shareToIG != null && Object.hasOwnProperty.call(m, "shareToIG"))
                w.uint32(32).bool(m.shareToIG);
            if (m.customLists != null && m.customLists.length) {
                for (var i = 0; i < m.customLists.length; ++i)
                    $root.WASyncAction.StatusPrivacyAction.CustomList.encode(m.customLists[i], w.uint32(42).fork()).ldelim();
            }
            if (m.modes != null && m.modes.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.modes.length; ++i)
                    w.int32(m.modes[i]);
                w.ldelim();
            }
            return w;
        };

        StatusPrivacyAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.StatusPrivacyAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.mode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.userJID && m.userJID.length))
                            m.userJID = [];
                        m.userJID.push(r.string());
                        break;
                    }
                case 3: {
                        m.shareToFB = r.bool();
                        break;
                    }
                case 4: {
                        m.shareToIG = r.bool();
                        break;
                    }
                case 5: {
                        if (!(m.customLists && m.customLists.length))
                            m.customLists = [];
                        m.customLists.push($root.WASyncAction.StatusPrivacyAction.CustomList.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 6: {
                        if (!(m.modes && m.modes.length))
                            m.modes = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.modes.push(r.int32());
                        } else
                            m.modes.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        StatusPrivacyAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.StatusPrivacyAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.StatusPrivacyAction();
            switch (d.mode) {
            default:
                if (typeof d.mode === "number") {
                    m.mode = d.mode;
                    break;
                }
                break;
            case "ALLOW_LIST":
            case 0:
                m.mode = 0;
                break;
            case "DENY_LIST":
            case 1:
                m.mode = 1;
                break;
            case "CONTACTS":
            case 2:
                m.mode = 2;
                break;
            case "CLOSE_FRIENDS":
            case 3:
                m.mode = 3;
                break;
            case "CUSTOM_LIST":
            case 4:
                m.mode = 4;
                break;
            }
            if (d.userJID) {
                if (!Array.isArray(d.userJID))
                    throw TypeError(".WASyncAction.StatusPrivacyAction.userJID: array expected");
                m.userJID = [];
                for (var i = 0; i < d.userJID.length; ++i) {
                    m.userJID[i] = String(d.userJID[i]);
                }
            }
            if (d.shareToFB != null) {
                m.shareToFB = Boolean(d.shareToFB);
            }
            if (d.shareToIG != null) {
                m.shareToIG = Boolean(d.shareToIG);
            }
            if (d.customLists) {
                if (!Array.isArray(d.customLists))
                    throw TypeError(".WASyncAction.StatusPrivacyAction.customLists: array expected");
                m.customLists = [];
                for (var i = 0; i < d.customLists.length; ++i) {
                    if (typeof d.customLists[i] !== "object")
                        throw TypeError(".WASyncAction.StatusPrivacyAction.customLists: object expected");
                    m.customLists[i] = $root.WASyncAction.StatusPrivacyAction.CustomList.fromObject(d.customLists[i], n + 1);
                }
            }
            if (d.modes) {
                if (!Array.isArray(d.modes))
                    throw TypeError(".WASyncAction.StatusPrivacyAction.modes: array expected");
                m.modes = [];
                for (var i = 0; i < d.modes.length; ++i) {
                    switch (d.modes[i]) {
                    default:
                        if (typeof d.modes[i] === "number") {
                            m.modes[i] = d.modes[i];
                            break;
                        }
                    case "ALLOW_LIST":
                    case 0:
                        m.modes[i] = 0;
                        break;
                    case "DENY_LIST":
                    case 1:
                        m.modes[i] = 1;
                        break;
                    case "CONTACTS":
                    case 2:
                        m.modes[i] = 2;
                        break;
                    case "CLOSE_FRIENDS":
                    case 3:
                        m.modes[i] = 3;
                        break;
                    case "CUSTOM_LIST":
                    case 4:
                        m.modes[i] = 4;
                        break;
                    }
                }
            }
            return m;
        };

        StatusPrivacyAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.userJID = [];
                d.customLists = [];
                d.modes = [];
            }
            if (m.mode != null && m.hasOwnProperty("mode")) {
                d.mode = o.enums === String ? $root.WASyncAction.StatusPrivacyAction.StatusDistributionMode[m.mode] === undefined ? m.mode : $root.WASyncAction.StatusPrivacyAction.StatusDistributionMode[m.mode] : m.mode;
                if (o.oneofs)
                    d._mode = "mode";
            }
            if (m.userJID && m.userJID.length) {
                d.userJID = [];
                for (var j = 0; j < m.userJID.length; ++j) {
                    d.userJID[j] = m.userJID[j];
                }
            }
            if (m.shareToFB != null && m.hasOwnProperty("shareToFB")) {
                d.shareToFB = m.shareToFB;
                if (o.oneofs)
                    d._shareToFB = "shareToFB";
            }
            if (m.shareToIG != null && m.hasOwnProperty("shareToIG")) {
                d.shareToIG = m.shareToIG;
                if (o.oneofs)
                    d._shareToIG = "shareToIG";
            }
            if (m.customLists && m.customLists.length) {
                d.customLists = [];
                for (var j = 0; j < m.customLists.length; ++j) {
                    d.customLists[j] = $root.WASyncAction.StatusPrivacyAction.CustomList.toObject(m.customLists[j], o);
                }
            }
            if (m.modes && m.modes.length) {
                d.modes = [];
                for (var j = 0; j < m.modes.length; ++j) {
                    d.modes[j] = o.enums === String ? $root.WASyncAction.StatusPrivacyAction.StatusDistributionMode[m.modes[j]] === undefined ? m.modes[j] : $root.WASyncAction.StatusPrivacyAction.StatusDistributionMode[m.modes[j]] : m.modes[j];
                }
            }
            return d;
        };

        StatusPrivacyAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        StatusPrivacyAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.StatusPrivacyAction";
        };

        StatusPrivacyAction.StatusDistributionMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ALLOW_LIST"] = 0;
            values[valuesById[1] = "DENY_LIST"] = 1;
            values[valuesById[2] = "CONTACTS"] = 2;
            values[valuesById[3] = "CLOSE_FRIENDS"] = 3;
            values[valuesById[4] = "CUSTOM_LIST"] = 4;
            return values;
        })();

        StatusPrivacyAction.CustomList = (function() {

            function CustomList(p) {
                this.userJID = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CustomList.prototype.listID = null;
            CustomList.prototype.name = null;
            CustomList.prototype.emoji = null;
            CustomList.prototype.isSelected = null;
            CustomList.prototype.userJID = $util.emptyArray;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(CustomList.prototype, "_listID", {
                get: $util.oneOfGetter($oneOfFields = ["listID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(CustomList.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(CustomList.prototype, "_emoji", {
                get: $util.oneOfGetter($oneOfFields = ["emoji"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(CustomList.prototype, "_isSelected", {
                get: $util.oneOfGetter($oneOfFields = ["isSelected"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            CustomList.create = function create(properties) {
                return new CustomList(properties);
            };

            CustomList.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.listID != null && Object.hasOwnProperty.call(m, "listID"))
                    w.uint32(10).string(m.listID);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.emoji != null && Object.hasOwnProperty.call(m, "emoji"))
                    w.uint32(26).string(m.emoji);
                if (m.isSelected != null && Object.hasOwnProperty.call(m, "isSelected"))
                    w.uint32(32).bool(m.isSelected);
                if (m.userJID != null && m.userJID.length) {
                    for (var i = 0; i < m.userJID.length; ++i)
                        w.uint32(42).string(m.userJID[i]);
                }
                return w;
            };

            CustomList.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.StatusPrivacyAction.CustomList();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.listID = r.string();
                            break;
                        }
                    case 2: {
                            m.name = r.string();
                            break;
                        }
                    case 3: {
                            m.emoji = r.string();
                            break;
                        }
                    case 4: {
                            m.isSelected = r.bool();
                            break;
                        }
                    case 5: {
                            if (!(m.userJID && m.userJID.length))
                                m.userJID = [];
                            m.userJID.push(r.string());
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            CustomList.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASyncAction.StatusPrivacyAction.CustomList)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASyncAction.StatusPrivacyAction.CustomList();
                if (d.listID != null) {
                    m.listID = String(d.listID);
                }
                if (d.name != null) {
                    m.name = String(d.name);
                }
                if (d.emoji != null) {
                    m.emoji = String(d.emoji);
                }
                if (d.isSelected != null) {
                    m.isSelected = Boolean(d.isSelected);
                }
                if (d.userJID) {
                    if (!Array.isArray(d.userJID))
                        throw TypeError(".WASyncAction.StatusPrivacyAction.CustomList.userJID: array expected");
                    m.userJID = [];
                    for (var i = 0; i < d.userJID.length; ++i) {
                        m.userJID[i] = String(d.userJID[i]);
                    }
                }
                return m;
            };

            CustomList.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.userJID = [];
                }
                if (m.listID != null && m.hasOwnProperty("listID")) {
                    d.listID = m.listID;
                    if (o.oneofs)
                        d._listID = "listID";
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    d.name = m.name;
                    if (o.oneofs)
                        d._name = "name";
                }
                if (m.emoji != null && m.hasOwnProperty("emoji")) {
                    d.emoji = m.emoji;
                    if (o.oneofs)
                        d._emoji = "emoji";
                }
                if (m.isSelected != null && m.hasOwnProperty("isSelected")) {
                    d.isSelected = m.isSelected;
                    if (o.oneofs)
                        d._isSelected = "isSelected";
                }
                if (m.userJID && m.userJID.length) {
                    d.userJID = [];
                    for (var j = 0; j < m.userJID.length; ++j) {
                        d.userJID[j] = m.userJID[j];
                    }
                }
                return d;
            };

            CustomList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CustomList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASyncAction.StatusPrivacyAction.CustomList";
            };

            return CustomList;
        })();

        return StatusPrivacyAction;
    })();

    WASyncAction.MarketingMessageAction = (function() {

        function MarketingMessageAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MarketingMessageAction.prototype.name = null;
        MarketingMessageAction.prototype.message = null;
        MarketingMessageAction.prototype.type = null;
        MarketingMessageAction.prototype.createdAt = null;
        MarketingMessageAction.prototype.lastSentAt = null;
        MarketingMessageAction.prototype.isDeleted = null;
        MarketingMessageAction.prototype.mediaID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_createdAt", {
            get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_lastSentAt", {
            get: $util.oneOfGetter($oneOfFields = ["lastSentAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_isDeleted", {
            get: $util.oneOfGetter($oneOfFields = ["isDeleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageAction.prototype, "_mediaID", {
            get: $util.oneOfGetter($oneOfFields = ["mediaID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MarketingMessageAction.create = function create(properties) {
            return new MarketingMessageAction(properties);
        };

        MarketingMessageAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(10).string(m.name);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(18).string(m.message);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(24).int32(m.type);
            if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt"))
                w.uint32(32).int64(m.createdAt);
            if (m.lastSentAt != null && Object.hasOwnProperty.call(m, "lastSentAt"))
                w.uint32(40).int64(m.lastSentAt);
            if (m.isDeleted != null && Object.hasOwnProperty.call(m, "isDeleted"))
                w.uint32(48).bool(m.isDeleted);
            if (m.mediaID != null && Object.hasOwnProperty.call(m, "mediaID"))
                w.uint32(58).string(m.mediaID);
            return w;
        };

        MarketingMessageAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MarketingMessageAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.name = r.string();
                        break;
                    }
                case 2: {
                        m.message = r.string();
                        break;
                    }
                case 3: {
                        m.type = r.int32();
                        break;
                    }
                case 4: {
                        m.createdAt = r.int64();
                        break;
                    }
                case 5: {
                        m.lastSentAt = r.int64();
                        break;
                    }
                case 6: {
                        m.isDeleted = r.bool();
                        break;
                    }
                case 7: {
                        m.mediaID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MarketingMessageAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MarketingMessageAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MarketingMessageAction();
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.message != null) {
                m.message = String(d.message);
            }
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "PERSONALIZED":
            case 0:
                m.type = 0;
                break;
            }
            if (d.createdAt != null) {
                if ($util.Long)
                    (m.createdAt = $util.Long.fromValue(d.createdAt)).unsigned = false;
                else if (typeof d.createdAt === "string")
                    m.createdAt = parseInt(d.createdAt, 10);
                else if (typeof d.createdAt === "number")
                    m.createdAt = d.createdAt;
                else if (typeof d.createdAt === "object")
                    m.createdAt = new $util.LongBits(d.createdAt.low >>> 0, d.createdAt.high >>> 0).toNumber();
            }
            if (d.lastSentAt != null) {
                if ($util.Long)
                    (m.lastSentAt = $util.Long.fromValue(d.lastSentAt)).unsigned = false;
                else if (typeof d.lastSentAt === "string")
                    m.lastSentAt = parseInt(d.lastSentAt, 10);
                else if (typeof d.lastSentAt === "number")
                    m.lastSentAt = d.lastSentAt;
                else if (typeof d.lastSentAt === "object")
                    m.lastSentAt = new $util.LongBits(d.lastSentAt.low >>> 0, d.lastSentAt.high >>> 0).toNumber();
            }
            if (d.isDeleted != null) {
                m.isDeleted = Boolean(d.isDeleted);
            }
            if (d.mediaID != null) {
                m.mediaID = String(d.mediaID);
            }
            return m;
        };

        MarketingMessageAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d._name = "name";
            }
            if (m.message != null && m.hasOwnProperty("message")) {
                d.message = m.message;
                if (o.oneofs)
                    d._message = "message";
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WASyncAction.MarketingMessageAction.MarketingMessagePrototypeType[m.type] === undefined ? m.type : $root.WASyncAction.MarketingMessageAction.MarketingMessagePrototypeType[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (typeof m.createdAt === "number")
                    d.createdAt = o.longs === String ? String(m.createdAt) : m.createdAt;
                else
                    d.createdAt = o.longs === String ? $util.Long.prototype.toString.call(m.createdAt) : o.longs === Number ? new $util.LongBits(m.createdAt.low >>> 0, m.createdAt.high >>> 0).toNumber() : m.createdAt;
                if (o.oneofs)
                    d._createdAt = "createdAt";
            }
            if (m.lastSentAt != null && m.hasOwnProperty("lastSentAt")) {
                if (typeof m.lastSentAt === "number")
                    d.lastSentAt = o.longs === String ? String(m.lastSentAt) : m.lastSentAt;
                else
                    d.lastSentAt = o.longs === String ? $util.Long.prototype.toString.call(m.lastSentAt) : o.longs === Number ? new $util.LongBits(m.lastSentAt.low >>> 0, m.lastSentAt.high >>> 0).toNumber() : m.lastSentAt;
                if (o.oneofs)
                    d._lastSentAt = "lastSentAt";
            }
            if (m.isDeleted != null && m.hasOwnProperty("isDeleted")) {
                d.isDeleted = m.isDeleted;
                if (o.oneofs)
                    d._isDeleted = "isDeleted";
            }
            if (m.mediaID != null && m.hasOwnProperty("mediaID")) {
                d.mediaID = m.mediaID;
                if (o.oneofs)
                    d._mediaID = "mediaID";
            }
            return d;
        };

        MarketingMessageAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MarketingMessageAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MarketingMessageAction";
        };

        MarketingMessageAction.MarketingMessagePrototypeType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PERSONALIZED"] = 0;
            return values;
        })();

        return MarketingMessageAction;
    })();

    WASyncAction.UsernameChatStartModeAction = (function() {

        function UsernameChatStartModeAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UsernameChatStartModeAction.prototype.chatStartMode = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UsernameChatStartModeAction.prototype, "_chatStartMode", {
            get: $util.oneOfGetter($oneOfFields = ["chatStartMode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        UsernameChatStartModeAction.create = function create(properties) {
            return new UsernameChatStartModeAction(properties);
        };

        UsernameChatStartModeAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chatStartMode != null && Object.hasOwnProperty.call(m, "chatStartMode"))
                w.uint32(8).int32(m.chatStartMode);
            return w;
        };

        UsernameChatStartModeAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.UsernameChatStartModeAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.chatStartMode = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        UsernameChatStartModeAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.UsernameChatStartModeAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.UsernameChatStartModeAction();
            switch (d.chatStartMode) {
            default:
                if (typeof d.chatStartMode === "number") {
                    m.chatStartMode = d.chatStartMode;
                    break;
                }
                break;
            case "LID":
            case 1:
                m.chatStartMode = 1;
                break;
            case "PN":
            case 2:
                m.chatStartMode = 2;
                break;
            }
            return m;
        };

        UsernameChatStartModeAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.chatStartMode != null && m.hasOwnProperty("chatStartMode")) {
                d.chatStartMode = o.enums === String ? $root.WASyncAction.UsernameChatStartModeAction.ChatStartMode[m.chatStartMode] === undefined ? m.chatStartMode : $root.WASyncAction.UsernameChatStartModeAction.ChatStartMode[m.chatStartMode] : m.chatStartMode;
                if (o.oneofs)
                    d._chatStartMode = "chatStartMode";
            }
            return d;
        };

        UsernameChatStartModeAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UsernameChatStartModeAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.UsernameChatStartModeAction";
        };

        UsernameChatStartModeAction.ChatStartMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "LID"] = 1;
            values[valuesById[2] = "PN"] = 2;
            return values;
        })();

        return UsernameChatStartModeAction;
    })();

    WASyncAction.LabelEditAction = (function() {

        function LabelEditAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LabelEditAction.prototype.name = null;
        LabelEditAction.prototype.color = null;
        LabelEditAction.prototype.predefinedID = null;
        LabelEditAction.prototype.deleted = null;
        LabelEditAction.prototype.orderIndex = null;
        LabelEditAction.prototype.isActive = null;
        LabelEditAction.prototype.type = null;
        LabelEditAction.prototype.isImmutable = null;
        LabelEditAction.prototype.muteEndTimeMS = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_color", {
            get: $util.oneOfGetter($oneOfFields = ["color"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_predefinedID", {
            get: $util.oneOfGetter($oneOfFields = ["predefinedID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_deleted", {
            get: $util.oneOfGetter($oneOfFields = ["deleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_orderIndex", {
            get: $util.oneOfGetter($oneOfFields = ["orderIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_isActive", {
            get: $util.oneOfGetter($oneOfFields = ["isActive"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_isImmutable", {
            get: $util.oneOfGetter($oneOfFields = ["isImmutable"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelEditAction.prototype, "_muteEndTimeMS", {
            get: $util.oneOfGetter($oneOfFields = ["muteEndTimeMS"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LabelEditAction.create = function create(properties) {
            return new LabelEditAction(properties);
        };

        LabelEditAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(10).string(m.name);
            if (m.color != null && Object.hasOwnProperty.call(m, "color"))
                w.uint32(16).int32(m.color);
            if (m.predefinedID != null && Object.hasOwnProperty.call(m, "predefinedID"))
                w.uint32(24).int32(m.predefinedID);
            if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                w.uint32(32).bool(m.deleted);
            if (m.orderIndex != null && Object.hasOwnProperty.call(m, "orderIndex"))
                w.uint32(40).int32(m.orderIndex);
            if (m.isActive != null && Object.hasOwnProperty.call(m, "isActive"))
                w.uint32(48).bool(m.isActive);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(56).int32(m.type);
            if (m.isImmutable != null && Object.hasOwnProperty.call(m, "isImmutable"))
                w.uint32(64).bool(m.isImmutable);
            if (m.muteEndTimeMS != null && Object.hasOwnProperty.call(m, "muteEndTimeMS"))
                w.uint32(72).int64(m.muteEndTimeMS);
            return w;
        };

        LabelEditAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.LabelEditAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.name = r.string();
                        break;
                    }
                case 2: {
                        m.color = r.int32();
                        break;
                    }
                case 3: {
                        m.predefinedID = r.int32();
                        break;
                    }
                case 4: {
                        m.deleted = r.bool();
                        break;
                    }
                case 5: {
                        m.orderIndex = r.int32();
                        break;
                    }
                case 6: {
                        m.isActive = r.bool();
                        break;
                    }
                case 7: {
                        m.type = r.int32();
                        break;
                    }
                case 8: {
                        m.isImmutable = r.bool();
                        break;
                    }
                case 9: {
                        m.muteEndTimeMS = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LabelEditAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.LabelEditAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.LabelEditAction();
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.color != null) {
                m.color = d.color | 0;
            }
            if (d.predefinedID != null) {
                m.predefinedID = d.predefinedID | 0;
            }
            if (d.deleted != null) {
                m.deleted = Boolean(d.deleted);
            }
            if (d.orderIndex != null) {
                m.orderIndex = d.orderIndex | 0;
            }
            if (d.isActive != null) {
                m.isActive = Boolean(d.isActive);
            }
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.type = 0;
                break;
            case "UNREAD":
            case 1:
                m.type = 1;
                break;
            case "GROUPS":
            case 2:
                m.type = 2;
                break;
            case "FAVORITES":
            case 3:
                m.type = 3;
                break;
            case "PREDEFINED":
            case 4:
                m.type = 4;
                break;
            case "CUSTOM":
            case 5:
                m.type = 5;
                break;
            case "COMMUNITY":
            case 6:
                m.type = 6;
                break;
            case "SERVER_ASSIGNED":
            case 7:
                m.type = 7;
                break;
            case "DRAFTED":
            case 8:
                m.type = 8;
                break;
            case "AI_HANDOFF":
            case 9:
                m.type = 9;
                break;
            case "CHANNELS":
            case 10:
                m.type = 10;
                break;
            case "AI_RESPONDING":
            case 11:
                m.type = 11;
                break;
            }
            if (d.isImmutable != null) {
                m.isImmutable = Boolean(d.isImmutable);
            }
            if (d.muteEndTimeMS != null) {
                if ($util.Long)
                    (m.muteEndTimeMS = $util.Long.fromValue(d.muteEndTimeMS)).unsigned = false;
                else if (typeof d.muteEndTimeMS === "string")
                    m.muteEndTimeMS = parseInt(d.muteEndTimeMS, 10);
                else if (typeof d.muteEndTimeMS === "number")
                    m.muteEndTimeMS = d.muteEndTimeMS;
                else if (typeof d.muteEndTimeMS === "object")
                    m.muteEndTimeMS = new $util.LongBits(d.muteEndTimeMS.low >>> 0, d.muteEndTimeMS.high >>> 0).toNumber();
            }
            return m;
        };

        LabelEditAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d._name = "name";
            }
            if (m.color != null && m.hasOwnProperty("color")) {
                d.color = m.color;
                if (o.oneofs)
                    d._color = "color";
            }
            if (m.predefinedID != null && m.hasOwnProperty("predefinedID")) {
                d.predefinedID = m.predefinedID;
                if (o.oneofs)
                    d._predefinedID = "predefinedID";
            }
            if (m.deleted != null && m.hasOwnProperty("deleted")) {
                d.deleted = m.deleted;
                if (o.oneofs)
                    d._deleted = "deleted";
            }
            if (m.orderIndex != null && m.hasOwnProperty("orderIndex")) {
                d.orderIndex = m.orderIndex;
                if (o.oneofs)
                    d._orderIndex = "orderIndex";
            }
            if (m.isActive != null && m.hasOwnProperty("isActive")) {
                d.isActive = m.isActive;
                if (o.oneofs)
                    d._isActive = "isActive";
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WASyncAction.LabelEditAction.ListType[m.type] === undefined ? m.type : $root.WASyncAction.LabelEditAction.ListType[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.isImmutable != null && m.hasOwnProperty("isImmutable")) {
                d.isImmutable = m.isImmutable;
                if (o.oneofs)
                    d._isImmutable = "isImmutable";
            }
            if (m.muteEndTimeMS != null && m.hasOwnProperty("muteEndTimeMS")) {
                if (typeof m.muteEndTimeMS === "number")
                    d.muteEndTimeMS = o.longs === String ? String(m.muteEndTimeMS) : m.muteEndTimeMS;
                else
                    d.muteEndTimeMS = o.longs === String ? $util.Long.prototype.toString.call(m.muteEndTimeMS) : o.longs === Number ? new $util.LongBits(m.muteEndTimeMS.low >>> 0, m.muteEndTimeMS.high >>> 0).toNumber() : m.muteEndTimeMS;
                if (o.oneofs)
                    d._muteEndTimeMS = "muteEndTimeMS";
            }
            return d;
        };

        LabelEditAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LabelEditAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.LabelEditAction";
        };

        LabelEditAction.ListType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "UNREAD"] = 1;
            values[valuesById[2] = "GROUPS"] = 2;
            values[valuesById[3] = "FAVORITES"] = 3;
            values[valuesById[4] = "PREDEFINED"] = 4;
            values[valuesById[5] = "CUSTOM"] = 5;
            values[valuesById[6] = "COMMUNITY"] = 6;
            values[valuesById[7] = "SERVER_ASSIGNED"] = 7;
            values[valuesById[8] = "DRAFTED"] = 8;
            values[valuesById[9] = "AI_HANDOFF"] = 9;
            values[valuesById[10] = "CHANNELS"] = 10;
            values[valuesById[11] = "AI_RESPONDING"] = 11;
            return values;
        })();

        return LabelEditAction;
    })();

    WASyncAction.PatchDebugData = (function() {

        function PatchDebugData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PatchDebugData.prototype.currentLthash = null;
        PatchDebugData.prototype.newLthash = null;
        PatchDebugData.prototype.patchVersion = null;
        PatchDebugData.prototype.collectionName = null;
        PatchDebugData.prototype.firstFourBytesFromAHashOfSnapshotMACKey = null;
        PatchDebugData.prototype.newLthashSubtract = null;
        PatchDebugData.prototype.numberAdd = null;
        PatchDebugData.prototype.numberRemove = null;
        PatchDebugData.prototype.numberOverride = null;
        PatchDebugData.prototype.senderPlatform = null;
        PatchDebugData.prototype.isSenderPrimary = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_currentLthash", {
            get: $util.oneOfGetter($oneOfFields = ["currentLthash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_newLthash", {
            get: $util.oneOfGetter($oneOfFields = ["newLthash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_patchVersion", {
            get: $util.oneOfGetter($oneOfFields = ["patchVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_collectionName", {
            get: $util.oneOfGetter($oneOfFields = ["collectionName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_firstFourBytesFromAHashOfSnapshotMACKey", {
            get: $util.oneOfGetter($oneOfFields = ["firstFourBytesFromAHashOfSnapshotMACKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_newLthashSubtract", {
            get: $util.oneOfGetter($oneOfFields = ["newLthashSubtract"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_numberAdd", {
            get: $util.oneOfGetter($oneOfFields = ["numberAdd"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_numberRemove", {
            get: $util.oneOfGetter($oneOfFields = ["numberRemove"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_numberOverride", {
            get: $util.oneOfGetter($oneOfFields = ["numberOverride"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_senderPlatform", {
            get: $util.oneOfGetter($oneOfFields = ["senderPlatform"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PatchDebugData.prototype, "_isSenderPrimary", {
            get: $util.oneOfGetter($oneOfFields = ["isSenderPrimary"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PatchDebugData.create = function create(properties) {
            return new PatchDebugData(properties);
        };

        PatchDebugData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.currentLthash != null && Object.hasOwnProperty.call(m, "currentLthash"))
                w.uint32(10).bytes(m.currentLthash);
            if (m.newLthash != null && Object.hasOwnProperty.call(m, "newLthash"))
                w.uint32(18).bytes(m.newLthash);
            if (m.patchVersion != null && Object.hasOwnProperty.call(m, "patchVersion"))
                w.uint32(26).bytes(m.patchVersion);
            if (m.collectionName != null && Object.hasOwnProperty.call(m, "collectionName"))
                w.uint32(34).bytes(m.collectionName);
            if (m.firstFourBytesFromAHashOfSnapshotMACKey != null && Object.hasOwnProperty.call(m, "firstFourBytesFromAHashOfSnapshotMACKey"))
                w.uint32(42).bytes(m.firstFourBytesFromAHashOfSnapshotMACKey);
            if (m.newLthashSubtract != null && Object.hasOwnProperty.call(m, "newLthashSubtract"))
                w.uint32(50).bytes(m.newLthashSubtract);
            if (m.numberAdd != null && Object.hasOwnProperty.call(m, "numberAdd"))
                w.uint32(56).int32(m.numberAdd);
            if (m.numberRemove != null && Object.hasOwnProperty.call(m, "numberRemove"))
                w.uint32(64).int32(m.numberRemove);
            if (m.numberOverride != null && Object.hasOwnProperty.call(m, "numberOverride"))
                w.uint32(72).int32(m.numberOverride);
            if (m.senderPlatform != null && Object.hasOwnProperty.call(m, "senderPlatform"))
                w.uint32(80).int32(m.senderPlatform);
            if (m.isSenderPrimary != null && Object.hasOwnProperty.call(m, "isSenderPrimary"))
                w.uint32(88).bool(m.isSenderPrimary);
            return w;
        };

        PatchDebugData.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PatchDebugData();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.currentLthash = r.bytes();
                        break;
                    }
                case 2: {
                        m.newLthash = r.bytes();
                        break;
                    }
                case 3: {
                        m.patchVersion = r.bytes();
                        break;
                    }
                case 4: {
                        m.collectionName = r.bytes();
                        break;
                    }
                case 5: {
                        m.firstFourBytesFromAHashOfSnapshotMACKey = r.bytes();
                        break;
                    }
                case 6: {
                        m.newLthashSubtract = r.bytes();
                        break;
                    }
                case 7: {
                        m.numberAdd = r.int32();
                        break;
                    }
                case 8: {
                        m.numberRemove = r.int32();
                        break;
                    }
                case 9: {
                        m.numberOverride = r.int32();
                        break;
                    }
                case 10: {
                        m.senderPlatform = r.int32();
                        break;
                    }
                case 11: {
                        m.isSenderPrimary = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PatchDebugData.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PatchDebugData)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PatchDebugData();
            if (d.currentLthash != null) {
                if (typeof d.currentLthash === "string")
                    $util.base64.decode(d.currentLthash, m.currentLthash = $util.newBuffer($util.base64.length(d.currentLthash)), 0);
                else if (d.currentLthash.length >= 0)
                    m.currentLthash = d.currentLthash;
            }
            if (d.newLthash != null) {
                if (typeof d.newLthash === "string")
                    $util.base64.decode(d.newLthash, m.newLthash = $util.newBuffer($util.base64.length(d.newLthash)), 0);
                else if (d.newLthash.length >= 0)
                    m.newLthash = d.newLthash;
            }
            if (d.patchVersion != null) {
                if (typeof d.patchVersion === "string")
                    $util.base64.decode(d.patchVersion, m.patchVersion = $util.newBuffer($util.base64.length(d.patchVersion)), 0);
                else if (d.patchVersion.length >= 0)
                    m.patchVersion = d.patchVersion;
            }
            if (d.collectionName != null) {
                if (typeof d.collectionName === "string")
                    $util.base64.decode(d.collectionName, m.collectionName = $util.newBuffer($util.base64.length(d.collectionName)), 0);
                else if (d.collectionName.length >= 0)
                    m.collectionName = d.collectionName;
            }
            if (d.firstFourBytesFromAHashOfSnapshotMACKey != null) {
                if (typeof d.firstFourBytesFromAHashOfSnapshotMACKey === "string")
                    $util.base64.decode(d.firstFourBytesFromAHashOfSnapshotMACKey, m.firstFourBytesFromAHashOfSnapshotMACKey = $util.newBuffer($util.base64.length(d.firstFourBytesFromAHashOfSnapshotMACKey)), 0);
                else if (d.firstFourBytesFromAHashOfSnapshotMACKey.length >= 0)
                    m.firstFourBytesFromAHashOfSnapshotMACKey = d.firstFourBytesFromAHashOfSnapshotMACKey;
            }
            if (d.newLthashSubtract != null) {
                if (typeof d.newLthashSubtract === "string")
                    $util.base64.decode(d.newLthashSubtract, m.newLthashSubtract = $util.newBuffer($util.base64.length(d.newLthashSubtract)), 0);
                else if (d.newLthashSubtract.length >= 0)
                    m.newLthashSubtract = d.newLthashSubtract;
            }
            if (d.numberAdd != null) {
                m.numberAdd = d.numberAdd | 0;
            }
            if (d.numberRemove != null) {
                m.numberRemove = d.numberRemove | 0;
            }
            if (d.numberOverride != null) {
                m.numberOverride = d.numberOverride | 0;
            }
            switch (d.senderPlatform) {
            default:
                if (typeof d.senderPlatform === "number") {
                    m.senderPlatform = d.senderPlatform;
                    break;
                }
                break;
            case "ANDROID":
            case 0:
                m.senderPlatform = 0;
                break;
            case "SMBA":
            case 1:
                m.senderPlatform = 1;
                break;
            case "IPHONE":
            case 2:
                m.senderPlatform = 2;
                break;
            case "SMBI":
            case 3:
                m.senderPlatform = 3;
                break;
            case "WEB":
            case 4:
                m.senderPlatform = 4;
                break;
            case "UWP":
            case 5:
                m.senderPlatform = 5;
                break;
            case "DARWIN":
            case 6:
                m.senderPlatform = 6;
                break;
            case "IPAD":
            case 7:
                m.senderPlatform = 7;
                break;
            case "WEAROS":
            case 8:
                m.senderPlatform = 8;
                break;
            case "WASG":
            case 9:
                m.senderPlatform = 9;
                break;
            case "WEARM":
            case 10:
                m.senderPlatform = 10;
                break;
            case "CAPI":
            case 11:
                m.senderPlatform = 11;
                break;
            }
            if (d.isSenderPrimary != null) {
                m.isSenderPrimary = Boolean(d.isSenderPrimary);
            }
            return m;
        };

        PatchDebugData.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.currentLthash != null && m.hasOwnProperty("currentLthash")) {
                d.currentLthash = o.bytes === String ? $util.base64.encode(m.currentLthash, 0, m.currentLthash.length) : o.bytes === Array ? Array.prototype.slice.call(m.currentLthash) : m.currentLthash;
                if (o.oneofs)
                    d._currentLthash = "currentLthash";
            }
            if (m.newLthash != null && m.hasOwnProperty("newLthash")) {
                d.newLthash = o.bytes === String ? $util.base64.encode(m.newLthash, 0, m.newLthash.length) : o.bytes === Array ? Array.prototype.slice.call(m.newLthash) : m.newLthash;
                if (o.oneofs)
                    d._newLthash = "newLthash";
            }
            if (m.patchVersion != null && m.hasOwnProperty("patchVersion")) {
                d.patchVersion = o.bytes === String ? $util.base64.encode(m.patchVersion, 0, m.patchVersion.length) : o.bytes === Array ? Array.prototype.slice.call(m.patchVersion) : m.patchVersion;
                if (o.oneofs)
                    d._patchVersion = "patchVersion";
            }
            if (m.collectionName != null && m.hasOwnProperty("collectionName")) {
                d.collectionName = o.bytes === String ? $util.base64.encode(m.collectionName, 0, m.collectionName.length) : o.bytes === Array ? Array.prototype.slice.call(m.collectionName) : m.collectionName;
                if (o.oneofs)
                    d._collectionName = "collectionName";
            }
            if (m.firstFourBytesFromAHashOfSnapshotMACKey != null && m.hasOwnProperty("firstFourBytesFromAHashOfSnapshotMACKey")) {
                d.firstFourBytesFromAHashOfSnapshotMACKey = o.bytes === String ? $util.base64.encode(m.firstFourBytesFromAHashOfSnapshotMACKey, 0, m.firstFourBytesFromAHashOfSnapshotMACKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.firstFourBytesFromAHashOfSnapshotMACKey) : m.firstFourBytesFromAHashOfSnapshotMACKey;
                if (o.oneofs)
                    d._firstFourBytesFromAHashOfSnapshotMACKey = "firstFourBytesFromAHashOfSnapshotMACKey";
            }
            if (m.newLthashSubtract != null && m.hasOwnProperty("newLthashSubtract")) {
                d.newLthashSubtract = o.bytes === String ? $util.base64.encode(m.newLthashSubtract, 0, m.newLthashSubtract.length) : o.bytes === Array ? Array.prototype.slice.call(m.newLthashSubtract) : m.newLthashSubtract;
                if (o.oneofs)
                    d._newLthashSubtract = "newLthashSubtract";
            }
            if (m.numberAdd != null && m.hasOwnProperty("numberAdd")) {
                d.numberAdd = m.numberAdd;
                if (o.oneofs)
                    d._numberAdd = "numberAdd";
            }
            if (m.numberRemove != null && m.hasOwnProperty("numberRemove")) {
                d.numberRemove = m.numberRemove;
                if (o.oneofs)
                    d._numberRemove = "numberRemove";
            }
            if (m.numberOverride != null && m.hasOwnProperty("numberOverride")) {
                d.numberOverride = m.numberOverride;
                if (o.oneofs)
                    d._numberOverride = "numberOverride";
            }
            if (m.senderPlatform != null && m.hasOwnProperty("senderPlatform")) {
                d.senderPlatform = o.enums === String ? $root.WASyncAction.PatchDebugData.Platform[m.senderPlatform] === undefined ? m.senderPlatform : $root.WASyncAction.PatchDebugData.Platform[m.senderPlatform] : m.senderPlatform;
                if (o.oneofs)
                    d._senderPlatform = "senderPlatform";
            }
            if (m.isSenderPrimary != null && m.hasOwnProperty("isSenderPrimary")) {
                d.isSenderPrimary = m.isSenderPrimary;
                if (o.oneofs)
                    d._isSenderPrimary = "isSenderPrimary";
            }
            return d;
        };

        PatchDebugData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PatchDebugData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PatchDebugData";
        };

        PatchDebugData.Platform = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANDROID"] = 0;
            values[valuesById[1] = "SMBA"] = 1;
            values[valuesById[2] = "IPHONE"] = 2;
            values[valuesById[3] = "SMBI"] = 3;
            values[valuesById[4] = "WEB"] = 4;
            values[valuesById[5] = "UWP"] = 5;
            values[valuesById[6] = "DARWIN"] = 6;
            values[valuesById[7] = "IPAD"] = 7;
            values[valuesById[8] = "WEAROS"] = 8;
            values[valuesById[9] = "WASG"] = 9;
            values[valuesById[10] = "WEARM"] = 10;
            values[valuesById[11] = "CAPI"] = 11;
            return values;
        })();

        return PatchDebugData;
    })();

    WASyncAction.RecentEmojiWeight = (function() {

        function RecentEmojiWeight(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        RecentEmojiWeight.prototype.emoji = null;
        RecentEmojiWeight.prototype.weight = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RecentEmojiWeight.prototype, "_emoji", {
            get: $util.oneOfGetter($oneOfFields = ["emoji"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RecentEmojiWeight.prototype, "_weight", {
            get: $util.oneOfGetter($oneOfFields = ["weight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        RecentEmojiWeight.create = function create(properties) {
            return new RecentEmojiWeight(properties);
        };

        RecentEmojiWeight.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.emoji != null && Object.hasOwnProperty.call(m, "emoji"))
                w.uint32(10).string(m.emoji);
            if (m.weight != null && Object.hasOwnProperty.call(m, "weight"))
                w.uint32(21).float(m.weight);
            return w;
        };

        RecentEmojiWeight.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.RecentEmojiWeight();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.emoji = r.string();
                        break;
                    }
                case 2: {
                        m.weight = r.float();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        RecentEmojiWeight.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.RecentEmojiWeight)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.RecentEmojiWeight();
            if (d.emoji != null) {
                m.emoji = String(d.emoji);
            }
            if (d.weight != null) {
                m.weight = Number(d.weight);
            }
            return m;
        };

        RecentEmojiWeight.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.emoji != null && m.hasOwnProperty("emoji")) {
                d.emoji = m.emoji;
                if (o.oneofs)
                    d._emoji = "emoji";
            }
            if (m.weight != null && m.hasOwnProperty("weight")) {
                d.weight = o.json && !isFinite(m.weight) ? String(m.weight) : m.weight;
                if (o.oneofs)
                    d._weight = "weight";
            }
            return d;
        };

        RecentEmojiWeight.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RecentEmojiWeight.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.RecentEmojiWeight";
        };

        return RecentEmojiWeight;
    })();

    WASyncAction.SyncActionValue = (function() {

        function SyncActionValue(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncActionValue.prototype.timestamp = null;
        SyncActionValue.prototype.starAction = null;
        SyncActionValue.prototype.contactAction = null;
        SyncActionValue.prototype.muteAction = null;
        SyncActionValue.prototype.pinAction = null;
        SyncActionValue.prototype.pushNameSetting = null;
        SyncActionValue.prototype.quickReplyAction = null;
        SyncActionValue.prototype.recentEmojiWeightsAction = null;
        SyncActionValue.prototype.labelEditAction = null;
        SyncActionValue.prototype.labelAssociationAction = null;
        SyncActionValue.prototype.localeSetting = null;
        SyncActionValue.prototype.archiveChatAction = null;
        SyncActionValue.prototype.deleteMessageForMeAction = null;
        SyncActionValue.prototype.keyExpiration = null;
        SyncActionValue.prototype.markChatAsReadAction = null;
        SyncActionValue.prototype.clearChatAction = null;
        SyncActionValue.prototype.deleteChatAction = null;
        SyncActionValue.prototype.unarchiveChatsSetting = null;
        SyncActionValue.prototype.primaryFeature = null;
        SyncActionValue.prototype.androidUnsupportedActions = null;
        SyncActionValue.prototype.agentAction = null;
        SyncActionValue.prototype.subscriptionAction = null;
        SyncActionValue.prototype.userStatusMuteAction = null;
        SyncActionValue.prototype.timeFormatAction = null;
        SyncActionValue.prototype.nuxAction = null;
        SyncActionValue.prototype.primaryVersionAction = null;
        SyncActionValue.prototype.stickerAction = null;
        SyncActionValue.prototype.removeRecentStickerAction = null;
        SyncActionValue.prototype.chatAssignment = null;
        SyncActionValue.prototype.chatAssignmentOpenedStatus = null;
        SyncActionValue.prototype.pnForLidChatAction = null;
        SyncActionValue.prototype.marketingMessageAction = null;
        SyncActionValue.prototype.marketingMessageBroadcastAction = null;
        SyncActionValue.prototype.externalWebBetaAction = null;
        SyncActionValue.prototype.privacySettingRelayAllCalls = null;
        SyncActionValue.prototype.callLogAction = null;
        SyncActionValue.prototype.ugcBot = null;
        SyncActionValue.prototype.statusPrivacy = null;
        SyncActionValue.prototype.botWelcomeRequestAction = null;
        SyncActionValue.prototype.deleteIndividualCallLog = null;
        SyncActionValue.prototype.labelReorderingAction = null;
        SyncActionValue.prototype.paymentInfoAction = null;
        SyncActionValue.prototype.customPaymentMethodsAction = null;
        SyncActionValue.prototype.lockChatAction = null;
        SyncActionValue.prototype.chatLockSettings = null;
        SyncActionValue.prototype.wamoUserIdentifierAction = null;
        SyncActionValue.prototype.privacySettingDisableLinkPreviewsAction = null;
        SyncActionValue.prototype.deviceCapabilities = null;
        SyncActionValue.prototype.noteEditAction = null;
        SyncActionValue.prototype.favoritesAction = null;
        SyncActionValue.prototype.merchantPaymentPartnerAction = null;
        SyncActionValue.prototype.waffleAccountLinkStateAction = null;
        SyncActionValue.prototype.usernameChatStartMode = null;
        SyncActionValue.prototype.notificationActivitySettingAction = null;
        SyncActionValue.prototype.lidContactAction = null;
        SyncActionValue.prototype.ctwaPerCustomerDataSharingAction = null;
        SyncActionValue.prototype.paymentTosAction = null;
        SyncActionValue.prototype.privacySettingChannelsPersonalisedRecommendationAction = null;
        SyncActionValue.prototype.detectedOutcomesStatusAction = null;
        SyncActionValue.prototype.maibaAiFeaturesControlAction = null;
        SyncActionValue.prototype.businessBroadcastListAction = null;
        SyncActionValue.prototype.musicUserIDAction = null;
        SyncActionValue.prototype.statusPostOptInNotificationPreferencesAction = null;
        SyncActionValue.prototype.avatarUpdatedAction = null;
        SyncActionValue.prototype.privateProcessingSettingAction = null;
        SyncActionValue.prototype.newsletterSavedInterestsAction = null;
        SyncActionValue.prototype.aiThreadRenameAction = null;
        SyncActionValue.prototype.interactiveMessageAction = null;
        SyncActionValue.prototype.settingsSyncAction = null;
        SyncActionValue.prototype.outContactAction = null;
        SyncActionValue.prototype.nctSaltSyncAction = null;
        SyncActionValue.prototype.businessBroadcastCampaignAction = null;
        SyncActionValue.prototype.businessBroadcastInsightsAction = null;
        SyncActionValue.prototype.customerDataAction = null;
        SyncActionValue.prototype.subscriptionsSyncV2Action = null;
        SyncActionValue.prototype.threadPinAction = null;
        SyncActionValue.prototype.autoOrganizeBusinessChatSetting = null;
        SyncActionValue.prototype.bizAiSettingsNudgeAction = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_starAction", {
            get: $util.oneOfGetter($oneOfFields = ["starAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_contactAction", {
            get: $util.oneOfGetter($oneOfFields = ["contactAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_muteAction", {
            get: $util.oneOfGetter($oneOfFields = ["muteAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_pinAction", {
            get: $util.oneOfGetter($oneOfFields = ["pinAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_pushNameSetting", {
            get: $util.oneOfGetter($oneOfFields = ["pushNameSetting"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_quickReplyAction", {
            get: $util.oneOfGetter($oneOfFields = ["quickReplyAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_recentEmojiWeightsAction", {
            get: $util.oneOfGetter($oneOfFields = ["recentEmojiWeightsAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_labelEditAction", {
            get: $util.oneOfGetter($oneOfFields = ["labelEditAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_labelAssociationAction", {
            get: $util.oneOfGetter($oneOfFields = ["labelAssociationAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_localeSetting", {
            get: $util.oneOfGetter($oneOfFields = ["localeSetting"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_archiveChatAction", {
            get: $util.oneOfGetter($oneOfFields = ["archiveChatAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_deleteMessageForMeAction", {
            get: $util.oneOfGetter($oneOfFields = ["deleteMessageForMeAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_keyExpiration", {
            get: $util.oneOfGetter($oneOfFields = ["keyExpiration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_markChatAsReadAction", {
            get: $util.oneOfGetter($oneOfFields = ["markChatAsReadAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_clearChatAction", {
            get: $util.oneOfGetter($oneOfFields = ["clearChatAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_deleteChatAction", {
            get: $util.oneOfGetter($oneOfFields = ["deleteChatAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_unarchiveChatsSetting", {
            get: $util.oneOfGetter($oneOfFields = ["unarchiveChatsSetting"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_primaryFeature", {
            get: $util.oneOfGetter($oneOfFields = ["primaryFeature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_androidUnsupportedActions", {
            get: $util.oneOfGetter($oneOfFields = ["androidUnsupportedActions"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_agentAction", {
            get: $util.oneOfGetter($oneOfFields = ["agentAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_subscriptionAction", {
            get: $util.oneOfGetter($oneOfFields = ["subscriptionAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_userStatusMuteAction", {
            get: $util.oneOfGetter($oneOfFields = ["userStatusMuteAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_timeFormatAction", {
            get: $util.oneOfGetter($oneOfFields = ["timeFormatAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_nuxAction", {
            get: $util.oneOfGetter($oneOfFields = ["nuxAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_primaryVersionAction", {
            get: $util.oneOfGetter($oneOfFields = ["primaryVersionAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_stickerAction", {
            get: $util.oneOfGetter($oneOfFields = ["stickerAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_removeRecentStickerAction", {
            get: $util.oneOfGetter($oneOfFields = ["removeRecentStickerAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_chatAssignment", {
            get: $util.oneOfGetter($oneOfFields = ["chatAssignment"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_chatAssignmentOpenedStatus", {
            get: $util.oneOfGetter($oneOfFields = ["chatAssignmentOpenedStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_pnForLidChatAction", {
            get: $util.oneOfGetter($oneOfFields = ["pnForLidChatAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_marketingMessageAction", {
            get: $util.oneOfGetter($oneOfFields = ["marketingMessageAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_marketingMessageBroadcastAction", {
            get: $util.oneOfGetter($oneOfFields = ["marketingMessageBroadcastAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_externalWebBetaAction", {
            get: $util.oneOfGetter($oneOfFields = ["externalWebBetaAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_privacySettingRelayAllCalls", {
            get: $util.oneOfGetter($oneOfFields = ["privacySettingRelayAllCalls"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_callLogAction", {
            get: $util.oneOfGetter($oneOfFields = ["callLogAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_ugcBot", {
            get: $util.oneOfGetter($oneOfFields = ["ugcBot"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_statusPrivacy", {
            get: $util.oneOfGetter($oneOfFields = ["statusPrivacy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_botWelcomeRequestAction", {
            get: $util.oneOfGetter($oneOfFields = ["botWelcomeRequestAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_deleteIndividualCallLog", {
            get: $util.oneOfGetter($oneOfFields = ["deleteIndividualCallLog"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_labelReorderingAction", {
            get: $util.oneOfGetter($oneOfFields = ["labelReorderingAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_paymentInfoAction", {
            get: $util.oneOfGetter($oneOfFields = ["paymentInfoAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_customPaymentMethodsAction", {
            get: $util.oneOfGetter($oneOfFields = ["customPaymentMethodsAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_lockChatAction", {
            get: $util.oneOfGetter($oneOfFields = ["lockChatAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_chatLockSettings", {
            get: $util.oneOfGetter($oneOfFields = ["chatLockSettings"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_wamoUserIdentifierAction", {
            get: $util.oneOfGetter($oneOfFields = ["wamoUserIdentifierAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_privacySettingDisableLinkPreviewsAction", {
            get: $util.oneOfGetter($oneOfFields = ["privacySettingDisableLinkPreviewsAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_deviceCapabilities", {
            get: $util.oneOfGetter($oneOfFields = ["deviceCapabilities"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_noteEditAction", {
            get: $util.oneOfGetter($oneOfFields = ["noteEditAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_favoritesAction", {
            get: $util.oneOfGetter($oneOfFields = ["favoritesAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_merchantPaymentPartnerAction", {
            get: $util.oneOfGetter($oneOfFields = ["merchantPaymentPartnerAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_waffleAccountLinkStateAction", {
            get: $util.oneOfGetter($oneOfFields = ["waffleAccountLinkStateAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_usernameChatStartMode", {
            get: $util.oneOfGetter($oneOfFields = ["usernameChatStartMode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_notificationActivitySettingAction", {
            get: $util.oneOfGetter($oneOfFields = ["notificationActivitySettingAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_lidContactAction", {
            get: $util.oneOfGetter($oneOfFields = ["lidContactAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_ctwaPerCustomerDataSharingAction", {
            get: $util.oneOfGetter($oneOfFields = ["ctwaPerCustomerDataSharingAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_paymentTosAction", {
            get: $util.oneOfGetter($oneOfFields = ["paymentTosAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_privacySettingChannelsPersonalisedRecommendationAction", {
            get: $util.oneOfGetter($oneOfFields = ["privacySettingChannelsPersonalisedRecommendationAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_detectedOutcomesStatusAction", {
            get: $util.oneOfGetter($oneOfFields = ["detectedOutcomesStatusAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_maibaAiFeaturesControlAction", {
            get: $util.oneOfGetter($oneOfFields = ["maibaAiFeaturesControlAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_businessBroadcastListAction", {
            get: $util.oneOfGetter($oneOfFields = ["businessBroadcastListAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_musicUserIDAction", {
            get: $util.oneOfGetter($oneOfFields = ["musicUserIDAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_statusPostOptInNotificationPreferencesAction", {
            get: $util.oneOfGetter($oneOfFields = ["statusPostOptInNotificationPreferencesAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_avatarUpdatedAction", {
            get: $util.oneOfGetter($oneOfFields = ["avatarUpdatedAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_privateProcessingSettingAction", {
            get: $util.oneOfGetter($oneOfFields = ["privateProcessingSettingAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_newsletterSavedInterestsAction", {
            get: $util.oneOfGetter($oneOfFields = ["newsletterSavedInterestsAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_aiThreadRenameAction", {
            get: $util.oneOfGetter($oneOfFields = ["aiThreadRenameAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_interactiveMessageAction", {
            get: $util.oneOfGetter($oneOfFields = ["interactiveMessageAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_settingsSyncAction", {
            get: $util.oneOfGetter($oneOfFields = ["settingsSyncAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_outContactAction", {
            get: $util.oneOfGetter($oneOfFields = ["outContactAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_nctSaltSyncAction", {
            get: $util.oneOfGetter($oneOfFields = ["nctSaltSyncAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_businessBroadcastCampaignAction", {
            get: $util.oneOfGetter($oneOfFields = ["businessBroadcastCampaignAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_businessBroadcastInsightsAction", {
            get: $util.oneOfGetter($oneOfFields = ["businessBroadcastInsightsAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_customerDataAction", {
            get: $util.oneOfGetter($oneOfFields = ["customerDataAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_subscriptionsSyncV2Action", {
            get: $util.oneOfGetter($oneOfFields = ["subscriptionsSyncV2Action"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_threadPinAction", {
            get: $util.oneOfGetter($oneOfFields = ["threadPinAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_autoOrganizeBusinessChatSetting", {
            get: $util.oneOfGetter($oneOfFields = ["autoOrganizeBusinessChatSetting"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionValue.prototype, "_bizAiSettingsNudgeAction", {
            get: $util.oneOfGetter($oneOfFields = ["bizAiSettingsNudgeAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncActionValue.create = function create(properties) {
            return new SyncActionValue(properties);
        };

        SyncActionValue.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(8).int64(m.timestamp);
            if (m.starAction != null && Object.hasOwnProperty.call(m, "starAction"))
                $root.WASyncAction.StarAction.encode(m.starAction, w.uint32(18).fork()).ldelim();
            if (m.contactAction != null && Object.hasOwnProperty.call(m, "contactAction"))
                $root.WASyncAction.ContactAction.encode(m.contactAction, w.uint32(26).fork()).ldelim();
            if (m.muteAction != null && Object.hasOwnProperty.call(m, "muteAction"))
                $root.WASyncAction.MuteAction.encode(m.muteAction, w.uint32(34).fork()).ldelim();
            if (m.pinAction != null && Object.hasOwnProperty.call(m, "pinAction"))
                $root.WASyncAction.PinAction.encode(m.pinAction, w.uint32(42).fork()).ldelim();
            if (m.pushNameSetting != null && Object.hasOwnProperty.call(m, "pushNameSetting"))
                $root.WASyncAction.PushNameSetting.encode(m.pushNameSetting, w.uint32(58).fork()).ldelim();
            if (m.quickReplyAction != null && Object.hasOwnProperty.call(m, "quickReplyAction"))
                $root.WASyncAction.QuickReplyAction.encode(m.quickReplyAction, w.uint32(66).fork()).ldelim();
            if (m.recentEmojiWeightsAction != null && Object.hasOwnProperty.call(m, "recentEmojiWeightsAction"))
                $root.WASyncAction.RecentEmojiWeightsAction.encode(m.recentEmojiWeightsAction, w.uint32(90).fork()).ldelim();
            if (m.labelEditAction != null && Object.hasOwnProperty.call(m, "labelEditAction"))
                $root.WASyncAction.LabelEditAction.encode(m.labelEditAction, w.uint32(114).fork()).ldelim();
            if (m.labelAssociationAction != null && Object.hasOwnProperty.call(m, "labelAssociationAction"))
                $root.WASyncAction.LabelAssociationAction.encode(m.labelAssociationAction, w.uint32(122).fork()).ldelim();
            if (m.localeSetting != null && Object.hasOwnProperty.call(m, "localeSetting"))
                $root.WASyncAction.LocaleSetting.encode(m.localeSetting, w.uint32(130).fork()).ldelim();
            if (m.archiveChatAction != null && Object.hasOwnProperty.call(m, "archiveChatAction"))
                $root.WASyncAction.ArchiveChatAction.encode(m.archiveChatAction, w.uint32(138).fork()).ldelim();
            if (m.deleteMessageForMeAction != null && Object.hasOwnProperty.call(m, "deleteMessageForMeAction"))
                $root.WASyncAction.DeleteMessageForMeAction.encode(m.deleteMessageForMeAction, w.uint32(146).fork()).ldelim();
            if (m.keyExpiration != null && Object.hasOwnProperty.call(m, "keyExpiration"))
                $root.WASyncAction.KeyExpiration.encode(m.keyExpiration, w.uint32(154).fork()).ldelim();
            if (m.markChatAsReadAction != null && Object.hasOwnProperty.call(m, "markChatAsReadAction"))
                $root.WASyncAction.MarkChatAsReadAction.encode(m.markChatAsReadAction, w.uint32(162).fork()).ldelim();
            if (m.clearChatAction != null && Object.hasOwnProperty.call(m, "clearChatAction"))
                $root.WASyncAction.ClearChatAction.encode(m.clearChatAction, w.uint32(170).fork()).ldelim();
            if (m.deleteChatAction != null && Object.hasOwnProperty.call(m, "deleteChatAction"))
                $root.WASyncAction.DeleteChatAction.encode(m.deleteChatAction, w.uint32(178).fork()).ldelim();
            if (m.unarchiveChatsSetting != null && Object.hasOwnProperty.call(m, "unarchiveChatsSetting"))
                $root.WASyncAction.UnarchiveChatsSetting.encode(m.unarchiveChatsSetting, w.uint32(186).fork()).ldelim();
            if (m.primaryFeature != null && Object.hasOwnProperty.call(m, "primaryFeature"))
                $root.WASyncAction.PrimaryFeature.encode(m.primaryFeature, w.uint32(194).fork()).ldelim();
            if (m.androidUnsupportedActions != null && Object.hasOwnProperty.call(m, "androidUnsupportedActions"))
                $root.WASyncAction.AndroidUnsupportedActions.encode(m.androidUnsupportedActions, w.uint32(210).fork()).ldelim();
            if (m.agentAction != null && Object.hasOwnProperty.call(m, "agentAction"))
                $root.WASyncAction.AgentAction.encode(m.agentAction, w.uint32(218).fork()).ldelim();
            if (m.subscriptionAction != null && Object.hasOwnProperty.call(m, "subscriptionAction"))
                $root.WASyncAction.SubscriptionAction.encode(m.subscriptionAction, w.uint32(226).fork()).ldelim();
            if (m.userStatusMuteAction != null && Object.hasOwnProperty.call(m, "userStatusMuteAction"))
                $root.WASyncAction.UserStatusMuteAction.encode(m.userStatusMuteAction, w.uint32(234).fork()).ldelim();
            if (m.timeFormatAction != null && Object.hasOwnProperty.call(m, "timeFormatAction"))
                $root.WASyncAction.TimeFormatAction.encode(m.timeFormatAction, w.uint32(242).fork()).ldelim();
            if (m.nuxAction != null && Object.hasOwnProperty.call(m, "nuxAction"))
                $root.WASyncAction.NuxAction.encode(m.nuxAction, w.uint32(250).fork()).ldelim();
            if (m.primaryVersionAction != null && Object.hasOwnProperty.call(m, "primaryVersionAction"))
                $root.WASyncAction.PrimaryVersionAction.encode(m.primaryVersionAction, w.uint32(258).fork()).ldelim();
            if (m.stickerAction != null && Object.hasOwnProperty.call(m, "stickerAction"))
                $root.WASyncAction.StickerAction.encode(m.stickerAction, w.uint32(266).fork()).ldelim();
            if (m.removeRecentStickerAction != null && Object.hasOwnProperty.call(m, "removeRecentStickerAction"))
                $root.WASyncAction.RemoveRecentStickerAction.encode(m.removeRecentStickerAction, w.uint32(274).fork()).ldelim();
            if (m.chatAssignment != null && Object.hasOwnProperty.call(m, "chatAssignment"))
                $root.WASyncAction.ChatAssignmentAction.encode(m.chatAssignment, w.uint32(282).fork()).ldelim();
            if (m.chatAssignmentOpenedStatus != null && Object.hasOwnProperty.call(m, "chatAssignmentOpenedStatus"))
                $root.WASyncAction.ChatAssignmentOpenedStatusAction.encode(m.chatAssignmentOpenedStatus, w.uint32(290).fork()).ldelim();
            if (m.pnForLidChatAction != null && Object.hasOwnProperty.call(m, "pnForLidChatAction"))
                $root.WASyncAction.PnForLidChatAction.encode(m.pnForLidChatAction, w.uint32(298).fork()).ldelim();
            if (m.marketingMessageAction != null && Object.hasOwnProperty.call(m, "marketingMessageAction"))
                $root.WASyncAction.MarketingMessageAction.encode(m.marketingMessageAction, w.uint32(306).fork()).ldelim();
            if (m.marketingMessageBroadcastAction != null && Object.hasOwnProperty.call(m, "marketingMessageBroadcastAction"))
                $root.WASyncAction.MarketingMessageBroadcastAction.encode(m.marketingMessageBroadcastAction, w.uint32(314).fork()).ldelim();
            if (m.externalWebBetaAction != null && Object.hasOwnProperty.call(m, "externalWebBetaAction"))
                $root.WASyncAction.ExternalWebBetaAction.encode(m.externalWebBetaAction, w.uint32(322).fork()).ldelim();
            if (m.privacySettingRelayAllCalls != null && Object.hasOwnProperty.call(m, "privacySettingRelayAllCalls"))
                $root.WASyncAction.PrivacySettingRelayAllCalls.encode(m.privacySettingRelayAllCalls, w.uint32(330).fork()).ldelim();
            if (m.callLogAction != null && Object.hasOwnProperty.call(m, "callLogAction"))
                $root.WASyncAction.CallLogAction.encode(m.callLogAction, w.uint32(338).fork()).ldelim();
            if (m.ugcBot != null && Object.hasOwnProperty.call(m, "ugcBot"))
                $root.WASyncAction.UGCBot.encode(m.ugcBot, w.uint32(346).fork()).ldelim();
            if (m.statusPrivacy != null && Object.hasOwnProperty.call(m, "statusPrivacy"))
                $root.WASyncAction.StatusPrivacyAction.encode(m.statusPrivacy, w.uint32(354).fork()).ldelim();
            if (m.botWelcomeRequestAction != null && Object.hasOwnProperty.call(m, "botWelcomeRequestAction"))
                $root.WASyncAction.BotWelcomeRequestAction.encode(m.botWelcomeRequestAction, w.uint32(362).fork()).ldelim();
            if (m.deleteIndividualCallLog != null && Object.hasOwnProperty.call(m, "deleteIndividualCallLog"))
                $root.WASyncAction.DeleteIndividualCallLogAction.encode(m.deleteIndividualCallLog, w.uint32(370).fork()).ldelim();
            if (m.labelReorderingAction != null && Object.hasOwnProperty.call(m, "labelReorderingAction"))
                $root.WASyncAction.LabelReorderingAction.encode(m.labelReorderingAction, w.uint32(378).fork()).ldelim();
            if (m.paymentInfoAction != null && Object.hasOwnProperty.call(m, "paymentInfoAction"))
                $root.WASyncAction.PaymentInfoAction.encode(m.paymentInfoAction, w.uint32(386).fork()).ldelim();
            if (m.customPaymentMethodsAction != null && Object.hasOwnProperty.call(m, "customPaymentMethodsAction"))
                $root.WASyncAction.CustomPaymentMethodsAction.encode(m.customPaymentMethodsAction, w.uint32(394).fork()).ldelim();
            if (m.lockChatAction != null && Object.hasOwnProperty.call(m, "lockChatAction"))
                $root.WASyncAction.LockChatAction.encode(m.lockChatAction, w.uint32(402).fork()).ldelim();
            if (m.chatLockSettings != null && Object.hasOwnProperty.call(m, "chatLockSettings"))
                WAChatLockSettings.ChatLockSettings.encode(m.chatLockSettings, w.uint32(410).fork()).ldelim();
            if (m.wamoUserIdentifierAction != null && Object.hasOwnProperty.call(m, "wamoUserIdentifierAction"))
                $root.WASyncAction.WamoUserIdentifierAction.encode(m.wamoUserIdentifierAction, w.uint32(418).fork()).ldelim();
            if (m.privacySettingDisableLinkPreviewsAction != null && Object.hasOwnProperty.call(m, "privacySettingDisableLinkPreviewsAction"))
                $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction.encode(m.privacySettingDisableLinkPreviewsAction, w.uint32(426).fork()).ldelim();
            if (m.deviceCapabilities != null && Object.hasOwnProperty.call(m, "deviceCapabilities"))
                WADeviceCapabilities.DeviceCapabilities.encode(m.deviceCapabilities, w.uint32(434).fork()).ldelim();
            if (m.noteEditAction != null && Object.hasOwnProperty.call(m, "noteEditAction"))
                $root.WASyncAction.NoteEditAction.encode(m.noteEditAction, w.uint32(442).fork()).ldelim();
            if (m.favoritesAction != null && Object.hasOwnProperty.call(m, "favoritesAction"))
                $root.WASyncAction.FavoritesAction.encode(m.favoritesAction, w.uint32(450).fork()).ldelim();
            if (m.merchantPaymentPartnerAction != null && Object.hasOwnProperty.call(m, "merchantPaymentPartnerAction"))
                $root.WASyncAction.MerchantPaymentPartnerAction.encode(m.merchantPaymentPartnerAction, w.uint32(458).fork()).ldelim();
            if (m.waffleAccountLinkStateAction != null && Object.hasOwnProperty.call(m, "waffleAccountLinkStateAction"))
                $root.WASyncAction.WaffleAccountLinkStateAction.encode(m.waffleAccountLinkStateAction, w.uint32(466).fork()).ldelim();
            if (m.usernameChatStartMode != null && Object.hasOwnProperty.call(m, "usernameChatStartMode"))
                $root.WASyncAction.UsernameChatStartModeAction.encode(m.usernameChatStartMode, w.uint32(474).fork()).ldelim();
            if (m.notificationActivitySettingAction != null && Object.hasOwnProperty.call(m, "notificationActivitySettingAction"))
                $root.WASyncAction.NotificationActivitySettingAction.encode(m.notificationActivitySettingAction, w.uint32(482).fork()).ldelim();
            if (m.lidContactAction != null && Object.hasOwnProperty.call(m, "lidContactAction"))
                $root.WASyncAction.LidContactAction.encode(m.lidContactAction, w.uint32(490).fork()).ldelim();
            if (m.ctwaPerCustomerDataSharingAction != null && Object.hasOwnProperty.call(m, "ctwaPerCustomerDataSharingAction"))
                $root.WASyncAction.CtwaPerCustomerDataSharingAction.encode(m.ctwaPerCustomerDataSharingAction, w.uint32(498).fork()).ldelim();
            if (m.paymentTosAction != null && Object.hasOwnProperty.call(m, "paymentTosAction"))
                $root.WASyncAction.PaymentTosAction.encode(m.paymentTosAction, w.uint32(506).fork()).ldelim();
            if (m.privacySettingChannelsPersonalisedRecommendationAction != null && Object.hasOwnProperty.call(m, "privacySettingChannelsPersonalisedRecommendationAction"))
                $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction.encode(m.privacySettingChannelsPersonalisedRecommendationAction, w.uint32(514).fork()).ldelim();
            if (m.detectedOutcomesStatusAction != null && Object.hasOwnProperty.call(m, "detectedOutcomesStatusAction"))
                $root.WASyncAction.DetectedOutcomesStatusAction.encode(m.detectedOutcomesStatusAction, w.uint32(530).fork()).ldelim();
            if (m.maibaAiFeaturesControlAction != null && Object.hasOwnProperty.call(m, "maibaAiFeaturesControlAction"))
                $root.WASyncAction.MaibaAIFeaturesControlAction.encode(m.maibaAiFeaturesControlAction, w.uint32(546).fork()).ldelim();
            if (m.businessBroadcastListAction != null && Object.hasOwnProperty.call(m, "businessBroadcastListAction"))
                $root.WASyncAction.BusinessBroadcastListAction.encode(m.businessBroadcastListAction, w.uint32(554).fork()).ldelim();
            if (m.musicUserIDAction != null && Object.hasOwnProperty.call(m, "musicUserIDAction"))
                $root.WASyncAction.MusicUserIdAction.encode(m.musicUserIDAction, w.uint32(562).fork()).ldelim();
            if (m.statusPostOptInNotificationPreferencesAction != null && Object.hasOwnProperty.call(m, "statusPostOptInNotificationPreferencesAction"))
                $root.WASyncAction.StatusPostOptInNotificationPreferencesAction.encode(m.statusPostOptInNotificationPreferencesAction, w.uint32(570).fork()).ldelim();
            if (m.avatarUpdatedAction != null && Object.hasOwnProperty.call(m, "avatarUpdatedAction"))
                $root.WASyncAction.AvatarUpdatedAction.encode(m.avatarUpdatedAction, w.uint32(578).fork()).ldelim();
            if (m.privateProcessingSettingAction != null && Object.hasOwnProperty.call(m, "privateProcessingSettingAction"))
                $root.WASyncAction.PrivateProcessingSettingAction.encode(m.privateProcessingSettingAction, w.uint32(594).fork()).ldelim();
            if (m.newsletterSavedInterestsAction != null && Object.hasOwnProperty.call(m, "newsletterSavedInterestsAction"))
                $root.WASyncAction.NewsletterSavedInterestsAction.encode(m.newsletterSavedInterestsAction, w.uint32(602).fork()).ldelim();
            if (m.aiThreadRenameAction != null && Object.hasOwnProperty.call(m, "aiThreadRenameAction"))
                $root.WASyncAction.AiThreadRenameAction.encode(m.aiThreadRenameAction, w.uint32(610).fork()).ldelim();
            if (m.interactiveMessageAction != null && Object.hasOwnProperty.call(m, "interactiveMessageAction"))
                $root.WASyncAction.InteractiveMessageAction.encode(m.interactiveMessageAction, w.uint32(618).fork()).ldelim();
            if (m.settingsSyncAction != null && Object.hasOwnProperty.call(m, "settingsSyncAction"))
                $root.WASyncAction.SettingsSyncAction.encode(m.settingsSyncAction, w.uint32(626).fork()).ldelim();
            if (m.outContactAction != null && Object.hasOwnProperty.call(m, "outContactAction"))
                $root.WASyncAction.OutContactAction.encode(m.outContactAction, w.uint32(634).fork()).ldelim();
            if (m.nctSaltSyncAction != null && Object.hasOwnProperty.call(m, "nctSaltSyncAction"))
                $root.WASyncAction.NctSaltSyncAction.encode(m.nctSaltSyncAction, w.uint32(642).fork()).ldelim();
            if (m.businessBroadcastCampaignAction != null && Object.hasOwnProperty.call(m, "businessBroadcastCampaignAction"))
                $root.WASyncAction.BusinessBroadcastCampaignAction.encode(m.businessBroadcastCampaignAction, w.uint32(650).fork()).ldelim();
            if (m.businessBroadcastInsightsAction != null && Object.hasOwnProperty.call(m, "businessBroadcastInsightsAction"))
                $root.WASyncAction.BusinessBroadcastInsightsAction.encode(m.businessBroadcastInsightsAction, w.uint32(658).fork()).ldelim();
            if (m.customerDataAction != null && Object.hasOwnProperty.call(m, "customerDataAction"))
                $root.WASyncAction.CustomerDataAction.encode(m.customerDataAction, w.uint32(666).fork()).ldelim();
            if (m.subscriptionsSyncV2Action != null && Object.hasOwnProperty.call(m, "subscriptionsSyncV2Action"))
                $root.WASyncAction.SubscriptionsSyncV2Action.encode(m.subscriptionsSyncV2Action, w.uint32(674).fork()).ldelim();
            if (m.threadPinAction != null && Object.hasOwnProperty.call(m, "threadPinAction"))
                $root.WASyncAction.ThreadPinAction.encode(m.threadPinAction, w.uint32(682).fork()).ldelim();
            if (m.autoOrganizeBusinessChatSetting != null && Object.hasOwnProperty.call(m, "autoOrganizeBusinessChatSetting"))
                $root.WASyncAction.AutoOrganizeBusinessChatSetting.encode(m.autoOrganizeBusinessChatSetting, w.uint32(690).fork()).ldelim();
            if (m.bizAiSettingsNudgeAction != null && Object.hasOwnProperty.call(m, "bizAiSettingsNudgeAction"))
                $root.WASyncAction.BizAISettingsNudgeAction.encode(m.bizAiSettingsNudgeAction, w.uint32(698).fork()).ldelim();
            return w;
        };

        SyncActionValue.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SyncActionValue();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.timestamp = r.int64();
                        break;
                    }
                case 2: {
                        m.starAction = $root.WASyncAction.StarAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.contactAction = $root.WASyncAction.ContactAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.muteAction = $root.WASyncAction.MuteAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 5: {
                        m.pinAction = $root.WASyncAction.PinAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.pushNameSetting = $root.WASyncAction.PushNameSetting.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.quickReplyAction = $root.WASyncAction.QuickReplyAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 11: {
                        m.recentEmojiWeightsAction = $root.WASyncAction.RecentEmojiWeightsAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 14: {
                        m.labelEditAction = $root.WASyncAction.LabelEditAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 15: {
                        m.labelAssociationAction = $root.WASyncAction.LabelAssociationAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 16: {
                        m.localeSetting = $root.WASyncAction.LocaleSetting.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 17: {
                        m.archiveChatAction = $root.WASyncAction.ArchiveChatAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 18: {
                        m.deleteMessageForMeAction = $root.WASyncAction.DeleteMessageForMeAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 19: {
                        m.keyExpiration = $root.WASyncAction.KeyExpiration.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 20: {
                        m.markChatAsReadAction = $root.WASyncAction.MarkChatAsReadAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 21: {
                        m.clearChatAction = $root.WASyncAction.ClearChatAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 22: {
                        m.deleteChatAction = $root.WASyncAction.DeleteChatAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 23: {
                        m.unarchiveChatsSetting = $root.WASyncAction.UnarchiveChatsSetting.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 24: {
                        m.primaryFeature = $root.WASyncAction.PrimaryFeature.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 26: {
                        m.androidUnsupportedActions = $root.WASyncAction.AndroidUnsupportedActions.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 27: {
                        m.agentAction = $root.WASyncAction.AgentAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 28: {
                        m.subscriptionAction = $root.WASyncAction.SubscriptionAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 29: {
                        m.userStatusMuteAction = $root.WASyncAction.UserStatusMuteAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 30: {
                        m.timeFormatAction = $root.WASyncAction.TimeFormatAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 31: {
                        m.nuxAction = $root.WASyncAction.NuxAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 32: {
                        m.primaryVersionAction = $root.WASyncAction.PrimaryVersionAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 33: {
                        m.stickerAction = $root.WASyncAction.StickerAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 34: {
                        m.removeRecentStickerAction = $root.WASyncAction.RemoveRecentStickerAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 35: {
                        m.chatAssignment = $root.WASyncAction.ChatAssignmentAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 36: {
                        m.chatAssignmentOpenedStatus = $root.WASyncAction.ChatAssignmentOpenedStatusAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 37: {
                        m.pnForLidChatAction = $root.WASyncAction.PnForLidChatAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 38: {
                        m.marketingMessageAction = $root.WASyncAction.MarketingMessageAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 39: {
                        m.marketingMessageBroadcastAction = $root.WASyncAction.MarketingMessageBroadcastAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 40: {
                        m.externalWebBetaAction = $root.WASyncAction.ExternalWebBetaAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 41: {
                        m.privacySettingRelayAllCalls = $root.WASyncAction.PrivacySettingRelayAllCalls.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 42: {
                        m.callLogAction = $root.WASyncAction.CallLogAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 43: {
                        m.ugcBot = $root.WASyncAction.UGCBot.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 44: {
                        m.statusPrivacy = $root.WASyncAction.StatusPrivacyAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 45: {
                        m.botWelcomeRequestAction = $root.WASyncAction.BotWelcomeRequestAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 46: {
                        m.deleteIndividualCallLog = $root.WASyncAction.DeleteIndividualCallLogAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 47: {
                        m.labelReorderingAction = $root.WASyncAction.LabelReorderingAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 48: {
                        m.paymentInfoAction = $root.WASyncAction.PaymentInfoAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 49: {
                        m.customPaymentMethodsAction = $root.WASyncAction.CustomPaymentMethodsAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 50: {
                        m.lockChatAction = $root.WASyncAction.LockChatAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 51: {
                        m.chatLockSettings = WAChatLockSettings.ChatLockSettings.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 52: {
                        m.wamoUserIdentifierAction = $root.WASyncAction.WamoUserIdentifierAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 53: {
                        m.privacySettingDisableLinkPreviewsAction = $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 54: {
                        m.deviceCapabilities = WADeviceCapabilities.DeviceCapabilities.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 55: {
                        m.noteEditAction = $root.WASyncAction.NoteEditAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 56: {
                        m.favoritesAction = $root.WASyncAction.FavoritesAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 57: {
                        m.merchantPaymentPartnerAction = $root.WASyncAction.MerchantPaymentPartnerAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 58: {
                        m.waffleAccountLinkStateAction = $root.WASyncAction.WaffleAccountLinkStateAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 59: {
                        m.usernameChatStartMode = $root.WASyncAction.UsernameChatStartModeAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 60: {
                        m.notificationActivitySettingAction = $root.WASyncAction.NotificationActivitySettingAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 61: {
                        m.lidContactAction = $root.WASyncAction.LidContactAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 62: {
                        m.ctwaPerCustomerDataSharingAction = $root.WASyncAction.CtwaPerCustomerDataSharingAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 63: {
                        m.paymentTosAction = $root.WASyncAction.PaymentTosAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 64: {
                        m.privacySettingChannelsPersonalisedRecommendationAction = $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 66: {
                        m.detectedOutcomesStatusAction = $root.WASyncAction.DetectedOutcomesStatusAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 68: {
                        m.maibaAiFeaturesControlAction = $root.WASyncAction.MaibaAIFeaturesControlAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 69: {
                        m.businessBroadcastListAction = $root.WASyncAction.BusinessBroadcastListAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 70: {
                        m.musicUserIDAction = $root.WASyncAction.MusicUserIdAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 71: {
                        m.statusPostOptInNotificationPreferencesAction = $root.WASyncAction.StatusPostOptInNotificationPreferencesAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 72: {
                        m.avatarUpdatedAction = $root.WASyncAction.AvatarUpdatedAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 74: {
                        m.privateProcessingSettingAction = $root.WASyncAction.PrivateProcessingSettingAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 75: {
                        m.newsletterSavedInterestsAction = $root.WASyncAction.NewsletterSavedInterestsAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 76: {
                        m.aiThreadRenameAction = $root.WASyncAction.AiThreadRenameAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 77: {
                        m.interactiveMessageAction = $root.WASyncAction.InteractiveMessageAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 78: {
                        m.settingsSyncAction = $root.WASyncAction.SettingsSyncAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 79: {
                        m.outContactAction = $root.WASyncAction.OutContactAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 80: {
                        m.nctSaltSyncAction = $root.WASyncAction.NctSaltSyncAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 81: {
                        m.businessBroadcastCampaignAction = $root.WASyncAction.BusinessBroadcastCampaignAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 82: {
                        m.businessBroadcastInsightsAction = $root.WASyncAction.BusinessBroadcastInsightsAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 83: {
                        m.customerDataAction = $root.WASyncAction.CustomerDataAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 84: {
                        m.subscriptionsSyncV2Action = $root.WASyncAction.SubscriptionsSyncV2Action.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 85: {
                        m.threadPinAction = $root.WASyncAction.ThreadPinAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 86: {
                        m.autoOrganizeBusinessChatSetting = $root.WASyncAction.AutoOrganizeBusinessChatSetting.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 87: {
                        m.bizAiSettingsNudgeAction = $root.WASyncAction.BizAISettingsNudgeAction.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncActionValue.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SyncActionValue)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SyncActionValue();
            if (d.timestamp != null) {
                if ($util.Long)
                    (m.timestamp = $util.Long.fromValue(d.timestamp)).unsigned = false;
                else if (typeof d.timestamp === "string")
                    m.timestamp = parseInt(d.timestamp, 10);
                else if (typeof d.timestamp === "number")
                    m.timestamp = d.timestamp;
                else if (typeof d.timestamp === "object")
                    m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber();
            }
            if (d.starAction != null) {
                if (typeof d.starAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.starAction: object expected");
                m.starAction = $root.WASyncAction.StarAction.fromObject(d.starAction, n + 1);
            }
            if (d.contactAction != null) {
                if (typeof d.contactAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.contactAction: object expected");
                m.contactAction = $root.WASyncAction.ContactAction.fromObject(d.contactAction, n + 1);
            }
            if (d.muteAction != null) {
                if (typeof d.muteAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.muteAction: object expected");
                m.muteAction = $root.WASyncAction.MuteAction.fromObject(d.muteAction, n + 1);
            }
            if (d.pinAction != null) {
                if (typeof d.pinAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.pinAction: object expected");
                m.pinAction = $root.WASyncAction.PinAction.fromObject(d.pinAction, n + 1);
            }
            if (d.pushNameSetting != null) {
                if (typeof d.pushNameSetting !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.pushNameSetting: object expected");
                m.pushNameSetting = $root.WASyncAction.PushNameSetting.fromObject(d.pushNameSetting, n + 1);
            }
            if (d.quickReplyAction != null) {
                if (typeof d.quickReplyAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.quickReplyAction: object expected");
                m.quickReplyAction = $root.WASyncAction.QuickReplyAction.fromObject(d.quickReplyAction, n + 1);
            }
            if (d.recentEmojiWeightsAction != null) {
                if (typeof d.recentEmojiWeightsAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.recentEmojiWeightsAction: object expected");
                m.recentEmojiWeightsAction = $root.WASyncAction.RecentEmojiWeightsAction.fromObject(d.recentEmojiWeightsAction, n + 1);
            }
            if (d.labelEditAction != null) {
                if (typeof d.labelEditAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.labelEditAction: object expected");
                m.labelEditAction = $root.WASyncAction.LabelEditAction.fromObject(d.labelEditAction, n + 1);
            }
            if (d.labelAssociationAction != null) {
                if (typeof d.labelAssociationAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.labelAssociationAction: object expected");
                m.labelAssociationAction = $root.WASyncAction.LabelAssociationAction.fromObject(d.labelAssociationAction, n + 1);
            }
            if (d.localeSetting != null) {
                if (typeof d.localeSetting !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.localeSetting: object expected");
                m.localeSetting = $root.WASyncAction.LocaleSetting.fromObject(d.localeSetting, n + 1);
            }
            if (d.archiveChatAction != null) {
                if (typeof d.archiveChatAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.archiveChatAction: object expected");
                m.archiveChatAction = $root.WASyncAction.ArchiveChatAction.fromObject(d.archiveChatAction, n + 1);
            }
            if (d.deleteMessageForMeAction != null) {
                if (typeof d.deleteMessageForMeAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.deleteMessageForMeAction: object expected");
                m.deleteMessageForMeAction = $root.WASyncAction.DeleteMessageForMeAction.fromObject(d.deleteMessageForMeAction, n + 1);
            }
            if (d.keyExpiration != null) {
                if (typeof d.keyExpiration !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.keyExpiration: object expected");
                m.keyExpiration = $root.WASyncAction.KeyExpiration.fromObject(d.keyExpiration, n + 1);
            }
            if (d.markChatAsReadAction != null) {
                if (typeof d.markChatAsReadAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.markChatAsReadAction: object expected");
                m.markChatAsReadAction = $root.WASyncAction.MarkChatAsReadAction.fromObject(d.markChatAsReadAction, n + 1);
            }
            if (d.clearChatAction != null) {
                if (typeof d.clearChatAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.clearChatAction: object expected");
                m.clearChatAction = $root.WASyncAction.ClearChatAction.fromObject(d.clearChatAction, n + 1);
            }
            if (d.deleteChatAction != null) {
                if (typeof d.deleteChatAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.deleteChatAction: object expected");
                m.deleteChatAction = $root.WASyncAction.DeleteChatAction.fromObject(d.deleteChatAction, n + 1);
            }
            if (d.unarchiveChatsSetting != null) {
                if (typeof d.unarchiveChatsSetting !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.unarchiveChatsSetting: object expected");
                m.unarchiveChatsSetting = $root.WASyncAction.UnarchiveChatsSetting.fromObject(d.unarchiveChatsSetting, n + 1);
            }
            if (d.primaryFeature != null) {
                if (typeof d.primaryFeature !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.primaryFeature: object expected");
                m.primaryFeature = $root.WASyncAction.PrimaryFeature.fromObject(d.primaryFeature, n + 1);
            }
            if (d.androidUnsupportedActions != null) {
                if (typeof d.androidUnsupportedActions !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.androidUnsupportedActions: object expected");
                m.androidUnsupportedActions = $root.WASyncAction.AndroidUnsupportedActions.fromObject(d.androidUnsupportedActions, n + 1);
            }
            if (d.agentAction != null) {
                if (typeof d.agentAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.agentAction: object expected");
                m.agentAction = $root.WASyncAction.AgentAction.fromObject(d.agentAction, n + 1);
            }
            if (d.subscriptionAction != null) {
                if (typeof d.subscriptionAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.subscriptionAction: object expected");
                m.subscriptionAction = $root.WASyncAction.SubscriptionAction.fromObject(d.subscriptionAction, n + 1);
            }
            if (d.userStatusMuteAction != null) {
                if (typeof d.userStatusMuteAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.userStatusMuteAction: object expected");
                m.userStatusMuteAction = $root.WASyncAction.UserStatusMuteAction.fromObject(d.userStatusMuteAction, n + 1);
            }
            if (d.timeFormatAction != null) {
                if (typeof d.timeFormatAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.timeFormatAction: object expected");
                m.timeFormatAction = $root.WASyncAction.TimeFormatAction.fromObject(d.timeFormatAction, n + 1);
            }
            if (d.nuxAction != null) {
                if (typeof d.nuxAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.nuxAction: object expected");
                m.nuxAction = $root.WASyncAction.NuxAction.fromObject(d.nuxAction, n + 1);
            }
            if (d.primaryVersionAction != null) {
                if (typeof d.primaryVersionAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.primaryVersionAction: object expected");
                m.primaryVersionAction = $root.WASyncAction.PrimaryVersionAction.fromObject(d.primaryVersionAction, n + 1);
            }
            if (d.stickerAction != null) {
                if (typeof d.stickerAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.stickerAction: object expected");
                m.stickerAction = $root.WASyncAction.StickerAction.fromObject(d.stickerAction, n + 1);
            }
            if (d.removeRecentStickerAction != null) {
                if (typeof d.removeRecentStickerAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.removeRecentStickerAction: object expected");
                m.removeRecentStickerAction = $root.WASyncAction.RemoveRecentStickerAction.fromObject(d.removeRecentStickerAction, n + 1);
            }
            if (d.chatAssignment != null) {
                if (typeof d.chatAssignment !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.chatAssignment: object expected");
                m.chatAssignment = $root.WASyncAction.ChatAssignmentAction.fromObject(d.chatAssignment, n + 1);
            }
            if (d.chatAssignmentOpenedStatus != null) {
                if (typeof d.chatAssignmentOpenedStatus !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.chatAssignmentOpenedStatus: object expected");
                m.chatAssignmentOpenedStatus = $root.WASyncAction.ChatAssignmentOpenedStatusAction.fromObject(d.chatAssignmentOpenedStatus, n + 1);
            }
            if (d.pnForLidChatAction != null) {
                if (typeof d.pnForLidChatAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.pnForLidChatAction: object expected");
                m.pnForLidChatAction = $root.WASyncAction.PnForLidChatAction.fromObject(d.pnForLidChatAction, n + 1);
            }
            if (d.marketingMessageAction != null) {
                if (typeof d.marketingMessageAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.marketingMessageAction: object expected");
                m.marketingMessageAction = $root.WASyncAction.MarketingMessageAction.fromObject(d.marketingMessageAction, n + 1);
            }
            if (d.marketingMessageBroadcastAction != null) {
                if (typeof d.marketingMessageBroadcastAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.marketingMessageBroadcastAction: object expected");
                m.marketingMessageBroadcastAction = $root.WASyncAction.MarketingMessageBroadcastAction.fromObject(d.marketingMessageBroadcastAction, n + 1);
            }
            if (d.externalWebBetaAction != null) {
                if (typeof d.externalWebBetaAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.externalWebBetaAction: object expected");
                m.externalWebBetaAction = $root.WASyncAction.ExternalWebBetaAction.fromObject(d.externalWebBetaAction, n + 1);
            }
            if (d.privacySettingRelayAllCalls != null) {
                if (typeof d.privacySettingRelayAllCalls !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.privacySettingRelayAllCalls: object expected");
                m.privacySettingRelayAllCalls = $root.WASyncAction.PrivacySettingRelayAllCalls.fromObject(d.privacySettingRelayAllCalls, n + 1);
            }
            if (d.callLogAction != null) {
                if (typeof d.callLogAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.callLogAction: object expected");
                m.callLogAction = $root.WASyncAction.CallLogAction.fromObject(d.callLogAction, n + 1);
            }
            if (d.ugcBot != null) {
                if (typeof d.ugcBot !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.ugcBot: object expected");
                m.ugcBot = $root.WASyncAction.UGCBot.fromObject(d.ugcBot, n + 1);
            }
            if (d.statusPrivacy != null) {
                if (typeof d.statusPrivacy !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.statusPrivacy: object expected");
                m.statusPrivacy = $root.WASyncAction.StatusPrivacyAction.fromObject(d.statusPrivacy, n + 1);
            }
            if (d.botWelcomeRequestAction != null) {
                if (typeof d.botWelcomeRequestAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.botWelcomeRequestAction: object expected");
                m.botWelcomeRequestAction = $root.WASyncAction.BotWelcomeRequestAction.fromObject(d.botWelcomeRequestAction, n + 1);
            }
            if (d.deleteIndividualCallLog != null) {
                if (typeof d.deleteIndividualCallLog !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.deleteIndividualCallLog: object expected");
                m.deleteIndividualCallLog = $root.WASyncAction.DeleteIndividualCallLogAction.fromObject(d.deleteIndividualCallLog, n + 1);
            }
            if (d.labelReorderingAction != null) {
                if (typeof d.labelReorderingAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.labelReorderingAction: object expected");
                m.labelReorderingAction = $root.WASyncAction.LabelReorderingAction.fromObject(d.labelReorderingAction, n + 1);
            }
            if (d.paymentInfoAction != null) {
                if (typeof d.paymentInfoAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.paymentInfoAction: object expected");
                m.paymentInfoAction = $root.WASyncAction.PaymentInfoAction.fromObject(d.paymentInfoAction, n + 1);
            }
            if (d.customPaymentMethodsAction != null) {
                if (typeof d.customPaymentMethodsAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.customPaymentMethodsAction: object expected");
                m.customPaymentMethodsAction = $root.WASyncAction.CustomPaymentMethodsAction.fromObject(d.customPaymentMethodsAction, n + 1);
            }
            if (d.lockChatAction != null) {
                if (typeof d.lockChatAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.lockChatAction: object expected");
                m.lockChatAction = $root.WASyncAction.LockChatAction.fromObject(d.lockChatAction, n + 1);
            }
            if (d.chatLockSettings != null) {
                if (typeof d.chatLockSettings !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.chatLockSettings: object expected");
                m.chatLockSettings = WAChatLockSettings.ChatLockSettings.fromObject(d.chatLockSettings, n + 1);
            }
            if (d.wamoUserIdentifierAction != null) {
                if (typeof d.wamoUserIdentifierAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.wamoUserIdentifierAction: object expected");
                m.wamoUserIdentifierAction = $root.WASyncAction.WamoUserIdentifierAction.fromObject(d.wamoUserIdentifierAction, n + 1);
            }
            if (d.privacySettingDisableLinkPreviewsAction != null) {
                if (typeof d.privacySettingDisableLinkPreviewsAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.privacySettingDisableLinkPreviewsAction: object expected");
                m.privacySettingDisableLinkPreviewsAction = $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction.fromObject(d.privacySettingDisableLinkPreviewsAction, n + 1);
            }
            if (d.deviceCapabilities != null) {
                if (typeof d.deviceCapabilities !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.deviceCapabilities: object expected");
                m.deviceCapabilities = WADeviceCapabilities.DeviceCapabilities.fromObject(d.deviceCapabilities, n + 1);
            }
            if (d.noteEditAction != null) {
                if (typeof d.noteEditAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.noteEditAction: object expected");
                m.noteEditAction = $root.WASyncAction.NoteEditAction.fromObject(d.noteEditAction, n + 1);
            }
            if (d.favoritesAction != null) {
                if (typeof d.favoritesAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.favoritesAction: object expected");
                m.favoritesAction = $root.WASyncAction.FavoritesAction.fromObject(d.favoritesAction, n + 1);
            }
            if (d.merchantPaymentPartnerAction != null) {
                if (typeof d.merchantPaymentPartnerAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.merchantPaymentPartnerAction: object expected");
                m.merchantPaymentPartnerAction = $root.WASyncAction.MerchantPaymentPartnerAction.fromObject(d.merchantPaymentPartnerAction, n + 1);
            }
            if (d.waffleAccountLinkStateAction != null) {
                if (typeof d.waffleAccountLinkStateAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.waffleAccountLinkStateAction: object expected");
                m.waffleAccountLinkStateAction = $root.WASyncAction.WaffleAccountLinkStateAction.fromObject(d.waffleAccountLinkStateAction, n + 1);
            }
            if (d.usernameChatStartMode != null) {
                if (typeof d.usernameChatStartMode !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.usernameChatStartMode: object expected");
                m.usernameChatStartMode = $root.WASyncAction.UsernameChatStartModeAction.fromObject(d.usernameChatStartMode, n + 1);
            }
            if (d.notificationActivitySettingAction != null) {
                if (typeof d.notificationActivitySettingAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.notificationActivitySettingAction: object expected");
                m.notificationActivitySettingAction = $root.WASyncAction.NotificationActivitySettingAction.fromObject(d.notificationActivitySettingAction, n + 1);
            }
            if (d.lidContactAction != null) {
                if (typeof d.lidContactAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.lidContactAction: object expected");
                m.lidContactAction = $root.WASyncAction.LidContactAction.fromObject(d.lidContactAction, n + 1);
            }
            if (d.ctwaPerCustomerDataSharingAction != null) {
                if (typeof d.ctwaPerCustomerDataSharingAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.ctwaPerCustomerDataSharingAction: object expected");
                m.ctwaPerCustomerDataSharingAction = $root.WASyncAction.CtwaPerCustomerDataSharingAction.fromObject(d.ctwaPerCustomerDataSharingAction, n + 1);
            }
            if (d.paymentTosAction != null) {
                if (typeof d.paymentTosAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.paymentTosAction: object expected");
                m.paymentTosAction = $root.WASyncAction.PaymentTosAction.fromObject(d.paymentTosAction, n + 1);
            }
            if (d.privacySettingChannelsPersonalisedRecommendationAction != null) {
                if (typeof d.privacySettingChannelsPersonalisedRecommendationAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.privacySettingChannelsPersonalisedRecommendationAction: object expected");
                m.privacySettingChannelsPersonalisedRecommendationAction = $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction.fromObject(d.privacySettingChannelsPersonalisedRecommendationAction, n + 1);
            }
            if (d.detectedOutcomesStatusAction != null) {
                if (typeof d.detectedOutcomesStatusAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.detectedOutcomesStatusAction: object expected");
                m.detectedOutcomesStatusAction = $root.WASyncAction.DetectedOutcomesStatusAction.fromObject(d.detectedOutcomesStatusAction, n + 1);
            }
            if (d.maibaAiFeaturesControlAction != null) {
                if (typeof d.maibaAiFeaturesControlAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.maibaAiFeaturesControlAction: object expected");
                m.maibaAiFeaturesControlAction = $root.WASyncAction.MaibaAIFeaturesControlAction.fromObject(d.maibaAiFeaturesControlAction, n + 1);
            }
            if (d.businessBroadcastListAction != null) {
                if (typeof d.businessBroadcastListAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.businessBroadcastListAction: object expected");
                m.businessBroadcastListAction = $root.WASyncAction.BusinessBroadcastListAction.fromObject(d.businessBroadcastListAction, n + 1);
            }
            if (d.musicUserIDAction != null) {
                if (typeof d.musicUserIDAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.musicUserIDAction: object expected");
                m.musicUserIDAction = $root.WASyncAction.MusicUserIdAction.fromObject(d.musicUserIDAction, n + 1);
            }
            if (d.statusPostOptInNotificationPreferencesAction != null) {
                if (typeof d.statusPostOptInNotificationPreferencesAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.statusPostOptInNotificationPreferencesAction: object expected");
                m.statusPostOptInNotificationPreferencesAction = $root.WASyncAction.StatusPostOptInNotificationPreferencesAction.fromObject(d.statusPostOptInNotificationPreferencesAction, n + 1);
            }
            if (d.avatarUpdatedAction != null) {
                if (typeof d.avatarUpdatedAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.avatarUpdatedAction: object expected");
                m.avatarUpdatedAction = $root.WASyncAction.AvatarUpdatedAction.fromObject(d.avatarUpdatedAction, n + 1);
            }
            if (d.privateProcessingSettingAction != null) {
                if (typeof d.privateProcessingSettingAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.privateProcessingSettingAction: object expected");
                m.privateProcessingSettingAction = $root.WASyncAction.PrivateProcessingSettingAction.fromObject(d.privateProcessingSettingAction, n + 1);
            }
            if (d.newsletterSavedInterestsAction != null) {
                if (typeof d.newsletterSavedInterestsAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.newsletterSavedInterestsAction: object expected");
                m.newsletterSavedInterestsAction = $root.WASyncAction.NewsletterSavedInterestsAction.fromObject(d.newsletterSavedInterestsAction, n + 1);
            }
            if (d.aiThreadRenameAction != null) {
                if (typeof d.aiThreadRenameAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.aiThreadRenameAction: object expected");
                m.aiThreadRenameAction = $root.WASyncAction.AiThreadRenameAction.fromObject(d.aiThreadRenameAction, n + 1);
            }
            if (d.interactiveMessageAction != null) {
                if (typeof d.interactiveMessageAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.interactiveMessageAction: object expected");
                m.interactiveMessageAction = $root.WASyncAction.InteractiveMessageAction.fromObject(d.interactiveMessageAction, n + 1);
            }
            if (d.settingsSyncAction != null) {
                if (typeof d.settingsSyncAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.settingsSyncAction: object expected");
                m.settingsSyncAction = $root.WASyncAction.SettingsSyncAction.fromObject(d.settingsSyncAction, n + 1);
            }
            if (d.outContactAction != null) {
                if (typeof d.outContactAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.outContactAction: object expected");
                m.outContactAction = $root.WASyncAction.OutContactAction.fromObject(d.outContactAction, n + 1);
            }
            if (d.nctSaltSyncAction != null) {
                if (typeof d.nctSaltSyncAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.nctSaltSyncAction: object expected");
                m.nctSaltSyncAction = $root.WASyncAction.NctSaltSyncAction.fromObject(d.nctSaltSyncAction, n + 1);
            }
            if (d.businessBroadcastCampaignAction != null) {
                if (typeof d.businessBroadcastCampaignAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.businessBroadcastCampaignAction: object expected");
                m.businessBroadcastCampaignAction = $root.WASyncAction.BusinessBroadcastCampaignAction.fromObject(d.businessBroadcastCampaignAction, n + 1);
            }
            if (d.businessBroadcastInsightsAction != null) {
                if (typeof d.businessBroadcastInsightsAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.businessBroadcastInsightsAction: object expected");
                m.businessBroadcastInsightsAction = $root.WASyncAction.BusinessBroadcastInsightsAction.fromObject(d.businessBroadcastInsightsAction, n + 1);
            }
            if (d.customerDataAction != null) {
                if (typeof d.customerDataAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.customerDataAction: object expected");
                m.customerDataAction = $root.WASyncAction.CustomerDataAction.fromObject(d.customerDataAction, n + 1);
            }
            if (d.subscriptionsSyncV2Action != null) {
                if (typeof d.subscriptionsSyncV2Action !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.subscriptionsSyncV2Action: object expected");
                m.subscriptionsSyncV2Action = $root.WASyncAction.SubscriptionsSyncV2Action.fromObject(d.subscriptionsSyncV2Action, n + 1);
            }
            if (d.threadPinAction != null) {
                if (typeof d.threadPinAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.threadPinAction: object expected");
                m.threadPinAction = $root.WASyncAction.ThreadPinAction.fromObject(d.threadPinAction, n + 1);
            }
            if (d.autoOrganizeBusinessChatSetting != null) {
                if (typeof d.autoOrganizeBusinessChatSetting !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.autoOrganizeBusinessChatSetting: object expected");
                m.autoOrganizeBusinessChatSetting = $root.WASyncAction.AutoOrganizeBusinessChatSetting.fromObject(d.autoOrganizeBusinessChatSetting, n + 1);
            }
            if (d.bizAiSettingsNudgeAction != null) {
                if (typeof d.bizAiSettingsNudgeAction !== "object")
                    throw TypeError(".WASyncAction.SyncActionValue.bizAiSettingsNudgeAction: object expected");
                m.bizAiSettingsNudgeAction = $root.WASyncAction.BizAISettingsNudgeAction.fromObject(d.bizAiSettingsNudgeAction, n + 1);
            }
            return m;
        };

        SyncActionValue.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.timestamp != null && m.hasOwnProperty("timestamp")) {
                if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === String ? String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? $util.Long.prototype.toString.call(m.timestamp) : o.longs === Number ? new $util.LongBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0).toNumber() : m.timestamp;
                if (o.oneofs)
                    d._timestamp = "timestamp";
            }
            if (m.starAction != null && m.hasOwnProperty("starAction")) {
                d.starAction = $root.WASyncAction.StarAction.toObject(m.starAction, o);
                if (o.oneofs)
                    d._starAction = "starAction";
            }
            if (m.contactAction != null && m.hasOwnProperty("contactAction")) {
                d.contactAction = $root.WASyncAction.ContactAction.toObject(m.contactAction, o);
                if (o.oneofs)
                    d._contactAction = "contactAction";
            }
            if (m.muteAction != null && m.hasOwnProperty("muteAction")) {
                d.muteAction = $root.WASyncAction.MuteAction.toObject(m.muteAction, o);
                if (o.oneofs)
                    d._muteAction = "muteAction";
            }
            if (m.pinAction != null && m.hasOwnProperty("pinAction")) {
                d.pinAction = $root.WASyncAction.PinAction.toObject(m.pinAction, o);
                if (o.oneofs)
                    d._pinAction = "pinAction";
            }
            if (m.pushNameSetting != null && m.hasOwnProperty("pushNameSetting")) {
                d.pushNameSetting = $root.WASyncAction.PushNameSetting.toObject(m.pushNameSetting, o);
                if (o.oneofs)
                    d._pushNameSetting = "pushNameSetting";
            }
            if (m.quickReplyAction != null && m.hasOwnProperty("quickReplyAction")) {
                d.quickReplyAction = $root.WASyncAction.QuickReplyAction.toObject(m.quickReplyAction, o);
                if (o.oneofs)
                    d._quickReplyAction = "quickReplyAction";
            }
            if (m.recentEmojiWeightsAction != null && m.hasOwnProperty("recentEmojiWeightsAction")) {
                d.recentEmojiWeightsAction = $root.WASyncAction.RecentEmojiWeightsAction.toObject(m.recentEmojiWeightsAction, o);
                if (o.oneofs)
                    d._recentEmojiWeightsAction = "recentEmojiWeightsAction";
            }
            if (m.labelEditAction != null && m.hasOwnProperty("labelEditAction")) {
                d.labelEditAction = $root.WASyncAction.LabelEditAction.toObject(m.labelEditAction, o);
                if (o.oneofs)
                    d._labelEditAction = "labelEditAction";
            }
            if (m.labelAssociationAction != null && m.hasOwnProperty("labelAssociationAction")) {
                d.labelAssociationAction = $root.WASyncAction.LabelAssociationAction.toObject(m.labelAssociationAction, o);
                if (o.oneofs)
                    d._labelAssociationAction = "labelAssociationAction";
            }
            if (m.localeSetting != null && m.hasOwnProperty("localeSetting")) {
                d.localeSetting = $root.WASyncAction.LocaleSetting.toObject(m.localeSetting, o);
                if (o.oneofs)
                    d._localeSetting = "localeSetting";
            }
            if (m.archiveChatAction != null && m.hasOwnProperty("archiveChatAction")) {
                d.archiveChatAction = $root.WASyncAction.ArchiveChatAction.toObject(m.archiveChatAction, o);
                if (o.oneofs)
                    d._archiveChatAction = "archiveChatAction";
            }
            if (m.deleteMessageForMeAction != null && m.hasOwnProperty("deleteMessageForMeAction")) {
                d.deleteMessageForMeAction = $root.WASyncAction.DeleteMessageForMeAction.toObject(m.deleteMessageForMeAction, o);
                if (o.oneofs)
                    d._deleteMessageForMeAction = "deleteMessageForMeAction";
            }
            if (m.keyExpiration != null && m.hasOwnProperty("keyExpiration")) {
                d.keyExpiration = $root.WASyncAction.KeyExpiration.toObject(m.keyExpiration, o);
                if (o.oneofs)
                    d._keyExpiration = "keyExpiration";
            }
            if (m.markChatAsReadAction != null && m.hasOwnProperty("markChatAsReadAction")) {
                d.markChatAsReadAction = $root.WASyncAction.MarkChatAsReadAction.toObject(m.markChatAsReadAction, o);
                if (o.oneofs)
                    d._markChatAsReadAction = "markChatAsReadAction";
            }
            if (m.clearChatAction != null && m.hasOwnProperty("clearChatAction")) {
                d.clearChatAction = $root.WASyncAction.ClearChatAction.toObject(m.clearChatAction, o);
                if (o.oneofs)
                    d._clearChatAction = "clearChatAction";
            }
            if (m.deleteChatAction != null && m.hasOwnProperty("deleteChatAction")) {
                d.deleteChatAction = $root.WASyncAction.DeleteChatAction.toObject(m.deleteChatAction, o);
                if (o.oneofs)
                    d._deleteChatAction = "deleteChatAction";
            }
            if (m.unarchiveChatsSetting != null && m.hasOwnProperty("unarchiveChatsSetting")) {
                d.unarchiveChatsSetting = $root.WASyncAction.UnarchiveChatsSetting.toObject(m.unarchiveChatsSetting, o);
                if (o.oneofs)
                    d._unarchiveChatsSetting = "unarchiveChatsSetting";
            }
            if (m.primaryFeature != null && m.hasOwnProperty("primaryFeature")) {
                d.primaryFeature = $root.WASyncAction.PrimaryFeature.toObject(m.primaryFeature, o);
                if (o.oneofs)
                    d._primaryFeature = "primaryFeature";
            }
            if (m.androidUnsupportedActions != null && m.hasOwnProperty("androidUnsupportedActions")) {
                d.androidUnsupportedActions = $root.WASyncAction.AndroidUnsupportedActions.toObject(m.androidUnsupportedActions, o);
                if (o.oneofs)
                    d._androidUnsupportedActions = "androidUnsupportedActions";
            }
            if (m.agentAction != null && m.hasOwnProperty("agentAction")) {
                d.agentAction = $root.WASyncAction.AgentAction.toObject(m.agentAction, o);
                if (o.oneofs)
                    d._agentAction = "agentAction";
            }
            if (m.subscriptionAction != null && m.hasOwnProperty("subscriptionAction")) {
                d.subscriptionAction = $root.WASyncAction.SubscriptionAction.toObject(m.subscriptionAction, o);
                if (o.oneofs)
                    d._subscriptionAction = "subscriptionAction";
            }
            if (m.userStatusMuteAction != null && m.hasOwnProperty("userStatusMuteAction")) {
                d.userStatusMuteAction = $root.WASyncAction.UserStatusMuteAction.toObject(m.userStatusMuteAction, o);
                if (o.oneofs)
                    d._userStatusMuteAction = "userStatusMuteAction";
            }
            if (m.timeFormatAction != null && m.hasOwnProperty("timeFormatAction")) {
                d.timeFormatAction = $root.WASyncAction.TimeFormatAction.toObject(m.timeFormatAction, o);
                if (o.oneofs)
                    d._timeFormatAction = "timeFormatAction";
            }
            if (m.nuxAction != null && m.hasOwnProperty("nuxAction")) {
                d.nuxAction = $root.WASyncAction.NuxAction.toObject(m.nuxAction, o);
                if (o.oneofs)
                    d._nuxAction = "nuxAction";
            }
            if (m.primaryVersionAction != null && m.hasOwnProperty("primaryVersionAction")) {
                d.primaryVersionAction = $root.WASyncAction.PrimaryVersionAction.toObject(m.primaryVersionAction, o);
                if (o.oneofs)
                    d._primaryVersionAction = "primaryVersionAction";
            }
            if (m.stickerAction != null && m.hasOwnProperty("stickerAction")) {
                d.stickerAction = $root.WASyncAction.StickerAction.toObject(m.stickerAction, o);
                if (o.oneofs)
                    d._stickerAction = "stickerAction";
            }
            if (m.removeRecentStickerAction != null && m.hasOwnProperty("removeRecentStickerAction")) {
                d.removeRecentStickerAction = $root.WASyncAction.RemoveRecentStickerAction.toObject(m.removeRecentStickerAction, o);
                if (o.oneofs)
                    d._removeRecentStickerAction = "removeRecentStickerAction";
            }
            if (m.chatAssignment != null && m.hasOwnProperty("chatAssignment")) {
                d.chatAssignment = $root.WASyncAction.ChatAssignmentAction.toObject(m.chatAssignment, o);
                if (o.oneofs)
                    d._chatAssignment = "chatAssignment";
            }
            if (m.chatAssignmentOpenedStatus != null && m.hasOwnProperty("chatAssignmentOpenedStatus")) {
                d.chatAssignmentOpenedStatus = $root.WASyncAction.ChatAssignmentOpenedStatusAction.toObject(m.chatAssignmentOpenedStatus, o);
                if (o.oneofs)
                    d._chatAssignmentOpenedStatus = "chatAssignmentOpenedStatus";
            }
            if (m.pnForLidChatAction != null && m.hasOwnProperty("pnForLidChatAction")) {
                d.pnForLidChatAction = $root.WASyncAction.PnForLidChatAction.toObject(m.pnForLidChatAction, o);
                if (o.oneofs)
                    d._pnForLidChatAction = "pnForLidChatAction";
            }
            if (m.marketingMessageAction != null && m.hasOwnProperty("marketingMessageAction")) {
                d.marketingMessageAction = $root.WASyncAction.MarketingMessageAction.toObject(m.marketingMessageAction, o);
                if (o.oneofs)
                    d._marketingMessageAction = "marketingMessageAction";
            }
            if (m.marketingMessageBroadcastAction != null && m.hasOwnProperty("marketingMessageBroadcastAction")) {
                d.marketingMessageBroadcastAction = $root.WASyncAction.MarketingMessageBroadcastAction.toObject(m.marketingMessageBroadcastAction, o);
                if (o.oneofs)
                    d._marketingMessageBroadcastAction = "marketingMessageBroadcastAction";
            }
            if (m.externalWebBetaAction != null && m.hasOwnProperty("externalWebBetaAction")) {
                d.externalWebBetaAction = $root.WASyncAction.ExternalWebBetaAction.toObject(m.externalWebBetaAction, o);
                if (o.oneofs)
                    d._externalWebBetaAction = "externalWebBetaAction";
            }
            if (m.privacySettingRelayAllCalls != null && m.hasOwnProperty("privacySettingRelayAllCalls")) {
                d.privacySettingRelayAllCalls = $root.WASyncAction.PrivacySettingRelayAllCalls.toObject(m.privacySettingRelayAllCalls, o);
                if (o.oneofs)
                    d._privacySettingRelayAllCalls = "privacySettingRelayAllCalls";
            }
            if (m.callLogAction != null && m.hasOwnProperty("callLogAction")) {
                d.callLogAction = $root.WASyncAction.CallLogAction.toObject(m.callLogAction, o);
                if (o.oneofs)
                    d._callLogAction = "callLogAction";
            }
            if (m.ugcBot != null && m.hasOwnProperty("ugcBot")) {
                d.ugcBot = $root.WASyncAction.UGCBot.toObject(m.ugcBot, o);
                if (o.oneofs)
                    d._ugcBot = "ugcBot";
            }
            if (m.statusPrivacy != null && m.hasOwnProperty("statusPrivacy")) {
                d.statusPrivacy = $root.WASyncAction.StatusPrivacyAction.toObject(m.statusPrivacy, o);
                if (o.oneofs)
                    d._statusPrivacy = "statusPrivacy";
            }
            if (m.botWelcomeRequestAction != null && m.hasOwnProperty("botWelcomeRequestAction")) {
                d.botWelcomeRequestAction = $root.WASyncAction.BotWelcomeRequestAction.toObject(m.botWelcomeRequestAction, o);
                if (o.oneofs)
                    d._botWelcomeRequestAction = "botWelcomeRequestAction";
            }
            if (m.deleteIndividualCallLog != null && m.hasOwnProperty("deleteIndividualCallLog")) {
                d.deleteIndividualCallLog = $root.WASyncAction.DeleteIndividualCallLogAction.toObject(m.deleteIndividualCallLog, o);
                if (o.oneofs)
                    d._deleteIndividualCallLog = "deleteIndividualCallLog";
            }
            if (m.labelReorderingAction != null && m.hasOwnProperty("labelReorderingAction")) {
                d.labelReorderingAction = $root.WASyncAction.LabelReorderingAction.toObject(m.labelReorderingAction, o);
                if (o.oneofs)
                    d._labelReorderingAction = "labelReorderingAction";
            }
            if (m.paymentInfoAction != null && m.hasOwnProperty("paymentInfoAction")) {
                d.paymentInfoAction = $root.WASyncAction.PaymentInfoAction.toObject(m.paymentInfoAction, o);
                if (o.oneofs)
                    d._paymentInfoAction = "paymentInfoAction";
            }
            if (m.customPaymentMethodsAction != null && m.hasOwnProperty("customPaymentMethodsAction")) {
                d.customPaymentMethodsAction = $root.WASyncAction.CustomPaymentMethodsAction.toObject(m.customPaymentMethodsAction, o);
                if (o.oneofs)
                    d._customPaymentMethodsAction = "customPaymentMethodsAction";
            }
            if (m.lockChatAction != null && m.hasOwnProperty("lockChatAction")) {
                d.lockChatAction = $root.WASyncAction.LockChatAction.toObject(m.lockChatAction, o);
                if (o.oneofs)
                    d._lockChatAction = "lockChatAction";
            }
            if (m.chatLockSettings != null && m.hasOwnProperty("chatLockSettings")) {
                d.chatLockSettings = WAChatLockSettings.ChatLockSettings.toObject(m.chatLockSettings, o);
                if (o.oneofs)
                    d._chatLockSettings = "chatLockSettings";
            }
            if (m.wamoUserIdentifierAction != null && m.hasOwnProperty("wamoUserIdentifierAction")) {
                d.wamoUserIdentifierAction = $root.WASyncAction.WamoUserIdentifierAction.toObject(m.wamoUserIdentifierAction, o);
                if (o.oneofs)
                    d._wamoUserIdentifierAction = "wamoUserIdentifierAction";
            }
            if (m.privacySettingDisableLinkPreviewsAction != null && m.hasOwnProperty("privacySettingDisableLinkPreviewsAction")) {
                d.privacySettingDisableLinkPreviewsAction = $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction.toObject(m.privacySettingDisableLinkPreviewsAction, o);
                if (o.oneofs)
                    d._privacySettingDisableLinkPreviewsAction = "privacySettingDisableLinkPreviewsAction";
            }
            if (m.deviceCapabilities != null && m.hasOwnProperty("deviceCapabilities")) {
                d.deviceCapabilities = WADeviceCapabilities.DeviceCapabilities.toObject(m.deviceCapabilities, o);
                if (o.oneofs)
                    d._deviceCapabilities = "deviceCapabilities";
            }
            if (m.noteEditAction != null && m.hasOwnProperty("noteEditAction")) {
                d.noteEditAction = $root.WASyncAction.NoteEditAction.toObject(m.noteEditAction, o);
                if (o.oneofs)
                    d._noteEditAction = "noteEditAction";
            }
            if (m.favoritesAction != null && m.hasOwnProperty("favoritesAction")) {
                d.favoritesAction = $root.WASyncAction.FavoritesAction.toObject(m.favoritesAction, o);
                if (o.oneofs)
                    d._favoritesAction = "favoritesAction";
            }
            if (m.merchantPaymentPartnerAction != null && m.hasOwnProperty("merchantPaymentPartnerAction")) {
                d.merchantPaymentPartnerAction = $root.WASyncAction.MerchantPaymentPartnerAction.toObject(m.merchantPaymentPartnerAction, o);
                if (o.oneofs)
                    d._merchantPaymentPartnerAction = "merchantPaymentPartnerAction";
            }
            if (m.waffleAccountLinkStateAction != null && m.hasOwnProperty("waffleAccountLinkStateAction")) {
                d.waffleAccountLinkStateAction = $root.WASyncAction.WaffleAccountLinkStateAction.toObject(m.waffleAccountLinkStateAction, o);
                if (o.oneofs)
                    d._waffleAccountLinkStateAction = "waffleAccountLinkStateAction";
            }
            if (m.usernameChatStartMode != null && m.hasOwnProperty("usernameChatStartMode")) {
                d.usernameChatStartMode = $root.WASyncAction.UsernameChatStartModeAction.toObject(m.usernameChatStartMode, o);
                if (o.oneofs)
                    d._usernameChatStartMode = "usernameChatStartMode";
            }
            if (m.notificationActivitySettingAction != null && m.hasOwnProperty("notificationActivitySettingAction")) {
                d.notificationActivitySettingAction = $root.WASyncAction.NotificationActivitySettingAction.toObject(m.notificationActivitySettingAction, o);
                if (o.oneofs)
                    d._notificationActivitySettingAction = "notificationActivitySettingAction";
            }
            if (m.lidContactAction != null && m.hasOwnProperty("lidContactAction")) {
                d.lidContactAction = $root.WASyncAction.LidContactAction.toObject(m.lidContactAction, o);
                if (o.oneofs)
                    d._lidContactAction = "lidContactAction";
            }
            if (m.ctwaPerCustomerDataSharingAction != null && m.hasOwnProperty("ctwaPerCustomerDataSharingAction")) {
                d.ctwaPerCustomerDataSharingAction = $root.WASyncAction.CtwaPerCustomerDataSharingAction.toObject(m.ctwaPerCustomerDataSharingAction, o);
                if (o.oneofs)
                    d._ctwaPerCustomerDataSharingAction = "ctwaPerCustomerDataSharingAction";
            }
            if (m.paymentTosAction != null && m.hasOwnProperty("paymentTosAction")) {
                d.paymentTosAction = $root.WASyncAction.PaymentTosAction.toObject(m.paymentTosAction, o);
                if (o.oneofs)
                    d._paymentTosAction = "paymentTosAction";
            }
            if (m.privacySettingChannelsPersonalisedRecommendationAction != null && m.hasOwnProperty("privacySettingChannelsPersonalisedRecommendationAction")) {
                d.privacySettingChannelsPersonalisedRecommendationAction = $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction.toObject(m.privacySettingChannelsPersonalisedRecommendationAction, o);
                if (o.oneofs)
                    d._privacySettingChannelsPersonalisedRecommendationAction = "privacySettingChannelsPersonalisedRecommendationAction";
            }
            if (m.detectedOutcomesStatusAction != null && m.hasOwnProperty("detectedOutcomesStatusAction")) {
                d.detectedOutcomesStatusAction = $root.WASyncAction.DetectedOutcomesStatusAction.toObject(m.detectedOutcomesStatusAction, o);
                if (o.oneofs)
                    d._detectedOutcomesStatusAction = "detectedOutcomesStatusAction";
            }
            if (m.maibaAiFeaturesControlAction != null && m.hasOwnProperty("maibaAiFeaturesControlAction")) {
                d.maibaAiFeaturesControlAction = $root.WASyncAction.MaibaAIFeaturesControlAction.toObject(m.maibaAiFeaturesControlAction, o);
                if (o.oneofs)
                    d._maibaAiFeaturesControlAction = "maibaAiFeaturesControlAction";
            }
            if (m.businessBroadcastListAction != null && m.hasOwnProperty("businessBroadcastListAction")) {
                d.businessBroadcastListAction = $root.WASyncAction.BusinessBroadcastListAction.toObject(m.businessBroadcastListAction, o);
                if (o.oneofs)
                    d._businessBroadcastListAction = "businessBroadcastListAction";
            }
            if (m.musicUserIDAction != null && m.hasOwnProperty("musicUserIDAction")) {
                d.musicUserIDAction = $root.WASyncAction.MusicUserIdAction.toObject(m.musicUserIDAction, o);
                if (o.oneofs)
                    d._musicUserIDAction = "musicUserIDAction";
            }
            if (m.statusPostOptInNotificationPreferencesAction != null && m.hasOwnProperty("statusPostOptInNotificationPreferencesAction")) {
                d.statusPostOptInNotificationPreferencesAction = $root.WASyncAction.StatusPostOptInNotificationPreferencesAction.toObject(m.statusPostOptInNotificationPreferencesAction, o);
                if (o.oneofs)
                    d._statusPostOptInNotificationPreferencesAction = "statusPostOptInNotificationPreferencesAction";
            }
            if (m.avatarUpdatedAction != null && m.hasOwnProperty("avatarUpdatedAction")) {
                d.avatarUpdatedAction = $root.WASyncAction.AvatarUpdatedAction.toObject(m.avatarUpdatedAction, o);
                if (o.oneofs)
                    d._avatarUpdatedAction = "avatarUpdatedAction";
            }
            if (m.privateProcessingSettingAction != null && m.hasOwnProperty("privateProcessingSettingAction")) {
                d.privateProcessingSettingAction = $root.WASyncAction.PrivateProcessingSettingAction.toObject(m.privateProcessingSettingAction, o);
                if (o.oneofs)
                    d._privateProcessingSettingAction = "privateProcessingSettingAction";
            }
            if (m.newsletterSavedInterestsAction != null && m.hasOwnProperty("newsletterSavedInterestsAction")) {
                d.newsletterSavedInterestsAction = $root.WASyncAction.NewsletterSavedInterestsAction.toObject(m.newsletterSavedInterestsAction, o);
                if (o.oneofs)
                    d._newsletterSavedInterestsAction = "newsletterSavedInterestsAction";
            }
            if (m.aiThreadRenameAction != null && m.hasOwnProperty("aiThreadRenameAction")) {
                d.aiThreadRenameAction = $root.WASyncAction.AiThreadRenameAction.toObject(m.aiThreadRenameAction, o);
                if (o.oneofs)
                    d._aiThreadRenameAction = "aiThreadRenameAction";
            }
            if (m.interactiveMessageAction != null && m.hasOwnProperty("interactiveMessageAction")) {
                d.interactiveMessageAction = $root.WASyncAction.InteractiveMessageAction.toObject(m.interactiveMessageAction, o);
                if (o.oneofs)
                    d._interactiveMessageAction = "interactiveMessageAction";
            }
            if (m.settingsSyncAction != null && m.hasOwnProperty("settingsSyncAction")) {
                d.settingsSyncAction = $root.WASyncAction.SettingsSyncAction.toObject(m.settingsSyncAction, o);
                if (o.oneofs)
                    d._settingsSyncAction = "settingsSyncAction";
            }
            if (m.outContactAction != null && m.hasOwnProperty("outContactAction")) {
                d.outContactAction = $root.WASyncAction.OutContactAction.toObject(m.outContactAction, o);
                if (o.oneofs)
                    d._outContactAction = "outContactAction";
            }
            if (m.nctSaltSyncAction != null && m.hasOwnProperty("nctSaltSyncAction")) {
                d.nctSaltSyncAction = $root.WASyncAction.NctSaltSyncAction.toObject(m.nctSaltSyncAction, o);
                if (o.oneofs)
                    d._nctSaltSyncAction = "nctSaltSyncAction";
            }
            if (m.businessBroadcastCampaignAction != null && m.hasOwnProperty("businessBroadcastCampaignAction")) {
                d.businessBroadcastCampaignAction = $root.WASyncAction.BusinessBroadcastCampaignAction.toObject(m.businessBroadcastCampaignAction, o);
                if (o.oneofs)
                    d._businessBroadcastCampaignAction = "businessBroadcastCampaignAction";
            }
            if (m.businessBroadcastInsightsAction != null && m.hasOwnProperty("businessBroadcastInsightsAction")) {
                d.businessBroadcastInsightsAction = $root.WASyncAction.BusinessBroadcastInsightsAction.toObject(m.businessBroadcastInsightsAction, o);
                if (o.oneofs)
                    d._businessBroadcastInsightsAction = "businessBroadcastInsightsAction";
            }
            if (m.customerDataAction != null && m.hasOwnProperty("customerDataAction")) {
                d.customerDataAction = $root.WASyncAction.CustomerDataAction.toObject(m.customerDataAction, o);
                if (o.oneofs)
                    d._customerDataAction = "customerDataAction";
            }
            if (m.subscriptionsSyncV2Action != null && m.hasOwnProperty("subscriptionsSyncV2Action")) {
                d.subscriptionsSyncV2Action = $root.WASyncAction.SubscriptionsSyncV2Action.toObject(m.subscriptionsSyncV2Action, o);
                if (o.oneofs)
                    d._subscriptionsSyncV2Action = "subscriptionsSyncV2Action";
            }
            if (m.threadPinAction != null && m.hasOwnProperty("threadPinAction")) {
                d.threadPinAction = $root.WASyncAction.ThreadPinAction.toObject(m.threadPinAction, o);
                if (o.oneofs)
                    d._threadPinAction = "threadPinAction";
            }
            if (m.autoOrganizeBusinessChatSetting != null && m.hasOwnProperty("autoOrganizeBusinessChatSetting")) {
                d.autoOrganizeBusinessChatSetting = $root.WASyncAction.AutoOrganizeBusinessChatSetting.toObject(m.autoOrganizeBusinessChatSetting, o);
                if (o.oneofs)
                    d._autoOrganizeBusinessChatSetting = "autoOrganizeBusinessChatSetting";
            }
            if (m.bizAiSettingsNudgeAction != null && m.hasOwnProperty("bizAiSettingsNudgeAction")) {
                d.bizAiSettingsNudgeAction = $root.WASyncAction.BizAISettingsNudgeAction.toObject(m.bizAiSettingsNudgeAction, o);
                if (o.oneofs)
                    d._bizAiSettingsNudgeAction = "bizAiSettingsNudgeAction";
            }
            return d;
        };

        SyncActionValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncActionValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SyncActionValue";
        };

        return SyncActionValue;
    })();

    WASyncAction.SubscriptionsSyncV2Action = (function() {

        function SubscriptionsSyncV2Action(p) {
            this.subscriptions = [];
            this.paidFeature = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SubscriptionsSyncV2Action.prototype.subscriptions = $util.emptyArray;
        SubscriptionsSyncV2Action.prototype.paidFeature = $util.emptyArray;

        SubscriptionsSyncV2Action.create = function create(properties) {
            return new SubscriptionsSyncV2Action(properties);
        };

        SubscriptionsSyncV2Action.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.subscriptions != null && m.subscriptions.length) {
                for (var i = 0; i < m.subscriptions.length; ++i)
                    $root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo.encode(m.subscriptions[i], w.uint32(10).fork()).ldelim();
            }
            if (m.paidFeature != null && m.paidFeature.length) {
                for (var i = 0; i < m.paidFeature.length; ++i)
                    $root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature.encode(m.paidFeature[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SubscriptionsSyncV2Action.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SubscriptionsSyncV2Action();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.subscriptions && m.subscriptions.length))
                            m.subscriptions = [];
                        m.subscriptions.push($root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 2: {
                        if (!(m.paidFeature && m.paidFeature.length))
                            m.paidFeature = [];
                        m.paidFeature.push($root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SubscriptionsSyncV2Action.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SubscriptionsSyncV2Action)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SubscriptionsSyncV2Action();
            if (d.subscriptions) {
                if (!Array.isArray(d.subscriptions))
                    throw TypeError(".WASyncAction.SubscriptionsSyncV2Action.subscriptions: array expected");
                m.subscriptions = [];
                for (var i = 0; i < d.subscriptions.length; ++i) {
                    if (typeof d.subscriptions[i] !== "object")
                        throw TypeError(".WASyncAction.SubscriptionsSyncV2Action.subscriptions: object expected");
                    m.subscriptions[i] = $root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo.fromObject(d.subscriptions[i], n + 1);
                }
            }
            if (d.paidFeature) {
                if (!Array.isArray(d.paidFeature))
                    throw TypeError(".WASyncAction.SubscriptionsSyncV2Action.paidFeature: array expected");
                m.paidFeature = [];
                for (var i = 0; i < d.paidFeature.length; ++i) {
                    if (typeof d.paidFeature[i] !== "object")
                        throw TypeError(".WASyncAction.SubscriptionsSyncV2Action.paidFeature: object expected");
                    m.paidFeature[i] = $root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature.fromObject(d.paidFeature[i], n + 1);
                }
            }
            return m;
        };

        SubscriptionsSyncV2Action.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.subscriptions = [];
                d.paidFeature = [];
            }
            if (m.subscriptions && m.subscriptions.length) {
                d.subscriptions = [];
                for (var j = 0; j < m.subscriptions.length; ++j) {
                    d.subscriptions[j] = $root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo.toObject(m.subscriptions[j], o);
                }
            }
            if (m.paidFeature && m.paidFeature.length) {
                d.paidFeature = [];
                for (var j = 0; j < m.paidFeature.length; ++j) {
                    d.paidFeature[j] = $root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature.toObject(m.paidFeature[j], o);
                }
            }
            return d;
        };

        SubscriptionsSyncV2Action.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SubscriptionsSyncV2Action.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SubscriptionsSyncV2Action";
        };

        SubscriptionsSyncV2Action.PaidFeature = (function() {

            function PaidFeature(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaidFeature.prototype.name = null;
            PaidFeature.prototype.enabled = null;
            PaidFeature.prototype.limit = null;
            PaidFeature.prototype.expirationTime = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PaidFeature.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PaidFeature.prototype, "_enabled", {
                get: $util.oneOfGetter($oneOfFields = ["enabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PaidFeature.prototype, "_limit", {
                get: $util.oneOfGetter($oneOfFields = ["limit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PaidFeature.prototype, "_expirationTime", {
                get: $util.oneOfGetter($oneOfFields = ["expirationTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            PaidFeature.create = function create(properties) {
                return new PaidFeature(properties);
            };

            PaidFeature.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(10).string(m.name);
                if (m.enabled != null && Object.hasOwnProperty.call(m, "enabled"))
                    w.uint32(16).bool(m.enabled);
                if (m.limit != null && Object.hasOwnProperty.call(m, "limit"))
                    w.uint32(24).int32(m.limit);
                if (m.expirationTime != null && Object.hasOwnProperty.call(m, "expirationTime"))
                    w.uint32(32).int64(m.expirationTime);
                return w;
            };

            PaidFeature.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            m.enabled = r.bool();
                            break;
                        }
                    case 3: {
                            m.limit = r.int32();
                            break;
                        }
                    case 4: {
                            m.expirationTime = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            PaidFeature.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASyncAction.SubscriptionsSyncV2Action.PaidFeature();
                if (d.name != null) {
                    m.name = String(d.name);
                }
                if (d.enabled != null) {
                    m.enabled = Boolean(d.enabled);
                }
                if (d.limit != null) {
                    m.limit = d.limit | 0;
                }
                if (d.expirationTime != null) {
                    if ($util.Long)
                        (m.expirationTime = $util.Long.fromValue(d.expirationTime)).unsigned = false;
                    else if (typeof d.expirationTime === "string")
                        m.expirationTime = parseInt(d.expirationTime, 10);
                    else if (typeof d.expirationTime === "number")
                        m.expirationTime = d.expirationTime;
                    else if (typeof d.expirationTime === "object")
                        m.expirationTime = new $util.LongBits(d.expirationTime.low >>> 0, d.expirationTime.high >>> 0).toNumber();
                }
                return m;
            };

            PaidFeature.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.name != null && m.hasOwnProperty("name")) {
                    d.name = m.name;
                    if (o.oneofs)
                        d._name = "name";
                }
                if (m.enabled != null && m.hasOwnProperty("enabled")) {
                    d.enabled = m.enabled;
                    if (o.oneofs)
                        d._enabled = "enabled";
                }
                if (m.limit != null && m.hasOwnProperty("limit")) {
                    d.limit = m.limit;
                    if (o.oneofs)
                        d._limit = "limit";
                }
                if (m.expirationTime != null && m.hasOwnProperty("expirationTime")) {
                    if (typeof m.expirationTime === "number")
                        d.expirationTime = o.longs === String ? String(m.expirationTime) : m.expirationTime;
                    else
                        d.expirationTime = o.longs === String ? $util.Long.prototype.toString.call(m.expirationTime) : o.longs === Number ? new $util.LongBits(m.expirationTime.low >>> 0, m.expirationTime.high >>> 0).toNumber() : m.expirationTime;
                    if (o.oneofs)
                        d._expirationTime = "expirationTime";
                }
                return d;
            };

            PaidFeature.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PaidFeature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASyncAction.SubscriptionsSyncV2Action.PaidFeature";
            };

            return PaidFeature;
        })();

        SubscriptionsSyncV2Action.SubscriptionInfo = (function() {

            function SubscriptionInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SubscriptionInfo.prototype.ID = null;
            SubscriptionInfo.prototype.tier = null;
            SubscriptionInfo.prototype.status = null;
            SubscriptionInfo.prototype.startTime = null;
            SubscriptionInfo.prototype.endTime = null;
            SubscriptionInfo.prototype.isPlatformChanged = null;
            SubscriptionInfo.prototype.source = null;
            SubscriptionInfo.prototype.creationTime = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_ID", {
                get: $util.oneOfGetter($oneOfFields = ["ID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_tier", {
                get: $util.oneOfGetter($oneOfFields = ["tier"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_startTime", {
                get: $util.oneOfGetter($oneOfFields = ["startTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_endTime", {
                get: $util.oneOfGetter($oneOfFields = ["endTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_isPlatformChanged", {
                get: $util.oneOfGetter($oneOfFields = ["isPlatformChanged"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SubscriptionInfo.prototype, "_creationTime", {
                get: $util.oneOfGetter($oneOfFields = ["creationTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            SubscriptionInfo.create = function create(properties) {
                return new SubscriptionInfo(properties);
            };

            SubscriptionInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                    w.uint32(10).string(m.ID);
                if (m.tier != null && Object.hasOwnProperty.call(m, "tier"))
                    w.uint32(16).int32(m.tier);
                if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                    w.uint32(26).string(m.status);
                if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
                    w.uint32(32).int64(m.startTime);
                if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                    w.uint32(40).int64(m.endTime);
                if (m.isPlatformChanged != null && Object.hasOwnProperty.call(m, "isPlatformChanged"))
                    w.uint32(48).bool(m.isPlatformChanged);
                if (m.source != null && Object.hasOwnProperty.call(m, "source"))
                    w.uint32(58).string(m.source);
                if (m.creationTime != null && Object.hasOwnProperty.call(m, "creationTime"))
                    w.uint32(64).int64(m.creationTime);
                return w;
            };

            SubscriptionInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.ID = r.string();
                            break;
                        }
                    case 2: {
                            m.tier = r.int32();
                            break;
                        }
                    case 3: {
                            m.status = r.string();
                            break;
                        }
                    case 4: {
                            m.startTime = r.int64();
                            break;
                        }
                    case 5: {
                            m.endTime = r.int64();
                            break;
                        }
                    case 6: {
                            m.isPlatformChanged = r.bool();
                            break;
                        }
                    case 7: {
                            m.source = r.string();
                            break;
                        }
                    case 8: {
                            m.creationTime = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            SubscriptionInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo();
                if (d.ID != null) {
                    m.ID = String(d.ID);
                }
                if (d.tier != null) {
                    m.tier = d.tier | 0;
                }
                if (d.status != null) {
                    m.status = String(d.status);
                }
                if (d.startTime != null) {
                    if ($util.Long)
                        (m.startTime = $util.Long.fromValue(d.startTime)).unsigned = false;
                    else if (typeof d.startTime === "string")
                        m.startTime = parseInt(d.startTime, 10);
                    else if (typeof d.startTime === "number")
                        m.startTime = d.startTime;
                    else if (typeof d.startTime === "object")
                        m.startTime = new $util.LongBits(d.startTime.low >>> 0, d.startTime.high >>> 0).toNumber();
                }
                if (d.endTime != null) {
                    if ($util.Long)
                        (m.endTime = $util.Long.fromValue(d.endTime)).unsigned = false;
                    else if (typeof d.endTime === "string")
                        m.endTime = parseInt(d.endTime, 10);
                    else if (typeof d.endTime === "number")
                        m.endTime = d.endTime;
                    else if (typeof d.endTime === "object")
                        m.endTime = new $util.LongBits(d.endTime.low >>> 0, d.endTime.high >>> 0).toNumber();
                }
                if (d.isPlatformChanged != null) {
                    m.isPlatformChanged = Boolean(d.isPlatformChanged);
                }
                if (d.source != null) {
                    m.source = String(d.source);
                }
                if (d.creationTime != null) {
                    if ($util.Long)
                        (m.creationTime = $util.Long.fromValue(d.creationTime)).unsigned = false;
                    else if (typeof d.creationTime === "string")
                        m.creationTime = parseInt(d.creationTime, 10);
                    else if (typeof d.creationTime === "number")
                        m.creationTime = d.creationTime;
                    else if (typeof d.creationTime === "object")
                        m.creationTime = new $util.LongBits(d.creationTime.low >>> 0, d.creationTime.high >>> 0).toNumber();
                }
                return m;
            };

            SubscriptionInfo.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.ID != null && m.hasOwnProperty("ID")) {
                    d.ID = m.ID;
                    if (o.oneofs)
                        d._ID = "ID";
                }
                if (m.tier != null && m.hasOwnProperty("tier")) {
                    d.tier = m.tier;
                    if (o.oneofs)
                        d._tier = "tier";
                }
                if (m.status != null && m.hasOwnProperty("status")) {
                    d.status = m.status;
                    if (o.oneofs)
                        d._status = "status";
                }
                if (m.startTime != null && m.hasOwnProperty("startTime")) {
                    if (typeof m.startTime === "number")
                        d.startTime = o.longs === String ? String(m.startTime) : m.startTime;
                    else
                        d.startTime = o.longs === String ? $util.Long.prototype.toString.call(m.startTime) : o.longs === Number ? new $util.LongBits(m.startTime.low >>> 0, m.startTime.high >>> 0).toNumber() : m.startTime;
                    if (o.oneofs)
                        d._startTime = "startTime";
                }
                if (m.endTime != null && m.hasOwnProperty("endTime")) {
                    if (typeof m.endTime === "number")
                        d.endTime = o.longs === String ? String(m.endTime) : m.endTime;
                    else
                        d.endTime = o.longs === String ? $util.Long.prototype.toString.call(m.endTime) : o.longs === Number ? new $util.LongBits(m.endTime.low >>> 0, m.endTime.high >>> 0).toNumber() : m.endTime;
                    if (o.oneofs)
                        d._endTime = "endTime";
                }
                if (m.isPlatformChanged != null && m.hasOwnProperty("isPlatformChanged")) {
                    d.isPlatformChanged = m.isPlatformChanged;
                    if (o.oneofs)
                        d._isPlatformChanged = "isPlatformChanged";
                }
                if (m.source != null && m.hasOwnProperty("source")) {
                    d.source = m.source;
                    if (o.oneofs)
                        d._source = "source";
                }
                if (m.creationTime != null && m.hasOwnProperty("creationTime")) {
                    if (typeof m.creationTime === "number")
                        d.creationTime = o.longs === String ? String(m.creationTime) : m.creationTime;
                    else
                        d.creationTime = o.longs === String ? $util.Long.prototype.toString.call(m.creationTime) : o.longs === Number ? new $util.LongBits(m.creationTime.low >>> 0, m.creationTime.high >>> 0).toNumber() : m.creationTime;
                    if (o.oneofs)
                        d._creationTime = "creationTime";
                }
                return d;
            };

            SubscriptionInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SubscriptionInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASyncAction.SubscriptionsSyncV2Action.SubscriptionInfo";
            };

            return SubscriptionInfo;
        })();

        return SubscriptionsSyncV2Action;
    })();

    WASyncAction.CustomerDataAction = (function() {

        function CustomerDataAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CustomerDataAction.prototype.chatJID = null;
        CustomerDataAction.prototype.contactType = null;
        CustomerDataAction.prototype.email = null;
        CustomerDataAction.prototype.altPhoneNumbers = null;
        CustomerDataAction.prototype.birthday = null;
        CustomerDataAction.prototype.address = null;
        CustomerDataAction.prototype.acquisitionSource = null;
        CustomerDataAction.prototype.leadStage = null;
        CustomerDataAction.prototype.lastOrder = null;
        CustomerDataAction.prototype.createdAt = null;
        CustomerDataAction.prototype.modifiedAt = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_chatJID", {
            get: $util.oneOfGetter($oneOfFields = ["chatJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_contactType", {
            get: $util.oneOfGetter($oneOfFields = ["contactType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_email", {
            get: $util.oneOfGetter($oneOfFields = ["email"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_altPhoneNumbers", {
            get: $util.oneOfGetter($oneOfFields = ["altPhoneNumbers"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_birthday", {
            get: $util.oneOfGetter($oneOfFields = ["birthday"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_address", {
            get: $util.oneOfGetter($oneOfFields = ["address"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_acquisitionSource", {
            get: $util.oneOfGetter($oneOfFields = ["acquisitionSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_leadStage", {
            get: $util.oneOfGetter($oneOfFields = ["leadStage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_lastOrder", {
            get: $util.oneOfGetter($oneOfFields = ["lastOrder"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_createdAt", {
            get: $util.oneOfGetter($oneOfFields = ["createdAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomerDataAction.prototype, "_modifiedAt", {
            get: $util.oneOfGetter($oneOfFields = ["modifiedAt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CustomerDataAction.create = function create(properties) {
            return new CustomerDataAction(properties);
        };

        CustomerDataAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chatJID != null && Object.hasOwnProperty.call(m, "chatJID"))
                w.uint32(10).string(m.chatJID);
            if (m.contactType != null && Object.hasOwnProperty.call(m, "contactType"))
                w.uint32(16).int32(m.contactType);
            if (m.email != null && Object.hasOwnProperty.call(m, "email"))
                w.uint32(26).string(m.email);
            if (m.altPhoneNumbers != null && Object.hasOwnProperty.call(m, "altPhoneNumbers"))
                w.uint32(34).string(m.altPhoneNumbers);
            if (m.birthday != null && Object.hasOwnProperty.call(m, "birthday"))
                w.uint32(40).int64(m.birthday);
            if (m.address != null && Object.hasOwnProperty.call(m, "address"))
                w.uint32(50).string(m.address);
            if (m.acquisitionSource != null && Object.hasOwnProperty.call(m, "acquisitionSource"))
                w.uint32(56).int32(m.acquisitionSource);
            if (m.leadStage != null && Object.hasOwnProperty.call(m, "leadStage"))
                w.uint32(64).int32(m.leadStage);
            if (m.lastOrder != null && Object.hasOwnProperty.call(m, "lastOrder"))
                w.uint32(72).int64(m.lastOrder);
            if (m.createdAt != null && Object.hasOwnProperty.call(m, "createdAt"))
                w.uint32(80).int64(m.createdAt);
            if (m.modifiedAt != null && Object.hasOwnProperty.call(m, "modifiedAt"))
                w.uint32(88).int64(m.modifiedAt);
            return w;
        };

        CustomerDataAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CustomerDataAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.chatJID = r.string();
                        break;
                    }
                case 2: {
                        m.contactType = r.int32();
                        break;
                    }
                case 3: {
                        m.email = r.string();
                        break;
                    }
                case 4: {
                        m.altPhoneNumbers = r.string();
                        break;
                    }
                case 5: {
                        m.birthday = r.int64();
                        break;
                    }
                case 6: {
                        m.address = r.string();
                        break;
                    }
                case 7: {
                        m.acquisitionSource = r.int32();
                        break;
                    }
                case 8: {
                        m.leadStage = r.int32();
                        break;
                    }
                case 9: {
                        m.lastOrder = r.int64();
                        break;
                    }
                case 10: {
                        m.createdAt = r.int64();
                        break;
                    }
                case 11: {
                        m.modifiedAt = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CustomerDataAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CustomerDataAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CustomerDataAction();
            if (d.chatJID != null) {
                m.chatJID = String(d.chatJID);
            }
            if (d.contactType != null) {
                m.contactType = d.contactType | 0;
            }
            if (d.email != null) {
                m.email = String(d.email);
            }
            if (d.altPhoneNumbers != null) {
                m.altPhoneNumbers = String(d.altPhoneNumbers);
            }
            if (d.birthday != null) {
                if ($util.Long)
                    (m.birthday = $util.Long.fromValue(d.birthday)).unsigned = false;
                else if (typeof d.birthday === "string")
                    m.birthday = parseInt(d.birthday, 10);
                else if (typeof d.birthday === "number")
                    m.birthday = d.birthday;
                else if (typeof d.birthday === "object")
                    m.birthday = new $util.LongBits(d.birthday.low >>> 0, d.birthday.high >>> 0).toNumber();
            }
            if (d.address != null) {
                m.address = String(d.address);
            }
            if (d.acquisitionSource != null) {
                m.acquisitionSource = d.acquisitionSource | 0;
            }
            if (d.leadStage != null) {
                m.leadStage = d.leadStage | 0;
            }
            if (d.lastOrder != null) {
                if ($util.Long)
                    (m.lastOrder = $util.Long.fromValue(d.lastOrder)).unsigned = false;
                else if (typeof d.lastOrder === "string")
                    m.lastOrder = parseInt(d.lastOrder, 10);
                else if (typeof d.lastOrder === "number")
                    m.lastOrder = d.lastOrder;
                else if (typeof d.lastOrder === "object")
                    m.lastOrder = new $util.LongBits(d.lastOrder.low >>> 0, d.lastOrder.high >>> 0).toNumber();
            }
            if (d.createdAt != null) {
                if ($util.Long)
                    (m.createdAt = $util.Long.fromValue(d.createdAt)).unsigned = false;
                else if (typeof d.createdAt === "string")
                    m.createdAt = parseInt(d.createdAt, 10);
                else if (typeof d.createdAt === "number")
                    m.createdAt = d.createdAt;
                else if (typeof d.createdAt === "object")
                    m.createdAt = new $util.LongBits(d.createdAt.low >>> 0, d.createdAt.high >>> 0).toNumber();
            }
            if (d.modifiedAt != null) {
                if ($util.Long)
                    (m.modifiedAt = $util.Long.fromValue(d.modifiedAt)).unsigned = false;
                else if (typeof d.modifiedAt === "string")
                    m.modifiedAt = parseInt(d.modifiedAt, 10);
                else if (typeof d.modifiedAt === "number")
                    m.modifiedAt = d.modifiedAt;
                else if (typeof d.modifiedAt === "object")
                    m.modifiedAt = new $util.LongBits(d.modifiedAt.low >>> 0, d.modifiedAt.high >>> 0).toNumber();
            }
            return m;
        };

        CustomerDataAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.chatJID != null && m.hasOwnProperty("chatJID")) {
                d.chatJID = m.chatJID;
                if (o.oneofs)
                    d._chatJID = "chatJID";
            }
            if (m.contactType != null && m.hasOwnProperty("contactType")) {
                d.contactType = m.contactType;
                if (o.oneofs)
                    d._contactType = "contactType";
            }
            if (m.email != null && m.hasOwnProperty("email")) {
                d.email = m.email;
                if (o.oneofs)
                    d._email = "email";
            }
            if (m.altPhoneNumbers != null && m.hasOwnProperty("altPhoneNumbers")) {
                d.altPhoneNumbers = m.altPhoneNumbers;
                if (o.oneofs)
                    d._altPhoneNumbers = "altPhoneNumbers";
            }
            if (m.birthday != null && m.hasOwnProperty("birthday")) {
                if (typeof m.birthday === "number")
                    d.birthday = o.longs === String ? String(m.birthday) : m.birthday;
                else
                    d.birthday = o.longs === String ? $util.Long.prototype.toString.call(m.birthday) : o.longs === Number ? new $util.LongBits(m.birthday.low >>> 0, m.birthday.high >>> 0).toNumber() : m.birthday;
                if (o.oneofs)
                    d._birthday = "birthday";
            }
            if (m.address != null && m.hasOwnProperty("address")) {
                d.address = m.address;
                if (o.oneofs)
                    d._address = "address";
            }
            if (m.acquisitionSource != null && m.hasOwnProperty("acquisitionSource")) {
                d.acquisitionSource = m.acquisitionSource;
                if (o.oneofs)
                    d._acquisitionSource = "acquisitionSource";
            }
            if (m.leadStage != null && m.hasOwnProperty("leadStage")) {
                d.leadStage = m.leadStage;
                if (o.oneofs)
                    d._leadStage = "leadStage";
            }
            if (m.lastOrder != null && m.hasOwnProperty("lastOrder")) {
                if (typeof m.lastOrder === "number")
                    d.lastOrder = o.longs === String ? String(m.lastOrder) : m.lastOrder;
                else
                    d.lastOrder = o.longs === String ? $util.Long.prototype.toString.call(m.lastOrder) : o.longs === Number ? new $util.LongBits(m.lastOrder.low >>> 0, m.lastOrder.high >>> 0).toNumber() : m.lastOrder;
                if (o.oneofs)
                    d._lastOrder = "lastOrder";
            }
            if (m.createdAt != null && m.hasOwnProperty("createdAt")) {
                if (typeof m.createdAt === "number")
                    d.createdAt = o.longs === String ? String(m.createdAt) : m.createdAt;
                else
                    d.createdAt = o.longs === String ? $util.Long.prototype.toString.call(m.createdAt) : o.longs === Number ? new $util.LongBits(m.createdAt.low >>> 0, m.createdAt.high >>> 0).toNumber() : m.createdAt;
                if (o.oneofs)
                    d._createdAt = "createdAt";
            }
            if (m.modifiedAt != null && m.hasOwnProperty("modifiedAt")) {
                if (typeof m.modifiedAt === "number")
                    d.modifiedAt = o.longs === String ? String(m.modifiedAt) : m.modifiedAt;
                else
                    d.modifiedAt = o.longs === String ? $util.Long.prototype.toString.call(m.modifiedAt) : o.longs === Number ? new $util.LongBits(m.modifiedAt.low >>> 0, m.modifiedAt.high >>> 0).toNumber() : m.modifiedAt;
                if (o.oneofs)
                    d._modifiedAt = "modifiedAt";
            }
            return d;
        };

        CustomerDataAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CustomerDataAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CustomerDataAction";
        };

        return CustomerDataAction;
    })();

    WASyncAction.BusinessBroadcastInsightsAction = (function() {

        function BusinessBroadcastInsightsAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BusinessBroadcastInsightsAction.prototype.recipientCount = null;
        BusinessBroadcastInsightsAction.prototype.deliveredCount = null;
        BusinessBroadcastInsightsAction.prototype.readCount = null;
        BusinessBroadcastInsightsAction.prototype.repliedCount = null;
        BusinessBroadcastInsightsAction.prototype.quickReplyCount = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastInsightsAction.prototype, "_recipientCount", {
            get: $util.oneOfGetter($oneOfFields = ["recipientCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastInsightsAction.prototype, "_deliveredCount", {
            get: $util.oneOfGetter($oneOfFields = ["deliveredCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastInsightsAction.prototype, "_readCount", {
            get: $util.oneOfGetter($oneOfFields = ["readCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastInsightsAction.prototype, "_repliedCount", {
            get: $util.oneOfGetter($oneOfFields = ["repliedCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastInsightsAction.prototype, "_quickReplyCount", {
            get: $util.oneOfGetter($oneOfFields = ["quickReplyCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BusinessBroadcastInsightsAction.create = function create(properties) {
            return new BusinessBroadcastInsightsAction(properties);
        };

        BusinessBroadcastInsightsAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.recipientCount != null && Object.hasOwnProperty.call(m, "recipientCount"))
                w.uint32(8).int32(m.recipientCount);
            if (m.deliveredCount != null && Object.hasOwnProperty.call(m, "deliveredCount"))
                w.uint32(16).int32(m.deliveredCount);
            if (m.readCount != null && Object.hasOwnProperty.call(m, "readCount"))
                w.uint32(24).int32(m.readCount);
            if (m.repliedCount != null && Object.hasOwnProperty.call(m, "repliedCount"))
                w.uint32(32).int32(m.repliedCount);
            if (m.quickReplyCount != null && Object.hasOwnProperty.call(m, "quickReplyCount"))
                w.uint32(40).int32(m.quickReplyCount);
            return w;
        };

        BusinessBroadcastInsightsAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BusinessBroadcastInsightsAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.recipientCount = r.int32();
                        break;
                    }
                case 2: {
                        m.deliveredCount = r.int32();
                        break;
                    }
                case 3: {
                        m.readCount = r.int32();
                        break;
                    }
                case 4: {
                        m.repliedCount = r.int32();
                        break;
                    }
                case 5: {
                        m.quickReplyCount = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BusinessBroadcastInsightsAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BusinessBroadcastInsightsAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BusinessBroadcastInsightsAction();
            if (d.recipientCount != null) {
                m.recipientCount = d.recipientCount | 0;
            }
            if (d.deliveredCount != null) {
                m.deliveredCount = d.deliveredCount | 0;
            }
            if (d.readCount != null) {
                m.readCount = d.readCount | 0;
            }
            if (d.repliedCount != null) {
                m.repliedCount = d.repliedCount | 0;
            }
            if (d.quickReplyCount != null) {
                m.quickReplyCount = d.quickReplyCount | 0;
            }
            return m;
        };

        BusinessBroadcastInsightsAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.recipientCount != null && m.hasOwnProperty("recipientCount")) {
                d.recipientCount = m.recipientCount;
                if (o.oneofs)
                    d._recipientCount = "recipientCount";
            }
            if (m.deliveredCount != null && m.hasOwnProperty("deliveredCount")) {
                d.deliveredCount = m.deliveredCount;
                if (o.oneofs)
                    d._deliveredCount = "deliveredCount";
            }
            if (m.readCount != null && m.hasOwnProperty("readCount")) {
                d.readCount = m.readCount;
                if (o.oneofs)
                    d._readCount = "readCount";
            }
            if (m.repliedCount != null && m.hasOwnProperty("repliedCount")) {
                d.repliedCount = m.repliedCount;
                if (o.oneofs)
                    d._repliedCount = "repliedCount";
            }
            if (m.quickReplyCount != null && m.hasOwnProperty("quickReplyCount")) {
                d.quickReplyCount = m.quickReplyCount;
                if (o.oneofs)
                    d._quickReplyCount = "quickReplyCount";
            }
            return d;
        };

        BusinessBroadcastInsightsAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BusinessBroadcastInsightsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BusinessBroadcastInsightsAction";
        };

        return BusinessBroadcastInsightsAction;
    })();

    WASyncAction.AutoOrganizeBusinessChatSetting = (function() {

        function AutoOrganizeBusinessChatSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AutoOrganizeBusinessChatSetting.prototype.autoOrganize = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AutoOrganizeBusinessChatSetting.prototype, "_autoOrganize", {
            get: $util.oneOfGetter($oneOfFields = ["autoOrganize"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AutoOrganizeBusinessChatSetting.create = function create(properties) {
            return new AutoOrganizeBusinessChatSetting(properties);
        };

        AutoOrganizeBusinessChatSetting.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.autoOrganize != null && Object.hasOwnProperty.call(m, "autoOrganize"))
                w.uint32(8).bool(m.autoOrganize);
            return w;
        };

        AutoOrganizeBusinessChatSetting.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.AutoOrganizeBusinessChatSetting();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.autoOrganize = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AutoOrganizeBusinessChatSetting.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.AutoOrganizeBusinessChatSetting)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.AutoOrganizeBusinessChatSetting();
            if (d.autoOrganize != null) {
                m.autoOrganize = Boolean(d.autoOrganize);
            }
            return m;
        };

        AutoOrganizeBusinessChatSetting.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.autoOrganize != null && m.hasOwnProperty("autoOrganize")) {
                d.autoOrganize = m.autoOrganize;
                if (o.oneofs)
                    d._autoOrganize = "autoOrganize";
            }
            return d;
        };

        AutoOrganizeBusinessChatSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AutoOrganizeBusinessChatSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.AutoOrganizeBusinessChatSetting";
        };

        return AutoOrganizeBusinessChatSetting;
    })();

    WASyncAction.NctSaltSyncAction = (function() {

        function NctSaltSyncAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NctSaltSyncAction.prototype.salt = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NctSaltSyncAction.prototype, "_salt", {
            get: $util.oneOfGetter($oneOfFields = ["salt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        NctSaltSyncAction.create = function create(properties) {
            return new NctSaltSyncAction(properties);
        };

        NctSaltSyncAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.salt != null && Object.hasOwnProperty.call(m, "salt"))
                w.uint32(10).bytes(m.salt);
            return w;
        };

        NctSaltSyncAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.NctSaltSyncAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.salt = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        NctSaltSyncAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.NctSaltSyncAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.NctSaltSyncAction();
            if (d.salt != null) {
                if (typeof d.salt === "string")
                    $util.base64.decode(d.salt, m.salt = $util.newBuffer($util.base64.length(d.salt)), 0);
                else if (d.salt.length >= 0)
                    m.salt = d.salt;
            }
            return m;
        };

        NctSaltSyncAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.salt != null && m.hasOwnProperty("salt")) {
                d.salt = o.bytes === String ? $util.base64.encode(m.salt, 0, m.salt.length) : o.bytes === Array ? Array.prototype.slice.call(m.salt) : m.salt;
                if (o.oneofs)
                    d._salt = "salt";
            }
            return d;
        };

        NctSaltSyncAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        NctSaltSyncAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.NctSaltSyncAction";
        };

        return NctSaltSyncAction;
    })();

    WASyncAction.ThreadPinAction = (function() {

        function ThreadPinAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ThreadPinAction.prototype.pinned = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ThreadPinAction.prototype, "_pinned", {
            get: $util.oneOfGetter($oneOfFields = ["pinned"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ThreadPinAction.create = function create(properties) {
            return new ThreadPinAction(properties);
        };

        ThreadPinAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pinned != null && Object.hasOwnProperty.call(m, "pinned"))
                w.uint32(8).bool(m.pinned);
            return w;
        };

        ThreadPinAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ThreadPinAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.pinned = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ThreadPinAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ThreadPinAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ThreadPinAction();
            if (d.pinned != null) {
                m.pinned = Boolean(d.pinned);
            }
            return m;
        };

        ThreadPinAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.pinned != null && m.hasOwnProperty("pinned")) {
                d.pinned = m.pinned;
                if (o.oneofs)
                    d._pinned = "pinned";
            }
            return d;
        };

        ThreadPinAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ThreadPinAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ThreadPinAction";
        };

        return ThreadPinAction;
    })();

    WASyncAction.AiThreadRenameAction = (function() {

        function AiThreadRenameAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AiThreadRenameAction.prototype.newTitle = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AiThreadRenameAction.prototype, "_newTitle", {
            get: $util.oneOfGetter($oneOfFields = ["newTitle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AiThreadRenameAction.create = function create(properties) {
            return new AiThreadRenameAction(properties);
        };

        AiThreadRenameAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.newTitle != null && Object.hasOwnProperty.call(m, "newTitle"))
                w.uint32(10).string(m.newTitle);
            return w;
        };

        AiThreadRenameAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.AiThreadRenameAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.newTitle = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AiThreadRenameAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.AiThreadRenameAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.AiThreadRenameAction();
            if (d.newTitle != null) {
                m.newTitle = String(d.newTitle);
            }
            return m;
        };

        AiThreadRenameAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.newTitle != null && m.hasOwnProperty("newTitle")) {
                d.newTitle = m.newTitle;
                if (o.oneofs)
                    d._newTitle = "newTitle";
            }
            return d;
        };

        AiThreadRenameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AiThreadRenameAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.AiThreadRenameAction";
        };

        return AiThreadRenameAction;
    })();

    WASyncAction.StatusPostOptInNotificationPreferencesAction = (function() {

        function StatusPostOptInNotificationPreferencesAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StatusPostOptInNotificationPreferencesAction.prototype.enabled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusPostOptInNotificationPreferencesAction.prototype, "_enabled", {
            get: $util.oneOfGetter($oneOfFields = ["enabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        StatusPostOptInNotificationPreferencesAction.create = function create(properties) {
            return new StatusPostOptInNotificationPreferencesAction(properties);
        };

        StatusPostOptInNotificationPreferencesAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.enabled != null && Object.hasOwnProperty.call(m, "enabled"))
                w.uint32(8).bool(m.enabled);
            return w;
        };

        StatusPostOptInNotificationPreferencesAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.StatusPostOptInNotificationPreferencesAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.enabled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        StatusPostOptInNotificationPreferencesAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.StatusPostOptInNotificationPreferencesAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.StatusPostOptInNotificationPreferencesAction();
            if (d.enabled != null) {
                m.enabled = Boolean(d.enabled);
            }
            return m;
        };

        StatusPostOptInNotificationPreferencesAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.enabled != null && m.hasOwnProperty("enabled")) {
                d.enabled = m.enabled;
                if (o.oneofs)
                    d._enabled = "enabled";
            }
            return d;
        };

        StatusPostOptInNotificationPreferencesAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        StatusPostOptInNotificationPreferencesAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.StatusPostOptInNotificationPreferencesAction";
        };

        return StatusPostOptInNotificationPreferencesAction;
    })();

    WASyncAction.BroadcastListParticipant = (function() {

        function BroadcastListParticipant(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BroadcastListParticipant.prototype.lidJID = null;
        BroadcastListParticipant.prototype.pnJID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BroadcastListParticipant.prototype, "_lidJID", {
            get: $util.oneOfGetter($oneOfFields = ["lidJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BroadcastListParticipant.prototype, "_pnJID", {
            get: $util.oneOfGetter($oneOfFields = ["pnJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BroadcastListParticipant.create = function create(properties) {
            return new BroadcastListParticipant(properties);
        };

        BroadcastListParticipant.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.lidJID != null && Object.hasOwnProperty.call(m, "lidJID"))
                w.uint32(10).string(m.lidJID);
            if (m.pnJID != null && Object.hasOwnProperty.call(m, "pnJID"))
                w.uint32(18).string(m.pnJID);
            return w;
        };

        BroadcastListParticipant.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BroadcastListParticipant();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.lidJID = r.string();
                        break;
                    }
                case 2: {
                        m.pnJID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BroadcastListParticipant.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BroadcastListParticipant)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BroadcastListParticipant();
            if (d.lidJID != null) {
                m.lidJID = String(d.lidJID);
            }
            if (d.pnJID != null) {
                m.pnJID = String(d.pnJID);
            }
            return m;
        };

        BroadcastListParticipant.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.lidJID != null && m.hasOwnProperty("lidJID")) {
                d.lidJID = m.lidJID;
                if (o.oneofs)
                    d._lidJID = "lidJID";
            }
            if (m.pnJID != null && m.hasOwnProperty("pnJID")) {
                d.pnJID = m.pnJID;
                if (o.oneofs)
                    d._pnJID = "pnJID";
            }
            return d;
        };

        BroadcastListParticipant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BroadcastListParticipant.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BroadcastListParticipant";
        };

        return BroadcastListParticipant;
    })();

    WASyncAction.BusinessBroadcastCampaignAction = (function() {

        function BusinessBroadcastCampaignAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BusinessBroadcastCampaignAction.prototype.deviceID = null;
        BusinessBroadcastCampaignAction.prototype.adID = null;
        BusinessBroadcastCampaignAction.prototype.name = null;
        BusinessBroadcastCampaignAction.prototype.msgID = null;
        BusinessBroadcastCampaignAction.prototype.broadcastJID = null;
        BusinessBroadcastCampaignAction.prototype.reservedQuota = null;
        BusinessBroadcastCampaignAction.prototype.scheduledTimestamp = null;
        BusinessBroadcastCampaignAction.prototype.createTimestamp = null;
        BusinessBroadcastCampaignAction.prototype.status = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_deviceID", {
            get: $util.oneOfGetter($oneOfFields = ["deviceID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_adID", {
            get: $util.oneOfGetter($oneOfFields = ["adID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_msgID", {
            get: $util.oneOfGetter($oneOfFields = ["msgID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_broadcastJID", {
            get: $util.oneOfGetter($oneOfFields = ["broadcastJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_reservedQuota", {
            get: $util.oneOfGetter($oneOfFields = ["reservedQuota"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_scheduledTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["scheduledTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_createTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["createTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastCampaignAction.prototype, "_status", {
            get: $util.oneOfGetter($oneOfFields = ["status"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BusinessBroadcastCampaignAction.create = function create(properties) {
            return new BusinessBroadcastCampaignAction(properties);
        };

        BusinessBroadcastCampaignAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.deviceID != null && Object.hasOwnProperty.call(m, "deviceID"))
                w.uint32(8).int32(m.deviceID);
            if (m.adID != null && Object.hasOwnProperty.call(m, "adID"))
                w.uint32(18).string(m.adID);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(26).string(m.name);
            if (m.msgID != null && Object.hasOwnProperty.call(m, "msgID"))
                w.uint32(34).string(m.msgID);
            if (m.broadcastJID != null && Object.hasOwnProperty.call(m, "broadcastJID"))
                w.uint32(42).string(m.broadcastJID);
            if (m.reservedQuota != null && Object.hasOwnProperty.call(m, "reservedQuota"))
                w.uint32(48).int32(m.reservedQuota);
            if (m.scheduledTimestamp != null && Object.hasOwnProperty.call(m, "scheduledTimestamp"))
                w.uint32(56).int64(m.scheduledTimestamp);
            if (m.createTimestamp != null && Object.hasOwnProperty.call(m, "createTimestamp"))
                w.uint32(64).int64(m.createTimestamp);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(72).int32(m.status);
            return w;
        };

        BusinessBroadcastCampaignAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BusinessBroadcastCampaignAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deviceID = r.int32();
                        break;
                    }
                case 2: {
                        m.adID = r.string();
                        break;
                    }
                case 3: {
                        m.name = r.string();
                        break;
                    }
                case 4: {
                        m.msgID = r.string();
                        break;
                    }
                case 5: {
                        m.broadcastJID = r.string();
                        break;
                    }
                case 6: {
                        m.reservedQuota = r.int32();
                        break;
                    }
                case 7: {
                        m.scheduledTimestamp = r.int64();
                        break;
                    }
                case 8: {
                        m.createTimestamp = r.int64();
                        break;
                    }
                case 9: {
                        m.status = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BusinessBroadcastCampaignAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BusinessBroadcastCampaignAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BusinessBroadcastCampaignAction();
            if (d.deviceID != null) {
                m.deviceID = d.deviceID | 0;
            }
            if (d.adID != null) {
                m.adID = String(d.adID);
            }
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.msgID != null) {
                m.msgID = String(d.msgID);
            }
            if (d.broadcastJID != null) {
                m.broadcastJID = String(d.broadcastJID);
            }
            if (d.reservedQuota != null) {
                m.reservedQuota = d.reservedQuota | 0;
            }
            if (d.scheduledTimestamp != null) {
                if ($util.Long)
                    (m.scheduledTimestamp = $util.Long.fromValue(d.scheduledTimestamp)).unsigned = false;
                else if (typeof d.scheduledTimestamp === "string")
                    m.scheduledTimestamp = parseInt(d.scheduledTimestamp, 10);
                else if (typeof d.scheduledTimestamp === "number")
                    m.scheduledTimestamp = d.scheduledTimestamp;
                else if (typeof d.scheduledTimestamp === "object")
                    m.scheduledTimestamp = new $util.LongBits(d.scheduledTimestamp.low >>> 0, d.scheduledTimestamp.high >>> 0).toNumber();
            }
            if (d.createTimestamp != null) {
                if ($util.Long)
                    (m.createTimestamp = $util.Long.fromValue(d.createTimestamp)).unsigned = false;
                else if (typeof d.createTimestamp === "string")
                    m.createTimestamp = parseInt(d.createTimestamp, 10);
                else if (typeof d.createTimestamp === "number")
                    m.createTimestamp = d.createTimestamp;
                else if (typeof d.createTimestamp === "object")
                    m.createTimestamp = new $util.LongBits(d.createTimestamp.low >>> 0, d.createTimestamp.high >>> 0).toNumber();
            }
            switch (d.status) {
            default:
                if (typeof d.status === "number") {
                    m.status = d.status;
                    break;
                }
                break;
            case "DRAFT":
            case 1:
                m.status = 1;
                break;
            case "SCHEDULED":
            case 2:
                m.status = 2;
                break;
            case "PROCESSING":
            case 3:
                m.status = 3;
                break;
            case "FAILED":
            case 4:
                m.status = 4;
                break;
            case "SENT":
            case 5:
                m.status = 5;
                break;
            }
            return m;
        };

        BusinessBroadcastCampaignAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.deviceID != null && m.hasOwnProperty("deviceID")) {
                d.deviceID = m.deviceID;
                if (o.oneofs)
                    d._deviceID = "deviceID";
            }
            if (m.adID != null && m.hasOwnProperty("adID")) {
                d.adID = m.adID;
                if (o.oneofs)
                    d._adID = "adID";
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d._name = "name";
            }
            if (m.msgID != null && m.hasOwnProperty("msgID")) {
                d.msgID = m.msgID;
                if (o.oneofs)
                    d._msgID = "msgID";
            }
            if (m.broadcastJID != null && m.hasOwnProperty("broadcastJID")) {
                d.broadcastJID = m.broadcastJID;
                if (o.oneofs)
                    d._broadcastJID = "broadcastJID";
            }
            if (m.reservedQuota != null && m.hasOwnProperty("reservedQuota")) {
                d.reservedQuota = m.reservedQuota;
                if (o.oneofs)
                    d._reservedQuota = "reservedQuota";
            }
            if (m.scheduledTimestamp != null && m.hasOwnProperty("scheduledTimestamp")) {
                if (typeof m.scheduledTimestamp === "number")
                    d.scheduledTimestamp = o.longs === String ? String(m.scheduledTimestamp) : m.scheduledTimestamp;
                else
                    d.scheduledTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.scheduledTimestamp) : o.longs === Number ? new $util.LongBits(m.scheduledTimestamp.low >>> 0, m.scheduledTimestamp.high >>> 0).toNumber() : m.scheduledTimestamp;
                if (o.oneofs)
                    d._scheduledTimestamp = "scheduledTimestamp";
            }
            if (m.createTimestamp != null && m.hasOwnProperty("createTimestamp")) {
                if (typeof m.createTimestamp === "number")
                    d.createTimestamp = o.longs === String ? String(m.createTimestamp) : m.createTimestamp;
                else
                    d.createTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.createTimestamp) : o.longs === Number ? new $util.LongBits(m.createTimestamp.low >>> 0, m.createTimestamp.high >>> 0).toNumber() : m.createTimestamp;
                if (o.oneofs)
                    d._createTimestamp = "createTimestamp";
            }
            if (m.status != null && m.hasOwnProperty("status")) {
                d.status = o.enums === String ? $root.WASyncAction.BusinessBroadcastCampaignStatus[m.status] === undefined ? m.status : $root.WASyncAction.BusinessBroadcastCampaignStatus[m.status] : m.status;
                if (o.oneofs)
                    d._status = "status";
            }
            return d;
        };

        BusinessBroadcastCampaignAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BusinessBroadcastCampaignAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BusinessBroadcastCampaignAction";
        };

        return BusinessBroadcastCampaignAction;
    })();

    WASyncAction.BusinessBroadcastListAction = (function() {

        function BusinessBroadcastListAction(p) {
            this.participants = [];
            this.labelIDs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BusinessBroadcastListAction.prototype.deleted = null;
        BusinessBroadcastListAction.prototype.participants = $util.emptyArray;
        BusinessBroadcastListAction.prototype.listName = null;
        BusinessBroadcastListAction.prototype.labelIDs = $util.emptyArray;
        BusinessBroadcastListAction.prototype.audienceExpression = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastListAction.prototype, "_deleted", {
            get: $util.oneOfGetter($oneOfFields = ["deleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastListAction.prototype, "_listName", {
            get: $util.oneOfGetter($oneOfFields = ["listName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastListAction.prototype, "_audienceExpression", {
            get: $util.oneOfGetter($oneOfFields = ["audienceExpression"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BusinessBroadcastListAction.create = function create(properties) {
            return new BusinessBroadcastListAction(properties);
        };

        BusinessBroadcastListAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                w.uint32(8).bool(m.deleted);
            if (m.participants != null && m.participants.length) {
                for (var i = 0; i < m.participants.length; ++i)
                    $root.WASyncAction.BroadcastListParticipant.encode(m.participants[i], w.uint32(18).fork()).ldelim();
            }
            if (m.listName != null && Object.hasOwnProperty.call(m, "listName"))
                w.uint32(26).string(m.listName);
            if (m.labelIDs != null && m.labelIDs.length) {
                for (var i = 0; i < m.labelIDs.length; ++i)
                    w.uint32(34).string(m.labelIDs[i]);
            }
            if (m.audienceExpression != null && Object.hasOwnProperty.call(m, "audienceExpression"))
                w.uint32(42).string(m.audienceExpression);
            return w;
        };

        BusinessBroadcastListAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BusinessBroadcastListAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deleted = r.bool();
                        break;
                    }
                case 2: {
                        if (!(m.participants && m.participants.length))
                            m.participants = [];
                        m.participants.push($root.WASyncAction.BroadcastListParticipant.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        m.listName = r.string();
                        break;
                    }
                case 4: {
                        if (!(m.labelIDs && m.labelIDs.length))
                            m.labelIDs = [];
                        m.labelIDs.push(r.string());
                        break;
                    }
                case 5: {
                        m.audienceExpression = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BusinessBroadcastListAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BusinessBroadcastListAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BusinessBroadcastListAction();
            if (d.deleted != null) {
                m.deleted = Boolean(d.deleted);
            }
            if (d.participants) {
                if (!Array.isArray(d.participants))
                    throw TypeError(".WASyncAction.BusinessBroadcastListAction.participants: array expected");
                m.participants = [];
                for (var i = 0; i < d.participants.length; ++i) {
                    if (typeof d.participants[i] !== "object")
                        throw TypeError(".WASyncAction.BusinessBroadcastListAction.participants: object expected");
                    m.participants[i] = $root.WASyncAction.BroadcastListParticipant.fromObject(d.participants[i], n + 1);
                }
            }
            if (d.listName != null) {
                m.listName = String(d.listName);
            }
            if (d.labelIDs) {
                if (!Array.isArray(d.labelIDs))
                    throw TypeError(".WASyncAction.BusinessBroadcastListAction.labelIDs: array expected");
                m.labelIDs = [];
                for (var i = 0; i < d.labelIDs.length; ++i) {
                    m.labelIDs[i] = String(d.labelIDs[i]);
                }
            }
            if (d.audienceExpression != null) {
                m.audienceExpression = String(d.audienceExpression);
            }
            return m;
        };

        BusinessBroadcastListAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.participants = [];
                d.labelIDs = [];
            }
            if (m.deleted != null && m.hasOwnProperty("deleted")) {
                d.deleted = m.deleted;
                if (o.oneofs)
                    d._deleted = "deleted";
            }
            if (m.participants && m.participants.length) {
                d.participants = [];
                for (var j = 0; j < m.participants.length; ++j) {
                    d.participants[j] = $root.WASyncAction.BroadcastListParticipant.toObject(m.participants[j], o);
                }
            }
            if (m.listName != null && m.hasOwnProperty("listName")) {
                d.listName = m.listName;
                if (o.oneofs)
                    d._listName = "listName";
            }
            if (m.labelIDs && m.labelIDs.length) {
                d.labelIDs = [];
                for (var j = 0; j < m.labelIDs.length; ++j) {
                    d.labelIDs[j] = m.labelIDs[j];
                }
            }
            if (m.audienceExpression != null && m.hasOwnProperty("audienceExpression")) {
                d.audienceExpression = m.audienceExpression;
                if (o.oneofs)
                    d._audienceExpression = "audienceExpression";
            }
            return d;
        };

        BusinessBroadcastListAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BusinessBroadcastListAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BusinessBroadcastListAction";
        };

        return BusinessBroadcastListAction;
    })();

    WASyncAction.BusinessBroadcastAssociationAction = (function() {

        function BusinessBroadcastAssociationAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BusinessBroadcastAssociationAction.prototype.deleted = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BusinessBroadcastAssociationAction.prototype, "_deleted", {
            get: $util.oneOfGetter($oneOfFields = ["deleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BusinessBroadcastAssociationAction.create = function create(properties) {
            return new BusinessBroadcastAssociationAction(properties);
        };

        BusinessBroadcastAssociationAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                w.uint32(8).bool(m.deleted);
            return w;
        };

        BusinessBroadcastAssociationAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BusinessBroadcastAssociationAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deleted = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BusinessBroadcastAssociationAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BusinessBroadcastAssociationAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BusinessBroadcastAssociationAction();
            if (d.deleted != null) {
                m.deleted = Boolean(d.deleted);
            }
            return m;
        };

        BusinessBroadcastAssociationAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.deleted != null && m.hasOwnProperty("deleted")) {
                d.deleted = m.deleted;
                if (o.oneofs)
                    d._deleted = "deleted";
            }
            return d;
        };

        BusinessBroadcastAssociationAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BusinessBroadcastAssociationAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BusinessBroadcastAssociationAction";
        };

        return BusinessBroadcastAssociationAction;
    })();

    WASyncAction.CtwaPerCustomerDataSharingAction = (function() {

        function CtwaPerCustomerDataSharingAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CtwaPerCustomerDataSharingAction.prototype.isCtwaPerCustomerDataSharingEnabled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CtwaPerCustomerDataSharingAction.prototype, "_isCtwaPerCustomerDataSharingEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isCtwaPerCustomerDataSharingEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CtwaPerCustomerDataSharingAction.create = function create(properties) {
            return new CtwaPerCustomerDataSharingAction(properties);
        };

        CtwaPerCustomerDataSharingAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isCtwaPerCustomerDataSharingEnabled != null && Object.hasOwnProperty.call(m, "isCtwaPerCustomerDataSharingEnabled"))
                w.uint32(8).bool(m.isCtwaPerCustomerDataSharingEnabled);
            return w;
        };

        CtwaPerCustomerDataSharingAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CtwaPerCustomerDataSharingAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isCtwaPerCustomerDataSharingEnabled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CtwaPerCustomerDataSharingAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CtwaPerCustomerDataSharingAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CtwaPerCustomerDataSharingAction();
            if (d.isCtwaPerCustomerDataSharingEnabled != null) {
                m.isCtwaPerCustomerDataSharingEnabled = Boolean(d.isCtwaPerCustomerDataSharingEnabled);
            }
            return m;
        };

        CtwaPerCustomerDataSharingAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isCtwaPerCustomerDataSharingEnabled != null && m.hasOwnProperty("isCtwaPerCustomerDataSharingEnabled")) {
                d.isCtwaPerCustomerDataSharingEnabled = m.isCtwaPerCustomerDataSharingEnabled;
                if (o.oneofs)
                    d._isCtwaPerCustomerDataSharingEnabled = "isCtwaPerCustomerDataSharingEnabled";
            }
            return d;
        };

        CtwaPerCustomerDataSharingAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CtwaPerCustomerDataSharingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CtwaPerCustomerDataSharingAction";
        };

        return CtwaPerCustomerDataSharingAction;
    })();

    WASyncAction.OutContactAction = (function() {

        function OutContactAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        OutContactAction.prototype.fullName = null;
        OutContactAction.prototype.firstName = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(OutContactAction.prototype, "_fullName", {
            get: $util.oneOfGetter($oneOfFields = ["fullName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(OutContactAction.prototype, "_firstName", {
            get: $util.oneOfGetter($oneOfFields = ["firstName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        OutContactAction.create = function create(properties) {
            return new OutContactAction(properties);
        };

        OutContactAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.fullName != null && Object.hasOwnProperty.call(m, "fullName"))
                w.uint32(10).string(m.fullName);
            if (m.firstName != null && Object.hasOwnProperty.call(m, "firstName"))
                w.uint32(18).string(m.firstName);
            return w;
        };

        OutContactAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.OutContactAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.fullName = r.string();
                        break;
                    }
                case 2: {
                        m.firstName = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        OutContactAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.OutContactAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.OutContactAction();
            if (d.fullName != null) {
                m.fullName = String(d.fullName);
            }
            if (d.firstName != null) {
                m.firstName = String(d.firstName);
            }
            return m;
        };

        OutContactAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.fullName != null && m.hasOwnProperty("fullName")) {
                d.fullName = m.fullName;
                if (o.oneofs)
                    d._fullName = "fullName";
            }
            if (m.firstName != null && m.hasOwnProperty("firstName")) {
                d.firstName = m.firstName;
                if (o.oneofs)
                    d._firstName = "firstName";
            }
            return d;
        };

        OutContactAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        OutContactAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.OutContactAction";
        };

        return OutContactAction;
    })();

    WASyncAction.LidContactAction = (function() {

        function LidContactAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LidContactAction.prototype.fullName = null;
        LidContactAction.prototype.firstName = null;
        LidContactAction.prototype.username = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LidContactAction.prototype, "_fullName", {
            get: $util.oneOfGetter($oneOfFields = ["fullName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LidContactAction.prototype, "_firstName", {
            get: $util.oneOfGetter($oneOfFields = ["firstName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LidContactAction.prototype, "_username", {
            get: $util.oneOfGetter($oneOfFields = ["username"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LidContactAction.create = function create(properties) {
            return new LidContactAction(properties);
        };

        LidContactAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.fullName != null && Object.hasOwnProperty.call(m, "fullName"))
                w.uint32(10).string(m.fullName);
            if (m.firstName != null && Object.hasOwnProperty.call(m, "firstName"))
                w.uint32(18).string(m.firstName);
            if (m.username != null && Object.hasOwnProperty.call(m, "username"))
                w.uint32(26).string(m.username);
            return w;
        };

        LidContactAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.LidContactAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.fullName = r.string();
                        break;
                    }
                case 2: {
                        m.firstName = r.string();
                        break;
                    }
                case 3: {
                        m.username = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LidContactAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.LidContactAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.LidContactAction();
            if (d.fullName != null) {
                m.fullName = String(d.fullName);
            }
            if (d.firstName != null) {
                m.firstName = String(d.firstName);
            }
            if (d.username != null) {
                m.username = String(d.username);
            }
            return m;
        };

        LidContactAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.fullName != null && m.hasOwnProperty("fullName")) {
                d.fullName = m.fullName;
                if (o.oneofs)
                    d._fullName = "fullName";
            }
            if (m.firstName != null && m.hasOwnProperty("firstName")) {
                d.firstName = m.firstName;
                if (o.oneofs)
                    d._firstName = "firstName";
            }
            if (m.username != null && m.hasOwnProperty("username")) {
                d.username = m.username;
                if (o.oneofs)
                    d._username = "username";
            }
            return d;
        };

        LidContactAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LidContactAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.LidContactAction";
        };

        return LidContactAction;
    })();

    WASyncAction.FavoritesAction = (function() {

        function FavoritesAction(p) {
            this.favorites = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        FavoritesAction.prototype.favorites = $util.emptyArray;

        FavoritesAction.create = function create(properties) {
            return new FavoritesAction(properties);
        };

        FavoritesAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.favorites != null && m.favorites.length) {
                for (var i = 0; i < m.favorites.length; ++i)
                    $root.WASyncAction.FavoritesAction.Favorite.encode(m.favorites[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        FavoritesAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.FavoritesAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.favorites && m.favorites.length))
                            m.favorites = [];
                        m.favorites.push($root.WASyncAction.FavoritesAction.Favorite.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        FavoritesAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.FavoritesAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.FavoritesAction();
            if (d.favorites) {
                if (!Array.isArray(d.favorites))
                    throw TypeError(".WASyncAction.FavoritesAction.favorites: array expected");
                m.favorites = [];
                for (var i = 0; i < d.favorites.length; ++i) {
                    if (typeof d.favorites[i] !== "object")
                        throw TypeError(".WASyncAction.FavoritesAction.favorites: object expected");
                    m.favorites[i] = $root.WASyncAction.FavoritesAction.Favorite.fromObject(d.favorites[i], n + 1);
                }
            }
            return m;
        };

        FavoritesAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.favorites = [];
            }
            if (m.favorites && m.favorites.length) {
                d.favorites = [];
                for (var j = 0; j < m.favorites.length; ++j) {
                    d.favorites[j] = $root.WASyncAction.FavoritesAction.Favorite.toObject(m.favorites[j], o);
                }
            }
            return d;
        };

        FavoritesAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        FavoritesAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.FavoritesAction";
        };

        FavoritesAction.Favorite = (function() {

            function Favorite(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Favorite.prototype.ID = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Favorite.prototype, "_ID", {
                get: $util.oneOfGetter($oneOfFields = ["ID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Favorite.create = function create(properties) {
                return new Favorite(properties);
            };

            Favorite.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                    w.uint32(10).string(m.ID);
                return w;
            };

            Favorite.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.FavoritesAction.Favorite();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.ID = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            Favorite.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASyncAction.FavoritesAction.Favorite)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASyncAction.FavoritesAction.Favorite();
                if (d.ID != null) {
                    m.ID = String(d.ID);
                }
                return m;
            };

            Favorite.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.ID != null && m.hasOwnProperty("ID")) {
                    d.ID = m.ID;
                    if (o.oneofs)
                        d._ID = "ID";
                }
                return d;
            };

            Favorite.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Favorite.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASyncAction.FavoritesAction.Favorite";
            };

            return Favorite;
        })();

        return FavoritesAction;
    })();

    WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction = (function() {

        function PrivacySettingChannelsPersonalisedRecommendationAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrivacySettingChannelsPersonalisedRecommendationAction.prototype.isUserOptedOut = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrivacySettingChannelsPersonalisedRecommendationAction.prototype, "_isUserOptedOut", {
            get: $util.oneOfGetter($oneOfFields = ["isUserOptedOut"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PrivacySettingChannelsPersonalisedRecommendationAction.create = function create(properties) {
            return new PrivacySettingChannelsPersonalisedRecommendationAction(properties);
        };

        PrivacySettingChannelsPersonalisedRecommendationAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isUserOptedOut != null && Object.hasOwnProperty.call(m, "isUserOptedOut"))
                w.uint32(8).bool(m.isUserOptedOut);
            return w;
        };

        PrivacySettingChannelsPersonalisedRecommendationAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isUserOptedOut = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrivacySettingChannelsPersonalisedRecommendationAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction();
            if (d.isUserOptedOut != null) {
                m.isUserOptedOut = Boolean(d.isUserOptedOut);
            }
            return m;
        };

        PrivacySettingChannelsPersonalisedRecommendationAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isUserOptedOut != null && m.hasOwnProperty("isUserOptedOut")) {
                d.isUserOptedOut = m.isUserOptedOut;
                if (o.oneofs)
                    d._isUserOptedOut = "isUserOptedOut";
            }
            return d;
        };

        PrivacySettingChannelsPersonalisedRecommendationAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrivacySettingChannelsPersonalisedRecommendationAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PrivacySettingChannelsPersonalisedRecommendationAction";
        };

        return PrivacySettingChannelsPersonalisedRecommendationAction;
    })();

    WASyncAction.PrivacySettingDisableLinkPreviewsAction = (function() {

        function PrivacySettingDisableLinkPreviewsAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrivacySettingDisableLinkPreviewsAction.prototype.isPreviewsDisabled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrivacySettingDisableLinkPreviewsAction.prototype, "_isPreviewsDisabled", {
            get: $util.oneOfGetter($oneOfFields = ["isPreviewsDisabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PrivacySettingDisableLinkPreviewsAction.create = function create(properties) {
            return new PrivacySettingDisableLinkPreviewsAction(properties);
        };

        PrivacySettingDisableLinkPreviewsAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isPreviewsDisabled != null && Object.hasOwnProperty.call(m, "isPreviewsDisabled"))
                w.uint32(8).bool(m.isPreviewsDisabled);
            return w;
        };

        PrivacySettingDisableLinkPreviewsAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isPreviewsDisabled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrivacySettingDisableLinkPreviewsAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PrivacySettingDisableLinkPreviewsAction();
            if (d.isPreviewsDisabled != null) {
                m.isPreviewsDisabled = Boolean(d.isPreviewsDisabled);
            }
            return m;
        };

        PrivacySettingDisableLinkPreviewsAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isPreviewsDisabled != null && m.hasOwnProperty("isPreviewsDisabled")) {
                d.isPreviewsDisabled = m.isPreviewsDisabled;
                if (o.oneofs)
                    d._isPreviewsDisabled = "isPreviewsDisabled";
            }
            return d;
        };

        PrivacySettingDisableLinkPreviewsAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrivacySettingDisableLinkPreviewsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PrivacySettingDisableLinkPreviewsAction";
        };

        return PrivacySettingDisableLinkPreviewsAction;
    })();

    WASyncAction.WamoUserIdentifierAction = (function() {

        function WamoUserIdentifierAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WamoUserIdentifierAction.prototype.identifier = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(WamoUserIdentifierAction.prototype, "_identifier", {
            get: $util.oneOfGetter($oneOfFields = ["identifier"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        WamoUserIdentifierAction.create = function create(properties) {
            return new WamoUserIdentifierAction(properties);
        };

        WamoUserIdentifierAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.identifier != null && Object.hasOwnProperty.call(m, "identifier"))
                w.uint32(10).string(m.identifier);
            return w;
        };

        WamoUserIdentifierAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.WamoUserIdentifierAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.identifier = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        WamoUserIdentifierAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.WamoUserIdentifierAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.WamoUserIdentifierAction();
            if (d.identifier != null) {
                m.identifier = String(d.identifier);
            }
            return m;
        };

        WamoUserIdentifierAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.identifier != null && m.hasOwnProperty("identifier")) {
                d.identifier = m.identifier;
                if (o.oneofs)
                    d._identifier = "identifier";
            }
            return d;
        };

        WamoUserIdentifierAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        WamoUserIdentifierAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.WamoUserIdentifierAction";
        };

        return WamoUserIdentifierAction;
    })();

    WASyncAction.LockChatAction = (function() {

        function LockChatAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LockChatAction.prototype.locked = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LockChatAction.prototype, "_locked", {
            get: $util.oneOfGetter($oneOfFields = ["locked"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LockChatAction.create = function create(properties) {
            return new LockChatAction(properties);
        };

        LockChatAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.locked != null && Object.hasOwnProperty.call(m, "locked"))
                w.uint32(8).bool(m.locked);
            return w;
        };

        LockChatAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.LockChatAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.locked = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LockChatAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.LockChatAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.LockChatAction();
            if (d.locked != null) {
                m.locked = Boolean(d.locked);
            }
            return m;
        };

        LockChatAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.locked != null && m.hasOwnProperty("locked")) {
                d.locked = m.locked;
                if (o.oneofs)
                    d._locked = "locked";
            }
            return d;
        };

        LockChatAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LockChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.LockChatAction";
        };

        return LockChatAction;
    })();

    WASyncAction.CustomPaymentMethodsAction = (function() {

        function CustomPaymentMethodsAction(p) {
            this.customPaymentMethods = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CustomPaymentMethodsAction.prototype.customPaymentMethods = $util.emptyArray;

        CustomPaymentMethodsAction.create = function create(properties) {
            return new CustomPaymentMethodsAction(properties);
        };

        CustomPaymentMethodsAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.customPaymentMethods != null && m.customPaymentMethods.length) {
                for (var i = 0; i < m.customPaymentMethods.length; ++i)
                    $root.WASyncAction.CustomPaymentMethod.encode(m.customPaymentMethods[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        CustomPaymentMethodsAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CustomPaymentMethodsAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.customPaymentMethods && m.customPaymentMethods.length))
                            m.customPaymentMethods = [];
                        m.customPaymentMethods.push($root.WASyncAction.CustomPaymentMethod.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CustomPaymentMethodsAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CustomPaymentMethodsAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CustomPaymentMethodsAction();
            if (d.customPaymentMethods) {
                if (!Array.isArray(d.customPaymentMethods))
                    throw TypeError(".WASyncAction.CustomPaymentMethodsAction.customPaymentMethods: array expected");
                m.customPaymentMethods = [];
                for (var i = 0; i < d.customPaymentMethods.length; ++i) {
                    if (typeof d.customPaymentMethods[i] !== "object")
                        throw TypeError(".WASyncAction.CustomPaymentMethodsAction.customPaymentMethods: object expected");
                    m.customPaymentMethods[i] = $root.WASyncAction.CustomPaymentMethod.fromObject(d.customPaymentMethods[i], n + 1);
                }
            }
            return m;
        };

        CustomPaymentMethodsAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.customPaymentMethods = [];
            }
            if (m.customPaymentMethods && m.customPaymentMethods.length) {
                d.customPaymentMethods = [];
                for (var j = 0; j < m.customPaymentMethods.length; ++j) {
                    d.customPaymentMethods[j] = $root.WASyncAction.CustomPaymentMethod.toObject(m.customPaymentMethods[j], o);
                }
            }
            return d;
        };

        CustomPaymentMethodsAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CustomPaymentMethodsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CustomPaymentMethodsAction";
        };

        return CustomPaymentMethodsAction;
    })();

    WASyncAction.CustomPaymentMethod = (function() {

        function CustomPaymentMethod(p) {
            this.metadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CustomPaymentMethod.prototype.credentialID = null;
        CustomPaymentMethod.prototype.country = null;
        CustomPaymentMethod.prototype.type = null;
        CustomPaymentMethod.prototype.metadata = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomPaymentMethod.prototype, "_credentialID", {
            get: $util.oneOfGetter($oneOfFields = ["credentialID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomPaymentMethod.prototype, "_country", {
            get: $util.oneOfGetter($oneOfFields = ["country"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomPaymentMethod.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CustomPaymentMethod.create = function create(properties) {
            return new CustomPaymentMethod(properties);
        };

        CustomPaymentMethod.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.credentialID != null && Object.hasOwnProperty.call(m, "credentialID"))
                w.uint32(10).string(m.credentialID);
            if (m.country != null && Object.hasOwnProperty.call(m, "country"))
                w.uint32(18).string(m.country);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(26).string(m.type);
            if (m.metadata != null && m.metadata.length) {
                for (var i = 0; i < m.metadata.length; ++i)
                    $root.WASyncAction.CustomPaymentMethodMetadata.encode(m.metadata[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        CustomPaymentMethod.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CustomPaymentMethod();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.credentialID = r.string();
                        break;
                    }
                case 2: {
                        m.country = r.string();
                        break;
                    }
                case 3: {
                        m.type = r.string();
                        break;
                    }
                case 4: {
                        if (!(m.metadata && m.metadata.length))
                            m.metadata = [];
                        m.metadata.push($root.WASyncAction.CustomPaymentMethodMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CustomPaymentMethod.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CustomPaymentMethod)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CustomPaymentMethod();
            if (d.credentialID != null) {
                m.credentialID = String(d.credentialID);
            }
            if (d.country != null) {
                m.country = String(d.country);
            }
            if (d.type != null) {
                m.type = String(d.type);
            }
            if (d.metadata) {
                if (!Array.isArray(d.metadata))
                    throw TypeError(".WASyncAction.CustomPaymentMethod.metadata: array expected");
                m.metadata = [];
                for (var i = 0; i < d.metadata.length; ++i) {
                    if (typeof d.metadata[i] !== "object")
                        throw TypeError(".WASyncAction.CustomPaymentMethod.metadata: object expected");
                    m.metadata[i] = $root.WASyncAction.CustomPaymentMethodMetadata.fromObject(d.metadata[i], n + 1);
                }
            }
            return m;
        };

        CustomPaymentMethod.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.metadata = [];
            }
            if (m.credentialID != null && m.hasOwnProperty("credentialID")) {
                d.credentialID = m.credentialID;
                if (o.oneofs)
                    d._credentialID = "credentialID";
            }
            if (m.country != null && m.hasOwnProperty("country")) {
                d.country = m.country;
                if (o.oneofs)
                    d._country = "country";
            }
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.metadata && m.metadata.length) {
                d.metadata = [];
                for (var j = 0; j < m.metadata.length; ++j) {
                    d.metadata[j] = $root.WASyncAction.CustomPaymentMethodMetadata.toObject(m.metadata[j], o);
                }
            }
            return d;
        };

        CustomPaymentMethod.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CustomPaymentMethod.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CustomPaymentMethod";
        };

        return CustomPaymentMethod;
    })();

    WASyncAction.CustomPaymentMethodMetadata = (function() {

        function CustomPaymentMethodMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CustomPaymentMethodMetadata.prototype.key = null;
        CustomPaymentMethodMetadata.prototype.value = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomPaymentMethodMetadata.prototype, "_key", {
            get: $util.oneOfGetter($oneOfFields = ["key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CustomPaymentMethodMetadata.prototype, "_value", {
            get: $util.oneOfGetter($oneOfFields = ["value"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CustomPaymentMethodMetadata.create = function create(properties) {
            return new CustomPaymentMethodMetadata(properties);
        };

        CustomPaymentMethodMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                w.uint32(10).string(m.key);
            if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                w.uint32(18).string(m.value);
            return w;
        };

        CustomPaymentMethodMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CustomPaymentMethodMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.key = r.string();
                        break;
                    }
                case 2: {
                        m.value = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CustomPaymentMethodMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CustomPaymentMethodMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CustomPaymentMethodMetadata();
            if (d.key != null) {
                m.key = String(d.key);
            }
            if (d.value != null) {
                m.value = String(d.value);
            }
            return m;
        };

        CustomPaymentMethodMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.key != null && m.hasOwnProperty("key")) {
                d.key = m.key;
                if (o.oneofs)
                    d._key = "key";
            }
            if (m.value != null && m.hasOwnProperty("value")) {
                d.value = m.value;
                if (o.oneofs)
                    d._value = "value";
            }
            return d;
        };

        CustomPaymentMethodMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CustomPaymentMethodMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CustomPaymentMethodMetadata";
        };

        return CustomPaymentMethodMetadata;
    })();

    WASyncAction.PaymentInfoAction = (function() {

        function PaymentInfoAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PaymentInfoAction.prototype.cpi = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PaymentInfoAction.prototype, "_cpi", {
            get: $util.oneOfGetter($oneOfFields = ["cpi"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PaymentInfoAction.create = function create(properties) {
            return new PaymentInfoAction(properties);
        };

        PaymentInfoAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.cpi != null && Object.hasOwnProperty.call(m, "cpi"))
                w.uint32(10).string(m.cpi);
            return w;
        };

        PaymentInfoAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PaymentInfoAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.cpi = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PaymentInfoAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PaymentInfoAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PaymentInfoAction();
            if (d.cpi != null) {
                m.cpi = String(d.cpi);
            }
            return m;
        };

        PaymentInfoAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.cpi != null && m.hasOwnProperty("cpi")) {
                d.cpi = m.cpi;
                if (o.oneofs)
                    d._cpi = "cpi";
            }
            return d;
        };

        PaymentInfoAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PaymentInfoAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PaymentInfoAction";
        };

        return PaymentInfoAction;
    })();

    WASyncAction.LabelReorderingAction = (function() {

        function LabelReorderingAction(p) {
            this.sortedLabelIDs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LabelReorderingAction.prototype.sortedLabelIDs = $util.emptyArray;

        LabelReorderingAction.create = function create(properties) {
            return new LabelReorderingAction(properties);
        };

        LabelReorderingAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sortedLabelIDs != null && m.sortedLabelIDs.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.sortedLabelIDs.length; ++i)
                    w.int32(m.sortedLabelIDs[i]);
                w.ldelim();
            }
            return w;
        };

        LabelReorderingAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.LabelReorderingAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.sortedLabelIDs && m.sortedLabelIDs.length))
                            m.sortedLabelIDs = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.sortedLabelIDs.push(r.int32());
                        } else
                            m.sortedLabelIDs.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LabelReorderingAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.LabelReorderingAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.LabelReorderingAction();
            if (d.sortedLabelIDs) {
                if (!Array.isArray(d.sortedLabelIDs))
                    throw TypeError(".WASyncAction.LabelReorderingAction.sortedLabelIDs: array expected");
                m.sortedLabelIDs = [];
                for (var i = 0; i < d.sortedLabelIDs.length; ++i) {
                    m.sortedLabelIDs[i] = d.sortedLabelIDs[i] | 0;
                }
            }
            return m;
        };

        LabelReorderingAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.sortedLabelIDs = [];
            }
            if (m.sortedLabelIDs && m.sortedLabelIDs.length) {
                d.sortedLabelIDs = [];
                for (var j = 0; j < m.sortedLabelIDs.length; ++j) {
                    d.sortedLabelIDs[j] = m.sortedLabelIDs[j];
                }
            }
            return d;
        };

        LabelReorderingAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LabelReorderingAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.LabelReorderingAction";
        };

        return LabelReorderingAction;
    })();

    WASyncAction.DeleteIndividualCallLogAction = (function() {

        function DeleteIndividualCallLogAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeleteIndividualCallLogAction.prototype.peerJID = null;
        DeleteIndividualCallLogAction.prototype.isIncoming = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeleteIndividualCallLogAction.prototype, "_peerJID", {
            get: $util.oneOfGetter($oneOfFields = ["peerJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeleteIndividualCallLogAction.prototype, "_isIncoming", {
            get: $util.oneOfGetter($oneOfFields = ["isIncoming"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeleteIndividualCallLogAction.create = function create(properties) {
            return new DeleteIndividualCallLogAction(properties);
        };

        DeleteIndividualCallLogAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.peerJID != null && Object.hasOwnProperty.call(m, "peerJID"))
                w.uint32(10).string(m.peerJID);
            if (m.isIncoming != null && Object.hasOwnProperty.call(m, "isIncoming"))
                w.uint32(16).bool(m.isIncoming);
            return w;
        };

        DeleteIndividualCallLogAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.DeleteIndividualCallLogAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.peerJID = r.string();
                        break;
                    }
                case 2: {
                        m.isIncoming = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeleteIndividualCallLogAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.DeleteIndividualCallLogAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.DeleteIndividualCallLogAction();
            if (d.peerJID != null) {
                m.peerJID = String(d.peerJID);
            }
            if (d.isIncoming != null) {
                m.isIncoming = Boolean(d.isIncoming);
            }
            return m;
        };

        DeleteIndividualCallLogAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.peerJID != null && m.hasOwnProperty("peerJID")) {
                d.peerJID = m.peerJID;
                if (o.oneofs)
                    d._peerJID = "peerJID";
            }
            if (m.isIncoming != null && m.hasOwnProperty("isIncoming")) {
                d.isIncoming = m.isIncoming;
                if (o.oneofs)
                    d._isIncoming = "isIncoming";
            }
            return d;
        };

        DeleteIndividualCallLogAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeleteIndividualCallLogAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.DeleteIndividualCallLogAction";
        };

        return DeleteIndividualCallLogAction;
    })();

    WASyncAction.BotWelcomeRequestAction = (function() {

        function BotWelcomeRequestAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotWelcomeRequestAction.prototype.isSent = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotWelcomeRequestAction.prototype, "_isSent", {
            get: $util.oneOfGetter($oneOfFields = ["isSent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotWelcomeRequestAction.create = function create(properties) {
            return new BotWelcomeRequestAction(properties);
        };

        BotWelcomeRequestAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isSent != null && Object.hasOwnProperty.call(m, "isSent"))
                w.uint32(8).bool(m.isSent);
            return w;
        };

        BotWelcomeRequestAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.BotWelcomeRequestAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isSent = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotWelcomeRequestAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.BotWelcomeRequestAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.BotWelcomeRequestAction();
            if (d.isSent != null) {
                m.isSent = Boolean(d.isSent);
            }
            return m;
        };

        BotWelcomeRequestAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isSent != null && m.hasOwnProperty("isSent")) {
                d.isSent = m.isSent;
                if (o.oneofs)
                    d._isSent = "isSent";
            }
            return d;
        };

        BotWelcomeRequestAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotWelcomeRequestAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.BotWelcomeRequestAction";
        };

        return BotWelcomeRequestAction;
    })();

    WASyncAction.NewsletterSavedInterestsAction = (function() {

        function NewsletterSavedInterestsAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NewsletterSavedInterestsAction.prototype.newsletterSavedInterests = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NewsletterSavedInterestsAction.prototype, "_newsletterSavedInterests", {
            get: $util.oneOfGetter($oneOfFields = ["newsletterSavedInterests"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        NewsletterSavedInterestsAction.create = function create(properties) {
            return new NewsletterSavedInterestsAction(properties);
        };

        NewsletterSavedInterestsAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.newsletterSavedInterests != null && Object.hasOwnProperty.call(m, "newsletterSavedInterests"))
                w.uint32(10).string(m.newsletterSavedInterests);
            return w;
        };

        NewsletterSavedInterestsAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.NewsletterSavedInterestsAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.newsletterSavedInterests = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        NewsletterSavedInterestsAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.NewsletterSavedInterestsAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.NewsletterSavedInterestsAction();
            if (d.newsletterSavedInterests != null) {
                m.newsletterSavedInterests = String(d.newsletterSavedInterests);
            }
            return m;
        };

        NewsletterSavedInterestsAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.newsletterSavedInterests != null && m.hasOwnProperty("newsletterSavedInterests")) {
                d.newsletterSavedInterests = m.newsletterSavedInterests;
                if (o.oneofs)
                    d._newsletterSavedInterests = "newsletterSavedInterests";
            }
            return d;
        };

        NewsletterSavedInterestsAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        NewsletterSavedInterestsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.NewsletterSavedInterestsAction";
        };

        return NewsletterSavedInterestsAction;
    })();

    WASyncAction.MusicUserIdAction = (function() {

        function MusicUserIdAction(p) {
            this.musicUserIdMap = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MusicUserIdAction.prototype.musicUserID = null;
        MusicUserIdAction.prototype.musicUserIdMap = $util.emptyObject;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MusicUserIdAction.prototype, "_musicUserID", {
            get: $util.oneOfGetter($oneOfFields = ["musicUserID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MusicUserIdAction.create = function create(properties) {
            return new MusicUserIdAction(properties);
        };

        MusicUserIdAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.musicUserID != null && Object.hasOwnProperty.call(m, "musicUserID"))
                w.uint32(10).string(m.musicUserID);
            if (m.musicUserIdMap != null && Object.hasOwnProperty.call(m, "musicUserIdMap")) {
                for (var ks = Object.keys(m.musicUserIdMap), i = 0; i < ks.length; ++i) {
                    w.uint32(18).fork().uint32(10).string(ks[i]).uint32(18).bytes(m.musicUserIdMap[ks[i]]).ldelim();
                }
            }
            return w;
        };

        MusicUserIdAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MusicUserIdAction(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.musicUserID = r.string();
                        break;
                    }
                case 2: {
                        if (m.musicUserIdMap === $util.emptyObject)
                            m.musicUserIdMap = {};
                        var c2 = r.uint32() + r.pos;
                        k = "";
                        value = [];
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.string();
                                break;
                            case 2:
                                value = r.bytes();
                                break;
                            default:
                                r.skipType(tag2 & 7, n);
                                break;
                            }
                        }
                        if (k === "__proto__")
                            $util.makeProp(m.musicUserIdMap, k);
                        m.musicUserIdMap[k] = value;
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MusicUserIdAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MusicUserIdAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MusicUserIdAction();
            if (d.musicUserID != null) {
                m.musicUserID = String(d.musicUserID);
            }
            if (d.musicUserIdMap) {
                if (typeof d.musicUserIdMap !== "object")
                    throw TypeError(".WASyncAction.MusicUserIdAction.musicUserIdMap: object expected");
                m.musicUserIdMap = {};
                for (var ks = Object.keys(d.musicUserIdMap), i = 0; i < ks.length; ++i) {
                    if (ks[i] === "__proto__")
                        $util.makeProp(m.musicUserIdMap, ks[i]);
                    if (typeof d.musicUserIdMap[ks[i]] === "string")
                        $util.base64.decode(d.musicUserIdMap[ks[i]], m.musicUserIdMap[ks[i]] = $util.newBuffer($util.base64.length(d.musicUserIdMap[ks[i]])), 0);
                    else if (d.musicUserIdMap[ks[i]].length >= 0)
                        m.musicUserIdMap[ks[i]] = d.musicUserIdMap[ks[i]];
                }
            }
            return m;
        };

        MusicUserIdAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.musicUserIdMap = {};
            }
            if (m.musicUserID != null && m.hasOwnProperty("musicUserID")) {
                d.musicUserID = m.musicUserID;
                if (o.oneofs)
                    d._musicUserID = "musicUserID";
            }
            var ks2;
            if (m.musicUserIdMap && (ks2 = Object.keys(m.musicUserIdMap)).length) {
                d.musicUserIdMap = {};
                for (var j = 0; j < ks2.length; ++j) {
                    if (ks2[j] === "__proto__")
                        $util.makeProp(d.musicUserIdMap, ks2[j]);
                    d.musicUserIdMap[ks2[j]] = o.bytes === String ? $util.base64.encode(m.musicUserIdMap[ks2[j]], 0, m.musicUserIdMap[ks2[j]].length) : o.bytes === Array ? Array.prototype.slice.call(m.musicUserIdMap[ks2[j]]) : m.musicUserIdMap[ks2[j]];
                }
            }
            return d;
        };

        MusicUserIdAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MusicUserIdAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MusicUserIdAction";
        };

        return MusicUserIdAction;
    })();

    WASyncAction.UGCBot = (function() {

        function UGCBot(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UGCBot.prototype.definition = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UGCBot.prototype, "_definition", {
            get: $util.oneOfGetter($oneOfFields = ["definition"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        UGCBot.create = function create(properties) {
            return new UGCBot(properties);
        };

        UGCBot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.definition != null && Object.hasOwnProperty.call(m, "definition"))
                w.uint32(10).bytes(m.definition);
            return w;
        };

        UGCBot.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.UGCBot();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.definition = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        UGCBot.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.UGCBot)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.UGCBot();
            if (d.definition != null) {
                if (typeof d.definition === "string")
                    $util.base64.decode(d.definition, m.definition = $util.newBuffer($util.base64.length(d.definition)), 0);
                else if (d.definition.length >= 0)
                    m.definition = d.definition;
            }
            return m;
        };

        UGCBot.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.definition != null && m.hasOwnProperty("definition")) {
                d.definition = o.bytes === String ? $util.base64.encode(m.definition, 0, m.definition.length) : o.bytes === Array ? Array.prototype.slice.call(m.definition) : m.definition;
                if (o.oneofs)
                    d._definition = "definition";
            }
            return d;
        };

        UGCBot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UGCBot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.UGCBot";
        };

        return UGCBot;
    })();

    WASyncAction.CallLogAction = (function() {

        function CallLogAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CallLogAction.prototype.callLogRecord = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CallLogAction.prototype, "_callLogRecord", {
            get: $util.oneOfGetter($oneOfFields = ["callLogRecord"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CallLogAction.create = function create(properties) {
            return new CallLogAction(properties);
        };

        CallLogAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.callLogRecord != null && Object.hasOwnProperty.call(m, "callLogRecord"))
                $root.WASyncAction.CallLogRecord.encode(m.callLogRecord, w.uint32(10).fork()).ldelim();
            return w;
        };

        CallLogAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.CallLogAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.callLogRecord = $root.WASyncAction.CallLogRecord.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CallLogAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.CallLogAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.CallLogAction();
            if (d.callLogRecord != null) {
                if (typeof d.callLogRecord !== "object")
                    throw TypeError(".WASyncAction.CallLogAction.callLogRecord: object expected");
                m.callLogRecord = $root.WASyncAction.CallLogRecord.fromObject(d.callLogRecord, n + 1);
            }
            return m;
        };

        CallLogAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.callLogRecord != null && m.hasOwnProperty("callLogRecord")) {
                d.callLogRecord = $root.WASyncAction.CallLogRecord.toObject(m.callLogRecord, o);
                if (o.oneofs)
                    d._callLogRecord = "callLogRecord";
            }
            return d;
        };

        CallLogAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CallLogAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.CallLogAction";
        };

        return CallLogAction;
    })();

    WASyncAction.PrivacySettingRelayAllCalls = (function() {

        function PrivacySettingRelayAllCalls(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrivacySettingRelayAllCalls.prototype.isEnabled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrivacySettingRelayAllCalls.prototype, "_isEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PrivacySettingRelayAllCalls.create = function create(properties) {
            return new PrivacySettingRelayAllCalls(properties);
        };

        PrivacySettingRelayAllCalls.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isEnabled != null && Object.hasOwnProperty.call(m, "isEnabled"))
                w.uint32(8).bool(m.isEnabled);
            return w;
        };

        PrivacySettingRelayAllCalls.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PrivacySettingRelayAllCalls();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isEnabled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrivacySettingRelayAllCalls.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PrivacySettingRelayAllCalls)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PrivacySettingRelayAllCalls();
            if (d.isEnabled != null) {
                m.isEnabled = Boolean(d.isEnabled);
            }
            return m;
        };

        PrivacySettingRelayAllCalls.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isEnabled != null && m.hasOwnProperty("isEnabled")) {
                d.isEnabled = m.isEnabled;
                if (o.oneofs)
                    d._isEnabled = "isEnabled";
            }
            return d;
        };

        PrivacySettingRelayAllCalls.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrivacySettingRelayAllCalls.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PrivacySettingRelayAllCalls";
        };

        return PrivacySettingRelayAllCalls;
    })();

    WASyncAction.DetectedOutcomesStatusAction = (function() {

        function DetectedOutcomesStatusAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DetectedOutcomesStatusAction.prototype.isEnabled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DetectedOutcomesStatusAction.prototype, "_isEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DetectedOutcomesStatusAction.create = function create(properties) {
            return new DetectedOutcomesStatusAction(properties);
        };

        DetectedOutcomesStatusAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isEnabled != null && Object.hasOwnProperty.call(m, "isEnabled"))
                w.uint32(8).bool(m.isEnabled);
            return w;
        };

        DetectedOutcomesStatusAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.DetectedOutcomesStatusAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isEnabled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DetectedOutcomesStatusAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.DetectedOutcomesStatusAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.DetectedOutcomesStatusAction();
            if (d.isEnabled != null) {
                m.isEnabled = Boolean(d.isEnabled);
            }
            return m;
        };

        DetectedOutcomesStatusAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isEnabled != null && m.hasOwnProperty("isEnabled")) {
                d.isEnabled = m.isEnabled;
                if (o.oneofs)
                    d._isEnabled = "isEnabled";
            }
            return d;
        };

        DetectedOutcomesStatusAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DetectedOutcomesStatusAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.DetectedOutcomesStatusAction";
        };

        return DetectedOutcomesStatusAction;
    })();

    WASyncAction.ExternalWebBetaAction = (function() {

        function ExternalWebBetaAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ExternalWebBetaAction.prototype.isOptIn = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalWebBetaAction.prototype, "_isOptIn", {
            get: $util.oneOfGetter($oneOfFields = ["isOptIn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ExternalWebBetaAction.create = function create(properties) {
            return new ExternalWebBetaAction(properties);
        };

        ExternalWebBetaAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isOptIn != null && Object.hasOwnProperty.call(m, "isOptIn"))
                w.uint32(8).bool(m.isOptIn);
            return w;
        };

        ExternalWebBetaAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ExternalWebBetaAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isOptIn = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ExternalWebBetaAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ExternalWebBetaAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ExternalWebBetaAction();
            if (d.isOptIn != null) {
                m.isOptIn = Boolean(d.isOptIn);
            }
            return m;
        };

        ExternalWebBetaAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isOptIn != null && m.hasOwnProperty("isOptIn")) {
                d.isOptIn = m.isOptIn;
                if (o.oneofs)
                    d._isOptIn = "isOptIn";
            }
            return d;
        };

        ExternalWebBetaAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ExternalWebBetaAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ExternalWebBetaAction";
        };

        return ExternalWebBetaAction;
    })();

    WASyncAction.MarketingMessageBroadcastAction = (function() {

        function MarketingMessageBroadcastAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MarketingMessageBroadcastAction.prototype.repliedCount = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarketingMessageBroadcastAction.prototype, "_repliedCount", {
            get: $util.oneOfGetter($oneOfFields = ["repliedCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MarketingMessageBroadcastAction.create = function create(properties) {
            return new MarketingMessageBroadcastAction(properties);
        };

        MarketingMessageBroadcastAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.repliedCount != null && Object.hasOwnProperty.call(m, "repliedCount"))
                w.uint32(8).int32(m.repliedCount);
            return w;
        };

        MarketingMessageBroadcastAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MarketingMessageBroadcastAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.repliedCount = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MarketingMessageBroadcastAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MarketingMessageBroadcastAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MarketingMessageBroadcastAction();
            if (d.repliedCount != null) {
                m.repliedCount = d.repliedCount | 0;
            }
            return m;
        };

        MarketingMessageBroadcastAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.repliedCount != null && m.hasOwnProperty("repliedCount")) {
                d.repliedCount = m.repliedCount;
                if (o.oneofs)
                    d._repliedCount = "repliedCount";
            }
            return d;
        };

        MarketingMessageBroadcastAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MarketingMessageBroadcastAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MarketingMessageBroadcastAction";
        };

        return MarketingMessageBroadcastAction;
    })();

    WASyncAction.PnForLidChatAction = (function() {

        function PnForLidChatAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PnForLidChatAction.prototype.pnJID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PnForLidChatAction.prototype, "_pnJID", {
            get: $util.oneOfGetter($oneOfFields = ["pnJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PnForLidChatAction.create = function create(properties) {
            return new PnForLidChatAction(properties);
        };

        PnForLidChatAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pnJID != null && Object.hasOwnProperty.call(m, "pnJID"))
                w.uint32(10).string(m.pnJID);
            return w;
        };

        PnForLidChatAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PnForLidChatAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.pnJID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PnForLidChatAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PnForLidChatAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PnForLidChatAction();
            if (d.pnJID != null) {
                m.pnJID = String(d.pnJID);
            }
            return m;
        };

        PnForLidChatAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.pnJID != null && m.hasOwnProperty("pnJID")) {
                d.pnJID = m.pnJID;
                if (o.oneofs)
                    d._pnJID = "pnJID";
            }
            return d;
        };

        PnForLidChatAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PnForLidChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PnForLidChatAction";
        };

        return PnForLidChatAction;
    })();

    WASyncAction.ChatAssignmentOpenedStatusAction = (function() {

        function ChatAssignmentOpenedStatusAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ChatAssignmentOpenedStatusAction.prototype.chatOpened = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatAssignmentOpenedStatusAction.prototype, "_chatOpened", {
            get: $util.oneOfGetter($oneOfFields = ["chatOpened"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ChatAssignmentOpenedStatusAction.create = function create(properties) {
            return new ChatAssignmentOpenedStatusAction(properties);
        };

        ChatAssignmentOpenedStatusAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chatOpened != null && Object.hasOwnProperty.call(m, "chatOpened"))
                w.uint32(8).bool(m.chatOpened);
            return w;
        };

        ChatAssignmentOpenedStatusAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ChatAssignmentOpenedStatusAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.chatOpened = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ChatAssignmentOpenedStatusAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ChatAssignmentOpenedStatusAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ChatAssignmentOpenedStatusAction();
            if (d.chatOpened != null) {
                m.chatOpened = Boolean(d.chatOpened);
            }
            return m;
        };

        ChatAssignmentOpenedStatusAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.chatOpened != null && m.hasOwnProperty("chatOpened")) {
                d.chatOpened = m.chatOpened;
                if (o.oneofs)
                    d._chatOpened = "chatOpened";
            }
            return d;
        };

        ChatAssignmentOpenedStatusAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ChatAssignmentOpenedStatusAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ChatAssignmentOpenedStatusAction";
        };

        return ChatAssignmentOpenedStatusAction;
    })();

    WASyncAction.ChatAssignmentAction = (function() {

        function ChatAssignmentAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ChatAssignmentAction.prototype.deviceAgentID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatAssignmentAction.prototype, "_deviceAgentID", {
            get: $util.oneOfGetter($oneOfFields = ["deviceAgentID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ChatAssignmentAction.create = function create(properties) {
            return new ChatAssignmentAction(properties);
        };

        ChatAssignmentAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.deviceAgentID != null && Object.hasOwnProperty.call(m, "deviceAgentID"))
                w.uint32(10).string(m.deviceAgentID);
            return w;
        };

        ChatAssignmentAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ChatAssignmentAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deviceAgentID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ChatAssignmentAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ChatAssignmentAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ChatAssignmentAction();
            if (d.deviceAgentID != null) {
                m.deviceAgentID = String(d.deviceAgentID);
            }
            return m;
        };

        ChatAssignmentAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.deviceAgentID != null && m.hasOwnProperty("deviceAgentID")) {
                d.deviceAgentID = m.deviceAgentID;
                if (o.oneofs)
                    d._deviceAgentID = "deviceAgentID";
            }
            return d;
        };

        ChatAssignmentAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ChatAssignmentAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ChatAssignmentAction";
        };

        return ChatAssignmentAction;
    })();

    WASyncAction.StickerAction = (function() {

        function StickerAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StickerAction.prototype.URL = null;
        StickerAction.prototype.fileEncSHA256 = null;
        StickerAction.prototype.mediaKey = null;
        StickerAction.prototype.mimetype = null;
        StickerAction.prototype.height = null;
        StickerAction.prototype.width = null;
        StickerAction.prototype.directPath = null;
        StickerAction.prototype.fileLength = null;
        StickerAction.prototype.isFavorite = null;
        StickerAction.prototype.deviceIDHint = null;
        StickerAction.prototype.isLottie = null;
        StickerAction.prototype.imageHash = null;
        StickerAction.prototype.isAvatarSticker = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_URL", {
            get: $util.oneOfGetter($oneOfFields = ["URL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_fileEncSHA256", {
            get: $util.oneOfGetter($oneOfFields = ["fileEncSHA256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_mediaKey", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_mimetype", {
            get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_height", {
            get: $util.oneOfGetter($oneOfFields = ["height"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_width", {
            get: $util.oneOfGetter($oneOfFields = ["width"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_fileLength", {
            get: $util.oneOfGetter($oneOfFields = ["fileLength"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_isFavorite", {
            get: $util.oneOfGetter($oneOfFields = ["isFavorite"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_deviceIDHint", {
            get: $util.oneOfGetter($oneOfFields = ["deviceIDHint"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_isLottie", {
            get: $util.oneOfGetter($oneOfFields = ["isLottie"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_imageHash", {
            get: $util.oneOfGetter($oneOfFields = ["imageHash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StickerAction.prototype, "_isAvatarSticker", {
            get: $util.oneOfGetter($oneOfFields = ["isAvatarSticker"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        StickerAction.create = function create(properties) {
            return new StickerAction(properties);
        };

        StickerAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.URL != null && Object.hasOwnProperty.call(m, "URL"))
                w.uint32(10).string(m.URL);
            if (m.fileEncSHA256 != null && Object.hasOwnProperty.call(m, "fileEncSHA256"))
                w.uint32(18).bytes(m.fileEncSHA256);
            if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                w.uint32(26).bytes(m.mediaKey);
            if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                w.uint32(34).string(m.mimetype);
            if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                w.uint32(40).uint32(m.height);
            if (m.width != null && Object.hasOwnProperty.call(m, "width"))
                w.uint32(48).uint32(m.width);
            if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(58).string(m.directPath);
            if (m.fileLength != null && Object.hasOwnProperty.call(m, "fileLength"))
                w.uint32(64).uint64(m.fileLength);
            if (m.isFavorite != null && Object.hasOwnProperty.call(m, "isFavorite"))
                w.uint32(72).bool(m.isFavorite);
            if (m.deviceIDHint != null && Object.hasOwnProperty.call(m, "deviceIDHint"))
                w.uint32(80).uint32(m.deviceIDHint);
            if (m.isLottie != null && Object.hasOwnProperty.call(m, "isLottie"))
                w.uint32(88).bool(m.isLottie);
            if (m.imageHash != null && Object.hasOwnProperty.call(m, "imageHash"))
                w.uint32(98).string(m.imageHash);
            if (m.isAvatarSticker != null && Object.hasOwnProperty.call(m, "isAvatarSticker"))
                w.uint32(104).bool(m.isAvatarSticker);
            return w;
        };

        StickerAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.StickerAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.URL = r.string();
                        break;
                    }
                case 2: {
                        m.fileEncSHA256 = r.bytes();
                        break;
                    }
                case 3: {
                        m.mediaKey = r.bytes();
                        break;
                    }
                case 4: {
                        m.mimetype = r.string();
                        break;
                    }
                case 5: {
                        m.height = r.uint32();
                        break;
                    }
                case 6: {
                        m.width = r.uint32();
                        break;
                    }
                case 7: {
                        m.directPath = r.string();
                        break;
                    }
                case 8: {
                        m.fileLength = r.uint64();
                        break;
                    }
                case 9: {
                        m.isFavorite = r.bool();
                        break;
                    }
                case 10: {
                        m.deviceIDHint = r.uint32();
                        break;
                    }
                case 11: {
                        m.isLottie = r.bool();
                        break;
                    }
                case 12: {
                        m.imageHash = r.string();
                        break;
                    }
                case 13: {
                        m.isAvatarSticker = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        StickerAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.StickerAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.StickerAction();
            if (d.URL != null) {
                m.URL = String(d.URL);
            }
            if (d.fileEncSHA256 != null) {
                if (typeof d.fileEncSHA256 === "string")
                    $util.base64.decode(d.fileEncSHA256, m.fileEncSHA256 = $util.newBuffer($util.base64.length(d.fileEncSHA256)), 0);
                else if (d.fileEncSHA256.length >= 0)
                    m.fileEncSHA256 = d.fileEncSHA256;
            }
            if (d.mediaKey != null) {
                if (typeof d.mediaKey === "string")
                    $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                else if (d.mediaKey.length >= 0)
                    m.mediaKey = d.mediaKey;
            }
            if (d.mimetype != null) {
                m.mimetype = String(d.mimetype);
            }
            if (d.height != null) {
                m.height = d.height >>> 0;
            }
            if (d.width != null) {
                m.width = d.width >>> 0;
            }
            if (d.directPath != null) {
                m.directPath = String(d.directPath);
            }
            if (d.fileLength != null) {
                if ($util.Long)
                    (m.fileLength = $util.Long.fromValue(d.fileLength)).unsigned = true;
                else if (typeof d.fileLength === "string")
                    m.fileLength = parseInt(d.fileLength, 10);
                else if (typeof d.fileLength === "number")
                    m.fileLength = d.fileLength;
                else if (typeof d.fileLength === "object")
                    m.fileLength = new $util.LongBits(d.fileLength.low >>> 0, d.fileLength.high >>> 0).toNumber(true);
            }
            if (d.isFavorite != null) {
                m.isFavorite = Boolean(d.isFavorite);
            }
            if (d.deviceIDHint != null) {
                m.deviceIDHint = d.deviceIDHint >>> 0;
            }
            if (d.isLottie != null) {
                m.isLottie = Boolean(d.isLottie);
            }
            if (d.imageHash != null) {
                m.imageHash = String(d.imageHash);
            }
            if (d.isAvatarSticker != null) {
                m.isAvatarSticker = Boolean(d.isAvatarSticker);
            }
            return m;
        };

        StickerAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.URL != null && m.hasOwnProperty("URL")) {
                d.URL = m.URL;
                if (o.oneofs)
                    d._URL = "URL";
            }
            if (m.fileEncSHA256 != null && m.hasOwnProperty("fileEncSHA256")) {
                d.fileEncSHA256 = o.bytes === String ? $util.base64.encode(m.fileEncSHA256, 0, m.fileEncSHA256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSHA256) : m.fileEncSHA256;
                if (o.oneofs)
                    d._fileEncSHA256 = "fileEncSHA256";
            }
            if (m.mediaKey != null && m.hasOwnProperty("mediaKey")) {
                d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                if (o.oneofs)
                    d._mediaKey = "mediaKey";
            }
            if (m.mimetype != null && m.hasOwnProperty("mimetype")) {
                d.mimetype = m.mimetype;
                if (o.oneofs)
                    d._mimetype = "mimetype";
            }
            if (m.height != null && m.hasOwnProperty("height")) {
                d.height = m.height;
                if (o.oneofs)
                    d._height = "height";
            }
            if (m.width != null && m.hasOwnProperty("width")) {
                d.width = m.width;
                if (o.oneofs)
                    d._width = "width";
            }
            if (m.directPath != null && m.hasOwnProperty("directPath")) {
                d.directPath = m.directPath;
                if (o.oneofs)
                    d._directPath = "directPath";
            }
            if (m.fileLength != null && m.hasOwnProperty("fileLength")) {
                if (typeof m.fileLength === "number")
                    d.fileLength = o.longs === String ? String(m.fileLength) : m.fileLength;
                else
                    d.fileLength = o.longs === String ? $util.Long.prototype.toString.call(m.fileLength) : o.longs === Number ? new $util.LongBits(m.fileLength.low >>> 0, m.fileLength.high >>> 0).toNumber(true) : m.fileLength;
                if (o.oneofs)
                    d._fileLength = "fileLength";
            }
            if (m.isFavorite != null && m.hasOwnProperty("isFavorite")) {
                d.isFavorite = m.isFavorite;
                if (o.oneofs)
                    d._isFavorite = "isFavorite";
            }
            if (m.deviceIDHint != null && m.hasOwnProperty("deviceIDHint")) {
                d.deviceIDHint = m.deviceIDHint;
                if (o.oneofs)
                    d._deviceIDHint = "deviceIDHint";
            }
            if (m.isLottie != null && m.hasOwnProperty("isLottie")) {
                d.isLottie = m.isLottie;
                if (o.oneofs)
                    d._isLottie = "isLottie";
            }
            if (m.imageHash != null && m.hasOwnProperty("imageHash")) {
                d.imageHash = m.imageHash;
                if (o.oneofs)
                    d._imageHash = "imageHash";
            }
            if (m.isAvatarSticker != null && m.hasOwnProperty("isAvatarSticker")) {
                d.isAvatarSticker = m.isAvatarSticker;
                if (o.oneofs)
                    d._isAvatarSticker = "isAvatarSticker";
            }
            return d;
        };

        StickerAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        StickerAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.StickerAction";
        };

        return StickerAction;
    })();

    WASyncAction.RemoveRecentStickerAction = (function() {

        function RemoveRecentStickerAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        RemoveRecentStickerAction.prototype.lastStickerSentTS = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RemoveRecentStickerAction.prototype, "_lastStickerSentTS", {
            get: $util.oneOfGetter($oneOfFields = ["lastStickerSentTS"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        RemoveRecentStickerAction.create = function create(properties) {
            return new RemoveRecentStickerAction(properties);
        };

        RemoveRecentStickerAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.lastStickerSentTS != null && Object.hasOwnProperty.call(m, "lastStickerSentTS"))
                w.uint32(8).int64(m.lastStickerSentTS);
            return w;
        };

        RemoveRecentStickerAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.RemoveRecentStickerAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.lastStickerSentTS = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        RemoveRecentStickerAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.RemoveRecentStickerAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.RemoveRecentStickerAction();
            if (d.lastStickerSentTS != null) {
                if ($util.Long)
                    (m.lastStickerSentTS = $util.Long.fromValue(d.lastStickerSentTS)).unsigned = false;
                else if (typeof d.lastStickerSentTS === "string")
                    m.lastStickerSentTS = parseInt(d.lastStickerSentTS, 10);
                else if (typeof d.lastStickerSentTS === "number")
                    m.lastStickerSentTS = d.lastStickerSentTS;
                else if (typeof d.lastStickerSentTS === "object")
                    m.lastStickerSentTS = new $util.LongBits(d.lastStickerSentTS.low >>> 0, d.lastStickerSentTS.high >>> 0).toNumber();
            }
            return m;
        };

        RemoveRecentStickerAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.lastStickerSentTS != null && m.hasOwnProperty("lastStickerSentTS")) {
                if (typeof m.lastStickerSentTS === "number")
                    d.lastStickerSentTS = o.longs === String ? String(m.lastStickerSentTS) : m.lastStickerSentTS;
                else
                    d.lastStickerSentTS = o.longs === String ? $util.Long.prototype.toString.call(m.lastStickerSentTS) : o.longs === Number ? new $util.LongBits(m.lastStickerSentTS.low >>> 0, m.lastStickerSentTS.high >>> 0).toNumber() : m.lastStickerSentTS;
                if (o.oneofs)
                    d._lastStickerSentTS = "lastStickerSentTS";
            }
            return d;
        };

        RemoveRecentStickerAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RemoveRecentStickerAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.RemoveRecentStickerAction";
        };

        return RemoveRecentStickerAction;
    })();

    WASyncAction.PrimaryVersionAction = (function() {

        function PrimaryVersionAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrimaryVersionAction.prototype.version = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrimaryVersionAction.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PrimaryVersionAction.create = function create(properties) {
            return new PrimaryVersionAction(properties);
        };

        PrimaryVersionAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(10).string(m.version);
            return w;
        };

        PrimaryVersionAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PrimaryVersionAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.version = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrimaryVersionAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PrimaryVersionAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PrimaryVersionAction();
            if (d.version != null) {
                m.version = String(d.version);
            }
            return m;
        };

        PrimaryVersionAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            return d;
        };

        PrimaryVersionAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrimaryVersionAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PrimaryVersionAction";
        };

        return PrimaryVersionAction;
    })();

    WASyncAction.NuxAction = (function() {

        function NuxAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NuxAction.prototype.acknowledged = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NuxAction.prototype, "_acknowledged", {
            get: $util.oneOfGetter($oneOfFields = ["acknowledged"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        NuxAction.create = function create(properties) {
            return new NuxAction(properties);
        };

        NuxAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.acknowledged != null && Object.hasOwnProperty.call(m, "acknowledged"))
                w.uint32(8).bool(m.acknowledged);
            return w;
        };

        NuxAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.NuxAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.acknowledged = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        NuxAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.NuxAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.NuxAction();
            if (d.acknowledged != null) {
                m.acknowledged = Boolean(d.acknowledged);
            }
            return m;
        };

        NuxAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.acknowledged != null && m.hasOwnProperty("acknowledged")) {
                d.acknowledged = m.acknowledged;
                if (o.oneofs)
                    d._acknowledged = "acknowledged";
            }
            return d;
        };

        NuxAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        NuxAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.NuxAction";
        };

        return NuxAction;
    })();

    WASyncAction.TimeFormatAction = (function() {

        function TimeFormatAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        TimeFormatAction.prototype.isTwentyFourHourFormatEnabled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(TimeFormatAction.prototype, "_isTwentyFourHourFormatEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isTwentyFourHourFormatEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        TimeFormatAction.create = function create(properties) {
            return new TimeFormatAction(properties);
        };

        TimeFormatAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isTwentyFourHourFormatEnabled != null && Object.hasOwnProperty.call(m, "isTwentyFourHourFormatEnabled"))
                w.uint32(8).bool(m.isTwentyFourHourFormatEnabled);
            return w;
        };

        TimeFormatAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.TimeFormatAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isTwentyFourHourFormatEnabled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        TimeFormatAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.TimeFormatAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.TimeFormatAction();
            if (d.isTwentyFourHourFormatEnabled != null) {
                m.isTwentyFourHourFormatEnabled = Boolean(d.isTwentyFourHourFormatEnabled);
            }
            return m;
        };

        TimeFormatAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isTwentyFourHourFormatEnabled != null && m.hasOwnProperty("isTwentyFourHourFormatEnabled")) {
                d.isTwentyFourHourFormatEnabled = m.isTwentyFourHourFormatEnabled;
                if (o.oneofs)
                    d._isTwentyFourHourFormatEnabled = "isTwentyFourHourFormatEnabled";
            }
            return d;
        };

        TimeFormatAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TimeFormatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.TimeFormatAction";
        };

        return TimeFormatAction;
    })();

    WASyncAction.UserStatusMuteAction = (function() {

        function UserStatusMuteAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UserStatusMuteAction.prototype.muted = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserStatusMuteAction.prototype, "_muted", {
            get: $util.oneOfGetter($oneOfFields = ["muted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        UserStatusMuteAction.create = function create(properties) {
            return new UserStatusMuteAction(properties);
        };

        UserStatusMuteAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.muted != null && Object.hasOwnProperty.call(m, "muted"))
                w.uint32(8).bool(m.muted);
            return w;
        };

        UserStatusMuteAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.UserStatusMuteAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.muted = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        UserStatusMuteAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.UserStatusMuteAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.UserStatusMuteAction();
            if (d.muted != null) {
                m.muted = Boolean(d.muted);
            }
            return m;
        };

        UserStatusMuteAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.muted != null && m.hasOwnProperty("muted")) {
                d.muted = m.muted;
                if (o.oneofs)
                    d._muted = "muted";
            }
            return d;
        };

        UserStatusMuteAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UserStatusMuteAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.UserStatusMuteAction";
        };

        return UserStatusMuteAction;
    })();

    WASyncAction.SubscriptionAction = (function() {

        function SubscriptionAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SubscriptionAction.prototype.isDeactivated = null;
        SubscriptionAction.prototype.isAutoRenewing = null;
        SubscriptionAction.prototype.expirationDate = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SubscriptionAction.prototype, "_isDeactivated", {
            get: $util.oneOfGetter($oneOfFields = ["isDeactivated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SubscriptionAction.prototype, "_isAutoRenewing", {
            get: $util.oneOfGetter($oneOfFields = ["isAutoRenewing"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SubscriptionAction.prototype, "_expirationDate", {
            get: $util.oneOfGetter($oneOfFields = ["expirationDate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SubscriptionAction.create = function create(properties) {
            return new SubscriptionAction(properties);
        };

        SubscriptionAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isDeactivated != null && Object.hasOwnProperty.call(m, "isDeactivated"))
                w.uint32(8).bool(m.isDeactivated);
            if (m.isAutoRenewing != null && Object.hasOwnProperty.call(m, "isAutoRenewing"))
                w.uint32(16).bool(m.isAutoRenewing);
            if (m.expirationDate != null && Object.hasOwnProperty.call(m, "expirationDate"))
                w.uint32(24).int64(m.expirationDate);
            return w;
        };

        SubscriptionAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SubscriptionAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isDeactivated = r.bool();
                        break;
                    }
                case 2: {
                        m.isAutoRenewing = r.bool();
                        break;
                    }
                case 3: {
                        m.expirationDate = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SubscriptionAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SubscriptionAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SubscriptionAction();
            if (d.isDeactivated != null) {
                m.isDeactivated = Boolean(d.isDeactivated);
            }
            if (d.isAutoRenewing != null) {
                m.isAutoRenewing = Boolean(d.isAutoRenewing);
            }
            if (d.expirationDate != null) {
                if ($util.Long)
                    (m.expirationDate = $util.Long.fromValue(d.expirationDate)).unsigned = false;
                else if (typeof d.expirationDate === "string")
                    m.expirationDate = parseInt(d.expirationDate, 10);
                else if (typeof d.expirationDate === "number")
                    m.expirationDate = d.expirationDate;
                else if (typeof d.expirationDate === "object")
                    m.expirationDate = new $util.LongBits(d.expirationDate.low >>> 0, d.expirationDate.high >>> 0).toNumber();
            }
            return m;
        };

        SubscriptionAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isDeactivated != null && m.hasOwnProperty("isDeactivated")) {
                d.isDeactivated = m.isDeactivated;
                if (o.oneofs)
                    d._isDeactivated = "isDeactivated";
            }
            if (m.isAutoRenewing != null && m.hasOwnProperty("isAutoRenewing")) {
                d.isAutoRenewing = m.isAutoRenewing;
                if (o.oneofs)
                    d._isAutoRenewing = "isAutoRenewing";
            }
            if (m.expirationDate != null && m.hasOwnProperty("expirationDate")) {
                if (typeof m.expirationDate === "number")
                    d.expirationDate = o.longs === String ? String(m.expirationDate) : m.expirationDate;
                else
                    d.expirationDate = o.longs === String ? $util.Long.prototype.toString.call(m.expirationDate) : o.longs === Number ? new $util.LongBits(m.expirationDate.low >>> 0, m.expirationDate.high >>> 0).toNumber() : m.expirationDate;
                if (o.oneofs)
                    d._expirationDate = "expirationDate";
            }
            return d;
        };

        SubscriptionAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SubscriptionAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SubscriptionAction";
        };

        return SubscriptionAction;
    })();

    WASyncAction.AgentAction = (function() {

        function AgentAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AgentAction.prototype.name = null;
        AgentAction.prototype.deviceID = null;
        AgentAction.prototype.isDeleted = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AgentAction.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AgentAction.prototype, "_deviceID", {
            get: $util.oneOfGetter($oneOfFields = ["deviceID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AgentAction.prototype, "_isDeleted", {
            get: $util.oneOfGetter($oneOfFields = ["isDeleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AgentAction.create = function create(properties) {
            return new AgentAction(properties);
        };

        AgentAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(10).string(m.name);
            if (m.deviceID != null && Object.hasOwnProperty.call(m, "deviceID"))
                w.uint32(16).int32(m.deviceID);
            if (m.isDeleted != null && Object.hasOwnProperty.call(m, "isDeleted"))
                w.uint32(24).bool(m.isDeleted);
            return w;
        };

        AgentAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.AgentAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.name = r.string();
                        break;
                    }
                case 2: {
                        m.deviceID = r.int32();
                        break;
                    }
                case 3: {
                        m.isDeleted = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AgentAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.AgentAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.AgentAction();
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.deviceID != null) {
                m.deviceID = d.deviceID | 0;
            }
            if (d.isDeleted != null) {
                m.isDeleted = Boolean(d.isDeleted);
            }
            return m;
        };

        AgentAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d._name = "name";
            }
            if (m.deviceID != null && m.hasOwnProperty("deviceID")) {
                d.deviceID = m.deviceID;
                if (o.oneofs)
                    d._deviceID = "deviceID";
            }
            if (m.isDeleted != null && m.hasOwnProperty("isDeleted")) {
                d.isDeleted = m.isDeleted;
                if (o.oneofs)
                    d._isDeleted = "isDeleted";
            }
            return d;
        };

        AgentAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AgentAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.AgentAction";
        };

        return AgentAction;
    })();

    WASyncAction.AndroidUnsupportedActions = (function() {

        function AndroidUnsupportedActions(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AndroidUnsupportedActions.prototype.allowed = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AndroidUnsupportedActions.prototype, "_allowed", {
            get: $util.oneOfGetter($oneOfFields = ["allowed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AndroidUnsupportedActions.create = function create(properties) {
            return new AndroidUnsupportedActions(properties);
        };

        AndroidUnsupportedActions.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.allowed != null && Object.hasOwnProperty.call(m, "allowed"))
                w.uint32(8).bool(m.allowed);
            return w;
        };

        AndroidUnsupportedActions.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.AndroidUnsupportedActions();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.allowed = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AndroidUnsupportedActions.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.AndroidUnsupportedActions)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.AndroidUnsupportedActions();
            if (d.allowed != null) {
                m.allowed = Boolean(d.allowed);
            }
            return m;
        };

        AndroidUnsupportedActions.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.allowed != null && m.hasOwnProperty("allowed")) {
                d.allowed = m.allowed;
                if (o.oneofs)
                    d._allowed = "allowed";
            }
            return d;
        };

        AndroidUnsupportedActions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AndroidUnsupportedActions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.AndroidUnsupportedActions";
        };

        return AndroidUnsupportedActions;
    })();

    WASyncAction.PrimaryFeature = (function() {

        function PrimaryFeature(p) {
            this.flags = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrimaryFeature.prototype.flags = $util.emptyArray;

        PrimaryFeature.create = function create(properties) {
            return new PrimaryFeature(properties);
        };

        PrimaryFeature.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.flags != null && m.flags.length) {
                for (var i = 0; i < m.flags.length; ++i)
                    w.uint32(10).string(m.flags[i]);
            }
            return w;
        };

        PrimaryFeature.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PrimaryFeature();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.flags && m.flags.length))
                            m.flags = [];
                        m.flags.push(r.string());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrimaryFeature.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PrimaryFeature)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PrimaryFeature();
            if (d.flags) {
                if (!Array.isArray(d.flags))
                    throw TypeError(".WASyncAction.PrimaryFeature.flags: array expected");
                m.flags = [];
                for (var i = 0; i < d.flags.length; ++i) {
                    m.flags[i] = String(d.flags[i]);
                }
            }
            return m;
        };

        PrimaryFeature.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.flags = [];
            }
            if (m.flags && m.flags.length) {
                d.flags = [];
                for (var j = 0; j < m.flags.length; ++j) {
                    d.flags[j] = m.flags[j];
                }
            }
            return d;
        };

        PrimaryFeature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrimaryFeature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PrimaryFeature";
        };

        return PrimaryFeature;
    })();

    WASyncAction.KeyExpiration = (function() {

        function KeyExpiration(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeyExpiration.prototype.expiredKeyEpoch = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExpiration.prototype, "_expiredKeyEpoch", {
            get: $util.oneOfGetter($oneOfFields = ["expiredKeyEpoch"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        KeyExpiration.create = function create(properties) {
            return new KeyExpiration(properties);
        };

        KeyExpiration.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.expiredKeyEpoch != null && Object.hasOwnProperty.call(m, "expiredKeyEpoch"))
                w.uint32(8).int32(m.expiredKeyEpoch);
            return w;
        };

        KeyExpiration.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.KeyExpiration();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.expiredKeyEpoch = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        KeyExpiration.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.KeyExpiration)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.KeyExpiration();
            if (d.expiredKeyEpoch != null) {
                m.expiredKeyEpoch = d.expiredKeyEpoch | 0;
            }
            return m;
        };

        KeyExpiration.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.expiredKeyEpoch != null && m.hasOwnProperty("expiredKeyEpoch")) {
                d.expiredKeyEpoch = m.expiredKeyEpoch;
                if (o.oneofs)
                    d._expiredKeyEpoch = "expiredKeyEpoch";
            }
            return d;
        };

        KeyExpiration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        KeyExpiration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.KeyExpiration";
        };

        return KeyExpiration;
    })();

    WASyncAction.SyncActionMessage = (function() {

        function SyncActionMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncActionMessage.prototype.key = null;
        SyncActionMessage.prototype.timestamp = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionMessage.prototype, "_key", {
            get: $util.oneOfGetter($oneOfFields = ["key"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionMessage.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncActionMessage.create = function create(properties) {
            return new SyncActionMessage(properties);
        };

        SyncActionMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                WACommon.MessageKey.encode(m.key, w.uint32(10).fork()).ldelim();
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(16).int64(m.timestamp);
            return w;
        };

        SyncActionMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SyncActionMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.key = WACommon.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.timestamp = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncActionMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SyncActionMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SyncActionMessage();
            if (d.key != null) {
                if (typeof d.key !== "object")
                    throw TypeError(".WASyncAction.SyncActionMessage.key: object expected");
                m.key = WACommon.MessageKey.fromObject(d.key, n + 1);
            }
            if (d.timestamp != null) {
                if ($util.Long)
                    (m.timestamp = $util.Long.fromValue(d.timestamp)).unsigned = false;
                else if (typeof d.timestamp === "string")
                    m.timestamp = parseInt(d.timestamp, 10);
                else if (typeof d.timestamp === "number")
                    m.timestamp = d.timestamp;
                else if (typeof d.timestamp === "object")
                    m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber();
            }
            return m;
        };

        SyncActionMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.key != null && m.hasOwnProperty("key")) {
                d.key = WACommon.MessageKey.toObject(m.key, o);
                if (o.oneofs)
                    d._key = "key";
            }
            if (m.timestamp != null && m.hasOwnProperty("timestamp")) {
                if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === String ? String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? $util.Long.prototype.toString.call(m.timestamp) : o.longs === Number ? new $util.LongBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0).toNumber() : m.timestamp;
                if (o.oneofs)
                    d._timestamp = "timestamp";
            }
            return d;
        };

        SyncActionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncActionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SyncActionMessage";
        };

        return SyncActionMessage;
    })();

    WASyncAction.SyncActionMessageRange = (function() {

        function SyncActionMessageRange(p) {
            this.messages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncActionMessageRange.prototype.lastMessageTimestamp = null;
        SyncActionMessageRange.prototype.lastSystemMessageTimestamp = null;
        SyncActionMessageRange.prototype.messages = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionMessageRange.prototype, "_lastMessageTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["lastMessageTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionMessageRange.prototype, "_lastSystemMessageTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["lastSystemMessageTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncActionMessageRange.create = function create(properties) {
            return new SyncActionMessageRange(properties);
        };

        SyncActionMessageRange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.lastMessageTimestamp != null && Object.hasOwnProperty.call(m, "lastMessageTimestamp"))
                w.uint32(8).int64(m.lastMessageTimestamp);
            if (m.lastSystemMessageTimestamp != null && Object.hasOwnProperty.call(m, "lastSystemMessageTimestamp"))
                w.uint32(16).int64(m.lastSystemMessageTimestamp);
            if (m.messages != null && m.messages.length) {
                for (var i = 0; i < m.messages.length; ++i)
                    $root.WASyncAction.SyncActionMessage.encode(m.messages[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        SyncActionMessageRange.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SyncActionMessageRange();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.lastMessageTimestamp = r.int64();
                        break;
                    }
                case 2: {
                        m.lastSystemMessageTimestamp = r.int64();
                        break;
                    }
                case 3: {
                        if (!(m.messages && m.messages.length))
                            m.messages = [];
                        m.messages.push($root.WASyncAction.SyncActionMessage.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncActionMessageRange.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SyncActionMessageRange)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SyncActionMessageRange();
            if (d.lastMessageTimestamp != null) {
                if ($util.Long)
                    (m.lastMessageTimestamp = $util.Long.fromValue(d.lastMessageTimestamp)).unsigned = false;
                else if (typeof d.lastMessageTimestamp === "string")
                    m.lastMessageTimestamp = parseInt(d.lastMessageTimestamp, 10);
                else if (typeof d.lastMessageTimestamp === "number")
                    m.lastMessageTimestamp = d.lastMessageTimestamp;
                else if (typeof d.lastMessageTimestamp === "object")
                    m.lastMessageTimestamp = new $util.LongBits(d.lastMessageTimestamp.low >>> 0, d.lastMessageTimestamp.high >>> 0).toNumber();
            }
            if (d.lastSystemMessageTimestamp != null) {
                if ($util.Long)
                    (m.lastSystemMessageTimestamp = $util.Long.fromValue(d.lastSystemMessageTimestamp)).unsigned = false;
                else if (typeof d.lastSystemMessageTimestamp === "string")
                    m.lastSystemMessageTimestamp = parseInt(d.lastSystemMessageTimestamp, 10);
                else if (typeof d.lastSystemMessageTimestamp === "number")
                    m.lastSystemMessageTimestamp = d.lastSystemMessageTimestamp;
                else if (typeof d.lastSystemMessageTimestamp === "object")
                    m.lastSystemMessageTimestamp = new $util.LongBits(d.lastSystemMessageTimestamp.low >>> 0, d.lastSystemMessageTimestamp.high >>> 0).toNumber();
            }
            if (d.messages) {
                if (!Array.isArray(d.messages))
                    throw TypeError(".WASyncAction.SyncActionMessageRange.messages: array expected");
                m.messages = [];
                for (var i = 0; i < d.messages.length; ++i) {
                    if (typeof d.messages[i] !== "object")
                        throw TypeError(".WASyncAction.SyncActionMessageRange.messages: object expected");
                    m.messages[i] = $root.WASyncAction.SyncActionMessage.fromObject(d.messages[i], n + 1);
                }
            }
            return m;
        };

        SyncActionMessageRange.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.messages = [];
            }
            if (m.lastMessageTimestamp != null && m.hasOwnProperty("lastMessageTimestamp")) {
                if (typeof m.lastMessageTimestamp === "number")
                    d.lastMessageTimestamp = o.longs === String ? String(m.lastMessageTimestamp) : m.lastMessageTimestamp;
                else
                    d.lastMessageTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.lastMessageTimestamp) : o.longs === Number ? new $util.LongBits(m.lastMessageTimestamp.low >>> 0, m.lastMessageTimestamp.high >>> 0).toNumber() : m.lastMessageTimestamp;
                if (o.oneofs)
                    d._lastMessageTimestamp = "lastMessageTimestamp";
            }
            if (m.lastSystemMessageTimestamp != null && m.hasOwnProperty("lastSystemMessageTimestamp")) {
                if (typeof m.lastSystemMessageTimestamp === "number")
                    d.lastSystemMessageTimestamp = o.longs === String ? String(m.lastSystemMessageTimestamp) : m.lastSystemMessageTimestamp;
                else
                    d.lastSystemMessageTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.lastSystemMessageTimestamp) : o.longs === Number ? new $util.LongBits(m.lastSystemMessageTimestamp.low >>> 0, m.lastSystemMessageTimestamp.high >>> 0).toNumber() : m.lastSystemMessageTimestamp;
                if (o.oneofs)
                    d._lastSystemMessageTimestamp = "lastSystemMessageTimestamp";
            }
            if (m.messages && m.messages.length) {
                d.messages = [];
                for (var j = 0; j < m.messages.length; ++j) {
                    d.messages[j] = $root.WASyncAction.SyncActionMessage.toObject(m.messages[j], o);
                }
            }
            return d;
        };

        SyncActionMessageRange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncActionMessageRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SyncActionMessageRange";
        };

        return SyncActionMessageRange;
    })();

    WASyncAction.UnarchiveChatsSetting = (function() {

        function UnarchiveChatsSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UnarchiveChatsSetting.prototype.unarchiveChats = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UnarchiveChatsSetting.prototype, "_unarchiveChats", {
            get: $util.oneOfGetter($oneOfFields = ["unarchiveChats"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        UnarchiveChatsSetting.create = function create(properties) {
            return new UnarchiveChatsSetting(properties);
        };

        UnarchiveChatsSetting.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.unarchiveChats != null && Object.hasOwnProperty.call(m, "unarchiveChats"))
                w.uint32(8).bool(m.unarchiveChats);
            return w;
        };

        UnarchiveChatsSetting.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.UnarchiveChatsSetting();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.unarchiveChats = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        UnarchiveChatsSetting.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.UnarchiveChatsSetting)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.UnarchiveChatsSetting();
            if (d.unarchiveChats != null) {
                m.unarchiveChats = Boolean(d.unarchiveChats);
            }
            return m;
        };

        UnarchiveChatsSetting.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.unarchiveChats != null && m.hasOwnProperty("unarchiveChats")) {
                d.unarchiveChats = m.unarchiveChats;
                if (o.oneofs)
                    d._unarchiveChats = "unarchiveChats";
            }
            return d;
        };

        UnarchiveChatsSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UnarchiveChatsSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.UnarchiveChatsSetting";
        };

        return UnarchiveChatsSetting;
    })();

    WASyncAction.DeleteChatAction = (function() {

        function DeleteChatAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeleteChatAction.prototype.messageRange = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeleteChatAction.prototype, "_messageRange", {
            get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeleteChatAction.create = function create(properties) {
            return new DeleteChatAction(properties);
        };

        DeleteChatAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messageRange != null && Object.hasOwnProperty.call(m, "messageRange"))
                $root.WASyncAction.SyncActionMessageRange.encode(m.messageRange, w.uint32(10).fork()).ldelim();
            return w;
        };

        DeleteChatAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.DeleteChatAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageRange = $root.WASyncAction.SyncActionMessageRange.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeleteChatAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.DeleteChatAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.DeleteChatAction();
            if (d.messageRange != null) {
                if (typeof d.messageRange !== "object")
                    throw TypeError(".WASyncAction.DeleteChatAction.messageRange: object expected");
                m.messageRange = $root.WASyncAction.SyncActionMessageRange.fromObject(d.messageRange, n + 1);
            }
            return m;
        };

        DeleteChatAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.messageRange != null && m.hasOwnProperty("messageRange")) {
                d.messageRange = $root.WASyncAction.SyncActionMessageRange.toObject(m.messageRange, o);
                if (o.oneofs)
                    d._messageRange = "messageRange";
            }
            return d;
        };

        DeleteChatAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeleteChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.DeleteChatAction";
        };

        return DeleteChatAction;
    })();

    WASyncAction.ClearChatAction = (function() {

        function ClearChatAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ClearChatAction.prototype.messageRange = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClearChatAction.prototype, "_messageRange", {
            get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClearChatAction.create = function create(properties) {
            return new ClearChatAction(properties);
        };

        ClearChatAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messageRange != null && Object.hasOwnProperty.call(m, "messageRange"))
                $root.WASyncAction.SyncActionMessageRange.encode(m.messageRange, w.uint32(10).fork()).ldelim();
            return w;
        };

        ClearChatAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ClearChatAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageRange = $root.WASyncAction.SyncActionMessageRange.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ClearChatAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ClearChatAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ClearChatAction();
            if (d.messageRange != null) {
                if (typeof d.messageRange !== "object")
                    throw TypeError(".WASyncAction.ClearChatAction.messageRange: object expected");
                m.messageRange = $root.WASyncAction.SyncActionMessageRange.fromObject(d.messageRange, n + 1);
            }
            return m;
        };

        ClearChatAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.messageRange != null && m.hasOwnProperty("messageRange")) {
                d.messageRange = $root.WASyncAction.SyncActionMessageRange.toObject(m.messageRange, o);
                if (o.oneofs)
                    d._messageRange = "messageRange";
            }
            return d;
        };

        ClearChatAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClearChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ClearChatAction";
        };

        return ClearChatAction;
    })();

    WASyncAction.MarkChatAsReadAction = (function() {

        function MarkChatAsReadAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MarkChatAsReadAction.prototype.read = null;
        MarkChatAsReadAction.prototype.messageRange = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarkChatAsReadAction.prototype, "_read", {
            get: $util.oneOfGetter($oneOfFields = ["read"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MarkChatAsReadAction.prototype, "_messageRange", {
            get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MarkChatAsReadAction.create = function create(properties) {
            return new MarkChatAsReadAction(properties);
        };

        MarkChatAsReadAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.read != null && Object.hasOwnProperty.call(m, "read"))
                w.uint32(8).bool(m.read);
            if (m.messageRange != null && Object.hasOwnProperty.call(m, "messageRange"))
                $root.WASyncAction.SyncActionMessageRange.encode(m.messageRange, w.uint32(18).fork()).ldelim();
            return w;
        };

        MarkChatAsReadAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MarkChatAsReadAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.read = r.bool();
                        break;
                    }
                case 2: {
                        m.messageRange = $root.WASyncAction.SyncActionMessageRange.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MarkChatAsReadAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MarkChatAsReadAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MarkChatAsReadAction();
            if (d.read != null) {
                m.read = Boolean(d.read);
            }
            if (d.messageRange != null) {
                if (typeof d.messageRange !== "object")
                    throw TypeError(".WASyncAction.MarkChatAsReadAction.messageRange: object expected");
                m.messageRange = $root.WASyncAction.SyncActionMessageRange.fromObject(d.messageRange, n + 1);
            }
            return m;
        };

        MarkChatAsReadAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.read != null && m.hasOwnProperty("read")) {
                d.read = m.read;
                if (o.oneofs)
                    d._read = "read";
            }
            if (m.messageRange != null && m.hasOwnProperty("messageRange")) {
                d.messageRange = $root.WASyncAction.SyncActionMessageRange.toObject(m.messageRange, o);
                if (o.oneofs)
                    d._messageRange = "messageRange";
            }
            return d;
        };

        MarkChatAsReadAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MarkChatAsReadAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MarkChatAsReadAction";
        };

        return MarkChatAsReadAction;
    })();

    WASyncAction.DeleteMessageForMeAction = (function() {

        function DeleteMessageForMeAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeleteMessageForMeAction.prototype.deleteMedia = null;
        DeleteMessageForMeAction.prototype.messageTimestamp = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeleteMessageForMeAction.prototype, "_deleteMedia", {
            get: $util.oneOfGetter($oneOfFields = ["deleteMedia"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeleteMessageForMeAction.prototype, "_messageTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["messageTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeleteMessageForMeAction.create = function create(properties) {
            return new DeleteMessageForMeAction(properties);
        };

        DeleteMessageForMeAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.deleteMedia != null && Object.hasOwnProperty.call(m, "deleteMedia"))
                w.uint32(8).bool(m.deleteMedia);
            if (m.messageTimestamp != null && Object.hasOwnProperty.call(m, "messageTimestamp"))
                w.uint32(16).int64(m.messageTimestamp);
            return w;
        };

        DeleteMessageForMeAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.DeleteMessageForMeAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deleteMedia = r.bool();
                        break;
                    }
                case 2: {
                        m.messageTimestamp = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeleteMessageForMeAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.DeleteMessageForMeAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.DeleteMessageForMeAction();
            if (d.deleteMedia != null) {
                m.deleteMedia = Boolean(d.deleteMedia);
            }
            if (d.messageTimestamp != null) {
                if ($util.Long)
                    (m.messageTimestamp = $util.Long.fromValue(d.messageTimestamp)).unsigned = false;
                else if (typeof d.messageTimestamp === "string")
                    m.messageTimestamp = parseInt(d.messageTimestamp, 10);
                else if (typeof d.messageTimestamp === "number")
                    m.messageTimestamp = d.messageTimestamp;
                else if (typeof d.messageTimestamp === "object")
                    m.messageTimestamp = new $util.LongBits(d.messageTimestamp.low >>> 0, d.messageTimestamp.high >>> 0).toNumber();
            }
            return m;
        };

        DeleteMessageForMeAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.deleteMedia != null && m.hasOwnProperty("deleteMedia")) {
                d.deleteMedia = m.deleteMedia;
                if (o.oneofs)
                    d._deleteMedia = "deleteMedia";
            }
            if (m.messageTimestamp != null && m.hasOwnProperty("messageTimestamp")) {
                if (typeof m.messageTimestamp === "number")
                    d.messageTimestamp = o.longs === String ? String(m.messageTimestamp) : m.messageTimestamp;
                else
                    d.messageTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.messageTimestamp) : o.longs === Number ? new $util.LongBits(m.messageTimestamp.low >>> 0, m.messageTimestamp.high >>> 0).toNumber() : m.messageTimestamp;
                if (o.oneofs)
                    d._messageTimestamp = "messageTimestamp";
            }
            return d;
        };

        DeleteMessageForMeAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeleteMessageForMeAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.DeleteMessageForMeAction";
        };

        return DeleteMessageForMeAction;
    })();

    WASyncAction.ArchiveChatAction = (function() {

        function ArchiveChatAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ArchiveChatAction.prototype.archived = null;
        ArchiveChatAction.prototype.messageRange = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ArchiveChatAction.prototype, "_archived", {
            get: $util.oneOfGetter($oneOfFields = ["archived"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ArchiveChatAction.prototype, "_messageRange", {
            get: $util.oneOfGetter($oneOfFields = ["messageRange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ArchiveChatAction.create = function create(properties) {
            return new ArchiveChatAction(properties);
        };

        ArchiveChatAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.archived != null && Object.hasOwnProperty.call(m, "archived"))
                w.uint32(8).bool(m.archived);
            if (m.messageRange != null && Object.hasOwnProperty.call(m, "messageRange"))
                $root.WASyncAction.SyncActionMessageRange.encode(m.messageRange, w.uint32(18).fork()).ldelim();
            return w;
        };

        ArchiveChatAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ArchiveChatAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.archived = r.bool();
                        break;
                    }
                case 2: {
                        m.messageRange = $root.WASyncAction.SyncActionMessageRange.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ArchiveChatAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ArchiveChatAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ArchiveChatAction();
            if (d.archived != null) {
                m.archived = Boolean(d.archived);
            }
            if (d.messageRange != null) {
                if (typeof d.messageRange !== "object")
                    throw TypeError(".WASyncAction.ArchiveChatAction.messageRange: object expected");
                m.messageRange = $root.WASyncAction.SyncActionMessageRange.fromObject(d.messageRange, n + 1);
            }
            return m;
        };

        ArchiveChatAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.archived != null && m.hasOwnProperty("archived")) {
                d.archived = m.archived;
                if (o.oneofs)
                    d._archived = "archived";
            }
            if (m.messageRange != null && m.hasOwnProperty("messageRange")) {
                d.messageRange = $root.WASyncAction.SyncActionMessageRange.toObject(m.messageRange, o);
                if (o.oneofs)
                    d._messageRange = "messageRange";
            }
            return d;
        };

        ArchiveChatAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ArchiveChatAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ArchiveChatAction";
        };

        return ArchiveChatAction;
    })();

    WASyncAction.RecentEmojiWeightsAction = (function() {

        function RecentEmojiWeightsAction(p) {
            this.weights = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        RecentEmojiWeightsAction.prototype.weights = $util.emptyArray;

        RecentEmojiWeightsAction.create = function create(properties) {
            return new RecentEmojiWeightsAction(properties);
        };

        RecentEmojiWeightsAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.weights != null && m.weights.length) {
                for (var i = 0; i < m.weights.length; ++i)
                    $root.WASyncAction.RecentEmojiWeight.encode(m.weights[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        RecentEmojiWeightsAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.RecentEmojiWeightsAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.weights && m.weights.length))
                            m.weights = [];
                        m.weights.push($root.WASyncAction.RecentEmojiWeight.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        RecentEmojiWeightsAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.RecentEmojiWeightsAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.RecentEmojiWeightsAction();
            if (d.weights) {
                if (!Array.isArray(d.weights))
                    throw TypeError(".WASyncAction.RecentEmojiWeightsAction.weights: array expected");
                m.weights = [];
                for (var i = 0; i < d.weights.length; ++i) {
                    if (typeof d.weights[i] !== "object")
                        throw TypeError(".WASyncAction.RecentEmojiWeightsAction.weights: object expected");
                    m.weights[i] = $root.WASyncAction.RecentEmojiWeight.fromObject(d.weights[i], n + 1);
                }
            }
            return m;
        };

        RecentEmojiWeightsAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.weights = [];
            }
            if (m.weights && m.weights.length) {
                d.weights = [];
                for (var j = 0; j < m.weights.length; ++j) {
                    d.weights[j] = $root.WASyncAction.RecentEmojiWeight.toObject(m.weights[j], o);
                }
            }
            return d;
        };

        RecentEmojiWeightsAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RecentEmojiWeightsAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.RecentEmojiWeightsAction";
        };

        return RecentEmojiWeightsAction;
    })();

    WASyncAction.LabelAssociationAction = (function() {

        function LabelAssociationAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LabelAssociationAction.prototype.labeled = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LabelAssociationAction.prototype, "_labeled", {
            get: $util.oneOfGetter($oneOfFields = ["labeled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LabelAssociationAction.create = function create(properties) {
            return new LabelAssociationAction(properties);
        };

        LabelAssociationAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.labeled != null && Object.hasOwnProperty.call(m, "labeled"))
                w.uint32(8).bool(m.labeled);
            return w;
        };

        LabelAssociationAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.LabelAssociationAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.labeled = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LabelAssociationAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.LabelAssociationAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.LabelAssociationAction();
            if (d.labeled != null) {
                m.labeled = Boolean(d.labeled);
            }
            return m;
        };

        LabelAssociationAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.labeled != null && m.hasOwnProperty("labeled")) {
                d.labeled = m.labeled;
                if (o.oneofs)
                    d._labeled = "labeled";
            }
            return d;
        };

        LabelAssociationAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LabelAssociationAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.LabelAssociationAction";
        };

        return LabelAssociationAction;
    })();

    WASyncAction.QuickReplyAction = (function() {

        function QuickReplyAction(p) {
            this.keywords = [];
            this.associatedLabelIDs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        QuickReplyAction.prototype.shortcut = null;
        QuickReplyAction.prototype.message = null;
        QuickReplyAction.prototype.keywords = $util.emptyArray;
        QuickReplyAction.prototype.count = null;
        QuickReplyAction.prototype.deleted = null;
        QuickReplyAction.prototype.associatedLabelIDs = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(QuickReplyAction.prototype, "_shortcut", {
            get: $util.oneOfGetter($oneOfFields = ["shortcut"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(QuickReplyAction.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(QuickReplyAction.prototype, "_count", {
            get: $util.oneOfGetter($oneOfFields = ["count"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(QuickReplyAction.prototype, "_deleted", {
            get: $util.oneOfGetter($oneOfFields = ["deleted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        QuickReplyAction.create = function create(properties) {
            return new QuickReplyAction(properties);
        };

        QuickReplyAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.shortcut != null && Object.hasOwnProperty.call(m, "shortcut"))
                w.uint32(10).string(m.shortcut);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(18).string(m.message);
            if (m.keywords != null && m.keywords.length) {
                for (var i = 0; i < m.keywords.length; ++i)
                    w.uint32(26).string(m.keywords[i]);
            }
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(32).int32(m.count);
            if (m.deleted != null && Object.hasOwnProperty.call(m, "deleted"))
                w.uint32(40).bool(m.deleted);
            if (m.associatedLabelIDs != null && m.associatedLabelIDs.length) {
                for (var i = 0; i < m.associatedLabelIDs.length; ++i)
                    w.uint32(50).string(m.associatedLabelIDs[i]);
            }
            return w;
        };

        QuickReplyAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.QuickReplyAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.shortcut = r.string();
                        break;
                    }
                case 2: {
                        m.message = r.string();
                        break;
                    }
                case 3: {
                        if (!(m.keywords && m.keywords.length))
                            m.keywords = [];
                        m.keywords.push(r.string());
                        break;
                    }
                case 4: {
                        m.count = r.int32();
                        break;
                    }
                case 5: {
                        m.deleted = r.bool();
                        break;
                    }
                case 6: {
                        if (!(m.associatedLabelIDs && m.associatedLabelIDs.length))
                            m.associatedLabelIDs = [];
                        m.associatedLabelIDs.push(r.string());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        QuickReplyAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.QuickReplyAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.QuickReplyAction();
            if (d.shortcut != null) {
                m.shortcut = String(d.shortcut);
            }
            if (d.message != null) {
                m.message = String(d.message);
            }
            if (d.keywords) {
                if (!Array.isArray(d.keywords))
                    throw TypeError(".WASyncAction.QuickReplyAction.keywords: array expected");
                m.keywords = [];
                for (var i = 0; i < d.keywords.length; ++i) {
                    m.keywords[i] = String(d.keywords[i]);
                }
            }
            if (d.count != null) {
                m.count = d.count | 0;
            }
            if (d.deleted != null) {
                m.deleted = Boolean(d.deleted);
            }
            if (d.associatedLabelIDs) {
                if (!Array.isArray(d.associatedLabelIDs))
                    throw TypeError(".WASyncAction.QuickReplyAction.associatedLabelIDs: array expected");
                m.associatedLabelIDs = [];
                for (var i = 0; i < d.associatedLabelIDs.length; ++i) {
                    m.associatedLabelIDs[i] = String(d.associatedLabelIDs[i]);
                }
            }
            return m;
        };

        QuickReplyAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.keywords = [];
                d.associatedLabelIDs = [];
            }
            if (m.shortcut != null && m.hasOwnProperty("shortcut")) {
                d.shortcut = m.shortcut;
                if (o.oneofs)
                    d._shortcut = "shortcut";
            }
            if (m.message != null && m.hasOwnProperty("message")) {
                d.message = m.message;
                if (o.oneofs)
                    d._message = "message";
            }
            if (m.keywords && m.keywords.length) {
                d.keywords = [];
                for (var j = 0; j < m.keywords.length; ++j) {
                    d.keywords[j] = m.keywords[j];
                }
            }
            if (m.count != null && m.hasOwnProperty("count")) {
                d.count = m.count;
                if (o.oneofs)
                    d._count = "count";
            }
            if (m.deleted != null && m.hasOwnProperty("deleted")) {
                d.deleted = m.deleted;
                if (o.oneofs)
                    d._deleted = "deleted";
            }
            if (m.associatedLabelIDs && m.associatedLabelIDs.length) {
                d.associatedLabelIDs = [];
                for (var j = 0; j < m.associatedLabelIDs.length; ++j) {
                    d.associatedLabelIDs[j] = m.associatedLabelIDs[j];
                }
            }
            return d;
        };

        QuickReplyAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        QuickReplyAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.QuickReplyAction";
        };

        return QuickReplyAction;
    })();

    WASyncAction.LocaleSetting = (function() {

        function LocaleSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LocaleSetting.prototype.locale = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocaleSetting.prototype, "_locale", {
            get: $util.oneOfGetter($oneOfFields = ["locale"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LocaleSetting.create = function create(properties) {
            return new LocaleSetting(properties);
        };

        LocaleSetting.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.locale != null && Object.hasOwnProperty.call(m, "locale"))
                w.uint32(10).string(m.locale);
            return w;
        };

        LocaleSetting.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.LocaleSetting();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.locale = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LocaleSetting.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.LocaleSetting)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.LocaleSetting();
            if (d.locale != null) {
                m.locale = String(d.locale);
            }
            return m;
        };

        LocaleSetting.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.locale != null && m.hasOwnProperty("locale")) {
                d.locale = m.locale;
                if (o.oneofs)
                    d._locale = "locale";
            }
            return d;
        };

        LocaleSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LocaleSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.LocaleSetting";
        };

        return LocaleSetting;
    })();

    WASyncAction.PushNameSetting = (function() {

        function PushNameSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PushNameSetting.prototype.name = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PushNameSetting.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PushNameSetting.create = function create(properties) {
            return new PushNameSetting(properties);
        };

        PushNameSetting.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(10).string(m.name);
            return w;
        };

        PushNameSetting.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PushNameSetting();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.name = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PushNameSetting.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PushNameSetting)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PushNameSetting();
            if (d.name != null) {
                m.name = String(d.name);
            }
            return m;
        };

        PushNameSetting.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d._name = "name";
            }
            return d;
        };

        PushNameSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PushNameSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PushNameSetting";
        };

        return PushNameSetting;
    })();

    WASyncAction.PinAction = (function() {

        function PinAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PinAction.prototype.pinned = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PinAction.prototype, "_pinned", {
            get: $util.oneOfGetter($oneOfFields = ["pinned"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PinAction.create = function create(properties) {
            return new PinAction(properties);
        };

        PinAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pinned != null && Object.hasOwnProperty.call(m, "pinned"))
                w.uint32(8).bool(m.pinned);
            return w;
        };

        PinAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.PinAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.pinned = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PinAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.PinAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.PinAction();
            if (d.pinned != null) {
                m.pinned = Boolean(d.pinned);
            }
            return m;
        };

        PinAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.pinned != null && m.hasOwnProperty("pinned")) {
                d.pinned = m.pinned;
                if (o.oneofs)
                    d._pinned = "pinned";
            }
            return d;
        };

        PinAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PinAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.PinAction";
        };

        return PinAction;
    })();

    WASyncAction.MuteAction = (function() {

        function MuteAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MuteAction.prototype.muted = null;
        MuteAction.prototype.muteEndTimestamp = null;
        MuteAction.prototype.autoMuted = null;
        MuteAction.prototype.muteEveryoneMentionEndTimestamp = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MuteAction.prototype, "_muted", {
            get: $util.oneOfGetter($oneOfFields = ["muted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MuteAction.prototype, "_muteEndTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["muteEndTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MuteAction.prototype, "_autoMuted", {
            get: $util.oneOfGetter($oneOfFields = ["autoMuted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MuteAction.prototype, "_muteEveryoneMentionEndTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["muteEveryoneMentionEndTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MuteAction.create = function create(properties) {
            return new MuteAction(properties);
        };

        MuteAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.muted != null && Object.hasOwnProperty.call(m, "muted"))
                w.uint32(8).bool(m.muted);
            if (m.muteEndTimestamp != null && Object.hasOwnProperty.call(m, "muteEndTimestamp"))
                w.uint32(16).int64(m.muteEndTimestamp);
            if (m.autoMuted != null && Object.hasOwnProperty.call(m, "autoMuted"))
                w.uint32(24).bool(m.autoMuted);
            if (m.muteEveryoneMentionEndTimestamp != null && Object.hasOwnProperty.call(m, "muteEveryoneMentionEndTimestamp"))
                w.uint32(32).int64(m.muteEveryoneMentionEndTimestamp);
            return w;
        };

        MuteAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.MuteAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.muted = r.bool();
                        break;
                    }
                case 2: {
                        m.muteEndTimestamp = r.int64();
                        break;
                    }
                case 3: {
                        m.autoMuted = r.bool();
                        break;
                    }
                case 4: {
                        m.muteEveryoneMentionEndTimestamp = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MuteAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.MuteAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.MuteAction();
            if (d.muted != null) {
                m.muted = Boolean(d.muted);
            }
            if (d.muteEndTimestamp != null) {
                if ($util.Long)
                    (m.muteEndTimestamp = $util.Long.fromValue(d.muteEndTimestamp)).unsigned = false;
                else if (typeof d.muteEndTimestamp === "string")
                    m.muteEndTimestamp = parseInt(d.muteEndTimestamp, 10);
                else if (typeof d.muteEndTimestamp === "number")
                    m.muteEndTimestamp = d.muteEndTimestamp;
                else if (typeof d.muteEndTimestamp === "object")
                    m.muteEndTimestamp = new $util.LongBits(d.muteEndTimestamp.low >>> 0, d.muteEndTimestamp.high >>> 0).toNumber();
            }
            if (d.autoMuted != null) {
                m.autoMuted = Boolean(d.autoMuted);
            }
            if (d.muteEveryoneMentionEndTimestamp != null) {
                if ($util.Long)
                    (m.muteEveryoneMentionEndTimestamp = $util.Long.fromValue(d.muteEveryoneMentionEndTimestamp)).unsigned = false;
                else if (typeof d.muteEveryoneMentionEndTimestamp === "string")
                    m.muteEveryoneMentionEndTimestamp = parseInt(d.muteEveryoneMentionEndTimestamp, 10);
                else if (typeof d.muteEveryoneMentionEndTimestamp === "number")
                    m.muteEveryoneMentionEndTimestamp = d.muteEveryoneMentionEndTimestamp;
                else if (typeof d.muteEveryoneMentionEndTimestamp === "object")
                    m.muteEveryoneMentionEndTimestamp = new $util.LongBits(d.muteEveryoneMentionEndTimestamp.low >>> 0, d.muteEveryoneMentionEndTimestamp.high >>> 0).toNumber();
            }
            return m;
        };

        MuteAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.muted != null && m.hasOwnProperty("muted")) {
                d.muted = m.muted;
                if (o.oneofs)
                    d._muted = "muted";
            }
            if (m.muteEndTimestamp != null && m.hasOwnProperty("muteEndTimestamp")) {
                if (typeof m.muteEndTimestamp === "number")
                    d.muteEndTimestamp = o.longs === String ? String(m.muteEndTimestamp) : m.muteEndTimestamp;
                else
                    d.muteEndTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.muteEndTimestamp) : o.longs === Number ? new $util.LongBits(m.muteEndTimestamp.low >>> 0, m.muteEndTimestamp.high >>> 0).toNumber() : m.muteEndTimestamp;
                if (o.oneofs)
                    d._muteEndTimestamp = "muteEndTimestamp";
            }
            if (m.autoMuted != null && m.hasOwnProperty("autoMuted")) {
                d.autoMuted = m.autoMuted;
                if (o.oneofs)
                    d._autoMuted = "autoMuted";
            }
            if (m.muteEveryoneMentionEndTimestamp != null && m.hasOwnProperty("muteEveryoneMentionEndTimestamp")) {
                if (typeof m.muteEveryoneMentionEndTimestamp === "number")
                    d.muteEveryoneMentionEndTimestamp = o.longs === String ? String(m.muteEveryoneMentionEndTimestamp) : m.muteEveryoneMentionEndTimestamp;
                else
                    d.muteEveryoneMentionEndTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.muteEveryoneMentionEndTimestamp) : o.longs === Number ? new $util.LongBits(m.muteEveryoneMentionEndTimestamp.low >>> 0, m.muteEveryoneMentionEndTimestamp.high >>> 0).toNumber() : m.muteEveryoneMentionEndTimestamp;
                if (o.oneofs)
                    d._muteEveryoneMentionEndTimestamp = "muteEveryoneMentionEndTimestamp";
            }
            return d;
        };

        MuteAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MuteAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.MuteAction";
        };

        return MuteAction;
    })();

    WASyncAction.ContactAction = (function() {

        function ContactAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ContactAction.prototype.fullName = null;
        ContactAction.prototype.firstName = null;
        ContactAction.prototype.lidJID = null;
        ContactAction.prototype.saveOnPrimaryAddressbook = null;
        ContactAction.prototype.pnJID = null;
        ContactAction.prototype.username = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContactAction.prototype, "_fullName", {
            get: $util.oneOfGetter($oneOfFields = ["fullName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContactAction.prototype, "_firstName", {
            get: $util.oneOfGetter($oneOfFields = ["firstName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContactAction.prototype, "_lidJID", {
            get: $util.oneOfGetter($oneOfFields = ["lidJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContactAction.prototype, "_saveOnPrimaryAddressbook", {
            get: $util.oneOfGetter($oneOfFields = ["saveOnPrimaryAddressbook"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContactAction.prototype, "_pnJID", {
            get: $util.oneOfGetter($oneOfFields = ["pnJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ContactAction.prototype, "_username", {
            get: $util.oneOfGetter($oneOfFields = ["username"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ContactAction.create = function create(properties) {
            return new ContactAction(properties);
        };

        ContactAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.fullName != null && Object.hasOwnProperty.call(m, "fullName"))
                w.uint32(10).string(m.fullName);
            if (m.firstName != null && Object.hasOwnProperty.call(m, "firstName"))
                w.uint32(18).string(m.firstName);
            if (m.lidJID != null && Object.hasOwnProperty.call(m, "lidJID"))
                w.uint32(26).string(m.lidJID);
            if (m.saveOnPrimaryAddressbook != null && Object.hasOwnProperty.call(m, "saveOnPrimaryAddressbook"))
                w.uint32(32).bool(m.saveOnPrimaryAddressbook);
            if (m.pnJID != null && Object.hasOwnProperty.call(m, "pnJID"))
                w.uint32(42).string(m.pnJID);
            if (m.username != null && Object.hasOwnProperty.call(m, "username"))
                w.uint32(50).string(m.username);
            return w;
        };

        ContactAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.ContactAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.fullName = r.string();
                        break;
                    }
                case 2: {
                        m.firstName = r.string();
                        break;
                    }
                case 3: {
                        m.lidJID = r.string();
                        break;
                    }
                case 4: {
                        m.saveOnPrimaryAddressbook = r.bool();
                        break;
                    }
                case 5: {
                        m.pnJID = r.string();
                        break;
                    }
                case 6: {
                        m.username = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ContactAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.ContactAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.ContactAction();
            if (d.fullName != null) {
                m.fullName = String(d.fullName);
            }
            if (d.firstName != null) {
                m.firstName = String(d.firstName);
            }
            if (d.lidJID != null) {
                m.lidJID = String(d.lidJID);
            }
            if (d.saveOnPrimaryAddressbook != null) {
                m.saveOnPrimaryAddressbook = Boolean(d.saveOnPrimaryAddressbook);
            }
            if (d.pnJID != null) {
                m.pnJID = String(d.pnJID);
            }
            if (d.username != null) {
                m.username = String(d.username);
            }
            return m;
        };

        ContactAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.fullName != null && m.hasOwnProperty("fullName")) {
                d.fullName = m.fullName;
                if (o.oneofs)
                    d._fullName = "fullName";
            }
            if (m.firstName != null && m.hasOwnProperty("firstName")) {
                d.firstName = m.firstName;
                if (o.oneofs)
                    d._firstName = "firstName";
            }
            if (m.lidJID != null && m.hasOwnProperty("lidJID")) {
                d.lidJID = m.lidJID;
                if (o.oneofs)
                    d._lidJID = "lidJID";
            }
            if (m.saveOnPrimaryAddressbook != null && m.hasOwnProperty("saveOnPrimaryAddressbook")) {
                d.saveOnPrimaryAddressbook = m.saveOnPrimaryAddressbook;
                if (o.oneofs)
                    d._saveOnPrimaryAddressbook = "saveOnPrimaryAddressbook";
            }
            if (m.pnJID != null && m.hasOwnProperty("pnJID")) {
                d.pnJID = m.pnJID;
                if (o.oneofs)
                    d._pnJID = "pnJID";
            }
            if (m.username != null && m.hasOwnProperty("username")) {
                d.username = m.username;
                if (o.oneofs)
                    d._username = "username";
            }
            return d;
        };

        ContactAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ContactAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.ContactAction";
        };

        return ContactAction;
    })();

    WASyncAction.StarAction = (function() {

        function StarAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StarAction.prototype.starred = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StarAction.prototype, "_starred", {
            get: $util.oneOfGetter($oneOfFields = ["starred"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        StarAction.create = function create(properties) {
            return new StarAction(properties);
        };

        StarAction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.starred != null && Object.hasOwnProperty.call(m, "starred"))
                w.uint32(8).bool(m.starred);
            return w;
        };

        StarAction.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.StarAction();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.starred = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        StarAction.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.StarAction)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.StarAction();
            if (d.starred != null) {
                m.starred = Boolean(d.starred);
            }
            return m;
        };

        StarAction.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.starred != null && m.hasOwnProperty("starred")) {
                d.starred = m.starred;
                if (o.oneofs)
                    d._starred = "starred";
            }
            return d;
        };

        StarAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        StarAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.StarAction";
        };

        return StarAction;
    })();

    WASyncAction.SyncActionData = (function() {

        function SyncActionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncActionData.prototype.index = null;
        SyncActionData.prototype.value = null;
        SyncActionData.prototype.padding = null;
        SyncActionData.prototype.version = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionData.prototype, "_index", {
            get: $util.oneOfGetter($oneOfFields = ["index"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionData.prototype, "_value", {
            get: $util.oneOfGetter($oneOfFields = ["value"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionData.prototype, "_padding", {
            get: $util.oneOfGetter($oneOfFields = ["padding"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncActionData.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncActionData.create = function create(properties) {
            return new SyncActionData(properties);
        };

        SyncActionData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(10).bytes(m.index);
            if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                $root.WASyncAction.SyncActionValue.encode(m.value, w.uint32(18).fork()).ldelim();
            if (m.padding != null && Object.hasOwnProperty.call(m, "padding"))
                w.uint32(26).bytes(m.padding);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(32).int32(m.version);
            return w;
        };

        SyncActionData.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASyncAction.SyncActionData();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.index = r.bytes();
                        break;
                    }
                case 2: {
                        m.value = $root.WASyncAction.SyncActionValue.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.padding = r.bytes();
                        break;
                    }
                case 4: {
                        m.version = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncActionData.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASyncAction.SyncActionData)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASyncAction.SyncActionData();
            if (d.index != null) {
                if (typeof d.index === "string")
                    $util.base64.decode(d.index, m.index = $util.newBuffer($util.base64.length(d.index)), 0);
                else if (d.index.length >= 0)
                    m.index = d.index;
            }
            if (d.value != null) {
                if (typeof d.value !== "object")
                    throw TypeError(".WASyncAction.SyncActionData.value: object expected");
                m.value = $root.WASyncAction.SyncActionValue.fromObject(d.value, n + 1);
            }
            if (d.padding != null) {
                if (typeof d.padding === "string")
                    $util.base64.decode(d.padding, m.padding = $util.newBuffer($util.base64.length(d.padding)), 0);
                else if (d.padding.length >= 0)
                    m.padding = d.padding;
            }
            if (d.version != null) {
                m.version = d.version | 0;
            }
            return m;
        };

        SyncActionData.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.index != null && m.hasOwnProperty("index")) {
                d.index = o.bytes === String ? $util.base64.encode(m.index, 0, m.index.length) : o.bytes === Array ? Array.prototype.slice.call(m.index) : m.index;
                if (o.oneofs)
                    d._index = "index";
            }
            if (m.value != null && m.hasOwnProperty("value")) {
                d.value = $root.WASyncAction.SyncActionValue.toObject(m.value, o);
                if (o.oneofs)
                    d._value = "value";
            }
            if (m.padding != null && m.hasOwnProperty("padding")) {
                d.padding = o.bytes === String ? $util.base64.encode(m.padding, 0, m.padding.length) : o.bytes === Array ? Array.prototype.slice.call(m.padding) : m.padding;
                if (o.oneofs)
                    d._padding = "padding";
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            return d;
        };

        SyncActionData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncActionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASyncAction.SyncActionData";
        };

        return SyncActionData;
    })();

    return WASyncAction;
})();

export const WAChatLockSettings = WAChatLockSettings = (() => {

    const WAChatLockSettings = {};

    WAChatLockSettings.ChatLockSettings = (function() {

        function ChatLockSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ChatLockSettings.prototype.hideLockedChats = null;
        ChatLockSettings.prototype.secretCode = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatLockSettings.prototype, "_hideLockedChats", {
            get: $util.oneOfGetter($oneOfFields = ["hideLockedChats"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatLockSettings.prototype, "_secretCode", {
            get: $util.oneOfGetter($oneOfFields = ["secretCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ChatLockSettings.create = function create(properties) {
            return new ChatLockSettings(properties);
        };

        ChatLockSettings.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.hideLockedChats != null && Object.hasOwnProperty.call(m, "hideLockedChats"))
                w.uint32(8).bool(m.hideLockedChats);
            if (m.secretCode != null && Object.hasOwnProperty.call(m, "secretCode"))
                $root.WAUserPassword.UserPassword.encode(m.secretCode, w.uint32(18).fork()).ldelim();
            return w;
        };

        ChatLockSettings.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new WAChatLockSettings.ChatLockSettings();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.hideLockedChats = r.bool();
                        break;
                    }
                case 2: {
                        m.secretCode = $root.WAUserPassword.UserPassword.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ChatLockSettings.fromObject = function fromObject(d, n) {
            if (d instanceof WAChatLockSettings.ChatLockSettings)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new WAChatLockSettings.ChatLockSettings();
            if (d.hideLockedChats != null) {
                m.hideLockedChats = Boolean(d.hideLockedChats);
            }
            if (d.secretCode != null) {
                if (typeof d.secretCode !== "object")
                    throw TypeError(".WAChatLockSettings.ChatLockSettings.secretCode: object expected");
                m.secretCode = $root.WAUserPassword.UserPassword.fromObject(d.secretCode, n + 1);
            }
            return m;
        };

        ChatLockSettings.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.hideLockedChats != null && m.hasOwnProperty("hideLockedChats")) {
                d.hideLockedChats = m.hideLockedChats;
                if (o.oneofs)
                    d._hideLockedChats = "hideLockedChats";
            }
            if (m.secretCode != null && m.hasOwnProperty("secretCode")) {
                d.secretCode = $root.WAUserPassword.UserPassword.toObject(m.secretCode, o);
                if (o.oneofs)
                    d._secretCode = "secretCode";
            }
            return d;
        };

        ChatLockSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ChatLockSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAChatLockSettings.ChatLockSettings";
        };

        return ChatLockSettings;
    })();

    return WAChatLockSettings;
})();

export const WAUserPassword = $root.WAUserPassword = (() => {

    const WAUserPassword = {};

    WAUserPassword.UserPassword = (function() {

        function UserPassword(p) {
            this.transformerArg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UserPassword.prototype.encoding = null;
        UserPassword.prototype.transformer = null;
        UserPassword.prototype.transformerArg = $util.emptyArray;
        UserPassword.prototype.transformedData = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserPassword.prototype, "_encoding", {
            get: $util.oneOfGetter($oneOfFields = ["encoding"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserPassword.prototype, "_transformer", {
            get: $util.oneOfGetter($oneOfFields = ["transformer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserPassword.prototype, "_transformedData", {
            get: $util.oneOfGetter($oneOfFields = ["transformedData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        UserPassword.create = function create(properties) {
            return new UserPassword(properties);
        };

        UserPassword.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.encoding != null && Object.hasOwnProperty.call(m, "encoding"))
                w.uint32(8).int32(m.encoding);
            if (m.transformer != null && Object.hasOwnProperty.call(m, "transformer"))
                w.uint32(16).int32(m.transformer);
            if (m.transformerArg != null && m.transformerArg.length) {
                for (var i = 0; i < m.transformerArg.length; ++i)
                    $root.WAUserPassword.UserPassword.TransformerArg.encode(m.transformerArg[i], w.uint32(26).fork()).ldelim();
            }
            if (m.transformedData != null && Object.hasOwnProperty.call(m, "transformedData"))
                w.uint32(34).bytes(m.transformedData);
            return w;
        };

        UserPassword.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAUserPassword.UserPassword();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.encoding = r.int32();
                        break;
                    }
                case 2: {
                        m.transformer = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.transformerArg && m.transformerArg.length))
                            m.transformerArg = [];
                        m.transformerArg.push($root.WAUserPassword.UserPassword.TransformerArg.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 4: {
                        m.transformedData = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        UserPassword.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAUserPassword.UserPassword)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAUserPassword.UserPassword();
            switch (d.encoding) {
            default:
                if (typeof d.encoding === "number") {
                    m.encoding = d.encoding;
                    break;
                }
                break;
            case "UTF8":
            case 0:
                m.encoding = 0;
                break;
            case "UTF8_BROKEN":
            case 1:
                m.encoding = 1;
                break;
            }
            switch (d.transformer) {
            default:
                if (typeof d.transformer === "number") {
                    m.transformer = d.transformer;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.transformer = 0;
                break;
            case "PBKDF2_HMAC_SHA512":
            case 1:
                m.transformer = 1;
                break;
            case "PBKDF2_HMAC_SHA384":
            case 2:
                m.transformer = 2;
                break;
            }
            if (d.transformerArg) {
                if (!Array.isArray(d.transformerArg))
                    throw TypeError(".WAUserPassword.UserPassword.transformerArg: array expected");
                m.transformerArg = [];
                for (var i = 0; i < d.transformerArg.length; ++i) {
                    if (typeof d.transformerArg[i] !== "object")
                        throw TypeError(".WAUserPassword.UserPassword.transformerArg: object expected");
                    m.transformerArg[i] = $root.WAUserPassword.UserPassword.TransformerArg.fromObject(d.transformerArg[i], n + 1);
                }
            }
            if (d.transformedData != null) {
                if (typeof d.transformedData === "string")
                    $util.base64.decode(d.transformedData, m.transformedData = $util.newBuffer($util.base64.length(d.transformedData)), 0);
                else if (d.transformedData.length >= 0)
                    m.transformedData = d.transformedData;
            }
            return m;
        };

        UserPassword.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.transformerArg = [];
            }
            if (m.encoding != null && m.hasOwnProperty("encoding")) {
                d.encoding = o.enums === String ? $root.WAUserPassword.UserPassword.Encoding[m.encoding] === undefined ? m.encoding : $root.WAUserPassword.UserPassword.Encoding[m.encoding] : m.encoding;
                if (o.oneofs)
                    d._encoding = "encoding";
            }
            if (m.transformer != null && m.hasOwnProperty("transformer")) {
                d.transformer = o.enums === String ? $root.WAUserPassword.UserPassword.Transformer[m.transformer] === undefined ? m.transformer : $root.WAUserPassword.UserPassword.Transformer[m.transformer] : m.transformer;
                if (o.oneofs)
                    d._transformer = "transformer";
            }
            if (m.transformerArg && m.transformerArg.length) {
                d.transformerArg = [];
                for (var j = 0; j < m.transformerArg.length; ++j) {
                    d.transformerArg[j] = $root.WAUserPassword.UserPassword.TransformerArg.toObject(m.transformerArg[j], o);
                }
            }
            if (m.transformedData != null && m.hasOwnProperty("transformedData")) {
                d.transformedData = o.bytes === String ? $util.base64.encode(m.transformedData, 0, m.transformedData.length) : o.bytes === Array ? Array.prototype.slice.call(m.transformedData) : m.transformedData;
                if (o.oneofs)
                    d._transformedData = "transformedData";
            }
            return d;
        };

        UserPassword.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        UserPassword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAUserPassword.UserPassword";
        };

        UserPassword.Transformer = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "PBKDF2_HMAC_SHA512"] = 1;
            values[valuesById[2] = "PBKDF2_HMAC_SHA384"] = 2;
            return values;
        })();

        UserPassword.Encoding = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UTF8"] = 0;
            values[valuesById[1] = "UTF8_BROKEN"] = 1;
            return values;
        })();

        UserPassword.TransformerArg = (function() {

            function TransformerArg(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TransformerArg.prototype.key = null;
            TransformerArg.prototype.value = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(TransformerArg.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(TransformerArg.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            TransformerArg.create = function create(properties) {
                return new TransformerArg(properties);
            };

            TransformerArg.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(10).string(m.key);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    $root.WAUserPassword.UserPassword.TransformerArg.Value.encode(m.value, w.uint32(18).fork()).ldelim();
                return w;
            };

            TransformerArg.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAUserPassword.UserPassword.TransformerArg();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.key = r.string();
                            break;
                        }
                    case 2: {
                            m.value = $root.WAUserPassword.UserPassword.TransformerArg.Value.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            TransformerArg.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAUserPassword.UserPassword.TransformerArg)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAUserPassword.UserPassword.TransformerArg();
                if (d.key != null) {
                    m.key = String(d.key);
                }
                if (d.value != null) {
                    if (typeof d.value !== "object")
                        throw TypeError(".WAUserPassword.UserPassword.TransformerArg.value: object expected");
                    m.value = $root.WAUserPassword.UserPassword.TransformerArg.Value.fromObject(d.value, n + 1);
                }
                return m;
            };

            TransformerArg.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.key != null && m.hasOwnProperty("key")) {
                    d.key = m.key;
                    if (o.oneofs)
                        d._key = "key";
                }
                if (m.value != null && m.hasOwnProperty("value")) {
                    d.value = $root.WAUserPassword.UserPassword.TransformerArg.Value.toObject(m.value, o);
                    if (o.oneofs)
                        d._value = "value";
                }
                return d;
            };

            TransformerArg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            TransformerArg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAUserPassword.UserPassword.TransformerArg";
            };

            TransformerArg.Value = (function() {

                function Value(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Value.prototype.asBlob = null;
                Value.prototype.asUnsignedInteger = null;

                let $oneOfFields;

                Object.defineProperty(Value.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["asBlob", "asUnsignedInteger"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Value.create = function create(properties) {
                    return new Value(properties);
                };

                Value.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.asBlob != null && Object.hasOwnProperty.call(m, "asBlob"))
                        w.uint32(10).bytes(m.asBlob);
                    if (m.asUnsignedInteger != null && Object.hasOwnProperty.call(m, "asUnsignedInteger"))
                        w.uint32(16).uint32(m.asUnsignedInteger);
                    return w;
                };

                Value.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAUserPassword.UserPassword.TransformerArg.Value();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.asBlob = r.bytes();
                                break;
                            }
                        case 2: {
                                m.asUnsignedInteger = r.uint32();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Value.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAUserPassword.UserPassword.TransformerArg.Value)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAUserPassword.UserPassword.TransformerArg.Value();
                    if (d.asBlob != null) {
                        if (typeof d.asBlob === "string")
                            $util.base64.decode(d.asBlob, m.asBlob = $util.newBuffer($util.base64.length(d.asBlob)), 0);
                        else if (d.asBlob.length >= 0)
                            m.asBlob = d.asBlob;
                    }
                    if (d.asUnsignedInteger != null) {
                        m.asUnsignedInteger = d.asUnsignedInteger >>> 0;
                    }
                    return m;
                };

                Value.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.asBlob != null && m.hasOwnProperty("asBlob")) {
                        d.asBlob = o.bytes === String ? $util.base64.encode(m.asBlob, 0, m.asBlob.length) : o.bytes === Array ? Array.prototype.slice.call(m.asBlob) : m.asBlob;
                        if (o.oneofs)
                            d.value = "asBlob";
                    }
                    if (m.asUnsignedInteger != null && m.hasOwnProperty("asUnsignedInteger")) {
                        d.asUnsignedInteger = m.asUnsignedInteger;
                        if (o.oneofs)
                            d.value = "asUnsignedInteger";
                    }
                    return d;
                };

                Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAUserPassword.UserPassword.TransformerArg.Value";
                };

                return Value;
            })();

            return TransformerArg;
        })();

        return UserPassword;
    })();

    return WAUserPassword;
})();

export const WADeviceCapabilities = WADeviceCapabilities = (() => {

    const WADeviceCapabilities = {};

    WADeviceCapabilities.DeviceCapabilities = (function() {

        function DeviceCapabilities(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceCapabilities.prototype.chatLockSupportLevel = null;
        DeviceCapabilities.prototype.lidMigration = null;
        DeviceCapabilities.prototype.businessBroadcast = null;
        DeviceCapabilities.prototype.userHasAvatar = null;
        DeviceCapabilities.prototype.memberNameTagPrimarySupport = null;
        DeviceCapabilities.prototype.aiThread = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceCapabilities.prototype, "_chatLockSupportLevel", {
            get: $util.oneOfGetter($oneOfFields = ["chatLockSupportLevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceCapabilities.prototype, "_lidMigration", {
            get: $util.oneOfGetter($oneOfFields = ["lidMigration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceCapabilities.prototype, "_businessBroadcast", {
            get: $util.oneOfGetter($oneOfFields = ["businessBroadcast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceCapabilities.prototype, "_userHasAvatar", {
            get: $util.oneOfGetter($oneOfFields = ["userHasAvatar"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceCapabilities.prototype, "_memberNameTagPrimarySupport", {
            get: $util.oneOfGetter($oneOfFields = ["memberNameTagPrimarySupport"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceCapabilities.prototype, "_aiThread", {
            get: $util.oneOfGetter($oneOfFields = ["aiThread"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeviceCapabilities.create = function create(properties) {
            return new DeviceCapabilities(properties);
        };

        DeviceCapabilities.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chatLockSupportLevel != null && Object.hasOwnProperty.call(m, "chatLockSupportLevel"))
                w.uint32(8).int32(m.chatLockSupportLevel);
            if (m.lidMigration != null && Object.hasOwnProperty.call(m, "lidMigration"))
                WADeviceCapabilities.DeviceCapabilities.LIDMigration.encode(m.lidMigration, w.uint32(18).fork()).ldelim();
            if (m.businessBroadcast != null && Object.hasOwnProperty.call(m, "businessBroadcast"))
                WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast.encode(m.businessBroadcast, w.uint32(26).fork()).ldelim();
            if (m.userHasAvatar != null && Object.hasOwnProperty.call(m, "userHasAvatar"))
                WADeviceCapabilities.DeviceCapabilities.UserHasAvatar.encode(m.userHasAvatar, w.uint32(34).fork()).ldelim();
            if (m.memberNameTagPrimarySupport != null && Object.hasOwnProperty.call(m, "memberNameTagPrimarySupport"))
                w.uint32(40).int32(m.memberNameTagPrimarySupport);
            if (m.aiThread != null && Object.hasOwnProperty.call(m, "aiThread"))
                WADeviceCapabilities.DeviceCapabilities.AiThread.encode(m.aiThread, w.uint32(50).fork()).ldelim();
            return w;
        };

        DeviceCapabilities.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new WADeviceCapabilities.DeviceCapabilities();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.chatLockSupportLevel = r.int32();
                        break;
                    }
                case 2: {
                        m.lidMigration = WADeviceCapabilities.DeviceCapabilities.LIDMigration.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.businessBroadcast = WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.userHasAvatar = WADeviceCapabilities.DeviceCapabilities.UserHasAvatar.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 5: {
                        m.memberNameTagPrimarySupport = r.int32();
                        break;
                    }
                case 6: {
                        m.aiThread = WADeviceCapabilities.DeviceCapabilities.AiThread.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeviceCapabilities.fromObject = function fromObject(d, n) {
            if (d instanceof WADeviceCapabilities.DeviceCapabilities)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new WADeviceCapabilities.DeviceCapabilities();
            switch (d.chatLockSupportLevel) {
            default:
                if (typeof d.chatLockSupportLevel === "number") {
                    m.chatLockSupportLevel = d.chatLockSupportLevel;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.chatLockSupportLevel = 0;
                break;
            case "MINIMAL":
            case 1:
                m.chatLockSupportLevel = 1;
                break;
            case "FULL":
            case 2:
                m.chatLockSupportLevel = 2;
                break;
            }
            if (d.lidMigration != null) {
                if (typeof d.lidMigration !== "object")
                    throw TypeError(".WADeviceCapabilities.DeviceCapabilities.lidMigration: object expected");
                m.lidMigration = WADeviceCapabilities.DeviceCapabilities.LIDMigration.fromObject(d.lidMigration, n + 1);
            }
            if (d.businessBroadcast != null) {
                if (typeof d.businessBroadcast !== "object")
                    throw TypeError(".WADeviceCapabilities.DeviceCapabilities.businessBroadcast: object expected");
                m.businessBroadcast = WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast.fromObject(d.businessBroadcast, n + 1);
            }
            if (d.userHasAvatar != null) {
                if (typeof d.userHasAvatar !== "object")
                    throw TypeError(".WADeviceCapabilities.DeviceCapabilities.userHasAvatar: object expected");
                m.userHasAvatar = WADeviceCapabilities.DeviceCapabilities.UserHasAvatar.fromObject(d.userHasAvatar, n + 1);
            }
            switch (d.memberNameTagPrimarySupport) {
            default:
                if (typeof d.memberNameTagPrimarySupport === "number") {
                    m.memberNameTagPrimarySupport = d.memberNameTagPrimarySupport;
                    break;
                }
                break;
            case "DISABLED":
            case 0:
                m.memberNameTagPrimarySupport = 0;
                break;
            case "RECEIVER_ENABLED":
            case 1:
                m.memberNameTagPrimarySupport = 1;
                break;
            case "SENDER_ENABLED":
            case 2:
                m.memberNameTagPrimarySupport = 2;
                break;
            }
            if (d.aiThread != null) {
                if (typeof d.aiThread !== "object")
                    throw TypeError(".WADeviceCapabilities.DeviceCapabilities.aiThread: object expected");
                m.aiThread = WADeviceCapabilities.DeviceCapabilities.AiThread.fromObject(d.aiThread, n + 1);
            }
            return m;
        };

        DeviceCapabilities.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.chatLockSupportLevel != null && m.hasOwnProperty("chatLockSupportLevel")) {
                d.chatLockSupportLevel = o.enums === String ? WADeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[m.chatLockSupportLevel] === undefined ? m.chatLockSupportLevel : WADeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[m.chatLockSupportLevel] : m.chatLockSupportLevel;
                if (o.oneofs)
                    d._chatLockSupportLevel = "chatLockSupportLevel";
            }
            if (m.lidMigration != null && m.hasOwnProperty("lidMigration")) {
                d.lidMigration = WADeviceCapabilities.DeviceCapabilities.LIDMigration.toObject(m.lidMigration, o);
                if (o.oneofs)
                    d._lidMigration = "lidMigration";
            }
            if (m.businessBroadcast != null && m.hasOwnProperty("businessBroadcast")) {
                d.businessBroadcast = WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast.toObject(m.businessBroadcast, o);
                if (o.oneofs)
                    d._businessBroadcast = "businessBroadcast";
            }
            if (m.userHasAvatar != null && m.hasOwnProperty("userHasAvatar")) {
                d.userHasAvatar = WADeviceCapabilities.DeviceCapabilities.UserHasAvatar.toObject(m.userHasAvatar, o);
                if (o.oneofs)
                    d._userHasAvatar = "userHasAvatar";
            }
            if (m.memberNameTagPrimarySupport != null && m.hasOwnProperty("memberNameTagPrimarySupport")) {
                d.memberNameTagPrimarySupport = o.enums === String ? WADeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[m.memberNameTagPrimarySupport] === undefined ? m.memberNameTagPrimarySupport : WADeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[m.memberNameTagPrimarySupport] : m.memberNameTagPrimarySupport;
                if (o.oneofs)
                    d._memberNameTagPrimarySupport = "memberNameTagPrimarySupport";
            }
            if (m.aiThread != null && m.hasOwnProperty("aiThread")) {
                d.aiThread = WADeviceCapabilities.DeviceCapabilities.AiThread.toObject(m.aiThread, o);
                if (o.oneofs)
                    d._aiThread = "aiThread";
            }
            return d;
        };

        DeviceCapabilities.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeviceCapabilities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WADeviceCapabilities.DeviceCapabilities";
        };

        DeviceCapabilities.MemberNameTagPrimarySupport = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DISABLED"] = 0;
            values[valuesById[1] = "RECEIVER_ENABLED"] = 1;
            values[valuesById[2] = "SENDER_ENABLED"] = 2;
            return values;
        })();

        DeviceCapabilities.ChatLockSupportLevel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "MINIMAL"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            return values;
        })();

        DeviceCapabilities.AiThread = (function() {

            function AiThread(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AiThread.prototype.supportLevel = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AiThread.prototype, "_supportLevel", {
                get: $util.oneOfGetter($oneOfFields = ["supportLevel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AiThread.create = function create(properties) {
                return new AiThread(properties);
            };

            AiThread.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.supportLevel != null && Object.hasOwnProperty.call(m, "supportLevel"))
                    w.uint32(8).int32(m.supportLevel);
                return w;
            };

            AiThread.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new WADeviceCapabilities.DeviceCapabilities.AiThread();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.supportLevel = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AiThread.fromObject = function fromObject(d, n) {
                if (d instanceof WADeviceCapabilities.DeviceCapabilities.AiThread)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new WADeviceCapabilities.DeviceCapabilities.AiThread();
                switch (d.supportLevel) {
                default:
                    if (typeof d.supportLevel === "number") {
                        m.supportLevel = d.supportLevel;
                        break;
                    }
                    break;
                case "NONE":
                case 0:
                    m.supportLevel = 0;
                    break;
                case "INFRA":
                case 1:
                    m.supportLevel = 1;
                    break;
                case "FULL":
                case 2:
                    m.supportLevel = 2;
                    break;
                }
                return m;
            };

            AiThread.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.supportLevel != null && m.hasOwnProperty("supportLevel")) {
                    d.supportLevel = o.enums === String ? WADeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[m.supportLevel] === undefined ? m.supportLevel : WADeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[m.supportLevel] : m.supportLevel;
                    if (o.oneofs)
                        d._supportLevel = "supportLevel";
                }
                return d;
            };

            AiThread.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AiThread.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WADeviceCapabilities.DeviceCapabilities.AiThread";
            };

            AiThread.SupportLevel = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "INFRA"] = 1;
                values[valuesById[2] = "FULL"] = 2;
                return values;
            })();

            return AiThread;
        })();

        DeviceCapabilities.UserHasAvatar = (function() {

            function UserHasAvatar(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UserHasAvatar.prototype.userHasAvatar = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserHasAvatar.prototype, "_userHasAvatar", {
                get: $util.oneOfGetter($oneOfFields = ["userHasAvatar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            UserHasAvatar.create = function create(properties) {
                return new UserHasAvatar(properties);
            };

            UserHasAvatar.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.userHasAvatar != null && Object.hasOwnProperty.call(m, "userHasAvatar"))
                    w.uint32(8).bool(m.userHasAvatar);
                return w;
            };

            UserHasAvatar.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new WADeviceCapabilities.DeviceCapabilities.UserHasAvatar();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.userHasAvatar = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            UserHasAvatar.fromObject = function fromObject(d, n) {
                if (d instanceof WADeviceCapabilities.DeviceCapabilities.UserHasAvatar)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new WADeviceCapabilities.DeviceCapabilities.UserHasAvatar();
                if (d.userHasAvatar != null) {
                    m.userHasAvatar = Boolean(d.userHasAvatar);
                }
                return m;
            };

            UserHasAvatar.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.userHasAvatar != null && m.hasOwnProperty("userHasAvatar")) {
                    d.userHasAvatar = m.userHasAvatar;
                    if (o.oneofs)
                        d._userHasAvatar = "userHasAvatar";
                }
                return d;
            };

            UserHasAvatar.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UserHasAvatar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WADeviceCapabilities.DeviceCapabilities.UserHasAvatar";
            };

            return UserHasAvatar;
        })();

        DeviceCapabilities.BusinessBroadcast = (function() {

            function BusinessBroadcast(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BusinessBroadcast.prototype.importListEnabled = null;
            BusinessBroadcast.prototype.companionSupportEnabled = null;
            BusinessBroadcast.prototype.campaignSyncEnabled = null;
            BusinessBroadcast.prototype.insightsSyncEnabled = null;
            BusinessBroadcast.prototype.recipientLimit = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BusinessBroadcast.prototype, "_importListEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["importListEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BusinessBroadcast.prototype, "_companionSupportEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["companionSupportEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BusinessBroadcast.prototype, "_campaignSyncEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["campaignSyncEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BusinessBroadcast.prototype, "_insightsSyncEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["insightsSyncEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BusinessBroadcast.prototype, "_recipientLimit", {
                get: $util.oneOfGetter($oneOfFields = ["recipientLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            BusinessBroadcast.create = function create(properties) {
                return new BusinessBroadcast(properties);
            };

            BusinessBroadcast.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.importListEnabled != null && Object.hasOwnProperty.call(m, "importListEnabled"))
                    w.uint32(8).bool(m.importListEnabled);
                if (m.companionSupportEnabled != null && Object.hasOwnProperty.call(m, "companionSupportEnabled"))
                    w.uint32(16).bool(m.companionSupportEnabled);
                if (m.campaignSyncEnabled != null && Object.hasOwnProperty.call(m, "campaignSyncEnabled"))
                    w.uint32(24).bool(m.campaignSyncEnabled);
                if (m.insightsSyncEnabled != null && Object.hasOwnProperty.call(m, "insightsSyncEnabled"))
                    w.uint32(32).bool(m.insightsSyncEnabled);
                if (m.recipientLimit != null && Object.hasOwnProperty.call(m, "recipientLimit"))
                    w.uint32(40).int32(m.recipientLimit);
                return w;
            };

            BusinessBroadcast.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.importListEnabled = r.bool();
                            break;
                        }
                    case 2: {
                            m.companionSupportEnabled = r.bool();
                            break;
                        }
                    case 3: {
                            m.campaignSyncEnabled = r.bool();
                            break;
                        }
                    case 4: {
                            m.insightsSyncEnabled = r.bool();
                            break;
                        }
                    case 5: {
                            m.recipientLimit = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            BusinessBroadcast.fromObject = function fromObject(d, n) {
                if (d instanceof WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast();
                if (d.importListEnabled != null) {
                    m.importListEnabled = Boolean(d.importListEnabled);
                }
                if (d.companionSupportEnabled != null) {
                    m.companionSupportEnabled = Boolean(d.companionSupportEnabled);
                }
                if (d.campaignSyncEnabled != null) {
                    m.campaignSyncEnabled = Boolean(d.campaignSyncEnabled);
                }
                if (d.insightsSyncEnabled != null) {
                    m.insightsSyncEnabled = Boolean(d.insightsSyncEnabled);
                }
                if (d.recipientLimit != null) {
                    m.recipientLimit = d.recipientLimit | 0;
                }
                return m;
            };

            BusinessBroadcast.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.importListEnabled != null && m.hasOwnProperty("importListEnabled")) {
                    d.importListEnabled = m.importListEnabled;
                    if (o.oneofs)
                        d._importListEnabled = "importListEnabled";
                }
                if (m.companionSupportEnabled != null && m.hasOwnProperty("companionSupportEnabled")) {
                    d.companionSupportEnabled = m.companionSupportEnabled;
                    if (o.oneofs)
                        d._companionSupportEnabled = "companionSupportEnabled";
                }
                if (m.campaignSyncEnabled != null && m.hasOwnProperty("campaignSyncEnabled")) {
                    d.campaignSyncEnabled = m.campaignSyncEnabled;
                    if (o.oneofs)
                        d._campaignSyncEnabled = "campaignSyncEnabled";
                }
                if (m.insightsSyncEnabled != null && m.hasOwnProperty("insightsSyncEnabled")) {
                    d.insightsSyncEnabled = m.insightsSyncEnabled;
                    if (o.oneofs)
                        d._insightsSyncEnabled = "insightsSyncEnabled";
                }
                if (m.recipientLimit != null && m.hasOwnProperty("recipientLimit")) {
                    d.recipientLimit = m.recipientLimit;
                    if (o.oneofs)
                        d._recipientLimit = "recipientLimit";
                }
                return d;
            };

            BusinessBroadcast.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BusinessBroadcast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WADeviceCapabilities.DeviceCapabilities.BusinessBroadcast";
            };

            return BusinessBroadcast;
        })();

        DeviceCapabilities.LIDMigration = (function() {

            function LIDMigration(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LIDMigration.prototype.chatDbMigrationTimestamp = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(LIDMigration.prototype, "_chatDbMigrationTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["chatDbMigrationTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            LIDMigration.create = function create(properties) {
                return new LIDMigration(properties);
            };

            LIDMigration.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.chatDbMigrationTimestamp != null && Object.hasOwnProperty.call(m, "chatDbMigrationTimestamp"))
                    w.uint32(8).uint64(m.chatDbMigrationTimestamp);
                return w;
            };

            LIDMigration.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new WADeviceCapabilities.DeviceCapabilities.LIDMigration();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.chatDbMigrationTimestamp = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            LIDMigration.fromObject = function fromObject(d, n) {
                if (d instanceof WADeviceCapabilities.DeviceCapabilities.LIDMigration)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new WADeviceCapabilities.DeviceCapabilities.LIDMigration();
                if (d.chatDbMigrationTimestamp != null) {
                    if ($util.Long)
                        (m.chatDbMigrationTimestamp = $util.Long.fromValue(d.chatDbMigrationTimestamp)).unsigned = true;
                    else if (typeof d.chatDbMigrationTimestamp === "string")
                        m.chatDbMigrationTimestamp = parseInt(d.chatDbMigrationTimestamp, 10);
                    else if (typeof d.chatDbMigrationTimestamp === "number")
                        m.chatDbMigrationTimestamp = d.chatDbMigrationTimestamp;
                    else if (typeof d.chatDbMigrationTimestamp === "object")
                        m.chatDbMigrationTimestamp = new $util.LongBits(d.chatDbMigrationTimestamp.low >>> 0, d.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
                }
                return m;
            };

            LIDMigration.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.chatDbMigrationTimestamp != null && m.hasOwnProperty("chatDbMigrationTimestamp")) {
                    if (typeof m.chatDbMigrationTimestamp === "number")
                        d.chatDbMigrationTimestamp = o.longs === String ? String(m.chatDbMigrationTimestamp) : m.chatDbMigrationTimestamp;
                    else
                        d.chatDbMigrationTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.chatDbMigrationTimestamp) : o.longs === Number ? new $util.LongBits(m.chatDbMigrationTimestamp.low >>> 0, m.chatDbMigrationTimestamp.high >>> 0).toNumber(true) : m.chatDbMigrationTimestamp;
                    if (o.oneofs)
                        d._chatDbMigrationTimestamp = "chatDbMigrationTimestamp";
                }
                return d;
            };

            LIDMigration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            LIDMigration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WADeviceCapabilities.DeviceCapabilities.LIDMigration";
            };

            return LIDMigration;
        })();

        return DeviceCapabilities;
    })();

    return WADeviceCapabilities;
})();

export const WACommon = WACommon = (() => {

    const WACommon = {};

    WACommon.LimitSharing = (function() {

        function LimitSharing(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LimitSharing.prototype.sharingLimited = null;
        LimitSharing.prototype.trigger = null;
        LimitSharing.prototype.limitSharingSettingTimestamp = null;
        LimitSharing.prototype.initiatedByMe = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_sharingLimited", {
            get: $util.oneOfGetter($oneOfFields = ["sharingLimited"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_trigger", {
            get: $util.oneOfGetter($oneOfFields = ["trigger"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_limitSharingSettingTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["limitSharingSettingTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_initiatedByMe", {
            get: $util.oneOfGetter($oneOfFields = ["initiatedByMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LimitSharing.create = function create(properties) {
            return new LimitSharing(properties);
        };

        LimitSharing.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sharingLimited != null && Object.hasOwnProperty.call(m, "sharingLimited"))
                w.uint32(8).bool(m.sharingLimited);
            if (m.trigger != null && Object.hasOwnProperty.call(m, "trigger"))
                w.uint32(16).int32(m.trigger);
            if (m.limitSharingSettingTimestamp != null && Object.hasOwnProperty.call(m, "limitSharingSettingTimestamp"))
                w.uint32(24).int64(m.limitSharingSettingTimestamp);
            if (m.initiatedByMe != null && Object.hasOwnProperty.call(m, "initiatedByMe"))
                w.uint32(32).bool(m.initiatedByMe);
            return w;
        };

        LimitSharing.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new WACommon.LimitSharing();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.sharingLimited = r.bool();
                        break;
                    }
                case 2: {
                        m.trigger = r.int32();
                        break;
                    }
                case 3: {
                        m.limitSharingSettingTimestamp = r.int64();
                        break;
                    }
                case 4: {
                        m.initiatedByMe = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LimitSharing.fromObject = function fromObject(d, n) {
            if (d instanceof WACommon.LimitSharing)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new WACommon.LimitSharing();
            if (d.sharingLimited != null) {
                m.sharingLimited = Boolean(d.sharingLimited);
            }
            switch (d.trigger) {
            default:
                if (typeof d.trigger === "number") {
                    m.trigger = d.trigger;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.trigger = 0;
                break;
            case "CHAT_SETTING":
            case 1:
                m.trigger = 1;
                break;
            case "BIZ_SUPPORTS_FB_HOSTING":
            case 2:
                m.trigger = 2;
                break;
            case "UNKNOWN_GROUP":
            case 3:
                m.trigger = 3;
                break;
            }
            if (d.limitSharingSettingTimestamp != null) {
                if ($util.Long)
                    (m.limitSharingSettingTimestamp = $util.Long.fromValue(d.limitSharingSettingTimestamp)).unsigned = false;
                else if (typeof d.limitSharingSettingTimestamp === "string")
                    m.limitSharingSettingTimestamp = parseInt(d.limitSharingSettingTimestamp, 10);
                else if (typeof d.limitSharingSettingTimestamp === "number")
                    m.limitSharingSettingTimestamp = d.limitSharingSettingTimestamp;
                else if (typeof d.limitSharingSettingTimestamp === "object")
                    m.limitSharingSettingTimestamp = new $util.LongBits(d.limitSharingSettingTimestamp.low >>> 0, d.limitSharingSettingTimestamp.high >>> 0).toNumber();
            }
            if (d.initiatedByMe != null) {
                m.initiatedByMe = Boolean(d.initiatedByMe);
            }
            return m;
        };

        LimitSharing.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.sharingLimited != null && m.hasOwnProperty("sharingLimited")) {
                d.sharingLimited = m.sharingLimited;
                if (o.oneofs)
                    d._sharingLimited = "sharingLimited";
            }
            if (m.trigger != null && m.hasOwnProperty("trigger")) {
                d.trigger = o.enums === String ? WACommon.LimitSharing.TriggerType[m.trigger] === undefined ? m.trigger : WACommon.LimitSharing.TriggerType[m.trigger] : m.trigger;
                if (o.oneofs)
                    d._trigger = "trigger";
            }
            if (m.limitSharingSettingTimestamp != null && m.hasOwnProperty("limitSharingSettingTimestamp")) {
                if (typeof m.limitSharingSettingTimestamp === "number")
                    d.limitSharingSettingTimestamp = o.longs === String ? String(m.limitSharingSettingTimestamp) : m.limitSharingSettingTimestamp;
                else
                    d.limitSharingSettingTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.limitSharingSettingTimestamp) : o.longs === Number ? new $util.LongBits(m.limitSharingSettingTimestamp.low >>> 0, m.limitSharingSettingTimestamp.high >>> 0).toNumber() : m.limitSharingSettingTimestamp;
                if (o.oneofs)
                    d._limitSharingSettingTimestamp = "limitSharingSettingTimestamp";
            }
            if (m.initiatedByMe != null && m.hasOwnProperty("initiatedByMe")) {
                d.initiatedByMe = m.initiatedByMe;
                if (o.oneofs)
                    d._initiatedByMe = "initiatedByMe";
            }
            return d;
        };

        LimitSharing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LimitSharing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACommon.LimitSharing";
        };

        LimitSharing.TriggerType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
            values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
            return values;
        })();

        return LimitSharing;
    })();

    WACommon.MessageKey = (function() {

        function MessageKey(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageKey.prototype.remoteJID = null;
        MessageKey.prototype.fromMe = null;
        MessageKey.prototype.ID = null;
        MessageKey.prototype.participant = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_remoteJID", {
            get: $util.oneOfGetter($oneOfFields = ["remoteJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_fromMe", {
            get: $util.oneOfGetter($oneOfFields = ["fromMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_ID", {
            get: $util.oneOfGetter($oneOfFields = ["ID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_participant", {
            get: $util.oneOfGetter($oneOfFields = ["participant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MessageKey.create = function create(properties) {
            return new MessageKey(properties);
        };

        MessageKey.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.remoteJID != null && Object.hasOwnProperty.call(m, "remoteJID"))
                w.uint32(10).string(m.remoteJID);
            if (m.fromMe != null && Object.hasOwnProperty.call(m, "fromMe"))
                w.uint32(16).bool(m.fromMe);
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(26).string(m.ID);
            if (m.participant != null && Object.hasOwnProperty.call(m, "participant"))
                w.uint32(34).string(m.participant);
            return w;
        };

        MessageKey.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new WACommon.MessageKey();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.remoteJID = r.string();
                        break;
                    }
                case 2: {
                        m.fromMe = r.bool();
                        break;
                    }
                case 3: {
                        m.ID = r.string();
                        break;
                    }
                case 4: {
                        m.participant = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MessageKey.fromObject = function fromObject(d, n) {
            if (d instanceof WACommon.MessageKey)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new WACommon.MessageKey();
            if (d.remoteJID != null) {
                m.remoteJID = String(d.remoteJID);
            }
            if (d.fromMe != null) {
                m.fromMe = Boolean(d.fromMe);
            }
            if (d.ID != null) {
                m.ID = String(d.ID);
            }
            if (d.participant != null) {
                m.participant = String(d.participant);
            }
            return m;
        };

        MessageKey.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.remoteJID != null && m.hasOwnProperty("remoteJID")) {
                d.remoteJID = m.remoteJID;
                if (o.oneofs)
                    d._remoteJID = "remoteJID";
            }
            if (m.fromMe != null && m.hasOwnProperty("fromMe")) {
                d.fromMe = m.fromMe;
                if (o.oneofs)
                    d._fromMe = "fromMe";
            }
            if (m.ID != null && m.hasOwnProperty("ID")) {
                d.ID = m.ID;
                if (o.oneofs)
                    d._ID = "ID";
            }
            if (m.participant != null && m.hasOwnProperty("participant")) {
                d.participant = m.participant;
                if (o.oneofs)
                    d._participant = "participant";
            }
            return d;
        };

        MessageKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACommon.MessageKey";
        };

        return MessageKey;
    })();

    return WACommon;
})();

export { $root as default };

