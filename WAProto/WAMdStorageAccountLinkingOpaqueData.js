/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAMdStorageAccountLinkingOpaqueData = $root.WAMdStorageAccountLinkingOpaqueData = (() => {

    const WAMdStorageAccountLinkingOpaqueData = {};

    WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData = (function() {

        function AccountLinkingOpaqueData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AccountLinkingOpaqueData.prototype.accesstoken = null;
        AccountLinkingOpaqueData.prototype.FBID = null;
        AccountLinkingOpaqueData.prototype.nonce = null;
        AccountLinkingOpaqueData.prototype.encryptedPassword = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AccountLinkingOpaqueData.prototype, "_accesstoken", {
            get: $util.oneOfGetter($oneOfFields = ["accesstoken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AccountLinkingOpaqueData.prototype, "_FBID", {
            get: $util.oneOfGetter($oneOfFields = ["FBID"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AccountLinkingOpaqueData.prototype, "_nonce", {
            get: $util.oneOfGetter($oneOfFields = ["nonce"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AccountLinkingOpaqueData.prototype, "_encryptedPassword", {
            get: $util.oneOfGetter($oneOfFields = ["encryptedPassword"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AccountLinkingOpaqueData.create = function create(properties) {
            return new AccountLinkingOpaqueData(properties);
        };

        AccountLinkingOpaqueData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.accesstoken != null && Object.hasOwnProperty.call(m, "accesstoken"))
                w.uint32(10).string(m.accesstoken);
            if (m.FBID != null && Object.hasOwnProperty.call(m, "FBID"))
                w.uint32(18).string(m.FBID);
            if (m.nonce != null && Object.hasOwnProperty.call(m, "nonce"))
                w.uint32(26).string(m.nonce);
            if (m.encryptedPassword != null && Object.hasOwnProperty.call(m, "encryptedPassword"))
                w.uint32(34).string(m.encryptedPassword);
            return w;
        };

        AccountLinkingOpaqueData.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.accesstoken = r.string();
                        break;
                    }
                case 2: {
                        m.FBID = r.string();
                        break;
                    }
                case 3: {
                        m.nonce = r.string();
                        break;
                    }
                case 4: {
                        m.encryptedPassword = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AccountLinkingOpaqueData.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData();
            if (d.accesstoken != null) {
                m.accesstoken = String(d.accesstoken);
            }
            if (d.FBID != null) {
                m.FBID = String(d.FBID);
            }
            if (d.nonce != null) {
                m.nonce = String(d.nonce);
            }
            if (d.encryptedPassword != null) {
                m.encryptedPassword = String(d.encryptedPassword);
            }
            return m;
        };

        AccountLinkingOpaqueData.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.accesstoken != null && m.hasOwnProperty("accesstoken")) {
                d.accesstoken = m.accesstoken;
                if (o.oneofs)
                    d._accesstoken = "accesstoken";
            }
            if (m.FBID != null && m.hasOwnProperty("FBID")) {
                d.FBID = m.FBID;
                if (o.oneofs)
                    d._FBID = "FBID";
            }
            if (m.nonce != null && m.hasOwnProperty("nonce")) {
                d.nonce = m.nonce;
                if (o.oneofs)
                    d._nonce = "nonce";
            }
            if (m.encryptedPassword != null && m.hasOwnProperty("encryptedPassword")) {
                d.encryptedPassword = m.encryptedPassword;
                if (o.oneofs)
                    d._encryptedPassword = "encryptedPassword";
            }
            return d;
        };

        AccountLinkingOpaqueData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AccountLinkingOpaqueData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAMdStorageAccountLinkingOpaqueData.AccountLinkingOpaqueData";
        };

        return AccountLinkingOpaqueData;
    })();

    return WAMdStorageAccountLinkingOpaqueData;
})();

export { $root as default };

