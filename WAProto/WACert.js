/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WACert = $root.WACert = (() => {

    const WACert = {};

    WACert.NoiseCertificate = (function() {

        function NoiseCertificate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NoiseCertificate.prototype.details = null;
        NoiseCertificate.prototype.signature = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoiseCertificate.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoiseCertificate.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        NoiseCertificate.create = function create(properties) {
            return new NoiseCertificate(properties);
        };

        NoiseCertificate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            return w;
        };

        NoiseCertificate.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACert.NoiseCertificate();
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

        NoiseCertificate.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACert.NoiseCertificate)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACert.NoiseCertificate();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            return m;
        };

        NoiseCertificate.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.details != null && m.hasOwnProperty("details")) {
                d.details = o.bytes === String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === Array ? Array.prototype.slice.call(m.details) : m.details;
                if (o.oneofs)
                    d._details = "details";
            }
            if (m.signature != null && m.hasOwnProperty("signature")) {
                d.signature = o.bytes === String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === Array ? Array.prototype.slice.call(m.signature) : m.signature;
                if (o.oneofs)
                    d._signature = "signature";
            }
            return d;
        };

        NoiseCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        NoiseCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACert.NoiseCertificate";
        };

        NoiseCertificate.Details = (function() {

            function Details(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Details.prototype.serial = null;
            Details.prototype.issuer = null;
            Details.prototype.expires = null;
            Details.prototype.subject = null;
            Details.prototype.key = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_serial", {
                get: $util.oneOfGetter($oneOfFields = ["serial"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_issuer", {
                get: $util.oneOfGetter($oneOfFields = ["issuer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_expires", {
                get: $util.oneOfGetter($oneOfFields = ["expires"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_subject", {
                get: $util.oneOfGetter($oneOfFields = ["subject"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Details.create = function create(properties) {
                return new Details(properties);
            };

            Details.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.serial != null && Object.hasOwnProperty.call(m, "serial"))
                    w.uint32(8).uint32(m.serial);
                if (m.issuer != null && Object.hasOwnProperty.call(m, "issuer"))
                    w.uint32(18).string(m.issuer);
                if (m.expires != null && Object.hasOwnProperty.call(m, "expires"))
                    w.uint32(24).uint64(m.expires);
                if (m.subject != null && Object.hasOwnProperty.call(m, "subject"))
                    w.uint32(34).string(m.subject);
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(42).bytes(m.key);
                return w;
            };

            Details.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WACert.NoiseCertificate.Details();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.serial = r.uint32();
                            break;
                        }
                    case 2: {
                            m.issuer = r.string();
                            break;
                        }
                    case 3: {
                            m.expires = r.uint64();
                            break;
                        }
                    case 4: {
                            m.subject = r.string();
                            break;
                        }
                    case 5: {
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

            Details.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WACert.NoiseCertificate.Details)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WACert.NoiseCertificate.Details();
                if (d.serial != null) {
                    m.serial = d.serial >>> 0;
                }
                if (d.issuer != null) {
                    m.issuer = String(d.issuer);
                }
                if (d.expires != null) {
                    if ($util.Long)
                        (m.expires = $util.Long.fromValue(d.expires)).unsigned = true;
                    else if (typeof d.expires === "string")
                        m.expires = parseInt(d.expires, 10);
                    else if (typeof d.expires === "number")
                        m.expires = d.expires;
                    else if (typeof d.expires === "object")
                        m.expires = new $util.LongBits(d.expires.low >>> 0, d.expires.high >>> 0).toNumber(true);
                }
                if (d.subject != null) {
                    m.subject = String(d.subject);
                }
                if (d.key != null) {
                    if (typeof d.key === "string")
                        $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                    else if (d.key.length >= 0)
                        m.key = d.key;
                }
                return m;
            };

            Details.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.serial != null && m.hasOwnProperty("serial")) {
                    d.serial = m.serial;
                    if (o.oneofs)
                        d._serial = "serial";
                }
                if (m.issuer != null && m.hasOwnProperty("issuer")) {
                    d.issuer = m.issuer;
                    if (o.oneofs)
                        d._issuer = "issuer";
                }
                if (m.expires != null && m.hasOwnProperty("expires")) {
                    if (typeof m.expires === "number")
                        d.expires = o.longs === String ? String(m.expires) : m.expires;
                    else
                        d.expires = o.longs === String ? $util.Long.prototype.toString.call(m.expires) : o.longs === Number ? new $util.LongBits(m.expires.low >>> 0, m.expires.high >>> 0).toNumber(true) : m.expires;
                    if (o.oneofs)
                        d._expires = "expires";
                }
                if (m.subject != null && m.hasOwnProperty("subject")) {
                    d.subject = m.subject;
                    if (o.oneofs)
                        d._subject = "subject";
                }
                if (m.key != null && m.hasOwnProperty("key")) {
                    d.key = o.bytes === String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === Array ? Array.prototype.slice.call(m.key) : m.key;
                    if (o.oneofs)
                        d._key = "key";
                }
                return d;
            };

            Details.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Details.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WACert.NoiseCertificate.Details";
            };

            return Details;
        })();

        return NoiseCertificate;
    })();

    WACert.CertChain = (function() {

        function CertChain(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CertChain.prototype.leaf = null;
        CertChain.prototype.intermediate = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CertChain.prototype, "_leaf", {
            get: $util.oneOfGetter($oneOfFields = ["leaf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CertChain.prototype, "_intermediate", {
            get: $util.oneOfGetter($oneOfFields = ["intermediate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        CertChain.create = function create(properties) {
            return new CertChain(properties);
        };

        CertChain.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.leaf != null && Object.hasOwnProperty.call(m, "leaf"))
                $root.WACert.CertChain.NoiseCertificate.encode(m.leaf, w.uint32(10).fork()).ldelim();
            if (m.intermediate != null && Object.hasOwnProperty.call(m, "intermediate"))
                $root.WACert.CertChain.NoiseCertificate.encode(m.intermediate, w.uint32(18).fork()).ldelim();
            return w;
        };

        CertChain.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WACert.CertChain();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.leaf = $root.WACert.CertChain.NoiseCertificate.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.intermediate = $root.WACert.CertChain.NoiseCertificate.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        CertChain.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WACert.CertChain)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WACert.CertChain();
            if (d.leaf != null) {
                if (typeof d.leaf !== "object")
                    throw TypeError(".WACert.CertChain.leaf: object expected");
                m.leaf = $root.WACert.CertChain.NoiseCertificate.fromObject(d.leaf, n + 1);
            }
            if (d.intermediate != null) {
                if (typeof d.intermediate !== "object")
                    throw TypeError(".WACert.CertChain.intermediate: object expected");
                m.intermediate = $root.WACert.CertChain.NoiseCertificate.fromObject(d.intermediate, n + 1);
            }
            return m;
        };

        CertChain.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.leaf != null && m.hasOwnProperty("leaf")) {
                d.leaf = $root.WACert.CertChain.NoiseCertificate.toObject(m.leaf, o);
                if (o.oneofs)
                    d._leaf = "leaf";
            }
            if (m.intermediate != null && m.hasOwnProperty("intermediate")) {
                d.intermediate = $root.WACert.CertChain.NoiseCertificate.toObject(m.intermediate, o);
                if (o.oneofs)
                    d._intermediate = "intermediate";
            }
            return d;
        };

        CertChain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        CertChain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WACert.CertChain";
        };

        CertChain.NoiseCertificate = (function() {

            function NoiseCertificate(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NoiseCertificate.prototype.details = null;
            NoiseCertificate.prototype.signature = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(NoiseCertificate.prototype, "_details", {
                get: $util.oneOfGetter($oneOfFields = ["details"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(NoiseCertificate.prototype, "_signature", {
                get: $util.oneOfGetter($oneOfFields = ["signature"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            NoiseCertificate.create = function create(properties) {
                return new NoiseCertificate(properties);
            };

            NoiseCertificate.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                    w.uint32(10).bytes(m.details);
                if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                    w.uint32(18).bytes(m.signature);
                return w;
            };

            NoiseCertificate.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WACert.CertChain.NoiseCertificate();
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

            NoiseCertificate.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WACert.CertChain.NoiseCertificate)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WACert.CertChain.NoiseCertificate();
                if (d.details != null) {
                    if (typeof d.details === "string")
                        $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                    else if (d.details.length >= 0)
                        m.details = d.details;
                }
                if (d.signature != null) {
                    if (typeof d.signature === "string")
                        $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                    else if (d.signature.length >= 0)
                        m.signature = d.signature;
                }
                return m;
            };

            NoiseCertificate.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.details != null && m.hasOwnProperty("details")) {
                    d.details = o.bytes === String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === Array ? Array.prototype.slice.call(m.details) : m.details;
                    if (o.oneofs)
                        d._details = "details";
                }
                if (m.signature != null && m.hasOwnProperty("signature")) {
                    d.signature = o.bytes === String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === Array ? Array.prototype.slice.call(m.signature) : m.signature;
                    if (o.oneofs)
                        d._signature = "signature";
                }
                return d;
            };

            NoiseCertificate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            NoiseCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WACert.CertChain.NoiseCertificate";
            };

            NoiseCertificate.Details = (function() {

                function Details(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Details.prototype.serial = null;
                Details.prototype.issuerSerial = null;
                Details.prototype.key = null;
                Details.prototype.notBefore = null;
                Details.prototype.notAfter = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_serial", {
                    get: $util.oneOfGetter($oneOfFields = ["serial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_issuerSerial", {
                    get: $util.oneOfGetter($oneOfFields = ["issuerSerial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_notBefore", {
                    get: $util.oneOfGetter($oneOfFields = ["notBefore"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_notAfter", {
                    get: $util.oneOfGetter($oneOfFields = ["notAfter"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Details.create = function create(properties) {
                    return new Details(properties);
                };

                Details.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.serial != null && Object.hasOwnProperty.call(m, "serial"))
                        w.uint32(8).uint32(m.serial);
                    if (m.issuerSerial != null && Object.hasOwnProperty.call(m, "issuerSerial"))
                        w.uint32(16).uint32(m.issuerSerial);
                    if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                        w.uint32(26).bytes(m.key);
                    if (m.notBefore != null && Object.hasOwnProperty.call(m, "notBefore"))
                        w.uint32(32).uint64(m.notBefore);
                    if (m.notAfter != null && Object.hasOwnProperty.call(m, "notAfter"))
                        w.uint32(40).uint64(m.notAfter);
                    return w;
                };

                Details.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WACert.CertChain.NoiseCertificate.Details();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.serial = r.uint32();
                                break;
                            }
                        case 2: {
                                m.issuerSerial = r.uint32();
                                break;
                            }
                        case 3: {
                                m.key = r.bytes();
                                break;
                            }
                        case 4: {
                                m.notBefore = r.uint64();
                                break;
                            }
                        case 5: {
                                m.notAfter = r.uint64();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Details.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WACert.CertChain.NoiseCertificate.Details)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WACert.CertChain.NoiseCertificate.Details();
                    if (d.serial != null) {
                        m.serial = d.serial >>> 0;
                    }
                    if (d.issuerSerial != null) {
                        m.issuerSerial = d.issuerSerial >>> 0;
                    }
                    if (d.key != null) {
                        if (typeof d.key === "string")
                            $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                        else if (d.key.length >= 0)
                            m.key = d.key;
                    }
                    if (d.notBefore != null) {
                        if ($util.Long)
                            (m.notBefore = $util.Long.fromValue(d.notBefore)).unsigned = true;
                        else if (typeof d.notBefore === "string")
                            m.notBefore = parseInt(d.notBefore, 10);
                        else if (typeof d.notBefore === "number")
                            m.notBefore = d.notBefore;
                        else if (typeof d.notBefore === "object")
                            m.notBefore = new $util.LongBits(d.notBefore.low >>> 0, d.notBefore.high >>> 0).toNumber(true);
                    }
                    if (d.notAfter != null) {
                        if ($util.Long)
                            (m.notAfter = $util.Long.fromValue(d.notAfter)).unsigned = true;
                        else if (typeof d.notAfter === "string")
                            m.notAfter = parseInt(d.notAfter, 10);
                        else if (typeof d.notAfter === "number")
                            m.notAfter = d.notAfter;
                        else if (typeof d.notAfter === "object")
                            m.notAfter = new $util.LongBits(d.notAfter.low >>> 0, d.notAfter.high >>> 0).toNumber(true);
                    }
                    return m;
                };

                Details.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.serial != null && m.hasOwnProperty("serial")) {
                        d.serial = m.serial;
                        if (o.oneofs)
                            d._serial = "serial";
                    }
                    if (m.issuerSerial != null && m.hasOwnProperty("issuerSerial")) {
                        d.issuerSerial = m.issuerSerial;
                        if (o.oneofs)
                            d._issuerSerial = "issuerSerial";
                    }
                    if (m.key != null && m.hasOwnProperty("key")) {
                        d.key = o.bytes === String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === Array ? Array.prototype.slice.call(m.key) : m.key;
                        if (o.oneofs)
                            d._key = "key";
                    }
                    if (m.notBefore != null && m.hasOwnProperty("notBefore")) {
                        if (typeof m.notBefore === "number")
                            d.notBefore = o.longs === String ? String(m.notBefore) : m.notBefore;
                        else
                            d.notBefore = o.longs === String ? $util.Long.prototype.toString.call(m.notBefore) : o.longs === Number ? new $util.LongBits(m.notBefore.low >>> 0, m.notBefore.high >>> 0).toNumber(true) : m.notBefore;
                        if (o.oneofs)
                            d._notBefore = "notBefore";
                    }
                    if (m.notAfter != null && m.hasOwnProperty("notAfter")) {
                        if (typeof m.notAfter === "number")
                            d.notAfter = o.longs === String ? String(m.notAfter) : m.notAfter;
                        else
                            d.notAfter = o.longs === String ? $util.Long.prototype.toString.call(m.notAfter) : o.longs === Number ? new $util.LongBits(m.notAfter.low >>> 0, m.notAfter.high >>> 0).toNumber(true) : m.notAfter;
                        if (o.oneofs)
                            d._notAfter = "notAfter";
                    }
                    return d;
                };

                Details.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Details.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WACert.CertChain.NoiseCertificate.Details";
                };

                return Details;
            })();

            return NoiseCertificate;
        })();

        return CertChain;
    })();

    return WACert;
})();

export { $root as default };

