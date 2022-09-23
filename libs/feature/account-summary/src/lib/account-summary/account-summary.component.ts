/** 
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  accounts$: Observable<Account[]> = of([]);
  constructor(private accountService: AccountService) {}
  accounts: Account[] = [];
  accountsFilter = '';

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
  
  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }
}
