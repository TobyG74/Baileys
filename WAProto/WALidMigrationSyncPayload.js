/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WALidMigrationSyncPayload = $root.WALidMigrationSyncPayload = (() => {

    const WALidMigrationSyncPayload = {};

    WALidMigrationSyncPayload.LIDMigrationMapping = (function() {

        function LIDMigrationMapping(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LIDMigrationMapping.prototype.pn = null;
        LIDMigrationMapping.prototype.assignedLid = null;
        LIDMigrationMapping.prototype.latestLid = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMapping.prototype, "_pn", {
            get: $util.oneOfGetter($oneOfFields = ["pn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMapping.prototype, "_assignedLid", {
            get: $util.oneOfGetter($oneOfFields = ["assignedLid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMapping.prototype, "_latestLid", {
            get: $util.oneOfGetter($oneOfFields = ["latestLid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LIDMigrationMapping.create = function create(properties) {
            return new LIDMigrationMapping(properties);
        };

        LIDMigrationMapping.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pn != null && Object.hasOwnProperty.call(m, "pn"))
                w.uint32(8).uint64(m.pn);
            if (m.assignedLid != null && Object.hasOwnProperty.call(m, "assignedLid"))
                w.uint32(16).uint64(m.assignedLid);
            if (m.latestLid != null && Object.hasOwnProperty.call(m, "latestLid"))
                w.uint32(24).uint64(m.latestLid);
            return w;
        };

        LIDMigrationMapping.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WALidMigrationSyncPayload.LIDMigrationMapping();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.pn = r.uint64();
                        break;
                    }
                case 2: {
                        m.assignedLid = r.uint64();
                        break;
                    }
                case 3: {
                        m.latestLid = r.uint64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LIDMigrationMapping.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WALidMigrationSyncPayload.LIDMigrationMapping)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WALidMigrationSyncPayload.LIDMigrationMapping();
            if (d.pn != null) {
                if ($util.Long)
                    (m.pn = $util.Long.fromValue(d.pn)).unsigned = true;
                else if (typeof d.pn === "string")
                    m.pn = parseInt(d.pn, 10);
                else if (typeof d.pn === "number")
                    m.pn = d.pn;
                else if (typeof d.pn === "object")
                    m.pn = new $util.LongBits(d.pn.low >>> 0, d.pn.high >>> 0).toNumber(true);
            }
            if (d.assignedLid != null) {
                if ($util.Long)
                    (m.assignedLid = $util.Long.fromValue(d.assignedLid)).unsigned = true;
                else if (typeof d.assignedLid === "string")
                    m.assignedLid = parseInt(d.assignedLid, 10);
                else if (typeof d.assignedLid === "number")
                    m.assignedLid = d.assignedLid;
                else if (typeof d.assignedLid === "object")
                    m.assignedLid = new $util.LongBits(d.assignedLid.low >>> 0, d.assignedLid.high >>> 0).toNumber(true);
            }
            if (d.latestLid != null) {
                if ($util.Long)
                    (m.latestLid = $util.Long.fromValue(d.latestLid)).unsigned = true;
                else if (typeof d.latestLid === "string")
                    m.latestLid = parseInt(d.latestLid, 10);
                else if (typeof d.latestLid === "number")
                    m.latestLid = d.latestLid;
                else if (typeof d.latestLid === "object")
                    m.latestLid = new $util.LongBits(d.latestLid.low >>> 0, d.latestLid.high >>> 0).toNumber(true);
            }
            return m;
        };

        LIDMigrationMapping.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.pn != null && m.hasOwnProperty("pn")) {
                if (typeof m.pn === "number")
                    d.pn = o.longs === String ? String(m.pn) : m.pn;
                else
                    d.pn = o.longs === String ? $util.Long.prototype.toString.call(m.pn) : o.longs === Number ? new $util.LongBits(m.pn.low >>> 0, m.pn.high >>> 0).toNumber(true) : m.pn;
                if (o.oneofs)
                    d._pn = "pn";
            }
            if (m.assignedLid != null && m.hasOwnProperty("assignedLid")) {
                if (typeof m.assignedLid === "number")
                    d.assignedLid = o.longs === String ? String(m.assignedLid) : m.assignedLid;
                else
                    d.assignedLid = o.longs === String ? $util.Long.prototype.toString.call(m.assignedLid) : o.longs === Number ? new $util.LongBits(m.assignedLid.low >>> 0, m.assignedLid.high >>> 0).toNumber(true) : m.assignedLid;
                if (o.oneofs)
                    d._assignedLid = "assignedLid";
            }
            if (m.latestLid != null && m.hasOwnProperty("latestLid")) {
                if (typeof m.latestLid === "number")
                    d.latestLid = o.longs === String ? String(m.latestLid) : m.latestLid;
                else
                    d.latestLid = o.longs === String ? $util.Long.prototype.toString.call(m.latestLid) : o.longs === Number ? new $util.LongBits(m.latestLid.low >>> 0, m.latestLid.high >>> 0).toNumber(true) : m.latestLid;
                if (o.oneofs)
                    d._latestLid = "latestLid";
            }
            return d;
        };

        LIDMigrationMapping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LIDMigrationMapping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WALidMigrationSyncPayload.LIDMigrationMapping";
        };

        return LIDMigrationMapping;
    })();

    WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload = (function() {

        function LIDMigrationMappingSyncPayload(p) {
            this.pnToLidMappings = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LIDMigrationMappingSyncPayload.prototype.pnToLidMappings = $util.emptyArray;
        LIDMigrationMappingSyncPayload.prototype.chatDbMigrationTimestamp = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMappingSyncPayload.prototype, "_chatDbMigrationTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["chatDbMigrationTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LIDMigrationMappingSyncPayload.create = function create(properties) {
            return new LIDMigrationMappingSyncPayload(properties);
        };

        LIDMigrationMappingSyncPayload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pnToLidMappings != null && m.pnToLidMappings.length) {
                for (var i = 0; i < m.pnToLidMappings.length; ++i)
                    $root.WALidMigrationSyncPayload.LIDMigrationMapping.encode(m.pnToLidMappings[i], w.uint32(10).fork()).ldelim();
            }
            if (m.chatDbMigrationTimestamp != null && Object.hasOwnProperty.call(m, "chatDbMigrationTimestamp"))
                w.uint32(16).uint64(m.chatDbMigrationTimestamp);
            return w;
        };

        LIDMigrationMappingSyncPayload.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.pnToLidMappings && m.pnToLidMappings.length))
                            m.pnToLidMappings = [];
                        m.pnToLidMappings.push($root.WALidMigrationSyncPayload.LIDMigrationMapping.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 2: {
                        m.chatDbMigrationTimestamp = r.uint64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LIDMigrationMappingSyncPayload.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload();
            if (d.pnToLidMappings) {
                if (!Array.isArray(d.pnToLidMappings))
                    throw TypeError(".WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload.pnToLidMappings: array expected");
                m.pnToLidMappings = [];
                for (var i = 0; i < d.pnToLidMappings.length; ++i) {
                    if (typeof d.pnToLidMappings[i] !== "object")
                        throw TypeError(".WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload.pnToLidMappings: object expected");
                    m.pnToLidMappings[i] = $root.WALidMigrationSyncPayload.LIDMigrationMapping.fromObject(d.pnToLidMappings[i], n + 1);
                }
            }
            if (d.chatDbMigrationTimestamp != null) {
                if ($util.Long)
                    (m.chatDbMigrationTimestamp = $util.Long.fromValue(d.chatDbMigrationTimestamp)).unsigned = true;
                else if (typeof d.chatDbMigrationTimestamp === "string")
                    m.chatDbMigrationTimestamp = parseInt(d.chatDbMigrationTimestamp, 10);
                else if (typeof d.chatDbMigrationTimestamp === "number")
                    m.chatDbMigrationTimestamp = d.chatDbMigrationTimestamp;
                else if (typeof d.chatDbMigrationTimestamp === "object")
                    m.chatDbMigrationTimestamp = new $util.LongBits(d.chatDbMigrationTimestamp.low >>> 0, d.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
            }
            return m;
        };

        LIDMigrationMappingSyncPayload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.pnToLidMappings = [];
            }
            if (m.pnToLidMappings && m.pnToLidMappings.length) {
                d.pnToLidMappings = [];
                for (var j = 0; j < m.pnToLidMappings.length; ++j) {
                    d.pnToLidMappings[j] = $root.WALidMigrationSyncPayload.LIDMigrationMapping.toObject(m.pnToLidMappings[j], o);
                }
            }
            if (m.chatDbMigrationTimestamp != null && m.hasOwnProperty("chatDbMigrationTimestamp")) {
                if (typeof m.chatDbMigrationTimestamp === "number")
                    d.chatDbMigrationTimestamp = o.longs === String ? String(m.chatDbMigrationTimestamp) : m.chatDbMigrationTimestamp;
                else
                    d.chatDbMigrationTimestamp = o.longs === String ? $util.Long.prototype.toString.call(m.chatDbMigrationTimestamp) : o.longs === Number ? new $util.LongBits(m.chatDbMigrationTimestamp.low >>> 0, m.chatDbMigrationTimestamp.high >>> 0).toNumber(true) : m.chatDbMigrationTimestamp;
                if (o.oneofs)
                    d._chatDbMigrationTimestamp = "chatDbMigrationTimestamp";
            }
            return d;
        };

        LIDMigrationMappingSyncPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LIDMigrationMappingSyncPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WALidMigrationSyncPayload.LIDMigrationMappingSyncPayload";
        };

        return LIDMigrationMappingSyncPayload;
    })();

    return WALidMigrationSyncPayload;
})();

export { $root as default };

