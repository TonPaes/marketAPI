@RestController
@RequestMapping("/v1/restaurants")

public class RestaurantController {

    protected Logger logger = Logger.getLogger(RestaurantController.class.getName());
    protected RestaurantService restaurantService;

    @Autowired
    RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Restaurant>> findByName(@RequestParam("name") String name) {

        logger.info(String.format("Restaurant-service findByName() invoked:{} for {}",
                restaurantService.getClass.getName(name)));

        name = name.trim().toLowerCase();
        Collection<Restaurant> restaurants;

        try {
            restaurants = restaurantService.findByName(name);
        } catch (Exception e) {
            logger.log(level.warning, "Internal Error Raised by", e);
            return new ResponseEntity<Collection<Restaurant>>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return restaurants.size() > 0 ? new ResponseEntity<Collection<Restaurant>>(restaurants, HttpStatus.OK)
                : new ResponseEntity<Collection<Restaurant>>(HttpStatus.NO_CONTENT);

    }@RequestMapping(value=/{restaurant_id},method=RequestMethod.GET)

    public ResponseEntity<Collection<Restaurant>> findById(@ PathVariable("restaurant_id") String id){
        
        logger.info(string);
        Entity restaurant;
        
        try{  
            restarant = restaurantService.findById(id); 
        }catch(Exception e){
            logger.log(level.SEVERE, "Exception raised findById REST call", e);
            return new ResponseEntity<Entity>(HttpStatus.INTERNAL_SERVER_ERROR);    
        }
        return restaurant != null ? new ResponseEntity<Entity>(restaurant, HttpStatus.OK)
            : new ResponseEntity<Entity>(HttpStatus.NO_CONTENT);


    }
}