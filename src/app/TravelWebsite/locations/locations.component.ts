import { Component } from '@angular/core';
import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  Locations: Location[] = [
    {
      name: "Paris",
      description: 'Paris is the capital and largest city of France. It is located in the north-central part of the country, along the Seine River. Paris is known for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, as well as its vibrant culture, cuisine, and fashion. The city is also famous for its art, music, and literature, and has been a center of intellectual and artistic life for centuries.',
      imageURL: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900'
    },
    {
      name: "Rome",
      description: 'Rome is the capital and largest city of Italy. It is located in the central-western part of the country, along the banks of the Tiber River. Rome is known for its rich history, architecture, and cultural heritage, with ancient landmarks such as the Colosseum, the Pantheon, and the Roman Forum. The city is also famous for its art, cuisine, and fashion, and is home to numerous museums, galleries, and churches. Rome has played a significant role in shaping the Western world and continues to be a major center of business, politics, and culture.',
      imageURL: 'https://media.descopera.ro/3Etk3NByZEveCqExrO1VuQF406w=/1280x720/smart/filters:contrast(5):format(jpeg):quality(90)/https://www.descopera.ro/wp-content/uploads/2016/03/15091367/4-roma.jpg'
    },
    {
      name: "London",
      description: 'London is the capital and largest city of England and the United Kingdom. It is located in southeastern England, along the banks of the River Thames. London is known for its rich history, architecture, and cultural heritage, with landmarks such as the Tower of London, Buckingham Palace, and the Houses of Parliament. The city is also famous for its museums, galleries, and theaters, and is a major center for business, finance, and education. London is a diverse and cosmopolitan city, with a vibrant arts and music scene, as well as a wide range of restaurants and shops.',
      imageURL: 'https://www.london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz'
    }
    
  ]
}
