export type Maybe<T> = T | null;

/** Use JavaScript Date object for date/time fields. */
export type DateTime = any;

/** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
export type EmailAddress = any;

/** Floats that will have a value less than 0. */
export type NegativeFloat = any;

/** Integers that will have a value less than 0. */
export type NegativeInt = any;

/** Floats that will have a value of 0 or more. */
export type NonNegativeFloat = any;

/** Integers that will have a value of 0 or more. */
export type NonNegativeInt = any;

export type NonPositiveFloat = any;

export type NonPositiveInt = any;

/** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
export type PhoneNumber = any;

/** Floats that will have a value greater than 0. */
export type PositiveFloat = any;

/** Integers that will have a value greater than 0. */
export type PositiveInt = any;

/** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium or India. */
export type PostalCode = any;

export type RegularExpression = any;

/** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
export type Url = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  _blank?: Maybe<string>;

  a?: Maybe<string>;
}

export interface Mutation {
  _blank?: Maybe<string>;
}

export interface Subscription {
  _blank?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================
