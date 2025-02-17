import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  isDropdownOpen = false;
  isLikesModalOpen = false;
  isAcknowledgementsModalOpen = false;
  isCommentInputOpen = false;
  commentText = '';

  likes = [
    {
      name: 'Gregory David',
      role: 'Sales Executive',
      time: '34s',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      name: 'Anne Hathaway',
      role: 'UI Designer',
      time: '1m',
      avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      name: 'Kianna Kenter',
      role: 'Visual Designer',
      time: '3m',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      name: 'George Paul',
      role: 'Sales Executive',
      time: '15m',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCommentInput() {
    this.isCommentInputOpen = !this.isCommentInputOpen;
  }

  submitComment() {
    // Add logic to submit the comment
    console.log('Comment submitted:', this.commentText);
    this.commentText = '';
  }

  openLikesModal() {
    this.isLikesModalOpen = true;
  }

  closeLikesModal() {
    this.isLikesModalOpen = false;
  }

  openAcknowledgementsModal() {
    console.log('acknowledgement');

    this.isAcknowledgementsModalOpen = true;
  }
  closeAcknowledgementsModal() {
    console.log('close acknowledgement');

    this.isAcknowledgementsModalOpen = false;
  }
}
