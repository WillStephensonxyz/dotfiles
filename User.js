// Enable Dark Mode
user_pref("browser.in-content.dark-mode", true);
user_pref("ui.systemUsesDarkTheme", 1);

// Set Default Search Engine to DuckDuckGo
user_pref("browser.search.defaultenginename", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");

// Enhanced Tracking Protection - Strict
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("browser.contentblocking.category", "strict");

// Website Privacy Preferences - Do Not Track & Data Selling
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);

// Disable Firefox Data Collection and Use
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable Privacy-Preserving Ad Measurement
user_pref("privacy.restrict3rdpartystorage.partitioning", true);
user_pref("browser.privacySegmentation.enabled", false);
user_pref("browser.privacySegmentation.preferences.show", false);

// Block Dangerous and Deceptive Content
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.downloads.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", true);
user_pref("browser.safebrowsing.allowOverride", false);

// Enable OCSP Query for Certificate Validity
user_pref("security.OCSP.enabled", 1);

// Enable HTTPS-Only Mode in All Windows
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode.upgrade_local", true);

// Enable DNS over HTTPS (DoH) with Max Protection
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddress", "1.1.1.1");  // Cloudflare DoH bootstrap IP
user_pref("network.security.esni.enabled", true);
