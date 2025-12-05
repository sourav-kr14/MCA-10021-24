import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

interface Task {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  columns: {
    name: string;
    key: string;
    tasks: Task[];
  }[] = [
    { name: 'To Do', key: 'todo', tasks: [] },
    { name: 'In Progress', key: 'inprogress', tasks: [] },
    { name: 'Need Review', key: 'review', tasks: [] },
    { name: 'Completed', key: 'done', tasks: [] }
  ];

  showModal = false;
  selectedColumn = '';
  newTask: Task = { id: '', title: '', description: '' };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    // Load previously saved tasks only in browser (not SSR)
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromStorage();
    }
  }

  /* OPEN MODAL */
  openAddTask(colKey: string) {
    this.selectedColumn = colKey;
    this.showModal = true;
    this.newTask = { id: '', title: '', description: '' };
  }

  /* CLOSE MODAL */
  closeModal() {
    this.showModal = false;
  }

  /* ADD NEW TASK */
  addTask() {
    if (!this.newTask.id || !this.newTask.title) {
      alert("Task ID and Title are required!");
      return;
    }

    const column = this.columns.find(c => c.key === this.selectedColumn);
    column?.tasks.push({ ...this.newTask });

    this.saveToStorage(); // Save changes
    this.closeModal();
  }

  /* DRAG & DROP BETWEEN COLUMNS */
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.saveToStorage(); // Save board after drag
    }
  }

  /* SAVE BOARD DATA TO LOCAL STORAGE */
  saveToStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('jira-board', JSON.stringify(this.columns));
    }
  }

  /* LOAD BOARD DATA FROM LOCAL STORAGE */
  loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('jira-board');
      if (saved) {
        this.columns = JSON.parse(saved);
      }
    }
  }
}
