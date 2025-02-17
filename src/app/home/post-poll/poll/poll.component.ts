import { Component } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent {
  isDropdownOpen = false;
  selectedOption: string = '';
  isPollDetailsModalOpen = false;
  goodVotes: number = 2;
  fairVotes: number = 3;
  poorVotes: number = 2;

  users = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'User 1',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'User 2',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
      name: 'User 3',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
      name: 'User 4',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      name: 'User 5',
    },
  ];

  // Static sample data for modal content
  goodVoters = [
    {
      name: 'John Doe',
      role: 'UX Designer',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: '15m',
    },
    {
      name: 'Calvin Harris',
      role: 'Graphic Designer',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      time: '1d',
    },
  ];
  fairVoters = [
    {
      name: 'Gregory David',
      role: 'Sales Executive',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      time: '1d',
    },
    {
      name: 'Savannah John',
      role: 'Product Manager',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      time: '1d',
    },
    {
      name: 'Shane Nguyen',
      role: 'Software Engineer',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      time: '1d',
    },
  ];
  poorVoters = [
    {
      name: 'Simran Kaur',
      role: 'Operations Manager',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      time: '50m',
    },
    {
      name: 'Lily Buffay',
      role: 'Data Analyst',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      time: '1d',
    },
  ];

  // Modal Control
  openPollDetailsModal() {
    this.isPollDetailsModalOpen = true;
  }

  closePollDetailsModal() {
    this.isPollDetailsModalOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  get totalVotes(): number {
    return this.goodVotes + this.fairVotes + this.poorVotes;
  }
  onOptionSelect(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedOption = inputElement.value;
  }
}
