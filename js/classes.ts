class Place {
  public name:         string;
  public address:      string;
  public zipcode:      number;
  public city:         string;
  public teaserImg:    string;
  protected divId:     string;

  constructor(name, address, zipcode, city, teaserImg, divId, placeArry) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.teaserImg = teaserImg;
    this.divId = divId;
  }

  public function display(divId) {
    document.getElementById(divId).appendChild(`
      <div class="col-lg-5 media m-2 p-2" id="${name}">
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
      <div class="col-lg-5 media m-2 p-2" id="${name}">
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
      <div class="col-lg-5 media m-2 p-2" id="${name}">
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
