import { Component } from '@angular/core';
import { Location} from '../../interfaces/location';
import { Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  visitLocation() {
    throw new Error('Method not implemented.');
  }
       @Input() location!: Location;
            
}
