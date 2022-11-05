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
import { AsynchronousComponentComponent } from './asynchronous-component/asynchronous-component.component';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { StubServiceComponent } from './stub-service/stub-service.component';
import { StubComponent } from './stub/stub.component';
import { HomeComponent } from './home/home.component';
import { SpyonComponent } from './spyon/spyon.component';
import { FixProblemsComponent } from './fix-problems/fix-problems.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatDialogModule} from '@angular/material/dialog';
import { HttpPipe } from './http.pipe';
import { TestingPipesDirectiveRouteComponent } from './testing-pipes-directive-route/testing-pipes-directive-route.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TestingDirectiveComponent } from './testing-directive/testing-directive.component';
import { HoverFocusDirective } from './hover-focus.directive';
import { FormLoginComponent } from './form-login/form-login.component';
import { TestingRouteComponent } from './testing-route/testing-route.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { IntegrationUnitTestingComponent } from './integration-unit-testing/integration-unit-testing.component';

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
    AsynchronousComponentComponent,
    MatchersJasmineComponent,
    MockServiceComponent,
    StubServiceComponent,
    StubComponent,
    HomeComponent,
    SpyonComponent,
    FixProblemsComponent,
    HttpPipe,
    TestingPipesDirectiveRouteComponent,
    DashboardComponent,
    LoginComponent,
    TestingDirectiveComponent,
    HoverFocusDirective,
    FormLoginComponent,
    TestingRouteComponent,
    ExtratoComponent,
    IntegrationUnitTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
