import { Injectable } from '@angular/core';

import { DropDownQuestion } from './question-dropdown';
import { TextBoxQuestion } from './question-textbox';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionService {
    getQuestions() {
        let questions: QuestionBase<any>[] = [

            new DropDownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                  {key: 'solid',  value: 'Solid'},
                  {key: 'great',  value: 'Great'},
                  {key: 'good',   value: 'Good'},
                  {key: 'unproven', value: 'Unproven'}
                ],
                order: 3
              }),
              new TextBoxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
              }),
              new TextBoxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
              })
        ];

        return questions.sort((a, b) => a.order  - b.order);
    }
}
