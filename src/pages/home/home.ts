import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items: any;
  information: any[];
 
  constructor(public navCtrl: NavController, private http: Http) {
  this.initializeItems();
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
     
   this.http.get('assets/information.json').map(res => res.json()).subscribe(data => {
        this.items = data;
        console.log(this.items);

    });

     }

initializeItems(){
    this.items= [
        {
            "name": "Pizza1",
            "children": [
                {
                    "name": "Pizza1",
                    "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",
                    "price": "$25"
                },
                {
                    "name": "SAMBA",
                    "information": "Pork chop meatloaf rump, meatball shoulder turducken alcatra doner sausage capicola pork strip steak turkey cupim leberkas.",
                    "price": "$19.99"
                }
            ]
        },

              {
            "name": "Pizza2",
            "children": [
                {
                    "name": "Pizza2",
                    "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",
                    "price": "$25"
                },
                {
                    "name": "Pizza2",
                    "information": "Pork chop meatloaf rump, meatball shoulder turducken alcatra doner sausage capicola pork strip steak turkey cupim leberkas.",
                    "price": "$19.99"
                }
            ]
        }
        ];
  }

getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    }
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
}

