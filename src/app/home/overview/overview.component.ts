import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  newPost = false;
  newPoll = false;

  createPost() {
    this.newPost = !this.newPost;
  }

  createPoll() {
    this.newPoll = !this.newPoll;
  }

  // Banner card
  banners: string[] = [];
  currentIndex: number = 0;
  showDeleteModal: boolean = false;
  deleteIndex: number = -1;
  private autoplayInterval: any;
  autoplayDelay: number = 5000; // 5 seconds delay
  isTransitioning: boolean = false;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  private startAutoplay() {
    if (this.banners.length > 1) {
      this.autoplayInterval = setInterval(() => {
        this.navigate('next');
      }, this.autoplayDelay);
    }
  }

  private stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.banners.push(e.target.result);
        event.target.value = '';
        // Start autoplay if this is the second image
        if (this.banners.length === 2) {
          this.startAutoplay();
        }
      };
      reader.readAsDataURL(file);
    }
  }

  navigate(direction: 'prev' | 'next') {
    if (this.isTransitioning) return;

    this.isTransitioning = true;

    if (direction === 'prev') {
      this.currentIndex =
        this.currentIndex > 0 ? this.currentIndex - 1 : this.banners.length - 1;
    } else {
      this.currentIndex =
        this.currentIndex < this.banners.length - 1 ? this.currentIndex + 1 : 0;
    }

    // Reset transition state after animation completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500); // Match this with CSS transition duration

    this.resetAutoplay();
  }

  setCurrentBanner(index: number) {
    if (this.isTransitioning || this.currentIndex === index) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);

    this.resetAutoplay();
  }

  confirmDelete(index: number) {
    this.stopAutoplay();
    this.deleteIndex = index;
    this.showDeleteModal = true;
  }

  deleteBanner() {
    if (this.deleteIndex > -1) {
      this.banners.splice(this.deleteIndex, 1);
      if (this.currentIndex >= this.banners.length) {
        this.currentIndex = Math.max(0, this.banners.length - 1);
      }
      // Restart autoplay if we still have multiple images
      if (this.banners.length > 1) {
        this.startAutoplay();
      }
    }
    this.showDeleteModal = false;
    this.deleteIndex = -1;
  }

  closeModal() {
    this.showDeleteModal = false;
    this.deleteIndex = -1;
    // Restart autoplay if we have multiple images
    if (this.banners.length > 1) {
      this.startAutoplay();
    }
  }
}
