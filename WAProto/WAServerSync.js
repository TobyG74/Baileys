/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAServerSync = $root.WAServerSync = (() => {

    const WAServerSync = {};

    WAServerSync.SyncdMutation = (function() {

        function SyncdMutation(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdMutation.prototype.operation = null;
        SyncdMutation.prototype.record = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdMutation.prototype, "_operation", {
            get: $util.oneOfGetter($oneOfFields = ["operation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdMutation.prototype, "_record", {
            get: $util.oneOfGetter($oneOfFields = ["record"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdMutation.create = function create(properties) {
            return new SyncdMutation(properties);
        };

        SyncdMutation.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.operation != null && Object.hasOwnProperty.call(m, "operation"))
                w.uint32(8).int32(m.operation);
            if (m.record != null && Object.hasOwnProperty.call(m, "record"))
                $root.WAServerSync.SyncdRecord.encode(m.record, w.uint32(18).fork()).ldelim();
            return w;
        };

        SyncdMutation.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdMutation();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.operation = r.int32();
                        break;
                    }
                case 2: {
                        m.record = $root.WAServerSync.SyncdRecord.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdMutation.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdMutation)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdMutation();
            switch (d.operation) {
            default:
                if (typeof d.operation === "number") {
                    m.operation = d.operation;
                    break;
                }
                break;
            case "SET":
            case 0:
                m.operation = 0;
                break;
            case "REMOVE":
            case 1:
                m.operation = 1;
                break;
            }
            if (d.record != null) {
                if (typeof d.record !== "object")
                    throw TypeError(".WAServerSync.SyncdMutation.record: object expected");
                m.record = $root.WAServerSync.SyncdRecord.fromObject(d.record, n + 1);
            }
            return m;
        };

        SyncdMutation.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.operation != null && m.hasOwnProperty("operation")) {
                d.operation = o.enums === String ? $root.WAServerSync.SyncdMutation.SyncdOperation[m.operation] === undefined ? m.operation : $root.WAServerSync.SyncdMutation.SyncdOperation[m.operation] : m.operation;
                if (o.oneofs)
                    d._operation = "operation";
            }
            if (m.record != null && m.hasOwnProperty("record")) {
                d.record = $root.WAServerSync.SyncdRecord.toObject(m.record, o);
                if (o.oneofs)
                    d._record = "record";
            }
            return d;
        };

        SyncdMutation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdMutation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdMutation";
        };

        SyncdMutation.SyncdOperation = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET"] = 0;
            values[valuesById[1] = "REMOVE"] = 1;
            return values;
        })();

        return SyncdMutation;
    })();

    WAServerSync.SyncdVersion = (function() {

        function SyncdVersion(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdVersion.prototype.version = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdVersion.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdVersion.create = function create(properties) {
            return new SyncdVersion(properties);
        };

        SyncdVersion.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(8).uint64(m.version);
            return w;
        };

        SyncdVersion.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdVersion();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.version = r.uint64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdVersion.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdVersion)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdVersion();
            if (d.version != null) {
                if ($util.Long)
                    (m.version = $util.Long.fromValue(d.version)).unsigned = true;
                else if (typeof d.version === "string")
                    m.version = parseInt(d.version, 10);
                else if (typeof d.version === "number")
                    m.version = d.version;
                else if (typeof d.version === "object")
                    m.version = new $util.LongBits(d.version.low >>> 0, d.version.high >>> 0).toNumber(true);
            }
            return m;
        };

        SyncdVersion.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.version != null && m.hasOwnProperty("version")) {
                if (typeof m.version === "number")
                    d.version = o.longs === String ? String(m.version) : m.version;
                else
                    d.version = o.longs === String ? $util.Long.prototype.toString.call(m.version) : o.longs === Number ? new $util.LongBits(m.version.low >>> 0, m.version.high >>> 0).toNumber(true) : m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            return d;
        };

        SyncdVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdVersion";
        };

        return SyncdVersion;
    })();

    WAServerSync.ExitCode = (function() {

        function ExitCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ExitCode.prototype.code = null;
        ExitCode.prototype.text = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExitCode.prototype, "_code", {
            get: $util.oneOfGetter($oneOfFields = ["code"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExitCode.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ExitCode.create = function create(properties) {
            return new ExitCode(properties);
        };

        ExitCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint64(m.code);
            if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                w.uint32(18).string(m.text);
            return w;
        };

        ExitCode.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.ExitCode();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.code = r.uint64();
                        break;
                    }
                case 2: {
                        m.text = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ExitCode.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.ExitCode)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.ExitCode();
            if (d.code != null) {
                if ($util.Long)
                    (m.code = $util.Long.fromValue(d.code)).unsigned = true;
                else if (typeof d.code === "string")
                    m.code = parseInt(d.code, 10);
                else if (typeof d.code === "number")
                    m.code = d.code;
                else if (typeof d.code === "object")
                    m.code = new $util.LongBits(d.code.low >>> 0, d.code.high >>> 0).toNumber(true);
            }
            if (d.text != null) {
                m.text = String(d.text);
            }
            return m;
        };

        ExitCode.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.code != null && m.hasOwnProperty("code")) {
                if (typeof m.code === "number")
                    d.code = o.longs === String ? String(m.code) : m.code;
                else
                    d.code = o.longs === String ? $util.Long.prototype.toString.call(m.code) : o.longs === Number ? new $util.LongBits(m.code.low >>> 0, m.code.high >>> 0).toNumber(true) : m.code;
                if (o.oneofs)
                    d._code = "code";
            }
            if (m.text != null && m.hasOwnProperty("text")) {
                d.text = m.text;
                if (o.oneofs)
                    d._text = "text";
            }
            return d;
        };

        ExitCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ExitCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.ExitCode";
        };

        return ExitCode;
    })();

    WAServerSync.SyncdIndex = (function() {

        function SyncdIndex(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdIndex.prototype.blob = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdIndex.prototype, "_blob", {
            get: $util.oneOfGetter($oneOfFields = ["blob"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdIndex.create = function create(properties) {
            return new SyncdIndex(properties);
        };

        SyncdIndex.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.blob != null && Object.hasOwnProperty.call(m, "blob"))
                w.uint32(10).bytes(m.blob);
            return w;
        };

        SyncdIndex.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdIndex();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.blob = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdIndex.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdIndex)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdIndex();
            if (d.blob != null) {
                if (typeof d.blob === "string")
                    $util.base64.decode(d.blob, m.blob = $util.newBuffer($util.base64.length(d.blob)), 0);
                else if (d.blob.length >= 0)
                    m.blob = d.blob;
            }
            return m;
        };

        SyncdIndex.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.blob != null && m.hasOwnProperty("blob")) {
                d.blob = o.bytes === String ? $util.base64.encode(m.blob, 0, m.blob.length) : o.bytes === Array ? Array.prototype.slice.call(m.blob) : m.blob;
                if (o.oneofs)
                    d._blob = "blob";
            }
            return d;
        };

        SyncdIndex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdIndex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdIndex";
        };

        return SyncdIndex;
    })();

    WAServerSync.SyncdValue = (function() {

        function SyncdValue(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdValue.prototype.blob = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdValue.prototype, "_blob", {
            get: $util.oneOfGetter($oneOfFields = ["blob"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdValue.create = function create(properties) {
            return new SyncdValue(properties);
        };

        SyncdValue.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.blob != null && Object.hasOwnProperty.call(m, "blob"))
                w.uint32(10).bytes(m.blob);
            return w;
        };

        SyncdValue.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdValue();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.blob = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdValue.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdValue)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdValue();
            if (d.blob != null) {
                if (typeof d.blob === "string")
                    $util.base64.decode(d.blob, m.blob = $util.newBuffer($util.base64.length(d.blob)), 0);
                else if (d.blob.length >= 0)
                    m.blob = d.blob;
            }
            return m;
        };

        SyncdValue.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.blob != null && m.hasOwnProperty("blob")) {
                d.blob = o.bytes === String ? $util.base64.encode(m.blob, 0, m.blob.length) : o.bytes === Array ? Array.prototype.slice.call(m.blob) : m.blob;
                if (o.oneofs)
                    d._blob = "blob";
            }
            return d;
        };

        SyncdValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdValue";
        };

        return SyncdValue;
    })();

    WAServerSync.KeyId = (function() {

        function KeyId(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeyId.prototype.id = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyId.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        KeyId.create = function create(properties) {
            return new KeyId(properties);
        };

        KeyId.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(10).bytes(m.id);
            return w;
        };

        KeyId.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.KeyId();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.id = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        KeyId.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.KeyId)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.KeyId();
            if (d.id != null) {
                if (typeof d.id === "string")
                    $util.base64.decode(d.id, m.id = $util.newBuffer($util.base64.length(d.id)), 0);
                else if (d.id.length >= 0)
                    m.id = d.id;
            }
            return m;
        };

        KeyId.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.id != null && m.hasOwnProperty("id")) {
                d.id = o.bytes === String ? $util.base64.encode(m.id, 0, m.id.length) : o.bytes === Array ? Array.prototype.slice.call(m.id) : m.id;
                if (o.oneofs)
                    d._id = "id";
            }
            return d;
        };

        KeyId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        KeyId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.KeyId";
        };

        return KeyId;
    })();

    WAServerSync.SyncdRecord = (function() {

        function SyncdRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdRecord.prototype.index = null;
        SyncdRecord.prototype.value = null;
        SyncdRecord.prototype.keyId = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdRecord.prototype, "_index", {
            get: $util.oneOfGetter($oneOfFields = ["index"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdRecord.prototype, "_value", {
            get: $util.oneOfGetter($oneOfFields = ["value"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdRecord.prototype, "_keyId", {
            get: $util.oneOfGetter($oneOfFields = ["keyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdRecord.create = function create(properties) {
            return new SyncdRecord(properties);
        };

        SyncdRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                $root.WAServerSync.SyncdIndex.encode(m.index, w.uint32(10).fork()).ldelim();
            if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                $root.WAServerSync.SyncdValue.encode(m.value, w.uint32(18).fork()).ldelim();
            if (m.keyId != null && Object.hasOwnProperty.call(m, "keyId"))
                $root.WAServerSync.KeyId.encode(m.keyId, w.uint32(26).fork()).ldelim();
            return w;
        };

        SyncdRecord.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdRecord();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.index = $root.WAServerSync.SyncdIndex.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.value = $root.WAServerSync.SyncdValue.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.keyId = $root.WAServerSync.KeyId.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdRecord.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdRecord)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdRecord();
            if (d.index != null) {
                if (typeof d.index !== "object")
                    throw TypeError(".WAServerSync.SyncdRecord.index: object expected");
                m.index = $root.WAServerSync.SyncdIndex.fromObject(d.index, n + 1);
            }
            if (d.value != null) {
                if (typeof d.value !== "object")
                    throw TypeError(".WAServerSync.SyncdRecord.value: object expected");
                m.value = $root.WAServerSync.SyncdValue.fromObject(d.value, n + 1);
            }
            if (d.keyId != null) {
                if (typeof d.keyId !== "object")
                    throw TypeError(".WAServerSync.SyncdRecord.keyId: object expected");
                m.keyId = $root.WAServerSync.KeyId.fromObject(d.keyId, n + 1);
            }
            return m;
        };

        SyncdRecord.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.index != null && m.hasOwnProperty("index")) {
                d.index = $root.WAServerSync.SyncdIndex.toObject(m.index, o);
                if (o.oneofs)
                    d._index = "index";
            }
            if (m.value != null && m.hasOwnProperty("value")) {
                d.value = $root.WAServerSync.SyncdValue.toObject(m.value, o);
                if (o.oneofs)
                    d._value = "value";
            }
            if (m.keyId != null && m.hasOwnProperty("keyId")) {
                d.keyId = $root.WAServerSync.KeyId.toObject(m.keyId, o);
                if (o.oneofs)
                    d._keyId = "keyId";
            }
            return d;
        };

        SyncdRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdRecord";
        };

        return SyncdRecord;
    })();

    WAServerSync.ExternalBlobReference = (function() {

        function ExternalBlobReference(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ExternalBlobReference.prototype.mediaKey = null;
        ExternalBlobReference.prototype.directPath = null;
        ExternalBlobReference.prototype.handle = null;
        ExternalBlobReference.prototype.fileSizeBytes = null;
        ExternalBlobReference.prototype.fileSha256 = null;
        ExternalBlobReference.prototype.fileEncSha256 = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_mediaKey", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_handle", {
            get: $util.oneOfGetter($oneOfFields = ["handle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_fileSizeBytes", {
            get: $util.oneOfGetter($oneOfFields = ["fileSizeBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_fileSha256", {
            get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_fileEncSha256", {
            get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ExternalBlobReference.create = function create(properties) {
            return new ExternalBlobReference(properties);
        };

        ExternalBlobReference.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mediaKey != null && Object.hasOwnProperty.call(m, "mediaKey"))
                w.uint32(10).bytes(m.mediaKey);
            if (m.directPath != null && Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(18).string(m.directPath);
            if (m.handle != null && Object.hasOwnProperty.call(m, "handle"))
                w.uint32(26).string(m.handle);
            if (m.fileSizeBytes != null && Object.hasOwnProperty.call(m, "fileSizeBytes"))
                w.uint32(32).uint64(m.fileSizeBytes);
            if (m.fileSha256 != null && Object.hasOwnProperty.call(m, "fileSha256"))
                w.uint32(42).bytes(m.fileSha256);
            if (m.fileEncSha256 != null && Object.hasOwnProperty.call(m, "fileEncSha256"))
                w.uint32(50).bytes(m.fileEncSha256);
            return w;
        };

        ExternalBlobReference.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.ExternalBlobReference();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.mediaKey = r.bytes();
                        break;
                    }
                case 2: {
                        m.directPath = r.string();
                        break;
                    }
                case 3: {
                        m.handle = r.string();
                        break;
                    }
                case 4: {
                        m.fileSizeBytes = r.uint64();
                        break;
                    }
                case 5: {
                        m.fileSha256 = r.bytes();
                        break;
                    }
                case 6: {
                        m.fileEncSha256 = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ExternalBlobReference.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.ExternalBlobReference)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.ExternalBlobReference();
            if (d.mediaKey != null) {
                if (typeof d.mediaKey === "string")
                    $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                else if (d.mediaKey.length >= 0)
                    m.mediaKey = d.mediaKey;
            }
            if (d.directPath != null) {
                m.directPath = String(d.directPath);
            }
            if (d.handle != null) {
                m.handle = String(d.handle);
            }
            if (d.fileSizeBytes != null) {
                if ($util.Long)
                    (m.fileSizeBytes = $util.Long.fromValue(d.fileSizeBytes)).unsigned = true;
                else if (typeof d.fileSizeBytes === "string")
                    m.fileSizeBytes = parseInt(d.fileSizeBytes, 10);
                else if (typeof d.fileSizeBytes === "number")
                    m.fileSizeBytes = d.fileSizeBytes;
                else if (typeof d.fileSizeBytes === "object")
                    m.fileSizeBytes = new $util.LongBits(d.fileSizeBytes.low >>> 0, d.fileSizeBytes.high >>> 0).toNumber(true);
            }
            if (d.fileSha256 != null) {
                if (typeof d.fileSha256 === "string")
                    $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                else if (d.fileSha256.length >= 0)
                    m.fileSha256 = d.fileSha256;
            }
            if (d.fileEncSha256 != null) {
                if (typeof d.fileEncSha256 === "string")
                    $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                else if (d.fileEncSha256.length >= 0)
                    m.fileEncSha256 = d.fileEncSha256;
            }
            return m;
        };

        ExternalBlobReference.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.mediaKey != null && m.hasOwnProperty("mediaKey")) {
                d.mediaKey = o.bytes === String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
                if (o.oneofs)
                    d._mediaKey = "mediaKey";
            }
            if (m.directPath != null && m.hasOwnProperty("directPath")) {
                d.directPath = m.directPath;
                if (o.oneofs)
                    d._directPath = "directPath";
            }
            if (m.handle != null && m.hasOwnProperty("handle")) {
                d.handle = m.handle;
                if (o.oneofs)
                    d._handle = "handle";
            }
            if (m.fileSizeBytes != null && m.hasOwnProperty("fileSizeBytes")) {
                if (typeof m.fileSizeBytes === "number")
                    d.fileSizeBytes = o.longs === String ? String(m.fileSizeBytes) : m.fileSizeBytes;
                else
                    d.fileSizeBytes = o.longs === String ? $util.Long.prototype.toString.call(m.fileSizeBytes) : o.longs === Number ? new $util.LongBits(m.fileSizeBytes.low >>> 0, m.fileSizeBytes.high >>> 0).toNumber(true) : m.fileSizeBytes;
                if (o.oneofs)
                    d._fileSizeBytes = "fileSizeBytes";
            }
            if (m.fileSha256 != null && m.hasOwnProperty("fileSha256")) {
                d.fileSha256 = o.bytes === String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
                if (o.oneofs)
                    d._fileSha256 = "fileSha256";
            }
            if (m.fileEncSha256 != null && m.hasOwnProperty("fileEncSha256")) {
                d.fileEncSha256 = o.bytes === String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === Array ? Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
                if (o.oneofs)
                    d._fileEncSha256 = "fileEncSha256";
            }
            return d;
        };

        ExternalBlobReference.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ExternalBlobReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.ExternalBlobReference";
        };

        return ExternalBlobReference;
    })();

    WAServerSync.SyncdSnapshot = (function() {

        function SyncdSnapshot(p) {
            this.records = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdSnapshot.prototype.version = null;
        SyncdSnapshot.prototype.records = $util.emptyArray;
        SyncdSnapshot.prototype.mac = null;
        SyncdSnapshot.prototype.keyId = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdSnapshot.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdSnapshot.prototype, "_mac", {
            get: $util.oneOfGetter($oneOfFields = ["mac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdSnapshot.prototype, "_keyId", {
            get: $util.oneOfGetter($oneOfFields = ["keyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdSnapshot.create = function create(properties) {
            return new SyncdSnapshot(properties);
        };

        SyncdSnapshot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                $root.WAServerSync.SyncdVersion.encode(m.version, w.uint32(10).fork()).ldelim();
            if (m.records != null && m.records.length) {
                for (var i = 0; i < m.records.length; ++i)
                    $root.WAServerSync.SyncdRecord.encode(m.records[i], w.uint32(18).fork()).ldelim();
            }
            if (m.mac != null && Object.hasOwnProperty.call(m, "mac"))
                w.uint32(26).bytes(m.mac);
            if (m.keyId != null && Object.hasOwnProperty.call(m, "keyId"))
                $root.WAServerSync.KeyId.encode(m.keyId, w.uint32(34).fork()).ldelim();
            return w;
        };

        SyncdSnapshot.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdSnapshot();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.version = $root.WAServerSync.SyncdVersion.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        if (!(m.records && m.records.length))
                            m.records = [];
                        m.records.push($root.WAServerSync.SyncdRecord.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        m.mac = r.bytes();
                        break;
                    }
                case 4: {
                        m.keyId = $root.WAServerSync.KeyId.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdSnapshot.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdSnapshot)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdSnapshot();
            if (d.version != null) {
                if (typeof d.version !== "object")
                    throw TypeError(".WAServerSync.SyncdSnapshot.version: object expected");
                m.version = $root.WAServerSync.SyncdVersion.fromObject(d.version, n + 1);
            }
            if (d.records) {
                if (!Array.isArray(d.records))
                    throw TypeError(".WAServerSync.SyncdSnapshot.records: array expected");
                m.records = [];
                for (var i = 0; i < d.records.length; ++i) {
                    if (typeof d.records[i] !== "object")
                        throw TypeError(".WAServerSync.SyncdSnapshot.records: object expected");
                    m.records[i] = $root.WAServerSync.SyncdRecord.fromObject(d.records[i], n + 1);
                }
            }
            if (d.mac != null) {
                if (typeof d.mac === "string")
                    $util.base64.decode(d.mac, m.mac = $util.newBuffer($util.base64.length(d.mac)), 0);
                else if (d.mac.length >= 0)
                    m.mac = d.mac;
            }
            if (d.keyId != null) {
                if (typeof d.keyId !== "object")
                    throw TypeError(".WAServerSync.SyncdSnapshot.keyId: object expected");
                m.keyId = $root.WAServerSync.KeyId.fromObject(d.keyId, n + 1);
            }
            return m;
        };

        SyncdSnapshot.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.records = [];
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = $root.WAServerSync.SyncdVersion.toObject(m.version, o);
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.records && m.records.length) {
                d.records = [];
                for (var j = 0; j < m.records.length; ++j) {
                    d.records[j] = $root.WAServerSync.SyncdRecord.toObject(m.records[j], o);
                }
            }
            if (m.mac != null && m.hasOwnProperty("mac")) {
                d.mac = o.bytes === String ? $util.base64.encode(m.mac, 0, m.mac.length) : o.bytes === Array ? Array.prototype.slice.call(m.mac) : m.mac;
                if (o.oneofs)
                    d._mac = "mac";
            }
            if (m.keyId != null && m.hasOwnProperty("keyId")) {
                d.keyId = $root.WAServerSync.KeyId.toObject(m.keyId, o);
                if (o.oneofs)
                    d._keyId = "keyId";
            }
            return d;
        };

        SyncdSnapshot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdSnapshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdSnapshot";
        };

        return SyncdSnapshot;
    })();

    WAServerSync.SyncdMutations = (function() {

        function SyncdMutations(p) {
            this.mutations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdMutations.prototype.mutations = $util.emptyArray;

        SyncdMutations.create = function create(properties) {
            return new SyncdMutations(properties);
        };

        SyncdMutations.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mutations != null && m.mutations.length) {
                for (var i = 0; i < m.mutations.length; ++i)
                    $root.WAServerSync.SyncdMutation.encode(m.mutations[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SyncdMutations.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdMutations();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.mutations && m.mutations.length))
                            m.mutations = [];
                        m.mutations.push($root.WAServerSync.SyncdMutation.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdMutations.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdMutations)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdMutations();
            if (d.mutations) {
                if (!Array.isArray(d.mutations))
                    throw TypeError(".WAServerSync.SyncdMutations.mutations: array expected");
                m.mutations = [];
                for (var i = 0; i < d.mutations.length; ++i) {
                    if (typeof d.mutations[i] !== "object")
                        throw TypeError(".WAServerSync.SyncdMutations.mutations: object expected");
                    m.mutations[i] = $root.WAServerSync.SyncdMutation.fromObject(d.mutations[i], n + 1);
                }
            }
            return m;
        };

        SyncdMutations.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.mutations = [];
            }
            if (m.mutations && m.mutations.length) {
                d.mutations = [];
                for (var j = 0; j < m.mutations.length; ++j) {
                    d.mutations[j] = $root.WAServerSync.SyncdMutation.toObject(m.mutations[j], o);
                }
            }
            return d;
        };

        SyncdMutations.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdMutations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdMutations";
        };

        return SyncdMutations;
    })();

    WAServerSync.SyncdPatch = (function() {

        function SyncdPatch(p) {
            this.mutations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdPatch.prototype.version = null;
        SyncdPatch.prototype.mutations = $util.emptyArray;
        SyncdPatch.prototype.externalMutations = null;
        SyncdPatch.prototype.snapshotMac = null;
        SyncdPatch.prototype.patchMac = null;
        SyncdPatch.prototype.keyId = null;
        SyncdPatch.prototype.exitCode = null;
        SyncdPatch.prototype.deviceIndex = null;
        SyncdPatch.prototype.clientDebugData = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_externalMutations", {
            get: $util.oneOfGetter($oneOfFields = ["externalMutations"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_snapshotMac", {
            get: $util.oneOfGetter($oneOfFields = ["snapshotMac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_patchMac", {
            get: $util.oneOfGetter($oneOfFields = ["patchMac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_keyId", {
            get: $util.oneOfGetter($oneOfFields = ["keyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_exitCode", {
            get: $util.oneOfGetter($oneOfFields = ["exitCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_deviceIndex", {
            get: $util.oneOfGetter($oneOfFields = ["deviceIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_clientDebugData", {
            get: $util.oneOfGetter($oneOfFields = ["clientDebugData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SyncdPatch.create = function create(properties) {
            return new SyncdPatch(properties);
        };

        SyncdPatch.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                $root.WAServerSync.SyncdVersion.encode(m.version, w.uint32(10).fork()).ldelim();
            if (m.mutations != null && m.mutations.length) {
                for (var i = 0; i < m.mutations.length; ++i)
                    $root.WAServerSync.SyncdMutation.encode(m.mutations[i], w.uint32(18).fork()).ldelim();
            }
            if (m.externalMutations != null && Object.hasOwnProperty.call(m, "externalMutations"))
                $root.WAServerSync.ExternalBlobReference.encode(m.externalMutations, w.uint32(26).fork()).ldelim();
            if (m.snapshotMac != null && Object.hasOwnProperty.call(m, "snapshotMac"))
                w.uint32(34).bytes(m.snapshotMac);
            if (m.patchMac != null && Object.hasOwnProperty.call(m, "patchMac"))
                w.uint32(42).bytes(m.patchMac);
            if (m.keyId != null && Object.hasOwnProperty.call(m, "keyId"))
                $root.WAServerSync.KeyId.encode(m.keyId, w.uint32(50).fork()).ldelim();
            if (m.exitCode != null && Object.hasOwnProperty.call(m, "exitCode"))
                $root.WAServerSync.ExitCode.encode(m.exitCode, w.uint32(58).fork()).ldelim();
            if (m.deviceIndex != null && Object.hasOwnProperty.call(m, "deviceIndex"))
                w.uint32(64).uint32(m.deviceIndex);
            if (m.clientDebugData != null && Object.hasOwnProperty.call(m, "clientDebugData"))
                w.uint32(74).bytes(m.clientDebugData);
            return w;
        };

        SyncdPatch.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAServerSync.SyncdPatch();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.version = $root.WAServerSync.SyncdVersion.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        if (!(m.mutations && m.mutations.length))
                            m.mutations = [];
                        m.mutations.push($root.WAServerSync.SyncdMutation.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 3: {
                        m.externalMutations = $root.WAServerSync.ExternalBlobReference.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.snapshotMac = r.bytes();
                        break;
                    }
                case 5: {
                        m.patchMac = r.bytes();
                        break;
                    }
                case 6: {
                        m.keyId = $root.WAServerSync.KeyId.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.exitCode = $root.WAServerSync.ExitCode.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.deviceIndex = r.uint32();
                        break;
                    }
                case 9: {
                        m.clientDebugData = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SyncdPatch.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAServerSync.SyncdPatch)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAServerSync.SyncdPatch();
            if (d.version != null) {
                if (typeof d.version !== "object")
                    throw TypeError(".WAServerSync.SyncdPatch.version: object expected");
                m.version = $root.WAServerSync.SyncdVersion.fromObject(d.version, n + 1);
            }
            if (d.mutations) {
                if (!Array.isArray(d.mutations))
                    throw TypeError(".WAServerSync.SyncdPatch.mutations: array expected");
                m.mutations = [];
                for (var i = 0; i < d.mutations.length; ++i) {
                    if (typeof d.mutations[i] !== "object")
                        throw TypeError(".WAServerSync.SyncdPatch.mutations: object expected");
                    m.mutations[i] = $root.WAServerSync.SyncdMutation.fromObject(d.mutations[i], n + 1);
                }
            }
            if (d.externalMutations != null) {
                if (typeof d.externalMutations !== "object")
                    throw TypeError(".WAServerSync.SyncdPatch.externalMutations: object expected");
                m.externalMutations = $root.WAServerSync.ExternalBlobReference.fromObject(d.externalMutations, n + 1);
            }
            if (d.snapshotMac != null) {
                if (typeof d.snapshotMac === "string")
                    $util.base64.decode(d.snapshotMac, m.snapshotMac = $util.newBuffer($util.base64.length(d.snapshotMac)), 0);
                else if (d.snapshotMac.length >= 0)
                    m.snapshotMac = d.snapshotMac;
            }
            if (d.patchMac != null) {
                if (typeof d.patchMac === "string")
                    $util.base64.decode(d.patchMac, m.patchMac = $util.newBuffer($util.base64.length(d.patchMac)), 0);
                else if (d.patchMac.length >= 0)
                    m.patchMac = d.patchMac;
            }
            if (d.keyId != null) {
                if (typeof d.keyId !== "object")
                    throw TypeError(".WAServerSync.SyncdPatch.keyId: object expected");
                m.keyId = $root.WAServerSync.KeyId.fromObject(d.keyId, n + 1);
            }
            if (d.exitCode != null) {
                if (typeof d.exitCode !== "object")
                    throw TypeError(".WAServerSync.SyncdPatch.exitCode: object expected");
                m.exitCode = $root.WAServerSync.ExitCode.fromObject(d.exitCode, n + 1);
            }
            if (d.deviceIndex != null) {
                m.deviceIndex = d.deviceIndex >>> 0;
            }
            if (d.clientDebugData != null) {
                if (typeof d.clientDebugData === "string")
                    $util.base64.decode(d.clientDebugData, m.clientDebugData = $util.newBuffer($util.base64.length(d.clientDebugData)), 0);
                else if (d.clientDebugData.length >= 0)
                    m.clientDebugData = d.clientDebugData;
            }
            return m;
        };

        SyncdPatch.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.mutations = [];
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = $root.WAServerSync.SyncdVersion.toObject(m.version, o);
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.mutations && m.mutations.length) {
                d.mutations = [];
                for (var j = 0; j < m.mutations.length; ++j) {
                    d.mutations[j] = $root.WAServerSync.SyncdMutation.toObject(m.mutations[j], o);
                }
            }
            if (m.externalMutations != null && m.hasOwnProperty("externalMutations")) {
                d.externalMutations = $root.WAServerSync.ExternalBlobReference.toObject(m.externalMutations, o);
                if (o.oneofs)
                    d._externalMutations = "externalMutations";
            }
            if (m.snapshotMac != null && m.hasOwnProperty("snapshotMac")) {
                d.snapshotMac = o.bytes === String ? $util.base64.encode(m.snapshotMac, 0, m.snapshotMac.length) : o.bytes === Array ? Array.prototype.slice.call(m.snapshotMac) : m.snapshotMac;
                if (o.oneofs)
                    d._snapshotMac = "snapshotMac";
            }
            if (m.patchMac != null && m.hasOwnProperty("patchMac")) {
                d.patchMac = o.bytes === String ? $util.base64.encode(m.patchMac, 0, m.patchMac.length) : o.bytes === Array ? Array.prototype.slice.call(m.patchMac) : m.patchMac;
                if (o.oneofs)
                    d._patchMac = "patchMac";
            }
            if (m.keyId != null && m.hasOwnProperty("keyId")) {
                d.keyId = $root.WAServerSync.KeyId.toObject(m.keyId, o);
                if (o.oneofs)
                    d._keyId = "keyId";
            }
            if (m.exitCode != null && m.hasOwnProperty("exitCode")) {
                d.exitCode = $root.WAServerSync.ExitCode.toObject(m.exitCode, o);
                if (o.oneofs)
                    d._exitCode = "exitCode";
            }
            if (m.deviceIndex != null && m.hasOwnProperty("deviceIndex")) {
                d.deviceIndex = m.deviceIndex;
                if (o.oneofs)
                    d._deviceIndex = "deviceIndex";
            }
            if (m.clientDebugData != null && m.hasOwnProperty("clientDebugData")) {
                d.clientDebugData = o.bytes === String ? $util.base64.encode(m.clientDebugData, 0, m.clientDebugData.length) : o.bytes === Array ? Array.prototype.slice.call(m.clientDebugData) : m.clientDebugData;
                if (o.oneofs)
                    d._clientDebugData = "clientDebugData";
            }
            return d;
        };

        SyncdPatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdPatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAServerSync.SyncdPatch";
        };

        return SyncdPatch;
    })();

    return WAServerSync;
})();

export { $root as default };

