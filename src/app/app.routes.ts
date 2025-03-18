import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { CardOverviewComponent } from './components/card-overview/card-overview.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CreateLessonComponent } from './components/create-lesson/create-lesson.component';
import { EditLessonComponent } from './components/edit-lesson/edit-lesson.component';

export const routes: Routes = [
    
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // הפניה לעמוד הכניסה
    { path: 'login', component: LoginComponent }, // נתיב לעמוד הכניסה
    { path: 'home', component: HomeComponent }, // נתיב לעמוד הבית
    { path: 'sign-in', component: SignInComponent }, // נתיב לעמוד הבית
    { path: 'register', component: RegisterComponent } ,// נתיב לעמוד הבית
     { path: 'courses', component: CardOverviewComponent },
//   { path: 'course/:id', component: CourseDetailComponent }
    { path: 'course-detail/:id', component: CourseDetailComponent },
    { path:'add-course', component: AddCourseComponent },
    { path:'edit-course/:id', component: EditCourseComponent },
    { path: 'create-leeson/:courseId', component: CreateLessonComponent },
    { path: 'edit-lesson/:courseId/:lessonId', component: EditLessonComponent },
];
