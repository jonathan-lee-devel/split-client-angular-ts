import {Component, OnInit} from '@angular/core';
import {ExpenseFrequency} from '../../../../dtos/expenses/enum/ExpenseFrequency';
import {ActivatedRoute, Router} from '@angular/router';
import {ExpenseService} from '../../../../services/expense/expense.service';
import {ModalService} from '../../../../services/modal/modal.service';
import {FormControl, FormGroup} from '@angular/forms';

export interface ExpenseSelection {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css'],
})
export class ExpenseCreateComponent implements OnInit {
  title: string = '';
  amount: number = 0;
  frequency: ExpenseFrequency = ExpenseFrequency.ONCE;
  expenseSelections: ExpenseSelection[] = [
    {value: 0, viewValue: ExpenseFrequency[ExpenseFrequency.ONCE]},
    {value: 1, viewValue: ExpenseFrequency[ExpenseFrequency.DAILY]},
    {value: 2, viewValue: ExpenseFrequency[ExpenseFrequency.WEEKLY]},
    {value: 3, viewValue: ExpenseFrequency[ExpenseFrequency.BIWEEKLY]},
    {value: 4, viewValue: ExpenseFrequency[ExpenseFrequency.MONTHLY]},
    {value: 5, viewValue: ExpenseFrequency[ExpenseFrequency.YEARLY]},
  ];
  propertyId: string = '';
  dateFormGroup = new FormGroup({
    date: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private modalService: ModalService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.propertyId = params['propertyId'];
    });
  }

  doCreateExpense() {
    const date = new Date(this.dateFormGroup.get('date')?.value.toISOString());
    date.setHours(date.getHours() + (date.getTimezoneOffset() / 60.0) * -1);
    this.expenseService.createExpense(
        this.propertyId,
        this.title,
        this.amount,
        this.frequency,
        date,
    ).subscribe((expense) => {
      this.modalService.showModal(
          'Expense Creation',
          `Expense \'${expense.title}\' successfully created`,
      );
      this.router.navigate([`/property/manage/${this.propertyId}/expenses`]);
    });
  }
}
