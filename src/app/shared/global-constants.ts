export class GlobalConstants{

    //message
    public static genericError: string ="Something went wrong. Please try again later"

    public static nameRegex : string ="[a-zA-Z0-9 ]*";

    public static emailRegex : string ="[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    // public static contactNumberRegex : string ="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}";

    public static contactNumberRegex : string = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";

    public static  error : string ="error";

    public static unauthorized: string ="You are not authorized to access this page."

    public static numberRegex : string ="^[0-9]+$";




}