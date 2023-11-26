import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { OpenAI } from 'openai';
import { BusrailComponent } from './busrail/busrail.component';
import { CarComponent } from './car/car.component';
import { FlightsComponent } from './flights/flights.component';
import { HouseComponent } from './house/house.component';
import { MotorbikeComponent } from './motorbike/motorbike.component';
import { ResultsComponent } from './results/results.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    WelcomeComponent,
    BusrailComponent,
    CarComponent,
    FlightsComponent,
    HouseComponent,
    MotorbikeComponent,
    ResultsComponent,
    SecondaryComponent,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  _formBuilder = inject(FormBuilder);
  key = `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`;

  result = signal({} as any);

  openAi = new OpenAI({
    apiKey: this.key,
    dangerouslyAllowBrowser: true,
  });

  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
}
