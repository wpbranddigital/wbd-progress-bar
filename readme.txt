=== WBD Progress Bar ===
Contributors: wpbranddigital25
Tags: block, progress, progress-bar, bar, gutenberg
Requires at least: 6.5 
Tested up to: 7.0
Stable tag: 1.1.2
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A beautiful and lightweight progress bar block for the WordPress Gutenberg editor with smooth animations and full customization options.

== Description ==

The **Progress Bar** block is a simple yet powerful tool for displaying progress, statistics, skills, or any percentage-based data on your WordPress site. Built with modern web standards, this block offers smooth animations and a clean, professional appearance.
 
Whether you need a simple skill bar, an animated number counter, a circular radial ring, or a full skills section — WBD Progress Bar has you covered.

### Features
 
**Display Modes**
* **Single Bar** – Classic horizontal progress bar with full customization
* **Number Counter** – Animated count-up effect with prefix, suffix, and optional bar below
* **Circular / Radial Progress Bar** – Beautiful SVG ring-style progress with 10 themes, custom size, stroke width, center text, and optional label
* **Group / Skills Section** – Display multiple progress bars together as a skills list with individual labels, colors, and percentages; flexible label & percentage positioning
 
**Style Variations**
* Thin (6px), Medium (12px), Thick (20px), Striped (animated), Circle (SVG ring)
 
**10 One-Click Template Styles**
Ocean Blue, Sunset Fire, Forest Green, Purple Galaxy, Golden Hour, Midnight Dark, Rose Pink, Arctic Ice, Corporate Gray, Lemon Lime
 
**Customization**
* Progress percentage control (0–100)
* Custom fill & track colors
* Gradient fill (two-color gradient)
* Bar corner radius control (square to pill)
* Bar height control (6px–40px)
* Optional percentage text display
* Percentage position — Inside bar / Outside right / Above bar
* Label position — Above / Below / Inline row
* Inline gap control (when label is inline)
* Milestone marker with custom label
* Hover tooltip on progress bar
* Scroll-triggered animation (IntersectionObserver)
* Animation type — Ease, Ease In, Ease Out, Ease In Out, Linear, Bounce, Elastic
* Animation duration control
* Typography control — Font family & font size for label and percentage text
* Fully responsive design
* Full Site Editor (FSE) support
* Accessible design with semantic HTML

**Perfect For:**

* Skill & competency display  
* Project completion indicators  
* Goal tracking & fundraising  
* Statistics & data visualization  
* Survey results & polls  
* Resume / portfolio pages

The block provides an intuitive editing experience with sidebar controls for adjusting the percentage (0–100), customizing colors, toggling percentage text visibility, and selecting from predefined style variations.


== Why Use WBD Progress Bar? ==
 
Most progress bar plugins are either too bloated with unnecessary features or too simple to be actually useful. WBD Progress Bar is built differently:
 
**🚀 Performance First**
The block outputs pure static HTML and CSS — no jQuery, no heavy JavaScript libraries. The frontend script only loads when your block is actually on the page, keeping your site fast.
 
**🎨 Visual Flexibility**
Four display modes, five style variations, ten one-click templates, gradient fill, custom radius, custom height, and full color control — all without touching a single line of code.
 
**🧩 Built for Gutenberg**
This is a native WordPress block, not a shortcode or widget. It works seamlessly inside the block editor, Full Site Editor (FSE), reusable blocks, and block patterns.
 
**📱 Responsive by Default**
Every mode — single bar, counter, circular, group — adapts automatically to mobile, tablet, and desktop screens without extra configuration.
 
**⚡ Scroll Animation Without a Plugin**
Built-in IntersectionObserver-based scroll trigger animates your bars when they come into view. No extra animation plugin needed.


== Source Code & Build Instructions ==

This plugin is built using `@wordpress/scripts` (webpack). The compiled/minified files in the `build/` directory are generated from the human-readable source files located in the `src/` directory of the plugin.

**Source files included in this plugin:**

* `src/index.js` — Block registration entry point
* `src/edit.js` — Editor component (block inspector controls and editor preview)
* `src/save.js` — Save component (frontend HTML output)
* `src/view.js` — Frontend JavaScript (scroll animations, counter animations)
* `src/block.json` — Block metadata and attribute definitions
* `src/editor.scss` — Editor-only styles
* `src/style.scss` — Frontend styles

**To build from source:**

1. Make sure you have Node.js (v18+) and npm installed.
2. Navigate to the plugin directory.
3. Run `npm install` to install dependencies.
4. Run `npm run build` to generate the production `build/` directory.
5. Run `npm start` to start the development watcher with live rebuild.

The only build dependency is `@wordpress/scripts` (see `package.json`).


== How To Use ==
 
**Step 1 — Add the Block**
 
Open any post, page, or template in the WordPress editor. Click the **+** block inserter button, search for **"Progress Bar"**, and click to insert the WBD Progress Bar block.

---
 
**Step 2 — Choose a Display Mode**
 
In the right sidebar, find the **Block Mode** panel at the top. Select one of four modes:
 
* **Single Bar** — A classic horizontal progress bar. Best for individual skills, project completion, or goal tracking.
* **Number Counter** — An animated number that counts up on scroll. Great for statistics pages ("500+ clients", "$1M+ revenue").
* **Circular / Radial** — A circular SVG ring progress indicator. Perfect for dashboards or visual KPI displays.
* **Group / Skills Section** — Multiple bars stacked together. Ideal for resume skills sections or comparison lists.
 
---
 
**Step 3 — Apply a Template (Optional)**
 
Open the **Template Styles** panel and click any of the 10 preset templates to instantly apply a complete color scheme and style. You can fine-tune colors individually after applying a template.
 
---
 
**Step 4 — Customize Settings**
 
Depending on your selected mode, configure the following panels:
 
* **Progress Settings** — Set percentage, height, radius, label text, label position, and percentage position.
* **Animation** — Choose animation type (ease, bounce, elastic), set duration, and enable scroll-triggered animation.
* **Milestone & Tooltip** — Add a milestone marker at any percentage point with a custom label. Enable hover tooltip for additional info.
* **Typography** — Set font family and font size for the label and percentage text independently.
* **Color Settings** — Set fill color, track color, label color, and percentage text color. Enable gradient fill to use two colors.
 
---
 
**Step 5 — Using the Number Counter**
 
Switch to **Number Counter** mode. Set:
 
* **Target Number** — The final value to count up to (e.g. 1500).
* **Prefix** — Text before the number (e.g. `$`).
* **Suffix** — Text after the number (e.g. `+` or `%`).
* **Label** — A description shown below the number (e.g. "Happy Clients").
* **Show Progress Bar Below** — Toggle to add a bar underneath the counter.
 
The counter animates automatically on page load, or enable **Animate on Scroll** so it only starts when the user scrolls to it.
 
---
 
**Step 6 — Using Group / Skills Section**
 
Switch to **Group / Skills Section** mode. In the sidebar:
 
1. Each bar item has its own **Label**, **Percentage**, and **Bar Color**.
2. Click **+ Add Bar** to add more items (no limit).
3. Click **✕** to remove any item.
4. Set **Label Position** — Above bar (with optional percentage on the same line) or Inline row.
5. Set **Percentage Position** — Inside bar / Outside right / Same line as label.
6. Adjust **Gap Between Bars** and **Inline Gap** sliders to control spacing.
 
---
 
**Step 7 — Using Circular / Radial Mode**
 
Switch to **Circular / Radial** mode. In the sidebar:
 
1. Choose one of the **10 circular themes** by clicking the theme thumbnail.
2. Adjust **Size** (80–300px) and **Stroke Width** (3–20px).
3. Set the **Progress Percentage**.
4. Toggle **Show Label Below** to display a text label under the ring.
5. Fine-tune **Stroke Color**, **Track Color**, and **Center Text Color** individually.
 
---
 
**Step 8 — Publish**
 
Click **Publish** or **Update**. The block renders as clean, static HTML on the frontend with no extra requests or render-blocking scripts.

---


= Where can I get support? =
Visit our [contact page](https://www.wpbranddigital.org/contact/) for support.
 

== Installation ==

1. Upload the plugin folder to `/wp-content/plugins/wbd-progress-bar`.
2. Activate the plugin through the "Plugins" screen in WordPress.
3. Add the **WBD Progress Bar** block to any post/page from the block inserter.
4. Customize the percentage, colors, and style from the block sidebar.

== Frequently Asked Questions ==

= Can I customize the colors? =
Yes! The block includes color pickers for the progress fill and background track so you can match your site's design.

= How do I change the progress percentage? =
Use the "Progress Percentage" number control in the block sidebar. Enter any value from 0 to 100.

= Can I hide the percentage text? =
Yes, there is a sidebar toggle named "Show Percentage Text" that lets you hide or display the percentage.

= What are the style variations? =
The block includes three variations:
* **Thin** – 6px height for subtle displays  
* **Medium** – 12px (default)  
* **Thick** – 20px for a bold look  

= Is the block responsive? =
Yes! The progress bar automatically adapts to all screen sizes.

= Does it work with the Full Site Editor? =
Absolutely. The block works with both the post editor and the Full Site Editor (FSE).

== Screenshots ==

1. Progress Bar block with sidebar controls.
2. Style variations (Thin, Medium, Thick).
3. Custom color combinations.
4. Percentage text inside the bar.
5. Mobile responsive view.

== Changelog ==

= 1.1.2 =
* All features are now fully free and unlocked.
* Circular / Radial, Group / Skills, and Hover Tooltip are now available to all users.
* Removed Freemius SDK and Pro gating.
* Added source code documentation and build instructions to readme.

= 1.1.0 =
* New: Progress Name / Label text control.
* New: Circular / Radial Progress Bar mode with 10 themes.
* New: Group / Skills Section mode — multiple bars in one block.
* New: Number Counter mode with animated count-up, prefix & suffix.
* New: Hover Tooltip on progress bar.
* New: 10 one-click Template Styles (Ocean Blue, Sunset Fire, Forest Green, etc.).
* Milestone marker and scroll animation settings.


= 1.0.0 =
* Initial release.
* Progress percentage control (0–100).
* Custom fill and track colors.
* Optional percentage text display.
* Three style variations (Thin, Medium, Thick).
* Smooth transition animations.
* Fully responsive design.
* Static block with clean HTML output.

== Upgrade Notice ==

= 1.0.0 =
Initial release of the WBD Progress Bar block.
