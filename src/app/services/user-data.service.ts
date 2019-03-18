import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private splitPaneState: any = 'lg';

  public getSplitPane() {
    return this.splitPaneState;
  }

  public setSplitPane(state: boolean) {
    this.splitPaneState = state ? 'lg' : false;
  }
}
