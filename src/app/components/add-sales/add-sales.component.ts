import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';

/**
 * Component to add new product
 */
@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit {
  /**
   * Reference for product form
   */
  productForm: FormGroup;
  /**
   * Minimum date for start sales
   */
  minDate: Date = new Date();
  /**
   * Reference for displaying dialog
   */
  displayDialog: boolean = false;
  constructor(private fb: FormBuilder, private salesService: SalesService) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(50)]],
      productID: [null, [Validators.required, Validators.maxLength(13)]],
      productManager: ['', [Validators.maxLength(30)]],
      startDate: [new Date(), [Validators.required, Validators.maxLength(13)]]
    })
  }

  ngOnInit(): void {
  }
  /**
   * Add new product handler
   */
  addProduct() {
    this.displayDialog = true;
    this.clear()
  }
  /**
   * Method to clear form
   */
  clear() {
    this.productForm.patchValue({
      productID: null,
      productName: '',
      productManager: '',
      startDate: new Date()
    })
  }
}
