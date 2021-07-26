# BUG: keep sass variable across multiple files

## Problem

If we have a theme variable set in a base file, that file will correctly interpret the `get-theme` function. If we add a new file under the base file, we want to use the same theme variable but the theme is considered `undefined` in this file and always uses default theme.

## Solution

1. Separate variables out of base file and import them to each secondary file as necessary (similar to importing protocol lib)
2. Adjust gulpfile to group these stylesheets into one? site + page, so they can share variables? would that cause a performance issue?
3. Re-declare variables in relevant files

**NOTE**: node-sass is now deprecated, breaking update to gulp-sass relies on dart instead (https://github.com/dlmanning/gulp-sass/releases/tag/v5.0.0)