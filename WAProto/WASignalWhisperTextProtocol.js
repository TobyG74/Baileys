/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WASignalWhisperTextProtocol = $root.WASignalWhisperTextProtocol = (() => {

    const WASignalWhisperTextProtocol = {};

    WASignalWhisperTextProtocol.SignalMessage = (function() {

        function SignalMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SignalMessage.prototype.ratchetKey = null;
        SignalMessage.prototype.counter = null;
        SignalMessage.prototype.previousCounter = null;
        SignalMessage.prototype.ciphertext = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_counter", {
            get: $util.oneOfGetter($oneOfFields = ["counter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SignalMessage.create = function create(properties) {
            return new SignalMessage(properties);
        };

        SignalMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ratchetKey != null && Object.hasOwnProperty.call(m, "ratchetKey"))
                w.uint32(10).bytes(m.ratchetKey);
            if (m.counter != null && Object.hasOwnProperty.call(m, "counter"))
                w.uint32(16).uint32(m.counter);
            if (m.previousCounter != null && Object.hasOwnProperty.call(m, "previousCounter"))
                w.uint32(24).uint32(m.previousCounter);
            if (m.ciphertext != null && Object.hasOwnProperty.call(m, "ciphertext"))
                w.uint32(34).bytes(m.ciphertext);
            return w;
        };

        SignalMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalWhisperTextProtocol.SignalMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.ratchetKey = r.bytes();
                        break;
                    }
                case 2: {
                        m.counter = r.uint32();
                        break;
                    }
                case 3: {
                        m.previousCounter = r.uint32();
                        break;
                    }
                case 4: {
                        m.ciphertext = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SignalMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalWhisperTextProtocol.SignalMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalWhisperTextProtocol.SignalMessage();
            if (d.ratchetKey != null) {
                if (typeof d.ratchetKey === "string")
                    $util.base64.decode(d.ratchetKey, m.ratchetKey = $util.newBuffer($util.base64.length(d.ratchetKey)), 0);
                else if (d.ratchetKey.length >= 0)
                    m.ratchetKey = d.ratchetKey;
            }
            if (d.counter != null) {
                m.counter = d.counter >>> 0;
            }
            if (d.previousCounter != null) {
                m.previousCounter = d.previousCounter >>> 0;
            }
            if (d.ciphertext != null) {
                if (typeof d.ciphertext === "string")
                    $util.base64.decode(d.ciphertext, m.ciphertext = $util.newBuffer($util.base64.length(d.ciphertext)), 0);
                else if (d.ciphertext.length >= 0)
                    m.ciphertext = d.ciphertext;
            }
            return m;
        };

        SignalMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ratchetKey != null && m.hasOwnProperty("ratchetKey")) {
                d.ratchetKey = o.bytes === String ? $util.base64.encode(m.ratchetKey, 0, m.ratchetKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.ratchetKey) : m.ratchetKey;
                if (o.oneofs)
                    d._ratchetKey = "ratchetKey";
            }
            if (m.counter != null && m.hasOwnProperty("counter")) {
                d.counter = m.counter;
                if (o.oneofs)
                    d._counter = "counter";
            }
            if (m.previousCounter != null && m.hasOwnProperty("previousCounter")) {
                d.previousCounter = m.previousCounter;
                if (o.oneofs)
                    d._previousCounter = "previousCounter";
            }
            if (m.ciphertext != null && m.hasOwnProperty("ciphertext")) {
                d.ciphertext = o.bytes === String ? $util.base64.encode(m.ciphertext, 0, m.ciphertext.length) : o.bytes === Array ? Array.prototype.slice.call(m.ciphertext) : m.ciphertext;
                if (o.oneofs)
                    d._ciphertext = "ciphertext";
            }
            return d;
        };

        SignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalWhisperTextProtocol.SignalMessage";
        };

        return SignalMessage;
    })();

    WASignalWhisperTextProtocol.PreKeySignalMessage = (function() {

        function PreKeySignalMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PreKeySignalMessage.prototype.registrationID = null;
        PreKeySignalMessage.prototype.preKeyID = null;
        PreKeySignalMessage.prototype.signedPreKeyID = null;
        PreKeySignalMessage.prototype.baseKey = null;
        PreKeySignalMessage.prototype.identityKey = null;
        PreKeySignalMessage.prototype.message = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_registrationID", {
            get: $util.oneOfGetter($oneOfFields = ["registrationID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_preKeyID", {
            get: $util.oneOfGetter($oneOfFields = ["preKeyID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_signedPreKeyID", {
            get: $util.oneOfGetter($oneOfFields = ["signedPreKeyID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_baseKey", {
            get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_identityKey", {
            get: $util.oneOfGetter($oneOfFields = ["identityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PreKeySignalMessage.create = function create(properties) {
            return new PreKeySignalMessage(properties);
        };

        PreKeySignalMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.preKeyID != null && Object.hasOwnProperty.call(m, "preKeyID"))
                w.uint32(8).uint32(m.preKeyID);
            if (m.baseKey != null && Object.hasOwnProperty.call(m, "baseKey"))
                w.uint32(18).bytes(m.baseKey);
            if (m.identityKey != null && Object.hasOwnProperty.call(m, "identityKey"))
                w.uint32(26).bytes(m.identityKey);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(34).bytes(m.message);
            if (m.registrationID != null && Object.hasOwnProperty.call(m, "registrationID"))
                w.uint32(40).uint32(m.registrationID);
            if (m.signedPreKeyID != null && Object.hasOwnProperty.call(m, "signedPreKeyID"))
                w.uint32(48).uint32(m.signedPreKeyID);
            return w;
        };

        PreKeySignalMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalWhisperTextProtocol.PreKeySignalMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 5: {
                        m.registrationID = r.uint32();
                        break;
                    }
                case 1: {
                        m.preKeyID = r.uint32();
                        break;
                    }
                case 6: {
                        m.signedPreKeyID = r.uint32();
                        break;
                    }
                case 2: {
                        m.baseKey = r.bytes();
                        break;
                    }
                case 3: {
                        m.identityKey = r.bytes();
                        break;
                    }
                case 4: {
                        m.message = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PreKeySignalMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalWhisperTextProtocol.PreKeySignalMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalWhisperTextProtocol.PreKeySignalMessage();
            if (d.registrationID != null) {
                m.registrationID = d.registrationID >>> 0;
            }
            if (d.preKeyID != null) {
                m.preKeyID = d.preKeyID >>> 0;
            }
            if (d.signedPreKeyID != null) {
                m.signedPreKeyID = d.signedPreKeyID >>> 0;
            }
            if (d.baseKey != null) {
                if (typeof d.baseKey === "string")
                    $util.base64.decode(d.baseKey, m.baseKey = $util.newBuffer($util.base64.length(d.baseKey)), 0);
                else if (d.baseKey.length >= 0)
                    m.baseKey = d.baseKey;
            }
            if (d.identityKey != null) {
                if (typeof d.identityKey === "string")
                    $util.base64.decode(d.identityKey, m.identityKey = $util.newBuffer($util.base64.length(d.identityKey)), 0);
                else if (d.identityKey.length >= 0)
                    m.identityKey = d.identityKey;
            }
            if (d.message != null) {
                if (typeof d.message === "string")
                    $util.base64.decode(d.message, m.message = $util.newBuffer($util.base64.length(d.message)), 0);
                else if (d.message.length >= 0)
                    m.message = d.message;
            }
            return m;
        };

        PreKeySignalMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.preKeyID != null && m.hasOwnProperty("preKeyID")) {
                d.preKeyID = m.preKeyID;
                if (o.oneofs)
                    d._preKeyID = "preKeyID";
            }
            if (m.baseKey != null && m.hasOwnProperty("baseKey")) {
                d.baseKey = o.bytes === String ? $util.base64.encode(m.baseKey, 0, m.baseKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.baseKey) : m.baseKey;
                if (o.oneofs)
                    d._baseKey = "baseKey";
            }
            if (m.identityKey != null && m.hasOwnProperty("identityKey")) {
                d.identityKey = o.bytes === String ? $util.base64.encode(m.identityKey, 0, m.identityKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.identityKey) : m.identityKey;
                if (o.oneofs)
                    d._identityKey = "identityKey";
            }
            if (m.message != null && m.hasOwnProperty("message")) {
                d.message = o.bytes === String ? $util.base64.encode(m.message, 0, m.message.length) : o.bytes === Array ? Array.prototype.slice.call(m.message) : m.message;
                if (o.oneofs)
                    d._message = "message";
            }
            if (m.registrationID != null && m.hasOwnProperty("registrationID")) {
                d.registrationID = m.registrationID;
                if (o.oneofs)
                    d._registrationID = "registrationID";
            }
            if (m.signedPreKeyID != null && m.hasOwnProperty("signedPreKeyID")) {
                d.signedPreKeyID = m.signedPreKeyID;
                if (o.oneofs)
                    d._signedPreKeyID = "signedPreKeyID";
            }
            return d;
        };

        PreKeySignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PreKeySignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalWhisperTextProtocol.PreKeySignalMessage";
        };

        return PreKeySignalMessage;
    })();

    WASignalWhisperTextProtocol.KeyExchangeMessage = (function() {

        function KeyExchangeMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeyExchangeMessage.prototype.ID = null;
        KeyExchangeMessage.prototype.baseKey = null;
        KeyExchangeMessage.prototype.ratchetKey = null;
        KeyExchangeMessage.prototype.identityKey = null;
        KeyExchangeMessage.prototype.baseKeySignature = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_ID", {
            get: $util.oneOfGetter($oneOfFields = ["ID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_baseKey", {
            get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_identityKey", {
            get: $util.oneOfGetter($oneOfFields = ["identityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_baseKeySignature", {
            get: $util.oneOfGetter($oneOfFields = ["baseKeySignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        KeyExchangeMessage.create = function create(properties) {
            return new KeyExchangeMessage(properties);
        };

        KeyExchangeMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).uint32(m.ID);
            if (m.baseKey != null && Object.hasOwnProperty.call(m, "baseKey"))
                w.uint32(18).bytes(m.baseKey);
            if (m.ratchetKey != null && Object.hasOwnProperty.call(m, "ratchetKey"))
                w.uint32(26).bytes(m.ratchetKey);
            if (m.identityKey != null && Object.hasOwnProperty.call(m, "identityKey"))
                w.uint32(34).bytes(m.identityKey);
            if (m.baseKeySignature != null && Object.hasOwnProperty.call(m, "baseKeySignature"))
                w.uint32(42).bytes(m.baseKeySignature);
            return w;
        };

        KeyExchangeMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalWhisperTextProtocol.KeyExchangeMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.ID = r.uint32();
                        break;
                    }
                case 2: {
                        m.baseKey = r.bytes();
                        break;
                    }
                case 3: {
                        m.ratchetKey = r.bytes();
                        break;
                    }
                case 4: {
                        m.identityKey = r.bytes();
                        break;
                    }
                case 5: {
                        m.baseKeySignature = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        KeyExchangeMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalWhisperTextProtocol.KeyExchangeMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalWhisperTextProtocol.KeyExchangeMessage();
            if (d.ID != null) {
                m.ID = d.ID >>> 0;
            }
            if (d.baseKey != null) {
                if (typeof d.baseKey === "string")
                    $util.base64.decode(d.baseKey, m.baseKey = $util.newBuffer($util.base64.length(d.baseKey)), 0);
                else if (d.baseKey.length >= 0)
                    m.baseKey = d.baseKey;
            }
            if (d.ratchetKey != null) {
                if (typeof d.ratchetKey === "string")
                    $util.base64.decode(d.ratchetKey, m.ratchetKey = $util.newBuffer($util.base64.length(d.ratchetKey)), 0);
                else if (d.ratchetKey.length >= 0)
                    m.ratchetKey = d.ratchetKey;
            }
            if (d.identityKey != null) {
                if (typeof d.identityKey === "string")
                    $util.base64.decode(d.identityKey, m.identityKey = $util.newBuffer($util.base64.length(d.identityKey)), 0);
                else if (d.identityKey.length >= 0)
                    m.identityKey = d.identityKey;
            }
            if (d.baseKeySignature != null) {
                if (typeof d.baseKeySignature === "string")
                    $util.base64.decode(d.baseKeySignature, m.baseKeySignature = $util.newBuffer($util.base64.length(d.baseKeySignature)), 0);
                else if (d.baseKeySignature.length >= 0)
                    m.baseKeySignature = d.baseKeySignature;
            }
            return m;
        };

        KeyExchangeMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ID != null && m.hasOwnProperty("ID")) {
                d.ID = m.ID;
                if (o.oneofs)
                    d._ID = "ID";
            }
            if (m.baseKey != null && m.hasOwnProperty("baseKey")) {
                d.baseKey = o.bytes === String ? $util.base64.encode(m.baseKey, 0, m.baseKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.baseKey) : m.baseKey;
                if (o.oneofs)
                    d._baseKey = "baseKey";
            }
            if (m.ratchetKey != null && m.hasOwnProperty("ratchetKey")) {
                d.ratchetKey = o.bytes === String ? $util.base64.encode(m.ratchetKey, 0, m.ratchetKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.ratchetKey) : m.ratchetKey;
                if (o.oneofs)
                    d._ratchetKey = "ratchetKey";
            }
            if (m.identityKey != null && m.hasOwnProperty("identityKey")) {
                d.identityKey = o.bytes === String ? $util.base64.encode(m.identityKey, 0, m.identityKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.identityKey) : m.identityKey;
                if (o.oneofs)
                    d._identityKey = "identityKey";
            }
            if (m.baseKeySignature != null && m.hasOwnProperty("baseKeySignature")) {
                d.baseKeySignature = o.bytes === String ? $util.base64.encode(m.baseKeySignature, 0, m.baseKeySignature.length) : o.bytes === Array ? Array.prototype.slice.call(m.baseKeySignature) : m.baseKeySignature;
                if (o.oneofs)
                    d._baseKeySignature = "baseKeySignature";
            }
            return d;
        };

        KeyExchangeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        KeyExchangeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalWhisperTextProtocol.KeyExchangeMessage";
        };

        return KeyExchangeMessage;
    })();

    WASignalWhisperTextProtocol.SenderKeyMessage = (function() {

        function SenderKeyMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyMessage.prototype.ID = null;
        SenderKeyMessage.prototype.iteration = null;
        SenderKeyMessage.prototype.ciphertext = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_ID", {
            get: $util.oneOfGetter($oneOfFields = ["ID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SenderKeyMessage.create = function create(properties) {
            return new SenderKeyMessage(properties);
        };

        SenderKeyMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).uint32(m.ID);
            if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration"))
                w.uint32(16).uint32(m.iteration);
            if (m.ciphertext != null && Object.hasOwnProperty.call(m, "ciphertext"))
                w.uint32(26).bytes(m.ciphertext);
            return w;
        };

        SenderKeyMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalWhisperTextProtocol.SenderKeyMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.ID = r.uint32();
                        break;
                    }
                case 2: {
                        m.iteration = r.uint32();
                        break;
                    }
                case 3: {
                        m.ciphertext = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SenderKeyMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalWhisperTextProtocol.SenderKeyMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalWhisperTextProtocol.SenderKeyMessage();
            if (d.ID != null) {
                m.ID = d.ID >>> 0;
            }
            if (d.iteration != null) {
                m.iteration = d.iteration >>> 0;
            }
            if (d.ciphertext != null) {
                if (typeof d.ciphertext === "string")
                    $util.base64.decode(d.ciphertext, m.ciphertext = $util.newBuffer($util.base64.length(d.ciphertext)), 0);
                else if (d.ciphertext.length >= 0)
                    m.ciphertext = d.ciphertext;
            }
            return m;
        };

        SenderKeyMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ID != null && m.hasOwnProperty("ID")) {
                d.ID = m.ID;
                if (o.oneofs)
                    d._ID = "ID";
            }
            if (m.iteration != null && m.hasOwnProperty("iteration")) {
                d.iteration = m.iteration;
                if (o.oneofs)
                    d._iteration = "iteration";
            }
            if (m.ciphertext != null && m.hasOwnProperty("ciphertext")) {
                d.ciphertext = o.bytes === String ? $util.base64.encode(m.ciphertext, 0, m.ciphertext.length) : o.bytes === Array ? Array.prototype.slice.call(m.ciphertext) : m.ciphertext;
                if (o.oneofs)
                    d._ciphertext = "ciphertext";
            }
            return d;
        };

        SenderKeyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalWhisperTextProtocol.SenderKeyMessage";
        };

        return SenderKeyMessage;
    })();

    WASignalWhisperTextProtocol.SenderKeyDistributionMessage = (function() {

        function SenderKeyDistributionMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyDistributionMessage.prototype.ID = null;
        SenderKeyDistributionMessage.prototype.iteration = null;
        SenderKeyDistributionMessage.prototype.chainKey = null;
        SenderKeyDistributionMessage.prototype.signingKey = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_ID", {
            get: $util.oneOfGetter($oneOfFields = ["ID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_chainKey", {
            get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_signingKey", {
            get: $util.oneOfGetter($oneOfFields = ["signingKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SenderKeyDistributionMessage.create = function create(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        SenderKeyDistributionMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).uint32(m.ID);
            if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration"))
                w.uint32(16).uint32(m.iteration);
            if (m.chainKey != null && Object.hasOwnProperty.call(m, "chainKey"))
                w.uint32(26).bytes(m.chainKey);
            if (m.signingKey != null && Object.hasOwnProperty.call(m, "signingKey"))
                w.uint32(34).bytes(m.signingKey);
            return w;
        };

        SenderKeyDistributionMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalWhisperTextProtocol.SenderKeyDistributionMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.ID = r.uint32();
                        break;
                    }
                case 2: {
                        m.iteration = r.uint32();
                        break;
                    }
                case 3: {
                        m.chainKey = r.bytes();
                        break;
                    }
                case 4: {
                        m.signingKey = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SenderKeyDistributionMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalWhisperTextProtocol.SenderKeyDistributionMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalWhisperTextProtocol.SenderKeyDistributionMessage();
            if (d.ID != null) {
                m.ID = d.ID >>> 0;
            }
            if (d.iteration != null) {
                m.iteration = d.iteration >>> 0;
            }
            if (d.chainKey != null) {
                if (typeof d.chainKey === "string")
                    $util.base64.decode(d.chainKey, m.chainKey = $util.newBuffer($util.base64.length(d.chainKey)), 0);
                else if (d.chainKey.length >= 0)
                    m.chainKey = d.chainKey;
            }
            if (d.signingKey != null) {
                if (typeof d.signingKey === "string")
                    $util.base64.decode(d.signingKey, m.signingKey = $util.newBuffer($util.base64.length(d.signingKey)), 0);
                else if (d.signingKey.length >= 0)
                    m.signingKey = d.signingKey;
            }
            return m;
        };

        SenderKeyDistributionMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ID != null && m.hasOwnProperty("ID")) {
                d.ID = m.ID;
                if (o.oneofs)
                    d._ID = "ID";
            }
            if (m.iteration != null && m.hasOwnProperty("iteration")) {
                d.iteration = m.iteration;
                if (o.oneofs)
                    d._iteration = "iteration";
            }
            if (m.chainKey != null && m.hasOwnProperty("chainKey")) {
                d.chainKey = o.bytes === String ? $util.base64.encode(m.chainKey, 0, m.chainKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.chainKey) : m.chainKey;
                if (o.oneofs)
                    d._chainKey = "chainKey";
            }
            if (m.signingKey != null && m.hasOwnProperty("signingKey")) {
                d.signingKey = o.bytes === String ? $util.base64.encode(m.signingKey, 0, m.signingKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.signingKey) : m.signingKey;
                if (o.oneofs)
                    d._signingKey = "signingKey";
            }
            return d;
        };

        SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyDistributionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalWhisperTextProtocol.SenderKeyDistributionMessage";
        };

        return SenderKeyDistributionMessage;
    })();

    WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage = (function() {

        function DeviceConsistencyCodeMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceConsistencyCodeMessage.prototype.generation = null;
        DeviceConsistencyCodeMessage.prototype.signature = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceConsistencyCodeMessage.prototype, "_generation", {
            get: $util.oneOfGetter($oneOfFields = ["generation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceConsistencyCodeMessage.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        DeviceConsistencyCodeMessage.create = function create(properties) {
            return new DeviceConsistencyCodeMessage(properties);
        };

        DeviceConsistencyCodeMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.generation != null && Object.hasOwnProperty.call(m, "generation"))
                w.uint32(8).uint32(m.generation);
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            return w;
        };

        DeviceConsistencyCodeMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.generation = r.uint32();
                        break;
                    }
                case 2: {
                        m.signature = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        DeviceConsistencyCodeMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage();
            if (d.generation != null) {
                m.generation = d.generation >>> 0;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            return m;
        };

        DeviceConsistencyCodeMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.generation != null && m.hasOwnProperty("generation")) {
                d.generation = m.generation;
                if (o.oneofs)
                    d._generation = "generation";
            }
            if (m.signature != null && m.hasOwnProperty("signature")) {
                d.signature = o.bytes === String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === Array ? Array.prototype.slice.call(m.signature) : m.signature;
                if (o.oneofs)
                    d._signature = "signature";
            }
            return d;
        };

        DeviceConsistencyCodeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeviceConsistencyCodeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalWhisperTextProtocol.DeviceConsistencyCodeMessage";
        };

        return DeviceConsistencyCodeMessage;
    })();

    return WASignalWhisperTextProtocol;
})();

export { $root as default };

