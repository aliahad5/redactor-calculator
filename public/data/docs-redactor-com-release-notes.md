# Release Notes

## 7.1.0 – March 25, 2026

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


## 7.0.6 – March 17, 2026

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


## 7.0.5 – February 24, 2026

**Bug Fixes**

- **Crash While Probing for Video Decoders**


On some drivers/hardware (CUDA confirmed) probing for the video decoding capabilities caused a crash, even if video decoding in general was set to CPU only mode (default). Such ahead-probing is now explicitly disabled.

## 7.0.4 – February 19, 2026

**Bug Fixes**

- **Track Resizing caused leftover objects**


Race condition where sometimes objects lost their associated tracks, which caused the UI to error out. This has been fixed and former data inconsistencies being automatically mitigated.

- **Missing Labels**


The vehicle and screen labels, for existing detection, were not shown in the video list.


## 7.0.3 – February 13, 2026

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


If a video is shown as _"In Use"_ in the (server) video list the name of the user working on it will also be displayed.


**Updates**

- **Bulk Operations**


Offer bulk selection mode only if there are enough items available.

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


## 6.6.0 – September 19, 2025

**New Features**

- **Data Drop via Flag File**


By dropping a file (can be empty) named DATA\_DROP in the user directory will reset it completely on a restart except of license and the registered user data (name, credentials). This is intended to be used when Redactor acts as a worker for transient operations (no persistence required) in an API driven context. . Confirmation of this drop is in the _main.log_ (`...INFO [init] dropped all data except license and user data, reason: file`).

**Bug Fixes**

- **Session Cleanup Failed**


Due to a 3rd party library causing recursion the backend would crash. Did only happen in certain storage scenarios.

- **Missing Audio Data padded with Silence**


If a video only contains an audio portion at the beginning we pad the rest with silence. This facilitates intake, conversion, analytics and presentation.


## 6.5.2 – August 25, 2025

**Updates**

- **Automatic CPU Fallback if GPU Detection Fails**


If during the GPU detection phase an unexpected error occurs (happens e.g. on untested CUDA updates) Redactor will automatically switch into CPU mode, so you can still use it. The incident will be logged. This the equivalent of setting the `REDACTOR_GPU_IGNORE=always` environment variable.

- **Enhanced Reconnection Handling**


The transport layer (server version only) was overhauled to keep the client connected, even in unfavorable network conditions. Same as for more timely (30 seconds) detachment of clients, and the release of their sessions, if they cannot reach the server any longer. In the UI a _Reconnecting..._ indicator will show when connectivity is lost, until reconnection happens, so you are aware of the current situation. Unless your networking won't allow websockets at all, you are encouraged not to use the fallback via the `REDACTOR_FORCE_POLLING_TRANSPORT=1` environment variable any longer. Please remove it, or set it to `...=0` if you have been using this


## 6.5.1 – July 18, 2025

**New Features**

- **Bulk Object Selection via Shift-Click**


The ability to select a range of objects in the Objects List via Shift-Click has been added. This works like standard operating system behavior: click the first object, hold `Shift`, then click the last object to select everything in between. The previous Shift-Click behavior (selecting individual objects) is now available via `Ctrl` (Windows) or `Command` (Mac).
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

## 6.4.4 – June 23, 2025

**What's New and Improved**

- **Download Logs from the Settings Screen**


Admin and Desktop users now have a “Download Logs” button in the Settings screen to easily collect logs without using the `F2` keyboard shortcut or needing access to the server's filesystem. Users in the Supervisor or Users groups will not have access to this feature.

- **Display License Status and Expiration Date**


(Server) Each license in the Admin panel now clearly shows its expiration date and time. Expired licenses are highlighted in red for quick identification.

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


(Server) Removed unnecessary debug logs from the browser to improve clarity and performance.


## 6.4.3 – June 12, 2025

This release primarily includes improvements and bug fixes for Redactor API developers.

**Other Updates**

- General stability and performance improvements.
- Minor internal fixes to support upcoming features.

## 6.4.1 – May 23, 2025

**New Features**

- **Improved Connectivity for Challenging Networks:** Redactor now includes a new connection option for users who experience frequent disconnects with the message "Lost connection to server". To enable this new feature, set the environment variable `REDACTOR_FORCE_POLLING_TRANSPORT=1` and restart the Redactor app or service.

**Improvements**

- We’ve updated the Auto Detection settings screen to make it easier to understand each detection confidence option.

**Bug Fixes**

- Fixed an issue where exported videos appeared darker or more washed out than expected. Videos now retain accurate colors and contrast.

## 6.4.0 - May 12, 2025

**New Features**

- **Object Timeline View:** Visualize selected objects on a dedicated timeline, making it easier to review activity over time.
- **Object Grouping:** Group multiple objects or tracks to simplify the management and review of related detections.
- **Object Selection Enhancements:** You can now select items in the Objects List by hovering and clicking the new checkmark icon in the top-right corner. The previous method—holding the `Shift` key and clicking—still works.

**Improvements**

- **Improved Image Quality:** Exported single images are now clearer and sharper. File sizes may be slightly larger as a result.
- **Updated Selection Styling:** Selected items in the Objects List now feature a clearer border instead of the previous semi-transparent overlay and central checkmark.

**Bug Fixes**

- Fixed an issue where manually created objects didn’t display the “manual” tag in the main video list or object filter.
- Resolved a memory issue that could lead to excessive usage or crashes when tracking long-duration objects, improving overall stability and performance.

## 6.3.2 - April 15, 2025

##### New Features

- Selection improvements:
  - \[Ctrl\]+\[D\] to select the current object in the video editor
  - _Invert Selection_ menu item in the objects list, useful for deleting many unwanted objects
  - Objects selection is getting preserved, will be restored when reopening a video later on
- Added Korean and Polish languages for speech detection

##### Bug Fixes

- Slow zooming in der audio timeline fixed
- Contact Support errors are now shown more prominently

## 6.2.0 - February 26, 2025

##### New Features

- Head Detection: While previous versions focused solely on identifying facial features, V6 expands detection to entire heads, including the back of the head, hair, and ears.

![](https://docs.redactor.com/images/sighthound/release-notes/6.2.0-head-detection.png)

- Audio Redaction: Redactor supports standalone audio redaction, allowing users to mute, bleep, or remove speech and sensitive information in audio files (without needing video) like MP3, WAV, and AAC.

![](https://docs.redactor.com/images/sighthound/release-notes/6.2.0-audio-only.png)

- Folder Management: Manage large-scale projects easier with new smart organization features. Users can now organize files into folders for streamlined collaboration, use Smart Search to quickly find videos by case number, file name, or metadata, and save time with Bulk Redaction by applying AI detection to multiple files at once.

![](https://docs.redactor.com/images/sighthound/release-notes/6.2.0-folder-management.png)

- Keyboard Shortcuts: New keyboard shortcuts and an improved UI to speed up manual redaction. Users can now move frame-by-frame (A/D), apply edits instantly (S), cycle redaction objects (W), delete selections (Delete), and access a quick shortcut guide (F1). These updates offer faster editing for large projects and greater control over redaction objects—plus, Shift+A/D lets users jump in 1-second increments for quicker reviews.


##### Updates

- AI Model Upgraded to Gen7. We've doubled processing speed for faster redaction workflows, improved detection accuracy by 30% for faces, heads, and objects, and reduced false positives to minimize manual intervention.

- 25% faster processing for 4K videos and adds a GPU fallback mode (REDACTOR\_GPU\_IGNORE=1) to support older or incompatible systems. This means better scalability for large workloads and more reliable performance across a wider range of hardware.

- Introduces powerful API-driven workflows for full automation. Videos can now be auto-ingested and redacted the moment they enter the system, enabling bulk processing with minimal user input. Seamless integration with enterprise systems ensures non-authorized personnel see only redacted content, while real-time processing accelerates compliance with privacy regulations at scale.


## 5.2.13 - August 8, 2024

##### New Features

- A “picture” icon is now displayed at the top-left of the thumbnails displayed for image sources on the Projects page. Video sources do not have any icons.

![](https://docs.redactor.com/images/sighthound/release-notes/5.2.13-image-icon.jpg)


##### Updates

- Action buttons are disabled on the Projects page for media that are “In Use”

![](https://docs.redactor.com/images/sighthound/release-notes/5.2.13-in-use-disabled.jpg)

- Modifying static boxes now correctly shows only the Apply and Cancel buttons

- "Contact Support" modal wording and layout changed

![](https://docs.redactor.com/images/sighthound/release-notes/5.2.13-contact-support.jpg)


##### Bug Fixes

- (Server)The list of videos in the Admin section were not being displayed in v5.2.12

## 5.2.12 - July 16, 2024

##### Updates

- (Server) The download filename no longer contains the session id as a prefix.
- A confirmation dialog is now displayed when a user attempts to remove a video on the Projects page.

##### Bug Fixes

- (Server) The filename for the redacted download was incorrectly missing the original filename.

## 5.2.11 - July 11, 2024

##### Updates

- Display an error message if the in-app "Contact Support" function does not submit properly. This is typically only an issue for those with Redactor server behind a restrictive firewall.
- Show confirmation dialog when user attempts to delete redaction data from a video on the Projects page.

##### Bug fixes:

- Timestamps and tick marks in audio waveform were not always visible.
- The path used for the last export was not being remembered in the desktop version.

## 5.2.9 - June 10, 2024

##### New Features

- Safari browser is now supported. We haven’t used that browser in the past, so if you find rare glitches on your end please let us now. Tested against the latest Safari 17.4.1 (MacOS 14.4.1 on M1).

##### Updates

- (Server) Remote connectivity improved. In case of connection loss, resumption should be transparent and non-interruptive for an active user session, up to a certain timeout or a server restart. Pending messages will be replayed.

##### Bug Fixes

- Audio mute button didn’t restore the formerly set volume.
- Scrollbars were always showing in audio transcripts for Chrome & Edge browsers.
- Image loading didn’t clear the progress dialog.
- Export save path wasn’t remembered in the desktop version.
- Installer didn’t store custom port numbers on fresh installs. This only happened when no former data directory existed. Now it gets created first thing.

## 5.2.1 - April 18, 2024

##### New Features

- FFprobe is run for all imported videos and results are logged. This captures information about the video’s codecs, resolution, frame rate, etc., which can be useful for debugging.

##### Updates

- Improve the (optional) ignoring of SSL certificate errors for video imports from remote resources.

##### Bug Fixes

- Filenames with emoji and some Unicode characters would crash the render/export.
- Fixed potential issues when canceling an import operation.
- CSS updates for button transitions.
- Audio waveform tick marks were not showing up in light mode.
- Various Node and Package updates.
- Person checkbox could not be selected/deselected in Objects List.
- Fix export for videos that contains audio tracks with blocks of missing packets.

## 5.2.0 - March 7, 2024

##### New Features

- Modify the size or location of an object for only one frame with the "Apply to Single Frame" button. The previous behavior of re-tracking the object based on the changes is still available and is now called "Apply and Track".

##### Updates

- Start and stop times can now be specified as hh:mm:ss when exporting a portion of the video.
- Imported videos will now be re-encoded by default. This should prevent any synchronization issues between the video and rendered boxes during editing. Holding the SHIFT key down before importing a new video will bypass conversion.

##### Bug Fixes

- Fixed issue with Export Range not working properly
- Fixed a bug with rendering not working correctly on multi-export
- Progress reporting was not working properly for video conversion/encoding at import time

## 5.1.0 - January 13, 2024

##### Updates

- Improve detections for fast-moving objects with Body/Dash Cam profile

##### Bug Fixes

- Fix white screen issue when user with Supervisor group tries to access the Admin section

## 5.0.6 - December 22, 2023

##### New Features

- Added “Invert Regions” to Audio Redaction to "unmute" a portion of previously selected audio

##### Updates

- Update the render options in the bulk export dialog to include audio redaction strength & "default" settings

##### Bug Fixes

- Previewing already exported video did not show updated redaction types
- Add Media & Convert now properly resets after the file uploads
- Fixed “Merge Regions” to only appear if audio redactions can be merged

## 5.0.5 - December 11, 2023

##### Updates

- Redaction boxes may disappear on last frame for certain videos
- Fixed force conversion not working on drag and drop

## 5.0.4 - November 27, 2023

##### New Features

- Audio transcript text can be downloaded from within the Speech panel

##### Updates

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

##### Bug Fixes

- Image redaction export crashes if bounding box touched edge.

## 4.5.5 - November 9, 2023

##### Bug Fixes

- Loading or exporting videos would occasionally show errors on certain hardware configurations.

##### Updates

- Expanded logging to assist with support.

## 5.0.3 - October 24, 2023

##### New Features

- Show "Unsupported Browser" message for Safari browser.
- Checkmark now appears beside audio transcript languages that have already been processed.

##### Updates

- Added "View options" and "Redaction type" filter to Objects Panel.

##### Bug Fixes

- "Automatically Track" timing issues for boxes.

## 5.0.1 - October 9, 2023

##### Bug Fixes

- Removed 5-minute timeout for large file uploads.
- Automatically Track was off for forward and backward passes.
- Cancelling processing tasks would cause a crash.
- Fall back to CPU processing mode for GPUs with compute capability < 5.

## 5.0.0 - October 5, 2023

##### New Features

- Speech detection and transcription for videos.
- Multi-language support in the UI.
- Upgrade to Sighthound Gen6 Computer Vision models.
- Enable CUDA video decoding.
- New Settings/Help Section.
- Frame-by-frame editing mode (Hold down SHIFT key before clicking Apply in Edit mode).

##### Updates

- Performance improvements for processing and exporting with GPU.
- Move Export Options from sidebar into a modal that’s displayed on export.

##### Bug Fixes

- Disable video controls when in editing mode to show that playback is prevented.
- Bug fix for exporting trimmed and scrambled videos.
- A few log entries were incorrectly displayed as errors.

## 4.5.3 - June 9, 2023

##### Bug Fixes

- Fixed incorrect build location for GPU model cache if a custom Redactor data folder is configured. This caused the GPU build process to run twice.
- Changed the wording in Desktop version to say "Open Exported Image" when an image is redacted instead of a video.
- Fixed truncated text in "Sort By" when using Firefox.

##### Updates

- Updated Sighthound License Agreement.

## 4.5.2 - April 14, 2023

##### Bug Fixes

- Progress bar no longer jumps around when a file is uploading at the same time a video is processing.

## 4.5.1 - March 22, 2023

##### Bug Fixes

- Some NVIDIA GPU users would not see the "Preparing Models" progress dialog after running an auto-detection on a new Sighthound Redactor installation. The "Processing" progress dialog would be displayed instead and would appear not to move for several minutes until the GPU model build finished.
- The initial "Preparing Models" stage was taking about 7-10 minutes longer than usual for NVIDIA users due to building unneeded GPU models.

## 4.5.0 - March 20, 2023

##### New Features

- Images can now be redacted in the editor.
- A new "Recovery Mode" option has been added to allow server administrators to access Redactor in case of a lockout. (Redactor Server only)

##### New Environment variables

- `REDACTOR_PROCESS_FACEBOX_EXPAND` \- Specifies the scaling factor to use for the face detection boxes generated during auto-detection. Value can be from 1 - 5. Default is 1.5 (50% larger).
- `REDACTOR_COOKIE_SESSION_NAME` \- Allows the server administrator to change the default session cookie name from `connect.sid` to a different value in case of conflict with other applications running on the server. (Redactor Server only)

##### Updates

- Several buttons and dialogs in the application have been renamed to include "media" or "images" instead of solely "video".
- Password confirmation has been added to the Admin section when creating user accounts or changing passwords.
- Password confirmation has been added to the user-facing "Forgot Password" page.
- The Admin "Settings" page has been renamed to "Processing" in preparation for future configuration options.
- General code/package updates.

##### Logging Updates

- Created a new `logs` directory to hold all of the log files. This folder can be zipped and sent along with support tickets.
- A new `sysinfo.json` file will be created in the `logs` directory to provide details on the user's computer specs (CPU, RAM, etc.).
- Redactor's Windows Service log file is now written into the `logs` directory.

##### Bug Fixes

- Fixed an issue related to an audio processing crash that would cause the UI to go blank.
- The processing icon no longer shows 0 after a successful bulk operation.

##### Known Issues

- On the "Forgot Password" reset page, the form will not submit if the "password" and "confirm password" fields don't match (as expected), but no error will be visible on the screen (unexpected). If this issue occurs, retype both passwords and try submitting again.

## 4.4.5 - January 30, 2023

##### New Features

- A 4x playback speed option was added to the video player.

##### Updates

- The video import/conversion process has been improved to support a wider variety of sources, particularly those with additional non-audio/non-video streams (e.g binary or subtitle tracks).
- We squashed a few bugs and made several small updates to keep things running smoothly.

## 4.4.4 - November 17, 2022

##### New Features

- Items in the Objects List can be bulk selected and deleted. Hold Shift or Ctrl to select, and right-click to open the menu to delete.

##### Updates

- The "beep" tone used for audio redaction in exported video is slightly quieter.
- The "Contact Support" form requires an email address to submit.
- Username and password fields are now required fields (i.e. can't be blank) throughout the application.

##### Bug Fixes

- Removing the SMTP Settings in the Admin page would crash the UI.
- The token/link to reset a password was expiring quicker than expected.
- Certain errors during login would cause layout issues.

## 4.4.3 - October 6, 2022

##### Updates

- For users with NVIDIA GPUs, the wording changed to better reflect what's happening on initial launch when the GPU models are building.

##### Bug Fixes

- The "In Progress" message was barely visible when using Dark Mode.

## 4.4.2 - September 21, 2022

##### New Features

- VOB containers are now supported.
- Admin and Logout buttons were added to the Redactor Server UI.

##### Bug Fixes

- Videos with non-square pixels would not render redactions properly. This mainly impacted video from older surveillance systems.
- The progress bar displayed after importing a video wasn't updating during the video conversion process.
- The hostname, protocol, and port used in the "reset password" email could be incorrect when running Redactor behind a reverse proxy. It's now configurable in the Admin page.

## 4.4.1 - September 15, 2022

##### New Features

- A new Dark Mode option is available in the UI.

##### Updates

- The "Forgot Password" page received some styling changes.
- Specifying a new redaction data storage location which automatically moves the files has been improved.
- The core SMTP packages have been updated and work better with secure connections.

##### Bug Fixes

- Canceling uploads could potentially crash the application.
- Very large videos (15GB+) would occasionally crash on import.
- During export, very specific redaction box coordinates could cause a crash during export.
- Videos that failed the conversion stage were not being removed from the system.

## 4.3.1 - August 2, 2022

##### Updates

- Video playback performance is greatly improved for videos with lots of detected objects.
- The default face detection box size changed to 1.5 instead of 2.

## 4.2.3 - May 23, 2022

##### Bug Fixes

- A crash during processing could potentially get stuck in the queue and prevent other redactions from starting.

## 4.2.2 - May 2, 2022

##### New Features

- Users can now select a "Detection Profile" to use when running auto-detection. These will tune the computer vision to best suit those types of videos.
- The ability to sort the videos on the main page was added.
- A "strength" option was added for the "scramble" audio redaction type.

##### Bug Fixes

- Unsupported NVIDIA GPUs would crash the service on launch. We now fallback to CPU mode for these cases.

## 4.0.46 - April 26, 2022

##### Updates

- Exported videos are now smaller due to a change in compression settings.

## 4.0.45 - April 11, 2022

##### Bug Fixes

- Exporting videos that had out-of-bounds redaction coordinates would crash. We now scan/correct the coordinates before export.

## 4.1.0 - March 22, 2022

##### New Features

- The UI for the main screen has been redesigned.
- A new bulk mode was added to allow multiple videos to be imported, redacted, and exported from the main page.
- A live tracking feature was added to the Redactor editor to allow a user to follow an object with their mouse pointer during playback to notate where the redaction box should be placed. This is ideal for fast moving objects or those that don't work well with Redactor's built in manual tracker. Lower the video playback speed to gain extra precision.

##### Updates

- Various bug fixes and performance improvements.

## 4.0.44 - March 22, 2022

##### New Features

- Users can now specify the port number that the Redactor Server will listen on during installation.
- The Windows installer now allows users to choose the installation path.
- NVIDIA Ampere GPUs are now supported. (e.g. RTX 3080)
- Older CPUs without AVX2 are now supported.

##### Bug Fixes

- Videos with non-zero timestamps could have issues with redaction boxes not being in-sync during playback or in the exported video.

## 4.0.43 - March 14, 2022

##### Bug Fixes

- Chromium browsers were having issues with redaction boxes not being in-sync for certain types of videos.

## 4.0.42 - March 1, 2022

##### Bug Fixes

- The "Video Load" error message was not displaying the correct title.

## 4.0.41 - February 17, 2022

##### Bug Fixes

- The Desktop application could timeout during launch if more than 100 videos were in its session list. This was fixed by automatically cleaning up old entries and extending the timeout timer a bit.

##### Updates

- Various logging updates were made to assist with detecting GPUs and other processes.

## 4.0.39 - February 10, 2022

##### Updates

- Videos are now normalized on import to remediate negative timestamps.
- For systems with an NVIDIA GPU, the computer vision models available for use are now dependent upon the amount of GPU RAM.
- The thumbnail generated from a "Automatically Track" process is now taken from the same time the video player was at when the object box was drawn.
- Improved thumbnail generation for very short videos.

##### Bug Fixes

- Modifications to Static Tracks were not getting saved correctly.

## 4.0.38 - February 1, 2022

##### New Features

- Users can now force a conversion (transcode/transmux) to occur on a video during import. This might help fix videos that have some missing packets or other issues.

##### Updates

- Writing data files is now more safer and more robust.
- The Sighthound Redactor logo has been updated with the new style.
- The auto-conversion process for problem input videos has been improved.
- The computer vision models were updated.

##### Bug Fixes

- Canceling an "Export Video" process could cause "In Use" to appear on the video on the main page.
- Canceling an "Automatically Redact" operation for a newly uploaded video could fail or crash.
- Clicking a recently modified item in the Objects List would not correctly go to its first frame in the video.
- There was a detection box synchronization issue for videos with non-zero, positive timestamps in Chromium browsers. (Chrome, Edge, etc.)
- Videos that were previously showing as "In Queue" would not see the message change to "Processing" when work actually started on them.

## 4.0.35 - October 22, 2021

##### New Features

- Users can now specify which Redaction Mode (Standard/Enhanced) to use for auto redaction.
- Objects in the Objects List can be deleted by right-clicking and selecting "Delete".
- A new REDACTOR\_SAVE\_DIR environment variable can restrict exports to a specific folder in Redactor’s desktop version. (N/A in client/server)
- A new REDACTOR\_SAVE\_DIR\_ALLOW\_SUBDIRS environment variable allows users to create subfolders in the path specified in REDACTOR\_SAVE\_DIR in Redactor’s desktop version. (N/A in client/server)

##### Bug Fixes

- Deleting an object in the Objects List would scroll the list all the way back to the first item.
- Static redaction boxes were not properly saving after they were modified.
- The "Remove all audio" button required a double-click to enable. This was changed to a single click.
- Multiple processes accessing a local settings/data file could cause corruption. They are now locked during update.
- Docker versions of Redactor could delete the license file if the Docker network settings changed.

## 4.0.32 - August 9, 2021

##### Bug Fixes

- The Audio Editor was extremely sluggish when working with longer videos.

## 4.0.31 - July 26, 2021

##### Bug Fixes

- The audio redaction "tone" was having issues with the HE-AAC audio codec on export.

## 4.0.29 - August 9, 2021

##### Bug Fixes

- The Redactor Server version would mistakenly restart the Windows service when thousands of objects were detected after running auto-detection.