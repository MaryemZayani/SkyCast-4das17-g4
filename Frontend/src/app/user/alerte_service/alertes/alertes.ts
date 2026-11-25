import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alertes',
  imports: [FormsModule],
  templateUrl: './alertes.html',
  styleUrl: './alertes.css'
})
export class AlertesPage {
  admin = inject(ActivatedRoute).snapshot.data['admin'] === true;
  rows: string[] = ["Température élevée", "Vent fort"];
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
