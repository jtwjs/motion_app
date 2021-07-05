import {PageComponent, Composable, PageItemComponent} from "./components/page/page.js";
import {ImageComponent} from "./components/page/item/image.js";
import {VideoComponent} from "./components/page/item/videos.js";
import {NoteComponent} from "./components/page/item/note.js";
import {TodoComponent} from "./components/page/item/todo.js";
import {Component} from "./components/component.js";
import {InputDialog} from "./components/dialog/dialog.js";



class App {
	private readonly page: Component & Composable;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent(PageItemComponent);
		this.page.attachTo(appRoot);

		const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
		this.page.addChild(image);

		const video = new VideoComponent('Video Title', 'https://www.youtube.com/watch?v=domBCXgtYxI&list=RDdomBCXgtYxI&start_radio=1');
		this.page.addChild(video);

		const note = new NoteComponent('Note Title', 'Note Body');
		this.page.addChild(note);

		const todo = new TodoComponent('Todo Title', 'Todo Item');
		this.page.addChild(todo);

		const ImageBtn = document.querySelector('#new-image')! as HTMLElement;
		console.log('click', ImageBtn);
		ImageBtn.onclick = () => {
			const dialog = new InputDialog();
			dialog.setOnCloseListener(() => {
				dialog.removeFrom(document.body);
			});
			dialog.setOnSubmitListener(() => {
				// 섹션 만들어서 페이지 추가
				dialog.removeFrom(document.body);
			});

			dialog.attachTo(document.body);
		}
	}

}

new App(document.querySelector('.document')! as HTMLElement);