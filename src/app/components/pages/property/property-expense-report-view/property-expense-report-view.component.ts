import {Component, OnInit} from '@angular/core';
import {PropertyDto} from '../../../../dtos/properties/PropertyDto';
import {ExpenseDto} from '../../../../dtos/expenses/ExpenseDto';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../../../../services/property/property.service';
import {ExpenseService} from '../../../../services/expense/expense.service';
import {
  ExpenseFrequency,
} from '../../../../dtos/expenses/enum/ExpenseFrequency';

@Component({
  selector: 'app-property-expense-report-view',
  templateUrl: './property-expense-report-view.component.html',
  styleUrls: ['./property-expense-report-view.component.css'],
})
export class PropertyExpenseReportViewComponent implements OnInit {
  property: PropertyDto = {
    acceptedTenantEmails: [],
    id: '',
    tenantEmails: [],
    title: '',
  };
  expenses: ExpenseDto[] = [];
  totalExpenses: string = '$100.00';
  totalExpensesPerTenant: string = '$25.00';

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.propertyService.getPropertyById(params['id'])
          .subscribe((property) => {
            this.property = property;
          });
      this.expenseService.getExpensesForProperty(params['id'])
          .subscribe((expenses) => {
            this.expenses = expenses;
            for (const expense of this.expenses) {
            // @ts-ignore
              expense.frequency = ExpenseFrequency[expense.frequency];
            }
          });
      this.propertyService
          .getTotalExpensesPerMonthForProperty(params['id'])
          .subscribe((total) => {
            this.totalExpenses = total;
          });
      this.propertyService
          .getTotalExpensesPerTenantPerMonthForProperty(params['id'])
          .subscribe((totalPerTenant) => {
            this.totalExpensesPerTenant = totalPerTenant;
          });
    });
  }

  formatDate(date: Date): string {
    const dateStringList = String(date).split('-');
    // eslint-disable-next-line max-len
    return `${dateStringList[0]}-${dateStringList[1]}-${dateStringList[2].split('T')[0]}`;
  }
}
