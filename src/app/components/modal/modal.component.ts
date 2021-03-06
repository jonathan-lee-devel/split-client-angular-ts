import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
/**
 * Modal component used within in all pages.
 */
export class ModalComponent implements OnInit {
  modalTitle: string = '';

  /**
   * Default constructor.
   */
  constructor() {
  }

  /**
   * Init function for modal component.
   */
  ngOnInit(): void {
  }
}
