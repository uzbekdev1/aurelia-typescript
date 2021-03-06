import auhc = require("aurelia-http-client");

var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";

export class Flickr {
    static inject = [auhc.HttpClient];

    public heading: string;
    public images: Array<any>;

    constructor(private http: auhc.HttpClient) {
        this.heading = "Flickr";
        this.images = [];
    }

    activate() {
        return this.http.jsonp(url).then(response => {
            this.images = response.content.items;
        });
    }

    canDeactivate() {
        return confirm("Are you sure you want to leave?");
    }
}