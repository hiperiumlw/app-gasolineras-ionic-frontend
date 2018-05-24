export class URIS{
    public LOGIN:string;
    public REGISTER:string;
    public API_FUELSTATION:string;
    public ADD_REVIEW:string;
    public GET_REVIEWS:string;
    constructor(private host:string){
        this.LOGIN = host+"/users/login";
        //this.FACEBOOK_LOGIN = host+"/users/facebook/login";
        this.REGISTER = host+"/users/register";
        this.API_FUELSTATION = host+"/api/fuelstation"
        this.ADD_REVIEW = host+"/api/reviews/add";
        this.GET_REVIEWS = host+"/api/reviews/"
    }
}