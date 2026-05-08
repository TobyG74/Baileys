/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAStatusAttributions = $root.WAStatusAttributions = (() => {

    const WAStatusAttributions = {};

    WAStatusAttributions.StatusAttribution = (function() {

        function StatusAttribution(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StatusAttribution.prototype.statusReshare = null;
        StatusAttribution.prototype.externalShare = null;
        StatusAttribution.prototype.music = null;
        StatusAttribution.prototype.groupStatus = null;
        StatusAttribution.prototype.rlAttribution = null;
        StatusAttribution.prototype.aiCreatedAttribution = null;
        StatusAttribution.prototype.type = null;
        StatusAttribution.prototype.actionURL = null;

        let $oneOfFields;

        Object.defineProperty(StatusAttribution.prototype, "attributionData", {
            get: $util.oneOfGetter($oneOfFields = ["statusReshare", "externalShare", "music", "groupStatus", "rlAttribution", "aiCreatedAttribution"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusAttribution.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusAttribution.prototype, "_actionURL", {
            get: $util.oneOfGetter($oneOfFields = ["actionURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        StatusAttribution.create = function create(properties) {
            return new StatusAttribution(properties);
        };

        StatusAttribution.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.actionURL != null && Object.hasOwnProperty.call(m, "actionURL"))
                w.uint32(18).string(m.actionURL);
            if (m.statusReshare != null && Object.hasOwnProperty.call(m, "statusReshare"))
                $root.WAStatusAttributions.StatusAttribution.StatusReshare.encode(m.statusReshare, w.uint32(26).fork()).ldelim();
            if (m.externalShare != null && Object.hasOwnProperty.call(m, "externalShare"))
                $root.WAStatusAttributions.StatusAttribution.ExternalShare.encode(m.externalShare, w.uint32(34).fork()).ldelim();
            if (m.music != null && Object.hasOwnProperty.call(m, "music"))
                $root.WAStatusAttributions.StatusAttribution.Music.encode(m.music, w.uint32(42).fork()).ldelim();
            if (m.groupStatus != null && Object.hasOwnProperty.call(m, "groupStatus"))
                $root.WAStatusAttributions.StatusAttribution.GroupStatus.encode(m.groupStatus, w.uint32(50).fork()).ldelim();
            if (m.rlAttribution != null && Object.hasOwnProperty.call(m, "rlAttribution"))
                $root.WAStatusAttributions.StatusAttribution.RLAttribution.encode(m.rlAttribution, w.uint32(58).fork()).ldelim();
            if (m.aiCreatedAttribution != null && Object.hasOwnProperty.call(m, "aiCreatedAttribution"))
                $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution.encode(m.aiCreatedAttribution, w.uint32(66).fork()).ldelim();
            return w;
        };

        StatusAttribution.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 3: {
                        m.statusReshare = $root.WAStatusAttributions.StatusAttribution.StatusReshare.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 4: {
                        m.externalShare = $root.WAStatusAttributions.StatusAttribution.ExternalShare.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 5: {
                        m.music = $root.WAStatusAttributions.StatusAttribution.Music.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 6: {
                        m.groupStatus = $root.WAStatusAttributions.StatusAttribution.GroupStatus.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.rlAttribution = $root.WAStatusAttributions.StatusAttribution.RLAttribution.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.aiCreatedAttribution = $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                case 2: {
                        m.actionURL = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        StatusAttribution.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAStatusAttributions.StatusAttribution)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAStatusAttributions.StatusAttribution();
            if (d.statusReshare != null) {
                if (typeof d.statusReshare !== "object")
                    throw TypeError(".WAStatusAttributions.StatusAttribution.statusReshare: object expected");
                m.statusReshare = $root.WAStatusAttributions.StatusAttribution.StatusReshare.fromObject(d.statusReshare, n + 1);
            }
            if (d.externalShare != null) {
                if (typeof d.externalShare !== "object")
                    throw TypeError(".WAStatusAttributions.StatusAttribution.externalShare: object expected");
                m.externalShare = $root.WAStatusAttributions.StatusAttribution.ExternalShare.fromObject(d.externalShare, n + 1);
            }
            if (d.music != null) {
                if (typeof d.music !== "object")
                    throw TypeError(".WAStatusAttributions.StatusAttribution.music: object expected");
                m.music = $root.WAStatusAttributions.StatusAttribution.Music.fromObject(d.music, n + 1);
            }
            if (d.groupStatus != null) {
                if (typeof d.groupStatus !== "object")
                    throw TypeError(".WAStatusAttributions.StatusAttribution.groupStatus: object expected");
                m.groupStatus = $root.WAStatusAttributions.StatusAttribution.GroupStatus.fromObject(d.groupStatus, n + 1);
            }
            if (d.rlAttribution != null) {
                if (typeof d.rlAttribution !== "object")
                    throw TypeError(".WAStatusAttributions.StatusAttribution.rlAttribution: object expected");
                m.rlAttribution = $root.WAStatusAttributions.StatusAttribution.RLAttribution.fromObject(d.rlAttribution, n + 1);
            }
            if (d.aiCreatedAttribution != null) {
                if (typeof d.aiCreatedAttribution !== "object")
                    throw TypeError(".WAStatusAttributions.StatusAttribution.aiCreatedAttribution: object expected");
                m.aiCreatedAttribution = $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution.fromObject(d.aiCreatedAttribution, n + 1);
            }
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.type = 0;
                break;
            case "RESHARE":
            case 1:
                m.type = 1;
                break;
            case "EXTERNAL_SHARE":
            case 2:
                m.type = 2;
                break;
            case "MUSIC":
            case 3:
                m.type = 3;
                break;
            case "STATUS_MENTION":
            case 4:
                m.type = 4;
                break;
            case "GROUP_STATUS":
            case 5:
                m.type = 5;
                break;
            case "RL_ATTRIBUTION":
            case 6:
                m.type = 6;
                break;
            case "AI_CREATED":
            case 7:
                m.type = 7;
                break;
            case "LAYOUTS":
            case 8:
                m.type = 8;
                break;
            case "NEWSLETTER_STATUS":
            case 9:
                m.type = 9;
                break;
            case "STATUS_CLOSE_SHARING":
            case 10:
                m.type = 10;
                break;
            case "PAID_PARTNERSHIP":
            case 11:
                m.type = 11;
                break;
            }
            if (d.actionURL != null) {
                m.actionURL = String(d.actionURL);
            }
            return m;
        };

        StatusAttribution.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WAStatusAttributions.StatusAttribution.Type[m.type] === undefined ? m.type : $root.WAStatusAttributions.StatusAttribution.Type[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.actionURL != null && m.hasOwnProperty("actionURL")) {
                d.actionURL = m.actionURL;
                if (o.oneofs)
                    d._actionURL = "actionURL";
            }
            if (m.statusReshare != null && m.hasOwnProperty("statusReshare")) {
                d.statusReshare = $root.WAStatusAttributions.StatusAttribution.StatusReshare.toObject(m.statusReshare, o);
                if (o.oneofs)
                    d.attributionData = "statusReshare";
            }
            if (m.externalShare != null && m.hasOwnProperty("externalShare")) {
                d.externalShare = $root.WAStatusAttributions.StatusAttribution.ExternalShare.toObject(m.externalShare, o);
                if (o.oneofs)
                    d.attributionData = "externalShare";
            }
            if (m.music != null && m.hasOwnProperty("music")) {
                d.music = $root.WAStatusAttributions.StatusAttribution.Music.toObject(m.music, o);
                if (o.oneofs)
                    d.attributionData = "music";
            }
            if (m.groupStatus != null && m.hasOwnProperty("groupStatus")) {
                d.groupStatus = $root.WAStatusAttributions.StatusAttribution.GroupStatus.toObject(m.groupStatus, o);
                if (o.oneofs)
                    d.attributionData = "groupStatus";
            }
            if (m.rlAttribution != null && m.hasOwnProperty("rlAttribution")) {
                d.rlAttribution = $root.WAStatusAttributions.StatusAttribution.RLAttribution.toObject(m.rlAttribution, o);
                if (o.oneofs)
                    d.attributionData = "rlAttribution";
            }
            if (m.aiCreatedAttribution != null && m.hasOwnProperty("aiCreatedAttribution")) {
                d.aiCreatedAttribution = $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution.toObject(m.aiCreatedAttribution, o);
                if (o.oneofs)
                    d.attributionData = "aiCreatedAttribution";
            }
            return d;
        };

        StatusAttribution.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        StatusAttribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution";
        };

        StatusAttribution.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "RESHARE"] = 1;
            values[valuesById[2] = "EXTERNAL_SHARE"] = 2;
            values[valuesById[3] = "MUSIC"] = 3;
            values[valuesById[4] = "STATUS_MENTION"] = 4;
            values[valuesById[5] = "GROUP_STATUS"] = 5;
            values[valuesById[6] = "RL_ATTRIBUTION"] = 6;
            values[valuesById[7] = "AI_CREATED"] = 7;
            values[valuesById[8] = "LAYOUTS"] = 8;
            values[valuesById[9] = "NEWSLETTER_STATUS"] = 9;
            values[valuesById[10] = "STATUS_CLOSE_SHARING"] = 10;
            values[valuesById[11] = "PAID_PARTNERSHIP"] = 11;
            return values;
        })();

        StatusAttribution.AiCreatedAttribution = (function() {

            function AiCreatedAttribution(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AiCreatedAttribution.prototype.source = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AiCreatedAttribution.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AiCreatedAttribution.create = function create(properties) {
                return new AiCreatedAttribution(properties);
            };

            AiCreatedAttribution.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.source != null && Object.hasOwnProperty.call(m, "source"))
                    w.uint32(8).int32(m.source);
                return w;
            };

            AiCreatedAttribution.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.source = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AiCreatedAttribution.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution();
                switch (d.source) {
                default:
                    if (typeof d.source === "number") {
                        m.source = d.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "STATUS_MIMICRY":
                case 1:
                    m.source = 1;
                    break;
                }
                return m;
            };

            AiCreatedAttribution.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.source != null && m.hasOwnProperty("source")) {
                    d.source = o.enums === String ? $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution.Source[m.source] === undefined ? m.source : $root.WAStatusAttributions.StatusAttribution.AiCreatedAttribution.Source[m.source] : m.source;
                    if (o.oneofs)
                        d._source = "source";
                }
                return d;
            };

            AiCreatedAttribution.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AiCreatedAttribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.AiCreatedAttribution";
            };

            AiCreatedAttribution.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_MIMICRY"] = 1;
                return values;
            })();

            return AiCreatedAttribution;
        })();

        StatusAttribution.RLAttribution = (function() {

            function RLAttribution(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RLAttribution.prototype.source = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(RLAttribution.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            RLAttribution.create = function create(properties) {
                return new RLAttribution(properties);
            };

            RLAttribution.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.source != null && Object.hasOwnProperty.call(m, "source"))
                    w.uint32(8).int32(m.source);
                return w;
            };

            RLAttribution.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.RLAttribution();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.source = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            RLAttribution.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAStatusAttributions.StatusAttribution.RLAttribution)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAStatusAttributions.StatusAttribution.RLAttribution();
                switch (d.source) {
                default:
                    if (typeof d.source === "number") {
                        m.source = d.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "RAY_BAN_META_GLASSES":
                case 1:
                    m.source = 1;
                    break;
                case "OAKLEY_META_GLASSES":
                case 2:
                    m.source = 2;
                    break;
                case "HYPERNOVA_GLASSES":
                case 3:
                    m.source = 3;
                    break;
                }
                return m;
            };

            RLAttribution.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.source != null && m.hasOwnProperty("source")) {
                    d.source = o.enums === String ? $root.WAStatusAttributions.StatusAttribution.RLAttribution.Source[m.source] === undefined ? m.source : $root.WAStatusAttributions.StatusAttribution.RLAttribution.Source[m.source] : m.source;
                    if (o.oneofs)
                        d._source = "source";
                }
                return d;
            };

            RLAttribution.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            RLAttribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.RLAttribution";
            };

            RLAttribution.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "RAY_BAN_META_GLASSES"] = 1;
                values[valuesById[2] = "OAKLEY_META_GLASSES"] = 2;
                values[valuesById[3] = "HYPERNOVA_GLASSES"] = 3;
                return values;
            })();

            return RLAttribution;
        })();

        StatusAttribution.ExternalShare = (function() {

            function ExternalShare(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExternalShare.prototype.actionURL = null;
            ExternalShare.prototype.source = null;
            ExternalShare.prototype.duration = null;
            ExternalShare.prototype.actionFallbackURL = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_actionURL", {
                get: $util.oneOfGetter($oneOfFields = ["actionURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_duration", {
                get: $util.oneOfGetter($oneOfFields = ["duration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_actionFallbackURL", {
                get: $util.oneOfGetter($oneOfFields = ["actionFallbackURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            ExternalShare.create = function create(properties) {
                return new ExternalShare(properties);
            };

            ExternalShare.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.actionURL != null && Object.hasOwnProperty.call(m, "actionURL"))
                    w.uint32(10).string(m.actionURL);
                if (m.source != null && Object.hasOwnProperty.call(m, "source"))
                    w.uint32(16).int32(m.source);
                if (m.duration != null && Object.hasOwnProperty.call(m, "duration"))
                    w.uint32(24).int32(m.duration);
                if (m.actionFallbackURL != null && Object.hasOwnProperty.call(m, "actionFallbackURL"))
                    w.uint32(34).string(m.actionFallbackURL);
                return w;
            };

            ExternalShare.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.ExternalShare();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.actionURL = r.string();
                            break;
                        }
                    case 2: {
                            m.source = r.int32();
                            break;
                        }
                    case 3: {
                            m.duration = r.int32();
                            break;
                        }
                    case 4: {
                            m.actionFallbackURL = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            ExternalShare.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAStatusAttributions.StatusAttribution.ExternalShare)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAStatusAttributions.StatusAttribution.ExternalShare();
                if (d.actionURL != null) {
                    m.actionURL = String(d.actionURL);
                }
                switch (d.source) {
                default:
                    if (typeof d.source === "number") {
                        m.source = d.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "INSTAGRAM":
                case 1:
                    m.source = 1;
                    break;
                case "FACEBOOK":
                case 2:
                    m.source = 2;
                    break;
                case "MESSENGER":
                case 3:
                    m.source = 3;
                    break;
                case "SPOTIFY":
                case 4:
                    m.source = 4;
                    break;
                case "YOUTUBE":
                case 5:
                    m.source = 5;
                    break;
                case "PINTEREST":
                case 6:
                    m.source = 6;
                    break;
                case "THREADS":
                case 7:
                    m.source = 7;
                    break;
                case "APPLE_MUSIC":
                case 8:
                    m.source = 8;
                    break;
                case "SHARECHAT":
                case 9:
                    m.source = 9;
                    break;
                case "GOOGLE_PHOTOS":
                case 10:
                    m.source = 10;
                    break;
                case "SOUNDCLOUD":
                case 11:
                    m.source = 11;
                    break;
                case "SHAZAM":
                case 12:
                    m.source = 12;
                    break;
                }
                if (d.duration != null) {
                    m.duration = d.duration | 0;
                }
                if (d.actionFallbackURL != null) {
                    m.actionFallbackURL = String(d.actionFallbackURL);
                }
                return m;
            };

            ExternalShare.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.actionURL != null && m.hasOwnProperty("actionURL")) {
                    d.actionURL = m.actionURL;
                    if (o.oneofs)
                        d._actionURL = "actionURL";
                }
                if (m.source != null && m.hasOwnProperty("source")) {
                    d.source = o.enums === String ? $root.WAStatusAttributions.StatusAttribution.ExternalShare.Source[m.source] === undefined ? m.source : $root.WAStatusAttributions.StatusAttribution.ExternalShare.Source[m.source] : m.source;
                    if (o.oneofs)
                        d._source = "source";
                }
                if (m.duration != null && m.hasOwnProperty("duration")) {
                    d.duration = m.duration;
                    if (o.oneofs)
                        d._duration = "duration";
                }
                if (m.actionFallbackURL != null && m.hasOwnProperty("actionFallbackURL")) {
                    d.actionFallbackURL = m.actionFallbackURL;
                    if (o.oneofs)
                        d._actionFallbackURL = "actionFallbackURL";
                }
                return d;
            };

            ExternalShare.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ExternalShare.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.ExternalShare";
            };

            ExternalShare.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INSTAGRAM"] = 1;
                values[valuesById[2] = "FACEBOOK"] = 2;
                values[valuesById[3] = "MESSENGER"] = 3;
                values[valuesById[4] = "SPOTIFY"] = 4;
                values[valuesById[5] = "YOUTUBE"] = 5;
                values[valuesById[6] = "PINTEREST"] = 6;
                values[valuesById[7] = "THREADS"] = 7;
                values[valuesById[8] = "APPLE_MUSIC"] = 8;
                values[valuesById[9] = "SHARECHAT"] = 9;
                values[valuesById[10] = "GOOGLE_PHOTOS"] = 10;
                values[valuesById[11] = "SOUNDCLOUD"] = 11;
                values[valuesById[12] = "SHAZAM"] = 12;
                return values;
            })();

            return ExternalShare;
        })();

        StatusAttribution.StatusReshare = (function() {

            function StatusReshare(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusReshare.prototype.source = null;
            StatusReshare.prototype.metadata = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StatusReshare.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StatusReshare.prototype, "_metadata", {
                get: $util.oneOfGetter($oneOfFields = ["metadata"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            StatusReshare.create = function create(properties) {
                return new StatusReshare(properties);
            };

            StatusReshare.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.source != null && Object.hasOwnProperty.call(m, "source"))
                    w.uint32(8).int32(m.source);
                if (m.metadata != null && Object.hasOwnProperty.call(m, "metadata"))
                    $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata.encode(m.metadata, w.uint32(18).fork()).ldelim();
                return w;
            };

            StatusReshare.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.StatusReshare();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.source = r.int32();
                            break;
                        }
                    case 2: {
                            m.metadata = $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            StatusReshare.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAStatusAttributions.StatusAttribution.StatusReshare)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAStatusAttributions.StatusAttribution.StatusReshare();
                switch (d.source) {
                default:
                    if (typeof d.source === "number") {
                        m.source = d.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "INTERNAL_RESHARE":
                case 1:
                    m.source = 1;
                    break;
                case "MENTION_RESHARE":
                case 2:
                    m.source = 2;
                    break;
                case "CHANNEL_RESHARE":
                case 3:
                    m.source = 3;
                    break;
                case "FORWARD":
                case 4:
                    m.source = 4;
                    break;
                }
                if (d.metadata != null) {
                    if (typeof d.metadata !== "object")
                        throw TypeError(".WAStatusAttributions.StatusAttribution.StatusReshare.metadata: object expected");
                    m.metadata = $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata.fromObject(d.metadata, n + 1);
                }
                return m;
            };

            StatusReshare.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.source != null && m.hasOwnProperty("source")) {
                    d.source = o.enums === String ? $root.WAStatusAttributions.StatusAttribution.StatusReshare.Source[m.source] === undefined ? m.source : $root.WAStatusAttributions.StatusAttribution.StatusReshare.Source[m.source] : m.source;
                    if (o.oneofs)
                        d._source = "source";
                }
                if (m.metadata != null && m.hasOwnProperty("metadata")) {
                    d.metadata = $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata.toObject(m.metadata, o);
                    if (o.oneofs)
                        d._metadata = "metadata";
                }
                return d;
            };

            StatusReshare.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusReshare.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.StatusReshare";
            };

            StatusReshare.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INTERNAL_RESHARE"] = 1;
                values[valuesById[2] = "MENTION_RESHARE"] = 2;
                values[valuesById[3] = "CHANNEL_RESHARE"] = 3;
                values[valuesById[4] = "FORWARD"] = 4;
                return values;
            })();

            StatusReshare.Metadata = (function() {

                function Metadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Metadata.prototype.duration = null;
                Metadata.prototype.channelJID = null;
                Metadata.prototype.channelMessageID = null;
                Metadata.prototype.hasMultipleReshares = null;

                let $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_duration", {
                    get: $util.oneOfGetter($oneOfFields = ["duration"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_channelJID", {
                    get: $util.oneOfGetter($oneOfFields = ["channelJID"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_channelMessageID", {
                    get: $util.oneOfGetter($oneOfFields = ["channelMessageID"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_hasMultipleReshares", {
                    get: $util.oneOfGetter($oneOfFields = ["hasMultipleReshares"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Metadata.create = function create(properties) {
                    return new Metadata(properties);
                };

                Metadata.encode = function encode(m, w) {
                    if (!w)
                        w = $Writer.create();
                    if (m.duration != null && Object.hasOwnProperty.call(m, "duration"))
                        w.uint32(8).int32(m.duration);
                    if (m.channelJID != null && Object.hasOwnProperty.call(m, "channelJID"))
                        w.uint32(18).string(m.channelJID);
                    if (m.channelMessageID != null && Object.hasOwnProperty.call(m, "channelMessageID"))
                        w.uint32(24).int32(m.channelMessageID);
                    if (m.hasMultipleReshares != null && Object.hasOwnProperty.call(m, "hasMultipleReshares"))
                        w.uint32(32).bool(m.hasMultipleReshares);
                    return w;
                };

                Metadata.decode = function decode(r, l, e, n) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (n === undefined)
                        n = 0;
                    if (n > $Reader.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata();
                    while (r.pos < c) {
                        var t = r.uint32();
                        if (t === e)
                            break;
                        switch (t >>> 3) {
                        case 1: {
                                m.duration = r.int32();
                                break;
                            }
                        case 2: {
                                m.channelJID = r.string();
                                break;
                            }
                        case 3: {
                                m.channelMessageID = r.int32();
                                break;
                            }
                        case 4: {
                                m.hasMultipleReshares = r.bool();
                                break;
                            }
                        default:
                            r.skipType(t & 7, n);
                            break;
                        }
                    }
                    return m;
                };

                Metadata.fromObject = function fromObject(d, n) {
                    if (d instanceof $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata)
                        return d;
                    if (n === undefined)
                        n = 0;
                    if (n > $util.recursionLimit)
                        throw Error("maximum nesting depth exceeded");
                    var m = new $root.WAStatusAttributions.StatusAttribution.StatusReshare.Metadata();
                    if (d.duration != null) {
                        m.duration = d.duration | 0;
                    }
                    if (d.channelJID != null) {
                        m.channelJID = String(d.channelJID);
                    }
                    if (d.channelMessageID != null) {
                        m.channelMessageID = d.channelMessageID | 0;
                    }
                    if (d.hasMultipleReshares != null) {
                        m.hasMultipleReshares = Boolean(d.hasMultipleReshares);
                    }
                    return m;
                };

                Metadata.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (m.duration != null && m.hasOwnProperty("duration")) {
                        d.duration = m.duration;
                        if (o.oneofs)
                            d._duration = "duration";
                    }
                    if (m.channelJID != null && m.hasOwnProperty("channelJID")) {
                        d.channelJID = m.channelJID;
                        if (o.oneofs)
                            d._channelJID = "channelJID";
                    }
                    if (m.channelMessageID != null && m.hasOwnProperty("channelMessageID")) {
                        d.channelMessageID = m.channelMessageID;
                        if (o.oneofs)
                            d._channelMessageID = "channelMessageID";
                    }
                    if (m.hasMultipleReshares != null && m.hasOwnProperty("hasMultipleReshares")) {
                        d.hasMultipleReshares = m.hasMultipleReshares;
                        if (o.oneofs)
                            d._hasMultipleReshares = "hasMultipleReshares";
                    }
                    return d;
                };

                Metadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.StatusReshare.Metadata";
                };

                return Metadata;
            })();

            return StatusReshare;
        })();

        StatusAttribution.GroupStatus = (function() {

            function GroupStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            GroupStatus.prototype.authorJID = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(GroupStatus.prototype, "_authorJID", {
                get: $util.oneOfGetter($oneOfFields = ["authorJID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            GroupStatus.create = function create(properties) {
                return new GroupStatus(properties);
            };

            GroupStatus.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.authorJID != null && Object.hasOwnProperty.call(m, "authorJID"))
                    w.uint32(10).string(m.authorJID);
                return w;
            };

            GroupStatus.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.GroupStatus();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.authorJID = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            GroupStatus.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAStatusAttributions.StatusAttribution.GroupStatus)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAStatusAttributions.StatusAttribution.GroupStatus();
                if (d.authorJID != null) {
                    m.authorJID = String(d.authorJID);
                }
                return m;
            };

            GroupStatus.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.authorJID != null && m.hasOwnProperty("authorJID")) {
                    d.authorJID = m.authorJID;
                    if (o.oneofs)
                        d._authorJID = "authorJID";
                }
                return d;
            };

            GroupStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GroupStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.GroupStatus";
            };

            return GroupStatus;
        })();

        StatusAttribution.Music = (function() {

            function Music(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Music.prototype.authorName = null;
            Music.prototype.songID = null;
            Music.prototype.title = null;
            Music.prototype.author = null;
            Music.prototype.artistAttribution = null;
            Music.prototype.isExplicit = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_authorName", {
                get: $util.oneOfGetter($oneOfFields = ["authorName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_songID", {
                get: $util.oneOfGetter($oneOfFields = ["songID"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_author", {
                get: $util.oneOfGetter($oneOfFields = ["author"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_artistAttribution", {
                get: $util.oneOfGetter($oneOfFields = ["artistAttribution"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_isExplicit", {
                get: $util.oneOfGetter($oneOfFields = ["isExplicit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Music.create = function create(properties) {
                return new Music(properties);
            };

            Music.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.authorName != null && Object.hasOwnProperty.call(m, "authorName"))
                    w.uint32(10).string(m.authorName);
                if (m.songID != null && Object.hasOwnProperty.call(m, "songID"))
                    w.uint32(18).string(m.songID);
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(26).string(m.title);
                if (m.author != null && Object.hasOwnProperty.call(m, "author"))
                    w.uint32(34).string(m.author);
                if (m.artistAttribution != null && Object.hasOwnProperty.call(m, "artistAttribution"))
                    w.uint32(42).string(m.artistAttribution);
                if (m.isExplicit != null && Object.hasOwnProperty.call(m, "isExplicit"))
                    w.uint32(48).bool(m.isExplicit);
                return w;
            };

            Music.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAStatusAttributions.StatusAttribution.Music();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.authorName = r.string();
                            break;
                        }
                    case 2: {
                            m.songID = r.string();
                            break;
                        }
                    case 3: {
                            m.title = r.string();
                            break;
                        }
                    case 4: {
                            m.author = r.string();
                            break;
                        }
                    case 5: {
                            m.artistAttribution = r.string();
                            break;
                        }
                    case 6: {
                            m.isExplicit = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            Music.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAStatusAttributions.StatusAttribution.Music)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAStatusAttributions.StatusAttribution.Music();
                if (d.authorName != null) {
                    m.authorName = String(d.authorName);
                }
                if (d.songID != null) {
                    m.songID = String(d.songID);
                }
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.author != null) {
                    m.author = String(d.author);
                }
                if (d.artistAttribution != null) {
                    m.artistAttribution = String(d.artistAttribution);
                }
                if (d.isExplicit != null) {
                    m.isExplicit = Boolean(d.isExplicit);
                }
                return m;
            };

            Music.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.authorName != null && m.hasOwnProperty("authorName")) {
                    d.authorName = m.authorName;
                    if (o.oneofs)
                        d._authorName = "authorName";
                }
                if (m.songID != null && m.hasOwnProperty("songID")) {
                    d.songID = m.songID;
                    if (o.oneofs)
                        d._songID = "songID";
                }
                if (m.title != null && m.hasOwnProperty("title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.author != null && m.hasOwnProperty("author")) {
                    d.author = m.author;
                    if (o.oneofs)
                        d._author = "author";
                }
                if (m.artistAttribution != null && m.hasOwnProperty("artistAttribution")) {
                    d.artistAttribution = m.artistAttribution;
                    if (o.oneofs)
                        d._artistAttribution = "artistAttribution";
                }
                if (m.isExplicit != null && m.hasOwnProperty("isExplicit")) {
                    d.isExplicit = m.isExplicit;
                    if (o.oneofs)
                        d._isExplicit = "isExplicit";
                }
                return d;
            };

            Music.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Music.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAStatusAttributions.StatusAttribution.Music";
            };

            return Music;
        })();

        return StatusAttribution;
    })();

    return WAStatusAttributions;
})();

export { $root as default };

