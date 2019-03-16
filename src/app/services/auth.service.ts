import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  private checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  public async login(userName: string): Promise<boolean> {
    await this.storage.set(TOKEN_KEY, `Bearer ${userName}`);
    switch (userName) {
      case 'ewa':
      case 'kuba':
        this.authenticationState.next(true);
        return true;
      default:
        return false;
    }
  }

  public async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  public get isAuthenticated() {
    return this.authenticationState.value;
  }
}
