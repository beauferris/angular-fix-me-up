import { ChangeDetectionStrategy, Component, } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';
// import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccountDetailsComponent {
  
  constructor(private accountService: AccountService, private route : ActivatedRoute) {}

  currentAccount : Account[] = [];
  
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {

    // filter accounts based on the id in the url
    this.accountService.getAccounts().subscribe((accounts) => {
      this.currentAccount = accounts.filter(account => account.id === 
        this.route.snapshot.paramMap.get("id"));
    });    
  
  }
 
 
}
