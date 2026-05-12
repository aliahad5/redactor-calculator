[Skip to content](https://dev.sighthound.com/redactor/docs/release-notes/#713-may-5-2026)

# Release Notes

## 7.1.3 – May 5, 2026 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#713-may-5-2026 "Permanent link")

**New Features**

- **Out-of-Disk-Space Protection**


When disk usage on the app data folder exceeds the threshold, the server replies with HTTP 503 to all requests except `/health` and resumes automatically once it drops. Configurable via `REDACTOR_OODSTRACK_THRESHOLD_PCT` (default 90%) and `REDACTOR_OODSTRACK_INTERVALS`.

- **Memory Diagnostics**


A new tracker samples heap usage and logs new high-water marks, and can write a V8 heap snapshot when usage exceeds a configurable percentage of the heap limit. Controlled via `REDACTOR_DIAG_OOMTRACK_INTVL`, `REDACTOR_DIAG_OOMTRACK_DUMP_PCT`, and `REDACTOR_DIAG_OOMTRACK_DUMP_PATH`.

- **Hide API User Identity in Video List**


The new `REDACTOR_UI_SHOW_USERNAME_API` env var controls whether `api:<id>` / `emb:<user>` shows in the "In Use" overlay. Now hidden by default.

- **Optional Persisted Redaction History**


Per-session history persistence is now opt-in via the new `REDACTOR_HISTORY_ENABLED` env var (default `0`=off), reducing disk I/O for high-throughput API workloads. For in-depth audit logs you might want to set it to `1`.


**Updates**

- **Server Stability**
Internal optimizations got added to make the backend more robust and responsive under concurrent API (and sometimes regular user) load.

- **Operational Logging**


Active session and operation counts are now logged on each change, and OS resource limits are logged at startup.


**Bug Fixes**

- **KeepAlive Interval with Polling Transport**


Setting `REDACTOR_FORCE_POLLING_TRANSPORT=1` could hit the server with too many keepAlive POSTs. This is now back to regular, recommended intervals.

- **Box Border Visuals**


The borders for background / keep-unredacted boxes did not render properly. The original visual concept got improved for better visibility.

- **Reaction to Malformed Requests**


All effective endpoint flows are now validated thoroughly againt malformed traffic (observed on publicly-exposed/non-firewalled hosts).


## 7.1.0 – March 25, 2026 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#710-march-25-2026 "Permanent link")

**New Features**

- **Smart Fill Redaction Mode**


"Smart Fill" is now available as a dedicated redaction mode in the export UI, providing visually more pleasing redaction compared to fixed color filling.

**Updates**

- **Improved Audio Gap Filling**


Audio gap filling during conversion now uses proper resampling and silence padding, improving handling of videos with incomplete or irregular audio streams. One side effect of this was that rendering was reported as success, but no output file had been actually created.

**Bug Fixes**

- **License Activation Error Reporting**


License activation now correctly reports rejection errors: unknown serial numbers show "serial number not found" instead of "server unreachable", rejections are no longer masked as success when a valid license is already present, and mixed activation responses (some serials accepted, some rejected) now yield a partial success instead of a blanket error.

- **Context Menus During Object Creation**


Context menus on existing detection objects are now suppressed while the add-new-objects mode is active, preventing potential race conditions and unintended edits.


## 7.0.6 – March 17, 2026 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#706-march-17-2026 "Permanent link")

**Updates**

- **GPU Pre-Configuration at Startup**


GPU environment variables are now configured before any CUDA initialization can occur, preventing conflicts when GPU usage is disabled. New environment variables `SIO_ACTIVE_CUDA_DEVICE` and `SIO_CUDA_DISABLED` allow complete CUDA bypass at the driver level.

- **Early License Validation**


The license is now validated before spawning a processing job, so invalid-license errors surface immediately rather than after a costly process start.

- **Bulk Selection Menu Labels**


The bulk selection context menu now shows type-specific labels (e.g. "Remove videos", "Remove images") instead of the generic "Remove media" label.

- **Deinterlace Filter Applied Unconditionally**


The deinterlace filter was being applied to all jobs instead of only when explicitly requested, this has now been optimized.

- **Error Dialogs Showing Raw JSON**


Error dialogs in export, processing, and server-error flows now show a meaningful human-readable reason instead of raw JSON.


**Bug Fixes**

- **Crash on Videos with Non-Standard Resolutions**


Videos with frame widths not divisible by 4 (e.g. screen recordings at 1170px wide) caused the conversion stage to silently truncate the frame dimensions, leading to an out-of-bounds crash during redaction rendering. This has been fixed.

- **Video List Empty After Browser Refresh**


Refreshing the browser while inside an open editor session could leave the video list empty. The list now correctly reloads on re-attach.


## 7.0.5 – February 24, 2026 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#705-february-24-2026 "Permanent link")

**Bug Fixes**

- **Crash While Probing for Video Decoders**


On some drivers/hardware (CUDA confirmed) probing for the video decoding capabilities caused a crash, even if video decoding in general was set to CPU only mode (default). Such ahead-probing is now explicitly disabled.

- **API: operations failed if file output URI was given without an export**


In this edge case an output URI indicating a file name (missing / at the end of the path) would cause the operation to fail late in the run if the `MEDIA_RENDER` feature wasn't provided. This has now been mitigated by the output URI be simply ignored, so existing code will still function. Notice in general that the output URI does _not_ get persisted across operations.


## 7.0.4 – February 19, 2026 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#704-february-19-2026 "Permanent link")

**Bug Fixes**

- **Track Resizing caused leftover objects**


Race condition where sometimes objects lost their associated tracks, which caused the UI to error out. This has been fixed and former data inconsistencies being automatically mitigated.

- **Missing Labels**


The vehicle and screen labels, for existing detection, were not shown in the video list.


## 7.0.3 – February 13, 2026 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#703-february-13-2026 "Permanent link")

**New Features**

- **More Detection Classes**


Redactor can now detect these new classes:


1. Documents in general
2. IDs, e.g. driver licenses or passports
3. Screens (laptops, monitors, phones)

These classes are also selectable via the API.

- **H.265 Importing**


It is now possible to import H.265 (aka HEVC) video files into Redactor. Rendering will still happen i the H.264 format (highest compatibility for video playback)

- **High Contrast Boxes**


The object boxes are now a compound of color shades (instead of single solid color) to enhance visibility no matter what the background behind them is.

- **Undo/Redo Support**


Support for such actions via the common \[Ctrl\]+\[Z\] (undo) and \[Ctrl\]+\[Y\] keyboard input. As usual these keyboard shortcuts can be recalled by pressing the \[F1\] key. This covers all areas of editing (boxes, audio regions, grouping). The scope is limited for the currently opened session, until it gets closed, hence it will not touch edits (of potentially other users) beyond this. The data amount does not matter, you can do a very long auto-detection, undo it but then also bring the whole set back (redo) if you want. Notice that after an undo any new (committed) action will clear the redo history.

- **Background Redaction**


Two features were added to make background (aka as reverse) redaction possible:


1. An object can be marked a _As background_, in such a case other objects will rendered on top of it. This is usually used to simply make one static box, selectively over a certain time range, being full screen to cover the background.
2. An object can be marked with the _Keep unredacted_ flag, for which at rendering time it won' be redacted and always be visible. However it will be drawn over by objects which are marked to be redacted.

The common scenario is to have e.g. 1+ persons in a scene visible, with everything else redacted. In such a case the scene is marked using (1) to be redacted and the person objects in question being flagged as to keep unredacted like in (2).

- **Escape Key to Cancel**


Wherever there is a \[Cancel\] button visible it is possible to trigger it by pressing the \[Esc\] key.

- **Audit Data Generation**


For 1+ videos (when not being opened) audit logs can be requested via the context menu. It will yield a ZIP file containing pairs (for each video) of two files:


1. One CSV file, ready to exported in spreadsheet apps, with each row documenting for what session and user happened when, e.g. `2025-...,99b635d2...,john,,02789...,redactor.export,begin,`. Some events can be linked together with identifiers.
2. One gz file containing the full history of the session, encoded in JSON, as snapshots of each editing attempt, stored when a video is closed. The data itself is of internal format right now, but an exact 1:1 copy of what would have been sent at the export/rendering time, so it's possible to replay the individual modifications manually.

These audio log data items will also be exported when via the API a session is placed into remote storage, hence two new files, `{session-id}_history.csv`and `{session-id}_audit.csv` will appear from now on.

- **Show User Name in Video List**


If a video is shown as _"In Use"_ in the (server) video list the name of the user working on it will also be displayed. In case of API users (during operation processing) or embedded users an identifier for easy correlation will be displayed.

- **API: Hash Generation**


By default an SHA-256 hash is computed over the original media file (pre-conversion/intake) and stored with the associated session data. Other algorithms can be defined by the environment variable `REDACTOR_HASH_TYPES_IMPORT`, even multiple ones if comma-separated. The current ones support are `md5,sha1,sha256,sha512`. Similarly an optional selection can be defined via `REDACTOR_HASH_TYPES_EXPORT`, the computed hashes over the exported media file will then be exposed via the audit and meta data.

- **API: Session Data Snapshots**


When saving sessions into storage locations there is now a new companion file called _video\_data.hjson_, in which basic session information is present. This facilitates support requests and/or can be used to figure out other potential issues. While being a private data structure at this moment it might even be helpful for operations.

- **API: TypeScript types published**


We now provide d.ts files for all of the public data types used in the API calls and/or results.


**Updates**

- **Bulk Operations**


Offer bulk selection mode only if there are enough items available.

- **API: operations succeeded even if nothing was exported**


If a session didn't have redactions no output is rendered, but this was declared to be successful with nothing placed the the output URI. Such a scenario will cause an error now.

- **Enhanced Crash Support**


In cases of crashes during loading, processing or rendering detailed crash dump information is collected, which can then be send off in one convenient ZIP file, allowing maximum possible reproducibility of the issue on the support side.


**Bug Fixes**

- **Live Recording Uninterrupted**


The inactivity timeout on the server version terminate connections even if live recording was happening. This is now detected and sessions will stay connected as long as such activity is going on.

- **Live Recording Boxes Stuck**


The selection box would stay visible after an early live recording cancellation.

- **Delete Key Ignored after Selection**


It was possible to delete objects after new boxes where selected, by using the \[Delete\] key.

- **Audio Region Hidden**


The greyed out parts (=already played) in the audio timeline was hiding/overlaying existing regions.

- **Export Progress Bar after Reopening**


When returning to a session where an export was happening the progress did not indicate that it was an export which was going on, but some general processing.

- **Conversion Process kept running on Cancel**


When an import was cancelled the conversion process kept running in the background until finally finished and the result ignored.

- **Full Frame boxes missed one Line**


If a box was placed to occupy the whole video frame, one line on the bottom didn't get blurred out, depending on the resolution.


## 6.6.0 – September 19, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#660-september-19-2025 "Permanent link")

**New Features**

- **Data Drop via Flag File**


By dropping a file (can be empty) named DATA\_DROP in the user directory will reset it completely on a restart except of license and the registered user data (name, credentials). This is intended to be used when Redactor acts as a worker for transient operations (no persistence required) in an API driven context. . Confirmation of this drop is in the _main.log_ (`...INFO [init] dropped all data except license and user data, reason: file`).

**Updates**

- **Original Session Identifier Enforcement**


There was a unintended conflict possible when a session got originally introduced, stored in a bucket and then later on loaded from there again, but with a different session identifier given in the operation's `prepareConfig`. This will now cause an error, since session identifiers are pinned forever through their immutable presence in the _manifest.json_ file (stored in a bucket along with all of the other data).

**Bug Fixes**

- **Session Cleanup Failed**


Due to a 3rd party library causing recursion the backend would crash. Did only happen in certain storage scenarios.

- **Missing Audio Data padded with Silence**


If a video only contains an audio portion at the beginning we pad the rest with silence. This facilitates intake, conversion, analytics and presentation.


## 6.5.2 – August 25, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#652-august-25-2025 "Permanent link")

**New Features**

- **Open API Validation**


For API users: by setting the environment variable `REDACTOR_API_SPEC_ENABLE=1` the OpenAPI 3.0 specification can be accessed under _http://\[host\]:\[port\]/apispec/yaml_ (or _http://\[host\]:\[port\]/apispec/_ for JSON). For request and response validation set the environment variable `REDACTOR_API_VALIDATE=1`. Notice though that your existing API calls might need adjustment if e.g. extraneous data is present.

**Updates**

- **Automatic CPU Fallback if GPU Detection Fails**


If during the GPU detection phase an unexpected error occurs (happens e.g. on untested CUDA updates) Redactor will automatically switch into CPU mode, so you can still use it. The incident will be logged. This the equivalent of setting the `REDACTOR_GPU_IGNORE=always` environment variable.

- **Enhanced Reconnection Handling**


The transport layer (server version only) was overhauled to keep the client connected, even in unfavorable network conditions. Same as for more timely (30 seconds) detachment of clients, and the release of their sessions, if they cannot reach the server any longer. In the UI a _Reconnecting..._ indicator will show when connectivity is lost, until reconnection happens, so you are aware of the current situation. Unless your networking won't allow websockets at all, you are encouraged not to use the fallback via the `REDACTOR_FORCE_POLLING_TRANSPORT=1` environment variable any longer. Please remove it, or set it to `...=0` if you have been using this approach before.


## 6.5.1 – July 18, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#651-july-18-2025 "Permanent link")

**New Features**

- **Bulk Object Selection via Shift-Click**


The ability to select a range of objects in the Objects List via Shift-Click has been added. This key was previously used to select individual objects, so that functionality is now provided via Control or Command keys.
  - **Range selection:** Click first object, hold `Shift` and click last object
  - **Single selection:** Hold `Ctrl` (Windows) or `Command` (Mac) and click to select or deselect individual objects.
- **View Keyboard Shortcuts in Settings**


A "View Keyboard Shortcuts" link has been added to the [App Settings](https://docs.redactor.com/settings/) screen for quick and easy access to all available [keyboard shortcuts](https://docs.redactor.com/video-editor/keyboard-shortcuts/).


**Updates**

- **GPU Acceleration Now Requires 4GB VRAM by Default**


GPU acceleration now requires a compatible NVIDIA GPU with at least 4GB of VRAM to ensure stability and performance for advanced computer vision models. Systems without a compatible GPU or with less than 4GB VRAM will use CPU mode by default (but this can be overridden).

Based on our experience, GPUs with 3GB or more can typically run auto-detection with GPU acceleration enabled for most videos. However, we've set the default to 4GB to build in a cushion, as some videos may require more. This is especially important on Windows, where the operating system can use a portion of VRAM for other processes, reducing the amount available to Redactor and increasing the chance of running out of VRAM during auto-detection.

- **GPU Acceleration Control via Environment Variable**


Administrators can override the default GPU behavior by setting the `REDACTOR_GPU_IGNORE` environment variable with one of the following values:


  - `auto` (default): Enable GPU acceleration only if a compatible NVIDIA GPU with at least 4GB VRAM is detected.
  - `never`: Always enable GPU acceleration, even if the GPU has less than 4GB VRAM. May crash if VRAM runs out.
  - `always`: Always disable GPU acceleration and use CPU mode.

This provides greater flexibility for deployments with different hardware or specific needs. If you encounter videos that require more than 4GB of VRAM and GPU acceleration is causing issues, you can set the environment variable to `always` to disable GPU mode and force processing on the CPU instead.

If you experience such issues, it would also be helpful if you could [send us your logs](https://docs.redactor.com/support/) for review. This allows us to monitor details such as the type of video (resolution, fps, etc.) and the auto-detection settings (confidence threshold, object types selected, etc.) that were used, so we can better diagnose and optimize the VRAM defaults for future releases.

**Bug Fixes**

- **Crash During Speech Transcription in Desktop Version**


Fixed an issue that caused Redactor Desktop to crash when running speech transcription. The server version was not affected.
- **Export Metadata Not Fully Deleted on STATE\_DROP**


Fixed a bug where optional metadata files generated during export were not always removed during a `STATE_DROP` operation.

## 6.4.4 – June 23, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#644-june-23-2025 "Permanent link")

**What's New and Improved**

- **Download Logs from the Settings Screen**
Admin and Desktop users now have a “Download Logs” button in the Settings screen to easily collect logs without using the `F2` keyboard shortcut or needing access to the server's filesystem. Users in the Supervisor or Users groups will not have access to this feature.

- **Display License Status and Expiration Date**
Each license in the Admin panel now clearly shows its expiration date and time. Expired licenses are highlighted in red for quick identification.

- **Expanded Profile Selection on Low-Spec Devices**
Systems with limited GPU memory (< 2.5GB) now have access to confidence threshold options when running the auto-detection process: _Balanced_ (default), _Higher_, and _Lower_.


**Bug Fixes**

- **Expired Licenses Not Replaced with Valid License During Startup**
Resolved an issue where newly refreshed licenses were mistakenly deleted during startup if the previous license had expired.

- **Fixed Object Timeline Context Menu**
Timeline context menus now behave consistently and support localization. Previously, multiple context menus could open with each right-click on a timeline object.

- **Group Cleanup When Deleting Objects**
Deleting an object now correctly removes it from any groups it belonged to in the saved data.

- **Cleaner Application Logs**
Removed unnecessary debug logs from the browser to improve clarity and performance.


## 6.4.3 – June 12, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#643-june-12-2025 "Permanent link")

**Improvements**

- **Improved S3 Integrity Checks**: File uploads to AWS S3 now use built-in hashing from the AWS SDK to ensure upload integrity.
- **More Resilient Session Restoration**: Session restoration from S3 and other storage buckets now works reliably even when optional overlay data is missing.

**Bug Fixes**

- **Fixed Unexpected Manifest Loading**: Redactor no longer attempts to load the `manifest.json` file when the input path does not end in a trailing slash.
- **Preserved Session Data Without Overlay Files**: Fixed a bug where imported session data would reset to defaults if overlay files were missing.
- **Synced Overlay Files to Storage**: Overlay files are now correctly synchronized to either local or remote storage buckets to maintain additional editing context.
- **Resolved Crash from Build Tool Conflict**: Replaced a problematic third-party hashing module to prevent a deployment-time crash.

## 6.4.1 – May 23, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#641-may-23-2025 "Permanent link")

**New Features**

- **Improved Connectivity for Challenging Networks**: Redactor now includes a fallback, long-polling connection option for networks that don't support WebSockets. Set the environment variable `REDACTOR_FORCE_POLLING_TRANSPORT=1` to force the connection to use polling. If you experience frequent "Lost connection to server" disconnects, enable
this new option to see if it helps.

**Improvements**

- We’ve updated the Auto Detection settings screen to make it easier to understand each detection confidence option.

**Bug Fixes**

- Fixed an issue where exported videos appeared darker or more washed out than expected. Videos now retain accurate colors and contrast.

## 6.4.0 – May 12, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#640-may-12-2025 "Permanent link")

**New Features**

- **Object Timeline View:** Visualize selected objects on a dedicated timeline, making it easier to review activity over time.
- **Object Grouping:** Group multiple objects or tracks to simplify the management and review of related detections.
- **Object Selection Enhancements:** You can now select items in the Objects List by hovering and clicking the new checkmark icon in the top-right corner. The previous method—holding the `Shift` key and clicking—still works.

**Improvements**

- **Improved Image Quality:** Exported single images are now clearer and sharper. File sizes may be slightly larger as a result.
- **Updated Selection Styling:** Selected items in the Objects List now feature a clearer border instead of the previous semi-transparent overlay and central checkmark.
- **TypeScript API Types:** A typescript package is now included with API-enabled installations, offering documentation and examples for developers.

**Bug Fixes**

- Fixed an issue where manually created objects didn’t display the “manual” tag in the main video list or object filter.
- Resolved a memory issue that could lead to excessive usage or crashes when tracking long-duration objects, improving overall stability and performance.

## 6.3.2 - April 15, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#632-april-15-2025 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes "Permanent link")

- API: v4 data import was broken, now creating a _manifest.json_ file on the fly

## 6.3.1 - April 11, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#631-april-11-2025 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features "Permanent link")

- Added Korean and Polish languages for speech detection

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates "Permanent link")

- Simple version query with the `/version?json` URL path.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_1 "Permanent link")

- API: supported S3 ACL set for writing wasn't complete (missing `aws-exec-read`, `bucket-owner-*`)

## 6.3.0 - April 11, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#630-april-11-2025 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_1 "Permanent link")

- Selection improvements:
  - \[Ctrl\]+\[D\] to select the current object in the video editor
  - _Invert Selection_ menu item in the objects list, useful for deleting many unwanted objects
  - Objects selection is getting preserved, will be restored when reopening a video later on
- Environment variables are now getting validated, and documented under http://{server-url}/env/report?dev
- Keyboard shortcut \[F2\] to quickly gather the logs as a ZIP file on the desktop without having to create a support ticket
- API: if an operation's request descriptor is marked with `{ ... transient: true }` the operation will be forgotten right after it finished, which avoids having to do explicit delete calls afterwards (with the outcome being reported via notifications)
- API: operation notifications can be declared to be retried of the HTTP callback called, e.g. with `{ ... retries: 3 }` to try 3x before giving up
- API: added route `/api/v11/ops:status` to yield JSON overview of the operations count and how many are queued.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_1 "Permanent link")

- API: added environment variable `REDACTOR_TLS_ACCEPT_UNAUTHORIZED` to use TLS certificate leniency only in the Redactor process.
- API: CORS improvements, added environment variable `REDACTOR_CORS_ALLOW_ORIGIN=1`
- API: more efficient MD5 creation for S3 writes, added environment `REDACTOR_API_SYNC_S3_SENDMD5=0` to skip it altogether

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_2 "Permanent link")

- Slow zooming in der audio timeline fixed
- Contact Support errors are now shown more prominently
- Support dialog wasn't working correctly, now reporting errors if transmission failed.
- Thorough cleanup if session couldn't be created.
- Better crash recovery, not letting the UI become stuck.
- API: v4 data import was broken, now creating a _manifest.json_ file on the fly

## 6.2.0 - February 26, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#620-february-26-2025 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_2 "Permanent link")

- API: operation request queuing. Prevents overloading the system when too many requests are issued. Default request queue size is 1024 (environment variable `REDACTOR_API_OP_QUEUE_LIMIT` to change), anything beyond that will let request being denied with an HTTP busy response. Only 4 operations will run in parallel or actively respectively (`REDACTOR_API_OP_MAX_RUNNING`). Cancellation can still happen, even if in the queue.
- Press \[F1\] for quick overview of keyboard shortcuts available.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_2 "Permanent link")

- API: webhook requests (callbacks for operation status) can now be repeated on failure, configurable via `REDACTOR_EVENT_WEBHOOK_RETRIES=N` environment variable. Recommended value is `3`.
- API: operations can be marked with `{ ... transient: true }` in the request to make sure their state get removed automatically when they finished, suitable when combined with webhooks for receiving status (versus REST polling).
- Expired licenses are kept and tried to be refreshed at startup time.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_3 "Permanent link")

- Duplicated error logging prevented, better error reason surfacing.
- Discard sessions if an operation fails, not more leftover/build-up.
- Contact support dialog (log attachment choice) was broken, transmitted data is now also smaller/uploads faster.
- More thorough session (data) deletion, some parts got leftover/built up under certain circumstances.
- The `destroy` command wasn't forwarded to iFrame embedded Redactor instances.
- Fixed delayed user detachment issues (memory buildup on inactivity).

## 6.1.3 - January 22, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#613-january-22-2025 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_3 "Permanent link")

- Added new environment variable to help with debugging videos that fail to import. Setting `REDACTOR_LOADVIDEO_ERROR_DUMPS=1` (increase 1 to how many debug folders/videos you want to keep on system) will copy the original and the converted videos (if any) into a local folder, mark this folder with the session ID, drop additional information (request etc) into the folder, and delete older folders if we run out of space/capacity.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_3 "Permanent link")

- Preventing the contact-support dialog from being submitted multiple times in a row, present a status message while transmitting.
- Remove unknown tracks from media during import.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_4 "Permanent link")

- (Desktop) neither the Add Media button nor the File->Open menu would load media. Only dragging and dropping worked. Caused by Electron update in 6.1.2

## 6.1.2 - January 14, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#612-january-14-2025 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_4 "Permanent link")

- Upgrade Electron to latest version.
- Pressing F1 on keyboard when in editor will show a list of keyboard shortcuts.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_4 "Permanent link")

- (API) Add support for submit MD5 of content if needed by S3

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_5 "Permanent link")

- (Server) Fix issue with new installations getting stuck on initial setup screen.
- (Desktop) Stepping through a video frame-by-frame could show the boxes in a different location than the rendered output. They were off by one frame.

## 6.1.1 - December 19, 20024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#611-december-19-20024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_5 "Permanent link")

- Replace native browser dialogs with application specific ones.
- Allow uploading of media into current folder. Previously, all uploads would be placed in the root location.
- Updated context menu on main page to work better with bulk operations.

## 6.1.0 - December 13, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#610-december-13-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_6 "Permanent link")

- Folder Support - Media can now be moved and grouped into folders on the main page.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_5 "Permanent link")

- Improved handling of interlaced videos and those with odd resolutions during import conversion stage.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_6 "Permanent link")

- Improved support of filenames with uncommon characters (like #)
- Fixed internal issue with persisted storage and write queueing causing issues (introduced in v6.0.5)

## 6.0.7 - December 10, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#607-december-10-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_7 "Permanent link")

- (API) add ability to ignore SSL/TLS certificate issues for webhook URIs. Must be specified in request body as metadata `etc_event_webhook_ignore_certificate_errors: true`

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_6 "Permanent link")

- (API) Add `skipOnError` request option für `STATE_DROP` for debugging purposes (error state is kept for querying)

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_7 "Permanent link")

- (Desktop) The preview button was not working properly and would only show a black area instead of the exported media. This depends on the locally exported file still being available at viewing time.

## 6.0.6 - December 2, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#606-december-2-2024 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_7 "Permanent link")

- Improved error handling for speech transcription processing (inconclusive before).

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_8 "Permanent link")

- (API) `STATE_DROP` was being skipped if `sessionId` wasn't provided in request body.

## 6.0.5 - November 11, 2025 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#605-november-11-2025 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_8 "Permanent link")

- (API) Ability to custom name the exported file when written back to storage/bucket using `videoContext.outputContext.exportKey = "my exported file.mp4"` in the request.
- New keyboard shortcut \[W\] will cycle through the redaction objects on the screen
- New keyboard shortcut \[Delete\] will delete the currently selected object
- New environment variable `REDACTOR_GPU_IGNORE`. Defaults to `0`. Set to `1` to disable the usage of any GPU in case of incompatibilities.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_9 "Permanent link")

- Fixed issue with audio redaction regions not muting during playback in editor.
- Update the label used for Chinese language in speech transcription.

## 6.0.4 - October 28, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#604-october-28-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_9 "Permanent link")

- New keyboard shortcuts added for manual editing. \[A\] and \[D\] keys to move backward and forward one frame, the same way as the left/right arrow keys do. After modifying the position or size of an existing redaction box, pressing the \[S\] key will apply the change to a single frame, like click the button of the same name.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_8 "Permanent link")

- If GPU is present, skip building the models that are not used in the UI.
- Show the _Export Range_ option in the _Render_ and _Export_ modal, even if no redactions have been specified. This is useful to just trim the video.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_10 "Permanent link")

- Displayed video editing features for audio files.

## 6.0.3 - October 1s7, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#603-october-1s7-2024 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_9 "Permanent link")

- AWS/S3 can now be used without explicitly providing credentials via Redactor environment variables. Counting on properly set up system for AWS (environment etc).

## 6.0.2 - October 15, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#602-october-15-2024 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_10 "Permanent link")

- Enhanced crash handling for processing videos.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_11 "Permanent link")

- Fixed issue with audio truncation.

## 6.0.1 - October 10, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#601-october-10-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_10 "Permanent link")

- Audio only redaction is now possible.
- (API) Audio regions can be passed in via API request

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_11 "Permanent link")

- (API) Provided session identifier is now emitted in API progress messages

## 6.0.0 October 7, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#600-october-7-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_11 "Permanent link")

- Head Detection added as option to auto-detect - replaces face detection, which is still available via the API.
- Display custom metadata from API in the video list.
- Search box added to projects page. It will search filenames and custom metadata if provided via API calls.
- (API) support for specifying export video range in seconds.
- (API) Emitted render event now carries video range as timestamps in seconds.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_12 "Permanent link")

- Rename Videos route to Media in Admin section
- Removed Faces from auto-detection choices and replaced with heads.
- Attempt to pull new license from remote licensing server if local one is expired, instead of becoming unlicensed.
- Head/face box expansion can be specified via environment variable `REDACTOR_PROCESS_(HEAD|FACE)BOX_EXPAND`, API and also profiles.
- Export dialog now displays only options which mater, e.g. audio redaction options will not be displayed if the media doesn’t contain audio.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_12 "Permanent link")

- (API) Filename/URI sanitation in the export URI needed (%, etc.)
- Display the export range for audio-only redactions.
- Fixed bug with exported video (missing last frame and playback issues).
- Fix socket transport disconnection trigger on destroy (closing the wrong session).

## 5.2.13 - August 8, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#5213-august-8-2024 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_13 "Permanent link")

- Custom metadata presentation support added.
- (API) Legacy `processConfig` options supported again to mitigate error handling/crashes caused by this.
- (API) Custom metadata resolution on intake.
- Show "picture" icon over thumbnail on Projects page when media is an image.
- Video list action buttons are disabled when video is in Use.
- Contact Support modal wording and layout changed.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_13 "Permanent link")

- (API) Use filename from Content-Disposition header if available by the server.
- Modifying static boxes now only shows _Apply_ and _Cancel_ buttons.
- v5.2.12 introduced an issue with displaying the list of videos in the Admin Videos section.
- (API) v5.2.12 introduced an issue with applying ACL

## 5.2.12 - July 16, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#5212-july-16-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_12 "Permanent link")

- (API) Ad-hoc, static redaction regions can now be defined in the API request body as part of the renderConfig in `redactionTransientData`. These regions will be overlaid with any other existing redactions, but they will not be persisted like other redaction regions. This is useful for redacting known areas of a video like timestamps or logos. The transient redaction coordinates can be specified as either absolute pixels or relative percentages of the video's dimensions \[0...1\]. See the example below for more details.



```
{
      "inputUri": "https://127.0.0.1:60750/media/small.mp4",
      "features": [\
          "FACE_DETECTION",\
          "LICENSE_PLATE_DETECTION",\
          "MEDIA_RENDER",\
          "STATE_DROP"\
      ],
      "videoContext": {
          "renderConfig": {
              "redactionIntensity": "MEDIUM",
              "redactionShape": "ELLIPSE",
              "redactionStyle": "BLUR",
              "videoPreset": "FAST",
              "videoQuality": 0.55,
              "redactionTransientData": {
                  "static": [\
                      {\
                          "x": 8,\
                          "y": 4,\
                          "width": 32,\
                          "height": 16\
                      },\
                      {\
                          "x": 0.9,\
                          "y": 0.95,\
                          "width": 0.098,\
                          "height": 0.075,\
                          "relative": true\
                      }\
                  ]
              }
          }
      },
      "outputUri": "file:///C:/example/my-bucket/redacted.mp4",
}
```

- (Embedded UI) Initial work was completed to use an iframe to display the editor from an html page hosted on the Redactor server. More details, documentation, and examples are coming soon, but see the following for a very basic example HTML page that embeds Redactor via iframe. The integration supports sending and receiving events to/from the iframe through postMessage and the redactor.invoke.\* events.



```
<!DOCTYPE html>
<html>
      <head>
          <title>{REDACTOR_EMBEDDED_TITLE}</title>
      </head>
      <body>

          <!-- __DEMO_BEGIN__ -->
          <div>
              <button id="closeBtn" onClick="onClose()" style="color: darkblue">Close</button>
              <button id="exportBtn" onClick="onExport()" style="color: darkgreen" >Export</button>
          </div>
          <!-- __DEMO_END__ -->

          <iframe
              src="{REDACTOR_EMBEDDED_IFRAME_SRC}"
              title="{REDACTOR_EMBEDDED_IFRAME_TITLE}"
              style="width: 100vw; height: 100vh"
              id="iframe_redactor_embedded">
          </iframe>

          <script>
              console.log("REDLOG-I: subscribing to iframe messages ...");
              window.addEventListener("message", e => {
                  console.log("REDLOG-I: got iframe message", JSON.stringify(e.data));
              });
              // __DEMO_BEGIN__

              const iframe = () => document.getElementById("iframe_redactor_embedded");

              function onClose() {
                  iframe().contentWindow.postMessage({
                      type: "redactor.invoke",
                      invoke: "sendCommand",
                      command: "close",
                  }, "*");
              }

              function onExport() {
                  iframe().contentWindow.postMessage({
                      type: "redactor.invoke",
                      invoke: "sendCommand",
                      command: "export",
                  }, "*");
              }

              // __DEMO_END__
          </script>
      </body>
</html>
```


##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_14 "Permanent link")

- (Server) The download filename no longer contains the session id as a prefix.
- Show confirmation dialog when a user attempts to remove a video on the Projects page.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_14 "Permanent link")

- (Server) The filename for the redacted download was incorrectly missing the original filename.

## 5.2.11 - July 11, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#5211-july-11-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_13 "Permanent link")

- (API) Metadata can now be provided in prepareConfig. Use `etc_media_title` to set the display name of the media in the Projects page and for export name purposes. If not provided, the display name will be the filename.



```
"prepareConfig": {
      "metadata": {
          "etc_media_title": "my custom title",
      }
}
```

- (API) Allow a custom “Save” button to be displayed in the normal Redactor Server UI. This feature works alongside the new browser event webhook mentioned below and will emit events when a user clicks the Save button. This could be used by your team to signal the user's intent to push the redacted video to your backend service.

- (API) Redactor server can send certain browser events to a webhook which is specified via ENV or in an API request body during MEDIA\_PREPARE. Full documentation and an example will be added to this site soon. To specify the webhook via ENV, set a System environment variable `REDACTOR_EVENT_WEBHOOK` (E.g. `REDACTOR_EVENT_WEBHOOK=http://127.0.0.1:7737/`). Or, to specify the webhook via API request body, use the `etc_event_webhook` item in the `prepareConfig.metadata` object:



```
"videoContext": {
      "prepareConfig": {
          "metadata": {
              "etc_event_webhook": "http://127.0.0.1:7737/",
              "etc_customize": {
                  "export": {
                      "download": "hide",
                      "save": "close"
                  },
                  "session": {
                      "remove": "hide",
                      "deleteRedactionData": "show"
                  }
              },
              "etc_media_title": "my custom title"
          }
      }
},
```


##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_15 "Permanent link")

- Display an error message if the in-app "Contact Support" function does not submit properly. This is typically only an issue for those with a Redactor server behind a restrictive firewall.
- Show confirmation dialog when a user attempts to delete redaction data from a video on the Projects page.
- (Embedded UI) Saving image from current video frame now works when using Shadow DOM

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_15 "Permanent link")

- Timestamps and tick marks in audio waveform were not always visible.
- The path used for the last export was not being remembered in the desktop version.

## 5.2.9 - June 10, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#529-june-10-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_14 "Permanent link")

- (API) Synchronize a redaction session's data with a different bucket/location. If a session:// is given for the input URI and a bucket for the output URI, the entire state of the session will be saved to the outputUri. This is useful if you want to create a backup of the session data or move it off the server/S3/Azure before shutting it down. You will be able to restore the session from the data stored in the outputUri.
- Safari browser is now supported. We haven’t used that browser in the past, so if you find rare glitches on your end please let us now. Tested against the latest Safari 17.4.1 (MacOS 14.4.1 on M1).

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_16 "Permanent link")

- (API) Improved bucket synchronization efficiency: The manifest.json left in buckets now contains checksums will avoid media files being retransmitted if they already exist on the server.
- (API) forceConversion also enabled by default in the API. It is still possible to disable conversion at MEDIA\_PREPARE via forceConversion: false if needed, but we recommend to convert always, since it fixes a lot of glitches we’ve seen in the past due to irregular video data, in a broad sense.
- (API) Context menu enabled and can be customized by the Redactor embedded API constructor call.
- (Embedded UI) Console output can now be filtered by a log level and the messages prefixed for distinct handling, configurable in the SighthoundRedactorEditor constructor options.
- (Embedded UI) Made the SighthoundRedactorEditor.cleanup() async so it’s safe to continue when the editor is truly closed; this was possible before for initiating it and then wait for the exit event, yet the promise is an integrated and a more convenient choice
- Websockets connectivity improved. In case of connection loss, resumption should be transparent and non-interruptive for an active user session, up to a certain timeout or a server restart. Pending messages will be replayed.
- Windows Installer didn’t store custom port numbers on fresh installs. This only happened when no former data directory existed. Now it gets created first thing.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_16 "Permanent link")

- (Embedded UI) Download and preview links in the video list were broken. In case downloadOnly is used for redirecting downloads the associated event now carries the URL which would have been used directly.
- (Embedded UI) The renderConfig event wasn’t truly reflecting all of the choices possible in the export dialog.
- (API) Audio waveform package's global instance prevented the script from being reloaded.
- (API) maskAudio regions provided in the renderConfig was removing custom audio regions. This has been adjusted and the regions are now rendered correctly.
- Audio mute button didn’t restore the formerly set volume.
- Scrollbars were always showing in audio transcripts for Chrome & Edge browsers.
- Image loading didn’t clear the progress dialog.
- Export save path wasn’t remembered in the desktop version.

## 5.2.1 - April 18, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#521-april-18-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_15 "Permanent link")

- (Embedded UI) “Save” button option for embedded UI.
- (Embedded UI) Download Event - redactor.export.download event is emitted when users click either of the Download buttons and it includes the `sessionId` for the selected video.
- Set REDACTOR\_DIAG\_PROBE\_MODE default to “always”.
- (API) /api/v11/videos:list endpoint to get an array of videos loaded into Redactor and their “rendered” status. It can be filtered based on sessionId or projectId.
- (Embedded UI) Add configurable “Save” button to Projects page items
- Allow specifying different outputUri for API calls using session:// as inputUri. The outputUri can be different than those used (if provided) in the initial MEDIA\_PREPARE call.
- New "/api/v11/videos:list" endpoint to query a list of videos loaded into Redactor. It can be filtered based on sessionId or projectId.
- FFprobe is run for all imported videos and results are logged.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_17 "Permanent link")

- Improve the (optional) ignoring of SSL certificate errors for video imports from remote resources.
- (Embedded UI) Scramble intensity events are now emitted in redactor.export.submit event in “maskAudioParams”. Intensity value will be either LOW, MEDIUM, or HIGH.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_17 "Permanent link")

- (API) The timeout for internal API operations has been removed. Previously, the API timeout would be the same as the one set to “Disconnect idle users”.
- (Embedded UI) Video Preview was not appearing on top of buttons.
- (Embedded UI) Fix dropdown not working in Export Dialog (Shadow DOM).
- Filenames with emoji and some Unicode characters would crash the render/export.
- Fixed potential issues when canceling an import operation.
- CSS updates for button transitions.
- Audio waveform tick marks were not showing up in light mode.
- Various Node and Package updates.
- Person checkbox could not be selected/deselected in Objects List.
- Fix export for videos that contain audio tracks with blocks of missing packets.

## 5.2.0 - March 7, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#520-march-7-2024 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_16 "Permanent link")

- Modify the size or location of an object for only one frame with the "Apply to Single Frame" button. The previous behavior of re-tracking the object based on the changes is still available and is now called "Apply and Track".

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_18 "Permanent link")

- Start and stop times can now be specified as `hh:mm:ss` when exporting a portion of the video.
- Imported videos will now be re-encoded by default. This should prevent any synchronization issues between the video and rendered boxes during editing. Holding the SHIFT key down before importing a new video will bypass conversion.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_18 "Permanent link")

- Fixed issue with Export Range not working properly
- Fixed a bug with rendering not working correctly on multi-export
- Progress reporting was not working properly for video conversion/encoding at import time
- (API) Fixed issue with API service not starting after new license activation
- (API Embedded UI) React context menu click not working in Shadow DOM

## 5.1.0 - January 13, 2024 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#510-january-13-2024 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_19 "Permanent link")

- Improve detections for fast-moving objects with Body/Dash Cam profile
- (API) AZURE\_STORAGE\_ACCOUNT and AZURE\_STORAGE\_ACCESS\_KEY are not required to be specified if using SAS for input/output URIs
- (API) AZURE\_STORAGE\_ACCOUNT value does not need to match the output Azure Storage Account when using SAS
- (API Embedded UI) Shadow DOM beta
  - KNOWN ISSUE: Can’t select options after right-clicking on detections

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_19 "Permanent link")

- Fix white screen issue when user with Supervisor group tries to access the Admin section
- (API) Images can now be exported

## 5.0.6 - December 22, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#506-december-22-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_17 "Permanent link")

- Added “Invert Regions” to Audio Redaction to "unmute" a portion of previously selected audio

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_20 "Permanent link")

- Update the render options in the bulk export dialog to include audio redaction strength & "default" settings
- (API) API export could lock a video as "in-use" if consecutive export calls were made to the same outputUri

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_20 "Permanent link")

- Previewing already exported video did not show updated redaction types
- Add Media & Convert now properly resets after the file uploads
- Fixed “Merge Regions” to only appear if audio redactions can be merged

## 5.0.5 - December 11, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#505-december-11-2023 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_21 "Permanent link")

- Redaction boxes may disappear on last frame for certain videos
- Fixed force conversion not working on drag and drop

##### API [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#api "Permanent link")

- Full export options exposure to the API

## 5.0.4 - November 27, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#504-november-27-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_18 "Permanent link")

- Audio transcript text can be downloaded from within the Speech panel

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_22 "Permanent link")

- Capture additional logs if a video fails to load.
- "Add Media" button now shows "Add Media & Convert" when holding SHIFT on keyboard.
- Removed country flags from multi-language UI selector in settings.
- Removed the detection types from the export settings. What is selected in the view through \[Objects\] is what will be rendered.
- Added missing audio setting into Multi-select export settings.
- The multi-select settings overwrite all of the individual media’s export settings, except the ones not presented there, because of the compound nature (detection types, region, …).
- Included full timestamp in exported filename instead of a random number.
- Do not show export options that won’t apply to the selection: no audio, only images, etc.
- Save the multi-export options so it remembers them for next time.
- Fix the issue where if multiple videos are selected and one is deleted, the status ( _5 + selected_ ) doesn’t change and stays sticky until a video is opened again to clear the state.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_21 "Permanent link")

- Image redaction export crashes if bounding box touched edge

##### API [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#api_1 "Permanent link")

- (Embedded UI) "active()" method added to embedded UI to notate editor is open
- New licensing endpoint: `GET http://localhost:${SERVER_PORT}/licensing`
- Fix issue where invalid projectId format would crash service
- Events are emitted with sessionId when editor is entered and exited

## 4.5.5 - November 9, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#455-november-9-2023 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_22 "Permanent link")

- Loading or exporting videos would occasionally show errors on certain hardware configurations

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_23 "Permanent link")

- Expanded logging to assist with support

## 5.0.3 - October 24, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#503-october-24-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_19 "Permanent link")

- Show "Unsupported Browser" message for Safari browser
- Checkmark now appears beside audio transcript languages that have already been processed

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_24 "Permanent link")

- Added "View options" and "Redaction type" filter to Objects Panel
- (API Embedded UI) Emit commands and events from the editor

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_23 "Permanent link")

- "Automatically Track" timing issues for boxes

## 5.0.1 - October 9, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#501-october-9-2023 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_24 "Permanent link")

- Removed 5-minute timeout for large file uploads
- Automatically Track was off for forward and backward passes
- Cancelling processing tasks would cause a crash
- Fall back to CPU processing mode for GPUs with compute capability < 5

## 5.0.0 - October 5, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#500-october-5-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_20 "Permanent link")

- Speech detection and transcription for videos
- Multi-language support in the UI
- Upgrade to Sighthound Gen6 Computer Vision models
- Enable CUDA video decoding
- New Settings/Help Section
- Frame-by-frame editing mode (Hold down SHIFT key before clicking Apply in Edit mode)
- (API) "Projects" feature added to the embedded UI

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_25 "Permanent link")

- Performance improvements for processing and exporting with GPU
- Move Export Options from sidebar into a modal that’s displayed on export
- (Docker) Set the timezone in the container to GMT

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_25 "Permanent link")

- Disable video controls when in editing mode to show that playback is prevented
- Bug fix for exporting trimmed and scrambled videos
- A few log entries were incorrectly displayed as errors

## 4.5.3 - June 9, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#453-june-9-2023 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_26 "Permanent link")

- Fixed incorrect build location for GPU model cache if a custom Redactor data folder is configured. This caused the GPU build process to run twice.
- Changed the wording in Desktop version to say "Open Exported Image" when an image is redacted instead of a video.
- Fixed truncated text in "Sort By" when using Firefox.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_26 "Permanent link")

- Updated Sighthound License Agreement.

## 4.5.2 - April 14, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#452-april-14-2023 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_27 "Permanent link")

- Progress bar no longer jumps around when a file is uploading at the same time a video is processing.
- Added missing translations for API embedded UI users.

## 4.5.1 - March 22, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#451-march-22-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_21 "Permanent link")

- Redactor API users can now specify a `project-id` and `location-id` for the [Operation name](https://dev.sighthound.com/redactor/reference/operations/get/). This is helpful when running multiple Redactor API servers behind a proxy or load balancer so you'll know which one served the request. `REDACTOR_API_PROJECT_DEFAULT` and `REDACTOR_API_LOCATION_DEFAULT` are the new environment variables. The default value is "0". (Redactor Server only)

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_28 "Permanent link")

- Some NVIDIA GPU users would not see the "Preparing Models" progress dialog after running an auto-detection on a new Sighthound Redactor installation. The "Processing" progress dialog would be displayed instead and would appear not to move for several minutes until the GPU model build finished.
- The initial "Preparing Models" stage was taking about 7-10 minutes longer than usual for NVIDIA users due to building unneeded GPU models.

## 4.5.0 - March 20, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#450-march-20-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_22 "Permanent link")

- Images can now be redacted in the editor.
- A new "Recovery Mode" option has been added to allow server administrators to access Redactor in case of a lockout. (Redactor Server only)
- Redactor API users can now save/export detection metadata in JSON format. (Redactor Server only)

##### New Environment variables [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-environment-variables "Permanent link")

- `REDACTOR_PROCESS_FACEBOX_EXPAND` \- Specifies the scaling factor to use for the face detection boxes generated during auto-detection. Value can be from 1 - 5. Default is 1.5 (50% larger).
- `REDACTOR_COOKIE_SESSION_NAME` \- Allows the server administrator to change the default session cookie name from `connect.sid` to a different value in case of conflict with other applications running on the server. (Redactor Server only)

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_27 "Permanent link")

- Several buttons and dialogs in the application have been renamed to include "media" or "images" instead of solely "video".
- Password confirmation has been added to the Admin section when creating user accounts or changing passwords.
- Password confirmation has been added to the user-facing "Forgot Password" page.
- The Admin "Settings" page has been renamed to "Processing" in preparation for future configuration options.
- Media imported via API now display their filenames on the Projects page instead of ids.
- General code/package updates.

##### Logging Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#logging-updates "Permanent link")

- Created a new `logs` directory to hold all of the log files. This folder can be zipped and sent along with support tickets.
- A new `sysinfo.json` file will be created in the `logs` directory to provide details on the user's computer specs (CPU, RAM, etc.).
- Redactor's Windows Service log file is now written into the `logs` directory.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_29 "Permanent link")

- Fixed an issue related to an audio processing crash that would cause the UI to go blank.
- The processing icon no longer shows 0 after a successful bulk operation.

##### Known Issues [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#known-issues "Permanent link")

- On the "Forgot Password" reset page, the form will not submit if the "password" and "confirm password" fields don't match (as expected), but no error will be visible on the screen (unexpected). If this issue occurs, retype both passwords and try submitting again.

## 4.4.5 - January 30, 2023 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#445-january-30-2023 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_23 "Permanent link")

- A 4x playback speed option was added to the video player.
- The Redactor API has a new ACL feature to specify which Redactor user(s) should be given access to the imported video

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_28 "Permanent link")

- The video import/conversion process has been improved to support a wider variety of sources, particularly those with additional non-audio/non-video streams (e.g binary or subtitle tracks).
- We squashed a few bugs and made several small updates to keep things running smoothly.

## 4.4.4 - November 17, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#444-november-17-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_24 "Permanent link")

- Items in the Objects List can be bulk selected and deleted. Hold Shift or Ctrl to select, and right-click to open the menu to delete.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_29 "Permanent link")

- The "beep" tone used for audio redaction in exported video is slightly quieter.
- The "Contact Support" form requires an email address to submit.
- Username and password fields are now required fields (i.e. can't be blank) throughout the application.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_30 "Permanent link")

- Removing the SMTP Settings in the Admin page would crash the UI.
- The token/link to reset a password was expiring quicker than expected.
- Certain errors during login would cause layout issues.

## 4.4.3 - October 6, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#443-october-6-2022 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_30 "Permanent link")

- For users with NVIDIA GPUs, the wording changed to better reflect what's happening on initial launch when the GPU models are building.
- The permissions granted to an Embedded API session/user have been further reduced.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_31 "Permanent link")

- The "In Progress" message was barely visible when using Dark Mode.

## 4.4.2 - September 21, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#442-september-21-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_25 "Permanent link")

- VOB containers are now supported.
- Admin and Logout buttons were added to the Redactor Server UI.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_32 "Permanent link")

- Videos with non-square pixels would not render redactions properly. This mainly impacted video from older surveillance systems.
- The progress bar displayed after importing a video wasn't updating during the video conversion process.
- The hostname, protocol, and port used in the "reset password" email could be incorrect when running Redactor behind a reverse proxy. It's now configurable in the Admin page.

## 4.4.1 - September 15, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#441-september-15-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_26 "Permanent link")

- A new Dark Mode option is available in the UI.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_31 "Permanent link")

- The "Forgot Password" page received some styling changes.
- Specifying a new redaction data storage location which automatically moves the files has been improved.
- The core SMTP packages have been updated and work better with secure connections.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_33 "Permanent link")

- Canceling uploads could potentially crash the application.
- Very large videos (15GB+) would occasionally crash on import.
- During export, very specific redaction box coordinates could cause a crash during export.
- Videos that failed the conversion stage were not being removed from the system.

## 4.3.1 - August 2, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#431-august-2-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_27 "Permanent link")

- Azure SAS is now supported as input and output URIs for the API.
- Azure Gov domains are now supported for API input/output storage.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_32 "Permanent link")

- Video playback performance is greatly improved for videos with lots of detected objects.
- The default face detection box size changed to 1.5 instead of 2.

## 4.2.3 - May 23, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#423-may-23-2022 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_34 "Permanent link")

- A crash during processing could potentially get stuck in the queue and prevent other redactions from starting.
- Redactor API notifications (e.g. completion events) were not always sent if a crash during processing occurred.

## 4.2.2 - May 2, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#422-may-2-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_28 "Permanent link")

- Users can now select a "Detection Profile" to use when running auto-detection. These will tune the computer vision to best suit those types of videos.
- The ability to sort the videos on the main page was added.
- A "strength" option was added for the "scramble" audio redaction type.
- Redactor API webhooks were not firing for START and COMPLETION event types.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_35 "Permanent link")

- Unsupported NVIDIA GPUs would crash the service on launch. We now fallback to CPU mode for these cases.

## 4.2.0 - April 26, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#420-april-26-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_29 "Permanent link")

- Users can now select a "Detection Profile" to use when running auto-detection. These will tune the computer vision to best suit those types of videos.
- The ability to sort the videos on the main page was added.
- A "strength" option was added for the "scramble" audio redaction type.

## 4.0.46 - April 26, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4046-april-26-2022 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_33 "Permanent link")

- Exported videos are now smaller due to a change in compression settings.

## 4.0.45 - April 11, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4045-april-11-2022 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_36 "Permanent link")

- Exporting videos that had out-of-bounds redaction coordinates would crash. We now scan/correct the coordinates before export.

## 4.1.0 - March 22, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#410-march-22-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_30 "Permanent link")

- The UI for the main screen has been redesigned.
- A new bulk mode was added to allow multiple videos to be imported, redacted, and exported from the main page.
- A live tracking feature was added to the Redactor editor to allow a user to follow an object with their mouse pointer during playback to notate where the redaction box should be placed. This is ideal for fast moving objects or those that don't work well with Redactor's built in manual tracker. Lower the video playback speed to gain extra precision.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_34 "Permanent link")

- Various bug fixes and performance improvements

## 4.0.44 - March 22, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4044-march-22-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_31 "Permanent link")

- Users can now specify the port number that the Redactor Server will listen on during installation.
- The Windows installer now allows users to choose the installation path.
- NVIDIA Ampere GPUs are now supported. (e.g. RTX 3080)
- Older CPUs without AVX2 are now supported.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_35 "Permanent link")

- The Redactor API is now disabled by default and must be manually enabled. A proper license must be obtained first.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_37 "Permanent link")

- Videos with non-zero timestamps could have issues with redaction boxes not being in-sync during playback or in the exported video

## 4.0.43 - March 14, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4043-march-14-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_32 "Permanent link")

- Redactor API users can now specify AWS\_ACL\_CREATE & AWS\_ACL\_WRITE environment variables for use with S3.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_36 "Permanent link")

- Initial support added for Azure Gov URLs.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_38 "Permanent link")

- Azure Gov URLs were failing to be recognized as valid Azure paths for API users. Note: SAS URLs are not currently supported for input/output URIs.
- Chromium browsers were having issues with redaction boxes not being in-sync for certain types of videos.

## 4.0.42 - March 1, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4042-march-1-2022 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_39 "Permanent link")

- The "Video Load" error message was not displaying the correct title.

## 4.0.41 - February 17, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4041-february-17-2022 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_40 "Permanent link")

- The Desktop application could timeout during launch if more than 100 videos were in its session list. This was fixed by automatically cleaning up old entries and extending the timeout timer a bit.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_37 "Permanent link")

- Various logging updates were made to assist with detecting GPUs and other processes.

## 4.0.39 - February 10, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4039-february-10-2022 "Permanent link")

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_38 "Permanent link")

- Videos are now normalized on import to remediate negative timestamps.
- For systems with an NVIDIA GPU, the computer vision models available for use are now dependent upon the amount of GPU RAM.
- The thumbnail generated from a "Automatically Track" process is now taken from the same time the video player was at when the object box was drawn.
- Improved thumbnail generation for very short videos.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_41 "Permanent link")

- Modifications to Static Tracks were not getting saved correctly.

## 4.0.38 - February 1, 2022 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4038-february-1-2022 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_33 "Permanent link")

- Users can now force a conversion (transcode/transmux) to occur on a video during import. This might help fix videos that have some missing packets or other issues.

##### Updates [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#updates_39 "Permanent link")

- Writing data files is now more safer and more robust.
- The Sighthound Redactor logo has been updated with the new style.
- The auto-conversion process for problem input videos has been improved.
- The computer vision models were updated.

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_42 "Permanent link")

- Canceling an "Export Video" process could cause "In Use" to appear on the video on the main page.
- Canceling an "Automatically Redact" operation for a newly uploaded video could fail or crash.
- Clicking a recently modified item in the Objects List would not correctly go to its first frame in the video.
- There was a detection box synchronization issue for videos with non-zero, positive timestamps in Chromium browsers (Chrome, Edge, etc.)
- Videos that were previously showing as "In Queue" would not see the message change to "Processing" when work actually started on them.

## 4.0.35 - October 22, 2021 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4035-october-22-2021 "Permanent link")

##### New Features [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#new-features_34 "Permanent link")

- Users can now specify which Redaction Mode (Standard/Enhanced) to use for auto redaction.
- Objects in the Objects List can be deleted by right-clicking and selecting "Delete".
- A new REDACTOR\_SAVE\_DIR environment variable can restrict exports to a specific folder in Redactor’s desktop version. (N/A in client/server)
- A new REDACTOR\_SAVE\_DIR\_ALLOW\_SUBDIRS environment variable allows users to create subfolders in the path specified in REDACTOR\_SAVE\_DIR in Redactor’s desktop version. (N/A in client/server)

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_43 "Permanent link")

- Deleting an object in the Objects List would scroll the list all the way back to the first item.
- Static redaction boxes were not properly saving after they were modified.
- The "Remove all audio" button required a double-click to enable. This was changed to a single click.
- Multiple processes accessing a local settings/data file could cause corruption. They are now locked during update.
- Docker versions of Redactor could delete the license file if the Docker network settings changed.

## 4.0.32 - August 9, 2021 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4032-august-9-2021 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_44 "Permanent link")

- The Audio Editor was extremely sluggish when working with longer videos.

## 4.0.31 - July 26, 2021 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4031-july-26-2021 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_45 "Permanent link")

- The audio redaction "tone" was having issues with the HE-AAC audio codec on export.

## 4.0.29 - August 9, 2021 [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#4029-august-9-2021 "Permanent link")

##### Bug Fixes [¶](https://dev.sighthound.com/redactor/docs/release-notes/\#bug-fixes_46 "Permanent link")

- The Redactor Server version would mistakenly restart the Windows service when thousands of objects were detected after running auto-detection.