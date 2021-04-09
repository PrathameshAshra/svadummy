import { UserService } from 'src/app/shared/services/user.service';
import { localStorageService } from '../../../../shared/services/localstorage.service';
import { TagsModel } from '../../../../shared/model/tag.model';
import { DataTransportObj } from '../../../../shared/model/sva.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { TagsService } from 'src/app/shared/services/tags.service';
import { Subscription } from 'rxjs';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followup-login',
  templateUrl: './followup-login.component.html',
  styleUrls: ['./followup-login.component.scss']
})
export class FollowupLoginComponent implements OnInit {
  formGroup: FormGroup;
  TagsModel: TagsModel = new TagsModel();
  activeSlides: SlidesOutputData = new SlidesOutputData();
  slidesStore: any[] = [];
  hobbieState: any;
  ListOfHobbies = [
    {
    isChecked: false,
    hobbie: 'reading'
  },
    {
    isChecked: false,
    hobbie: 'writing'
  },
    {
    isChecked: false,
    hobbie: 'dance'
  },
    {
    isChecked: false,
    hobbie: 'singing'
  },
    {
    isChecked: false,
    hobbie: 'game'
  },
];
  currentPosition = 0;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 400,
    navText: ['<img src=\'../../../../../assets/svg/DefaultPreviousButton.svg\'>', '<img src=\'../../../../../assets/svg/DefaultNextButton.svg\'>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      }
    },
    nav: true,
  };
  listOfTags: Array<any> = [];
  selectedTags: any;
selectedHobby: any;
  userId = '';
  constructor(
    private fb: FormBuilder,
    private tagsService: TagsService,
    private router: Router,
    private localService: localStorageService,
    private userService: UserService
  ) {
    this.formGroup = this.fb.group({
      gender: [''],
      live: ['', ],
    });
}


  changeCustomDots(): void {
    console.log('something');
  }

  getAllTags(): void{
    // tslint:disable-next-line: deprecation
    this.tagsService.getAllTags().subscribe({
      next: (data: DataTransportObj) => {
        this.listOfTags = data.data;
      }
    });
  }

  // tslint:disable-next-line: typedef

  onHobbie(status: boolean, index: number): void{
    if (status){
      this.ListOfHobbies[index].isChecked = true;
    }else{
      this.ListOfHobbies[index].isChecked = false;

    }
  }
  ngOnInit(): void {
    this.getAllTags();


  }
  onboardingFinish(): void{
    console.log('Update user on this function ');
    const userObj = JSON.parse(this.localService.getUser());
    userObj.gender = this.formGroup.value.gender;
    userObj.family_type = this.formGroup.value.live;
    userObj.hobbies = this.selectedHobby.join();
    userObj.tags = this.selectedTags;

    this.userService.updateUser(userObj, userObj.id).subscribe({
      next: (data: any ) => {
        console.log(data);
        this.router.navigate(['auth']);
      }
    },
    );
  }


}
