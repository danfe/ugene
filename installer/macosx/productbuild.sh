#!/bin/bash
set -x

if [[ -f `dirname $0`/utils.sh ]]; then source `dirname $0`/utils.sh; fi

if [[ -z "$1" ]]; then 
    echo "ERROR: 1st arg must be application dir!" 
    exit -1
fi
if [[ -z "$2" ]]; then 
    echo "ERROR: 2nd arg must be package name!" 
    exit -2
fi
if [[ -z "$3" ]]; then 
    echo "ERROR: 3rd arg must be new signed package name!" 
    exit -2
fi

if [ -n "$UGENE_BUILD_RELEASE_INSTALL_GLOBAL_PATH" ]; then
    productbuild \
        --component "$1" \
        /Applications/ \
        "$2"
else
    pkgbuild \
        --analyze \
        --root "$1" \
        "Unipro UGENE-component.plist"

    plutil \
        -replace BundleIsRelocatable \
        -bool NO \
        "Unipro UGENE-component.plist"

    pkgbuild \
        --root "$1" \
        --identifier net.ugene.ugene \
        --version 39.0 \
        --install-location Applications/UGENE.app \
        --component-plist "Unipro UGENE-component.plist" \
        "Package.pkg"

    productbuild --synthesize --package "Package.pkg" Distribution.xml

    cat Distribution.xml \
        | perl -n -e 'if (/.*\<installer-gui-script.*/) {print $_; print "    <domains enable_anywhere=\"false\" enable_currentUserHome=\"true\" enable_localSystem=\"false\"/>\n";}else {print $_;}' \
    > Distribution2.xml

    productbuild --distribution ./Distribution2.xml --package-path "Package.pkg" "$2"
fi

productsign \
    --sign "Developer ID Installer: Alteametasoft" \
    --keychain ~/Library/Keychains/login.keychain \
    "$2" \
    "$3"
