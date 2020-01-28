import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  constructor(
    private requestService: RequestService,
  ) { }

  
  // Get search
  getClan(name?: string, score?: any): Observable<any> {
    let params = {
      'name': name ? name : '',
      // 'score': score ? score : '',
    }
    return this.requestService.get(`index.php`, params);
  }

  getClanById(clan?: string): Observable<any> {
    let params = {
      'clan': clan ? clan : '',
      // 'score': score ? score : '',
    }
    return this.requestService.get(`clan.php`, params);
  }
}
