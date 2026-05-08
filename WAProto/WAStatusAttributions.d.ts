import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAStatusAttributions {

    interface IStatusAttribution {
        statusReshare?: (WAStatusAttributions.StatusAttribution.IStatusReshare|null);
        externalShare?: (WAStatusAttributions.StatusAttribution.IExternalShare|null);
        music?: (WAStatusAttributions.StatusAttribution.IMusic|null);
        groupStatus?: (WAStatusAttributions.StatusAttribution.IGroupStatus|null);
        rlAttribution?: (WAStatusAttributions.StatusAttribution.IRLAttribution|null);
        aiCreatedAttribution?: (WAStatusAttributions.StatusAttribution.IAiCreatedAttribution|null);
        type?: (WAStatusAttributions.StatusAttribution.Type|null);
        actionURL?: (string|null);
    }

    class StatusAttribution implements IStatusAttribution {
        constructor(p?: WAStatusAttributions.IStatusAttribution);
        public statusReshare?: (WAStatusAttributions.StatusAttribution.IStatusReshare|null);
        public externalShare?: (WAStatusAttributions.StatusAttribution.IExternalShare|null);
        public music?: (WAStatusAttributions.StatusAttribution.IMusic|null);
        public groupStatus?: (WAStatusAttributions.StatusAttribution.IGroupStatus|null);
        public rlAttribution?: (WAStatusAttributions.StatusAttribution.IRLAttribution|null);
        public aiCreatedAttribution?: (WAStatusAttributions.StatusAttribution.IAiCreatedAttribution|null);
        public type?: (WAStatusAttributions.StatusAttribution.Type|null);
        public actionURL?: (string|null);
        public attributionData?: ("statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution");
        public static create(properties?: WAStatusAttributions.IStatusAttribution): WAStatusAttributions.StatusAttribution;
        public static encode(m: WAStatusAttributions.IStatusAttribution, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution;
        public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution;
        public static toObject(m: WAStatusAttributions.StatusAttribution, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusAttribution {

        enum Type {
            UNKNOWN = 0,
            RESHARE = 1,
            EXTERNAL_SHARE = 2,
            MUSIC = 3,
            STATUS_MENTION = 4,
            GROUP_STATUS = 5,
            RL_ATTRIBUTION = 6,
            AI_CREATED = 7,
            LAYOUTS = 8,
            NEWSLETTER_STATUS = 9,
            STATUS_CLOSE_SHARING = 10,
            PAID_PARTNERSHIP = 11
        }

        interface IAiCreatedAttribution {
            source?: (WAStatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);
        }

        class AiCreatedAttribution implements IAiCreatedAttribution {
            constructor(p?: WAStatusAttributions.StatusAttribution.IAiCreatedAttribution);
            public source?: (WAStatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);
            public static create(properties?: WAStatusAttributions.StatusAttribution.IAiCreatedAttribution): WAStatusAttributions.StatusAttribution.AiCreatedAttribution;
            public static encode(m: WAStatusAttributions.StatusAttribution.IAiCreatedAttribution, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.AiCreatedAttribution;
            public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.AiCreatedAttribution;
            public static toObject(m: WAStatusAttributions.StatusAttribution.AiCreatedAttribution, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AiCreatedAttribution {

            enum Source {
                UNKNOWN = 0,
                STATUS_MIMICRY = 1
            }
        }

        interface IRLAttribution {
            source?: (WAStatusAttributions.StatusAttribution.RLAttribution.Source|null);
        }

        class RLAttribution implements IRLAttribution {
            constructor(p?: WAStatusAttributions.StatusAttribution.IRLAttribution);
            public source?: (WAStatusAttributions.StatusAttribution.RLAttribution.Source|null);
            public static create(properties?: WAStatusAttributions.StatusAttribution.IRLAttribution): WAStatusAttributions.StatusAttribution.RLAttribution;
            public static encode(m: WAStatusAttributions.StatusAttribution.IRLAttribution, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.RLAttribution;
            public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.RLAttribution;
            public static toObject(m: WAStatusAttributions.StatusAttribution.RLAttribution, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RLAttribution {

            enum Source {
                UNKNOWN = 0,
                RAY_BAN_META_GLASSES = 1,
                OAKLEY_META_GLASSES = 2,
                HYPERNOVA_GLASSES = 3
            }
        }

        interface IExternalShare {
            actionURL?: (string|null);
            source?: (WAStatusAttributions.StatusAttribution.ExternalShare.Source|null);
            duration?: (number|null);
            actionFallbackURL?: (string|null);
        }

        class ExternalShare implements IExternalShare {
            constructor(p?: WAStatusAttributions.StatusAttribution.IExternalShare);
            public actionURL?: (string|null);
            public source?: (WAStatusAttributions.StatusAttribution.ExternalShare.Source|null);
            public duration?: (number|null);
            public actionFallbackURL?: (string|null);
            public static create(properties?: WAStatusAttributions.StatusAttribution.IExternalShare): WAStatusAttributions.StatusAttribution.ExternalShare;
            public static encode(m: WAStatusAttributions.StatusAttribution.IExternalShare, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.ExternalShare;
            public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.ExternalShare;
            public static toObject(m: WAStatusAttributions.StatusAttribution.ExternalShare, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExternalShare {

            enum Source {
                UNKNOWN = 0,
                INSTAGRAM = 1,
                FACEBOOK = 2,
                MESSENGER = 3,
                SPOTIFY = 4,
                YOUTUBE = 5,
                PINTEREST = 6,
                THREADS = 7,
                APPLE_MUSIC = 8,
                SHARECHAT = 9,
                GOOGLE_PHOTOS = 10,
                SOUNDCLOUD = 11,
                SHAZAM = 12
            }
        }

        interface IStatusReshare {
            source?: (WAStatusAttributions.StatusAttribution.StatusReshare.Source|null);
            metadata?: (WAStatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);
        }

        class StatusReshare implements IStatusReshare {
            constructor(p?: WAStatusAttributions.StatusAttribution.IStatusReshare);
            public source?: (WAStatusAttributions.StatusAttribution.StatusReshare.Source|null);
            public metadata?: (WAStatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);
            public static create(properties?: WAStatusAttributions.StatusAttribution.IStatusReshare): WAStatusAttributions.StatusAttribution.StatusReshare;
            public static encode(m: WAStatusAttributions.StatusAttribution.IStatusReshare, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.StatusReshare;
            public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.StatusReshare;
            public static toObject(m: WAStatusAttributions.StatusAttribution.StatusReshare, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace StatusReshare {

            enum Source {
                UNKNOWN = 0,
                INTERNAL_RESHARE = 1,
                MENTION_RESHARE = 2,
                CHANNEL_RESHARE = 3,
                FORWARD = 4
            }

            interface IMetadata {
                duration?: (number|null);
                channelJID?: (string|null);
                channelMessageID?: (number|null);
                hasMultipleReshares?: (boolean|null);
            }

            class Metadata implements IMetadata {
                constructor(p?: WAStatusAttributions.StatusAttribution.StatusReshare.IMetadata);
                public duration?: (number|null);
                public channelJID?: (string|null);
                public channelMessageID?: (number|null);
                public hasMultipleReshares?: (boolean|null);
                public static create(properties?: WAStatusAttributions.StatusAttribution.StatusReshare.IMetadata): WAStatusAttributions.StatusAttribution.StatusReshare.Metadata;
                public static encode(m: WAStatusAttributions.StatusAttribution.StatusReshare.IMetadata, w?: $protobuf.Writer): $protobuf.Writer;
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.StatusReshare.Metadata;
                public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.StatusReshare.Metadata;
                public static toObject(m: WAStatusAttributions.StatusAttribution.StatusReshare.Metadata, o?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        interface IGroupStatus {
            authorJID?: (string|null);
        }

        class GroupStatus implements IGroupStatus {
            constructor(p?: WAStatusAttributions.StatusAttribution.IGroupStatus);
            public authorJID?: (string|null);
            public static create(properties?: WAStatusAttributions.StatusAttribution.IGroupStatus): WAStatusAttributions.StatusAttribution.GroupStatus;
            public static encode(m: WAStatusAttributions.StatusAttribution.IGroupStatus, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.GroupStatus;
            public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.GroupStatus;
            public static toObject(m: WAStatusAttributions.StatusAttribution.GroupStatus, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IMusic {
            authorName?: (string|null);
            songID?: (string|null);
            title?: (string|null);
            author?: (string|null);
            artistAttribution?: (string|null);
            isExplicit?: (boolean|null);
        }

        class Music implements IMusic {
            constructor(p?: WAStatusAttributions.StatusAttribution.IMusic);
            public authorName?: (string|null);
            public songID?: (string|null);
            public title?: (string|null);
            public author?: (string|null);
            public artistAttribution?: (string|null);
            public isExplicit?: (boolean|null);
            public static create(properties?: WAStatusAttributions.StatusAttribution.IMusic): WAStatusAttributions.StatusAttribution.Music;
            public static encode(m: WAStatusAttributions.StatusAttribution.IMusic, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAStatusAttributions.StatusAttribution.Music;
            public static fromObject(d: { [k: string]: any }): WAStatusAttributions.StatusAttribution.Music;
            public static toObject(m: WAStatusAttributions.StatusAttribution.Music, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

