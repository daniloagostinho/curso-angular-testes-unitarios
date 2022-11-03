import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { FormsModule } from '@angular/forms';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { FixtureDetectChangeComponent } from './fixture-detect-change/fixture-detect-change.component';
import { HandleEventComponent } from './handle-event/handle-event.component';
import { FillFormComponent } from './fill-form/fill-form.component';

import {ReactiveFormsModule} from '@angular/forms';
import { InputOutputComponent } from './input-output/input-output.component';
import { AutoDetectChangeComponent } from './auto-detect-change/auto-detect-change.component';
import { ConceptsTestsComponent } from './concepts-tests/concepts-tests.component';
import { DebuggerTestsComponent } from './debugger-tests/debugger-tests.component';
import { AsynchronousComponentComponent } from './asynchronous-component/asynchronous-component.component'

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    TestingComponentComponent,
    FixtureDetectChangeComponent,
    HandleEventComponent,
    FillFormComponent,
    InputOutputComponent,
    AutoDetectChangeComponent,
    ConceptsTestsComponent,
    DebuggerTestsComponent,
    AsynchronousComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
