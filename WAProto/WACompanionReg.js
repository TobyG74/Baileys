/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WACompanionReg = $root.WACompanionReg = (() => {

    const WACompanionReg = {};

    WACompanionReg.DeviceProps = (function() {

        function DeviceProps(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceProps.prototype.os = null;
        DeviceProps.prototype.version = null;
        DeviceProps.prototype.platformType = null;
        DeviceProps.prototype.requireFullSync = null;
        DeviceProps.prototype.historySyncConfig = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_os", {
            get: $util.oneOfGetter($oneOfFields = ["os"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_platformType", {
            get: $util.oneOfGetter($oneOfFields = ["platformType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_requireFullSync", {
            get: $util.oneOfGetter($oneOfFields = ["requireFullSync"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceProps.prototype, "_historySyncConfig", {
            get: $util.oneOfGetter($oneOfFields = ["historySyncConfig"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeviceProps.create = function create(properties) {
            return new DeviceProps(properties);
        };

        DeviceProps.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.os != null && Object.hasOwnProperty.call(m, "os"))
                w.uint32(10).string(m.os);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                $root.WACompanionReg.DeviceProps.AppVersion.encode(m.version, w.uint32(18).fork()).ldelim();
            if (m.platformType != null && Object.hasOwnProperty.call(m, "platformType"))
                w.uint32(24).int32(m.platformType);
            if (m.requireFullSync != null && Object.hasOwnProperty.call(m, "requireFullSync"))
                w.uint32(32).bool(m.requireFullSync);
            if (m.historySyncConfig != null && Object.hasOwnProperty.call(m, "historySyncConfig"))
                $root.WACompanionReg.DeviceProps.HistorySyncConfig.encode(m.historySyncConfig, w.uint32(42).fork()).ldelim();
            return w;
        };

        DeviceProps.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.DeviceProps();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.os = r.string();
                        break;
                    }
                case 2: {
                        m.version = $root.WACompanionReg.DeviceProps.AppVersion.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.platformType = r.int32();
                        break;
                    }
                case 4: {
                        m.requireFullSync = r.bool();
                        break;
                    }
                case 5: {
                        m.historySyncConfig = $root.WACompanionReg.DeviceProps.HistorySyncConfig.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeviceProps.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.DeviceProps)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.DeviceProps();
            if (d.os != null) {
                m.os = String(d.os);
            }
            if (d.version != null) {
                if (typeof d.version !== "object")
                    throw TypeError(".WACompanionReg.DeviceProps.version: object expected");
                m.version = $root.WACompanionReg.DeviceProps.AppVersion.fromObject(d.version, n + 1);
            }
            switch (d.platformType) {
            default:
                if (typeof d.platformType === "number") {
                    m.platformType = d.platformType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.platformType = 0;
                break;
            case "CHROME":
            case 1:
                m.platformType = 1;
                break;
            case "FIREFOX":
            case 2:
                m.platformType = 2;
                break;
            case "IE":
            case 3:
                m.platformType = 3;
                break;
            case "OPERA":
            case 4:
                m.platformType = 4;
                break;
            case "SAFARI":
            case 5:
                m.platformType = 5;
                break;
            case "EDGE":
            case 6:
                m.platformType = 6;
                break;
            case "DESKTOP":
            case 7:
                m.platformType = 7;
                break;
            case "IPAD":
            case 8:
                m.platformType = 8;
                break;
            case "ANDROID_TABLET":
            case 9:
                m.platformType = 9;
                break;
            case "OHANA":
            case 10:
                m.platformType = 10;
                break;
            case "ALOHA":
            case 11:
                m.platformType = 11;
                break;
            case "CATALINA":
            case 12:
                m.platformType = 12;
                break;
            case "TCL_TV":
            case 13:
                m.platformType = 13;
                break;
            case "IOS_PHONE":
            case 14:
                m.platformType = 14;
                break;
            case "IOS_CATALYST":
            case 15:
                m.platformType = 15;
                break;
            case "ANDROID_PHONE":
            case 16:
                m.platformType = 16;
                break;
            case "ANDROID_AMBIGUOUS":
            case 17:
                m.platformType = 17;
                break;
            case "WEAR_OS":
            case 18:
                m.platformType = 18;
                break;
            case "AR_WRIST":
            case 19:
                m.platformType = 19;
                break;
            case "AR_DEVICE":
            case 20:
                m.platformType = 20;
                break;
            case "UWP":
            case 21:
                m.platformType = 21;
                break;
            case "VR":
            case 22:
                m.platformType = 22;
                break;
            case "CLOUD_API":
            case 23:
                m.platformType = 23;
                break;
            case "SMARTGLASSES":
            case 24:
                m.platformType = 24;
                break;
            }
            if (d.requireFullSync != null) {
                m.requireFullSync = Boolean(d.requireFullSync);
            }
            if (d.historySyncConfig != null) {
                if (typeof d.historySyncConfig !== "object")
                    throw TypeError(".WACompanionReg.DeviceProps.historySyncConfig: object expected");
                m.historySyncConfig = $root.WACompanionReg.DeviceProps.HistorySyncConfig.fromObject(d.historySyncConfig, n + 1);
            }
            return m;
        };

        DeviceProps.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.os != null && m.hasOwnProperty("os")) {
                d.os = m.os;
                if (o.oneofs)
                    d._os = "os";
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = $root.WACompanionReg.DeviceProps.AppVersion.toObject(m.version, o);
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.platformType != null && m.hasOwnProperty("platformType")) {
                d.platformType = o.enums === String ? $root.WACompanionReg.DeviceProps.PlatformType[m.platformType] === undefined ? m.platformType : $root.WACompanionReg.DeviceProps.PlatformType[m.platformType] : m.platformType;
                if (o.oneofs)
                    d._platformType = "platformType";
            }
            if (m.requireFullSync != null && m.hasOwnProperty("requireFullSync")) {
                d.requireFullSync = m.requireFullSync;
                if (o.oneofs)
                    d._requireFullSync = "requireFullSync";
            }
            if (m.historySyncConfig != null && m.hasOwnProperty("historySyncConfig")) {
                d.historySyncConfig = $root.WACompanionReg.DeviceProps.HistorySyncConfig.toObject(m.historySyncConfig, o);
                if (o.oneofs)
                    d._historySyncConfig = "historySyncConfig";
            }
            return d;
        };

        DeviceProps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeviceProps.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.DeviceProps";
        };

        DeviceProps.PlatformType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHROME"] = 1;
            values[valuesById[2] = "FIREFOX"] = 2;
            values[valuesById[3] = "IE"] = 3;
            values[valuesById[4] = "OPERA"] = 4;
            values[valuesById[5] = "SAFARI"] = 5;
            values[valuesById[6] = "EDGE"] = 6;
            values[valuesById[7] = "DESKTOP"] = 7;
            values[valuesById[8] = "IPAD"] = 8;
            values[valuesById[9] = "ANDROID_TABLET"] = 9;
            values[valuesById[10] = "OHANA"] = 10;
            values[valuesById[11] = "ALOHA"] = 11;
            values[valuesById[12] = "CATALINA"] = 12;
            values[valuesById[13] = "TCL_TV"] = 13;
            values[valuesById[14] = "IOS_PHONE"] = 14;
            values[valuesById[15] = "IOS_CATALYST"] = 15;
            values[valuesById[16] = "ANDROID_PHONE"] = 16;
            values[valuesById[17] = "ANDROID_AMBIGUOUS"] = 17;
            values[valuesById[18] = "WEAR_OS"] = 18;
            values[valuesById[19] = "AR_WRIST"] = 19;
            values[valuesById[20] = "AR_DEVICE"] = 20;
            values[valuesById[21] = "UWP"] = 21;
            values[valuesById[22] = "VR"] = 22;
            values[valuesById[23] = "CLOUD_API"] = 23;
            values[valuesById[24] = "SMARTGLASSES"] = 24;
            return values;
        })();

        DeviceProps.HistorySyncConfig = (function() {

            function HistorySyncConfig(p) {
                this.supportedBotChannelFbids = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncConfig.prototype.fullSyncDaysLimit = null;
            HistorySyncConfig.prototype.fullSyncSizeMbLimit = null;
            HistorySyncConfig.prototype.storageQuotaMb = null;
            HistorySyncConfig.prototype.inlineInitialPayloadInE2EeMsg = null;
            HistorySyncConfig.prototype.recentSyncDaysLimit = null;
            HistorySyncConfig.prototype.supportCallLogHistory = null;
            HistorySyncConfig.prototype.supportBotUserAgentChatHistory = null;
            HistorySyncConfig.prototype.supportCagReactionsAndPolls = null;
            HistorySyncConfig.prototype.supportBizHostedMsg = null;
            HistorySyncConfig.prototype.supportRecentSyncChunkMessageCountTuning = null;
            HistorySyncConfig.prototype.supportHostedGroupMsg = null;
            HistorySyncConfig.prototype.supportFbidBotChatHistory = null;
            HistorySyncConfig.prototype.supportAddOnHistorySyncMigration = null;
            HistorySyncConfig.prototype.supportMessageAssociation = null;
            HistorySyncConfig.prototype.supportGroupHistory = null;
            HistorySyncConfig.prototype.onDemandReady = null;
            HistorySyncConfig.prototype.supportGuestChat = null;
            HistorySyncConfig.prototype.completeOnDemandReady = null;
            HistorySyncConfig.prototype.thumbnailSyncDaysLimit = null;
            HistorySyncConfig.prototype.initialSyncMaxMessagesPerChat = null;
            HistorySyncConfig.prototype.supportManusHistory = null;
            HistorySyncConfig.prototype.supportHatchHistory = null;
            HistorySyncConfig.prototype.supportedBotChannelFbids = $util.emptyArray;
            HistorySyncConfig.prototype.supportInlineContacts = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_fullSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["fullSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_fullSyncSizeMbLimit", {
                get: $util.oneOfGetter($oneOfFields = ["fullSyncSizeMbLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_storageQuotaMb", {
                get: $util.oneOfGetter($oneOfFields = ["storageQuotaMb"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_inlineInitialPayloadInE2EeMsg", {
                get: $util.oneOfGetter($oneOfFields = ["inlineInitialPayloadInE2EeMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_recentSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["recentSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportCallLogHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportCallLogHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportBotUserAgentChatHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportBotUserAgentChatHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportCagReactionsAndPolls", {
                get: $util.oneOfGetter($oneOfFields = ["supportCagReactionsAndPolls"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportBizHostedMsg", {
                get: $util.oneOfGetter($oneOfFields = ["supportBizHostedMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportRecentSyncChunkMessageCountTuning", {
                get: $util.oneOfGetter($oneOfFields = ["supportRecentSyncChunkMessageCountTuning"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportHostedGroupMsg", {
                get: $util.oneOfGetter($oneOfFields = ["supportHostedGroupMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportFbidBotChatHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportFbidBotChatHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportAddOnHistorySyncMigration", {
                get: $util.oneOfGetter($oneOfFields = ["supportAddOnHistorySyncMigration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportMessageAssociation", {
                get: $util.oneOfGetter($oneOfFields = ["supportMessageAssociation"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportGroupHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportGroupHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_onDemandReady", {
                get: $util.oneOfGetter($oneOfFields = ["onDemandReady"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportGuestChat", {
                get: $util.oneOfGetter($oneOfFields = ["supportGuestChat"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_completeOnDemandReady", {
                get: $util.oneOfGetter($oneOfFields = ["completeOnDemandReady"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_thumbnailSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_initialSyncMaxMessagesPerChat", {
                get: $util.oneOfGetter($oneOfFields = ["initialSyncMaxMessagesPerChat"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportManusHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportManusHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportHatchHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportHatchHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(HistorySyncConfig.prototype, "_supportInlineContacts", {
                get: $util.oneOfGetter($oneOfFields = ["supportInlineContacts"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            HistorySyncConfig.create = function create(properties) {
                return new HistorySyncConfig(properties);
            };

            HistorySyncConfig.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fullSyncDaysLimit != null && Object.hasOwnProperty.call(m, "fullSyncDaysLimit"))
                    w.uint32(8).uint32(m.fullSyncDaysLimit);
                if (m.fullSyncSizeMbLimit != null && Object.hasOwnProperty.call(m, "fullSyncSizeMbLimit"))
                    w.uint32(16).uint32(m.fullSyncSizeMbLimit);
                if (m.storageQuotaMb != null && Object.hasOwnProperty.call(m, "storageQuotaMb"))
                    w.uint32(24).uint32(m.storageQuotaMb);
                if (m.inlineInitialPayloadInE2EeMsg != null && Object.hasOwnProperty.call(m, "inlineInitialPayloadInE2EeMsg"))
                    w.uint32(32).bool(m.inlineInitialPayloadInE2EeMsg);
                if (m.recentSyncDaysLimit != null && Object.hasOwnProperty.call(m, "recentSyncDaysLimit"))
                    w.uint32(40).uint32(m.recentSyncDaysLimit);
                if (m.supportCallLogHistory != null && Object.hasOwnProperty.call(m, "supportCallLogHistory"))
                    w.uint32(48).bool(m.supportCallLogHistory);
                if (m.supportBotUserAgentChatHistory != null && Object.hasOwnProperty.call(m, "supportBotUserAgentChatHistory"))
                    w.uint32(56).bool(m.supportBotUserAgentChatHistory);
                if (m.supportCagReactionsAndPolls != null && Object.hasOwnProperty.call(m, "supportCagReactionsAndPolls"))
                    w.uint32(64).bool(m.supportCagReactionsAndPolls);
                if (m.supportBizHostedMsg != null && Object.hasOwnProperty.call(m, "supportBizHostedMsg"))
                    w.uint32(72).bool(m.supportBizHostedMsg);
                if (m.supportRecentSyncChunkMessageCountTuning != null && Object.hasOwnProperty.call(m, "supportRecentSyncChunkMessageCountTuning"))
                    w.uint32(80).bool(m.supportRecentSyncChunkMessageCountTuning);
                if (m.supportHostedGroupMsg != null && Object.hasOwnProperty.call(m, "supportHostedGroupMsg"))
                    w.uint32(88).bool(m.supportHostedGroupMsg);
                if (m.supportFbidBotChatHistory != null && Object.hasOwnProperty.call(m, "supportFbidBotChatHistory"))
                    w.uint32(96).bool(m.supportFbidBotChatHistory);
                if (m.supportAddOnHistorySyncMigration != null && Object.hasOwnProperty.call(m, "supportAddOnHistorySyncMigration"))
                    w.uint32(104).bool(m.supportAddOnHistorySyncMigration);
                if (m.supportMessageAssociation != null && Object.hasOwnProperty.call(m, "supportMessageAssociation"))
                    w.uint32(112).bool(m.supportMessageAssociation);
                if (m.supportGroupHistory != null && Object.hasOwnProperty.call(m, "supportGroupHistory"))
                    w.uint32(120).bool(m.supportGroupHistory);
                if (m.onDemandReady != null && Object.hasOwnProperty.call(m, "onDemandReady"))
                    w.uint32(128).bool(m.onDemandReady);
                if (m.supportGuestChat != null && Object.hasOwnProperty.call(m, "supportGuestChat"))
                    w.uint32(136).bool(m.supportGuestChat);
                if (m.completeOnDemandReady != null && Object.hasOwnProperty.call(m, "completeOnDemandReady"))
                    w.uint32(144).bool(m.completeOnDemandReady);
                if (m.thumbnailSyncDaysLimit != null && Object.hasOwnProperty.call(m, "thumbnailSyncDaysLimit"))
                    w.uint32(152).uint32(m.thumbnailSyncDaysLimit);
                if (m.initialSyncMaxMessagesPerChat != null && Object.hasOwnProperty.call(m, "initialSyncMaxMessagesPerChat"))
                    w.uint32(160).uint32(m.initialSyncMaxMessagesPerChat);
                if (m.supportManusHistory != null && Object.hasOwnProperty.call(m, "supportManusHistory"))
                    w.uint32(168).bool(m.supportManusHistory);
                if (m.supportHatchHistory != null && Object.hasOwnProperty.call(m, "supportHatchHistory"))
                    w.uint32(176).bool(m.supportHatchHistory);
                if (m.supportedBotChannelFbids != null && m.supportedBotChannelFbids.length) {
                    for (var i = 0; i < m.supportedBotChannelFbids.length; ++i)
                        w.uint32(186).string(m.supportedBotChannelFbids[i]);
                }
                if (m.supportInlineContacts != null && Object.hasOwnProperty.call(m, "supportInlineContacts"))
                    w.uint32(192).bool(m.supportInlineContacts);
                return w;
            };

            HistorySyncConfig.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.DeviceProps.HistorySyncConfig();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fullSyncDaysLimit = r.uint32();
                            break;
                        }
                    case 2: {
                            m.fullSyncSizeMbLimit = r.uint32();
                            break;
                        }
                    case 3: {
                            m.storageQuotaMb = r.uint32();
                            break;
                        }
                    case 4: {
                            m.inlineInitialPayloadInE2EeMsg = r.bool();
                            break;
                        }
                    case 5: {
                            m.recentSyncDaysLimit = r.uint32();
                            break;
                        }
                    case 6: {
                            m.supportCallLogHistory = r.bool();
                            break;
                        }
                    case 7: {
                            m.supportBotUserAgentChatHistory = r.bool();
                            break;
                        }
                    case 8: {
                            m.supportCagReactionsAndPolls = r.bool();
                            break;
                        }
                    case 9: {
                            m.supportBizHostedMsg = r.bool();
                            break;
                        }
                    case 10: {
                            m.supportRecentSyncChunkMessageCountTuning = r.bool();
                            break;
                        }
                    case 11: {
                            m.supportHostedGroupMsg = r.bool();
                            break;
                        }
                    case 12: {
                            m.supportFbidBotChatHistory = r.bool();
                            break;
                        }
                    case 13: {
                            m.supportAddOnHistorySyncMigration = r.bool();
                            break;
                        }
                    case 14: {
                            m.supportMessageAssociation = r.bool();
                            break;
                        }
                    case 15: {
                            m.supportGroupHistory = r.bool();
                            break;
                        }
                    case 16: {
                            m.onDemandReady = r.bool();
                            break;
                        }
                    case 17: {
                            m.supportGuestChat = r.bool();
                            break;
                        }
                    case 18: {
                            m.completeOnDemandReady = r.bool();
                            break;
                        }
                    case 19: {
                            m.thumbnailSyncDaysLimit = r.uint32();
                            break;
                        }
                    case 20: {
                            m.initialSyncMaxMessagesPerChat = r.uint32();
                            break;
                        }
                    case 21: {
                            m.supportManusHistory = r.bool();
                            break;
                        }
                    case 22: {
                            m.supportHatchHistory = r.bool();
                            break;
                        }
                    case 23: {
                            if (!(m.supportedBotChannelFbids && m.supportedBotChannelFbids.length))
                                m.supportedBotChannelFbids = [];
                            m.supportedBotChannelFbids.push(r.string());
                            break;
                        }
                    case 24: {
                            m.supportInlineContacts = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            HistorySyncConfig.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WACompanionReg.DeviceProps.HistorySyncConfig)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WACompanionReg.DeviceProps.HistorySyncConfig();
                if (d.fullSyncDaysLimit != null) {
                    m.fullSyncDaysLimit = d.fullSyncDaysLimit >>> 0;
                }
                if (d.fullSyncSizeMbLimit != null) {
                    m.fullSyncSizeMbLimit = d.fullSyncSizeMbLimit >>> 0;
                }
                if (d.storageQuotaMb != null) {
                    m.storageQuotaMb = d.storageQuotaMb >>> 0;
                }
                if (d.inlineInitialPayloadInE2EeMsg != null) {
                    m.inlineInitialPayloadInE2EeMsg = Boolean(d.inlineInitialPayloadInE2EeMsg);
                }
                if (d.recentSyncDaysLimit != null) {
                    m.recentSyncDaysLimit = d.recentSyncDaysLimit >>> 0;
                }
                if (d.supportCallLogHistory != null) {
                    m.supportCallLogHistory = Boolean(d.supportCallLogHistory);
                }
                if (d.supportBotUserAgentChatHistory != null) {
                    m.supportBotUserAgentChatHistory = Boolean(d.supportBotUserAgentChatHistory);
                }
                if (d.supportCagReactionsAndPolls != null) {
                    m.supportCagReactionsAndPolls = Boolean(d.supportCagReactionsAndPolls);
                }
                if (d.supportBizHostedMsg != null) {
                    m.supportBizHostedMsg = Boolean(d.supportBizHostedMsg);
                }
                if (d.supportRecentSyncChunkMessageCountTuning != null) {
                    m.supportRecentSyncChunkMessageCountTuning = Boolean(d.supportRecentSyncChunkMessageCountTuning);
                }
                if (d.supportHostedGroupMsg != null) {
                    m.supportHostedGroupMsg = Boolean(d.supportHostedGroupMsg);
                }
                if (d.supportFbidBotChatHistory != null) {
                    m.supportFbidBotChatHistory = Boolean(d.supportFbidBotChatHistory);
                }
                if (d.supportAddOnHistorySyncMigration != null) {
                    m.supportAddOnHistorySyncMigration = Boolean(d.supportAddOnHistorySyncMigration);
                }
                if (d.supportMessageAssociation != null) {
                    m.supportMessageAssociation = Boolean(d.supportMessageAssociation);
                }
                if (d.supportGroupHistory != null) {
                    m.supportGroupHistory = Boolean(d.supportGroupHistory);
                }
                if (d.onDemandReady != null) {
                    m.onDemandReady = Boolean(d.onDemandReady);
                }
                if (d.supportGuestChat != null) {
                    m.supportGuestChat = Boolean(d.supportGuestChat);
                }
                if (d.completeOnDemandReady != null) {
                    m.completeOnDemandReady = Boolean(d.completeOnDemandReady);
                }
                if (d.thumbnailSyncDaysLimit != null) {
                    m.thumbnailSyncDaysLimit = d.thumbnailSyncDaysLimit >>> 0;
                }
                if (d.initialSyncMaxMessagesPerChat != null) {
                    m.initialSyncMaxMessagesPerChat = d.initialSyncMaxMessagesPerChat >>> 0;
                }
                if (d.supportManusHistory != null) {
                    m.supportManusHistory = Boolean(d.supportManusHistory);
                }
                if (d.supportHatchHistory != null) {
                    m.supportHatchHistory = Boolean(d.supportHatchHistory);
                }
                if (d.supportedBotChannelFbids) {
                    if (!Array.isArray(d.supportedBotChannelFbids))
                        throw TypeError(".WACompanionReg.DeviceProps.HistorySyncConfig.supportedBotChannelFbids: array expected");
                    m.supportedBotChannelFbids = [];
                    for (var i = 0; i < d.supportedBotChannelFbids.length; ++i) {
                        m.supportedBotChannelFbids[i] = String(d.supportedBotChannelFbids[i]);
                    }
                }
                if (d.supportInlineContacts != null) {
                    m.supportInlineContacts = Boolean(d.supportInlineContacts);
                }
                return m;
            };

            HistorySyncConfig.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.supportedBotChannelFbids = [];
                }
                if (m.fullSyncDaysLimit != null && m.hasOwnProperty("fullSyncDaysLimit")) {
                    d.fullSyncDaysLimit = m.fullSyncDaysLimit;
                    if (o.oneofs)
                        d._fullSyncDaysLimit = "fullSyncDaysLimit";
                }
                if (m.fullSyncSizeMbLimit != null && m.hasOwnProperty("fullSyncSizeMbLimit")) {
                    d.fullSyncSizeMbLimit = m.fullSyncSizeMbLimit;
                    if (o.oneofs)
                        d._fullSyncSizeMbLimit = "fullSyncSizeMbLimit";
                }
                if (m.storageQuotaMb != null && m.hasOwnProperty("storageQuotaMb")) {
                    d.storageQuotaMb = m.storageQuotaMb;
                    if (o.oneofs)
                        d._storageQuotaMb = "storageQuotaMb";
                }
                if (m.inlineInitialPayloadInE2EeMsg != null && m.hasOwnProperty("inlineInitialPayloadInE2EeMsg")) {
                    d.inlineInitialPayloadInE2EeMsg = m.inlineInitialPayloadInE2EeMsg;
                    if (o.oneofs)
                        d._inlineInitialPayloadInE2EeMsg = "inlineInitialPayloadInE2EeMsg";
                }
                if (m.recentSyncDaysLimit != null && m.hasOwnProperty("recentSyncDaysLimit")) {
                    d.recentSyncDaysLimit = m.recentSyncDaysLimit;
                    if (o.oneofs)
                        d._recentSyncDaysLimit = "recentSyncDaysLimit";
                }
                if (m.supportCallLogHistory != null && m.hasOwnProperty("supportCallLogHistory")) {
                    d.supportCallLogHistory = m.supportCallLogHistory;
                    if (o.oneofs)
                        d._supportCallLogHistory = "supportCallLogHistory";
                }
                if (m.supportBotUserAgentChatHistory != null && m.hasOwnProperty("supportBotUserAgentChatHistory")) {
                    d.supportBotUserAgentChatHistory = m.supportBotUserAgentChatHistory;
                    if (o.oneofs)
                        d._supportBotUserAgentChatHistory = "supportBotUserAgentChatHistory";
                }
                if (m.supportCagReactionsAndPolls != null && m.hasOwnProperty("supportCagReactionsAndPolls")) {
                    d.supportCagReactionsAndPolls = m.supportCagReactionsAndPolls;
                    if (o.oneofs)
                        d._supportCagReactionsAndPolls = "supportCagReactionsAndPolls";
                }
                if (m.supportBizHostedMsg != null && m.hasOwnProperty("supportBizHostedMsg")) {
                    d.supportBizHostedMsg = m.supportBizHostedMsg;
                    if (o.oneofs)
                        d._supportBizHostedMsg = "supportBizHostedMsg";
                }
                if (m.supportRecentSyncChunkMessageCountTuning != null && m.hasOwnProperty("supportRecentSyncChunkMessageCountTuning")) {
                    d.supportRecentSyncChunkMessageCountTuning = m.supportRecentSyncChunkMessageCountTuning;
                    if (o.oneofs)
                        d._supportRecentSyncChunkMessageCountTuning = "supportRecentSyncChunkMessageCountTuning";
                }
                if (m.supportHostedGroupMsg != null && m.hasOwnProperty("supportHostedGroupMsg")) {
                    d.supportHostedGroupMsg = m.supportHostedGroupMsg;
                    if (o.oneofs)
                        d._supportHostedGroupMsg = "supportHostedGroupMsg";
                }
                if (m.supportFbidBotChatHistory != null && m.hasOwnProperty("supportFbidBotChatHistory")) {
                    d.supportFbidBotChatHistory = m.supportFbidBotChatHistory;
                    if (o.oneofs)
                        d._supportFbidBotChatHistory = "supportFbidBotChatHistory";
                }
                if (m.supportAddOnHistorySyncMigration != null && m.hasOwnProperty("supportAddOnHistorySyncMigration")) {
                    d.supportAddOnHistorySyncMigration = m.supportAddOnHistorySyncMigration;
                    if (o.oneofs)
                        d._supportAddOnHistorySyncMigration = "supportAddOnHistorySyncMigration";
                }
                if (m.supportMessageAssociation != null && m.hasOwnProperty("supportMessageAssociation")) {
                    d.supportMessageAssociation = m.supportMessageAssociation;
                    if (o.oneofs)
                        d._supportMessageAssociation = "supportMessageAssociation";
                }
                if (m.supportGroupHistory != null && m.hasOwnProperty("supportGroupHistory")) {
                    d.supportGroupHistory = m.supportGroupHistory;
                    if (o.oneofs)
                        d._supportGroupHistory = "supportGroupHistory";
                }
                if (m.onDemandReady != null && m.hasOwnProperty("onDemandReady")) {
                    d.onDemandReady = m.onDemandReady;
                    if (o.oneofs)
                        d._onDemandReady = "onDemandReady";
                }
                if (m.supportGuestChat != null && m.hasOwnProperty("supportGuestChat")) {
                    d.supportGuestChat = m.supportGuestChat;
                    if (o.oneofs)
                        d._supportGuestChat = "supportGuestChat";
                }
                if (m.completeOnDemandReady != null && m.hasOwnProperty("completeOnDemandReady")) {
                    d.completeOnDemandReady = m.completeOnDemandReady;
                    if (o.oneofs)
                        d._completeOnDemandReady = "completeOnDemandReady";
                }
                if (m.thumbnailSyncDaysLimit != null && m.hasOwnProperty("thumbnailSyncDaysLimit")) {
                    d.thumbnailSyncDaysLimit = m.thumbnailSyncDaysLimit;
                    if (o.oneofs)
                        d._thumbnailSyncDaysLimit = "thumbnailSyncDaysLimit";
                }
                if (m.initialSyncMaxMessagesPerChat != null && m.hasOwnProperty("initialSyncMaxMessagesPerChat")) {
                    d.initialSyncMaxMessagesPerChat = m.initialSyncMaxMessagesPerChat;
                    if (o.oneofs)
                        d._initialSyncMaxMessagesPerChat = "initialSyncMaxMessagesPerChat";
                }
                if (m.supportManusHistory != null && m.hasOwnProperty("supportManusHistory")) {
                    d.supportManusHistory = m.supportManusHistory;
                    if (o.oneofs)
                        d._supportManusHistory = "supportManusHistory";
                }
                if (m.supportHatchHistory != null && m.hasOwnProperty("supportHatchHistory")) {
                    d.supportHatchHistory = m.supportHatchHistory;
                    if (o.oneofs)
                        d._supportHatchHistory = "supportHatchHistory";
                }
                if (m.supportedBotChannelFbids && m.supportedBotChannelFbids.length) {
                    d.supportedBotChannelFbids = [];
                    for (var j = 0; j < m.supportedBotChannelFbids.length; ++j) {
                        d.supportedBotChannelFbids[j] = m.supportedBotChannelFbids[j];
                    }
                }
                if (m.supportInlineContacts != null && m.hasOwnProperty("supportInlineContacts")) {
                    d.supportInlineContacts = m.supportInlineContacts;
                    if (o.oneofs)
                        d._supportInlineContacts = "supportInlineContacts";
                }
                return d;
            };

            HistorySyncConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HistorySyncConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WACompanionReg.DeviceProps.HistorySyncConfig";
            };

            return HistorySyncConfig;
        })();

        DeviceProps.AppVersion = (function() {

            function AppVersion(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppVersion.prototype.primary = null;
            AppVersion.prototype.secondary = null;
            AppVersion.prototype.tertiary = null;
            AppVersion.prototype.quaternary = null;
            AppVersion.prototype.quinary = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AppVersion.prototype, "_primary", {
                get: $util.oneOfGetter($oneOfFields = ["primary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AppVersion.prototype, "_secondary", {
                get: $util.oneOfGetter($oneOfFields = ["secondary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AppVersion.prototype, "_tertiary", {
                get: $util.oneOfGetter($oneOfFields = ["tertiary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AppVersion.prototype, "_quaternary", {
                get: $util.oneOfGetter($oneOfFields = ["quaternary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AppVersion.prototype, "_quinary", {
                get: $util.oneOfGetter($oneOfFields = ["quinary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AppVersion.create = function create(properties) {
                return new AppVersion(properties);
            };

            AppVersion.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.primary != null && Object.hasOwnProperty.call(m, "primary"))
                    w.uint32(8).uint32(m.primary);
                if (m.secondary != null && Object.hasOwnProperty.call(m, "secondary"))
                    w.uint32(16).uint32(m.secondary);
                if (m.tertiary != null && Object.hasOwnProperty.call(m, "tertiary"))
                    w.uint32(24).uint32(m.tertiary);
                if (m.quaternary != null && Object.hasOwnProperty.call(m, "quaternary"))
                    w.uint32(32).uint32(m.quaternary);
                if (m.quinary != null && Object.hasOwnProperty.call(m, "quinary"))
                    w.uint32(40).uint32(m.quinary);
                return w;
            };

            AppVersion.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.DeviceProps.AppVersion();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.primary = r.uint32();
                            break;
                        }
                    case 2: {
                            m.secondary = r.uint32();
                            break;
                        }
                    case 3: {
                            m.tertiary = r.uint32();
                            break;
                        }
                    case 4: {
                            m.quaternary = r.uint32();
                            break;
                        }
                    case 5: {
                            m.quinary = r.uint32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AppVersion.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WACompanionReg.DeviceProps.AppVersion)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WACompanionReg.DeviceProps.AppVersion();
                if (d.primary != null) {
                    m.primary = d.primary >>> 0;
                }
                if (d.secondary != null) {
                    m.secondary = d.secondary >>> 0;
                }
                if (d.tertiary != null) {
                    m.tertiary = d.tertiary >>> 0;
                }
                if (d.quaternary != null) {
                    m.quaternary = d.quaternary >>> 0;
                }
                if (d.quinary != null) {
                    m.quinary = d.quinary >>> 0;
                }
                return m;
            };

            AppVersion.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.primary != null && m.hasOwnProperty("primary")) {
                    d.primary = m.primary;
                    if (o.oneofs)
                        d._primary = "primary";
                }
                if (m.secondary != null && m.hasOwnProperty("secondary")) {
                    d.secondary = m.secondary;
                    if (o.oneofs)
                        d._secondary = "secondary";
                }
                if (m.tertiary != null && m.hasOwnProperty("tertiary")) {
                    d.tertiary = m.tertiary;
                    if (o.oneofs)
                        d._tertiary = "tertiary";
                }
                if (m.quaternary != null && m.hasOwnProperty("quaternary")) {
                    d.quaternary = m.quaternary;
                    if (o.oneofs)
                        d._quaternary = "quaternary";
                }
                if (m.quinary != null && m.hasOwnProperty("quinary")) {
                    d.quinary = m.quinary;
                    if (o.oneofs)
                        d._quinary = "quinary";
                }
                return d;
            };

            AppVersion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AppVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WACompanionReg.DeviceProps.AppVersion";
            };

            return AppVersion;
        })();

        return DeviceProps;
    })();

    WACompanionReg.CompanionEphemeralIdentity = (function() {

        function CompanionEphemeralIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CompanionEphemeralIdentity.prototype.publicKey = null;
        CompanionEphemeralIdentity.prototype.deviceType = null;
        CompanionEphemeralIdentity.prototype.ref = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CompanionEphemeralIdentity.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CompanionEphemeralIdentity.prototype, "_deviceType", {
            get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CompanionEphemeralIdentity.prototype, "_ref", {
            get: $util.oneOfGetter($oneOfFields = ["ref"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CompanionEphemeralIdentity.create = function create(properties) {
            return new CompanionEphemeralIdentity(properties);
        };

        CompanionEphemeralIdentity.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(10).bytes(m.publicKey);
            if (m.deviceType != null && Object.hasOwnProperty.call(m, "deviceType"))
                w.uint32(16).int32(m.deviceType);
            if (m.ref != null && Object.hasOwnProperty.call(m, "ref"))
                w.uint32(26).string(m.ref);
            return w;
        };

        CompanionEphemeralIdentity.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.CompanionEphemeralIdentity();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.publicKey = r.bytes();
                        break;
                    }
                case 2: {
                        m.deviceType = r.int32();
                        break;
                    }
                case 3: {
                        m.ref = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CompanionEphemeralIdentity.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.CompanionEphemeralIdentity)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.CompanionEphemeralIdentity();
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            switch (d.deviceType) {
            default:
                if (typeof d.deviceType === "number") {
                    m.deviceType = d.deviceType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.deviceType = 0;
                break;
            case "CHROME":
            case 1:
                m.deviceType = 1;
                break;
            case "FIREFOX":
            case 2:
                m.deviceType = 2;
                break;
            case "IE":
            case 3:
                m.deviceType = 3;
                break;
            case "OPERA":
            case 4:
                m.deviceType = 4;
                break;
            case "SAFARI":
            case 5:
                m.deviceType = 5;
                break;
            case "EDGE":
            case 6:
                m.deviceType = 6;
                break;
            case "DESKTOP":
            case 7:
                m.deviceType = 7;
                break;
            case "IPAD":
            case 8:
                m.deviceType = 8;
                break;
            case "ANDROID_TABLET":
            case 9:
                m.deviceType = 9;
                break;
            case "OHANA":
            case 10:
                m.deviceType = 10;
                break;
            case "ALOHA":
            case 11:
                m.deviceType = 11;
                break;
            case "CATALINA":
            case 12:
                m.deviceType = 12;
                break;
            case "TCL_TV":
            case 13:
                m.deviceType = 13;
                break;
            case "IOS_PHONE":
            case 14:
                m.deviceType = 14;
                break;
            case "IOS_CATALYST":
            case 15:
                m.deviceType = 15;
                break;
            case "ANDROID_PHONE":
            case 16:
                m.deviceType = 16;
                break;
            case "ANDROID_AMBIGUOUS":
            case 17:
                m.deviceType = 17;
                break;
            case "WEAR_OS":
            case 18:
                m.deviceType = 18;
                break;
            case "AR_WRIST":
            case 19:
                m.deviceType = 19;
                break;
            case "AR_DEVICE":
            case 20:
                m.deviceType = 20;
                break;
            case "UWP":
            case 21:
                m.deviceType = 21;
                break;
            case "VR":
            case 22:
                m.deviceType = 22;
                break;
            case "CLOUD_API":
            case 23:
                m.deviceType = 23;
                break;
            case "SMARTGLASSES":
            case 24:
                m.deviceType = 24;
                break;
            }
            if (d.ref != null) {
                m.ref = String(d.ref);
            }
            return m;
        };

        CompanionEphemeralIdentity.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                d.publicKey = o.bytes === String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.publicKey) : m.publicKey;
                if (o.oneofs)
                    d._publicKey = "publicKey";
            }
            if (m.deviceType != null && m.hasOwnProperty("deviceType")) {
                d.deviceType = o.enums === String ? $root.WACompanionReg.DeviceProps.PlatformType[m.deviceType] === undefined ? m.deviceType : $root.WACompanionReg.DeviceProps.PlatformType[m.deviceType] : m.deviceType;
                if (o.oneofs)
                    d._deviceType = "deviceType";
            }
            if (m.ref != null && m.hasOwnProperty("ref")) {
                d.ref = m.ref;
                if (o.oneofs)
                    d._ref = "ref";
            }
            return d;
        };

        CompanionEphemeralIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CompanionEphemeralIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.CompanionEphemeralIdentity";
        };

        return CompanionEphemeralIdentity;
    })();

    WACompanionReg.CompanionCommitment = (function() {

        function CompanionCommitment(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CompanionCommitment.prototype.hash = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CompanionCommitment.prototype, "_hash", {
            get: $util.oneOfGetter($oneOfFields = ["hash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CompanionCommitment.create = function create(properties) {
            return new CompanionCommitment(properties);
        };

        CompanionCommitment.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.hash != null && Object.hasOwnProperty.call(m, "hash"))
                w.uint32(10).bytes(m.hash);
            return w;
        };

        CompanionCommitment.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.CompanionCommitment();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.hash = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CompanionCommitment.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.CompanionCommitment)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.CompanionCommitment();
            if (d.hash != null) {
                if (typeof d.hash === "string")
                    $util.base64.decode(d.hash, m.hash = $util.newBuffer($util.base64.length(d.hash)), 0);
                else if (d.hash.length >= 0)
                    m.hash = d.hash;
            }
            return m;
        };

        CompanionCommitment.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.hash != null && m.hasOwnProperty("hash")) {
                d.hash = o.bytes === String ? $util.base64.encode(m.hash, 0, m.hash.length) : o.bytes === Array ? Array.prototype.slice.call(m.hash) : m.hash;
                if (o.oneofs)
                    d._hash = "hash";
            }
            return d;
        };

        CompanionCommitment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CompanionCommitment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.CompanionCommitment";
        };

        return CompanionCommitment;
    })();

    WACompanionReg.ProloguePayload = (function() {

        function ProloguePayload(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ProloguePayload.prototype.companionEphemeralIdentity = null;
        ProloguePayload.prototype.commitment = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ProloguePayload.prototype, "_companionEphemeralIdentity", {
            get: $util.oneOfGetter($oneOfFields = ["companionEphemeralIdentity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ProloguePayload.prototype, "_commitment", {
            get: $util.oneOfGetter($oneOfFields = ["commitment"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ProloguePayload.create = function create(properties) {
            return new ProloguePayload(properties);
        };

        ProloguePayload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.companionEphemeralIdentity != null && Object.hasOwnProperty.call(m, "companionEphemeralIdentity"))
                w.uint32(10).bytes(m.companionEphemeralIdentity);
            if (m.commitment != null && Object.hasOwnProperty.call(m, "commitment"))
                $root.WACompanionReg.CompanionCommitment.encode(m.commitment, w.uint32(18).fork()).ldelim();
            return w;
        };

        ProloguePayload.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.ProloguePayload();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.companionEphemeralIdentity = r.bytes();
                        break;
                    }
                case 2: {
                        m.commitment = $root.WACompanionReg.CompanionCommitment.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ProloguePayload.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.ProloguePayload)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.ProloguePayload();
            if (d.companionEphemeralIdentity != null) {
                if (typeof d.companionEphemeralIdentity === "string")
                    $util.base64.decode(d.companionEphemeralIdentity, m.companionEphemeralIdentity = $util.newBuffer($util.base64.length(d.companionEphemeralIdentity)), 0);
                else if (d.companionEphemeralIdentity.length >= 0)
                    m.companionEphemeralIdentity = d.companionEphemeralIdentity;
            }
            if (d.commitment != null) {
                if (typeof d.commitment !== "object")
                    throw TypeError(".WACompanionReg.ProloguePayload.commitment: object expected");
                m.commitment = $root.WACompanionReg.CompanionCommitment.fromObject(d.commitment, n + 1);
            }
            return m;
        };

        ProloguePayload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.companionEphemeralIdentity != null && m.hasOwnProperty("companionEphemeralIdentity")) {
                d.companionEphemeralIdentity = o.bytes === String ? $util.base64.encode(m.companionEphemeralIdentity, 0, m.companionEphemeralIdentity.length) : o.bytes === Array ? Array.prototype.slice.call(m.companionEphemeralIdentity) : m.companionEphemeralIdentity;
                if (o.oneofs)
                    d._companionEphemeralIdentity = "companionEphemeralIdentity";
            }
            if (m.commitment != null && m.hasOwnProperty("commitment")) {
                d.commitment = $root.WACompanionReg.CompanionCommitment.toObject(m.commitment, o);
                if (o.oneofs)
                    d._commitment = "commitment";
            }
            return d;
        };

        ProloguePayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ProloguePayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.ProloguePayload";
        };

        return ProloguePayload;
    })();

    WACompanionReg.PrimaryEphemeralIdentity = (function() {

        function PrimaryEphemeralIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrimaryEphemeralIdentity.prototype.publicKey = null;
        PrimaryEphemeralIdentity.prototype.nonce = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrimaryEphemeralIdentity.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PrimaryEphemeralIdentity.prototype, "_nonce", {
            get: $util.oneOfGetter($oneOfFields = ["nonce"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PrimaryEphemeralIdentity.create = function create(properties) {
            return new PrimaryEphemeralIdentity(properties);
        };

        PrimaryEphemeralIdentity.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(10).bytes(m.publicKey);
            if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                w.uint32(18).bytes(m.nonce);
            return w;
        };

        PrimaryEphemeralIdentity.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.PrimaryEphemeralIdentity();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.publicKey = r.bytes();
                        break;
                    }
                case 2: {
                        m.nonce = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PrimaryEphemeralIdentity.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.PrimaryEphemeralIdentity)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.PrimaryEphemeralIdentity();
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.nonce != null) {
                if (typeof d.nonce === "string")
                    $util.base64.decode(d.nonce, m.nonce = $util.newBuffer($util.base64.length(d.nonce)), 0);
                else if (d.nonce.length >= 0)
                    m.nonce = d.nonce;
            }
            return m;
        };

        PrimaryEphemeralIdentity.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                d.publicKey = o.bytes === String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.publicKey) : m.publicKey;
                if (o.oneofs)
                    d._publicKey = "publicKey";
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                d.nonce = o.bytes === String ? $util.base64.encode(m.nonce, 0, m.nonce.length) : o.bytes === Array ? Array.prototype.slice.call(m.nonce) : m.nonce;
                if (o.oneofs)
                    d._nonce = "nonce";
            }
            return d;
        };

        PrimaryEphemeralIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PrimaryEphemeralIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.PrimaryEphemeralIdentity";
        };

        return PrimaryEphemeralIdentity;
    })();

    WACompanionReg.PairingRequest = (function() {

        function PairingRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PairingRequest.prototype.companionPublicKey = null;
        PairingRequest.prototype.companionIdentityKey = null;
        PairingRequest.prototype.advSecret = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PairingRequest.prototype, "_companionPublicKey", {
            get: $util.oneOfGetter($oneOfFields = ["companionPublicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PairingRequest.prototype, "_companionIdentityKey", {
            get: $util.oneOfGetter($oneOfFields = ["companionIdentityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PairingRequest.prototype, "_advSecret", {
            get: $util.oneOfGetter($oneOfFields = ["advSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PairingRequest.create = function create(properties) {
            return new PairingRequest(properties);
        };

        PairingRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.companionPublicKey != null && Object.hasOwnProperty.call(m, "companionPublicKey"))
                w.uint32(10).bytes(m.companionPublicKey);
            if (m.companionIdentityKey != null && Object.hasOwnProperty.call(m, "companionIdentityKey"))
                w.uint32(18).bytes(m.companionIdentityKey);
            if (m.advSecret != null && Object.hasOwnProperty.call(m, "advSecret"))
                w.uint32(26).bytes(m.advSecret);
            return w;
        };

        PairingRequest.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.PairingRequest();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.companionPublicKey = r.bytes();
                        break;
                    }
                case 2: {
                        m.companionIdentityKey = r.bytes();
                        break;
                    }
                case 3: {
                        m.advSecret = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PairingRequest.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.PairingRequest)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.PairingRequest();
            if (d.companionPublicKey != null) {
                if (typeof d.companionPublicKey === "string")
                    $util.base64.decode(d.companionPublicKey, m.companionPublicKey = $util.newBuffer($util.base64.length(d.companionPublicKey)), 0);
                else if (d.companionPublicKey.length >= 0)
                    m.companionPublicKey = d.companionPublicKey;
            }
            if (d.companionIdentityKey != null) {
                if (typeof d.companionIdentityKey === "string")
                    $util.base64.decode(d.companionIdentityKey, m.companionIdentityKey = $util.newBuffer($util.base64.length(d.companionIdentityKey)), 0);
                else if (d.companionIdentityKey.length >= 0)
                    m.companionIdentityKey = d.companionIdentityKey;
            }
            if (d.advSecret != null) {
                if (typeof d.advSecret === "string")
                    $util.base64.decode(d.advSecret, m.advSecret = $util.newBuffer($util.base64.length(d.advSecret)), 0);
                else if (d.advSecret.length >= 0)
                    m.advSecret = d.advSecret;
            }
            return m;
        };

        PairingRequest.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.companionPublicKey != null && m.hasOwnProperty("companionPublicKey")) {
                d.companionPublicKey = o.bytes === String ? $util.base64.encode(m.companionPublicKey, 0, m.companionPublicKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.companionPublicKey) : m.companionPublicKey;
                if (o.oneofs)
                    d._companionPublicKey = "companionPublicKey";
            }
            if (m.companionIdentityKey != null && m.hasOwnProperty("companionIdentityKey")) {
                d.companionIdentityKey = o.bytes === String ? $util.base64.encode(m.companionIdentityKey, 0, m.companionIdentityKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.companionIdentityKey) : m.companionIdentityKey;
                if (o.oneofs)
                    d._companionIdentityKey = "companionIdentityKey";
            }
            if (m.advSecret != null && m.hasOwnProperty("advSecret")) {
                d.advSecret = o.bytes === String ? $util.base64.encode(m.advSecret, 0, m.advSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.advSecret) : m.advSecret;
                if (o.oneofs)
                    d._advSecret = "advSecret";
            }
            return d;
        };

        PairingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PairingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.PairingRequest";
        };

        return PairingRequest;
    })();

    WACompanionReg.EncryptedPairingRequest = (function() {

        function EncryptedPairingRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EncryptedPairingRequest.prototype.encryptedPayload = null;
        EncryptedPairingRequest.prototype.iv = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EncryptedPairingRequest.prototype, "_encryptedPayload", {
            get: $util.oneOfGetter($oneOfFields = ["encryptedPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EncryptedPairingRequest.prototype, "_iv", {
            get: $util.oneOfGetter($oneOfFields = ["iv"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        EncryptedPairingRequest.create = function create(properties) {
            return new EncryptedPairingRequest(properties);
        };

        EncryptedPairingRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.encryptedPayload != null && Object.hasOwnProperty.call(m, "encryptedPayload"))
                w.uint32(10).bytes(m.encryptedPayload);
            if (m.iv != null && Object.hasOwnProperty.call(m, "iv"))
                w.uint32(18).bytes(m.iv);
            return w;
        };

        EncryptedPairingRequest.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.EncryptedPairingRequest();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.encryptedPayload = r.bytes();
                        break;
                    }
                case 2: {
                        m.iv = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        EncryptedPairingRequest.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.EncryptedPairingRequest)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.EncryptedPairingRequest();
            if (d.encryptedPayload != null) {
                if (typeof d.encryptedPayload === "string")
                    $util.base64.decode(d.encryptedPayload, m.encryptedPayload = $util.newBuffer($util.base64.length(d.encryptedPayload)), 0);
                else if (d.encryptedPayload.length >= 0)
                    m.encryptedPayload = d.encryptedPayload;
            }
            if (d.iv != null) {
                if (typeof d.iv === "string")
                    $util.base64.decode(d.iv, m.iv = $util.newBuffer($util.base64.length(d.iv)), 0);
                else if (d.iv.length >= 0)
                    m.iv = d.iv;
            }
            return m;
        };

        EncryptedPairingRequest.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.encryptedPayload != null && m.hasOwnProperty("encryptedPayload")) {
                d.encryptedPayload = o.bytes === String ? $util.base64.encode(m.encryptedPayload, 0, m.encryptedPayload.length) : o.bytes === Array ? Array.prototype.slice.call(m.encryptedPayload) : m.encryptedPayload;
                if (o.oneofs)
                    d._encryptedPayload = "encryptedPayload";
            }
            if (m.iv != null && m.hasOwnProperty("iv")) {
                d.iv = o.bytes === String ? $util.base64.encode(m.iv, 0, m.iv.length) : o.bytes === Array ? Array.prototype.slice.call(m.iv) : m.iv;
                if (o.oneofs)
                    d._iv = "iv";
            }
            return d;
        };

        EncryptedPairingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        EncryptedPairingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.EncryptedPairingRequest";
        };

        return EncryptedPairingRequest;
    })();

    WACompanionReg.ClientPairingProps = (function() {

        function ClientPairingProps(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ClientPairingProps.prototype.isChatDbLidMigrated = null;
        ClientPairingProps.prototype.isSyncdPureLidSession = null;
        ClientPairingProps.prototype.isSyncdSnapshotRecoveryEnabled = null;
        ClientPairingProps.prototype.isHsThumbnailSyncEnabled = null;
        ClientPairingProps.prototype.subscriptionSyncPayload = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPairingProps.prototype, "_isChatDbLidMigrated", {
            get: $util.oneOfGetter($oneOfFields = ["isChatDbLidMigrated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPairingProps.prototype, "_isSyncdPureLidSession", {
            get: $util.oneOfGetter($oneOfFields = ["isSyncdPureLidSession"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPairingProps.prototype, "_isSyncdSnapshotRecoveryEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isSyncdSnapshotRecoveryEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPairingProps.prototype, "_isHsThumbnailSyncEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isHsThumbnailSyncEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPairingProps.prototype, "_subscriptionSyncPayload", {
            get: $util.oneOfGetter($oneOfFields = ["subscriptionSyncPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientPairingProps.create = function create(properties) {
            return new ClientPairingProps(properties);
        };

        ClientPairingProps.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isChatDbLidMigrated != null && Object.hasOwnProperty.call(m, "isChatDbLidMigrated"))
                w.uint32(8).bool(m.isChatDbLidMigrated);
            if (m.isSyncdPureLidSession != null && Object.hasOwnProperty.call(m, "isSyncdPureLidSession"))
                w.uint32(16).bool(m.isSyncdPureLidSession);
            if (m.isSyncdSnapshotRecoveryEnabled != null && Object.hasOwnProperty.call(m, "isSyncdSnapshotRecoveryEnabled"))
                w.uint32(24).bool(m.isSyncdSnapshotRecoveryEnabled);
            if (m.isHsThumbnailSyncEnabled != null && Object.hasOwnProperty.call(m, "isHsThumbnailSyncEnabled"))
                w.uint32(32).bool(m.isHsThumbnailSyncEnabled);
            if (m.subscriptionSyncPayload != null && Object.hasOwnProperty.call(m, "subscriptionSyncPayload"))
                w.uint32(42).bytes(m.subscriptionSyncPayload);
            return w;
        };

        ClientPairingProps.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACompanionReg.ClientPairingProps();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.isChatDbLidMigrated = r.bool();
                        break;
                    }
                case 2: {
                        m.isSyncdPureLidSession = r.bool();
                        break;
                    }
                case 3: {
                        m.isSyncdSnapshotRecoveryEnabled = r.bool();
                        break;
                    }
                case 4: {
                        m.isHsThumbnailSyncEnabled = r.bool();
                        break;
                    }
                case 5: {
                        m.subscriptionSyncPayload = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ClientPairingProps.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACompanionReg.ClientPairingProps)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACompanionReg.ClientPairingProps();
            if (d.isChatDbLidMigrated != null) {
                m.isChatDbLidMigrated = Boolean(d.isChatDbLidMigrated);
            }
            if (d.isSyncdPureLidSession != null) {
                m.isSyncdPureLidSession = Boolean(d.isSyncdPureLidSession);
            }
            if (d.isSyncdSnapshotRecoveryEnabled != null) {
                m.isSyncdSnapshotRecoveryEnabled = Boolean(d.isSyncdSnapshotRecoveryEnabled);
            }
            if (d.isHsThumbnailSyncEnabled != null) {
                m.isHsThumbnailSyncEnabled = Boolean(d.isHsThumbnailSyncEnabled);
            }
            if (d.subscriptionSyncPayload != null) {
                if (typeof d.subscriptionSyncPayload === "string")
                    $util.base64.decode(d.subscriptionSyncPayload, m.subscriptionSyncPayload = $util.newBuffer($util.base64.length(d.subscriptionSyncPayload)), 0);
                else if (d.subscriptionSyncPayload.length >= 0)
                    m.subscriptionSyncPayload = d.subscriptionSyncPayload;
            }
            return m;
        };

        ClientPairingProps.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.isChatDbLidMigrated != null && m.hasOwnProperty("isChatDbLidMigrated")) {
                d.isChatDbLidMigrated = m.isChatDbLidMigrated;
                if (o.oneofs)
                    d._isChatDbLidMigrated = "isChatDbLidMigrated";
            }
            if (m.isSyncdPureLidSession != null && m.hasOwnProperty("isSyncdPureLidSession")) {
                d.isSyncdPureLidSession = m.isSyncdPureLidSession;
                if (o.oneofs)
                    d._isSyncdPureLidSession = "isSyncdPureLidSession";
            }
            if (m.isSyncdSnapshotRecoveryEnabled != null && m.hasOwnProperty("isSyncdSnapshotRecoveryEnabled")) {
                d.isSyncdSnapshotRecoveryEnabled = m.isSyncdSnapshotRecoveryEnabled;
                if (o.oneofs)
                    d._isSyncdSnapshotRecoveryEnabled = "isSyncdSnapshotRecoveryEnabled";
            }
            if (m.isHsThumbnailSyncEnabled != null && m.hasOwnProperty("isHsThumbnailSyncEnabled")) {
                d.isHsThumbnailSyncEnabled = m.isHsThumbnailSyncEnabled;
                if (o.oneofs)
                    d._isHsThumbnailSyncEnabled = "isHsThumbnailSyncEnabled";
            }
            if (m.subscriptionSyncPayload != null && m.hasOwnProperty("subscriptionSyncPayload")) {
                d.subscriptionSyncPayload = o.bytes === String ? $util.base64.encode(m.subscriptionSyncPayload, 0, m.subscriptionSyncPayload.length) : o.bytes === Array ? Array.prototype.slice.call(m.subscriptionSyncPayload) : m.subscriptionSyncPayload;
                if (o.oneofs)
                    d._subscriptionSyncPayload = "subscriptionSyncPayload";
            }
            return d;
        };

        ClientPairingProps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPairingProps.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACompanionReg.ClientPairingProps";
        };

        return ClientPairingProps;
    })();

    return WACompanionReg;
})();

export { $root as default };

