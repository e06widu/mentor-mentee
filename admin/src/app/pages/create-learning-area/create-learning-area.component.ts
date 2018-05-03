import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-create-learning-area',
  templateUrl: './create-learning-area.component.html',
  styleUrls: ['./create-learning-area.component.scss']
})
export class CreateLearningAreaComponent implements OnInit {

  learning: any = {
    title: '',
    noOfMentos: 0,
    category: 'EXISTING',
    categoryExisting: '',
    categoryNew: '',
    domain: '',
    duration: '',
    mentor: 'CHOOSE',
    remindersManual: '',
    feedbackManual: '',
    mailsFrequency: '',
    feedbackFrequency: '',
    reminder: 'MANUAL',
    feedback: 'MANUAL',
    selectedFeedback: null,
    feedbacks: [],
    selectedReminder: null,
    reminders: [],
    mentorDomain: 'Mentors Domain',
    mentorUpload: '',
    mentors: [],
  };

  learningError: any = {
    title: false,
    categoryExisting: false,
    categoryNew: false,
    mentorFrequency: false,
    domain: false,
    remindersManual: false,
    feedbackManual: false,
    mailsFrequency: false,
    feedbackFrequency: false,
    duration: false,
    reminders: false,
    feedbacks: false,
    selectedFeedback: false,
    selectedReminder: false,
    mentorDomain: false,
    mentors: false,
    noOfMentos: false,
  };

  masterData = {
    mentors: [],
    categories: [],
    mentorDomains: [],
    frequency: []
  };

  showPreviewPopup = false;
  previewContent: any = null;
  previewTitle: any = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData('create-learning').then((data: any) => {
      this.masterData = data;
    });
  }

  /**
   * Save learning areas
   */
  onSave() {
    let error = false;
    this.learningError = {
      title: false,
      categoryExisting: false,
      categoryNew: false,
      mentorFrequency: false,
      domain: false,
      remindersManual: false,
      feedbackManual: false,
      mailsFrequency: false,
      feedbackFrequency: false,
      duration: false,
      reminders: false,
      feedbacks: false,
      selectedFeedback: false,
      selectedReminder: false,
      mentorDomain: false,
      mentors: false,
      noOfMentos: false,
    };
    if (this.learning.title === '') {
      this.learningError.title = true;
      error = true;
    }
    if (this.learning.domain === '') {
      this.learningError.domain = true;
      error = true;
    }
    if (this.learning.duration === '') {
      this.learningError.duration = true;
      error = true;
    }
    if (this.learning.feedbackFrequency === '') {
      this.learningError.feedbackFrequency = true;
      error = true;
    }
    if (this.learning.mailsFrequency === '') {
      this.learningError.mailsFrequency = true;
      error = true;
    }
    if (this.learning.reminder === 'MANUAL' && this.learning.remindersManual === '') {
      this.learningError.remindersManual = true;
      error = true;
    }
    if (this.learning.reminder === 'TEMPLATE' && this.learning.reminders.length === 0) {
      this.learningError.reminders = true;
      error = true;
    }
    if (this.learning.reminder === 'TEMPLATE' && this.learning.selectedReminder === null) {
      this.learningError.selectedReminder = true;
      error = true;
    }
    if (this.learning.feedback === 'MANUAL' && this.learning.feedbackManual === '') {
      this.learningError.feedbackManual = true;
      error = true;
    }
    if (this.learning.feedback === 'MANUAL' && this.learning.feedbackManual === '') {
      this.learningError.feedbackManual = true;
      error = true;
    }
    if (this.learning.feedback === 'TEMPLATE' && this.learning.feedbacks.length === 0) {
      this.learningError.feedbacks = true;
      error = true;
    }
    if (this.learning.feedback === 'TEMPLATE' && this.learning.selectedFeedback === null) {
      this.learningError.selectedFeedback = true;
      error = true;
    }
    if (this.learning.category === 'NEW' && this.learning.categoryNew === '') {
      this.learningError.categoryNew = true;
      error = true;
    }
    if (this.learning.category === 'EXISTING' && this.learning.categoryExisting === '') {
      this.learningError.categoryExisting = true;
      error = true;
    }
    if (this.learning.mentor === 'UPLOAD' && this.learning.mentorUpload === '') {
      this.learningError.mentorUpload = true;
      error = true;
    }
    if (this.learning.mentor === 'CHOOSE' && this.learning.noOfMentos === 0) {
      this.learningError.noOfMentos = true;
      error = true;
    }
    if (this.learning.mentor === 'CHOOSE' && this.learning.mentorDomain === 'Mentors Domain') {
      this.learningError.mentorDomain = true;
      error = true;
    }
    if (!error) {
      console.log(this.learning);
    }
  }

  /**
   * Show preview
   * @param type - type [reminder/ feedback]
   * @param name - Selected template name
   */
  showPreview(type, name) {
    this.dataService.getData(type + '-template').then((data: any) => {
      this.previewContent = data.template;
      this.showPreviewPopup = true;
      this.previewTitle = name;
    });

  }

  /**
   * Close preview modal
   */
  closePreview() {
    this.showPreviewPopup = false;
    this.previewContent = null;
  }

  /**
   * Upload feedback template
   * @param file - file info
   */
  uploadFeedback(file) {
    this.learningError.feedbacks = false;
    this.learning.feedbacks.push(file);
  }

  /**
   * Upload reminder template
   * @param file
   */
  uploadReminders(file) {
    this.learningError.reminders = false;
    this.learning.reminders.push(file);
  }

  /**
   * Upload mentor CSV
   * @param file
   */
  uploadMentor(file) {
    this.learningError.mentorUpload = false;
    this.learning.mentorUpload = file;
  }

  /**
   * Drop down on select event
   * @param event
   * @param field
   */
  onSelect(event, field) {
    this.learning[field] = event;
  }

  /**
   * Select mentor
   * @param event
   */
  onMentorSelect(event) {
    this.learning.noOfMentos = event;
  }

}
