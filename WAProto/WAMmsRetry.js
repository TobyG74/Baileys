/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAMmsRetry = $root.WAMmsRetry = (() => {

    const WAMmsRetry = {};

    WAMmsRetry.MediaRetryNotification = (function() {

        function MediaRetryNotification(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MediaRetryNotification.prototype.stanzaID = null;
        MediaRetryNotification.prototype.directPath = null;
        MediaRetryNotification.prototype.result = null;
        MediaRetryNotification.prototype.messageSecret = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_stanzaID", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_result", {
            get: $util.oneOfGetter($oneOfFields = ["result"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_messageSecret", {
            get: $util.oneOfGetter($oneOfFields = ["messageSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        MediaRetryNotification.create = function create(properties) {
            return new MediaRetryNotification(properties);
        };

        MediaRetryNotification.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.stanzaID != null && Object.hasOwnProperty.call(m, "stanzaID"))
                w.uint32(10).string(m.stanzaID);
            if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(18).string(m.directPath);
            if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                w.uint32(24).int32(m.result);
            if (m.messageSecret != null && Object.hasOwnProperty.call(m, "messageSecret"))
                w.uint32(34).bytes(m.messageSecret);
            return w;
        };

        MediaRetryNotification.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAMmsRetry.MediaRetryNotification();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.stanzaID = r.string();
                        break;
                    }
                case 2: {
                        m.directPath = r.string();
                        break;
                    }
                case 3: {
                        m.result = r.int32();
                        break;
                    }
                case 4: {
                        m.messageSecret = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        MediaRetryNotification.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAMmsRetry.MediaRetryNotification)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAMmsRetry.MediaRetryNotification();
            if (d.stanzaID != null) {
                m.stanzaID = String(d.stanzaID);
            }
            if (d.directPath != null) {
                m.directPath = String(d.directPath);
            }
            switch (d.result) {
            default:
                if (typeof d.result === "number") {
                    m.result = d.result;
                    break;
                }
                break;
            case "GENERAL_ERROR":
            case 0:
                m.result = 0;
                break;
            case "SUCCESS":
            case 1:
                m.result = 1;
                break;
            case "NOT_FOUND":
            case 2:
                m.result = 2;
                break;
            case "DECRYPTION_ERROR":
            case 3:
                m.result = 3;
                break;
            }
            if (d.messageSecret != null) {
                if (typeof d.messageSecret === "string")
                    $util.base64.decode(d.messageSecret, m.messageSecret = $util.newBuffer($util.base64.length(d.messageSecret)), 0);
                else if (d.messageSecret.length >= 0)
                    m.messageSecret = d.messageSecret;
            }
            return m;
        };

        MediaRetryNotification.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.stanzaID != null && m.hasOwnProperty("stanzaID")) {
                d.stanzaID = m.stanzaID;
                if (o.oneofs)
                    d._stanzaID = "stanzaID";
            }
            if (m.directPath != null && m.hasOwnProperty("directPath")) {
                d.directPath = m.directPath;
                if (o.oneofs)
                    d._directPath = "directPath";
            }
            if (m.result != null && m.hasOwnProperty("result")) {
                d.result = o.enums === String ? $root.WAMmsRetry.MediaRetryNotification.ResultType[m.result] === undefined ? m.result : $root.WAMmsRetry.MediaRetryNotification.ResultType[m.result] : m.result;
                if (o.oneofs)
                    d._result = "result";
            }
            if (m.messageSecret != null && m.hasOwnProperty("messageSecret")) {
                d.messageSecret = o.bytes === String ? $util.base64.encode(m.messageSecret, 0, m.messageSecret.length) : o.bytes === Array ? Array.prototype.slice.call(m.messageSecret) : m.messageSecret;
                if (o.oneofs)
                    d._messageSecret = "messageSecret";
            }
            return d;
        };

        MediaRetryNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MediaRetryNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAMmsRetry.MediaRetryNotification";
        };

        MediaRetryNotification.ResultType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GENERAL_ERROR"] = 0;
            values[valuesById[1] = "SUCCESS"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DECRYPTION_ERROR"] = 3;
            return values;
        })();

        return MediaRetryNotification;
    })();

    WAMmsRetry.ServerErrorReceipt = (function() {

        function ServerErrorReceipt(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ServerErrorReceipt.prototype.stanzaID = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerErrorReceipt.prototype, "_stanzaID", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerErrorReceipt.create = function create(properties) {
            return new ServerErrorReceipt(properties);
        };

        ServerErrorReceipt.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.stanzaID != null && Object.hasOwnProperty.call(m, "stanzaID"))
                w.uint32(10).string(m.stanzaID);
            return w;
        };

        ServerErrorReceipt.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAMmsRetry.ServerErrorReceipt();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.stanzaID = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ServerErrorReceipt.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAMmsRetry.ServerErrorReceipt)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAMmsRetry.ServerErrorReceipt();
            if (d.stanzaID != null) {
                m.stanzaID = String(d.stanzaID);
            }
            return m;
        };

        ServerErrorReceipt.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.stanzaID != null && m.hasOwnProperty("stanzaID")) {
                d.stanzaID = m.stanzaID;
                if (o.oneofs)
                    d._stanzaID = "stanzaID";
            }
            return d;
        };

        ServerErrorReceipt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerErrorReceipt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAMmsRetry.ServerErrorReceipt";
        };

        return ServerErrorReceipt;
    })();

    return WAMmsRetry;
})();

export { $root as default };

