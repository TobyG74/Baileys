/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAReporting = $root.WAReporting = (() => {

    const WAReporting = {};

    WAReporting.Reportable = (function() {

        function Reportable(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Reportable.prototype.minVersion = null;
        Reportable.prototype.maxVersion = null;
        Reportable.prototype.notReportableMinVersion = null;
        Reportable.prototype.never = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_minVersion", {
            get: $util.oneOfGetter($oneOfFields = ["minVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_maxVersion", {
            get: $util.oneOfGetter($oneOfFields = ["maxVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_notReportableMinVersion", {
            get: $util.oneOfGetter($oneOfFields = ["notReportableMinVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_never", {
            get: $util.oneOfGetter($oneOfFields = ["never"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Reportable.create = function create(properties) {
            return new Reportable(properties);
        };

        Reportable.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.minVersion != null && Object.hasOwnProperty.call(m, "minVersion"))
                w.uint32(8).uint32(m.minVersion);
            if (m.maxVersion != null && Object.hasOwnProperty.call(m, "maxVersion"))
                w.uint32(16).uint32(m.maxVersion);
            if (m.notReportableMinVersion != null && Object.hasOwnProperty.call(m, "notReportableMinVersion"))
                w.uint32(24).uint32(m.notReportableMinVersion);
            if (m.never != null && Object.hasOwnProperty.call(m, "never"))
                w.uint32(32).bool(m.never);
            return w;
        };

        Reportable.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAReporting.Reportable();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.minVersion = r.uint32();
                        break;
                    }
                case 2: {
                        m.maxVersion = r.uint32();
                        break;
                    }
                case 3: {
                        m.notReportableMinVersion = r.uint32();
                        break;
                    }
                case 4: {
                        m.never = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        Reportable.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAReporting.Reportable)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAReporting.Reportable();
            if (d.minVersion != null) {
                m.minVersion = d.minVersion >>> 0;
            }
            if (d.maxVersion != null) {
                m.maxVersion = d.maxVersion >>> 0;
            }
            if (d.notReportableMinVersion != null) {
                m.notReportableMinVersion = d.notReportableMinVersion >>> 0;
            }
            if (d.never != null) {
                m.never = Boolean(d.never);
            }
            return m;
        };

        Reportable.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.minVersion != null && m.hasOwnProperty("minVersion")) {
                d.minVersion = m.minVersion;
                if (o.oneofs)
                    d._minVersion = "minVersion";
            }
            if (m.maxVersion != null && m.hasOwnProperty("maxVersion")) {
                d.maxVersion = m.maxVersion;
                if (o.oneofs)
                    d._maxVersion = "maxVersion";
            }
            if (m.notReportableMinVersion != null && m.hasOwnProperty("notReportableMinVersion")) {
                d.notReportableMinVersion = m.notReportableMinVersion;
                if (o.oneofs)
                    d._notReportableMinVersion = "notReportableMinVersion";
            }
            if (m.never != null && m.hasOwnProperty("never")) {
                d.never = m.never;
                if (o.oneofs)
                    d._never = "never";
            }
            return d;
        };

        Reportable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Reportable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAReporting.Reportable";
        };

        return Reportable;
    })();

    WAReporting.Config = (function() {

        function Config(p) {
            this.field = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Config.prototype.field = $util.emptyObject;
        Config.prototype.version = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Config.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Config.create = function create(properties) {
            return new Config(properties);
        };

        Config.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.field != null && Object.hasOwnProperty.call(m, "field")) {
                for (var ks = Object.keys(m.field), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(8).uint32(ks[i]);
                    $root.WAReporting.Field.encode(m.field[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(16).uint32(m.version);
            return w;
        };

        Config.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAReporting.Config(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (m.field === $util.emptyObject)
                            m.field = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = null;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.uint32();
                                break;
                            case 2:
                                value = $root.WAReporting.Field.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            default:
                                r.skipType(tag2 & 7, n);
                                break;
                            }
                        }
                        m.field[k] = value;
                        break;
                    }
                case 2: {
                        m.version = r.uint32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        Config.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAReporting.Config)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAReporting.Config();
            if (d.field) {
                if (typeof d.field !== "object")
                    throw TypeError(".WAReporting.Config.field: object expected");
                m.field = {};
                for (var ks = Object.keys(d.field), i = 0; i < ks.length; ++i) {
                    if (ks[i] === "__proto__")
                        $util.makeProp(m.field, ks[i]);
                    if (typeof d.field[ks[i]] !== "object")
                        throw TypeError(".WAReporting.Config.field: object expected");
                    m.field[ks[i]] = $root.WAReporting.Field.fromObject(d.field[ks[i]], n + 1);
                }
            }
            if (d.version != null) {
                m.version = d.version >>> 0;
            }
            return m;
        };

        Config.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.field = {};
            }
            var ks2;
            if (m.field && (ks2 = Object.keys(m.field)).length) {
                d.field = {};
                for (var j = 0; j < ks2.length; ++j) {
                    if (ks2[j] === "__proto__")
                        $util.makeProp(d.field, ks2[j]);
                    d.field[ks2[j]] = $root.WAReporting.Field.toObject(m.field[ks2[j]], o);
                }
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                d.version = m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            return d;
        };

        Config.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAReporting.Config";
        };

        return Config;
    })();

    WAReporting.Field = (function() {

        function Field(p) {
            this.subfield = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Field.prototype.minVersion = null;
        Field.prototype.maxVersion = null;
        Field.prototype.notReportableMinVersion = null;
        Field.prototype.isMessage = null;
        Field.prototype.subfield = $util.emptyObject;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_minVersion", {
            get: $util.oneOfGetter($oneOfFields = ["minVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_maxVersion", {
            get: $util.oneOfGetter($oneOfFields = ["maxVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_notReportableMinVersion", {
            get: $util.oneOfGetter($oneOfFields = ["notReportableMinVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_isMessage", {
            get: $util.oneOfGetter($oneOfFields = ["isMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Field.create = function create(properties) {
            return new Field(properties);
        };

        Field.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.minVersion != null && Object.hasOwnProperty.call(m, "minVersion"))
                w.uint32(8).uint32(m.minVersion);
            if (m.maxVersion != null && Object.hasOwnProperty.call(m, "maxVersion"))
                w.uint32(16).uint32(m.maxVersion);
            if (m.notReportableMinVersion != null && Object.hasOwnProperty.call(m, "notReportableMinVersion"))
                w.uint32(24).uint32(m.notReportableMinVersion);
            if (m.isMessage != null && Object.hasOwnProperty.call(m, "isMessage"))
                w.uint32(32).bool(m.isMessage);
            if (m.subfield != null && Object.hasOwnProperty.call(m, "subfield")) {
                for (var ks = Object.keys(m.subfield), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(8).uint32(ks[i]);
                    $root.WAReporting.Field.encode(m.subfield[ks[i]], w.uint32(18).fork()).ldelim().ldelim();
                }
            }
            return w;
        };

        Field.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAReporting.Field(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.minVersion = r.uint32();
                        break;
                    }
                case 2: {
                        m.maxVersion = r.uint32();
                        break;
                    }
                case 3: {
                        m.notReportableMinVersion = r.uint32();
                        break;
                    }
                case 4: {
                        m.isMessage = r.bool();
                        break;
                    }
                case 5: {
                        if (m.subfield === $util.emptyObject)
                            m.subfield = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = null;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.uint32();
                                break;
                            case 2:
                                value = $root.WAReporting.Field.decode(r, r.uint32(), undefined, n + 1);
                                break;
                            default:
                                r.skipType(tag2 & 7, n);
                                break;
                            }
                        }
                        m.subfield[k] = value;
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        Field.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAReporting.Field)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAReporting.Field();
            if (d.minVersion != null) {
                m.minVersion = d.minVersion >>> 0;
            }
            if (d.maxVersion != null) {
                m.maxVersion = d.maxVersion >>> 0;
            }
            if (d.notReportableMinVersion != null) {
                m.notReportableMinVersion = d.notReportableMinVersion >>> 0;
            }
            if (d.isMessage != null) {
                m.isMessage = Boolean(d.isMessage);
            }
            if (d.subfield) {
                if (typeof d.subfield !== "object")
                    throw TypeError(".WAReporting.Field.subfield: object expected");
                m.subfield = {};
                for (var ks = Object.keys(d.subfield), i = 0; i < ks.length; ++i) {
                    if (ks[i] === "__proto__")
                        $util.makeProp(m.subfield, ks[i]);
                    if (typeof d.subfield[ks[i]] !== "object")
                        throw TypeError(".WAReporting.Field.subfield: object expected");
                    m.subfield[ks[i]] = $root.WAReporting.Field.fromObject(d.subfield[ks[i]], n + 1);
                }
            }
            return m;
        };

        Field.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.objects || o.defaults) {
                d.subfield = {};
            }
            if (m.minVersion != null && m.hasOwnProperty("minVersion")) {
                d.minVersion = m.minVersion;
                if (o.oneofs)
                    d._minVersion = "minVersion";
            }
            if (m.maxVersion != null && m.hasOwnProperty("maxVersion")) {
                d.maxVersion = m.maxVersion;
                if (o.oneofs)
                    d._maxVersion = "maxVersion";
            }
            if (m.notReportableMinVersion != null && m.hasOwnProperty("notReportableMinVersion")) {
                d.notReportableMinVersion = m.notReportableMinVersion;
                if (o.oneofs)
                    d._notReportableMinVersion = "notReportableMinVersion";
            }
            if (m.isMessage != null && m.hasOwnProperty("isMessage")) {
                d.isMessage = m.isMessage;
                if (o.oneofs)
                    d._isMessage = "isMessage";
            }
            var ks2;
            if (m.subfield && (ks2 = Object.keys(m.subfield)).length) {
                d.subfield = {};
                for (var j = 0; j < ks2.length; ++j) {
                    if (ks2[j] === "__proto__")
                        $util.makeProp(d.subfield, ks2[j]);
                    d.subfield[ks2[j]] = $root.WAReporting.Field.toObject(m.subfield[ks2[j]], o);
                }
            }
            return d;
        };

        Field.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Field.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAReporting.Field";
        };

        return Field;
    })();

    return WAReporting;
})();

export { $root as default };

