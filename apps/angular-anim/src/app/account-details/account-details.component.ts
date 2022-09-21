import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccountDetailsComponent {
  accounts$: Observable<Account[]> = of([]);
  constructor(private accountService: AccountService, private route : ActivatedRoute) {}
  accounts: Account[] = [];
  accountsFilter = '';
  currentAccount : Account[] = [];
  



  ngOnInit(): void {

    this.currentAccount = this.accounts.filter(account => account.id === 
      "1234");
      
    console.log(this.accounts)

    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });

    this.currentAccount = this.accounts.filter(account => account.id === 
      this.route.snapshot.paramMap.get("id"));
      
  }
 
  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }
}
