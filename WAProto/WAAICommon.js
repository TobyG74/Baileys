/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";
import { WACommon } from './WACommon.js';

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAAICommon = $root.WAAICommon = (() => {

    const WAAICommon = {};

    WAAICommon.BotMetricsEntryPoint = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNDEFINED_ENTRY_POINT"] = 0;
        values[valuesById[1] = "FAVICON"] = 1;
        values[valuesById[2] = "CHATLIST"] = 2;
        values[valuesById[3] = "AISEARCH_NULL_STATE_PAPER_PLANE"] = 3;
        values[valuesById[4] = "AISEARCH_NULL_STATE_SUGGESTION"] = 4;
        values[valuesById[5] = "AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5;
        values[valuesById[6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6;
        values[valuesById[7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7;
        values[valuesById[8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8;
        values[valuesById[9] = "AIVOICE_SEARCH_BAR"] = 9;
        values[valuesById[10] = "AIVOICE_FAVICON"] = 10;
        values[valuesById[11] = "AISTUDIO"] = 11;
        values[valuesById[12] = "DEEPLINK"] = 12;
        values[valuesById[13] = "NOTIFICATION"] = 13;
        values[valuesById[14] = "PROFILE_MESSAGE_BUTTON"] = 14;
        values[valuesById[15] = "FORWARD"] = 15;
        values[valuesById[16] = "APP_SHORTCUT"] = 16;
        values[valuesById[17] = "FF_FAMILY"] = 17;
        values[valuesById[18] = "AI_TAB"] = 18;
        values[valuesById[19] = "AI_HOME"] = 19;
        values[valuesById[20] = "AI_DEEPLINK_IMMERSIVE"] = 20;
        values[valuesById[21] = "AI_DEEPLINK"] = 21;
        values[valuesById[22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22;
        values[valuesById[23] = "UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23;
        values[valuesById[24] = "NEW_CHAT_AI_STUDIO"] = 24;
        values[valuesById[25] = "AIVOICE_FAVICON_CALL_HISTORY"] = 25;
        values[valuesById[26] = "ASK_META_AI_CONTEXT_MENU"] = 26;
        values[valuesById[27] = "ASK_META_AI_CONTEXT_MENU_1ON1"] = 27;
        values[valuesById[28] = "ASK_META_AI_CONTEXT_MENU_GROUP"] = 28;
        values[valuesById[29] = "INVOKE_META_AI_1ON1"] = 29;
        values[valuesById[30] = "INVOKE_META_AI_GROUP"] = 30;
        values[valuesById[31] = "META_AI_FORWARD"] = 31;
        values[valuesById[32] = "NEW_CHAT_AI_CONTACT"] = 32;
        values[valuesById[33] = "MESSAGE_QUICK_ACTION_1_ON_1_CHAT"] = 33;
        values[valuesById[34] = "MESSAGE_QUICK_ACTION_GROUP_CHAT"] = 34;
        values[valuesById[35] = "ATTACHMENT_TRAY_1_ON_1_CHAT"] = 35;
        values[valuesById[36] = "ATTACHMENT_TRAY_GROUP_CHAT"] = 36;
        values[valuesById[37] = "ASK_META_AI_MEDIA_VIEWER_1ON1"] = 37;
        values[valuesById[38] = "ASK_META_AI_MEDIA_VIEWER_GROUP"] = 38;
        values[valuesById[39] = "MEDIA_PICKER_1_ON_1_CHAT"] = 39;
        values[valuesById[40] = "MEDIA_PICKER_GROUP_CHAT"] = 40;
        values[valuesById[41] = "ASK_META_AI_NO_SEARCH_RESULTS"] = 41;
        values[valuesById[45] = "META_AI_SETTINGS"] = 45;
        values[valuesById[46] = "WEB_INTRO_PANEL"] = 46;
        values[valuesById[47] = "WEB_NAVIGATION_BAR"] = 47;
        values[valuesById[54] = "GROUP_MEMBER"] = 54;
        values[valuesById[55] = "CHATLIST_SEARCH"] = 55;
        values[valuesById[56] = "NEW_CHAT_LIST"] = 56;
        return values;
    })();

    WAAICommon.BotMetricsThreadEntryPoint = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "AI_TAB_THREAD"] = 1;
        values[valuesById[2] = "AI_HOME_THREAD"] = 2;
        values[valuesById[3] = "AI_DEEPLINK_IMMERSIVE_THREAD"] = 3;
        values[valuesById[4] = "AI_DEEPLINK_THREAD"] = 4;
        values[valuesById[5] = "ASK_META_AI_CONTEXT_MENU_THREAD"] = 5;
        return values;
    })();

    WAAICommon.BotSessionSource = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "NULL_STATE"] = 1;
        values[valuesById[2] = "TYPEAHEAD"] = 2;
        values[valuesById[3] = "USER_INPUT"] = 3;
        values[valuesById[4] = "EMU_FLASH"] = 4;
        values[valuesById[5] = "EMU_FLASH_FOLLOWUP"] = 5;
        values[valuesById[6] = "VOICE"] = 6;
        values[valuesById[7] = "AI_HOME_SESSION"] = 7;
        return values;
    })();

    WAAICommon.AISubscriptionRequestType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSPECIFIED"] = 0;
        values[valuesById[1] = "THINK_HARD"] = 1;
        values[valuesById[2] = "IMAGE_GEN"] = 2;
        values[valuesById[3] = "VIDEO_GEN"] = 3;
        return values;
    })();

    WAAICommon.SessionTransparencyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
        values[valuesById[1] = "NY_AI_SAFETY_DISCLAIMER"] = 1;
        return values;
    })();

    WAAICommon.BotPluginMetadata = (function() {

        function BotPluginMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPluginMetadata.prototype.provider = null;
        BotPluginMetadata.prototype.pluginType = null;
        BotPluginMetadata.prototype.thumbnailCDNURL = null;
        BotPluginMetadata.prototype.profilePhotoCDNURL = null;
        BotPluginMetadata.prototype.searchProviderURL = null;
        BotPluginMetadata.prototype.referenceIndex = null;
        BotPluginMetadata.prototype.expectedLinksCount = null;
        BotPluginMetadata.prototype.searchQuery = null;
        BotPluginMetadata.prototype.parentPluginMessageKey = null;
        BotPluginMetadata.prototype.deprecatedField = null;
        BotPluginMetadata.prototype.parentPluginType = null;
        BotPluginMetadata.prototype.faviconCDNURL = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_provider", {
            get: $util.oneOfGetter($oneOfFields = ["provider"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_pluginType", {
            get: $util.oneOfGetter($oneOfFields = ["pluginType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_thumbnailCDNURL", {
            get: $util.oneOfGetter($oneOfFields = ["thumbnailCDNURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_profilePhotoCDNURL", {
            get: $util.oneOfGetter($oneOfFields = ["profilePhotoCDNURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_searchProviderURL", {
            get: $util.oneOfGetter($oneOfFields = ["searchProviderURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_referenceIndex", {
            get: $util.oneOfGetter($oneOfFields = ["referenceIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_expectedLinksCount", {
            get: $util.oneOfGetter($oneOfFields = ["expectedLinksCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_searchQuery", {
            get: $util.oneOfGetter($oneOfFields = ["searchQuery"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_parentPluginMessageKey", {
            get: $util.oneOfGetter($oneOfFields = ["parentPluginMessageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_deprecatedField", {
            get: $util.oneOfGetter($oneOfFields = ["deprecatedField"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_parentPluginType", {
            get: $util.oneOfGetter($oneOfFields = ["parentPluginType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPluginMetadata.prototype, "_faviconCDNURL", {
            get: $util.oneOfGetter($oneOfFields = ["faviconCDNURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotPluginMetadata.create = function create(properties) {
            return new BotPluginMetadata(properties);
        };

        BotPluginMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.provider != null && Object.hasOwnProperty.call(m, "provider"))
                w.uint32(8).int32(m.provider);
            if (m.pluginType != null && Object.hasOwnProperty.call(m, "pluginType"))
                w.uint32(16).int32(m.pluginType);
            if (m.thumbnailCDNURL != null && Object.hasOwnProperty.call(m, "thumbnailCDNURL"))
                w.uint32(26).string(m.thumbnailCDNURL);
            if (m.profilePhotoCDNURL != null && Object.hasOwnProperty.call(m, "profilePhotoCDNURL"))
                w.uint32(34).string(m.profilePhotoCDNURL);
            if (m.searchProviderURL != null && Object.hasOwnProperty.call(m, "searchProviderURL"))
                w.uint32(42).string(m.searchProviderURL);
            if (m.referenceIndex != null && Object.hasOwnProperty.call(m, "referenceIndex"))
                w.uint32(48).uint32(m.referenceIndex);
            if (m.expectedLinksCount != null && Object.hasOwnProperty.call(m, "expectedLinksCount"))
                w.uint32(56).uint32(m.expectedLinksCount);
            if (m.searchQuery != null && Object.hasOwnProperty.call(m, "searchQuery"))
                w.uint32(74).string(m.searchQuery);
            if (m.parentPluginMessageKey != null && Object.hasOwnProperty.call(m, "parentPluginMessageKey"))
                WACommon.MessageKey.encode(m.parentPluginMessageKey, w.uint32(82).fork()).ldelim();
            if (m.deprecatedField != null && Object.hasOwnProperty.call(m, "deprecatedField"))
                w.uint32(88).int32(m.deprecatedField);
            if (m.parentPluginType != null && Object.hasOwnProperty.call(m, "parentPluginType"))
                w.uint32(96).int32(m.parentPluginType);
            if (m.faviconCDNURL != null && Object.hasOwnProperty.call(m, "faviconCDNURL"))
                w.uint32(106).string(m.faviconCDNURL);
            return w;
        };

        BotPluginMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotPluginMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.provider = r.int32();
                        break;
                    }
                case 2: {
                        m.pluginType = r.int32();
                        break;
                    }
                case 3: {
                        m.thumbnailCDNURL = r.string();
                        break;
                    }
                case 4: {
                        m.profilePhotoCDNURL = r.string();
                        break;
                    }
                case 5: {
                        m.searchProviderURL = r.string();
                        break;
                    }
                case 6: {
                        m.referenceIndex = r.uint32();
                        break;
                    }
                case 7: {
                        m.expectedLinksCount = r.uint32();
                        break;
                    }
                case 9: {
                        m.searchQuery = r.string();
                        break;
                    }
                case 10: {
                        m.parentPluginMessageKey = WACommon.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 11: {
                        m.deprecatedField = r.int32();
                        break;
                    }
                case 12: {
                        m.parentPluginType = r.int32();
                        break;
                    }
                case 13: {
                        m.faviconCDNURL = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotPluginMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotPluginMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotPluginMetadata();
            switch (d.provider) {
            default:
                if (typeof d.provider === "number") {
                    m.provider = d.provider;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.provider = 0;
                break;
            case "BING":
            case 1:
                m.provider = 1;
                break;
            case "GOOGLE":
            case 2:
                m.provider = 2;
                break;
            case "SUPPORT":
            case 3:
                m.provider = 3;
                break;
            }
            switch (d.pluginType) {
            default:
                if (typeof d.pluginType === "number") {
                    m.pluginType = d.pluginType;
                    break;
                }
                break;
            case "UNKNOWN_PLUGIN":
            case 0:
                m.pluginType = 0;
                break;
            case "REELS":
            case 1:
                m.pluginType = 1;
                break;
            case "SEARCH":
            case 2:
                m.pluginType = 2;
                break;
            }
            if (d.thumbnailCDNURL != null) {
                m.thumbnailCDNURL = String(d.thumbnailCDNURL);
            }
            if (d.profilePhotoCDNURL != null) {
                m.profilePhotoCDNURL = String(d.profilePhotoCDNURL);
            }
            if (d.searchProviderURL != null) {
                m.searchProviderURL = String(d.searchProviderURL);
            }
            if (d.referenceIndex != null) {
                m.referenceIndex = d.referenceIndex >>> 0;
            }
            if (d.expectedLinksCount != null) {
                m.expectedLinksCount = d.expectedLinksCount >>> 0;
            }
            if (d.searchQuery != null) {
                m.searchQuery = String(d.searchQuery);
            }
            if (d.parentPluginMessageKey != null) {
                if (typeof d.parentPluginMessageKey !== "object")
                    throw TypeError(".WAAICommon.BotPluginMetadata.parentPluginMessageKey: object expected");
                m.parentPluginMessageKey = WACommon.MessageKey.fromObject(d.parentPluginMessageKey, n + 1);
            }
            switch (d.deprecatedField) {
            default:
                if (typeof d.deprecatedField === "number") {
                    m.deprecatedField = d.deprecatedField;
                    break;
                }
                break;
            case "UNKNOWN_PLUGIN":
            case 0:
                m.deprecatedField = 0;
                break;
            case "REELS":
            case 1:
                m.deprecatedField = 1;
                break;
            case "SEARCH":
            case 2:
                m.deprecatedField = 2;
                break;
            }
            switch (d.parentPluginType) {
            default:
                if (typeof d.parentPluginType === "number") {
                    m.parentPluginType = d.parentPluginType;
                    break;
                }
                break;
            case "UNKNOWN_PLUGIN":
            case 0:
                m.parentPluginType = 0;
                break;
            case "REELS":
            case 1:
                m.parentPluginType = 1;
                break;
            case "SEARCH":
            case 2:
                m.parentPluginType = 2;
                break;
            }
            if (d.faviconCDNURL != null) {
                m.faviconCDNURL = String(d.faviconCDNURL);
            }
            return m;
        };

        BotPluginMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.provider != null && m.hasOwnProperty("provider")) {
                d.provider = o.enums === String ? $root.WAAICommon.BotPluginMetadata.SearchProvider[m.provider] === undefined ? m.provider : $root.WAAICommon.BotPluginMetadata.SearchProvider[m.provider] : m.provider;
                if (o.oneofs)
                    d._provider = "provider";
            }
            if (m.pluginType != null && m.hasOwnProperty("pluginType")) {
                d.pluginType = o.enums === String ? $root.WAAICommon.BotPluginMetadata.PluginType[m.pluginType] === undefined ? m.pluginType : $root.WAAICommon.BotPluginMetadata.PluginType[m.pluginType] : m.pluginType;
                if (o.oneofs)
                    d._pluginType = "pluginType";
            }
            if (m.thumbnailCDNURL != null && m.hasOwnProperty("thumbnailCDNURL")) {
                d.thumbnailCDNURL = m.thumbnailCDNURL;
                if (o.oneofs)
                    d._thumbnailCDNURL = "thumbnailCDNURL";
            }
            if (m.profilePhotoCDNURL != null && m.hasOwnProperty("profilePhotoCDNURL")) {
                d.profilePhotoCDNURL = m.profilePhotoCDNURL;
                if (o.oneofs)
                    d._profilePhotoCDNURL = "profilePhotoCDNURL";
            }
            if (m.searchProviderURL != null && m.hasOwnProperty("searchProviderURL")) {
                d.searchProviderURL = m.searchProviderURL;
                if (o.oneofs)
                    d._searchProviderURL = "searchProviderURL";
            }
            if (m.referenceIndex != null && m.hasOwnProperty("referenceIndex")) {
                d.referenceIndex = m.referenceIndex;
                if (o.oneofs)
                    d._referenceIndex = "referenceIndex";
            }
            if (m.expectedLinksCount != null && m.hasOwnProperty("expectedLinksCount")) {
                d.expectedLinksCount = m.expectedLinksCount;
                if (o.oneofs)
                    d._expectedLinksCount = "expectedLinksCount";
            }
            if (m.searchQuery != null && m.hasOwnProperty("searchQuery")) {
                d.searchQuery = m.searchQuery;
                if (o.oneofs)
                    d._searchQuery = "searchQuery";
            }
            if (m.parentPluginMessageKey != null && m.hasOwnProperty("parentPluginMessageKey")) {
                d.parentPluginMessageKey = WACommon.MessageKey.toObject(m.parentPluginMessageKey, o);
                if (o.oneofs)
                    d._parentPluginMessageKey = "parentPluginMessageKey";
            }
            if (m.deprecatedField != null && m.hasOwnProperty("deprecatedField")) {
                d.deprecatedField = o.enums === String ? $root.WAAICommon.BotPluginMetadata.PluginType[m.deprecatedField] === undefined ? m.deprecatedField : $root.WAAICommon.BotPluginMetadata.PluginType[m.deprecatedField] : m.deprecatedField;
                if (o.oneofs)
                    d._deprecatedField = "deprecatedField";
            }
            if (m.parentPluginType != null && m.hasOwnProperty("parentPluginType")) {
                d.parentPluginType = o.enums === String ? $root.WAAICommon.BotPluginMetadata.PluginType[m.parentPluginType] === undefined ? m.parentPluginType : $root.WAAICommon.BotPluginMetadata.PluginType[m.parentPluginType] : m.parentPluginType;
                if (o.oneofs)
                    d._parentPluginType = "parentPluginType";
            }
            if (m.faviconCDNURL != null && m.hasOwnProperty("faviconCDNURL")) {
                d.faviconCDNURL = m.faviconCDNURL;
                if (o.oneofs)
                    d._faviconCDNURL = "faviconCDNURL";
            }
            return d;
        };

        BotPluginMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPluginMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotPluginMetadata";
        };

        BotPluginMetadata.PluginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PLUGIN"] = 0;
            values[valuesById[1] = "REELS"] = 1;
            values[valuesById[2] = "SEARCH"] = 2;
            return values;
        })();

        BotPluginMetadata.SearchProvider = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "BING"] = 1;
            values[valuesById[2] = "GOOGLE"] = 2;
            values[valuesById[3] = "SUPPORT"] = 3;
            return values;
        })();

        return BotPluginMetadata;
    })();

    WAAICommon.BotLinkedAccount = (function() {

        function BotLinkedAccount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotLinkedAccount.prototype.type = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotLinkedAccount.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotLinkedAccount.create = function create(properties) {
            return new BotLinkedAccount(properties);
        };

        BotLinkedAccount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            return w;
        };

        BotLinkedAccount.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotLinkedAccount();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotLinkedAccount.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotLinkedAccount)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotLinkedAccount();
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "BOT_LINKED_ACCOUNT_TYPE_1P":
            case 0:
                m.type = 0;
                break;
            }
            return m;
        };

        BotLinkedAccount.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WAAICommon.BotLinkedAccount.BotLinkedAccountType[m.type] === undefined ? m.type : $root.WAAICommon.BotLinkedAccount.BotLinkedAccountType[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            return d;
        };

        BotLinkedAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotLinkedAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotLinkedAccount";
        };

        BotLinkedAccount.BotLinkedAccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_LINKED_ACCOUNT_TYPE_1P"] = 0;
            return values;
        })();

        return BotLinkedAccount;
    })();

    WAAICommon.BotSignatureVerificationUseCaseProof = (function() {

        function BotSignatureVerificationUseCaseProof(p) {
            this.certificateChain = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSignatureVerificationUseCaseProof.prototype.version = null;
        BotSignatureVerificationUseCaseProof.prototype.useCase = null;
        BotSignatureVerificationUseCaseProof.prototype.signature = null;
        BotSignatureVerificationUseCaseProof.prototype.certificateChain = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_useCase", {
            get: $util.oneOfGetter($oneOfFields = ["useCase"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSignatureVerificationUseCaseProof.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotSignatureVerificationUseCaseProof.create = function create(properties) {
            return new BotSignatureVerificationUseCaseProof(properties);
        };

        BotSignatureVerificationUseCaseProof.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(8).int32(m.version);
            if (m.useCase != null && Object.hasOwnProperty.call(m, "useCase"))
                w.uint32(16).int32(m.useCase);
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(26).bytes(m.signature);
            if (m.certificateChain != null && m.certificateChain.length) {
                for (var i = 0; i < m.certificateChain.length; ++i)
                    w.uint32(34).bytes(m.certificateChain[i]);
            }
            return w;
        };

        BotSignatureVerificationUseCaseProof.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotSignatureVerificationUseCaseProof();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.version = r.int32();
                        break;
                    }
                case 2: {
                        m.useCase = r.int32();
                        break;
                    }
                case 3: {
                        m.signature = r.bytes();
                        break;
                    }
                case 4: {
                        if (!(m.certificateChain && m.certificateChain.length))
                            m.certificateChain = [];
                        m.certificateChain.push(r.bytes());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotSignatureVerificationUseCaseProof.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotSignatureVerificationUseCaseProof)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotSignatureVerificationUseCaseProof();
            if (d.version != null) {
                m.version = d.version | 0;
            }
            switch (d.useCase) {
            default:
                if (typeof d.useCase === "number") {
                    m.useCase = d.useCase;
                    break;
                }
                break;
            case "UNSPECIFIED":
            case 0:
                m.useCase = 0;
                break;
            case "WA_BOT_MSG":
            case 1:
                m.useCase = 1;
                break;
            case "WA_TEE_BOT_MSG":
            case 2:
                m.useCase = 2;
                break;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            if (d.certificateChain) {
                if (!Array.isArray(d.certificateChain))
                    throw TypeError(".WAAICommon.BotSignatureVerificationUseCaseProof.certificateChain: array expected");
                m.certificateChain = [];
                for (var i = 0; i < d.certificateChain.length; ++i) {
                    if (typeof d.certificateChain[i] === "string")
                        $util.base64.decode(d.certificateChain[i], m.certificateChain[i] = $util.newBuffer($util.base64.length(d.certificateChain[i])), 0);
                    else if (d.certificateChain[i].length >= 0)
                        m.certificateChain[i] = d.certificateChain[i];
                }
            }
            return m;
        };

        BotSignatureVerificationUseCaseProof.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.certificateChain = [];
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.useCase != null && m.hasOwnProperty("useCase")) {
                d.useCase = o.enums === String ? $root.WAAICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[m.useCase] === undefined ? m.useCase : $root.WAAICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[m.useCase] : m.useCase;
                if (o.oneofs)
                    d._useCase = "useCase";
            }
            if (m.signature != null && m.hasOwnProperty("signature")) {
                d.signature = o.bytes === String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === Array ? Array.prototype.slice.call(m.signature) : m.signature;
                if (o.oneofs)
                    d._signature = "signature";
            }
            if (m.certificateChain && m.certificateChain.length) {
                d.certificateChain = [];
                for (var j = 0; j < m.certificateChain.length; ++j) {
                    d.certificateChain[j] = o.bytes === String ? $util.base64.encode(m.certificateChain[j], 0, m.certificateChain[j].length) : o.bytes === Array ? Array.prototype.slice.call(m.certificateChain[j]) : m.certificateChain[j];
                }
            }
            return d;
        };

        BotSignatureVerificationUseCaseProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSignatureVerificationUseCaseProof.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotSignatureVerificationUseCaseProof";
        };

        BotSignatureVerificationUseCaseProof.BotSignatureUseCase = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "WA_BOT_MSG"] = 1;
            values[valuesById[2] = "WA_TEE_BOT_MSG"] = 2;
            return values;
        })();

        return BotSignatureVerificationUseCaseProof;
    })();

    WAAICommon.BotPromotionMessageMetadata = (function() {

        function BotPromotionMessageMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPromotionMessageMetadata.prototype.promotionType = null;
        BotPromotionMessageMetadata.prototype.buttonTitle = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPromotionMessageMetadata.prototype, "_promotionType", {
            get: $util.oneOfGetter($oneOfFields = ["promotionType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPromotionMessageMetadata.prototype, "_buttonTitle", {
            get: $util.oneOfGetter($oneOfFields = ["buttonTitle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotPromotionMessageMetadata.create = function create(properties) {
            return new BotPromotionMessageMetadata(properties);
        };

        BotPromotionMessageMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.promotionType != null && Object.hasOwnProperty.call(m, "promotionType"))
                w.uint32(8).int32(m.promotionType);
            if (m.buttonTitle != null && Object.hasOwnProperty.call(m, "buttonTitle"))
                w.uint32(18).string(m.buttonTitle);
            return w;
        };

        BotPromotionMessageMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotPromotionMessageMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.promotionType = r.int32();
                        break;
                    }
                case 2: {
                        m.buttonTitle = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotPromotionMessageMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotPromotionMessageMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotPromotionMessageMetadata();
            switch (d.promotionType) {
            default:
                if (typeof d.promotionType === "number") {
                    m.promotionType = d.promotionType;
                    break;
                }
                break;
            case "UNKNOWN_TYPE":
            case 0:
                m.promotionType = 0;
                break;
            case "C50":
            case 1:
                m.promotionType = 1;
                break;
            case "SURVEY_PLATFORM":
            case 2:
                m.promotionType = 2;
                break;
            }
            if (d.buttonTitle != null) {
                m.buttonTitle = String(d.buttonTitle);
            }
            return m;
        };

        BotPromotionMessageMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.promotionType != null && m.hasOwnProperty("promotionType")) {
                d.promotionType = o.enums === String ? $root.WAAICommon.BotPromotionMessageMetadata.BotPromotionType[m.promotionType] === undefined ? m.promotionType : $root.WAAICommon.BotPromotionMessageMetadata.BotPromotionType[m.promotionType] : m.promotionType;
                if (o.oneofs)
                    d._promotionType = "promotionType";
            }
            if (m.buttonTitle != null && m.hasOwnProperty("buttonTitle")) {
                d.buttonTitle = m.buttonTitle;
                if (o.oneofs)
                    d._buttonTitle = "buttonTitle";
            }
            return d;
        };

        BotPromotionMessageMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPromotionMessageMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotPromotionMessageMetadata";
        };

        BotPromotionMessageMetadata.BotPromotionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "C50"] = 1;
            values[valuesById[2] = "SURVEY_PLATFORM"] = 2;
            return values;
        })();

        return BotPromotionMessageMetadata;
    })();

    WAAICommon.BotMediaMetadata = (function() {

        function BotMediaMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMediaMetadata.prototype.fileSHA256 = null;
        BotMediaMetadata.prototype.mediaKey = null;
        BotMediaMetadata.prototype.fileEncSHA256 = null;
        BotMediaMetadata.prototype.directPath = null;
        BotMediaMetadata.prototype.mediaKeyTimestamp = null;
        BotMediaMetadata.prototype.mimetype = null;
        BotMediaMetadata.prototype.orientationType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_fileSHA256", {
            get: $util.oneOfGetter($oneOfFields = ["fileSHA256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_mediaKey", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_fileEncSHA256", {
            get: $util.oneOfGetter($oneOfFields = ["fileEncSHA256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_mediaKeyTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKeyTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_mimetype", {
            get: $util.oneOfGetter($oneOfFields = ["mimetype"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMediaMetadata.prototype, "_orientationType", {
            get: $util.oneOfGetter($oneOfFields = ["orientationType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMediaMetadata.create = function create(properties) {
            return new BotMediaMetadata(properties);
        };

        BotMediaMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.fileSHA256 != null && Object.hasOwnProperty.call(m, "fileSHA256"))
                w.uint32(10).string(m.fileSHA256);
            if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                w.uint32(18).string(m.mediaKey);
            if (m.fileEncSHA256 != null && Object.hasOwnProperty.call(m, "fileEncSHA256"))
                w.uint32(26).string(m.fileEncSHA256);
            if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(34).string(m.directPath);
            if (m.mediaKeyTimestamp != null && Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                w.uint32(40).int64(m.mediaKeyTimestamp);
            if (m.mimetype != null && Object.hasOwnProperty.call(m, "mimetype"))
                w.uint32(50).string(m.mimetype);
            if (m.orientationType != null && Object.hasOwnProperty.call(m, "orientationType"))
                w.uint32(56).int32(m.orientationType);
            return w;
        };

        BotMediaMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMediaMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.fileSHA256 = r.string();
                        break;
                    }
                case 2: {
                        m.mediaKey = r.string();
                        break;
                    }
                case 3: {
                        m.fileEncSHA256 = r.string();
                        break;
                    }
                case 4: {
                        m.directPath = r.string();
                        break;
                    }
                case 5: {
                        m.mediaKeyTimestamp = r.int64();
                        break;
                    }
                case 6: {
                        m.mimetype = r.string();
                        break;
                    }
                case 7: {
                        m.orientationType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMediaMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMediaMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMediaMetadata();
            if (d.fileSHA256 != null) {
                m.fileSHA256 = String(d.fileSHA256);
            }
            if (d.mediaKey != null) {
                m.mediaKey = String(d.mediaKey);
            }
            if (d.fileEncSHA256 != null) {
                m.fileEncSHA256 = String(d.fileEncSHA256);
            }
            if (d.directPath != null) {
                m.directPath = String(d.directPath);
            }
            if (d.mediaKeyTimestamp != null) {
                if ($util.Long)
                    (m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp)).unsigned = false;
                else if (typeof d.mediaKeyTimestamp === "string")
                    m.mediaKeyTimestamp = parseInt(d.mediaKeyTimestamp, 10);
                else if (typeof d.mediaKeyTimestamp === "number")
                    m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                else if (typeof d.mediaKeyTimestamp === "object")
                    m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
            }
            if (d.mimetype != null) {
                m.mimetype = String(d.mimetype);
            }
            switch (d.orientationType) {
            default:
                if (typeof d.orientationType === "number") {
                    m.orientationType = d.orientationType;
                    break;
                }
                break;
            case "CENTER":
            case 1:
                m.orientationType = 1;
                break;
            case "LEFT":
            case 2:
                m.orientationType = 2;
                break;
            case "RIGHT":
            case 3:
                m.orientationType = 3;
                break;
            }
            return m;
        };

        BotMediaMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.fileSHA256 != null && m.hasOwnProperty("fileSHA256")) {
                d.fileSHA256 = m.fileSHA256;
                if (o.oneofs)
                    d._fileSHA256 = "fileSHA256";
            }
            if (m.mediaKey != null && m.hasOwnProperty("mediaKey")) {
                d.mediaKey = m.mediaKey;
                if (o.oneofs)
                    d._mediaKey = "mediaKey";
            }
            if (m.fileEncSHA256 != null && m.hasOwnProperty("fileEncSHA256")) {
                d.fileEncSHA256 = m.fileEncSHA256;
                if (o.oneofs)
                    d._fileEncSHA256 = "fileEncSHA256";
            }
            if (m.directPath != null && m.hasOwnProperty("directPath")) {
                d.directPath = m.directPath;
                if (o.oneofs)
                    d._directPath = "directPath";
            }
            if (m.mediaKeyTimestamp != null && m.hasOwnProperty("mediaKeyTimestamp")) {
                if (typeof m.mediaKeyTimestamp === "number")
                    d.mediaKeyTimestamp = o.longs === String ? String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                else
                    d.mediaKeyTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.mediaKeyTimestamp) : o.longs === Number ? new $util.LongBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0).toNumber() : m.mediaKeyTimestamp;
                if (o.oneofs)
                    d._mediaKeyTimestamp = "mediaKeyTimestamp";
            }
            if (m.mimetype != null && m.hasOwnProperty("mimetype")) {
                d.mimetype = m.mimetype;
                if (o.oneofs)
                    d._mimetype = "mimetype";
            }
            if (m.orientationType != null && m.hasOwnProperty("orientationType")) {
                d.orientationType = o.enums === String ? $root.WAAICommon.BotMediaMetadata.OrientationType[m.orientationType] === undefined ? m.orientationType : $root.WAAICommon.BotMediaMetadata.OrientationType[m.orientationType] : m.orientationType;
                if (o.oneofs)
                    d._orientationType = "orientationType";
            }
            return d;
        };

        BotMediaMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMediaMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMediaMetadata";
        };

        BotMediaMetadata.OrientationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "CENTER"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            values[valuesById[3] = "RIGHT"] = 3;
            return values;
        })();

        return BotMediaMetadata;
    })();

    WAAICommon.BotReminderMetadata = (function() {

        function BotReminderMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotReminderMetadata.prototype.requestMessageKey = null;
        BotReminderMetadata.prototype.action = null;
        BotReminderMetadata.prototype.name = null;
        BotReminderMetadata.prototype.nextTriggerTimestamp = null;
        BotReminderMetadata.prototype.frequency = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotReminderMetadata.prototype, "_requestMessageKey", {
            get: $util.oneOfGetter($oneOfFields = ["requestMessageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotReminderMetadata.prototype, "_action", {
            get: $util.oneOfGetter($oneOfFields = ["action"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotReminderMetadata.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotReminderMetadata.prototype, "_nextTriggerTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["nextTriggerTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotReminderMetadata.prototype, "_frequency", {
            get: $util.oneOfGetter($oneOfFields = ["frequency"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotReminderMetadata.create = function create(properties) {
            return new BotReminderMetadata(properties);
        };

        BotReminderMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.requestMessageKey != null && Object.hasOwnProperty.call(m, "requestMessageKey"))
                WACommon.MessageKey.encode(m.requestMessageKey, w.uint32(10).fork()).ldelim();
            if (m.action != null && Object.hasOwnProperty.call(m, "action"))
                w.uint32(16).int32(m.action);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(26).string(m.name);
            if (m.nextTriggerTimestamp != null && Object.hasOwnProperty.call(m, "nextTriggerTimestamp"))
                w.uint32(32).uint64(m.nextTriggerTimestamp);
            if (m.frequency != null && Object.hasOwnProperty.call(m, "frequency"))
                w.uint32(40).int32(m.frequency);
            return w;
        };

        BotReminderMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotReminderMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.requestMessageKey = WACommon.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.action = r.int32();
                        break;
                    }
                case 3: {
                        m.name = r.string();
                        break;
                    }
                case 4: {
                        m.nextTriggerTimestamp = r.uint64();
                        break;
                    }
                case 5: {
                        m.frequency = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotReminderMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotReminderMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotReminderMetadata();
            if (d.requestMessageKey != null) {
                if (typeof d.requestMessageKey !== "object")
                    throw TypeError(".WAAICommon.BotReminderMetadata.requestMessageKey: object expected");
                m.requestMessageKey = WACommon.MessageKey.fromObject(d.requestMessageKey, n + 1);
            }
            switch (d.action) {
            default:
                if (typeof d.action === "number") {
                    m.action = d.action;
                    break;
                }
                break;
            case "NOTIFY":
            case 1:
                m.action = 1;
                break;
            case "CREATE":
            case 2:
                m.action = 2;
                break;
            case "DELETE":
            case 3:
                m.action = 3;
                break;
            case "UPDATE":
            case 4:
                m.action = 4;
                break;
            }
            if (d.name != null) {
                m.name = String(d.name);
            }
            if (d.nextTriggerTimestamp != null) {
                if ($util.Long)
                    (m.nextTriggerTimestamp = $util.Long.fromValue(d.nextTriggerTimestamp)).unsigned = true;
                else if (typeof d.nextTriggerTimestamp === "string")
                    m.nextTriggerTimestamp = parseInt(d.nextTriggerTimestamp, 10);
                else if (typeof d.nextTriggerTimestamp === "number")
                    m.nextTriggerTimestamp = d.nextTriggerTimestamp;
                else if (typeof d.nextTriggerTimestamp === "object")
                    m.nextTriggerTimestamp = new $util.LongBits(d.nextTriggerTimestamp.low >>> 0, d.nextTriggerTimestamp.high >>> 0).toNumber(true);
            }
            switch (d.frequency) {
            default:
                if (typeof d.frequency === "number") {
                    m.frequency = d.frequency;
                    break;
                }
                break;
            case "ONCE":
            case 1:
                m.frequency = 1;
                break;
            case "DAILY":
            case 2:
                m.frequency = 2;
                break;
            case "WEEKLY":
            case 3:
                m.frequency = 3;
                break;
            case "BIWEEKLY":
            case 4:
                m.frequency = 4;
                break;
            case "MONTHLY":
            case 5:
                m.frequency = 5;
                break;
            }
            return m;
        };

        BotReminderMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.requestMessageKey != null && m.hasOwnProperty("requestMessageKey")) {
                d.requestMessageKey = WACommon.MessageKey.toObject(m.requestMessageKey, o);
                if (o.oneofs)
                    d._requestMessageKey = "requestMessageKey";
            }
            if (m.action != null && m.hasOwnProperty("action")) {
                d.action = o.enums === String ? $root.WAAICommon.BotReminderMetadata.ReminderAction[m.action] === undefined ? m.action : $root.WAAICommon.BotReminderMetadata.ReminderAction[m.action] : m.action;
                if (o.oneofs)
                    d._action = "action";
            }
            if (m.name != null && m.hasOwnProperty("name")) {
                d.name = m.name;
                if (o.oneofs)
                    d._name = "name";
            }
            if (m.nextTriggerTimestamp != null && m.hasOwnProperty("nextTriggerTimestamp")) {
                if (typeof m.nextTriggerTimestamp === "number")
                    d.nextTriggerTimestamp = o.longs === String ? String(m.nextTriggerTimestamp) : m.nextTriggerTimestamp;
                else
                    d.nextTriggerTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.nextTriggerTimestamp) : o.longs === Number ? new $util.LongBits(m.nextTriggerTimestamp.low >>> 0, m.nextTriggerTimestamp.high >>> 0).toNumber(true) : m.nextTriggerTimestamp;
                if (o.oneofs)
                    d._nextTriggerTimestamp = "nextTriggerTimestamp";
            }
            if (m.frequency != null && m.hasOwnProperty("frequency")) {
                d.frequency = o.enums === String ? $root.WAAICommon.BotReminderMetadata.ReminderFrequency[m.frequency] === undefined ? m.frequency : $root.WAAICommon.BotReminderMetadata.ReminderFrequency[m.frequency] : m.frequency;
                if (o.oneofs)
                    d._frequency = "frequency";
            }
            return d;
        };

        BotReminderMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotReminderMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotReminderMetadata";
        };

        BotReminderMetadata.ReminderFrequency = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ONCE"] = 1;
            values[valuesById[2] = "DAILY"] = 2;
            values[valuesById[3] = "WEEKLY"] = 3;
            values[valuesById[4] = "BIWEEKLY"] = 4;
            values[valuesById[5] = "MONTHLY"] = 5;
            return values;
        })();

        BotReminderMetadata.ReminderAction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "NOTIFY"] = 1;
            values[valuesById[2] = "CREATE"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            values[valuesById[4] = "UPDATE"] = 4;
            return values;
        })();

        return BotReminderMetadata;
    })();

    WAAICommon.BotModelMetadata = (function() {

        function BotModelMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotModelMetadata.prototype.modelType = null;
        BotModelMetadata.prototype.premiumModelStatus = null;
        BotModelMetadata.prototype.modelNameOverride = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotModelMetadata.prototype, "_modelType", {
            get: $util.oneOfGetter($oneOfFields = ["modelType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotModelMetadata.prototype, "_premiumModelStatus", {
            get: $util.oneOfGetter($oneOfFields = ["premiumModelStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotModelMetadata.prototype, "_modelNameOverride", {
            get: $util.oneOfGetter($oneOfFields = ["modelNameOverride"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotModelMetadata.create = function create(properties) {
            return new BotModelMetadata(properties);
        };

        BotModelMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.modelType != null && Object.hasOwnProperty.call(m, "modelType"))
                w.uint32(8).int32(m.modelType);
            if (m.premiumModelStatus != null && Object.hasOwnProperty.call(m, "premiumModelStatus"))
                w.uint32(16).int32(m.premiumModelStatus);
            if (m.modelNameOverride != null && Object.hasOwnProperty.call(m, "modelNameOverride"))
                w.uint32(26).string(m.modelNameOverride);
            return w;
        };

        BotModelMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotModelMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.modelType = r.int32();
                        break;
                    }
                case 2: {
                        m.premiumModelStatus = r.int32();
                        break;
                    }
                case 3: {
                        m.modelNameOverride = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotModelMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotModelMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotModelMetadata();
            switch (d.modelType) {
            default:
                if (typeof d.modelType === "number") {
                    m.modelType = d.modelType;
                    break;
                }
                break;
            case "UNKNOWN_TYPE":
            case 0:
                m.modelType = 0;
                break;
            case "LLAMA_PROD":
            case 1:
                m.modelType = 1;
                break;
            case "LLAMA_PROD_PREMIUM":
            case 2:
                m.modelType = 2;
                break;
            }
            switch (d.premiumModelStatus) {
            default:
                if (typeof d.premiumModelStatus === "number") {
                    m.premiumModelStatus = d.premiumModelStatus;
                    break;
                }
                break;
            case "UNKNOWN_STATUS":
            case 0:
                m.premiumModelStatus = 0;
                break;
            case "AVAILABLE":
            case 1:
                m.premiumModelStatus = 1;
                break;
            case "QUOTA_EXCEED_LIMIT":
            case 2:
                m.premiumModelStatus = 2;
                break;
            }
            if (d.modelNameOverride != null) {
                m.modelNameOverride = String(d.modelNameOverride);
            }
            return m;
        };

        BotModelMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.modelType != null && m.hasOwnProperty("modelType")) {
                d.modelType = o.enums === String ? $root.WAAICommon.BotModelMetadata.ModelType[m.modelType] === undefined ? m.modelType : $root.WAAICommon.BotModelMetadata.ModelType[m.modelType] : m.modelType;
                if (o.oneofs)
                    d._modelType = "modelType";
            }
            if (m.premiumModelStatus != null && m.hasOwnProperty("premiumModelStatus")) {
                d.premiumModelStatus = o.enums === String ? $root.WAAICommon.BotModelMetadata.PremiumModelStatus[m.premiumModelStatus] === undefined ? m.premiumModelStatus : $root.WAAICommon.BotModelMetadata.PremiumModelStatus[m.premiumModelStatus] : m.premiumModelStatus;
                if (o.oneofs)
                    d._premiumModelStatus = "premiumModelStatus";
            }
            if (m.modelNameOverride != null && m.hasOwnProperty("modelNameOverride")) {
                d.modelNameOverride = m.modelNameOverride;
                if (o.oneofs)
                    d._modelNameOverride = "modelNameOverride";
            }
            return d;
        };

        BotModelMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotModelMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotModelMetadata";
        };

        BotModelMetadata.PremiumModelStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "QUOTA_EXCEED_LIMIT"] = 2;
            return values;
        })();

        BotModelMetadata.ModelType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "LLAMA_PROD"] = 1;
            values[valuesById[2] = "LLAMA_PROD_PREMIUM"] = 2;
            return values;
        })();

        return BotModelMetadata;
    })();

    WAAICommon.BotProgressIndicatorMetadata = (function() {

        function BotProgressIndicatorMetadata(p) {
            this.stepsMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotProgressIndicatorMetadata.prototype.progressDescription = null;
        BotProgressIndicatorMetadata.prototype.stepsMetadata = $util.emptyArray;
        BotProgressIndicatorMetadata.prototype.estimatedCompletionTime = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotProgressIndicatorMetadata.prototype, "_progressDescription", {
            get: $util.oneOfGetter($oneOfFields = ["progressDescription"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotProgressIndicatorMetadata.prototype, "_estimatedCompletionTime", {
            get: $util.oneOfGetter($oneOfFields = ["estimatedCompletionTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotProgressIndicatorMetadata.create = function create(properties) {
            return new BotProgressIndicatorMetadata(properties);
        };

        BotProgressIndicatorMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.progressDescription != null && Object.hasOwnProperty.call(m, "progressDescription"))
                w.uint32(10).string(m.progressDescription);
            if (m.stepsMetadata != null && m.stepsMetadata.length) {
                for (var i = 0; i < m.stepsMetadata.length; ++i)
                    $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.encode(m.stepsMetadata[i], w.uint32(18).fork()).ldelim();
            }
            if (m.estimatedCompletionTime != null && Object.hasOwnProperty.call(m, "estimatedCompletionTime"))
                w.uint32(24).int64(m.estimatedCompletionTime);
            return w;
        };

        BotProgressIndicatorMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotProgressIndicatorMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.progressDescription = r.string();
                        break;
                    }
                case 2: {
                        if (!(m.stepsMetadata && m.stepsMetadata.length))
                            m.stepsMetadata = [];
                        m.stepsMetadata.push($root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        m.estimatedCompletionTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotProgressIndicatorMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotProgressIndicatorMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotProgressIndicatorMetadata();
            if (d.progressDescription != null) {
                m.progressDescription = String(d.progressDescription);
            }
            if (d.stepsMetadata) {
                if (!Array.isArray(d.stepsMetadata))
                    throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.stepsMetadata: array expected");
                m.stepsMetadata = [];
                for (var i = 0; i < d.stepsMetadata.length; ++i) {
                    if (typeof d.stepsMetadata[i] !== "object")
                        throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.stepsMetadata: object expected");
                    m.stepsMetadata[i] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.fromObject(d.stepsMetadata[i], n + 1);
                }
            }
            if (d.estimatedCompletionTime != null) {
                if ($util.Long)
                    (m.estimatedCompletionTime = $util.Long.fromValue(d.estimatedCompletionTime)).unsigned = false;
                else if (typeof d.estimatedCompletionTime === "string")
                    m.estimatedCompletionTime = parseInt(d.estimatedCompletionTime, 10);
                else if (typeof d.estimatedCompletionTime === "number")
                    m.estimatedCompletionTime = d.estimatedCompletionTime;
                else if (typeof d.estimatedCompletionTime === "object")
                    m.estimatedCompletionTime = new $util.LongBits(d.estimatedCompletionTime.low >>> 0, d.estimatedCompletionTime.high >>> 0).toNumber();
            }
            return m;
        };

        BotProgressIndicatorMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.stepsMetadata = [];
            }
            if (m.progressDescription != null && m.hasOwnProperty("progressDescription")) {
                d.progressDescription = m.progressDescription;
                if (o.oneofs)
                    d._progressDescription = "progressDescription";
            }
            if (m.stepsMetadata && m.stepsMetadata.length) {
                d.stepsMetadata = [];
                for (var j = 0; j < m.stepsMetadata.length; ++j) {
                    d.stepsMetadata[j] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.toObject(m.stepsMetadata[j], o);
                }
            }
            if (m.estimatedCompletionTime != null && m.hasOwnProperty("estimatedCompletionTime")) {
                if (typeof m.estimatedCompletionTime === "number")
                    d.estimatedCompletionTime = o.longs === String ? String(m.estimatedCompletionTime) : m.estimatedCompletionTime;
                else
                    d.estimatedCompletionTime = o.longs === String ? $util.Long.prototype.toString.call(m.estimatedCompletionTime) : o.longs === Number ? new $util.LongBits(m.estimatedCompletionTime.low >>> 0, m.estimatedCompletionTime.high >>> 0).toNumber() : m.estimatedCompletionTime;
                if (o.oneofs)
                    d._estimatedCompletionTime = "estimatedCompletionTime";
            }
            return d;
        };

        BotProgressIndicatorMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotProgressIndicatorMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotProgressIndicatorMetadata";
        };

        BotProgressIndicatorMetadata.BotPlanningStepMetadata = (function() {

            function BotPlanningStepMetadata(p) {
                this.sourcesMetadata = [];
                this.sections = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotPlanningStepMetadata.prototype.statusTitle = null;
            BotPlanningStepMetadata.prototype.statusBody = null;
            BotPlanningStepMetadata.prototype.sourcesMetadata = $util.emptyArray;
            BotPlanningStepMetadata.prototype.status = null;
            BotPlanningStepMetadata.prototype.isReasoning = null;
            BotPlanningStepMetadata.prototype.isEnhancedSearch = null;
            BotPlanningStepMetadata.prototype.sections = $util.emptyArray;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotPlanningStepMetadata.prototype, "_statusTitle", {
                get: $util.oneOfGetter($oneOfFields = ["statusTitle"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotPlanningStepMetadata.prototype, "_statusBody", {
                get: $util.oneOfGetter($oneOfFields = ["statusBody"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotPlanningStepMetadata.prototype, "_status", {
                get: $util.oneOfGetter($oneOfFields = ["status"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotPlanningStepMetadata.prototype, "_isReasoning", {
                get: $util.oneOfGetter($oneOfFields = ["isReasoning"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotPlanningStepMetadata.prototype, "_isEnhancedSearch", {
                get: $util.oneOfGetter($oneOfFields = ["isEnhancedSearch"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            BotPlanningStepMetadata.create = function create(properties) {
                return new BotPlanningStepMetadata(properties);
            };

            BotPlanningStepMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.statusTitle != null && Object.hasOwnProperty.call(m, "statusTitle"))
                    w.uint32(10).string(m.statusTitle);
                if (m.statusBody != null && Object.hasOwnProperty.call(m, "statusBody"))
                    w.uint32(18).string(m.statusBody);
                if (m.sourcesMetadata != null && m.sourcesMetadata.length) {
                    for (var i = 0; i < m.sourcesMetadata.length; ++i)
                        $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.encode(m.sourcesMetadata[i], w.uint32(26).fork()).ldelim();
                }
                if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                    w.uint32(32).int32(m.status);
                if (m.isReasoning != null && Object.hasOwnProperty.call(m, "isReasoning"))
                    w.uint32(40).bool(m.isReasoning);
                if (m.isEnhancedSearch != null && Object.hasOwnProperty.call(m, "isEnhancedSearch"))
                    w.uint32(48).bool(m.isEnhancedSearch);
                if (m.sections != null && m.sections.length) {
                    for (var i = 0; i < m.sections.length; ++i)
                        $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.encode(m.sections[i], w.uint32(58).fork()).ldelim();
                }
                return w;
            };

            BotPlanningStepMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.statusTitle = r.string();
                            break;
                        }
                    case 2: {
                            m.statusBody = r.string();
                            break;
                        }
                    case 3: {
                            if (!(m.sourcesMetadata && m.sourcesMetadata.length))
                                m.sourcesMetadata = [];
                            m.sourcesMetadata.push($root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 4: {
                            m.status = r.int32();
                            break;
                        }
                    case 5: {
                            m.isReasoning = r.bool();
                            break;
                        }
                    case 6: {
                            m.isEnhancedSearch = r.bool();
                            break;
                        }
                    case 7: {
                            if (!(m.sections && m.sections.length))
                                m.sections = [];
                            m.sections.push($root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            BotPlanningStepMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata();
                if (d.statusTitle != null) {
                    m.statusTitle = String(d.statusTitle);
                }
                if (d.statusBody != null) {
                    m.statusBody = String(d.statusBody);
                }
                if (d.sourcesMetadata) {
                    if (!Array.isArray(d.sourcesMetadata))
                        throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sourcesMetadata: array expected");
                    m.sourcesMetadata = [];
                    for (var i = 0; i < d.sourcesMetadata.length; ++i) {
                        if (typeof d.sourcesMetadata[i] !== "object")
                            throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sourcesMetadata: object expected");
                        m.sourcesMetadata[i] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.fromObject(d.sourcesMetadata[i], n + 1);
                    }
                }
                switch (d.status) {
                default:
                    if (typeof d.status === "number") {
                        m.status = d.status;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.status = 0;
                    break;
                case "PLANNED":
                case 1:
                    m.status = 1;
                    break;
                case "EXECUTING":
                case 2:
                    m.status = 2;
                    break;
                case "FINISHED":
                case 3:
                    m.status = 3;
                    break;
                }
                if (d.isReasoning != null) {
                    m.isReasoning = Boolean(d.isReasoning);
                }
                if (d.isEnhancedSearch != null) {
                    m.isEnhancedSearch = Boolean(d.isEnhancedSearch);
                }
                if (d.sections) {
                    if (!Array.isArray(d.sections))
                        throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sections: array expected");
                    m.sections = [];
                    for (var i = 0; i < d.sections.length; ++i) {
                        if (typeof d.sections[i] !== "object")
                            throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sections: object expected");
                        m.sections[i] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.fromObject(d.sections[i], n + 1);
                    }
                }
                return m;
            };

            BotPlanningStepMetadata.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.sourcesMetadata = [];
                    d.sections = [];
                }
                if (m.statusTitle != null && m.hasOwnProperty("statusTitle")) {
                    d.statusTitle = m.statusTitle;
                    if (o.oneofs)
                        d._statusTitle = "statusTitle";
                }
                if (m.statusBody != null && m.hasOwnProperty("statusBody")) {
                    d.statusBody = m.statusBody;
                    if (o.oneofs)
                        d._statusBody = "statusBody";
                }
                if (m.sourcesMetadata && m.sourcesMetadata.length) {
                    d.sourcesMetadata = [];
                    for (var j = 0; j < m.sourcesMetadata.length; ++j) {
                        d.sourcesMetadata[j] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.toObject(m.sourcesMetadata[j], o);
                    }
                }
                if (m.status != null && m.hasOwnProperty("status")) {
                    d.status = o.enums === String ? $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[m.status] === undefined ? m.status : $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[m.status] : m.status;
                    if (o.oneofs)
                        d._status = "status";
                }
                if (m.isReasoning != null && m.hasOwnProperty("isReasoning")) {
                    d.isReasoning = m.isReasoning;
                    if (o.oneofs)
                        d._isReasoning = "isReasoning";
                }
                if (m.isEnhancedSearch != null && m.hasOwnProperty("isEnhancedSearch")) {
                    d.isEnhancedSearch = m.isEnhancedSearch;
                    if (o.oneofs)
                        d._isEnhancedSearch = "isEnhancedSearch";
                }
                if (m.sections && m.sections.length) {
                    d.sections = [];
                    for (var j = 0; j < m.sections.length; ++j) {
                        d.sections[j] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.toObject(m.sections[j], o);
                    }
                }
                return d;
            };

            BotPlanningStepMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BotPlanningStepMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata";
            };

            BotPlanningStepMetadata.BotSearchSourceProvider = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_PROVIDER"] = 0;
                values[valuesById[1] = "OTHER"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "BING"] = 3;
                return values;
            })();

            BotPlanningStepMetadata.PlanningStepStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "PLANNED"] = 1;
                values[valuesById[2] = "EXECUTING"] = 2;
                values[valuesById[3] = "FINISHED"] = 3;
                return values;
            })();

            BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata = (function() {

                function BotPlanningSearchSourcesMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                BotPlanningSearchSourcesMetadata.prototype.sourceTitle = null;
                BotPlanningSearchSourcesMetadata.prototype.provider = null;
                BotPlanningSearchSourcesMetadata.prototype.sourceURL = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourcesMetadata.prototype, "_sourceTitle", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceTitle"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourcesMetadata.prototype, "_provider", {
                    get: $util.oneOfGetter($oneOfFields = ["provider"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourcesMetadata.prototype, "_sourceURL", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceURL"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                BotPlanningSearchSourcesMetadata.create = function create(properties) {
                    return new BotPlanningSearchSourcesMetadata(properties);
                };

                BotPlanningSearchSourcesMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.sourceTitle != null && Object.hasOwnProperty.call(m, "sourceTitle"))
                        w.uint32(10).string(m.sourceTitle);
                    if (m.provider != null && Object.hasOwnProperty.call(m, "provider"))
                        w.uint32(16).int32(m.provider);
                    if (m.sourceURL != null && Object.hasOwnProperty.call(m, "sourceURL"))
                        w.uint32(26).string(m.sourceURL);
                    return w;
                };

                BotPlanningSearchSourcesMetadata.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.sourceTitle = r.string();
                                break;
                            }
                        case 2: {
                                m.provider = r.int32();
                                break;
                            }
                        case 3: {
                                m.sourceURL = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                BotPlanningSearchSourcesMetadata.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata();
                    if (d.sourceTitle != null) {
                        m.sourceTitle = String(d.sourceTitle);
                    }
                    switch (d.provider) {
                    default:
                        if (typeof d.provider === "number") {
                            m.provider = d.provider;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        m.provider = 0;
                        break;
                    case "OTHER":
                    case 1:
                        m.provider = 1;
                        break;
                    case "GOOGLE":
                    case 2:
                        m.provider = 2;
                        break;
                    case "BING":
                    case 3:
                        m.provider = 3;
                        break;
                    }
                    if (d.sourceURL != null) {
                        m.sourceURL = String(d.sourceURL);
                    }
                    return m;
                };

                BotPlanningSearchSourcesMetadata.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.sourceTitle != null && m.hasOwnProperty("sourceTitle")) {
                        d.sourceTitle = m.sourceTitle;
                        if (o.oneofs)
                            d._sourceTitle = "sourceTitle";
                    }
                    if (m.provider != null && m.hasOwnProperty("provider")) {
                        d.provider = o.enums === String ? $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[m.provider] === undefined ? m.provider : $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[m.provider] : m.provider;
                        if (o.oneofs)
                            d._provider = "provider";
                    }
                    if (m.sourceURL != null && m.hasOwnProperty("sourceURL")) {
                        d.sourceURL = m.sourceURL;
                        if (o.oneofs)
                            d._sourceURL = "sourceURL";
                    }
                    return d;
                };

                BotPlanningSearchSourcesMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                BotPlanningSearchSourcesMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata";
                };

                BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "OTHER"] = 1;
                    values[valuesById[2] = "GOOGLE"] = 2;
                    values[valuesById[3] = "BING"] = 3;
                    return values;
                })();

                return BotPlanningSearchSourcesMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningStepSectionMetadata = (function() {

                function BotPlanningStepSectionMetadata(p) {
                    this.sourcesMetadata = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                BotPlanningStepSectionMetadata.prototype.sectionTitle = null;
                BotPlanningStepSectionMetadata.prototype.sectionBody = null;
                BotPlanningStepSectionMetadata.prototype.sourcesMetadata = $util.emptyArray;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningStepSectionMetadata.prototype, "_sectionTitle", {
                    get: $util.oneOfGetter($oneOfFields = ["sectionTitle"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningStepSectionMetadata.prototype, "_sectionBody", {
                    get: $util.oneOfGetter($oneOfFields = ["sectionBody"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                BotPlanningStepSectionMetadata.create = function create(properties) {
                    return new BotPlanningStepSectionMetadata(properties);
                };

                BotPlanningStepSectionMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.sectionTitle != null && Object.hasOwnProperty.call(m, "sectionTitle"))
                        w.uint32(10).string(m.sectionTitle);
                    if (m.sectionBody != null && Object.hasOwnProperty.call(m, "sectionBody"))
                        w.uint32(18).string(m.sectionBody);
                    if (m.sourcesMetadata != null && m.sourcesMetadata.length) {
                        for (var i = 0; i < m.sourcesMetadata.length; ++i)
                            $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.encode(m.sourcesMetadata[i], w.uint32(26).fork()).ldelim();
                    }
                    return w;
                };

                BotPlanningStepSectionMetadata.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.sectionTitle = r.string();
                                break;
                            }
                        case 2: {
                                m.sectionBody = r.string();
                                break;
                            }
                        case 3: {
                                if (!(m.sourcesMetadata && m.sourcesMetadata.length))
                                    m.sourcesMetadata = [];
                                m.sourcesMetadata.push($root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.decode(r, r.uint32(), undefined, n + 1));
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                BotPlanningStepSectionMetadata.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata();
                    if (d.sectionTitle != null) {
                        m.sectionTitle = String(d.sectionTitle);
                    }
                    if (d.sectionBody != null) {
                        m.sectionBody = String(d.sectionBody);
                    }
                    if (d.sourcesMetadata) {
                        if (!Array.isArray(d.sourcesMetadata))
                            throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.sourcesMetadata: array expected");
                        m.sourcesMetadata = [];
                        for (var i = 0; i < d.sourcesMetadata.length; ++i) {
                            if (typeof d.sourcesMetadata[i] !== "object")
                                throw TypeError(".WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.sourcesMetadata: object expected");
                            m.sourcesMetadata[i] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.fromObject(d.sourcesMetadata[i], n + 1);
                        }
                    }
                    return m;
                };

                BotPlanningStepSectionMetadata.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.sourcesMetadata = [];
                    }
                    if (m.sectionTitle != null && m.hasOwnProperty("sectionTitle")) {
                        d.sectionTitle = m.sectionTitle;
                        if (o.oneofs)
                            d._sectionTitle = "sectionTitle";
                    }
                    if (m.sectionBody != null && m.hasOwnProperty("sectionBody")) {
                        d.sectionBody = m.sectionBody;
                        if (o.oneofs)
                            d._sectionBody = "sectionBody";
                    }
                    if (m.sourcesMetadata && m.sourcesMetadata.length) {
                        d.sourcesMetadata = [];
                        for (var j = 0; j < m.sourcesMetadata.length; ++j) {
                            d.sourcesMetadata[j] = $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.toObject(m.sourcesMetadata[j], o);
                        }
                    }
                    return d;
                };

                BotPlanningStepSectionMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                BotPlanningStepSectionMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata";
                };

                return BotPlanningStepSectionMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningSearchSourceMetadata = (function() {

                function BotPlanningSearchSourceMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                BotPlanningSearchSourceMetadata.prototype.title = null;
                BotPlanningSearchSourceMetadata.prototype.provider = null;
                BotPlanningSearchSourceMetadata.prototype.sourceURL = null;
                BotPlanningSearchSourceMetadata.prototype.favIconURL = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_provider", {
                    get: $util.oneOfGetter($oneOfFields = ["provider"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_sourceURL", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceURL"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(BotPlanningSearchSourceMetadata.prototype, "_favIconURL", {
                    get: $util.oneOfGetter($oneOfFields = ["favIconURL"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                BotPlanningSearchSourceMetadata.create = function create(properties) {
                    return new BotPlanningSearchSourceMetadata(properties);
                };

                BotPlanningSearchSourceMetadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                        w.uint32(10).string(m.title);
                    if (m.provider != null && Object.hasOwnProperty.call(m, "provider"))
                        w.uint32(16).int32(m.provider);
                    if (m.sourceURL != null && Object.hasOwnProperty.call(m, "sourceURL"))
                        w.uint32(26).string(m.sourceURL);
                    if (m.favIconURL != null && Object.hasOwnProperty.call(m, "favIconURL"))
                        w.uint32(34).string(m.favIconURL);
                    return w;
                };

                BotPlanningSearchSourceMetadata.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.title = r.string();
                                break;
                            }
                        case 2: {
                                m.provider = r.int32();
                                break;
                            }
                        case 3: {
                                m.sourceURL = r.string();
                                break;
                            }
                        case 4: {
                                m.favIconURL = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                BotPlanningSearchSourceMetadata.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata();
                    if (d.title != null) {
                        m.title = String(d.title);
                    }
                    switch (d.provider) {
                    default:
                        if (typeof d.provider === "number") {
                            m.provider = d.provider;
                            break;
                        }
                        break;
                    case "UNKNOWN_PROVIDER":
                    case 0:
                        m.provider = 0;
                        break;
                    case "OTHER":
                    case 1:
                        m.provider = 1;
                        break;
                    case "GOOGLE":
                    case 2:
                        m.provider = 2;
                        break;
                    case "BING":
                    case 3:
                        m.provider = 3;
                        break;
                    }
                    if (d.sourceURL != null) {
                        m.sourceURL = String(d.sourceURL);
                    }
                    if (d.favIconURL != null) {
                        m.favIconURL = String(d.favIconURL);
                    }
                    return m;
                };

                BotPlanningSearchSourceMetadata.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.title != null && m.hasOwnProperty("title")) {
                        d.title = m.title;
                        if (o.oneofs)
                            d._title = "title";
                    }
                    if (m.provider != null && m.hasOwnProperty("provider")) {
                        d.provider = o.enums === String ? $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[m.provider] === undefined ? m.provider : $root.WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[m.provider] : m.provider;
                        if (o.oneofs)
                            d._provider = "provider";
                    }
                    if (m.sourceURL != null && m.hasOwnProperty("sourceURL")) {
                        d.sourceURL = m.sourceURL;
                        if (o.oneofs)
                            d._sourceURL = "sourceURL";
                    }
                    if (m.favIconURL != null && m.hasOwnProperty("favIconURL")) {
                        d.favIconURL = m.favIconURL;
                        if (o.oneofs)
                            d._favIconURL = "favIconURL";
                    }
                    return d;
                };

                BotPlanningSearchSourceMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                BotPlanningSearchSourceMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAAICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata";
                };

                return BotPlanningSearchSourceMetadata;
            })();

            return BotPlanningStepMetadata;
        })();

        return BotProgressIndicatorMetadata;
    })();

    WAAICommon.BotCapabilityMetadata = (function() {

        function BotCapabilityMetadata(p) {
            this.capabilities = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotCapabilityMetadata.prototype.capabilities = $util.emptyArray;

        BotCapabilityMetadata.create = function create(properties) {
            return new BotCapabilityMetadata(properties);
        };

        BotCapabilityMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.capabilities != null && m.capabilities.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.capabilities.length; ++i)
                    w.int32(m.capabilities[i]);
                w.ldelim();
            }
            return w;
        };

        BotCapabilityMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotCapabilityMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.capabilities && m.capabilities.length))
                            m.capabilities = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.capabilities.push(r.int32());
                        } else
                            m.capabilities.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotCapabilityMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotCapabilityMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotCapabilityMetadata();
            if (d.capabilities) {
                if (!Array.isArray(d.capabilities))
                    throw TypeError(".WAAICommon.BotCapabilityMetadata.capabilities: array expected");
                m.capabilities = [];
                for (var i = 0; i < d.capabilities.length; ++i) {
                    switch (d.capabilities[i]) {
                    default:
                        if (typeof d.capabilities[i] === "number") {
                            m.capabilities[i] = d.capabilities[i];
                            break;
                        }
                    case "UNKNOWN":
                    case 0:
                        m.capabilities[i] = 0;
                        break;
                    case "PROGRESS_INDICATOR":
                    case 1:
                        m.capabilities[i] = 1;
                        break;
                    case "RICH_RESPONSE_HEADING":
                    case 2:
                        m.capabilities[i] = 2;
                        break;
                    case "RICH_RESPONSE_NESTED_LIST":
                    case 3:
                        m.capabilities[i] = 3;
                        break;
                    case "AI_MEMORY":
                    case 4:
                        m.capabilities[i] = 4;
                        break;
                    case "RICH_RESPONSE_THREAD_SURFING":
                    case 5:
                        m.capabilities[i] = 5;
                        break;
                    case "RICH_RESPONSE_TABLE":
                    case 6:
                        m.capabilities[i] = 6;
                        break;
                    case "RICH_RESPONSE_CODE":
                    case 7:
                        m.capabilities[i] = 7;
                        break;
                    case "RICH_RESPONSE_STRUCTURED_RESPONSE":
                    case 8:
                        m.capabilities[i] = 8;
                        break;
                    case "RICH_RESPONSE_INLINE_IMAGE":
                    case 9:
                        m.capabilities[i] = 9;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_CONTROL":
                    case 10:
                        m.capabilities[i] = 10;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_1":
                    case 11:
                        m.capabilities[i] = 11;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_2":
                    case 12:
                        m.capabilities[i] = 12;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_3":
                    case 13:
                        m.capabilities[i] = 13;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_4":
                    case 14:
                        m.capabilities[i] = 14;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_5":
                    case 15:
                        m.capabilities[i] = 15;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_6":
                    case 16:
                        m.capabilities[i] = 16;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_7":
                    case 17:
                        m.capabilities[i] = 17;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_8":
                    case 18:
                        m.capabilities[i] = 18;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_9":
                    case 19:
                        m.capabilities[i] = 19;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_10":
                    case 20:
                        m.capabilities[i] = 20;
                        break;
                    case "RICH_RESPONSE_SUB_HEADING":
                    case 21:
                        m.capabilities[i] = 21;
                        break;
                    case "RICH_RESPONSE_GRID_IMAGE":
                    case 22:
                        m.capabilities[i] = 22;
                        break;
                    case "AI_STUDIO_UGC_MEMORY":
                    case 23:
                        m.capabilities[i] = 23;
                        break;
                    case "RICH_RESPONSE_LATEX":
                    case 24:
                        m.capabilities[i] = 24;
                        break;
                    case "RICH_RESPONSE_MAPS":
                    case 25:
                        m.capabilities[i] = 25;
                        break;
                    case "RICH_RESPONSE_INLINE_REELS":
                    case 26:
                        m.capabilities[i] = 26;
                        break;
                    case "AGENTIC_PLANNING":
                    case 27:
                        m.capabilities[i] = 27;
                        break;
                    case "ACCOUNT_LINKING":
                    case 28:
                        m.capabilities[i] = 28;
                        break;
                    case "STREAMING_DISAGGREGATION":
                    case 29:
                        m.capabilities[i] = 29;
                        break;
                    case "RICH_RESPONSE_GRID_IMAGE_3P":
                    case 30:
                        m.capabilities[i] = 30;
                        break;
                    case "RICH_RESPONSE_LATEX_INLINE":
                    case 31:
                        m.capabilities[i] = 31;
                        break;
                    case "QUERY_PLAN":
                    case 32:
                        m.capabilities[i] = 32;
                        break;
                    case "PROACTIVE_MESSAGE":
                    case 33:
                        m.capabilities[i] = 33;
                        break;
                    case "RICH_RESPONSE_UNIFIED_RESPONSE":
                    case 34:
                        m.capabilities[i] = 34;
                        break;
                    case "PROMOTION_MESSAGE":
                    case 35:
                        m.capabilities[i] = 35;
                        break;
                    case "SIMPLIFIED_PROFILE_PAGE":
                    case 36:
                        m.capabilities[i] = 36;
                        break;
                    case "RICH_RESPONSE_SOURCES_IN_MESSAGE":
                    case 37:
                        m.capabilities[i] = 37;
                        break;
                    case "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY":
                    case 38:
                        m.capabilities[i] = 38;
                        break;
                    case "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT":
                    case 39:
                        m.capabilities[i] = 39;
                        break;
                    case "AI_SHARED_MEMORY":
                    case 40:
                        m.capabilities[i] = 40;
                        break;
                    case "RICH_RESPONSE_UNIFIED_SOURCES":
                    case 41:
                        m.capabilities[i] = 41;
                        break;
                    case "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS":
                    case 42:
                        m.capabilities[i] = 42;
                        break;
                    case "RICH_RESPONSE_UR_INLINE_REELS_ENABLED":
                    case 43:
                        m.capabilities[i] = 43;
                        break;
                    case "RICH_RESPONSE_UR_MEDIA_GRID_ENABLED":
                    case 44:
                        m.capabilities[i] = 44;
                        break;
                    case "RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER":
                    case 45:
                        m.capabilities[i] = 45;
                        break;
                    case "RICH_RESPONSE_IN_APP_SURVEY":
                    case 46:
                        m.capabilities[i] = 46;
                        break;
                    case "AI_RESPONSE_MODEL_BRANDING":
                    case 47:
                        m.capabilities[i] = 47;
                        break;
                    case "SESSION_TRANSPARENCY_SYSTEM_MESSAGE":
                    case 48:
                        m.capabilities[i] = 48;
                        break;
                    case "RICH_RESPONSE_UR_REASONING":
                    case 49:
                        m.capabilities[i] = 49;
                        break;
                    case "RICH_RESPONSE_UR_ZEITGEIST_CITATIONS":
                    case 50:
                        m.capabilities[i] = 50;
                        break;
                    case "RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL":
                    case 51:
                        m.capabilities[i] = 51;
                        break;
                    case "AI_IMAGINE_LOADING_INDICATOR":
                    case 52:
                        m.capabilities[i] = 52;
                        break;
                    case "RICH_RESPONSE_UR_IMAGINE":
                    case 53:
                        m.capabilities[i] = 53;
                        break;
                    case "AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR":
                    case 54:
                        m.capabilities[i] = 54;
                        break;
                    case "RICH_RESPONSE_UR_BLOKS_ENABLED":
                    case 55:
                        m.capabilities[i] = 55;
                        break;
                    case "RICH_RESPONSE_INLINE_LINKS_ENABLED":
                    case 56:
                        m.capabilities[i] = 56;
                        break;
                    case "RICH_RESPONSE_UR_IMAGINE_VIDEO":
                    case 57:
                        m.capabilities[i] = 57;
                        break;
                    case "JSON_PATCH_STREAMING":
                    case 58:
                        m.capabilities[i] = 58;
                        break;
                    case "AI_TAB_FORCE_CLIPPY":
                    case 59:
                        m.capabilities[i] = 59;
                        break;
                    case "UNIFIED_RESPONSE_EMBEDDED_SCREENS":
                    case 60:
                        m.capabilities[i] = 60;
                        break;
                    case "AI_SUBSCRIPTION_ENABLED":
                    case 61:
                        m.capabilities[i] = 61;
                        break;
                    }
                }
            }
            return m;
        };

        BotCapabilityMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.capabilities = [];
            }
            if (m.capabilities && m.capabilities.length) {
                d.capabilities = [];
                for (var j = 0; j < m.capabilities.length; ++j) {
                    d.capabilities[j] = o.enums === String ? $root.WAAICommon.BotCapabilityMetadata.BotCapabilityType[m.capabilities[j]] === undefined ? m.capabilities[j] : $root.WAAICommon.BotCapabilityMetadata.BotCapabilityType[m.capabilities[j]] : m.capabilities[j];
                }
            }
            return d;
        };

        BotCapabilityMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotCapabilityMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotCapabilityMetadata";
        };

        BotCapabilityMetadata.BotCapabilityType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PROGRESS_INDICATOR"] = 1;
            values[valuesById[2] = "RICH_RESPONSE_HEADING"] = 2;
            values[valuesById[3] = "RICH_RESPONSE_NESTED_LIST"] = 3;
            values[valuesById[4] = "AI_MEMORY"] = 4;
            values[valuesById[5] = "RICH_RESPONSE_THREAD_SURFING"] = 5;
            values[valuesById[6] = "RICH_RESPONSE_TABLE"] = 6;
            values[valuesById[7] = "RICH_RESPONSE_CODE"] = 7;
            values[valuesById[8] = "RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8;
            values[valuesById[9] = "RICH_RESPONSE_INLINE_IMAGE"] = 9;
            values[valuesById[10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10;
            values[valuesById[11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11;
            values[valuesById[12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12;
            values[valuesById[13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13;
            values[valuesById[14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14;
            values[valuesById[15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15;
            values[valuesById[16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16;
            values[valuesById[17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17;
            values[valuesById[18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18;
            values[valuesById[19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19;
            values[valuesById[20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20;
            values[valuesById[21] = "RICH_RESPONSE_SUB_HEADING"] = 21;
            values[valuesById[22] = "RICH_RESPONSE_GRID_IMAGE"] = 22;
            values[valuesById[23] = "AI_STUDIO_UGC_MEMORY"] = 23;
            values[valuesById[24] = "RICH_RESPONSE_LATEX"] = 24;
            values[valuesById[25] = "RICH_RESPONSE_MAPS"] = 25;
            values[valuesById[26] = "RICH_RESPONSE_INLINE_REELS"] = 26;
            values[valuesById[27] = "AGENTIC_PLANNING"] = 27;
            values[valuesById[28] = "ACCOUNT_LINKING"] = 28;
            values[valuesById[29] = "STREAMING_DISAGGREGATION"] = 29;
            values[valuesById[30] = "RICH_RESPONSE_GRID_IMAGE_3P"] = 30;
            values[valuesById[31] = "RICH_RESPONSE_LATEX_INLINE"] = 31;
            values[valuesById[32] = "QUERY_PLAN"] = 32;
            values[valuesById[33] = "PROACTIVE_MESSAGE"] = 33;
            values[valuesById[34] = "RICH_RESPONSE_UNIFIED_RESPONSE"] = 34;
            values[valuesById[35] = "PROMOTION_MESSAGE"] = 35;
            values[valuesById[36] = "SIMPLIFIED_PROFILE_PAGE"] = 36;
            values[valuesById[37] = "RICH_RESPONSE_SOURCES_IN_MESSAGE"] = 37;
            values[valuesById[38] = "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY"] = 38;
            values[valuesById[39] = "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT"] = 39;
            values[valuesById[40] = "AI_SHARED_MEMORY"] = 40;
            values[valuesById[41] = "RICH_RESPONSE_UNIFIED_SOURCES"] = 41;
            values[valuesById[42] = "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS"] = 42;
            values[valuesById[43] = "RICH_RESPONSE_UR_INLINE_REELS_ENABLED"] = 43;
            values[valuesById[44] = "RICH_RESPONSE_UR_MEDIA_GRID_ENABLED"] = 44;
            values[valuesById[45] = "RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER"] = 45;
            values[valuesById[46] = "RICH_RESPONSE_IN_APP_SURVEY"] = 46;
            values[valuesById[47] = "AI_RESPONSE_MODEL_BRANDING"] = 47;
            values[valuesById[48] = "SESSION_TRANSPARENCY_SYSTEM_MESSAGE"] = 48;
            values[valuesById[49] = "RICH_RESPONSE_UR_REASONING"] = 49;
            values[valuesById[50] = "RICH_RESPONSE_UR_ZEITGEIST_CITATIONS"] = 50;
            values[valuesById[51] = "RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL"] = 51;
            values[valuesById[52] = "AI_IMAGINE_LOADING_INDICATOR"] = 52;
            values[valuesById[53] = "RICH_RESPONSE_UR_IMAGINE"] = 53;
            values[valuesById[54] = "AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR"] = 54;
            values[valuesById[55] = "RICH_RESPONSE_UR_BLOKS_ENABLED"] = 55;
            values[valuesById[56] = "RICH_RESPONSE_INLINE_LINKS_ENABLED"] = 56;
            values[valuesById[57] = "RICH_RESPONSE_UR_IMAGINE_VIDEO"] = 57;
            values[valuesById[58] = "JSON_PATCH_STREAMING"] = 58;
            values[valuesById[59] = "AI_TAB_FORCE_CLIPPY"] = 59;
            values[valuesById[60] = "UNIFIED_RESPONSE_EMBEDDED_SCREENS"] = 60;
            values[valuesById[61] = "AI_SUBSCRIPTION_ENABLED"] = 61;
            return values;
        })();

        return BotCapabilityMetadata;
    })();

    WAAICommon.BotModeSelectionMetadata = (function() {

        function BotModeSelectionMetadata(p) {
            this.mode = [];
            this.overrideMode = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotModeSelectionMetadata.prototype.mode = $util.emptyArray;
        BotModeSelectionMetadata.prototype.overrideMode = $util.emptyArray;

        BotModeSelectionMetadata.create = function create(properties) {
            return new BotModeSelectionMetadata(properties);
        };

        BotModeSelectionMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mode != null && m.mode.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.mode.length; ++i)
                    w.int32(m.mode[i]);
                w.ldelim();
            }
            if (m.overrideMode != null && m.overrideMode.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.overrideMode.length; ++i)
                    w.uint32(m.overrideMode[i]);
                w.ldelim();
            }
            return w;
        };

        BotModeSelectionMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotModeSelectionMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.mode && m.mode.length))
                            m.mode = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.mode.push(r.int32());
                        } else
                            m.mode.push(r.int32());
                        break;
                    }
                case 2: {
                        if (!(m.overrideMode && m.overrideMode.length))
                            m.overrideMode = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.overrideMode.push(r.uint32());
                        } else
                            m.overrideMode.push(r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotModeSelectionMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotModeSelectionMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotModeSelectionMetadata();
            if (d.mode) {
                if (!Array.isArray(d.mode))
                    throw TypeError(".WAAICommon.BotModeSelectionMetadata.mode: array expected");
                m.mode = [];
                for (var i = 0; i < d.mode.length; ++i) {
                    switch (d.mode[i]) {
                    default:
                        if (typeof d.mode[i] === "number") {
                            m.mode[i] = d.mode[i];
                            break;
                        }
                    case "DEFAULT_MODE":
                    case 0:
                        m.mode[i] = 0;
                        break;
                    case "THINK_HARD_MODE":
                    case 1:
                        m.mode[i] = 1;
                        break;
                    }
                }
            }
            if (d.overrideMode) {
                if (!Array.isArray(d.overrideMode))
                    throw TypeError(".WAAICommon.BotModeSelectionMetadata.overrideMode: array expected");
                m.overrideMode = [];
                for (var i = 0; i < d.overrideMode.length; ++i) {
                    m.overrideMode[i] = d.overrideMode[i] >>> 0;
                }
            }
            return m;
        };

        BotModeSelectionMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.mode = [];
                d.overrideMode = [];
            }
            if (m.mode && m.mode.length) {
                d.mode = [];
                for (var j = 0; j < m.mode.length; ++j) {
                    d.mode[j] = o.enums === String ? $root.WAAICommon.BotModeSelectionMetadata.BotUserSelectionMode[m.mode[j]] === undefined ? m.mode[j] : $root.WAAICommon.BotModeSelectionMetadata.BotUserSelectionMode[m.mode[j]] : m.mode[j];
                }
            }
            if (m.overrideMode && m.overrideMode.length) {
                d.overrideMode = [];
                for (var j = 0; j < m.overrideMode.length; ++j) {
                    d.overrideMode[j] = m.overrideMode[j];
                }
            }
            return d;
        };

        BotModeSelectionMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotModeSelectionMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotModeSelectionMetadata";
        };

        BotModeSelectionMetadata.BotUserSelectionMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT_MODE"] = 0;
            values[valuesById[1] = "THINK_HARD_MODE"] = 1;
            return values;
        })();

        return BotModeSelectionMetadata;
    })();

    WAAICommon.BotQuotaMetadata = (function() {

        function BotQuotaMetadata(p) {
            this.botFeatureQuotaMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotQuotaMetadata.prototype.botFeatureQuotaMetadata = $util.emptyArray;

        BotQuotaMetadata.create = function create(properties) {
            return new BotQuotaMetadata(properties);
        };

        BotQuotaMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.botFeatureQuotaMetadata != null && m.botFeatureQuotaMetadata.length) {
                for (var i = 0; i < m.botFeatureQuotaMetadata.length; ++i)
                    $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.encode(m.botFeatureQuotaMetadata[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotQuotaMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotQuotaMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.botFeatureQuotaMetadata && m.botFeatureQuotaMetadata.length))
                            m.botFeatureQuotaMetadata = [];
                        m.botFeatureQuotaMetadata.push($root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotQuotaMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotQuotaMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotQuotaMetadata();
            if (d.botFeatureQuotaMetadata) {
                if (!Array.isArray(d.botFeatureQuotaMetadata))
                    throw TypeError(".WAAICommon.BotQuotaMetadata.botFeatureQuotaMetadata: array expected");
                m.botFeatureQuotaMetadata = [];
                for (var i = 0; i < d.botFeatureQuotaMetadata.length; ++i) {
                    if (typeof d.botFeatureQuotaMetadata[i] !== "object")
                        throw TypeError(".WAAICommon.BotQuotaMetadata.botFeatureQuotaMetadata: object expected");
                    m.botFeatureQuotaMetadata[i] = $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.fromObject(d.botFeatureQuotaMetadata[i], n + 1);
                }
            }
            return m;
        };

        BotQuotaMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.botFeatureQuotaMetadata = [];
            }
            if (m.botFeatureQuotaMetadata && m.botFeatureQuotaMetadata.length) {
                d.botFeatureQuotaMetadata = [];
                for (var j = 0; j < m.botFeatureQuotaMetadata.length; ++j) {
                    d.botFeatureQuotaMetadata[j] = $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.toObject(m.botFeatureQuotaMetadata[j], o);
                }
            }
            return d;
        };

        BotQuotaMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotQuotaMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotQuotaMetadata";
        };

        BotQuotaMetadata.BotFeatureQuotaMetadata = (function() {

            function BotFeatureQuotaMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotFeatureQuotaMetadata.prototype.featureType = null;
            BotFeatureQuotaMetadata.prototype.remainingQuota = null;
            BotFeatureQuotaMetadata.prototype.expirationTimestamp = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotFeatureQuotaMetadata.prototype, "_featureType", {
                get: $util.oneOfGetter($oneOfFields = ["featureType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotFeatureQuotaMetadata.prototype, "_remainingQuota", {
                get: $util.oneOfGetter($oneOfFields = ["remainingQuota"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotFeatureQuotaMetadata.prototype, "_expirationTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["expirationTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            BotFeatureQuotaMetadata.create = function create(properties) {
                return new BotFeatureQuotaMetadata(properties);
            };

            BotFeatureQuotaMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.featureType != null && Object.hasOwnProperty.call(m, "featureType"))
                    w.uint32(8).int32(m.featureType);
                if (m.remainingQuota != null && Object.hasOwnProperty.call(m, "remainingQuota"))
                    w.uint32(16).uint32(m.remainingQuota);
                if (m.expirationTimestamp != null && Object.hasOwnProperty.call(m, "expirationTimestamp"))
                    w.uint32(24).uint64(m.expirationTimestamp);
                return w;
            };

            BotFeatureQuotaMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.featureType = r.int32();
                            break;
                        }
                    case 2: {
                            m.remainingQuota = r.uint32();
                            break;
                        }
                    case 3: {
                            m.expirationTimestamp = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            BotFeatureQuotaMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata();
                switch (d.featureType) {
                default:
                    if (typeof d.featureType === "number") {
                        m.featureType = d.featureType;
                        break;
                    }
                    break;
                case "UNKNOWN_FEATURE":
                case 0:
                    m.featureType = 0;
                    break;
                case "REASONING_FEATURE":
                case 1:
                    m.featureType = 1;
                    break;
                }
                if (d.remainingQuota != null) {
                    m.remainingQuota = d.remainingQuota >>> 0;
                }
                if (d.expirationTimestamp != null) {
                    if ($util.Long)
                        (m.expirationTimestamp = $util.Long.fromValue(d.expirationTimestamp)).unsigned = true;
                    else if (typeof d.expirationTimestamp === "string")
                        m.expirationTimestamp = parseInt(d.expirationTimestamp, 10);
                    else if (typeof d.expirationTimestamp === "number")
                        m.expirationTimestamp = d.expirationTimestamp;
                    else if (typeof d.expirationTimestamp === "object")
                        m.expirationTimestamp = new $util.LongBits(d.expirationTimestamp.low >>> 0, d.expirationTimestamp.high >>> 0).toNumber(true);
                }
                return m;
            };

            BotFeatureQuotaMetadata.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.featureType != null && m.hasOwnProperty("featureType")) {
                    d.featureType = o.enums === String ? $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[m.featureType] === undefined ? m.featureType : $root.WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[m.featureType] : m.featureType;
                    if (o.oneofs)
                        d._featureType = "featureType";
                }
                if (m.remainingQuota != null && m.hasOwnProperty("remainingQuota")) {
                    d.remainingQuota = m.remainingQuota;
                    if (o.oneofs)
                        d._remainingQuota = "remainingQuota";
                }
                if (m.expirationTimestamp != null && m.hasOwnProperty("expirationTimestamp")) {
                    if (typeof m.expirationTimestamp === "number")
                        d.expirationTimestamp = o.longs === String ? String(m.expirationTimestamp) : m.expirationTimestamp;
                    else
                        d.expirationTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.expirationTimestamp) : o.longs === Number ? new $util.LongBits(m.expirationTimestamp.low >>> 0, m.expirationTimestamp.high >>> 0).toNumber(true) : m.expirationTimestamp;
                    if (o.oneofs)
                        d._expirationTimestamp = "expirationTimestamp";
                }
                return d;
            };

            BotFeatureQuotaMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BotFeatureQuotaMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotQuotaMetadata.BotFeatureQuotaMetadata";
            };

            BotFeatureQuotaMetadata.BotFeatureType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_FEATURE"] = 0;
                values[valuesById[1] = "REASONING_FEATURE"] = 1;
                return values;
            })();

            return BotFeatureQuotaMetadata;
        })();

        return BotQuotaMetadata;
    })();

    WAAICommon.BotImagineMetadata = (function() {

        function BotImagineMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotImagineMetadata.prototype.imagineType = null;
        BotImagineMetadata.prototype.shortPrompt = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotImagineMetadata.prototype, "_imagineType", {
            get: $util.oneOfGetter($oneOfFields = ["imagineType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotImagineMetadata.prototype, "_shortPrompt", {
            get: $util.oneOfGetter($oneOfFields = ["shortPrompt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotImagineMetadata.create = function create(properties) {
            return new BotImagineMetadata(properties);
        };

        BotImagineMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.imagineType != null && Object.hasOwnProperty.call(m, "imagineType"))
                w.uint32(8).int32(m.imagineType);
            if (m.shortPrompt != null && Object.hasOwnProperty.call(m, "shortPrompt"))
                w.uint32(18).string(m.shortPrompt);
            return w;
        };

        BotImagineMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotImagineMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.imagineType = r.int32();
                        break;
                    }
                case 2: {
                        m.shortPrompt = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotImagineMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotImagineMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotImagineMetadata();
            switch (d.imagineType) {
            default:
                if (typeof d.imagineType === "number") {
                    m.imagineType = d.imagineType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.imagineType = 0;
                break;
            case "IMAGINE":
            case 1:
                m.imagineType = 1;
                break;
            case "MEMU":
            case 2:
                m.imagineType = 2;
                break;
            case "FLASH":
            case 3:
                m.imagineType = 3;
                break;
            case "EDIT":
            case 4:
                m.imagineType = 4;
                break;
            }
            if (d.shortPrompt != null) {
                m.shortPrompt = String(d.shortPrompt);
            }
            return m;
        };

        BotImagineMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.imagineType != null && m.hasOwnProperty("imagineType")) {
                d.imagineType = o.enums === String ? $root.WAAICommon.BotImagineMetadata.ImagineType[m.imagineType] === undefined ? m.imagineType : $root.WAAICommon.BotImagineMetadata.ImagineType[m.imagineType] : m.imagineType;
                if (o.oneofs)
                    d._imagineType = "imagineType";
            }
            if (m.shortPrompt != null && m.hasOwnProperty("shortPrompt")) {
                d.shortPrompt = m.shortPrompt;
                if (o.oneofs)
                    d._shortPrompt = "shortPrompt";
            }
            return d;
        };

        BotImagineMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotImagineMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotImagineMetadata";
        };

        BotImagineMetadata.ImagineType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "IMAGINE"] = 1;
            values[valuesById[2] = "MEMU"] = 2;
            values[valuesById[3] = "FLASH"] = 3;
            values[valuesById[4] = "EDIT"] = 4;
            return values;
        })();

        return BotImagineMetadata;
    })();

    WAAICommon.BotAgeCollectionMetadata = (function() {

        function BotAgeCollectionMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotAgeCollectionMetadata.prototype.ageCollectionEligible = null;
        BotAgeCollectionMetadata.prototype.shouldTriggerAgeCollectionOnClient = null;
        BotAgeCollectionMetadata.prototype.ageCollectionType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotAgeCollectionMetadata.prototype, "_ageCollectionEligible", {
            get: $util.oneOfGetter($oneOfFields = ["ageCollectionEligible"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotAgeCollectionMetadata.prototype, "_shouldTriggerAgeCollectionOnClient", {
            get: $util.oneOfGetter($oneOfFields = ["shouldTriggerAgeCollectionOnClient"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotAgeCollectionMetadata.prototype, "_ageCollectionType", {
            get: $util.oneOfGetter($oneOfFields = ["ageCollectionType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotAgeCollectionMetadata.create = function create(properties) {
            return new BotAgeCollectionMetadata(properties);
        };

        BotAgeCollectionMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ageCollectionEligible != null && Object.hasOwnProperty.call(m, "ageCollectionEligible"))
                w.uint32(8).bool(m.ageCollectionEligible);
            if (m.shouldTriggerAgeCollectionOnClient != null && Object.hasOwnProperty.call(m, "shouldTriggerAgeCollectionOnClient"))
                w.uint32(16).bool(m.shouldTriggerAgeCollectionOnClient);
            if (m.ageCollectionType != null && Object.hasOwnProperty.call(m, "ageCollectionType"))
                w.uint32(24).int32(m.ageCollectionType);
            return w;
        };

        BotAgeCollectionMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotAgeCollectionMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.ageCollectionEligible = r.bool();
                        break;
                    }
                case 2: {
                        m.shouldTriggerAgeCollectionOnClient = r.bool();
                        break;
                    }
                case 3: {
                        m.ageCollectionType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotAgeCollectionMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotAgeCollectionMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotAgeCollectionMetadata();
            if (d.ageCollectionEligible != null) {
                m.ageCollectionEligible = Boolean(d.ageCollectionEligible);
            }
            if (d.shouldTriggerAgeCollectionOnClient != null) {
                m.shouldTriggerAgeCollectionOnClient = Boolean(d.shouldTriggerAgeCollectionOnClient);
            }
            switch (d.ageCollectionType) {
            default:
                if (typeof d.ageCollectionType === "number") {
                    m.ageCollectionType = d.ageCollectionType;
                    break;
                }
                break;
            case "O18_BINARY":
            case 0:
                m.ageCollectionType = 0;
                break;
            case "WAFFLE":
            case 1:
                m.ageCollectionType = 1;
                break;
            }
            return m;
        };

        BotAgeCollectionMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ageCollectionEligible != null && m.hasOwnProperty("ageCollectionEligible")) {
                d.ageCollectionEligible = m.ageCollectionEligible;
                if (o.oneofs)
                    d._ageCollectionEligible = "ageCollectionEligible";
            }
            if (m.shouldTriggerAgeCollectionOnClient != null && m.hasOwnProperty("shouldTriggerAgeCollectionOnClient")) {
                d.shouldTriggerAgeCollectionOnClient = m.shouldTriggerAgeCollectionOnClient;
                if (o.oneofs)
                    d._shouldTriggerAgeCollectionOnClient = "shouldTriggerAgeCollectionOnClient";
            }
            if (m.ageCollectionType != null && m.hasOwnProperty("ageCollectionType")) {
                d.ageCollectionType = o.enums === String ? $root.WAAICommon.BotAgeCollectionMetadata.AgeCollectionType[m.ageCollectionType] === undefined ? m.ageCollectionType : $root.WAAICommon.BotAgeCollectionMetadata.AgeCollectionType[m.ageCollectionType] : m.ageCollectionType;
                if (o.oneofs)
                    d._ageCollectionType = "ageCollectionType";
            }
            return d;
        };

        BotAgeCollectionMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotAgeCollectionMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotAgeCollectionMetadata";
        };

        BotAgeCollectionMetadata.AgeCollectionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "O18_BINARY"] = 0;
            values[valuesById[1] = "WAFFLE"] = 1;
            return values;
        })();

        return BotAgeCollectionMetadata;
    })();

    WAAICommon.BotSourcesMetadata = (function() {

        function BotSourcesMetadata(p) {
            this.sources = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSourcesMetadata.prototype.sources = $util.emptyArray;

        BotSourcesMetadata.create = function create(properties) {
            return new BotSourcesMetadata(properties);
        };

        BotSourcesMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sources != null && m.sources.length) {
                for (var i = 0; i < m.sources.length; ++i)
                    $root.WAAICommon.BotSourcesMetadata.BotSourceItem.encode(m.sources[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotSourcesMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotSourcesMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.sources && m.sources.length))
                            m.sources = [];
                        m.sources.push($root.WAAICommon.BotSourcesMetadata.BotSourceItem.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotSourcesMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotSourcesMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotSourcesMetadata();
            if (d.sources) {
                if (!Array.isArray(d.sources))
                    throw TypeError(".WAAICommon.BotSourcesMetadata.sources: array expected");
                m.sources = [];
                for (var i = 0; i < d.sources.length; ++i) {
                    if (typeof d.sources[i] !== "object")
                        throw TypeError(".WAAICommon.BotSourcesMetadata.sources: object expected");
                    m.sources[i] = $root.WAAICommon.BotSourcesMetadata.BotSourceItem.fromObject(d.sources[i], n + 1);
                }
            }
            return m;
        };

        BotSourcesMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.sources = [];
            }
            if (m.sources && m.sources.length) {
                d.sources = [];
                for (var j = 0; j < m.sources.length; ++j) {
                    d.sources[j] = $root.WAAICommon.BotSourcesMetadata.BotSourceItem.toObject(m.sources[j], o);
                }
            }
            return d;
        };

        BotSourcesMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSourcesMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotSourcesMetadata";
        };

        BotSourcesMetadata.BotSourceItem = (function() {

            function BotSourceItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotSourceItem.prototype.provider = null;
            BotSourceItem.prototype.thumbnailCDNURL = null;
            BotSourceItem.prototype.sourceProviderURL = null;
            BotSourceItem.prototype.sourceQuery = null;
            BotSourceItem.prototype.faviconCDNURL = null;
            BotSourceItem.prototype.citationNumber = null;
            BotSourceItem.prototype.sourceTitle = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_provider", {
                get: $util.oneOfGetter($oneOfFields = ["provider"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_thumbnailCDNURL", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailCDNURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_sourceProviderURL", {
                get: $util.oneOfGetter($oneOfFields = ["sourceProviderURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_sourceQuery", {
                get: $util.oneOfGetter($oneOfFields = ["sourceQuery"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_faviconCDNURL", {
                get: $util.oneOfGetter($oneOfFields = ["faviconCDNURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_citationNumber", {
                get: $util.oneOfGetter($oneOfFields = ["citationNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(BotSourceItem.prototype, "_sourceTitle", {
                get: $util.oneOfGetter($oneOfFields = ["sourceTitle"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            BotSourceItem.create = function create(properties) {
                return new BotSourceItem(properties);
            };

            BotSourceItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.provider != null && Object.hasOwnProperty.call(m, "provider"))
                    w.uint32(8).int32(m.provider);
                if (m.thumbnailCDNURL != null && Object.hasOwnProperty.call(m, "thumbnailCDNURL"))
                    w.uint32(18).string(m.thumbnailCDNURL);
                if (m.sourceProviderURL != null && Object.hasOwnProperty.call(m, "sourceProviderURL"))
                    w.uint32(26).string(m.sourceProviderURL);
                if (m.sourceQuery != null && Object.hasOwnProperty.call(m, "sourceQuery"))
                    w.uint32(34).string(m.sourceQuery);
                if (m.faviconCDNURL != null && Object.hasOwnProperty.call(m, "faviconCDNURL"))
                    w.uint32(42).string(m.faviconCDNURL);
                if (m.citationNumber != null && Object.hasOwnProperty.call(m, "citationNumber"))
                    w.uint32(48).uint32(m.citationNumber);
                if (m.sourceTitle != null && Object.hasOwnProperty.call(m, "sourceTitle"))
                    w.uint32(58).string(m.sourceTitle);
                return w;
            };

            BotSourceItem.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotSourcesMetadata.BotSourceItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.provider = r.int32();
                            break;
                        }
                    case 2: {
                            m.thumbnailCDNURL = r.string();
                            break;
                        }
                    case 3: {
                            m.sourceProviderURL = r.string();
                            break;
                        }
                    case 4: {
                            m.sourceQuery = r.string();
                            break;
                        }
                    case 5: {
                            m.faviconCDNURL = r.string();
                            break;
                        }
                    case 6: {
                            m.citationNumber = r.uint32();
                            break;
                        }
                    case 7: {
                            m.sourceTitle = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            BotSourceItem.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotSourcesMetadata.BotSourceItem)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotSourcesMetadata.BotSourceItem();
                switch (d.provider) {
                default:
                    if (typeof d.provider === "number") {
                        m.provider = d.provider;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.provider = 0;
                    break;
                case "BING":
                case 1:
                    m.provider = 1;
                    break;
                case "GOOGLE":
                case 2:
                    m.provider = 2;
                    break;
                case "SUPPORT":
                case 3:
                    m.provider = 3;
                    break;
                case "OTHER":
                case 4:
                    m.provider = 4;
                    break;
                }
                if (d.thumbnailCDNURL != null) {
                    m.thumbnailCDNURL = String(d.thumbnailCDNURL);
                }
                if (d.sourceProviderURL != null) {
                    m.sourceProviderURL = String(d.sourceProviderURL);
                }
                if (d.sourceQuery != null) {
                    m.sourceQuery = String(d.sourceQuery);
                }
                if (d.faviconCDNURL != null) {
                    m.faviconCDNURL = String(d.faviconCDNURL);
                }
                if (d.citationNumber != null) {
                    m.citationNumber = d.citationNumber >>> 0;
                }
                if (d.sourceTitle != null) {
                    m.sourceTitle = String(d.sourceTitle);
                }
                return m;
            };

            BotSourceItem.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.provider != null && m.hasOwnProperty("provider")) {
                    d.provider = o.enums === String ? $root.WAAICommon.BotSourcesMetadata.BotSourceItem.SourceProvider[m.provider] === undefined ? m.provider : $root.WAAICommon.BotSourcesMetadata.BotSourceItem.SourceProvider[m.provider] : m.provider;
                    if (o.oneofs)
                        d._provider = "provider";
                }
                if (m.thumbnailCDNURL != null && m.hasOwnProperty("thumbnailCDNURL")) {
                    d.thumbnailCDNURL = m.thumbnailCDNURL;
                    if (o.oneofs)
                        d._thumbnailCDNURL = "thumbnailCDNURL";
                }
                if (m.sourceProviderURL != null && m.hasOwnProperty("sourceProviderURL")) {
                    d.sourceProviderURL = m.sourceProviderURL;
                    if (o.oneofs)
                        d._sourceProviderURL = "sourceProviderURL";
                }
                if (m.sourceQuery != null && m.hasOwnProperty("sourceQuery")) {
                    d.sourceQuery = m.sourceQuery;
                    if (o.oneofs)
                        d._sourceQuery = "sourceQuery";
                }
                if (m.faviconCDNURL != null && m.hasOwnProperty("faviconCDNURL")) {
                    d.faviconCDNURL = m.faviconCDNURL;
                    if (o.oneofs)
                        d._faviconCDNURL = "faviconCDNURL";
                }
                if (m.citationNumber != null && m.hasOwnProperty("citationNumber")) {
                    d.citationNumber = m.citationNumber;
                    if (o.oneofs)
                        d._citationNumber = "citationNumber";
                }
                if (m.sourceTitle != null && m.hasOwnProperty("sourceTitle")) {
                    d.sourceTitle = m.sourceTitle;
                    if (o.oneofs)
                        d._sourceTitle = "sourceTitle";
                }
                return d;
            };

            BotSourceItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            BotSourceItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotSourcesMetadata.BotSourceItem";
            };

            BotSourceItem.SourceProvider = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "BING"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "SUPPORT"] = 3;
                values[valuesById[4] = "OTHER"] = 4;
                return values;
            })();

            return BotSourceItem;
        })();

        return BotSourcesMetadata;
    })();

    WAAICommon.BotMessageOrigin = (function() {

        function BotMessageOrigin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMessageOrigin.prototype.type = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMessageOrigin.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMessageOrigin.create = function create(properties) {
            return new BotMessageOrigin(properties);
        };

        BotMessageOrigin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            return w;
        };

        BotMessageOrigin.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMessageOrigin();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMessageOrigin.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMessageOrigin)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMessageOrigin();
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED":
            case 0:
                m.type = 0;
                break;
            }
            return m;
        };

        BotMessageOrigin.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WAAICommon.BotMessageOrigin.BotMessageOriginType[m.type] === undefined ? m.type : $root.WAAICommon.BotMessageOrigin.BotMessageOriginType[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            return d;
        };

        BotMessageOrigin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMessageOrigin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMessageOrigin";
        };

        BotMessageOrigin.BotMessageOriginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED"] = 0;
            return values;
        })();

        return BotMessageOrigin;
    })();

    WAAICommon.AIThreadInfo = (function() {

        function AIThreadInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIThreadInfo.prototype.serverInfo = null;
        AIThreadInfo.prototype.clientInfo = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIThreadInfo.prototype, "_serverInfo", {
            get: $util.oneOfGetter($oneOfFields = ["serverInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIThreadInfo.prototype, "_clientInfo", {
            get: $util.oneOfGetter($oneOfFields = ["clientInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIThreadInfo.create = function create(properties) {
            return new AIThreadInfo(properties);
        };

        AIThreadInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.serverInfo != null && Object.hasOwnProperty.call(m, "serverInfo"))
                $root.WAAICommon.AIThreadInfo.AIThreadServerInfo.encode(m.serverInfo, w.uint32(10).fork()).ldelim();
            if (m.clientInfo != null && Object.hasOwnProperty.call(m, "clientInfo"))
                $root.WAAICommon.AIThreadInfo.AIThreadClientInfo.encode(m.clientInfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        AIThreadInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIThreadInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.serverInfo = $root.WAAICommon.AIThreadInfo.AIThreadServerInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.clientInfo = $root.WAAICommon.AIThreadInfo.AIThreadClientInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIThreadInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AIThreadInfo)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AIThreadInfo();
            if (d.serverInfo != null) {
                if (typeof d.serverInfo !== "object")
                    throw TypeError(".WAAICommon.AIThreadInfo.serverInfo: object expected");
                m.serverInfo = $root.WAAICommon.AIThreadInfo.AIThreadServerInfo.fromObject(d.serverInfo, n + 1);
            }
            if (d.clientInfo != null) {
                if (typeof d.clientInfo !== "object")
                    throw TypeError(".WAAICommon.AIThreadInfo.clientInfo: object expected");
                m.clientInfo = $root.WAAICommon.AIThreadInfo.AIThreadClientInfo.fromObject(d.clientInfo, n + 1);
            }
            return m;
        };

        AIThreadInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.serverInfo != null && m.hasOwnProperty("serverInfo")) {
                d.serverInfo = $root.WAAICommon.AIThreadInfo.AIThreadServerInfo.toObject(m.serverInfo, o);
                if (o.oneofs)
                    d._serverInfo = "serverInfo";
            }
            if (m.clientInfo != null && m.hasOwnProperty("clientInfo")) {
                d.clientInfo = $root.WAAICommon.AIThreadInfo.AIThreadClientInfo.toObject(m.clientInfo, o);
                if (o.oneofs)
                    d._clientInfo = "clientInfo";
            }
            return d;
        };

        AIThreadInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIThreadInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AIThreadInfo";
        };

        AIThreadInfo.AIThreadClientInfo = (function() {

            function AIThreadClientInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIThreadClientInfo.prototype.type = null;
            AIThreadClientInfo.prototype.sourceChatJID = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIThreadClientInfo.prototype, "_type", {
                get: $util.oneOfGetter($oneOfFields = ["type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIThreadClientInfo.prototype, "_sourceChatJID", {
                get: $util.oneOfGetter($oneOfFields = ["sourceChatJID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIThreadClientInfo.create = function create(properties) {
                return new AIThreadClientInfo(properties);
            };

            AIThreadClientInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.sourceChatJID != null && Object.hasOwnProperty.call(m, "sourceChatJID"))
                    w.uint32(18).string(m.sourceChatJID);
                return w;
            };

            AIThreadClientInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIThreadInfo.AIThreadClientInfo();
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
                            m.sourceChatJID = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIThreadClientInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.AIThreadInfo.AIThreadClientInfo)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.AIThreadInfo.AIThreadClientInfo();
                switch (d.type) {
                default:
                    if (typeof d.type === "number") {
                        m.type = d.type;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.type = 0;
                    break;
                case "DEFAULT":
                case 1:
                    m.type = 1;
                    break;
                case "INCOGNITO":
                case 2:
                    m.type = 2;
                    break;
                case "SIDE_CHAT":
                case 3:
                    m.type = 3;
                    break;
                }
                if (d.sourceChatJID != null) {
                    m.sourceChatJID = String(d.sourceChatJID);
                }
                return m;
            };

            AIThreadClientInfo.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.type != null && m.hasOwnProperty("type")) {
                    d.type = o.enums === String ? $root.WAAICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType[m.type] === undefined ? m.type : $root.WAAICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType[m.type] : m.type;
                    if (o.oneofs)
                        d._type = "type";
                }
                if (m.sourceChatJID != null && m.hasOwnProperty("sourceChatJID")) {
                    d.sourceChatJID = m.sourceChatJID;
                    if (o.oneofs)
                        d._sourceChatJID = "sourceChatJID";
                }
                return d;
            };

            AIThreadClientInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIThreadClientInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.AIThreadInfo.AIThreadClientInfo";
            };

            AIThreadClientInfo.AIThreadType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "DEFAULT"] = 1;
                values[valuesById[2] = "INCOGNITO"] = 2;
                values[valuesById[3] = "SIDE_CHAT"] = 3;
                return values;
            })();

            return AIThreadClientInfo;
        })();

        AIThreadInfo.AIThreadServerInfo = (function() {

            function AIThreadServerInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIThreadServerInfo.prototype.title = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIThreadServerInfo.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIThreadServerInfo.create = function create(properties) {
                return new AIThreadServerInfo(properties);
            };

            AIThreadServerInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                return w;
            };

            AIThreadServerInfo.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIThreadInfo.AIThreadServerInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.title = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIThreadServerInfo.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.AIThreadInfo.AIThreadServerInfo)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.AIThreadInfo.AIThreadServerInfo();
                if (d.title != null) {
                    m.title = String(d.title);
                }
                return m;
            };

            AIThreadServerInfo.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.title != null && m.hasOwnProperty("title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                return d;
            };

            AIThreadServerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIThreadServerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.AIThreadInfo.AIThreadServerInfo";
            };

            return AIThreadServerInfo;
        })();

        return AIThreadInfo;
    })();

    WAAICommon.BotFeedbackMessage = (function() {

        function BotFeedbackMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotFeedbackMessage.prototype.messageKey = null;
        BotFeedbackMessage.prototype.kind = null;
        BotFeedbackMessage.prototype.text = null;
        BotFeedbackMessage.prototype.kindNegative = null;
        BotFeedbackMessage.prototype.kindPositive = null;
        BotFeedbackMessage.prototype.kindReport = null;
        BotFeedbackMessage.prototype.sideBySideSurveyMetadata = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_messageKey", {
            get: $util.oneOfGetter($oneOfFields = ["messageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_kind", {
            get: $util.oneOfGetter($oneOfFields = ["kind"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_kindNegative", {
            get: $util.oneOfGetter($oneOfFields = ["kindNegative"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_kindPositive", {
            get: $util.oneOfGetter($oneOfFields = ["kindPositive"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_kindReport", {
            get: $util.oneOfGetter($oneOfFields = ["kindReport"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotFeedbackMessage.prototype, "_sideBySideSurveyMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["sideBySideSurveyMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotFeedbackMessage.create = function create(properties) {
            return new BotFeedbackMessage(properties);
        };

        BotFeedbackMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messageKey != null && Object.hasOwnProperty.call(m, "messageKey"))
                WACommon.MessageKey.encode(m.messageKey, w.uint32(10).fork()).ldelim();
            if (m.kind != null && Object.hasOwnProperty.call(m, "kind"))
                w.uint32(16).int32(m.kind);
            if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                w.uint32(26).string(m.text);
            if (m.kindNegative != null && Object.hasOwnProperty.call(m, "kindNegative"))
                w.uint32(32).uint64(m.kindNegative);
            if (m.kindPositive != null && Object.hasOwnProperty.call(m, "kindPositive"))
                w.uint32(40).uint64(m.kindPositive);
            if (m.kindReport != null && Object.hasOwnProperty.call(m, "kindReport"))
                w.uint32(48).int32(m.kindReport);
            if (m.sideBySideSurveyMetadata != null && Object.hasOwnProperty.call(m, "sideBySideSurveyMetadata"))
                $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.encode(m.sideBySideSurveyMetadata, w.uint32(58).fork()).ldelim();
            return w;
        };

        BotFeedbackMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageKey = WACommon.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.kind = r.int32();
                        break;
                    }
                case 3: {
                        m.text = r.string();
                        break;
                    }
                case 4: {
                        m.kindNegative = r.uint64();
                        break;
                    }
                case 5: {
                        m.kindPositive = r.uint64();
                        break;
                    }
                case 6: {
                        m.kindReport = r.int32();
                        break;
                    }
                case 7: {
                        m.sideBySideSurveyMetadata = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotFeedbackMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotFeedbackMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotFeedbackMessage();
            if (d.messageKey != null) {
                if (typeof d.messageKey !== "object")
                    throw TypeError(".WAAICommon.BotFeedbackMessage.messageKey: object expected");
                m.messageKey = WACommon.MessageKey.fromObject(d.messageKey, n + 1);
            }
            switch (d.kind) {
            default:
                if (typeof d.kind === "number") {
                    m.kind = d.kind;
                    break;
                }
                break;
            case "BOT_FEEDBACK_POSITIVE":
            case 0:
                m.kind = 0;
                break;
            case "BOT_FEEDBACK_NEGATIVE_GENERIC":
            case 1:
                m.kind = 1;
                break;
            case "BOT_FEEDBACK_NEGATIVE_HELPFUL":
            case 2:
                m.kind = 2;
                break;
            case "BOT_FEEDBACK_NEGATIVE_INTERESTING":
            case 3:
                m.kind = 3;
                break;
            case "BOT_FEEDBACK_NEGATIVE_ACCURATE":
            case 4:
                m.kind = 4;
                break;
            case "BOT_FEEDBACK_NEGATIVE_SAFE":
            case 5:
                m.kind = 5;
                break;
            case "BOT_FEEDBACK_NEGATIVE_OTHER":
            case 6:
                m.kind = 6;
                break;
            case "BOT_FEEDBACK_NEGATIVE_REFUSED":
            case 7:
                m.kind = 7;
                break;
            case "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING":
            case 8:
                m.kind = 8;
                break;
            case "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT":
            case 9:
                m.kind = 9;
                break;
            case "BOT_FEEDBACK_NEGATIVE_PERSONALIZED":
            case 10:
                m.kind = 10;
                break;
            case "BOT_FEEDBACK_NEGATIVE_CLARITY":
            case 11:
                m.kind = 11;
                break;
            case "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON":
            case 12:
                m.kind = 12;
                break;
            case "BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY":
            case 13:
                m.kind = 13;
                break;
            case "BOT_FEEDBACK_NEGATIVE":
            case 14:
                m.kind = 14;
                break;
            }
            if (d.text != null) {
                m.text = String(d.text);
            }
            if (d.kindNegative != null) {
                if ($util.Long)
                    (m.kindNegative = $util.Long.fromValue(d.kindNegative)).unsigned = true;
                else if (typeof d.kindNegative === "string")
                    m.kindNegative = parseInt(d.kindNegative, 10);
                else if (typeof d.kindNegative === "number")
                    m.kindNegative = d.kindNegative;
                else if (typeof d.kindNegative === "object")
                    m.kindNegative = new $util.LongBits(d.kindNegative.low >>> 0, d.kindNegative.high >>> 0).toNumber(true);
            }
            if (d.kindPositive != null) {
                if ($util.Long)
                    (m.kindPositive = $util.Long.fromValue(d.kindPositive)).unsigned = true;
                else if (typeof d.kindPositive === "string")
                    m.kindPositive = parseInt(d.kindPositive, 10);
                else if (typeof d.kindPositive === "number")
                    m.kindPositive = d.kindPositive;
                else if (typeof d.kindPositive === "object")
                    m.kindPositive = new $util.LongBits(d.kindPositive.low >>> 0, d.kindPositive.high >>> 0).toNumber(true);
            }
            switch (d.kindReport) {
            default:
                if (typeof d.kindReport === "number") {
                    m.kindReport = d.kindReport;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.kindReport = 0;
                break;
            case "GENERIC":
            case 1:
                m.kindReport = 1;
                break;
            }
            if (d.sideBySideSurveyMetadata != null) {
                if (typeof d.sideBySideSurveyMetadata !== "object")
                    throw TypeError(".WAAICommon.BotFeedbackMessage.sideBySideSurveyMetadata: object expected");
                m.sideBySideSurveyMetadata = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.fromObject(d.sideBySideSurveyMetadata, n + 1);
            }
            return m;
        };

        BotFeedbackMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.messageKey != null && m.hasOwnProperty("messageKey")) {
                d.messageKey = WACommon.MessageKey.toObject(m.messageKey, o);
                if (o.oneofs)
                    d._messageKey = "messageKey";
            }
            if (m.kind != null && m.hasOwnProperty("kind")) {
                d.kind = o.enums === String ? $root.WAAICommon.BotFeedbackMessage.BotFeedbackKind[m.kind] === undefined ? m.kind : $root.WAAICommon.BotFeedbackMessage.BotFeedbackKind[m.kind] : m.kind;
                if (o.oneofs)
                    d._kind = "kind";
            }
            if (m.text != null && m.hasOwnProperty("text")) {
                d.text = m.text;
                if (o.oneofs)
                    d._text = "text";
            }
            if (m.kindNegative != null && m.hasOwnProperty("kindNegative")) {
                if (typeof m.kindNegative === "number")
                    d.kindNegative = o.longs === String ? String(m.kindNegative) : m.kindNegative;
                else
                    d.kindNegative = o.longs === String ? $util.Long.prototype.toString.call(m.kindNegative) : o.longs === Number ? new $util.LongBits(m.kindNegative.low >>> 0, m.kindNegative.high >>> 0).toNumber(true) : m.kindNegative;
                if (o.oneofs)
                    d._kindNegative = "kindNegative";
            }
            if (m.kindPositive != null && m.hasOwnProperty("kindPositive")) {
                if (typeof m.kindPositive === "number")
                    d.kindPositive = o.longs === String ? String(m.kindPositive) : m.kindPositive;
                else
                    d.kindPositive = o.longs === String ? $util.Long.prototype.toString.call(m.kindPositive) : o.longs === Number ? new $util.LongBits(m.kindPositive.low >>> 0, m.kindPositive.high >>> 0).toNumber(true) : m.kindPositive;
                if (o.oneofs)
                    d._kindPositive = "kindPositive";
            }
            if (m.kindReport != null && m.hasOwnProperty("kindReport")) {
                d.kindReport = o.enums === String ? $root.WAAICommon.BotFeedbackMessage.ReportKind[m.kindReport] === undefined ? m.kindReport : $root.WAAICommon.BotFeedbackMessage.ReportKind[m.kindReport] : m.kindReport;
                if (o.oneofs)
                    d._kindReport = "kindReport";
            }
            if (m.sideBySideSurveyMetadata != null && m.hasOwnProperty("sideBySideSurveyMetadata")) {
                d.sideBySideSurveyMetadata = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.toObject(m.sideBySideSurveyMetadata, o);
                if (o.oneofs)
                    d._sideBySideSurveyMetadata = "sideBySideSurveyMetadata";
            }
            return d;
        };

        BotFeedbackMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotFeedbackMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage";
        };

        BotFeedbackMessage.ReportKind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultiplePositive = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultipleNegative = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[4] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING"] = 4;
            values[valuesById[8] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE"] = 8;
            values[valuesById[16] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE"] = 16;
            values[valuesById[32] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER"] = 32;
            values[valuesById[64] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED"] = 64;
            values[valuesById[128] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING"] = 128;
            values[valuesById[256] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 256;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_FEEDBACK_POSITIVE"] = 0;
            values[valuesById[1] = "BOT_FEEDBACK_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[3] = "BOT_FEEDBACK_NEGATIVE_INTERESTING"] = 3;
            values[valuesById[4] = "BOT_FEEDBACK_NEGATIVE_ACCURATE"] = 4;
            values[valuesById[5] = "BOT_FEEDBACK_NEGATIVE_SAFE"] = 5;
            values[valuesById[6] = "BOT_FEEDBACK_NEGATIVE_OTHER"] = 6;
            values[valuesById[7] = "BOT_FEEDBACK_NEGATIVE_REFUSED"] = 7;
            values[valuesById[8] = "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING"] = 8;
            values[valuesById[9] = "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 9;
            values[valuesById[10] = "BOT_FEEDBACK_NEGATIVE_PERSONALIZED"] = 10;
            values[valuesById[11] = "BOT_FEEDBACK_NEGATIVE_CLARITY"] = 11;
            values[valuesById[12] = "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON"] = 12;
            values[valuesById[13] = "BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY"] = 13;
            values[valuesById[14] = "BOT_FEEDBACK_NEGATIVE"] = 14;
            return values;
        })();

        BotFeedbackMessage.SideBySideSurveyMetadata = (function() {

            function SideBySideSurveyMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SideBySideSurveyMetadata.prototype.selectedRequestID = null;
            SideBySideSurveyMetadata.prototype.surveyID = null;
            SideBySideSurveyMetadata.prototype.simonSessionFbid = null;
            SideBySideSurveyMetadata.prototype.responseOtid = null;
            SideBySideSurveyMetadata.prototype.responseTimestampMSString = null;
            SideBySideSurveyMetadata.prototype.isSelectedResponsePrimary = null;
            SideBySideSurveyMetadata.prototype.messageIDToEdit = null;
            SideBySideSurveyMetadata.prototype.analyticsData = null;
            SideBySideSurveyMetadata.prototype.metaAiAnalyticsData = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_selectedRequestID", {
                get: $util.oneOfGetter($oneOfFields = ["selectedRequestID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_surveyID", {
                get: $util.oneOfGetter($oneOfFields = ["surveyID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_simonSessionFbid", {
                get: $util.oneOfGetter($oneOfFields = ["simonSessionFbid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_responseOtid", {
                get: $util.oneOfGetter($oneOfFields = ["responseOtid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_responseTimestampMSString", {
                get: $util.oneOfGetter($oneOfFields = ["responseTimestampMSString"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_isSelectedResponsePrimary", {
                get: $util.oneOfGetter($oneOfFields = ["isSelectedResponsePrimary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_messageIDToEdit", {
                get: $util.oneOfGetter($oneOfFields = ["messageIDToEdit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_analyticsData", {
                get: $util.oneOfGetter($oneOfFields = ["analyticsData"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideSurveyMetadata.prototype, "_metaAiAnalyticsData", {
                get: $util.oneOfGetter($oneOfFields = ["metaAiAnalyticsData"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            SideBySideSurveyMetadata.create = function create(properties) {
                return new SideBySideSurveyMetadata(properties);
            };

            SideBySideSurveyMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.selectedRequestID != null && Object.hasOwnProperty.call(m, "selectedRequestID"))
                    w.uint32(10).string(m.selectedRequestID);
                if (m.surveyID != null && Object.hasOwnProperty.call(m, "surveyID"))
                    w.uint32(16).uint32(m.surveyID);
                if (m.simonSessionFbid != null && Object.hasOwnProperty.call(m, "simonSessionFbid"))
                    w.uint32(26).string(m.simonSessionFbid);
                if (m.responseOtid != null && Object.hasOwnProperty.call(m, "responseOtid"))
                    w.uint32(34).string(m.responseOtid);
                if (m.responseTimestampMSString != null && Object.hasOwnProperty.call(m, "responseTimestampMSString"))
                    w.uint32(42).string(m.responseTimestampMSString);
                if (m.isSelectedResponsePrimary != null && Object.hasOwnProperty.call(m, "isSelectedResponsePrimary"))
                    w.uint32(48).bool(m.isSelectedResponsePrimary);
                if (m.messageIDToEdit != null && Object.hasOwnProperty.call(m, "messageIDToEdit"))
                    w.uint32(58).string(m.messageIDToEdit);
                if (m.analyticsData != null && Object.hasOwnProperty.call(m, "analyticsData"))
                    $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.encode(m.analyticsData, w.uint32(66).fork()).ldelim();
                if (m.metaAiAnalyticsData != null && Object.hasOwnProperty.call(m, "metaAiAnalyticsData"))
                    $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.encode(m.metaAiAnalyticsData, w.uint32(74).fork()).ldelim();
                return w;
            };

            SideBySideSurveyMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.selectedRequestID = r.string();
                            break;
                        }
                    case 2: {
                            m.surveyID = r.uint32();
                            break;
                        }
                    case 3: {
                            m.simonSessionFbid = r.string();
                            break;
                        }
                    case 4: {
                            m.responseOtid = r.string();
                            break;
                        }
                    case 5: {
                            m.responseTimestampMSString = r.string();
                            break;
                        }
                    case 6: {
                            m.isSelectedResponsePrimary = r.bool();
                            break;
                        }
                    case 7: {
                            m.messageIDToEdit = r.string();
                            break;
                        }
                    case 8: {
                            m.analyticsData = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 9: {
                            m.metaAiAnalyticsData = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            SideBySideSurveyMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata();
                if (d.selectedRequestID != null) {
                    m.selectedRequestID = String(d.selectedRequestID);
                }
                if (d.surveyID != null) {
                    m.surveyID = d.surveyID >>> 0;
                }
                if (d.simonSessionFbid != null) {
                    m.simonSessionFbid = String(d.simonSessionFbid);
                }
                if (d.responseOtid != null) {
                    m.responseOtid = String(d.responseOtid);
                }
                if (d.responseTimestampMSString != null) {
                    m.responseTimestampMSString = String(d.responseTimestampMSString);
                }
                if (d.isSelectedResponsePrimary != null) {
                    m.isSelectedResponsePrimary = Boolean(d.isSelectedResponsePrimary);
                }
                if (d.messageIDToEdit != null) {
                    m.messageIDToEdit = String(d.messageIDToEdit);
                }
                if (d.analyticsData != null) {
                    if (typeof d.analyticsData !== "object")
                        throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.analyticsData: object expected");
                    m.analyticsData = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.fromObject(d.analyticsData, n + 1);
                }
                if (d.metaAiAnalyticsData != null) {
                    if (typeof d.metaAiAnalyticsData !== "object")
                        throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.metaAiAnalyticsData: object expected");
                    m.metaAiAnalyticsData = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.fromObject(d.metaAiAnalyticsData, n + 1);
                }
                return m;
            };

            SideBySideSurveyMetadata.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.selectedRequestID != null && m.hasOwnProperty("selectedRequestID")) {
                    d.selectedRequestID = m.selectedRequestID;
                    if (o.oneofs)
                        d._selectedRequestID = "selectedRequestID";
                }
                if (m.surveyID != null && m.hasOwnProperty("surveyID")) {
                    d.surveyID = m.surveyID;
                    if (o.oneofs)
                        d._surveyID = "surveyID";
                }
                if (m.simonSessionFbid != null && m.hasOwnProperty("simonSessionFbid")) {
                    d.simonSessionFbid = m.simonSessionFbid;
                    if (o.oneofs)
                        d._simonSessionFbid = "simonSessionFbid";
                }
                if (m.responseOtid != null && m.hasOwnProperty("responseOtid")) {
                    d.responseOtid = m.responseOtid;
                    if (o.oneofs)
                        d._responseOtid = "responseOtid";
                }
                if (m.responseTimestampMSString != null && m.hasOwnProperty("responseTimestampMSString")) {
                    d.responseTimestampMSString = m.responseTimestampMSString;
                    if (o.oneofs)
                        d._responseTimestampMSString = "responseTimestampMSString";
                }
                if (m.isSelectedResponsePrimary != null && m.hasOwnProperty("isSelectedResponsePrimary")) {
                    d.isSelectedResponsePrimary = m.isSelectedResponsePrimary;
                    if (o.oneofs)
                        d._isSelectedResponsePrimary = "isSelectedResponsePrimary";
                }
                if (m.messageIDToEdit != null && m.hasOwnProperty("messageIDToEdit")) {
                    d.messageIDToEdit = m.messageIDToEdit;
                    if (o.oneofs)
                        d._messageIDToEdit = "messageIDToEdit";
                }
                if (m.analyticsData != null && m.hasOwnProperty("analyticsData")) {
                    d.analyticsData = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.toObject(m.analyticsData, o);
                    if (o.oneofs)
                        d._analyticsData = "analyticsData";
                }
                if (m.metaAiAnalyticsData != null && m.hasOwnProperty("metaAiAnalyticsData")) {
                    d.metaAiAnalyticsData = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.toObject(m.metaAiAnalyticsData, o);
                    if (o.oneofs)
                        d._metaAiAnalyticsData = "metaAiAnalyticsData";
                }
                return d;
            };

            SideBySideSurveyMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SideBySideSurveyMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata";
            };

            SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData = (function() {

                function SidebySideSurveyMetaAiAnalyticsData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SidebySideSurveyMetaAiAnalyticsData.prototype.surveyID = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.primaryResponseID = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.testArmName = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.timestampMSString = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.ctaImpressionEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.ctaClickEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.cardImpressionEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.responseEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.abandonEvent = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_surveyID", {
                    get: $util.oneOfGetter($oneOfFields = ["surveyID"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_primaryResponseID", {
                    get: $util.oneOfGetter($oneOfFields = ["primaryResponseID"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_testArmName", {
                    get: $util.oneOfGetter($oneOfFields = ["testArmName"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_timestampMSString", {
                    get: $util.oneOfGetter($oneOfFields = ["timestampMSString"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_ctaImpressionEvent", {
                    get: $util.oneOfGetter($oneOfFields = ["ctaImpressionEvent"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_ctaClickEvent", {
                    get: $util.oneOfGetter($oneOfFields = ["ctaClickEvent"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_cardImpressionEvent", {
                    get: $util.oneOfGetter($oneOfFields = ["cardImpressionEvent"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_responseEvent", {
                    get: $util.oneOfGetter($oneOfFields = ["responseEvent"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SidebySideSurveyMetaAiAnalyticsData.prototype, "_abandonEvent", {
                    get: $util.oneOfGetter($oneOfFields = ["abandonEvent"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                SidebySideSurveyMetaAiAnalyticsData.create = function create(properties) {
                    return new SidebySideSurveyMetaAiAnalyticsData(properties);
                };

                SidebySideSurveyMetaAiAnalyticsData.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.surveyID != null && Object.hasOwnProperty.call(m, "surveyID"))
                        w.uint32(8).uint32(m.surveyID);
                    if (m.primaryResponseID != null && Object.hasOwnProperty.call(m, "primaryResponseID"))
                        w.uint32(18).string(m.primaryResponseID);
                    if (m.testArmName != null && Object.hasOwnProperty.call(m, "testArmName"))
                        w.uint32(26).string(m.testArmName);
                    if (m.timestampMSString != null && Object.hasOwnProperty.call(m, "timestampMSString"))
                        w.uint32(34).string(m.timestampMSString);
                    if (m.ctaImpressionEvent != null && Object.hasOwnProperty.call(m, "ctaImpressionEvent"))
                        $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.encode(m.ctaImpressionEvent, w.uint32(42).fork()).ldelim();
                    if (m.ctaClickEvent != null && Object.hasOwnProperty.call(m, "ctaClickEvent"))
                        $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.encode(m.ctaClickEvent, w.uint32(50).fork()).ldelim();
                    if (m.cardImpressionEvent != null && Object.hasOwnProperty.call(m, "cardImpressionEvent"))
                        $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.encode(m.cardImpressionEvent, w.uint32(58).fork()).ldelim();
                    if (m.responseEvent != null && Object.hasOwnProperty.call(m, "responseEvent"))
                        $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.encode(m.responseEvent, w.uint32(66).fork()).ldelim();
                    if (m.abandonEvent != null && Object.hasOwnProperty.call(m, "abandonEvent"))
                        $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.encode(m.abandonEvent, w.uint32(74).fork()).ldelim();
                    return w;
                };

                SidebySideSurveyMetaAiAnalyticsData.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.surveyID = r.uint32();
                                break;
                            }
                        case 2: {
                                m.primaryResponseID = r.string();
                                break;
                            }
                        case 3: {
                                m.testArmName = r.string();
                                break;
                            }
                        case 4: {
                                m.timestampMSString = r.string();
                                break;
                            }
                        case 5: {
                                m.ctaImpressionEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 6: {
                                m.ctaClickEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 7: {
                                m.cardImpressionEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 8: {
                                m.responseEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        case 9: {
                                m.abandonEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                SidebySideSurveyMetaAiAnalyticsData.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData();
                    if (d.surveyID != null) {
                        m.surveyID = d.surveyID >>> 0;
                    }
                    if (d.primaryResponseID != null) {
                        m.primaryResponseID = String(d.primaryResponseID);
                    }
                    if (d.testArmName != null) {
                        m.testArmName = String(d.testArmName);
                    }
                    if (d.timestampMSString != null) {
                        m.timestampMSString = String(d.timestampMSString);
                    }
                    if (d.ctaImpressionEvent != null) {
                        if (typeof d.ctaImpressionEvent !== "object")
                            throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ctaImpressionEvent: object expected");
                        m.ctaImpressionEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.fromObject(d.ctaImpressionEvent, n + 1);
                    }
                    if (d.ctaClickEvent != null) {
                        if (typeof d.ctaClickEvent !== "object")
                            throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ctaClickEvent: object expected");
                        m.ctaClickEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.fromObject(d.ctaClickEvent, n + 1);
                    }
                    if (d.cardImpressionEvent != null) {
                        if (typeof d.cardImpressionEvent !== "object")
                            throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.cardImpressionEvent: object expected");
                        m.cardImpressionEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.fromObject(d.cardImpressionEvent, n + 1);
                    }
                    if (d.responseEvent != null) {
                        if (typeof d.responseEvent !== "object")
                            throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.responseEvent: object expected");
                        m.responseEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.fromObject(d.responseEvent, n + 1);
                    }
                    if (d.abandonEvent != null) {
                        if (typeof d.abandonEvent !== "object")
                            throw TypeError(".WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.abandonEvent: object expected");
                        m.abandonEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.fromObject(d.abandonEvent, n + 1);
                    }
                    return m;
                };

                SidebySideSurveyMetaAiAnalyticsData.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.surveyID != null && m.hasOwnProperty("surveyID")) {
                        d.surveyID = m.surveyID;
                        if (o.oneofs)
                            d._surveyID = "surveyID";
                    }
                    if (m.primaryResponseID != null && m.hasOwnProperty("primaryResponseID")) {
                        d.primaryResponseID = m.primaryResponseID;
                        if (o.oneofs)
                            d._primaryResponseID = "primaryResponseID";
                    }
                    if (m.testArmName != null && m.hasOwnProperty("testArmName")) {
                        d.testArmName = m.testArmName;
                        if (o.oneofs)
                            d._testArmName = "testArmName";
                    }
                    if (m.timestampMSString != null && m.hasOwnProperty("timestampMSString")) {
                        d.timestampMSString = m.timestampMSString;
                        if (o.oneofs)
                            d._timestampMSString = "timestampMSString";
                    }
                    if (m.ctaImpressionEvent != null && m.hasOwnProperty("ctaImpressionEvent")) {
                        d.ctaImpressionEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.toObject(m.ctaImpressionEvent, o);
                        if (o.oneofs)
                            d._ctaImpressionEvent = "ctaImpressionEvent";
                    }
                    if (m.ctaClickEvent != null && m.hasOwnProperty("ctaClickEvent")) {
                        d.ctaClickEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.toObject(m.ctaClickEvent, o);
                        if (o.oneofs)
                            d._ctaClickEvent = "ctaClickEvent";
                    }
                    if (m.cardImpressionEvent != null && m.hasOwnProperty("cardImpressionEvent")) {
                        d.cardImpressionEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData.toObject(m.cardImpressionEvent, o);
                        if (o.oneofs)
                            d._cardImpressionEvent = "cardImpressionEvent";
                    }
                    if (m.responseEvent != null && m.hasOwnProperty("responseEvent")) {
                        d.responseEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.toObject(m.responseEvent, o);
                        if (o.oneofs)
                            d._responseEvent = "responseEvent";
                    }
                    if (m.abandonEvent != null && m.hasOwnProperty("abandonEvent")) {
                        d.abandonEvent = $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.toObject(m.abandonEvent, o);
                        if (o.oneofs)
                            d._abandonEvent = "abandonEvent";
                    }
                    return d;
                };

                SidebySideSurveyMetaAiAnalyticsData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                SidebySideSurveyMetaAiAnalyticsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData";
                };

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData = (function() {

                    function SideBySideSurveyAbandonEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyAbandonEventData.prototype.abandonDwellTimeMSString = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(SideBySideSurveyAbandonEventData.prototype, "_abandonDwellTimeMSString", {
                        get: $util.oneOfGetter($oneOfFields = ["abandonDwellTimeMSString"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    SideBySideSurveyAbandonEventData.create = function create(properties) {
                        return new SideBySideSurveyAbandonEventData(properties);
                    };

                    SideBySideSurveyAbandonEventData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.abandonDwellTimeMSString != null && Object.hasOwnProperty.call(m, "abandonDwellTimeMSString"))
                            w.uint32(10).string(m.abandonDwellTimeMSString);
                        return w;
                    };

                    SideBySideSurveyAbandonEventData.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.abandonDwellTimeMSString = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    SideBySideSurveyAbandonEventData.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData)
                            return d;
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData();
                        if (d.abandonDwellTimeMSString != null) {
                            m.abandonDwellTimeMSString = String(d.abandonDwellTimeMSString);
                        }
                        return m;
                    };

                    SideBySideSurveyAbandonEventData.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (m.abandonDwellTimeMSString != null && m.hasOwnProperty("abandonDwellTimeMSString")) {
                            d.abandonDwellTimeMSString = m.abandonDwellTimeMSString;
                            if (o.oneofs)
                                d._abandonDwellTimeMSString = "abandonDwellTimeMSString";
                        }
                        return d;
                    };

                    SideBySideSurveyAbandonEventData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyAbandonEventData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData";
                    };

                    return SideBySideSurveyAbandonEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData = (function() {

                    function SideBySideSurveyResponseEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyResponseEventData.prototype.responseDwellTimeMSString = null;
                    SideBySideSurveyResponseEventData.prototype.selectedResponseID = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(SideBySideSurveyResponseEventData.prototype, "_responseDwellTimeMSString", {
                        get: $util.oneOfGetter($oneOfFields = ["responseDwellTimeMSString"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(SideBySideSurveyResponseEventData.prototype, "_selectedResponseID", {
                        get: $util.oneOfGetter($oneOfFields = ["selectedResponseID"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    SideBySideSurveyResponseEventData.create = function create(properties) {
                        return new SideBySideSurveyResponseEventData(properties);
                    };

                    SideBySideSurveyResponseEventData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.responseDwellTimeMSString != null && Object.hasOwnProperty.call(m, "responseDwellTimeMSString"))
                            w.uint32(10).string(m.responseDwellTimeMSString);
                        if (m.selectedResponseID != null && Object.hasOwnProperty.call(m, "selectedResponseID"))
                            w.uint32(18).string(m.selectedResponseID);
                        return w;
                    };

                    SideBySideSurveyResponseEventData.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.responseDwellTimeMSString = r.string();
                                    break;
                                }
                            case 2: {
                                    m.selectedResponseID = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    SideBySideSurveyResponseEventData.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData)
                            return d;
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData();
                        if (d.responseDwellTimeMSString != null) {
                            m.responseDwellTimeMSString = String(d.responseDwellTimeMSString);
                        }
                        if (d.selectedResponseID != null) {
                            m.selectedResponseID = String(d.selectedResponseID);
                        }
                        return m;
                    };

                    SideBySideSurveyResponseEventData.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (m.responseDwellTimeMSString != null && m.hasOwnProperty("responseDwellTimeMSString")) {
                            d.responseDwellTimeMSString = m.responseDwellTimeMSString;
                            if (o.oneofs)
                                d._responseDwellTimeMSString = "responseDwellTimeMSString";
                        }
                        if (m.selectedResponseID != null && m.hasOwnProperty("selectedResponseID")) {
                            d.selectedResponseID = m.selectedResponseID;
                            if (o.oneofs)
                                d._selectedResponseID = "selectedResponseID";
                        }
                        return d;
                    };

                    SideBySideSurveyResponseEventData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyResponseEventData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData";
                    };

                    return SideBySideSurveyResponseEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData = (function() {

                    function SideBySideSurveyCardImpressionEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyCardImpressionEventData.create = function create(properties) {
                        return new SideBySideSurveyCardImpressionEventData(properties);
                    };

                    SideBySideSurveyCardImpressionEventData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    SideBySideSurveyCardImpressionEventData.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    SideBySideSurveyCardImpressionEventData.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData)
                            return d;
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        return new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData();
                    };

                    SideBySideSurveyCardImpressionEventData.toObject = function toObject() {
                        return {};
                    };

                    SideBySideSurveyCardImpressionEventData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyCardImpressionEventData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData";
                    };

                    return SideBySideSurveyCardImpressionEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData = (function() {

                    function SideBySideSurveyCTAClickEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyCTAClickEventData.prototype.isSurveyExpired = null;
                    SideBySideSurveyCTAClickEventData.prototype.clickDwellTimeMSString = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(SideBySideSurveyCTAClickEventData.prototype, "_isSurveyExpired", {
                        get: $util.oneOfGetter($oneOfFields = ["isSurveyExpired"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(SideBySideSurveyCTAClickEventData.prototype, "_clickDwellTimeMSString", {
                        get: $util.oneOfGetter($oneOfFields = ["clickDwellTimeMSString"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    SideBySideSurveyCTAClickEventData.create = function create(properties) {
                        return new SideBySideSurveyCTAClickEventData(properties);
                    };

                    SideBySideSurveyCTAClickEventData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.isSurveyExpired != null && Object.hasOwnProperty.call(m, "isSurveyExpired"))
                            w.uint32(8).bool(m.isSurveyExpired);
                        if (m.clickDwellTimeMSString != null && Object.hasOwnProperty.call(m, "clickDwellTimeMSString"))
                            w.uint32(18).string(m.clickDwellTimeMSString);
                        return w;
                    };

                    SideBySideSurveyCTAClickEventData.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.isSurveyExpired = r.bool();
                                    break;
                                }
                            case 2: {
                                    m.clickDwellTimeMSString = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    SideBySideSurveyCTAClickEventData.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData)
                            return d;
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData();
                        if (d.isSurveyExpired != null) {
                            m.isSurveyExpired = Boolean(d.isSurveyExpired);
                        }
                        if (d.clickDwellTimeMSString != null) {
                            m.clickDwellTimeMSString = String(d.clickDwellTimeMSString);
                        }
                        return m;
                    };

                    SideBySideSurveyCTAClickEventData.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (m.isSurveyExpired != null && m.hasOwnProperty("isSurveyExpired")) {
                            d.isSurveyExpired = m.isSurveyExpired;
                            if (o.oneofs)
                                d._isSurveyExpired = "isSurveyExpired";
                        }
                        if (m.clickDwellTimeMSString != null && m.hasOwnProperty("clickDwellTimeMSString")) {
                            d.clickDwellTimeMSString = m.clickDwellTimeMSString;
                            if (o.oneofs)
                                d._clickDwellTimeMSString = "clickDwellTimeMSString";
                        }
                        return d;
                    };

                    SideBySideSurveyCTAClickEventData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyCTAClickEventData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData";
                    };

                    return SideBySideSurveyCTAClickEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData = (function() {

                    function SideBySideSurveyCTAImpressionEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyCTAImpressionEventData.prototype.isSurveyExpired = null;

                    let $oneOfFields;

                    // Virtual OneOf for proto3 optional field
                    Object.defineProperty(SideBySideSurveyCTAImpressionEventData.prototype, "_isSurveyExpired", {
                        get: $util.oneOfGetter($oneOfFields = ["isSurveyExpired"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    SideBySideSurveyCTAImpressionEventData.create = function create(properties) {
                        return new SideBySideSurveyCTAImpressionEventData(properties);
                    };

                    SideBySideSurveyCTAImpressionEventData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.isSurveyExpired != null && Object.hasOwnProperty.call(m, "isSurveyExpired"))
                            w.uint32(8).bool(m.isSurveyExpired);
                        return w;
                    };

                    SideBySideSurveyCTAImpressionEventData.decode = function decode(r, l, e, n) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (n === undefined)
                            n = 0;
                        if (n > $Reader.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            if (t === e)
                                break;
                            switch (t >>> 3) {
                            case 1: {
                                    m.isSurveyExpired = r.bool();
                                    break;
                                }
                            default:
                                r.skipType(t & 7, n);
                                break;
                            }
                        }
                        return m;
                    };

                    SideBySideSurveyCTAImpressionEventData.fromObject = function fromObject(d, n) {
                        if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData)
                            return d;
                        if (n === undefined)
                            n = 0;
                        if (n > $util.recursionLimit)
                            throw Error("maximum nesting depth exceeded");
                        var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData();
                        if (d.isSurveyExpired != null) {
                            m.isSurveyExpired = Boolean(d.isSurveyExpired);
                        }
                        return m;
                    };

                    SideBySideSurveyCTAImpressionEventData.toObject = function toObject(m, o) {
                        if (!o)
                            o = {};
                        var d = {};
                        if (m.isSurveyExpired != null && m.hasOwnProperty("isSurveyExpired")) {
                            d.isSurveyExpired = m.isSurveyExpired;
                            if (o.oneofs)
                                d._isSurveyExpired = "isSurveyExpired";
                        }
                        return d;
                    };

                    SideBySideSurveyCTAImpressionEventData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyCTAImpressionEventData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData";
                    };

                    return SideBySideSurveyCTAImpressionEventData;
                })();

                return SidebySideSurveyMetaAiAnalyticsData;
            })();

            SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData = (function() {

                function SideBySideSurveyAnalyticsData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SideBySideSurveyAnalyticsData.prototype.tessaEvent = null;
                SideBySideSurveyAnalyticsData.prototype.tessaSessionFbid = null;
                SideBySideSurveyAnalyticsData.prototype.simonSessionFbid = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SideBySideSurveyAnalyticsData.prototype, "_tessaEvent", {
                    get: $util.oneOfGetter($oneOfFields = ["tessaEvent"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SideBySideSurveyAnalyticsData.prototype, "_tessaSessionFbid", {
                    get: $util.oneOfGetter($oneOfFields = ["tessaSessionFbid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(SideBySideSurveyAnalyticsData.prototype, "_simonSessionFbid", {
                    get: $util.oneOfGetter($oneOfFields = ["simonSessionFbid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                SideBySideSurveyAnalyticsData.create = function create(properties) {
                    return new SideBySideSurveyAnalyticsData(properties);
                };

                SideBySideSurveyAnalyticsData.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.tessaEvent != null && Object.hasOwnProperty.call(m, "tessaEvent"))
                        w.uint32(10).string(m.tessaEvent);
                    if (m.tessaSessionFbid != null && Object.hasOwnProperty.call(m, "tessaSessionFbid"))
                        w.uint32(18).string(m.tessaSessionFbid);
                    if (m.simonSessionFbid != null && Object.hasOwnProperty.call(m, "simonSessionFbid"))
                        w.uint32(26).string(m.simonSessionFbid);
                    return w;
                };

                SideBySideSurveyAnalyticsData.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.tessaEvent = r.string();
                                break;
                            }
                        case 2: {
                                m.tessaSessionFbid = r.string();
                                break;
                            }
                        case 3: {
                                m.simonSessionFbid = r.string();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                SideBySideSurveyAnalyticsData.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData();
                    if (d.tessaEvent != null) {
                        m.tessaEvent = String(d.tessaEvent);
                    }
                    if (d.tessaSessionFbid != null) {
                        m.tessaSessionFbid = String(d.tessaSessionFbid);
                    }
                    if (d.simonSessionFbid != null) {
                        m.simonSessionFbid = String(d.simonSessionFbid);
                    }
                    return m;
                };

                SideBySideSurveyAnalyticsData.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.tessaEvent != null && m.hasOwnProperty("tessaEvent")) {
                        d.tessaEvent = m.tessaEvent;
                        if (o.oneofs)
                            d._tessaEvent = "tessaEvent";
                    }
                    if (m.tessaSessionFbid != null && m.hasOwnProperty("tessaSessionFbid")) {
                        d.tessaSessionFbid = m.tessaSessionFbid;
                        if (o.oneofs)
                            d._tessaSessionFbid = "tessaSessionFbid";
                    }
                    if (m.simonSessionFbid != null && m.hasOwnProperty("simonSessionFbid")) {
                        d.simonSessionFbid = m.simonSessionFbid;
                        if (o.oneofs)
                            d._simonSessionFbid = "simonSessionFbid";
                    }
                    return d;
                };

                SideBySideSurveyAnalyticsData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                SideBySideSurveyAnalyticsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAAICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData";
                };

                return SideBySideSurveyAnalyticsData;
            })();

            return SideBySideSurveyMetadata;
        })();

        return BotFeedbackMessage;
    })();

    WAAICommon.BotDocumentMessageMetadata = (function() {

        function BotDocumentMessageMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotDocumentMessageMetadata.prototype.pluginType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotDocumentMessageMetadata.prototype, "_pluginType", {
            get: $util.oneOfGetter($oneOfFields = ["pluginType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotDocumentMessageMetadata.create = function create(properties) {
            return new BotDocumentMessageMetadata(properties);
        };

        BotDocumentMessageMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pluginType != null && Object.hasOwnProperty.call(m, "pluginType"))
                w.uint32(8).int32(m.pluginType);
            return w;
        };

        BotDocumentMessageMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotDocumentMessageMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.pluginType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotDocumentMessageMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotDocumentMessageMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotDocumentMessageMetadata();
            switch (d.pluginType) {
            default:
                if (typeof d.pluginType === "number") {
                    m.pluginType = d.pluginType;
                    break;
                }
                break;
            case "TEXT_EXTRACTION":
            case 0:
                m.pluginType = 0;
                break;
            case "OCR_AND_IMAGES":
            case 1:
                m.pluginType = 1;
                break;
            }
            return m;
        };

        BotDocumentMessageMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.pluginType != null && m.hasOwnProperty("pluginType")) {
                d.pluginType = o.enums === String ? $root.WAAICommon.BotDocumentMessageMetadata.DocumentPluginType[m.pluginType] === undefined ? m.pluginType : $root.WAAICommon.BotDocumentMessageMetadata.DocumentPluginType[m.pluginType] : m.pluginType;
                if (o.oneofs)
                    d._pluginType = "pluginType";
            }
            return d;
        };

        BotDocumentMessageMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotDocumentMessageMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotDocumentMessageMetadata";
        };

        BotDocumentMessageMetadata.DocumentPluginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TEXT_EXTRACTION"] = 0;
            values[valuesById[1] = "OCR_AND_IMAGES"] = 1;
            return values;
        })();

        return BotDocumentMessageMetadata;
    })();

    WAAICommon.AIHomeState = (function() {

        function AIHomeState(p) {
            this.capabilityOptions = [];
            this.conversationOptions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIHomeState.prototype.lastFetchTime = null;
        AIHomeState.prototype.capabilityOptions = $util.emptyArray;
        AIHomeState.prototype.conversationOptions = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIHomeState.prototype, "_lastFetchTime", {
            get: $util.oneOfGetter($oneOfFields = ["lastFetchTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIHomeState.create = function create(properties) {
            return new AIHomeState(properties);
        };

        AIHomeState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.lastFetchTime != null && Object.hasOwnProperty.call(m, "lastFetchTime"))
                w.uint32(8).int64(m.lastFetchTime);
            if (m.capabilityOptions != null && m.capabilityOptions.length) {
                for (var i = 0; i < m.capabilityOptions.length; ++i)
                    $root.WAAICommon.AIHomeState.AIHomeOption.encode(m.capabilityOptions[i], w.uint32(18).fork()).ldelim();
            }
            if (m.conversationOptions != null && m.conversationOptions.length) {
                for (var i = 0; i < m.conversationOptions.length; ++i)
                    $root.WAAICommon.AIHomeState.AIHomeOption.encode(m.conversationOptions[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        AIHomeState.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIHomeState();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.lastFetchTime = r.int64();
                        break;
                    }
                case 2: {
                        if (!(m.capabilityOptions && m.capabilityOptions.length))
                            m.capabilityOptions = [];
                        m.capabilityOptions.push($root.WAAICommon.AIHomeState.AIHomeOption.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        if (!(m.conversationOptions && m.conversationOptions.length))
                            m.conversationOptions = [];
                        m.conversationOptions.push($root.WAAICommon.AIHomeState.AIHomeOption.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIHomeState.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AIHomeState)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AIHomeState();
            if (d.lastFetchTime != null) {
                if ($util.Long)
                    (m.lastFetchTime = $util.Long.fromValue(d.lastFetchTime)).unsigned = false;
                else if (typeof d.lastFetchTime === "string")
                    m.lastFetchTime = parseInt(d.lastFetchTime, 10);
                else if (typeof d.lastFetchTime === "number")
                    m.lastFetchTime = d.lastFetchTime;
                else if (typeof d.lastFetchTime === "object")
                    m.lastFetchTime = new $util.LongBits(d.lastFetchTime.low >>> 0, d.lastFetchTime.high >>> 0).toNumber();
            }
            if (d.capabilityOptions) {
                if (!Array.isArray(d.capabilityOptions))
                    throw TypeError(".WAAICommon.AIHomeState.capabilityOptions: array expected");
                m.capabilityOptions = [];
                for (var i = 0; i < d.capabilityOptions.length; ++i) {
                    if (typeof d.capabilityOptions[i] !== "object")
                        throw TypeError(".WAAICommon.AIHomeState.capabilityOptions: object expected");
                    m.capabilityOptions[i] = $root.WAAICommon.AIHomeState.AIHomeOption.fromObject(d.capabilityOptions[i], n + 1);
                }
            }
            if (d.conversationOptions) {
                if (!Array.isArray(d.conversationOptions))
                    throw TypeError(".WAAICommon.AIHomeState.conversationOptions: array expected");
                m.conversationOptions = [];
                for (var i = 0; i < d.conversationOptions.length; ++i) {
                    if (typeof d.conversationOptions[i] !== "object")
                        throw TypeError(".WAAICommon.AIHomeState.conversationOptions: object expected");
                    m.conversationOptions[i] = $root.WAAICommon.AIHomeState.AIHomeOption.fromObject(d.conversationOptions[i], n + 1);
                }
            }
            return m;
        };

        AIHomeState.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.capabilityOptions = [];
                d.conversationOptions = [];
            }
            if (m.lastFetchTime != null && m.hasOwnProperty("lastFetchTime")) {
                if (typeof m.lastFetchTime === "number")
                    d.lastFetchTime = o.longs === String ? String(m.lastFetchTime) : m.lastFetchTime;
                else
                    d.lastFetchTime = o.longs === String ? $util.Long.prototype.toString.call(m.lastFetchTime) : o.longs === Number ? new $util.LongBits(m.lastFetchTime.low >>> 0, m.lastFetchTime.high >>> 0).toNumber() : m.lastFetchTime;
                if (o.oneofs)
                    d._lastFetchTime = "lastFetchTime";
            }
            if (m.capabilityOptions && m.capabilityOptions.length) {
                d.capabilityOptions = [];
                for (var j = 0; j < m.capabilityOptions.length; ++j) {
                    d.capabilityOptions[j] = $root.WAAICommon.AIHomeState.AIHomeOption.toObject(m.capabilityOptions[j], o);
                }
            }
            if (m.conversationOptions && m.conversationOptions.length) {
                d.conversationOptions = [];
                for (var j = 0; j < m.conversationOptions.length; ++j) {
                    d.conversationOptions[j] = $root.WAAICommon.AIHomeState.AIHomeOption.toObject(m.conversationOptions[j], o);
                }
            }
            return d;
        };

        AIHomeState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIHomeState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AIHomeState";
        };

        AIHomeState.AIHomeOption = (function() {

            function AIHomeOption(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIHomeOption.prototype.type = null;
            AIHomeOption.prototype.title = null;
            AIHomeOption.prototype.promptText = null;
            AIHomeOption.prototype.sessionID = null;
            AIHomeOption.prototype.imageWdsIdentifier = null;
            AIHomeOption.prototype.imageTintColor = null;
            AIHomeOption.prototype.imageBackgroundColor = null;
            AIHomeOption.prototype.cardTypeID = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_type", {
                get: $util.oneOfGetter($oneOfFields = ["type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_promptText", {
                get: $util.oneOfGetter($oneOfFields = ["promptText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_sessionID", {
                get: $util.oneOfGetter($oneOfFields = ["sessionID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_imageWdsIdentifier", {
                get: $util.oneOfGetter($oneOfFields = ["imageWdsIdentifier"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_imageTintColor", {
                get: $util.oneOfGetter($oneOfFields = ["imageTintColor"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_imageBackgroundColor", {
                get: $util.oneOfGetter($oneOfFields = ["imageBackgroundColor"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIHomeOption.prototype, "_cardTypeID", {
                get: $util.oneOfGetter($oneOfFields = ["cardTypeID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIHomeOption.create = function create(properties) {
                return new AIHomeOption(properties);
            };

            AIHomeOption.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(18).string(m.title);
                if (m.promptText != null && Object.hasOwnProperty.call(m, "promptText"))
                    w.uint32(26).string(m.promptText);
                if (m.sessionID != null && Object.hasOwnProperty.call(m, "sessionID"))
                    w.uint32(34).string(m.sessionID);
                if (m.imageWdsIdentifier != null && Object.hasOwnProperty.call(m, "imageWdsIdentifier"))
                    w.uint32(42).string(m.imageWdsIdentifier);
                if (m.imageTintColor != null && Object.hasOwnProperty.call(m, "imageTintColor"))
                    w.uint32(50).string(m.imageTintColor);
                if (m.imageBackgroundColor != null && Object.hasOwnProperty.call(m, "imageBackgroundColor"))
                    w.uint32(58).string(m.imageBackgroundColor);
                if (m.cardTypeID != null && Object.hasOwnProperty.call(m, "cardTypeID"))
                    w.uint32(66).string(m.cardTypeID);
                return w;
            };

            AIHomeOption.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIHomeState.AIHomeOption();
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
                            m.title = r.string();
                            break;
                        }
                    case 3: {
                            m.promptText = r.string();
                            break;
                        }
                    case 4: {
                            m.sessionID = r.string();
                            break;
                        }
                    case 5: {
                            m.imageWdsIdentifier = r.string();
                            break;
                        }
                    case 6: {
                            m.imageTintColor = r.string();
                            break;
                        }
                    case 7: {
                            m.imageBackgroundColor = r.string();
                            break;
                        }
                    case 8: {
                            m.cardTypeID = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIHomeOption.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.AIHomeState.AIHomeOption)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.AIHomeState.AIHomeOption();
                switch (d.type) {
                default:
                    if (typeof d.type === "number") {
                        m.type = d.type;
                        break;
                    }
                    break;
                case "PROMPT":
                case 0:
                    m.type = 0;
                    break;
                case "CREATE_IMAGE":
                case 1:
                    m.type = 1;
                    break;
                case "ANIMATE_PHOTO":
                case 2:
                    m.type = 2;
                    break;
                case "ANALYZE_FILE":
                case 3:
                    m.type = 3;
                    break;
                case "COLLABORATE":
                case 4:
                    m.type = 4;
                    break;
                case "OPEN_GREETING_CARD":
                case 5:
                    m.type = 5;
                    break;
                }
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.promptText != null) {
                    m.promptText = String(d.promptText);
                }
                if (d.sessionID != null) {
                    m.sessionID = String(d.sessionID);
                }
                if (d.imageWdsIdentifier != null) {
                    m.imageWdsIdentifier = String(d.imageWdsIdentifier);
                }
                if (d.imageTintColor != null) {
                    m.imageTintColor = String(d.imageTintColor);
                }
                if (d.imageBackgroundColor != null) {
                    m.imageBackgroundColor = String(d.imageBackgroundColor);
                }
                if (d.cardTypeID != null) {
                    m.cardTypeID = String(d.cardTypeID);
                }
                return m;
            };

            AIHomeOption.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.type != null && m.hasOwnProperty("type")) {
                    d.type = o.enums === String ? $root.WAAICommon.AIHomeState.AIHomeOption.AIHomeActionType[m.type] === undefined ? m.type : $root.WAAICommon.AIHomeState.AIHomeOption.AIHomeActionType[m.type] : m.type;
                    if (o.oneofs)
                        d._type = "type";
                }
                if (m.title != null && m.hasOwnProperty("title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.promptText != null && m.hasOwnProperty("promptText")) {
                    d.promptText = m.promptText;
                    if (o.oneofs)
                        d._promptText = "promptText";
                }
                if (m.sessionID != null && m.hasOwnProperty("sessionID")) {
                    d.sessionID = m.sessionID;
                    if (o.oneofs)
                        d._sessionID = "sessionID";
                }
                if (m.imageWdsIdentifier != null && m.hasOwnProperty("imageWdsIdentifier")) {
                    d.imageWdsIdentifier = m.imageWdsIdentifier;
                    if (o.oneofs)
                        d._imageWdsIdentifier = "imageWdsIdentifier";
                }
                if (m.imageTintColor != null && m.hasOwnProperty("imageTintColor")) {
                    d.imageTintColor = m.imageTintColor;
                    if (o.oneofs)
                        d._imageTintColor = "imageTintColor";
                }
                if (m.imageBackgroundColor != null && m.hasOwnProperty("imageBackgroundColor")) {
                    d.imageBackgroundColor = m.imageBackgroundColor;
                    if (o.oneofs)
                        d._imageBackgroundColor = "imageBackgroundColor";
                }
                if (m.cardTypeID != null && m.hasOwnProperty("cardTypeID")) {
                    d.cardTypeID = m.cardTypeID;
                    if (o.oneofs)
                        d._cardTypeID = "cardTypeID";
                }
                return d;
            };

            AIHomeOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIHomeOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.AIHomeState.AIHomeOption";
            };

            AIHomeOption.AIHomeActionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PROMPT"] = 0;
                values[valuesById[1] = "CREATE_IMAGE"] = 1;
                values[valuesById[2] = "ANIMATE_PHOTO"] = 2;
                values[valuesById[3] = "ANALYZE_FILE"] = 3;
                values[valuesById[4] = "COLLABORATE"] = 4;
                values[valuesById[5] = "OPEN_GREETING_CARD"] = 5;
                return values;
            })();

            return AIHomeOption;
        })();

        return AIHomeState;
    })();

    WAAICommon.BotInfrastructureDiagnostics = (function() {

        function BotInfrastructureDiagnostics(p) {
            this.toolsUsed = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotInfrastructureDiagnostics.prototype.botBackend = null;
        BotInfrastructureDiagnostics.prototype.toolsUsed = $util.emptyArray;
        BotInfrastructureDiagnostics.prototype.isThinking = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotInfrastructureDiagnostics.prototype, "_botBackend", {
            get: $util.oneOfGetter($oneOfFields = ["botBackend"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotInfrastructureDiagnostics.prototype, "_isThinking", {
            get: $util.oneOfGetter($oneOfFields = ["isThinking"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotInfrastructureDiagnostics.create = function create(properties) {
            return new BotInfrastructureDiagnostics(properties);
        };

        BotInfrastructureDiagnostics.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.botBackend != null && Object.hasOwnProperty.call(m, "botBackend"))
                w.uint32(8).int32(m.botBackend);
            if (m.toolsUsed != null && m.toolsUsed.length) {
                for (var i = 0; i < m.toolsUsed.length; ++i)
                    w.uint32(18).string(m.toolsUsed[i]);
            }
            if (m.isThinking != null && Object.hasOwnProperty.call(m, "isThinking"))
                w.uint32(24).bool(m.isThinking);
            return w;
        };

        BotInfrastructureDiagnostics.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotInfrastructureDiagnostics();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.botBackend = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.toolsUsed && m.toolsUsed.length))
                            m.toolsUsed = [];
                        m.toolsUsed.push(r.string());
                        break;
                    }
                case 3: {
                        m.isThinking = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotInfrastructureDiagnostics.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotInfrastructureDiagnostics)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotInfrastructureDiagnostics();
            switch (d.botBackend) {
            default:
                if (typeof d.botBackend === "number") {
                    m.botBackend = d.botBackend;
                    break;
                }
                break;
            case "AAPI":
            case 0:
                m.botBackend = 0;
                break;
            case "CLIPPY":
            case 1:
                m.botBackend = 1;
                break;
            }
            if (d.toolsUsed) {
                if (!Array.isArray(d.toolsUsed))
                    throw TypeError(".WAAICommon.BotInfrastructureDiagnostics.toolsUsed: array expected");
                m.toolsUsed = [];
                for (var i = 0; i < d.toolsUsed.length; ++i) {
                    m.toolsUsed[i] = String(d.toolsUsed[i]);
                }
            }
            if (d.isThinking != null) {
                m.isThinking = Boolean(d.isThinking);
            }
            return m;
        };

        BotInfrastructureDiagnostics.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.toolsUsed = [];
            }
            if (m.botBackend != null && m.hasOwnProperty("botBackend")) {
                d.botBackend = o.enums === String ? $root.WAAICommon.BotInfrastructureDiagnostics.BotBackend[m.botBackend] === undefined ? m.botBackend : $root.WAAICommon.BotInfrastructureDiagnostics.BotBackend[m.botBackend] : m.botBackend;
                if (o.oneofs)
                    d._botBackend = "botBackend";
            }
            if (m.toolsUsed && m.toolsUsed.length) {
                d.toolsUsed = [];
                for (var j = 0; j < m.toolsUsed.length; ++j) {
                    d.toolsUsed[j] = m.toolsUsed[j];
                }
            }
            if (m.isThinking != null && m.hasOwnProperty("isThinking")) {
                d.isThinking = m.isThinking;
                if (o.oneofs)
                    d._isThinking = "isThinking";
            }
            return d;
        };

        BotInfrastructureDiagnostics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotInfrastructureDiagnostics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotInfrastructureDiagnostics";
        };

        BotInfrastructureDiagnostics.BotBackend = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AAPI"] = 0;
            values[valuesById[1] = "CLIPPY"] = 1;
            return values;
        })();

        return BotInfrastructureDiagnostics;
    })();

    WAAICommon.BotSuggestedPromptMetadata = (function() {

        function BotSuggestedPromptMetadata(p) {
            this.suggestedPrompts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSuggestedPromptMetadata.prototype.suggestedPrompts = $util.emptyArray;
        BotSuggestedPromptMetadata.prototype.selectedPromptIndex = null;
        BotSuggestedPromptMetadata.prototype.promptSuggestions = null;
        BotSuggestedPromptMetadata.prototype.selectedPromptID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSuggestedPromptMetadata.prototype, "_selectedPromptIndex", {
            get: $util.oneOfGetter($oneOfFields = ["selectedPromptIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSuggestedPromptMetadata.prototype, "_promptSuggestions", {
            get: $util.oneOfGetter($oneOfFields = ["promptSuggestions"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSuggestedPromptMetadata.prototype, "_selectedPromptID", {
            get: $util.oneOfGetter($oneOfFields = ["selectedPromptID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotSuggestedPromptMetadata.create = function create(properties) {
            return new BotSuggestedPromptMetadata(properties);
        };

        BotSuggestedPromptMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.suggestedPrompts != null && m.suggestedPrompts.length) {
                for (var i = 0; i < m.suggestedPrompts.length; ++i)
                    w.uint32(10).string(m.suggestedPrompts[i]);
            }
            if (m.selectedPromptIndex != null && Object.hasOwnProperty.call(m, "selectedPromptIndex"))
                w.uint32(16).uint32(m.selectedPromptIndex);
            if (m.promptSuggestions != null && Object.hasOwnProperty.call(m, "promptSuggestions"))
                $root.WAAICommon.BotPromptSuggestions.encode(m.promptSuggestions, w.uint32(26).fork()).ldelim();
            if (m.selectedPromptID != null && Object.hasOwnProperty.call(m, "selectedPromptID"))
                w.uint32(34).string(m.selectedPromptID);
            return w;
        };

        BotSuggestedPromptMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotSuggestedPromptMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.suggestedPrompts && m.suggestedPrompts.length))
                            m.suggestedPrompts = [];
                        m.suggestedPrompts.push(r.string());
                        break;
                    }
                case 2: {
                        m.selectedPromptIndex = r.uint32();
                        break;
                    }
                case 3: {
                        m.promptSuggestions = $root.WAAICommon.BotPromptSuggestions.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.selectedPromptID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotSuggestedPromptMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotSuggestedPromptMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotSuggestedPromptMetadata();
            if (d.suggestedPrompts) {
                if (!Array.isArray(d.suggestedPrompts))
                    throw TypeError(".WAAICommon.BotSuggestedPromptMetadata.suggestedPrompts: array expected");
                m.suggestedPrompts = [];
                for (var i = 0; i < d.suggestedPrompts.length; ++i) {
                    m.suggestedPrompts[i] = String(d.suggestedPrompts[i]);
                }
            }
            if (d.selectedPromptIndex != null) {
                m.selectedPromptIndex = d.selectedPromptIndex >>> 0;
            }
            if (d.promptSuggestions != null) {
                if (typeof d.promptSuggestions !== "object")
                    throw TypeError(".WAAICommon.BotSuggestedPromptMetadata.promptSuggestions: object expected");
                m.promptSuggestions = $root.WAAICommon.BotPromptSuggestions.fromObject(d.promptSuggestions, n + 1);
            }
            if (d.selectedPromptID != null) {
                m.selectedPromptID = String(d.selectedPromptID);
            }
            return m;
        };

        BotSuggestedPromptMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.suggestedPrompts = [];
            }
            if (m.suggestedPrompts && m.suggestedPrompts.length) {
                d.suggestedPrompts = [];
                for (var j = 0; j < m.suggestedPrompts.length; ++j) {
                    d.suggestedPrompts[j] = m.suggestedPrompts[j];
                }
            }
            if (m.selectedPromptIndex != null && m.hasOwnProperty("selectedPromptIndex")) {
                d.selectedPromptIndex = m.selectedPromptIndex;
                if (o.oneofs)
                    d._selectedPromptIndex = "selectedPromptIndex";
            }
            if (m.promptSuggestions != null && m.hasOwnProperty("promptSuggestions")) {
                d.promptSuggestions = $root.WAAICommon.BotPromptSuggestions.toObject(m.promptSuggestions, o);
                if (o.oneofs)
                    d._promptSuggestions = "promptSuggestions";
            }
            if (m.selectedPromptID != null && m.hasOwnProperty("selectedPromptID")) {
                d.selectedPromptID = m.selectedPromptID;
                if (o.oneofs)
                    d._selectedPromptID = "selectedPromptID";
            }
            return d;
        };

        BotSuggestedPromptMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSuggestedPromptMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotSuggestedPromptMetadata";
        };

        return BotSuggestedPromptMetadata;
    })();

    WAAICommon.BotPromptSuggestions = (function() {

        function BotPromptSuggestions(p) {
            this.suggestions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPromptSuggestions.prototype.suggestions = $util.emptyArray;

        BotPromptSuggestions.create = function create(properties) {
            return new BotPromptSuggestions(properties);
        };

        BotPromptSuggestions.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.suggestions != null && m.suggestions.length) {
                for (var i = 0; i < m.suggestions.length; ++i)
                    $root.WAAICommon.BotPromptSuggestion.encode(m.suggestions[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotPromptSuggestions.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotPromptSuggestions();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.suggestions && m.suggestions.length))
                            m.suggestions = [];
                        m.suggestions.push($root.WAAICommon.BotPromptSuggestion.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotPromptSuggestions.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotPromptSuggestions)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotPromptSuggestions();
            if (d.suggestions) {
                if (!Array.isArray(d.suggestions))
                    throw TypeError(".WAAICommon.BotPromptSuggestions.suggestions: array expected");
                m.suggestions = [];
                for (var i = 0; i < d.suggestions.length; ++i) {
                    if (typeof d.suggestions[i] !== "object")
                        throw TypeError(".WAAICommon.BotPromptSuggestions.suggestions: object expected");
                    m.suggestions[i] = $root.WAAICommon.BotPromptSuggestion.fromObject(d.suggestions[i], n + 1);
                }
            }
            return m;
        };

        BotPromptSuggestions.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.suggestions = [];
            }
            if (m.suggestions && m.suggestions.length) {
                d.suggestions = [];
                for (var j = 0; j < m.suggestions.length; ++j) {
                    d.suggestions[j] = $root.WAAICommon.BotPromptSuggestion.toObject(m.suggestions[j], o);
                }
            }
            return d;
        };

        BotPromptSuggestions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPromptSuggestions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotPromptSuggestions";
        };

        return BotPromptSuggestions;
    })();

    WAAICommon.BotPromptSuggestion = (function() {

        function BotPromptSuggestion(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPromptSuggestion.prototype.prompt = null;
        BotPromptSuggestion.prototype.promptID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPromptSuggestion.prototype, "_prompt", {
            get: $util.oneOfGetter($oneOfFields = ["prompt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotPromptSuggestion.prototype, "_promptID", {
            get: $util.oneOfGetter($oneOfFields = ["promptID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotPromptSuggestion.create = function create(properties) {
            return new BotPromptSuggestion(properties);
        };

        BotPromptSuggestion.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.prompt != null && Object.hasOwnProperty.call(m, "prompt"))
                w.uint32(10).string(m.prompt);
            if (m.promptID != null && Object.hasOwnProperty.call(m, "promptID"))
                w.uint32(18).string(m.promptID);
            return w;
        };

        BotPromptSuggestion.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotPromptSuggestion();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.prompt = r.string();
                        break;
                    }
                case 2: {
                        m.promptID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotPromptSuggestion.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotPromptSuggestion)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotPromptSuggestion();
            if (d.prompt != null) {
                m.prompt = String(d.prompt);
            }
            if (d.promptID != null) {
                m.promptID = String(d.promptID);
            }
            return m;
        };

        BotPromptSuggestion.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.prompt != null && m.hasOwnProperty("prompt")) {
                d.prompt = m.prompt;
                if (o.oneofs)
                    d._prompt = "prompt";
            }
            if (m.promptID != null && m.hasOwnProperty("promptID")) {
                d.promptID = m.promptID;
                if (o.oneofs)
                    d._promptID = "promptID";
            }
            return d;
        };

        BotPromptSuggestion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPromptSuggestion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotPromptSuggestion";
        };

        return BotPromptSuggestion;
    })();

    WAAICommon.BotLinkedAccountsMetadata = (function() {

        function BotLinkedAccountsMetadata(p) {
            this.accounts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotLinkedAccountsMetadata.prototype.accounts = $util.emptyArray;
        BotLinkedAccountsMetadata.prototype.acAuthTokens = null;
        BotLinkedAccountsMetadata.prototype.acErrorCode = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotLinkedAccountsMetadata.prototype, "_acAuthTokens", {
            get: $util.oneOfGetter($oneOfFields = ["acAuthTokens"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotLinkedAccountsMetadata.prototype, "_acErrorCode", {
            get: $util.oneOfGetter($oneOfFields = ["acErrorCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotLinkedAccountsMetadata.create = function create(properties) {
            return new BotLinkedAccountsMetadata(properties);
        };

        BotLinkedAccountsMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.accounts != null && m.accounts.length) {
                for (var i = 0; i < m.accounts.length; ++i)
                    $root.WAAICommon.BotLinkedAccount.encode(m.accounts[i], w.uint32(10).fork()).ldelim();
            }
            if (m.acAuthTokens != null && Object.hasOwnProperty.call(m, "acAuthTokens"))
                w.uint32(18).bytes(m.acAuthTokens);
            if (m.acErrorCode != null && Object.hasOwnProperty.call(m, "acErrorCode"))
                w.uint32(24).int32(m.acErrorCode);
            return w;
        };

        BotLinkedAccountsMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotLinkedAccountsMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.accounts && m.accounts.length))
                            m.accounts = [];
                        m.accounts.push($root.WAAICommon.BotLinkedAccount.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 2: {
                        m.acAuthTokens = r.bytes();
                        break;
                    }
                case 3: {
                        m.acErrorCode = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotLinkedAccountsMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotLinkedAccountsMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotLinkedAccountsMetadata();
            if (d.accounts) {
                if (!Array.isArray(d.accounts))
                    throw TypeError(".WAAICommon.BotLinkedAccountsMetadata.accounts: array expected");
                m.accounts = [];
                for (var i = 0; i < d.accounts.length; ++i) {
                    if (typeof d.accounts[i] !== "object")
                        throw TypeError(".WAAICommon.BotLinkedAccountsMetadata.accounts: object expected");
                    m.accounts[i] = $root.WAAICommon.BotLinkedAccount.fromObject(d.accounts[i], n + 1);
                }
            }
            if (d.acAuthTokens != null) {
                if (typeof d.acAuthTokens === "string")
                    $util.base64.decode(d.acAuthTokens, m.acAuthTokens = $util.newBuffer($util.base64.length(d.acAuthTokens)), 0);
                else if (d.acAuthTokens.length >= 0)
                    m.acAuthTokens = d.acAuthTokens;
            }
            if (d.acErrorCode != null) {
                m.acErrorCode = d.acErrorCode | 0;
            }
            return m;
        };

        BotLinkedAccountsMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.accounts = [];
            }
            if (m.accounts && m.accounts.length) {
                d.accounts = [];
                for (var j = 0; j < m.accounts.length; ++j) {
                    d.accounts[j] = $root.WAAICommon.BotLinkedAccount.toObject(m.accounts[j], o);
                }
            }
            if (m.acAuthTokens != null && m.hasOwnProperty("acAuthTokens")) {
                d.acAuthTokens = o.bytes === String ? $util.base64.encode(m.acAuthTokens, 0, m.acAuthTokens.length) : o.bytes === Array ? Array.prototype.slice.call(m.acAuthTokens) : m.acAuthTokens;
                if (o.oneofs)
                    d._acAuthTokens = "acAuthTokens";
            }
            if (m.acErrorCode != null && m.hasOwnProperty("acErrorCode")) {
                d.acErrorCode = m.acErrorCode;
                if (o.oneofs)
                    d._acErrorCode = "acErrorCode";
            }
            return d;
        };

        BotLinkedAccountsMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotLinkedAccountsMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotLinkedAccountsMetadata";
        };

        return BotLinkedAccountsMetadata;
    })();

    WAAICommon.BotMemoryMetadata = (function() {

        function BotMemoryMetadata(p) {
            this.addedFacts = [];
            this.removedFacts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMemoryMetadata.prototype.addedFacts = $util.emptyArray;
        BotMemoryMetadata.prototype.removedFacts = $util.emptyArray;
        BotMemoryMetadata.prototype.disclaimer = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMemoryMetadata.prototype, "_disclaimer", {
            get: $util.oneOfGetter($oneOfFields = ["disclaimer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMemoryMetadata.create = function create(properties) {
            return new BotMemoryMetadata(properties);
        };

        BotMemoryMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.addedFacts != null && m.addedFacts.length) {
                for (var i = 0; i < m.addedFacts.length; ++i)
                    $root.WAAICommon.BotMemoryFact.encode(m.addedFacts[i], w.uint32(10).fork()).ldelim();
            }
            if (m.removedFacts != null && m.removedFacts.length) {
                for (var i = 0; i < m.removedFacts.length; ++i)
                    $root.WAAICommon.BotMemoryFact.encode(m.removedFacts[i], w.uint32(18).fork()).ldelim();
            }
            if (m.disclaimer != null && Object.hasOwnProperty.call(m, "disclaimer"))
                w.uint32(26).string(m.disclaimer);
            return w;
        };

        BotMemoryMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMemoryMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.addedFacts && m.addedFacts.length))
                            m.addedFacts = [];
                        m.addedFacts.push($root.WAAICommon.BotMemoryFact.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 2: {
                        if (!(m.removedFacts && m.removedFacts.length))
                            m.removedFacts = [];
                        m.removedFacts.push($root.WAAICommon.BotMemoryFact.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        m.disclaimer = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMemoryMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMemoryMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMemoryMetadata();
            if (d.addedFacts) {
                if (!Array.isArray(d.addedFacts))
                    throw TypeError(".WAAICommon.BotMemoryMetadata.addedFacts: array expected");
                m.addedFacts = [];
                for (var i = 0; i < d.addedFacts.length; ++i) {
                    if (typeof d.addedFacts[i] !== "object")
                        throw TypeError(".WAAICommon.BotMemoryMetadata.addedFacts: object expected");
                    m.addedFacts[i] = $root.WAAICommon.BotMemoryFact.fromObject(d.addedFacts[i], n + 1);
                }
            }
            if (d.removedFacts) {
                if (!Array.isArray(d.removedFacts))
                    throw TypeError(".WAAICommon.BotMemoryMetadata.removedFacts: array expected");
                m.removedFacts = [];
                for (var i = 0; i < d.removedFacts.length; ++i) {
                    if (typeof d.removedFacts[i] !== "object")
                        throw TypeError(".WAAICommon.BotMemoryMetadata.removedFacts: object expected");
                    m.removedFacts[i] = $root.WAAICommon.BotMemoryFact.fromObject(d.removedFacts[i], n + 1);
                }
            }
            if (d.disclaimer != null) {
                m.disclaimer = String(d.disclaimer);
            }
            return m;
        };

        BotMemoryMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.addedFacts = [];
                d.removedFacts = [];
            }
            if (m.addedFacts && m.addedFacts.length) {
                d.addedFacts = [];
                for (var j = 0; j < m.addedFacts.length; ++j) {
                    d.addedFacts[j] = $root.WAAICommon.BotMemoryFact.toObject(m.addedFacts[j], o);
                }
            }
            if (m.removedFacts && m.removedFacts.length) {
                d.removedFacts = [];
                for (var j = 0; j < m.removedFacts.length; ++j) {
                    d.removedFacts[j] = $root.WAAICommon.BotMemoryFact.toObject(m.removedFacts[j], o);
                }
            }
            if (m.disclaimer != null && m.hasOwnProperty("disclaimer")) {
                d.disclaimer = m.disclaimer;
                if (o.oneofs)
                    d._disclaimer = "disclaimer";
            }
            return d;
        };

        BotMemoryMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMemoryMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMemoryMetadata";
        };

        return BotMemoryMetadata;
    })();

    WAAICommon.BotMemoryFact = (function() {

        function BotMemoryFact(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMemoryFact.prototype.fact = null;
        BotMemoryFact.prototype.factID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMemoryFact.prototype, "_fact", {
            get: $util.oneOfGetter($oneOfFields = ["fact"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMemoryFact.prototype, "_factID", {
            get: $util.oneOfGetter($oneOfFields = ["factID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMemoryFact.create = function create(properties) {
            return new BotMemoryFact(properties);
        };

        BotMemoryFact.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.fact != null && Object.hasOwnProperty.call(m, "fact"))
                w.uint32(10).string(m.fact);
            if (m.factID != null && Object.hasOwnProperty.call(m, "factID"))
                w.uint32(18).string(m.factID);
            return w;
        };

        BotMemoryFact.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMemoryFact();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.fact = r.string();
                        break;
                    }
                case 2: {
                        m.factID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMemoryFact.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMemoryFact)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMemoryFact();
            if (d.fact != null) {
                m.fact = String(d.fact);
            }
            if (d.factID != null) {
                m.factID = String(d.factID);
            }
            return m;
        };

        BotMemoryFact.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.fact != null && m.hasOwnProperty("fact")) {
                d.fact = m.fact;
                if (o.oneofs)
                    d._fact = "fact";
            }
            if (m.factID != null && m.hasOwnProperty("factID")) {
                d.factID = m.factID;
                if (o.oneofs)
                    d._factID = "factID";
            }
            return d;
        };

        BotMemoryFact.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMemoryFact.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMemoryFact";
        };

        return BotMemoryFact;
    })();

    WAAICommon.BotSignatureVerificationMetadata = (function() {

        function BotSignatureVerificationMetadata(p) {
            this.proofs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSignatureVerificationMetadata.prototype.proofs = $util.emptyArray;

        BotSignatureVerificationMetadata.create = function create(properties) {
            return new BotSignatureVerificationMetadata(properties);
        };

        BotSignatureVerificationMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.proofs != null && m.proofs.length) {
                for (var i = 0; i < m.proofs.length; ++i)
                    $root.WAAICommon.BotSignatureVerificationUseCaseProof.encode(m.proofs[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotSignatureVerificationMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotSignatureVerificationMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.proofs && m.proofs.length))
                            m.proofs = [];
                        m.proofs.push($root.WAAICommon.BotSignatureVerificationUseCaseProof.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotSignatureVerificationMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotSignatureVerificationMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotSignatureVerificationMetadata();
            if (d.proofs) {
                if (!Array.isArray(d.proofs))
                    throw TypeError(".WAAICommon.BotSignatureVerificationMetadata.proofs: array expected");
                m.proofs = [];
                for (var i = 0; i < d.proofs.length; ++i) {
                    if (typeof d.proofs[i] !== "object")
                        throw TypeError(".WAAICommon.BotSignatureVerificationMetadata.proofs: object expected");
                    m.proofs[i] = $root.WAAICommon.BotSignatureVerificationUseCaseProof.fromObject(d.proofs[i], n + 1);
                }
            }
            return m;
        };

        BotSignatureVerificationMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.proofs = [];
            }
            if (m.proofs && m.proofs.length) {
                d.proofs = [];
                for (var j = 0; j < m.proofs.length; ++j) {
                    d.proofs[j] = $root.WAAICommon.BotSignatureVerificationUseCaseProof.toObject(m.proofs[j], o);
                }
            }
            return d;
        };

        BotSignatureVerificationMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSignatureVerificationMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotSignatureVerificationMetadata";
        };

        return BotSignatureVerificationMetadata;
    })();

    WAAICommon.BotRenderingMetadata = (function() {

        function BotRenderingMetadata(p) {
            this.keywords = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotRenderingMetadata.prototype.keywords = $util.emptyArray;

        BotRenderingMetadata.create = function create(properties) {
            return new BotRenderingMetadata(properties);
        };

        BotRenderingMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.keywords != null && m.keywords.length) {
                for (var i = 0; i < m.keywords.length; ++i)
                    $root.WAAICommon.BotRenderingMetadata.Keyword.encode(m.keywords[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotRenderingMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotRenderingMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.keywords && m.keywords.length))
                            m.keywords = [];
                        m.keywords.push($root.WAAICommon.BotRenderingMetadata.Keyword.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotRenderingMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotRenderingMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotRenderingMetadata();
            if (d.keywords) {
                if (!Array.isArray(d.keywords))
                    throw TypeError(".WAAICommon.BotRenderingMetadata.keywords: array expected");
                m.keywords = [];
                for (var i = 0; i < d.keywords.length; ++i) {
                    if (typeof d.keywords[i] !== "object")
                        throw TypeError(".WAAICommon.BotRenderingMetadata.keywords: object expected");
                    m.keywords[i] = $root.WAAICommon.BotRenderingMetadata.Keyword.fromObject(d.keywords[i], n + 1);
                }
            }
            return m;
        };

        BotRenderingMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.keywords = [];
            }
            if (m.keywords && m.keywords.length) {
                d.keywords = [];
                for (var j = 0; j < m.keywords.length; ++j) {
                    d.keywords[j] = $root.WAAICommon.BotRenderingMetadata.Keyword.toObject(m.keywords[j], o);
                }
            }
            return d;
        };

        BotRenderingMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotRenderingMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotRenderingMetadata";
        };

        BotRenderingMetadata.Keyword = (function() {

            function Keyword(p) {
                this.associatedPrompts = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Keyword.prototype.value = null;
            Keyword.prototype.associatedPrompts = $util.emptyArray;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Keyword.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Keyword.create = function create(properties) {
                return new Keyword(properties);
            };

            Keyword.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(10).string(m.value);
                if (m.associatedPrompts != null && m.associatedPrompts.length) {
                    for (var i = 0; i < m.associatedPrompts.length; ++i)
                        w.uint32(18).string(m.associatedPrompts[i]);
                }
                return w;
            };

            Keyword.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotRenderingMetadata.Keyword();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.value = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.associatedPrompts && m.associatedPrompts.length))
                                m.associatedPrompts = [];
                            m.associatedPrompts.push(r.string());
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            Keyword.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotRenderingMetadata.Keyword)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotRenderingMetadata.Keyword();
                if (d.value != null) {
                    m.value = String(d.value);
                }
                if (d.associatedPrompts) {
                    if (!Array.isArray(d.associatedPrompts))
                        throw TypeError(".WAAICommon.BotRenderingMetadata.Keyword.associatedPrompts: array expected");
                    m.associatedPrompts = [];
                    for (var i = 0; i < d.associatedPrompts.length; ++i) {
                        m.associatedPrompts[i] = String(d.associatedPrompts[i]);
                    }
                }
                return m;
            };

            Keyword.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.associatedPrompts = [];
                }
                if (m.value != null && m.hasOwnProperty("value")) {
                    d.value = m.value;
                    if (o.oneofs)
                        d._value = "value";
                }
                if (m.associatedPrompts && m.associatedPrompts.length) {
                    d.associatedPrompts = [];
                    for (var j = 0; j < m.associatedPrompts.length; ++j) {
                        d.associatedPrompts[j] = m.associatedPrompts[j];
                    }
                }
                return d;
            };

            Keyword.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Keyword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotRenderingMetadata.Keyword";
            };

            return Keyword;
        })();

        return BotRenderingMetadata;
    })();

    WAAICommon.BotMetricsMetadata = (function() {

        function BotMetricsMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMetricsMetadata.prototype.destinationID = null;
        BotMetricsMetadata.prototype.destinationEntryPoint = null;
        BotMetricsMetadata.prototype.threadOrigin = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetricsMetadata.prototype, "_destinationID", {
            get: $util.oneOfGetter($oneOfFields = ["destinationID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetricsMetadata.prototype, "_destinationEntryPoint", {
            get: $util.oneOfGetter($oneOfFields = ["destinationEntryPoint"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetricsMetadata.prototype, "_threadOrigin", {
            get: $util.oneOfGetter($oneOfFields = ["threadOrigin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMetricsMetadata.create = function create(properties) {
            return new BotMetricsMetadata(properties);
        };

        BotMetricsMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.destinationID != null && Object.hasOwnProperty.call(m, "destinationID"))
                w.uint32(10).string(m.destinationID);
            if (m.destinationEntryPoint != null && Object.hasOwnProperty.call(m, "destinationEntryPoint"))
                w.uint32(16).int32(m.destinationEntryPoint);
            if (m.threadOrigin != null && Object.hasOwnProperty.call(m, "threadOrigin"))
                w.uint32(24).int32(m.threadOrigin);
            return w;
        };

        BotMetricsMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMetricsMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.destinationID = r.string();
                        break;
                    }
                case 2: {
                        m.destinationEntryPoint = r.int32();
                        break;
                    }
                case 3: {
                        m.threadOrigin = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMetricsMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMetricsMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMetricsMetadata();
            if (d.destinationID != null) {
                m.destinationID = String(d.destinationID);
            }
            switch (d.destinationEntryPoint) {
            default:
                if (typeof d.destinationEntryPoint === "number") {
                    m.destinationEntryPoint = d.destinationEntryPoint;
                    break;
                }
                break;
            case "UNDEFINED_ENTRY_POINT":
            case 0:
                m.destinationEntryPoint = 0;
                break;
            case "FAVICON":
            case 1:
                m.destinationEntryPoint = 1;
                break;
            case "CHATLIST":
            case 2:
                m.destinationEntryPoint = 2;
                break;
            case "AISEARCH_NULL_STATE_PAPER_PLANE":
            case 3:
                m.destinationEntryPoint = 3;
                break;
            case "AISEARCH_NULL_STATE_SUGGESTION":
            case 4:
                m.destinationEntryPoint = 4;
                break;
            case "AISEARCH_TYPE_AHEAD_SUGGESTION":
            case 5:
                m.destinationEntryPoint = 5;
                break;
            case "AISEARCH_TYPE_AHEAD_PAPER_PLANE":
            case 6:
                m.destinationEntryPoint = 6;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST":
            case 7:
                m.destinationEntryPoint = 7;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES":
            case 8:
                m.destinationEntryPoint = 8;
                break;
            case "AIVOICE_SEARCH_BAR":
            case 9:
                m.destinationEntryPoint = 9;
                break;
            case "AIVOICE_FAVICON":
            case 10:
                m.destinationEntryPoint = 10;
                break;
            case "AISTUDIO":
            case 11:
                m.destinationEntryPoint = 11;
                break;
            case "DEEPLINK":
            case 12:
                m.destinationEntryPoint = 12;
                break;
            case "NOTIFICATION":
            case 13:
                m.destinationEntryPoint = 13;
                break;
            case "PROFILE_MESSAGE_BUTTON":
            case 14:
                m.destinationEntryPoint = 14;
                break;
            case "FORWARD":
            case 15:
                m.destinationEntryPoint = 15;
                break;
            case "APP_SHORTCUT":
            case 16:
                m.destinationEntryPoint = 16;
                break;
            case "FF_FAMILY":
            case 17:
                m.destinationEntryPoint = 17;
                break;
            case "AI_TAB":
            case 18:
                m.destinationEntryPoint = 18;
                break;
            case "AI_HOME":
            case 19:
                m.destinationEntryPoint = 19;
                break;
            case "AI_DEEPLINK_IMMERSIVE":
            case 20:
                m.destinationEntryPoint = 20;
                break;
            case "AI_DEEPLINK":
            case 21:
                m.destinationEntryPoint = 21;
                break;
            case "META_AI_CHAT_SHORTCUT_AI_STUDIO":
            case 22:
                m.destinationEntryPoint = 22;
                break;
            case "UGC_CHAT_SHORTCUT_AI_STUDIO":
            case 23:
                m.destinationEntryPoint = 23;
                break;
            case "NEW_CHAT_AI_STUDIO":
            case 24:
                m.destinationEntryPoint = 24;
                break;
            case "AIVOICE_FAVICON_CALL_HISTORY":
            case 25:
                m.destinationEntryPoint = 25;
                break;
            case "ASK_META_AI_CONTEXT_MENU":
            case 26:
                m.destinationEntryPoint = 26;
                break;
            case "ASK_META_AI_CONTEXT_MENU_1ON1":
            case 27:
                m.destinationEntryPoint = 27;
                break;
            case "ASK_META_AI_CONTEXT_MENU_GROUP":
            case 28:
                m.destinationEntryPoint = 28;
                break;
            case "INVOKE_META_AI_1ON1":
            case 29:
                m.destinationEntryPoint = 29;
                break;
            case "INVOKE_META_AI_GROUP":
            case 30:
                m.destinationEntryPoint = 30;
                break;
            case "META_AI_FORWARD":
            case 31:
                m.destinationEntryPoint = 31;
                break;
            case "NEW_CHAT_AI_CONTACT":
            case 32:
                m.destinationEntryPoint = 32;
                break;
            case "MESSAGE_QUICK_ACTION_1_ON_1_CHAT":
            case 33:
                m.destinationEntryPoint = 33;
                break;
            case "MESSAGE_QUICK_ACTION_GROUP_CHAT":
            case 34:
                m.destinationEntryPoint = 34;
                break;
            case "ATTACHMENT_TRAY_1_ON_1_CHAT":
            case 35:
                m.destinationEntryPoint = 35;
                break;
            case "ATTACHMENT_TRAY_GROUP_CHAT":
            case 36:
                m.destinationEntryPoint = 36;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_1ON1":
            case 37:
                m.destinationEntryPoint = 37;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_GROUP":
            case 38:
                m.destinationEntryPoint = 38;
                break;
            case "MEDIA_PICKER_1_ON_1_CHAT":
            case 39:
                m.destinationEntryPoint = 39;
                break;
            case "MEDIA_PICKER_GROUP_CHAT":
            case 40:
                m.destinationEntryPoint = 40;
                break;
            case "ASK_META_AI_NO_SEARCH_RESULTS":
            case 41:
                m.destinationEntryPoint = 41;
                break;
            case "META_AI_SETTINGS":
            case 45:
                m.destinationEntryPoint = 45;
                break;
            case "WEB_INTRO_PANEL":
            case 46:
                m.destinationEntryPoint = 46;
                break;
            case "WEB_NAVIGATION_BAR":
            case 47:
                m.destinationEntryPoint = 47;
                break;
            case "GROUP_MEMBER":
            case 54:
                m.destinationEntryPoint = 54;
                break;
            case "CHATLIST_SEARCH":
            case 55:
                m.destinationEntryPoint = 55;
                break;
            case "NEW_CHAT_LIST":
            case 56:
                m.destinationEntryPoint = 56;
                break;
            }
            switch (d.threadOrigin) {
            default:
                if (typeof d.threadOrigin === "number") {
                    m.threadOrigin = d.threadOrigin;
                    break;
                }
                break;
            case "AI_TAB_THREAD":
            case 1:
                m.threadOrigin = 1;
                break;
            case "AI_HOME_THREAD":
            case 2:
                m.threadOrigin = 2;
                break;
            case "AI_DEEPLINK_IMMERSIVE_THREAD":
            case 3:
                m.threadOrigin = 3;
                break;
            case "AI_DEEPLINK_THREAD":
            case 4:
                m.threadOrigin = 4;
                break;
            case "ASK_META_AI_CONTEXT_MENU_THREAD":
            case 5:
                m.threadOrigin = 5;
                break;
            }
            return m;
        };

        BotMetricsMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.destinationID != null && m.hasOwnProperty("destinationID")) {
                d.destinationID = m.destinationID;
                if (o.oneofs)
                    d._destinationID = "destinationID";
            }
            if (m.destinationEntryPoint != null && m.hasOwnProperty("destinationEntryPoint")) {
                d.destinationEntryPoint = o.enums === String ? $root.WAAICommon.BotMetricsEntryPoint[m.destinationEntryPoint] === undefined ? m.destinationEntryPoint : $root.WAAICommon.BotMetricsEntryPoint[m.destinationEntryPoint] : m.destinationEntryPoint;
                if (o.oneofs)
                    d._destinationEntryPoint = "destinationEntryPoint";
            }
            if (m.threadOrigin != null && m.hasOwnProperty("threadOrigin")) {
                d.threadOrigin = o.enums === String ? $root.WAAICommon.BotMetricsThreadEntryPoint[m.threadOrigin] === undefined ? m.threadOrigin : $root.WAAICommon.BotMetricsThreadEntryPoint[m.threadOrigin] : m.threadOrigin;
                if (o.oneofs)
                    d._threadOrigin = "threadOrigin";
            }
            return d;
        };

        BotMetricsMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMetricsMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMetricsMetadata";
        };

        return BotMetricsMetadata;
    })();

    WAAICommon.BotSessionMetadata = (function() {

        function BotSessionMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSessionMetadata.prototype.sessionID = null;
        BotSessionMetadata.prototype.sessionSource = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSessionMetadata.prototype, "_sessionID", {
            get: $util.oneOfGetter($oneOfFields = ["sessionID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotSessionMetadata.prototype, "_sessionSource", {
            get: $util.oneOfGetter($oneOfFields = ["sessionSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotSessionMetadata.create = function create(properties) {
            return new BotSessionMetadata(properties);
        };

        BotSessionMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sessionID != null && Object.hasOwnProperty.call(m, "sessionID"))
                w.uint32(10).string(m.sessionID);
            if (m.sessionSource != null && Object.hasOwnProperty.call(m, "sessionSource"))
                w.uint32(16).int32(m.sessionSource);
            return w;
        };

        BotSessionMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotSessionMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.sessionID = r.string();
                        break;
                    }
                case 2: {
                        m.sessionSource = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotSessionMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotSessionMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotSessionMetadata();
            if (d.sessionID != null) {
                m.sessionID = String(d.sessionID);
            }
            switch (d.sessionSource) {
            default:
                if (typeof d.sessionSource === "number") {
                    m.sessionSource = d.sessionSource;
                    break;
                }
                break;
            case "NONE":
            case 0:
                m.sessionSource = 0;
                break;
            case "NULL_STATE":
            case 1:
                m.sessionSource = 1;
                break;
            case "TYPEAHEAD":
            case 2:
                m.sessionSource = 2;
                break;
            case "USER_INPUT":
            case 3:
                m.sessionSource = 3;
                break;
            case "EMU_FLASH":
            case 4:
                m.sessionSource = 4;
                break;
            case "EMU_FLASH_FOLLOWUP":
            case 5:
                m.sessionSource = 5;
                break;
            case "VOICE":
            case 6:
                m.sessionSource = 6;
                break;
            case "AI_HOME_SESSION":
            case 7:
                m.sessionSource = 7;
                break;
            }
            return m;
        };

        BotSessionMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.sessionID != null && m.hasOwnProperty("sessionID")) {
                d.sessionID = m.sessionID;
                if (o.oneofs)
                    d._sessionID = "sessionID";
            }
            if (m.sessionSource != null && m.hasOwnProperty("sessionSource")) {
                d.sessionSource = o.enums === String ? $root.WAAICommon.BotSessionSource[m.sessionSource] === undefined ? m.sessionSource : $root.WAAICommon.BotSessionSource[m.sessionSource] : m.sessionSource;
                if (o.oneofs)
                    d._sessionSource = "sessionSource";
            }
            return d;
        };

        BotSessionMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSessionMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotSessionMetadata";
        };

        return BotSessionMetadata;
    })();

    WAAICommon.BotMemuMetadata = (function() {

        function BotMemuMetadata(p) {
            this.faceImages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMemuMetadata.prototype.faceImages = $util.emptyArray;

        BotMemuMetadata.create = function create(properties) {
            return new BotMemuMetadata(properties);
        };

        BotMemuMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.faceImages != null && m.faceImages.length) {
                for (var i = 0; i < m.faceImages.length; ++i)
                    $root.WAAICommon.BotMediaMetadata.encode(m.faceImages[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotMemuMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMemuMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.faceImages && m.faceImages.length))
                            m.faceImages = [];
                        m.faceImages.push($root.WAAICommon.BotMediaMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMemuMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMemuMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMemuMetadata();
            if (d.faceImages) {
                if (!Array.isArray(d.faceImages))
                    throw TypeError(".WAAICommon.BotMemuMetadata.faceImages: array expected");
                m.faceImages = [];
                for (var i = 0; i < d.faceImages.length; ++i) {
                    if (typeof d.faceImages[i] !== "object")
                        throw TypeError(".WAAICommon.BotMemuMetadata.faceImages: object expected");
                    m.faceImages[i] = $root.WAAICommon.BotMediaMetadata.fromObject(d.faceImages[i], n + 1);
                }
            }
            return m;
        };

        BotMemuMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.faceImages = [];
            }
            if (m.faceImages && m.faceImages.length) {
                d.faceImages = [];
                for (var j = 0; j < m.faceImages.length; ++j) {
                    d.faceImages[j] = $root.WAAICommon.BotMediaMetadata.toObject(m.faceImages[j], o);
                }
            }
            return d;
        };

        BotMemuMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMemuMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMemuMetadata";
        };

        return BotMemuMetadata;
    })();

    WAAICommon.InThreadSurveyMetadata = (function() {

        function InThreadSurveyMetadata(p) {
            this.questions = [];
            this.privacyStatementParts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        InThreadSurveyMetadata.prototype.tessaSessionID = null;
        InThreadSurveyMetadata.prototype.simonSessionID = null;
        InThreadSurveyMetadata.prototype.simonSurveyID = null;
        InThreadSurveyMetadata.prototype.tessaRootID = null;
        InThreadSurveyMetadata.prototype.requestID = null;
        InThreadSurveyMetadata.prototype.tessaEvent = null;
        InThreadSurveyMetadata.prototype.invitationHeaderText = null;
        InThreadSurveyMetadata.prototype.invitationBodyText = null;
        InThreadSurveyMetadata.prototype.invitationCtaText = null;
        InThreadSurveyMetadata.prototype.invitationCtaURL = null;
        InThreadSurveyMetadata.prototype.surveyTitle = null;
        InThreadSurveyMetadata.prototype.questions = $util.emptyArray;
        InThreadSurveyMetadata.prototype.surveyContinueButtonText = null;
        InThreadSurveyMetadata.prototype.surveySubmitButtonText = null;
        InThreadSurveyMetadata.prototype.privacyStatementFull = null;
        InThreadSurveyMetadata.prototype.privacyStatementParts = $util.emptyArray;
        InThreadSurveyMetadata.prototype.feedbackToastText = null;
        InThreadSurveyMetadata.prototype.startQuestionIndex = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_tessaSessionID", {
            get: $util.oneOfGetter($oneOfFields = ["tessaSessionID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_simonSessionID", {
            get: $util.oneOfGetter($oneOfFields = ["simonSessionID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_simonSurveyID", {
            get: $util.oneOfGetter($oneOfFields = ["simonSurveyID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_tessaRootID", {
            get: $util.oneOfGetter($oneOfFields = ["tessaRootID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_requestID", {
            get: $util.oneOfGetter($oneOfFields = ["requestID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_tessaEvent", {
            get: $util.oneOfGetter($oneOfFields = ["tessaEvent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationHeaderText", {
            get: $util.oneOfGetter($oneOfFields = ["invitationHeaderText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationBodyText", {
            get: $util.oneOfGetter($oneOfFields = ["invitationBodyText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationCtaText", {
            get: $util.oneOfGetter($oneOfFields = ["invitationCtaText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_invitationCtaURL", {
            get: $util.oneOfGetter($oneOfFields = ["invitationCtaURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_surveyTitle", {
            get: $util.oneOfGetter($oneOfFields = ["surveyTitle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_surveyContinueButtonText", {
            get: $util.oneOfGetter($oneOfFields = ["surveyContinueButtonText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_surveySubmitButtonText", {
            get: $util.oneOfGetter($oneOfFields = ["surveySubmitButtonText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_privacyStatementFull", {
            get: $util.oneOfGetter($oneOfFields = ["privacyStatementFull"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_feedbackToastText", {
            get: $util.oneOfGetter($oneOfFields = ["feedbackToastText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(InThreadSurveyMetadata.prototype, "_startQuestionIndex", {
            get: $util.oneOfGetter($oneOfFields = ["startQuestionIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        InThreadSurveyMetadata.create = function create(properties) {
            return new InThreadSurveyMetadata(properties);
        };

        InThreadSurveyMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.tessaSessionID != null && Object.hasOwnProperty.call(m, "tessaSessionID"))
                w.uint32(10).string(m.tessaSessionID);
            if (m.simonSessionID != null && Object.hasOwnProperty.call(m, "simonSessionID"))
                w.uint32(18).string(m.simonSessionID);
            if (m.simonSurveyID != null && Object.hasOwnProperty.call(m, "simonSurveyID"))
                w.uint32(26).string(m.simonSurveyID);
            if (m.tessaRootID != null && Object.hasOwnProperty.call(m, "tessaRootID"))
                w.uint32(34).string(m.tessaRootID);
            if (m.requestID != null && Object.hasOwnProperty.call(m, "requestID"))
                w.uint32(42).string(m.requestID);
            if (m.tessaEvent != null && Object.hasOwnProperty.call(m, "tessaEvent"))
                w.uint32(50).string(m.tessaEvent);
            if (m.invitationHeaderText != null && Object.hasOwnProperty.call(m, "invitationHeaderText"))
                w.uint32(58).string(m.invitationHeaderText);
            if (m.invitationBodyText != null && Object.hasOwnProperty.call(m, "invitationBodyText"))
                w.uint32(66).string(m.invitationBodyText);
            if (m.invitationCtaText != null && Object.hasOwnProperty.call(m, "invitationCtaText"))
                w.uint32(74).string(m.invitationCtaText);
            if (m.invitationCtaURL != null && Object.hasOwnProperty.call(m, "invitationCtaURL"))
                w.uint32(82).string(m.invitationCtaURL);
            if (m.surveyTitle != null && Object.hasOwnProperty.call(m, "surveyTitle"))
                w.uint32(90).string(m.surveyTitle);
            if (m.questions != null && m.questions.length) {
                for (var i = 0; i < m.questions.length; ++i)
                    $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.encode(m.questions[i], w.uint32(98).fork()).ldelim();
            }
            if (m.surveyContinueButtonText != null && Object.hasOwnProperty.call(m, "surveyContinueButtonText"))
                w.uint32(106).string(m.surveyContinueButtonText);
            if (m.surveySubmitButtonText != null && Object.hasOwnProperty.call(m, "surveySubmitButtonText"))
                w.uint32(114).string(m.surveySubmitButtonText);
            if (m.privacyStatementFull != null && Object.hasOwnProperty.call(m, "privacyStatementFull"))
                w.uint32(122).string(m.privacyStatementFull);
            if (m.privacyStatementParts != null && m.privacyStatementParts.length) {
                for (var i = 0; i < m.privacyStatementParts.length; ++i)
                    $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.encode(m.privacyStatementParts[i], w.uint32(130).fork()).ldelim();
            }
            if (m.feedbackToastText != null && Object.hasOwnProperty.call(m, "feedbackToastText"))
                w.uint32(138).string(m.feedbackToastText);
            if (m.startQuestionIndex != null && Object.hasOwnProperty.call(m, "startQuestionIndex"))
                w.uint32(144).int32(m.startQuestionIndex);
            return w;
        };

        InThreadSurveyMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.InThreadSurveyMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.tessaSessionID = r.string();
                        break;
                    }
                case 2: {
                        m.simonSessionID = r.string();
                        break;
                    }
                case 3: {
                        m.simonSurveyID = r.string();
                        break;
                    }
                case 4: {
                        m.tessaRootID = r.string();
                        break;
                    }
                case 5: {
                        m.requestID = r.string();
                        break;
                    }
                case 6: {
                        m.tessaEvent = r.string();
                        break;
                    }
                case 7: {
                        m.invitationHeaderText = r.string();
                        break;
                    }
                case 8: {
                        m.invitationBodyText = r.string();
                        break;
                    }
                case 9: {
                        m.invitationCtaText = r.string();
                        break;
                    }
                case 10: {
                        m.invitationCtaURL = r.string();
                        break;
                    }
                case 11: {
                        m.surveyTitle = r.string();
                        break;
                    }
                case 12: {
                        if (!(m.questions && m.questions.length))
                            m.questions = [];
                        m.questions.push($root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 13: {
                        m.surveyContinueButtonText = r.string();
                        break;
                    }
                case 14: {
                        m.surveySubmitButtonText = r.string();
                        break;
                    }
                case 15: {
                        m.privacyStatementFull = r.string();
                        break;
                    }
                case 16: {
                        if (!(m.privacyStatementParts && m.privacyStatementParts.length))
                            m.privacyStatementParts = [];
                        m.privacyStatementParts.push($root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 17: {
                        m.feedbackToastText = r.string();
                        break;
                    }
                case 18: {
                        m.startQuestionIndex = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        InThreadSurveyMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.InThreadSurveyMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.InThreadSurveyMetadata();
            if (d.tessaSessionID != null) {
                m.tessaSessionID = String(d.tessaSessionID);
            }
            if (d.simonSessionID != null) {
                m.simonSessionID = String(d.simonSessionID);
            }
            if (d.simonSurveyID != null) {
                m.simonSurveyID = String(d.simonSurveyID);
            }
            if (d.tessaRootID != null) {
                m.tessaRootID = String(d.tessaRootID);
            }
            if (d.requestID != null) {
                m.requestID = String(d.requestID);
            }
            if (d.tessaEvent != null) {
                m.tessaEvent = String(d.tessaEvent);
            }
            if (d.invitationHeaderText != null) {
                m.invitationHeaderText = String(d.invitationHeaderText);
            }
            if (d.invitationBodyText != null) {
                m.invitationBodyText = String(d.invitationBodyText);
            }
            if (d.invitationCtaText != null) {
                m.invitationCtaText = String(d.invitationCtaText);
            }
            if (d.invitationCtaURL != null) {
                m.invitationCtaURL = String(d.invitationCtaURL);
            }
            if (d.surveyTitle != null) {
                m.surveyTitle = String(d.surveyTitle);
            }
            if (d.questions) {
                if (!Array.isArray(d.questions))
                    throw TypeError(".WAAICommon.InThreadSurveyMetadata.questions: array expected");
                m.questions = [];
                for (var i = 0; i < d.questions.length; ++i) {
                    if (typeof d.questions[i] !== "object")
                        throw TypeError(".WAAICommon.InThreadSurveyMetadata.questions: object expected");
                    m.questions[i] = $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.fromObject(d.questions[i], n + 1);
                }
            }
            if (d.surveyContinueButtonText != null) {
                m.surveyContinueButtonText = String(d.surveyContinueButtonText);
            }
            if (d.surveySubmitButtonText != null) {
                m.surveySubmitButtonText = String(d.surveySubmitButtonText);
            }
            if (d.privacyStatementFull != null) {
                m.privacyStatementFull = String(d.privacyStatementFull);
            }
            if (d.privacyStatementParts) {
                if (!Array.isArray(d.privacyStatementParts))
                    throw TypeError(".WAAICommon.InThreadSurveyMetadata.privacyStatementParts: array expected");
                m.privacyStatementParts = [];
                for (var i = 0; i < d.privacyStatementParts.length; ++i) {
                    if (typeof d.privacyStatementParts[i] !== "object")
                        throw TypeError(".WAAICommon.InThreadSurveyMetadata.privacyStatementParts: object expected");
                    m.privacyStatementParts[i] = $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.fromObject(d.privacyStatementParts[i], n + 1);
                }
            }
            if (d.feedbackToastText != null) {
                m.feedbackToastText = String(d.feedbackToastText);
            }
            if (d.startQuestionIndex != null) {
                m.startQuestionIndex = d.startQuestionIndex | 0;
            }
            return m;
        };

        InThreadSurveyMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.questions = [];
                d.privacyStatementParts = [];
            }
            if (m.tessaSessionID != null && m.hasOwnProperty("tessaSessionID")) {
                d.tessaSessionID = m.tessaSessionID;
                if (o.oneofs)
                    d._tessaSessionID = "tessaSessionID";
            }
            if (m.simonSessionID != null && m.hasOwnProperty("simonSessionID")) {
                d.simonSessionID = m.simonSessionID;
                if (o.oneofs)
                    d._simonSessionID = "simonSessionID";
            }
            if (m.simonSurveyID != null && m.hasOwnProperty("simonSurveyID")) {
                d.simonSurveyID = m.simonSurveyID;
                if (o.oneofs)
                    d._simonSurveyID = "simonSurveyID";
            }
            if (m.tessaRootID != null && m.hasOwnProperty("tessaRootID")) {
                d.tessaRootID = m.tessaRootID;
                if (o.oneofs)
                    d._tessaRootID = "tessaRootID";
            }
            if (m.requestID != null && m.hasOwnProperty("requestID")) {
                d.requestID = m.requestID;
                if (o.oneofs)
                    d._requestID = "requestID";
            }
            if (m.tessaEvent != null && m.hasOwnProperty("tessaEvent")) {
                d.tessaEvent = m.tessaEvent;
                if (o.oneofs)
                    d._tessaEvent = "tessaEvent";
            }
            if (m.invitationHeaderText != null && m.hasOwnProperty("invitationHeaderText")) {
                d.invitationHeaderText = m.invitationHeaderText;
                if (o.oneofs)
                    d._invitationHeaderText = "invitationHeaderText";
            }
            if (m.invitationBodyText != null && m.hasOwnProperty("invitationBodyText")) {
                d.invitationBodyText = m.invitationBodyText;
                if (o.oneofs)
                    d._invitationBodyText = "invitationBodyText";
            }
            if (m.invitationCtaText != null && m.hasOwnProperty("invitationCtaText")) {
                d.invitationCtaText = m.invitationCtaText;
                if (o.oneofs)
                    d._invitationCtaText = "invitationCtaText";
            }
            if (m.invitationCtaURL != null && m.hasOwnProperty("invitationCtaURL")) {
                d.invitationCtaURL = m.invitationCtaURL;
                if (o.oneofs)
                    d._invitationCtaURL = "invitationCtaURL";
            }
            if (m.surveyTitle != null && m.hasOwnProperty("surveyTitle")) {
                d.surveyTitle = m.surveyTitle;
                if (o.oneofs)
                    d._surveyTitle = "surveyTitle";
            }
            if (m.questions && m.questions.length) {
                d.questions = [];
                for (var j = 0; j < m.questions.length; ++j) {
                    d.questions[j] = $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.toObject(m.questions[j], o);
                }
            }
            if (m.surveyContinueButtonText != null && m.hasOwnProperty("surveyContinueButtonText")) {
                d.surveyContinueButtonText = m.surveyContinueButtonText;
                if (o.oneofs)
                    d._surveyContinueButtonText = "surveyContinueButtonText";
            }
            if (m.surveySubmitButtonText != null && m.hasOwnProperty("surveySubmitButtonText")) {
                d.surveySubmitButtonText = m.surveySubmitButtonText;
                if (o.oneofs)
                    d._surveySubmitButtonText = "surveySubmitButtonText";
            }
            if (m.privacyStatementFull != null && m.hasOwnProperty("privacyStatementFull")) {
                d.privacyStatementFull = m.privacyStatementFull;
                if (o.oneofs)
                    d._privacyStatementFull = "privacyStatementFull";
            }
            if (m.privacyStatementParts && m.privacyStatementParts.length) {
                d.privacyStatementParts = [];
                for (var j = 0; j < m.privacyStatementParts.length; ++j) {
                    d.privacyStatementParts[j] = $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.toObject(m.privacyStatementParts[j], o);
                }
            }
            if (m.feedbackToastText != null && m.hasOwnProperty("feedbackToastText")) {
                d.feedbackToastText = m.feedbackToastText;
                if (o.oneofs)
                    d._feedbackToastText = "feedbackToastText";
            }
            if (m.startQuestionIndex != null && m.hasOwnProperty("startQuestionIndex")) {
                d.startQuestionIndex = m.startQuestionIndex;
                if (o.oneofs)
                    d._startQuestionIndex = "startQuestionIndex";
            }
            return d;
        };

        InThreadSurveyMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        InThreadSurveyMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.InThreadSurveyMetadata";
        };

        InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart = (function() {

            function InThreadSurveyPrivacyStatementPart(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InThreadSurveyPrivacyStatementPart.prototype.text = null;
            InThreadSurveyPrivacyStatementPart.prototype.URL = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyPrivacyStatementPart.prototype, "_text", {
                get: $util.oneOfGetter($oneOfFields = ["text"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyPrivacyStatementPart.prototype, "_URL", {
                get: $util.oneOfGetter($oneOfFields = ["URL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            InThreadSurveyPrivacyStatementPart.create = function create(properties) {
                return new InThreadSurveyPrivacyStatementPart(properties);
            };

            InThreadSurveyPrivacyStatementPart.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                    w.uint32(10).string(m.text);
                if (m.URL != null && Object.hasOwnProperty.call(m, "URL"))
                    w.uint32(18).string(m.URL);
                return w;
            };

            InThreadSurveyPrivacyStatementPart.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.text = r.string();
                            break;
                        }
                    case 2: {
                            m.URL = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            InThreadSurveyPrivacyStatementPart.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart();
                if (d.text != null) {
                    m.text = String(d.text);
                }
                if (d.URL != null) {
                    m.URL = String(d.URL);
                }
                return m;
            };

            InThreadSurveyPrivacyStatementPart.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.text != null && m.hasOwnProperty("text")) {
                    d.text = m.text;
                    if (o.oneofs)
                        d._text = "text";
                }
                if (m.URL != null && m.hasOwnProperty("URL")) {
                    d.URL = m.URL;
                    if (o.oneofs)
                        d._URL = "URL";
                }
                return d;
            };

            InThreadSurveyPrivacyStatementPart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InThreadSurveyPrivacyStatementPart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart";
            };

            return InThreadSurveyPrivacyStatementPart;
        })();

        InThreadSurveyMetadata.InThreadSurveyOption = (function() {

            function InThreadSurveyOption(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InThreadSurveyOption.prototype.stringValue = null;
            InThreadSurveyOption.prototype.numericValue = null;
            InThreadSurveyOption.prototype.textTranslated = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyOption.prototype, "_stringValue", {
                get: $util.oneOfGetter($oneOfFields = ["stringValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyOption.prototype, "_numericValue", {
                get: $util.oneOfGetter($oneOfFields = ["numericValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyOption.prototype, "_textTranslated", {
                get: $util.oneOfGetter($oneOfFields = ["textTranslated"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            InThreadSurveyOption.create = function create(properties) {
                return new InThreadSurveyOption(properties);
            };

            InThreadSurveyOption.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.stringValue != null && Object.hasOwnProperty.call(m, "stringValue"))
                    w.uint32(10).string(m.stringValue);
                if (m.numericValue != null && Object.hasOwnProperty.call(m, "numericValue"))
                    w.uint32(16).uint32(m.numericValue);
                if (m.textTranslated != null && Object.hasOwnProperty.call(m, "textTranslated"))
                    w.uint32(26).string(m.textTranslated);
                return w;
            };

            InThreadSurveyOption.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.stringValue = r.string();
                            break;
                        }
                    case 2: {
                            m.numericValue = r.uint32();
                            break;
                        }
                    case 3: {
                            m.textTranslated = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            InThreadSurveyOption.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption();
                if (d.stringValue != null) {
                    m.stringValue = String(d.stringValue);
                }
                if (d.numericValue != null) {
                    m.numericValue = d.numericValue >>> 0;
                }
                if (d.textTranslated != null) {
                    m.textTranslated = String(d.textTranslated);
                }
                return m;
            };

            InThreadSurveyOption.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.stringValue != null && m.hasOwnProperty("stringValue")) {
                    d.stringValue = m.stringValue;
                    if (o.oneofs)
                        d._stringValue = "stringValue";
                }
                if (m.numericValue != null && m.hasOwnProperty("numericValue")) {
                    d.numericValue = m.numericValue;
                    if (o.oneofs)
                        d._numericValue = "numericValue";
                }
                if (m.textTranslated != null && m.hasOwnProperty("textTranslated")) {
                    d.textTranslated = m.textTranslated;
                    if (o.oneofs)
                        d._textTranslated = "textTranslated";
                }
                return d;
            };

            InThreadSurveyOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InThreadSurveyOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption";
            };

            return InThreadSurveyOption;
        })();

        InThreadSurveyMetadata.InThreadSurveyQuestion = (function() {

            function InThreadSurveyQuestion(p) {
                this.questionOptions = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InThreadSurveyQuestion.prototype.questionText = null;
            InThreadSurveyQuestion.prototype.questionID = null;
            InThreadSurveyQuestion.prototype.questionOptions = $util.emptyArray;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyQuestion.prototype, "_questionText", {
                get: $util.oneOfGetter($oneOfFields = ["questionText"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InThreadSurveyQuestion.prototype, "_questionID", {
                get: $util.oneOfGetter($oneOfFields = ["questionID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            InThreadSurveyQuestion.create = function create(properties) {
                return new InThreadSurveyQuestion(properties);
            };

            InThreadSurveyQuestion.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.questionText != null && Object.hasOwnProperty.call(m, "questionText"))
                    w.uint32(10).string(m.questionText);
                if (m.questionID != null && Object.hasOwnProperty.call(m, "questionID"))
                    w.uint32(18).string(m.questionID);
                if (m.questionOptions != null && m.questionOptions.length) {
                    for (var i = 0; i < m.questionOptions.length; ++i)
                        $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption.encode(m.questionOptions[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };

            InThreadSurveyQuestion.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.questionText = r.string();
                            break;
                        }
                    case 2: {
                            m.questionID = r.string();
                            break;
                        }
                    case 3: {
                            if (!(m.questionOptions && m.questionOptions.length))
                                m.questionOptions = [];
                            m.questionOptions.push($root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            InThreadSurveyQuestion.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion();
                if (d.questionText != null) {
                    m.questionText = String(d.questionText);
                }
                if (d.questionID != null) {
                    m.questionID = String(d.questionID);
                }
                if (d.questionOptions) {
                    if (!Array.isArray(d.questionOptions))
                        throw TypeError(".WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.questionOptions: array expected");
                    m.questionOptions = [];
                    for (var i = 0; i < d.questionOptions.length; ++i) {
                        if (typeof d.questionOptions[i] !== "object")
                            throw TypeError(".WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.questionOptions: object expected");
                        m.questionOptions[i] = $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption.fromObject(d.questionOptions[i], n + 1);
                    }
                }
                return m;
            };

            InThreadSurveyQuestion.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.questionOptions = [];
                }
                if (m.questionText != null && m.hasOwnProperty("questionText")) {
                    d.questionText = m.questionText;
                    if (o.oneofs)
                        d._questionText = "questionText";
                }
                if (m.questionID != null && m.hasOwnProperty("questionID")) {
                    d.questionID = m.questionID;
                    if (o.oneofs)
                        d._questionID = "questionID";
                }
                if (m.questionOptions && m.questionOptions.length) {
                    d.questionOptions = [];
                    for (var j = 0; j < m.questionOptions.length; ++j) {
                        d.questionOptions[j] = $root.WAAICommon.InThreadSurveyMetadata.InThreadSurveyOption.toObject(m.questionOptions[j], o);
                    }
                }
                return d;
            };

            InThreadSurveyQuestion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InThreadSurveyQuestion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.InThreadSurveyMetadata.InThreadSurveyQuestion";
            };

            return InThreadSurveyQuestion;
        })();

        return InThreadSurveyMetadata;
    })();

    WAAICommon.BotMessageOriginMetadata = (function() {

        function BotMessageOriginMetadata(p) {
            this.origins = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMessageOriginMetadata.prototype.origins = $util.emptyArray;

        BotMessageOriginMetadata.create = function create(properties) {
            return new BotMessageOriginMetadata(properties);
        };

        BotMessageOriginMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.origins != null && m.origins.length) {
                for (var i = 0; i < m.origins.length; ++i)
                    $root.WAAICommon.BotMessageOrigin.encode(m.origins[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotMessageOriginMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMessageOriginMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.origins && m.origins.length))
                            m.origins = [];
                        m.origins.push($root.WAAICommon.BotMessageOrigin.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMessageOriginMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMessageOriginMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMessageOriginMetadata();
            if (d.origins) {
                if (!Array.isArray(d.origins))
                    throw TypeError(".WAAICommon.BotMessageOriginMetadata.origins: array expected");
                m.origins = [];
                for (var i = 0; i < d.origins.length; ++i) {
                    if (typeof d.origins[i] !== "object")
                        throw TypeError(".WAAICommon.BotMessageOriginMetadata.origins: object expected");
                    m.origins[i] = $root.WAAICommon.BotMessageOrigin.fromObject(d.origins[i], n + 1);
                }
            }
            return m;
        };

        BotMessageOriginMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.origins = [];
            }
            if (m.origins && m.origins.length) {
                d.origins = [];
                for (var j = 0; j < m.origins.length; ++j) {
                    d.origins[j] = $root.WAAICommon.BotMessageOrigin.toObject(m.origins[j], o);
                }
            }
            return d;
        };

        BotMessageOriginMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMessageOriginMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMessageOriginMetadata";
        };

        return BotMessageOriginMetadata;
    })();

    WAAICommon.BotUnifiedResponseMutation = (function() {

        function BotUnifiedResponseMutation(p) {
            this.mediaDetailsMetadataList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotUnifiedResponseMutation.prototype.sbsMetadata = null;
        BotUnifiedResponseMutation.prototype.mediaDetailsMetadataList = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotUnifiedResponseMutation.prototype, "_sbsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["sbsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotUnifiedResponseMutation.create = function create(properties) {
            return new BotUnifiedResponseMutation(properties);
        };

        BotUnifiedResponseMutation.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sbsMetadata != null && Object.hasOwnProperty.call(m, "sbsMetadata"))
                $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata.encode(m.sbsMetadata, w.uint32(10).fork()).ldelim();
            if (m.mediaDetailsMetadataList != null && m.mediaDetailsMetadataList.length) {
                for (var i = 0; i < m.mediaDetailsMetadataList.length; ++i)
                    $root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.encode(m.mediaDetailsMetadataList[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        BotUnifiedResponseMutation.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotUnifiedResponseMutation();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.sbsMetadata = $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        if (!(m.mediaDetailsMetadataList && m.mediaDetailsMetadataList.length))
                            m.mediaDetailsMetadataList = [];
                        m.mediaDetailsMetadataList.push($root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotUnifiedResponseMutation.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotUnifiedResponseMutation)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotUnifiedResponseMutation();
            if (d.sbsMetadata != null) {
                if (typeof d.sbsMetadata !== "object")
                    throw TypeError(".WAAICommon.BotUnifiedResponseMutation.sbsMetadata: object expected");
                m.sbsMetadata = $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata.fromObject(d.sbsMetadata, n + 1);
            }
            if (d.mediaDetailsMetadataList) {
                if (!Array.isArray(d.mediaDetailsMetadataList))
                    throw TypeError(".WAAICommon.BotUnifiedResponseMutation.mediaDetailsMetadataList: array expected");
                m.mediaDetailsMetadataList = [];
                for (var i = 0; i < d.mediaDetailsMetadataList.length; ++i) {
                    if (typeof d.mediaDetailsMetadataList[i] !== "object")
                        throw TypeError(".WAAICommon.BotUnifiedResponseMutation.mediaDetailsMetadataList: object expected");
                    m.mediaDetailsMetadataList[i] = $root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.fromObject(d.mediaDetailsMetadataList[i], n + 1);
                }
            }
            return m;
        };

        BotUnifiedResponseMutation.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.mediaDetailsMetadataList = [];
            }
            if (m.sbsMetadata != null && m.hasOwnProperty("sbsMetadata")) {
                d.sbsMetadata = $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata.toObject(m.sbsMetadata, o);
                if (o.oneofs)
                    d._sbsMetadata = "sbsMetadata";
            }
            if (m.mediaDetailsMetadataList && m.mediaDetailsMetadataList.length) {
                d.mediaDetailsMetadataList = [];
                for (var j = 0; j < m.mediaDetailsMetadataList.length; ++j) {
                    d.mediaDetailsMetadataList[j] = $root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.toObject(m.mediaDetailsMetadataList[j], o);
                }
            }
            return d;
        };

        BotUnifiedResponseMutation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotUnifiedResponseMutation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotUnifiedResponseMutation";
        };

        BotUnifiedResponseMutation.MediaDetailsMetadata = (function() {

            function MediaDetailsMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MediaDetailsMetadata.prototype.ID = null;
            MediaDetailsMetadata.prototype.highResMedia = null;
            MediaDetailsMetadata.prototype.previewMedia = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(MediaDetailsMetadata.prototype, "_ID", {
                get: $util.oneOfGetter($oneOfFields = ["ID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(MediaDetailsMetadata.prototype, "_highResMedia", {
                get: $util.oneOfGetter($oneOfFields = ["highResMedia"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(MediaDetailsMetadata.prototype, "_previewMedia", {
                get: $util.oneOfGetter($oneOfFields = ["previewMedia"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            MediaDetailsMetadata.create = function create(properties) {
                return new MediaDetailsMetadata(properties);
            };

            MediaDetailsMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                    w.uint32(10).string(m.ID);
                if (m.highResMedia != null && Object.hasOwnProperty.call(m, "highResMedia"))
                    $root.WAAICommon.BotMediaMetadata.encode(m.highResMedia, w.uint32(18).fork()).ldelim();
                if (m.previewMedia != null && Object.hasOwnProperty.call(m, "previewMedia"))
                    $root.WAAICommon.BotMediaMetadata.encode(m.previewMedia, w.uint32(26).fork()).ldelim();
                return w;
            };

            MediaDetailsMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata();
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
                            m.highResMedia = $root.WAAICommon.BotMediaMetadata.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 3: {
                            m.previewMedia = $root.WAAICommon.BotMediaMetadata.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            MediaDetailsMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata();
                if (d.ID != null) {
                    m.ID = String(d.ID);
                }
                if (d.highResMedia != null) {
                    if (typeof d.highResMedia !== "object")
                        throw TypeError(".WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.highResMedia: object expected");
                    m.highResMedia = $root.WAAICommon.BotMediaMetadata.fromObject(d.highResMedia, n + 1);
                }
                if (d.previewMedia != null) {
                    if (typeof d.previewMedia !== "object")
                        throw TypeError(".WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.previewMedia: object expected");
                    m.previewMedia = $root.WAAICommon.BotMediaMetadata.fromObject(d.previewMedia, n + 1);
                }
                return m;
            };

            MediaDetailsMetadata.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.ID != null && m.hasOwnProperty("ID")) {
                    d.ID = m.ID;
                    if (o.oneofs)
                        d._ID = "ID";
                }
                if (m.highResMedia != null && m.hasOwnProperty("highResMedia")) {
                    d.highResMedia = $root.WAAICommon.BotMediaMetadata.toObject(m.highResMedia, o);
                    if (o.oneofs)
                        d._highResMedia = "highResMedia";
                }
                if (m.previewMedia != null && m.hasOwnProperty("previewMedia")) {
                    d.previewMedia = $root.WAAICommon.BotMediaMetadata.toObject(m.previewMedia, o);
                    if (o.oneofs)
                        d._previewMedia = "previewMedia";
                }
                return d;
            };

            MediaDetailsMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            MediaDetailsMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotUnifiedResponseMutation.MediaDetailsMetadata";
            };

            return MediaDetailsMetadata;
        })();

        BotUnifiedResponseMutation.SideBySideMetadata = (function() {

            function SideBySideMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SideBySideMetadata.prototype.primaryResponseID = null;
            SideBySideMetadata.prototype.surveyCtaHasRendered = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideMetadata.prototype, "_primaryResponseID", {
                get: $util.oneOfGetter($oneOfFields = ["primaryResponseID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SideBySideMetadata.prototype, "_surveyCtaHasRendered", {
                get: $util.oneOfGetter($oneOfFields = ["surveyCtaHasRendered"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            SideBySideMetadata.create = function create(properties) {
                return new SideBySideMetadata(properties);
            };

            SideBySideMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.primaryResponseID != null && Object.hasOwnProperty.call(m, "primaryResponseID"))
                    w.uint32(10).string(m.primaryResponseID);
                if (m.surveyCtaHasRendered != null && Object.hasOwnProperty.call(m, "surveyCtaHasRendered"))
                    w.uint32(16).bool(m.surveyCtaHasRendered);
                return w;
            };

            SideBySideMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.primaryResponseID = r.string();
                            break;
                        }
                    case 2: {
                            m.surveyCtaHasRendered = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            SideBySideMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata();
                if (d.primaryResponseID != null) {
                    m.primaryResponseID = String(d.primaryResponseID);
                }
                if (d.surveyCtaHasRendered != null) {
                    m.surveyCtaHasRendered = Boolean(d.surveyCtaHasRendered);
                }
                return m;
            };

            SideBySideMetadata.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.primaryResponseID != null && m.hasOwnProperty("primaryResponseID")) {
                    d.primaryResponseID = m.primaryResponseID;
                    if (o.oneofs)
                        d._primaryResponseID = "primaryResponseID";
                }
                if (m.surveyCtaHasRendered != null && m.hasOwnProperty("surveyCtaHasRendered")) {
                    d.surveyCtaHasRendered = m.surveyCtaHasRendered;
                    if (o.oneofs)
                        d._surveyCtaHasRendered = "surveyCtaHasRendered";
                }
                return d;
            };

            SideBySideMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SideBySideMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommon.BotUnifiedResponseMutation.SideBySideMetadata";
            };

            return SideBySideMetadata;
        })();

        return BotUnifiedResponseMutation;
    })();

    WAAICommon.AIMediaCollectionMetadata = (function() {

        function AIMediaCollectionMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIMediaCollectionMetadata.prototype.collectionID = null;
        AIMediaCollectionMetadata.prototype.uploadOrderIndex = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIMediaCollectionMetadata.prototype, "_collectionID", {
            get: $util.oneOfGetter($oneOfFields = ["collectionID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIMediaCollectionMetadata.prototype, "_uploadOrderIndex", {
            get: $util.oneOfGetter($oneOfFields = ["uploadOrderIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIMediaCollectionMetadata.create = function create(properties) {
            return new AIMediaCollectionMetadata(properties);
        };

        AIMediaCollectionMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.collectionID != null && Object.hasOwnProperty.call(m, "collectionID"))
                w.uint32(10).string(m.collectionID);
            if (m.uploadOrderIndex != null && Object.hasOwnProperty.call(m, "uploadOrderIndex"))
                w.uint32(16).uint32(m.uploadOrderIndex);
            return w;
        };

        AIMediaCollectionMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIMediaCollectionMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.collectionID = r.string();
                        break;
                    }
                case 2: {
                        m.uploadOrderIndex = r.uint32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIMediaCollectionMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AIMediaCollectionMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AIMediaCollectionMetadata();
            if (d.collectionID != null) {
                m.collectionID = String(d.collectionID);
            }
            if (d.uploadOrderIndex != null) {
                m.uploadOrderIndex = d.uploadOrderIndex >>> 0;
            }
            return m;
        };

        AIMediaCollectionMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.collectionID != null && m.hasOwnProperty("collectionID")) {
                d.collectionID = m.collectionID;
                if (o.oneofs)
                    d._collectionID = "collectionID";
            }
            if (m.uploadOrderIndex != null && m.hasOwnProperty("uploadOrderIndex")) {
                d.uploadOrderIndex = m.uploadOrderIndex;
                if (o.oneofs)
                    d._uploadOrderIndex = "uploadOrderIndex";
            }
            return d;
        };

        AIMediaCollectionMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIMediaCollectionMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AIMediaCollectionMetadata";
        };

        return AIMediaCollectionMetadata;
    })();

    WAAICommon.AIMediaCollectionMessage = (function() {

        function AIMediaCollectionMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIMediaCollectionMessage.prototype.collectionID = null;
        AIMediaCollectionMessage.prototype.expectedMediaCount = null;
        AIMediaCollectionMessage.prototype.hasGlobalCaption = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIMediaCollectionMessage.prototype, "_collectionID", {
            get: $util.oneOfGetter($oneOfFields = ["collectionID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIMediaCollectionMessage.prototype, "_expectedMediaCount", {
            get: $util.oneOfGetter($oneOfFields = ["expectedMediaCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIMediaCollectionMessage.prototype, "_hasGlobalCaption", {
            get: $util.oneOfGetter($oneOfFields = ["hasGlobalCaption"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIMediaCollectionMessage.create = function create(properties) {
            return new AIMediaCollectionMessage(properties);
        };

        AIMediaCollectionMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.collectionID != null && Object.hasOwnProperty.call(m, "collectionID"))
                w.uint32(10).string(m.collectionID);
            if (m.expectedMediaCount != null && Object.hasOwnProperty.call(m, "expectedMediaCount"))
                w.uint32(16).uint32(m.expectedMediaCount);
            if (m.hasGlobalCaption != null && Object.hasOwnProperty.call(m, "hasGlobalCaption"))
                w.uint32(24).bool(m.hasGlobalCaption);
            return w;
        };

        AIMediaCollectionMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIMediaCollectionMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.collectionID = r.string();
                        break;
                    }
                case 2: {
                        m.expectedMediaCount = r.uint32();
                        break;
                    }
                case 3: {
                        m.hasGlobalCaption = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIMediaCollectionMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AIMediaCollectionMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AIMediaCollectionMessage();
            if (d.collectionID != null) {
                m.collectionID = String(d.collectionID);
            }
            if (d.expectedMediaCount != null) {
                m.expectedMediaCount = d.expectedMediaCount >>> 0;
            }
            if (d.hasGlobalCaption != null) {
                m.hasGlobalCaption = Boolean(d.hasGlobalCaption);
            }
            return m;
        };

        AIMediaCollectionMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.collectionID != null && m.hasOwnProperty("collectionID")) {
                d.collectionID = m.collectionID;
                if (o.oneofs)
                    d._collectionID = "collectionID";
            }
            if (m.expectedMediaCount != null && m.hasOwnProperty("expectedMediaCount")) {
                d.expectedMediaCount = m.expectedMediaCount;
                if (o.oneofs)
                    d._expectedMediaCount = "expectedMediaCount";
            }
            if (m.hasGlobalCaption != null && m.hasOwnProperty("hasGlobalCaption")) {
                d.hasGlobalCaption = m.hasGlobalCaption;
                if (o.oneofs)
                    d._hasGlobalCaption = "hasGlobalCaption";
            }
            return d;
        };

        AIMediaCollectionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIMediaCollectionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AIMediaCollectionMessage";
        };

        return AIMediaCollectionMessage;
    })();

    WAAICommon.BotCommandMetadata = (function() {

        function BotCommandMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotCommandMetadata.prototype.commandName = null;
        BotCommandMetadata.prototype.commandDescription = null;
        BotCommandMetadata.prototype.commandPrompt = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotCommandMetadata.prototype, "_commandName", {
            get: $util.oneOfGetter($oneOfFields = ["commandName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotCommandMetadata.prototype, "_commandDescription", {
            get: $util.oneOfGetter($oneOfFields = ["commandDescription"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotCommandMetadata.prototype, "_commandPrompt", {
            get: $util.oneOfGetter($oneOfFields = ["commandPrompt"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotCommandMetadata.create = function create(properties) {
            return new BotCommandMetadata(properties);
        };

        BotCommandMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.commandName != null && Object.hasOwnProperty.call(m, "commandName"))
                w.uint32(10).string(m.commandName);
            if (m.commandDescription != null && Object.hasOwnProperty.call(m, "commandDescription"))
                w.uint32(18).string(m.commandDescription);
            if (m.commandPrompt != null && Object.hasOwnProperty.call(m, "commandPrompt"))
                w.uint32(26).string(m.commandPrompt);
            return w;
        };

        BotCommandMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotCommandMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.commandName = r.string();
                        break;
                    }
                case 2: {
                        m.commandDescription = r.string();
                        break;
                    }
                case 3: {
                        m.commandPrompt = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotCommandMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotCommandMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotCommandMetadata();
            if (d.commandName != null) {
                m.commandName = String(d.commandName);
            }
            if (d.commandDescription != null) {
                m.commandDescription = String(d.commandDescription);
            }
            if (d.commandPrompt != null) {
                m.commandPrompt = String(d.commandPrompt);
            }
            return m;
        };

        BotCommandMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.commandName != null && m.hasOwnProperty("commandName")) {
                d.commandName = m.commandName;
                if (o.oneofs)
                    d._commandName = "commandName";
            }
            if (m.commandDescription != null && m.hasOwnProperty("commandDescription")) {
                d.commandDescription = m.commandDescription;
                if (o.oneofs)
                    d._commandDescription = "commandDescription";
            }
            if (m.commandPrompt != null && m.hasOwnProperty("commandPrompt")) {
                d.commandPrompt = m.commandPrompt;
                if (o.oneofs)
                    d._commandPrompt = "commandPrompt";
            }
            return d;
        };

        BotCommandMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotCommandMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotCommandMetadata";
        };

        return BotCommandMetadata;
    })();

    WAAICommon.BotResolvedToolCallMetadata = (function() {

        function BotResolvedToolCallMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotResolvedToolCallMetadata.prototype.toolCallID = null;
        BotResolvedToolCallMetadata.prototype.resolutionDataSerialized = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotResolvedToolCallMetadata.prototype, "_toolCallID", {
            get: $util.oneOfGetter($oneOfFields = ["toolCallID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotResolvedToolCallMetadata.prototype, "_resolutionDataSerialized", {
            get: $util.oneOfGetter($oneOfFields = ["resolutionDataSerialized"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotResolvedToolCallMetadata.create = function create(properties) {
            return new BotResolvedToolCallMetadata(properties);
        };

        BotResolvedToolCallMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.toolCallID != null && Object.hasOwnProperty.call(m, "toolCallID"))
                w.uint32(10).string(m.toolCallID);
            if (m.resolutionDataSerialized != null && Object.hasOwnProperty.call(m, "resolutionDataSerialized"))
                w.uint32(18).string(m.resolutionDataSerialized);
            return w;
        };

        BotResolvedToolCallMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotResolvedToolCallMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.toolCallID = r.string();
                        break;
                    }
                case 2: {
                        m.resolutionDataSerialized = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotResolvedToolCallMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotResolvedToolCallMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotResolvedToolCallMetadata();
            if (d.toolCallID != null) {
                m.toolCallID = String(d.toolCallID);
            }
            if (d.resolutionDataSerialized != null) {
                m.resolutionDataSerialized = String(d.resolutionDataSerialized);
            }
            return m;
        };

        BotResolvedToolCallMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.toolCallID != null && m.hasOwnProperty("toolCallID")) {
                d.toolCallID = m.toolCallID;
                if (o.oneofs)
                    d._toolCallID = "toolCallID";
            }
            if (m.resolutionDataSerialized != null && m.hasOwnProperty("resolutionDataSerialized")) {
                d.resolutionDataSerialized = m.resolutionDataSerialized;
                if (o.oneofs)
                    d._resolutionDataSerialized = "resolutionDataSerialized";
            }
            return d;
        };

        BotResolvedToolCallMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotResolvedToolCallMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotResolvedToolCallMetadata";
        };

        return BotResolvedToolCallMetadata;
    })();

    WAAICommon.BotMetadata = (function() {

        function BotMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMetadata.prototype.personaID = null;
        BotMetadata.prototype.pluginMetadata = null;
        BotMetadata.prototype.suggestedPromptMetadata = null;
        BotMetadata.prototype.invokerJID = null;
        BotMetadata.prototype.sessionMetadata = null;
        BotMetadata.prototype.memuMetadata = null;
        BotMetadata.prototype.timezone = null;
        BotMetadata.prototype.reminderMetadata = null;
        BotMetadata.prototype.modelMetadata = null;
        BotMetadata.prototype.messageDisclaimerText = null;
        BotMetadata.prototype.progressIndicatorMetadata = null;
        BotMetadata.prototype.capabilityMetadata = null;
        BotMetadata.prototype.imagineMetadata = null;
        BotMetadata.prototype.memoryMetadata = null;
        BotMetadata.prototype.renderingMetadata = null;
        BotMetadata.prototype.botMetricsMetadata = null;
        BotMetadata.prototype.botLinkedAccountsMetadata = null;
        BotMetadata.prototype.richResponseSourcesMetadata = null;
        BotMetadata.prototype.aiConversationContext = null;
        BotMetadata.prototype.botPromotionMessageMetadata = null;
        BotMetadata.prototype.botModeSelectionMetadata = null;
        BotMetadata.prototype.botQuotaMetadata = null;
        BotMetadata.prototype.botAgeCollectionMetadata = null;
        BotMetadata.prototype.conversationStarterPromptID = null;
        BotMetadata.prototype.botResponseID = null;
        BotMetadata.prototype.verificationMetadata = null;
        BotMetadata.prototype.unifiedResponseMutation = null;
        BotMetadata.prototype.botMessageOriginMetadata = null;
        BotMetadata.prototype.inThreadSurveyMetadata = null;
        BotMetadata.prototype.botThreadInfo = null;
        BotMetadata.prototype.regenerateMetadata = null;
        BotMetadata.prototype.sessionTransparencyMetadata = null;
        BotMetadata.prototype.botDocumentMessageMetadata = null;
        BotMetadata.prototype.botGroupMetadata = null;
        BotMetadata.prototype.botRenderingConfigMetadata = null;
        BotMetadata.prototype.botInfrastructureDiagnostics = null;
        BotMetadata.prototype.aiMediaCollectionMetadata = null;
        BotMetadata.prototype.commandMetadata = null;
        BotMetadata.prototype.resolvedToolCallMetadata = null;
        BotMetadata.prototype.subscriptionUpsellMetadata = null;
        BotMetadata.prototype.internalMetadata = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_personaID", {
            get: $util.oneOfGetter($oneOfFields = ["personaID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_pluginMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["pluginMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_suggestedPromptMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["suggestedPromptMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_invokerJID", {
            get: $util.oneOfGetter($oneOfFields = ["invokerJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_sessionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["sessionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_memuMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["memuMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_timezone", {
            get: $util.oneOfGetter($oneOfFields = ["timezone"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_reminderMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["reminderMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_modelMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["modelMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_messageDisclaimerText", {
            get: $util.oneOfGetter($oneOfFields = ["messageDisclaimerText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_progressIndicatorMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["progressIndicatorMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_capabilityMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["capabilityMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_imagineMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["imagineMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_memoryMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["memoryMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_renderingMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["renderingMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botMetricsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botMetricsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botLinkedAccountsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botLinkedAccountsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_richResponseSourcesMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["richResponseSourcesMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_aiConversationContext", {
            get: $util.oneOfGetter($oneOfFields = ["aiConversationContext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botPromotionMessageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botPromotionMessageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botModeSelectionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botModeSelectionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botQuotaMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botQuotaMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botAgeCollectionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botAgeCollectionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_conversationStarterPromptID", {
            get: $util.oneOfGetter($oneOfFields = ["conversationStarterPromptID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botResponseID", {
            get: $util.oneOfGetter($oneOfFields = ["botResponseID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_verificationMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["verificationMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_unifiedResponseMutation", {
            get: $util.oneOfGetter($oneOfFields = ["unifiedResponseMutation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botMessageOriginMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botMessageOriginMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_inThreadSurveyMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["inThreadSurveyMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botThreadInfo", {
            get: $util.oneOfGetter($oneOfFields = ["botThreadInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_regenerateMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["regenerateMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_sessionTransparencyMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["sessionTransparencyMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botDocumentMessageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botDocumentMessageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botGroupMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botGroupMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botRenderingConfigMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["botRenderingConfigMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_botInfrastructureDiagnostics", {
            get: $util.oneOfGetter($oneOfFields = ["botInfrastructureDiagnostics"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_aiMediaCollectionMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["aiMediaCollectionMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_commandMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["commandMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_resolvedToolCallMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["resolvedToolCallMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_subscriptionUpsellMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["subscriptionUpsellMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMetadata.prototype, "_internalMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["internalMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMetadata.create = function create(properties) {
            return new BotMetadata(properties);
        };

        BotMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.personaID != null && Object.hasOwnProperty.call(m, "personaID"))
                w.uint32(18).string(m.personaID);
            if (m.pluginMetadata != null && Object.hasOwnProperty.call(m, "pluginMetadata"))
                $root.WAAICommon.BotPluginMetadata.encode(m.pluginMetadata, w.uint32(26).fork()).ldelim();
            if (m.suggestedPromptMetadata != null && Object.hasOwnProperty.call(m, "suggestedPromptMetadata"))
                $root.WAAICommon.BotSuggestedPromptMetadata.encode(m.suggestedPromptMetadata, w.uint32(34).fork()).ldelim();
            if (m.invokerJID != null && Object.hasOwnProperty.call(m, "invokerJID"))
                w.uint32(42).string(m.invokerJID);
            if (m.sessionMetadata != null && Object.hasOwnProperty.call(m, "sessionMetadata"))
                $root.WAAICommon.BotSessionMetadata.encode(m.sessionMetadata, w.uint32(50).fork()).ldelim();
            if (m.memuMetadata != null && Object.hasOwnProperty.call(m, "memuMetadata"))
                $root.WAAICommon.BotMemuMetadata.encode(m.memuMetadata, w.uint32(58).fork()).ldelim();
            if (m.timezone != null && Object.hasOwnProperty.call(m, "timezone"))
                w.uint32(66).string(m.timezone);
            if (m.reminderMetadata != null && Object.hasOwnProperty.call(m, "reminderMetadata"))
                $root.WAAICommon.BotReminderMetadata.encode(m.reminderMetadata, w.uint32(74).fork()).ldelim();
            if (m.modelMetadata != null && Object.hasOwnProperty.call(m, "modelMetadata"))
                $root.WAAICommon.BotModelMetadata.encode(m.modelMetadata, w.uint32(82).fork()).ldelim();
            if (m.messageDisclaimerText != null && Object.hasOwnProperty.call(m, "messageDisclaimerText"))
                w.uint32(90).string(m.messageDisclaimerText);
            if (m.progressIndicatorMetadata != null && Object.hasOwnProperty.call(m, "progressIndicatorMetadata"))
                $root.WAAICommon.BotProgressIndicatorMetadata.encode(m.progressIndicatorMetadata, w.uint32(98).fork()).ldelim();
            if (m.capabilityMetadata != null && Object.hasOwnProperty.call(m, "capabilityMetadata"))
                $root.WAAICommon.BotCapabilityMetadata.encode(m.capabilityMetadata, w.uint32(106).fork()).ldelim();
            if (m.imagineMetadata != null && Object.hasOwnProperty.call(m, "imagineMetadata"))
                $root.WAAICommon.BotImagineMetadata.encode(m.imagineMetadata, w.uint32(114).fork()).ldelim();
            if (m.memoryMetadata != null && Object.hasOwnProperty.call(m, "memoryMetadata"))
                $root.WAAICommon.BotMemoryMetadata.encode(m.memoryMetadata, w.uint32(122).fork()).ldelim();
            if (m.renderingMetadata != null && Object.hasOwnProperty.call(m, "renderingMetadata"))
                $root.WAAICommon.BotRenderingMetadata.encode(m.renderingMetadata, w.uint32(130).fork()).ldelim();
            if (m.botMetricsMetadata != null && Object.hasOwnProperty.call(m, "botMetricsMetadata"))
                $root.WAAICommon.BotMetricsMetadata.encode(m.botMetricsMetadata, w.uint32(138).fork()).ldelim();
            if (m.botLinkedAccountsMetadata != null && Object.hasOwnProperty.call(m, "botLinkedAccountsMetadata"))
                $root.WAAICommon.BotLinkedAccountsMetadata.encode(m.botLinkedAccountsMetadata, w.uint32(146).fork()).ldelim();
            if (m.richResponseSourcesMetadata != null && Object.hasOwnProperty.call(m, "richResponseSourcesMetadata"))
                $root.WAAICommon.BotSourcesMetadata.encode(m.richResponseSourcesMetadata, w.uint32(154).fork()).ldelim();
            if (m.aiConversationContext != null && Object.hasOwnProperty.call(m, "aiConversationContext"))
                w.uint32(162).bytes(m.aiConversationContext);
            if (m.botPromotionMessageMetadata != null && Object.hasOwnProperty.call(m, "botPromotionMessageMetadata"))
                $root.WAAICommon.BotPromotionMessageMetadata.encode(m.botPromotionMessageMetadata, w.uint32(170).fork()).ldelim();
            if (m.botModeSelectionMetadata != null && Object.hasOwnProperty.call(m, "botModeSelectionMetadata"))
                $root.WAAICommon.BotModeSelectionMetadata.encode(m.botModeSelectionMetadata, w.uint32(178).fork()).ldelim();
            if (m.botQuotaMetadata != null && Object.hasOwnProperty.call(m, "botQuotaMetadata"))
                $root.WAAICommon.BotQuotaMetadata.encode(m.botQuotaMetadata, w.uint32(186).fork()).ldelim();
            if (m.botAgeCollectionMetadata != null && Object.hasOwnProperty.call(m, "botAgeCollectionMetadata"))
                $root.WAAICommon.BotAgeCollectionMetadata.encode(m.botAgeCollectionMetadata, w.uint32(194).fork()).ldelim();
            if (m.conversationStarterPromptID != null && Object.hasOwnProperty.call(m, "conversationStarterPromptID"))
                w.uint32(202).string(m.conversationStarterPromptID);
            if (m.botResponseID != null && Object.hasOwnProperty.call(m, "botResponseID"))
                w.uint32(210).string(m.botResponseID);
            if (m.verificationMetadata != null && Object.hasOwnProperty.call(m, "verificationMetadata"))
                $root.WAAICommon.BotSignatureVerificationMetadata.encode(m.verificationMetadata, w.uint32(218).fork()).ldelim();
            if (m.unifiedResponseMutation != null && Object.hasOwnProperty.call(m, "unifiedResponseMutation"))
                $root.WAAICommon.BotUnifiedResponseMutation.encode(m.unifiedResponseMutation, w.uint32(226).fork()).ldelim();
            if (m.botMessageOriginMetadata != null && Object.hasOwnProperty.call(m, "botMessageOriginMetadata"))
                $root.WAAICommon.BotMessageOriginMetadata.encode(m.botMessageOriginMetadata, w.uint32(234).fork()).ldelim();
            if (m.inThreadSurveyMetadata != null && Object.hasOwnProperty.call(m, "inThreadSurveyMetadata"))
                $root.WAAICommon.InThreadSurveyMetadata.encode(m.inThreadSurveyMetadata, w.uint32(242).fork()).ldelim();
            if (m.botThreadInfo != null && Object.hasOwnProperty.call(m, "botThreadInfo"))
                $root.WAAICommon.AIThreadInfo.encode(m.botThreadInfo, w.uint32(250).fork()).ldelim();
            if (m.regenerateMetadata != null && Object.hasOwnProperty.call(m, "regenerateMetadata"))
                $root.WAAICommon.AIRegenerateMetadata.encode(m.regenerateMetadata, w.uint32(258).fork()).ldelim();
            if (m.sessionTransparencyMetadata != null && Object.hasOwnProperty.call(m, "sessionTransparencyMetadata"))
                $root.WAAICommon.SessionTransparencyMetadata.encode(m.sessionTransparencyMetadata, w.uint32(266).fork()).ldelim();
            if (m.botDocumentMessageMetadata != null && Object.hasOwnProperty.call(m, "botDocumentMessageMetadata"))
                $root.WAAICommon.BotDocumentMessageMetadata.encode(m.botDocumentMessageMetadata, w.uint32(274).fork()).ldelim();
            if (m.botGroupMetadata != null && Object.hasOwnProperty.call(m, "botGroupMetadata"))
                $root.WAAICommon.BotGroupMetadata.encode(m.botGroupMetadata, w.uint32(282).fork()).ldelim();
            if (m.botRenderingConfigMetadata != null && Object.hasOwnProperty.call(m, "botRenderingConfigMetadata"))
                $root.WAAICommon.BotRenderingConfigMetadata.encode(m.botRenderingConfigMetadata, w.uint32(290).fork()).ldelim();
            if (m.botInfrastructureDiagnostics != null && Object.hasOwnProperty.call(m, "botInfrastructureDiagnostics"))
                $root.WAAICommon.BotInfrastructureDiagnostics.encode(m.botInfrastructureDiagnostics, w.uint32(298).fork()).ldelim();
            if (m.aiMediaCollectionMetadata != null && Object.hasOwnProperty.call(m, "aiMediaCollectionMetadata"))
                $root.WAAICommon.AIMediaCollectionMetadata.encode(m.aiMediaCollectionMetadata, w.uint32(306).fork()).ldelim();
            if (m.commandMetadata != null && Object.hasOwnProperty.call(m, "commandMetadata"))
                $root.WAAICommon.BotCommandMetadata.encode(m.commandMetadata, w.uint32(314).fork()).ldelim();
            if (m.resolvedToolCallMetadata != null && Object.hasOwnProperty.call(m, "resolvedToolCallMetadata"))
                $root.WAAICommon.BotResolvedToolCallMetadata.encode(m.resolvedToolCallMetadata, w.uint32(322).fork()).ldelim();
            if (m.subscriptionUpsellMetadata != null && Object.hasOwnProperty.call(m, "subscriptionUpsellMetadata"))
                $root.WAAICommon.AISubscriptionUpsellMetadata.encode(m.subscriptionUpsellMetadata, w.uint32(330).fork()).ldelim();
            if (m.internalMetadata != null && Object.hasOwnProperty.call(m, "internalMetadata"))
                w.uint32(7994).bytes(m.internalMetadata);
            return w;
        };

        BotMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 2: {
                        m.personaID = r.string();
                        break;
                    }
                case 3: {
                        m.pluginMetadata = $root.WAAICommon.BotPluginMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.suggestedPromptMetadata = $root.WAAICommon.BotSuggestedPromptMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 5: {
                        m.invokerJID = r.string();
                        break;
                    }
                case 6: {
                        m.sessionMetadata = $root.WAAICommon.BotSessionMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.memuMetadata = $root.WAAICommon.BotMemuMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.timezone = r.string();
                        break;
                    }
                case 9: {
                        m.reminderMetadata = $root.WAAICommon.BotReminderMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 10: {
                        m.modelMetadata = $root.WAAICommon.BotModelMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 11: {
                        m.messageDisclaimerText = r.string();
                        break;
                    }
                case 12: {
                        m.progressIndicatorMetadata = $root.WAAICommon.BotProgressIndicatorMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 13: {
                        m.capabilityMetadata = $root.WAAICommon.BotCapabilityMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 14: {
                        m.imagineMetadata = $root.WAAICommon.BotImagineMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 15: {
                        m.memoryMetadata = $root.WAAICommon.BotMemoryMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 16: {
                        m.renderingMetadata = $root.WAAICommon.BotRenderingMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 17: {
                        m.botMetricsMetadata = $root.WAAICommon.BotMetricsMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 18: {
                        m.botLinkedAccountsMetadata = $root.WAAICommon.BotLinkedAccountsMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 19: {
                        m.richResponseSourcesMetadata = $root.WAAICommon.BotSourcesMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 20: {
                        m.aiConversationContext = r.bytes();
                        break;
                    }
                case 21: {
                        m.botPromotionMessageMetadata = $root.WAAICommon.BotPromotionMessageMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 22: {
                        m.botModeSelectionMetadata = $root.WAAICommon.BotModeSelectionMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 23: {
                        m.botQuotaMetadata = $root.WAAICommon.BotQuotaMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 24: {
                        m.botAgeCollectionMetadata = $root.WAAICommon.BotAgeCollectionMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 25: {
                        m.conversationStarterPromptID = r.string();
                        break;
                    }
                case 26: {
                        m.botResponseID = r.string();
                        break;
                    }
                case 27: {
                        m.verificationMetadata = $root.WAAICommon.BotSignatureVerificationMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 28: {
                        m.unifiedResponseMutation = $root.WAAICommon.BotUnifiedResponseMutation.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 29: {
                        m.botMessageOriginMetadata = $root.WAAICommon.BotMessageOriginMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 30: {
                        m.inThreadSurveyMetadata = $root.WAAICommon.InThreadSurveyMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 31: {
                        m.botThreadInfo = $root.WAAICommon.AIThreadInfo.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 32: {
                        m.regenerateMetadata = $root.WAAICommon.AIRegenerateMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 33: {
                        m.sessionTransparencyMetadata = $root.WAAICommon.SessionTransparencyMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 34: {
                        m.botDocumentMessageMetadata = $root.WAAICommon.BotDocumentMessageMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 35: {
                        m.botGroupMetadata = $root.WAAICommon.BotGroupMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 36: {
                        m.botRenderingConfigMetadata = $root.WAAICommon.BotRenderingConfigMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 37: {
                        m.botInfrastructureDiagnostics = $root.WAAICommon.BotInfrastructureDiagnostics.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 38: {
                        m.aiMediaCollectionMetadata = $root.WAAICommon.AIMediaCollectionMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 39: {
                        m.commandMetadata = $root.WAAICommon.BotCommandMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 40: {
                        m.resolvedToolCallMetadata = $root.WAAICommon.BotResolvedToolCallMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 41: {
                        m.subscriptionUpsellMetadata = $root.WAAICommon.AISubscriptionUpsellMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 999: {
                        m.internalMetadata = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMetadata();
            if (d.personaID != null) {
                m.personaID = String(d.personaID);
            }
            if (d.pluginMetadata != null) {
                if (typeof d.pluginMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.pluginMetadata: object expected");
                m.pluginMetadata = $root.WAAICommon.BotPluginMetadata.fromObject(d.pluginMetadata, n + 1);
            }
            if (d.suggestedPromptMetadata != null) {
                if (typeof d.suggestedPromptMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.suggestedPromptMetadata: object expected");
                m.suggestedPromptMetadata = $root.WAAICommon.BotSuggestedPromptMetadata.fromObject(d.suggestedPromptMetadata, n + 1);
            }
            if (d.invokerJID != null) {
                m.invokerJID = String(d.invokerJID);
            }
            if (d.sessionMetadata != null) {
                if (typeof d.sessionMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.sessionMetadata: object expected");
                m.sessionMetadata = $root.WAAICommon.BotSessionMetadata.fromObject(d.sessionMetadata, n + 1);
            }
            if (d.memuMetadata != null) {
                if (typeof d.memuMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.memuMetadata: object expected");
                m.memuMetadata = $root.WAAICommon.BotMemuMetadata.fromObject(d.memuMetadata, n + 1);
            }
            if (d.timezone != null) {
                m.timezone = String(d.timezone);
            }
            if (d.reminderMetadata != null) {
                if (typeof d.reminderMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.reminderMetadata: object expected");
                m.reminderMetadata = $root.WAAICommon.BotReminderMetadata.fromObject(d.reminderMetadata, n + 1);
            }
            if (d.modelMetadata != null) {
                if (typeof d.modelMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.modelMetadata: object expected");
                m.modelMetadata = $root.WAAICommon.BotModelMetadata.fromObject(d.modelMetadata, n + 1);
            }
            if (d.messageDisclaimerText != null) {
                m.messageDisclaimerText = String(d.messageDisclaimerText);
            }
            if (d.progressIndicatorMetadata != null) {
                if (typeof d.progressIndicatorMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.progressIndicatorMetadata: object expected");
                m.progressIndicatorMetadata = $root.WAAICommon.BotProgressIndicatorMetadata.fromObject(d.progressIndicatorMetadata, n + 1);
            }
            if (d.capabilityMetadata != null) {
                if (typeof d.capabilityMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.capabilityMetadata: object expected");
                m.capabilityMetadata = $root.WAAICommon.BotCapabilityMetadata.fromObject(d.capabilityMetadata, n + 1);
            }
            if (d.imagineMetadata != null) {
                if (typeof d.imagineMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.imagineMetadata: object expected");
                m.imagineMetadata = $root.WAAICommon.BotImagineMetadata.fromObject(d.imagineMetadata, n + 1);
            }
            if (d.memoryMetadata != null) {
                if (typeof d.memoryMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.memoryMetadata: object expected");
                m.memoryMetadata = $root.WAAICommon.BotMemoryMetadata.fromObject(d.memoryMetadata, n + 1);
            }
            if (d.renderingMetadata != null) {
                if (typeof d.renderingMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.renderingMetadata: object expected");
                m.renderingMetadata = $root.WAAICommon.BotRenderingMetadata.fromObject(d.renderingMetadata, n + 1);
            }
            if (d.botMetricsMetadata != null) {
                if (typeof d.botMetricsMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botMetricsMetadata: object expected");
                m.botMetricsMetadata = $root.WAAICommon.BotMetricsMetadata.fromObject(d.botMetricsMetadata, n + 1);
            }
            if (d.botLinkedAccountsMetadata != null) {
                if (typeof d.botLinkedAccountsMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botLinkedAccountsMetadata: object expected");
                m.botLinkedAccountsMetadata = $root.WAAICommon.BotLinkedAccountsMetadata.fromObject(d.botLinkedAccountsMetadata, n + 1);
            }
            if (d.richResponseSourcesMetadata != null) {
                if (typeof d.richResponseSourcesMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.richResponseSourcesMetadata: object expected");
                m.richResponseSourcesMetadata = $root.WAAICommon.BotSourcesMetadata.fromObject(d.richResponseSourcesMetadata, n + 1);
            }
            if (d.aiConversationContext != null) {
                if (typeof d.aiConversationContext === "string")
                    $util.base64.decode(d.aiConversationContext, m.aiConversationContext = $util.newBuffer($util.base64.length(d.aiConversationContext)), 0);
                else if (d.aiConversationContext.length >= 0)
                    m.aiConversationContext = d.aiConversationContext;
            }
            if (d.botPromotionMessageMetadata != null) {
                if (typeof d.botPromotionMessageMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botPromotionMessageMetadata: object expected");
                m.botPromotionMessageMetadata = $root.WAAICommon.BotPromotionMessageMetadata.fromObject(d.botPromotionMessageMetadata, n + 1);
            }
            if (d.botModeSelectionMetadata != null) {
                if (typeof d.botModeSelectionMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botModeSelectionMetadata: object expected");
                m.botModeSelectionMetadata = $root.WAAICommon.BotModeSelectionMetadata.fromObject(d.botModeSelectionMetadata, n + 1);
            }
            if (d.botQuotaMetadata != null) {
                if (typeof d.botQuotaMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botQuotaMetadata: object expected");
                m.botQuotaMetadata = $root.WAAICommon.BotQuotaMetadata.fromObject(d.botQuotaMetadata, n + 1);
            }
            if (d.botAgeCollectionMetadata != null) {
                if (typeof d.botAgeCollectionMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botAgeCollectionMetadata: object expected");
                m.botAgeCollectionMetadata = $root.WAAICommon.BotAgeCollectionMetadata.fromObject(d.botAgeCollectionMetadata, n + 1);
            }
            if (d.conversationStarterPromptID != null) {
                m.conversationStarterPromptID = String(d.conversationStarterPromptID);
            }
            if (d.botResponseID != null) {
                m.botResponseID = String(d.botResponseID);
            }
            if (d.verificationMetadata != null) {
                if (typeof d.verificationMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.verificationMetadata: object expected");
                m.verificationMetadata = $root.WAAICommon.BotSignatureVerificationMetadata.fromObject(d.verificationMetadata, n + 1);
            }
            if (d.unifiedResponseMutation != null) {
                if (typeof d.unifiedResponseMutation !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.unifiedResponseMutation: object expected");
                m.unifiedResponseMutation = $root.WAAICommon.BotUnifiedResponseMutation.fromObject(d.unifiedResponseMutation, n + 1);
            }
            if (d.botMessageOriginMetadata != null) {
                if (typeof d.botMessageOriginMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botMessageOriginMetadata: object expected");
                m.botMessageOriginMetadata = $root.WAAICommon.BotMessageOriginMetadata.fromObject(d.botMessageOriginMetadata, n + 1);
            }
            if (d.inThreadSurveyMetadata != null) {
                if (typeof d.inThreadSurveyMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.inThreadSurveyMetadata: object expected");
                m.inThreadSurveyMetadata = $root.WAAICommon.InThreadSurveyMetadata.fromObject(d.inThreadSurveyMetadata, n + 1);
            }
            if (d.botThreadInfo != null) {
                if (typeof d.botThreadInfo !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botThreadInfo: object expected");
                m.botThreadInfo = $root.WAAICommon.AIThreadInfo.fromObject(d.botThreadInfo, n + 1);
            }
            if (d.regenerateMetadata != null) {
                if (typeof d.regenerateMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.regenerateMetadata: object expected");
                m.regenerateMetadata = $root.WAAICommon.AIRegenerateMetadata.fromObject(d.regenerateMetadata, n + 1);
            }
            if (d.sessionTransparencyMetadata != null) {
                if (typeof d.sessionTransparencyMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.sessionTransparencyMetadata: object expected");
                m.sessionTransparencyMetadata = $root.WAAICommon.SessionTransparencyMetadata.fromObject(d.sessionTransparencyMetadata, n + 1);
            }
            if (d.botDocumentMessageMetadata != null) {
                if (typeof d.botDocumentMessageMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botDocumentMessageMetadata: object expected");
                m.botDocumentMessageMetadata = $root.WAAICommon.BotDocumentMessageMetadata.fromObject(d.botDocumentMessageMetadata, n + 1);
            }
            if (d.botGroupMetadata != null) {
                if (typeof d.botGroupMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botGroupMetadata: object expected");
                m.botGroupMetadata = $root.WAAICommon.BotGroupMetadata.fromObject(d.botGroupMetadata, n + 1);
            }
            if (d.botRenderingConfigMetadata != null) {
                if (typeof d.botRenderingConfigMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botRenderingConfigMetadata: object expected");
                m.botRenderingConfigMetadata = $root.WAAICommon.BotRenderingConfigMetadata.fromObject(d.botRenderingConfigMetadata, n + 1);
            }
            if (d.botInfrastructureDiagnostics != null) {
                if (typeof d.botInfrastructureDiagnostics !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.botInfrastructureDiagnostics: object expected");
                m.botInfrastructureDiagnostics = $root.WAAICommon.BotInfrastructureDiagnostics.fromObject(d.botInfrastructureDiagnostics, n + 1);
            }
            if (d.aiMediaCollectionMetadata != null) {
                if (typeof d.aiMediaCollectionMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.aiMediaCollectionMetadata: object expected");
                m.aiMediaCollectionMetadata = $root.WAAICommon.AIMediaCollectionMetadata.fromObject(d.aiMediaCollectionMetadata, n + 1);
            }
            if (d.commandMetadata != null) {
                if (typeof d.commandMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.commandMetadata: object expected");
                m.commandMetadata = $root.WAAICommon.BotCommandMetadata.fromObject(d.commandMetadata, n + 1);
            }
            if (d.resolvedToolCallMetadata != null) {
                if (typeof d.resolvedToolCallMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.resolvedToolCallMetadata: object expected");
                m.resolvedToolCallMetadata = $root.WAAICommon.BotResolvedToolCallMetadata.fromObject(d.resolvedToolCallMetadata, n + 1);
            }
            if (d.subscriptionUpsellMetadata != null) {
                if (typeof d.subscriptionUpsellMetadata !== "object")
                    throw TypeError(".WAAICommon.BotMetadata.subscriptionUpsellMetadata: object expected");
                m.subscriptionUpsellMetadata = $root.WAAICommon.AISubscriptionUpsellMetadata.fromObject(d.subscriptionUpsellMetadata, n + 1);
            }
            if (d.internalMetadata != null) {
                if (typeof d.internalMetadata === "string")
                    $util.base64.decode(d.internalMetadata, m.internalMetadata = $util.newBuffer($util.base64.length(d.internalMetadata)), 0);
                else if (d.internalMetadata.length >= 0)
                    m.internalMetadata = d.internalMetadata;
            }
            return m;
        };

        BotMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.personaID != null && m.hasOwnProperty("personaID")) {
                d.personaID = m.personaID;
                if (o.oneofs)
                    d._personaID = "personaID";
            }
            if (m.pluginMetadata != null && m.hasOwnProperty("pluginMetadata")) {
                d.pluginMetadata = $root.WAAICommon.BotPluginMetadata.toObject(m.pluginMetadata, o);
                if (o.oneofs)
                    d._pluginMetadata = "pluginMetadata";
            }
            if (m.suggestedPromptMetadata != null && m.hasOwnProperty("suggestedPromptMetadata")) {
                d.suggestedPromptMetadata = $root.WAAICommon.BotSuggestedPromptMetadata.toObject(m.suggestedPromptMetadata, o);
                if (o.oneofs)
                    d._suggestedPromptMetadata = "suggestedPromptMetadata";
            }
            if (m.invokerJID != null && m.hasOwnProperty("invokerJID")) {
                d.invokerJID = m.invokerJID;
                if (o.oneofs)
                    d._invokerJID = "invokerJID";
            }
            if (m.sessionMetadata != null && m.hasOwnProperty("sessionMetadata")) {
                d.sessionMetadata = $root.WAAICommon.BotSessionMetadata.toObject(m.sessionMetadata, o);
                if (o.oneofs)
                    d._sessionMetadata = "sessionMetadata";
            }
            if (m.memuMetadata != null && m.hasOwnProperty("memuMetadata")) {
                d.memuMetadata = $root.WAAICommon.BotMemuMetadata.toObject(m.memuMetadata, o);
                if (o.oneofs)
                    d._memuMetadata = "memuMetadata";
            }
            if (m.timezone != null && m.hasOwnProperty("timezone")) {
                d.timezone = m.timezone;
                if (o.oneofs)
                    d._timezone = "timezone";
            }
            if (m.reminderMetadata != null && m.hasOwnProperty("reminderMetadata")) {
                d.reminderMetadata = $root.WAAICommon.BotReminderMetadata.toObject(m.reminderMetadata, o);
                if (o.oneofs)
                    d._reminderMetadata = "reminderMetadata";
            }
            if (m.modelMetadata != null && m.hasOwnProperty("modelMetadata")) {
                d.modelMetadata = $root.WAAICommon.BotModelMetadata.toObject(m.modelMetadata, o);
                if (o.oneofs)
                    d._modelMetadata = "modelMetadata";
            }
            if (m.messageDisclaimerText != null && m.hasOwnProperty("messageDisclaimerText")) {
                d.messageDisclaimerText = m.messageDisclaimerText;
                if (o.oneofs)
                    d._messageDisclaimerText = "messageDisclaimerText";
            }
            if (m.progressIndicatorMetadata != null && m.hasOwnProperty("progressIndicatorMetadata")) {
                d.progressIndicatorMetadata = $root.WAAICommon.BotProgressIndicatorMetadata.toObject(m.progressIndicatorMetadata, o);
                if (o.oneofs)
                    d._progressIndicatorMetadata = "progressIndicatorMetadata";
            }
            if (m.capabilityMetadata != null && m.hasOwnProperty("capabilityMetadata")) {
                d.capabilityMetadata = $root.WAAICommon.BotCapabilityMetadata.toObject(m.capabilityMetadata, o);
                if (o.oneofs)
                    d._capabilityMetadata = "capabilityMetadata";
            }
            if (m.imagineMetadata != null && m.hasOwnProperty("imagineMetadata")) {
                d.imagineMetadata = $root.WAAICommon.BotImagineMetadata.toObject(m.imagineMetadata, o);
                if (o.oneofs)
                    d._imagineMetadata = "imagineMetadata";
            }
            if (m.memoryMetadata != null && m.hasOwnProperty("memoryMetadata")) {
                d.memoryMetadata = $root.WAAICommon.BotMemoryMetadata.toObject(m.memoryMetadata, o);
                if (o.oneofs)
                    d._memoryMetadata = "memoryMetadata";
            }
            if (m.renderingMetadata != null && m.hasOwnProperty("renderingMetadata")) {
                d.renderingMetadata = $root.WAAICommon.BotRenderingMetadata.toObject(m.renderingMetadata, o);
                if (o.oneofs)
                    d._renderingMetadata = "renderingMetadata";
            }
            if (m.botMetricsMetadata != null && m.hasOwnProperty("botMetricsMetadata")) {
                d.botMetricsMetadata = $root.WAAICommon.BotMetricsMetadata.toObject(m.botMetricsMetadata, o);
                if (o.oneofs)
                    d._botMetricsMetadata = "botMetricsMetadata";
            }
            if (m.botLinkedAccountsMetadata != null && m.hasOwnProperty("botLinkedAccountsMetadata")) {
                d.botLinkedAccountsMetadata = $root.WAAICommon.BotLinkedAccountsMetadata.toObject(m.botLinkedAccountsMetadata, o);
                if (o.oneofs)
                    d._botLinkedAccountsMetadata = "botLinkedAccountsMetadata";
            }
            if (m.richResponseSourcesMetadata != null && m.hasOwnProperty("richResponseSourcesMetadata")) {
                d.richResponseSourcesMetadata = $root.WAAICommon.BotSourcesMetadata.toObject(m.richResponseSourcesMetadata, o);
                if (o.oneofs)
                    d._richResponseSourcesMetadata = "richResponseSourcesMetadata";
            }
            if (m.aiConversationContext != null && m.hasOwnProperty("aiConversationContext")) {
                d.aiConversationContext = o.bytes === String ? $util.base64.encode(m.aiConversationContext, 0, m.aiConversationContext.length) : o.bytes === Array ? Array.prototype.slice.call(m.aiConversationContext) : m.aiConversationContext;
                if (o.oneofs)
                    d._aiConversationContext = "aiConversationContext";
            }
            if (m.botPromotionMessageMetadata != null && m.hasOwnProperty("botPromotionMessageMetadata")) {
                d.botPromotionMessageMetadata = $root.WAAICommon.BotPromotionMessageMetadata.toObject(m.botPromotionMessageMetadata, o);
                if (o.oneofs)
                    d._botPromotionMessageMetadata = "botPromotionMessageMetadata";
            }
            if (m.botModeSelectionMetadata != null && m.hasOwnProperty("botModeSelectionMetadata")) {
                d.botModeSelectionMetadata = $root.WAAICommon.BotModeSelectionMetadata.toObject(m.botModeSelectionMetadata, o);
                if (o.oneofs)
                    d._botModeSelectionMetadata = "botModeSelectionMetadata";
            }
            if (m.botQuotaMetadata != null && m.hasOwnProperty("botQuotaMetadata")) {
                d.botQuotaMetadata = $root.WAAICommon.BotQuotaMetadata.toObject(m.botQuotaMetadata, o);
                if (o.oneofs)
                    d._botQuotaMetadata = "botQuotaMetadata";
            }
            if (m.botAgeCollectionMetadata != null && m.hasOwnProperty("botAgeCollectionMetadata")) {
                d.botAgeCollectionMetadata = $root.WAAICommon.BotAgeCollectionMetadata.toObject(m.botAgeCollectionMetadata, o);
                if (o.oneofs)
                    d._botAgeCollectionMetadata = "botAgeCollectionMetadata";
            }
            if (m.conversationStarterPromptID != null && m.hasOwnProperty("conversationStarterPromptID")) {
                d.conversationStarterPromptID = m.conversationStarterPromptID;
                if (o.oneofs)
                    d._conversationStarterPromptID = "conversationStarterPromptID";
            }
            if (m.botResponseID != null && m.hasOwnProperty("botResponseID")) {
                d.botResponseID = m.botResponseID;
                if (o.oneofs)
                    d._botResponseID = "botResponseID";
            }
            if (m.verificationMetadata != null && m.hasOwnProperty("verificationMetadata")) {
                d.verificationMetadata = $root.WAAICommon.BotSignatureVerificationMetadata.toObject(m.verificationMetadata, o);
                if (o.oneofs)
                    d._verificationMetadata = "verificationMetadata";
            }
            if (m.unifiedResponseMutation != null && m.hasOwnProperty("unifiedResponseMutation")) {
                d.unifiedResponseMutation = $root.WAAICommon.BotUnifiedResponseMutation.toObject(m.unifiedResponseMutation, o);
                if (o.oneofs)
                    d._unifiedResponseMutation = "unifiedResponseMutation";
            }
            if (m.botMessageOriginMetadata != null && m.hasOwnProperty("botMessageOriginMetadata")) {
                d.botMessageOriginMetadata = $root.WAAICommon.BotMessageOriginMetadata.toObject(m.botMessageOriginMetadata, o);
                if (o.oneofs)
                    d._botMessageOriginMetadata = "botMessageOriginMetadata";
            }
            if (m.inThreadSurveyMetadata != null && m.hasOwnProperty("inThreadSurveyMetadata")) {
                d.inThreadSurveyMetadata = $root.WAAICommon.InThreadSurveyMetadata.toObject(m.inThreadSurveyMetadata, o);
                if (o.oneofs)
                    d._inThreadSurveyMetadata = "inThreadSurveyMetadata";
            }
            if (m.botThreadInfo != null && m.hasOwnProperty("botThreadInfo")) {
                d.botThreadInfo = $root.WAAICommon.AIThreadInfo.toObject(m.botThreadInfo, o);
                if (o.oneofs)
                    d._botThreadInfo = "botThreadInfo";
            }
            if (m.regenerateMetadata != null && m.hasOwnProperty("regenerateMetadata")) {
                d.regenerateMetadata = $root.WAAICommon.AIRegenerateMetadata.toObject(m.regenerateMetadata, o);
                if (o.oneofs)
                    d._regenerateMetadata = "regenerateMetadata";
            }
            if (m.sessionTransparencyMetadata != null && m.hasOwnProperty("sessionTransparencyMetadata")) {
                d.sessionTransparencyMetadata = $root.WAAICommon.SessionTransparencyMetadata.toObject(m.sessionTransparencyMetadata, o);
                if (o.oneofs)
                    d._sessionTransparencyMetadata = "sessionTransparencyMetadata";
            }
            if (m.botDocumentMessageMetadata != null && m.hasOwnProperty("botDocumentMessageMetadata")) {
                d.botDocumentMessageMetadata = $root.WAAICommon.BotDocumentMessageMetadata.toObject(m.botDocumentMessageMetadata, o);
                if (o.oneofs)
                    d._botDocumentMessageMetadata = "botDocumentMessageMetadata";
            }
            if (m.botGroupMetadata != null && m.hasOwnProperty("botGroupMetadata")) {
                d.botGroupMetadata = $root.WAAICommon.BotGroupMetadata.toObject(m.botGroupMetadata, o);
                if (o.oneofs)
                    d._botGroupMetadata = "botGroupMetadata";
            }
            if (m.botRenderingConfigMetadata != null && m.hasOwnProperty("botRenderingConfigMetadata")) {
                d.botRenderingConfigMetadata = $root.WAAICommon.BotRenderingConfigMetadata.toObject(m.botRenderingConfigMetadata, o);
                if (o.oneofs)
                    d._botRenderingConfigMetadata = "botRenderingConfigMetadata";
            }
            if (m.botInfrastructureDiagnostics != null && m.hasOwnProperty("botInfrastructureDiagnostics")) {
                d.botInfrastructureDiagnostics = $root.WAAICommon.BotInfrastructureDiagnostics.toObject(m.botInfrastructureDiagnostics, o);
                if (o.oneofs)
                    d._botInfrastructureDiagnostics = "botInfrastructureDiagnostics";
            }
            if (m.aiMediaCollectionMetadata != null && m.hasOwnProperty("aiMediaCollectionMetadata")) {
                d.aiMediaCollectionMetadata = $root.WAAICommon.AIMediaCollectionMetadata.toObject(m.aiMediaCollectionMetadata, o);
                if (o.oneofs)
                    d._aiMediaCollectionMetadata = "aiMediaCollectionMetadata";
            }
            if (m.commandMetadata != null && m.hasOwnProperty("commandMetadata")) {
                d.commandMetadata = $root.WAAICommon.BotCommandMetadata.toObject(m.commandMetadata, o);
                if (o.oneofs)
                    d._commandMetadata = "commandMetadata";
            }
            if (m.resolvedToolCallMetadata != null && m.hasOwnProperty("resolvedToolCallMetadata")) {
                d.resolvedToolCallMetadata = $root.WAAICommon.BotResolvedToolCallMetadata.toObject(m.resolvedToolCallMetadata, o);
                if (o.oneofs)
                    d._resolvedToolCallMetadata = "resolvedToolCallMetadata";
            }
            if (m.subscriptionUpsellMetadata != null && m.hasOwnProperty("subscriptionUpsellMetadata")) {
                d.subscriptionUpsellMetadata = $root.WAAICommon.AISubscriptionUpsellMetadata.toObject(m.subscriptionUpsellMetadata, o);
                if (o.oneofs)
                    d._subscriptionUpsellMetadata = "subscriptionUpsellMetadata";
            }
            if (m.internalMetadata != null && m.hasOwnProperty("internalMetadata")) {
                d.internalMetadata = o.bytes === String ? $util.base64.encode(m.internalMetadata, 0, m.internalMetadata.length) : o.bytes === Array ? Array.prototype.slice.call(m.internalMetadata) : m.internalMetadata;
                if (o.oneofs)
                    d._internalMetadata = "internalMetadata";
            }
            return d;
        };

        BotMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMetadata";
        };

        return BotMetadata;
    })();

    WAAICommon.AISubscriptionUpsellMetadata = (function() {

        function AISubscriptionUpsellMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AISubscriptionUpsellMetadata.prototype.requestType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AISubscriptionUpsellMetadata.prototype, "_requestType", {
            get: $util.oneOfGetter($oneOfFields = ["requestType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AISubscriptionUpsellMetadata.create = function create(properties) {
            return new AISubscriptionUpsellMetadata(properties);
        };

        AISubscriptionUpsellMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.requestType != null && Object.hasOwnProperty.call(m, "requestType"))
                w.uint32(8).int32(m.requestType);
            return w;
        };

        AISubscriptionUpsellMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AISubscriptionUpsellMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.requestType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AISubscriptionUpsellMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AISubscriptionUpsellMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AISubscriptionUpsellMetadata();
            switch (d.requestType) {
            default:
                if (typeof d.requestType === "number") {
                    m.requestType = d.requestType;
                    break;
                }
                break;
            case "UNSPECIFIED":
            case 0:
                m.requestType = 0;
                break;
            case "THINK_HARD":
            case 1:
                m.requestType = 1;
                break;
            case "IMAGE_GEN":
            case 2:
                m.requestType = 2;
                break;
            case "VIDEO_GEN":
            case 3:
                m.requestType = 3;
                break;
            }
            return m;
        };

        AISubscriptionUpsellMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.requestType != null && m.hasOwnProperty("requestType")) {
                d.requestType = o.enums === String ? $root.WAAICommon.AISubscriptionRequestType[m.requestType] === undefined ? m.requestType : $root.WAAICommon.AISubscriptionRequestType[m.requestType] : m.requestType;
                if (o.oneofs)
                    d._requestType = "requestType";
            }
            return d;
        };

        AISubscriptionUpsellMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AISubscriptionUpsellMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AISubscriptionUpsellMetadata";
        };

        return AISubscriptionUpsellMetadata;
    })();

    WAAICommon.BotGroupMetadata = (function() {

        function BotGroupMetadata(p) {
            this.participantsMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotGroupMetadata.prototype.participantsMetadata = $util.emptyArray;

        BotGroupMetadata.create = function create(properties) {
            return new BotGroupMetadata(properties);
        };

        BotGroupMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.participantsMetadata != null && m.participantsMetadata.length) {
                for (var i = 0; i < m.participantsMetadata.length; ++i)
                    $root.WAAICommon.BotGroupParticipantMetadata.encode(m.participantsMetadata[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        BotGroupMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotGroupMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.participantsMetadata && m.participantsMetadata.length))
                            m.participantsMetadata = [];
                        m.participantsMetadata.push($root.WAAICommon.BotGroupParticipantMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotGroupMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotGroupMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotGroupMetadata();
            if (d.participantsMetadata) {
                if (!Array.isArray(d.participantsMetadata))
                    throw TypeError(".WAAICommon.BotGroupMetadata.participantsMetadata: array expected");
                m.participantsMetadata = [];
                for (var i = 0; i < d.participantsMetadata.length; ++i) {
                    if (typeof d.participantsMetadata[i] !== "object")
                        throw TypeError(".WAAICommon.BotGroupMetadata.participantsMetadata: object expected");
                    m.participantsMetadata[i] = $root.WAAICommon.BotGroupParticipantMetadata.fromObject(d.participantsMetadata[i], n + 1);
                }
            }
            return m;
        };

        BotGroupMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.participantsMetadata = [];
            }
            if (m.participantsMetadata && m.participantsMetadata.length) {
                d.participantsMetadata = [];
                for (var j = 0; j < m.participantsMetadata.length; ++j) {
                    d.participantsMetadata[j] = $root.WAAICommon.BotGroupParticipantMetadata.toObject(m.participantsMetadata[j], o);
                }
            }
            return d;
        };

        BotGroupMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotGroupMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotGroupMetadata";
        };

        return BotGroupMetadata;
    })();

    WAAICommon.BotRenderingConfigMetadata = (function() {

        function BotRenderingConfigMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotRenderingConfigMetadata.prototype.bloksVersioningID = null;
        BotRenderingConfigMetadata.prototype.pixelDensity = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotRenderingConfigMetadata.prototype, "_bloksVersioningID", {
            get: $util.oneOfGetter($oneOfFields = ["bloksVersioningID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotRenderingConfigMetadata.prototype, "_pixelDensity", {
            get: $util.oneOfGetter($oneOfFields = ["pixelDensity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotRenderingConfigMetadata.create = function create(properties) {
            return new BotRenderingConfigMetadata(properties);
        };

        BotRenderingConfigMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.bloksVersioningID != null && Object.hasOwnProperty.call(m, "bloksVersioningID"))
                w.uint32(10).string(m.bloksVersioningID);
            if (m.pixelDensity != null && Object.hasOwnProperty.call(m, "pixelDensity"))
                w.uint32(17).double(m.pixelDensity);
            return w;
        };

        BotRenderingConfigMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotRenderingConfigMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.bloksVersioningID = r.string();
                        break;
                    }
                case 2: {
                        m.pixelDensity = r.double();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotRenderingConfigMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotRenderingConfigMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotRenderingConfigMetadata();
            if (d.bloksVersioningID != null) {
                m.bloksVersioningID = String(d.bloksVersioningID);
            }
            if (d.pixelDensity != null) {
                m.pixelDensity = Number(d.pixelDensity);
            }
            return m;
        };

        BotRenderingConfigMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.bloksVersioningID != null && m.hasOwnProperty("bloksVersioningID")) {
                d.bloksVersioningID = m.bloksVersioningID;
                if (o.oneofs)
                    d._bloksVersioningID = "bloksVersioningID";
            }
            if (m.pixelDensity != null && m.hasOwnProperty("pixelDensity")) {
                d.pixelDensity = o.json && !isFinite(m.pixelDensity) ? String(m.pixelDensity) : m.pixelDensity;
                if (o.oneofs)
                    d._pixelDensity = "pixelDensity";
            }
            return d;
        };

        BotRenderingConfigMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotRenderingConfigMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotRenderingConfigMetadata";
        };

        return BotRenderingConfigMetadata;
    })();

    WAAICommon.BotGroupParticipantMetadata = (function() {

        function BotGroupParticipantMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotGroupParticipantMetadata.prototype.botFbid = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotGroupParticipantMetadata.prototype, "_botFbid", {
            get: $util.oneOfGetter($oneOfFields = ["botFbid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotGroupParticipantMetadata.create = function create(properties) {
            return new BotGroupParticipantMetadata(properties);
        };

        BotGroupParticipantMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.botFbid != null && Object.hasOwnProperty.call(m, "botFbid"))
                w.uint32(10).string(m.botFbid);
            return w;
        };

        BotGroupParticipantMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotGroupParticipantMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.botFbid = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotGroupParticipantMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotGroupParticipantMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotGroupParticipantMetadata();
            if (d.botFbid != null) {
                m.botFbid = String(d.botFbid);
            }
            return m;
        };

        BotGroupParticipantMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.botFbid != null && m.hasOwnProperty("botFbid")) {
                d.botFbid = m.botFbid;
                if (o.oneofs)
                    d._botFbid = "botFbid";
            }
            return d;
        };

        BotGroupParticipantMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotGroupParticipantMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotGroupParticipantMetadata";
        };

        return BotGroupParticipantMetadata;
    })();

    WAAICommon.ForwardedAIBotMessageInfo = (function() {

        function ForwardedAIBotMessageInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ForwardedAIBotMessageInfo.prototype.botName = null;
        ForwardedAIBotMessageInfo.prototype.botJID = null;
        ForwardedAIBotMessageInfo.prototype.creatorName = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ForwardedAIBotMessageInfo.prototype, "_botName", {
            get: $util.oneOfGetter($oneOfFields = ["botName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ForwardedAIBotMessageInfo.prototype, "_botJID", {
            get: $util.oneOfGetter($oneOfFields = ["botJID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ForwardedAIBotMessageInfo.prototype, "_creatorName", {
            get: $util.oneOfGetter($oneOfFields = ["creatorName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ForwardedAIBotMessageInfo.create = function create(properties) {
            return new ForwardedAIBotMessageInfo(properties);
        };

        ForwardedAIBotMessageInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.botName != null && Object.hasOwnProperty.call(m, "botName"))
                w.uint32(10).string(m.botName);
            if (m.botJID != null && Object.hasOwnProperty.call(m, "botJID"))
                w.uint32(18).string(m.botJID);
            if (m.creatorName != null && Object.hasOwnProperty.call(m, "creatorName"))
                w.uint32(26).string(m.creatorName);
            return w;
        };

        ForwardedAIBotMessageInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.ForwardedAIBotMessageInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.botName = r.string();
                        break;
                    }
                case 2: {
                        m.botJID = r.string();
                        break;
                    }
                case 3: {
                        m.creatorName = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ForwardedAIBotMessageInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.ForwardedAIBotMessageInfo)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.ForwardedAIBotMessageInfo();
            if (d.botName != null) {
                m.botName = String(d.botName);
            }
            if (d.botJID != null) {
                m.botJID = String(d.botJID);
            }
            if (d.creatorName != null) {
                m.creatorName = String(d.creatorName);
            }
            return m;
        };

        ForwardedAIBotMessageInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.botName != null && m.hasOwnProperty("botName")) {
                d.botName = m.botName;
                if (o.oneofs)
                    d._botName = "botName";
            }
            if (m.botJID != null && m.hasOwnProperty("botJID")) {
                d.botJID = m.botJID;
                if (o.oneofs)
                    d._botJID = "botJID";
            }
            if (m.creatorName != null && m.hasOwnProperty("creatorName")) {
                d.creatorName = m.creatorName;
                if (o.oneofs)
                    d._creatorName = "creatorName";
            }
            return d;
        };

        ForwardedAIBotMessageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ForwardedAIBotMessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.ForwardedAIBotMessageInfo";
        };

        return ForwardedAIBotMessageInfo;
    })();

    WAAICommon.BotMessageSharingInfo = (function() {

        function BotMessageSharingInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMessageSharingInfo.prototype.botEntryPointOrigin = null;
        BotMessageSharingInfo.prototype.forwardScore = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMessageSharingInfo.prototype, "_botEntryPointOrigin", {
            get: $util.oneOfGetter($oneOfFields = ["botEntryPointOrigin"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotMessageSharingInfo.prototype, "_forwardScore", {
            get: $util.oneOfGetter($oneOfFields = ["forwardScore"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotMessageSharingInfo.create = function create(properties) {
            return new BotMessageSharingInfo(properties);
        };

        BotMessageSharingInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.botEntryPointOrigin != null && Object.hasOwnProperty.call(m, "botEntryPointOrigin"))
                w.uint32(8).int32(m.botEntryPointOrigin);
            if (m.forwardScore != null && Object.hasOwnProperty.call(m, "forwardScore"))
                w.uint32(16).uint32(m.forwardScore);
            return w;
        };

        BotMessageSharingInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotMessageSharingInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.botEntryPointOrigin = r.int32();
                        break;
                    }
                case 2: {
                        m.forwardScore = r.uint32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotMessageSharingInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotMessageSharingInfo)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotMessageSharingInfo();
            switch (d.botEntryPointOrigin) {
            default:
                if (typeof d.botEntryPointOrigin === "number") {
                    m.botEntryPointOrigin = d.botEntryPointOrigin;
                    break;
                }
                break;
            case "UNDEFINED_ENTRY_POINT":
            case 0:
                m.botEntryPointOrigin = 0;
                break;
            case "FAVICON":
            case 1:
                m.botEntryPointOrigin = 1;
                break;
            case "CHATLIST":
            case 2:
                m.botEntryPointOrigin = 2;
                break;
            case "AISEARCH_NULL_STATE_PAPER_PLANE":
            case 3:
                m.botEntryPointOrigin = 3;
                break;
            case "AISEARCH_NULL_STATE_SUGGESTION":
            case 4:
                m.botEntryPointOrigin = 4;
                break;
            case "AISEARCH_TYPE_AHEAD_SUGGESTION":
            case 5:
                m.botEntryPointOrigin = 5;
                break;
            case "AISEARCH_TYPE_AHEAD_PAPER_PLANE":
            case 6:
                m.botEntryPointOrigin = 6;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST":
            case 7:
                m.botEntryPointOrigin = 7;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES":
            case 8:
                m.botEntryPointOrigin = 8;
                break;
            case "AIVOICE_SEARCH_BAR":
            case 9:
                m.botEntryPointOrigin = 9;
                break;
            case "AIVOICE_FAVICON":
            case 10:
                m.botEntryPointOrigin = 10;
                break;
            case "AISTUDIO":
            case 11:
                m.botEntryPointOrigin = 11;
                break;
            case "DEEPLINK":
            case 12:
                m.botEntryPointOrigin = 12;
                break;
            case "NOTIFICATION":
            case 13:
                m.botEntryPointOrigin = 13;
                break;
            case "PROFILE_MESSAGE_BUTTON":
            case 14:
                m.botEntryPointOrigin = 14;
                break;
            case "FORWARD":
            case 15:
                m.botEntryPointOrigin = 15;
                break;
            case "APP_SHORTCUT":
            case 16:
                m.botEntryPointOrigin = 16;
                break;
            case "FF_FAMILY":
            case 17:
                m.botEntryPointOrigin = 17;
                break;
            case "AI_TAB":
            case 18:
                m.botEntryPointOrigin = 18;
                break;
            case "AI_HOME":
            case 19:
                m.botEntryPointOrigin = 19;
                break;
            case "AI_DEEPLINK_IMMERSIVE":
            case 20:
                m.botEntryPointOrigin = 20;
                break;
            case "AI_DEEPLINK":
            case 21:
                m.botEntryPointOrigin = 21;
                break;
            case "META_AI_CHAT_SHORTCUT_AI_STUDIO":
            case 22:
                m.botEntryPointOrigin = 22;
                break;
            case "UGC_CHAT_SHORTCUT_AI_STUDIO":
            case 23:
                m.botEntryPointOrigin = 23;
                break;
            case "NEW_CHAT_AI_STUDIO":
            case 24:
                m.botEntryPointOrigin = 24;
                break;
            case "AIVOICE_FAVICON_CALL_HISTORY":
            case 25:
                m.botEntryPointOrigin = 25;
                break;
            case "ASK_META_AI_CONTEXT_MENU":
            case 26:
                m.botEntryPointOrigin = 26;
                break;
            case "ASK_META_AI_CONTEXT_MENU_1ON1":
            case 27:
                m.botEntryPointOrigin = 27;
                break;
            case "ASK_META_AI_CONTEXT_MENU_GROUP":
            case 28:
                m.botEntryPointOrigin = 28;
                break;
            case "INVOKE_META_AI_1ON1":
            case 29:
                m.botEntryPointOrigin = 29;
                break;
            case "INVOKE_META_AI_GROUP":
            case 30:
                m.botEntryPointOrigin = 30;
                break;
            case "META_AI_FORWARD":
            case 31:
                m.botEntryPointOrigin = 31;
                break;
            case "NEW_CHAT_AI_CONTACT":
            case 32:
                m.botEntryPointOrigin = 32;
                break;
            case "MESSAGE_QUICK_ACTION_1_ON_1_CHAT":
            case 33:
                m.botEntryPointOrigin = 33;
                break;
            case "MESSAGE_QUICK_ACTION_GROUP_CHAT":
            case 34:
                m.botEntryPointOrigin = 34;
                break;
            case "ATTACHMENT_TRAY_1_ON_1_CHAT":
            case 35:
                m.botEntryPointOrigin = 35;
                break;
            case "ATTACHMENT_TRAY_GROUP_CHAT":
            case 36:
                m.botEntryPointOrigin = 36;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_1ON1":
            case 37:
                m.botEntryPointOrigin = 37;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_GROUP":
            case 38:
                m.botEntryPointOrigin = 38;
                break;
            case "MEDIA_PICKER_1_ON_1_CHAT":
            case 39:
                m.botEntryPointOrigin = 39;
                break;
            case "MEDIA_PICKER_GROUP_CHAT":
            case 40:
                m.botEntryPointOrigin = 40;
                break;
            case "ASK_META_AI_NO_SEARCH_RESULTS":
            case 41:
                m.botEntryPointOrigin = 41;
                break;
            case "META_AI_SETTINGS":
            case 45:
                m.botEntryPointOrigin = 45;
                break;
            case "WEB_INTRO_PANEL":
            case 46:
                m.botEntryPointOrigin = 46;
                break;
            case "WEB_NAVIGATION_BAR":
            case 47:
                m.botEntryPointOrigin = 47;
                break;
            case "GROUP_MEMBER":
            case 54:
                m.botEntryPointOrigin = 54;
                break;
            case "CHATLIST_SEARCH":
            case 55:
                m.botEntryPointOrigin = 55;
                break;
            case "NEW_CHAT_LIST":
            case 56:
                m.botEntryPointOrigin = 56;
                break;
            }
            if (d.forwardScore != null) {
                m.forwardScore = d.forwardScore >>> 0;
            }
            return m;
        };

        BotMessageSharingInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.botEntryPointOrigin != null && m.hasOwnProperty("botEntryPointOrigin")) {
                d.botEntryPointOrigin = o.enums === String ? $root.WAAICommon.BotMetricsEntryPoint[m.botEntryPointOrigin] === undefined ? m.botEntryPointOrigin : $root.WAAICommon.BotMetricsEntryPoint[m.botEntryPointOrigin] : m.botEntryPointOrigin;
                if (o.oneofs)
                    d._botEntryPointOrigin = "botEntryPointOrigin";
            }
            if (m.forwardScore != null && m.hasOwnProperty("forwardScore")) {
                d.forwardScore = m.forwardScore;
                if (o.oneofs)
                    d._forwardScore = "forwardScore";
            }
            return d;
        };

        BotMessageSharingInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMessageSharingInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotMessageSharingInfo";
        };

        return BotMessageSharingInfo;
    })();

    WAAICommon.AIRichResponseUnifiedResponse = (function() {

        function AIRichResponseUnifiedResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseUnifiedResponse.prototype.data = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseUnifiedResponse.prototype, "_data", {
            get: $util.oneOfGetter($oneOfFields = ["data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseUnifiedResponse.create = function create(properties) {
            return new AIRichResponseUnifiedResponse(properties);
        };

        AIRichResponseUnifiedResponse.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                w.uint32(10).bytes(m.data);
            return w;
        };

        AIRichResponseUnifiedResponse.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIRichResponseUnifiedResponse();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.data = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseUnifiedResponse.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AIRichResponseUnifiedResponse)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AIRichResponseUnifiedResponse();
            if (d.data != null) {
                if (typeof d.data === "string")
                    $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                else if (d.data.length >= 0)
                    m.data = d.data;
            }
            return m;
        };

        AIRichResponseUnifiedResponse.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.data != null && m.hasOwnProperty("data")) {
                d.data = o.bytes === String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === Array ? Array.prototype.slice.call(m.data) : m.data;
                if (o.oneofs)
                    d._data = "data";
            }
            return d;
        };

        AIRichResponseUnifiedResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseUnifiedResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AIRichResponseUnifiedResponse";
        };

        return AIRichResponseUnifiedResponse;
    })();

    WAAICommon.AIRegenerateMetadata = (function() {

        function AIRegenerateMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRegenerateMetadata.prototype.messageKey = null;
        AIRegenerateMetadata.prototype.responseTimestampMS = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRegenerateMetadata.prototype, "_messageKey", {
            get: $util.oneOfGetter($oneOfFields = ["messageKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRegenerateMetadata.prototype, "_responseTimestampMS", {
            get: $util.oneOfGetter($oneOfFields = ["responseTimestampMS"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRegenerateMetadata.create = function create(properties) {
            return new AIRegenerateMetadata(properties);
        };

        AIRegenerateMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messageKey != null && Object.hasOwnProperty.call(m, "messageKey"))
                WACommon.MessageKey.encode(m.messageKey, w.uint32(10).fork()).ldelim();
            if (m.responseTimestampMS != null && Object.hasOwnProperty.call(m, "responseTimestampMS"))
                w.uint32(16).int64(m.responseTimestampMS);
            return w;
        };

        AIRegenerateMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.AIRegenerateMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageKey = WACommon.MessageKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.responseTimestampMS = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRegenerateMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.AIRegenerateMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.AIRegenerateMetadata();
            if (d.messageKey != null) {
                if (typeof d.messageKey !== "object")
                    throw TypeError(".WAAICommon.AIRegenerateMetadata.messageKey: object expected");
                m.messageKey = WACommon.MessageKey.fromObject(d.messageKey, n + 1);
            }
            if (d.responseTimestampMS != null) {
                if ($util.Long)
                    (m.responseTimestampMS = $util.Long.fromValue(d.responseTimestampMS)).unsigned = false;
                else if (typeof d.responseTimestampMS === "string")
                    m.responseTimestampMS = parseInt(d.responseTimestampMS, 10);
                else if (typeof d.responseTimestampMS === "number")
                    m.responseTimestampMS = d.responseTimestampMS;
                else if (typeof d.responseTimestampMS === "object")
                    m.responseTimestampMS = new $util.LongBits(d.responseTimestampMS.low >>> 0, d.responseTimestampMS.high >>> 0).toNumber();
            }
            return m;
        };

        AIRegenerateMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.messageKey != null && m.hasOwnProperty("messageKey")) {
                d.messageKey = WACommon.MessageKey.toObject(m.messageKey, o);
                if (o.oneofs)
                    d._messageKey = "messageKey";
            }
            if (m.responseTimestampMS != null && m.hasOwnProperty("responseTimestampMS")) {
                if (typeof m.responseTimestampMS === "number")
                    d.responseTimestampMS = o.longs === String ? String(m.responseTimestampMS) : m.responseTimestampMS;
                else
                    d.responseTimestampMS = o.longs === String ? $util.Long.prototype.toString.call(m.responseTimestampMS) : o.longs === Number ? new $util.LongBits(m.responseTimestampMS.low >>> 0, m.responseTimestampMS.high >>> 0).toNumber() : m.responseTimestampMS;
                if (o.oneofs)
                    d._responseTimestampMS = "responseTimestampMS";
            }
            return d;
        };

        AIRegenerateMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRegenerateMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.AIRegenerateMetadata";
        };

        return AIRegenerateMetadata;
    })();

    WAAICommon.SessionTransparencyMetadata = (function() {

        function SessionTransparencyMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SessionTransparencyMetadata.prototype.disclaimerText = null;
        SessionTransparencyMetadata.prototype.hcaID = null;
        SessionTransparencyMetadata.prototype.sessionTransparencyType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionTransparencyMetadata.prototype, "_disclaimerText", {
            get: $util.oneOfGetter($oneOfFields = ["disclaimerText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionTransparencyMetadata.prototype, "_hcaID", {
            get: $util.oneOfGetter($oneOfFields = ["hcaID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionTransparencyMetadata.prototype, "_sessionTransparencyType", {
            get: $util.oneOfGetter($oneOfFields = ["sessionTransparencyType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SessionTransparencyMetadata.create = function create(properties) {
            return new SessionTransparencyMetadata(properties);
        };

        SessionTransparencyMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.disclaimerText != null && Object.hasOwnProperty.call(m, "disclaimerText"))
                w.uint32(10).string(m.disclaimerText);
            if (m.hcaID != null && Object.hasOwnProperty.call(m, "hcaID"))
                w.uint32(18).string(m.hcaID);
            if (m.sessionTransparencyType != null && Object.hasOwnProperty.call(m, "sessionTransparencyType"))
                w.uint32(24).int32(m.sessionTransparencyType);
            return w;
        };

        SessionTransparencyMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.SessionTransparencyMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.disclaimerText = r.string();
                        break;
                    }
                case 2: {
                        m.hcaID = r.string();
                        break;
                    }
                case 3: {
                        m.sessionTransparencyType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SessionTransparencyMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.SessionTransparencyMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.SessionTransparencyMetadata();
            if (d.disclaimerText != null) {
                m.disclaimerText = String(d.disclaimerText);
            }
            if (d.hcaID != null) {
                m.hcaID = String(d.hcaID);
            }
            switch (d.sessionTransparencyType) {
            default:
                if (typeof d.sessionTransparencyType === "number") {
                    m.sessionTransparencyType = d.sessionTransparencyType;
                    break;
                }
                break;
            case "UNKNOWN_TYPE":
            case 0:
                m.sessionTransparencyType = 0;
                break;
            case "NY_AI_SAFETY_DISCLAIMER":
            case 1:
                m.sessionTransparencyType = 1;
                break;
            }
            return m;
        };

        SessionTransparencyMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.disclaimerText != null && m.hasOwnProperty("disclaimerText")) {
                d.disclaimerText = m.disclaimerText;
                if (o.oneofs)
                    d._disclaimerText = "disclaimerText";
            }
            if (m.hcaID != null && m.hasOwnProperty("hcaID")) {
                d.hcaID = m.hcaID;
                if (o.oneofs)
                    d._hcaID = "hcaID";
            }
            if (m.sessionTransparencyType != null && m.hasOwnProperty("sessionTransparencyType")) {
                d.sessionTransparencyType = o.enums === String ? $root.WAAICommon.SessionTransparencyType[m.sessionTransparencyType] === undefined ? m.sessionTransparencyType : $root.WAAICommon.SessionTransparencyType[m.sessionTransparencyType] : m.sessionTransparencyType;
                if (o.oneofs)
                    d._sessionTransparencyType = "sessionTransparencyType";
            }
            return d;
        };

        SessionTransparencyMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SessionTransparencyMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.SessionTransparencyMetadata";
        };

        return SessionTransparencyMetadata;
    })();

    WAAICommon.BotAgentMetadata = (function() {

        function BotAgentMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotAgentMetadata.prototype.deepLinkMetadata = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotAgentMetadata.prototype, "_deepLinkMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["deepLinkMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotAgentMetadata.create = function create(properties) {
            return new BotAgentMetadata(properties);
        };

        BotAgentMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.deepLinkMetadata != null && Object.hasOwnProperty.call(m, "deepLinkMetadata"))
                $root.WAAICommon.BotAgentDeepLinkMetadata.encode(m.deepLinkMetadata, w.uint32(10).fork()).ldelim();
            return w;
        };

        BotAgentMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotAgentMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.deepLinkMetadata = $root.WAAICommon.BotAgentDeepLinkMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotAgentMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotAgentMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotAgentMetadata();
            if (d.deepLinkMetadata != null) {
                if (typeof d.deepLinkMetadata !== "object")
                    throw TypeError(".WAAICommon.BotAgentMetadata.deepLinkMetadata: object expected");
                m.deepLinkMetadata = $root.WAAICommon.BotAgentDeepLinkMetadata.fromObject(d.deepLinkMetadata, n + 1);
            }
            return m;
        };

        BotAgentMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.deepLinkMetadata != null && m.hasOwnProperty("deepLinkMetadata")) {
                d.deepLinkMetadata = $root.WAAICommon.BotAgentDeepLinkMetadata.toObject(m.deepLinkMetadata, o);
                if (o.oneofs)
                    d._deepLinkMetadata = "deepLinkMetadata";
            }
            return d;
        };

        BotAgentMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotAgentMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotAgentMetadata";
        };

        return BotAgentMetadata;
    })();

    WAAICommon.BotAgentDeepLinkMetadata = (function() {

        function BotAgentDeepLinkMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotAgentDeepLinkMetadata.prototype.token = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BotAgentDeepLinkMetadata.prototype, "_token", {
            get: $util.oneOfGetter($oneOfFields = ["token"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BotAgentDeepLinkMetadata.create = function create(properties) {
            return new BotAgentDeepLinkMetadata(properties);
        };

        BotAgentDeepLinkMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(10).string(m.token);
            return w;
        };

        BotAgentDeepLinkMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommon.BotAgentDeepLinkMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.token = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BotAgentDeepLinkMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommon.BotAgentDeepLinkMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommon.BotAgentDeepLinkMetadata();
            if (d.token != null) {
                m.token = String(d.token);
            }
            return m;
        };

        BotAgentDeepLinkMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.token != null && m.hasOwnProperty("token")) {
                d.token = m.token;
                if (o.oneofs)
                    d._token = "token";
            }
            return d;
        };

        BotAgentDeepLinkMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotAgentDeepLinkMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommon.BotAgentDeepLinkMetadata";
        };

        return BotAgentDeepLinkMetadata;
    })();

    return WAAICommon;
})();


export { $root as default };

