class Location {
  public name:      string;
  public address:   string;
  public zipcode:   number;
  public city:      string;
  public teaserImg: string;

  constructor(name, address, zipcode, city, teaserImg) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.teaserImg = teaserImg;
  }
}
