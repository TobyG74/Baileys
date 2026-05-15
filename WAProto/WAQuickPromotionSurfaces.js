/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAQuickPromotionSurfaces = $root.WAQuickPromotionSurfaces = (() => {

    const WAQuickPromotionSurfaces = {};

    WAQuickPromotionSurfaces.QP = (function() {

        function QP(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        QP.create = function create(properties) {
            return new QP(properties);
        };

        QP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        QP.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAQuickPromotionSurfaces.QP();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        QP.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAQuickPromotionSurfaces.QP)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            return new $root.WAQuickPromotionSurfaces.QP();
        };

        QP.toObject = function toObject() {
            return {};
        };

        QP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        QP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAQuickPromotionSurfaces.QP";
        };

        QP.FilterResult = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "TRUE"] = 1;
            values[valuesById[2] = "FALSE"] = 2;
            values[valuesById[3] = "UNKNOWN"] = 3;
            return values;
        })();

        QP.FilterClientNotSupportedConfig = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "PASS_BY_DEFAULT"] = 1;
            values[valuesById[2] = "FAIL_BY_DEFAULT"] = 2;
            return values;
        })();

        QP.ClauseType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "AND"] = 1;
            values[valuesById[2] = "OR"] = 2;
            values[valuesById[3] = "NOR"] = 3;
            return values;
        })();

        QP.FilterClause = (function() {

            function FilterClause(p) {
                this.clauses = [];
                this.filters = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FilterClause.prototype.clauseType = 1;
            FilterClause.prototype.clauses = $util.emptyArray;
            FilterClause.prototype.filters = $util.emptyArray;

            FilterClause.create = function create(properties) {
                return new FilterClause(properties);
            };

            FilterClause.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.clauseType != null && Object.hasOwnProperty.call(m, "clauseType"))
                    w.uint32(8).int32(m.clauseType);
                if (m.clauses != null && m.clauses.length) {
                    for (var i = 0; i < m.clauses.length; ++i)
                        $root.WAQuickPromotionSurfaces.QP.FilterClause.encode(m.clauses[i], w.uint32(18).fork()).ldelim();
                }
                if (m.filters != null && m.filters.length) {
                    for (var i = 0; i < m.filters.length; ++i)
                        $root.WAQuickPromotionSurfaces.QP.Filter.encode(m.filters[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };

            FilterClause.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAQuickPromotionSurfaces.QP.FilterClause();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.clauseType = r.int32();
                            break;
                        }
                    case 2: {
                            if (!(m.clauses && m.clauses.length))
                                m.clauses = [];
                            m.clauses.push($root.WAQuickPromotionSurfaces.QP.FilterClause.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 3: {
                            if (!(m.filters && m.filters.length))
                                m.filters = [];
                            m.filters.push($root.WAQuickPromotionSurfaces.QP.Filter.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            FilterClause.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAQuickPromotionSurfaces.QP.FilterClause)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAQuickPromotionSurfaces.QP.FilterClause();
                switch (d.clauseType) {
                default:
                    if (typeof d.clauseType === "number") {
                        m.clauseType = d.clauseType;
                        break;
                    }
                    break;
                case "AND":
                case 1:
                    m.clauseType = 1;
                    break;
                case "OR":
                case 2:
                    m.clauseType = 2;
                    break;
                case "NOR":
                case 3:
                    m.clauseType = 3;
                    break;
                }
                if (d.clauses) {
                    if (!Array.isArray(d.clauses))
                        throw TypeError(".WAQuickPromotionSurfaces.QP.FilterClause.clauses: array expected");
                    m.clauses = [];
                    for (var i = 0; i < d.clauses.length; ++i) {
                        if (typeof d.clauses[i] !== "object")
                            throw TypeError(".WAQuickPromotionSurfaces.QP.FilterClause.clauses: object expected");
                        m.clauses[i] = $root.WAQuickPromotionSurfaces.QP.FilterClause.fromObject(d.clauses[i], n + 1);
                    }
                }
                if (d.filters) {
                    if (!Array.isArray(d.filters))
                        throw TypeError(".WAQuickPromotionSurfaces.QP.FilterClause.filters: array expected");
                    m.filters = [];
                    for (var i = 0; i < d.filters.length; ++i) {
                        if (typeof d.filters[i] !== "object")
                            throw TypeError(".WAQuickPromotionSurfaces.QP.FilterClause.filters: object expected");
                        m.filters[i] = $root.WAQuickPromotionSurfaces.QP.Filter.fromObject(d.filters[i], n + 1);
                    }
                }
                return m;
            };

            FilterClause.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.clauses = [];
                    d.filters = [];
                }
                if (o.defaults) {
                    d.clauseType = o.enums === String ? "AND" : 1;
                }
                if (m.clauseType != null && m.hasOwnProperty("clauseType")) {
                    d.clauseType = o.enums === String ? $root.WAQuickPromotionSurfaces.QP.ClauseType[m.clauseType] === undefined ? m.clauseType : $root.WAQuickPromotionSurfaces.QP.ClauseType[m.clauseType] : m.clauseType;
                }
                if (m.clauses && m.clauses.length) {
                    d.clauses = [];
                    for (var j = 0; j < m.clauses.length; ++j) {
                        d.clauses[j] = $root.WAQuickPromotionSurfaces.QP.FilterClause.toObject(m.clauses[j], o);
                    }
                }
                if (m.filters && m.filters.length) {
                    d.filters = [];
                    for (var j = 0; j < m.filters.length; ++j) {
                        d.filters[j] = $root.WAQuickPromotionSurfaces.QP.Filter.toObject(m.filters[j], o);
                    }
                }
                return d;
            };

            FilterClause.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FilterClause.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAQuickPromotionSurfaces.QP.FilterClause";
            };

            return FilterClause;
        })();

        QP.Filter = (function() {

            function Filter(p) {
                this.parameters = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Filter.prototype.filterName = "";
            Filter.prototype.parameters = $util.emptyArray;
            Filter.prototype.filterResult = null;
            Filter.prototype.clientNotSupportedConfig = 1;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Filter.prototype, "_filterResult", {
                get: $util.oneOfGetter($oneOfFields = ["filterResult"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Filter.create = function create(properties) {
                return new Filter(properties);
            };

            Filter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.filterName != null && Object.hasOwnProperty.call(m, "filterName"))
                    w.uint32(10).string(m.filterName);
                if (m.parameters != null && m.parameters.length) {
                    for (var i = 0; i < m.parameters.length; ++i)
                        $root.WAQuickPromotionSurfaces.QP.FilterParameters.encode(m.parameters[i], w.uint32(18).fork()).ldelim();
                }
                if (m.filterResult != null && Object.hasOwnProperty.call(m, "filterResult"))
                    w.uint32(24).int32(m.filterResult);
                if (m.clientNotSupportedConfig != null && Object.hasOwnProperty.call(m, "clientNotSupportedConfig"))
                    w.uint32(32).int32(m.clientNotSupportedConfig);
                return w;
            };

            Filter.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAQuickPromotionSurfaces.QP.Filter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.filterName = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.parameters && m.parameters.length))
                                m.parameters = [];
                            m.parameters.push($root.WAQuickPromotionSurfaces.QP.FilterParameters.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 3: {
                            m.filterResult = r.int32();
                            break;
                        }
                    case 4: {
                            m.clientNotSupportedConfig = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            Filter.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAQuickPromotionSurfaces.QP.Filter)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAQuickPromotionSurfaces.QP.Filter();
                if (d.filterName != null) {
                    m.filterName = String(d.filterName);
                }
                if (d.parameters) {
                    if (!Array.isArray(d.parameters))
                        throw TypeError(".WAQuickPromotionSurfaces.QP.Filter.parameters: array expected");
                    m.parameters = [];
                    for (var i = 0; i < d.parameters.length; ++i) {
                        if (typeof d.parameters[i] !== "object")
                            throw TypeError(".WAQuickPromotionSurfaces.QP.Filter.parameters: object expected");
                        m.parameters[i] = $root.WAQuickPromotionSurfaces.QP.FilterParameters.fromObject(d.parameters[i], n + 1);
                    }
                }
                switch (d.filterResult) {
                default:
                    if (typeof d.filterResult === "number") {
                        m.filterResult = d.filterResult;
                        break;
                    }
                    break;
                case "TRUE":
                case 1:
                    m.filterResult = 1;
                    break;
                case "FALSE":
                case 2:
                    m.filterResult = 2;
                    break;
                case "UNKNOWN":
                case 3:
                    m.filterResult = 3;
                    break;
                }
                switch (d.clientNotSupportedConfig) {
                default:
                    if (typeof d.clientNotSupportedConfig === "number") {
                        m.clientNotSupportedConfig = d.clientNotSupportedConfig;
                        break;
                    }
                    break;
                case "PASS_BY_DEFAULT":
                case 1:
                    m.clientNotSupportedConfig = 1;
                    break;
                case "FAIL_BY_DEFAULT":
                case 2:
                    m.clientNotSupportedConfig = 2;
                    break;
                }
                return m;
            };

            Filter.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.parameters = [];
                }
                if (o.defaults) {
                    d.filterName = "";
                    d.clientNotSupportedConfig = o.enums === String ? "PASS_BY_DEFAULT" : 1;
                }
                if (m.filterName != null && m.hasOwnProperty("filterName")) {
                    d.filterName = m.filterName;
                }
                if (m.parameters && m.parameters.length) {
                    d.parameters = [];
                    for (var j = 0; j < m.parameters.length; ++j) {
                        d.parameters[j] = $root.WAQuickPromotionSurfaces.QP.FilterParameters.toObject(m.parameters[j], o);
                    }
                }
                if (m.filterResult != null && m.hasOwnProperty("filterResult")) {
                    d.filterResult = o.enums === String ? $root.WAQuickPromotionSurfaces.QP.FilterResult[m.filterResult] === undefined ? m.filterResult : $root.WAQuickPromotionSurfaces.QP.FilterResult[m.filterResult] : m.filterResult;
                    if (o.oneofs)
                        d._filterResult = "filterResult";
                }
                if (m.clientNotSupportedConfig != null && m.hasOwnProperty("clientNotSupportedConfig")) {
                    d.clientNotSupportedConfig = o.enums === String ? $root.WAQuickPromotionSurfaces.QP.FilterClientNotSupportedConfig[m.clientNotSupportedConfig] === undefined ? m.clientNotSupportedConfig : $root.WAQuickPromotionSurfaces.QP.FilterClientNotSupportedConfig[m.clientNotSupportedConfig] : m.clientNotSupportedConfig;
                }
                return d;
            };

            Filter.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Filter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAQuickPromotionSurfaces.QP.Filter";
            };

            return Filter;
        })();

        QP.FilterParameters = (function() {

            function FilterParameters(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FilterParameters.prototype.key = null;
            FilterParameters.prototype.value = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FilterParameters.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(FilterParameters.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            FilterParameters.create = function create(properties) {
                return new FilterParameters(properties);
            };

            FilterParameters.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(10).string(m.key);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(18).string(m.value);
                return w;
            };

            FilterParameters.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAQuickPromotionSurfaces.QP.FilterParameters();
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
                            m.value = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            FilterParameters.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAQuickPromotionSurfaces.QP.FilterParameters)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAQuickPromotionSurfaces.QP.FilterParameters();
                if (d.key != null) {
                    m.key = String(d.key);
                }
                if (d.value != null) {
                    m.value = String(d.value);
                }
                return m;
            };

            FilterParameters.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.key != null && m.hasOwnProperty("key")) {
                    d.key = m.key;
                    if (o.oneofs)
                        d._key = "key";
                }
                if (m.value != null && m.hasOwnProperty("value")) {
                    d.value = m.value;
                    if (o.oneofs)
                        d._value = "value";
                }
                return d;
            };

            FilterParameters.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FilterParameters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAQuickPromotionSurfaces.QP.FilterParameters";
            };

            return FilterParameters;
        })();

        return QP;
    })();

    return WAQuickPromotionSurfaces;
})();

export { $root as default };

