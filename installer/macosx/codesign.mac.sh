#!/bin/bash
set -x

if [[ -f `dirname $0`/utils.sh ]]; then source `dirname $0`/utils.sh; fi

if [ -d "$1" ]; then
    echo "Signing recursively all files in directory '$1'"
    if [ -f "$2" ]; then
        entitlements="--entitlements $2"
    fi
    contents_dir="$1/Contents"
elif [ -f "$1" ]; then
    if [ ! -f "$2" ]; then
        echo "ERROR: Second arg must be entitlements file. Exit"
    elif [ -z "$2" ]; then
        echo "ERROR: Second arg must be entitlements file. Exit"
    fi
    entitlements="$2"
    echo "Signing file '$1'"
    codesign \
        --sign "Developer ID Application: Alteametasoft" \
        --timestamp \
        --force \
        --verbose=4 \
        "$1" \
    || exit -1
    exit 0
else
    echo "ERROR: First arg must be directory or single file! Exit."
    exit -1
fi

# ditto -c -k --keepParent "$1" ~/bundle-ditto-0.zip

if [ -z "$CODE_SIGN_OPTIONS" ]; then
    CODE_SIGN_FLAG=""
else
    CODE_SIGN_FLAG=--options
fi

echo "============= Sign all frameworks ============="
codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "$1"/Contents/Frameworks/* \
|| exit -1

echo "============= Sign all files in $contents_dir/PlugIns dir ============="
find "$contents_dir"/PlugIns -type f \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "{}" \; \
|| exit -1

echo "============= Sign all files in $contents_dir/Resources dir, except java8,python2,wevote ============="
find "$contents_dir"/Resources -not \( -path "$contents_dir"/Resources/tools/java8 -prune -o -path "$contents_dir"/Resources/tools/python2 -prune -o -path "$contents_dir"/Resources/tools/wevote -prune \) -type f \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "{}" \; \
|| exit -1

echo "============= Sign all files in $contents_dir/Resources/tools/java8 dir ============="
find "$contents_dir"/Resources/tools/java8 -type f \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    --entitlements entitlements-java.plist \
    "{}" \; \
|| exit -1

echo "============= Sign all files in $contents_dir/Resources/tools/python2 dir ============="
find "$contents_dir"/Resources/tools/python2 -type f \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    --entitlements entitlements-python2.plist \
    "{}" \; \
|| exit -1

echo "============= Sign all files in $contents_dir/Resources/tools/wevote dir ============="
find "$contents_dir"/Resources/tools/wevote -type f \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    --entitlements entitlements-wevote.plist \
    "{}" \; \
|| exit -1

echo "============= Sign all files in $contents_dir/MacOS dir ============="
find "$contents_dir"/MacOS -name '*.dylib' \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "{}" \; \
|| exit -1
find "$contents_dir"/MacOS -name '*.a' \
-exec codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "{}" \; \
|| exit -1
codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "$contents_dir"/MacOS/plugins_checker \
|| exit -1
codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "$contents_dir"/MacOS/ugenem \
|| exit -1
codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "$contents_dir"/MacOS/ugenecl \
|| exit -1
codesign \
    --sign "Developer ID Application: Alteametasoft" \
    --timestamp \
    --force \
    --verbose=11 \
    $CODE_SIGN_FLAG $CODE_SIGN_OPTIONS \
    --strict \
    ${entitlements} \
    "$contents_dir"/MacOS/ugeneui \
|| exit -1

# ditto -c -k --keepParent "$1" ~/bundle-ditto-1.zip

