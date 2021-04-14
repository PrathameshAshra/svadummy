import { LifeService } from './../../../shared/services/life.service';
import { GenderService } from './../../../shared/services/gender.service';
import { HobbyService } from './../../../shared/services/hobby.service';
import { LocalService } from './../../../shared/services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DataTransportObj } from 'src/app/shared/models/sva.model';
import { TagsModel } from 'src/app/shared/models/tag.model';
import { TagsService } from 'src/app/shared/services/tags.service';
import { UserService } from 'src/app/shared/services/user.service';
import { SvaCheckboxListModel, SvaCheckboxModel } from 'src/app/shared/components/sva-list-checkbox/sva-list-checkbox.model';
import { MatListOptionCheckboxPosition } from '@angular/material/list';
import { CarouselConfig } from 'src/app/config/carousel.config';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  positioning: MatListOptionCheckboxPosition = 'before';
  // ListOfGenders = ['Male', 'Female'];
  TagsModel: TagsModel = new TagsModel();
  activeSlides: SlidesOutputData = new SlidesOutputData();
  slidesStore: any[] = [];
  hobbieState: any;
  ListOfHobbies: Array<SvaCheckboxModel> = [];
  currentPosition = 0;
customOptions: OwlOptions = CarouselConfig;

  listOfTags: Array<any> = [];
  selectedTags: any;
  selectedHobby: any;
  userId = '';
  listOfGender = [];
  lifeOfLife: any;
  formGroup: any;
  constructor(
    private fb: FormBuilder,
    private tagsService: TagsService,
    private router: Router,
    private localService: LocalService,
    private userService: UserService,
    private hobbyService: HobbyService,
    private genderService: GenderService,
    private lifeService: LifeService,
  ) {

}

getAllHobby = () => {
  // tslint:disable-next-line: deprecation
  this.hobbyService.getDummyHobby().subscribe(data => {
    data.map((x: any) => {
      x.isChecked = false;
      x.data = x.name;
    });
    this.ListOfHobbies = data;
    console.log(data);
  });
}
getAllGender = () => {
  this.genderService.getDummyGender().subscribe(data => {
    data.map((x: any) => {
      x.isChecked = false;
      x.data = x.name;
    });
    this.listOfGender = data;
    console.log(data);
  });
}

rajat(): void{
this.genderService.getDummyGender().subscribe((data: any) => {
  console.log(data);
});
}
getAllLife = () => {
  // tslint:disable-next-line: deprecation
  this.lifeService.getDummyLife().subscribe(data => {
    this.lifeOfLife = data;

    data.map((x: any) => {
      x.isChecked = false;
      x.data = x.name;
    });
    console.log(data);
  });
}
getAllTags = () => {
    // tslint:disable-next-line: deprecation
    this.tagsService.getAllDummyTags().subscribe({
      next: (data: any) => {
        data.map((x: any) => {
          x.isChecked = false;
          x.data = x.name;
        });
        this.listOfTags = data;
      }
    });
  }

  ngOnInit(): void {
    this.getAllTags();
    this.getAllHobby();
    this.getAllGender();
    this.getAllLife();
}
selectedGender(ev: any): void{
  console.log(ev);
}

selectedLive(ev: any): void{
  console.log(ev);
}
  onboardingFinish(): void{
    console.log('Update user on this function ');
    const userObj = JSON.parse(this.localService.getUser());
    userObj.gender = this.formGroup.value.gender;
    userObj.family_type = this.formGroup.value.live;
    userObj.hobbies = this.selectedHobby.join();
    userObj.tags = this.selectedTags;

    // tslint:disable-next-line: deprecation
    this.userService.updateUser(userObj, userObj.id).subscribe({
      next: (data: any ) => {
        console.log(data);
        this.router.navigate(['app']);
      }
    },
    );
  }


}


function selectedLive(ev: any, any: any) {
  throw new Error('Function not implemented.');
}

