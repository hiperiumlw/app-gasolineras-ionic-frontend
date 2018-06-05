export class URIS {
    public LOGIN: string;
    public REGISTER: string;
    public API_FUELSTATION: string;
    public ADD_REVIEW: string;
    public GET_REVIEWS_BY_FUELSTATION: string;
    public GET_REVIEWS_BY_USER: string;
    public GET_PENDING_REVIEWS: string;
    public VALIDATE_ALL_REVIEWS: string;
    public SAVE_FAVOURITE_TO_SERVER: string;
    constructor(private host: string) {
        this.LOGIN = host + "/users/login";
        //this.FACEBOOK_LOGIN = host+"/users/facebook/login";
        this.REGISTER = host + "/users/register";
        this.API_FUELSTATION = host + "/api/fuelstation";
        this.ADD_REVIEW = host + "/api/reviews/add";
        this.GET_REVIEWS_BY_FUELSTATION = host + "/api/reviews/fuelstation/";
        this.GET_REVIEWS_BY_USER = host + "/api/reviews/user/";
        this.GET_PENDING_REVIEWS = host + "/api/reviews/pending";
        this.VALIDATE_ALL_REVIEWS = host + "/api/reviews/validate";
        this.SAVE_FAVOURITE_TO_SERVER = host + "/api/favourites/save";
    }
}