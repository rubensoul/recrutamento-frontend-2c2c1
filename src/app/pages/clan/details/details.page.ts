import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClanService } from 'src/app/shared/services/clan.service';
import { AlertService } from 'src/app/shared/auth/alert.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  clan: any;
  clanId: any;
  badge: any;
  members: any;
  buttonText = "Voltar"


  constructor(
    private route: ActivatedRoute,
    private service: ClanService,
    private alertService: AlertService,
    private loading: LoadingService
  ) {
    this.clanId = this.route.snapshot.paramMap.get('clan');
   }

  ngOnInit() {
    this.getClanSingle();
  }

  getClanSingle(){
    this.loading.present();
    this.service.getClanById(this.clanId).subscribe(res =>{
      this.clan = res;
      this.badge = res.badge;
      this.members = res.members;
      this.loading.dismiss();
    },
    err => {
      this.alertService.presentToast(err);
      this.loading.dismiss();
    }
    )
  }


  	private fromObjectToArray(object: any, specificProperty?: string): Array<any> {
		let objectProps = Object.keys(object)
		let objectIntoArray = []
		for (let item of objectProps) {
			if (specificProperty) {
				objectIntoArray.push(object[item][specificProperty])
			} else {
				objectIntoArray.push(object[item])
			}
		}
		return objectIntoArray
	}
}
