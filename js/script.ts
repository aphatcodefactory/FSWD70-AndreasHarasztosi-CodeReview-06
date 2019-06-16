class Place {
  public name:         string;
  public address:      string;
  public zipcode:      number;
  public city:         string;
  public teaserImg:    string;
  protected divId:     string;

  constructor(name, address, zipcode, city, teaserImg, divId) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.teaserImg = teaserImg;
    this.divId = divId;
  }

  public function display(divId) {
    document.getElementById(divId).appendChild(`
      <div class="col-lg-3 col-md-5 col-sm-12 media m-2 p-2" id="${name}">
        <img src="${teaserImg}" class="align-self-start" alt="${name}">
        <div class="media-body">
          <h5 class="mt-0">${name}</h5>
          <p>${address}</p>
          <p>${zipcode}&nbsp;${city}</p>
        </div>
      </div>
      `);
  }
}


class Restaurant extends Place {
  public telNo:     string;
  public type:      string;
  public webaddr:   string;

  constructor(telNo, type, webaddr) {
    this.telNo = telNo;
    this.type = type;
    this.webaddr = webaddr;
  }

  public function display(divId) {
    document.getElementById(divId).appendChild(`
      <div class="col-lg-3 col-md-5 col-sm-12 media m-2 p-2" id="${name}">
        <img src="${teaserImg}" class="align-self-start" alt="${name}">
        <div class="media-body">
          <h5 class="mt-0">${name}</h5>
          <p>${type}</p>
          <p>${telNo}</p>
          <p>${address}</p>
          <p>${zipcode}&nbsp;${city}</p>
          <p>${webaddr}</p>
        </div>
      </div>
      `);
  }
}


class Event extends Place {
  public eventDate: string;
  public eventTime: string;
  public price:     number;

  constructor(eventDate, eventTime, price) {
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;
  }

  public function display(divId) {
    document.getElementById(divId).appendChild(`
      <div class="col-lg-3 col-md-5 col-sm-12 media m-2 p-2" id="${name}">
        <img src="${teaserImg}" class="align-self-start" alt="${name}">
        <div class="media-body">
          <h5 class="mt-0">${name}</h5>
          <p>Start: ${eventDate}&nbsp;${eventTime}</p>
          <p>${address}</p>
          <p>${zipcode}&nbsp;${city}</p>
          <p>${price}</p>
        </div>
      </div>
      `);
  }
}


$(document).ready(function() {

  var charlesChurch = new Place('Karlskirche', 'Karlsplatz 1', 1010, 'Wien', '../img/karslkirche.jpg', 'places'),
      zoo = new Place('Wiener-Zoo', 'Maxingstraße 13b', 1030, 'Wien', '../img/zoo.jpg', 'places'),
      lemmonLeaf = new Restaurant('Lemon-Leaf', 'Kettenbrückengasse 19', 1050, 'Wien', '../img/lemmonleaf.png',
                  'restaurants', '+43(1)5812308', 'Thai restaurant', 'www.lemonleaf.at'),
      sixta = new Restaurant('SIXTA', 'Schönbrunner Straße 21', 1050, 'Wien', '../img/sixta.png',
                  'restaurants', '+43 1 58 528 56', 'Austrian food', 'http://www.sixta-restaurant.at/index.htm'),
      kristofferson = new Event('Kris-Kristofferson', 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 1150, 'Wien', '../img/kristofferson.jpg',
                  'events', 'Fr., 15.11.2019', '20:00', 58.50),
      lennyKravitz = new Event('Lenny-Kravitz', 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 1150, 'Wien', '../img/kravitz.jpg',
                  'events', 'Sat, 09.12.2019', '19:30', 47.80);

  var items = [charlesChurch, zoo, lemmonLeaf, sixta, kristofferson, lennyKravitz];

  for(i=0; i < items.length; i++){
    items[i].display(items[i].divId);
    //console.log(items[i]);
  }

}); // end document-ready
