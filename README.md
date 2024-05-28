# LinkedIn Profile Picture Modifier

This Chrome extension replaces LinkedIn profile pictures in the feed with a specified image.

## Description

The LinkedIn Profile Picture Modifier is a simple Chrome extension that dynamically changes all profile pictures in your LinkedIn feed to a single image of your choice. This can be useful for fun, for testing purposes, or to customize your LinkedIn experience.

## Features

- Automatically replaces all profile pictures on the LinkedIn homepage.
- Uses both specific selectors and heuristic methods to identify profile pictures.
- Continuously monitors the feed for new posts and updates profile pictures accordingly.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Subhrajit-Dutta/LinkedIn-Profile-Modifier.git
   ```
## Usage
1. Edit the URL of the new profile picture:

- Open content.js in your favorite text editor.
- Replace the URL in the newProfilePicURL variable with the URL of the image you want to use:
```sh
const newProfilePicURL = 'https://example.com/path-to-your-image.jpg';
```
2. Load the extension in Chrome:

- Open Chrome and go to chrome://extensions/.
- Enable "Developer mode" using the toggle switch at the top right corner.
- Click on "Load unpacked" and select the LinkedInProfilePictureModifier directory.

3. Navigate to LinkedIn:

- Open LinkedIn in your Chrome browser and go to the homepage feed.
- The profile pictures should automatically be replaced by the specified image.
