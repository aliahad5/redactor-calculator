# Sighthound ALPR+ Source of Truth
Last updated: 2026-06-05
Purpose: Use this file as the consolidated source of truth for future Sighthound ALPR+ competitive updates. Do not use third-party blogs, reseller pages, analyst summaries, AI summaries, or community content as primary evidence when official documentation exists.
## Source priority
Use the priority order from `C:\Users\Ahad9\Downloads\Official Competitor Documentation Sources.pdf`:
1. Official API documentation
2. Official SDK documentation
3. Official developer portals
4. Official technical documentation
5. Official product documentation
6. Official datasheets
7. Official solution briefs
8. Official marketing pages
## Sighthound official sources
- `https://www.sighthound.com/products/alpr` — detailed ALPR+ product page. Evidence: ALPR+ combines object recognition, object tracking, vehicle identification, license plate recognition, and detailed vehicle information; lists object detection, object tracking, vehicle type/orientation, license plate recognition, make/model/color/generation, deployment options, Docker, Windows/Linux, RTSP, RabbitMQ, Python customization, and hardware recommendations.
- `https://www.sighthound.com/products/alpr-plus/` — official ALPR+ product listing. Evidence: positions ALPR+ as automatic license plate recognition with more vehicle data and links ALPR+ within the Sighthound product family.
- `https://www.sighthound.com/products/alpr/demo` — ALPR+ Test Drive. Evidence: public no-sign-up demo, sample API request, and sample JSON response with license plate annotations, region, confidence scores, vehicle color, make/model/generation, and bounding coordinates.
- `https://dev.sighthound.com/` — Sighthound Developer Portal. Evidence: official developer entry point for Vehicle Analytics REST API, SIO video/RTSP workflows, Redactor, examples, and references.
- `https://dev.sighthound.com/vehicle-analytics/rest-api/quickstart/docker/` — Vehicle Analytics REST API self-hosted Docker guide. Evidence: Docker Compose deployment with REST gateway, SIO Vehicle Analytics, UI demo, `POST /v11/images:annotate`, image URL/base64 inputs, `VEHICLE_DETECTION`, `LICENSE_PLATE_DETECTION`, JSON outputs, key/license requirements, and GPU guidance.
- `https://dev.sighthound.com/vehicle-analytics/rest-api/quickstart/hosted/` — Sighthound-hosted preview guide. Evidence: hosted preview endpoint, API key header, request/response examples, and Vehicle Analytics outputs.
- `https://dev.sighthound.com/sio/docs/quickstart/` — SIO setup and workflow guide. Evidence: Docker, Windows, Linux, license handling, VehicleAnalytics pipeline, RTSP input, JSON output, Aqueduct/RabbitMQ control, and Python pipeline extensions.
- `https://dev.sighthound.com/sio/pipelines/VehicleAnalytics/` — VehicleAnalytics pipeline reference. Evidence: pipeline entry points for file, RTSP, GStreamer RTSP, folder watch, direct embedded, image loop, object classes, tracker options, region/make-model filters, confidence thresholds, and output behavior.
## Competitor official sources from the supplied PDF
- Rekor: `https://rekor.ai/`, `https://docs.rekor.ai/`, `https://docs.rekor.ai/scout/web-server/rest-api`
- Vaidio: `https://www.vaidio.com/`, `https://docs.vaidio.com/`, `https://support.vaidio.com/`
- Eagle Eye Networks: `https://www.een.com/`, `https://developer.eagleeyenetworks.com/`, `https://developer.eagleeyenetworks.com/docs/vehicle-surveillance-package`, `https://developer.eagleeyenetworks.com/docs`
- PlateSmart: `https://www.platesmart.com/`, `https://www.platesmart.com/solutions/`, `https://www.platesmart.com/technology/`
- Flock Safety: `https://www.flocksafety.com/`, `https://www.flocksafety.com/api-integration-policy`, `https://www.flocksafety.com/integrations`, `https://www.flocksafety.com/platform`
- Lumana: `https://www.lumana.ai/`, `https://www.lumana.ai/platform`, `https://www.lumana.ai/solutions`
- BriefCam: `https://www.briefcam.com/`, `https://www.briefcam.com/company/faq/what-tools-are-available-for-developers/`, `https://www.briefcam.com/platform/`
- Senstar Symphony ALPR: `https://www.senstar.com/`, `https://xnet.senstar.com/Support/Documentation.aspx`, `https://www.senstar.com/video-management/`, `https://www.senstar.com/video-analytics/`
- Q-Free Intrada: `https://www.q-free.com/`, `https://www.q-free.com/products/intrada/`, `https://www.q-free.com/solutions/`
- Tattile: `https://www.tattile.com/`, `https://www.tattile.com/intelligent-transportation-systems/`, `https://www.tattile.com/markets/intelligent-transportation-systems/`
- Axis Communications: `https://www.axis.com/`, `https://developer.axis.com/`, `https://developer.axis.com/acap/`, `https://www.axis.com/products/axis-license-plate-verifier`
- Adaptive Recognition: `https://adaptiverecognition.com/`, `https://documentation.adaptiverecognition.com/`, `https://adaptiverecognition.com/carmen-anpr/`, `https://adaptiverecognition.com/vidar/`
- Parking Logix: `https://parkinglogix.com/`, `https://parkinglogix.com/solutions/`, `https://parkinglogix.com/products/`
- Perceptics: `https://perceptics.com/`, `https://perceptics.com/solutions/`
- Kapsch TrafficCom: `https://www.kapsch.net/`, `https://developer.kapsch.net/`, `https://www.kapsch.net/products`, `https://www.kapsch.net/solutions`
- Neology: `https://neology.net/`, `https://neology.net/solutions/`
- Leonardo ELSAG: `https://www.leonardo.com/`, `https://www.leonardo.com/en/products-and-solutions`, `https://www.leonardo.com/en/markets/security`
- Jenoptik: `https://www.jenoptik.com/`, `https://www.jenoptik.com/products/road-safety`, `https://www.jenoptik.com/products/road-safety/automatic-number-plate-recognition`
- NDI Recognition Systems: `https://www.ndi-rs.com/`, `https://www.ndi-rs.com/solutions`, `https://www.ndi-rs.com/products`
## Evidence-backed recommendations for future updates
- Lead ALPR+ product messaging with MMCG plus deployment control. Evidence: Sighthound’s product page and Developer Portal document make/model/color/generation, local servers, edge, cloud, Docker, Windows, Linux, RTSP, RabbitMQ, and Python customization. Why recommended: this is more competitive than commodity plate-read positioning and is verifiable through official pages.
- Use the Test Drive as the primary proof path. Evidence: the ALPR+ demo page exposes sample API requests and JSON responses. Why recommended: buyers can validate plate, region, color, make/model/generation, coordinates, and confidence outputs without unsupported accuracy claims.
- Use official API/developer docs before marketing language for integration claims. Evidence: the Docker, hosted preview, SIO quickstart, and VehicleAnalytics references document request formats, deployment requirements, input methods, and pipeline parameters. Why recommended: this reduces unsupported implementation claims and supports enterprise technical review.
- Avoid unsupported country-count claims. Evidence: the detailed product page says ALPR+ can read alphanumeric plates globally and reports region for US, Canada, and major EU countries; do not convert that into a numeric country-count unless an official source states the number. Why recommended: prevents speculative parity comparisons.
- Treat ALPR+ pricing as sales-led unless an official current pricing page is published. Evidence: no current public ALPR+ price was verified in the official sources reviewed; historical ALPR Pro references must be dated and caveated. Why recommended: avoids quoting outdated or unsupported pricing.
- Use Rekor pricing only from official Rekor documentation. Evidence: `https://docs.rekor.ai/scout/getting-started/subscriptions-and-licensing` lists Scout Basic at $12/month per camera, Scout Pro at $72/month per camera, and Enterprise as sales-contract/per-license. Why recommended: replaces third-party pricing snippets with official documentation.
- For Flock integrations, cite the API and Integrations Policy. Evidence: `https://www.flocksafety.com/api-integration-policy` defines API/integration terms and limitations. Why recommended: it supports accurate positioning around managed-network/API-fit tradeoffs.
- When a competitor capability is not documented, write “not publicly documented in reviewed official sources” rather than “no.” Evidence: official-source absence is not proof of absence. Why recommended: keeps comparisons accurate and defensible.
## Update guardrails
- Update only ALPR+ content unless a separate request authorizes Redactor or site-wide changes.
- Preserve existing layout, structure, navigation, visual design, typography, spacing, colors, icons, and component hierarchy.
- Every factual recommendation should cite an official URL and access date.
- Facts and recommendations should be labeled separately.
- Pricing estimates must be marked `[ESTIMATE]` and tied to official pricing pages or current vendor quotes.
- Do not deploy content containing third-party pricing snippets, unsupported accuracy claims, unsupported market-share claims, or uncited competitor advantages.
