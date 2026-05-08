import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace WAMdStorageMsgRowOpaqueData {

    interface IMsgOpaqueData {
        body?: (string|null);
        caption?: (string|null);
        lng?: (number|null);
        isLive?: (boolean|null);
        lat?: (number|null);
        paymentAmount1000?: (number|null);
        paymentNoteMsgBody?: (string|null);
        matchedText?: (string|null);
        title?: (string|null);
        description?: (string|null);
        futureproofBuffer?: (Uint8Array|null);
        clientURL?: (string|null);
        loc?: (string|null);
        pollName?: (string|null);
        pollOptions?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption[]|null);
        pollSelectableOptionsCount?: (number|null);
        messageSecret?: (Uint8Array|null);
        originalSelfAuthor?: (string|null);
        senderTimestampMS?: (number|Long|null);
        pollUpdateParentKey?: (string|null);
        encPollVote?: (WAMdStorageMsgRowOpaqueData.IPollEncValue|null);
        isSentCagPollCreation?: (boolean|null);
        pollContentType?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollContentType|null);
        pollType?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollType|null);
        correctOptionIndex?: (number|null);
        pollVotesSnapshot?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVotesSnapshot|null);
        encReactionTargetMessageKey?: (string|null);
        encReactionEncPayload?: (Uint8Array|null);
        encReactionEncIv?: (Uint8Array|null);
        botMessageSecret?: (Uint8Array|null);
        targetMessageKey?: (string|null);
        encPayload?: (Uint8Array|null);
        encIV?: (Uint8Array|null);
        eventName?: (string|null);
        isEventCanceled?: (boolean|null);
        eventDescription?: (string|null);
        eventJoinLink?: (string|null);
        eventStartTime?: (number|Long|null);
        eventLocation?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IEventLocation|null);
        eventEndTime?: (number|Long|null);
        eventIsScheduledCall?: (boolean|null);
        eventExtraGuestsAllowed?: (boolean|null);
        plainProtobufBytes?: (Uint8Array|null);
        quarantineExtractedText?: (string|null);
        pollEndTime?: (number|Long|null);
        pollHideVoterNames?: (boolean|null);
        pollAllowAddOption?: (boolean|null);
    }

    class MsgOpaqueData implements IMsgOpaqueData {
        constructor(p?: WAMdStorageMsgRowOpaqueData.IMsgOpaqueData);
        public body?: (string|null);
        public caption?: (string|null);
        public lng?: (number|null);
        public isLive?: (boolean|null);
        public lat?: (number|null);
        public paymentAmount1000?: (number|null);
        public paymentNoteMsgBody?: (string|null);
        public matchedText?: (string|null);
        public title?: (string|null);
        public description?: (string|null);
        public futureproofBuffer?: (Uint8Array|null);
        public clientURL?: (string|null);
        public loc?: (string|null);
        public pollName?: (string|null);
        public pollOptions: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption[];
        public pollSelectableOptionsCount?: (number|null);
        public messageSecret?: (Uint8Array|null);
        public originalSelfAuthor?: (string|null);
        public senderTimestampMS?: (number|Long|null);
        public pollUpdateParentKey?: (string|null);
        public encPollVote?: (WAMdStorageMsgRowOpaqueData.IPollEncValue|null);
        public isSentCagPollCreation?: (boolean|null);
        public pollContentType?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollContentType|null);
        public pollType?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollType|null);
        public correctOptionIndex?: (number|null);
        public pollVotesSnapshot?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVotesSnapshot|null);
        public encReactionTargetMessageKey?: (string|null);
        public encReactionEncPayload?: (Uint8Array|null);
        public encReactionEncIv?: (Uint8Array|null);
        public botMessageSecret?: (Uint8Array|null);
        public targetMessageKey?: (string|null);
        public encPayload?: (Uint8Array|null);
        public encIV?: (Uint8Array|null);
        public eventName?: (string|null);
        public isEventCanceled?: (boolean|null);
        public eventDescription?: (string|null);
        public eventJoinLink?: (string|null);
        public eventStartTime?: (number|Long|null);
        public eventLocation?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IEventLocation|null);
        public eventEndTime?: (number|Long|null);
        public eventIsScheduledCall?: (boolean|null);
        public eventExtraGuestsAllowed?: (boolean|null);
        public plainProtobufBytes?: (Uint8Array|null);
        public quarantineExtractedText?: (string|null);
        public pollEndTime?: (number|Long|null);
        public pollHideVoterNames?: (boolean|null);
        public pollAllowAddOption?: (boolean|null);
        public static create(properties?: WAMdStorageMsgRowOpaqueData.IMsgOpaqueData): WAMdStorageMsgRowOpaqueData.MsgOpaqueData;
        public static encode(m: WAMdStorageMsgRowOpaqueData.IMsgOpaqueData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.MsgOpaqueData;
        public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.MsgOpaqueData;
        public static toObject(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MsgOpaqueData {

        enum PollType {
            POLL = 0,
            QUIZ = 1
        }

        enum PollContentType {
            UNKNOWN = 0,
            TEXT = 1,
            IMAGE = 2
        }

        interface IEventLocation {
            degreesLatitude?: (number|null);
            degreesLongitude?: (number|null);
            name?: (string|null);
            address?: (string|null);
            URL?: (string|null);
            JPEGThumbnail?: (Uint8Array|null);
        }

        class EventLocation implements IEventLocation {
            constructor(p?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IEventLocation);
            public degreesLatitude?: (number|null);
            public degreesLongitude?: (number|null);
            public name?: (string|null);
            public address?: (string|null);
            public URL?: (string|null);
            public JPEGThumbnail?: (Uint8Array|null);
            public static create(properties?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IEventLocation): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation;
            public static encode(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IEventLocation, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation;
            public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation;
            public static toObject(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPollVotesSnapshot {
            pollVotes?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVoteSnapshot[]|null);
        }

        class PollVotesSnapshot implements IPollVotesSnapshot {
            constructor(p?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVotesSnapshot);
            public pollVotes: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVoteSnapshot[];
            public static create(properties?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVotesSnapshot): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot;
            public static encode(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVotesSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot;
            public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot;
            public static toObject(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPollVoteSnapshot {
            option?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption|null);
            optionVoteCount?: (number|null);
        }

        class PollVoteSnapshot implements IPollVoteSnapshot {
            constructor(p?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVoteSnapshot);
            public option?: (WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption|null);
            public optionVoteCount?: (number|null);
            public static create(properties?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVoteSnapshot): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot;
            public static encode(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollVoteSnapshot, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot;
            public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot;
            public static toObject(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        interface IPollOption {
            name?: (string|null);
            hash?: (string|null);
        }

        class PollOption implements IPollOption {
            constructor(p?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption);
            public name?: (string|null);
            public hash?: (string|null);
            public static create(properties?: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption;
            public static encode(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.IPollOption, w?: $protobuf.Writer): $protobuf.Writer;
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption;
            public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption;
            public static toObject(m: WAMdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption, o?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    interface IMsgRowOpaqueData {
        currentMsg?: (WAMdStorageMsgRowOpaqueData.IMsgOpaqueData|null);
        quotedMsg?: (WAMdStorageMsgRowOpaqueData.IMsgOpaqueData|null);
    }

    class MsgRowOpaqueData implements IMsgRowOpaqueData {
        constructor(p?: WAMdStorageMsgRowOpaqueData.IMsgRowOpaqueData);
        public currentMsg?: (WAMdStorageMsgRowOpaqueData.IMsgOpaqueData|null);
        public quotedMsg?: (WAMdStorageMsgRowOpaqueData.IMsgOpaqueData|null);
        public static create(properties?: WAMdStorageMsgRowOpaqueData.IMsgRowOpaqueData): WAMdStorageMsgRowOpaqueData.MsgRowOpaqueData;
        public static encode(m: WAMdStorageMsgRowOpaqueData.IMsgRowOpaqueData, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.MsgRowOpaqueData;
        public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.MsgRowOpaqueData;
        public static toObject(m: WAMdStorageMsgRowOpaqueData.MsgRowOpaqueData, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    interface IPollEncValue {
        encPayload?: (Uint8Array|null);
        encIV?: (Uint8Array|null);
    }

    class PollEncValue implements IPollEncValue {
        constructor(p?: WAMdStorageMsgRowOpaqueData.IPollEncValue);
        public encPayload?: (Uint8Array|null);
        public encIV?: (Uint8Array|null);
        public static create(properties?: WAMdStorageMsgRowOpaqueData.IPollEncValue): WAMdStorageMsgRowOpaqueData.PollEncValue;
        public static encode(m: WAMdStorageMsgRowOpaqueData.IPollEncValue, w?: $protobuf.Writer): $protobuf.Writer;
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): WAMdStorageMsgRowOpaqueData.PollEncValue;
        public static fromObject(d: { [k: string]: any }): WAMdStorageMsgRowOpaqueData.PollEncValue;
        public static toObject(m: WAMdStorageMsgRowOpaqueData.PollEncValue, o?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

