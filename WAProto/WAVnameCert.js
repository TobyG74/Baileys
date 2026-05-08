/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAVnameCert = $root.WAVnameCert = (() => {

    const WAVnameCert = {};

    WAVnameCert.BizAccountLinkInfo = (function() {

        function BizAccountLinkInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizAccountLinkInfo.prototype.whatsappBizAcctFbid = null;
        BizAccountLinkInfo.prototype.whatsappAcctNumber = null;
        BizAccountLinkInfo.prototype.issueTime = null;
        BizAccountLinkInfo.prototype.hostStorage = null;
        BizAccountLinkInfo.prototype.accountType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_whatsappBizAcctFbid", {
            get: $util.oneOfGetter($oneOfFields = ["whatsappBizAcctFbid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_whatsappAcctNumber", {
            get: $util.oneOfGetter($oneOfFields = ["whatsappAcctNumber"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_issueTime", {
            get: $util.oneOfGetter($oneOfFields = ["issueTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_hostStorage", {
            get: $util.oneOfGetter($oneOfFields = ["hostStorage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BizAccountLinkInfo.create = function create(properties) {
            return new BizAccountLinkInfo(properties);
        };

        BizAccountLinkInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.whatsappBizAcctFbid != null && Object.hasOwnProperty.call(m, "whatsappBizAcctFbid"))
                w.uint32(8).uint64(m.whatsappBizAcctFbid);
            if (m.whatsappAcctNumber != null && Object.hasOwnProperty.call(m, "whatsappAcctNumber"))
                w.uint32(18).string(m.whatsappAcctNumber);
            if (m.issueTime != null && Object.hasOwnProperty.call(m, "issueTime"))
                w.uint32(24).uint64(m.issueTime);
            if (m.hostStorage != null && Object.hasOwnProperty.call(m, "hostStorage"))
                w.uint32(32).int32(m.hostStorage);
            if (m.accountType != null && Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(40).int32(m.accountType);
            return w;
        };

        BizAccountLinkInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAVnameCert.BizAccountLinkInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.whatsappBizAcctFbid = r.uint64();
                        break;
                    }
                case 2: {
                        m.whatsappAcctNumber = r.string();
                        break;
                    }
                case 3: {
                        m.issueTime = r.uint64();
                        break;
                    }
                case 4: {
                        m.hostStorage = r.int32();
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

        BizAccountLinkInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAVnameCert.BizAccountLinkInfo)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAVnameCert.BizAccountLinkInfo();
            if (d.whatsappBizAcctFbid != null) {
                if ($util.Long)
                    (m.whatsappBizAcctFbid = $util.Long.fromValue(d.whatsappBizAcctFbid)).unsigned = true;
                else if (typeof d.whatsappBizAcctFbid === "string")
                    m.whatsappBizAcctFbid = parseInt(d.whatsappBizAcctFbid, 10);
                else if (typeof d.whatsappBizAcctFbid === "number")
                    m.whatsappBizAcctFbid = d.whatsappBizAcctFbid;
                else if (typeof d.whatsappBizAcctFbid === "object")
                    m.whatsappBizAcctFbid = new $util.LongBits(d.whatsappBizAcctFbid.low >>> 0, d.whatsappBizAcctFbid.high >>> 0).toNumber(true);
            }
            if (d.whatsappAcctNumber != null) {
                m.whatsappAcctNumber = String(d.whatsappAcctNumber);
            }
            if (d.issueTime != null) {
                if ($util.Long)
                    (m.issueTime = $util.Long.fromValue(d.issueTime)).unsigned = true;
                else if (typeof d.issueTime === "string")
                    m.issueTime = parseInt(d.issueTime, 10);
                else if (typeof d.issueTime === "number")
                    m.issueTime = d.issueTime;
                else if (typeof d.issueTime === "object")
                    m.issueTime = new $util.LongBits(d.issueTime.low >>> 0, d.issueTime.high >>> 0).toNumber(true);
            }
            switch (d.hostStorage) {
            default:
                if (typeof d.hostStorage === "number") {
                    m.hostStorage = d.hostStorage;
                    break;
                }
                break;
            case "ON_PREMISE":
            case 0:
                m.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                m.hostStorage = 1;
                break;
            }
            switch (d.accountType) {
            default:
                if (typeof d.accountType === "number") {
                    m.accountType = d.accountType;
                    break;
                }
                break;
            case "ENTERPRISE":
            case 0:
                m.accountType = 0;
                break;
            }
            return m;
        };

        BizAccountLinkInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.whatsappBizAcctFbid != null && m.hasOwnProperty("whatsappBizAcctFbid")) {
                if (typeof m.whatsappBizAcctFbid === "number")
                    d.whatsappBizAcctFbid = o.longs === String ? String(m.whatsappBizAcctFbid) : m.whatsappBizAcctFbid;
                else
                    d.whatsappBizAcctFbid = o.longs === String ? $util.Long.prototype.toString.call(m.whatsappBizAcctFbid) : o.longs === Number ? new $util.LongBits(m.whatsappBizAcctFbid.low >>> 0, m.whatsappBizAcctFbid.high >>> 0).toNumber(true) : m.whatsappBizAcctFbid;
                if (o.oneofs)
                    d._whatsappBizAcctFbid = "whatsappBizAcctFbid";
            }
            if (m.whatsappAcctNumber != null && m.hasOwnProperty("whatsappAcctNumber")) {
                d.whatsappAcctNumber = m.whatsappAcctNumber;
                if (o.oneofs)
                    d._whatsappAcctNumber = "whatsappAcctNumber";
            }
            if (m.issueTime != null && m.hasOwnProperty("issueTime")) {
                if (typeof m.issueTime === "number")
                    d.issueTime = o.longs === String ? String(m.issueTime) : m.issueTime;
                else
                    d.issueTime = o.longs === String ? $util.Long.prototype.toString.call(m.issueTime) : o.longs === Number ? new $util.LongBits(m.issueTime.low >>> 0, m.issueTime.high >>> 0).toNumber(true) : m.issueTime;
                if (o.oneofs)
                    d._issueTime = "issueTime";
            }
            if (m.hostStorage != null && m.hasOwnProperty("hostStorage")) {
                d.hostStorage = o.enums === String ? $root.WAVnameCert.BizAccountLinkInfo.HostStorageType[m.hostStorage] === undefined ? m.hostStorage : $root.WAVnameCert.BizAccountLinkInfo.HostStorageType[m.hostStorage] : m.hostStorage;
                if (o.oneofs)
                    d._hostStorage = "hostStorage";
            }
            if (m.accountType != null && m.hasOwnProperty("accountType")) {
                d.accountType = o.enums === String ? $root.WAVnameCert.BizAccountLinkInfo.AccountType[m.accountType] === undefined ? m.accountType : $root.WAVnameCert.BizAccountLinkInfo.AccountType[m.accountType] : m.accountType;
                if (o.oneofs)
                    d._accountType = "accountType";
            }
            return d;
        };

        BizAccountLinkInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizAccountLinkInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAVnameCert.BizAccountLinkInfo";
        };

        BizAccountLinkInfo.AccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ENTERPRISE"] = 0;
            return values;
        })();

        BizAccountLinkInfo.HostStorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        return BizAccountLinkInfo;
    })();

    WAVnameCert.BizIdentityInfo = (function() {

        function BizIdentityInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizIdentityInfo.prototype.vlevel = null;
        BizIdentityInfo.prototype.vnameCert = null;
        BizIdentityInfo.prototype.signed = null;
        BizIdentityInfo.prototype.revoked = null;
        BizIdentityInfo.prototype.hostStorage = null;
        BizIdentityInfo.prototype.actualActors = null;
        BizIdentityInfo.prototype.privacyModeTS = null;
        BizIdentityInfo.prototype.featureControls = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_vlevel", {
            get: $util.oneOfGetter($oneOfFields = ["vlevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_vnameCert", {
            get: $util.oneOfGetter($oneOfFields = ["vnameCert"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_signed", {
            get: $util.oneOfGetter($oneOfFields = ["signed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_revoked", {
            get: $util.oneOfGetter($oneOfFields = ["revoked"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_hostStorage", {
            get: $util.oneOfGetter($oneOfFields = ["hostStorage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_actualActors", {
            get: $util.oneOfGetter($oneOfFields = ["actualActors"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_privacyModeTS", {
            get: $util.oneOfGetter($oneOfFields = ["privacyModeTS"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_featureControls", {
            get: $util.oneOfGetter($oneOfFields = ["featureControls"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BizIdentityInfo.create = function create(properties) {
            return new BizIdentityInfo(properties);
        };

        BizIdentityInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.vlevel != null && Object.hasOwnProperty.call(m, "vlevel"))
                w.uint32(8).int32(m.vlevel);
            if (m.vnameCert != null && Object.hasOwnProperty.call(m, "vnameCert"))
                $root.WAVnameCert.VerifiedNameCertificate.encode(m.vnameCert, w.uint32(18).fork()).ldelim();
            if (m.signed != null && Object.hasOwnProperty.call(m, "signed"))
                w.uint32(24).bool(m.signed);
            if (m.revoked != null && Object.hasOwnProperty.call(m, "revoked"))
                w.uint32(32).bool(m.revoked);
            if (m.hostStorage != null && Object.hasOwnProperty.call(m, "hostStorage"))
                w.uint32(40).int32(m.hostStorage);
            if (m.actualActors != null && Object.hasOwnProperty.call(m, "actualActors"))
                w.uint32(48).int32(m.actualActors);
            if (m.privacyModeTS != null && Object.hasOwnProperty.call(m, "privacyModeTS"))
                w.uint32(56).uint64(m.privacyModeTS);
            if (m.featureControls != null && Object.hasOwnProperty.call(m, "featureControls"))
                w.uint32(64).uint64(m.featureControls);
            return w;
        };

        BizIdentityInfo.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAVnameCert.BizIdentityInfo();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.vlevel = r.int32();
                        break;
                    }
                case 2: {
                        m.vnameCert = $root.WAVnameCert.VerifiedNameCertificate.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.signed = r.bool();
                        break;
                    }
                case 4: {
                        m.revoked = r.bool();
                        break;
                    }
                case 5: {
                        m.hostStorage = r.int32();
                        break;
                    }
                case 6: {
                        m.actualActors = r.int32();
                        break;
                    }
                case 7: {
                        m.privacyModeTS = r.uint64();
                        break;
                    }
                case 8: {
                        m.featureControls = r.uint64();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BizIdentityInfo.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAVnameCert.BizIdentityInfo)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAVnameCert.BizIdentityInfo();
            switch (d.vlevel) {
            default:
                if (typeof d.vlevel === "number") {
                    m.vlevel = d.vlevel;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                m.vlevel = 0;
                break;
            case "LOW":
            case 1:
                m.vlevel = 1;
                break;
            case "HIGH":
            case 2:
                m.vlevel = 2;
                break;
            }
            if (d.vnameCert != null) {
                if (typeof d.vnameCert !== "object")
                    throw TypeError(".WAVnameCert.BizIdentityInfo.vnameCert: object expected");
                m.vnameCert = $root.WAVnameCert.VerifiedNameCertificate.fromObject(d.vnameCert, n + 1);
            }
            if (d.signed != null) {
                m.signed = Boolean(d.signed);
            }
            if (d.revoked != null) {
                m.revoked = Boolean(d.revoked);
            }
            switch (d.hostStorage) {
            default:
                if (typeof d.hostStorage === "number") {
                    m.hostStorage = d.hostStorage;
                    break;
                }
                break;
            case "ON_PREMISE":
            case 0:
                m.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                m.hostStorage = 1;
                break;
            }
            switch (d.actualActors) {
            default:
                if (typeof d.actualActors === "number") {
                    m.actualActors = d.actualActors;
                    break;
                }
                break;
            case "SELF":
            case 0:
                m.actualActors = 0;
                break;
            case "BSP":
            case 1:
                m.actualActors = 1;
                break;
            }
            if (d.privacyModeTS != null) {
                if ($util.Long)
                    (m.privacyModeTS = $util.Long.fromValue(d.privacyModeTS)).unsigned = true;
                else if (typeof d.privacyModeTS === "string")
                    m.privacyModeTS = parseInt(d.privacyModeTS, 10);
                else if (typeof d.privacyModeTS === "number")
                    m.privacyModeTS = d.privacyModeTS;
                else if (typeof d.privacyModeTS === "object")
                    m.privacyModeTS = new $util.LongBits(d.privacyModeTS.low >>> 0, d.privacyModeTS.high >>> 0).toNumber(true);
            }
            if (d.featureControls != null) {
                if ($util.Long)
                    (m.featureControls = $util.Long.fromValue(d.featureControls)).unsigned = true;
                else if (typeof d.featureControls === "string")
                    m.featureControls = parseInt(d.featureControls, 10);
                else if (typeof d.featureControls === "number")
                    m.featureControls = d.featureControls;
                else if (typeof d.featureControls === "object")
                    m.featureControls = new $util.LongBits(d.featureControls.low >>> 0, d.featureControls.high >>> 0).toNumber(true);
            }
            return m;
        };

        BizIdentityInfo.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.vlevel != null && m.hasOwnProperty("vlevel")) {
                d.vlevel = o.enums === String ? $root.WAVnameCert.BizIdentityInfo.VerifiedLevelValue[m.vlevel] === undefined ? m.vlevel : $root.WAVnameCert.BizIdentityInfo.VerifiedLevelValue[m.vlevel] : m.vlevel;
                if (o.oneofs)
                    d._vlevel = "vlevel";
            }
            if (m.vnameCert != null && m.hasOwnProperty("vnameCert")) {
                d.vnameCert = $root.WAVnameCert.VerifiedNameCertificate.toObject(m.vnameCert, o);
                if (o.oneofs)
                    d._vnameCert = "vnameCert";
            }
            if (m.signed != null && m.hasOwnProperty("signed")) {
                d.signed = m.signed;
                if (o.oneofs)
                    d._signed = "signed";
            }
            if (m.revoked != null && m.hasOwnProperty("revoked")) {
                d.revoked = m.revoked;
                if (o.oneofs)
                    d._revoked = "revoked";
            }
            if (m.hostStorage != null && m.hasOwnProperty("hostStorage")) {
                d.hostStorage = o.enums === String ? $root.WAVnameCert.BizIdentityInfo.HostStorageType[m.hostStorage] === undefined ? m.hostStorage : $root.WAVnameCert.BizIdentityInfo.HostStorageType[m.hostStorage] : m.hostStorage;
                if (o.oneofs)
                    d._hostStorage = "hostStorage";
            }
            if (m.actualActors != null && m.hasOwnProperty("actualActors")) {
                d.actualActors = o.enums === String ? $root.WAVnameCert.BizIdentityInfo.ActualActorsType[m.actualActors] === undefined ? m.actualActors : $root.WAVnameCert.BizIdentityInfo.ActualActorsType[m.actualActors] : m.actualActors;
                if (o.oneofs)
                    d._actualActors = "actualActors";
            }
            if (m.privacyModeTS != null && m.hasOwnProperty("privacyModeTS")) {
                if (typeof m.privacyModeTS === "number")
                    d.privacyModeTS = o.longs === String ? String(m.privacyModeTS) : m.privacyModeTS;
                else
                    d.privacyModeTS = o.longs === String ? $util.Long.prototype.toString.call(m.privacyModeTS) : o.longs === Number ? new $util.LongBits(m.privacyModeTS.low >>> 0, m.privacyModeTS.high >>> 0).toNumber(true) : m.privacyModeTS;
                if (o.oneofs)
                    d._privacyModeTS = "privacyModeTS";
            }
            if (m.featureControls != null && m.hasOwnProperty("featureControls")) {
                if (typeof m.featureControls === "number")
                    d.featureControls = o.longs === String ? String(m.featureControls) : m.featureControls;
                else
                    d.featureControls = o.longs === String ? $util.Long.prototype.toString.call(m.featureControls) : o.longs === Number ? new $util.LongBits(m.featureControls.low >>> 0, m.featureControls.high >>> 0).toNumber(true) : m.featureControls;
                if (o.oneofs)
                    d._featureControls = "featureControls";
            }
            return d;
        };

        BizIdentityInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizIdentityInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAVnameCert.BizIdentityInfo";
        };

        BizIdentityInfo.ActualActorsType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SELF"] = 0;
            values[valuesById[1] = "BSP"] = 1;
            return values;
        })();

        BizIdentityInfo.HostStorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        BizIdentityInfo.VerifiedLevelValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            return values;
        })();

        return BizIdentityInfo;
    })();

    WAVnameCert.LocalizedName = (function() {

        function LocalizedName(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LocalizedName.prototype.lg = null;
        LocalizedName.prototype.lc = null;
        LocalizedName.prototype.verifiedName = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocalizedName.prototype, "_lg", {
            get: $util.oneOfGetter($oneOfFields = ["lg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocalizedName.prototype, "_lc", {
            get: $util.oneOfGetter($oneOfFields = ["lc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocalizedName.prototype, "_verifiedName", {
            get: $util.oneOfGetter($oneOfFields = ["verifiedName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LocalizedName.create = function create(properties) {
            return new LocalizedName(properties);
        };

        LocalizedName.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.lg != null && Object.hasOwnProperty.call(m, "lg"))
                w.uint32(10).string(m.lg);
            if (m.lc != null && Object.hasOwnProperty.call(m, "lc"))
                w.uint32(18).string(m.lc);
            if (m.verifiedName != null && Object.hasOwnProperty.call(m, "verifiedName"))
                w.uint32(26).string(m.verifiedName);
            return w;
        };

        LocalizedName.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAVnameCert.LocalizedName();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.lg = r.string();
                        break;
                    }
                case 2: {
                        m.lc = r.string();
                        break;
                    }
                case 3: {
                        m.verifiedName = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        LocalizedName.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAVnameCert.LocalizedName)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAVnameCert.LocalizedName();
            if (d.lg != null) {
                m.lg = String(d.lg);
            }
            if (d.lc != null) {
                m.lc = String(d.lc);
            }
            if (d.verifiedName != null) {
                m.verifiedName = String(d.verifiedName);
            }
            return m;
        };

        LocalizedName.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.lg != null && m.hasOwnProperty("lg")) {
                d.lg = m.lg;
                if (o.oneofs)
                    d._lg = "lg";
            }
            if (m.lc != null && m.hasOwnProperty("lc")) {
                d.lc = m.lc;
                if (o.oneofs)
                    d._lc = "lc";
            }
            if (m.verifiedName != null && m.hasOwnProperty("verifiedName")) {
                d.verifiedName = m.verifiedName;
                if (o.oneofs)
                    d._verifiedName = "verifiedName";
            }
            return d;
        };

        LocalizedName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LocalizedName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAVnameCert.LocalizedName";
        };

        return LocalizedName;
    })();

    WAVnameCert.VerifiedNameCertificate = (function() {

        function VerifiedNameCertificate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        VerifiedNameCertificate.prototype.details = null;
        VerifiedNameCertificate.prototype.signature = null;
        VerifiedNameCertificate.prototype.serverSignature = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(VerifiedNameCertificate.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(VerifiedNameCertificate.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(VerifiedNameCertificate.prototype, "_serverSignature", {
            get: $util.oneOfGetter($oneOfFields = ["serverSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        VerifiedNameCertificate.create = function create(properties) {
            return new VerifiedNameCertificate(properties);
        };

        VerifiedNameCertificate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.details != null && Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.signature != null && Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            if (m.serverSignature != null && Object.hasOwnProperty.call(m, "serverSignature"))
                w.uint32(26).bytes(m.serverSignature);
            return w;
        };

        VerifiedNameCertificate.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAVnameCert.VerifiedNameCertificate();
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
                case 3: {
                        m.serverSignature = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        VerifiedNameCertificate.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAVnameCert.VerifiedNameCertificate)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAVnameCert.VerifiedNameCertificate();
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
            if (d.serverSignature != null) {
                if (typeof d.serverSignature === "string")
                    $util.base64.decode(d.serverSignature, m.serverSignature = $util.newBuffer($util.base64.length(d.serverSignature)), 0);
                else if (d.serverSignature.length >= 0)
                    m.serverSignature = d.serverSignature;
            }
            return m;
        };

        VerifiedNameCertificate.toObject = function toObject(m, o) {
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
            if (m.serverSignature != null && m.hasOwnProperty("serverSignature")) {
                d.serverSignature = o.bytes === String ? $util.base64.encode(m.serverSignature, 0, m.serverSignature.length) : o.bytes === Array ? Array.prototype.slice.call(m.serverSignature) : m.serverSignature;
                if (o.oneofs)
                    d._serverSignature = "serverSignature";
            }
            return d;
        };

        VerifiedNameCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        VerifiedNameCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAVnameCert.VerifiedNameCertificate";
        };

        VerifiedNameCertificate.Details = (function() {

            function Details(p) {
                this.localizedNames = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Details.prototype.serial = null;
            Details.prototype.issuer = null;
            Details.prototype.verifiedName = null;
            Details.prototype.localizedNames = $util.emptyArray;
            Details.prototype.issueTime = null;

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
            Object.defineProperty(Details.prototype, "_verifiedName", {
                get: $util.oneOfGetter($oneOfFields = ["verifiedName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_issueTime", {
                get: $util.oneOfGetter($oneOfFields = ["issueTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Details.create = function create(properties) {
                return new Details(properties);
            };

            Details.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.serial != null && Object.hasOwnProperty.call(m, "serial"))
                    w.uint32(8).uint64(m.serial);
                if (m.issuer != null && Object.hasOwnProperty.call(m, "issuer"))
                    w.uint32(18).string(m.issuer);
                if (m.verifiedName != null && Object.hasOwnProperty.call(m, "verifiedName"))
                    w.uint32(34).string(m.verifiedName);
                if (m.localizedNames != null && m.localizedNames.length) {
                    for (var i = 0; i < m.localizedNames.length; ++i)
                        $root.WAVnameCert.LocalizedName.encode(m.localizedNames[i], w.uint32(66).fork()).ldelim();
                }
                if (m.issueTime != null && Object.hasOwnProperty.call(m, "issueTime"))
                    w.uint32(80).uint64(m.issueTime);
                return w;
            };

            Details.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAVnameCert.VerifiedNameCertificate.Details();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.serial = r.uint64();
                            break;
                        }
                    case 2: {
                            m.issuer = r.string();
                            break;
                        }
                    case 4: {
                            m.verifiedName = r.string();
                            break;
                        }
                    case 8: {
                            if (!(m.localizedNames && m.localizedNames.length))
                                m.localizedNames = [];
                            m.localizedNames.push($root.WAVnameCert.LocalizedName.decode(r, r.uint32(), undefined, n + 1));
                            break;
                        }
                    case 10: {
                            m.issueTime = r.uint64();
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
                if (d instanceof $root.WAVnameCert.VerifiedNameCertificate.Details)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAVnameCert.VerifiedNameCertificate.Details();
                if (d.serial != null) {
                    if ($util.Long)
                        (m.serial = $util.Long.fromValue(d.serial)).unsigned = true;
                    else if (typeof d.serial === "string")
                        m.serial = parseInt(d.serial, 10);
                    else if (typeof d.serial === "number")
                        m.serial = d.serial;
                    else if (typeof d.serial === "object")
                        m.serial = new $util.LongBits(d.serial.low >>> 0, d.serial.high >>> 0).toNumber(true);
                }
                if (d.issuer != null) {
                    m.issuer = String(d.issuer);
                }
                if (d.verifiedName != null) {
                    m.verifiedName = String(d.verifiedName);
                }
                if (d.localizedNames) {
                    if (!Array.isArray(d.localizedNames))
                        throw TypeError(".WAVnameCert.VerifiedNameCertificate.Details.localizedNames: array expected");
                    m.localizedNames = [];
                    for (var i = 0; i < d.localizedNames.length; ++i) {
                        if (typeof d.localizedNames[i] !== "object")
                            throw TypeError(".WAVnameCert.VerifiedNameCertificate.Details.localizedNames: object expected");
                        m.localizedNames[i] = $root.WAVnameCert.LocalizedName.fromObject(d.localizedNames[i], n + 1);
                    }
                }
                if (d.issueTime != null) {
                    if ($util.Long)
                        (m.issueTime = $util.Long.fromValue(d.issueTime)).unsigned = true;
                    else if (typeof d.issueTime === "string")
                        m.issueTime = parseInt(d.issueTime, 10);
                    else if (typeof d.issueTime === "number")
                        m.issueTime = d.issueTime;
                    else if (typeof d.issueTime === "object")
                        m.issueTime = new $util.LongBits(d.issueTime.low >>> 0, d.issueTime.high >>> 0).toNumber(true);
                }
                return m;
            };

            Details.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.localizedNames = [];
                }
                if (m.serial != null && m.hasOwnProperty("serial")) {
                    if (typeof m.serial === "number")
                        d.serial = o.longs === String ? String(m.serial) : m.serial;
                    else
                        d.serial = o.longs === String ? $util.Long.prototype.toString.call(m.serial) : o.longs === Number ? new $util.LongBits(m.serial.low >>> 0, m.serial.high >>> 0).toNumber(true) : m.serial;
                    if (o.oneofs)
                        d._serial = "serial";
                }
                if (m.issuer != null && m.hasOwnProperty("issuer")) {
                    d.issuer = m.issuer;
                    if (o.oneofs)
                        d._issuer = "issuer";
                }
                if (m.verifiedName != null && m.hasOwnProperty("verifiedName")) {
                    d.verifiedName = m.verifiedName;
                    if (o.oneofs)
                        d._verifiedName = "verifiedName";
                }
                if (m.localizedNames && m.localizedNames.length) {
                    d.localizedNames = [];
                    for (var j = 0; j < m.localizedNames.length; ++j) {
                        d.localizedNames[j] = $root.WAVnameCert.LocalizedName.toObject(m.localizedNames[j], o);
                    }
                }
                if (m.issueTime != null && m.hasOwnProperty("issueTime")) {
                    if (typeof m.issueTime === "number")
                        d.issueTime = o.longs === String ? String(m.issueTime) : m.issueTime;
                    else
                        d.issueTime = o.longs === String ? $util.Long.prototype.toString.call(m.issueTime) : o.longs === Number ? new $util.LongBits(m.issueTime.low >>> 0, m.issueTime.high >>> 0).toNumber(true) : m.issueTime;
                    if (o.oneofs)
                        d._issueTime = "issueTime";
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
                return typeUrlPrefix + "/WAVnameCert.VerifiedNameCertificate.Details";
            };

            return Details;
        })();

        return VerifiedNameCertificate;
    })();

    WAVnameCert.BizAccountPayload = (function() {

        function BizAccountPayload(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizAccountPayload.prototype.vnameCert = null;
        BizAccountPayload.prototype.bizAcctLinkInfo = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountPayload.prototype, "_vnameCert", {
            get: $util.oneOfGetter($oneOfFields = ["vnameCert"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountPayload.prototype, "_bizAcctLinkInfo", {
            get: $util.oneOfGetter($oneOfFields = ["bizAcctLinkInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        BizAccountPayload.create = function create(properties) {
            return new BizAccountPayload(properties);
        };

        BizAccountPayload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.vnameCert != null && Object.hasOwnProperty.call(m, "vnameCert"))
                $root.WAVnameCert.VerifiedNameCertificate.encode(m.vnameCert, w.uint32(10).fork()).ldelim();
            if (m.bizAcctLinkInfo != null && Object.hasOwnProperty.call(m, "bizAcctLinkInfo"))
                w.uint32(18).bytes(m.bizAcctLinkInfo);
            return w;
        };

        BizAccountPayload.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAVnameCert.BizAccountPayload();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.vnameCert = $root.WAVnameCert.VerifiedNameCertificate.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.bizAcctLinkInfo = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        BizAccountPayload.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAVnameCert.BizAccountPayload)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAVnameCert.BizAccountPayload();
            if (d.vnameCert != null) {
                if (typeof d.vnameCert !== "object")
                    throw TypeError(".WAVnameCert.BizAccountPayload.vnameCert: object expected");
                m.vnameCert = $root.WAVnameCert.VerifiedNameCertificate.fromObject(d.vnameCert, n + 1);
            }
            if (d.bizAcctLinkInfo != null) {
                if (typeof d.bizAcctLinkInfo === "string")
                    $util.base64.decode(d.bizAcctLinkInfo, m.bizAcctLinkInfo = $util.newBuffer($util.base64.length(d.bizAcctLinkInfo)), 0);
                else if (d.bizAcctLinkInfo.length >= 0)
                    m.bizAcctLinkInfo = d.bizAcctLinkInfo;
            }
            return m;
        };

        BizAccountPayload.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.vnameCert != null && m.hasOwnProperty("vnameCert")) {
                d.vnameCert = $root.WAVnameCert.VerifiedNameCertificate.toObject(m.vnameCert, o);
                if (o.oneofs)
                    d._vnameCert = "vnameCert";
            }
            if (m.bizAcctLinkInfo != null && m.hasOwnProperty("bizAcctLinkInfo")) {
                d.bizAcctLinkInfo = o.bytes === String ? $util.base64.encode(m.bizAcctLinkInfo, 0, m.bizAcctLinkInfo.length) : o.bytes === Array ? Array.prototype.slice.call(m.bizAcctLinkInfo) : m.bizAcctLinkInfo;
                if (o.oneofs)
                    d._bizAcctLinkInfo = "bizAcctLinkInfo";
            }
            return d;
        };

        BizAccountPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizAccountPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAVnameCert.BizAccountPayload";
        };

        return BizAccountPayload;
    })();

    return WAVnameCert;
})();

export { $root as default };

