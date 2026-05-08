/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WASignalLocalStorageProtocol = $root.WASignalLocalStorageProtocol = (() => {

    const WASignalLocalStorageProtocol = {};

    WASignalLocalStorageProtocol.SessionStructure = (function() {

        function SessionStructure(p) {
            this.receiverChains = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SessionStructure.prototype.sessionVersion = null;
        SessionStructure.prototype.localIdentityPublic = null;
        SessionStructure.prototype.remoteIdentityPublic = null;
        SessionStructure.prototype.rootKey = null;
        SessionStructure.prototype.previousCounter = null;
        SessionStructure.prototype.senderChain = null;
        SessionStructure.prototype.receiverChains = $util.emptyArray;
        SessionStructure.prototype.pendingKeyExchange = null;
        SessionStructure.prototype.pendingPreKey = null;
        SessionStructure.prototype.remoteRegistrationID = null;
        SessionStructure.prototype.localRegistrationID = null;
        SessionStructure.prototype.needsRefresh = null;
        SessionStructure.prototype.aliceBaseKey = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_sessionVersion", {
            get: $util.oneOfGetter($oneOfFields = ["sessionVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_localIdentityPublic", {
            get: $util.oneOfGetter($oneOfFields = ["localIdentityPublic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_remoteIdentityPublic", {
            get: $util.oneOfGetter($oneOfFields = ["remoteIdentityPublic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_rootKey", {
            get: $util.oneOfGetter($oneOfFields = ["rootKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_senderChain", {
            get: $util.oneOfGetter($oneOfFields = ["senderChain"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_pendingKeyExchange", {
            get: $util.oneOfGetter($oneOfFields = ["pendingKeyExchange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_pendingPreKey", {
            get: $util.oneOfGetter($oneOfFields = ["pendingPreKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_remoteRegistrationID", {
            get: $util.oneOfGetter($oneOfFields = ["remoteRegistrationID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_localRegistrationID", {
            get: $util.oneOfGetter($oneOfFields = ["localRegistrationID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_needsRefresh", {
            get: $util.oneOfGetter($oneOfFields = ["needsRefresh"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SessionStructure.prototype, "_aliceBaseKey", {
            get: $util.oneOfGetter($oneOfFields = ["aliceBaseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SessionStructure.create = function create(properties) {
            return new SessionStructure(properties);
        };

        SessionStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.sessionVersion != null && Object.hasOwnProperty.call(m, "sessionVersion"))
                w.uint32(8).uint32(m.sessionVersion);
            if (m.localIdentityPublic != null && Object.hasOwnProperty.call(m, "localIdentityPublic"))
                w.uint32(18).bytes(m.localIdentityPublic);
            if (m.remoteIdentityPublic != null && Object.hasOwnProperty.call(m, "remoteIdentityPublic"))
                w.uint32(26).bytes(m.remoteIdentityPublic);
            if (m.rootKey != null && Object.hasOwnProperty.call(m, "rootKey"))
                w.uint32(34).bytes(m.rootKey);
            if (m.previousCounter != null && Object.hasOwnProperty.call(m, "previousCounter"))
                w.uint32(40).uint32(m.previousCounter);
            if (m.senderChain != null && Object.hasOwnProperty.call(m, "senderChain"))
                $root.WASignalLocalStorageProtocol.SessionStructure.Chain.encode(m.senderChain, w.uint32(50).fork()).ldelim();
            if (m.receiverChains != null && m.receiverChains.length) {
                for (var i = 0; i < m.receiverChains.length; ++i)
                    $root.WASignalLocalStorageProtocol.SessionStructure.Chain.encode(m.receiverChains[i], w.uint32(58).fork()).ldelim();
            }
            if (m.pendingKeyExchange != null && Object.hasOwnProperty.call(m, "pendingKeyExchange"))
                $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.encode(m.pendingKeyExchange, w.uint32(66).fork()).ldelim();
            if (m.pendingPreKey != null && Object.hasOwnProperty.call(m, "pendingPreKey"))
                $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey.encode(m.pendingPreKey, w.uint32(74).fork()).ldelim();
            if (m.remoteRegistrationID != null && Object.hasOwnProperty.call(m, "remoteRegistrationID"))
                w.uint32(80).uint32(m.remoteRegistrationID);
            if (m.localRegistrationID != null && Object.hasOwnProperty.call(m, "localRegistrationID"))
                w.uint32(88).uint32(m.localRegistrationID);
            if (m.needsRefresh != null && Object.hasOwnProperty.call(m, "needsRefresh"))
                w.uint32(96).bool(m.needsRefresh);
            if (m.aliceBaseKey != null && Object.hasOwnProperty.call(m, "aliceBaseKey"))
                w.uint32(106).bytes(m.aliceBaseKey);
            return w;
        };

        SessionStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SessionStructure();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.sessionVersion = r.uint32();
                        break;
                    }
                case 2: {
                        m.localIdentityPublic = r.bytes();
                        break;
                    }
                case 3: {
                        m.remoteIdentityPublic = r.bytes();
                        break;
                    }
                case 4: {
                        m.rootKey = r.bytes();
                        break;
                    }
                case 5: {
                        m.previousCounter = r.uint32();
                        break;
                    }
                case 6: {
                        m.senderChain = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        if (!(m.receiverChains && m.receiverChains.length))
                            m.receiverChains = [];
                        m.receiverChains.push($root.WASignalLocalStorageProtocol.SessionStructure.Chain.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 8: {
                        m.pendingKeyExchange = $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 9: {
                        m.pendingPreKey = $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 10: {
                        m.remoteRegistrationID = r.uint32();
                        break;
                    }
                case 11: {
                        m.localRegistrationID = r.uint32();
                        break;
                    }
                case 12: {
                        m.needsRefresh = r.bool();
                        break;
                    }
                case 13: {
                        m.aliceBaseKey = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SessionStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.SessionStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.SessionStructure();
            if (d.sessionVersion != null) {
                m.sessionVersion = d.sessionVersion >>> 0;
            }
            if (d.localIdentityPublic != null) {
                if (typeof d.localIdentityPublic === "string")
                    $util.base64.decode(d.localIdentityPublic, m.localIdentityPublic = $util.newBuffer($util.base64.length(d.localIdentityPublic)), 0);
                else if (d.localIdentityPublic.length >= 0)
                    m.localIdentityPublic = d.localIdentityPublic;
            }
            if (d.remoteIdentityPublic != null) {
                if (typeof d.remoteIdentityPublic === "string")
                    $util.base64.decode(d.remoteIdentityPublic, m.remoteIdentityPublic = $util.newBuffer($util.base64.length(d.remoteIdentityPublic)), 0);
                else if (d.remoteIdentityPublic.length >= 0)
                    m.remoteIdentityPublic = d.remoteIdentityPublic;
            }
            if (d.rootKey != null) {
                if (typeof d.rootKey === "string")
                    $util.base64.decode(d.rootKey, m.rootKey = $util.newBuffer($util.base64.length(d.rootKey)), 0);
                else if (d.rootKey.length >= 0)
                    m.rootKey = d.rootKey;
            }
            if (d.previousCounter != null) {
                m.previousCounter = d.previousCounter >>> 0;
            }
            if (d.senderChain != null) {
                if (typeof d.senderChain !== "object")
                    throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.senderChain: object expected");
                m.senderChain = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.fromObject(d.senderChain, n + 1);
            }
            if (d.receiverChains) {
                if (!Array.isArray(d.receiverChains))
                    throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.receiverChains: array expected");
                m.receiverChains = [];
                for (var i = 0; i < d.receiverChains.length; ++i) {
                    if (typeof d.receiverChains[i] !== "object")
                        throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.receiverChains: object expected");
                    m.receiverChains[i] = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.fromObject(d.receiverChains[i], n + 1);
                }
            }
            if (d.pendingKeyExchange != null) {
                if (typeof d.pendingKeyExchange !== "object")
                    throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.pendingKeyExchange: object expected");
                m.pendingKeyExchange = $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.fromObject(d.pendingKeyExchange, n + 1);
            }
            if (d.pendingPreKey != null) {
                if (typeof d.pendingPreKey !== "object")
                    throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.pendingPreKey: object expected");
                m.pendingPreKey = $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey.fromObject(d.pendingPreKey, n + 1);
            }
            if (d.remoteRegistrationID != null) {
                m.remoteRegistrationID = d.remoteRegistrationID >>> 0;
            }
            if (d.localRegistrationID != null) {
                m.localRegistrationID = d.localRegistrationID >>> 0;
            }
            if (d.needsRefresh != null) {
                m.needsRefresh = Boolean(d.needsRefresh);
            }
            if (d.aliceBaseKey != null) {
                if (typeof d.aliceBaseKey === "string")
                    $util.base64.decode(d.aliceBaseKey, m.aliceBaseKey = $util.newBuffer($util.base64.length(d.aliceBaseKey)), 0);
                else if (d.aliceBaseKey.length >= 0)
                    m.aliceBaseKey = d.aliceBaseKey;
            }
            return m;
        };

        SessionStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.receiverChains = [];
            }
            if (m.sessionVersion != null && m.hasOwnProperty("sessionVersion")) {
                d.sessionVersion = m.sessionVersion;
                if (o.oneofs)
                    d._sessionVersion = "sessionVersion";
            }
            if (m.localIdentityPublic != null && m.hasOwnProperty("localIdentityPublic")) {
                d.localIdentityPublic = o.bytes === String ? $util.base64.encode(m.localIdentityPublic, 0, m.localIdentityPublic.length) : o.bytes === Array ? Array.prototype.slice.call(m.localIdentityPublic) : m.localIdentityPublic;
                if (o.oneofs)
                    d._localIdentityPublic = "localIdentityPublic";
            }
            if (m.remoteIdentityPublic != null && m.hasOwnProperty("remoteIdentityPublic")) {
                d.remoteIdentityPublic = o.bytes === String ? $util.base64.encode(m.remoteIdentityPublic, 0, m.remoteIdentityPublic.length) : o.bytes === Array ? Array.prototype.slice.call(m.remoteIdentityPublic) : m.remoteIdentityPublic;
                if (o.oneofs)
                    d._remoteIdentityPublic = "remoteIdentityPublic";
            }
            if (m.rootKey != null && m.hasOwnProperty("rootKey")) {
                d.rootKey = o.bytes === String ? $util.base64.encode(m.rootKey, 0, m.rootKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.rootKey) : m.rootKey;
                if (o.oneofs)
                    d._rootKey = "rootKey";
            }
            if (m.previousCounter != null && m.hasOwnProperty("previousCounter")) {
                d.previousCounter = m.previousCounter;
                if (o.oneofs)
                    d._previousCounter = "previousCounter";
            }
            if (m.senderChain != null && m.hasOwnProperty("senderChain")) {
                d.senderChain = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.toObject(m.senderChain, o);
                if (o.oneofs)
                    d._senderChain = "senderChain";
            }
            if (m.receiverChains && m.receiverChains.length) {
                d.receiverChains = [];
                for (var j = 0; j < m.receiverChains.length; ++j) {
                    d.receiverChains[j] = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.toObject(m.receiverChains[j], o);
                }
            }
            if (m.pendingKeyExchange != null && m.hasOwnProperty("pendingKeyExchange")) {
                d.pendingKeyExchange = $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.toObject(m.pendingKeyExchange, o);
                if (o.oneofs)
                    d._pendingKeyExchange = "pendingKeyExchange";
            }
            if (m.pendingPreKey != null && m.hasOwnProperty("pendingPreKey")) {
                d.pendingPreKey = $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey.toObject(m.pendingPreKey, o);
                if (o.oneofs)
                    d._pendingPreKey = "pendingPreKey";
            }
            if (m.remoteRegistrationID != null && m.hasOwnProperty("remoteRegistrationID")) {
                d.remoteRegistrationID = m.remoteRegistrationID;
                if (o.oneofs)
                    d._remoteRegistrationID = "remoteRegistrationID";
            }
            if (m.localRegistrationID != null && m.hasOwnProperty("localRegistrationID")) {
                d.localRegistrationID = m.localRegistrationID;
                if (o.oneofs)
                    d._localRegistrationID = "localRegistrationID";
            }
            if (m.needsRefresh != null && m.hasOwnProperty("needsRefresh")) {
                d.needsRefresh = m.needsRefresh;
                if (o.oneofs)
                    d._needsRefresh = "needsRefresh";
            }
            if (m.aliceBaseKey != null && m.hasOwnProperty("aliceBaseKey")) {
                d.aliceBaseKey = o.bytes === String ? $util.base64.encode(m.aliceBaseKey, 0, m.aliceBaseKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.aliceBaseKey) : m.aliceBaseKey;
                if (o.oneofs)
                    d._aliceBaseKey = "aliceBaseKey";
            }
            return d;
        };

        SessionStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SessionStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.SessionStructure";
        };

        SessionStructure.PendingPreKey = (function() {

            function PendingPreKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PendingPreKey.prototype.preKeyID = null;
            PendingPreKey.prototype.signedPreKeyID = null;
            PendingPreKey.prototype.baseKey = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingPreKey.prototype, "_preKeyID", {
                get: $util.oneOfGetter($oneOfFields = ["preKeyID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingPreKey.prototype, "_signedPreKeyID", {
                get: $util.oneOfGetter($oneOfFields = ["signedPreKeyID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingPreKey.prototype, "_baseKey", {
                get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            PendingPreKey.create = function create(properties) {
                return new PendingPreKey(properties);
            };

            PendingPreKey.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.preKeyID != null && Object.hasOwnProperty.call(m, "preKeyID"))
                    w.uint32(8).uint32(m.preKeyID);
                if (m.baseKey != null && Object.hasOwnProperty.call(m, "baseKey"))
                    w.uint32(18).bytes(m.baseKey);
                if (m.signedPreKeyID != null && Object.hasOwnProperty.call(m, "signedPreKeyID"))
                    w.uint32(24).int32(m.signedPreKeyID);
                return w;
            };

            PendingPreKey.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.preKeyID = r.uint32();
                            break;
                        }
                    case 3: {
                            m.signedPreKeyID = r.int32();
                            break;
                        }
                    case 2: {
                            m.baseKey = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            PendingPreKey.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASignalLocalStorageProtocol.SessionStructure.PendingPreKey();
                if (d.preKeyID != null) {
                    m.preKeyID = d.preKeyID >>> 0;
                }
                if (d.signedPreKeyID != null) {
                    m.signedPreKeyID = d.signedPreKeyID | 0;
                }
                if (d.baseKey != null) {
                    if (typeof d.baseKey === "string")
                        $util.base64.decode(d.baseKey, m.baseKey = $util.newBuffer($util.base64.length(d.baseKey)), 0);
                    else if (d.baseKey.length >= 0)
                        m.baseKey = d.baseKey;
                }
                return m;
            };

            PendingPreKey.toObject = function toObject(m, o) {
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
                if (m.signedPreKeyID != null && m.hasOwnProperty("signedPreKeyID")) {
                    d.signedPreKeyID = m.signedPreKeyID;
                    if (o.oneofs)
                        d._signedPreKeyID = "signedPreKeyID";
                }
                return d;
            };

            PendingPreKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PendingPreKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASignalLocalStorageProtocol.SessionStructure.PendingPreKey";
            };

            return PendingPreKey;
        })();

        SessionStructure.PendingKeyExchange = (function() {

            function PendingKeyExchange(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PendingKeyExchange.prototype.sequence = null;
            PendingKeyExchange.prototype.localBaseKey = null;
            PendingKeyExchange.prototype.localBaseKeyPrivate = null;
            PendingKeyExchange.prototype.localRatchetKey = null;
            PendingKeyExchange.prototype.localRatchetKeyPrivate = null;
            PendingKeyExchange.prototype.localIdentityKey = null;
            PendingKeyExchange.prototype.localIdentityKeyPrivate = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_sequence", {
                get: $util.oneOfGetter($oneOfFields = ["sequence"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localBaseKey", {
                get: $util.oneOfGetter($oneOfFields = ["localBaseKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localBaseKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localBaseKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localRatchetKey", {
                get: $util.oneOfGetter($oneOfFields = ["localRatchetKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localRatchetKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localRatchetKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localIdentityKey", {
                get: $util.oneOfGetter($oneOfFields = ["localIdentityKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(PendingKeyExchange.prototype, "_localIdentityKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localIdentityKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            PendingKeyExchange.create = function create(properties) {
                return new PendingKeyExchange(properties);
            };

            PendingKeyExchange.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.sequence != null && Object.hasOwnProperty.call(m, "sequence"))
                    w.uint32(8).uint32(m.sequence);
                if (m.localBaseKey != null && Object.hasOwnProperty.call(m, "localBaseKey"))
                    w.uint32(18).bytes(m.localBaseKey);
                if (m.localBaseKeyPrivate != null && Object.hasOwnProperty.call(m, "localBaseKeyPrivate"))
                    w.uint32(26).bytes(m.localBaseKeyPrivate);
                if (m.localRatchetKey != null && Object.hasOwnProperty.call(m, "localRatchetKey"))
                    w.uint32(34).bytes(m.localRatchetKey);
                if (m.localRatchetKeyPrivate != null && Object.hasOwnProperty.call(m, "localRatchetKeyPrivate"))
                    w.uint32(42).bytes(m.localRatchetKeyPrivate);
                if (m.localIdentityKey != null && Object.hasOwnProperty.call(m, "localIdentityKey"))
                    w.uint32(58).bytes(m.localIdentityKey);
                if (m.localIdentityKeyPrivate != null && Object.hasOwnProperty.call(m, "localIdentityKeyPrivate"))
                    w.uint32(66).bytes(m.localIdentityKeyPrivate);
                return w;
            };

            PendingKeyExchange.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.sequence = r.uint32();
                            break;
                        }
                    case 2: {
                            m.localBaseKey = r.bytes();
                            break;
                        }
                    case 3: {
                            m.localBaseKeyPrivate = r.bytes();
                            break;
                        }
                    case 4: {
                            m.localRatchetKey = r.bytes();
                            break;
                        }
                    case 5: {
                            m.localRatchetKeyPrivate = r.bytes();
                            break;
                        }
                    case 7: {
                            m.localIdentityKey = r.bytes();
                            break;
                        }
                    case 8: {
                            m.localIdentityKeyPrivate = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            PendingKeyExchange.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange();
                if (d.sequence != null) {
                    m.sequence = d.sequence >>> 0;
                }
                if (d.localBaseKey != null) {
                    if (typeof d.localBaseKey === "string")
                        $util.base64.decode(d.localBaseKey, m.localBaseKey = $util.newBuffer($util.base64.length(d.localBaseKey)), 0);
                    else if (d.localBaseKey.length >= 0)
                        m.localBaseKey = d.localBaseKey;
                }
                if (d.localBaseKeyPrivate != null) {
                    if (typeof d.localBaseKeyPrivate === "string")
                        $util.base64.decode(d.localBaseKeyPrivate, m.localBaseKeyPrivate = $util.newBuffer($util.base64.length(d.localBaseKeyPrivate)), 0);
                    else if (d.localBaseKeyPrivate.length >= 0)
                        m.localBaseKeyPrivate = d.localBaseKeyPrivate;
                }
                if (d.localRatchetKey != null) {
                    if (typeof d.localRatchetKey === "string")
                        $util.base64.decode(d.localRatchetKey, m.localRatchetKey = $util.newBuffer($util.base64.length(d.localRatchetKey)), 0);
                    else if (d.localRatchetKey.length >= 0)
                        m.localRatchetKey = d.localRatchetKey;
                }
                if (d.localRatchetKeyPrivate != null) {
                    if (typeof d.localRatchetKeyPrivate === "string")
                        $util.base64.decode(d.localRatchetKeyPrivate, m.localRatchetKeyPrivate = $util.newBuffer($util.base64.length(d.localRatchetKeyPrivate)), 0);
                    else if (d.localRatchetKeyPrivate.length >= 0)
                        m.localRatchetKeyPrivate = d.localRatchetKeyPrivate;
                }
                if (d.localIdentityKey != null) {
                    if (typeof d.localIdentityKey === "string")
                        $util.base64.decode(d.localIdentityKey, m.localIdentityKey = $util.newBuffer($util.base64.length(d.localIdentityKey)), 0);
                    else if (d.localIdentityKey.length >= 0)
                        m.localIdentityKey = d.localIdentityKey;
                }
                if (d.localIdentityKeyPrivate != null) {
                    if (typeof d.localIdentityKeyPrivate === "string")
                        $util.base64.decode(d.localIdentityKeyPrivate, m.localIdentityKeyPrivate = $util.newBuffer($util.base64.length(d.localIdentityKeyPrivate)), 0);
                    else if (d.localIdentityKeyPrivate.length >= 0)
                        m.localIdentityKeyPrivate = d.localIdentityKeyPrivate;
                }
                return m;
            };

            PendingKeyExchange.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.sequence != null && m.hasOwnProperty("sequence")) {
                    d.sequence = m.sequence;
                    if (o.oneofs)
                        d._sequence = "sequence";
                }
                if (m.localBaseKey != null && m.hasOwnProperty("localBaseKey")) {
                    d.localBaseKey = o.bytes === String ? $util.base64.encode(m.localBaseKey, 0, m.localBaseKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.localBaseKey) : m.localBaseKey;
                    if (o.oneofs)
                        d._localBaseKey = "localBaseKey";
                }
                if (m.localBaseKeyPrivate != null && m.hasOwnProperty("localBaseKeyPrivate")) {
                    d.localBaseKeyPrivate = o.bytes === String ? $util.base64.encode(m.localBaseKeyPrivate, 0, m.localBaseKeyPrivate.length) : o.bytes === Array ? Array.prototype.slice.call(m.localBaseKeyPrivate) : m.localBaseKeyPrivate;
                    if (o.oneofs)
                        d._localBaseKeyPrivate = "localBaseKeyPrivate";
                }
                if (m.localRatchetKey != null && m.hasOwnProperty("localRatchetKey")) {
                    d.localRatchetKey = o.bytes === String ? $util.base64.encode(m.localRatchetKey, 0, m.localRatchetKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.localRatchetKey) : m.localRatchetKey;
                    if (o.oneofs)
                        d._localRatchetKey = "localRatchetKey";
                }
                if (m.localRatchetKeyPrivate != null && m.hasOwnProperty("localRatchetKeyPrivate")) {
                    d.localRatchetKeyPrivate = o.bytes === String ? $util.base64.encode(m.localRatchetKeyPrivate, 0, m.localRatchetKeyPrivate.length) : o.bytes === Array ? Array.prototype.slice.call(m.localRatchetKeyPrivate) : m.localRatchetKeyPrivate;
                    if (o.oneofs)
                        d._localRatchetKeyPrivate = "localRatchetKeyPrivate";
                }
                if (m.localIdentityKey != null && m.hasOwnProperty("localIdentityKey")) {
                    d.localIdentityKey = o.bytes === String ? $util.base64.encode(m.localIdentityKey, 0, m.localIdentityKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.localIdentityKey) : m.localIdentityKey;
                    if (o.oneofs)
                        d._localIdentityKey = "localIdentityKey";
                }
                if (m.localIdentityKeyPrivate != null && m.hasOwnProperty("localIdentityKeyPrivate")) {
                    d.localIdentityKeyPrivate = o.bytes === String ? $util.base64.encode(m.localIdentityKeyPrivate, 0, m.localIdentityKeyPrivate.length) : o.bytes === Array ? Array.prototype.slice.call(m.localIdentityKeyPrivate) : m.localIdentityKeyPrivate;
                    if (o.oneofs)
                        d._localIdentityKeyPrivate = "localIdentityKeyPrivate";
                }
                return d;
            };

            PendingKeyExchange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            PendingKeyExchange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASignalLocalStorageProtocol.SessionStructure.PendingKeyExchange";
            };

            return PendingKeyExchange;
        })();

        SessionStructure.Chain = (function() {

            function Chain(p) {
                this.messageKeys = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Chain.prototype.senderRatchetKey = null;
            Chain.prototype.senderRatchetKeyPrivate = null;
            Chain.prototype.chainKey = null;
            Chain.prototype.messageKeys = $util.emptyArray;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Chain.prototype, "_senderRatchetKey", {
                get: $util.oneOfGetter($oneOfFields = ["senderRatchetKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Chain.prototype, "_senderRatchetKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["senderRatchetKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Chain.prototype, "_chainKey", {
                get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Chain.create = function create(properties) {
                return new Chain(properties);
            };

            Chain.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.senderRatchetKey != null && Object.hasOwnProperty.call(m, "senderRatchetKey"))
                    w.uint32(10).bytes(m.senderRatchetKey);
                if (m.senderRatchetKeyPrivate != null && Object.hasOwnProperty.call(m, "senderRatchetKeyPrivate"))
                    w.uint32(18).bytes(m.senderRatchetKeyPrivate);
                if (m.chainKey != null && Object.hasOwnProperty.call(m, "chainKey"))
                    $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.encode(m.chainKey, w.uint32(26).fork()).ldelim();
                if (m.messageKeys != null && m.messageKeys.length) {
                    for (var i = 0; i < m.messageKeys.length; ++i)
                        $root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(m.messageKeys[i], w.uint32(34).fork()).ldelim();
                }
                return w;
            };

            Chain.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SessionStructure.Chain();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.senderRatchetKey = r.bytes();
                            break;
                        }
                    case 2: {
                            m.senderRatchetKeyPrivate = r.bytes();
                            break;
                        }
                    case 3: {
                            m.chainKey = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    case 4: {
                            if (!(m.messageKeys && m.messageKeys.length))
                                m.messageKeys = [];
                            m.messageKeys.push($root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            Chain.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASignalLocalStorageProtocol.SessionStructure.Chain)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASignalLocalStorageProtocol.SessionStructure.Chain();
                if (d.senderRatchetKey != null) {
                    if (typeof d.senderRatchetKey === "string")
                        $util.base64.decode(d.senderRatchetKey, m.senderRatchetKey = $util.newBuffer($util.base64.length(d.senderRatchetKey)), 0);
                    else if (d.senderRatchetKey.length >= 0)
                        m.senderRatchetKey = d.senderRatchetKey;
                }
                if (d.senderRatchetKeyPrivate != null) {
                    if (typeof d.senderRatchetKeyPrivate === "string")
                        $util.base64.decode(d.senderRatchetKeyPrivate, m.senderRatchetKeyPrivate = $util.newBuffer($util.base64.length(d.senderRatchetKeyPrivate)), 0);
                    else if (d.senderRatchetKeyPrivate.length >= 0)
                        m.senderRatchetKeyPrivate = d.senderRatchetKeyPrivate;
                }
                if (d.chainKey != null) {
                    if (typeof d.chainKey !== "object")
                        throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.Chain.chainKey: object expected");
                    m.chainKey = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.fromObject(d.chainKey, n + 1);
                }
                if (d.messageKeys) {
                    if (!Array.isArray(d.messageKeys))
                        throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.Chain.messageKeys: array expected");
                    m.messageKeys = [];
                    for (var i = 0; i < d.messageKeys.length; ++i) {
                        if (typeof d.messageKeys[i] !== "object")
                            throw TypeError(".WASignalLocalStorageProtocol.SessionStructure.Chain.messageKeys: object expected");
                        m.messageKeys[i] = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(d.messageKeys[i], n + 1);
                    }
                }
                return m;
            };

            Chain.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.messageKeys = [];
                }
                if (m.senderRatchetKey != null && m.hasOwnProperty("senderRatchetKey")) {
                    d.senderRatchetKey = o.bytes === String ? $util.base64.encode(m.senderRatchetKey, 0, m.senderRatchetKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.senderRatchetKey) : m.senderRatchetKey;
                    if (o.oneofs)
                        d._senderRatchetKey = "senderRatchetKey";
                }
                if (m.senderRatchetKeyPrivate != null && m.hasOwnProperty("senderRatchetKeyPrivate")) {
                    d.senderRatchetKeyPrivate = o.bytes === String ? $util.base64.encode(m.senderRatchetKeyPrivate, 0, m.senderRatchetKeyPrivate.length) : o.bytes === Array ? Array.prototype.slice.call(m.senderRatchetKeyPrivate) : m.senderRatchetKeyPrivate;
                    if (o.oneofs)
                        d._senderRatchetKeyPrivate = "senderRatchetKeyPrivate";
                }
                if (m.chainKey != null && m.hasOwnProperty("chainKey")) {
                    d.chainKey = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.toObject(m.chainKey, o);
                    if (o.oneofs)
                        d._chainKey = "chainKey";
                }
                if (m.messageKeys && m.messageKeys.length) {
                    d.messageKeys = [];
                    for (var j = 0; j < m.messageKeys.length; ++j) {
                        d.messageKeys[j] = $root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(m.messageKeys[j], o);
                    }
                }
                return d;
            };

            Chain.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Chain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASignalLocalStorageProtocol.SessionStructure.Chain";
            };

            Chain.MessageKey = (function() {

                function MessageKey(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                MessageKey.prototype.index = null;
                MessageKey.prototype.cipherKey = null;
                MessageKey.prototype.macKey = null;
                MessageKey.prototype.IV = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_cipherKey", {
                    get: $util.oneOfGetter($oneOfFields = ["cipherKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_macKey", {
                    get: $util.oneOfGetter($oneOfFields = ["macKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(MessageKey.prototype, "_IV", {
                    get: $util.oneOfGetter($oneOfFields = ["IV"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                MessageKey.create = function create(properties) {
                    return new MessageKey(properties);
                };

                MessageKey.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                        w.uint32(8).uint32(m.index);
                    if (m.cipherKey != null && Object.hasOwnProperty.call(m, "cipherKey"))
                        w.uint32(18).bytes(m.cipherKey);
                    if (m.macKey != null && Object.hasOwnProperty.call(m, "macKey"))
                        w.uint32(26).bytes(m.macKey);
                    if (m.IV != null && Object.hasOwnProperty.call(m, "IV"))
                        w.uint32(34).bytes(m.IV);
                    return w;
                };

                MessageKey.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.index = r.uint32();
                                break;
                            }
                        case 2: {
                                m.cipherKey = r.bytes();
                                break;
                            }
                        case 3: {
                                m.macKey = r.bytes();
                                break;
                            }
                        case 4: {
                                m.IV = r.bytes();
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
                    if (d instanceof $root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey();
                    if (d.index != null) {
                        m.index = d.index >>> 0;
                    }
                    if (d.cipherKey != null) {
                        if (typeof d.cipherKey === "string")
                            $util.base64.decode(d.cipherKey, m.cipherKey = $util.newBuffer($util.base64.length(d.cipherKey)), 0);
                        else if (d.cipherKey.length >= 0)
                            m.cipherKey = d.cipherKey;
                    }
                    if (d.macKey != null) {
                        if (typeof d.macKey === "string")
                            $util.base64.decode(d.macKey, m.macKey = $util.newBuffer($util.base64.length(d.macKey)), 0);
                        else if (d.macKey.length >= 0)
                            m.macKey = d.macKey;
                    }
                    if (d.IV != null) {
                        if (typeof d.IV === "string")
                            $util.base64.decode(d.IV, m.IV = $util.newBuffer($util.base64.length(d.IV)), 0);
                        else if (d.IV.length >= 0)
                            m.IV = d.IV;
                    }
                    return m;
                };

                MessageKey.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.index != null && m.hasOwnProperty("index")) {
                        d.index = m.index;
                        if (o.oneofs)
                            d._index = "index";
                    }
                    if (m.cipherKey != null && m.hasOwnProperty("cipherKey")) {
                        d.cipherKey = o.bytes === String ? $util.base64.encode(m.cipherKey, 0, m.cipherKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.cipherKey) : m.cipherKey;
                        if (o.oneofs)
                            d._cipherKey = "cipherKey";
                    }
                    if (m.macKey != null && m.hasOwnProperty("macKey")) {
                        d.macKey = o.bytes === String ? $util.base64.encode(m.macKey, 0, m.macKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.macKey) : m.macKey;
                        if (o.oneofs)
                            d._macKey = "macKey";
                    }
                    if (m.IV != null && m.hasOwnProperty("IV")) {
                        d.IV = o.bytes === String ? $util.base64.encode(m.IV, 0, m.IV.length) : o.bytes === Array ? Array.prototype.slice.call(m.IV) : m.IV;
                        if (o.oneofs)
                            d._IV = "IV";
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
                    return typeUrlPrefix + "/WASignalLocalStorageProtocol.SessionStructure.Chain.MessageKey";
                };

                return MessageKey;
            })();

            Chain.ChainKey = (function() {

                function ChainKey(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ChainKey.prototype.index = null;
                ChainKey.prototype.key = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ChainKey.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(ChainKey.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                ChainKey.create = function create(properties) {
                    return new ChainKey(properties);
                };

                ChainKey.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                        w.uint32(8).uint32(m.index);
                    if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                        w.uint32(18).bytes(m.key);
                    return w;
                };

                ChainKey.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.index = r.uint32();
                                break;
                            }
                        case 2: {
                                m.key = r.bytes();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                ChainKey.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey();
                    if (d.index != null) {
                        m.index = d.index >>> 0;
                    }
                    if (d.key != null) {
                        if (typeof d.key === "string")
                            $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                        else if (d.key.length >= 0)
                            m.key = d.key;
                    }
                    return m;
                };

                ChainKey.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.index != null && m.hasOwnProperty("index")) {
                        d.index = m.index;
                        if (o.oneofs)
                            d._index = "index";
                    }
                    if (m.key != null && m.hasOwnProperty("key")) {
                        d.key = o.bytes === String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === Array ? Array.prototype.slice.call(m.key) : m.key;
                        if (o.oneofs)
                            d._key = "key";
                    }
                    return d;
                };

                ChainKey.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                ChainKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WASignalLocalStorageProtocol.SessionStructure.Chain.ChainKey";
                };

                return ChainKey;
            })();

            return Chain;
        })();

        return SessionStructure;
    })();

    WASignalLocalStorageProtocol.RecordStructure = (function() {

        function RecordStructure(p) {
            this.previousSessions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        RecordStructure.prototype.currentSession = null;
        RecordStructure.prototype.previousSessions = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RecordStructure.prototype, "_currentSession", {
            get: $util.oneOfGetter($oneOfFields = ["currentSession"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        RecordStructure.create = function create(properties) {
            return new RecordStructure(properties);
        };

        RecordStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.currentSession != null && Object.hasOwnProperty.call(m, "currentSession"))
                $root.WASignalLocalStorageProtocol.SessionStructure.encode(m.currentSession, w.uint32(10).fork()).ldelim();
            if (m.previousSessions != null && m.previousSessions.length) {
                for (var i = 0; i < m.previousSessions.length; ++i)
                    $root.WASignalLocalStorageProtocol.SessionStructure.encode(m.previousSessions[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        RecordStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.RecordStructure();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.currentSession = $root.WASignalLocalStorageProtocol.SessionStructure.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        if (!(m.previousSessions && m.previousSessions.length))
                            m.previousSessions = [];
                        m.previousSessions.push($root.WASignalLocalStorageProtocol.SessionStructure.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        RecordStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.RecordStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.RecordStructure();
            if (d.currentSession != null) {
                if (typeof d.currentSession !== "object")
                    throw TypeError(".WASignalLocalStorageProtocol.RecordStructure.currentSession: object expected");
                m.currentSession = $root.WASignalLocalStorageProtocol.SessionStructure.fromObject(d.currentSession, n + 1);
            }
            if (d.previousSessions) {
                if (!Array.isArray(d.previousSessions))
                    throw TypeError(".WASignalLocalStorageProtocol.RecordStructure.previousSessions: array expected");
                m.previousSessions = [];
                for (var i = 0; i < d.previousSessions.length; ++i) {
                    if (typeof d.previousSessions[i] !== "object")
                        throw TypeError(".WASignalLocalStorageProtocol.RecordStructure.previousSessions: object expected");
                    m.previousSessions[i] = $root.WASignalLocalStorageProtocol.SessionStructure.fromObject(d.previousSessions[i], n + 1);
                }
            }
            return m;
        };

        RecordStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.previousSessions = [];
            }
            if (m.currentSession != null && m.hasOwnProperty("currentSession")) {
                d.currentSession = $root.WASignalLocalStorageProtocol.SessionStructure.toObject(m.currentSession, o);
                if (o.oneofs)
                    d._currentSession = "currentSession";
            }
            if (m.previousSessions && m.previousSessions.length) {
                d.previousSessions = [];
                for (var j = 0; j < m.previousSessions.length; ++j) {
                    d.previousSessions[j] = $root.WASignalLocalStorageProtocol.SessionStructure.toObject(m.previousSessions[j], o);
                }
            }
            return d;
        };

        RecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        RecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.RecordStructure";
        };

        return RecordStructure;
    })();

    WASignalLocalStorageProtocol.PreKeyRecordStructure = (function() {

        function PreKeyRecordStructure(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PreKeyRecordStructure.prototype.ID = null;
        PreKeyRecordStructure.prototype.publicKey = null;
        PreKeyRecordStructure.prototype.privateKey = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeyRecordStructure.prototype, "_ID", {
            get: $util.oneOfGetter($oneOfFields = ["ID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeyRecordStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeyRecordStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PreKeyRecordStructure.create = function create(properties) {
            return new PreKeyRecordStructure(properties);
        };

        PreKeyRecordStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).uint32(m.ID);
            if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(18).bytes(m.publicKey);
            if (m.privateKey != null && Object.hasOwnProperty.call(m, "privateKey"))
                w.uint32(26).bytes(m.privateKey);
            return w;
        };

        PreKeyRecordStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.PreKeyRecordStructure();
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
                        m.publicKey = r.bytes();
                        break;
                    }
                case 3: {
                        m.privateKey = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        PreKeyRecordStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.PreKeyRecordStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.PreKeyRecordStructure();
            if (d.ID != null) {
                m.ID = d.ID >>> 0;
            }
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.privateKey != null) {
                if (typeof d.privateKey === "string")
                    $util.base64.decode(d.privateKey, m.privateKey = $util.newBuffer($util.base64.length(d.privateKey)), 0);
                else if (d.privateKey.length >= 0)
                    m.privateKey = d.privateKey;
            }
            return m;
        };

        PreKeyRecordStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ID != null && m.hasOwnProperty("ID")) {
                d.ID = m.ID;
                if (o.oneofs)
                    d._ID = "ID";
            }
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                d.publicKey = o.bytes === String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.publicKey) : m.publicKey;
                if (o.oneofs)
                    d._publicKey = "publicKey";
            }
            if (m.privateKey != null && m.hasOwnProperty("privateKey")) {
                d.privateKey = o.bytes === String ? $util.base64.encode(m.privateKey, 0, m.privateKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.privateKey) : m.privateKey;
                if (o.oneofs)
                    d._privateKey = "privateKey";
            }
            return d;
        };

        PreKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PreKeyRecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.PreKeyRecordStructure";
        };

        return PreKeyRecordStructure;
    })();

    WASignalLocalStorageProtocol.SignedPreKeyRecordStructure = (function() {

        function SignedPreKeyRecordStructure(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SignedPreKeyRecordStructure.prototype.ID = null;
        SignedPreKeyRecordStructure.prototype.publicKey = null;
        SignedPreKeyRecordStructure.prototype.privateKey = null;
        SignedPreKeyRecordStructure.prototype.signature = null;
        SignedPreKeyRecordStructure.prototype.timestamp = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_ID", {
            get: $util.oneOfGetter($oneOfFields = ["ID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SignedPreKeyRecordStructure.create = function create(properties) {
            return new SignedPreKeyRecordStructure(properties);
        };

        SignedPreKeyRecordStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).uint32(m.ID);
            if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(18).bytes(m.publicKey);
            if (m.privateKey != null && Object.hasOwnProperty.call(m, "privateKey"))
                w.uint32(26).bytes(m.privateKey);
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(34).bytes(m.signature);
            if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(41).fixed64(m.timestamp);
            return w;
        };

        SignedPreKeyRecordStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SignedPreKeyRecordStructure();
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
                        m.publicKey = r.bytes();
                        break;
                    }
                case 3: {
                        m.privateKey = r.bytes();
                        break;
                    }
                case 4: {
                        m.signature = r.bytes();
                        break;
                    }
                case 5: {
                        m.timestamp = r.fixed64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SignedPreKeyRecordStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.SignedPreKeyRecordStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.SignedPreKeyRecordStructure();
            if (d.ID != null) {
                m.ID = d.ID >>> 0;
            }
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.privateKey != null) {
                if (typeof d.privateKey === "string")
                    $util.base64.decode(d.privateKey, m.privateKey = $util.newBuffer($util.base64.length(d.privateKey)), 0);
                else if (d.privateKey.length >= 0)
                    m.privateKey = d.privateKey;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
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

        SignedPreKeyRecordStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.ID != null && m.hasOwnProperty("ID")) {
                d.ID = m.ID;
                if (o.oneofs)
                    d._ID = "ID";
            }
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                d.publicKey = o.bytes === String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.publicKey) : m.publicKey;
                if (o.oneofs)
                    d._publicKey = "publicKey";
            }
            if (m.privateKey != null && m.hasOwnProperty("privateKey")) {
                d.privateKey = o.bytes === String ? $util.base64.encode(m.privateKey, 0, m.privateKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.privateKey) : m.privateKey;
                if (o.oneofs)
                    d._privateKey = "privateKey";
            }
            if (m.signature != null && m.hasOwnProperty("signature")) {
                d.signature = o.bytes === String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === Array ? Array.prototype.slice.call(m.signature) : m.signature;
                if (o.oneofs)
                    d._signature = "signature";
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

        SignedPreKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SignedPreKeyRecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.SignedPreKeyRecordStructure";
        };

        return SignedPreKeyRecordStructure;
    })();

    WASignalLocalStorageProtocol.IdentityKeyPairStructure = (function() {

        function IdentityKeyPairStructure(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        IdentityKeyPairStructure.prototype.publicKey = null;
        IdentityKeyPairStructure.prototype.privateKey = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IdentityKeyPairStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(IdentityKeyPairStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        IdentityKeyPairStructure.create = function create(properties) {
            return new IdentityKeyPairStructure(properties);
        };

        IdentityKeyPairStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.publicKey != null && Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(10).bytes(m.publicKey);
            if (m.privateKey != null && Object.hasOwnProperty.call(m, "privateKey"))
                w.uint32(18).bytes(m.privateKey);
            return w;
        };

        IdentityKeyPairStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.IdentityKeyPairStructure();
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
                        m.privateKey = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        IdentityKeyPairStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.IdentityKeyPairStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.IdentityKeyPairStructure();
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.privateKey != null) {
                if (typeof d.privateKey === "string")
                    $util.base64.decode(d.privateKey, m.privateKey = $util.newBuffer($util.base64.length(d.privateKey)), 0);
                else if (d.privateKey.length >= 0)
                    m.privateKey = d.privateKey;
            }
            return m;
        };

        IdentityKeyPairStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.publicKey != null && m.hasOwnProperty("publicKey")) {
                d.publicKey = o.bytes === String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.publicKey) : m.publicKey;
                if (o.oneofs)
                    d._publicKey = "publicKey";
            }
            if (m.privateKey != null && m.hasOwnProperty("privateKey")) {
                d.privateKey = o.bytes === String ? $util.base64.encode(m.privateKey, 0, m.privateKey.length) : o.bytes === Array ? Array.prototype.slice.call(m.privateKey) : m.privateKey;
                if (o.oneofs)
                    d._privateKey = "privateKey";
            }
            return d;
        };

        IdentityKeyPairStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        IdentityKeyPairStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.IdentityKeyPairStructure";
        };

        return IdentityKeyPairStructure;
    })();

    WASignalLocalStorageProtocol.SenderKeyStateStructure = (function() {

        function SenderKeyStateStructure(p) {
            this.senderMessageKeys = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyStateStructure.prototype.senderKeyID = null;
        SenderKeyStateStructure.prototype.senderChainKey = null;
        SenderKeyStateStructure.prototype.senderSigningKey = null;
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyStateStructure.prototype, "_senderKeyID", {
            get: $util.oneOfGetter($oneOfFields = ["senderKeyID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyStateStructure.prototype, "_senderChainKey", {
            get: $util.oneOfGetter($oneOfFields = ["senderChainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyStateStructure.prototype, "_senderSigningKey", {
            get: $util.oneOfGetter($oneOfFields = ["senderSigningKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        SenderKeyStateStructure.create = function create(properties) {
            return new SenderKeyStateStructure(properties);
        };

        SenderKeyStateStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.senderKeyID != null && Object.hasOwnProperty.call(m, "senderKeyID"))
                w.uint32(8).uint32(m.senderKeyID);
            if (m.senderChainKey != null && Object.hasOwnProperty.call(m, "senderChainKey"))
                $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.encode(m.senderChainKey, w.uint32(18).fork()).ldelim();
            if (m.senderSigningKey != null && Object.hasOwnProperty.call(m, "senderSigningKey"))
                $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.encode(m.senderSigningKey, w.uint32(26).fork()).ldelim();
            if (m.senderMessageKeys != null && m.senderMessageKeys.length) {
                for (var i = 0; i < m.senderMessageKeys.length; ++i)
                    $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.encode(m.senderMessageKeys[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SenderKeyStateStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.senderKeyID = r.uint32();
                        break;
                    }
                case 2: {
                        m.senderChainKey = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.senderSigningKey = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        if (!(m.senderMessageKeys && m.senderMessageKeys.length))
                            m.senderMessageKeys = [];
                        m.senderMessageKeys.push($root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SenderKeyStateStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.SenderKeyStateStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure();
            if (d.senderKeyID != null) {
                m.senderKeyID = d.senderKeyID >>> 0;
            }
            if (d.senderChainKey != null) {
                if (typeof d.senderChainKey !== "object")
                    throw TypeError(".WASignalLocalStorageProtocol.SenderKeyStateStructure.senderChainKey: object expected");
                m.senderChainKey = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.fromObject(d.senderChainKey, n + 1);
            }
            if (d.senderSigningKey != null) {
                if (typeof d.senderSigningKey !== "object")
                    throw TypeError(".WASignalLocalStorageProtocol.SenderKeyStateStructure.senderSigningKey: object expected");
                m.senderSigningKey = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.fromObject(d.senderSigningKey, n + 1);
            }
            if (d.senderMessageKeys) {
                if (!Array.isArray(d.senderMessageKeys))
                    throw TypeError(".WASignalLocalStorageProtocol.SenderKeyStateStructure.senderMessageKeys: array expected");
                m.senderMessageKeys = [];
                for (var i = 0; i < d.senderMessageKeys.length; ++i) {
                    if (typeof d.senderMessageKeys[i] !== "object")
                        throw TypeError(".WASignalLocalStorageProtocol.SenderKeyStateStructure.senderMessageKeys: object expected");
                    m.senderMessageKeys[i] = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.fromObject(d.senderMessageKeys[i], n + 1);
                }
            }
            return m;
        };

        SenderKeyStateStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.senderMessageKeys = [];
            }
            if (m.senderKeyID != null && m.hasOwnProperty("senderKeyID")) {
                d.senderKeyID = m.senderKeyID;
                if (o.oneofs)
                    d._senderKeyID = "senderKeyID";
            }
            if (m.senderChainKey != null && m.hasOwnProperty("senderChainKey")) {
                d.senderChainKey = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.toObject(m.senderChainKey, o);
                if (o.oneofs)
                    d._senderChainKey = "senderChainKey";
            }
            if (m.senderSigningKey != null && m.hasOwnProperty("senderSigningKey")) {
                d.senderSigningKey = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.toObject(m.senderSigningKey, o);
                if (o.oneofs)
                    d._senderSigningKey = "senderSigningKey";
            }
            if (m.senderMessageKeys && m.senderMessageKeys.length) {
                d.senderMessageKeys = [];
                for (var j = 0; j < m.senderMessageKeys.length; ++j) {
                    d.senderMessageKeys[j] = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.toObject(m.senderMessageKeys[j], o);
                }
            }
            return d;
        };

        SenderKeyStateStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyStateStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.SenderKeyStateStructure";
        };

        SenderKeyStateStructure.SenderSigningKey = (function() {

            function SenderSigningKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderSigningKey.prototype["public"] = null;
            SenderSigningKey.prototype["private"] = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderSigningKey.prototype, "_public", {
                get: $util.oneOfGetter($oneOfFields = ["public"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderSigningKey.prototype, "_private", {
                get: $util.oneOfGetter($oneOfFields = ["private"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            SenderSigningKey.create = function create(properties) {
                return new SenderSigningKey(properties);
            };

            SenderSigningKey.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m["public"] != null && Object.hasOwnProperty.call(m, "public"))
                    w.uint32(10).bytes(m["public"]);
                if (m["private"] != null && Object.hasOwnProperty.call(m, "private"))
                    w.uint32(18).bytes(m["private"]);
                return w;
            };

            SenderSigningKey.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m["public"] = r.bytes();
                            break;
                        }
                    case 2: {
                            m["private"] = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            SenderSigningKey.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey();
                if (d["public"] != null) {
                    if (typeof d["public"] === "string")
                        $util.base64.decode(d["public"], m["public"] = $util.newBuffer($util.base64.length(d["public"])), 0);
                    else if (d["public"].length >= 0)
                        m["public"] = d["public"];
                }
                if (d["private"] != null) {
                    if (typeof d["private"] === "string")
                        $util.base64.decode(d["private"], m["private"] = $util.newBuffer($util.base64.length(d["private"])), 0);
                    else if (d["private"].length >= 0)
                        m["private"] = d["private"];
                }
                return m;
            };

            SenderSigningKey.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m["public"] != null && m.hasOwnProperty("public")) {
                    d["public"] = o.bytes === String ? $util.base64.encode(m["public"], 0, m["public"].length) : o.bytes === Array ? Array.prototype.slice.call(m["public"]) : m["public"];
                    if (o.oneofs)
                        d._public = "public";
                }
                if (m["private"] != null && m.hasOwnProperty("private")) {
                    d["private"] = o.bytes === String ? $util.base64.encode(m["private"], 0, m["private"].length) : o.bytes === Array ? Array.prototype.slice.call(m["private"]) : m["private"];
                    if (o.oneofs)
                        d._private = "private";
                }
                return d;
            };

            SenderSigningKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderSigningKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey";
            };

            return SenderSigningKey;
        })();

        SenderKeyStateStructure.SenderMessageKey = (function() {

            function SenderMessageKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderMessageKey.prototype.iteration = null;
            SenderMessageKey.prototype.seed = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderMessageKey.prototype, "_iteration", {
                get: $util.oneOfGetter($oneOfFields = ["iteration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderMessageKey.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            SenderMessageKey.create = function create(properties) {
                return new SenderMessageKey(properties);
            };

            SenderMessageKey.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration"))
                    w.uint32(8).uint32(m.iteration);
                if (m.seed != null && Object.hasOwnProperty.call(m, "seed"))
                    w.uint32(18).bytes(m.seed);
                return w;
            };

            SenderMessageKey.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.iteration = r.uint32();
                            break;
                        }
                    case 2: {
                            m.seed = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            SenderMessageKey.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey();
                if (d.iteration != null) {
                    m.iteration = d.iteration >>> 0;
                }
                if (d.seed != null) {
                    if (typeof d.seed === "string")
                        $util.base64.decode(d.seed, m.seed = $util.newBuffer($util.base64.length(d.seed)), 0);
                    else if (d.seed.length >= 0)
                        m.seed = d.seed;
                }
                return m;
            };

            SenderMessageKey.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.iteration != null && m.hasOwnProperty("iteration")) {
                    d.iteration = m.iteration;
                    if (o.oneofs)
                        d._iteration = "iteration";
                }
                if (m.seed != null && m.hasOwnProperty("seed")) {
                    d.seed = o.bytes === String ? $util.base64.encode(m.seed, 0, m.seed.length) : o.bytes === Array ? Array.prototype.slice.call(m.seed) : m.seed;
                    if (o.oneofs)
                        d._seed = "seed";
                }
                return d;
            };

            SenderMessageKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderMessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey";
            };

            return SenderMessageKey;
        })();

        SenderKeyStateStructure.SenderChainKey = (function() {

            function SenderChainKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderChainKey.prototype.iteration = null;
            SenderChainKey.prototype.seed = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderChainKey.prototype, "_iteration", {
                get: $util.oneOfGetter($oneOfFields = ["iteration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SenderChainKey.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            SenderChainKey.create = function create(properties) {
                return new SenderChainKey(properties);
            };

            SenderChainKey.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.iteration != null && Object.hasOwnProperty.call(m, "iteration"))
                    w.uint32(8).uint32(m.iteration);
                if (m.seed != null && Object.hasOwnProperty.call(m, "seed"))
                    w.uint32(18).bytes(m.seed);
                return w;
            };

            SenderChainKey.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.iteration = r.uint32();
                            break;
                        }
                    case 2: {
                            m.seed = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            SenderChainKey.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey();
                if (d.iteration != null) {
                    m.iteration = d.iteration >>> 0;
                }
                if (d.seed != null) {
                    if (typeof d.seed === "string")
                        $util.base64.decode(d.seed, m.seed = $util.newBuffer($util.base64.length(d.seed)), 0);
                    else if (d.seed.length >= 0)
                        m.seed = d.seed;
                }
                return m;
            };

            SenderChainKey.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.iteration != null && m.hasOwnProperty("iteration")) {
                    d.iteration = m.iteration;
                    if (o.oneofs)
                        d._iteration = "iteration";
                }
                if (m.seed != null && m.hasOwnProperty("seed")) {
                    d.seed = o.bytes === String ? $util.base64.encode(m.seed, 0, m.seed.length) : o.bytes === Array ? Array.prototype.slice.call(m.seed) : m.seed;
                    if (o.oneofs)
                        d._seed = "seed";
                }
                return d;
            };

            SenderChainKey.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderChainKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WASignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey";
            };

            return SenderChainKey;
        })();

        return SenderKeyStateStructure;
    })();

    WASignalLocalStorageProtocol.SenderKeyRecordStructure = (function() {

        function SenderKeyRecordStructure(p) {
            this.senderKeyStates = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        SenderKeyRecordStructure.create = function create(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        SenderKeyRecordStructure.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.senderKeyStates != null && m.senderKeyStates.length) {
                for (var i = 0; i < m.senderKeyStates.length; ++i)
                    $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.encode(m.senderKeyStates[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SenderKeyRecordStructure.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WASignalLocalStorageProtocol.SenderKeyRecordStructure();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.senderKeyStates && m.senderKeyStates.length))
                            m.senderKeyStates = [];
                        m.senderKeyStates.push($root.WASignalLocalStorageProtocol.SenderKeyStateStructure.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        SenderKeyRecordStructure.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WASignalLocalStorageProtocol.SenderKeyRecordStructure)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WASignalLocalStorageProtocol.SenderKeyRecordStructure();
            if (d.senderKeyStates) {
                if (!Array.isArray(d.senderKeyStates))
                    throw TypeError(".WASignalLocalStorageProtocol.SenderKeyRecordStructure.senderKeyStates: array expected");
                m.senderKeyStates = [];
                for (var i = 0; i < d.senderKeyStates.length; ++i) {
                    if (typeof d.senderKeyStates[i] !== "object")
                        throw TypeError(".WASignalLocalStorageProtocol.SenderKeyRecordStructure.senderKeyStates: object expected");
                    m.senderKeyStates[i] = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.fromObject(d.senderKeyStates[i], n + 1);
                }
            }
            return m;
        };

        SenderKeyRecordStructure.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.senderKeyStates = [];
            }
            if (m.senderKeyStates && m.senderKeyStates.length) {
                d.senderKeyStates = [];
                for (var j = 0; j < m.senderKeyStates.length; ++j) {
                    d.senderKeyStates[j] = $root.WASignalLocalStorageProtocol.SenderKeyStateStructure.toObject(m.senderKeyStates[j], o);
                }
            }
            return d;
        };

        SenderKeyRecordStructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyRecordStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WASignalLocalStorageProtocol.SenderKeyRecordStructure";
        };

        return SenderKeyRecordStructure;
    })();

    return WASignalLocalStorageProtocol;
})();

export { $root as default };

