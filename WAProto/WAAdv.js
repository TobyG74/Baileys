/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAAdv = $root.WAAdv = (() => {

    const WAAdv = {};

    WAAdv.ADVEncryptionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E2EE"] = 0;
        values[valuesById[1] = "HOSTED"] = 1;
        values[valuesById[2] = "NON_E2EE"] = 2;
        return values;
    })();

    WAAdv.ADVKeyIndexList = (function() {

        function ADVKeyIndexList(p) {
            this.validIndexes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVKeyIndexList.prototype.rawID = null;
        ADVKeyIndexList.prototype.timestamp = null;
        ADVKeyIndexList.prototype.currentIndex = null;
        ADVKeyIndexList.prototype.validIndexes = $util.emptyArray;
        ADVKeyIndexList.prototype.accountType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_rawID", {
            get: $util.oneOfGetter($oneOfFields = ["rawID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_currentIndex", {
            get: $util.oneOfGetter($oneOfFields = ["currentIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ADVKeyIndexList.create = function create(properties) {
            return new ADVKeyIndexList(properties);
        };

        ADVKeyIndexList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rawID != null && Object.hasOwnProperty.call(m, "rawID"))
                w.uint32(8).uint32(m.rawID);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(16).uint64(m.timestamp);
            if (m.currentIndex != null && Object.hasOwnProperty.call(m, "currentIndex"))
                w.uint32(24).uint32(m.currentIndex);
            if (m.validIndexes != null && m.validIndexes.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.validIndexes.length; ++i)
                    w.uint32(m.validIndexes[i]);
                w.ldelim();
            }
            if (m.accountType != null && Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(40).int32(m.accountType);
            return w;
        };

        ADVKeyIndexList.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAdv.ADVKeyIndexList();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.rawID = r.uint32();
                        break;
                    }
                case 2: {
                        m.timestamp = r.uint64();
                        break;
                    }
                case 3: {
                        m.currentIndex = r.uint32();
                        break;
                    }
                case 4: {
                        if (!(m.validIndexes && m.validIndexes.length))
                            m.validIndexes = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.validIndexes.push(r.uint32());
                        } else
                            m.validIndexes.push(r.uint32());
                        break;
                    }
                case 5: {
                        m.accountType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ADVKeyIndexList.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAdv.ADVKeyIndexList)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAdv.ADVKeyIndexList();
            if (d.rawID != null) {
                m.rawID = d.rawID >>> 0;
            }
            if (d.timestamp != null) {
                if ($util.Long)
                    (m.timestamp = $util.Long.fromValue(d.timestamp)).unsigned = true;
                else if (typeof d.timestamp === "string")
                    m.timestamp = parseInt(d.timestamp, 10);
                else if (typeof d.timestamp === "number")
                    m.timestamp = d.timestamp;
                else if (typeof d.timestamp === "object")
                    m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber(true);
            }
            if (d.currentIndex != null) {
                m.currentIndex = d.currentIndex >>> 0;
            }
            if (d.validIndexes) {
                if (!Array.isArray(d.validIndexes))
                    throw TypeError(".WAAdv.ADVKeyIndexList.validIndexes: array expected");
                m.validIndexes = [];
                for (var i = 0; i < d.validIndexes.length; ++i) {
                    m.validIndexes[i] = d.validIndexes[i] >>> 0;
                }
            }
            switch (d.accountType) {
            default:
                if (typeof d.accountType === "number") {
                    m.accountType = d.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                m.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.accountType = 2;
                break;
            }
            return m;
        };

        ADVKeyIndexList.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.validIndexes = [];
            }
            if (m.rawID != null && m.hasOwnProperty("rawID")) {
                d.rawID = m.rawID;
                if (o.oneofs)
                    d._rawID = "rawID";
            }
            if (m.timestamp != null && m.hasOwnProperty("timestamp")) {
                if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === String ? String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? $util.Long.prototype.toString.call(m.timestamp) : o.longs === Number ? new $util.LongBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0).toNumber(true) : m.timestamp;
                if (o.oneofs)
                    d._timestamp = "timestamp";
            }
            if (m.currentIndex != null && m.hasOwnProperty("currentIndex")) {
                d.currentIndex = m.currentIndex;
                if (o.oneofs)
                    d._currentIndex = "currentIndex";
            }
            if (m.validIndexes && m.validIndexes.length) {
                d.validIndexes = [];
                for (var j = 0; j < m.validIndexes.length; ++j) {
                    d.validIndexes[j] = m.validIndexes[j];
                }
            }
            if (m.accountType != null && m.hasOwnProperty("accountType")) {
                d.accountType = o.enums === String ? $root.WAAdv.ADVEncryptionType[m.accountType] === undefined ? m.accountType : $root.WAAdv.ADVEncryptionType[m.accountType] : m.accountType;
                if (o.oneofs)
                    d._accountType = "accountType";
            }
            return d;
        };

        ADVKeyIndexList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVKeyIndexList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAdv.ADVKeyIndexList";
        };

        return ADVKeyIndexList;
    })();

    WAAdv.ADVSignedKeyIndexList = (function() {

        function ADVSignedKeyIndexList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVSignedKeyIndexList.prototype.details = null;
        ADVSignedKeyIndexList.prototype.accountSignature = null;
        ADVSignedKeyIndexList.prototype.accountSignatureKey = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedKeyIndexList.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedKeyIndexList.prototype, "_accountSignature", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedKeyIndexList.prototype, "_accountSignatureKey", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignatureKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ADVSignedKeyIndexList.create = function create(properties) {
            return new ADVSignedKeyIndexList(properties);
        };

        ADVSignedKeyIndexList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.accountSignature != null && Object.hasOwnProperty.call(m, "accountSignature"))
                w.uint32(18).bytes(m.accountSignature);
            if (m.accountSignatureKey != null && Object.hasOwnProperty.call(m, "accountSignatureKey"))
                w.uint32(26).bytes(m.accountSignatureKey);
            return w;
        };

        ADVSignedKeyIndexList.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAdv.ADVSignedKeyIndexList();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.details = r.bytes();
                        break;
                    }
                case 2: {
                        m.accountSignature = r.bytes();
                        break;
                    }
                case 3: {
                        m.accountSignatureKey = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ADVSignedKeyIndexList.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAdv.ADVSignedKeyIndexList)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAdv.ADVSignedKeyIndexList();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.accountSignature != null) {
                if (typeof d.accountSignature === "string")
                    $util.base64.decode(d.accountSignature, m.accountSignature = $util.newBuffer($util.base64.length(d.accountSignature)), 0);
                else if (d.accountSignature.length >= 0)
                    m.accountSignature = d.accountSignature;
            }
            if (d.accountSignatureKey != null) {
                if (typeof d.accountSignatureKey === "string")
                    $util.base64.decode(d.accountSignatureKey, m.accountSignatureKey = $util.newBuffer($util.base64.length(d.accountSignatureKey)), 0);
                else if (d.accountSignatureKey.length >= 0)
                    m.accountSignatureKey = d.accountSignatureKey;
            }
            return m;
        };

        ADVSignedKeyIndexList.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.details != null && m.hasOwnProperty("details")) {
                d.details = o.bytes === String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === Array ? Array.prototype.slice.call(m.details) : m.details;
                if (o.oneofs)
                    d._details = "details";
            }
            if (m.accountSignature != null && m.hasOwnProperty("accountSignature")) {
                d.accountSignature = o.bytes === String ? $util.base64.encode(m.accountSignature, 0, m.accountSignature.length) : o.bytes === Array ? Array.prototype.slice.call(m.accountSignature) : m.accountSignature;
                if (o.oneofs)
                    d._accountSignature = "accountSignature";
            }
            if (m.accountSignatureKey != null && m.hasOwnProperty("accountSignatureKey")) {
                d.accountSignatureKey = o.bytes === String ? $util.base64.encode(m.accountSignatureKey, 0, m.accountSignatureKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.accountSignatureKey) : m.accountSignatureKey;
                if (o.oneofs)
                    d._accountSignatureKey = "accountSignatureKey";
            }
            return d;
        };

        ADVSignedKeyIndexList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVSignedKeyIndexList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAdv.ADVSignedKeyIndexList";
        };

        return ADVSignedKeyIndexList;
    })();

    WAAdv.ADVDeviceIdentity = (function() {

        function ADVDeviceIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVDeviceIdentity.prototype.rawID = null;
        ADVDeviceIdentity.prototype.timestamp = null;
        ADVDeviceIdentity.prototype.keyIndex = null;
        ADVDeviceIdentity.prototype.accountType = null;
        ADVDeviceIdentity.prototype.deviceType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_rawID", {
            get: $util.oneOfGetter($oneOfFields = ["rawID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_keyIndex", {
            get: $util.oneOfGetter($oneOfFields = ["keyIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_deviceType", {
            get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ADVDeviceIdentity.create = function create(properties) {
            return new ADVDeviceIdentity(properties);
        };

        ADVDeviceIdentity.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rawID != null && Object.hasOwnProperty.call(m, "rawID"))
                w.uint32(8).uint32(m.rawID);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(16).uint64(m.timestamp);
            if (m.keyIndex != null && Object.hasOwnProperty.call(m, "keyIndex"))
                w.uint32(24).uint32(m.keyIndex);
            if (m.accountType != null && Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(32).int32(m.accountType);
            if (m.deviceType != null && Object.hasOwnProperty.call(m, "deviceType"))
                w.uint32(40).int32(m.deviceType);
            return w;
        };

        ADVDeviceIdentity.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAdv.ADVDeviceIdentity();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.rawID = r.uint32();
                        break;
                    }
                case 2: {
                        m.timestamp = r.uint64();
                        break;
                    }
                case 3: {
                        m.keyIndex = r.uint32();
                        break;
                    }
                case 4: {
                        m.accountType = r.int32();
                        break;
                    }
                case 5: {
                        m.deviceType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ADVDeviceIdentity.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAdv.ADVDeviceIdentity)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAdv.ADVDeviceIdentity();
            if (d.rawID != null) {
                m.rawID = d.rawID >>> 0;
            }
            if (d.timestamp != null) {
                if ($util.Long)
                    (m.timestamp = $util.Long.fromValue(d.timestamp)).unsigned = true;
                else if (typeof d.timestamp === "string")
                    m.timestamp = parseInt(d.timestamp, 10);
                else if (typeof d.timestamp === "number")
                    m.timestamp = d.timestamp;
                else if (typeof d.timestamp === "object")
                    m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber(true);
            }
            if (d.keyIndex != null) {
                m.keyIndex = d.keyIndex >>> 0;
            }
            switch (d.accountType) {
            default:
                if (typeof d.accountType === "number") {
                    m.accountType = d.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                m.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.accountType = 2;
                break;
            }
            switch (d.deviceType) {
            default:
                if (typeof d.deviceType === "number") {
                    m.deviceType = d.deviceType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                m.deviceType = 0;
                break;
            case "HOSTED":
            case 1:
                m.deviceType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.deviceType = 2;
                break;
            }
            return m;
        };

        ADVDeviceIdentity.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.rawID != null && m.hasOwnProperty("rawID")) {
                d.rawID = m.rawID;
                if (o.oneofs)
                    d._rawID = "rawID";
            }
            if (m.timestamp != null && m.hasOwnProperty("timestamp")) {
                if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === String ? String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? $util.Long.prototype.toString.call(m.timestamp) : o.longs === Number ? new $util.LongBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0).toNumber(true) : m.timestamp;
                if (o.oneofs)
                    d._timestamp = "timestamp";
            }
            if (m.keyIndex != null && m.hasOwnProperty("keyIndex")) {
                d.keyIndex = m.keyIndex;
                if (o.oneofs)
                    d._keyIndex = "keyIndex";
            }
            if (m.accountType != null && m.hasOwnProperty("accountType")) {
                d.accountType = o.enums === String ? $root.WAAdv.ADVEncryptionType[m.accountType] === undefined ? m.accountType : $root.WAAdv.ADVEncryptionType[m.accountType] : m.accountType;
                if (o.oneofs)
                    d._accountType = "accountType";
            }
            if (m.deviceType != null && m.hasOwnProperty("deviceType")) {
                d.deviceType = o.enums === String ? $root.WAAdv.ADVEncryptionType[m.deviceType] === undefined ? m.deviceType : $root.WAAdv.ADVEncryptionType[m.deviceType] : m.deviceType;
                if (o.oneofs)
                    d._deviceType = "deviceType";
            }
            return d;
        };

        ADVDeviceIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVDeviceIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAdv.ADVDeviceIdentity";
        };

        return ADVDeviceIdentity;
    })();

    WAAdv.ADVSignedDeviceIdentity = (function() {

        function ADVSignedDeviceIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVSignedDeviceIdentity.prototype.details = null;
        ADVSignedDeviceIdentity.prototype.accountSignatureKey = null;
        ADVSignedDeviceIdentity.prototype.accountSignature = null;
        ADVSignedDeviceIdentity.prototype.deviceSignature = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_accountSignatureKey", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignatureKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_accountSignature", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_deviceSignature", {
            get: $util.oneOfGetter($oneOfFields = ["deviceSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ADVSignedDeviceIdentity.create = function create(properties) {
            return new ADVSignedDeviceIdentity(properties);
        };

        ADVSignedDeviceIdentity.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.accountSignatureKey != null && Object.hasOwnProperty.call(m, "accountSignatureKey"))
                w.uint32(18).bytes(m.accountSignatureKey);
            if (m.accountSignature != null && Object.hasOwnProperty.call(m, "accountSignature"))
                w.uint32(26).bytes(m.accountSignature);
            if (m.deviceSignature != null && Object.hasOwnProperty.call(m, "deviceSignature"))
                w.uint32(34).bytes(m.deviceSignature);
            return w;
        };

        ADVSignedDeviceIdentity.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAdv.ADVSignedDeviceIdentity();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.details = r.bytes();
                        break;
                    }
                case 2: {
                        m.accountSignatureKey = r.bytes();
                        break;
                    }
                case 3: {
                        m.accountSignature = r.bytes();
                        break;
                    }
                case 4: {
                        m.deviceSignature = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ADVSignedDeviceIdentity.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAdv.ADVSignedDeviceIdentity)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAdv.ADVSignedDeviceIdentity();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.accountSignatureKey != null) {
                if (typeof d.accountSignatureKey === "string")
                    $util.base64.decode(d.accountSignatureKey, m.accountSignatureKey = $util.newBuffer($util.base64.length(d.accountSignatureKey)), 0);
                else if (d.accountSignatureKey.length >= 0)
                    m.accountSignatureKey = d.accountSignatureKey;
            }
            if (d.accountSignature != null) {
                if (typeof d.accountSignature === "string")
                    $util.base64.decode(d.accountSignature, m.accountSignature = $util.newBuffer($util.base64.length(d.accountSignature)), 0);
                else if (d.accountSignature.length >= 0)
                    m.accountSignature = d.accountSignature;
            }
            if (d.deviceSignature != null) {
                if (typeof d.deviceSignature === "string")
                    $util.base64.decode(d.deviceSignature, m.deviceSignature = $util.newBuffer($util.base64.length(d.deviceSignature)), 0);
                else if (d.deviceSignature.length >= 0)
                    m.deviceSignature = d.deviceSignature;
            }
            return m;
        };

        ADVSignedDeviceIdentity.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.details != null && m.hasOwnProperty("details")) {
                d.details = o.bytes === String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === Array ? Array.prototype.slice.call(m.details) : m.details;
                if (o.oneofs)
                    d._details = "details";
            }
            if (m.accountSignatureKey != null && m.hasOwnProperty("accountSignatureKey")) {
                d.accountSignatureKey = o.bytes === String ? $util.base64.encode(m.accountSignatureKey, 0, m.accountSignatureKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.accountSignatureKey) : m.accountSignatureKey;
                if (o.oneofs)
                    d._accountSignatureKey = "accountSignatureKey";
            }
            if (m.accountSignature != null && m.hasOwnProperty("accountSignature")) {
                d.accountSignature = o.bytes === String ? $util.base64.encode(m.accountSignature, 0, m.accountSignature.length) : o.bytes === Array ? Array.prototype.slice.call(m.accountSignature) : m.accountSignature;
                if (o.oneofs)
                    d._accountSignature = "accountSignature";
            }
            if (m.deviceSignature != null && m.hasOwnProperty("deviceSignature")) {
                d.deviceSignature = o.bytes === String ? $util.base64.encode(m.deviceSignature, 0, m.deviceSignature.length) : o.bytes === Array ? Array.prototype.slice.call(m.deviceSignature) : m.deviceSignature;
                if (o.oneofs)
                    d._deviceSignature = "deviceSignature";
            }
            return d;
        };

        ADVSignedDeviceIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVSignedDeviceIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAdv.ADVSignedDeviceIdentity";
        };

        return ADVSignedDeviceIdentity;
    })();

    WAAdv.ADVSignedDeviceIdentityHMAC = (function() {

        function ADVSignedDeviceIdentityHMAC(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVSignedDeviceIdentityHMAC.prototype.details = null;
        ADVSignedDeviceIdentityHMAC.prototype.HMAC = null;
        ADVSignedDeviceIdentityHMAC.prototype.accountType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentityHMAC.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentityHMAC.prototype, "_HMAC", {
            get: $util.oneOfGetter($oneOfFields = ["HMAC"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentityHMAC.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ADVSignedDeviceIdentityHMAC.create = function create(properties) {
            return new ADVSignedDeviceIdentityHMAC(properties);
        };

        ADVSignedDeviceIdentityHMAC.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.HMAC != null && Object.hasOwnProperty.call(m, "HMAC"))
                w.uint32(18).bytes(m.HMAC);
            if (m.accountType != null && Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(24).int32(m.accountType);
            return w;
        };

        ADVSignedDeviceIdentityHMAC.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAdv.ADVSignedDeviceIdentityHMAC();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.details = r.bytes();
                        break;
                    }
                case 2: {
                        m.HMAC = r.bytes();
                        break;
                    }
                case 3: {
                        m.accountType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ADVSignedDeviceIdentityHMAC.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAdv.ADVSignedDeviceIdentityHMAC)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAdv.ADVSignedDeviceIdentityHMAC();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.HMAC != null) {
                if (typeof d.HMAC === "string")
                    $util.base64.decode(d.HMAC, m.HMAC = $util.newBuffer($util.base64.length(d.HMAC)), 0);
                else if (d.HMAC.length >= 0)
                    m.HMAC = d.HMAC;
            }
            switch (d.accountType) {
            default:
                if (typeof d.accountType === "number") {
                    m.accountType = d.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                m.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.accountType = 2;
                break;
            }
            return m;
        };

        ADVSignedDeviceIdentityHMAC.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.details != null && m.hasOwnProperty("details")) {
                d.details = o.bytes === String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === Array ? Array.prototype.slice.call(m.details) : m.details;
                if (o.oneofs)
                    d._details = "details";
            }
            if (m.HMAC != null && m.hasOwnProperty("HMAC")) {
                d.HMAC = o.bytes === String ? $util.base64.encode(m.HMAC, 0, m.HMAC.length) : o.bytes === Array ? Array.prototype.slice.call(m.HMAC) : m.HMAC;
                if (o.oneofs)
                    d._HMAC = "HMAC";
            }
            if (m.accountType != null && m.hasOwnProperty("accountType")) {
                d.accountType = o.enums === String ? $root.WAAdv.ADVEncryptionType[m.accountType] === undefined ? m.accountType : $root.WAAdv.ADVEncryptionType[m.accountType] : m.accountType;
                if (o.oneofs)
                    d._accountType = "accountType";
            }
            return d;
        };

        ADVSignedDeviceIdentityHMAC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVSignedDeviceIdentityHMAC.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAdv.ADVSignedDeviceIdentityHMAC";
        };

        return ADVSignedDeviceIdentityHMAC;
    })();

    return WAAdv;
})();

export { $root as default };

