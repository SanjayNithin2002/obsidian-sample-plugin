# Text Alignment Plugin for Obsidian

Text Alignment is a plugin for Obsidian that provides a convenient way to justify text with a single click.

## Features

- Adds a status bar item with a "Justify" button.
- Clicking the "Justify" button in the status bar applies text alignment to the active Markdown view.
- Supports text alignment for paragraphs, excluding code blocks, headings, and bullet points.

## Installation

1. Download the latest release from the [GitHub releases page](https://github.com/SanjayNithin2002/obsidian-text-aligner/releases/tag/2.0.0).

2. Extract the ZIP file into your Obsidian vault's plugins folder. The folder structure should look like this:

vault
└── .obsidian
└── plugins
└── text-alignment-plugin
├── main.js
├── styles.css
└── manifest.json

3. Enable the plugin in Obsidian's settings.

## Usage

- After installing the plugin, a "Justify" button will appear in the status bar.
- Click the "Justify" button to apply text alignment to the active Markdown view.

## Development

If you want to contribute or modify the plugin:

1. Clone this repository.
2. Run `npm i` to install dependencies.
3. Make your changes to the `main.ts` file.
4. Run `npm run dev` to compile the TypeScript code.
5. Reload Obsidian to see your changes.

## Support

If you encounter any issues or have suggestions, feel free to open an [issue](https://github.com/your-username/your-repo/issues).

## License

This plugin is licensed under the [MIT License](LICENSE).

