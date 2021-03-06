import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AllTestsComponent } from './pages/all-tests/all-tests.component';
import { AllActivationsComponent } from './pages/all-activations/all-activations.component';
import { AllRespondentsComponent } from './pages/all-respondents/all-respondents.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationButtonsComponent } from './shared/components/header/navigation-buttons/navigation-buttons.component';
import { ToolsComponent } from './shared/components/header/tools/tools.component';
import { CreateNewBlockComponent } from './pages/all-tests/create-new-block/create-new-block.component';
import { TestItemComponent } from './pages/all-tests/test-item/test-item.component';
import { CreateNewTestComponent } from './pages/create-new-test/create-new-test.component';
import { CreateNewTestUploaderComponent } from './pages/create-new-test/create-new-test-uploader/create-new-test-uploader.component';
import { RespondentItemComponent } from './pages/all-respondents/respondent-item/respondent-item.component';
import { CreateNewComponent } from './shared/components/create-new/create-new.component';
import { ActivationItemComponent } from './pages/all-activations/activation-item/activation-item.component';
import { RespondentService} from './shared/services/respondent.service';
import { SelectComponent } from './shared/components/select/select.component';
import { QuestionFormComponent } from './pages/create-new-test/question-list/question-form.component';
import { QuestionComponent } from './pages/create-new-test/question-list/question/question.component';
import { FileuploaderComponent } from './pages/create-new-test/question-list/fileuploader/fileuploader.component';
import { TestService } from './shared/services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ListPageComponent } from './pages/layout/list-page/list-page.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';


@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    AllActivationsComponent,
    AllRespondentsComponent,
    HeaderComponent,
    NavigationButtonsComponent,
    ToolsComponent,
    CreateNewBlockComponent,
    TestItemComponent,
    CreateNewTestComponent,
    CreateNewTestUploaderComponent,
    RespondentItemComponent,
    TestItemComponent,
    CreateNewComponent,
    ActivationItemComponent,
    CreateNewComponent,
    SelectComponent,
    FileuploaderComponent,
    QuestionFormComponent,
    QuestionComponent,
    ModalComponent,
    ListPageComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RespondentService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
