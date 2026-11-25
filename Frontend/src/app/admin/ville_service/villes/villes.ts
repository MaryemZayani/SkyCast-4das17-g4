import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-villes',
  imports: [FormsModule],
  templateUrl: './villes.html',
  styleUrl: './villes.css'
})
export class VillesPage {
  admin = inject(ActivatedRoute).snapshot.data['admin'] === true;
  rows: string[] = ["Tunis", "Sousse", "Sfax", "Bizerte"];
  query = '';
  draft = '';
  draftEdit = '';
  editing = -1;
  add() {
    if (this.draft.trim()) {
      this.rows.push(this.draft.trim());
      this.draft = '';
    }
  }
  edit(i: number) {
    this.editing = i;
    this.draftEdit = this.rows[i];
  }
  save(i: number) {
    if (this.draftEdit.trim()) {
      this.rows[i] = this.draftEdit.trim();
      this.editing = -1;
    }
  }
  remove(i: number) {
    this.rows.splice(i, 1);
    this.editing = -1;
  }
}
