# validator

## Validators

api                                 | more
----------------------------------- | -----------------------------------------------------------------------------------------
contains(str, seed)                 | check if the string contains the seed.
equals(str, comparison)             | check if the string matches the comparison.
isAfter(str [, date])               | check if the string is a date that's after the specified date (defaults to now).
isAlpha(str [, locale])             | check if the string contains only letters (a-zA-Z).
isAlphanumeric(str [, locale])      | check if the string contains only letters and numbers
isAscii(str)                        | check if the string contains ASCII chars only.
isBase64(str)                       | check if a string is base64 encoded.
isBefore(str [, date])              | check if the string is a date that's before the specified date.
isBoolean(str)                      | check if a string is a boolean.
isByteLength(str, options)          | check if the string's length (in UTF-8 bytes) falls in a range.
isCreditCard(str)                   | check if the string is a credit card.
isCurrency(str, options)            | check if the string is a valid currency amount
isDataURI(str)                      | check if the string is a data uri format.
isDecimal(str)                      | check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.
isDivisibleBy(str, number)          | check if the string is a number that's divisible by another.
isEmail(str [, options])            | check if the string is an email
isEmpty(str)                        | check if the string has a length of zero.
isFQDN(str [, options])             | check if the string is a fully qualified domain name (e.g. domain.com).
isFloat(str [, options])            | check if the string is a float.
isFullWidth(str)                    | check if the string contains any full-width chars.
isHalfWidth(str)                    | check if the string contains any half-width chars.
isHexColor(str)                     | check if the string is a hexadecimal color.
isHexadecimal(str)                  | check if the string is a hexadecimal number.
isIP(str [, version])               | check if the string is an IP (version 4 or 6).
isISBN(str [, version])             | check if the string is an ISBN (version 10 or 13).
isISSN(str [, options])             | check if the string is an ISSN
isISIN(str)                         | check if the string is an ISIN (stock/security identifier).
isISO8601(str)                      | check if the string is a valid ISO 8601 date.
isISRC(str)                         | check if the string is a ISRC.
isIn(str, values)                   | check if the string is in a array of allowed values.
isInt(str [, options])              | check if the string is an integer.
isJSON(str)                         | check if the string is valid JSON (note: uses JSON.parse).
isLatLong(str)                      | check if the string is a valid latitude-longitude coordinate.
isLength(str, options)              | check if the string's length falls in a range.
isLowercase(str)                    | check if the string is lowercase.
isMACAddress(str)                   | check if the string is a MAC address.
isMD5(str)                          | check if the string is a MD5 hash.
isMobilePhone(str, locale)          | check if the string is a mobile phone number
isMongoId(str)                      | check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
isMultibyte(str)                    | check if the string contains one or more multibyte chars.
isNumeric(str)                      | check if the string contains only numbers.
isPostalCode(str, locale)           | check if the string is a postal code
isSurrogatePair(str)                | check if the string contains any surrogate pairs chars.
isURL(str [, options])              | check if the string is an URL
isUUID(str [, version])             | check if the string is a UUID (version 3, 4 or 5).
isUppercase(str)                    | check if the string is uppercase.
isVariableWidth(str)                | check if the string contains a mixture of full and half-width chars.
isWhitelisted(str, chars)           | checks characters if they appear in the whitelist.
matches(str, pattern [, modifiers]) | check if string matches the pattern.

## Sanitizers

api                                | more
---------------------------------- | --------------------------------------------------------------------------------
blacklist(input, chars)            | remove characters that appear in the blacklist.
escape(input)                      | replace <, >, &, ', " and / with HTML entities.
unescape(input)                    | replaces HTML encoded entities with <, >, &, ', " and /.
ltrim(input [, chars])             | trim characters from the left-side of the input.
normalizeEmail(email [, options])  | canonicalizes an email address
rtrim(input [, chars])             | trim characters from the right-side of the input.
stripLow(input [, keep_new_lines]) | remove characters with a numerical value < 32 and 127, mostly control characters
toBoolean(input [, strict])        | convert the input string to a boolean
toDate(input)                      | convert the input string to a date, or null if the input is not a date.
toFloat(input)                     | convert the input string to a float, or NaN if the input is not a float.
toInt(input [, radix])             | convert the input string to an integer, or NaN if the input is not an integer.
trim(input [, chars])              | trim characters (whitespace by default) from both sides of the input.
whitelist(input, chars)            | remove characters that do not appear in the whitelist
