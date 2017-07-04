# accepts

## API

api                        | more
-------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------
accepts(req)               | Create a new Accepts object for the given req
accept.charset(charsets)   | Return the first accepted charset. If nothing in charsets is accepted, then false is returned
accept.charsets()          | Return the charsets that the request accepts, in the order of the client's preference (most preferred first)
accept.encoding(encodings) | Return the first accepted encoding. If nothing in encodings is accepted, then false is returned
accept.encodings()         | Return the encodings that the request accepts, in the order of the client's preference (most preferred first)
accept.language(languages) | Return the first accepted language. If nothing in languages is accepted, then false is returned
accept.languages()         | Return the languages that the request accepts, in the order of the client's preference (most preferred first)
accept.type(types)         | Return the first accepted type (and it is returned as the same text as what appears in the types array). If nothing in types is accepted, then false is returned
accept.types()             | Return the types that the request accepts, in the order of the client's preference (most preferred first)
