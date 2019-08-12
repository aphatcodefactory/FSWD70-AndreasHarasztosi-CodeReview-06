class Place {
  public name:         string;
  public address:      string;
  public zipcode:      number;
  public city:         string;
  public teaserImg:    string;

  constructor(name, address, zipcode, city, teaserImg) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.teaserImg = teaserImg;
  }

  public display() {
    return(`
      <div class="col-lg-6 col-md-6">
        <p class="h2 text-danger">Places</p>
        <p class="h4 text-monospace">${this.name}</p>
        <ul>
          <li class="h6 text-monospace">${this.address}, ${this.zipcode}</li>
          <li class="no-list"><img src="${this.teaserImg}"></li>
        <ul>
      </div>
      `);
  }
}


class Restaurant extends Place {
  public telNo:     string;
  public type:      string;
  public webaddr:   string;

  constructor(name, address, zipcode, city, teaserImg, telNo, type, webaddr) {
    super(name, address, zipcode, city, teaserImg);
    this.telNo = telNo;
    this.type = type;
    this.webaddr = webaddr;
  }

  public display() {
    return(`
        <div class="col-lg-6 col-md-6">
            <p class="h2 text-danger">Restaurants</p>
            <p class="h4 text-monospace">${this.name}</p>
            <ul>
              <li class="h6 text-monospace">${this.address}, ${this.zipcode}, ${this.telNo}</li>
              <li class="h6 text-monospace">${this.webaddr}</li>
              <li class="no-list"> <img src="${this.teaserImg}"></li>
            <ul>
       </div>  
  `)
  }
}


class Events extends Place {
  public eventDate: string;
  public eventTime: string;
  public price:     number;

  constructor(name, address, zipcode, city, teaserImg, eventDate, eventTime, price) {
    super(name, address, zipcode, city, teaserImg);
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.price = price;
  }

  public display() {
    return(`
      <div class="col-lg-6 col-md-6">
            <p class="h2 text-danger">Events</p>
            <p class="h4 text-monospace">${this.name}</p>
            <ul>
              <li class="h6 text-monospace">${this.eventDate}, ${this.eventTime}</li>
              <li class="h6 text-monospace">${this.address}, ${this.zipcode}</li>
              <li class="h6 text-monospace">${this.price}</li>
              <li class="no-list"><img src="${this.teaserImg}"></li>
            <ul>
       </div>  
  `)
  }
}

  var charlesChurch = new Place('Karlskirche', 'Karlsplatz 1', 1010, 'Wien', 'img/karlskirche.jpg'),
      zoo = new Place('Wiener-Zoo', 'Maxingstraße 13b', 1030, 'Wien', 'img/zoo.jpg'),
      lemmonLeaf = new Restaurant('Lemon-Leaf', 'Kettenbrückengasse 19', 1050, 'Wien', 'img/lemmonleaf.png',
                  '+43(1)5812308', 'Thai restaurant', 'www.lemonleaf.at'),
      sixta = new Restaurant('SIXTA', 'Schönbrunner Straße 21', 1050, 'Wien', 'img/sixta.png',
                  '+43 1 58 528 56', 'Austrian food', 'http://www.sixta-restaurant.at/index.htm'),
      kristofferson = new Events('Kris-Kristofferson', 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 1150, 'Wien', 'img/kristofferson.jpg',
                  'Fr., 15.11.2019', '20:00', '&euro;&nbsp;'+58.5+'0'),
      lennyKravitz = new Events('Lenny-Kravitz', 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 1150, 'Wien', 'img/kravitz.jpg',
                  'Sat, 09.12.2019', '19:30', ' &euro;&nbsp;'+47.8+'0');

  var data = document.getElementById('data');
  var items = [charlesChurch, zoo, lemmonLeaf, sixta, kristofferson, lennyKravitz];

  for(var i=0; i < items.length; i++){
    data.innerHTML += items[i].display();
  }

//}); // end document-ready
