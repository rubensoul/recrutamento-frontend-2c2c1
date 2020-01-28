import { Component } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { ClanService } from 'src/app/shared/services/clan.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  content: Observable<any[]>;
  private searchTerms: Subject<string> = new Subject<string>();


  constructor(
    private clanService: ClanService
  ) {}

  // Requisição de todos os valores
  searchRequest(term: any) {
    let val = term.target.value

    if (val && val.trim() !== '') {
      this.searchTerms.next(term.target.value);
    } else {
      this.searchTerms.next('');
    }

    this.searchTerms.pipe(
      debounceTime(500), // tempo de pausa entre os eventos, assim não faz requisição enquanto o user ainda está escrevendo
      distinctUntilChanged(), // ignora se o próximo termo de pesquisa for o mesmo que o anterior
      switchMap(
        term =>
          term
            ? // retorna os valores do observable
            this.clanService.getClan(term)
            : // caso retorne vazio
            of<any>([])
      ),
      catchError(error => {
        // TODO: real error handling
        return of<any>([]);
      })
    ).subscribe(res => {
      this.content = res;
    });

  }  

}
