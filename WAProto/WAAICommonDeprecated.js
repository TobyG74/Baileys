/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WAAICommonDeprecated = $root.WAAICommonDeprecated = (() => {

    const WAAICommonDeprecated = {};

    WAAICommonDeprecated.AIRichResponseMessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_TYPE_STANDARD"] = 1;
        return values;
    })();

    WAAICommonDeprecated.AIRichResponseSubMessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_GRID_IMAGE"] = 1;
        values[valuesById[2] = "AI_RICH_RESPONSE_TEXT"] = 2;
        values[valuesById[3] = "AI_RICH_RESPONSE_INLINE_IMAGE"] = 3;
        values[valuesById[4] = "AI_RICH_RESPONSE_TABLE"] = 4;
        values[valuesById[5] = "AI_RICH_RESPONSE_CODE"] = 5;
        values[valuesById[6] = "AI_RICH_RESPONSE_DYNAMIC"] = 6;
        values[valuesById[7] = "AI_RICH_RESPONSE_MAP"] = 7;
        values[valuesById[8] = "AI_RICH_RESPONSE_LATEX"] = 8;
        values[valuesById[9] = "AI_RICH_RESPONSE_CONTENT_ITEMS"] = 9;
        return values;
    })();

    WAAICommonDeprecated.AIRichResponseInlineImageMetadata = (function() {

        function AIRichResponseInlineImageMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseInlineImageMetadata.prototype.imageURL = null;
        AIRichResponseInlineImageMetadata.prototype.imageText = null;
        AIRichResponseInlineImageMetadata.prototype.alignment = null;
        AIRichResponseInlineImageMetadata.prototype.tapLinkURL = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_imageURL", {
            get: $util.oneOfGetter($oneOfFields = ["imageURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_imageText", {
            get: $util.oneOfGetter($oneOfFields = ["imageText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_alignment", {
            get: $util.oneOfGetter($oneOfFields = ["alignment"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_tapLinkURL", {
            get: $util.oneOfGetter($oneOfFields = ["tapLinkURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseInlineImageMetadata.create = function create(properties) {
            return new AIRichResponseInlineImageMetadata(properties);
        };

        AIRichResponseInlineImageMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.imageURL != null && Object.hasOwnProperty.call(m, "imageURL"))
                $root.WAAICommonDeprecated.AIRichResponseImageURL.encode(m.imageURL, w.uint32(10).fork()).ldelim();
            if (m.imageText != null && Object.hasOwnProperty.call(m, "imageText"))
                w.uint32(18).string(m.imageText);
            if (m.alignment != null && Object.hasOwnProperty.call(m, "alignment"))
                w.uint32(24).int32(m.alignment);
            if (m.tapLinkURL != null && Object.hasOwnProperty.call(m, "tapLinkURL"))
                w.uint32(34).string(m.tapLinkURL);
            return w;
        };

        AIRichResponseInlineImageMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.imageURL = $root.WAAICommonDeprecated.AIRichResponseImageURL.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        m.imageText = r.string();
                        break;
                    }
                case 3: {
                        m.alignment = r.int32();
                        break;
                    }
                case 4: {
                        m.tapLinkURL = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseInlineImageMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata();
            if (d.imageURL != null) {
                if (typeof d.imageURL !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseInlineImageMetadata.imageURL: object expected");
                m.imageURL = $root.WAAICommonDeprecated.AIRichResponseImageURL.fromObject(d.imageURL, n + 1);
            }
            if (d.imageText != null) {
                m.imageText = String(d.imageText);
            }
            switch (d.alignment) {
            default:
                if (typeof d.alignment === "number") {
                    m.alignment = d.alignment;
                    break;
                }
                break;
            case "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED":
            case 0:
                m.alignment = 0;
                break;
            case "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED":
            case 1:
                m.alignment = 1;
                break;
            case "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED":
            case 2:
                m.alignment = 2;
                break;
            }
            if (d.tapLinkURL != null) {
                m.tapLinkURL = String(d.tapLinkURL);
            }
            return m;
        };

        AIRichResponseInlineImageMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.imageURL != null && m.hasOwnProperty("imageURL")) {
                d.imageURL = $root.WAAICommonDeprecated.AIRichResponseImageURL.toObject(m.imageURL, o);
                if (o.oneofs)
                    d._imageURL = "imageURL";
            }
            if (m.imageText != null && m.hasOwnProperty("imageText")) {
                d.imageText = m.imageText;
                if (o.oneofs)
                    d._imageText = "imageText";
            }
            if (m.alignment != null && m.hasOwnProperty("alignment")) {
                d.alignment = o.enums === String ? $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment[m.alignment] === undefined ? m.alignment : $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment[m.alignment] : m.alignment;
                if (o.oneofs)
                    d._alignment = "alignment";
            }
            if (m.tapLinkURL != null && m.hasOwnProperty("tapLinkURL")) {
                d.tapLinkURL = m.tapLinkURL;
                if (o.oneofs)
                    d._tapLinkURL = "tapLinkURL";
            }
            return d;
        };

        AIRichResponseInlineImageMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseInlineImageMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseInlineImageMetadata";
        };

        AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED"] = 2;
            return values;
        })();

        return AIRichResponseInlineImageMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseCodeMetadata = (function() {

        function AIRichResponseCodeMetadata(p) {
            this.codeBlocks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseCodeMetadata.prototype.codeLanguage = null;
        AIRichResponseCodeMetadata.prototype.codeBlocks = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseCodeMetadata.prototype, "_codeLanguage", {
            get: $util.oneOfGetter($oneOfFields = ["codeLanguage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseCodeMetadata.create = function create(properties) {
            return new AIRichResponseCodeMetadata(properties);
        };

        AIRichResponseCodeMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.codeLanguage != null && Object.hasOwnProperty.call(m, "codeLanguage"))
                w.uint32(10).string(m.codeLanguage);
            if (m.codeBlocks != null && m.codeBlocks.length) {
                for (var i = 0; i < m.codeBlocks.length; ++i)
                    $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.encode(m.codeBlocks[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        AIRichResponseCodeMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseCodeMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.codeLanguage = r.string();
                        break;
                    }
                case 2: {
                        if (!(m.codeBlocks && m.codeBlocks.length))
                            m.codeBlocks = [];
                        m.codeBlocks.push($root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseCodeMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseCodeMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseCodeMetadata();
            if (d.codeLanguage != null) {
                m.codeLanguage = String(d.codeLanguage);
            }
            if (d.codeBlocks) {
                if (!Array.isArray(d.codeBlocks))
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseCodeMetadata.codeBlocks: array expected");
                m.codeBlocks = [];
                for (var i = 0; i < d.codeBlocks.length; ++i) {
                    if (typeof d.codeBlocks[i] !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseCodeMetadata.codeBlocks: object expected");
                    m.codeBlocks[i] = $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.fromObject(d.codeBlocks[i], n + 1);
                }
            }
            return m;
        };

        AIRichResponseCodeMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.codeBlocks = [];
            }
            if (m.codeLanguage != null && m.hasOwnProperty("codeLanguage")) {
                d.codeLanguage = m.codeLanguage;
                if (o.oneofs)
                    d._codeLanguage = "codeLanguage";
            }
            if (m.codeBlocks && m.codeBlocks.length) {
                d.codeBlocks = [];
                for (var j = 0; j < m.codeBlocks.length; ++j) {
                    d.codeBlocks[j] = $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.toObject(m.codeBlocks[j], o);
                }
            }
            return d;
        };

        AIRichResponseCodeMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseCodeMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseCodeMetadata";
        };

        AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD"] = 2;
            values[valuesById[3] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING"] = 3;
            values[valuesById[4] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER"] = 4;
            values[valuesById[5] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT"] = 5;
            return values;
        })();

        AIRichResponseCodeMetadata.AIRichResponseCodeBlock = (function() {

            function AIRichResponseCodeBlock(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseCodeBlock.prototype.highlightType = null;
            AIRichResponseCodeBlock.prototype.codeContent = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseCodeBlock.prototype, "_highlightType", {
                get: $util.oneOfGetter($oneOfFields = ["highlightType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseCodeBlock.prototype, "_codeContent", {
                get: $util.oneOfGetter($oneOfFields = ["codeContent"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIRichResponseCodeBlock.create = function create(properties) {
                return new AIRichResponseCodeBlock(properties);
            };

            AIRichResponseCodeBlock.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.highlightType != null && Object.hasOwnProperty.call(m, "highlightType"))
                    w.uint32(8).int32(m.highlightType);
                if (m.codeContent != null && Object.hasOwnProperty.call(m, "codeContent"))
                    w.uint32(18).string(m.codeContent);
                return w;
            };

            AIRichResponseCodeBlock.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.highlightType = r.int32();
                            break;
                        }
                    case 2: {
                            m.codeContent = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIRichResponseCodeBlock.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock();
                switch (d.highlightType) {
                default:
                    if (typeof d.highlightType === "number") {
                        m.highlightType = d.highlightType;
                        break;
                    }
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT":
                case 0:
                    m.highlightType = 0;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD":
                case 1:
                    m.highlightType = 1;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD":
                case 2:
                    m.highlightType = 2;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING":
                case 3:
                    m.highlightType = 3;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER":
                case 4:
                    m.highlightType = 4;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT":
                case 5:
                    m.highlightType = 5;
                    break;
                }
                if (d.codeContent != null) {
                    m.codeContent = String(d.codeContent);
                }
                return m;
            };

            AIRichResponseCodeBlock.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.highlightType != null && m.hasOwnProperty("highlightType")) {
                    d.highlightType = o.enums === String ? $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType[m.highlightType] === undefined ? m.highlightType : $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType[m.highlightType] : m.highlightType;
                    if (o.oneofs)
                        d._highlightType = "highlightType";
                }
                if (m.codeContent != null && m.hasOwnProperty("codeContent")) {
                    d.codeContent = m.codeContent;
                    if (o.oneofs)
                        d._codeContent = "codeContent";
                }
                return d;
            };

            AIRichResponseCodeBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIRichResponseCodeBlock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock";
            };

            return AIRichResponseCodeBlock;
        })();

        return AIRichResponseCodeMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseDynamicMetadata = (function() {

        function AIRichResponseDynamicMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseDynamicMetadata.prototype.type = null;
        AIRichResponseDynamicMetadata.prototype.version = null;
        AIRichResponseDynamicMetadata.prototype.URL = null;
        AIRichResponseDynamicMetadata.prototype.loopCount = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_URL", {
            get: $util.oneOfGetter($oneOfFields = ["URL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_loopCount", {
            get: $util.oneOfGetter($oneOfFields = ["loopCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseDynamicMetadata.create = function create(properties) {
            return new AIRichResponseDynamicMetadata(properties);
        };

        AIRichResponseDynamicMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.version != null && Object.hasOwnProperty.call(m, "version"))
                w.uint32(16).uint64(m.version);
            if (m.URL != null && Object.hasOwnProperty.call(m, "URL"))
                w.uint32(26).string(m.URL);
            if (m.loopCount != null && Object.hasOwnProperty.call(m, "loopCount"))
                w.uint32(32).uint32(m.loopCount);
            return w;
        };

        AIRichResponseDynamicMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.type = r.int32();
                        break;
                    }
                case 2: {
                        m.version = r.uint64();
                        break;
                    }
                case 3: {
                        m.URL = r.string();
                        break;
                    }
                case 4: {
                        m.loopCount = r.uint32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseDynamicMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata();
            switch (d.type) {
            default:
                if (typeof d.type === "number") {
                    m.type = d.type;
                    break;
                }
                break;
            case "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN":
            case 0:
                m.type = 0;
                break;
            case "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE":
            case 1:
                m.type = 1;
                break;
            case "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF":
            case 2:
                m.type = 2;
                break;
            }
            if (d.version != null) {
                if ($util.Long)
                    (m.version = $util.Long.fromValue(d.version)).unsigned = true;
                else if (typeof d.version === "string")
                    m.version = parseInt(d.version, 10);
                else if (typeof d.version === "number")
                    m.version = d.version;
                else if (typeof d.version === "object")
                    m.version = new $util.LongBits(d.version.low >>> 0, d.version.high >>> 0).toNumber(true);
            }
            if (d.URL != null) {
                m.URL = String(d.URL);
            }
            if (d.loopCount != null) {
                m.loopCount = d.loopCount >>> 0;
            }
            return m;
        };

        AIRichResponseDynamicMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.type != null && m.hasOwnProperty("type")) {
                d.type = o.enums === String ? $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType[m.type] === undefined ? m.type : $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType[m.type] : m.type;
                if (o.oneofs)
                    d._type = "type";
            }
            if (m.version != null && m.hasOwnProperty("version")) {
                if (typeof m.version === "number")
                    d.version = o.longs === String ? String(m.version) : m.version;
                else
                    d.version = o.longs === String ? $util.Long.prototype.toString.call(m.version) : o.longs === Number ? new $util.LongBits(m.version.low >>> 0, m.version.high >>> 0).toNumber(true) : m.version;
                if (o.oneofs)
                    d._version = "version";
            }
            if (m.URL != null && m.hasOwnProperty("URL")) {
                d.URL = m.URL;
                if (o.oneofs)
                    d._URL = "URL";
            }
            if (m.loopCount != null && m.hasOwnProperty("loopCount")) {
                d.loopCount = m.loopCount;
                if (o.oneofs)
                    d._loopCount = "loopCount";
            }
            return d;
        };

        AIRichResponseDynamicMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseDynamicMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseDynamicMetadata";
        };

        AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF"] = 2;
            return values;
        })();

        return AIRichResponseDynamicMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseContentItemsMetadata = (function() {

        function AIRichResponseContentItemsMetadata(p) {
            this.itemsMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseContentItemsMetadata.prototype.itemsMetadata = $util.emptyArray;
        AIRichResponseContentItemsMetadata.prototype.contentType = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseContentItemsMetadata.prototype, "_contentType", {
            get: $util.oneOfGetter($oneOfFields = ["contentType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseContentItemsMetadata.create = function create(properties) {
            return new AIRichResponseContentItemsMetadata(properties);
        };

        AIRichResponseContentItemsMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemsMetadata != null && m.itemsMetadata.length) {
                for (var i = 0; i < m.itemsMetadata.length; ++i)
                    $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.encode(m.itemsMetadata[i], w.uint32(10).fork()).ldelim();
            }
            if (m.contentType != null && Object.hasOwnProperty.call(m, "contentType"))
                w.uint32(16).int32(m.contentType);
            return w;
        };

        AIRichResponseContentItemsMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.itemsMetadata && m.itemsMetadata.length))
                            m.itemsMetadata = [];
                        m.itemsMetadata.push($root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 2: {
                        m.contentType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseContentItemsMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata();
            if (d.itemsMetadata) {
                if (!Array.isArray(d.itemsMetadata))
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseContentItemsMetadata.itemsMetadata: array expected");
                m.itemsMetadata = [];
                for (var i = 0; i < d.itemsMetadata.length; ++i) {
                    if (typeof d.itemsMetadata[i] !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseContentItemsMetadata.itemsMetadata: object expected");
                    m.itemsMetadata[i] = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.fromObject(d.itemsMetadata[i], n + 1);
                }
            }
            switch (d.contentType) {
            default:
                if (typeof d.contentType === "number") {
                    m.contentType = d.contentType;
                    break;
                }
                break;
            case "DEFAULT":
            case 0:
                m.contentType = 0;
                break;
            case "CAROUSEL":
            case 1:
                m.contentType = 1;
                break;
            }
            return m;
        };

        AIRichResponseContentItemsMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.itemsMetadata = [];
            }
            if (m.itemsMetadata && m.itemsMetadata.length) {
                d.itemsMetadata = [];
                for (var j = 0; j < m.itemsMetadata.length; ++j) {
                    d.itemsMetadata[j] = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.toObject(m.itemsMetadata[j], o);
                }
            }
            if (m.contentType != null && m.hasOwnProperty("contentType")) {
                d.contentType = o.enums === String ? $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType[m.contentType] === undefined ? m.contentType : $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType[m.contentType] : m.contentType;
                if (o.oneofs)
                    d._contentType = "contentType";
            }
            return d;
        };

        AIRichResponseContentItemsMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseContentItemsMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseContentItemsMetadata";
        };

        AIRichResponseContentItemsMetadata.ContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "CAROUSEL"] = 1;
            return values;
        })();

        AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata = (function() {

            function AIRichResponseContentItemMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseContentItemMetadata.prototype.reelItem = null;

            let $oneOfFields;

            Object.defineProperty(AIRichResponseContentItemMetadata.prototype, "aIRichResponseContentItem", {
                get: $util.oneOfGetter($oneOfFields = ["reelItem"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIRichResponseContentItemMetadata.create = function create(properties) {
                return new AIRichResponseContentItemMetadata(properties);
            };

            AIRichResponseContentItemMetadata.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.reelItem != null && Object.hasOwnProperty.call(m, "reelItem"))
                    $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.encode(m.reelItem, w.uint32(10).fork()).ldelim();
                return w;
            };

            AIRichResponseContentItemMetadata.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.reelItem = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.decode(r, r.uint32(), undefined, n + 1);
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIRichResponseContentItemMetadata.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata();
                if (d.reelItem != null) {
                    if (typeof d.reelItem !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.reelItem: object expected");
                    m.reelItem = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.fromObject(d.reelItem, n + 1);
                }
                return m;
            };

            AIRichResponseContentItemMetadata.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.reelItem != null && m.hasOwnProperty("reelItem")) {
                    d.reelItem = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.toObject(m.reelItem, o);
                    if (o.oneofs)
                        d.aIRichResponseContentItem = "reelItem";
                }
                return d;
            };

            AIRichResponseContentItemMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIRichResponseContentItemMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata";
            };

            return AIRichResponseContentItemMetadata;
        })();

        AIRichResponseContentItemsMetadata.AIRichResponseReelItem = (function() {

            function AIRichResponseReelItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseReelItem.prototype.title = null;
            AIRichResponseReelItem.prototype.profileIconURL = null;
            AIRichResponseReelItem.prototype.thumbnailURL = null;
            AIRichResponseReelItem.prototype.videoURL = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_profileIconURL", {
                get: $util.oneOfGetter($oneOfFields = ["profileIconURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_thumbnailURL", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_videoURL", {
                get: $util.oneOfGetter($oneOfFields = ["videoURL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIRichResponseReelItem.create = function create(properties) {
                return new AIRichResponseReelItem(properties);
            };

            AIRichResponseReelItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                if (m.profileIconURL != null && Object.hasOwnProperty.call(m, "profileIconURL"))
                    w.uint32(18).string(m.profileIconURL);
                if (m.thumbnailURL != null && Object.hasOwnProperty.call(m, "thumbnailURL"))
                    w.uint32(26).string(m.thumbnailURL);
                if (m.videoURL != null && Object.hasOwnProperty.call(m, "videoURL"))
                    w.uint32(34).string(m.videoURL);
                return w;
            };

            AIRichResponseReelItem.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.title = r.string();
                            break;
                        }
                    case 2: {
                            m.profileIconURL = r.string();
                            break;
                        }
                    case 3: {
                            m.thumbnailURL = r.string();
                            break;
                        }
                    case 4: {
                            m.videoURL = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIRichResponseReelItem.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem();
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.profileIconURL != null) {
                    m.profileIconURL = String(d.profileIconURL);
                }
                if (d.thumbnailURL != null) {
                    m.thumbnailURL = String(d.thumbnailURL);
                }
                if (d.videoURL != null) {
                    m.videoURL = String(d.videoURL);
                }
                return m;
            };

            AIRichResponseReelItem.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.title != null && m.hasOwnProperty("title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.profileIconURL != null && m.hasOwnProperty("profileIconURL")) {
                    d.profileIconURL = m.profileIconURL;
                    if (o.oneofs)
                        d._profileIconURL = "profileIconURL";
                }
                if (m.thumbnailURL != null && m.hasOwnProperty("thumbnailURL")) {
                    d.thumbnailURL = m.thumbnailURL;
                    if (o.oneofs)
                        d._thumbnailURL = "thumbnailURL";
                }
                if (m.videoURL != null && m.hasOwnProperty("videoURL")) {
                    d.videoURL = m.videoURL;
                    if (o.oneofs)
                        d._videoURL = "videoURL";
                }
                return d;
            };

            AIRichResponseReelItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIRichResponseReelItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem";
            };

            return AIRichResponseReelItem;
        })();

        return AIRichResponseContentItemsMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseImageURL = (function() {

        function AIRichResponseImageURL(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseImageURL.prototype.imagePreviewURL = null;
        AIRichResponseImageURL.prototype.imageHighResURL = null;
        AIRichResponseImageURL.prototype.sourceURL = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseImageURL.prototype, "_imagePreviewURL", {
            get: $util.oneOfGetter($oneOfFields = ["imagePreviewURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseImageURL.prototype, "_imageHighResURL", {
            get: $util.oneOfGetter($oneOfFields = ["imageHighResURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseImageURL.prototype, "_sourceURL", {
            get: $util.oneOfGetter($oneOfFields = ["sourceURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseImageURL.create = function create(properties) {
            return new AIRichResponseImageURL(properties);
        };

        AIRichResponseImageURL.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.imagePreviewURL != null && Object.hasOwnProperty.call(m, "imagePreviewURL"))
                w.uint32(10).string(m.imagePreviewURL);
            if (m.imageHighResURL != null && Object.hasOwnProperty.call(m, "imageHighResURL"))
                w.uint32(18).string(m.imageHighResURL);
            if (m.sourceURL != null && Object.hasOwnProperty.call(m, "sourceURL"))
                w.uint32(26).string(m.sourceURL);
            return w;
        };

        AIRichResponseImageURL.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseImageURL();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.imagePreviewURL = r.string();
                        break;
                    }
                case 2: {
                        m.imageHighResURL = r.string();
                        break;
                    }
                case 3: {
                        m.sourceURL = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseImageURL.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseImageURL)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseImageURL();
            if (d.imagePreviewURL != null) {
                m.imagePreviewURL = String(d.imagePreviewURL);
            }
            if (d.imageHighResURL != null) {
                m.imageHighResURL = String(d.imageHighResURL);
            }
            if (d.sourceURL != null) {
                m.sourceURL = String(d.sourceURL);
            }
            return m;
        };

        AIRichResponseImageURL.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.imagePreviewURL != null && m.hasOwnProperty("imagePreviewURL")) {
                d.imagePreviewURL = m.imagePreviewURL;
                if (o.oneofs)
                    d._imagePreviewURL = "imagePreviewURL";
            }
            if (m.imageHighResURL != null && m.hasOwnProperty("imageHighResURL")) {
                d.imageHighResURL = m.imageHighResURL;
                if (o.oneofs)
                    d._imageHighResURL = "imageHighResURL";
            }
            if (m.sourceURL != null && m.hasOwnProperty("sourceURL")) {
                d.sourceURL = m.sourceURL;
                if (o.oneofs)
                    d._sourceURL = "sourceURL";
            }
            return d;
        };

        AIRichResponseImageURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseImageURL.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseImageURL";
        };

        return AIRichResponseImageURL;
    })();

    WAAICommonDeprecated.AIRichResponseGridImageMetadata = (function() {

        function AIRichResponseGridImageMetadata(p) {
            this.imageURLs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseGridImageMetadata.prototype.gridImageURL = null;
        AIRichResponseGridImageMetadata.prototype.imageURLs = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseGridImageMetadata.prototype, "_gridImageURL", {
            get: $util.oneOfGetter($oneOfFields = ["gridImageURL"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseGridImageMetadata.create = function create(properties) {
            return new AIRichResponseGridImageMetadata(properties);
        };

        AIRichResponseGridImageMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gridImageURL != null && Object.hasOwnProperty.call(m, "gridImageURL"))
                $root.WAAICommonDeprecated.AIRichResponseImageURL.encode(m.gridImageURL, w.uint32(10).fork()).ldelim();
            if (m.imageURLs != null && m.imageURLs.length) {
                for (var i = 0; i < m.imageURLs.length; ++i)
                    $root.WAAICommonDeprecated.AIRichResponseImageURL.encode(m.imageURLs[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        AIRichResponseGridImageMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.gridImageURL = $root.WAAICommonDeprecated.AIRichResponseImageURL.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 2: {
                        if (!(m.imageURLs && m.imageURLs.length))
                            m.imageURLs = [];
                        m.imageURLs.push($root.WAAICommonDeprecated.AIRichResponseImageURL.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseGridImageMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata();
            if (d.gridImageURL != null) {
                if (typeof d.gridImageURL !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseGridImageMetadata.gridImageURL: object expected");
                m.gridImageURL = $root.WAAICommonDeprecated.AIRichResponseImageURL.fromObject(d.gridImageURL, n + 1);
            }
            if (d.imageURLs) {
                if (!Array.isArray(d.imageURLs))
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseGridImageMetadata.imageURLs: array expected");
                m.imageURLs = [];
                for (var i = 0; i < d.imageURLs.length; ++i) {
                    if (typeof d.imageURLs[i] !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseGridImageMetadata.imageURLs: object expected");
                    m.imageURLs[i] = $root.WAAICommonDeprecated.AIRichResponseImageURL.fromObject(d.imageURLs[i], n + 1);
                }
            }
            return m;
        };

        AIRichResponseGridImageMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.imageURLs = [];
            }
            if (m.gridImageURL != null && m.hasOwnProperty("gridImageURL")) {
                d.gridImageURL = $root.WAAICommonDeprecated.AIRichResponseImageURL.toObject(m.gridImageURL, o);
                if (o.oneofs)
                    d._gridImageURL = "gridImageURL";
            }
            if (m.imageURLs && m.imageURLs.length) {
                d.imageURLs = [];
                for (var j = 0; j < m.imageURLs.length; ++j) {
                    d.imageURLs[j] = $root.WAAICommonDeprecated.AIRichResponseImageURL.toObject(m.imageURLs[j], o);
                }
            }
            return d;
        };

        AIRichResponseGridImageMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseGridImageMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseGridImageMetadata";
        };

        return AIRichResponseGridImageMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseTableMetadata = (function() {

        function AIRichResponseTableMetadata(p) {
            this.rows = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseTableMetadata.prototype.rows = $util.emptyArray;
        AIRichResponseTableMetadata.prototype.title = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseTableMetadata.prototype, "_title", {
            get: $util.oneOfGetter($oneOfFields = ["title"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseTableMetadata.create = function create(properties) {
            return new AIRichResponseTableMetadata(properties);
        };

        AIRichResponseTableMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rows != null && m.rows.length) {
                for (var i = 0; i < m.rows.length; ++i)
                    $root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.encode(m.rows[i], w.uint32(10).fork()).ldelim();
            }
            if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                w.uint32(18).string(m.title);
            return w;
        };

        AIRichResponseTableMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseTableMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        if (!(m.rows && m.rows.length))
                            m.rows = [];
                        m.rows.push($root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 2: {
                        m.title = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseTableMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseTableMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseTableMetadata();
            if (d.rows) {
                if (!Array.isArray(d.rows))
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseTableMetadata.rows: array expected");
                m.rows = [];
                for (var i = 0; i < d.rows.length; ++i) {
                    if (typeof d.rows[i] !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseTableMetadata.rows: object expected");
                    m.rows[i] = $root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.fromObject(d.rows[i], n + 1);
                }
            }
            if (d.title != null) {
                m.title = String(d.title);
            }
            return m;
        };

        AIRichResponseTableMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.rows = [];
            }
            if (m.rows && m.rows.length) {
                d.rows = [];
                for (var j = 0; j < m.rows.length; ++j) {
                    d.rows[j] = $root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.toObject(m.rows[j], o);
                }
            }
            if (m.title != null && m.hasOwnProperty("title")) {
                d.title = m.title;
                if (o.oneofs)
                    d._title = "title";
            }
            return d;
        };

        AIRichResponseTableMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseTableMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseTableMetadata";
        };

        AIRichResponseTableMetadata.AIRichResponseTableRow = (function() {

            function AIRichResponseTableRow(p) {
                this.items = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseTableRow.prototype.items = $util.emptyArray;
            AIRichResponseTableRow.prototype.isHeading = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseTableRow.prototype, "_isHeading", {
                get: $util.oneOfGetter($oneOfFields = ["isHeading"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIRichResponseTableRow.create = function create(properties) {
                return new AIRichResponseTableRow(properties);
            };

            AIRichResponseTableRow.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.items != null && m.items.length) {
                    for (var i = 0; i < m.items.length; ++i)
                        w.uint32(10).string(m.items[i]);
                }
                if (m.isHeading != null && Object.hasOwnProperty.call(m, "isHeading"))
                    w.uint32(16).bool(m.isHeading);
                return w;
            };

            AIRichResponseTableRow.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.items && m.items.length))
                                m.items = [];
                            m.items.push(r.string());
                            break;
                        }
                    case 2: {
                            m.isHeading = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIRichResponseTableRow.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow();
                if (d.items) {
                    if (!Array.isArray(d.items))
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.items: array expected");
                    m.items = [];
                    for (var i = 0; i < d.items.length; ++i) {
                        m.items[i] = String(d.items[i]);
                    }
                }
                if (d.isHeading != null) {
                    m.isHeading = Boolean(d.isHeading);
                }
                return m;
            };

            AIRichResponseTableRow.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.arrays || o.defaults) {
                    d.items = [];
                }
                if (m.items && m.items.length) {
                    d.items = [];
                    for (var j = 0; j < m.items.length; ++j) {
                        d.items[j] = m.items[j];
                    }
                }
                if (m.isHeading != null && m.hasOwnProperty("isHeading")) {
                    d.isHeading = m.isHeading;
                    if (o.oneofs)
                        d._isHeading = "isHeading";
                }
                return d;
            };

            AIRichResponseTableRow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIRichResponseTableRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow";
            };

            return AIRichResponseTableRow;
        })();

        return AIRichResponseTableMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseLatexMetadata = (function() {

        function AIRichResponseLatexMetadata(p) {
            this.expressions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseLatexMetadata.prototype.text = null;
        AIRichResponseLatexMetadata.prototype.expressions = $util.emptyArray;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseLatexMetadata.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseLatexMetadata.create = function create(properties) {
            return new AIRichResponseLatexMetadata(properties);
        };

        AIRichResponseLatexMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.text != null && Object.hasOwnProperty.call(m, "text"))
                w.uint32(10).string(m.text);
            if (m.expressions != null && m.expressions.length) {
                for (var i = 0; i < m.expressions.length; ++i)
                    $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.encode(m.expressions[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        AIRichResponseLatexMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseLatexMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.text = r.string();
                        break;
                    }
                case 2: {
                        if (!(m.expressions && m.expressions.length))
                            m.expressions = [];
                        m.expressions.push($root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseLatexMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseLatexMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseLatexMetadata();
            if (d.text != null) {
                m.text = String(d.text);
            }
            if (d.expressions) {
                if (!Array.isArray(d.expressions))
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseLatexMetadata.expressions: array expected");
                m.expressions = [];
                for (var i = 0; i < d.expressions.length; ++i) {
                    if (typeof d.expressions[i] !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseLatexMetadata.expressions: object expected");
                    m.expressions[i] = $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.fromObject(d.expressions[i], n + 1);
                }
            }
            return m;
        };

        AIRichResponseLatexMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.expressions = [];
            }
            if (m.text != null && m.hasOwnProperty("text")) {
                d.text = m.text;
                if (o.oneofs)
                    d._text = "text";
            }
            if (m.expressions && m.expressions.length) {
                d.expressions = [];
                for (var j = 0; j < m.expressions.length; ++j) {
                    d.expressions[j] = $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.toObject(m.expressions[j], o);
                }
            }
            return d;
        };

        AIRichResponseLatexMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseLatexMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseLatexMetadata";
        };

        AIRichResponseLatexMetadata.AIRichResponseLatexExpression = (function() {

            function AIRichResponseLatexExpression(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseLatexExpression.prototype.latexExpression = null;
            AIRichResponseLatexExpression.prototype.URL = null;
            AIRichResponseLatexExpression.prototype.width = null;
            AIRichResponseLatexExpression.prototype.height = null;
            AIRichResponseLatexExpression.prototype.fontHeight = null;
            AIRichResponseLatexExpression.prototype.imageTopPadding = null;
            AIRichResponseLatexExpression.prototype.imageLeadingPadding = null;
            AIRichResponseLatexExpression.prototype.imageBottomPadding = null;
            AIRichResponseLatexExpression.prototype.imageTrailingPadding = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_latexExpression", {
                get: $util.oneOfGetter($oneOfFields = ["latexExpression"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_URL", {
                get: $util.oneOfGetter($oneOfFields = ["URL"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_width", {
                get: $util.oneOfGetter($oneOfFields = ["width"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_height", {
                get: $util.oneOfGetter($oneOfFields = ["height"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_fontHeight", {
                get: $util.oneOfGetter($oneOfFields = ["fontHeight"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageTopPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageTopPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageLeadingPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageLeadingPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageBottomPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageBottomPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageTrailingPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageTrailingPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIRichResponseLatexExpression.create = function create(properties) {
                return new AIRichResponseLatexExpression(properties);
            };

            AIRichResponseLatexExpression.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.latexExpression != null && Object.hasOwnProperty.call(m, "latexExpression"))
                    w.uint32(10).string(m.latexExpression);
                if (m.URL != null && Object.hasOwnProperty.call(m, "URL"))
                    w.uint32(18).string(m.URL);
                if (m.width != null && Object.hasOwnProperty.call(m, "width"))
                    w.uint32(25).double(m.width);
                if (m.height != null && Object.hasOwnProperty.call(m, "height"))
                    w.uint32(33).double(m.height);
                if (m.fontHeight != null && Object.hasOwnProperty.call(m, "fontHeight"))
                    w.uint32(41).double(m.fontHeight);
                if (m.imageTopPadding != null && Object.hasOwnProperty.call(m, "imageTopPadding"))
                    w.uint32(49).double(m.imageTopPadding);
                if (m.imageLeadingPadding != null && Object.hasOwnProperty.call(m, "imageLeadingPadding"))
                    w.uint32(57).double(m.imageLeadingPadding);
                if (m.imageBottomPadding != null && Object.hasOwnProperty.call(m, "imageBottomPadding"))
                    w.uint32(65).double(m.imageBottomPadding);
                if (m.imageTrailingPadding != null && Object.hasOwnProperty.call(m, "imageTrailingPadding"))
                    w.uint32(73).double(m.imageTrailingPadding);
                return w;
            };

            AIRichResponseLatexExpression.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.latexExpression = r.string();
                            break;
                        }
                    case 2: {
                            m.URL = r.string();
                            break;
                        }
                    case 3: {
                            m.width = r.double();
                            break;
                        }
                    case 4: {
                            m.height = r.double();
                            break;
                        }
                    case 5: {
                            m.fontHeight = r.double();
                            break;
                        }
                    case 6: {
                            m.imageTopPadding = r.double();
                            break;
                        }
                    case 7: {
                            m.imageLeadingPadding = r.double();
                            break;
                        }
                    case 8: {
                            m.imageBottomPadding = r.double();
                            break;
                        }
                    case 9: {
                            m.imageTrailingPadding = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIRichResponseLatexExpression.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression();
                if (d.latexExpression != null) {
                    m.latexExpression = String(d.latexExpression);
                }
                if (d.URL != null) {
                    m.URL = String(d.URL);
                }
                if (d.width != null) {
                    m.width = Number(d.width);
                }
                if (d.height != null) {
                    m.height = Number(d.height);
                }
                if (d.fontHeight != null) {
                    m.fontHeight = Number(d.fontHeight);
                }
                if (d.imageTopPadding != null) {
                    m.imageTopPadding = Number(d.imageTopPadding);
                }
                if (d.imageLeadingPadding != null) {
                    m.imageLeadingPadding = Number(d.imageLeadingPadding);
                }
                if (d.imageBottomPadding != null) {
                    m.imageBottomPadding = Number(d.imageBottomPadding);
                }
                if (d.imageTrailingPadding != null) {
                    m.imageTrailingPadding = Number(d.imageTrailingPadding);
                }
                return m;
            };

            AIRichResponseLatexExpression.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.latexExpression != null && m.hasOwnProperty("latexExpression")) {
                    d.latexExpression = m.latexExpression;
                    if (o.oneofs)
                        d._latexExpression = "latexExpression";
                }
                if (m.URL != null && m.hasOwnProperty("URL")) {
                    d.URL = m.URL;
                    if (o.oneofs)
                        d._URL = "URL";
                }
                if (m.width != null && m.hasOwnProperty("width")) {
                    d.width = o.json && !isFinite(m.width) ? String(m.width) : m.width;
                    if (o.oneofs)
                        d._width = "width";
                }
                if (m.height != null && m.hasOwnProperty("height")) {
                    d.height = o.json && !isFinite(m.height) ? String(m.height) : m.height;
                    if (o.oneofs)
                        d._height = "height";
                }
                if (m.fontHeight != null && m.hasOwnProperty("fontHeight")) {
                    d.fontHeight = o.json && !isFinite(m.fontHeight) ? String(m.fontHeight) : m.fontHeight;
                    if (o.oneofs)
                        d._fontHeight = "fontHeight";
                }
                if (m.imageTopPadding != null && m.hasOwnProperty("imageTopPadding")) {
                    d.imageTopPadding = o.json && !isFinite(m.imageTopPadding) ? String(m.imageTopPadding) : m.imageTopPadding;
                    if (o.oneofs)
                        d._imageTopPadding = "imageTopPadding";
                }
                if (m.imageLeadingPadding != null && m.hasOwnProperty("imageLeadingPadding")) {
                    d.imageLeadingPadding = o.json && !isFinite(m.imageLeadingPadding) ? String(m.imageLeadingPadding) : m.imageLeadingPadding;
                    if (o.oneofs)
                        d._imageLeadingPadding = "imageLeadingPadding";
                }
                if (m.imageBottomPadding != null && m.hasOwnProperty("imageBottomPadding")) {
                    d.imageBottomPadding = o.json && !isFinite(m.imageBottomPadding) ? String(m.imageBottomPadding) : m.imageBottomPadding;
                    if (o.oneofs)
                        d._imageBottomPadding = "imageBottomPadding";
                }
                if (m.imageTrailingPadding != null && m.hasOwnProperty("imageTrailingPadding")) {
                    d.imageTrailingPadding = o.json && !isFinite(m.imageTrailingPadding) ? String(m.imageTrailingPadding) : m.imageTrailingPadding;
                    if (o.oneofs)
                        d._imageTrailingPadding = "imageTrailingPadding";
                }
                return d;
            };

            AIRichResponseLatexExpression.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIRichResponseLatexExpression.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression";
            };

            return AIRichResponseLatexExpression;
        })();

        return AIRichResponseLatexMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseMapMetadata = (function() {

        function AIRichResponseMapMetadata(p) {
            this.annotations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseMapMetadata.prototype.centerLatitude = null;
        AIRichResponseMapMetadata.prototype.centerLongitude = null;
        AIRichResponseMapMetadata.prototype.latitudeDelta = null;
        AIRichResponseMapMetadata.prototype.longitudeDelta = null;
        AIRichResponseMapMetadata.prototype.annotations = $util.emptyArray;
        AIRichResponseMapMetadata.prototype.showInfoList = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_centerLatitude", {
            get: $util.oneOfGetter($oneOfFields = ["centerLatitude"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_centerLongitude", {
            get: $util.oneOfGetter($oneOfFields = ["centerLongitude"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_latitudeDelta", {
            get: $util.oneOfGetter($oneOfFields = ["latitudeDelta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_longitudeDelta", {
            get: $util.oneOfGetter($oneOfFields = ["longitudeDelta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_showInfoList", {
            get: $util.oneOfGetter($oneOfFields = ["showInfoList"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseMapMetadata.create = function create(properties) {
            return new AIRichResponseMapMetadata(properties);
        };

        AIRichResponseMapMetadata.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.centerLatitude != null && Object.hasOwnProperty.call(m, "centerLatitude"))
                w.uint32(9).double(m.centerLatitude);
            if (m.centerLongitude != null && Object.hasOwnProperty.call(m, "centerLongitude"))
                w.uint32(17).double(m.centerLongitude);
            if (m.latitudeDelta != null && Object.hasOwnProperty.call(m, "latitudeDelta"))
                w.uint32(25).double(m.latitudeDelta);
            if (m.longitudeDelta != null && Object.hasOwnProperty.call(m, "longitudeDelta"))
                w.uint32(33).double(m.longitudeDelta);
            if (m.annotations != null && m.annotations.length) {
                for (var i = 0; i < m.annotations.length; ++i)
                    $root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.encode(m.annotations[i], w.uint32(42).fork()).ldelim();
            }
            if (m.showInfoList != null && Object.hasOwnProperty.call(m, "showInfoList"))
                w.uint32(48).bool(m.showInfoList);
            return w;
        };

        AIRichResponseMapMetadata.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseMapMetadata();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.centerLatitude = r.double();
                        break;
                    }
                case 2: {
                        m.centerLongitude = r.double();
                        break;
                    }
                case 3: {
                        m.latitudeDelta = r.double();
                        break;
                    }
                case 4: {
                        m.longitudeDelta = r.double();
                        break;
                    }
                case 5: {
                        if (!(m.annotations && m.annotations.length))
                            m.annotations = [];
                        m.annotations.push($root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.decode(r, r.uint32(), undefined, n + 1));
                        break;
                    }
                case 6: {
                        m.showInfoList = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseMapMetadata.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseMapMetadata)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseMapMetadata();
            if (d.centerLatitude != null) {
                m.centerLatitude = Number(d.centerLatitude);
            }
            if (d.centerLongitude != null) {
                m.centerLongitude = Number(d.centerLongitude);
            }
            if (d.latitudeDelta != null) {
                m.latitudeDelta = Number(d.latitudeDelta);
            }
            if (d.longitudeDelta != null) {
                m.longitudeDelta = Number(d.longitudeDelta);
            }
            if (d.annotations) {
                if (!Array.isArray(d.annotations))
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseMapMetadata.annotations: array expected");
                m.annotations = [];
                for (var i = 0; i < d.annotations.length; ++i) {
                    if (typeof d.annotations[i] !== "object")
                        throw TypeError(".WAAICommonDeprecated.AIRichResponseMapMetadata.annotations: object expected");
                    m.annotations[i] = $root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.fromObject(d.annotations[i], n + 1);
                }
            }
            if (d.showInfoList != null) {
                m.showInfoList = Boolean(d.showInfoList);
            }
            return m;
        };

        AIRichResponseMapMetadata.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (o.arrays || o.defaults) {
                d.annotations = [];
            }
            if (m.centerLatitude != null && m.hasOwnProperty("centerLatitude")) {
                d.centerLatitude = o.json && !isFinite(m.centerLatitude) ? String(m.centerLatitude) : m.centerLatitude;
                if (o.oneofs)
                    d._centerLatitude = "centerLatitude";
            }
            if (m.centerLongitude != null && m.hasOwnProperty("centerLongitude")) {
                d.centerLongitude = o.json && !isFinite(m.centerLongitude) ? String(m.centerLongitude) : m.centerLongitude;
                if (o.oneofs)
                    d._centerLongitude = "centerLongitude";
            }
            if (m.latitudeDelta != null && m.hasOwnProperty("latitudeDelta")) {
                d.latitudeDelta = o.json && !isFinite(m.latitudeDelta) ? String(m.latitudeDelta) : m.latitudeDelta;
                if (o.oneofs)
                    d._latitudeDelta = "latitudeDelta";
            }
            if (m.longitudeDelta != null && m.hasOwnProperty("longitudeDelta")) {
                d.longitudeDelta = o.json && !isFinite(m.longitudeDelta) ? String(m.longitudeDelta) : m.longitudeDelta;
                if (o.oneofs)
                    d._longitudeDelta = "longitudeDelta";
            }
            if (m.annotations && m.annotations.length) {
                d.annotations = [];
                for (var j = 0; j < m.annotations.length; ++j) {
                    d.annotations[j] = $root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.toObject(m.annotations[j], o);
                }
            }
            if (m.showInfoList != null && m.hasOwnProperty("showInfoList")) {
                d.showInfoList = m.showInfoList;
                if (o.oneofs)
                    d._showInfoList = "showInfoList";
            }
            return d;
        };

        AIRichResponseMapMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseMapMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseMapMetadata";
        };

        AIRichResponseMapMetadata.AIRichResponseMapAnnotation = (function() {

            function AIRichResponseMapAnnotation(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseMapAnnotation.prototype.annotationNumber = null;
            AIRichResponseMapAnnotation.prototype.latitude = null;
            AIRichResponseMapAnnotation.prototype.longitude = null;
            AIRichResponseMapAnnotation.prototype.title = null;
            AIRichResponseMapAnnotation.prototype.body = null;

            let $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_annotationNumber", {
                get: $util.oneOfGetter($oneOfFields = ["annotationNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_latitude", {
                get: $util.oneOfGetter($oneOfFields = ["latitude"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_longitude", {
                get: $util.oneOfGetter($oneOfFields = ["longitude"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_body", {
                get: $util.oneOfGetter($oneOfFields = ["body"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            AIRichResponseMapAnnotation.create = function create(properties) {
                return new AIRichResponseMapAnnotation(properties);
            };

            AIRichResponseMapAnnotation.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.annotationNumber != null && Object.hasOwnProperty.call(m, "annotationNumber"))
                    w.uint32(8).uint32(m.annotationNumber);
                if (m.latitude != null && Object.hasOwnProperty.call(m, "latitude"))
                    w.uint32(17).double(m.latitude);
                if (m.longitude != null && Object.hasOwnProperty.call(m, "longitude"))
                    w.uint32(25).double(m.longitude);
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(34).string(m.title);
                if (m.body != null && Object.hasOwnProperty.call(m, "body"))
                    w.uint32(42).string(m.body);
                return w;
            };

            AIRichResponseMapAnnotation.decode = function decode(r, l, e, n) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (n === undefined)
                    n = 0;
                if (n > $Reader.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.annotationNumber = r.uint32();
                            break;
                        }
                    case 2: {
                            m.latitude = r.double();
                            break;
                        }
                    case 3: {
                            m.longitude = r.double();
                            break;
                        }
                    case 4: {
                            m.title = r.string();
                            break;
                        }
                    case 5: {
                            m.body = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7, n);
                        break;
                    }
                }
                return m;
            };

            AIRichResponseMapAnnotation.fromObject = function fromObject(d, n) {
                if (d instanceof $root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation)
                    return d;
                if (n === undefined)
                    n = 0;
                if (n > $util.recursionLimit)
                    throw Error("maximum nesting depth exceeded");
                var m = new $root.WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation();
                if (d.annotationNumber != null) {
                    m.annotationNumber = d.annotationNumber >>> 0;
                }
                if (d.latitude != null) {
                    m.latitude = Number(d.latitude);
                }
                if (d.longitude != null) {
                    m.longitude = Number(d.longitude);
                }
                if (d.title != null) {
                    m.title = String(d.title);
                }
                if (d.body != null) {
                    m.body = String(d.body);
                }
                return m;
            };

            AIRichResponseMapAnnotation.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (m.annotationNumber != null && m.hasOwnProperty("annotationNumber")) {
                    d.annotationNumber = m.annotationNumber;
                    if (o.oneofs)
                        d._annotationNumber = "annotationNumber";
                }
                if (m.latitude != null && m.hasOwnProperty("latitude")) {
                    d.latitude = o.json && !isFinite(m.latitude) ? String(m.latitude) : m.latitude;
                    if (o.oneofs)
                        d._latitude = "latitude";
                }
                if (m.longitude != null && m.hasOwnProperty("longitude")) {
                    d.longitude = o.json && !isFinite(m.longitude) ? String(m.longitude) : m.longitude;
                    if (o.oneofs)
                        d._longitude = "longitude";
                }
                if (m.title != null && m.hasOwnProperty("title")) {
                    d.title = m.title;
                    if (o.oneofs)
                        d._title = "title";
                }
                if (m.body != null && m.hasOwnProperty("body")) {
                    d.body = m.body;
                    if (o.oneofs)
                        d._body = "body";
                }
                return d;
            };

            AIRichResponseMapAnnotation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIRichResponseMapAnnotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation";
            };

            return AIRichResponseMapAnnotation;
        })();

        return AIRichResponseMapMetadata;
    })();

    WAAICommonDeprecated.AIRichResponseSubMessage = (function() {

        function AIRichResponseSubMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseSubMessage.prototype.messageType = null;
        AIRichResponseSubMessage.prototype.gridImageMetadata = null;
        AIRichResponseSubMessage.prototype.messageText = null;
        AIRichResponseSubMessage.prototype.imageMetadata = null;
        AIRichResponseSubMessage.prototype.codeMetadata = null;
        AIRichResponseSubMessage.prototype.tableMetadata = null;
        AIRichResponseSubMessage.prototype.dynamicMetadata = null;
        AIRichResponseSubMessage.prototype.latexMetadata = null;
        AIRichResponseSubMessage.prototype.mapMetadata = null;
        AIRichResponseSubMessage.prototype.contentItemsMetadata = null;

        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_messageType", {
            get: $util.oneOfGetter($oneOfFields = ["messageType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_gridImageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["gridImageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_messageText", {
            get: $util.oneOfGetter($oneOfFields = ["messageText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_imageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["imageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_codeMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["codeMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_tableMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["tableMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_dynamicMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["dynamicMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_latexMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["latexMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_mapMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["mapMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_contentItemsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["contentItemsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        AIRichResponseSubMessage.create = function create(properties) {
            return new AIRichResponseSubMessage(properties);
        };

        AIRichResponseSubMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.messageType != null && Object.hasOwnProperty.call(m, "messageType"))
                w.uint32(8).int32(m.messageType);
            if (m.gridImageMetadata != null && Object.hasOwnProperty.call(m, "gridImageMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata.encode(m.gridImageMetadata, w.uint32(18).fork()).ldelim();
            if (m.messageText != null && Object.hasOwnProperty.call(m, "messageText"))
                w.uint32(26).string(m.messageText);
            if (m.imageMetadata != null && Object.hasOwnProperty.call(m, "imageMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata.encode(m.imageMetadata, w.uint32(34).fork()).ldelim();
            if (m.codeMetadata != null && Object.hasOwnProperty.call(m, "codeMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.encode(m.codeMetadata, w.uint32(42).fork()).ldelim();
            if (m.tableMetadata != null && Object.hasOwnProperty.call(m, "tableMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseTableMetadata.encode(m.tableMetadata, w.uint32(50).fork()).ldelim();
            if (m.dynamicMetadata != null && Object.hasOwnProperty.call(m, "dynamicMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata.encode(m.dynamicMetadata, w.uint32(58).fork()).ldelim();
            if (m.latexMetadata != null && Object.hasOwnProperty.call(m, "latexMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.encode(m.latexMetadata, w.uint32(66).fork()).ldelim();
            if (m.mapMetadata != null && Object.hasOwnProperty.call(m, "mapMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseMapMetadata.encode(m.mapMetadata, w.uint32(74).fork()).ldelim();
            if (m.contentItemsMetadata != null && Object.hasOwnProperty.call(m, "contentItemsMetadata"))
                $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.encode(m.contentItemsMetadata, w.uint32(82).fork()).ldelim();
            return w;
        };

        AIRichResponseSubMessage.decode = function decode(r, l, e, n) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (n === undefined)
                n = 0;
            if (n > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var c = l === undefined ? r.len : r.pos + l, m = new $root.WAAICommonDeprecated.AIRichResponseSubMessage();
            while (r.pos < c) {
                var t = r.uint32();
                if (t === e)
                    break;
                switch (t >>> 3) {
                case 1: {
                        m.messageType = r.int32();
                        break;
                    }
                case 2: {
                        m.gridImageMetadata = $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 3: {
                        m.messageText = r.string();
                        break;
                    }
                case 4: {
                        m.imageMetadata = $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 5: {
                        m.codeMetadata = $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 6: {
                        m.tableMetadata = $root.WAAICommonDeprecated.AIRichResponseTableMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 7: {
                        m.dynamicMetadata = $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 8: {
                        m.latexMetadata = $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 9: {
                        m.mapMetadata = $root.WAAICommonDeprecated.AIRichResponseMapMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                case 10: {
                        m.contentItemsMetadata = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.decode(r, r.uint32(), undefined, n + 1);
                        break;
                    }
                default:
                    r.skipType(t & 7, n);
                    break;
                }
            }
            return m;
        };

        AIRichResponseSubMessage.fromObject = function fromObject(d, n) {
            if (d instanceof $root.WAAICommonDeprecated.AIRichResponseSubMessage)
                return d;
            if (n === undefined)
                n = 0;
            if (n > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var m = new $root.WAAICommonDeprecated.AIRichResponseSubMessage();
            switch (d.messageType) {
            default:
                if (typeof d.messageType === "number") {
                    m.messageType = d.messageType;
                    break;
                }
                break;
            case "AI_RICH_RESPONSE_UNKNOWN":
            case 0:
                m.messageType = 0;
                break;
            case "AI_RICH_RESPONSE_GRID_IMAGE":
            case 1:
                m.messageType = 1;
                break;
            case "AI_RICH_RESPONSE_TEXT":
            case 2:
                m.messageType = 2;
                break;
            case "AI_RICH_RESPONSE_INLINE_IMAGE":
            case 3:
                m.messageType = 3;
                break;
            case "AI_RICH_RESPONSE_TABLE":
            case 4:
                m.messageType = 4;
                break;
            case "AI_RICH_RESPONSE_CODE":
            case 5:
                m.messageType = 5;
                break;
            case "AI_RICH_RESPONSE_DYNAMIC":
            case 6:
                m.messageType = 6;
                break;
            case "AI_RICH_RESPONSE_MAP":
            case 7:
                m.messageType = 7;
                break;
            case "AI_RICH_RESPONSE_LATEX":
            case 8:
                m.messageType = 8;
                break;
            case "AI_RICH_RESPONSE_CONTENT_ITEMS":
            case 9:
                m.messageType = 9;
                break;
            }
            if (d.gridImageMetadata != null) {
                if (typeof d.gridImageMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.gridImageMetadata: object expected");
                m.gridImageMetadata = $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata.fromObject(d.gridImageMetadata, n + 1);
            }
            if (d.messageText != null) {
                m.messageText = String(d.messageText);
            }
            if (d.imageMetadata != null) {
                if (typeof d.imageMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.imageMetadata: object expected");
                m.imageMetadata = $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata.fromObject(d.imageMetadata, n + 1);
            }
            if (d.codeMetadata != null) {
                if (typeof d.codeMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.codeMetadata: object expected");
                m.codeMetadata = $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.fromObject(d.codeMetadata, n + 1);
            }
            if (d.tableMetadata != null) {
                if (typeof d.tableMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.tableMetadata: object expected");
                m.tableMetadata = $root.WAAICommonDeprecated.AIRichResponseTableMetadata.fromObject(d.tableMetadata, n + 1);
            }
            if (d.dynamicMetadata != null) {
                if (typeof d.dynamicMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.dynamicMetadata: object expected");
                m.dynamicMetadata = $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata.fromObject(d.dynamicMetadata, n + 1);
            }
            if (d.latexMetadata != null) {
                if (typeof d.latexMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.latexMetadata: object expected");
                m.latexMetadata = $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.fromObject(d.latexMetadata, n + 1);
            }
            if (d.mapMetadata != null) {
                if (typeof d.mapMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.mapMetadata: object expected");
                m.mapMetadata = $root.WAAICommonDeprecated.AIRichResponseMapMetadata.fromObject(d.mapMetadata, n + 1);
            }
            if (d.contentItemsMetadata != null) {
                if (typeof d.contentItemsMetadata !== "object")
                    throw TypeError(".WAAICommonDeprecated.AIRichResponseSubMessage.contentItemsMetadata: object expected");
                m.contentItemsMetadata = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.fromObject(d.contentItemsMetadata, n + 1);
            }
            return m;
        };

        AIRichResponseSubMessage.toObject = function toObject(m, o) {
            if (!o)
                o = {};
            var d = {};
            if (m.messageType != null && m.hasOwnProperty("messageType")) {
                d.messageType = o.enums === String ? $root.WAAICommonDeprecated.AIRichResponseSubMessageType[m.messageType] === undefined ? m.messageType : $root.WAAICommonDeprecated.AIRichResponseSubMessageType[m.messageType] : m.messageType;
                if (o.oneofs)
                    d._messageType = "messageType";
            }
            if (m.gridImageMetadata != null && m.hasOwnProperty("gridImageMetadata")) {
                d.gridImageMetadata = $root.WAAICommonDeprecated.AIRichResponseGridImageMetadata.toObject(m.gridImageMetadata, o);
                if (o.oneofs)
                    d._gridImageMetadata = "gridImageMetadata";
            }
            if (m.messageText != null && m.hasOwnProperty("messageText")) {
                d.messageText = m.messageText;
                if (o.oneofs)
                    d._messageText = "messageText";
            }
            if (m.imageMetadata != null && m.hasOwnProperty("imageMetadata")) {
                d.imageMetadata = $root.WAAICommonDeprecated.AIRichResponseInlineImageMetadata.toObject(m.imageMetadata, o);
                if (o.oneofs)
                    d._imageMetadata = "imageMetadata";
            }
            if (m.codeMetadata != null && m.hasOwnProperty("codeMetadata")) {
                d.codeMetadata = $root.WAAICommonDeprecated.AIRichResponseCodeMetadata.toObject(m.codeMetadata, o);
                if (o.oneofs)
                    d._codeMetadata = "codeMetadata";
            }
            if (m.tableMetadata != null && m.hasOwnProperty("tableMetadata")) {
                d.tableMetadata = $root.WAAICommonDeprecated.AIRichResponseTableMetadata.toObject(m.tableMetadata, o);
                if (o.oneofs)
                    d._tableMetadata = "tableMetadata";
            }
            if (m.dynamicMetadata != null && m.hasOwnProperty("dynamicMetadata")) {
                d.dynamicMetadata = $root.WAAICommonDeprecated.AIRichResponseDynamicMetadata.toObject(m.dynamicMetadata, o);
                if (o.oneofs)
                    d._dynamicMetadata = "dynamicMetadata";
            }
            if (m.latexMetadata != null && m.hasOwnProperty("latexMetadata")) {
                d.latexMetadata = $root.WAAICommonDeprecated.AIRichResponseLatexMetadata.toObject(m.latexMetadata, o);
                if (o.oneofs)
                    d._latexMetadata = "latexMetadata";
            }
            if (m.mapMetadata != null && m.hasOwnProperty("mapMetadata")) {
                d.mapMetadata = $root.WAAICommonDeprecated.AIRichResponseMapMetadata.toObject(m.mapMetadata, o);
                if (o.oneofs)
                    d._mapMetadata = "mapMetadata";
            }
            if (m.contentItemsMetadata != null && m.hasOwnProperty("contentItemsMetadata")) {
                d.contentItemsMetadata = $root.WAAICommonDeprecated.AIRichResponseContentItemsMetadata.toObject(m.contentItemsMetadata, o);
                if (o.oneofs)
                    d._contentItemsMetadata = "contentItemsMetadata";
            }
            return d;
        };

        AIRichResponseSubMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseSubMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/WAAICommonDeprecated.AIRichResponseSubMessage";
        };

        return AIRichResponseSubMessage;
    })();

    return WAAICommonDeprecated;
})();

export { $root as default };

