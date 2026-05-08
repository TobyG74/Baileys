/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WACommon = $root.WACommon = (() => {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACommon.LimitSharing();
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
            if (d instanceof $root.WACommon.LimitSharing)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACommon.LimitSharing();
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
                d.trigger = o.enums === String ? $root.WACommon.LimitSharing.TriggerType[m.trigger] === undefined ? m.trigger : $root.WACommon.LimitSharing.TriggerType[m.trigger] : m.trigger;
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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACommon.MessageKey();
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
            if (d instanceof $root.WACommon.MessageKey)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACommon.MessageKey();
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

