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

  columns = [
    { name: 'To Do', key: 'todo', tasks: [] as Task[] },
    { name: 'In Progress', key: 'inprogress', tasks: [] as Task[] },
    { name: 'Need Review', key: 'review', tasks: [] as Task[] },
    { name: 'Completed', key: 'done', tasks: [] as Task[] }
  ];

  showModal = false;
  selectedColumn = '';
  newTask: Task = { id: '', title: '', description: '' };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadFromStorage();
    }
  }

  openAddTask(colKey: string) {
    this.selectedColumn = colKey;
    this.showModal = true;
    this.newTask = { id: '', title: '', description: '' };
  }

  closeModal() {
    this.showModal = false;
  }

  addTask() {
    if (!this.newTask.id || !this.newTask.title) {
      alert("Task ID and Title are required!");
      return;
    }

    const col = this.columns.find(c => c.key === this.selectedColumn);
    col?.tasks.push({ ...this.newTask });

    this.saveToStorage();
    this.closeModal();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.saveToStorage();
    }
  }

  saveToStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('jira-board', JSON.stringify(this.columns));
    }
  }

  loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('jira-board');
      if (saved) this.columns = JSON.parse(saved);
    }
  }
}
