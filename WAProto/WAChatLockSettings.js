/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";
import { WAUserPassword } from './WAUserPassword.js';

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAChatLockSettings = $root.WAChatLockSettings = (() => {

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
                WAUserPassword.UserPassword.encode(m.secretCode, w.uint32(18).fork()).ldelim();
            return w;
        };

        ChatLockSettings.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAChatLockSettings.ChatLockSettings();
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
                        m.secretCode = WAUserPassword.UserPassword.decode(r, r.uint32(), undefined, n + 1);
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
            if (d instanceof $root.WAChatLockSettings.ChatLockSettings)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAChatLockSettings.ChatLockSettings();
            if (d.hideLockedChats != null) {
                m.hideLockedChats = Boolean(d.hideLockedChats);
            }
            if (d.secretCode != null) {
                if (typeof d.secretCode !== "object")
                    throw TypeError(".WAChatLockSettings.ChatLockSettings.secretCode: object expected");
                m.secretCode = WAUserPassword.UserPassword.fromObject(d.secretCode, n + 1);
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
                d.secretCode = WAUserPassword.UserPassword.toObject(m.secretCode, o);
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

export const WAUserPassword = WAUserPassword = (() => {

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
                    WAUserPassword.UserPassword.TransformerArg.encode(m.transformerArg[i], w.uint32(26).fork()).ldelim();
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
            var c = l === undefined ? r.len : r.pos + l, m = new WAUserPassword.UserPassword();
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
                        m.transformerArg.push(WAUserPassword.UserPassword.TransformerArg.decode(r, r.uint32(), undefined, n + 1));
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
            if (d instanceof WAUserPassword.UserPassword)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new WAUserPassword.UserPassword();
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
                    m.transformerArg[i] = WAUserPassword.UserPassword.TransformerArg.fromObject(d.transformerArg[i], n + 1);
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
                d.encoding = o.enums === String ? WAUserPassword.UserPassword.Encoding[m.encoding] === undefined ? m.encoding : WAUserPassword.UserPassword.Encoding[m.encoding] : m.encoding;
                if (o.oneofs)
                    d._encoding = "encoding";
            }
            if (m.transformer != null && m.hasOwnProperty("transformer")) {
                d.transformer = o.enums === String ? WAUserPassword.UserPassword.Transformer[m.transformer] === undefined ? m.transformer : WAUserPassword.UserPassword.Transformer[m.transformer] : m.transformer;
                if (o.oneofs)
                    d._transformer = "transformer";
            }
            if (m.transformerArg && m.transformerArg.length) {
                d.transformerArg = [];
                for (var j = 0; j < m.transformerArg.length; ++j) {
                    d.transformerArg[j] = WAUserPassword.UserPassword.TransformerArg.toObject(m.transformerArg[j], o);
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
                    WAUserPassword.UserPassword.TransformerArg.Value.encode(m.value, w.uint32(18).fork()).ldelim();
                return w;
            };

            TransformerArg.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new WAUserPassword.UserPassword.TransformerArg();
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
                            m.value = WAUserPassword.UserPassword.TransformerArg.Value.decode(r, r.uint32(), undefined, n + 1);
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
                if (d instanceof WAUserPassword.UserPassword.TransformerArg)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new WAUserPassword.UserPassword.TransformerArg();
                if (d.key != null) {
                    m.key = String(d.key);
                }
                if (d.value != null) {
                    if (typeof d.value !== "object")
                        throw TypeError(".WAUserPassword.UserPassword.TransformerArg.value: object expected");
                    m.value = WAUserPassword.UserPassword.TransformerArg.Value.fromObject(d.value, n + 1);
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
                    d.value = WAUserPassword.UserPassword.TransformerArg.Value.toObject(m.value, o);
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
                    var c = l === undefined ? r.len : r.pos + l, m = new WAUserPassword.UserPassword.TransformerArg.Value();
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
                    if (d instanceof WAUserPassword.UserPassword.TransformerArg.Value)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new WAUserPassword.UserPassword.TransformerArg.Value();
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

export { $root as default };

