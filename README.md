# YouTube Auto Pause/Resume Extension

This Chrome extension automatically pauses YouTube videos when you switch to another application and resumes them when you switch back.

## Features

- Pauses YouTube videos when switching to another app.
- Resumes YouTube videos when switching back to YouTube.

## Installation

Follow these steps to load the extension into Chrome:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/darshil25/Youtube-auto-play-pause.git
    cd your-repo-name
    ```

2. **Ensure your directory structure looks like this:**

    ```
    your-repo-name/
    ├── manifest.json
    ├── background.js
    ├── content.js
    ├── icon.png
    └── animated-icon.gif
    ```

3. **Load the extension in Chrome:**

    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click on the "Load unpacked" button.
    - Select the directory where you cloned the repository.

## Usage

- Once the extension is loaded, you should see the extension icon in the Chrome toolbar.
- The extension will automatically pause any YouTube video when you switch to another application and resume it when you switch back.
- Click on the extension icon to see a popup with an animated GIF.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
