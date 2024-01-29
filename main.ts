import { Plugin, MarkdownView} from 'obsidian';

export default class TextAlignment extends Plugin {
	onload() {

		const item  = this.addStatusBarItem();
		const span = item.createEl("span", { text: "Justify" });
		span.addEventListener('click', () => {
			{
				console.log(`I'm Clicked`);
				// Check for active Markdown view on plugin load
				const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (activeView) {
					this.onMarkdownViewUpdate(activeView);
				}
			}

		});
	}


	onMarkdownViewUpdate(markdownView: MarkdownView) {
		// Access the CodeMirror instance from the MarkdownView
		const editor = markdownView.sourceMode.cmEditor;
		const fullContent = editor.getValue();

		// Split the content into paragraphs
		const paragraphs = fullContent.split('\n\n');
		console.log(paragraphs);
		if (paragraphs.length > 0 && !/^\s*$/.test(paragraphs.join(''))) {
			console.log(`I'm Inside`);
			let codeOccurFlag = false;
			const updatedParagraphs = paragraphs.map(paragraph => {
				if (paragraph.startsWith('<div style="text-align: justify;">')) {
					return paragraph;
				}
				if (/^```/.test(paragraph)) {
					codeOccurFlag = !codeOccurFlag;
					return paragraph;
				}
				if (/^#{1,6}\s+/.test(paragraph) || /^\s*- /.test(paragraph) || codeOccurFlag) {
					return paragraph;
				}
				else {
					// Convert Markdown formatting to HTML
					const htmlParagraph = paragraph
						.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // bold
						.replace(/\*(.*?)\*/g, '<em>$1</em>')             // italic
						.replace(/~~(.*?)~~/g, '<s>$1</s>')       // strikethrough
						.replace(/`(.*?)`/g, '<code>$1</code>')

					// Handle links and images
					const htmlWithLinks = htmlParagraph.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
						.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

					return `<div style="text-align: justify;">${htmlWithLinks}</div>`;
				}
			});
			editor.setValue(updatedParagraphs.join('\n\n'));
		}
	}
}
