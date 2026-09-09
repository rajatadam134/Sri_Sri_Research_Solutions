# Complete redesign brief: Sri Sri Research Solutions

## Your role

You are redesigning an existing React/Tailwind website for **Sri Sri Research Solutions**, an Indian clinical research and site-management organization (SMO). This is not a request for a cosmetic cleanup. Recompose the site into a calm, credible, human, editorial website that feels made for a specialist clinical-research organization, not generated from a landing-page component library.

The website serves two primary audiences:

1. Sponsors, CROs, biotech teams, hospitals, and investigators assessing an SMO partner.
2. Prospective learners assessing legitimate clinical-research courses and workshops.

The site must first communicate trust, focus, and operational clarity. It must not try to teach the visitor every capability, course module, regulation, and credential at once.

## The design read and non-negotiable direction

Reading this as: a trust-first, regulated B2B healthcare-services website for professional decision-makers, using an understated editorial and institutional visual language.

Use these dials as constraints:

- Visual variance: **4/10**. Deliberate asymmetry is welcome, but no theatrical art-direction for its own sake.
- Motion: **2/10**. Motion should only clarify interaction or gently reveal content. No magnetic buttons, parallax portrait, particle network, glowing blobs, or decorative animations.
- Content density: **3/10**. Leave room to think. One clear idea per section.

The desired feeling is **clinical but not cold; premium but not luxury; informed but not verbose; human but not personal-brand-like**. It should look closer to an established research institute or carefully designed specialist consultancy than a startup, course marketplace, or AI agency template.

### Hard no list

Do not use any of the following:

- Rounded white cards scattered across a page, bento grids, or two nearly identical "feature cards".
- Gradients, glows, glassmorphism, glowing buttons, blurred coloured circles, mesh backgrounds, or animated particles.
- Section-number eyebrows such as `01 / CAPABILITIES`, pseudo-technical labels, or excessive all-caps metadata.
- Pills except where a compact control genuinely needs one, for example an active filter or a tiny credential label.
- Repeated checkmark lists, decorative icons in every heading, or icon tiles.
- Huge translucent watermark words such as `PHARMACOLOGY` or `LEADERSHIP`.
- Decorative quotations, invented founder quotes, or claims that cannot be verified.
- More than one CTA intent within a section. A button must do something specific.
- A dark section followed by a light section followed by another dark section simply for visual drama. The whole site needs one coherent light institutional canvas.
- Generic AI copy: phrases such as "flawless execution," "operational excellence," "uncompromising," "turnkey infrastructure," and "world-class" should be removed unless the client can substantiate them.
- Stock imagery of scientists in goggles, blue digital DNA, neon molecular renders, or fake hospital dashboards.

### What to preserve

- Preserve the existing wordmark/brand name, founder photo, real services, course names, routes, form behavior, accessibility, and SEO essentials.
- Keep the existing anchor IDs where feasible: `#about`, `#services`, `#trainings`, and `#feasibility`. If markup is rebuilt, retain those IDs on the replacement sections.
- Do not invent accreditation, compliance, hospital, staffing, timeline, outcome, or regulatory claims. Verify every existing claim with the client. For example, do not state `100% protocol compliance`, `CDSCO compliant`, `ICH-GCP accredited`, `48-hour review`, or specific credentials unless they are true and approved for public use.

## Why the current version feels AI-generated

Treat these as diagnosis, not optional feedback:

1. **It has too many competing visual languages.** The hero/founder/services sections use dark luxury gradients and large serif drama; the about section uses an editorial essay; services becomes a dark product-ledger; training becomes a course marketplace. A complete website needs one underlying grammar.
2. **Information is duplicated and over-explained.** The same ideas recur in the hero, operational pillars, about copy, lifecycle list, mission, vision, benefits, founder preview, and founder page. The visitor gets no sense of what matters most.
3. **Removing a border did not remove the card mentality.** Many components still have padded, rounded, elevated, self-contained "card" proportions. Changing dimensions or deleting one border cannot solve that. Replace the component pattern and its hierarchy.
4. **There are too many labels, badges, icons, and numbered lists.** These make every sentence announce itself and create visual noise. The content reads like a generated inventory rather than a confident organization.
5. **The nav is too long and visibly collides at the present desktop width.** `COURSES & TRAININGS` and `ABOUT US` are too verbose for this header. The current fixed header also feels like a product dashboard, not an institutional website.
6. **The founder is treated as a promo module, not a person.** Removing the rounded portrait container was not sufficient because the surrounding dark panel, glow, oversized watermark, credential pill, effects, and sales copy still create a templated profile-card feeling.
7. **Courses and workshops are two variants of the same AI component idea.** The certificate cards and workshop rows use the same formula: label, icon, metadata, title, list, border, button. Different dimensions do not give them distinct purpose or character.

## Global visual system

### Colour and material

Build the main experience on a single warm off-white or very pale stone background, with deep ink/aubergine text. Keep one restrained muted saffron/ochre accent from the existing brand only for links, focus, active states, and the primary action. Use muted sage only if it is already a confirmed brand colour and it has an explicit semantic role. Do not use gradients anywhere.

Use plain solid surfaces. Group content by whitespace, alignment, short rules, and background changes so subtle that the website still feels like one place. A full-width deep ink block is permissible only once, for the final feasibility/inquiry area or footer. It should be flat, not glowing.

### Type

Keep the existing type assets only if they are legible and licensed. Use one confident sans-serif for all interface, body copy, navigation, and most headings. If retaining the existing Zodiak serif, use it sparingly for one or two display moments only: the home-page H1 and/or the founder’s name. Do not italicize words inside every headline. Do not use a serif as the default heading style throughout the site.

Typography should do the hierarchy work:

- Navigation: 13–14px, sentence case, medium weight; no letter-spaced all caps.
- Eyebrows: use only when they clarify a section’s function, maximum three across the home page; sentence case or compact small caps without decorative dots.
- Main H1: one concise statement, no more than two lines on desktop.
- H2: direct and shorter than the current headlines.
- Body: 17–18px, 1.55–1.65 line height, max 55–65 characters per line.
- Supporting descriptions: one short paragraph, normally 20–35 words.

### Layout and shape

Use a 12-column desktop grid and a generous content maximum width of roughly 1200–1280px. Use strong vertical rhythm: 96–128px section spacing on desktop, 64–80px on mobile. Avoid putting a large heading at the left and a small explanatory paragraph at the far right in every section.

The primary grouping tools are:

- white space;
- a quiet horizontal rule;
- one change in type scale;
- an editorial image crop;
- a labelled list with a real reading order.

If a surface needs a corner radius, use 0–4px, not 16–24px. Buttons can have 3–6px radius, never oversized pill styling. Shadows should be absent or almost imperceptible.

### Motion and interaction

Remove the DNA particle overlay, magnetic buttons, hover glow, parallax, scale-heavy portrait effects, and automatic decorative movement. The DNA video may remain only if it is a genuine brand asset and is made quiet: low contrast, non-essential, with a still-image fallback, and no floating play/pause novelty control. It is equally acceptable and probably stronger to replace it with a still, high-quality macro biological image.

Use a 150–200ms opacity/colour transition for links, buttons, accordion expansion, and nav state. Honor `prefers-reduced-motion`. A user should never have to wait for or fight an animation to read the site.

### Image direction

Use only real, purposeful imagery. The preferred image set is:

- one restrained macro clinical/biological hero image, abstract enough to avoid generic stock but recognizably scientific;
- one documentary-quality image of a real research or hospital environment if licensing allows;
- the supplied founder portrait, treated as a portrait rather than a cutout pasted into a panel.

Do not create image overlays with labels. Do not use portraits on tinted blobs, massive watermark type, or decorative background glow.

## Information architecture and navigation

Keep the header calm and reduce it to five elements:

- Wordmark, clicking to Home.
- `Services`
- `Training`
- `About`
- `Founder`
- Primary action: `Request feasibility`

Use sentence case exactly as written. Do not use `Courses & Trainings`, `About Us`, or `Our Founder`; the words are needlessly long and are currently creating a visible collision. Keep `Request feasibility` visually distinct as the one primary action, but do not make it a glowing capsule.

On desktop, place the wordmark at left, navigation in the middle/right, and action at far right with enough fixed space. At widths where the complete nav cannot fit comfortably, switch to a true accessible menu before collision, not after. Do not make the header taller on scroll. A thin solid or slightly translucent surface and a bottom rule are enough.

The home page should answer, in this order:

1. What Sri Sri Research Solutions does and who it is for.
2. Why a sponsor/CRO/hospital should contact it.
3. The few services/therapeutic capabilities that matter.
4. A concise introduction to the organization and founder.
5. Training as a secondary but clear offering.
6. A focused feasibility contact route.

## Rebuild the home page section by section

### 1. Hero: one clear proposition

Replace the existing nearly full-screen, content-heavy hero. It currently contains a compliance label, a very long H1, a long paragraph, two large CTAs, a three-item trust strip, four operational pillars, a video, animated particles, gradients, and a floating media control. This is too much before the visitor reaches the first section.

Build a split hero with a text column and a single image column. The text column contains only:

- A restrained one-line context label only if verified, for example `Clinical research and site management in India`.
- H1: `Clinical trial site support, built around rigorous coordination.` This is a direction, not a mandatory claim. Make the final wording accurate to the business.
- One 20–30 word explanation of the organization’s purpose.
- One primary action: `Request feasibility`.
- One quiet text link beneath or beside it: `Explore services`.

Remove the four operational pillars entirely from the hero. Do not replace them with another row of columns. If the client needs trust markers, show only two or three verified items below the hero as plain inline text separated by rules, for example `Regulatory and IEC coordination`, `On-site CRC support`, `Oncology and multi-specialty studies`.

The image should be an honest scientific or operational image, edge-to-edge within its column, with a rectangular crop and no rounded card. The hero must fit its primary message and action without scrolling at ordinary laptop height.

### 2. Services: make this the main proof section

The current large gradient oncology box plus nine dark hover rows feels like a polished template. Do not just remove its border. Replace the entire pattern.

Use one `Services` section on the light page background. Introduce it with an H2 such as `Site support across the trial lifecycle`, followed by one short description. Then create a **single editorial services index**:

- The left column, wider, contains three core service groups in a vertical sequence: `Feasibility and start-up`, `Regulatory and ethics coordination`, and `On-site trial coordination`.
- Each group has a 1–2 sentence explanation and can expand to reveal a compact list only when the visitor asks. Do not show all details by default.
- The right, narrower column contains `Therapeutic experience`, with `Oncology and hemato-oncology` clearly identified as the specialist focus if it is real, followed by only the actual other key therapeutic areas. Avoid listing nine specialties solely to look comprehensive. If all of them matter, use `View all therapeutic areas` to reveal the rest as an accessible plain list.
- Finish the section with a text action: `Discuss a protocol`.

Do not use category filters. A static audience does not need a portfolio filter to understand a services page. Do not give every service an icon, number, pill, arrow, and hover state. One subtle right-arrow on a real link is enough.

### 3. About: reduce it from an essay to an institutional statement

The current about section is roughly 2,900px tall, repeats its core introduction in several paragraphs, includes a six-item lifecycle ledger, a mission/vision split, seven benefit items, and then a founder promotion. It needs to become two concise blocks.

Build `About` as a two-column editorial section:

- Left: H2 `A reliable partner for clinical research delivery` and two short paragraphs totaling no more than 100 words. Explain the organization’s role, stakeholders, and approach once. Do not repeat the same sentence in different wording.
- Right: a vertical `How we support a study` sequence with exactly four steps: `Assess`, `Prepare`, `Coordinate`, `Close`. Each gets a short phrase, not a paragraph. This is a process diagram, not a feature list.

Below that, put **one** concise institutional statement that merges mission and vision under a single heading such as `Our purpose`. Use 35–50 words. Remove the separate Mission and Vision columns. The distinction is not helping a visitor make a decision.

Remove the seven-item `Why choose us` grid. If those points are all valid, use the three strongest, non-overlapping outcomes as an inline list after the About copy. Examples of structure: `Clear communication. Ethical coordination. Practical site support.` Do not use numbers, icons, cards, or explanatory paragraphs for these.

### 4. Founder feature on the home page: make it quiet and human

The current founder preview is a dark rounded container with a glow, giant background word, badge, icon label, oversized title, sales copy, and CTA. It is still a card even without a border around the portrait.

Replace it with a full-width, light-background editorial portrait feature placed immediately after About or just before the footer. It should feel like a magazine profile opener:

- Use the real founder portrait in a tall rectangular crop. Do not use a transparent cutout if a usable full photograph is available; a full portrait against a natural neutral background is preferable. If only a transparent PNG exists, place it against one restrained solid colour, not a gradient or glow.
- Use an asymmetrical 5/7 or 4/8 composition: image on one side, text on the other. There is no outer card, no shadow, no background watermark, no credential pill, and no decorative icon.
- Text should contain only `Vishal Iraganti`, `Founder`, `M.Pharm, Pharmacology` if verified, and a 35–50 word bio. Use one text link: `Read founder profile`.
- Include a thin rule between name/role and the bio. This is enough visual structure.

### 5. Founder page: reduce its self-promotional treatment

The standalone founder page should not repeat the dark hero, giant watermark typography, parallax, founder metadata pill, long bio, quote card, four-pillar grid, and two CTAs. It makes one individual feel like a generic personal-brand landing page.

Rebuild `/founder` as a clear profile page:

1. A compact page header on the light global canvas: breadcrumb `About / Founder`, H1 `Vishal Iraganti`, then `Founder, Sri Sri Research Solutions` and the verified qualification.
2. A portrait-and-bio section. The portrait is a clean rectangular image with a calm neutral backdrop. The bio is two paragraphs with a maximum of 180 words total. It should state only verified facts and responsibilities.
3. A narrow `Areas of focus` list with no more than three items, expressed as plain text lines with a small rule: `Ethical trial conduct`, `Site coordination`, `Clinical research education`, subject to accuracy.
4. One clear end action: `Discuss a study` linking to feasibility.

Do not use a founder quote unless Vishal approves its wording. If an approved quote is supplied, set it as plain large text on the page with no dark box, huge quote glyph, watermark, or faux signature.

### 6. Training: give certificates and workshops different editorial roles

This is the most important structural change after About and Founder. The issue is not only equal dimensions: both course types are constructed from the same card vocabulary. Give each format a different purpose.

Start with a short header: `Training for clinical research practice`, a one-sentence description, and no filter control unless filtering has a real user need. Most visitors will understand the two categories without an `All programs (5)` segmented control.

#### Certificate courses

Treat the two certificates as a **comparison editorial**, not cards:

- Put them in two columns separated by one vertical rule on desktop; stack with a horizontal rule on mobile.
- Each course receives: programme type in small text, title, duration, intended audience in one line, a 2–3 line summary, and one text action `Request course information`.
- Show at most three learning themes as plain short lines. Do not show a coloured target-audience inset, boxed curriculum bullet list, award row, icon tile, pill, and separate button all at once.
- Let the title and the whitespace do the work. The two courses can feel intentionally paired without looking like cards.

#### Workshops and career training

Treat the three workshops as an **agenda/listing**, not mini course cards:

- Use a simple full-width table-like list with three columns: duration, programme name, intended audience or outcome. Use only top/bottom rules, not a bordered rounded rectangle per row.
- Each row can expand accessibly for the curriculum, or link to a dedicated detail page/section. Keep that content hidden until requested.
- Use one final text action beneath the list: `Ask about upcoming training`.

Never show more than one repeated CTA button per programme. Do not use `Enroll` or `Register` unless enrollment and dates are real and ready for public use. Otherwise use `Request course information` / `Ask about availability`.

### 7. Feasibility section and form: sober, short, safe

The current feasibility form header again tries to sell with a large multi-line heading plus three numbered assurances. Keep the form as the conversion endpoint but remove the marketing theatre.

Use a dark flat-background final section only if it improves focus. On the left show:

- H2: `Start a feasibility conversation`.
- One 25–35 word explanation of what to send.
- Two short verified notes, for example `For sponsors, CROs, and hospital teams` and `NDA requests can be indicated below`.

On the right, use the form itself without a giant rounded floating panel. Inputs may use a subtle 4px radius, visible labels, clear focus states, and ample spacing. Keep the current fields and labels unless changing them has been approved, because they may be tied to form handling or analytics. Replace `Transmit feasibility dossier` with plain language such as `Send request`.

Do not claim encrypted storage, statutory confidentiality, or zero data-broker sharing unless those technical and legal claims are accurate.

### 8. Footer

Simplify the footer. Present the wordmark, a one-sentence description, three compact navigation groups, direct contact details if supplied, and legal links. Remove repetitive qualifications and duplicate bottom navigation. Use a flat deep ink background or a simple light footer, but not another decorated panel.

## Copy rules

Rewrite ruthlessly. Do not fill empty space with information. Every block should earn its place by answering a visitor question.

- Hero: 20–30 word body.
- Each section intro: 20–35 words.
- About page body: maximum 100 words before the four-step support sequence.
- Founder home preview: 35–50 words.
- Founder page bio: maximum 180 words.
- Course summary: maximum 35 words per programme.
- Do not repeat the same benefit in Hero, About, Services, Founder, and Footer.
- Prefer concrete nouns and verbs over adjectives. Say `coordinates IEC submissions` rather than `delivers flawless regulatory excellence`.
- Use title case only in headings if the existing brand requires it; otherwise sentence case throughout.
- Use `and`, not ampersands, in body copy. Avoid em dashes.

Before shipping, flag any copy fact that needs client confirmation instead of inventing wording or credentials.

## Implementation constraints

- Retain React, Tailwind, and the existing real assets unless there is a technical reason to change them.
- Check the existing dependency list before adding packages. Do not add an animation library or UI kit for this redesign.
- Remove unused `lucide-react` imports rather than replacing every lost decoration with a new icon.
- Use semantic `header`, `main`, `section`, `nav`, `article`, `figure`, `figcaption`, `form`, and real headings in order.
- Preserve keyboard navigation, visible focus states, alt text, mobile behavior, and contrast. Interactive rows need proper buttons/links and `aria-expanded` where relevant.
- Avoid a `window` scroll listener when CSS sticky positioning or IntersectionObserver is enough. The redesign should not depend on scroll-driven theatrics.
- Test at 1440px, 1024px, 768px, and 390px. The nav must never overlap, text must not be clipped, and all intended touch targets need at least 44px height.
- Use `min-height: 100dvh`, never `height: 100vh`, if a viewport-height hero is retained.

## Acceptance checklist

The redesign is complete only when all of the following are true:

- A visitor can describe the company and its primary action after seeing the first screen.
- The homepage is materially shorter and lighter: remove at least 35–45% of the visible home-page copy and redundant UI.
- No section relies on a set of equal rounded cards to communicate its message.
- The `About` section is two concise blocks, not an essay plus three sub-sections.
- The founder portrait reads as an editorial human portrait, not a cutout inside a SaaS panel.
- Certificates and workshops are visibly different patterns: comparison columns versus agenda rows.
- There are no gradients, glows, blur blobs, animated particles, magnetic effects, or decorative watermark words.
- There is one palette, one spacing system, one modest radius scale, and one deliberate heading hierarchy across every route.
- The desktop navbar stays on one line at 1024px without overlapping labels; it converts to an accessible menu below its true fit point.
- All claims and qualifications shown publicly are verified or marked for client review.
- The result feels like a complete institution with a coherent point of view, not a collection of separately generated sections.

