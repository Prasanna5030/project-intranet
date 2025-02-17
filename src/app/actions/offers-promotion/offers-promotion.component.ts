import { Component } from '@angular/core';



export interface OfferLetter{
  employeeName: string,
  offerStatus: string,
  manager:string ,
  managerId: number,
  department:string,
  dueDate: string,
  file: string
}

const ELEMENT_DATA : OfferLetter[] = [
  {employeeName: 'John Doe', offerStatus: 'Pending', manager: 'Kevin ', managerId: 109, department: 'Sales', dueDate: 'Jun 20, 2024'   , file:'John Doe_offer-letter.pdf' },
  {employeeName: 'Mike henry', offerStatus: 'Approved', manager: 'peter ', managerId: 201, department: 'IT', dueDate: 'Mar 20, 2024'   , file:'Mike Henry_offer-letter.pdf' },
  {employeeName: 'John cena', offerStatus: 'Pending', manager: 'smith ', managerId: 322, department: 'Finance', dueDate: 'Apr 20, 2024', file:'John Cena_offer_letter.pdf' },
  {employeeName: 'John Doe', offerStatus: 'Pending', manager: 'Kevin ', managerId: 109, department: 'Sales', dueDate: 'Jun 20, 2024'   , file:'John Doe_offer-letter.pdf' },
  {employeeName: 'Mike henry', offerStatus: 'Approved', manager: 'peter ', managerId: 201, department: 'IT', dueDate: 'Mar 20, 2024'   , file:'Mike Henry_offer-letter.pdf' },
  {employeeName: 'John cena', offerStatus: 'Pending', manager: 'smith ', managerId: 322, department: 'Finance', dueDate: 'Apr 20, 2024', file:'John Cena_offer_letter.pdf' },
  {employeeName: 'John Doe', offerStatus: 'Pending', manager: 'Kevin ', managerId: 109, department: 'Sales', dueDate: 'Jun 20, 2024'   , file:'John Doe_offer-letter.pdf' },
  {employeeName: 'Mike henry', offerStatus: 'Approved', manager: 'peter ', managerId: 201, department: 'IT', dueDate: 'Mar 20, 2024'   , file:'Mike Henry_offer-letter.pdf' },
  {employeeName: 'John cena', offerStatus: 'Pending', manager: 'smith ', managerId: 322, department: 'Finance', dueDate: 'Apr 20, 2024', file:'John Cena_offer_letter.pdf' },
  {employeeName: 'John Doe', offerStatus: 'Pending', manager: 'Kevin ', managerId: 109, department: 'Sales', dueDate: 'Jun 20, 2024'   , file:'John Doe_offer-letter.pdf' },
  {employeeName: 'Mike henry', offerStatus: 'Approved', manager: 'peter ', managerId: 201, department: 'IT', dueDate: 'Mar 20, 2024'   , file:'Mike Henry_offer-letter.pdf' },
  {employeeName: 'John cena', offerStatus: 'Pending', manager: 'smith ', managerId: 322, department: 'Finance', dueDate: 'Apr 20, 2024', file:'John Cena_offer_letter.pdf' },
  {employeeName: 'John Doe', offerStatus: 'Pending', manager: 'Kevin ', managerId: 109, department: 'Sales', dueDate: 'Jun 20, 2024'   , file:'John Doe_offer-letter.pdf' },
  {employeeName: 'Mike henry', offerStatus: 'Approved', manager: 'peter ', managerId: 201, department: 'IT', dueDate: 'Mar 20, 2024'   , file:'Mike Henry_offer-letter.pdf' },
  {employeeName: 'John cena', offerStatus: 'Pending', manager: 'smith ', managerId: 322, department: 'Finance', dueDate: 'Apr 20, 2024', file:'John Cena_offer_letter.pdf' },
   

];
@Component({
  selector: 'app-offers-promotion',
  templateUrl: './offers-promotion.component.html',
  styleUrl: './offers-promotion.component.scss'
})
export class OffersPromotionComponent {
message: any;
activeIndex: number | null = null;
constructor(){

}

offersData=ELEMENT_DATA;
selectedOffer:any;

selectOffer(offer : OfferLetter){
  this.selectedOffer = offer;
}

clearSelectedOffer(){
  this.selectedOffer = null;
}

searchTerm: any;
filteredData:any= this.offersData;
applyFilter() {
   const filterValue= this.searchTerm?.trim().toLowerCase();
   this.filteredData = this.offersData.filter(offer => offer.employeeName.toLowerCase().includes(filterValue) ||
              offer.offerStatus.toLowerCase().includes(filterValue))
}


setActiveIndex(index: number){
  this.activeIndex = index;
}

}
