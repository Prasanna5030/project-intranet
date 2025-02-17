import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



export const reviewQuestions = [
  {id: 1 , question: 'How would you rate your overall performance ?'},
  {id: 2 , question: 'How would you rate your communication skills ?'},
  {id: 3 , question: 'How would you rate your problem-solving skills ?'},
  {id: 4 , question: 'How would you rate your time management skills'},
  {id: 5 , question: 'How would you rate your teamwork skills ?'},
  {id: 6 , question: 'How would you rate your leadership skills'},
  {id: 7 , question: 'How would you rate your adaptability ?'},
  {id: 8 , question: 'How would you rate your ability to work under pressure ?'},
  {id: 9 , question: 'How would you rate your ability to meet deadlines ?'},
  {id: 10 , question: 'How would you rate your ability to work with others ?'},
  {id: 11 , question: 'How would you rate your teamwork skills ?'},
  {id: 12 , question: 'How would you rate your leadership skills ?'},
  {id: 13 , question: 'How would you rate your adaptability ? '},
  {id: 14 , question: 'How would you rate your ability to work under pressure ?'},
  {id: 15, question: 'How would you rate your ability to meet deadlines ?'},
  {id: 16 , question: 'How would you rate your ability to work with others ?'},

]
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
//  encapsulation: ViewEncapsulation.None,
})


export class CreateFormComponent implements OnInit{

  reviews:any= reviewQuestions;

  form: FormGroup;

  constructor( private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [''],
      questions: this.fb.array([])
    });
  }

  
  ngOnInit(): void {
    this.addQuestion();

  }

  get questions() {
    return this.form.get('questions') as FormArray;
  }

  addQuestion() {
    this.questions.push(this.fb.group({
      text: [''],
      type: [''], // Default to short answer
      shortAnswer:[''],
      options: this.fb.array([])
    }));
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  getOptions(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('options') as FormArray;
  }

  addOption(questionIndex: number) {
    this.getOptions(questionIndex).push(this.fb.group({ value: [''] }));
  }

  removeOption(questionIndex: number, optionIndex: number) {
    this.getOptions(questionIndex).removeAt(optionIndex);
  }

  saveForm(reviewForm : FormGroup<any>) {
    console.log(this.form.value);
  }

  goBack() {
    this.router.navigate(['/action-center/performance-reviews']);
   }

   onReset(reviewForm : FormGroup<any>) {
    reviewForm.reset();
    this.router.navigate(['/action-center/performance-reviews']);
  }
    
   
}
  
