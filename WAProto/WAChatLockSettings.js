/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";
import { WAUserPassword } from './WAUserPassword.js';

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAChatLockSettings = $root.WAChatLockSettings = (() => {

    const WAChatLockSettings = {};

    WAChatLockSettings.ChatLockSettings = (function() {

        function ChatLockSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ChatLockSettings.prototype.hideLockedChats = null;
        ChatLockSettings.prototype.secretCode = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatLockSettings.prototype, "_hideLockedChats", {
            get: $util.oneOfGetter($oneOfFields = ["hideLockedChats"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatLockSettings.prototype, "_secretCode", {
            get: $util.oneOfGetter($oneOfFields = ["secretCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ChatLockSettings.create = function create(properties) {
            return new ChatLockSettings(properties);
        };

        ChatLockSettings.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.hideLockedChats != null && Object.hasOwnProperty.call(m, "hideLockedChats"))
                w.uint32(8).bool(m.hideLockedChats);
            if (m.secretCode != null && Object.hasOwnProperty.call(m, "secretCode"))
                WAUserPassword.UserPassword.encode(m.secretCode, w.uint32(18).fork()).ldelim();
            return w;
        };

        ChatLockSettings.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAChatLockSettings.ChatLockSettings();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.hideLockedChats = r.bool();
                        break;
                    }
                case 2: {
                        m.secretCode = WAUserPassword.UserPassword.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        ChatLockSettings.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAChatLockSettings.ChatLockSettings)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAChatLockSettings.ChatLockSettings();
            if (d.hideLockedChats != null) {
                m.hideLockedChats = Boolean(d.hideLockedChats);
            }
            if (d.secretCode != null) {
                if (typeof d.secretCode !== "object")
                    throw TypeError(".WAChatLockSettings.ChatLockSettings.secretCode: object expected");
                m.secretCode = WAUserPassword.UserPassword.fromObject(d.secretCode, n + 1);
            }
            return m;
        };

        ChatLockSettings.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.hideLockedChats != null && m.hasOwnProperty("hideLockedChats")) {
                d.hideLockedChats = m.hideLockedChats;
                if (o.oneofs)
                    d._hideLockedChats = "hideLockedChats";
            }
            if (m.secretCode != null && m.hasOwnProperty("secretCode")) {
                d.secretCode = WAUserPassword.UserPassword.toObject(m.secretCode, o);
                if (o.oneofs)
                    d._secretCode = "secretCode";
            }
            return d;
        };

        ChatLockSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ChatLockSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAChatLockSettings.ChatLockSettings";
        };

        return ChatLockSettings;
    })();

    return WAChatLockSettings;
})();


export { $root as default };

