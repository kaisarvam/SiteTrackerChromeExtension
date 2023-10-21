# My Awesome Chrome Extension

**Overview:**

This Chrome extension is built with React, TypeScript, and Vite. It helps you keep track of visited websites and provides a user-friendly interface for managing your browsing history.

**Getting Started:**

1. **Install Dependencies:**

   - Run `npm install` or `yarn` to install project dependencies.

2. **Build the Extension:**

   - To start using the extension, run `npm run build` or `yarn build`.

3. **Load the Extension in Chrome:**

   - Open your Chrome browser.
   - Navigate to "chrome://extensions/"
   - Enable developer mode by toggling the switch in the top-right corner.
   - Click on "Load unpacked" in the top-left corner.
   - Select the "dist" folder from this project.

4. **Use the Extension:**
   - Once loaded, you'll find the extension in your Chrome extensions list.
   - Enable the extension and pin it to the extension bar for easy access.

**Features:**

- **Visited Sites Tracking:** This extension keeps a list of the websites you visit.
- **Duplicate Site Detection:** If you visit a site twice, you'll see a red text warning that says "This site is visited already."

- **Remove Sites:** You can easily remove a site from the visited list. This action will remove the red text and consider the site as new.
