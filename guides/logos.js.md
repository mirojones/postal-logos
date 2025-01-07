# `logos.js`
The `logos.js` file is a `const` named `logos` with an array of JSON objects for each post.
## Names
- `cc` \[required\]
  - string: ISO alpha-2 country code.
- `post` \[required\]
  - boolean: `false` if no post exists.
  - string: Name of post.
  - array of strings: ISO alpha-2 country codes of other countries whose post/s handle mail in that country.
  - array of objects
    - `post` \[optional\]
      - string: Name of post.
    - `cc` \[optional\]
      - string: ISO alpha-2 country codes of other countries whose post/s handle mail in that country.

## Examples
...
