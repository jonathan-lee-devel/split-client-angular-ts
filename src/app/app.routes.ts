import {Routes} from '@angular/router';
import {LoginComponent} from './components/pages/user/login/login.component';
// eslint-disable-next-line max-len
import {
  RegisterComponent,
} from './components/pages/user/registration/register.component';
// eslint-disable-next-line max-len
import {
  ForbiddenComponent,
} from './components/pages/error/forbidden/forbidden.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {HomeComponent} from './components/pages/home/home.component';
import {
  PasswordResetRequestComponent,
} from './components/pages/user/password-reset-request/password-reset-request.component';
import {
  PasswordResetConfirmComponent,
} from './components/pages/user/password-reset-confirm/password-reset-confirm.component';
import {
  ProfileComponent,
} from './components/pages/user/profile/profile.component';
import {
  PropertyCreateComponent,
} from './components/pages/property/property-create/property-create.component';
import {
  PropertyViewComponent,
} from './components/pages/property/property-view/property-view.component';
import {
  NotFoundComponent,
} from './components/pages/error/not-found/not-found.component';
import {
  EmailRegistrationVerificationComponent,
} from './components/pages/user/token/email-registration-verification/email-registration-verification.component';
import {
  PropertyManageExpensesComponent,
} from './components/pages/property/property-admin/property-manage-expenses/property-manage-expenses.component';
import {
  PropertyManageTenantsComponent,
} from './components/pages/property/property-admin/property-manage-tenants/property-manage-tenants.component';
import {
  MyPropertiesViewComponent,
} from './components/pages/property/my-properties-view/my-properties-view.component';
import {
  MyTenanciesViewComponent,
} from './components/pages/property/my-tenancies-view/my-tenancies-view.component';
import {
  PropertyInvitationVerificationComponent,
} from './components/pages/property/token/property-invitation-verification/property-invitation-verification.component';
import {
  ExpenseCreateComponent,
} from './components/pages/expense/expense-create/expense-create.component';
import {
  PropertyManageTenantsInviteComponent,
} from './components/pages/property/property-admin/property-manage-tenants/invite/property-manage-tenants-invite/property-manage-tenants-invite.component';
import {
  ExpenseEditComponent,
} from './components/pages/expense/expense-edit/expense-edit.component';
import {
  PropertyExpenseReportViewComponent,
} from './components/pages/property/property-expense-report-view/property-expense-report-view.component';
import {
  ExpenseDistributionAssignmentCreateComponent,
} from './components/pages/expense/distribution-asssignments/expense-distribution-assignment-create/expense-distribution-assignment-create.component';
import {
  PropertyManageExpenseDistributionAssignmentsComponent,
} from './components/pages/property/property-admin/property-manage-expense-distribution-assignments/property-manage-expense-distribution-assignments.component';
import {
  ExpenseDistributionAssignmentEditComponent,
} from './components/pages/expense/distribution-asssignments/expense-distribution-assignment-edit/expense-distribution-assignment-edit.component';
import {
  LandingPageComponent,
} from './components/pages/landing-page/landing-page.component';

export const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'register/verify/:token',
    component: EmailRegistrationVerificationComponent,
  },
  {path: 'password/reset', component: PasswordResetRequestComponent},
  {path: 'password/reset/confirm', component: PasswordResetConfirmComponent},
  {path: 'error/forbidden', component: ForbiddenComponent},
  {path: 'error/not-found', component: NotFoundComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
  {
    path: 'expense/create/:propertyId',
    canActivate: [AuthGuard],
    component: ExpenseCreateComponent,
  },
  {
    path: 'expense/edit/:expenseId',
    canActivate: [AuthGuard],
    component: ExpenseEditComponent,
  },
  {
    path: 'expense/create/distribution-assignment/:propertyId',
    canActivate: [AuthGuard],
    component: ExpenseDistributionAssignmentCreateComponent,
  },
  {
    // eslint-disable-next-line max-len
    path: 'expense/edit/distribution-assignments/:expenseDistributionAssignmentId/:propertyId',
    canActivate: [AuthGuard],
    component: ExpenseDistributionAssignmentEditComponent,
  },
  {
    path: 'property/create',
    canActivate: [AuthGuard],
    component: PropertyCreateComponent,
  },
  {
    path: 'property/view/:id',
    canActivate: [AuthGuard],
    component: PropertyViewComponent,
  },
  {
    path: 'property/view/:id/expense-report',
    canActivate: [AuthGuard],
    component: PropertyExpenseReportViewComponent,
  },
  {
    path: 'property/my/properties',
    canActivate: [AuthGuard],
    component: MyPropertiesViewComponent,
  },
  {
    path: 'property/my/tenancies',
    canActivate: [AuthGuard],
    component: MyTenanciesViewComponent,
  },
  {
    path: 'property/manage/:id/tenants',
    canActivate: [AuthGuard],
    component: PropertyManageTenantsComponent,
  },
  {
    path: 'property/manage/:id/tenants/invite',
    canActivate: [AuthGuard],
    component: PropertyManageTenantsInviteComponent,
  },
  {
    path: 'property/manage/:id/expenses',
    canActivate: [AuthGuard],
    component: PropertyManageExpensesComponent,
  },
  {
    path: 'property/manage/:id/expense-distribution-assignments',
    canActivate: [AuthGuard],
    component: PropertyManageExpenseDistributionAssignmentsComponent,
  },
  {
    path: 'property/invitation/verify/:token',
    component: PropertyInvitationVerificationComponent,
  },
];
